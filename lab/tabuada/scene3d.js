import * as THREE from "../assets/vendor/three/three.module.min.js";

const canvas = document.querySelector("#mundo3d");
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(56, 1, .08, 150);
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "high-performance" });
renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.7));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = .94;

const hemi = new THREE.HemisphereLight(0xd8edff, 0x25283a, 1.7);
scene.add(hemi);
const sun = new THREE.DirectionalLight(0xfff0d2, 2.2);
sun.position.set(-7, 12, -5);
sun.castShadow = true;
sun.shadow.mapSize.set(1024, 1024);
sun.shadow.camera.left = -11; sun.shadow.camera.right = 11;
sun.shadow.camera.top = 12; sun.shadow.camera.bottom = -3;
sun.shadow.camera.near = 1; sun.shadow.camera.far = 34;
scene.add(sun);

const world = new THREE.Group();
const roadLayer = new THREE.Group();
const sceneryLayer = new THREE.Group();
const gatesLayer = new THREE.Group();
const itemLayer = new THREE.Group();
const playerLayer = new THREE.Group();
world.add(roadLayer, sceneryLayer, gatesLayer, itemLayer, playerLayer);
scene.add(world);

const materialCache = new Map();
const gateMaterialCache = new Map();
const panelMaterialCache = new Map();
const mat = (color, options = {}) => {
  const key = `${color}:${options.emissive || ""}:${options.emissiveIntensity ?? ""}:${options.metalness || 0}:${options.roughness ?? .68}:${options.transparent || false}:${options.opacity ?? 1}:${options.depthWrite ?? true}`;
  if (!materialCache.has(key)) {
    materialCache.set(key, new THREE.MeshStandardMaterial({
      color, roughness: options.roughness ?? .68, metalness: options.metalness || 0,
      emissive: options.emissive || 0x000000, emissiveIntensity: options.emissive ? (options.emissiveIntensity ?? .62) : 0,
      transparent: !!options.transparent, opacity: options.opacity ?? 1,
      depthWrite: options.depthWrite ?? true,
    }));
  }
  return materialCache.get(key);
};
const gateMat = (color) => {
  if (!gateMaterialCache.has(color)) gateMaterialCache.set(color, new THREE.MeshBasicMaterial({ color, toneMapped: false }));
  return gateMaterialCache.get(color);
};
const panelMat = (color) => {
  if (!panelMaterialCache.has(color)) panelMaterialCache.set(color, new THREE.MeshBasicMaterial({
    color, transparent: true, opacity: .075, depthWrite: false, side: THREE.DoubleSide, toneMapped: false,
  }));
  return panelMaterialCache.get(color);
};
const boxGeo = new THREE.BoxGeometry(1, 1, 1);
const cylGeo = new THREE.CylinderGeometry(1, 1, 1, 16);
const coneGeo = new THREE.ConeGeometry(1, 1, 16);
const sphereGeo = new THREE.SphereGeometry(1, 24, 14);
const wheelGeo = new THREE.CylinderGeometry(.34, .34, .3, 20);
wheelGeo.rotateZ(Math.PI / 2);
const gatePostGeo = new THREE.CapsuleGeometry(.052, 1.98, 5, 12);
const gateBeamGeo = new THREE.CapsuleGeometry(.052, 1.02, 5, 12);
const gatePanelGeo = new THREE.PlaneGeometry(1.08, 2.02);

function mesh(geometry, material, position, scale, parent, shadows = true) {
  const m = new THREE.Mesh(geometry, material);
  m.position.set(...position); m.scale.set(...scale);
  m.castShadow = shadows; m.receiveShadow = shadows;
  (parent || world).add(m);
  return m;
}

function roundedBody(material, position, scale, parent) {
  const body = mesh(sphereGeo, material, position, scale, parent);
  body.geometry.computeVertexNormals();
  return body;
}

