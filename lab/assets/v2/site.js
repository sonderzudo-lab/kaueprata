(() => {
  "use strict";

  const isPortuguese = document.documentElement.lang.toLowerCase().startsWith("pt");
  const language = isPortuguese ? "pt" : "en";
  const copy = isPortuguese
    ? {
        open: "abrir projeto ↗",
        project: "projeto",
        projects: "projetos",
        lightTheme: "Mudar para o tema claro",
        darkTheme: "Mudar para o tema escuro",
        shapes: ["01 / matéria", "02 / órbita", "03 / código", "04 / sistema"]
      }
    : {
        open: "open project ↗",
        project: "project",
        projects: "projects",
        lightTheme: "Switch to light theme",
        darkTheme: "Switch to dark theme",
        shapes: ["01 / matter", "02 / orbit", "03 / code", "04 / system"]
      };

  const themeToggle = document.querySelector(".theme-toggle");
  const themeColor = document.querySelector('meta[name="theme-color"]');
  let particleColor = "rgba(205, 205, 202, .52)";
  let particleAccent = "rgba(30, 200, 224, .9)";
  const applyTheme = (theme, save = false) => {
    const nextTheme = theme === "light" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    const targetLabel = nextTheme === "dark" ? copy.lightTheme : copy.darkTheme;
    themeToggle?.setAttribute("aria-label", targetLabel);
    themeToggle?.setAttribute("title", targetLabel);
    themeToggle?.setAttribute("aria-pressed", String(nextTheme === "light"));
    themeColor?.setAttribute("content", nextTheme === "dark" ? "#0F1012" : "#F4F3EF");
    const styles = getComputedStyle(document.documentElement);
    particleColor = styles.getPropertyValue("--particle").trim() || particleColor;
    particleAccent = styles.getPropertyValue("--particle-accent").trim() || particleAccent;
    if (save) {
      try { localStorage.setItem("kp-theme", nextTheme); } catch (_) {}
    }
  };

  applyTheme(document.documentElement.dataset.theme);
  themeToggle?.addEventListener("click", () => {
    applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark", true);
  });

  document.querySelectorAll("[data-lang]").forEach((link) => {
    link.addEventListener("click", () => {
      try {
        localStorage.setItem("kp-lang", link.dataset.lang);
      } catch (_) {
        // The link still works when local storage is unavailable.
      }
    });
  });

  const apps = Array.isArray(window.KP_APPS) ? window.KP_APPS : [];
  const list = document.getElementById("app-list");
  const count = document.getElementById("app-count");
  const search = document.getElementById("app-search");
  const empty = document.getElementById("empty");

  const localize = (value) => {
    if (typeof value === "string") return value;
    return value?.[language] || value?.pt || value?.en || "";
  };

  const normalize = (value) => value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  const makeTag = (name) => {
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = name;
    return tag;
  };

  const makeCard = (app, index) => {
    const titleText = localize(app.title);
    const descriptionText = localize(app.description);
    const statusText = localize(app.status);
    const article = document.createElement("article");
    article.className = "app-card";
    article.dataset.search = normalize([
      titleText,
      descriptionText,
      localize(app.title?.pt),
      localize(app.title?.en),
      ...app.tags
    ].join(" "));

    const link = document.createElement("a");
    link.className = "app-card-link";
    link.href = `/${app.slug}/`;

    const top = document.createElement("div");
    top.className = "app-topline";

    const number = document.createElement("span");
    number.textContent = String(index + 1).padStart(3, "0");

    const meta = document.createElement("span");
    meta.className = "app-meta";

    if (app.language) {
      const appLanguage = document.createElement("span");
      appLanguage.textContent = app.language;
      meta.appendChild(appLanguage);
    }

    const status = document.createElement("span");
    status.className = "status";
    status.textContent = statusText;
    meta.appendChild(status);
    top.append(number, meta);

    const title = document.createElement("h3");
    title.textContent = titleText;

    const description = document.createElement("p");
    description.textContent = descriptionText;

    const bottom = document.createElement("div");
    bottom.className = "app-bottom";

    const tags = document.createElement("div");
    tags.className = "tags";
    app.tags.forEach((tag) => tags.appendChild(makeTag(tag)));

    const open = document.createElement("span");
    open.className = "open-app";
    open.textContent = copy.open;
    bottom.append(tags, open);

    link.append(top, title, description, bottom);
    article.appendChild(link);
    return article;
  };

  apps
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date))
    .forEach((app, index) => list.appendChild(makeCard(app, index)));

  const updateCount = () => {
    const visible = [...list.children].filter((card) => !card.hidden).length;
    count.textContent = `${visible} ${visible === 1 ? copy.project : copy.projects}`;
    empty.hidden = visible !== 0;
  };

  search.addEventListener("input", () => {
    const query = normalize(search.value.trim());
    [...list.children].forEach((card) => {
      card.hidden = Boolean(query) && !card.dataset.search.includes(query);
    });
    updateCount();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "/" && document.activeElement !== search) {
      event.preventDefault();
      search.focus();
    }
  });

  updateCount();

  const canvas = document.getElementById("lab-canvas");
  const label = document.getElementById("shape-label");
  const visual = canvas?.closest(".hero-visual");
  if (!canvas || !label || !visual) return;

  const context = canvas.getContext("2d", { alpha: true });
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const offscreen = document.createElement("canvas");
  const shapeContext = offscreen.getContext("2d", { willReadFrequently: true });
  const shapeWidth = 460;
  const shapeHeight = 350;
  const particles = [];
  let targets = [];
  let width = 0;
  let height = 0;
  let ratio = 1;
  let shapeIndex = 0;
  let phaseStarted = 0;
  let animationFrame = 0;
  let visible = true;

  const drawFlask = () => {
    shapeContext.lineWidth = 10;
    shapeContext.lineJoin = "round";
    shapeContext.lineCap = "round";
    shapeContext.beginPath();
    shapeContext.moveTo(194, 54);
    shapeContext.lineTo(266, 54);
    shapeContext.moveTo(210, 56);
    shapeContext.lineTo(210, 139);
    shapeContext.lineTo(116, 292);
    shapeContext.quadraticCurveTo(103, 315, 135, 315);
    shapeContext.lineTo(325, 315);
    shapeContext.quadraticCurveTo(357, 315, 344, 292);
    shapeContext.lineTo(250, 139);
    shapeContext.lineTo(250, 56);
    shapeContext.moveTo(142, 267);
    shapeContext.quadraticCurveTo(230, 223, 318, 267);
    shapeContext.stroke();
  };

  const drawAtom = () => {
    shapeContext.lineWidth = 8;
    shapeContext.beginPath();
    shapeContext.ellipse(230, 180, 151, 58, 0, 0, Math.PI * 2);
    shapeContext.stroke();
    shapeContext.beginPath();
    shapeContext.ellipse(230, 180, 151, 58, Math.PI / 3, 0, Math.PI * 2);
    shapeContext.stroke();
    shapeContext.beginPath();
    shapeContext.ellipse(230, 180, 151, 58, -Math.PI / 3, 0, Math.PI * 2);
    shapeContext.stroke();
    shapeContext.beginPath();
    shapeContext.arc(230, 180, 17, 0, Math.PI * 2);
    shapeContext.fill();
  };

  const drawCode = () => {
    shapeContext.font = "700 170px 'JetBrains Mono', monospace";
    shapeContext.textAlign = "center";
    shapeContext.textBaseline = "middle";
    shapeContext.fillText("</>", 230, 185);
  };

  const drawSystem = () => {
    const nodes = [
      [92, 175, 16], [177, 91, 20], [280, 80, 13],
      [367, 152, 22], [287, 263, 19], [164, 273, 14], [231, 174, 25]
    ];
    const links = [[0, 1], [0, 5], [1, 2], [1, 6], [2, 3], [2, 6], [3, 4], [3, 6], [4, 5], [4, 6], [5, 6]];
    shapeContext.lineWidth = 7;
    shapeContext.beginPath();
    links.forEach(([a, b]) => {
      shapeContext.moveTo(nodes[a][0], nodes[a][1]);
      shapeContext.lineTo(nodes[b][0], nodes[b][1]);
    });
    shapeContext.stroke();
    nodes.forEach(([x, y, radius]) => {
      shapeContext.beginPath();
      shapeContext.arc(x, y, radius, 0, Math.PI * 2);
      shapeContext.fill();
    });
  };

  const shapeDrawers = [drawFlask, drawAtom, drawCode, drawSystem];

  const sampleShape = (draw) => {
    offscreen.width = shapeWidth;
    offscreen.height = shapeHeight;
    shapeContext.clearRect(0, 0, shapeWidth, shapeHeight);
    shapeContext.fillStyle = "#fff";
    shapeContext.strokeStyle = "#fff";
    draw();

    const pixels = shapeContext.getImageData(0, 0, shapeWidth, shapeHeight).data;
    const points = [];
    for (let y = 0; y < shapeHeight; y += 4) {
      for (let x = 0; x < shapeWidth; x += 4) {
        if (pixels[(y * shapeWidth + x) * 4 + 3] > 100) {
          points.push({ x: x / shapeWidth, y: y / shapeHeight });
        }
      }
    }
    return points;
  };

  const ease = (value) => 1 - Math.pow(1 - value, 3);

  const rebuild = () => {
    const rect = visual.getBoundingClientRect();
    width = Math.max(1, rect.width);
    height = Math.max(1, rect.height);
    ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);

    targets = shapeDrawers.map(sampleShape);
    const desired = width < 520 ? 360 : 650;
    particles.length = 0;
    for (let index = 0; index < desired; index += 1) {
      const point = targets[shapeIndex][index % targets[shapeIndex].length];
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        startX: Math.random() * width,
        startY: Math.random() * height,
        pointIndex: index,
        targetX: point.x * width,
        targetY: point.y * height,
        accent: index % 9 === 0,
        size: 0.7 + Math.random() * 1.15
      });
    }
    label.textContent = copy.shapes[shapeIndex];
    phaseStarted = performance.now();
    if (reducedMotion) drawFrame(phaseStarted + 2000);
  };

  const assignShape = (nextShape) => {
    shapeIndex = nextShape;
    const shape = targets[shapeIndex];
    particles.forEach((particle, index) => {
      const point = shape[(index * 7 + shapeIndex * 31) % shape.length];
      particle.startX = particle.x;
      particle.startY = particle.y;
      particle.targetX = point.x * width;
      particle.targetY = point.y * height;
    });
    label.textContent = copy.shapes[shapeIndex];
    phaseStarted = performance.now();
  };

  function drawFrame(now) {
    const elapsed = now - phaseStarted;
    const progress = ease(Math.min(elapsed / 1350, 1));
    context.clearRect(0, 0, width, height);

    particles.forEach((particle) => {
      particle.x = particle.startX + (particle.targetX - particle.startX) * progress;
      particle.y = particle.startY + (particle.targetY - particle.startY) * progress;
      context.beginPath();
      context.fillStyle = particle.accent ? particleAccent : particleColor;
      context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      context.fill();
    });

    if (reducedMotion) return;
    if (elapsed > 3500) assignShape((shapeIndex + 1) % targets.length);
    if (visible && !document.hidden) animationFrame = requestAnimationFrame(drawFrame);
  }

  const start = () => {
    cancelAnimationFrame(animationFrame);
    if (!reducedMotion && visible && !document.hidden) animationFrame = requestAnimationFrame(drawFrame);
  };

  const observer = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    start();
  }, { rootMargin: "120px" });
  observer.observe(visual);

  document.addEventListener("visibilitychange", start);
  const resizeObserver = new ResizeObserver(() => {
    rebuild();
    start();
  });
  resizeObserver.observe(visual);

  const initialize = () => {
    rebuild();
    start();
  };

  if (document.fonts?.ready) document.fonts.ready.then(initialize);
  else initialize();
})();