function smoothLoftGeometry(sections, segments = 24) {
  const positions = [], indices = [];
  for (const [z, halfWidth, centerY, halfHeight] of sections) {
    for (let i = 0; i < segments; i++) {
      const angle = i / segments * Math.PI * 2;
      const curve = Math.cos(angle);
      positions.push(
        Math.sin(angle) * halfWidth,
        centerY + curve * halfHeight * (curve < 0 ? .58 : 1),
        z,
      );
    }
  }
  for (let ring = 0; ring < sections.length - 1; ring++) {
    for (let i = 0; i < segments; i++) {
      const next = (i + 1) % segments;
      const a = ring * segments + i, b = ring * segments + next;
      const c = (ring + 1) * segments + next, d = (ring + 1) * segments + i;
      indices.push(a, b, c, a, c, d);
    }
  }
  const firstCenter = positions.length / 3;
  positions.push(0, sections[0][2], sections[0][0]);
  const lastCenter = positions.length / 3;
  const last = sections[sections.length - 1];
  positions.push(0, last[2], last[0]);
  const endRing = (sections.length - 1) * segments;
  for (let i = 0; i < segments; i++) {
    const next = (i + 1) % segments;
    indices.push(firstCenter, next, i);
    indices.push(lastCenter, endRing + i, endRing + next);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geometry.setIndex(indices); geometry.computeVertexNormals();
  return geometry;
}

// Tubo com raio variável ao longo de uma curva. É o que dá forma à banana,
// ao rabo do crocodilo e ao focinho dele sem virar pilha de esferas.
function taperedTubeGeometry(points, radiusAt, steps = 30, segments = 16) {
  const curve = new THREE.CatmullRomCurve3(points.map((p) => new THREE.Vector3(...p)));
  const frames = curve.computeFrenetFrames(steps, false);
  const positions = [], indices = [];
  const point = new THREE.Vector3();
  for (let i = 0; i <= steps; i++) {
    curve.getPoint(i / steps, point);
    const normal = frames.normals[i], binormal = frames.binormals[i];
    const raio = radiusAt(i / steps);
    const rx = Array.isArray(raio) ? raio[0] : raio;
    const ry = Array.isArray(raio) ? raio[1] : raio;
    for (let j = 0; j < segments; j++) {
      const angle = j / segments * Math.PI * 2;
      const cos = Math.cos(angle) * rx, sin = Math.sin(angle) * ry;
      positions.push(
        point.x + normal.x * cos + binormal.x * sin,
        point.y + normal.y * cos + binormal.y * sin,
        point.z + normal.z * cos + binormal.z * sin,
      );
    }
  }
  for (let ring = 0; ring < steps; ring++) {
    for (let j = 0; j < segments; j++) {
      const next = (j + 1) % segments;
      const a = ring * segments + j, b = ring * segments + next;
      const c = (ring + 1) * segments + next, d = (ring + 1) * segments + j;
      indices.push(a, c, b, a, d, c);
    }
  }
  const startCenter = positions.length / 3;
  curve.getPoint(0, point); positions.push(point.x, point.y, point.z);
  const endCenter = positions.length / 3;
  curve.getPoint(1, point); positions.push(point.x, point.y, point.z);
  const endRing = steps * segments;
  for (let j = 0; j < segments; j++) {
    const next = (j + 1) % segments;
    indices.push(startCenter, j, next);
    indices.push(endCenter, endRing + next, endRing + j);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geometry.setIndex(indices); geometry.computeVertexNormals();
  return geometry;
}

// ===================================================================
// Peças compartilhadas pelos mascotes. Olho, boca e membro articulado
// ficam num lugar só para todos terem o mesmo estilo de desenho.
// ===================================================================
const eyeWhiteMat = mat("#fdfdff", { roughness: .26 });
const eyeGlintMat = mat("#ffffff", { emissive: "#dfe9f5", emissiveIntensity: .5, roughness: .1 });
const eyePupilMat = mat("#191220", { roughness: .3 });

// A câmera fica atrás do corredor, então o rosto é modelado virado para -Z:
// é o único jeito de o jogador ver a expressão do personagem correndo.
function cartoonEye(parent, position, size, options = {}) {
  const eye = new THREE.Group();
  eye.position.set(...position);
  parent.add(eye);
  mesh(sphereGeo, eyeWhiteMat, [0, 0, 0], [size, size * 1.14, size * .72], eye, false);
  // A pupila precisa avançar para fora da esfera branca, senão some sob a
  // superfície e o personagem fica com cara de olho vazio.
  mesh(sphereGeo, eyePupilMat, [(options.lookX || 0) * size * .22, (options.lookY || 0) * size * .22, -size * .46],
    [size * .58, size * .62, size * .5], eye, false);
  mesh(sphereGeo, eyeGlintMat, [-size * .24, size * .34, -size * .78], [size * .2, size * .22, size * .16], eye, false);
  if (options.lid) {
    const lid = mesh(sphereGeo, options.lid, [0, size * .34, -size * .04], [size * 1.07, size * .68, size * .9], eye, false);
    lid.rotation.x = -.26;
  }
  return eye;
}

function smileArc(parent, position, radius, thickness, material, arc = Math.PI * .84) {
  const m = mesh(new THREE.TorusGeometry(radius, thickness, 8, 22, arc), material, position, [1, 1, 1], parent, false);
  m.rotation.z = Math.PI * 1.5 - arc / 2;
  return m;
}

// Membro com pivô na articulação: assim o balanço gira no ombro/quadril e
// não no meio da perna, que era o que deixava a corrida esquisita.
function limbPivot(parent, position) {
  const pivot = new THREE.Group();
  pivot.position.set(...position);
  parent.add(pivot);
  return pivot;
}

function createCar(color) {
  const g = new THREE.Group();
  const bodyRig = new THREE.Group(); g.add(bodyRig);
  const base = color || "#c62436";
  const lacquer = (hex, extra = {}) => new THREE.MeshPhysicalMaterial({
    color: hex, metalness: .3, roughness: .17, clearcoat: 1, clearcoatRoughness: .06, ...extra,
  });
  const paint = lacquer(base);
  const paintLight = lacquer(tint(base, .07));
  const paintDark = lacquer(tint(base, -.12));
  const stripe = lacquer("#f6fbff", { metalness: .18, roughness: .22 });
  const chrome = mat("#e9eff2", { metalness: .82, roughness: .11 });
  const chromeShade = mat("#a8b2b8", { metalness: .74, roughness: .2 });
  const dark = mat("#0a0d11", { metalness: .35, roughness: .42 });
  const grille = mat("#171c20", { metalness: .68, roughness: .3 });
  const rubber = mat("#171b21", { roughness: .82 });
  const ivory = mat("#efe9dd", { roughness: .44 });
  const leather = mat("#8d5f38", { roughness: .66 });
  const glass = new THREE.MeshPhysicalMaterial({
    color: 0xc6e3ec, metalness: .05, roughness: .06, transmission: .55,
    transparent: true, opacity: .58, depthWrite: false,
  });
  const tailRed = mat("#ff2b42", { emissive: "#ff1024", emissiveIntensity: 1.05, roughness: .12 });
  const amber = mat("#ffb340", { emissive: "#ff7a00", emissiveIntensity: .8, roughness: .16 });
  const headlight = mat("#f6fcff", { emissive: "#9fc3d4", emissiveIntensity: .7, roughness: .1 });

  // Carroceria em uma peça só. A cintura afina na traseira para as rodas
  // aparecerem por fora — antes o casco cobria os pneus e o carro virava um
  // comprimido escuro na tela.
  mesh(smoothLoftGeometry([
    [-1.88, .68, .47, .2], [-1.62, .82, .48, .27],
    [-1.14, .86, .47, .31], [-.38, .87, .45, .31],
    [.46, .82, .43, .28], [1.3, .69, .43, .22],
    [1.84, .38, .43, .13],
  ], 28), paint, [0, 0, 0], [1, 1, 1], bodyRig);
  mesh(boxGeo, dark, [0, .18, -.02], [1.6, .1, 3.4], bodyRig);

  // Para-lamas sobre as quatro rodas, soleira cromada e vinco da porta.
  for (const side of [-1, 1]) {
    roundedBody(paintLight, [side * .8, .47, 1.12], [.2, .14, .66], bodyRig);
    roundedBody(paintLight, [side * .82, .49, -1.12], [.21, .15, .64], bodyRig);
    const rocker = mesh(new THREE.CapsuleGeometry(.036, 1.3, 4, 10), chrome, [side * .95, .3, 0], [1, 1, 1], bodyRig, false);
    rocker.rotation.x = Math.PI / 2;
    const doorSeam = mesh(new THREE.CapsuleGeometry(.009, .74, 3, 8), chromeShade, [side * 1, .52, -.2], [1, 1, 1], bodyRig, false);
    doorSeam.rotation.x = Math.PI / 2;
    const handle = mesh(new THREE.CapsuleGeometry(.02, .14, 3, 8), chrome, [side * 1.01, .62, -.4], [1, 1, 1], bodyRig, false);
    handle.rotation.x = Math.PI / 2;
  }

  // Faixa dupla de competição, do capô até a ponta da traseira. À distância
  // da câmera é o detalhe que mais ajuda a ler a direção do carro.
  for (const side of [-1, 1]) {
    const faixaFrente = mesh(boxGeo, stripe, [side * .17, .672, 1], [.15, .03, 1.4], bodyRig);
    faixaFrente.rotation.x = .086;
    const faixaTras = mesh(boxGeo, stripe, [side * .17, .748, -1.42], [.15, .03, .9], bodyRig);
    faixaTras.rotation.x = -.125;
  }

  // Capô longo com nervura central e emblema redondo.
  const hood = roundedBody(paintLight, [0, .59, .92], [.64, .075, .84], bodyRig);
  hood.rotation.x = -.035;
  const hoodSpine = mesh(new THREE.CapsuleGeometry(.012, 1.15, 3, 8), chromeShade, [0, .665, .95], [1, 1, 1], bodyRig, false);
  hoodSpine.rotation.x = Math.PI / 2;
  mesh(new THREE.CylinderGeometry(.038, .038, .02, 18), chrome, [0, .665, 1.58], [1, 1, 1], bodyRig, false);

  // Cockpit aberto: dois bancos, santantônios cromados e para-brisa baixo.
  // Sem a capota de pano a traseira ganha profundidade e o carro deixa de
  // parecer uma caixa bege colada no casco.
  mesh(boxGeo, mat("#2a1f22", { roughness: .7 }), [0, .6, -.2], [1.3, .04, 1.05], bodyRig, false);
  // Tampa atrás dos bancos, na cor da carroceria: sem ela o cockpit virava um
  // buraco preto ocupando metade da traseira.
  const tampa = roundedBody(paint, [0, .68, -1.14], [.74, .06, .42], bodyRig);
  tampa.rotation.x = .05;
  for (const side of [-1, 1]) {
    const banco = roundedBody(leather, [side * .34, .67, -.56], [.24, .1, .24], bodyRig);
    banco.rotation.x = .1;
    const encosto = roundedBody(leather, [side * .34, .78, -.74], [.21, .13, .08], bodyRig);
    encosto.rotation.x = .16;
    const friso = mesh(new THREE.CapsuleGeometry(.014, .32, 3, 8), chromeShade, [side * .34, .88, -.75], [1, 1, 1], bodyRig, false);
    friso.rotation.z = Math.PI / 2;
  }
  const volante = mesh(new THREE.TorusGeometry(.13, .022, 10, 22), dark, [-.34, .76, -.1], [1, 1, 1], bodyRig, false);
  volante.rotation.x = 1.25;
  const painel = roundedBody(paintDark, [0, .74, .12], [.66, .1, .18], bodyRig);
  const windshield = mesh(boxGeo, glass, [0, .93, -.02], [1.06, .34, .022], bodyRig, false);
  windshield.rotation.x = -.3;
  for (const side of [-1, 1]) {
    const moldura = mesh(new THREE.CapsuleGeometry(.017, .36, 3, 8), chrome, [side * .53, .93, -.02], [1, 1, 1], bodyRig, false);
    moldura.rotation.z = side * .13; moldura.rotation.x = -.3;
    const mirrorStem = mesh(new THREE.CapsuleGeometry(.012, .1, 3, 7), chrome, [side * .74, .68, .22], [1, 1, 1], bodyRig, false);
    mirrorStem.rotation.z = side * .78;
    roundedBody(chrome, [side * .82, .71, .19], [.07, .045, .032], bodyRig);
  }

  // Frente, que aparece na garagem quando o carro gira.
  roundedBody(chrome, [0, .42, 1.8], [.5, .14, .024], bodyRig);
  roundedBody(grille, [0, .42, 1.825], [.43, .095, .018], bodyRig, false);
  for (const x of [-.6, .6]) {
    const rim = mesh(new THREE.CylinderGeometry(.21, .21, .055, 28), chrome, [x, .59, 1.62], [1, 1, 1], bodyRig);
    rim.rotation.x = Math.PI / 2;
    const lamp = mesh(new THREE.CylinderGeometry(.165, .165, .064, 28), headlight, [x, .59, 1.655], [1, 1, 1], bodyRig, false);
    lamp.rotation.x = Math.PI / 2;
  }
  const frontBumper = mesh(new THREE.CapsuleGeometry(.042, 1.4, 4, 12), chrome, [0, .26, 1.86], [1, 1, 1], bodyRig);
  frontBumper.rotation.z = Math.PI / 2;
  for (const x of [-.36, .36]) mesh(new THREE.CapsuleGeometry(.038, .24, 4, 10), chrome, [x, .35, 1.89], [1, 1, 1], bodyRig);
  for (const x of [-.78, .78]) mesh(sphereGeo, amber, [x, .34, 1.66], [.06, .052, .025], bodyRig, false);

  // Traseira: é o que a câmera enquadra o tempo todo, então concentra o
  // contraste. Lanternas duplas, placa iluminada e escapes gêmeos.
  roundedBody(paintDark, [0, .62, -1.5], [.5, .05, .2], bodyRig);
  const trunkLine = mesh(new THREE.CapsuleGeometry(.009, .84, 3, 8), chromeShade, [0, .7, -1.52], [1, 1, 1], bodyRig, false);
  trunkLine.rotation.z = Math.PI / 2;
  for (const side of [-1, 1]) {
    for (const [y, raio, lente] of [[.52, .115, tailRed], [.31, .07, amber]]) {
      const rim = mesh(new THREE.CylinderGeometry(raio + .026, raio + .026, .04, 20), chrome, [side * .66, y, -1.78], [1, 1, 1], bodyRig, false);
      rim.rotation.x = Math.PI / 2;
      const lamp = mesh(new THREE.CylinderGeometry(raio, raio, .06, 20), lente, [side * .66, y, -1.808], [1, 1, 1], bodyRig, false);
      lamp.rotation.x = Math.PI / 2;
    }
  }
  const badge = mesh(new THREE.OctahedronGeometry(.04, 1), chrome, [0, .6, -1.81], [1, .62, .28], bodyRig, false);
  badge.rotation.z = Math.PI / 4;
  mesh(boxGeo, dark, [0, .4, -1.8], [.38, .14, .016], bodyRig, false);
  mesh(boxGeo, ivory, [0, .4, -1.822], [.3, .09, .01], bodyRig, false);
  const rearBumper = mesh(new THREE.CapsuleGeometry(.042, 1.34, 4, 12), chrome, [0, .23, -1.86], [1, 1, 1], bodyRig);
  rearBumper.rotation.z = Math.PI / 2;
  for (const x of [-.42, .42]) mesh(new THREE.CapsuleGeometry(.038, .24, 4, 10), chrome, [x, .32, -1.89], [1, 1, 1], bodyRig);
  for (const x of [-.3, .3]) {
    const escape = mesh(new THREE.CylinderGeometry(.055, .055, .26, 16), chromeShade, [x, .12, -1.78], [1, 1, 1], bodyRig);
    escape.rotation.x = Math.PI / 2;
    const bocal = mesh(new THREE.CylinderGeometry(.037, .037, .02, 16), dark, [x, .12, -1.912], [1, 1, 1], bodyRig, false);
    bocal.rotation.x = Math.PI / 2;
  }

  // Rodas: o conjunto inteiro gira junto, com faixa branca e calota.
  const wheels = [], frontWheels = [];
  for (const side of [-1, 1]) for (const z of [-1.1, 1.14]) {
    const carrier = new THREE.Group(); carrier.position.set(side * .89, .34, z); g.add(carrier);
    const assembly = new THREE.Group(); carrier.add(assembly); wheels.push(assembly);
    mesh(wheelGeo, rubber, [0, 0, 0], [.85, 1, 1], assembly);
    const outerX = side * .135;
    const whitewall = mesh(new THREE.TorusGeometry(.255, .028, 10, 28), ivory, [outerX, 0, 0], [1, 1, 1], assembly, false);
    whitewall.rotation.y = Math.PI / 2;
    const hub = mesh(new THREE.CylinderGeometry(.145, .145, .034, 24), chrome, [side * .155, 0, 0], [1, 1, 1], assembly, false);
    hub.rotation.z = Math.PI / 2;
    for (let raio = 0; raio < 5; raio++) {
      const spoke = mesh(new THREE.BoxGeometry(.028, .24, .028), chromeShade, [side * .15, 0, 0], [1, 1, 1], assembly, false);
      spoke.rotation.x = raio / 5 * Math.PI; spoke.rotation.z = Math.PI / 2;
    }
    roundedBody(chromeShade, [side * .175, 0, 0], [.03, .1, .1], assembly);
    if (z > 0) frontWheels.push(carrier);
  }
  g.userData = { type: "carro", wheels, frontWheels, bodyRig, wheelSpin: 0, steer: 0 };
  return g;
}

function createRocket(color) {
  const g = new THREE.Group();
  const accentColor = color || "#ff5d5d";
  const shell = mat("#f1f5fa", { metalness: .42, roughness: .24 });
  const shellShade = mat("#c2ccd8", { metalness: .45, roughness: .3 });
  const accent = mat(accentColor, { metalness: .26, roughness: .3 });
  const accentDark = mat(tint(accentColor, -.13), { metalness: .3, roughness: .34 });
  const chrome = mat("#dfe7ee", { metalness: .9, roughness: .12 });
  const dark = mat("#232c3c", { metalness: .5, roughness: .32 });
  const glassBlue = mat("#38c6f2", { emissive: "#0e6f93", emissiveIntensity: .55, metalness: .2, roughness: .07 });

  // Fuselagem em uma curva só: ombro largo embaixo, cintura no meio e ogiva
  // afilada. Antes era um cilindro reto com um cone em cima.
  mesh(taperedTubeGeometry([
    [0, .12, 0], [0, .55, 0], [0, 1.5, 0], [0, 2.5, 0], [0, 3.05, 0],
  ], (t) => .48 + Math.sin(Math.min(t, 1) * Math.PI * .82) * .22, 22, 26), shell, [0, 0, 0], [1, 1, 1], g);
  mesh(new THREE.ConeGeometry(.53, 1.3, 26), accent, [0, 3.62, 0], [1, 1, 1], g);
  mesh(sphereGeo, accent, [0, 4.28, 0], [.06, .12, .06], g, false);

  // Faixas: uma na cintura, outra na saia, mais o anel do bocal.
  mesh(new THREE.CylinderGeometry(.72, .705, .36, 28), accent, [0, 1.95, 0], [1, 1, 1], g, false);
  mesh(new THREE.CylinderGeometry(.725, .725, .07, 28), accentDark, [0, 1.71, 0], [1, 1, 1], g, false);
  mesh(new THREE.TorusGeometry(.63, .055, 10, 26), chrome, [0, 2.94, 0], [1, 1, 1], g).rotation.x = Math.PI / 2;
  mesh(new THREE.CylinderGeometry(.68, .46, .38, 26), shellShade, [0, .24, 0], [1, 1, 1], g);
  mesh(new THREE.TorusGeometry(.66, .07, 10, 26), chrome, [0, .44, 0], [1, 1, 1], g).rotation.x = Math.PI / 2;
  mesh(new THREE.CylinderGeometry(.44, .3, .2, 22), dark, [0, .02, 0], [1, 1, 1], g);

  // Escotilha com aro cromado, vidro azul e rebites.
  const windowFrame = mesh(new THREE.CylinderGeometry(.31, .31, .1, 22), chrome, [0, 2.42, -.5], [1, 1, 1], g);
  windowFrame.rotation.x = Math.PI / 2;
  const windowGlass = mesh(new THREE.SphereGeometry(.245, 22, 14), glassBlue, [0, 2.42, -.58], [1, 1, .45], g);
  mesh(sphereGeo, mat("#ffffff", { emissive: "#b9d8ea", emissiveIntensity: .6 }), [-.09, 2.52, -.66], [.06, .07, .03], g, false);
  for (let i = 0; i < 8; i++) {
    const a = i / 8 * Math.PI * 2;
    mesh(sphereGeo, chrome, [Math.cos(a) * .29, 2.42 + Math.sin(a) * .29, -.55], [.022, .022, .022], g, false);
  }

  // Três aletas, com uma escondida atrás do casco: as outras duas ficam de
  // perfil para a câmera e é isso que faz a silhueta ler como foguete. Com
  // quatro, uma delas apontava para a lente e virava um risco no meio.
  const finShape = new THREE.Shape();
  finShape.moveTo(0, 1.05);
  finShape.quadraticCurveTo(.3, .5, .74, -.1);
  finShape.quadraticCurveTo(.86, -.32, .62, -.32);
  finShape.lineTo(.16, -.32);
  finShape.quadraticCurveTo(0, -.28, 0, 0);
  const finGeo = new THREE.ExtrudeGeometry(finShape, {
    depth: .09, bevelEnabled: true, bevelSize: .028, bevelThickness: .028, bevelSegments: 2, curveSegments: 8,
  });
  finGeo.translate(0, 0, -.045);
  for (let i = 0; i < 3; i++) {
    const suporte = new THREE.Group();
    suporte.rotation.y = Math.PI + i * Math.PI * 2 / 3;
    g.add(suporte);
    mesh(finGeo, i ? accent : accentDark, [.42, .3, 0], [1, 1, 1], suporte);
  }

  // Propulsão em três camadas: brasa, língua de fogo e um halo aditivo que
  // acende a pista atrás do foguete.
  const flame = mesh(new THREE.ConeGeometry(.44, 1.05, 20), mat("#ff8c21", { emissive: "#ff5a13", emissiveIntensity: 1.2 }), [0, -.42, 0], [1, 1, 1], g, false);
  flame.rotation.x = Math.PI;
  const core = mesh(new THREE.ConeGeometry(.23, .68, 18), mat("#fff6c8", { emissive: "#ffc329", emissiveIntensity: 1.6 }), [0, -.28, 0], [1, 1, 1], g, false);
  core.rotation.x = Math.PI;
  g.userData = { type: "foguete", flame, core, windowGlass };
  return g;
}

function createMascot(color) {
  const g = new THREE.Group();
  const base = color || "#5ec8f5";
  const shirt = mat(base, { roughness: .5 });
  const shirtDark = mat(tint(base, -.12), { roughness: .55 });
  const skin = mat("#ffcfa2", { roughness: .66 });
  const hair = mat("#3a2318", { roughness: .8 });
  const shorts = mat("#26314a", { roughness: .68 });
  const sock = mat("#f2f5fb", { roughness: .6 });
  const shoe = mat("#fafcff", { roughness: .4 });
  const shoeToe = mat("#ff5470", { roughness: .48 });
  const mouth = mat("#7d2434", { roughness: .5 });

  // Tronco com gola e barra da camiseta em vez de uma cápsula lisa.
  mesh(new THREE.CapsuleGeometry(.32, .44, 8, 20), shirt, [0, 1.02, 0], [1, 1, .82], g);
  const gola = mesh(new THREE.TorusGeometry(.17, .05, 10, 22), shirtDark, [0, 1.33, -.02], [1, 1, .9], g, false);
  gola.rotation.x = Math.PI / 2;
  const barra = mesh(new THREE.TorusGeometry(.305, .048, 10, 24), shirtDark, [0, .76, 0], [1, 1, .82], g, false);
  barra.rotation.x = Math.PI / 2;
  roundedBody(shorts, [0, .64, 0], [.33, .18, .28], g);

  // Cabeça grande, estilo chibi: é o que faz o personagem continuar legível
  // com dois centímetros de altura na tela.
  const cabeca = roundedBody(skin, [0, 1.76, 0], [.45, .46, .42], g);
  const cabelo = roundedBody(hair, [0, 1.85, .04], [.465, .42, .43], g);
  const franja = roundedBody(hair, [0, 1.9, -.24], [.43, .2, .24], g);
  franja.rotation.x = .34;
  mesh(sphereGeo, hair, [0, 2.2, .05], [.12, .13, .11], g, false);
  for (const side of [-1, 1]) {
    mesh(sphereGeo, skin, [side * .44, 1.74, .02], [.07, .12, .09], g, false);
    cartoonEye(g, [side * .17, 1.74, -.34], .145, { lookY: -.12 });
    const sobrancelha = mesh(boxGeo, hair, [side * .18, 1.98, -.35], [.13, .03, .05], g, false);
    sobrancelha.rotation.z = side * .22;
  }
  mesh(sphereGeo, skin, [0, 1.64, -.41], [.075, .065, .065], g, false);
  smileArc(g, [0, 1.58, -.38], .15, .033, mouth);
  for (const side of [-1, 1]) {
    mesh(sphereGeo, mat("#ff9d9d", { roughness: .6 }), [side * .34, 1.62, -.29], [.08, .055, .04], g, false);
  }

  // Braços e pernas com pivô no ombro/quadril, mãos e tênis.
  const bracos = {}, pernas = {};
  for (const side of [-1, 1]) {
    const braco = limbPivot(g, [side * .36, 1.22, 0]);
    const upper = mesh(new THREE.CapsuleGeometry(.085, .34, 5, 12), skin, [side * .1, -.24, -.02], [1, 1, 1], braco);
    upper.rotation.z = side * .2;
    const manga = mesh(new THREE.CapsuleGeometry(.115, .11, 5, 12), shirt, [side * .04, -.06, 0], [1, 1, 1], braco, false);
    manga.rotation.z = side * .2;
    mesh(sphereGeo, skin, [side * .17, -.46, -.03], [.105, .1, .1], braco);
    bracos[side] = braco;

    const perna = limbPivot(g, [side * .17, .58, 0]);
    mesh(new THREE.CapsuleGeometry(.115, .28, 5, 12), skin, [0, -.24, 0], [1, 1, 1], perna);
    mesh(new THREE.CylinderGeometry(.12, .115, .16, 14), sock, [0, -.42, 0], [1, 1, 1], perna, false);
    const tenis = roundedBody(shoe, [0, -.53, -.06], [.13, .08, .21], perna);
    mesh(sphereGeo, shoeToe, [0, -.53, -.19], [.115, .06, .07], perna, false);
    pernas[side] = perna;
  }
  g.userData = { type: "mascote", limbs: [bracos[-1], pernas[-1], pernas[1], bracos[1]] };
  return g;
}

function createBanana() {
  const g = new THREE.Group();
  const casca = mat("#ffd93b", { roughness: .38 });
  const cascaClara = mat("#ffe98a", { roughness: .34 });
  const ponta = mat("#6b4a1c", { roughness: .7 });
  const luva = mat("#fbfdff", { roughness: .4 });
  const meia = mat("#2b3450", { roughness: .6 });
  const tenis = mat("#ff4d6d", { roughness: .44 });
  const mouth = mat("#7a2c1e", { roughness: .5 });

  // O corpo é um tubo curvo com raio variável: crescente de verdade, com as
  // duas pontas afinando. A versão anterior era um pedaço de rosca.
  const trilho = [
    [-.1, .48, 0], [.16, .84, 0], [.26, 1.3, 0], [.16, 1.76, 0], [-.1, 2.04, 0],
  ];
  const corpo = mesh(taperedTubeGeometry(trilho, (t) => {
    const cheio = Math.sin(Math.PI * Math.min(Math.max(t, 0), 1)) ** .5;
    return [.34 * cheio + .03, .3 * cheio + .03];
  }, 28, 18), casca, [0, 0, 0], [1, 1, 1], g);
  // Faceta clara na frente para a banana não ficar chapada sob a luz.
  mesh(taperedTubeGeometry(trilho, (t) => {
    const cheio = Math.sin(Math.PI * Math.min(Math.max(t, 0), 1)) ** .5;
    return [.3 * cheio + .02, .27 * cheio + .02];
  }, 28, 18), cascaClara, [0, 0, -.05], [1, 1, 1], g, false);
  mesh(sphereGeo, ponta, [-.11, .44, 0], [.055, .07, .055], g, false);
  const cabinho = mesh(new THREE.CylinderGeometry(.045, .07, .17, 10), ponta, [-.12, 2.11, 0], [1, 1, 1], g);
  cabinho.rotation.z = -.2;

  // Rosto na barriga do crescente, virado para a câmera.
  for (const side of [-1, 1]) cartoonEye(g, [.2 + side * .16, 1.42, -.24], .14, { lookY: -.1 });
  smileArc(g, [.2, 1.24, -.27], .15, .032, mouth);
  for (const side of [-1, 1]) {
    mesh(sphereGeo, mat("#ff9db4", { roughness: .55 }), [.2 + side * .31, 1.28, -.19], [.08, .055, .04], g, false);
  }

  const bracos = {}, pernas = {};
  for (const side of [-1, 1]) {
    const braco = limbPivot(g, [.1 + side * .3, 1.28, 0]);
    const gomo = mesh(new THREE.CapsuleGeometry(.058, .32, 5, 10), casca, [side * .1, -.2, 0], [1, 1, 1], braco);
    gomo.rotation.z = side * .3;
    mesh(sphereGeo, luva, [side * .21, -.38, 0], [.1, .095, .095], braco);
    bracos[side] = braco;

    const perna = limbPivot(g, [side * .17, .56, 0]);
    mesh(new THREE.CapsuleGeometry(.075, .26, 5, 10), meia, [0, -.2, 0], [1, 1, 1], perna);
    const pe = roundedBody(tenis, [0, -.42, -.06], [.12, .08, .2], perna);
    mesh(sphereGeo, luva, [0, -.45, -.13], [.11, .045, .1], perna, false);
    pernas[side] = perna;
  }
  g.userData = { type: "mascote", limbs: [bracos[-1], pernas[-1], pernas[1], bracos[1]] };
  return g;
}

function createCrocodile() {
  const g = new THREE.Group();
  const pele = mat("#4fb867", { roughness: .55 });
  const peleEsc = mat("#2f8148", { roughness: .6 });
  const barriga = mat("#d9e88c", { roughness: .58 });
  const asa = mat("#cfe6f5", { metalness: .45, roughness: .3 });
  const asaBorda = mat("#7fa6c0", { metalness: .5, roughness: .28 });
  const dente = mat("#fbfdff", { roughness: .3 });
  const boca = mat("#a1364a", { roughness: .55 });
  const narina = mat("#1d3325", { roughness: .5 });

  // Corpo de pé, com barriga clara aparecendo de frente.
  mesh(new THREE.CapsuleGeometry(.42, .5, 8, 20), pele, [0, 1.02, 0], [1, 1, .88], g);
  roundedBody(barriga, [0, .98, -.3], [.3, .38, .18], g, false);
  for (let i = 0; i < 4; i++) {
    const placa = mesh(new THREE.TorusGeometry(.16 - i * .02, .035, 8, 16, Math.PI), barriga, [0, .76 + i * .19, -.33], [1, 1, .6], g, false);
    placa.rotation.z = Math.PI;
  }

  // Rabo grosso saindo para trás e subindo na ponta.
  mesh(taperedTubeGeometry([
    [0, .78, .3], [0, .72, .78], [0, .82, 1.2], [0, 1.06, 1.5],
  ], (t) => .3 - t * .24, 18, 14), peleEsc, [0, 0, 0], [1, 1, 1], g);

  // Crista de escamas da nuca até o rabo.
  for (let i = 0; i < 7; i++) {
    const t = i / 6;
    const espinho = mesh(coneGeo, peleEsc, [0, 1.3 - t * .5 + Math.sin(t * 3) * .06, .18 + t * 1.1], [.09 - t * .04, .16 - t * .06, .09 - t * .04], g, false);
    espinho.rotation.x = -.5 - t * .5;
  }

  // Cabeça com focinho comprido, mandíbula, dentes e narinas.
  const cabeca = roundedBody(pele, [0, 1.62, -.08], [.4, .34, .42], g);
  const focinho = mesh(taperedTubeGeometry([
    [0, 1.62, -.3], [0, 1.6, -.62], [0, 1.58, -.92],
  ], (t) => [.3 - t * .1, .19 - t * .07], 12, 14), pele, [0, 0, 0], [1, 1, 1], g);
  const mandibula = mesh(taperedTubeGeometry([
    [0, 1.44, -.28], [0, 1.42, -.6], [0, 1.42, -.88],
  ], (t) => [.27 - t * .09, .1 - t * .03], 12, 14), peleEsc, [0, 0, 0], [1, 1, 1], g);
  roundedBody(boca, [0, 1.5, -.55], [.24, .04, .3], g, false);
  for (let i = 0; i < 5; i++) {
    const z = -.36 - i * .13;
    const largura = .24 - i * .028;
    for (const side of [-1, 1]) {
      const cima = mesh(coneGeo, dente, [side * largura, 1.5, z], [.045, .1, .045], g, false);
      cima.rotation.x = Math.PI;
      mesh(coneGeo, dente, [side * largura, 1.46, z - .06], [.04, .09, .04], g, false);
    }
  }
  for (const side of [-1, 1]) {
    mesh(sphereGeo, narina, [side * .09, 1.68, -.9], [.035, .03, .025], g, false);
    cartoonEye(g, [side * .21, 1.92, -.24], .15, { lookY: -.1, lid: peleEsc });
  }

  // Asas de avião nas costas, o exagero que dá nome ao bicho. São sólidas e
  // enflechadas para trás: como triângulos chapados elas cruzavam na frente
  // do focinho e o bicho ficava sem cara.
  const asaShape = new THREE.Shape();
  asaShape.moveTo(0, .34);
  asaShape.quadraticCurveTo(.7, .16, 1.16, -.04);
  asaShape.lineTo(1.2, -.24);
  asaShape.quadraticCurveTo(.6, -.32, 0, -.38);
  const asaGeo = new THREE.ExtrudeGeometry(asaShape, {
    depth: .09, bevelEnabled: true, bevelSize: .022, bevelThickness: .022, bevelSegments: 2, curveSegments: 6,
  });
  asaGeo.translate(0, 0, -.045);
  asaGeo.rotateX(-Math.PI / 2);
  for (const side of [-1, 1]) {
    const suporte = limbPivot(g, [side * .28, 1.22, .3]);
    suporte.rotation.z = side * .3;
    mesh(asaGeo, asa, [0, 0, 0], [side * .82, 1, .82], suporte);
    const borda = mesh(new THREE.CapsuleGeometry(.032, .88, 4, 10), asaBorda, [side * .47, .04, -.14], [1, 1, 1], suporte, false);
    borda.rotation.z = Math.PI / 2; borda.rotation.y = side * .26;
    const winglet = mesh(boxGeo, asaBorda, [side * .95, .14, -.02], [.055, .26, .28], suporte);
    winglet.rotation.z = side * -.2;
  }

  const bracos = {}, pernas = {};
  for (const side of [-1, 1]) {
    const braco = limbPivot(g, [side * .42, 1.18, -.06]);
    mesh(new THREE.CapsuleGeometry(.085, .22, 5, 10), pele, [side * .06, -.16, 0], [1, 1, 1], braco);
    const mao = roundedBody(peleEsc, [side * .1, -.32, -.04], [.09, .07, .11], braco);
    bracos[side] = braco;

    const perna = limbPivot(g, [side * .24, .62, 0]);
    mesh(new THREE.CapsuleGeometry(.14, .22, 5, 12), pele, [0, -.2, 0], [1, 1, 1], perna);
    const pata = roundedBody(peleEsc, [0, -.4, -.1], [.16, .08, .24], perna);
    for (const dedo of [-1, 0, 1]) {
      const garra = mesh(coneGeo, dente, [dedo * .09, -.4, -.32], [.035, .09, .035], perna, false);
      garra.rotation.x = -Math.PI / 2;
    }
    pernas[side] = perna;
  }
  g.userData = { type: "mascote", limbs: [bracos[-1], pernas[-1], pernas[1], bracos[1]] };
  return g;
}

function createCappuccino() {
  const g = new THREE.Group();
  const louca = mat("#fdfaf4", { metalness: .06, roughness: .26 });
  const loucaSombra = mat("#ded6c9", { metalness: .06, roughness: .3 });
  const ouro = mat("#e8c169", { metalness: .82, roughness: .18 });
  const espuma = mat("#f3e2c6", { roughness: .55 });
  const cafe = mat("#6b3a20", { roughness: .5 });
  const tutu = mat("#ffb0d2", { roughness: .52 });
  const tutuClaro = mat("#ffe0ee", { roughness: .5 });
  const sapatilha = mat("#ff7fae", { roughness: .45 });
  const fita = mat("#ff7fae", { roughness: .5 });
  const pele = mat("#f6d8bd", { roughness: .6 });
  const mouth = mat("#8d3141", { roughness: .5 });
  const vapor = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: .18, depthWrite: false, toneMapped: false });

  // Xícara: corpo cônico, pé, aro dourado e asa. É o tronco da personagem.
  // Ela fica alta o bastante para as pernas aparecerem embaixo do tutu.
  mesh(new THREE.CylinderGeometry(.54, .38, 1.1, 26), louca, [0, 1.24, 0], [1, 1, 1], g);
  mesh(new THREE.CylinderGeometry(.4, .32, .1, 24), loucaSombra, [0, .68, 0], [1, 1, 1], g, false);
  mesh(new THREE.TorusGeometry(.54, .04, 10, 28), ouro, [0, 1.79, 0], [1, 1, 1], g).rotation.x = Math.PI / 2;
  mesh(new THREE.TorusGeometry(.47, .022, 8, 26), ouro, [0, .92, 0], [1, 1, 1], g, false).rotation.x = Math.PI / 2;
  mesh(new THREE.CylinderGeometry(.53, .515, .13, 26), tutu, [0, 1.67, 0], [1, 1, 1], g, false);
  const asa = mesh(new THREE.TorusGeometry(.29, .08, 12, 24, Math.PI * 1.45), louca, [.58, 1.28, 0], [1, 1, 1], g);
  asa.rotation.y = Math.PI / 2; asa.rotation.z = -.35;

  // Espuma com coração de latte art e dois fios de vapor.
  mesh(new THREE.CylinderGeometry(.51, .51, .07, 26), espuma, [0, 1.78, 0], [1, 1, 1], g, false);
  for (const side of [-1, 1]) mesh(sphereGeo, cafe, [side * .11, 1.82, .06], [.11, .03, .11], g, false);
  const bico = mesh(coneGeo, cafe, [0, 1.82, -.16], [.17, .28, .04], g, false);
  bico.rotation.x = -Math.PI / 2;
  for (const side of [-1, 1]) {
    mesh(taperedTubeGeometry([
      [side * .18, 1.85, 0], [side * .3, 2.14, -.04], [side * .12, 2.39, .04], [side * .26, 2.68, 0],
    ], (t) => .05 * (1 - t * .7), 16, 8), vapor, [0, 0, 0], [1, 1, 1], g, false);
  }

  // Rosto na frente da xícara.
  for (const side of [-1, 1]) cartoonEye(g, [side * .18, 1.38, -.43], .145, { lookY: -.1 });
  smileArc(g, [0, 1.18, -.44], .16, .033, mouth);
  for (const side of [-1, 1]) mesh(sphereGeo, mat("#ff9ec4", { roughness: .55 }), [side * .35, 1.22, -.34], [.085, .06, .04], g, false);

  // Tutu em duas camadas na cintura, curto para não engolir as pernas.
  mesh(new THREE.TorusGeometry(.56, .14, 12, 30), tutu, [0, .84, 0], [1, .46, 1], g);
  mesh(new THREE.TorusGeometry(.45, .1, 12, 28), tutuClaro, [0, .92, 0], [1, .46, 1], g, false);

  const bracos = {}, pernas = {};
  for (const side of [-1, 1]) {
    const braco = limbPivot(g, [side * .46, 1.52, 0]);
    const gomo = mesh(new THREE.CapsuleGeometry(.07, .34, 5, 10), pele, [side * .12, -.2, 0], [1, 1, 1], braco);
    gomo.rotation.z = side * .34;
    mesh(sphereGeo, pele, [side * .25, -.4, 0], [.09, .085, .085], braco);
    bracos[side] = braco;

    const perna = limbPivot(g, [side * .18, .78, 0]);
    mesh(new THREE.CapsuleGeometry(.082, .36, 5, 10), pele, [0, -.28, 0], [1, 1, 1], perna);
    const pe = roundedBody(sapatilha, [0, -.6, -.07], [.11, .075, .19], perna);
    for (let i = 0; i < 2; i++) {
      const laco = mesh(new THREE.TorusGeometry(.09, .016, 6, 14), fita, [0, -.4 + i * .09, 0], [1, .4, 1], perna, false);
      laco.rotation.x = Math.PI / 2;
    }
    pernas[side] = perna;
  }
  g.userData = { type: "mascote", limbs: [bracos[-1], pernas[-1], pernas[1], bracos[1]] };
  return g;
}

let player = null;
let playerKey = "";
function ensurePlayer(type, color) {
  const key = `${type}:${color}`;
  if (key === playerKey) return;
  if (player) playerLayer.remove(player);
  player = type === "carro" ? createCar(color)
    : type === "foguete" ? createRocket(color)
    : type === "bananella" ? createBanana()
    : type === "coccodrillo" ? createCrocodile()
    : type === "cappuccino" ? createCappuccino()
    : createMascot(color);
  playerKey = key; playerLayer.add(player);
}

const road = mesh(new THREE.PlaneGeometry(4.7, 180), mat("#31394b", { roughness: .94 }), [0, 0, 80], [1, 1, 1], roadLayer);
road.rotation.x = -Math.PI / 2; road.receiveShadow = true;
const ground = mesh(new THREE.PlaneGeometry(90, 180), mat("#443447", { roughness: 1 }), [0, -.035, 80], [1, 1, 1], roadLayer);
ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true;
const laneMarks = [];
const laneMaterial = mat("#f5f6fb", { roughness: .75 });
for (let i = 0; i < 110; i++) {
  for (const x of [-.62, .62]) laneMarks.push(mesh(boxGeo, laneMaterial, [x, .018, i * 1.72], [.045, .018, .6], roadLayer, false));
}
const edgeLeft = mesh(boxGeo, mat("#ff6fa7", { emissive: "#59213b" }), [-2.4, .035, 80], [.1, .045, 180], roadLayer, false);
const edgeRight = mesh(boxGeo, mat("#75d8ff", { emissive: "#1c4158" }), [2.4, .035, 80], [.1, .045, 180], roadLayer, false);

function hash(n) { return Math.abs(Math.sin(n * 91.733) * 43758.5453) % 1; }
function tint(color, lightness) {
  const c = new THREE.Color(color || "#4b596e"); c.offsetHSL(0, 0, lightness); return `#${c.getHexString()}`;
}
let sceneryStart = NaN;
let sceneryKind = "";
let sceneryStyleKey = "";
function rebuildScenery(start, kind, colors) {
  sceneryLayer.clear(); sceneryStart = start; sceneryKind = kind;
  sceneryStyleKey = `${colors.scenery}:${colors.sceneryDark}:${colors.ground}`;
  const horizonMat = mat(colors.ground || "#443447", { roughness: 1 });
  ground.material = horizonMat;
  for (let i = start; i < start + 14; i++) for (const side of [-1, 1]) {
    const z = i * 7.2, r = hash(i * 2.7 + side), x = side * (6 + r * 2.8);
    const g = new THREE.Group(); g.position.set(x, 0, z); sceneryLayer.add(g);
    if (kind === "cidade") {
      const h = 3.4 + r * 4.4, w = 1.55 + hash(i + 4) * 1.5, d = 1.8 + hash(i + 9) * 1.2;
      const facade = side > 0 ? tint(colors.sceneryDark, -.025) : tint(colors.scenery, -.08);
      mesh(boxGeo, mat(facade, { roughness: .82 }), [0, h / 2, 0], [w, h, d], g);
      mesh(boxGeo, mat(tint(facade, .045), { roughness: .9 }), [0, h + .08, 0], [w * .82, .16, d * .78], g);
      const windowColor = colors.window || "#ffd985";
      for (let y = 1.05; y < h - .55; y += 1.15) for (const xx of [-.28, .28]) {
        mesh(boxGeo, mat(windowColor, { emissive: tint(windowColor, -.16) }), [xx * w, y, -d / 2 - .018], [.19, .24, .025], g, false);
      }
    } else if (kind === "deserto") {
      const cactus = mat(colors.scenery || "#3e7658", { roughness: .82 });
      const altura = 1.35 + r * .8;
      mesh(cylGeo, cactus, [0, altura / 2, 0], [.24, altura, .24], g);
      mesh(cylGeo, mat(tint(colors.scenery, .035)), [side * .34, altura * .55, 0], [.13, .65, .13], g).rotation.z = side * 1.08;
      mesh(sphereGeo, mat(tint(colors.ground, -.08), { roughness: 1 }), [-side * .8, .12, .35], [.55, .15, .38], g);
    } else {
      const escala = .72 + r * .42;
      mesh(cylGeo, mat("#654838", { roughness: 1 }), [0, .55 * escala, 0], [.16 * escala, 1.1 * escala, .16 * escala], g);
      const snow = kind === "neve";
      const foliage = snow ? "#dff5fb" : (colors.scenery || "#32624a");
      mesh(coneGeo, mat(tint(foliage, -.045), { roughness: .92 }), [0, 1.45 * escala, 0], [.92 * escala, 1.65 * escala, .92 * escala], g);
      mesh(coneGeo, mat(tint(foliage, .035), { roughness: .9 }), [0, 2.18 * escala, 0], [.65 * escala, 1.45 * escala, .65 * escala], g);
    }
  }
}

function textSprite(text, color, size = 82, chip = true) {
  const c = document.createElement("canvas"); c.width = 256; c.height = 128;
  const x = c.getContext("2d"); x.clearRect(0, 0, c.width, c.height);
  if (chip) {
    x.fillStyle = "rgba(10,14,25,.86)";
    x.strokeStyle = color; x.lineWidth = 5;
    x.beginPath(); x.roundRect(38, 8, 180, 112, 30); x.fill(); x.stroke();
  }
  x.font = `900 ${size}px system-ui, sans-serif`; x.textAlign = "center"; x.textBaseline = "middle";
  x.lineWidth = chip ? 0 : 9; x.strokeStyle = "rgba(8,10,18,.86)";
  if (!chip) x.strokeText(text, 128, 67);
  x.fillStyle = chip ? "#ffffff" : color; x.fillText(text, 128, 67);
  const texture = new THREE.CanvasTexture(c); texture.colorSpace = THREE.SRGBColorSpace;
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false }));
  sprite.userData.texture = texture; return sprite;
}

const gateGroups = new Map();

function disposeSprites(group) {
  group.traverse((object) => {
    if (object.userData.texture) object.userData.texture.dispose();
    if (object.isSprite) object.material.dispose();
  });
}

function createGateModel(gate, gateColors) {
  const g = new THREE.Group();
  g.position.z = gate.z / 1000;
  g.userData.signature = `${gate.options.join(":")}:${gateColors.join(":")}`;
  g.userData.fadeMaterials = [];
  g.userData.ownedMaterials = [];
  for (let lane = 0; lane < 3; lane++) {
    const color = gateColors[lane];
    // A câmera olha para +Z; por isso o eixo X da cena é o inverso do eixo
    // lógico do jogo. Espelhar aqui mantém pista 1 à esquerda na tela.
    const center = -(lane - 1) * 1.24;
    const frameMaterial = gateMat(color).clone();
    frameMaterial.transparent = true; frameMaterial.depthWrite = false; frameMaterial.opacity = 0;
    const glassMaterial = panelMat(color).clone();
    glassMaterial.opacity = 0;
    g.userData.ownedMaterials.push(frameMaterial, glassMaterial);
    g.userData.fadeMaterials.push({ material: frameMaterial, base: 1, label: false }, { material: glassMaterial, base: .075, label: false });
    mesh(gatePostGeo, frameMaterial, [center - .55, 1.04, 0], [1, 1, 1], g, false);
    mesh(gatePostGeo, frameMaterial, [center + .55, 1.04, 0], [1, 1, 1], g, false);
    const beam = mesh(gateBeamGeo, frameMaterial, [center, 2.08, 0], [1, 1, 1], g, false); beam.rotation.z = Math.PI / 2;
    mesh(gatePanelGeo, glassMaterial, [center, 1.04, .035], [1, 1, 1], g, false);
    const label = textSprite(String(gate.options[lane]), color, 74, true);
    label.material.opacity = 0;
    g.userData.fadeMaterials.push({ material: label.material, base: 1, label: true });
    label.position.set(center, 1.2, -.09); label.scale.set(1.02, .51, 1); g.add(label);
  }
  gatesLayer.add(g); return g;
}

function removeGateModel(index, model) {
  disposeSprites(model);
  model.userData.ownedMaterials.forEach((material) => material.dispose());
  gatesLayer.remove(model); gateGroups.delete(index);
}

function syncGates(gates, gateColors) {
  const wanted = new Set(gates.map((gate) => gate.index));
  for (const gate of gates) {
    const signature = `${gate.options.join(":")}:${gateColors.join(":")}`;
    let model = gateGroups.get(gate.index);
    if (model && model.userData.signature !== signature) {
      removeGateModel(gate.index, model); model = null;
    }
    if (!model) {
      model = createGateModel(gate, gateColors);
      gateGroups.set(gate.index, model);
    }
    model.position.z = gate.z / 1000;
  }
  for (const [index, model] of gateGroups) {
    if (wanted.has(index)) continue;
    removeGateModel(index, model);
  }
}

function roundedPickupGeometry() {
  const s = .5, r = .13, shape = new THREE.Shape();
  shape.moveTo(-s + r, -s);
  shape.lineTo(s - r, -s); shape.quadraticCurveTo(s, -s, s, -s + r);
  shape.lineTo(s, s - r); shape.quadraticCurveTo(s, s, s - r, s);
  shape.lineTo(-s + r, s); shape.quadraticCurveTo(-s, s, -s, s - r);
  shape.lineTo(-s, -s + r); shape.quadraticCurveTo(-s, -s, -s + r, -s);
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: 1, steps: 1, curveSegments: 4,
    bevelEnabled: true, bevelSegments: 2, bevelSize: .075, bevelThickness: .075,
  });
  geometry.center(); return geometry;
}

const pickupGeo = roundedPickupGeometry();
const pickupCoreGeo = new THREE.OctahedronGeometry(.32, 0);
const pickupModels = new Map();

function createPickupModel(index) {
  const root = new THREE.Group();
  const visual = new THREE.Group(); root.add(visual);
  const shellMaterial = mat("#4fe4ff", {
    emissive: "#126f8a", metalness: .28, roughness: .2, transparent: true, opacity: .72, depthWrite: false,
  }).clone();
  const coreMaterial = mat("#7d53e8", {
    emissive: "#36227c", metalness: .42, roughness: .2,
  }).clone();
  coreMaterial.transparent = true;
  mesh(pickupGeo, shellMaterial, [0, 0, 0], [1, 1, 1], visual);
  const core = mesh(pickupCoreGeo, coreMaterial, [0, 0, 0], [1, 1, 1], visual);
  const icon = textSprite("?", "#ffffff", 88, false);
  icon.position.z = -.6; icon.scale.set(1.32, .66, 1); root.add(icon);
  root.userData = { index, visual, core, icon, shellMaterial, coreMaterial };
  itemLayer.add(root); return root;
}

function syncPickups(items) {
  const wanted = new Set(items.map((item) => item.index));
  for (const item of items) {
    if (!pickupModels.has(item.index)) pickupModels.set(item.index, createPickupModel(item.index));
  }
  for (const [index, model] of pickupModels) {
    if (wanted.has(index)) continue;
    disposeSprites(model);
    model.userData.shellMaterial.dispose(); model.userData.coreMaterial.dispose();
    itemLayer.remove(model); pickupModels.delete(index);
  }
}

function resize() {
  const w = Math.max(canvas.clientWidth, 1), h = Math.max(canvas.clientHeight, 1);
  if (canvas.width !== Math.round(w * renderer.getPixelRatio()) || canvas.height !== Math.round(h * renderer.getPixelRatio())) renderer.setSize(w, h, false);
  camera.aspect = w / h; camera.updateProjectionMatrix();
}

function render(state) {
  canvas.hidden = false; resize();
  const z = state.playerZ / 1000;
  road.position.z = z + 82; ground.position.z = z + 82;
  edgeLeft.position.z = z + 82; edgeRight.position.z = z + 82;
  const firstMark = Math.floor((z - 4) / 1.72);
  laneMarks.forEach((m, i) => { m.position.z = (firstMark + Math.floor(i / 2)) * 1.72; });
  road.material.color.set(state.colors.road || "#31394b");
  laneMaterial.color.set(state.colors.lane || "#f5f6fb");
  edgeLeft.material.color.set(state.colors.edges?.[0] || "#ff6fa7");
  edgeRight.material.color.set(state.colors.edges?.[1] || "#75d8ff");

  const sceneryIndex = Math.floor((z - 10) / 7.2);
  const styleKey = `${state.colors.scenery}:${state.colors.sceneryDark}:${state.colors.ground}`;
  if (sceneryIndex !== sceneryStart || state.scenario !== sceneryKind || styleKey !== sceneryStyleKey) rebuildScenery(sceneryIndex, state.scenario, state.colors);
  // Portões vizinhos permanecem na cena entre uma pergunta e outra. O novo
  // conjunto só é acrescentado no fim do horizonte, já escondido pela névoa.
  syncGates(state.gates, state.gateColors);
  for (const model of gateGroups.values()) {
    const distance = model.position.z - z;
    // Some no instante da travessia, antes de o arco ficar entre a câmera e
    // o carro. O próximo portão já está no horizonte, então não há vazio.
    const nearFade = THREE.MathUtils.smoothstep(distance, .25, 1.4);
    const structureFade = (1 - THREE.MathUtils.smoothstep(distance, 22, 42)) * nearFade;
    const labelFade = (1 - THREE.MathUtils.smoothstep(distance, 20, 29)) * nearFade;
    model.visible = structureFade > .004;
    for (const entry of model.userData.fadeMaterials) {
      entry.material.opacity = entry.base * structureFade * (entry.label ? labelFade : 1);
    }
  }

  ensurePlayer(state.runner, state.runnerColor);
  const escalaCorredor = state.runner === "carro" ? .54 : state.runner === "foguete" ? .26 : .62;
  player.scale.setScalar(escalaCorredor);
  player.position.set(-state.playerX / 1000, state.runner === "carro" ? .045 : state.runner === "foguete" ? .08 : .04, z + 2.05);
  player.rotation.y = state.inclination * (state.runner === "carro" ? 1.02 : 1.15);
  player.rotation.z = state.runner === "foguete" ? -state.inclination * .45 : state.inclination * .04;
  if (player.userData.type === "carro") {
    const vigor = Math.min(Math.max(state.speed / 6.2, .35), 1);
    const vibracao = reducedMotion ? 0 : (Math.sin(state.time * 9.2) * .004 + Math.sin(state.time * 15.7) * .0025) * vigor;
    player.userData.wheelSpin -= state.dt * state.speed * 6.6;
    player.userData.steer += (state.inclination * 1.35 - player.userData.steer) * Math.min(state.dt * 12, 1);
    player.userData.wheels.forEach((wheel) => { wheel.rotation.x = player.userData.wheelSpin; });
    player.userData.frontWheels.forEach((wheel) => { wheel.rotation.y = player.userData.steer; });
    player.userData.bodyRig.position.y = vibracao;
    player.userData.bodyRig.rotation.x = -.012 + Math.sin(state.time * 5.4) * .004 * vigor;
    player.userData.bodyRig.rotation.z += (state.inclination * .3 - player.userData.bodyRig.rotation.z) * Math.min(state.dt * 9, 1);
  } else if (player.userData.type === "foguete") {
    player.position.y += .3 + Math.sin(state.time * 3.2) * .08;
    const pulse = .8 + Math.abs(Math.sin(state.time * 20)) * .42;
    player.userData.flame.scale.y = pulse; player.userData.core.scale.y = .85 + pulse * .22;
  } else {
    player.position.y += Math.abs(Math.sin(state.time * 8)) * .09;
    player.userData.limbs.forEach((limb, i) => { limb.rotation.x = Math.sin(state.time * 9 + i * Math.PI) * .58; });
  }

  const items = state.items || [];
  syncPickups(items);
  for (const item of items) {
    const pickup = pickupModels.get(item.index);
    const fase = state.time + item.index * .73;
    const itemY = .78 + Math.sin(fase * 2.7) * .09;
    const itemX = -(item.lane - 1) * 1.24;
    const distance = item.z / 1000 - z;
    const farFade = 1 - THREE.MathUtils.smoothstep(distance, 50, 65);
    const nearFade = THREE.MathUtils.smoothstep(distance, -2.2, .2);
    const fade = farFade * nearFade;
    pickup.visible = fade > .005;
    pickup.scale.setScalar(.56 * (.82 + fade * .18));
    pickup.position.set(itemX, itemY, item.z / 1000);
    pickup.userData.visual.rotation.set(Math.sin(fase * .72) * .1, Math.sin(fase * .9) * .42, Math.sin(fase * .54) * .06);
    pickup.userData.core.rotation.y = -fase * 1.7; pickup.userData.core.rotation.x = fase * .8;
    pickup.userData.shellMaterial.opacity = .72 * fade;
    pickup.userData.coreMaterial.opacity = fade;
    pickup.userData.icon.material.opacity = fade;
  }

  const cameraHeight = state.runner === "carro" ? 1.68 : 2.35;
  const desiredCamera = new THREE.Vector3(-state.camX / 1000, cameraHeight, z - 2.65);
  camera.position.lerp(desiredCamera, state.dragging ? .34 : .13);
  camera.lookAt(-state.camX / 1000, state.runner === "carro" ? .3 : .18, z + 8.2);
  sun.position.set(camera.position.x - 7, 12, z - 4);
  sun.target.position.set(0, 0, z + 12); scene.add(sun.target);
  scene.fog = new THREE.Fog(state.colors.fog || state.colors.skyBottom || "#b76e73", 18, 68);
  renderer.render(scene, camera);
}

function hide() { canvas.hidden = true; }

window.CorridaCena3D = { ready: true, render, resize, hide };
window.dispatchEvent(new Event("corrida3dready"));
