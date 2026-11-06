(()=>{var Bh=0,hl=1,zh=2;var Si=1,Gh=2,pr=3,mr=0,Bt=1,$t=2,wn=0,ds=1,ul=2,dl=3,pl=4,Vh=5;var fr=100,Hh=101,kh=102,Wh=103,Xh=104,jh=200,qh=201,Yh=202,Zh=203,Jh=204,Kh=205,$h=206,Qh=207,eu=208,tu=209,nu=210,iu=211,ru=212,su=213,au=214,ml=0,fl=1,gl=2,ka=3,_l=4,vl=5,yl=6,xl=7,ou=0,lu=1,cu=2,un=0,Ml=1,Sl=2,bl=3,ps=4,Tl=5,El=6,wl=7;var Al=300,gr=301,bi=302,Wa=303,Xa=304,ms=306,ta=1e3,ri=1001,na=1002,Jt=1003,hu=1004;var fs=1005;var Pt=1006,ja=1007;var Ti=1008;var Xt=1009,Cl=1010,Rl=1011,_r=1012,qa=1013,jn=1014,dn=1015,An=1016,Ya=1017,Za=1018,vr=1020,Pl=35902,Il=35899,uu=1021,du=1022,pn=1023,li=1026,Ei=1027,Ll=1028,Ja=1029,wi=1030,Dl=1031;var Nl=1033,Ka=33776,$a=33777,Qa=33778,eo=33779,Ul=35840,Fl=35841,Ol=35842,Bl=35843,zl=36196,Gl=37492,Vl=37496,Hl=37488,kl=37489,to=37490,Wl=37491,Xl=37808,jl=37809,ql=37810,Yl=37811,Zl=37812,Jl=37813,Kl=37814,$l=37815,Ql=37816,ec=37817,tc=37818,nc=37819,ic=37820,rc=37821,sc=36492,ac=36494,oc=36495,lc=36283,cc=36284,no=36285,hc=36286;var Or=2300,ia=2301,ea=2302,$o=2303,Qo=2400,el=2401,tl=2402;var uc=0,pu=1,Ai="",Ct="srgb",Br="srgb-linear",zr="linear",Ze="srgb";var gi=7680;var mu=512,fu=513,gu=514,io=515,_u=516,vu=517,ro=518,yu=519,ra=35044;var dc="300 es",Bn=2e3,er=2001;function bd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Gr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function xu(){let i=Gr("canvas");return i.style.display="block",i}var ah={},tr=null;function Vr(...i){let e="THREE."+i.shift();tr?tr("log",e,...i):console.log(e,...i)}function Mu(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ee(...i){let e="THREE."+(i=Mu(i)).shift();if(tr)tr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ae(...i){let e="THREE."+(i=Mu(i)).shift();if(tr)tr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function _i(...i){let e=i.join(" ");e in ah||(ah[e]=!0,Ee(...i))}function Su(i,e,t){return new Promise(function(n,r){setTimeout(function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}},t)})}var bu={[ml]:1,[gl]:6,[_l]:7,[ka]:5,[fl]:0,[yl]:2,[xl]:4,[vl]:3},bn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],oh=1234567,$i=Math.PI/180,nr=180/Math.PI;function Sn(){let i=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(wt[255&i]+wt[i>>8&255]+wt[i>>16&255]+wt[i>>24&255]+"-"+wt[255&e]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[63&t|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[255&n]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]).toLowerCase()}function Be(i,e,t){return Math.max(e,Math.min(t,i))}function nl(i,e){return(i%e+e)%e}function Nr(i,e,t){return(1-t)*i+t*e}function ln(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ke(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(4294967295*i);case Uint16Array:return Math.round(65535*i);case Uint8Array:return Math.round(255*i);case Int32Array:return Math.round(2147483647*i);case Int16Array:return Math.round(32767*i);case Int8Array:return Math.round(127*i);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ci={DEG2RAD:$i,RAD2DEG:nr,generateUUID:Sn,clamp:Be,euclideanModulo:nl,mapLinear:function(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)},inverseLerp:function(i,e,t){return i!==e?(t-i)/(e-i):0},lerp:Nr,damp:function(i,e,t,n){return Nr(i,e,1-Math.exp(-t*n))},pingpong:function(i,e=1){return e-Math.abs(nl(i,2*e)-e)},smoothstep:function(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e))*i*(3-2*i)},smootherstep:function(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e))*i*i*(i*(6*i-15)+10)},randInt:function(i,e){return i+Math.floor(Math.random()*(e-i+1))},randFloat:function(i,e){return i+Math.random()*(e-i)},randFloatSpread:function(i){return i*(.5-Math.random())},seededRandom:function(i){i!==void 0&&(oh=i);let e=oh+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(i){return i*$i},radToDeg:function(i){return i*nr},isPowerOfTwo:function(i){return!(i&i-1)&&i!==0},ceilPowerOfTwo:function(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))},floorPowerOfTwo:function(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))},setQuaternionFromProperEuler:function(i,e,t,n,r){let s=Math.cos,a=Math.sin,l=s(t/2),c=a(t/2),o=s((e+n)/2),h=a((e+n)/2),p=s((e-n)/2),d=a((e-n)/2),u=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(l*h,c*p,c*d,l*o);break;case"YZY":i.set(c*d,l*h,c*p,l*o);break;case"ZXZ":i.set(c*p,c*d,l*h,l*o);break;case"XZX":i.set(l*h,c*g,c*u,l*o);break;case"YXY":i.set(c*u,l*h,c*g,l*o);break;case"ZYZ":i.set(c*g,c*u,l*h,l*o);break;default:Ee("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}},normalize:Ke,denormalize:ln},ie=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Be(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Kt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,l){let c=n[r+0],o=n[r+1],h=n[r+2],p=n[r+3],d=s[a+0],u=s[a+1],g=s[a+2],m=s[a+3];if(p!==m||c!==d||o!==u||h!==g){let v=c*d+o*u+h*g+p*m;v<0&&(d=-d,u=-u,g=-g,m=-m,v=-v);let f=1-l;if(v<.9995){let _=Math.acos(v),y=Math.sin(_);f=Math.sin(f*_)/y,c=c*f+d*(l=Math.sin(l*_)/y),o=o*f+u*l,h=h*f+g*l,p=p*f+m*l}else{c=c*f+d*l,o=o*f+u*l,h=h*f+g*l,p=p*f+m*l;let _=1/Math.sqrt(c*c+o*o+h*h+p*p);c*=_,o*=_,h*=_,p*=_}}e[t]=c,e[t+1]=o,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,s,a){let l=n[r],c=n[r+1],o=n[r+2],h=n[r+3],p=s[a],d=s[a+1],u=s[a+2],g=s[a+3];return e[t]=l*g+h*p+c*u-o*d,e[t+1]=c*g+h*d+o*p-l*u,e[t+2]=o*g+h*u+l*d-c*p,e[t+3]=h*g-l*p-c*d-o*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,l=Math.cos,c=Math.sin,o=l(n/2),h=l(r/2),p=l(s/2),d=c(n/2),u=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=d*h*p+o*u*g,this._y=o*u*p-d*h*g,this._z=o*h*g+d*u*p,this._w=o*h*p-d*u*g;break;case"YXZ":this._x=d*h*p+o*u*g,this._y=o*u*p-d*h*g,this._z=o*h*g-d*u*p,this._w=o*h*p+d*u*g;break;case"ZXY":this._x=d*h*p-o*u*g,this._y=o*u*p+d*h*g,this._z=o*h*g+d*u*p,this._w=o*h*p-d*u*g;break;case"ZYX":this._x=d*h*p-o*u*g,this._y=o*u*p+d*h*g,this._z=o*h*g-d*u*p,this._w=o*h*p+d*u*g;break;case"YZX":this._x=d*h*p+o*u*g,this._y=o*u*p+d*h*g,this._z=o*h*g-d*u*p,this._w=o*h*p-d*u*g;break;case"XZY":this._x=d*h*p-o*u*g,this._y=o*u*p-d*h*g,this._z=o*h*g+d*u*p,this._w=o*h*p+d*u*g;break;default:Ee("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],l=t[5],c=t[9],o=t[2],h=t[6],p=t[10],d=n+l+p;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-c)*u,this._y=(s-o)*u,this._z=(a-r)*u}else if(n>l&&n>p){let u=2*Math.sqrt(1+n-l-p);this._w=(h-c)/u,this._x=.25*u,this._y=(r+a)/u,this._z=(s+o)/u}else if(l>p){let u=2*Math.sqrt(1+l-n-p);this._w=(s-o)/u,this._x=(r+a)/u,this._y=.25*u,this._z=(c+h)/u}else{let u=2*Math.sqrt(1+p-n-l);this._w=(a-r)/u,this._x=(s+o)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Be(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,l=t._x,c=t._y,o=t._z,h=t._w;return this._x=n*h+a*l+r*o-s*c,this._y=r*h+a*c+s*l-n*o,this._z=s*h+a*o+n*c-r*l,this._w=a*h-n*l-r*c-s*o,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,l=this.dot(e);l<0&&(n=-n,r=-r,s=-s,a=-a,l=-l);let c=1-t;if(l<.9995){let o=Math.acos(l),h=Math.sin(o);c=Math.sin(c*o)/h,t=Math.sin(t*o)/h,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,l=e.z,c=e.w,o=2*(a*r-l*n),h=2*(l*t-s*r),p=2*(s*n-a*t);return this.x=t+c*o+a*p-l*h,this.y=n+c*h+l*o-s*p,this.z=r+c*p+s*h-a*o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this.z=Be(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this.z=Be(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,l=t.y,c=t.z;return this.x=r*c-s*l,this.y=s*a-n*c,this.z=n*l-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return To.copy(this).projectOnVector(e),this.sub(To)}reflect(e){return this.sub(To.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Be(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},To=new A,lh=new Kt,Ne=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,r,s,a,l,c,o){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,l,c,o)}set(e,t,n,r,s,a,l,c,o){let h=this.elements;return h[0]=e,h[1]=r,h[2]=l,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=o,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],l=n[3],c=n[6],o=n[1],h=n[4],p=n[7],d=n[2],u=n[5],g=n[8],m=r[0],v=r[3],f=r[6],_=r[1],y=r[4],S=r[7],E=r[2],M=r[5],P=r[8];return s[0]=a*m+l*_+c*E,s[3]=a*v+l*y+c*M,s[6]=a*f+l*S+c*P,s[1]=o*m+h*_+p*E,s[4]=o*v+h*y+p*M,s[7]=o*f+h*S+p*P,s[2]=d*m+u*_+g*E,s[5]=d*v+u*y+g*M,s[8]=d*f+u*S+g*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],o=e[7],h=e[8];return t*a*h-t*l*o-n*s*h+n*l*c+r*s*o-r*a*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],o=e[7],h=e[8],p=h*a-l*o,d=l*c-h*s,u=o*s-a*c,g=t*p+n*d+r*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/g;return e[0]=p*m,e[1]=(r*o-h*n)*m,e[2]=(l*n-r*a)*m,e[3]=d*m,e[4]=(h*t-r*c)*m,e[5]=(r*s-l*t)*m,e[6]=u*m,e[7]=(n*c-o*t)*m,e[8]=(a*t-n*s)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,l){let c=Math.cos(s),o=Math.sin(s);return this.set(n*c,n*o,-n*(c*a+o*l)+a+e,-r*o,r*c,-r*(-o*a+c*l)+l+t,0,0,1),this}scale(e,t){return _i("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Eo.makeScale(e,t)),this}rotate(e){return _i("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Eo.makeRotation(-e)),this}translate(e,t){return _i("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Eo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Eo=new Ne,ch=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hh=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Td(){let i={enabled:!0,workingColorSpace:Br,spaces:{},convert:function(r,s,a){return this.enabled!==!1&&s!==a&&s&&a&&(this.spaces[s].transfer===Ze&&(r.r=On(r.r),r.g=On(r.g),r.b=On(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ze&&(r.r=Qi(r.r),r.g=Qi(r.g),r.b=Qi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===""?zr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return _i("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return _i("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Br]:{primaries:e,whitePoint:n,transfer:zr,toXYZ:ch,fromXYZ:hh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:e,whitePoint:n,transfer:Ze,toXYZ:ch,fromXYZ:hh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}}),i}var He=Td();function On(i){return i<.04045?.0773993808*i:Math.pow(.9478672986*i+.0521327014,2.4)}function Qi(i){return i<.0031308?12.92*i:1.055*Math.pow(i,.41666)-.055}var Oi,sa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Oi===void 0&&(Oi=Gr("canvas")),Oi.width=e.width,Oi.height=e.height;let r=Oi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Oi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Gr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=255*On(s[a]/255);return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*On(t[n]/255)):t[n]=On(t[n]);return{data:t,width:e.width,height:e.height}}return Ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ed=0,ir=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=Sn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,l=r.length;a<l;a++)r[a].isDataTexture?s.push(wo(r[a].image)):s.push(wo(r[a]))}else s=wo(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function wo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?sa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ee("Texture: Unable to serialize Texture."),{})}var wd=0,Ao=new A,Ut=class i extends bn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=1001,r=1001,s=1006,a=1008,l=1023,c=1009,o=i.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=Sn(),this.name="",this.source=new ir(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=o,this.format=l,this.internalFormat=null,this.type=c,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ao).x}get height(){return this.source.getSize(Ao).y}get depth(){return this.source.getSize(Ao).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ee(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n:Ee(`Texture.setValues(): property '${t}' does not exist.`)}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Al)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ta:e.x=e.x-Math.floor(e.x);break;case ri:e.x=e.x<0?0:1;break;case na:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case ta:e.y=e.y-Math.floor(e.y);break;case ri:e.y=e.y<0?0:1;break;case na:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ut.DEFAULT_IMAGE=null,Ut.DEFAULT_MAPPING=Al,Ut.DEFAULT_ANISOTROPY=1;var $e=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,o=c[0],h=c[4],p=c[8],d=c[1],u=c[5],g=c[9],m=c[2],v=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(p-m)<.01&&Math.abs(g-v)<.01){if(Math.abs(h+d)<.1&&Math.abs(p+m)<.1&&Math.abs(g+v)<.1&&Math.abs(o+u+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(o+1)/2,S=(u+1)/2,E=(f+1)/2,M=(h+d)/4,P=(p+m)/4,F=(g+v)/4;return y>S&&y>E?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=M/n,s=P/n):S>E?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=M/r,s=F/r):E<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),n=P/s,r=F/s),this.set(n,r,s,t),this}let _=Math.sqrt((v-g)*(v-g)+(p-m)*(p-m)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(v-g)/_,this.y=(p-m)/_,this.z=(d-h)/_,this.w=Math.acos((o+u+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this.z=Be(this.z,e.z,t.z),this.w=Be(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this.z=Be(this.z,e,t),this.w=Be(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},aa=class extends bn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new $e(0,0,e,t),this.scissorTest=!1,this.viewport=new $e(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},s=new Ut(r),a=n.count;for(let l=0;l<a;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Pt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new ir(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ht=class extends aa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Hr=class extends Ut{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var oa=class extends Ut{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Oe=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,r,s,a,l,c,o,h,p,d,u,g,m,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,l,c,o,h,p,d,u,g,m,v)}set(e,t,n,r,s,a,l,c,o,h,p,d,u,g,m,v){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=a,f[9]=l,f[13]=c,f[2]=o,f[6]=h,f[10]=p,f[14]=d,f[3]=u,f[7]=g,f[11]=m,f[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Bi.setFromMatrixColumn(e,0).length(),s=1/Bi.setFromMatrixColumn(e,1).length(),a=1/Bi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),l=Math.sin(n),c=Math.cos(r),o=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){let d=a*h,u=a*p,g=l*h,m=l*p;t[0]=c*h,t[4]=-c*p,t[8]=o,t[1]=u+g*o,t[5]=d-m*o,t[9]=-l*c,t[2]=m-d*o,t[6]=g+u*o,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,u=c*p,g=o*h,m=o*p;t[0]=d+m*l,t[4]=g*l-u,t[8]=a*o,t[1]=a*p,t[5]=a*h,t[9]=-l,t[2]=u*l-g,t[6]=m+d*l,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,u=c*p,g=o*h,m=o*p;t[0]=d-m*l,t[4]=-a*p,t[8]=g+u*l,t[1]=u+g*l,t[5]=a*h,t[9]=m-d*l,t[2]=-a*o,t[6]=l,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,u=a*p,g=l*h,m=l*p;t[0]=c*h,t[4]=g*o-u,t[8]=d*o+m,t[1]=c*p,t[5]=m*o+d,t[9]=u*o-g,t[2]=-o,t[6]=l*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,u=a*o,g=l*c,m=l*o;t[0]=c*h,t[4]=m-d*p,t[8]=g*p+u,t[1]=p,t[5]=a*h,t[9]=-l*h,t[2]=-o*h,t[6]=u*p+g,t[10]=d-m*p}else if(e.order==="XZY"){let d=a*c,u=a*o,g=l*c,m=l*o;t[0]=c*h,t[4]=-p,t[8]=o*h,t[1]=d*p+m,t[5]=a*h,t[9]=u*p-g,t[2]=g*p-u,t[6]=l*h,t[10]=m*p+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ad,e,Cd)}lookAt(e,t,n){let r=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),Jn.crossVectors(n,zt),Jn.lengthSq()===0&&(Math.abs(n.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),Jn.crossVectors(n,zt)),Jn.normalize(),ws.crossVectors(zt,Jn),r[0]=Jn.x,r[4]=ws.x,r[8]=zt.x,r[1]=Jn.y,r[5]=ws.y,r[9]=zt.y,r[2]=Jn.z,r[6]=ws.z,r[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],l=n[4],c=n[8],o=n[12],h=n[1],p=n[5],d=n[9],u=n[13],g=n[2],m=n[6],v=n[10],f=n[14],_=n[3],y=n[7],S=n[11],E=n[15],M=r[0],P=r[4],F=r[8],D=r[12],N=r[1],W=r[5],O=r[9],Z=r[13],X=r[2],H=r[6],z=r[10],V=r[14],$=r[3],oe=r[7],be=r[11],ge=r[15];return s[0]=a*M+l*N+c*X+o*$,s[4]=a*P+l*W+c*H+o*oe,s[8]=a*F+l*O+c*z+o*be,s[12]=a*D+l*Z+c*V+o*ge,s[1]=h*M+p*N+d*X+u*$,s[5]=h*P+p*W+d*H+u*oe,s[9]=h*F+p*O+d*z+u*be,s[13]=h*D+p*Z+d*V+u*ge,s[2]=g*M+m*N+v*X+f*$,s[6]=g*P+m*W+v*H+f*oe,s[10]=g*F+m*O+v*z+f*be,s[14]=g*D+m*Z+v*V+f*ge,s[3]=_*M+y*N+S*X+E*$,s[7]=_*P+y*W+S*H+E*oe,s[11]=_*F+y*O+S*z+E*be,s[15]=_*D+y*Z+S*V+E*ge,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],l=e[5],c=e[9],o=e[13],h=e[2],p=e[6],d=e[10],u=e[14],g=e[3],m=e[7],v=e[11],f=e[15],_=c*u-o*d,y=l*u-o*p,S=l*d-c*p,E=a*u-o*h,M=a*d-c*h,P=a*p-l*h;return t*(m*_-v*y+f*S)-n*(g*_-v*E+f*M)+r*(g*y-m*E+f*P)-s*(g*S-m*M+v*P)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],l=e[9],c=e[2],o=e[6],h=e[10];return t*(a*h-l*o)-n*(s*h-l*c)+r*(s*o-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],o=e[7],h=e[8],p=e[9],d=e[10],u=e[11],g=e[12],m=e[13],v=e[14],f=e[15],_=t*l-n*a,y=t*c-r*a,S=t*o-s*a,E=n*c-r*l,M=n*o-s*l,P=r*o-s*c,F=h*m-p*g,D=h*v-d*g,N=h*f-u*g,W=p*v-d*m,O=p*f-u*m,Z=d*f-u*v,X=_*Z-y*O+S*W+E*N-M*D+P*F;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/X;return e[0]=(l*Z-c*O+o*W)*H,e[1]=(r*O-n*Z-s*W)*H,e[2]=(m*P-v*M+f*E)*H,e[3]=(d*M-p*P-u*E)*H,e[4]=(c*N-a*Z-o*D)*H,e[5]=(t*Z-r*N+s*D)*H,e[6]=(v*S-g*P-f*y)*H,e[7]=(h*P-d*S+u*y)*H,e[8]=(a*O-l*N+o*F)*H,e[9]=(n*N-t*O-s*F)*H,e[10]=(g*M-m*S+f*_)*H,e[11]=(p*S-h*M-u*_)*H,e[12]=(l*D-a*W-c*F)*H,e[13]=(t*W-n*D+r*F)*H,e[14]=(m*y-g*E-v*_)*H,e[15]=(h*E-p*y+d*_)*H,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,l=e.y,c=e.z,o=s*a,h=s*l;return this.set(o*a+n,o*l-r*c,o*c+r*l,0,o*l+r*c,h*l+n,h*c-r*a,0,o*c-r*l,h*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,l=t._z,c=t._w,o=s+s,h=a+a,p=l+l,d=s*o,u=s*h,g=s*p,m=a*h,v=a*p,f=l*p,_=c*o,y=c*h,S=c*p,E=n.x,M=n.y,P=n.z;return r[0]=(1-(m+f))*E,r[1]=(u+S)*E,r[2]=(g-y)*E,r[3]=0,r[4]=(u-S)*M,r[5]=(1-(d+f))*M,r[6]=(v+_)*M,r[7]=0,r[8]=(g+y)*P,r[9]=(v-_)*P,r[10]=(1-(d+m))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Bi.set(r[0],r[1],r[2]).length(),l=Bi.set(r[4],r[5],r[6]).length(),c=Bi.set(r[8],r[9],r[10]).length();s<0&&(a=-a),sn.copy(this);let o=1/a,h=1/l,p=1/c;return sn.elements[0]*=o,sn.elements[1]*=o,sn.elements[2]*=o,sn.elements[4]*=h,sn.elements[5]*=h,sn.elements[6]*=h,sn.elements[8]*=p,sn.elements[9]*=p,sn.elements[10]*=p,t.setFromRotationMatrix(sn),n.x=a,n.y=l,n.z=c,this}makePerspective(e,t,n,r,s,a,l=2e3,c=!1){let o=this.elements,h=2*s/(t-e),p=2*s/(n-r),d=(t+e)/(t-e),u=(n+r)/(n-r),g,m;if(c)g=s/(a-s),m=a*s/(a-s);else if(l===Bn)g=-(a+s)/(a-s),m=-2*a*s/(a-s);else{if(l!==er)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);g=-a/(a-s),m=-a*s/(a-s)}return o[0]=h,o[4]=0,o[8]=d,o[12]=0,o[1]=0,o[5]=p,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=g,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,r,s,a,l=2e3,c=!1){let o=this.elements,h=2/(t-e),p=2/(n-r),d=-(t+e)/(t-e),u=-(n+r)/(n-r),g,m;if(c)g=1/(a-s),m=a/(a-s);else if(l===Bn)g=-2/(a-s),m=-(a+s)/(a-s);else{if(l!==er)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);g=-1/(a-s),m=-s/(a-s)}return o[0]=h,o[4]=0,o[8]=0,o[12]=d,o[1]=0,o[5]=p,o[9]=0,o[13]=u,o[2]=0,o[6]=0,o[10]=g,o[14]=m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Bi=new A,sn=new Oe,Ad=new A(0,0,0),Cd=new A(1,1,1),Jn=new A,ws=new A,zt=new A,uh=new Oe,dh=new Kt,zn=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],l=r[8],c=r[1],o=r[5],h=r[9],p=r[2],d=r[6],u=r[10];switch(t){case"XYZ":this._y=Math.asin(Be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,o),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,u),this._z=Math.atan2(c,o)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,u),this._z=Math.atan2(-a,o)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Be(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,o));break;case"YZX":this._z=Math.asin(Be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,o),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(l,u));break;case"XZY":this._z=Math.asin(-Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,o),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Ee("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return uh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(uh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dh.setFromEuler(this),this.setFromQuaternion(dh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zn.DEFAULT_ORDER="XYZ";var kr=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Rd=0,ph=new A,zi=new Kt,Ln=new Oe,As=new A,wr=new A,Pd=new A,Id=new Kt,mh=new A(1,0,0),fh=new A(0,1,0),gh=new A(0,0,1),_h={type:"added"},Ld={type:"removed"},Gi={type:"childadded",child:null},Co={type:"childremoved",child:null},Et=class i extends bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=Sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new A,t=new zn,n=new Kt,r=new A(1,1,1);t._onChange(function(){n.setFromEuler(t,!1)}),n._onChange(function(){t.setFromQuaternion(n,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Oe},normalMatrix:{value:new Ne}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.multiply(zi),this}rotateOnWorldAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.premultiply(zi),this}rotateX(e){return this.rotateOnAxis(mh,e)}rotateY(e){return this.rotateOnAxis(fh,e)}rotateZ(e){return this.rotateOnAxis(gh,e)}translateOnAxis(e,t){return ph.copy(e).applyQuaternion(this.quaternion),this.position.add(ph.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mh,e)}translateY(e){return this.translateOnAxis(fh,e)}translateZ(e){return this.translateOnAxis(gh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?As.copy(e):As.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(wr,As,this.up):Ln.lookAt(As,wr,this.up),this.quaternion.setFromRotationMatrix(Ln),r&&(Ln.extractRotation(r.matrixWorld),zi.setFromRotationMatrix(Ln),this.quaternion.premultiply(zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ae("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_h),Gi.child=e,this.dispatchEvent(Gi),Gi.child=null):Ae("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ld),Co.child=e,this.dispatchEvent(Co),Co.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_h),Gi.child=e,this.dispatchEvent(Gi),Gi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,e,Pd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,Id,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let a=0,l=s.length;a<l;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};function s(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>({...l})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let o=0,h=c.length;o<h;o++){let p=c[o];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,o=this.material.length;c<o;c++)l.push(s(e.materials,this.material[c]));r.material=l}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];r.animations.push(s(e.animations,c))}}if(t){let l=a(e.geometries),c=a(e.materials),o=a(e.textures),h=a(e.images),p=a(e.shapes),d=a(e.skeletons),u=a(e.animations),g=a(e.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),o.length>0&&(n.textures=o),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(l){let c=[];for(let o in l){let h=l[o];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};Et.DEFAULT_UP=new A(0,1,0),Et.DEFAULT_MATRIX_AUTO_UPDATE=!0,Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ye=class extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}},Dd={type:"move"},rr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ye,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ye,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ye,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,l=this._targetRay,c=this._grip,o=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(o&&e.hand){a=!0;for(let m of e.hand.values()){let v=t.getJointPose(m,n),f=this._getHandJoint(o,m);v!==null&&(f.matrix.fromArray(v.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=v.radius),f.visible=v!==null}let h=o.joints["index-finger-tip"],p=o.joints["thumb-tip"],d=h.position.distanceTo(p.position),u=.02,g=.005;o.inputState.pinching&&d>u+g?(o.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!o.inputState.pinching&&d<=u-g&&(o.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Dd)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),o!==null&&(o.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ye;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Tu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},Cs={h:0,s:0,l:0};function Ro(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+6*(e-i)*t:t<.5?e:t<2/3?i+6*(e-i)*(2/3-t):i}var Pe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,He.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=He.workingColorSpace){return this.r=e,this.g=t,this.b=n,He.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=He.workingColorSpace){if(e=nl(e,1),t=Be(t,0,1),n=Be(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Ro(a,s,e+1/3),this.g=Ro(a,s,e),this.b=Ro(a,s,e-1/3)}return He.colorSpaceToWorking(this,r),this}setStyle(e,t=Ct){function n(s){s!==void 0&&parseFloat(s)<1&&Ee("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],l=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ee("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ee("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){let n=Tu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ee("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=On(e.r),this.g=On(e.g),this.b=On(e.b),this}copyLinearToSRGB(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return He.workingToColorSpace(At.copy(this),e),65536*Math.round(Be(255*At.r,0,255))+256*Math.round(Be(255*At.g,0,255))+Math.round(Be(255*At.b,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=He.workingColorSpace){He.workingToColorSpace(At.copy(this),t);let n=At.r,r=At.g,s=At.b,a=Math.max(n,r,s),l=Math.min(n,r,s),c,o,h=(l+a)/2;if(l===a)c=0,o=0;else{let p=a-l;switch(o=h<=.5?p/(a+l):p/(2-a-l),a){case n:c=(r-s)/p+(r<s?6:0);break;case r:c=(s-n)/p+2;break;case s:c=(n-r)/p+4}c/=6}return e.h=c,e.s=o,e.l=h,e}getRGB(e,t=He.workingColorSpace){return He.workingToColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=Ct){He.workingToColorSpace(At.copy(this),e);let t=At.r,n=At.g,r=At.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*r)})`}offsetHSL(e,t,n){return this.getHSL(Kn),this.setHSL(Kn.h+e,Kn.s+t,Kn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Kn),e.getHSL(Cs);let n=Nr(Kn.h,Cs.h,t),r=Nr(Kn.s,Cs.s,t),s=Nr(Kn.l,Cs.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},At=new Pe;Pe.NAMES=Tu;var Wr=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Pe(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Xr=class extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},an=new A,Dn=new A,Po=new A,Nn=new A,Vi=new A,Hi=new A,vh=new A,Io=new A,Lo=new A,Do=new A,No=new $e,Uo=new $e,Fo=new $e,xn=class i{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),an.subVectors(e,t),r.cross(an);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){an.subVectors(r,t),Dn.subVectors(n,t),Po.subVectors(e,t);let a=an.dot(an),l=an.dot(Dn),c=an.dot(Po),o=Dn.dot(Dn),h=Dn.dot(Po),p=a*o-l*l;if(p===0)return s.set(0,0,0),null;let d=1/p,u=(o*c-l*h)*d,g=(a*h-l*c)*d;return s.set(1-u-g,g,u)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Nn)!==null&&Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(e,t,n,r,s,a,l,c){return this.getBarycoord(e,t,n,r,Nn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Nn.x),c.addScaledVector(a,Nn.y),c.addScaledVector(l,Nn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return No.setScalar(0),Uo.setScalar(0),Fo.setScalar(0),No.fromBufferAttribute(e,t),Uo.fromBufferAttribute(e,n),Fo.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(No,s.x),a.addScaledVector(Uo,s.y),a.addScaledVector(Fo,s.z),a}static isFrontFacing(e,t,n,r){return an.subVectors(n,t),Dn.subVectors(e,t),an.cross(Dn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),.5*an.cross(Dn).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,l;Vi.subVectors(r,n),Hi.subVectors(s,n),Io.subVectors(e,n);let c=Vi.dot(Io),o=Hi.dot(Io);if(c<=0&&o<=0)return t.copy(n);Lo.subVectors(e,r);let h=Vi.dot(Lo),p=Hi.dot(Lo);if(h>=0&&p<=h)return t.copy(r);let d=c*p-h*o;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Vi,a);Do.subVectors(e,s);let u=Vi.dot(Do),g=Hi.dot(Do);if(g>=0&&u<=g)return t.copy(s);let m=u*o-c*g;if(m<=0&&o>=0&&g<=0)return l=o/(o-g),t.copy(n).addScaledVector(Hi,l);let v=h*g-u*p;if(v<=0&&p-h>=0&&u-g>=0)return vh.subVectors(s,r),l=(p-h)/(p-h+(u-g)),t.copy(r).addScaledVector(vh,l);let f=1/(v+m+d);return a=m*f,l=d*f,t.copy(n).addScaledVector(Vi,a).addScaledVector(Hi,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},cn=class{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(on.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(on.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=on.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=s.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,on):on.fromBufferAttribute(s,a),on.applyMatrix4(e.matrixWorld),this.expandByPoint(on);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rs.copy(n.boundingBox)),Rs.applyMatrix4(e.matrixWorld),this.union(Rs)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,on),on.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ar),Ps.subVectors(this.max,Ar),ki.subVectors(e.a,Ar),Wi.subVectors(e.b,Ar),Xi.subVectors(e.c,Ar),$n.subVectors(Wi,ki),Qn.subVectors(Xi,Wi),di.subVectors(ki,Xi);let t=[0,-$n.z,$n.y,0,-Qn.z,Qn.y,0,-di.z,di.y,$n.z,0,-$n.x,Qn.z,0,-Qn.x,di.z,0,-di.x,-$n.y,$n.x,0,-Qn.y,Qn.x,0,-di.y,di.x,0];return!!Oo(t,ki,Wi,Xi,Ps)&&(t=[1,0,0,0,1,0,0,0,1],!!Oo(t,ki,Wi,Xi,Ps)&&(Is.crossVectors($n,Qn),t=[Is.x,Is.y,Is.z],Oo(t,ki,Wi,Xi,Ps)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,on).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(on).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Un)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Un=[new A,new A,new A,new A,new A,new A,new A,new A],on=new A,Rs=new cn,ki=new A,Wi=new A,Xi=new A,$n=new A,Qn=new A,di=new A,Ar=new A,Ps=new A,Is=new A,pi=new A;function Oo(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){pi.fromArray(i,s);let l=r.x*Math.abs(pi.x)+r.y*Math.abs(pi.y)+r.z*Math.abs(pi.z),c=e.dot(pi),o=t.dot(pi),h=n.dot(pi);if(Math.max(-Math.max(c,o,h),Math.min(c,o,h))>l)return!1}return!0}var gf=Nd();function Nd(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let c=0;c<256;++c){let o=c-127;o<-27?(n[c]=0,n[256|c]=32768,r[c]=24,r[256|c]=24):o<-14?(n[c]=1024>>-o-14,n[256|c]=1024>>-o-14|32768,r[c]=-o-1,r[256|c]=-o-1):o<=15?(n[c]=o+15<<10,n[256|c]=o+15<<10|32768,r[c]=13,r[256|c]=13):o<128?(n[c]=31744,n[256|c]=64512,r[c]=24,r[256|c]=24):(n[c]=31744,n[256|c]=64512,r[c]=13,r[256|c]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),l=new Uint32Array(64);for(let c=1;c<1024;++c){let o=c<<13,h=0;for(;!(8388608&o);)o<<=1,h-=8388608;o&=-8388609,h+=947912704,s[c]=o|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(l[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:l}}var gt=new A,Ls=new ie,Ud=0,Ot=class extends bn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ud++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ra,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ls.fromBufferAttribute(this,t),Ls.applyMatrix3(e),this.setXY(t,Ls.x,Ls.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ke(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ln(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ln(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ln(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ln(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),r=Ke(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),r=Ke(r,this.array),s=Ke(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ra&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var jr=class extends Ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var qr=class extends Ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var we=class extends Ot{constructor(e,t,n){super(new Float32Array(e),t,n)}},Fd=new cn,Cr=new A,Bo=new A,hn=class{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Fd.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cr.subVectors(e,this.center);let t=Cr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=.5*(n-this.radius);this.center.addScaledVector(Cr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cr.copy(e.center).add(Bo)),this.expandByPoint(Cr.copy(e.center).sub(Bo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Od=0,Zt=new Oe,zo=new Et,ji=new A,Gt=new cn,Rr=new cn,St=new A,Qe=class i extends bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=Sn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new((function(t){for(let n=t.length-1;n>=0;--n)if(t[n]>=65535)return!0;return!1})(e)?qr:jr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ne().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return zo.lookAt(e),zo.updateMatrix(),this.applyMatrix4(zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new we(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ee("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return Ae("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];Gt.setFromBufferAttribute(s),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ae('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return Ae("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new A,1/0);if(e){let n=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let l=t[s];Rr.setFromBufferAttribute(l),this.morphTargetsRelative?(St.addVectors(Gt.min,Rr.min),Gt.expandByPoint(St),St.addVectors(Gt.max,Rr.max),Gt.expandByPoint(St)):(Gt.expandByPoint(Rr.min),Gt.expandByPoint(Rr.max))}Gt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)St.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(St));if(t)for(let s=0,a=t.length;s<a;s++){let l=t[s],c=this.morphTargetsRelative;for(let o=0,h=l.count;o<h;o++)St.fromBufferAttribute(l,o),c&&(ji.fromBufferAttribute(e,o),St.add(ji)),r=Math.max(r,n.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ae('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void Ae("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=t.position,r=t.normal,s=t.uv,a=this.getAttribute("tangent");a!==void 0&&a.count===n.count||(a=new Ot(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let l=[],c=[];for(let F=0;F<n.count;F++)l[F]=new A,c[F]=new A;let o=new A,h=new A,p=new A,d=new ie,u=new ie,g=new ie,m=new A,v=new A;function f(F,D,N){o.fromBufferAttribute(n,F),h.fromBufferAttribute(n,D),p.fromBufferAttribute(n,N),d.fromBufferAttribute(s,F),u.fromBufferAttribute(s,D),g.fromBufferAttribute(s,N),h.sub(o),p.sub(o),u.sub(d),g.sub(d);let W=1/(u.x*g.y-g.x*u.y);isFinite(W)&&(m.copy(h).multiplyScalar(g.y).addScaledVector(p,-u.y).multiplyScalar(W),v.copy(p).multiplyScalar(u.x).addScaledVector(h,-g.x).multiplyScalar(W),l[F].add(m),l[D].add(m),l[N].add(m),c[F].add(v),c[D].add(v),c[N].add(v))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let F=0,D=_.length;F<D;++F){let N=_[F],W=N.start;for(let O=W,Z=W+N.count;O<Z;O+=3)f(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let y=new A,S=new A,E=new A,M=new A;function P(F){E.fromBufferAttribute(r,F),M.copy(E);let D=l[F];y.copy(D),y.sub(E.multiplyScalar(E.dot(D))).normalize(),S.crossVectors(M,D);let N=S.dot(c[F])<0?-1:1;a.setXYZW(F,y.x,y.y,y.z,N)}for(let F=0,D=_.length;F<D;++F){let N=_[F],W=N.start;for(let O=W,Z=W+N.count;O<Z;O+=3)P(e.getX(O+0)),P(e.getX(O+1)),P(e.getX(O+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ot(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let r=new A,s=new A,a=new A,l=new A,c=new A,o=new A,h=new A,p=new A;if(e)for(let d=0,u=e.count;d<u;d+=3){let g=e.getX(d+0),m=e.getX(d+1),v=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),a.fromBufferAttribute(t,v),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.fromBufferAttribute(n,v),l.add(h),c.add(h),o.add(h),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z),n.setXYZ(v,o.x,o.y,o.z)}else for(let d=0,u=t.count;d<u;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(l,c){let o=l.array,h=l.itemSize,p=l.normalized,d=new o.constructor(c.length*h),u=0,g=0;for(let m=0,v=c.length;m<v;m++){u=l.isInterleavedBufferAttribute?c[m]*l.data.stride+l.offset:c[m]*h;for(let f=0;f<h;f++)d[g++]=o[u++]}return new Ot(d,h,p)}if(this.index===null)return Ee("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let l in r){let c=e(r[l],n);t.setAttribute(l,c)}let s=this.morphAttributes;for(let l in s){let c=[],o=s[l];for(let h=0,p=o.length;h<p;h++){let d=e(o[h],n);c.push(d)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let l=0,c=a.length;l<c;l++){let o=a[l];t.addGroup(o.start,o.count,o.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let o in c)c[o]!==void 0&&(e[o]=c[o]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let o=n[c];e.data.attributes[c]=o.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let o=this.morphAttributes[c],h=[];for(let p=0,d=o.length;p<d;p++){let u=o[p];h.push(u.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let o in r){let h=r[o];this.setAttribute(o,h.clone(t))}let s=e.morphAttributes;for(let o in s){let h=[],p=s[o];for(let d=0,u=p.length;d<u;d++)h.push(p[d].clone(t));this.morphAttributes[o]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let o=0,h=a.length;o<h;o++){let p=a[o];this.addGroup(p.start,p.count,p.materialIndex)}let l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},la=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ra,this.updateRanges=[],this.version=0,this.uuid=Sn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Nt=new A,Yr=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ke(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ln(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ln(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ln(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ln(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),r=Ke(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),r=Ke(r,this.array),s=Ke(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Vr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Ot(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Vr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},qi,Bd=0,Gn=class extends bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=Sn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gi,this.stencilZFail=gi,this.stencilZPass=gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ee(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n:Ee(`Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function r(s){let a=[];for(let l in s){let c=s[l];delete c.metadata,a.push(c)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Pe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ie().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ie().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},sr=class extends Gn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Pr=new A,Yi=new A,Zi=new A,Ji=new ie,Ir=new ie,Eu=new Oe,Ds=new A,Lr=new A,Ns=new A,yh=new ie,Go=new ie,xh=new ie,Zr=class extends Et{constructor(e=new sr){if(super(),this.isSprite=!0,this.type="Sprite",qi===void 0){qi=new Qe;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new la(t,5);qi.setIndex([0,1,2,0,2,3]),qi.setAttribute("position",new Yr(n,3,0,!1)),qi.setAttribute("uv",new Yr(n,2,3,!1))}this.geometry=qi,this.material=e,this.center=new ie(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Ae('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Yi.setFromMatrixScale(this.matrixWorld),Eu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Zi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Yi.multiplyScalar(-Zi.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let a=this.center;Us(Ds.set(-.5,-.5,0),Zi,a,Yi,r,s),Us(Lr.set(.5,-.5,0),Zi,a,Yi,r,s),Us(Ns.set(.5,.5,0),Zi,a,Yi,r,s),yh.set(0,0),Go.set(1,0),xh.set(1,1);let l=e.ray.intersectTriangle(Ds,Lr,Ns,!1,Pr);if(l===null&&(Us(Lr.set(-.5,.5,0),Zi,a,Yi,r,s),Go.set(0,1),l=e.ray.intersectTriangle(Ds,Ns,Lr,!1,Pr),l===null))return;let c=e.ray.origin.distanceTo(Pr);c<e.near||c>e.far||t.push({distance:c,point:Pr.clone(),uv:xn.getInterpolation(Pr,Ds,Lr,Ns,yh,Go,xh,new ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Us(i,e,t,n,r,s){Ji.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Ir.x=s*Ji.x-r*Ji.y,Ir.y=r*Ji.x+s*Ji.y):Ir.copy(Ji),i.copy(e),i.x+=Ir.x,i.y+=Ir.y,i.applyMatrix4(Eu)}var _f=new A,vf=new A;var Fn=new A,Vo=new A,Fs=new A,ei=new A,Ho=new A,Os=new A,ko=new A,vi=class{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fn.copy(this.origin).addScaledVector(this.direction,t),Fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Vo.copy(e).add(t).multiplyScalar(.5),Fs.copy(t).sub(e).normalize(),ei.copy(this.origin).sub(Vo);let s=.5*e.distanceTo(t),a=-this.direction.dot(Fs),l=ei.dot(this.direction),c=-ei.dot(Fs),o=ei.lengthSq(),h=Math.abs(1-a*a),p,d,u,g;if(h>0)if(p=a*c-l,d=a*l-c,g=s*h,p>=0)if(d>=-g)if(d<=g){let m=1/h;p*=m,d*=m,u=p*(p+a*d+2*l)+d*(a*p+d+2*c)+o}else d=s,p=Math.max(0,-(a*d+l)),u=-p*p+d*(d+2*c)+o;else d=-s,p=Math.max(0,-(a*d+l)),u=-p*p+d*(d+2*c)+o;else d<=-g?(p=Math.max(0,-(-a*s+l)),d=p>0?-s:Math.min(Math.max(-s,-c),s),u=-p*p+d*(d+2*c)+o):d<=g?(p=0,d=Math.min(Math.max(-s,-c),s),u=d*(d+2*c)+o):(p=Math.max(0,-(a*s+l)),d=p>0?s:Math.min(Math.max(-s,-c),s),u=-p*p+d*(d+2*c)+o);else d=a>0?-s:s,p=Math.max(0,-(a*d+l)),u=-p*p+d*(d+2*c)+o;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Vo).addScaledVector(Fs,d),u}intersectSphere(e,t){Fn.subVectors(e.center,this.origin);let n=Fn.dot(this.direction),r=Fn.dot(Fn)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),l=n-a,c=n+a;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return!(e.radius<0)&&this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,l,c,o=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,d=this.origin;return o>=0?(n=(e.min.x-d.x)*o,r=(e.max.x-d.x)*o):(n=(e.max.x-d.x)*o,r=(e.min.x-d.x)*o),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>r?null:((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),p>=0?(l=(e.min.z-d.z)*p,c=(e.max.z-d.z)*p):(l=(e.max.z-d.z)*p,c=(e.min.z-d.z)*p),n>c||l>r?null:((l>n||n!=n)&&(n=l),(c<r||r!=r)&&(r=c),r<0?null:this.at(n>=0?n:r,t)))}intersectsBox(e){return this.intersectBox(e,Fn)!==null}intersectTriangle(e,t,n,r,s){Ho.subVectors(t,e),Os.subVectors(n,e),ko.crossVectors(Ho,Os);let a,l=this.direction.dot(ko);if(l>0){if(r)return null;a=1}else{if(!(l<0))return null;a=-1,l=-l}ei.subVectors(this.origin,e);let c=a*this.direction.dot(Os.crossVectors(ei,Os));if(c<0)return null;let o=a*this.direction.dot(Ho.cross(ei));if(o<0||c+o>l)return null;let h=-a*ei.dot(ko);return h<0?null:this.at(h/l,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Vn=class extends Gn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Mh=new Oe,mi=new vi,Bs=new hn,Sh=new A,zs=new A,Gs=new A,Vs=new A,Wo=new A,Hs=new A,bh=new A,ks=new A,It=class extends Et{constructor(e=new Qe,t=new Vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let l=this.morphTargetInfluences;if(s&&l){Hs.set(0,0,0);for(let c=0,o=s.length;c<o;c++){let h=l[c],p=s[c];h!==0&&(Wo.fromBufferAttribute(p,e),a?Hs.addScaledVector(Wo,h):Hs.addScaledVector(Wo.sub(t),h))}t.add(Hs)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;if(r!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),Bs.copy(n.boundingSphere),Bs.applyMatrix4(s),mi.copy(e.ray).recast(e.near),Bs.containsPoint(mi.origin)===!1&&(mi.intersectSphere(Bs,Sh)===null||mi.origin.distanceToSquared(Sh)>(e.far-e.near)**2))return;Mh.copy(s).invert(),mi.copy(e.ray).applyMatrix4(Mh),n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,mi)}}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,l=s.index,c=s.attributes.position,o=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,d=s.groups,u=s.drawRange;if(l!==null)if(Array.isArray(a))for(let g=0,m=d.length;g<m;g++){let v=d[g],f=a[v.materialIndex];for(let _=Math.max(v.start,u.start),y=Math.min(l.count,Math.min(v.start+v.count,u.start+u.count));_<y;_+=3)r=Ws(this,f,e,n,o,h,p,l.getX(_),l.getX(_+1),l.getX(_+2)),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=v.materialIndex,t.push(r))}else for(let g=Math.max(0,u.start),m=Math.min(l.count,u.start+u.count);g<m;g+=3)r=Ws(this,a,e,n,o,h,p,l.getX(g),l.getX(g+1),l.getX(g+2)),r&&(r.faceIndex=Math.floor(g/3),t.push(r));else if(c!==void 0)if(Array.isArray(a))for(let g=0,m=d.length;g<m;g++){let v=d[g],f=a[v.materialIndex];for(let _=Math.max(v.start,u.start),y=Math.min(c.count,Math.min(v.start+v.count,u.start+u.count));_<y;_+=3)r=Ws(this,f,e,n,o,h,p,_,_+1,_+2),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=v.materialIndex,t.push(r))}else for(let g=Math.max(0,u.start),m=Math.min(c.count,u.start+u.count);g<m;g+=3)r=Ws(this,a,e,n,o,h,p,g,g+1,g+2),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}};function Ws(i,e,t,n,r,s,a,l,c,o){i.getVertexPosition(l,zs),i.getVertexPosition(c,Gs),i.getVertexPosition(o,Vs);let h=(function(p,d,u,g,m,v,f,_){let y;if(y=d.side===1?g.intersectTriangle(f,v,m,!0,_):g.intersectTriangle(m,v,f,d.side===0,_),y===null)return null;ks.copy(_),ks.applyMatrix4(p.matrixWorld);let S=u.ray.origin.distanceTo(ks);return S<u.near||S>u.far?null:{distance:S,point:ks.clone(),object:p}})(i,e,t,n,zs,Gs,Vs,bh);if(h){let p=new A;xn.getBarycoord(bh,zs,Gs,Vs,p),r&&(h.uv=xn.getInterpolatedAttribute(r,l,c,o,p,new ie)),s&&(h.uv1=xn.getInterpolatedAttribute(s,l,c,o,p,new ie)),a&&(h.normal=xn.getInterpolatedAttribute(a,l,c,o,p,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:l,b:c,c:o,normal:new A,materialIndex:0};xn.getNormal(zs,Gs,Vs,d.normal),h.face=d,h.barycoord=p}return h}var yf=new $e,xf=new $e,Mf=new $e,Sf=new $e,bf=new Oe,Tf=new A,Ef=new hn,wf=new Oe,Af=new vi;var ca=class extends Ut{constructor(e=null,t=1,n=1,r,s,a,l,c,o=1003,h=1003,p,d){super(null,a,l,c,o,h,r,s,p,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Cf=new Oe,Rf=new Oe;var Pf=new Oe,If=new Oe;var Lf=new cn,Df=new Oe,Nf=new It,Uf=new hn;var Xo=new A,zd=new A,Gd=new Ne,yn=class{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Xo.subVectors(n,t).cross(zd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Xo),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Gd.getNormalMatrix(e),r=this.coplanarPoint(Xo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},fi=new hn,Vd=new ie(.5,.5),Xs=new A,Hn=class{constructor(e=new yn,t=new yn,n=new yn,r=new yn,s=new yn,a=new yn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(r),l[4].copy(s),l[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3,n=!1){let r=this.planes,s=e.elements,a=s[0],l=s[1],c=s[2],o=s[3],h=s[4],p=s[5],d=s[6],u=s[7],g=s[8],m=s[9],v=s[10],f=s[11],_=s[12],y=s[13],S=s[14],E=s[15];if(r[0].setComponents(o-a,u-h,f-g,E-_).normalize(),r[1].setComponents(o+a,u+h,f+g,E+_).normalize(),r[2].setComponents(o+l,u+p,f+m,E+y).normalize(),r[3].setComponents(o-l,u-p,f-m,E-y).normalize(),n)r[4].setComponents(c,d,v,S).normalize(),r[5].setComponents(o-c,u-d,f-v,E-S).normalize();else if(r[4].setComponents(o-c,u-d,f-v,E-S).normalize(),t===Bn)r[5].setComponents(o+c,u+d,f+v,E+S).normalize();else{if(t!==er)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);r[5].setComponents(c,d,v,S).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(e){fi.center.set(0,0,0);let t=Vd.distanceTo(e.center);return fi.radius=.7071067811865476+t,fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Xs.x=r.normal.x>0?e.max.x:e.min.x,Xs.y=r.normal.y>0?e.max.y:e.min.y,Xs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xs)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Th=new Oe,ha=class i{constructor(){this.coordinateSystem=Bn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let r=0;r<t.length;r++){let s=t[r];Th.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[r]===void 0&&(n[r]=new Hn),n[r].setFromProjectionMatrix(Th,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new Hn),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new i().copy(this)}};var il=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,r){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let l=s[this.index];a.push(l),this.index++,l.start=e,l.count=t,l.z=n,l.index=r}reset(){this.list.length=0,this.index=0}},Ff=new Oe,Of=new Pe(1,1,1),Bf=new Hn,zf=new ha,Gf=new cn,Vf=new hn,Hf=new A,kf=new A,Wf=new A,Xf=new il,jf=new It;var qf=new A,Yf=new A,Zf=new Oe,Jf=new vi,Kf=new hn,$f=new A,Qf=new A;var eg=new A,tg=new A;var ng=new Oe,ig=new vi,rg=new hn,sg=new A;var Jr=class extends Ut{constructor(e=[],t=301,n,r,s,a,l,c,o,h){super(e,t,n,r,s,a,l,c,o,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Kr=class extends Ut{constructor(e,t,n,r,s,a,l,c,o){super(e,t,n,r,s,a,l,c,o),this.isCanvasTexture=!0,this.needsUpdate=!0}};var kn=class extends Ut{constructor(e,t,n=1014,r,s,a,l=1003,c=1003,o,h=1026,p=1){if(h!==li&&h!==1027)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:p},r,s,a,l,c,h,n,o),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ir(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ua=class extends kn{constructor(e,t=1014,n=301,r,s,a=1003,l=1003,c,o=1026){let h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,t,n,r,s,a,l,c,o),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},$r=class extends Ut{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Tn=class i extends Qe{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let l=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],o=[],h=[],p=[],d=0,u=0;function g(m,v,f,_,y,S,E,M,P,F,D){let N=S/P,W=E/F,O=S/2,Z=E/2,X=M/2,H=P+1,z=F+1,V=0,$=0,oe=new A;for(let be=0;be<z;be++){let ge=be*W-Z;for(let ve=0;ve<H;ve++){let te=ve*N-O;oe[m]=te*_,oe[v]=ge*y,oe[f]=X,o.push(oe.x,oe.y,oe.z),oe[m]=0,oe[v]=0,oe[f]=M>0?1:-1,h.push(oe.x,oe.y,oe.z),p.push(ve/P),p.push(1-be/F),V+=1}}for(let be=0;be<F;be++)for(let ge=0;ge<P;ge++){let ve=d+ge+H*be,te=d+ge+H*(be+1),ue=d+(ge+1)+H*(be+1),ce=d+(ge+1)+H*be;c.push(ve,te,ce),c.push(te,ue,ce),$+=6}l.addGroup(u,$,D),u+=$,d+=V}g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new we(o,3)),this.setAttribute("normal",new we(h,3)),this.setAttribute("uv",new we(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},je=class i extends Qe{constructor(e=1,t=1,n=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));let a=[],l=[],c=[],o=[],h=t/2,p=Math.PI/2*e,d=t,u=2*p+d,g=2*n+s,m=r+1,v=new A,f=new A;for(let _=0;_<=g;_++){let y=0,S=0,E=0,M=0;if(_<=n){let D=_/n,N=D*Math.PI/2;S=-h-e*Math.cos(N),E=e*Math.sin(N),M=-e*Math.cos(N),y=D*p}else if(_<=n+s){let D=(_-n)/s;S=D*t-h,E=e,M=0,y=p+D*d}else{let D=(_-n-s)/n,N=D*Math.PI/2;S=h+e*Math.sin(N),E=e*Math.cos(N),M=e*Math.sin(N),y=p+d+D*p}let P=Math.max(0,Math.min(1,y/u)),F=0;_===0?F=.5/r:_===g&&(F=-.5/r);for(let D=0;D<=r;D++){let N=D/r,W=N*Math.PI*2,O=Math.sin(W),Z=Math.cos(W);f.x=-E*Z,f.y=S,f.z=E*O,l.push(f.x,f.y,f.z),v.set(-E*Z,M,E*O),v.normalize(),c.push(v.x,v.y,v.z),o.push(N+F,P)}if(_>0){let D=(_-1)*m;for(let N=0;N<r;N++){let W=D+N,O=D+N+1,Z=_*m+N,X=_*m+N+1;a.push(W,O,Z),a.push(O,X,Z)}}}this.setIndex(a),this.setAttribute("position",new we(l,3)),this.setAttribute("normal",new we(c,3)),this.setAttribute("uv",new we(o,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},da=class i extends Qe{constructor(e=1,t=32,n=0,r=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let s=[],a=[],l=[],c=[],o=new A,h=new ie;a.push(0,0,0),l.push(0,0,1),c.push(.5,.5);for(let p=0,d=3;p<=t;p++,d+=3){let u=n+p/t*r;o.x=e*Math.cos(u),o.y=e*Math.sin(u),a.push(o.x,o.y,o.z),l.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let p=1;p<=t;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new we(a,3)),this.setAttribute("normal",new we(l,3)),this.setAttribute("uv",new we(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},et=class i extends Qe{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,l=0,c=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:l,thetaLength:c};let o=this;r=Math.floor(r),s=Math.floor(s);let h=[],p=[],d=[],u=[],g=0,m=[],v=n/2,f=0;function _(y){let S=g,E=new ie,M=new A,P=0,F=y===!0?e:t,D=y===!0?1:-1;for(let W=1;W<=r;W++)p.push(0,v*D,0),d.push(0,D,0),u.push(.5,.5),g++;let N=g;for(let W=0;W<=r;W++){let O=W/r*c+l,Z=Math.cos(O),X=Math.sin(O);M.x=F*X,M.y=v*D,M.z=F*Z,p.push(M.x,M.y,M.z),d.push(0,D,0),E.x=.5*Z+.5,E.y=.5*X*D+.5,u.push(E.x,E.y),g++}for(let W=0;W<r;W++){let O=S+W,Z=N+W;y===!0?h.push(Z,Z+1,O):h.push(Z+1,Z,O),P+=3}o.addGroup(f,P,y===!0?1:2),f+=P}(function(){let y=new A,S=new A,E=0,M=(t-e)/n;for(let P=0;P<=s;P++){let F=[],D=P/s,N=D*(t-e)+e;for(let W=0;W<=r;W++){let O=W/r,Z=O*c+l,X=Math.sin(Z),H=Math.cos(Z);S.x=N*X,S.y=-D*n+v,S.z=N*H,p.push(S.x,S.y,S.z),y.set(X,M,H).normalize(),d.push(y.x,y.y,y.z),u.push(O,1-D),F.push(g++)}m.push(F)}for(let P=0;P<r;P++)for(let F=0;F<s;F++){let D=m[F][P],N=m[F+1][P],W=m[F+1][P+1],O=m[F][P+1];(e>0||F!==0)&&(h.push(D,N,O),E+=3),(t>0||F!==s-1)&&(h.push(N,W,O),E+=3)}o.addGroup(f,E,0),f+=E})(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new we(p,3)),this.setAttribute("normal",new we(d,3)),this.setAttribute("uv",new we(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Wn=class i extends et{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,l=2*Math.PI){super(0,e,t,n,r,s,a,l),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:l}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},si=class i extends Qe{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let s=[],a=[];function l(u,g,m,v){let f=v+1,_=[];for(let y=0;y<=f;y++){_[y]=[];let S=u.clone().lerp(m,y/f),E=g.clone().lerp(m,y/f),M=f-y;for(let P=0;P<=M;P++)_[y][P]=P===0&&y===f?S:S.clone().lerp(E,P/M)}for(let y=0;y<f;y++)for(let S=0;S<2*(f-y)-1;S++){let E=Math.floor(S/2);S%2==0?(c(_[y][E+1]),c(_[y+1][E]),c(_[y][E])):(c(_[y][E+1]),c(_[y+1][E+1]),c(_[y+1][E]))}}function c(u){s.push(u.x,u.y,u.z)}function o(u,g){let m=3*u;g.x=e[m+0],g.y=e[m+1],g.z=e[m+2]}function h(u,g,m,v){v<0&&u.x===1&&(a[g]=u.x-1),m.x===0&&m.z===0&&(a[g]=v/2/Math.PI+.5)}function p(u){return Math.atan2(u.z,-u.x)}function d(u){return Math.atan2(-u.y,Math.sqrt(u.x*u.x+u.z*u.z))}(function(u){let g=new A,m=new A,v=new A;for(let f=0;f<t.length;f+=3)o(t[f+0],g),o(t[f+1],m),o(t[f+2],v),l(g,m,v,u)})(r),(function(u){let g=new A;for(let m=0;m<s.length;m+=3)g.x=s[m+0],g.y=s[m+1],g.z=s[m+2],g.normalize().multiplyScalar(u),s[m+0]=g.x,s[m+1]=g.y,s[m+2]=g.z})(n),(function(){let u=new A;for(let g=0;g<s.length;g+=3){u.x=s[g+0],u.y=s[g+1],u.z=s[g+2];let m=p(u)/2/Math.PI+.5,v=d(u)/Math.PI+.5;a.push(m,1-v)}(function(){let g=new A,m=new A,v=new A,f=new A,_=new ie,y=new ie,S=new ie;for(let E=0,M=0;E<s.length;E+=9,M+=6){g.set(s[E+0],s[E+1],s[E+2]),m.set(s[E+3],s[E+4],s[E+5]),v.set(s[E+6],s[E+7],s[E+8]),_.set(a[M+0],a[M+1]),y.set(a[M+2],a[M+3]),S.set(a[M+4],a[M+5]),f.copy(g).add(m).add(v).divideScalar(3);let P=p(f);h(_,M+0,g,P),h(y,M+2,m,P),h(S,M+4,v,P)}})(),(function(){for(let g=0;g<a.length;g+=6){let m=a[g+0],v=a[g+2],f=a[g+4],_=Math.max(m,v,f),y=Math.min(m,v,f);_>.9&&y<.1&&(m<.2&&(a[g+0]+=1),v<.2&&(a[g+2]+=1),f<.2&&(a[g+4]+=1))}})()})(),this.setAttribute("position",new we(s,3)),this.setAttribute("normal",new we(s.slice(),3)),this.setAttribute("uv",new we(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},pa=class i extends si{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},js=new A,qs=new A,jo=new A,Ys=new xn,ma=class extends Qe{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos($i*t),a=e.getIndex(),l=e.getAttribute("position"),c=a?a.count:l.count,o=[0,0,0],h=["a","b","c"],p=new Array(3),d={},u=[];for(let g=0;g<c;g+=3){a?(o[0]=a.getX(g),o[1]=a.getX(g+1),o[2]=a.getX(g+2)):(o[0]=g,o[1]=g+1,o[2]=g+2);let{a:m,b:v,c:f}=Ys;if(m.fromBufferAttribute(l,o[0]),v.fromBufferAttribute(l,o[1]),f.fromBufferAttribute(l,o[2]),Ys.getNormal(jo),p[0]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,p[1]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,p[2]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,p[0]!==p[1]&&p[1]!==p[2]&&p[2]!==p[0])for(let _=0;_<3;_++){let y=(_+1)%3,S=p[_],E=p[y],M=Ys[h[_]],P=Ys[h[y]],F=`${S}_${E}`,D=`${E}_${S}`;D in d&&d[D]?(jo.dot(d[D].normal)<=s&&(u.push(M.x,M.y,M.z),u.push(P.x,P.y,P.z)),d[D]=null):F in d||(d[F]={index0:o[_],index1:o[y],normal:jo.clone()})}}for(let g in d)if(d[g]){let{index0:m,index1:v}=d[g];js.fromBufferAttribute(l,m),qs.fromBufferAttribute(l,v),u.push(js.x,js.y,js.z),u.push(qs.x,qs.y,qs.z)}this.setAttribute("position",new we(u,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},kt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ee("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,s=n.length,a;a=t||e*n[s-1];let l,c=0,o=s-1;for(;c<=o;)if(r=Math.floor(c+(o-c)/2),l=n[r]-a,l<0)c=r+1;else{if(!(l>0)){o=r;break}o=r-1}if(r=o,n[r]===a)return r/(s-1);let h=n[r];return(r+(a-h)/(n[r+1]-h))/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),l=this.getPoint(s),c=t||(a.isVector2?new ie:new A);return c.copy(l).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new A,r=[],s=[],a=[],l=new A,c=new Oe;for(let u=0;u<=e;u++){let g=u/e;r[u]=this.getTangentAt(g,new A)}s[0]=new A,a[0]=new A;let o=Number.MAX_VALUE,h=Math.abs(r[0].x),p=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=o&&(o=h,n.set(1,0,0)),p<=o&&(o=p,n.set(0,1,0)),d<=o&&n.set(0,0,1),l.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],l),a[0].crossVectors(r[0],s[0]);for(let u=1;u<=e;u++){if(s[u]=s[u-1].clone(),a[u]=a[u-1].clone(),l.crossVectors(r[u-1],r[u]),l.length()>Number.EPSILON){l.normalize();let g=Math.acos(Be(r[u-1].dot(r[u]),-1,1));s[u].applyMatrix4(c.makeRotationAxis(l,g))}a[u].crossVectors(r[u],s[u])}if(t===!0){let u=Math.acos(Be(s[0].dot(s[e]),-1,1));u/=e,r[0].dot(l.crossVectors(s[0],s[e]))>0&&(u=-u);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],u*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ar=class extends kt{constructor(e=0,t=0,n=1,r=1,s=0,a=2*Math.PI,l=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=l,this.aRotation=c}getPoint(e,t=new ie){let n=t,r=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(s=a?0:r),this.aClockwise!==!0||a||(s===r?s=-r:s-=r);let l=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(l),o=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),d=c-this.aX,u=o-this.aY;c=d*h-u*p+this.aX,o=d*p+u*h+this.aY}return n.set(c,o)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},fa=class extends ar{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function pc(){let i=0,e=0,t=0,n=0;function r(s,a,l,c){i=s,e=l,t=-3*s+3*a-2*l-c,n=2*s-2*a+l+c}return{initCatmullRom:function(s,a,l,c,o){r(a,l,o*(l-s),o*(c-a))},initNonuniformCatmullRom:function(s,a,l,c,o,h,p){let d=(a-s)/o-(l-s)/(o+h)+(l-a)/h,u=(l-a)/h-(c-a)/(h+p)+(c-l)/p;d*=h,u*=h,r(a,l,d,u)},calc:function(s){let a=s*s;return i+e*s+t*a+n*(a*s)}}}var Eh=new A,wh=new A,qo=new pc,Yo=new pc,Zo=new pc,or=class extends kt{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new A){let n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e,l,c,o=Math.floor(a),h=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:h===0&&o===s-1&&(o=s-2,h=1),this.closed||o>0?l=r[(o-1)%s]:(wh.subVectors(r[0],r[1]).add(r[0]),l=wh);let p=r[o%s],d=r[(o+1)%s];if(this.closed||o+2<s?c=r[(o+2)%s]:(Eh.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=Eh),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(p),u),m=Math.pow(p.distanceToSquared(d),u),v=Math.pow(d.distanceToSquared(c),u);m<1e-4&&(m=1),g<1e-4&&(g=m),v<1e-4&&(v=m),qo.initNonuniformCatmullRom(l.x,p.x,d.x,c.x,g,m,v),Yo.initNonuniformCatmullRom(l.y,p.y,d.y,c.y,g,m,v),Zo.initNonuniformCatmullRom(l.z,p.z,d.z,c.z,g,m,v)}else this.curveType==="catmullrom"&&(qo.initCatmullRom(l.x,p.x,d.x,c.x,this.tension),Yo.initCatmullRom(l.y,p.y,d.y,c.y,this.tension),Zo.initCatmullRom(l.z,p.z,d.z,c.z,this.tension));return n.set(qo.calc(h),Yo.calc(h),Zo.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new A().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ah(i,e,t,n,r){let s=.5*(n-e),a=.5*(r-t),l=i*i;return(2*t-2*n+s+a)*(i*l)+(-3*t+3*n-2*s-a)*l+s*i+t}function Ur(i,e,t,n){return(function(r,s){let a=1-r;return a*a*s})(i,e)+(function(r,s){return 2*(1-r)*r*s})(i,t)+(function(r,s){return r*r*s})(i,n)}function Fr(i,e,t,n,r){return(function(s,a){let l=1-s;return l*l*l*a})(i,e)+(function(s,a){let l=1-s;return 3*l*l*s*a})(i,t)+(function(s,a){return 3*(1-s)*s*s*a})(i,n)+(function(s,a){return s*s*s*a})(i,r)}var Qr=class extends kt{constructor(e=new ie,t=new ie,n=new ie,r=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new ie){let n=t,r=this.v0,s=this.v1,a=this.v2,l=this.v3;return n.set(Fr(e,r.x,s.x,a.x,l.x),Fr(e,r.y,s.y,a.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ga=class extends kt{constructor(e=new A,t=new A,n=new A,r=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new A){let n=t,r=this.v0,s=this.v1,a=this.v2,l=this.v3;return n.set(Fr(e,r.x,s.x,a.x,l.x),Fr(e,r.y,s.y,a.y,l.y),Fr(e,r.z,s.z,a.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},es=class extends kt{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_a=class extends kt{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ts=class extends kt{constructor(e=new ie,t=new ie,n=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ie){let n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Ur(e,r.x,s.x,a.x),Ur(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ns=class extends kt{constructor(e=new A,t=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new A){let n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Ur(e,r.x,s.x,a.x),Ur(e,r.y,s.y,a.y),Ur(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},is=class extends kt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){let n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),l=s-a,c=r[a===0?a:a-1],o=r[a],h=r[a>r.length-2?r.length-1:a+1],p=r[a>r.length-3?r.length-1:a+2];return n.set(Ah(l,c.x,o.x,h.x,p.x),Ah(l,c.y,o.y,h.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new ie().fromArray(r))}return this}},va=Object.freeze({__proto__:null,ArcCurve:fa,CatmullRomCurve3:or,CubicBezierCurve:Qr,CubicBezierCurve3:ga,EllipseCurve:ar,LineCurve:es,LineCurve3:_a,QuadraticBezierCurve:ts,QuadraticBezierCurve3:ns,SplineCurve:is}),ya=class extends kt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new va[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let a=r[s]-n,l=this.curves[s],c=l.getLength(),o=c===0?0:1-a/c;return l.getPointAt(o,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let a=s[r],l=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(l);for(let o=0;o<c.length;o++){let h=c[o];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new va[r.type]().fromJSON(r))}return this}},rs=class extends ya{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new es(this.currentPoint.clone(),new ie(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new ts(this.currentPoint.clone(),new ie(e,t),new ie(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){let l=new Qr(this.currentPoint.clone(),new ie(e,t),new ie(n,r),new ie(s,a));return this.curves.push(l),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new is(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){let l=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+l,t+c,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,l,c){let o=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+o,t+h,n,r,s,a,l,c),this}absellipse(e,t,n,r,s,a,l,c){let o=new ar(e,t,n,r,s,a,l,c);if(this.curves.length>0){let p=o.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(o);let h=o.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Xn=class extends rs{constructor(e){super(e),this.uuid=Sn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new rs().fromJSON(r))}return this}};function Hd(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=Ch(i,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let l,c,o;if(n&&(s=(function(h,p,d,u){let g=[];for(let m=0,v=p.length;m<v;m++){let f=Ch(h,p[m]*u,m<v-1?p[m+1]*u:h.length,u,!1);f===f.next&&(f.steiner=!0),g.push(Jd(f))}g.sort(qd);for(let m=0;m<g.length;m++)d=Yd(g[m],d);return d})(i,e,s,t)),i.length>80*t){l=i[0],c=i[1];let h=l,p=c;for(let d=t;d<r;d+=t){let u=i[d],g=i[d+1];u<l&&(l=u),g<c&&(c=g),u>h&&(h=u),g>p&&(p=g)}o=Math.max(h-l,p-c),o=o!==0?32767/o:0}return ss(s,a,t,l,c,o,0),a}function Ch(i,e,t,n,r){let s;if(r===(function(a,l,c,o){let h=0;for(let p=l,d=c-o;p<c;p+=o)h+=(a[d]-a[p])*(a[p+1]+a[d+1]),d=p;return h})(i,e,t,n)>0)for(let a=e;a<t;a+=n)s=Rh(a/n|0,i[a],i[a+1],s);else for(let a=t-n;a>=e;a-=n)s=Rh(a/n|0,i[a],i[a+1],s);return s&&lr(s,s.next)&&(os(s),s=s.next),s}function yi(i,e){if(!i)return i;e||(e=i);let t,n=i;do if(t=!1,n.steiner||!lr(n,n.next)&&ht(n.prev,n,n.next)!==0)n=n.next;else{if(os(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function ss(i,e,t,n,r,s,a){if(!i)return;!a&&s&&(function(c,o,h,p){let d=c;do d.z===0&&(d.z=rl(d.x,d.y,o,h,p)),d.prevZ=d.prev,d.nextZ=d.next,d=d.next;while(d!==c);d.prevZ.nextZ=null,d.prevZ=null,(function(u){let g,m=1;do{let v,f=u;u=null;let _=null;for(g=0;f;){g++;let y=f,S=0;for(let M=0;M<m&&(S++,y=y.nextZ,y);M++);let E=m;for(;S>0||E>0&&y;)S!==0&&(E===0||!y||f.z<=y.z)?(v=f,f=f.nextZ,S--):(v=y,y=y.nextZ,E--),_?_.nextZ=v:u=v,v.prevZ=_,_=v;f=y}_.nextZ=null,m*=2}while(g>1)})(d)})(i,n,r,s);let l=i;for(;i.prev!==i.next;){let c=i.prev,o=i.next;if(s?Wd(i,n,r,s):kd(i))e.push(c.i,i.i,o.i),os(i),i=o.next,l=o.next;else if((i=o)===l){a?a===1?ss(i=Xd(yi(i),e),e,t,n,r,s,2):a===2&&jd(i,e,t,n,r,s):ss(yi(i),e,t,n,r,s,1);break}}}function kd(i){let e=i.prev,t=i,n=i.next;if(ht(e,t,n)>=0)return!1;let r=e.x,s=t.x,a=n.x,l=e.y,c=t.y,o=n.y,h=Math.min(r,s,a),p=Math.min(l,c,o),d=Math.max(r,s,a),u=Math.max(l,c,o),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=p&&g.y<=u&&Dr(r,l,s,c,a,o,g.x,g.y)&&ht(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Wd(i,e,t,n){let r=i.prev,s=i,a=i.next;if(ht(r,s,a)>=0)return!1;let l=r.x,c=s.x,o=a.x,h=r.y,p=s.y,d=a.y,u=Math.min(l,c,o),g=Math.min(h,p,d),m=Math.max(l,c,o),v=Math.max(h,p,d),f=rl(u,g,e,t,n),_=rl(m,v,e,t,n),y=i.prevZ,S=i.nextZ;for(;y&&y.z>=f&&S&&S.z<=_;){if(y.x>=u&&y.x<=m&&y.y>=g&&y.y<=v&&y!==r&&y!==a&&Dr(l,h,c,p,o,d,y.x,y.y)&&ht(y.prev,y,y.next)>=0||(y=y.prevZ,S.x>=u&&S.x<=m&&S.y>=g&&S.y<=v&&S!==r&&S!==a&&Dr(l,h,c,p,o,d,S.x,S.y)&&ht(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;y&&y.z>=f;){if(y.x>=u&&y.x<=m&&y.y>=g&&y.y<=v&&y!==r&&y!==a&&Dr(l,h,c,p,o,d,y.x,y.y)&&ht(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;S&&S.z<=_;){if(S.x>=u&&S.x<=m&&S.y>=g&&S.y<=v&&S!==r&&S!==a&&Dr(l,h,c,p,o,d,S.x,S.y)&&ht(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Xd(i,e){let t=i;do{let n=t.prev,r=t.next.next;!lr(n,r)&&Au(n,t,t.next,r)&&as(n,r)&&as(r,n)&&(e.push(n.i,t.i,r.i),os(t),os(t.next),t=i=r),t=t.next}while(t!==i);return yi(t)}function jd(i,e,t,n,r,s){let a=i;do{let l=a.next.next;for(;l!==a.prev;){if(a.i!==l.i&&Kd(a,l)){let c=Cu(a,l);return a=yi(a,a.next),c=yi(c,c.next),ss(a,e,t,n,r,s,0),void ss(c,e,t,n,r,s,0)}l=l.next}a=a.next}while(a!==i)}function qd(i,e){let t=i.x-e.x;return t===0&&(t=i.y-e.y,t===0)&&(t=(i.next.y-i.y)/(i.next.x-i.x)-(e.next.y-e.y)/(e.next.x-e.x)),t}function Yd(i,e){let t=(function(r,s){let a=s,l=r.x,c=r.y,o,h=-1/0;if(lr(r,a))return a;do{if(lr(r,a.next))return a.next;if(c<=a.y&&c>=a.next.y&&a.next.y!==a.y){let m=a.x+(c-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(m<=l&&m>h&&(h=m,o=a.x<a.next.x?a:a.next,m===l))return o}a=a.next}while(a!==s);if(!o)return null;let p=o,d=o.x,u=o.y,g=1/0;a=o;do{if(l>=a.x&&a.x>=d&&l!==a.x&&wu(c<u?l:h,c,d,u,c<u?h:l,c,a.x,a.y)){let m=Math.abs(c-a.y)/(l-a.x);as(a,r)&&(m<g||m===g&&(a.x>o.x||a.x===o.x&&Zd(o,a)))&&(o=a,g=m)}a=a.next}while(a!==p);return o})(i,e);if(!t)return e;let n=Cu(t,i);return yi(n,n.next),yi(t,t.next)}function Zd(i,e){return ht(i.prev,i,e.prev)<0&&ht(e.next,i,i.next)<0}function rl(i,e,t,n,r){return(i=1431655765&((i=858993459&((i=252645135&((i=16711935&((i=(i-t)*r|0)|i<<8))|i<<4))|i<<2))|i<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Jd(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function wu(i,e,t,n,r,s,a,l){return(r-a)*(e-l)>=(i-a)*(s-l)&&(i-a)*(n-l)>=(t-a)*(e-l)&&(t-a)*(s-l)>=(r-a)*(n-l)}function Dr(i,e,t,n,r,s,a,l){return!(i===a&&e===l)&&wu(i,e,t,n,r,s,a,l)}function Kd(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!(function(t,n){let r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==n.i&&r.next.i!==n.i&&Au(r,r.next,t,n))return!0;r=r.next}while(r!==t);return!1})(i,e)&&(as(i,e)&&as(e,i)&&(function(t,n){let r=t,s=!1,a=(t.x+n.x)/2,l=(t.y+n.y)/2;do r.y>l!=r.next.y>l&&r.next.y!==r.y&&a<(r.next.x-r.x)*(l-r.y)/(r.next.y-r.y)+r.x&&(s=!s),r=r.next;while(r!==t);return s})(i,e)&&(ht(i.prev,i,e.prev)||ht(i,e.prev,e))||lr(i,e)&&ht(i.prev,i,i.next)>0&&ht(e.prev,e,e.next)>0)}function ht(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function lr(i,e){return i.x===e.x&&i.y===e.y}function Au(i,e,t,n){let r=Js(ht(i,e,t)),s=Js(ht(i,e,n)),a=Js(ht(t,n,i)),l=Js(ht(t,n,e));return r!==s&&a!==l||!(r!==0||!Zs(i,t,e))||!(s!==0||!Zs(i,n,e))||!(a!==0||!Zs(t,i,n))||!(l!==0||!Zs(t,e,n))}function Zs(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Js(i){return i>0?1:i<0?-1:0}function as(i,e){return ht(i.prev,i,i.next)<0?ht(i,e,i.next)>=0&&ht(i,i.prev,e)>=0:ht(i,e,i.prev)<0||ht(i,i.next,e)<0}function Cu(i,e){let t=sl(i.i,i.x,i.y),n=sl(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Rh(i,e,t,n){let r=sl(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function os(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function sl(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}var al=class{static triangulate(e,t,n=2){return Hd(e,t,n)}},Mn=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return .5*n}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];Ph(e),Ih(n,e);let a=e.length;t.forEach(Ph);for(let c=0;c<t.length;c++)r.push(a),a+=t[c].length,Ih(n,t[c]);let l=al.triangulate(n,r);for(let c=0;c<l.length;c+=3)s.push(l.slice(c,c+3));return s}};function Ph(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Ih(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var ai=class i extends Qe{constructor(e=new Xn([new ie(.5,.5),new ie(-.5,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],s=[];for(let l=0,c=e.length;l<c;l++)a(e[l]);function a(l){let c=[],o=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,p=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:u-.1,m=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:$d,y,S,E,M,P,F=!1;if(f){y=f.getSpacedPoints(h),F=!0,d=!1;let C=!!f.isCatmullRomCurve3&&f.closed;S=f.computeFrenetFrames(h,C),E=new A,M=new A,P=new A}d||(v=0,u=0,g=0,m=0);let D=l.extractPoints(o),N=D.shape,W=D.holes;if(!Mn.isClockWise(N)){N=N.reverse();for(let C=0,U=W.length;C<U;C++){let x=W[C];Mn.isClockWise(x)&&(W[C]=x.reverse())}}function O(C){let U=10000000000000001e-36,x=C[0];for(let L=1;L<=C.length;L++){let I=L%C.length,w=C[I],k=w.x-x.x,j=w.y-x.y,J=k*k+j*j,se=Math.max(Math.abs(w.x),Math.abs(w.y),Math.abs(x.x),Math.abs(x.y));J<=U*se*se?(C.splice(I,1),L--):x=w}}O(N),W.forEach(O);let Z=W.length,X=N;for(let C=0;C<Z;C++){let U=W[C];N=N.concat(U)}function H(C,U,x){return U||Ae("ExtrudeGeometry: vec does not exist"),C.clone().addScaledVector(U,x)}let z=N.length;function V(C,U,x){let L,I,w,k=C.x-U.x,j=C.y-U.y,J=x.x-C.x,se=x.y-C.y,xe=k*k+j*j,Me=k*se-j*J;if(Math.abs(Me)>Number.EPSILON){let pe=Math.sqrt(xe),Re=Math.sqrt(J*J+se*se),ne=U.x-j/pe,ae=U.y+k/pe,re=((x.x-se/Re-ne)*se-(x.y+J/Re-ae)*J)/(k*se-j*J);L=ne+k*re-C.x,I=ae+j*re-C.y;let fe=L*L+I*I;if(fe<=2)return new ie(L,I);w=Math.sqrt(fe/2)}else{let pe=!1;k>Number.EPSILON?J>Number.EPSILON&&(pe=!0):k<-Number.EPSILON?J<-Number.EPSILON&&(pe=!0):Math.sign(j)===Math.sign(se)&&(pe=!0),pe?(L=-j,I=k,w=Math.sqrt(xe)):(L=k,I=j,w=Math.sqrt(xe/2))}return new ie(L/w,I/w)}let $=[];for(let C=0,U=X.length,x=U-1,L=C+1;C<U;C++,x++,L++)x===U&&(x=0),L===U&&(L=0),$[C]=V(X[C],X[x],X[L]);let oe=[],be,ge,ve=$.concat();for(let C=0,U=Z;C<U;C++){let x=W[C];be=[];for(let L=0,I=x.length,w=I-1,k=L+1;L<I;L++,w++,k++)w===I&&(w=0),k===I&&(k=0),be[L]=V(x[L],x[w],x[k]);oe.push(be),ve=ve.concat(be)}if(v===0)ge=Mn.triangulateShape(X,W);else{let C=[],U=[];for(let x=0;x<v;x++){let L=x/v,I=u*Math.cos(L*Math.PI/2),w=g*Math.sin(L*Math.PI/2)+m;for(let k=0,j=X.length;k<j;k++){let J=H(X[k],$[k],w);_e(J.x,J.y,-I),L===0&&C.push(J)}for(let k=0,j=Z;k<j;k++){let J=W[k];be=oe[k];let se=[];for(let xe=0,Me=J.length;xe<Me;xe++){let pe=H(J[xe],be[xe],w);_e(pe.x,pe.y,-I),L===0&&se.push(pe)}L===0&&U.push(se)}}ge=Mn.triangulateShape(C,U)}let te=ge.length,ue=g+m;for(let C=0;C<z;C++){let U=d?H(N[C],ve[C],ue):N[C];F?(M.copy(S.normals[0]).multiplyScalar(U.x),E.copy(S.binormals[0]).multiplyScalar(U.y),P.copy(y[0]).add(M).add(E),_e(P.x,P.y,P.z)):_e(U.x,U.y,0)}for(let C=1;C<=h;C++)for(let U=0;U<z;U++){let x=d?H(N[U],ve[U],ue):N[U];F?(M.copy(S.normals[C]).multiplyScalar(x.x),E.copy(S.binormals[C]).multiplyScalar(x.y),P.copy(y[C]).add(M).add(E),_e(P.x,P.y,P.z)):_e(x.x,x.y,p/h*C)}for(let C=v-1;C>=0;C--){let U=C/v,x=u*Math.cos(U*Math.PI/2),L=g*Math.sin(U*Math.PI/2)+m;for(let I=0,w=X.length;I<w;I++){let k=H(X[I],$[I],L);_e(k.x,k.y,p+x)}for(let I=0,w=W.length;I<w;I++){let k=W[I];be=oe[I];for(let j=0,J=k.length;j<J;j++){let se=H(k[j],be[j],L);F?_e(se.x,se.y+y[h-1].y,y[h-1].x+x):_e(se.x,se.y,p+x)}}}function ce(C,U){let x=C.length;for(;--x>=0;){let L=x,I=x-1;I<0&&(I=C.length-1);for(let w=0,k=h+2*v;w<k;w++){let j=z*w,J=z*(w+1);ee(U+L+j,U+I+j,U+I+J,U+L+J)}}}function _e(C,U,x){c.push(C),c.push(U),c.push(x)}function Fe(C,U,x){R(C),R(U),R(x);let L=r.length/3,I=_.generateTopUV(n,r,L-3,L-2,L-1);b(I[0]),b(I[1]),b(I[2])}function ee(C,U,x,L){R(C),R(U),R(L),R(U),R(x),R(L);let I=r.length/3,w=_.generateSideWallUV(n,r,I-6,I-3,I-2,I-1);b(w[0]),b(w[1]),b(w[3]),b(w[1]),b(w[2]),b(w[3])}function R(C){r.push(c[3*C+0]),r.push(c[3*C+1]),r.push(c[3*C+2])}function b(C){s.push(C.x),s.push(C.y)}(function(){let C=r.length/3;if(d){let U=0,x=z*U;for(let L=0;L<te;L++){let I=ge[L];Fe(I[2]+x,I[1]+x,I[0]+x)}U=h+2*v,x=z*U;for(let L=0;L<te;L++){let I=ge[L];Fe(I[0]+x,I[1]+x,I[2]+x)}}else{for(let U=0;U<te;U++){let x=ge[U];Fe(x[2],x[1],x[0])}for(let U=0;U<te;U++){let x=ge[U];Fe(x[0]+z*h,x[1]+z*h,x[2]+z*h)}}n.addGroup(C,r.length/3-C,0)})(),(function(){let C=r.length/3,U=0;ce(X,U),U+=X.length;for(let x=0,L=W.length;x<L;x++){let I=W[x];ce(I,U),U+=I.length}n.addGroup(C,r.length/3-C,1)})()}this.setAttribute("position",new we(r,3)),this.setAttribute("uv",new we(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n,r){if(r.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let l=t[s];r.shapes.push(l.uuid)}else r.shapes.push(t.uuid);return r.options=Object.assign({},n),n.extrudePath!==void 0&&(r.options.extrudePath=n.extrudePath.toJSON()),r})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let l=t[e.shapes[s]];n.push(l)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new va[r.type]().fromJSON(r)),new i(n,e.options)}},$d={generateTopUV:function(i,e,t,n,r){let s=e[3*t],a=e[3*t+1],l=e[3*n],c=e[3*n+1],o=e[3*r],h=e[3*r+1];return[new ie(s,a),new ie(l,c),new ie(o,h)]},generateSideWallUV:function(i,e,t,n,r,s){let a=e[3*t],l=e[3*t+1],c=e[3*t+2],o=e[3*n],h=e[3*n+1],p=e[3*n+2],d=e[3*r],u=e[3*r+1],g=e[3*r+2],m=e[3*s],v=e[3*s+1],f=e[3*s+2];return Math.abs(l-h)<Math.abs(a-o)?[new ie(a,1-c),new ie(o,1-p),new ie(d,1-g),new ie(m,1-f)]:[new ie(l,1-c),new ie(h,1-p),new ie(u,1-g),new ie(v,1-f)]}},xa=class i extends si{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Ma=class i extends Qe{constructor(e=[new ie(0,-.5),new ie(.5,0),new ie(0,.5)],t=12,n=0,r=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=Be(r,0,2*Math.PI);let s=[],a=[],l=[],c=[],o=[],h=1/t,p=new A,d=new ie,u=new A,g=new A,m=new A,v=0,f=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:v=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,u.x=1*f,u.y=-v,u.z=0*f,m.copy(u),u.normalize(),c.push(u.x,u.y,u.z);break;case e.length-1:c.push(m.x,m.y,m.z);break;default:v=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,u.x=1*f,u.y=-v,u.z=0*f,g.copy(u),u.x+=m.x,u.y+=m.y,u.z+=m.z,u.normalize(),c.push(u.x,u.y,u.z),m.copy(g)}for(let _=0;_<=t;_++){let y=n+_*h*r,S=Math.sin(y),E=Math.cos(y);for(let M=0;M<=e.length-1;M++){p.x=e[M].x*S,p.y=e[M].y,p.z=e[M].x*E,a.push(p.x,p.y,p.z),d.x=_/t,d.y=M/(e.length-1),l.push(d.x,d.y);let P=c[3*M+0]*S,F=c[3*M+1],D=c[3*M+0]*E;o.push(P,F,D)}}for(let _=0;_<t;_++)for(let y=0;y<e.length-1;y++){let S=y+_*e.length,E=S,M=S+e.length,P=S+e.length+1,F=S+1;s.push(E,M,F),s.push(P,F,M)}this.setIndex(s),this.setAttribute("position",new we(a,3)),this.setAttribute("uv",new we(l,2)),this.setAttribute("normal",new we(o,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},xi=class i extends si{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},En=class i extends Qe{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,l=Math.floor(n),c=Math.floor(r),o=l+1,h=c+1,p=e/l,d=t/c,u=[],g=[],m=[],v=[];for(let f=0;f<h;f++){let _=f*d-a;for(let y=0;y<o;y++){let S=y*p-s;g.push(S,-_,0),m.push(0,0,1),v.push(y/l),v.push(1-f/c)}}for(let f=0;f<c;f++)for(let _=0;_<l;_++){let y=_+o*f,S=_+o*(f+1),E=_+1+o*(f+1),M=_+1+o*f;u.push(y,S,M),u.push(S,E,M)}this.setIndex(u),this.setAttribute("position",new we(g,3)),this.setAttribute("normal",new we(m,3)),this.setAttribute("uv",new we(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Sa=class i extends Qe{constructor(e=.5,t=1,n=32,r=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n);let l=[],c=[],o=[],h=[],p=e,d=(t-e)/(r=Math.max(1,r)),u=new A,g=new ie;for(let m=0;m<=r;m++){for(let v=0;v<=n;v++){let f=s+v/n*a;u.x=p*Math.cos(f),u.y=p*Math.sin(f),c.push(u.x,u.y,u.z),o.push(0,0,1),g.x=(u.x/t+1)/2,g.y=(u.y/t+1)/2,h.push(g.x,g.y)}p+=d}for(let m=0;m<r;m++){let v=m*(n+1);for(let f=0;f<n;f++){let _=f+v,y=_,S=_+n+1,E=_+n+2,M=_+1;l.push(y,S,M),l.push(S,E,M)}}this.setIndex(l),this.setAttribute("position",new we(c,3)),this.setAttribute("normal",new we(o,3)),this.setAttribute("uv",new we(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},ba=class i extends Qe{constructor(e=new Xn([new ie(0,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],r=[],s=[],a=[],l=0,c=0;if(Array.isArray(e)===!1)o(e);else for(let h=0;h<e.length;h++)o(e[h]),this.addGroup(l,c,h),l+=c,c=0;function o(h){let p=r.length/3,d=h.extractPoints(t),u=d.shape,g=d.holes;Mn.isClockWise(u)===!1&&(u=u.reverse());for(let v=0,f=g.length;v<f;v++){let _=g[v];Mn.isClockWise(_)===!0&&(g[v]=_.reverse())}let m=Mn.triangulateShape(u,g);for(let v=0,f=g.length;v<f;v++){let _=g[v];u=u.concat(_)}for(let v=0,f=u.length;v<f;v++){let _=u[v];r.push(_.x,_.y,0),s.push(0,0,1),a.push(_.x,_.y)}for(let v=0,f=m.length;v<f;v++){let _=m[v],y=_[0]+p,S=_[1]+p,E=_[2]+p;n.push(y,S,E),c+=3}}this.setIndex(n),this.setAttribute("position",new we(r,3)),this.setAttribute("normal",new we(s,3)),this.setAttribute("uv",new we(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n){if(n.shapes=[],Array.isArray(t))for(let r=0,s=t.length;r<s;r++){let a=t[r];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n})(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let r=0,s=e.shapes.length;r<s;r++){let a=t[e.shapes[r]];n.push(a)}return new i(n,e.curveSegments)}},Mi=class i extends Qe{constructor(e=1,t=32,n=16,r=0,s=2*Math.PI,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+l,Math.PI),o=0,h=[],p=new A,d=new A,u=[],g=[],m=[],v=[];for(let f=0;f<=n;f++){let _=[],y=f/n,S=a+y*l,E=e*Math.cos(S),M=Math.sqrt(e*e-E*E),P=0;f===0&&a===0?P=.5/t:f===n&&c===Math.PI&&(P=-.5/t);for(let F=0;F<=t;F++){let D=F/t,N=r+D*s;p.x=-M*Math.cos(N),p.y=E,p.z=M*Math.sin(N),g.push(p.x,p.y,p.z),d.copy(p).normalize(),m.push(d.x,d.y,d.z),v.push(D+P,1-y),_.push(o++)}h.push(_)}for(let f=0;f<n;f++)for(let _=0;_<t;_++){let y=h[f][_+1],S=h[f][_],E=h[f+1][_],M=h[f+1][_+1];(f!==0||a>0)&&u.push(y,S,M),(f!==n-1||c<Math.PI)&&u.push(S,E,M)}this.setIndex(u),this.setAttribute("position",new we(g,3)),this.setAttribute("normal",new we(m,3)),this.setAttribute("uv",new we(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Ta=class i extends si{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},yt=class i extends Qe{constructor(e=1,t=.4,n=12,r=48,s=2*Math.PI,a=0,l=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:l},n=Math.floor(n),r=Math.floor(r);let c=[],o=[],h=[],p=[],d=new A,u=new A,g=new A;for(let m=0;m<=n;m++){let v=a+m/n*l;for(let f=0;f<=r;f++){let _=f/r*s;u.x=(e+t*Math.cos(v))*Math.cos(_),u.y=(e+t*Math.cos(v))*Math.sin(_),u.z=t*Math.sin(v),o.push(u.x,u.y,u.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),g.subVectors(u,d).normalize(),h.push(g.x,g.y,g.z),p.push(f/r),p.push(m/n)}}for(let m=1;m<=n;m++)for(let v=1;v<=r;v++){let f=(r+1)*m+v-1,_=(r+1)*(m-1)+v-1,y=(r+1)*(m-1)+v,S=(r+1)*m+v;c.push(f,_,S),c.push(_,y,S)}this.setIndex(c),this.setAttribute("position",new we(o,3)),this.setAttribute("normal",new we(h,3)),this.setAttribute("uv",new we(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Ea=class i extends Qe{constructor(e=1,t=.4,n=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:s,q:a},n=Math.floor(n),r=Math.floor(r);let l=[],c=[],o=[],h=[],p=new A,d=new A,u=new A,g=new A,m=new A,v=new A,f=new A;for(let y=0;y<=n;++y){let S=y/n*s*Math.PI*2;_(S,s,a,e,u),_(S+.01,s,a,e,g),v.subVectors(g,u),f.addVectors(g,u),m.crossVectors(v,f),f.crossVectors(m,v),m.normalize(),f.normalize();for(let E=0;E<=r;++E){let M=E/r*Math.PI*2,P=-t*Math.cos(M),F=t*Math.sin(M);p.x=u.x+(P*f.x+F*m.x),p.y=u.y+(P*f.y+F*m.y),p.z=u.z+(P*f.z+F*m.z),c.push(p.x,p.y,p.z),d.subVectors(p,u).normalize(),o.push(d.x,d.y,d.z),h.push(y/n),h.push(E/r)}}for(let y=1;y<=n;y++)for(let S=1;S<=r;S++){let E=(r+1)*(y-1)+(S-1),M=(r+1)*y+(S-1),P=(r+1)*y+S,F=(r+1)*(y-1)+S;l.push(E,M,F),l.push(M,P,F)}function _(y,S,E,M,P){let F=Math.cos(y),D=Math.sin(y),N=E/S*y,W=Math.cos(N);P.x=M*(2+W)*.5*F,P.y=M*(2+W)*D*.5,P.z=M*Math.sin(N)*.5}this.setIndex(l),this.setAttribute("position",new we(c,3)),this.setAttribute("normal",new we(o,3)),this.setAttribute("uv",new we(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},wa=class i extends Qe{constructor(e=new ns(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let l=new A,c=new A,o=new ie,h=new A,p=[],d=[],u=[],g=[];function m(v){h=e.getPointAt(v/t,h);let f=a.normals[v],_=a.binormals[v];for(let y=0;y<=r;y++){let S=y/r*Math.PI*2,E=Math.sin(S),M=-Math.cos(S);c.x=M*f.x+E*_.x,c.y=M*f.y+E*_.y,c.z=M*f.z+E*_.z,c.normalize(),d.push(c.x,c.y,c.z),l.x=h.x+n*c.x,l.y=h.y+n*c.y,l.z=h.z+n*c.z,p.push(l.x,l.y,l.z)}}(function(){for(let v=0;v<t;v++)m(v);m(s===!1?t:0),(function(){for(let v=0;v<=t;v++)for(let f=0;f<=r;f++)o.x=v/t,o.y=f/r,u.push(o.x,o.y)})(),(function(){for(let v=1;v<=t;v++)for(let f=1;f<=r;f++){let _=(r+1)*(v-1)+(f-1),y=(r+1)*v+(f-1),S=(r+1)*v+f,E=(r+1)*(v-1)+f;g.push(_,y,E),g.push(y,S,E)}})()})(),this.setIndex(g),this.setAttribute("position",new we(p,3)),this.setAttribute("normal",new we(d,3)),this.setAttribute("uv",new we(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new va[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Aa=class extends Qe{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,r=new A,s=new A;if(e.index!==null){let a=e.attributes.position,l=e.index,c=e.groups;c.length===0&&(c=[{start:0,count:l.count,materialIndex:0}]);for(let o=0,h=c.length;o<h;++o){let p=c[o],d=p.start;for(let u=d,g=d+p.count;u<g;u+=3)for(let m=0;m<3;m++){let v=l.getX(u+m),f=l.getX(u+(m+1)%3);r.fromBufferAttribute(a,v),s.fromBufferAttribute(a,f),Lh(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let l=0,c=a.count/3;l<c;l++)for(let o=0;o<3;o++){let h=3*l+o,p=3*l+(o+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,p),Lh(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new we(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Lh(i,e,t){let n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)!==!0&&t.has(r)!==!0&&(t.add(n),t.add(r),!0)}var ag=Object.freeze({__proto__:null,BoxGeometry:Tn,CapsuleGeometry:je,CircleGeometry:da,ConeGeometry:Wn,CylinderGeometry:et,DodecahedronGeometry:pa,EdgesGeometry:ma,ExtrudeGeometry:ai,IcosahedronGeometry:xa,LatheGeometry:Ma,OctahedronGeometry:xi,PlaneGeometry:En,PolyhedronGeometry:si,RingGeometry:Sa,ShapeGeometry:ba,SphereGeometry:Mi,TetrahedronGeometry:Ta,TorusGeometry:yt,TorusKnotGeometry:Ea,TubeGeometry:wa,WireframeGeometry:Aa});function Ri(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(Dh(r))r.isRenderTargetTexture?(Ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Dh(r[0])){let s=[];for(let a=0,l=r.length;a<l;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Lt(i){let e={};for(let t=0;t<i.length;t++){let n=Ri(i[t]);for(let r in n)e[r]=n[r]}return e}function Dh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function mc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:He.workingColorSpace}var Ru={clone:Ri,merge:Lt},Wt=class extends Gn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ri(e.uniforms),this.uniformsGroups=(function(t){let n=[];for(let r=0;r<t.length;r++)n.push(t[r].clone());return n})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new Pe().setHex(r.value);break;case"v2":this.uniforms[n].value=new ie().fromArray(r.value);break;case"v3":this.uniforms[n].value=new A().fromArray(r.value);break;case"v4":this.uniforms[n].value=new $e().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Ne().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Oe().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ca=class extends Wt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},cr=class extends Gn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},hr=class extends cr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Be(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ra=class extends Gn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Pa=class extends Gn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ks(i,e){return i&&i.constructor!==e?typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i):i}var oi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<r)){for(let l=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break t}if(!(e>=s)){let l=t[1];e<l&&(n=2,s=l);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let l=n+a>>>1;e<t[l]?a=l:n=l+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ia=class extends oi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qo,endingEnd:Qo}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,l=r[s],c=r[a];if(l===void 0)switch(this.getSettings_().endingStart){case el:s=e,l=2*t-n;break;case tl:s=r.length-2,l=t+r[s]-r[s+1];break;default:s=e,l=n}if(c===void 0)switch(this.getSettings_().endingEnd){case el:a=e,c=2*n-t;break;case tl:a=1,c=n+r[1]-r[0];break;default:a=e-1,c=t}let o=.5*(n-t),h=this.valueSize;this._weightPrev=o/(t-l),this._weightNext=o/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,o=c-l,h=this._offsetPrev,p=this._offsetNext,d=this._weightPrev,u=this._weightNext,g=(n-t)/(r-t),m=g*g,v=m*g,f=-d*v+2*d*m-d*g,_=(1+d)*v+(-1.5-2*d)*m+(-.5+d)*g+1,y=(-1-u)*v+(1.5+u)*m+.5*g,S=u*v-u*m;for(let E=0;E!==l;++E)s[E]=f*a[h+E]+_*a[o+E]+y*a[c+E]+S*a[p+E];return s}},La=class extends oi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,o=c-l,h=(n-t)/(r-t),p=1-h;for(let d=0;d!==l;++d)s[d]=a[o+d]*p+a[c+d]*h;return s}},Da=class extends oi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Na=class extends oi{interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,o=c-l,h=this.inTangents,p=this.outTangents;if(!h||!p){let g=(n-t)/(r-t),m=1-g;for(let v=0;v!==l;++v)s[v]=a[o+v]*m+a[c+v]*g;return s}let d=2*l,u=e-1;for(let g=0;g!==l;++g){let m=a[o+g],v=a[c+g],f=u*d+2*g,_=p[f],y=p[f+1],S=e*d+2*g,E=h[S],M=h[S+1],P,F,D,N,W,O=(n-t)/(r-t);for(let Z=0;Z<8;Z++){P=O*O,F=P*O,D=1-O,N=D*D,W=N*D;let X=W*t+3*N*O*_+3*D*P*E+F*r-n;if(Math.abs(X)<1e-10)break;let H=3*N*(_-t)+6*D*O*(E-_)+3*P*(r-E);if(Math.abs(H)<1e-10)break;O-=X/H,O=Math.max(0,Math.min(1,O))}s[g]=W*m+3*N*O*y+3*D*P*M+F*v}return s}},Vt=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ks(t,this.TimeBufferType),this.values=Ks(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ks(e.times,Array),values:Ks(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Da(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new La(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ia(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Na(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Or:t=this.InterpolantFactoryMethodDiscrete;break;case ia:t=this.InterpolantFactoryMethodLinear;break;case ea:t=this.InterpolantFactoryMethodSmooth;break;case $o:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return Ee("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Or;case this.InterpolantFactoryMethodLinear:return ia;case this.InterpolantFactoryMethodSmooth:return ea;case this.InterpolantFactoryMethodBezier:return $o}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let l=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*l,a*l)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ae("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(Ae("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let l=0;l!==s;l++){let c=n[l];if(typeof c=="number"&&isNaN(c)){Ae("KeyframeTrack: Time is not a valid number.",this,l,c),e=!1;break}if(a!==null&&a>c){Ae("KeyframeTrack: Out of order keys.",this,l,c,a),e=!1;break}a=c}if(r!==void 0&&bd(r))for(let l=0,c=r.length;l!==c;++l){let o=r[l];if(isNaN(o)){Ae("KeyframeTrack: Value is not a valid number.",this,l,o),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ea,s=e.length-1,a=1;for(let l=1;l<s;++l){let c=!1,o=e[l];if(o!==e[l+1]&&(l!==1||o!==e[0]))if(r)c=!0;else{let h=l*n,p=h-n,d=h+n;for(let u=0;u!==n;++u){let g=t[h+u];if(g!==t[p+u]||g!==t[d+u]){c=!0;break}}}if(c){if(l!==a){e[a]=e[l];let h=l*n,p=a*n;for(let d=0;d!==n;++d)t[p+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let l=s*n,c=a*n,o=0;o!==n;++o)t[c+o]=t[l+o];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};Vt.prototype.ValueTypeName="",Vt.prototype.TimeBufferType=Float32Array,Vt.prototype.ValueBufferType=Float32Array,Vt.prototype.DefaultInterpolation=ia;var ni=class extends Vt{constructor(e,t,n){super(e,t,n)}};ni.prototype.ValueTypeName="bool",ni.prototype.ValueBufferType=Array,ni.prototype.DefaultInterpolation=Or,ni.prototype.InterpolantFactoryMethodLinear=void 0,ni.prototype.InterpolantFactoryMethodSmooth=void 0;var Ua=class extends Vt{constructor(e,t,n,r){super(e,t,n,r)}};Ua.prototype.ValueTypeName="color";var Fa=class extends Vt{constructor(e,t,n,r){super(e,t,n,r)}};Fa.prototype.ValueTypeName="number";var Oa=class extends oi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=(n-t)/(r-t),o=e*l;for(let h=o+l;o!==h;o+=4)Kt.slerpFlat(s,0,a,o-l,a,o,c);return s}},ls=class extends Vt{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Oa(this.times,this.values,this.getValueSize(),e)}};ls.prototype.ValueTypeName="quaternion",ls.prototype.InterpolantFactoryMethodSmooth=void 0;var ii=class extends Vt{constructor(e,t,n){super(e,t,n)}};ii.prototype.ValueTypeName="string",ii.prototype.ValueBufferType=Array,ii.prototype.DefaultInterpolation=Or,ii.prototype.InterpolantFactoryMethodLinear=void 0,ii.prototype.InterpolantFactoryMethodSmooth=void 0;var Ba=class extends Vt{constructor(e,t,n,r){super(e,t,n,r)}};Ba.prototype.ValueTypeName="vector";var za=class{constructor(e,t,n){let r=this,s,a=!1,l=0,c=0,o=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){c++,a===!1&&r.onStart!==void 0&&r.onStart(h,l,c),a=!0},this.itemEnd=function(h){l++,r.onProgress!==void 0&&r.onProgress(h,l,c),l===c&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,p){return o.push(h,p),this},this.removeHandler=function(h){let p=o.indexOf(h);return p!==-1&&o.splice(p,2),this},this.getHandler=function(h){for(let p=0,d=o.length;p<d;p+=2){let u=o[p],g=o[p+1];if(u.global&&(u.lastIndex=0),u.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Pu=new za,Ga=class{constructor(e){this.manager=e!==void 0?e:Pu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ga.DEFAULT_MATERIAL_NAME="__DEFAULT";var cs=class extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},hs=class extends cs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Jo=new Oe,Nh=new A,Uh=new A,ol=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.mapType=Xt,this.map=null,this.mapPass=null,this.matrix=new Oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hn,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Nh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nh),Uh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Uh),t.updateMatrixWorld(),Jo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jo,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===er||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Jo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},$s=new A,Qs=new Kt,vn=new A,ur=class extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=Bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose($s,Qs,vn),vn.x===1&&vn.y===1&&vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($s,Qs,vn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose($s,Qs,vn),vn.x===1&&vn.y===1&&vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($s,Qs,vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ti=new A,Fh=new ie,Oh=new ie,Rt=class extends ur{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*nr*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*$i*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*nr*Math.atan(Math.tan(.5*$i*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ti.x,ti.y).multiplyScalar(-e/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ti.x,ti.y).multiplyScalar(-e/ti.z)}getViewSize(e,t){return this.getViewBounds(e,Fh,Oh),t.subVectors(Oh,Fh)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*$i*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,o=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/o,r*=a.width/c,n*=a.height/o}let l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var dr=class extends ur{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,l=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let o=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=o*this.view.offsetX,a=s+o*this.view.width,l-=h*this.view.offsetY,c=l-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ll=class extends ol{constructor(){super(new dr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},us=class extends cs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new ll}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var og=new Oe,lg=new Oe,cg=new Oe;var Ki=-90,Va=class extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Rt(Ki,1,e,t);r.layers=this.layers,this.add(r);let s=new Rt(Ki,1,e,t);s.layers=this.layers,this.add(s);let a=new Rt(Ki,1,e,t);a.layers=this.layers,this.add(a);let l=new Rt(Ki,1,e,t);l.layers=this.layers,this.add(l);let c=new Rt(Ki,1,e,t);c.layers=this.layers,this.add(c);let o=new Rt(Ki,1,e,t);o.layers=this.layers,this.add(o)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,l,c]=t;for(let o of t)this.remove(o);if(e===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else{if(e!==er)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1)}for(let o of t)this.add(o),o.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,l,c,o,h]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let v=!1;v=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,3,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(p,d,u),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ha=class extends Rt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var hg=new A,ug=new Kt,dg=new A,pg=new A,mg=new A;var fg=new A,gg=new Kt,_g=new A,vg=new A;var fc="\\[\\]\\.:\\/",Qd=new RegExp("["+fc+"]","g"),Ko="[^"+fc+"]",ep="[^"+fc.replace("\\.","")+"]",tp=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Ko)+/(WCOD+)?/.source.replace("WCOD",ep)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ko)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ko)+"$"),np=["material","materials","bones","map"],rt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Qd,"")}static parseTrackName(e){let t=tp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);np.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let l=s[a];if(l.name===t||l.uuid===t)return l;let c=n(l.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void Ee("PropertyBinding: No target node found for track: "+this.path+".");if(n){let o=t.objectIndex;switch(n){case"materials":if(!e.material)return void Ae("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void Ae("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void Ae("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===o){o=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void Ae("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void Ae("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void Ae("PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(o!==void 0){if(e[o]===void 0)return void Ae("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[o]}}let a=e[r];if(a===void 0)return void Ae("PropertyBinding: Trying to update property for track: "+t.nodeName+"."+r+" but it wasn't found.",e);let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry)return void Ae("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void Ae("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};rt.Composite=class{constructor(i,e,t){let n=t||rt.parseTrackName(e);this._targetGroup=i,this._bindings=i.subscribe_(e,n)}getValue(i,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(i,e)}setValue(i,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=t.length;n!==r;++n)t[n].setValue(i,e)}bind(){let i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].bind()}unbind(){let i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].unbind()}},rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},rt.prototype.GetterByBindingType=[rt.prototype._getValue_direct,rt.prototype._getValue_array,rt.prototype._getValue_arrayElement,rt.prototype._getValue_toArray],rt.prototype.SetterByBindingTypeAndVersioning=[[rt.prototype._setValue_direct,rt.prototype._setValue_direct_setNeedsUpdate,rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_array,rt.prototype._setValue_array_setNeedsUpdate,rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_arrayElement,rt.prototype._setValue_arrayElement_setNeedsUpdate,rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_fromArray,rt.prototype._setValue_fromArray_setNeedsUpdate,rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yg=new Float32Array(1);var xg=new Oe;var cl=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}},Mg=new ie;var Sg=new A,bg=new A,Tg=new A,Eg=new A,wg=new A,Ag=new A,Cg=new A;var Rg=new A;var Pg=new A,Ig=new Oe,Lg=new Oe;var Dg=new A,Ng=new Pe,Ug=new Pe;var Fg=new A,Og=new A,Bg=new A;var zg=new A,Gg=new ur;var Vg=new cn;var Hg=new A;function gc(i,e,t,n){let r=(function(s){switch(s){case Xt:case Cl:return{byteLength:1,components:1};case _r:case Rl:case An:return{byteLength:2,components:1};case Ya:case Za:return{byteLength:2,components:4};case jn:case qa:case dn:return{byteLength:4,components:1};case Pl:case Il:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)})(n);switch(t){case 1021:return i*e;case Ll:case Ja:return i*e/r.components*r.byteLength;case 1030:case 1031:return i*e*2/r.components*r.byteLength;case 1022:return i*e*3/r.components*r.byteLength;case pn:case 1033:return i*e*4/r.components*r.byteLength;case 33776:case 33777:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(i,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(i,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:case 37808:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(i/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(i/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}})),typeof window<"u"&&(window.__THREE__?Ee("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function Qu(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function rp(i){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=e.get(t);n&&(i.deleteBuffer(n.buffer),e.delete(t))},update:function(t,n){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let r=e.get(t);if(r===void 0)e.set(t,(function(s,a){let l=s.array,c=s.usage,o=l.byteLength,h=i.createBuffer(),p;if(i.bindBuffer(a,h),i.bufferData(a,l,c),s.onUploadCallback(),l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)p=s.isFloat16BufferAttribute?i.HALF_FLOAT:i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else{if(!(l instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);p=i.UNSIGNED_BYTE}return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:s.version,size:o}})(t,n));else if(r.version<t.version){if(r.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,l){let c=a.array,o=a.updateRanges;if(i.bindBuffer(l,s),o.length===0)i.bufferSubData(l,0,c);else{o.sort((p,d)=>p.start-d.start);let h=0;for(let p=1;p<o.length;p++){let d=o[h],u=o[p];u.start<=d.start+d.count+1?d.count=Math.max(d.count,u.start+u.count-d.start):(++h,o[h]=u)}o.length=h+1;for(let p=0,d=o.length;p<d;p++){let u=o[p];i.bufferSubData(l,u.start*c.BYTES_PER_ELEMENT,c,u.start,u.count)}a.clearUpdateRanges()}a.onUploadCallback()})(r.buffer,t,n),r.version=t.version}}}}var ze={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},de={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new A},probesMax:{value:new A},probesResolution:{value:new A}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},Rn={basic:{uniforms:Lt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Lt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Pe(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Lt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Lt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Lt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Pe(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Lt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Lt([de.points,de.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Lt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Lt([de.common,de.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Lt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Lt([de.sprite,de.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:Lt([de.common,de.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:Lt([de.lights,de.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Rn.physical={uniforms:Lt([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};var so={r:0,b:0,g:0},sp=new Oe,ed=new Ne;function ap(i,e,t,n,r,s){let a=new Pe(0),l,c,o=r===!0?0:1,h=null,p=0,d=null;function u(m){let v=m.isScene===!0?m.background:null;if(v&&v.isTexture){let f=m.backgroundBlurriness>0;v=e.get(v,f)}return v}function g(m,v){m.getRGB(so,mc(i)),t.buffers.color.setClear(so.r,so.g,so.b,v,s)}return{getClearColor:function(){return a},setClearColor:function(m,v=1){a.set(m),o=v,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(a,o)},render:function(m){let v=!1,f=u(m);f===null?g(a,o):f&&f.isColor&&(g(f,1),v=!0);let _=i.xr.getEnvironmentBlendMode();_==="additive"?t.buffers.color.setClear(0,0,0,1,s):_==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||v)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))},addToRenderList:function(m,v){let f=u(v);f&&(f.isCubeTexture||f.mapping===ms)?(c===void 0&&(c=new It(new Tn(1,1,1),new Wt({name:"BackgroundCubeMaterial",uniforms:Ri(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(_,y,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=f,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(sp.makeRotationFromEuler(v.backgroundRotation)).transpose(),f.isCubeTexture&&f.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ed),c.material.toneMapped=He.getTransfer(f.colorSpace)!==Ze,h===f&&p===f.version&&d===i.toneMapping||(c.material.needsUpdate=!0,h=f,p=f.version,d=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):f&&f.isTexture&&(l===void 0&&(l=new It(new En(2,2),new Wt({name:"BackgroundMaterial",uniforms:Ri(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=f,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=He.getTransfer(f.colorSpace)!==Ze,f.matrixAutoUpdate===!0&&f.updateMatrix(),l.material.uniforms.uvTransform.value.copy(f.matrix),h===f&&p===f.version&&d===i.toneMapping||(l.material.needsUpdate=!0,h=f,p=f.version,d=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))},dispose:function(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}}}function op(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=o(null),s=r,a=!1;function l(f){return i.bindVertexArray(f)}function c(f){return i.deleteVertexArray(f)}function o(f){let _=[],y=[],S=[];for(let E=0;E<t;E++)_[E]=0,y[E]=0,S[E]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:_,enabledAttributes:y,attributeDivisors:S,object:f,attributes:{},index:null}}function h(){let f=s.newAttributes;for(let _=0,y=f.length;_<y;_++)f[_]=0}function p(f){d(f,0)}function d(f,_){let y=s.newAttributes,S=s.enabledAttributes,E=s.attributeDivisors;y[f]=1,S[f]===0&&(i.enableVertexAttribArray(f),S[f]=1),E[f]!==_&&(i.vertexAttribDivisor(f,_),E[f]=_)}function u(){let f=s.newAttributes,_=s.enabledAttributes;for(let y=0,S=_.length;y<S;y++)_[y]!==f[y]&&(i.disableVertexAttribArray(y),_[y]=0)}function g(f,_,y,S,E,M,P){P===!0?i.vertexAttribIPointer(f,_,y,E,M):i.vertexAttribPointer(f,_,y,S,E,M)}function m(){v(),a=!0,s!==r&&(s=r,l(s.object))}function v(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:function(f,_,y,S,E){let M=!1,P=(function(F,D,N,W){let O=W.wireframe===!0,Z=n[D.id];Z===void 0&&(Z={},n[D.id]=Z);let X=F.isInstancedMesh===!0?F.id:0,H=Z[X];H===void 0&&(H={},Z[X]=H);let z=H[N.id];z===void 0&&(z={},H[N.id]=z);let V=z[O];return V===void 0&&(V=o(i.createVertexArray()),z[O]=V),V})(f,S,y,_);s!==P&&(s=P,l(s.object)),M=(function(F,D,N,W){let O=s.attributes,Z=D.attributes,X=0,H=N.getAttributes();for(let z in H)if(H[z].location>=0){let V=O[z],$=Z[z];if($===void 0&&(z==="instanceMatrix"&&F.instanceMatrix&&($=F.instanceMatrix),z==="instanceColor"&&F.instanceColor&&($=F.instanceColor)),V===void 0||V.attribute!==$||$&&V.data!==$.data)return!0;X++}return s.attributesNum!==X||s.index!==W})(f,S,y,E),M&&(function(F,D,N,W){let O={},Z=D.attributes,X=0,H=N.getAttributes();for(let z in H)if(H[z].location>=0){let V=Z[z];V===void 0&&(z==="instanceMatrix"&&F.instanceMatrix&&(V=F.instanceMatrix),z==="instanceColor"&&F.instanceColor&&(V=F.instanceColor));let $={};$.attribute=V,V&&V.data&&($.data=V.data),O[z]=$,X++}s.attributes=O,s.attributesNum=X,s.index=W})(f,S,y,E),E!==null&&e.update(E,i.ELEMENT_ARRAY_BUFFER),(M||a)&&(a=!1,(function(F,D,N,W){h();let O=W.attributes,Z=N.getAttributes(),X=D.defaultAttributeValues;for(let H in Z){let z=Z[H];if(z.location>=0){let V=O[H];if(V===void 0&&(H==="instanceMatrix"&&F.instanceMatrix&&(V=F.instanceMatrix),H==="instanceColor"&&F.instanceColor&&(V=F.instanceColor)),V!==void 0){let $=V.normalized,oe=V.itemSize,be=e.get(V);if(be===void 0)continue;let ge=be.buffer,ve=be.type,te=be.bytesPerElement,ue=ve===i.INT||ve===i.UNSIGNED_INT||V.gpuType===qa;if(V.isInterleavedBufferAttribute){let ce=V.data,_e=ce.stride,Fe=V.offset;if(ce.isInstancedInterleavedBuffer){for(let ee=0;ee<z.locationSize;ee++)d(z.location+ee,ce.meshPerAttribute);F.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ee=0;ee<z.locationSize;ee++)p(z.location+ee);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let ee=0;ee<z.locationSize;ee++)g(z.location+ee,oe/z.locationSize,ve,$,_e*te,(Fe+oe/z.locationSize*ee)*te,ue)}else{if(V.isInstancedBufferAttribute){for(let ce=0;ce<z.locationSize;ce++)d(z.location+ce,V.meshPerAttribute);F.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let ce=0;ce<z.locationSize;ce++)p(z.location+ce);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let ce=0;ce<z.locationSize;ce++)g(z.location+ce,oe/z.locationSize,ve,$,oe*te,oe/z.locationSize*ce*te,ue)}}else if(X!==void 0){let $=X[H];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(z.location,$);break;case 3:i.vertexAttrib3fv(z.location,$);break;case 4:i.vertexAttrib4fv(z.location,$);break;default:i.vertexAttrib1fv(z.location,$)}}}}u()})(f,_,y,S),E!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(E).buffer))},reset:m,resetDefaultState:v,dispose:function(){m();for(let f in n){let _=n[f];for(let y in _){let S=_[y];for(let E in S){let M=S[E];for(let P in M)c(M[P].object),delete M[P];delete S[E]}}delete n[f]}},releaseStatesOfGeometry:function(f){if(n[f.id]===void 0)return;let _=n[f.id];for(let y in _){let S=_[y];for(let E in S){let M=S[E];for(let P in M)c(M[P].object),delete M[P];delete S[E]}}delete n[f.id]},releaseStatesOfObject:function(f){for(let _ in n){let y=n[_],S=f.isInstancedMesh===!0?f.id:0,E=y[S];if(E!==void 0){for(let M in E){let P=E[M];for(let F in P)c(P[F].object),delete P[F];delete E[M]}delete y[S],Object.keys(y).length===0&&delete n[_]}}},releaseStatesOfProgram:function(f){for(let _ in n){let y=n[_];for(let S in y){let E=y[S];if(E[f.id]===void 0)continue;let M=E[f.id];for(let P in M)c(M[P].object),delete M[P];delete E[f.id]}}},initAttributes:h,enableAttribute:p,disableUnusedAttributes:u}}function lp(i,e,t){let n;this.setMode=function(r){n=r},this.render=function(r,s){i.drawArrays(n,r,s),t.update(s,n,1)},this.renderInstances=function(r,s,a){a!==0&&(i.drawArraysInstanced(n,r,s,a),t.update(s,n,a))},this.renderMultiDraw=function(r,s,a){if(a===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,r,0,s,0,a);let l=0;for(let c=0;c<a;c++)l+=s[c];t.update(l,n,1)}}function cp(i,e,t,n){let r;function s(h){if(h==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";h="mediump"}return h==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",l=s(a);l!==a&&(Ee("WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=t.logarithmicDepthBuffer===!0,o=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");return t.reversedDepthBuffer===!0&&o===!1&&Ee("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),{isWebGL2:!0,getMaxAnisotropy:function(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let h=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(h.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r},getMaxPrecision:s,textureFormatReadable:function(h){return h===pn||n.convert(h)===i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(h){let p=h===An&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(h!==Xt&&n.convert(h)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&h!==dn&&!p)},precision:a,logarithmicDepthBuffer:c,reversedDepthBuffer:o,maxTextures:i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),maxVertexTextures:i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),maxTextureSize:i.getParameter(i.MAX_TEXTURE_SIZE),maxCubemapSize:i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:i.getParameter(i.MAX_VERTEX_ATTRIBS),maxVertexUniforms:i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:i.getParameter(i.MAX_VARYING_VECTORS),maxFragmentUniforms:i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),maxSamples:i.getParameter(i.MAX_SAMPLES),samples:i.getParameter(i.SAMPLES)}}function hp(i){let e=this,t=null,n=0,r=!1,s=!1,a=new yn,l=new Ne,c={value:null,needsUpdate:!1};function o(h,p,d,u){let g=h!==null?h.length:0,m=null;if(g!==0){if(m=c.value,u!==!0||m===null){let v=d+4*g,f=p.matrixWorldInverse;l.getNormalMatrix(f),(m===null||m.length<v)&&(m=new Float32Array(v));for(let _=0,y=d;_!==g;++_,y+=4)a.copy(h[_]).applyMatrix4(f,l),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){let d=h.length!==0||p||n!==0||r;return r=p,n=h.length,d},this.beginShadows=function(){s=!0,o(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,p){t=o(h,p,0)},this.setState=function(h,p,d){let u=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,v=i.get(h);if(!r||u===null||u.length===0||s&&!m)s?o(null):(function(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0})();else{let f=s?0:n,_=4*f,y=v.clippingState||null;c.value=y,y=o(u,p,_,d);for(let S=0;S!==_;++S)y[S]=t[S];v.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=f}}}ed.set(-1,0,0,0,1,0,0,0,1);var Iu=[.125,.215,.35,.446,.526,.582],gs=20,_s=new dr,Lu=new Pe,_c=null,vc=0,yc=0,xc=!1,up=new A,oo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:a=256,position:l=up}=s;_c=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel(),xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,l),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(_c,vc,yc),this._renderer.xr.enabled=xc,e.scissorTest=!1,yr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gr||e.mapping===bi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_c=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel(),xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:An,format:pn,colorSpace:Br,depthBuffer:!1},r=Du(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Du(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=(function(a){let l=[],c=[],o=[],h=a,p=a-4+1+Iu.length;for(let d=0;d<p;d++){let u=Math.pow(2,h);l.push(u);let g=1/u;d>a-4?g=Iu[d-a+4-1]:d===0&&(g=0),c.push(g);let m=1/(u-2),v=-m,f=1+m,_=[v,v,f,v,f,f,v,v,f,f,v,f],y=6,S=6,E=3,M=2,P=1,F=new Float32Array(E*S*y),D=new Float32Array(M*S*y),N=new Float32Array(P*S*y);for(let O=0;O<y;O++){let Z=O%3*2/3-1,X=O>2?0:-1,H=[Z,X,0,Z+2/3,X,0,Z+2/3,X+1,0,Z,X,0,Z+2/3,X+1,0,Z,X+1,0];F.set(H,E*S*O),D.set(_,M*S*O);let z=[O,O,O,O,O,O];N.set(z,P*S*O)}let W=new Qe;W.setAttribute("position",new Ot(F,E)),W.setAttribute("uv",new Ot(D,M)),W.setAttribute("faceIndex",new Ot(N,P)),o.push(new It(W,null)),h>4&&h--}return{lodMeshes:o,sizeLods:l,sigmas:c}})(s)),this._blurMaterial=(function(a,l,c){let o=new Float32Array(gs),h=new A(0,1,0);return new Wt({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/l,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:o},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})})(s,e,t),this._ggxMaterial=(function(a,l,c){return new Wt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:256,CUBEUV_TEXEL_WIDTH:1/l,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:wn,depthTest:!1,depthWrite:!1})})(s,e,t)}return r}_compileMaterial(e){let t=new It(new Qe,e);this._renderer.compile(t,_s)}_sceneToCubeUV(e,t,n,r,s){let a=new Rt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],o=this._renderer,h=o.autoClear,p=o.toneMapping;o.getClearColor(Lu),o.toneMapping=un,o.autoClear=!1,o.state.buffers.depth.getReversed()&&(o.setRenderTarget(r),o.clearDepth(),o.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new It(new Tn,new Vn({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,u=d.material,g=!1,m=e.background;m?m.isColor&&(u.color.copy(m),e.background=null,g=!0):(u.color.copy(Lu),g=!0);for(let v=0;v<6;v++){let f=v%3;f===0?(a.up.set(0,l[v],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x+c[v],s.y,s.z)):f===1?(a.up.set(0,0,l[v]),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y+c[v],s.z)):(a.up.set(0,l[v],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y,s.z+c[v]));let _=this._cubeSize;yr(r,f*_,v>2?_:0,_,_),o.setRenderTarget(r),g&&o.render(d,a),o.render(e,a)}o.toneMapping=p,o.autoClear=h,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===gr||e.mapping===bi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nu());let s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s,s.uniforms.envMap.value=e;let l=this._cubeSize;yr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,_s)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[n];l.material=a;let c=a.uniforms,o=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),p=Math.sqrt(o*o-h*h)*(0+1.25*o),{_lodMax:d}=this,u=this._sizeLods[n],g=3*u*(n>d-4?n-d+4:0),m=4*(this._cubeSize-u);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=d-t,yr(s,g,m,3*u,2*u),r.setRenderTarget(s),r.render(l,_s),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=d-n,yr(e,g,m,3*u,2*u),r.setRenderTarget(e),r.render(l,_s)}_blur(e,t,n,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,l){let c=this._renderer,o=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ae("blur direction must be either latitudinal or longitudinal!");let h=this._lodMeshes[r];h.material=o;let p=o.uniforms,d=this._sizeLods[n]-1,u=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,g=s/u,m=isFinite(s)?1+Math.floor(3*g):gs;m>gs&&Ee(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);let v=[],f=0;for(let S=0;S<gs;++S){let E=S/g,M=Math.exp(-E*E/2);v.push(M),S===0?f+=M:S<m&&(f+=2*M)}for(let S=0;S<v.length;S++)v[S]=v[S]/f;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=v,p.latitudinal.value=a==="latitudinal",l&&(p.poleAxis.value=l);let{_lodMax:_}=this;p.dTheta.value=u,p.mipInt.value=_-n;let y=this._sizeLods[r];yr(t,3*y*(r>_-4?r-_+4:0),4*(this._cubeSize-y),3*y,2*y),c.setRenderTarget(t),c.render(h,_s)}};function Du(i,e,t){let n=new Ht(i,e,t);return n.texture.mapping=ms,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function yr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Nu(){return new Wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Uu(){return new Wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function lo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var co=class extends Ht{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Jr(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Tn(5,5,5),s=new Wt({name:"CubemapFromEquirect",uniforms:Ri(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bt,blending:wn});s.uniforms.tEquirect.value=t;let a=new It(r,s),l=t.minFilter;return t.minFilter===Ti&&(t.minFilter=Pt),new Va(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}};function dp(i){let e=new WeakMap,t=new WeakMap,n=null;function r(l,c){return c===Wa?l.mapping=gr:c===Xa&&(l.mapping=bi),l}function s(l){let c=l.target;c.removeEventListener("dispose",s);let o=e.get(c);o!==void 0&&(e.delete(c),o.dispose())}function a(l){let c=l.target;c.removeEventListener("dispose",a);let o=t.get(c);o!==void 0&&(t.delete(c),o.dispose())}return{get:function(l,c=!1){return l==null?null:c?(function(o){if(o&&o.isTexture){let h=o.mapping,p=h===Wa||h===Xa,d=h===gr||h===bi;if(p||d){let u=t.get(o),g=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==g)return n===null&&(n=new oo(i)),u=p?n.fromEquirectangular(o,u):n.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let m=o.image;return p&&m&&m.height>0||d&&m&&(function(v){let f=0,_=6;for(let y=0;y<_;y++)v[y]!==void 0&&f++;return f===_})(m)?(n===null&&(n=new oo(i)),u=p?n.fromEquirectangular(o):n.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",a),u.texture):null}}}return o})(l):(function(o){if(o&&o.isTexture){let h=o.mapping;if(h===Wa||h===Xa){if(e.has(o))return r(e.get(o).texture,o.mapping);{let p=o.image;if(p&&p.height>0){let d=new co(p.height);return d.fromEquirectangularTexture(i,o),e.set(o,d),o.addEventListener("dispose",s),r(d.texture,o.mapping)}return null}}}return o})(l)},dispose:function(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}}}function pp(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&_i("WebGLRenderer: "+n+" extension not supported."),r}}}function mp(i,e,t,n){let r={},s=new WeakMap;function a(c){let o=c.target;o.index!==null&&e.remove(o.index);for(let p in o.attributes)e.remove(o.attributes[p]);o.removeEventListener("dispose",a),delete r[o.id];let h=s.get(o);h&&(e.remove(h),s.delete(o)),n.releaseStatesOfGeometry(o),o.isInstancedBufferGeometry===!0&&delete o._maxInstanceCount,t.memory.geometries--}function l(c){let o=[],h=c.index,p=c.attributes.position,d=0;if(p===void 0)return;if(h!==null){let m=h.array;d=h.version;for(let v=0,f=m.length;v<f;v+=3){let _=m[v+0],y=m[v+1],S=m[v+2];o.push(_,y,y,S,S,_)}}else{let m=p.array;d=p.version;for(let v=0,f=m.length/3-1;v<f;v+=3){let _=v+0,y=v+1,S=v+2;o.push(_,y,y,S,S,_)}}let u=new(p.count>=65535?qr:jr)(o,1);u.version=d;let g=s.get(c);g&&e.remove(g),s.set(c,u)}return{get:function(c,o){return r[o.id]===!0||(o.addEventListener("dispose",a),r[o.id]=!0,t.memory.geometries++),o},update:function(c){let o=c.attributes;for(let h in o)e.update(o[h],i.ARRAY_BUFFER)},getWireframeAttribute:function(c){let o=s.get(c);if(o){let h=c.index;h!==null&&o.version<h.version&&l(c)}else l(c);return s.get(c)}}}function fp(i,e,t){let n,r,s;this.setMode=function(a){n=a},this.setIndex=function(a){r=a.type,s=a.bytesPerElement},this.render=function(a,l){i.drawElements(n,l,r,a*s),t.update(l,n,1)},this.renderInstances=function(a,l,c){c!==0&&(i.drawElementsInstanced(n,l,r,a*s,c),t.update(l,n,c))},this.renderMultiDraw=function(a,l,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,l,0,r,a,0,c);let o=0;for(let h=0;h<c;h++)o+=l[h];t.update(o,n,1)}}function gp(i){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,r){switch(e.calls++,n){case i.TRIANGLES:e.triangles+=r*(t/3);break;case i.LINES:e.lines+=r*(t/2);break;case i.LINE_STRIP:e.lines+=r*(t-1);break;case i.LINE_LOOP:e.lines+=r*t;break;case i.POINTS:e.points+=r*t;break;default:Ae("WebGLInfo: Unknown draw mode:",n)}}}}function _p(i,e,t){let n=new WeakMap,r=new $e;return{update:function(s,a,l){let c=s.morphTargetInfluences,o=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=o!==void 0?o.length:0,p=n.get(a);if(p===void 0||p.count!==h){let F=function(){M.dispose(),n.delete(a),a.removeEventListener("dispose",F)};p!==void 0&&p.texture.dispose();let d=a.morphAttributes.position!==void 0,u=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],f=a.morphAttributes.color||[],_=0;d===!0&&(_=1),u===!0&&(_=2),g===!0&&(_=3);let y=a.attributes.position.count*_,S=1;y>e.maxTextureSize&&(S=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let E=new Float32Array(y*S*4*h),M=new Hr(E,y,S,h);M.type=dn,M.needsUpdate=!0;let P=4*_;for(let D=0;D<h;D++){let N=m[D],W=v[D],O=f[D],Z=y*S*4*D;for(let X=0;X<N.count;X++){let H=X*P;d===!0&&(r.fromBufferAttribute(N,X),E[Z+H+0]=r.x,E[Z+H+1]=r.y,E[Z+H+2]=r.z,E[Z+H+3]=0),u===!0&&(r.fromBufferAttribute(W,X),E[Z+H+4]=r.x,E[Z+H+5]=r.y,E[Z+H+6]=r.z,E[Z+H+7]=0),g===!0&&(r.fromBufferAttribute(O,X),E[Z+H+8]=r.x,E[Z+H+9]=r.y,E[Z+H+10]=r.z,E[Z+H+11]=O.itemSize===4?r.w:1)}}p={count:h,texture:M,size:new ie(y,S)},n.set(a,p),a.addEventListener("dispose",F)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let d=0;for(let g=0;g<c.length;g++)d+=c[g];let u=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",u),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}}}function vp(i,e,t,n,r){let s=new WeakMap;function a(l){let c=l.target;c.removeEventListener("dispose",a),n.releaseStatesOfObject(c),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:function(l){let c=r.render.frame,o=l.geometry,h=e.get(l,o);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return h},dispose:function(){s=new WeakMap}}}var yp={[Ml]:"LINEAR_TONE_MAPPING",[Sl]:"REINHARD_TONE_MAPPING",[bl]:"CINEON_TONE_MAPPING",[ps]:"ACES_FILMIC_TONE_MAPPING",[El]:"AGX_TONE_MAPPING",[wl]:"NEUTRAL_TONE_MAPPING",[Tl]:"CUSTOM_TONE_MAPPING"};function xp(i,e,t,n,r,s){let a=new Ht(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,depthTexture:r?new kn(e,t):void 0}),l=new Ht(e,t,{type:An,depthBuffer:!1,stencilBuffer:!1}),c=new Qe;c.setAttribute("position",new we([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new we([0,2,0,0,2,0],2));let o=new Ca({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new It(c,o),p=new dr(-1,1,1,-1,0,1),d,u=null,g=null,m=!1,v=null,f=[],_=!1;this.setSize=function(y,S){a.setSize(y,S),l.setSize(y,S);for(let E=0;E<f.length;E++){let M=f[E];M.setSize&&M.setSize(y,S)}},this.setEffects=function(y){f=y,_=f.length>0&&f[0].isRenderPass===!0;let S=a.width,E=a.height;for(let M=0;M<f.length;M++){let P=f[M];P.setSize&&P.setSize(S,E)}},this.begin=function(y,S){if(m||y.toneMapping===un&&f.length===0)return!1;if(v=S,S!==null){let E=S.width,M=S.height;a.width===E&&a.height===M||this.setSize(E,M)}return _===!1&&y.setRenderTarget(a),d=y.toneMapping,y.toneMapping=un,!0},this.hasRenderPass=function(){return _},this.end=function(y,S){y.toneMapping=d,m=!0;let E=a,M=l;for(let P=0;P<f.length;P++){let F=f[P];if(F.enabled!==!1&&(F.render(y,M,E,S),F.needsSwap!==!1)){let D=E;E=M,M=D}}if(u!==y.outputColorSpace||g!==y.toneMapping){u=y.outputColorSpace,g=y.toneMapping,o.defines={},He.getTransfer(u)===Ze&&(o.defines.SRGB_TRANSFER="");let P=yp[g];P&&(o.defines[P]=""),o.needsUpdate=!0}o.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(v),y.render(h,p),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),l.dispose(),c.dispose(),o.dispose()}}var td=new Ut,bc=new kn(1,1),nd=new Hr,id=new oa,rd=new Jr,Fu=[],Ou=[],Bu=new Float32Array(16),zu=new Float32Array(9),Gu=new Float32Array(4);function Mr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Fu[r];if(s===void 0&&(s=new Float32Array(r),Fu[r]=s),e!==0){n.toArray(s,0);for(let a=1,l=0;a!==e;++a)l+=t,i[a].toArray(s,l)}return s}function xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Mt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function uo(i,e){let t=Ou[e];t===void 0&&(t=new Int32Array(e),Ou[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Mp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Sp(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2fv(this.addr,e),Mt(t,e)}}function bp(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;i.uniform3fv(this.addr,e),Mt(t,e)}}function Tp(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4fv(this.addr,e),Mt(t,e)}}function Ep(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,n))return;Gu.set(n),i.uniformMatrix2fv(this.addr,!1,Gu),Mt(t,n)}}function wp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,n))return;zu.set(n),i.uniformMatrix3fv(this.addr,!1,zu),Mt(t,n)}}function Ap(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,n))return;Bu.set(n),i.uniformMatrix4fv(this.addr,!1,Bu),Mt(t,n)}}function Cp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Rp(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2iv(this.addr,e),Mt(t,e)}}function Pp(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3iv(this.addr,e),Mt(t,e)}}function Ip(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4iv(this.addr,e),Mt(t,e)}}function Lp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Dp(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2uiv(this.addr,e),Mt(t,e)}}function Np(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3uiv(this.addr,e),Mt(t,e)}}function Up(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4uiv(this.addr,e),Mt(t,e)}}function Fp(i,e,t){let n=this.cache,r=t.allocateTextureUnit(),s;n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),this.type===i.SAMPLER_2D_SHADOW?(bc.compareFunction=t.isReversedDepthBuffer()?ro:io,s=bc):s=td,t.setTexture2D(e||s,r)}function Op(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||id,r)}function Bp(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||rd,r)}function zp(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||nd,r)}function Gp(i,e){i.uniform1fv(this.addr,e)}function Vp(i,e){let t=Mr(e,this.size,2);i.uniform2fv(this.addr,t)}function Hp(i,e){let t=Mr(e,this.size,3);i.uniform3fv(this.addr,t)}function kp(i,e){let t=Mr(e,this.size,4);i.uniform4fv(this.addr,t)}function Wp(i,e){let t=Mr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Xp(i,e){let t=Mr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function jp(i,e){let t=Mr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function qp(i,e){i.uniform1iv(this.addr,e)}function Yp(i,e){i.uniform2iv(this.addr,e)}function Zp(i,e){i.uniform3iv(this.addr,e)}function Jp(i,e){i.uniform4iv(this.addr,e)}function Kp(i,e){i.uniform1uiv(this.addr,e)}function $p(i,e){i.uniform2uiv(this.addr,e)}function Qp(i,e){i.uniform3uiv(this.addr,e)}function em(i,e){i.uniform4uiv(this.addr,e)}function tm(i,e,t){let n=this.cache,r=e.length,s=uo(t,r),a;xt(n,s)||(i.uniform1iv(this.addr,s),Mt(n,s)),a=this.type===i.SAMPLER_2D_SHADOW?bc:td;for(let l=0;l!==r;++l)t.setTexture2D(e[l]||a,s[l])}function nm(i,e,t){let n=this.cache,r=e.length,s=uo(t,r);xt(n,s)||(i.uniform1iv(this.addr,s),Mt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||id,s[a])}function im(i,e,t){let n=this.cache,r=e.length,s=uo(t,r);xt(n,s)||(i.uniform1iv(this.addr,s),Mt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||rd,s[a])}function rm(i,e,t){let n=this.cache,r=e.length,s=uo(t,r);xt(n,s)||(i.uniform1iv(this.addr,s),Mt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||nd,s[a])}var Tc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=(function(r){switch(r){case 5126:return Mp;case 35664:return Sp;case 35665:return bp;case 35666:return Tp;case 35674:return Ep;case 35675:return wp;case 35676:return Ap;case 5124:case 35670:return Cp;case 35667:case 35671:return Rp;case 35668:case 35672:return Pp;case 35669:case 35673:return Ip;case 5125:return Lp;case 36294:return Dp;case 36295:return Np;case 36296:return Up;case 35678:case 36198:case 36298:case 36306:case 35682:return Fp;case 35679:case 36299:case 36307:return Op;case 35680:case 36300:case 36308:case 36293:return Bp;case 36289:case 36303:case 36311:case 36292:return zp}})(t.type)}},Ec=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(r){switch(r){case 5126:return Gp;case 35664:return Vp;case 35665:return Hp;case 35666:return kp;case 35674:return Wp;case 35675:return Xp;case 35676:return jp;case 5124:case 35670:return qp;case 35667:case 35671:return Yp;case 35668:case 35672:return Zp;case 35669:case 35673:return Jp;case 5125:return Kp;case 36294:return $p;case 36295:return Qp;case 36296:return em;case 35678:case 36198:case 36298:case 36306:case 35682:return tm;case 35679:case 36299:case 36307:return nm;case 35680:case 36300:case 36308:case 36293:return im;case 36289:case 36303:case 36311:case 36292:return rm}})(t.type)}},wc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let l=r[s];l.setValue(e,t[l.id],n)}}},Mc=/(\w+)(\])?(\[|\.)?/g;function Vu(i,e){i.seq.push(e),i.map[e.id]=e}function sm(i,e,t){let n=i.name,r=n.length;for(Mc.lastIndex=0;;){let s=Mc.exec(n),a=Mc.lastIndex,l=s[1],c=s[2]==="]",o=s[3];if(c&&(l|=0),o===void 0||o==="["&&a+2===r){Vu(t,o===void 0?new Tc(l,i,e):new Ec(l,i,e));break}{let h=t.map[l];h===void 0&&(h=new wc(l),Vu(t,h)),t=h}}}var xr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let l=e.getActiveUniform(t,a);sm(l,e.getUniformLocation(t,l.name),this)}let r=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let l=t[s],c=n[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function Hu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var am=0,ku=new Ne;function Wu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+(function(l,c){let o=l.split(`
`),h=[],p=Math.max(c-6,0),d=Math.min(c+6,o.length);for(let u=p;u<d;u++){let g=u+1;h.push(`${g===c?">":" "} ${g}: ${o[u]}`)}return h.join(`
`)})(i.getShaderSource(e),a)}return r}function om(i,e){let t=(function(n){He._getMatrix(ku,He.workingColorSpace,n);let r=`mat3( ${ku.elements.map(s=>s.toFixed(4))} )`;switch(He.getTransfer(n)){case zr:return[r,"LinearTransferOETF"];case Ze:return[r,"sRGBTransferOETF"];default:return Ee("WebGLProgram: Unsupported color space: ",n),[r,"LinearTransferOETF"]}})(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var lm={[Ml]:"Linear",[Sl]:"Reinhard",[bl]:"Cineon",[ps]:"ACESFilmic",[El]:"AgX",[wl]:"Neutral",[Tl]:"Custom"};function cm(i,e){let t=lm[e];return t===void 0?(Ee("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ao=new A;function hm(){return He.getLuminanceCoefficients(ao),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${ao.x.toFixed(4)}, ${ao.y.toFixed(4)}, ${ao.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vs(i){return i!==""}function Xu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ju(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var um=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ac(i){return i.replace(um,pm)}var dm=new Map;function pm(i,e){let t=ze[e];if(t===void 0){let n=dm.get(e);if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");t=ze[n],Ee('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return Ac(t)}var mm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qu(i){return i.replace(mm,fm)}function fm(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Yu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var gm={[Si]:"SHADOWMAP_TYPE_PCF",[pr]:"SHADOWMAP_TYPE_VSM"},_m={[gr]:"ENVMAP_TYPE_CUBE",[bi]:"ENVMAP_TYPE_CUBE",[ms]:"ENVMAP_TYPE_CUBE_UV"},vm={[bi]:"ENVMAP_MODE_REFRACTION"},ym={[ou]:"ENVMAP_BLENDING_MULTIPLY",[lu]:"ENVMAP_BLENDING_MIX",[cu]:"ENVMAP_BLENDING_ADD"};function xm(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,l=t.fragmentShader,c=(function(W){return gm[W.shadowMapType]||"SHADOWMAP_TYPE_BASIC"})(t),o=(function(W){return W.envMap===!1?"ENVMAP_TYPE_CUBE":_m[W.envMapMode]||"ENVMAP_TYPE_CUBE"})(t),h=(function(W){return W.envMap===!1?"ENVMAP_MODE_REFLECTION":vm[W.envMapMode]||"ENVMAP_MODE_REFLECTION"})(t),p=(function(W){return W.envMap===!1?"ENVMAP_BLENDING_NONE":ym[W.combine]||"ENVMAP_BLENDING_NONE"})(t),d=(function(W){let O=W.envMapCubeUVHeight;if(O===null)return null;let Z=Math.log2(O)-2,X=1/O;return{texelWidth:1/(3*Math.max(Math.pow(2,Z),112)),texelHeight:X,maxMip:Z}})(t),u=(function(W){return[W.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",W.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vs).join(`
`)})(t),g=(function(W){let O=[];for(let Z in W){let X=W[Z];X!==!1&&O.push("#define "+Z+" "+X)}return O.join(`
`)})(s),m=r.createProgram(),v,f,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(vs).join(`
`),v.length>0&&(v+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(vs).join(`
`),f.length>0&&(f+=`
`)):(v=[Yu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vs).join(`
`),f=[Yu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+o:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==un?"#define TONE_MAPPING":"",t.toneMapping!==un?ze.tonemapping_pars_fragment:"",t.toneMapping!==un?cm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,om("linearToOutputTexel",t.outputColorSpace),hm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vs).join(`
`)),a=Ac(a),a=Xu(a,t),a=ju(a,t),l=Ac(l),l=Xu(l,t),l=ju(l,t),a=qu(a),l=qu(l),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,v=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,f=["#define varying in",t.glslVersion===dc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let y=_+v+a,S=_+f+l,E=Hu(r,r.VERTEX_SHADER,y),M=Hu(r,r.FRAGMENT_SHADER,S);function P(W){if(i.debug.checkShaderErrors){let O=r.getProgramInfoLog(m)||"",Z=r.getShaderInfoLog(E)||"",X=r.getShaderInfoLog(M)||"",H=O.trim(),z=Z.trim(),V=X.trim(),$=!0,oe=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,m,E,M);else{let be=Wu(r,E,"vertex"),ge=Wu(r,M,"fragment");Ae("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+W.name+`
Material Type: `+W.type+`

Program Info Log: `+H+`
`+be+`
`+ge)}else H!==""?Ee("WebGLProgram: Program Info Log:",H):z!==""&&V!==""||(oe=!1);oe&&(W.diagnostics={runnable:$,programLog:H,vertexShader:{log:z,prefix:v},fragmentShader:{log:V,prefix:f}})}r.deleteShader(E),r.deleteShader(M),F=new xr(r,m),D=(function(O,Z){let X={},H=O.getProgramParameter(Z,O.ACTIVE_ATTRIBUTES);for(let z=0;z<H;z++){let V=O.getActiveAttrib(Z,z),$=V.name,oe=1;V.type===O.FLOAT_MAT2&&(oe=2),V.type===O.FLOAT_MAT3&&(oe=3),V.type===O.FLOAT_MAT4&&(oe=4),X[$]={type:V.type,location:O.getAttribLocation(Z,$),locationSize:oe}}return X})(r,m)}let F,D;r.attachShader(m,E),r.attachShader(m,M),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),this.getUniforms=function(){return F===void 0&&P(this),F},this.getAttributes=function(){return D===void 0&&P(this),D};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(m,37297)),N},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=am++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=M,this}var Mm=0,Cc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Rc(e),t.set(e,n)),n}},Rc=class{constructor(e){this.id=Mm++,this.code=e,this.usedTimes=0}};function Sm(i,e,t,n,r,s){let a=new kr,l=new Cc,c=new Set,o=[],h=new Map,p=n.logarithmicDepthBuffer,d=n.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(m){return c.add(m),m===0?"uv":`uv${m}`}return{getParameters:function(m,v,f,_,y,S){let E=_.fog,M=y.geometry,P=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?_.environment:null,F=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,D=e.get(m.envMap||P,F),N=D&&D.mapping===ms?D.image.height:null,W=u[m.type];m.precision!==null&&(d=n.getMaxPrecision(m.precision),d!==m.precision&&Ee("WebGLProgram.getParameters:",m.precision,"not supported, using",d,"instead."));let O=M.morphAttributes.position||M.morphAttributes.normal||M.morphAttributes.color,Z=O!==void 0?O.length:0,X,H,z,V,$=0;if(M.morphAttributes.position!==void 0&&($=1),M.morphAttributes.normal!==void 0&&($=2),M.morphAttributes.color!==void 0&&($=3),W){let en=Rn[W];X=en.vertexShader,H=en.fragmentShader}else{X=m.vertexShader,H=m.fragmentShader;let en=l.getVertexShaderStage(m),ci=l.getFragmentShaderStage(m);l.update(m,en,ci),z=en.id,V=ci.id}let oe=i.getRenderTarget(),be=i.state.buffers.depth.getReversed(),ge=y.isInstancedMesh===!0,ve=y.isBatchedMesh===!0,te=!!m.map,ue=!!m.matcap,ce=!!D,_e=!!m.aoMap,Fe=!!m.lightMap,ee=!!m.bumpMap&&m.wireframe===!1,R=!!m.normalMap,b=!!m.displacementMap,C=!!m.emissiveMap,U=!!m.metalnessMap,x=!!m.roughnessMap,L=m.anisotropy>0,I=m.clearcoat>0,w=m.dispersion>0,k=m.iridescence>0,j=m.sheen>0,J=m.transmission>0,se=L&&!!m.anisotropyMap,xe=I&&!!m.clearcoatMap,Me=I&&!!m.clearcoatNormalMap,pe=I&&!!m.clearcoatRoughnessMap,Re=k&&!!m.iridescenceMap,ne=k&&!!m.iridescenceThicknessMap,ae=j&&!!m.sheenColorMap,re=j&&!!m.sheenRoughnessMap,fe=!!m.specularMap,tt=!!m.specularColorMap,qe=!!m.specularIntensityMap,dt=J&&!!m.transmissionMap,Dt=J&&!!m.thicknessMap,Te=!!m.gradientMap,Je=!!m.alphaMap,Ge=m.alphaTest>0,bt=!!m.alphaHash,nt=!!m.extensions,_t=un;m.toneMapped&&(oe!==null&&oe.isXRRenderTarget!==!0||(_t=i.toneMapping));let ut={shaderID:W,shaderType:m.type,shaderName:m.name,vertexShader:X,fragmentShader:H,defines:m.defines,customVertexShaderID:z,customFragmentShaderID:V,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:d,batching:ve,batchingColor:ve&&y._colorsTexture!==null,instancing:ge,instancingColor:ge&&y.instanceColor!==null,instancingMorph:ge&&y.morphTexture!==null,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:He.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:te,matcap:ue,envMap:ce,envMapMode:ce&&D.mapping,envMapCubeUVHeight:N,aoMap:_e,lightMap:Fe,bumpMap:ee,normalMap:R,displacementMap:b,emissiveMap:C,normalMapObjectSpace:R&&m.normalMapType===pu,normalMapTangentSpace:R&&m.normalMapType===uc,packedNormalMap:R&&m.normalMapType===uc&&(qt=m.normalMap.format,qt===wi||qt===to||qt===no),metalnessMap:U,roughnessMap:x,anisotropy:L,anisotropyMap:se,clearcoat:I,clearcoatMap:xe,clearcoatNormalMap:Me,clearcoatRoughnessMap:pe,dispersion:w,iridescence:k,iridescenceMap:Re,iridescenceThicknessMap:ne,sheen:j,sheenColorMap:ae,sheenRoughnessMap:re,specularMap:fe,specularColorMap:tt,specularIntensityMap:qe,transmission:J,transmissionMap:dt,thicknessMap:Dt,gradientMap:Te,opaque:m.transparent===!1&&m.blending===ds&&m.alphaToCoverage===!1,alphaMap:Je,alphaTest:Ge,alphaHash:bt,combine:m.combine,mapUv:te&&g(m.map.channel),aoMapUv:_e&&g(m.aoMap.channel),lightMapUv:Fe&&g(m.lightMap.channel),bumpMapUv:ee&&g(m.bumpMap.channel),normalMapUv:R&&g(m.normalMap.channel),displacementMapUv:b&&g(m.displacementMap.channel),emissiveMapUv:C&&g(m.emissiveMap.channel),metalnessMapUv:U&&g(m.metalnessMap.channel),roughnessMapUv:x&&g(m.roughnessMap.channel),anisotropyMapUv:se&&g(m.anisotropyMap.channel),clearcoatMapUv:xe&&g(m.clearcoatMap.channel),clearcoatNormalMapUv:Me&&g(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&g(m.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&g(m.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&g(m.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&g(m.sheenColorMap.channel),sheenRoughnessMapUv:re&&g(m.sheenRoughnessMap.channel),specularMapUv:fe&&g(m.specularMap.channel),specularColorMapUv:tt&&g(m.specularColorMap.channel),specularIntensityMapUv:qe&&g(m.specularIntensityMap.channel),transmissionMapUv:dt&&g(m.transmissionMap.channel),thicknessMapUv:Dt&&g(m.thicknessMap.channel),alphaMapUv:Je&&g(m.alphaMap.channel),vertexTangents:!!M.attributes.tangent&&(R||L),vertexNormals:!!M.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!M.attributes.color&&M.attributes.color.itemSize===4,pointsUvs:y.isPoints===!0&&!!M.attributes.uv&&(te||Je),fog:!!E,useFog:m.fog===!0,fogExp2:!!E&&E.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||M.attributes.normal===void 0&&R===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:be,skinning:y.isSkinnedMesh===!0,hasPositionAttribute:M.attributes.position!==void 0,morphTargets:M.morphAttributes.position!==void 0,morphNormals:M.morphAttributes.normal!==void 0,morphColors:M.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:$,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numLightProbeGrids:S.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:m.dithering,shadowMapEnabled:i.shadowMap.enabled&&f.length>0,shadowMapType:i.shadowMap.type,toneMapping:_t,decodeVideoTexture:te&&m.map.isVideoTexture===!0&&He.getTransfer(m.map.colorSpace)===Ze,decodeVideoTextureEmissive:C&&m.emissiveMap.isVideoTexture===!0&&He.getTransfer(m.emissiveMap.colorSpace)===Ze,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===$t,flipSided:m.side===Bt,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:nt&&m.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&m.extensions.multiDraw===!0||ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};var qt;return ut.vertexUv1s=c.has(1),ut.vertexUv2s=c.has(2),ut.vertexUv3s=c.has(3),c.clear(),ut},getProgramCacheKey:function(m){let v=[];if(m.shaderID?v.push(m.shaderID):(v.push(m.customVertexShaderID),v.push(m.customFragmentShaderID)),m.defines!==void 0)for(let f in m.defines)v.push(f),v.push(m.defines[f]);return m.isRawShaderMaterial===!1&&((function(f,_){f.push(_.precision),f.push(_.outputColorSpace),f.push(_.envMapMode),f.push(_.envMapCubeUVHeight),f.push(_.mapUv),f.push(_.alphaMapUv),f.push(_.lightMapUv),f.push(_.aoMapUv),f.push(_.bumpMapUv),f.push(_.normalMapUv),f.push(_.displacementMapUv),f.push(_.emissiveMapUv),f.push(_.metalnessMapUv),f.push(_.roughnessMapUv),f.push(_.anisotropyMapUv),f.push(_.clearcoatMapUv),f.push(_.clearcoatNormalMapUv),f.push(_.clearcoatRoughnessMapUv),f.push(_.iridescenceMapUv),f.push(_.iridescenceThicknessMapUv),f.push(_.sheenColorMapUv),f.push(_.sheenRoughnessMapUv),f.push(_.specularMapUv),f.push(_.specularColorMapUv),f.push(_.specularIntensityMapUv),f.push(_.transmissionMapUv),f.push(_.thicknessMapUv),f.push(_.combine),f.push(_.fogExp2),f.push(_.sizeAttenuation),f.push(_.morphTargetsCount),f.push(_.morphAttributeCount),f.push(_.numDirLights),f.push(_.numPointLights),f.push(_.numSpotLights),f.push(_.numSpotLightMaps),f.push(_.numHemiLights),f.push(_.numRectAreaLights),f.push(_.numDirLightShadows),f.push(_.numPointLightShadows),f.push(_.numSpotLightShadows),f.push(_.numSpotLightShadowsWithMaps),f.push(_.numLightProbes),f.push(_.shadowMapType),f.push(_.toneMapping),f.push(_.numClippingPlanes),f.push(_.numClipIntersection),f.push(_.depthPacking)})(v,m),(function(f,_){a.disableAll(),_.instancing&&a.enable(0),_.instancingColor&&a.enable(1),_.instancingMorph&&a.enable(2),_.matcap&&a.enable(3),_.envMap&&a.enable(4),_.normalMapObjectSpace&&a.enable(5),_.normalMapTangentSpace&&a.enable(6),_.clearcoat&&a.enable(7),_.iridescence&&a.enable(8),_.alphaTest&&a.enable(9),_.vertexColors&&a.enable(10),_.vertexAlphas&&a.enable(11),_.vertexUv1s&&a.enable(12),_.vertexUv2s&&a.enable(13),_.vertexUv3s&&a.enable(14),_.vertexTangents&&a.enable(15),_.anisotropy&&a.enable(16),_.alphaHash&&a.enable(17),_.batching&&a.enable(18),_.dispersion&&a.enable(19),_.batchingColor&&a.enable(20),_.gradientMap&&a.enable(21),_.packedNormalMap&&a.enable(22),_.vertexNormals&&a.enable(23),f.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reversedDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),_.numLightProbeGrids>0&&a.enable(22),_.hasPositionAttribute&&a.enable(23),f.push(a.mask)})(v,m),v.push(i.outputColorSpace)),v.push(m.customProgramCacheKey),v.join()},getUniforms:function(m){let v=u[m.type],f;if(v){let _=Rn[v];f=Ru.clone(_.uniforms)}else f=m.uniforms;return f},acquireProgram:function(m,v){let f=h.get(v);return f!==void 0?++f.usedTimes:(f=new xm(i,v,m,r),o.push(f),h.set(v,f)),f},releaseProgram:function(m){if(--m.usedTimes===0){let v=o.indexOf(m);o[v]=o[o.length-1],o.pop(),h.delete(m.cacheKey),m.destroy()}},releaseShaderCache:function(m){l.remove(m)},programs:o,dispose:function(){l.dispose()}}}function bm(){let i=new WeakMap;return{has:function(e){return i.has(e)},get:function(e){let t=i.get(e);return t===void 0&&(t={},i.set(e,t)),t},remove:function(e){i.delete(e)},update:function(e,t,n){i.get(e)[t]=n},dispose:function(){i=new WeakMap}}}function Tm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Zu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ju(){let i=[],e=0,t=[],n=[],r=[];function s(l){let c=0;return l.isInstancedMesh&&(c+=2),l.isSkinnedMesh&&(c+=1),c}function a(l,c,o,h,p,d){let u=i[e];return u===void 0?(u={id:l.id,object:l,geometry:c,material:o,materialVariant:s(l),groupOrder:h,renderOrder:l.renderOrder,z:p,group:d},i[e]=u):(u.id=l.id,u.object=l,u.geometry=c,u.material=o,u.materialVariant=s(l),u.groupOrder=h,u.renderOrder=l.renderOrder,u.z=p,u.group=d),e++,u}return{opaque:t,transmissive:n,transparent:r,init:function(){e=0,t.length=0,n.length=0,r.length=0},push:function(l,c,o,h,p,d){let u=a(l,c,o,h,p,d);o.transmission>0?n.push(u):o.transparent===!0?r.push(u):t.push(u)},unshift:function(l,c,o,h,p,d){let u=a(l,c,o,h,p,d);o.transmission>0?n.unshift(u):o.transparent===!0?r.unshift(u):t.unshift(u)},finish:function(){for(let l=e,c=i.length;l<c;l++){let o=i[l];if(o.id===null)break;o.id=null,o.object=null,o.geometry=null,o.material=null,o.group=null}},sort:function(l,c,o){t.length>1&&t.sort(l||Tm),n.length>1&&n.sort(c||Zu),r.length>1&&r.sort(c||Zu),o&&(t.reverse(),n.reverse(),r.reverse())}}}function Em(){let i=new WeakMap;return{get:function(e,t){let n=i.get(e),r;return n===void 0?(r=new Ju,i.set(e,[r])):t>=n.length?(r=new Ju,n.push(r)):r=n[t],r},dispose:function(){i=new WeakMap}}}function wm(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new Pe};break;case"SpotLight":t={position:new A,direction:new A,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new A,halfWidth:new A,halfHeight:new A}}return i[e.id]=t,t}}}var Am=0;function Cm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Rm(i){let e=new wm,t=(function(){let l={};return{get:function(c){if(l[c.id]!==void 0)return l[c.id];let o;switch(c.type){case"DirectionalLight":case"SpotLight":o={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":o={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3}}return l[c.id]=o,o}}})(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new A);let r=new A,s=new Oe,a=new Oe;return{setup:function(l){let c=0,o=0,h=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let p=0,d=0,u=0,g=0,m=0,v=0,f=0,_=0,y=0,S=0,E=0;l.sort(Cm);for(let P=0,F=l.length;P<F;P++){let D=l[P],N=D.color,W=D.intensity,O=D.distance,Z=null;if(D.shadow&&D.shadow.map&&(Z=D.shadow.map.texture.format===wi?D.shadow.map.texture:D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)c+=N.r*W,o+=N.g*W,h+=N.b*W;else if(D.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(D.sh.coefficients[X],W);E++}else if(D.isDirectionalLight){let X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let H=D.shadow,z=t.get(D);z.shadowIntensity=H.intensity,z.shadowBias=H.bias,z.shadowNormalBias=H.normalBias,z.shadowRadius=H.radius,z.shadowMapSize=H.mapSize,n.directionalShadow[p]=z,n.directionalShadowMap[p]=Z,n.directionalShadowMatrix[p]=D.shadow.matrix,v++}n.directional[p]=X,p++}else if(D.isSpotLight){let X=e.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(N).multiplyScalar(W),X.distance=O,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,n.spot[u]=X;let H=D.shadow;if(D.map&&(n.spotLightMap[y]=D.map,y++,H.updateMatrices(D),D.castShadow&&S++),n.spotLightMatrix[u]=H.matrix,D.castShadow){let z=t.get(D);z.shadowIntensity=H.intensity,z.shadowBias=H.bias,z.shadowNormalBias=H.normalBias,z.shadowRadius=H.radius,z.shadowMapSize=H.mapSize,n.spotShadow[u]=z,n.spotShadowMap[u]=Z,_++}u++}else if(D.isRectAreaLight){let X=e.get(D);X.color.copy(N).multiplyScalar(W),X.halfWidth.set(.5*D.width,0,0),X.halfHeight.set(0,.5*D.height,0),n.rectArea[g]=X,g++}else if(D.isPointLight){let X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){let H=D.shadow,z=t.get(D);z.shadowIntensity=H.intensity,z.shadowBias=H.bias,z.shadowNormalBias=H.normalBias,z.shadowRadius=H.radius,z.shadowMapSize=H.mapSize,z.shadowCameraNear=H.camera.near,z.shadowCameraFar=H.camera.far,n.pointShadow[d]=z,n.pointShadowMap[d]=Z,n.pointShadowMatrix[d]=D.shadow.matrix,f++}n.point[d]=X,d++}else if(D.isHemisphereLight){let X=e.get(D);X.skyColor.copy(D.color).multiplyScalar(W),X.groundColor.copy(D.groundColor).multiplyScalar(W),n.hemi[m]=X,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=o,n.ambient[2]=h;let M=n.hash;M.directionalLength===p&&M.pointLength===d&&M.spotLength===u&&M.rectAreaLength===g&&M.hemiLength===m&&M.numDirectionalShadows===v&&M.numPointShadows===f&&M.numSpotShadows===_&&M.numSpotMaps===y&&M.numLightProbes===E||(n.directional.length=p,n.spot.length=u,n.rectArea.length=g,n.point.length=d,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=f,n.pointShadowMap.length=f,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=f,n.spotLightMatrix.length=_+y-S,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=E,M.directionalLength=p,M.pointLength=d,M.spotLength=u,M.rectAreaLength=g,M.hemiLength=m,M.numDirectionalShadows=v,M.numPointShadows=f,M.numSpotShadows=_,M.numSpotMaps=y,M.numLightProbes=E,n.version=Am++)},setupView:function(l,c){let o=0,h=0,p=0,d=0,u=0,g=c.matrixWorldInverse;for(let m=0,v=l.length;m<v;m++){let f=l[m];if(f.isDirectionalLight){let _=n.directional[o];_.direction.setFromMatrixPosition(f.matrixWorld),r.setFromMatrixPosition(f.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(g),o++}else if(f.isSpotLight){let _=n.spot[p];_.position.setFromMatrixPosition(f.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(f.matrixWorld),r.setFromMatrixPosition(f.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(g),p++}else if(f.isRectAreaLight){let _=n.rectArea[d];_.position.setFromMatrixPosition(f.matrixWorld),_.position.applyMatrix4(g),a.identity(),s.copy(f.matrixWorld),s.premultiply(g),a.extractRotation(s),_.halfWidth.set(.5*f.width,0,0),_.halfHeight.set(0,.5*f.height,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),d++}else if(f.isPointLight){let _=n.point[h];_.position.setFromMatrixPosition(f.matrixWorld),_.position.applyMatrix4(g),h++}else if(f.isHemisphereLight){let _=n.hemi[u];_.direction.setFromMatrixPosition(f.matrixWorld),_.direction.transformDirection(g),u++}}},state:n}}function Ku(i){let e=new Rm(i),t=[],n=[],r=[],s={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:function(a){s.camera=a,t.length=0,n.length=0,r.length=0},state:s,setupLights:function(){e.setup(t)},setupLightsView:function(a){e.setupView(t,a)},pushLight:function(a){t.push(a)},pushShadow:function(a){n.push(a)},pushLightProbeGrid:function(a){r.push(a)}}}function Pm(i){let e=new WeakMap;return{get:function(t,n=0){let r=e.get(t),s;return r===void 0?(s=new Ku(i),e.set(t,[s])):n>=r.length?(s=new Ku(i),r.push(s)):s=r[n],s},dispose:function(){e=new WeakMap}}}var Im=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],Lm=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],$u=new Oe,ys=new A,Sc=new A;function Dm(i,e,t){let n=new Hn,r=new ie,s=new ie,a=new $e,l=new Ra,c=new Pa,o={},h=t.maxTextureSize,p={[mr]:Bt,[Bt]:mr,[$t]:$t},d=new Wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let g=new Qe;g.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new It(g,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Si;let f=this.type;function _(M,P){let F=e.update(m);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,u.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Ht(r.x,r.y,{format:wi,type:An})),d.uniforms.shadow_pass.value=M.map.depthTexture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(P,null,F,d,m,null),u.uniforms.shadow_pass.value=M.mapPass.texture,u.uniforms.resolution.value=M.mapSize,u.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(P,null,F,u,m,null)}function y(M,P,F,D){let N=null,W=F.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(W!==void 0)N=W;else if(N=F.isPointLight===!0?c:l,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let O=N.uuid,Z=P.uuid,X=o[O];X===void 0&&(X={},o[O]=X);let H=X[Z];H===void 0&&(H=N.clone(),X[Z]=H,P.addEventListener("dispose",E)),N=H}return N.visible=P.visible,N.wireframe=P.wireframe,N.side=D===pr?P.shadowSide!==null?P.shadowSide:P.side:P.shadowSide!==null?P.shadowSide:p[P.side],N.alphaMap=P.alphaMap,N.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,N.map=P.map,N.clipShadows=P.clipShadows,N.clippingPlanes=P.clippingPlanes,N.clipIntersection=P.clipIntersection,N.displacementMap=P.displacementMap,N.displacementScale=P.displacementScale,N.displacementBias=P.displacementBias,N.wireframeLinewidth=P.wireframeLinewidth,N.linewidth=P.linewidth,F.isPointLight===!0&&N.isMeshDistanceMaterial===!0&&(i.properties.get(N).light=F),N}function S(M,P,F,D,N){if(M.visible===!1)return;if(M.layers.test(P.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&N===pr)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,M.matrixWorld);let O=e.update(M),Z=M.material;if(Array.isArray(Z)){let X=O.groups;for(let H=0,z=X.length;H<z;H++){let V=X[H],$=Z[V.materialIndex];if($&&$.visible){let oe=y(M,$,D,N);M.onBeforeShadow(i,M,P,F,O,oe,V),i.renderBufferDirect(F,null,O,oe,M,V),M.onAfterShadow(i,M,P,F,O,oe,V)}}}else if(Z.visible){let X=y(M,Z,D,N);M.onBeforeShadow(i,M,P,F,O,X,null),i.renderBufferDirect(F,null,O,X,M,null),M.onAfterShadow(i,M,P,F,O,X,null)}}let W=M.children;for(let O=0,Z=W.length;O<Z;O++)S(W[O],P,F,D,N)}function E(M){M.target.removeEventListener("dispose",E);for(let P in o){let F=o[P],D=M.target.uuid;D in F&&(F[D].dispose(),delete F[D])}}this.render=function(M,P,F){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||M.length===0)return;this.type===Gh&&(Ee("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Si);let D=i.getRenderTarget(),N=i.getActiveCubeFace(),W=i.getActiveMipmapLevel(),O=i.state;O.setBlending(wn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let Z=f!==this.type;Z&&P.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(H=>H.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,H=M.length;X<H;X++){let z=M[X],V=z.shadow;if(V===void 0){Ee("WebGLShadowMap:",z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);let $=V.getFrameExtents();r.multiply($),s.copy(V.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/$.x),r.x=s.x*$.x,V.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/$.y),r.y=s.y*$.y,V.mapSize.y=s.y));let oe=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=oe,V.map===null||Z===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===pr){if(z.isPointLight){Ee("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Ht(r.x,r.y,{format:wi,type:An,minFilter:Pt,magFilter:Pt,generateMipmaps:!1}),V.map.texture.name=z.name+".shadowMap",V.map.depthTexture=new kn(r.x,r.y,dn),V.map.depthTexture.name=z.name+".shadowMapDepth",V.map.depthTexture.format=li,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Jt,V.map.depthTexture.magFilter=Jt}else z.isPointLight?(V.map=new co(r.x),V.map.depthTexture=new ua(r.x,jn)):(V.map=new Ht(r.x,r.y),V.map.depthTexture=new kn(r.x,r.y,jn)),V.map.depthTexture.name=z.name+".shadowMap",V.map.depthTexture.format=li,this.type===Si?(V.map.depthTexture.compareFunction=oe?ro:io,V.map.depthTexture.minFilter=Pt,V.map.depthTexture.magFilter=Pt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Jt,V.map.depthTexture.magFilter=Jt);V.camera.updateProjectionMatrix()}let be=V.map.isWebGLCubeRenderTarget?6:1;for(let ge=0;ge<be;ge++){if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,ge),i.clear();else{ge===0&&(i.setRenderTarget(V.map),i.clear());let ve=V.getViewport(ge);a.set(s.x*ve.x,s.y*ve.y,s.x*ve.z,s.y*ve.w),O.viewport(a)}if(z.isPointLight){let ve=V.camera,te=V.matrix,ue=z.distance||ve.far;ue!==ve.far&&(ve.far=ue,ve.updateProjectionMatrix()),ys.setFromMatrixPosition(z.matrixWorld),ve.position.copy(ys),Sc.copy(ve.position),Sc.add(Im[ge]),ve.up.copy(Lm[ge]),ve.lookAt(Sc),ve.updateMatrixWorld(),te.makeTranslation(-ys.x,-ys.y,-ys.z),$u.multiplyMatrices(ve.projectionMatrix,ve.matrixWorldInverse),V._frustum.setFromProjectionMatrix($u,ve.coordinateSystem,ve.reversedDepth)}else V.updateMatrices(z);n=V.getFrustum(),S(P,F,V.camera,z,this.type)}V.isPointLightShadow!==!0&&this.type===pr&&_(V,F),V.needsUpdate=!1}f=this.type,v.needsUpdate=!1,i.setRenderTarget(D,N,W)}}function Nm(i,e){let t=new function(){let x=!1,L=new $e,I=null,w=new $e(0,0,0,0);return{setMask:function(k){I===k||x||(i.colorMask(k,k,k,k),I=k)},setLocked:function(k){x=k},setClear:function(k,j,J,se,xe){xe===!0&&(k*=se,j*=se,J*=se),L.set(k,j,J,se),w.equals(L)===!1&&(i.clearColor(k,j,J,se),w.copy(L))},reset:function(){x=!1,I=null,w.set(-1,0,0,0)}}},n=new function(){let x=!1,L=!1,I=null,w=null,k=null;return{setReversed:function(j){if(L!==j){let J=e.get("EXT_clip_control");j?J.clipControlEXT(J.LOWER_LEFT_EXT,J.ZERO_TO_ONE_EXT):J.clipControlEXT(J.LOWER_LEFT_EXT,J.NEGATIVE_ONE_TO_ONE_EXT),L=j;let se=k;k=null,this.setClear(se)}},getReversed:function(){return L},setTest:function(j){j?ce(i.DEPTH_TEST):_e(i.DEPTH_TEST)},setMask:function(j){I===j||x||(i.depthMask(j),I=j)},setFunc:function(j){if(L&&(j=bu[j]),w!==j){switch(j){case ml:i.depthFunc(i.NEVER);break;case fl:i.depthFunc(i.ALWAYS);break;case gl:i.depthFunc(i.LESS);break;case ka:i.depthFunc(i.LEQUAL);break;case _l:i.depthFunc(i.EQUAL);break;case vl:i.depthFunc(i.GEQUAL);break;case yl:i.depthFunc(i.GREATER);break;case xl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}w=j}},setLocked:function(j){x=j},setClear:function(j){k!==j&&(k=j,L&&(j=1-j),i.clearDepth(j))},reset:function(){x=!1,I=null,w=null,k=null,L=!1}}},r=new function(){let x=!1,L=null,I=null,w=null,k=null,j=null,J=null,se=null,xe=null;return{setTest:function(Me){x||(Me?ce(i.STENCIL_TEST):_e(i.STENCIL_TEST))},setMask:function(Me){L===Me||x||(i.stencilMask(Me),L=Me)},setFunc:function(Me,pe,Re){I===Me&&w===pe&&k===Re||(i.stencilFunc(Me,pe,Re),I=Me,w=pe,k=Re)},setOp:function(Me,pe,Re){j===Me&&J===pe&&se===Re||(i.stencilOp(Me,pe,Re),j=Me,J=pe,se=Re)},setLocked:function(Me){x=Me},setClear:function(Me){xe!==Me&&(i.clearStencil(Me),xe=Me)},reset:function(){x=!1,L=null,I=null,w=null,k=null,j=null,J=null,se=null,xe=null}}},s=new WeakMap,a=new WeakMap,l={},c={},o={},h=new WeakMap,p=[],d=null,u=!1,g=null,m=null,v=null,f=null,_=null,y=null,S=null,E=new Pe(0,0,0),M=0,P=!1,F=null,D=null,N=null,W=null,O=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,H=0,z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(z)[1]),X=H>=1):z.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),X=H>=2);let V=null,$={},oe=i.getParameter(i.SCISSOR_BOX),be=i.getParameter(i.VIEWPORT),ge=new $e().fromArray(oe),ve=new $e().fromArray(be);function te(x,L,I,w){let k=new Uint8Array(4),j=i.createTexture();i.bindTexture(x,j),i.texParameteri(x,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(x,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let J=0;J<I;J++)x===i.TEXTURE_3D||x===i.TEXTURE_2D_ARRAY?i.texImage3D(L,0,i.RGBA,1,1,w,0,i.RGBA,i.UNSIGNED_BYTE,k):i.texImage2D(L+J,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,k);return j}let ue={};function ce(x){l[x]!==!0&&(i.enable(x),l[x]=!0)}function _e(x){l[x]!==!1&&(i.disable(x),l[x]=!1)}ue[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),ue[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ue[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),t.setClear(0,0,0,1),n.setClear(1),r.setClear(0),ce(i.DEPTH_TEST),n.setFunc(ka),b(!1),C(hl),ce(i.CULL_FACE),R(wn);let Fe={[fr]:i.FUNC_ADD,[Hh]:i.FUNC_SUBTRACT,[kh]:i.FUNC_REVERSE_SUBTRACT};Fe[Wh]=i.MIN,Fe[Xh]=i.MAX;let ee={[jh]:i.ZERO,[qh]:i.ONE,[Yh]:i.SRC_COLOR,[Jh]:i.SRC_ALPHA,[nu]:i.SRC_ALPHA_SATURATE,[eu]:i.DST_COLOR,[$h]:i.DST_ALPHA,[Zh]:i.ONE_MINUS_SRC_COLOR,[Kh]:i.ONE_MINUS_SRC_ALPHA,[tu]:i.ONE_MINUS_DST_COLOR,[Qh]:i.ONE_MINUS_DST_ALPHA,[iu]:i.CONSTANT_COLOR,[ru]:i.ONE_MINUS_CONSTANT_COLOR,[su]:i.CONSTANT_ALPHA,[au]:i.ONE_MINUS_CONSTANT_ALPHA};function R(x,L,I,w,k,j,J,se,xe,Me){if(x!==wn){if(u===!1&&(ce(i.BLEND),u=!0),x===Vh)k=k||L,j=j||I,J=J||w,L===m&&k===_||(i.blendEquationSeparate(Fe[L],Fe[k]),m=L,_=k),I===v&&w===f&&j===y&&J===S||(i.blendFuncSeparate(ee[I],ee[w],ee[j],ee[J]),v=I,f=w,y=j,S=J),se.equals(E)!==!1&&xe===M||(i.blendColor(se.r,se.g,se.b,xe),E.copy(se),M=xe),g=x,P=!1;else if(x!==g||Me!==P){if(m===fr&&_===fr||(i.blendEquation(i.FUNC_ADD),m=fr,_=fr),Me)switch(x){case ds:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ul:i.blendFunc(i.ONE,i.ONE);break;case dl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ae("WebGLState: Invalid blending: ",x)}else switch(x){case ds:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ul:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case dl:Ae("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pl:Ae("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ae("WebGLState: Invalid blending: ",x)}v=null,f=null,y=null,S=null,E.set(0,0,0),M=0,g=x,P=Me}}else u===!0&&(_e(i.BLEND),u=!1)}function b(x){F!==x&&(x?i.frontFace(i.CW):i.frontFace(i.CCW),F=x)}function C(x){x!==Bh?(ce(i.CULL_FACE),x!==D&&(x===hl?i.cullFace(i.BACK):x===zh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_e(i.CULL_FACE),D=x}function U(x,L,I){x?(ce(i.POLYGON_OFFSET_FILL),W===L&&O===I||(W=L,O=I,n.getReversed()&&(L=-L),i.polygonOffset(L,I))):_e(i.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:n,stencil:r},enable:ce,disable:_e,bindFramebuffer:function(x,L){return o[x]!==L&&(i.bindFramebuffer(x,L),o[x]=L,x===i.DRAW_FRAMEBUFFER&&(o[i.FRAMEBUFFER]=L),x===i.FRAMEBUFFER&&(o[i.DRAW_FRAMEBUFFER]=L),!0)},drawBuffers:function(x,L){let I=p,w=!1;if(x){I=h.get(L),I===void 0&&(I=[],h.set(L,I));let k=x.textures;if(I.length!==k.length||I[0]!==i.COLOR_ATTACHMENT0){for(let j=0,J=k.length;j<J;j++)I[j]=i.COLOR_ATTACHMENT0+j;I.length=k.length,w=!0}}else I[0]!==i.BACK&&(I[0]=i.BACK,w=!0);w&&i.drawBuffers(I)},useProgram:function(x){return d!==x&&(i.useProgram(x),d=x,!0)},setBlending:R,setMaterial:function(x,L){x.side===$t?_e(i.CULL_FACE):ce(i.CULL_FACE);let I=x.side===Bt;L&&(I=!I),b(I),x.blending===ds&&x.transparent===!1?R(wn):R(x.blending,x.blendEquation,x.blendSrc,x.blendDst,x.blendEquationAlpha,x.blendSrcAlpha,x.blendDstAlpha,x.blendColor,x.blendAlpha,x.premultipliedAlpha),n.setFunc(x.depthFunc),n.setTest(x.depthTest),n.setMask(x.depthWrite),t.setMask(x.colorWrite);let w=x.stencilWrite;r.setTest(w),w&&(r.setMask(x.stencilWriteMask),r.setFunc(x.stencilFunc,x.stencilRef,x.stencilFuncMask),r.setOp(x.stencilFail,x.stencilZFail,x.stencilZPass)),U(x.polygonOffset,x.polygonOffsetFactor,x.polygonOffsetUnits),x.alphaToCoverage===!0?ce(i.SAMPLE_ALPHA_TO_COVERAGE):_e(i.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:b,setCullFace:C,setLineWidth:function(x){x!==N&&(X&&i.lineWidth(x),N=x)},setPolygonOffset:U,setScissorTest:function(x){x?ce(i.SCISSOR_TEST):_e(i.SCISSOR_TEST)},activeTexture:function(x){x===void 0&&(x=i.TEXTURE0+Z-1),V!==x&&(i.activeTexture(x),V=x)},bindTexture:function(x,L,I){I===void 0&&(I=V===null?i.TEXTURE0+Z-1:V);let w=$[I];w===void 0&&(w={type:void 0,texture:void 0},$[I]=w),w.type===x&&w.texture===L||(V!==I&&(i.activeTexture(I),V=I),i.bindTexture(x,L||ue[x]),w.type=x,w.texture=L)},unbindTexture:function(){let x=$[V];x!==void 0&&x.type!==void 0&&(i.bindTexture(x.type,null),x.type=void 0,x.texture=void 0)},compressedTexImage2D:function(){try{i.compressedTexImage2D(...arguments)}catch(x){Ae("WebGLState:",x)}},compressedTexImage3D:function(){try{i.compressedTexImage3D(...arguments)}catch(x){Ae("WebGLState:",x)}},texImage2D:function(){try{i.texImage2D(...arguments)}catch(x){Ae("WebGLState:",x)}},texImage3D:function(){try{i.texImage3D(...arguments)}catch(x){Ae("WebGLState:",x)}},pixelStorei:function(x,L){c[x]!==L&&(i.pixelStorei(x,L),c[x]=L)},getParameter:function(x){return c[x]!==void 0?c[x]:i.getParameter(x)},updateUBOMapping:function(x,L){let I=a.get(L);I===void 0&&(I=new WeakMap,a.set(L,I));let w=I.get(x);w===void 0&&(w=i.getUniformBlockIndex(L,x.name),I.set(x,w))},uniformBlockBinding:function(x,L){let I=a.get(L).get(x);s.get(L)!==I&&(i.uniformBlockBinding(L,I,x.__bindingPointIndex),s.set(L,I))},texStorage2D:function(){try{i.texStorage2D(...arguments)}catch(x){Ae("WebGLState:",x)}},texStorage3D:function(){try{i.texStorage3D(...arguments)}catch(x){Ae("WebGLState:",x)}},texSubImage2D:function(){try{i.texSubImage2D(...arguments)}catch(x){Ae("WebGLState:",x)}},texSubImage3D:function(){try{i.texSubImage3D(...arguments)}catch(x){Ae("WebGLState:",x)}},compressedTexSubImage2D:function(){try{i.compressedTexSubImage2D(...arguments)}catch(x){Ae("WebGLState:",x)}},compressedTexSubImage3D:function(){try{i.compressedTexSubImage3D(...arguments)}catch(x){Ae("WebGLState:",x)}},scissor:function(x){ge.equals(x)===!1&&(i.scissor(x.x,x.y,x.z,x.w),ge.copy(x))},viewport:function(x){ve.equals(x)===!1&&(i.viewport(x.x,x.y,x.z,x.w),ve.copy(x))},reset:function(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),n.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),l={},c={},V=null,$={},o={},h=new WeakMap,p=[],d=null,u=!1,g=null,m=null,v=null,f=null,_=null,y=null,S=null,E=new Pe(0,0,0),M=0,P=!1,F=null,D=null,N=null,W=null,O=null,ge.set(0,0,i.canvas.width,i.canvas.height),ve.set(0,0,i.canvas.width,i.canvas.height),t.reset(),n.reset(),r.reset()}}}function Um(i,e,t,n,r,s,a){let l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),o=new ie,h=new WeakMap,p=new Set,d,u=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,b){return g?new OffscreenCanvas(R,b):Gr("canvas")}function v(R,b,C){let U=1,x=ee(R);if((x.width>C||x.height>C)&&(U=C/Math.max(x.width,x.height)),U<1){if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let L=Math.floor(U*x.width),I=Math.floor(U*x.height);d===void 0&&(d=m(L,I));let w=b?m(L,I):d;return w.width=L,w.height=I,w.getContext("2d").drawImage(R,0,0,L,I),Ee("WebGLRenderer: Texture has been resized from ("+x.width+"x"+x.height+") to ("+L+"x"+I+")."),w}return"data"in R&&Ee("WebGLRenderer: Image in DataTexture is too big ("+x.width+"x"+x.height+")."),R}return R}function f(R){return R.generateMipmaps}function _(R){i.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(R,b,C,U,x,L=!1){if(R!==null){if(i[R]!==void 0)return i[R];Ee("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let I;U&&(I=e.get("EXT_texture_norm16"),I||Ee("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let w=b;if(b===i.RED&&(C===i.FLOAT&&(w=i.R32F),C===i.HALF_FLOAT&&(w=i.R16F),C===i.UNSIGNED_BYTE&&(w=i.R8),C===i.UNSIGNED_SHORT&&I&&(w=I.R16_EXT),C===i.SHORT&&I&&(w=I.R16_SNORM_EXT)),b===i.RED_INTEGER&&(C===i.UNSIGNED_BYTE&&(w=i.R8UI),C===i.UNSIGNED_SHORT&&(w=i.R16UI),C===i.UNSIGNED_INT&&(w=i.R32UI),C===i.BYTE&&(w=i.R8I),C===i.SHORT&&(w=i.R16I),C===i.INT&&(w=i.R32I)),b===i.RG&&(C===i.FLOAT&&(w=i.RG32F),C===i.HALF_FLOAT&&(w=i.RG16F),C===i.UNSIGNED_BYTE&&(w=i.RG8),C===i.UNSIGNED_SHORT&&I&&(w=I.RG16_EXT),C===i.SHORT&&I&&(w=I.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(C===i.UNSIGNED_BYTE&&(w=i.RG8UI),C===i.UNSIGNED_SHORT&&(w=i.RG16UI),C===i.UNSIGNED_INT&&(w=i.RG32UI),C===i.BYTE&&(w=i.RG8I),C===i.SHORT&&(w=i.RG16I),C===i.INT&&(w=i.RG32I)),b===i.RGB_INTEGER&&(C===i.UNSIGNED_BYTE&&(w=i.RGB8UI),C===i.UNSIGNED_SHORT&&(w=i.RGB16UI),C===i.UNSIGNED_INT&&(w=i.RGB32UI),C===i.BYTE&&(w=i.RGB8I),C===i.SHORT&&(w=i.RGB16I),C===i.INT&&(w=i.RGB32I)),b===i.RGBA_INTEGER&&(C===i.UNSIGNED_BYTE&&(w=i.RGBA8UI),C===i.UNSIGNED_SHORT&&(w=i.RGBA16UI),C===i.UNSIGNED_INT&&(w=i.RGBA32UI),C===i.BYTE&&(w=i.RGBA8I),C===i.SHORT&&(w=i.RGBA16I),C===i.INT&&(w=i.RGBA32I)),b===i.RGB&&(C===i.UNSIGNED_SHORT&&I&&(w=I.RGB16_EXT),C===i.SHORT&&I&&(w=I.RGB16_SNORM_EXT),C===i.UNSIGNED_INT_5_9_9_9_REV&&(w=i.RGB9_E5),C===i.UNSIGNED_INT_10F_11F_11F_REV&&(w=i.R11F_G11F_B10F)),b===i.RGBA){let k=L?zr:He.getTransfer(x);C===i.FLOAT&&(w=i.RGBA32F),C===i.HALF_FLOAT&&(w=i.RGBA16F),C===i.UNSIGNED_BYTE&&(w=k===Ze?i.SRGB8_ALPHA8:i.RGBA8),C===i.UNSIGNED_SHORT&&I&&(w=I.RGBA16_EXT),C===i.SHORT&&I&&(w=I.RGBA16_SNORM_EXT),C===i.UNSIGNED_SHORT_4_4_4_4&&(w=i.RGBA4),C===i.UNSIGNED_SHORT_5_5_5_1&&(w=i.RGB5_A1)}return w!==i.R16F&&w!==i.R32F&&w!==i.RG16F&&w!==i.RG32F&&w!==i.RGBA16F&&w!==i.RGBA32F||e.get("EXT_color_buffer_float"),w}function E(R,b){let C;return R?b===null||b===jn||b===vr?C=i.DEPTH24_STENCIL8:b===dn?C=i.DEPTH32F_STENCIL8:b===_r&&(C=i.DEPTH24_STENCIL8,Ee("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===jn||b===vr?C=i.DEPTH_COMPONENT24:b===dn?C=i.DEPTH_COMPONENT32F:b===_r&&(C=i.DEPTH_COMPONENT16),C}function M(R,b){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==Jt&&R.minFilter!==Pt?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function P(R){let b=R.target;b.removeEventListener("dispose",P),(function(C){let U=n.get(C);if(U.__webglInit===void 0)return;let x=C.source,L=u.get(x);if(L){let I=L[U.__cacheKey];I.usedTimes--,I.usedTimes===0&&D(C),Object.keys(L).length===0&&u.delete(x)}n.remove(C)})(b),b.isVideoTexture&&h.delete(b),b.isHTMLTexture&&p.delete(b)}function F(R){let b=R.target;b.removeEventListener("dispose",F),(function(C){let U=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let L=0;L<6;L++){if(Array.isArray(U.__webglFramebuffer[L]))for(let I=0;I<U.__webglFramebuffer[L].length;I++)i.deleteFramebuffer(U.__webglFramebuffer[L][I]);else i.deleteFramebuffer(U.__webglFramebuffer[L]);U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer[L])}else{if(Array.isArray(U.__webglFramebuffer))for(let L=0;L<U.__webglFramebuffer.length;L++)i.deleteFramebuffer(U.__webglFramebuffer[L]);else i.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&i.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let L=0;L<U.__webglColorRenderbuffer.length;L++)U.__webglColorRenderbuffer[L]&&i.deleteRenderbuffer(U.__webglColorRenderbuffer[L]);U.__webglDepthRenderbuffer&&i.deleteRenderbuffer(U.__webglDepthRenderbuffer)}let x=C.textures;for(let L=0,I=x.length;L<I;L++){let w=n.get(x[L]);w.__webglTexture&&(i.deleteTexture(w.__webglTexture),a.memory.textures--),n.remove(x[L])}n.remove(C)})(b)}function D(R){let b=n.get(R);i.deleteTexture(b.__webglTexture);let C=R.source;delete u.get(C)[b.__cacheKey],a.memory.textures--}let N=0;function W(R,b){let C=n.get(R);if(R.isVideoTexture&&(function(U){let x=a.render.frame;h.get(U)!==x&&(h.set(U,x),U.update())})(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&C.__version!==R.version){let U=R.image;if(U===null)Ee("WebGLRenderer: Texture marked for update but no image data found.");else{if(U.complete!==!1)return void $(C,R,b);Ee("WebGLRenderer: Texture marked for update but image is incomplete")}}else R.isExternalTexture&&(C.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,C.__webglTexture,i.TEXTURE0+b)}let O={[ta]:i.REPEAT,[ri]:i.CLAMP_TO_EDGE,[na]:i.MIRRORED_REPEAT},Z={[Jt]:i.NEAREST,[hu]:i.NEAREST_MIPMAP_NEAREST,[fs]:i.NEAREST_MIPMAP_LINEAR,[Pt]:i.LINEAR,[ja]:i.LINEAR_MIPMAP_NEAREST,[Ti]:i.LINEAR_MIPMAP_LINEAR},X={[mu]:i.NEVER,[yu]:i.ALWAYS,[fu]:i.LESS,[io]:i.LEQUAL,[gu]:i.EQUAL,[ro]:i.GEQUAL,[_u]:i.GREATER,[vu]:i.NOTEQUAL};function H(R,b){if(b.type!==dn||e.has("OES_texture_float_linear")!==!1||b.magFilter!==Pt&&b.magFilter!==ja&&b.magFilter!==fs&&b.magFilter!==Ti&&b.minFilter!==Pt&&b.minFilter!==ja&&b.minFilter!==fs&&b.minFilter!==Ti||Ee("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,O[b.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,O[b.wrapT]),R!==i.TEXTURE_3D&&R!==i.TEXTURE_2D_ARRAY||i.texParameteri(R,i.TEXTURE_WRAP_R,O[b.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Z[b.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Z[b.minFilter]),b.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,X[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Jt||b.minFilter!==fs&&b.minFilter!==Ti||b.type===dn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let C=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function z(R,b){let C=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",P));let U=b.source,x=u.get(U);x===void 0&&(x={},u.set(U,x));let L=(function(I){let w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()})(b);if(L!==R.__cacheKey){x[L]===void 0&&(x[L]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,C=!0),x[L].usedTimes++;let I=x[R.__cacheKey];I!==void 0&&(x[R.__cacheKey].usedTimes--,I.usedTimes===0&&D(b)),R.__cacheKey=L,R.__webglTexture=x[L].texture}return C}function V(R,b,C){return Math.floor(Math.floor(R/C)/b)}function $(R,b,C){let U=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(U=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(U=i.TEXTURE_3D);let x=z(R,b),L=b.source;t.bindTexture(U,R.__webglTexture,i.TEXTURE0+C);let I=n.get(L);if(L.version!==I.__version||x===!0){if(t.activeTexture(i.TEXTURE0+C),!(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)){let ae=He.getPrimaries(He.workingColorSpace),re=b.colorSpace===Ai?null:He.getPrimaries(b.colorSpace),fe=b.colorSpace===Ai||ae===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe)}t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let w=v(b.image,!1,r.maxTextureSize);w=Fe(b,w);let k=s.convert(b.format,b.colorSpace),j=s.convert(b.type),J,se=S(b.internalFormat,k,j,b.normalized,b.colorSpace,b.isVideoTexture);H(U,b);let xe=b.mipmaps,Me=b.isVideoTexture!==!0,pe=I.__version===void 0||x===!0,Re=L.dataReady,ne=M(b,w);if(b.isDepthTexture)se=E(b.format===Ei,b.type),pe&&(Me?t.texStorage2D(i.TEXTURE_2D,1,se,w.width,w.height):t.texImage2D(i.TEXTURE_2D,0,se,w.width,w.height,0,k,j,null));else if(b.isDataTexture)if(xe.length>0){Me&&pe&&t.texStorage2D(i.TEXTURE_2D,ne,se,xe[0].width,xe[0].height);for(let ae=0,re=xe.length;ae<re;ae++)J=xe[ae],Me?Re&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,J.width,J.height,k,j,J.data):t.texImage2D(i.TEXTURE_2D,ae,se,J.width,J.height,0,k,j,J.data);b.generateMipmaps=!1}else Me?(pe&&t.texStorage2D(i.TEXTURE_2D,ne,se,w.width,w.height),Re&&(function(ae,re,fe,tt){let qe=ae.updateRanges;if(qe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,re.width,re.height,fe,tt,re.data);else{qe.sort((Ge,bt)=>Ge.start-bt.start);let dt=0;for(let Ge=1;Ge<qe.length;Ge++){let bt=qe[dt],nt=qe[Ge],_t=bt.start+bt.count,ut=V(nt.start,re.width,4),qt=V(bt.start,re.width,4);nt.start<=_t+1&&ut===qt&&V(nt.start+nt.count-1,re.width,4)===ut?bt.count=Math.max(bt.count,nt.start+nt.count-bt.start):(++dt,qe[dt]=nt)}qe.length=dt+1;let Dt=t.getParameter(i.UNPACK_ROW_LENGTH),Te=t.getParameter(i.UNPACK_SKIP_PIXELS),Je=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,re.width);for(let Ge=0,bt=qe.length;Ge<bt;Ge++){let nt=qe[Ge],_t=Math.floor(nt.start/4),ut=Math.ceil(nt.count/4),qt=_t%re.width,en=Math.floor(_t/re.width),ci=ut;t.pixelStorei(i.UNPACK_SKIP_PIXELS,qt),t.pixelStorei(i.UNPACK_SKIP_ROWS,en),t.texSubImage2D(i.TEXTURE_2D,0,qt,en,ci,1,fe,tt,re.data)}ae.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Dt),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Te),t.pixelStorei(i.UNPACK_SKIP_ROWS,Je)}})(b,w,k,j)):t.texImage2D(i.TEXTURE_2D,0,se,w.width,w.height,0,k,j,w.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Me&&pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ne,se,xe[0].width,xe[0].height,w.depth);for(let ae=0,re=xe.length;ae<re;ae++)if(J=xe[ae],b.format!==pn)if(k!==null)if(Me){if(Re)if(b.layerUpdates.size>0){let fe=gc(J.width,J.height,b.format,b.type);for(let tt of b.layerUpdates){let qe=J.data.subarray(tt*fe/J.data.BYTES_PER_ELEMENT,(tt+1)*fe/J.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,tt,J.width,J.height,1,k,qe)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,J.width,J.height,w.depth,k,J.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,se,J.width,J.height,w.depth,0,J.data,0,0);else Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Me?Re&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,J.width,J.height,w.depth,k,j,J.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,se,J.width,J.height,w.depth,0,k,j,J.data)}else{Me&&pe&&t.texStorage2D(i.TEXTURE_2D,ne,se,xe[0].width,xe[0].height);for(let ae=0,re=xe.length;ae<re;ae++)J=xe[ae],b.format!==pn?k!==null?Me?Re&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,J.width,J.height,k,J.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,se,J.width,J.height,0,J.data):Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Me?Re&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,J.width,J.height,k,j,J.data):t.texImage2D(i.TEXTURE_2D,ae,se,J.width,J.height,0,k,j,J.data)}else if(b.isDataArrayTexture)if(Me){if(pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ne,se,w.width,w.height,w.depth),Re)if(b.layerUpdates.size>0){let ae=gc(w.width,w.height,b.format,b.type);for(let re of b.layerUpdates){let fe=w.data.subarray(re*ae/w.data.BYTES_PER_ELEMENT,(re+1)*ae/w.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,re,w.width,w.height,1,k,j,fe)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,w.width,w.height,w.depth,k,j,w.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,se,w.width,w.height,w.depth,0,k,j,w.data);else if(b.isData3DTexture)Me?(pe&&t.texStorage3D(i.TEXTURE_3D,ne,se,w.width,w.height,w.depth),Re&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,w.width,w.height,w.depth,k,j,w.data)):t.texImage3D(i.TEXTURE_3D,0,se,w.width,w.height,w.depth,0,k,j,w.data);else if(b.isFramebufferTexture){if(pe)if(Me)t.texStorage2D(i.TEXTURE_2D,ne,se,w.width,w.height);else{let ae=w.width,re=w.height;for(let fe=0;fe<ne;fe++)t.texImage2D(i.TEXTURE_2D,fe,se,ae,re,0,k,j,null),ae>>=1,re>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){let ae=i.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),w.parentNode!==ae)return ae.appendChild(w),p.add(b),ae.onpaint=re=>{let fe=re.changedElements;for(let tt of p)fe.includes(tt.image)&&(tt.needsUpdate=!0)},void ae.requestPaint();if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,w);else{let fe=i.RGBA,tt=i.RGBA,qe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,fe,tt,qe,w)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(xe.length>0){if(Me&&pe){let ae=ee(xe[0]);t.texStorage2D(i.TEXTURE_2D,ne,se,ae.width,ae.height)}for(let ae=0,re=xe.length;ae<re;ae++)J=xe[ae],Me?Re&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,k,j,J):t.texImage2D(i.TEXTURE_2D,ae,se,k,j,J);b.generateMipmaps=!1}else if(Me){if(pe){let ae=ee(w);t.texStorage2D(i.TEXTURE_2D,ne,se,ae.width,ae.height)}Re&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,k,j,w)}else t.texImage2D(i.TEXTURE_2D,0,se,k,j,w);f(b)&&_(U),I.__version=L.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function oe(R,b,C,U,x,L){let I=s.convert(C.format,C.colorSpace),w=s.convert(C.type),k=S(C.internalFormat,I,w,C.normalized,C.colorSpace),j=n.get(b),J=n.get(C);if(J.__renderTarget=b,!j.__hasExternalTextures){let se=Math.max(1,b.width>>L),xe=Math.max(1,b.height>>L);x===i.TEXTURE_3D||x===i.TEXTURE_2D_ARRAY?t.texImage3D(x,L,k,se,xe,b.depth,0,I,w,null):t.texImage2D(x,L,k,se,xe,0,I,w,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),_e(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,U,x,J.__webglTexture,0,ce(b)):(x===i.TEXTURE_2D||x>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&x<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,U,x,J.__webglTexture,L),t.bindFramebuffer(i.FRAMEBUFFER,null)}function be(R,b,C){if(i.bindRenderbuffer(i.RENDERBUFFER,R),b.depthBuffer){let U=b.depthTexture,x=U&&U.isDepthTexture?U.type:null,L=E(b.stencilBuffer,x),I=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;_e(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce(b),L,b.width,b.height):C?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce(b),L,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,L,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,I,i.RENDERBUFFER,R)}else{let U=b.textures;for(let x=0;x<U.length;x++){let L=U[x],I=s.convert(L.format,L.colorSpace),w=s.convert(L.type),k=S(L.internalFormat,I,w,L.normalized,L.colorSpace);_e(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce(b),k,b.width,b.height):C?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce(b),k,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,k,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ge(R,b,C){let U=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!b.depthTexture||!b.depthTexture.isDepthTexture)throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let x=n.get(b.depthTexture);if(x.__renderTarget=b,x.__webglTexture&&b.depthTexture.image.width===b.width&&b.depthTexture.image.height===b.height||(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),U){if(x.__webglInit===void 0&&(x.__webglInit=!0,b.depthTexture.addEventListener("dispose",P)),x.__webglTexture===void 0){x.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,x.__webglTexture),H(i.TEXTURE_CUBE_MAP,b.depthTexture);let j=s.convert(b.depthTexture.format),J=s.convert(b.depthTexture.type),se;b.depthTexture.format===li?se=i.DEPTH_COMPONENT24:b.depthTexture.format===Ei&&(se=i.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,se,b.width,b.height,0,j,J,null)}}else W(b.depthTexture,0);let L=x.__webglTexture,I=ce(b),w=U?i.TEXTURE_CUBE_MAP_POSITIVE_X+C:i.TEXTURE_2D,k=b.depthTexture.format===Ei?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===li)_e(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,w,L,0,I):i.framebufferTexture2D(i.FRAMEBUFFER,k,w,L,0);else{if(b.depthTexture.format!==Ei)throw new Error("THREE.WebGLTextures: Unknown depthTexture format.");_e(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,w,L,0,I):i.framebufferTexture2D(i.FRAMEBUFFER,k,w,L,0)}}function ve(R){let b=n.get(R),C=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let U=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),U){let x=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,U.removeEventListener("dispose",x)};U.addEventListener("dispose",x),b.__depthDisposeCallback=x}b.__boundDepthTexture=U}if(R.depthTexture&&!b.__autoAllocateDepthBuffer)if(C)for(let U=0;U<6;U++)ge(b.__webglFramebuffer[U],R,U);else{let U=R.texture.mipmaps;U&&U.length>0?ge(b.__webglFramebuffer[0],R,0):ge(b.__webglFramebuffer,R,0)}else if(C){b.__webglDepthbuffer=[];for(let U=0;U<6;U++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[U]),b.__webglDepthbuffer[U]===void 0)b.__webglDepthbuffer[U]=i.createRenderbuffer(),be(b.__webglDepthbuffer[U],R,!1);else{let x=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,L=b.__webglDepthbuffer[U];i.bindRenderbuffer(i.RENDERBUFFER,L),i.framebufferRenderbuffer(i.FRAMEBUFFER,x,i.RENDERBUFFER,L)}}else{let U=R.texture.mipmaps;if(U&&U.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),be(b.__webglDepthbuffer,R,!1);else{let x=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,L=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,L),i.framebufferRenderbuffer(i.FRAMEBUFFER,x,i.RENDERBUFFER,L)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}let te=[],ue=[];function ce(R){return Math.min(r.maxSamples,R.samples)}function _e(R){let b=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Fe(R,b){let C=R.colorSpace,U=R.format,x=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||C!==Br&&C!==Ai&&(He.getTransfer(C)===Ze?U===pn&&x===Xt||Ee("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ae("WebGLTextures: Unsupported texture color space:",C)),b}function ee(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(o.width=R.naturalWidth||R.width,o.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(o.width=R.displayWidth,o.height=R.displayHeight):(o.width=R.width,o.height=R.height),o}this.allocateTextureUnit=function(){let R=N;return R>=r.maxTextures&&Ee("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),N+=1,R},this.resetTextureUnits=function(){N=0},this.getTextureUnits=function(){return N},this.setTextureUnits=function(R){N=R},this.setTexture2D=W,this.setTexture2DArray=function(R,b){let C=n.get(R);R.isRenderTargetTexture===!1&&R.version>0&&C.__version!==R.version?$(C,R,b):(R.isExternalTexture&&(C.__webglTexture=R.sourceTexture?R.sourceTexture:null),t.bindTexture(i.TEXTURE_2D_ARRAY,C.__webglTexture,i.TEXTURE0+b))},this.setTexture3D=function(R,b){let C=n.get(R);R.isRenderTargetTexture===!1&&R.version>0&&C.__version!==R.version?$(C,R,b):t.bindTexture(i.TEXTURE_3D,C.__webglTexture,i.TEXTURE0+b)},this.setTextureCube=function(R,b){let C=n.get(R);R.isCubeDepthTexture!==!0&&R.version>0&&C.__version!==R.version?(function(U,x,L){if(x.image.length!==6)return;let I=z(U,x),w=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+L);let k=n.get(w);if(w.version!==k.__version||I===!0){t.activeTexture(i.TEXTURE0+L);let j=He.getPrimaries(He.workingColorSpace),J=x.colorSpace===Ai?null:He.getPrimaries(x.colorSpace),se=x.colorSpace===Ai||j===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let xe=x.isCompressedTexture||x.image[0].isCompressedTexture,Me=x.image[0]&&x.image[0].isDataTexture,pe=[];for(let Te=0;Te<6;Te++)pe[Te]=xe||Me?Me?x.image[Te].image:x.image[Te]:v(x.image[Te],!0,r.maxCubemapSize),pe[Te]=Fe(x,pe[Te]);let Re=pe[0],ne=s.convert(x.format,x.colorSpace),ae=s.convert(x.type),re=S(x.internalFormat,ne,ae,x.normalized,x.colorSpace),fe=x.isVideoTexture!==!0,tt=k.__version===void 0||I===!0,qe=w.dataReady,dt,Dt=M(x,Re);if(H(i.TEXTURE_CUBE_MAP,x),xe){fe&&tt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,re,Re.width,Re.height);for(let Te=0;Te<6;Te++){dt=pe[Te].mipmaps;for(let Je=0;Je<dt.length;Je++){let Ge=dt[Je];x.format!==pn?ne!==null?fe?qe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Je,0,0,Ge.width,Ge.height,ne,Ge.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Je,re,Ge.width,Ge.height,0,Ge.data):Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):fe?qe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Je,0,0,Ge.width,Ge.height,ne,ae,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Je,re,Ge.width,Ge.height,0,ne,ae,Ge.data)}}}else{if(dt=x.mipmaps,fe&&tt){dt.length>0&&Dt++;let Te=ee(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,re,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(Me){fe?qe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,pe[Te].width,pe[Te].height,ne,ae,pe[Te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,re,pe[Te].width,pe[Te].height,0,ne,ae,pe[Te].data);for(let Je=0;Je<dt.length;Je++){let Ge=dt[Je].image[Te].image;fe?qe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Je+1,0,0,Ge.width,Ge.height,ne,ae,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Je+1,re,Ge.width,Ge.height,0,ne,ae,Ge.data)}}else{fe?qe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,ne,ae,pe[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,re,ne,ae,pe[Te]);for(let Je=0;Je<dt.length;Je++){let Ge=dt[Je];fe?qe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Je+1,0,0,ne,ae,Ge.image[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Je+1,re,ne,ae,Ge.image[Te])}}}f(x)&&_(i.TEXTURE_CUBE_MAP),k.__version=w.version,x.onUpdate&&x.onUpdate(x)}U.__version=x.version})(C,R,b):t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+b)},this.rebindTextures=function(R,b,C){let U=n.get(R);b!==void 0&&oe(U.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),C!==void 0&&ve(R)},this.setupRenderTarget=function(R){let b=R.texture,C=n.get(R),U=n.get(b);R.addEventListener("dispose",F);let x=R.textures,L=R.isWebGLCubeRenderTarget===!0,I=x.length>1;if(I||(U.__webglTexture===void 0&&(U.__webglTexture=i.createTexture()),U.__version=b.version,a.memory.textures++),L){C.__webglFramebuffer=[];for(let w=0;w<6;w++)if(b.mipmaps&&b.mipmaps.length>0){C.__webglFramebuffer[w]=[];for(let k=0;k<b.mipmaps.length;k++)C.__webglFramebuffer[w][k]=i.createFramebuffer()}else C.__webglFramebuffer[w]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){C.__webglFramebuffer=[];for(let w=0;w<b.mipmaps.length;w++)C.__webglFramebuffer[w]=i.createFramebuffer()}else C.__webglFramebuffer=i.createFramebuffer();if(I)for(let w=0,k=x.length;w<k;w++){let j=n.get(x[w]);j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&_e(R)===!1){C.__webglMultisampledFramebuffer=i.createFramebuffer(),C.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let w=0;w<x.length;w++){let k=x[w];C.__webglColorRenderbuffer[w]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,C.__webglColorRenderbuffer[w]);let j=s.convert(k.format,k.colorSpace),J=s.convert(k.type),se=S(k.internalFormat,j,J,k.normalized,k.colorSpace,R.isXRRenderTarget===!0),xe=ce(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,se,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+w,i.RENDERBUFFER,C.__webglColorRenderbuffer[w])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(C.__webglDepthRenderbuffer=i.createRenderbuffer(),be(C.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(L){t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture),H(i.TEXTURE_CUBE_MAP,b);for(let w=0;w<6;w++)if(b.mipmaps&&b.mipmaps.length>0)for(let k=0;k<b.mipmaps.length;k++)oe(C.__webglFramebuffer[w][k],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+w,k);else oe(C.__webglFramebuffer[w],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+w,0);f(b)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(I){for(let w=0,k=x.length;w<k;w++){let j=x[w],J=n.get(j),se=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(se=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,J.__webglTexture),H(se,j),oe(C.__webglFramebuffer,R,j,i.COLOR_ATTACHMENT0+w,se,0),f(j)&&_(se)}t.unbindTexture()}else{let w=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(w=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(w,U.__webglTexture),H(w,b),b.mipmaps&&b.mipmaps.length>0)for(let k=0;k<b.mipmaps.length;k++)oe(C.__webglFramebuffer[k],R,b,i.COLOR_ATTACHMENT0,w,k);else oe(C.__webglFramebuffer,R,b,i.COLOR_ATTACHMENT0,w,0);f(b)&&_(w),t.unbindTexture()}R.depthBuffer&&ve(R)},this.updateRenderTargetMipmap=function(R){let b=R.textures;for(let C=0,U=b.length;C<U;C++){let x=b[C];if(f(x)){let L=y(R),I=n.get(x).__webglTexture;t.bindTexture(L,I),_(L),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(R){if(R.samples>0){if(_e(R)===!1){let b=R.textures,C=R.width,U=R.height,x=i.COLOR_BUFFER_BIT,L=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,I=n.get(R),w=b.length>1;if(w)for(let j=0;j<b.length;j++)t.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,I.__webglMultisampledFramebuffer);let k=R.texture.mipmaps;k&&k.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,I.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,I.__webglFramebuffer);for(let j=0;j<b.length;j++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(x|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(x|=i.STENCIL_BUFFER_BIT)),w){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,I.__webglColorRenderbuffer[j]);let J=n.get(b[j]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,J,0)}i.blitFramebuffer(0,0,C,U,0,0,C,U,x,i.NEAREST),c===!0&&(te.length=0,ue.length=0,te.push(i.COLOR_ATTACHMENT0+j),R.depthBuffer&&R.resolveDepthBuffer===!1&&(te.push(L),ue.push(L),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ue)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,te))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),w)for(let j=0;j<b.length;j++){t.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,I.__webglColorRenderbuffer[j]);let J=n.get(b[j]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.TEXTURE_2D,J,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,I.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){let b=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}},this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=_e,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Fm(i,e){return{convert:function(t,n=Ai){let r,s=He.getTransfer(n);if(t===Xt)return i.UNSIGNED_BYTE;if(t===Ya)return i.UNSIGNED_SHORT_4_4_4_4;if(t===Za)return i.UNSIGNED_SHORT_5_5_5_1;if(t===Pl)return i.UNSIGNED_INT_5_9_9_9_REV;if(t===Il)return i.UNSIGNED_INT_10F_11F_11F_REV;if(t===Cl)return i.BYTE;if(t===Rl)return i.SHORT;if(t===_r)return i.UNSIGNED_SHORT;if(t===qa)return i.INT;if(t===jn)return i.UNSIGNED_INT;if(t===dn)return i.FLOAT;if(t===An)return i.HALF_FLOAT;if(t===uu)return i.ALPHA;if(t===du)return i.RGB;if(t===pn)return i.RGBA;if(t===li)return i.DEPTH_COMPONENT;if(t===Ei)return i.DEPTH_STENCIL;if(t===Ll)return i.RED;if(t===Ja)return i.RED_INTEGER;if(t===wi)return i.RG;if(t===Dl)return i.RG_INTEGER;if(t===Nl)return i.RGBA_INTEGER;if(t===Ka||t===$a||t===Qa||t===eo)if(s===Ze){if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r===null)return null;if(t===Ka)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===$a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===Qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(r=e.get("WEBGL_compressed_texture_s3tc"),r===null)return null;if(t===Ka)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===$a)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===Qa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===eo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===Ul||t===Fl||t===Ol||t===Bl){if(r=e.get("WEBGL_compressed_texture_pvrtc"),r===null)return null;if(t===Ul)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===Fl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===Ol)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===Bl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===zl||t===Gl||t===Vl||t===Hl||t===kl||t===to||t===Wl){if(r=e.get("WEBGL_compressed_texture_etc"),r===null)return null;if(t===zl||t===Gl)return s===Ze?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(t===Vl)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(t===Hl)return r.COMPRESSED_R11_EAC;if(t===kl)return r.COMPRESSED_SIGNED_R11_EAC;if(t===to)return r.COMPRESSED_RG11_EAC;if(t===Wl)return r.COMPRESSED_SIGNED_RG11_EAC}if(t===Xl||t===jl||t===ql||t===Yl||t===Zl||t===Jl||t===Kl||t===$l||t===Ql||t===ec||t===tc||t===nc||t===ic||t===rc){if(r=e.get("WEBGL_compressed_texture_astc"),r===null)return null;if(t===Xl)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===jl)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===ql)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===Yl)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===Zl)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===Jl)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===Kl)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===$l)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===Ql)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===ec)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===tc)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===nc)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===ic)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===rc)return s===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===sc||t===ac||t===oc){if(r=e.get("EXT_texture_compression_bptc"),r===null)return null;if(t===sc)return s===Ze?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===ac)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===oc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===lc||t===cc||t===no||t===hc){if(r=e.get("EXT_texture_compression_rgtc"),r===null)return null;if(t===lc)return r.COMPRESSED_RED_RGTC1_EXT;if(t===cc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===no)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===hc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===vr?i.UNSIGNED_INT_24_8:i[t]!==void 0?i[t]:null}}}var Pc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new $r(e.texture);e.depthNear===t.depthNear&&e.depthFar===t.depthFar||(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Wt({vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new It(new En(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ic=class extends bn{constructor(e,t){super();let n=this,r=null,s=1,a=null,l="local-floor",c=1,o=null,h=null,p=null,d=null,u=null,g=null,m=typeof XRWebGLBinding<"u",v=new Pc,f={},_=t.getContextAttributes(),y=null,S=null,E=[],M=[],P=new ie,F=null,D=new Rt;D.viewport=new $e;let N=new Rt;N.viewport=new $e;let W=[D,N],O=new Ha,Z=null,X=null;function H(te){let ue=M.indexOf(te.inputSource);if(ue===-1)return;let ce=E[ue];ce!==void 0&&(ce.update(te.inputSource,te.frame,o||a),ce.dispatchEvent({type:te.type,data:te.inputSource}))}function z(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",V);for(let te=0;te<E.length;te++){let ue=M[te];ue!==null&&(M[te]=null,E[te].disconnect(ue))}Z=null,X=null,v.reset();for(let te in f)delete f[te];e.setRenderTarget(y),u=null,d=null,p=null,r=null,S=null,ve.stop(),n.isPresenting=!1,e.setPixelRatio(F),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}function V(te){for(let ue=0;ue<te.removed.length;ue++){let ce=te.removed[ue],_e=M.indexOf(ce);_e>=0&&(M[_e]=null,E[_e].disconnect(ce))}for(let ue=0;ue<te.added.length;ue++){let ce=te.added[ue],_e=M.indexOf(ce);if(_e===-1){for(let ee=0;ee<E.length;ee++){if(ee>=M.length){M.push(ce),_e=ee;break}if(M[ee]===null){M[ee]=ce,_e=ee;break}}if(_e===-1)break}let Fe=E[_e];Fe&&Fe.connect(ce)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ue=E[te];return ue===void 0&&(ue=new rr,E[te]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(te){let ue=E[te];return ue===void 0&&(ue=new rr,E[te]=ue),ue.getGripSpace()},this.getHand=function(te){let ue=E[te];return ue===void 0&&(ue=new rr,E[te]=ue),ue.getHandSpace()},this.setFramebufferScaleFactor=function(te){s=te,n.isPresenting===!0&&Ee("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){l=te,n.isPresenting===!0&&Ee("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o||a},this.setReferenceSpace=function(te){o=te},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return p===null&&m&&(p=new XRWebGLBinding(r,t)),p},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",z),r.addEventListener("inputsourceschange",V),_.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(P),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,ce=null,_e=null;_.depth&&(_e=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=_.stencil?Ei:li,ce=_.stencil?vr:jn);let Fe={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};p=this.getBinding(),d=p.createProjectionLayer(Fe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Ht(d.textureWidth,d.textureHeight,{format:pn,type:Xt,depthTexture:new kn(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ue={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),S=new Ht(u.framebufferWidth,u.framebufferHeight,{format:pn,type:Xt,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),o=null,a=await r.requestReferenceSpace(l),ve.setContext(r),ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};let $=new A,oe=new A;function be(te,ue){ue===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ue.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let ue=te.near,ce=te.far;v.texture!==null&&(v.depthNear>0&&(ue=v.depthNear),v.depthFar>0&&(ce=v.depthFar)),O.near=N.near=D.near=ue,O.far=N.far=D.far=ce,Z===O.near&&X===O.far||(r.updateRenderState({depthNear:O.near,depthFar:O.far}),Z=O.near,X=O.far),O.layers.mask=6|te.layers.mask,D.layers.mask=-5&O.layers.mask,N.layers.mask=-3&O.layers.mask;let _e=te.parent,Fe=O.cameras;be(O,_e);for(let ee=0;ee<Fe.length;ee++)be(Fe[ee],_e);Fe.length===2?(function(ee,R,b){$.setFromMatrixPosition(R.matrixWorld),oe.setFromMatrixPosition(b.matrixWorld);let C=$.distanceTo(oe),U=R.projectionMatrix.elements,x=b.projectionMatrix.elements,L=U[14]/(U[10]-1),I=U[14]/(U[10]+1),w=(U[9]+1)/U[5],k=(U[9]-1)/U[5],j=(U[8]-1)/U[0],J=(x[8]+1)/x[0],se=L*j,xe=L*J,Me=C/(-j+J),pe=Me*-j;if(R.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(pe),ee.translateZ(Me),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),U[10]===-1)ee.projectionMatrix.copy(R.projectionMatrix),ee.projectionMatrixInverse.copy(R.projectionMatrixInverse);else{let Re=L+Me,ne=I+Me,ae=se-pe,re=xe+(C-pe),fe=w*I/ne*Re,tt=k*I/ne*Re;ee.projectionMatrix.makePerspective(ae,re,fe,tt,Re,ne),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}})(O,D,N):O.projectionMatrix.copy(D.projectionMatrix),(function(ee,R,b){b===null?ee.matrix.copy(R.matrixWorld):(ee.matrix.copy(b.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(R.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(R.projectionMatrix),ee.projectionMatrixInverse.copy(R.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=2*nr*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)})(te,O,_e)},this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||u!==null)return c},this.setFoveation=function(te){c=te,d!==null&&(d.fixedFoveation=te),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=te)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(O)},this.getCameraTexture=function(te){return f[te]};let ge=null,ve=new Qu;ve.setAnimationLoop(function(te,ue){if(h=ue.getViewerPose(o||a),g=ue,h!==null){let ce=h.views;u!==null&&(e.setRenderTargetFramebuffer(S,u.framebuffer),e.setRenderTarget(S));let _e=!1;ce.length!==O.cameras.length&&(O.cameras.length=0,_e=!0);for(let ee=0;ee<ce.length;ee++){let R=ce[ee],b=null;if(u!==null)b=u.getViewport(R);else{let U=p.getViewSubImage(d,R);b=U.viewport,ee===0&&(e.setRenderTargetTextures(S,U.colorTexture,U.depthStencilTexture),e.setRenderTarget(S))}let C=W[ee];C===void 0&&(C=new Rt,C.layers.enable(ee),C.viewport=new $e,W[ee]=C),C.matrix.fromArray(R.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(R.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(b.x,b.y,b.width,b.height),ee===0&&(O.matrix.copy(C.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),_e===!0&&O.cameras.push(C)}let Fe=r.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&m){p=n.getBinding();let ee=p.getDepthInformation(ce[0]);ee&&ee.isValid&&ee.texture&&v.init(ee,r.renderState)}if(Fe&&Fe.includes("camera-access")&&m){e.state.unbindTexture(),p=n.getBinding();for(let ee=0;ee<ce.length;ee++){let R=ce[ee].camera;if(R){let b=f[R];b||(b=new $r,f[R]=b);let C=p.getCameraImage(R);b.sourceTexture=C}}}}for(let ce=0;ce<E.length;ce++){let _e=M[ce],Fe=E[ce];_e!==null&&Fe!==void 0&&Fe.update(_e,ue,o||a)}ge&&ge(te,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),g=null}),this.setAnimationLoop=function(te){ge=te},this.dispose=function(){}}},Om=new Oe,sd=new Ne;function Bm(i,e){function t(r,s){r.matrixAutoUpdate===!0&&r.updateMatrix(),s.value.copy(r.matrix)}function n(r,s){r.opacity.value=s.opacity,s.color&&r.diffuse.value.copy(s.color),s.emissive&&r.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(r.map.value=s.map,t(s.map,r.mapTransform)),s.alphaMap&&(r.alphaMap.value=s.alphaMap,t(s.alphaMap,r.alphaMapTransform)),s.bumpMap&&(r.bumpMap.value=s.bumpMap,t(s.bumpMap,r.bumpMapTransform),r.bumpScale.value=s.bumpScale,s.side===Bt&&(r.bumpScale.value*=-1)),s.normalMap&&(r.normalMap.value=s.normalMap,t(s.normalMap,r.normalMapTransform),r.normalScale.value.copy(s.normalScale),s.side===Bt&&r.normalScale.value.negate()),s.displacementMap&&(r.displacementMap.value=s.displacementMap,t(s.displacementMap,r.displacementMapTransform),r.displacementScale.value=s.displacementScale,r.displacementBias.value=s.displacementBias),s.emissiveMap&&(r.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,r.emissiveMapTransform)),s.specularMap&&(r.specularMap.value=s.specularMap,t(s.specularMap,r.specularMapTransform)),s.alphaTest>0&&(r.alphaTest.value=s.alphaTest);let a=e.get(s),l=a.envMap,c=a.envMapRotation;l&&(r.envMap.value=l,r.envMapRotation.value.setFromMatrix4(Om.makeRotationFromEuler(c)).transpose(),l.isCubeTexture&&l.isRenderTargetTexture===!1&&r.envMapRotation.value.premultiply(sd),r.reflectivity.value=s.reflectivity,r.ior.value=s.ior,r.refractionRatio.value=s.refractionRatio),s.lightMap&&(r.lightMap.value=s.lightMap,r.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,r.lightMapTransform)),s.aoMap&&(r.aoMap.value=s.aoMap,r.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,r.aoMapTransform))}return{refreshFogUniforms:function(r,s){s.color.getRGB(r.fogColor.value,mc(i)),s.isFog?(r.fogNear.value=s.near,r.fogFar.value=s.far):s.isFogExp2&&(r.fogDensity.value=s.density)},refreshMaterialUniforms:function(r,s,a,l,c){s.isNodeMaterial?s.uniformsNeedUpdate=!1:s.isMeshBasicMaterial?n(r,s):s.isMeshLambertMaterial?(n(r,s),s.envMap&&(r.envMapIntensity.value=s.envMapIntensity)):s.isMeshToonMaterial?(n(r,s),(function(o,h){h.gradientMap&&(o.gradientMap.value=h.gradientMap)})(r,s)):s.isMeshPhongMaterial?(n(r,s),(function(o,h){o.specular.value.copy(h.specular),o.shininess.value=Math.max(h.shininess,1e-4)})(r,s),s.envMap&&(r.envMapIntensity.value=s.envMapIntensity)):s.isMeshStandardMaterial?(n(r,s),(function(o,h){o.metalness.value=h.metalness,h.metalnessMap&&(o.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,o.metalnessMapTransform)),o.roughness.value=h.roughness,h.roughnessMap&&(o.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,o.roughnessMapTransform)),h.envMap&&(o.envMapIntensity.value=h.envMapIntensity)})(r,s),s.isMeshPhysicalMaterial&&(function(o,h,p){o.ior.value=h.ior,h.sheen>0&&(o.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),o.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(o.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,o.sheenColorMapTransform)),h.sheenRoughnessMap&&(o.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,o.sheenRoughnessMapTransform))),h.clearcoat>0&&(o.clearcoat.value=h.clearcoat,o.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(o.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,o.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(o.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,o.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(o.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,o.clearcoatNormalMapTransform),o.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Bt&&o.clearcoatNormalScale.value.negate())),h.dispersion>0&&(o.dispersion.value=h.dispersion),h.iridescence>0&&(o.iridescence.value=h.iridescence,o.iridescenceIOR.value=h.iridescenceIOR,o.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],o.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(o.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,o.iridescenceMapTransform)),h.iridescenceThicknessMap&&(o.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,o.iridescenceThicknessMapTransform))),h.transmission>0&&(o.transmission.value=h.transmission,o.transmissionSamplerMap.value=p.texture,o.transmissionSamplerSize.value.set(p.width,p.height),h.transmissionMap&&(o.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,o.transmissionMapTransform)),o.thickness.value=h.thickness,h.thicknessMap&&(o.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,o.thicknessMapTransform)),o.attenuationDistance.value=h.attenuationDistance,o.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(o.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(o.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,o.anisotropyMapTransform))),o.specularIntensity.value=h.specularIntensity,o.specularColor.value.copy(h.specularColor),h.specularColorMap&&(o.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,o.specularColorMapTransform)),h.specularIntensityMap&&(o.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,o.specularIntensityMapTransform))})(r,s,c)):s.isMeshMatcapMaterial?(n(r,s),(function(o,h){h.matcap&&(o.matcap.value=h.matcap)})(r,s)):s.isMeshDepthMaterial?n(r,s):s.isMeshDistanceMaterial?(n(r,s),(function(o,h){let p=e.get(h).light;o.referencePosition.value.setFromMatrixPosition(p.matrixWorld),o.nearDistance.value=p.shadow.camera.near,o.farDistance.value=p.shadow.camera.far})(r,s)):s.isMeshNormalMaterial?n(r,s):s.isLineBasicMaterial?((function(o,h){o.diffuse.value.copy(h.color),o.opacity.value=h.opacity,h.map&&(o.map.value=h.map,t(h.map,o.mapTransform))})(r,s),s.isLineDashedMaterial&&(function(o,h){o.dashSize.value=h.dashSize,o.totalSize.value=h.dashSize+h.gapSize,o.scale.value=h.scale})(r,s)):s.isPointsMaterial?(function(o,h,p,d){o.diffuse.value.copy(h.color),o.opacity.value=h.opacity,o.size.value=h.size*p,o.scale.value=.5*d,h.map&&(o.map.value=h.map,t(h.map,o.uvTransform)),h.alphaMap&&(o.alphaMap.value=h.alphaMap,t(h.alphaMap,o.alphaMapTransform)),h.alphaTest>0&&(o.alphaTest.value=h.alphaTest)})(r,s,a,l):s.isSpriteMaterial?(function(o,h){o.diffuse.value.copy(h.color),o.opacity.value=h.opacity,o.rotation.value=h.rotation,h.map&&(o.map.value=h.map,t(h.map,o.mapTransform)),h.alphaMap&&(o.alphaMap.value=h.alphaMap,t(h.alphaMap,o.alphaMapTransform)),h.alphaTest>0&&(o.alphaTest.value=h.alphaTest)})(r,s):s.isShadowMaterial?(r.color.value.copy(s.color),r.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function zm(i,e,t,n){let r={},s={},a=[],l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(d,u,g,m){if((function(v,f,_,y){let S=v.value,E=f+"_"+_;if(y[E]===void 0)return typeof S=="number"||typeof S=="boolean"?y[E]=S:ArrayBuffer.isView(S)?y[E]=S.slice():y[E]=S.clone(),!0;{let M=y[E];if(typeof S=="number"||typeof S=="boolean"){if(M!==S)return y[E]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(M.equals(S)===!1)return M.copy(S),!0}}return!1})(d,u,g,m)===!0){let v=d.__offset,f=d.value;if(Array.isArray(f)){let _=0;for(let y=0;y<f.length;y++){let S=f[y],E=h(S);o(S,d.__data,_),typeof S=="number"||typeof S=="boolean"||S.isMatrix3||ArrayBuffer.isView(S)||(_+=E.storage/Float32Array.BYTES_PER_ELEMENT)}}else o(f,d.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,d.__data)}}function o(d,u,g){typeof d=="number"||typeof d=="boolean"?u[0]=d:d.isMatrix3?(u[0]=d.elements[0],u[1]=d.elements[1],u[2]=d.elements[2],u[3]=0,u[4]=d.elements[3],u[5]=d.elements[4],u[6]=d.elements[5],u[7]=0,u[8]=d.elements[6],u[9]=d.elements[7],u[10]=d.elements[8],u[11]=0):ArrayBuffer.isView(d)?u.set(new d.constructor(d.buffer,d.byteOffset,u.length)):d.toArray(u,g)}function h(d){let u={boundary:0,storage:0};return typeof d=="number"||typeof d=="boolean"?(u.boundary=4,u.storage=4):d.isVector2?(u.boundary=8,u.storage=8):d.isVector3||d.isColor?(u.boundary=16,u.storage=12):d.isVector4?(u.boundary=16,u.storage=16):d.isMatrix3?(u.boundary=48,u.storage=48):d.isMatrix4?(u.boundary=64,u.storage=64):d.isTexture?Ee("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(d)?(u.boundary=16,u.storage=d.byteLength):Ee("WebGLRenderer: Unsupported uniform value type.",d),u}function p(d){let u=d.target;u.removeEventListener("dispose",p);let g=a.indexOf(u.__bindingPointIndex);a.splice(g,1),i.deleteBuffer(r[u.id]),delete r[u.id],delete s[u.id]}return{bind:function(d,u){let g=u.program;n.uniformBlockBinding(d,g)},update:function(d,u){let g=r[d.id];g===void 0&&((function(f){let _=f.uniforms,y=0,S=16;for(let M=0,P=_.length;M<P;M++){let F=Array.isArray(_[M])?_[M]:[_[M]];for(let D=0,N=F.length;D<N;D++){let W=F[D],O=Array.isArray(W.value)?W.value:[W.value];for(let Z=0,X=O.length;Z<X;Z++){let H=h(O[Z]),z=y%S,V=z%H.boundary,$=z+V;y+=V,$!==0&&S-$<H.storage&&(y+=S-$),W.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=y,y+=H.storage}}}let E=y%S;E>0&&(y+=S-E),f.__size=y,f.__cache={}})(d),g=(function(f){let _=(function(){for(let M=0;M<l;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Ae("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();f.__bindingPointIndex=_;let y=i.createBuffer(),S=f.__size,E=f.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,S,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,y),y})(d),r[d.id]=g,d.addEventListener("dispose",p));let m=u.program;n.updateUBOMapping(d,m);let v=e.render.frame;s[d.id]!==v&&((function(f){let _=r[f.id],y=f.uniforms,S=f.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let E=0,M=y.length;E<M;E++){let P=y[E];if(Array.isArray(P))for(let F=0,D=P.length;F<D;F++)c(P[F],E,F,S);else c(P,E,0,S)}i.bindBuffer(i.UNIFORM_BUFFER,null)})(d),s[d.id]=v)},dispose:function(){for(let d in r)i.deleteBuffer(r[d]);a=[],r={},s={}}}}sd.set(-1,0,0,0,1,0,0,0,1);var Gm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Cn=null,ho=class{constructor(e={}){let{canvas:t=xu(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:o=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:u=Xt}=e,g;if(this.isWebGLRenderer=!0,n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let m=u,v=new Set([Nl,Dl,Ja]),f=new Set([Xt,jn,_r,vr,Ya,Za]),_=new Uint32Array(4),y=new Int32Array(4),S=new A,E=null,M=null,P=[],F=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,W=!1,O=null,Z=null,X=null,H=null;this._outputColorSpace=Ct;let z=0,V=0,$=null,oe=-1,be=null,ge=new $e,ve=new $e,te=null,ue=new Pe(0),ce=0,_e=t.width,Fe=t.height,ee=1,R=null,b=null,C=new $e(0,0,_e,Fe),U=new $e(0,0,_e,Fe),x=!1,L=new Hn,I=!1,w=!1,k=new Oe,j=new A,J=new $e,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},xe=!1;function Me(){return $===null?ee:1}let pe,Re,ne,ae,re,fe,tt,qe,dt,Dt,Te,Je,Ge,bt,nt,_t,ut,qt,en,ci,mn,Yn,Ss,B=n;function kc(T,G){return t.getContext(T,G)}try{let T={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:o,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",Xc,!1),t.addEventListener("webglcontextrestored",jc,!1),t.addEventListener("webglcontextcreationerror",qc,!1),B===null){let G="webgl2";if(B=kc(G,T),B===null)throw kc(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(T){throw Ae("WebGLRenderer: "+T.message),T}function Wc(){pe=new pp(B),pe.init(),mn=new Fm(B,pe),Re=new cp(B,pe,e,mn),ne=new Nm(B,pe),Re.reversedDepthBuffer&&d&&ne.buffers.depth.setReversed(!0),Z=B.createFramebuffer(),X=B.createFramebuffer(),H=B.createFramebuffer(),ae=new gp(B),re=new bm,fe=new Um(B,pe,ne,re,Re,mn,ae),tt=new dp(N),qe=new rp(B),Yn=new op(B,qe),dt=new mp(B,qe,ae,Yn),Dt=new vp(B,dt,qe,Yn,ae),qt=new _p(B,Re,fe),nt=new hp(re),Te=new Sm(N,tt,pe,Re,Yn,nt),Je=new Bm(N,re),Ge=new Em,bt=new Pm(pe),ut=new ap(N,tt,ne,Dt,g,c),_t=new Dm(N,Dt,Re),Ss=new zm(B,ae,Re,ne),en=new lp(B,pe,ae),ci=new fp(B,pe,ae),ae.programs=Te.programs,N.capabilities=Re,N.extensions=pe,N.properties=re,N.renderLists=Ge,N.shadowMap=_t,N.state=ne,N.info=ae}Wc(),m!==Xt&&(D=new xp(m,t.width,t.height,l,r,s));let pt=new Ic(N,B);function Xc(T){T.preventDefault(),Vr("WebGLRenderer: Context Lost."),W=!0}function jc(){Vr("WebGLRenderer: Context Restored."),W=!1;let T=ae.autoReset,G=_t.enabled,Y=_t.autoUpdate,Q=_t.needsUpdate,K=_t.type;Wc(),ae.autoReset=T,_t.enabled=G,_t.autoUpdate=Y,_t.needsUpdate=Q,_t.type=K}function qc(T){Ae("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Yc(T){let G=T.target;G.removeEventListener("dispose",Yc),(function(Y){(function(Q){let K=re.get(Q).programs;K!==void 0&&(K.forEach(function(le){Te.releaseProgram(le)}),Q.isShaderMaterial&&Te.releaseShaderCache(Q))})(Y),re.remove(Y)})(G)}function Zc(T,G,Y){T.transparent===!0&&T.side===$t&&T.forceSinglePass===!1?(T.side=Bt,T.needsUpdate=!0,Ts(T,G,Y),T.side=mr,T.needsUpdate=!0,Ts(T,G,Y),T.side=$t):Ts(T,G,Y)}this.xr=pt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let T=pe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=pe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(T){T!==void 0&&(ee=T,this.setSize(_e,Fe,!1))},this.getSize=function(T){return T.set(_e,Fe)},this.setSize=function(T,G,Y=!0){pt.isPresenting?Ee("WebGLRenderer: Can't change size while VR device is presenting."):(_e=T,Fe=G,t.width=Math.floor(T*ee),t.height=Math.floor(G*ee),Y===!0&&(t.style.width=T+"px",t.style.height=G+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,T,G))},this.getDrawingBufferSize=function(T){return T.set(_e*ee,Fe*ee).floor()},this.setDrawingBufferSize=function(T,G,Y){_e=T,Fe=G,ee=Y,t.width=Math.floor(T*Y),t.height=Math.floor(G*Y),this.setViewport(0,0,T,G)},this.setEffects=function(T){if(m!==Xt){if(T){for(let G=0;G<T.length;G++)if(T[G].isOutputPass===!0){Ee("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(T||[])}else Ae("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.")},this.getCurrentViewport=function(T){return T.copy(ge)},this.getViewport=function(T){return T.copy(C)},this.setViewport=function(T,G,Y,Q){T.isVector4?C.set(T.x,T.y,T.z,T.w):C.set(T,G,Y,Q),ne.viewport(ge.copy(C).multiplyScalar(ee).round())},this.getScissor=function(T){return T.copy(U)},this.setScissor=function(T,G,Y,Q){T.isVector4?U.set(T.x,T.y,T.z,T.w):U.set(T,G,Y,Q),ne.scissor(ve.copy(U).multiplyScalar(ee).round())},this.getScissorTest=function(){return x},this.setScissorTest=function(T){ne.setScissorTest(x=T)},this.setOpaqueSort=function(T){R=T},this.setTransparentSort=function(T){b=T},this.getClearColor=function(T){return T.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor(...arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha(...arguments)},this.clear=function(T=!0,G=!0,Y=!0){let Q=0;if(T){let K=!1;if($!==null){let le=$.texture.format;K=v.has(le)}if(K){let le=$.texture.type,me=f.has(le),ye=ut.getClearColor(),Se=ut.getClearAlpha(),Ie=ye.r,ke=ye.g,We=ye.b;me?(_[0]=Ie,_[1]=ke,_[2]=We,_[3]=Se,B.clearBufferuiv(B.COLOR,0,_)):(y[0]=Ie,y[1]=ke,y[2]=We,y[3]=Se,B.clearBufferiv(B.COLOR,0,y))}else Q|=B.COLOR_BUFFER_BIT}G&&(Q|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(Q|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&B.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),O=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Xc,!1),t.removeEventListener("webglcontextrestored",jc,!1),t.removeEventListener("webglcontextcreationerror",qc,!1),ut.dispose(),Ge.dispose(),bt.dispose(),re.dispose(),tt.dispose(),Dt.dispose(),Yn.dispose(),Ss.dispose(),Te.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",Jc),pt.removeEventListener("sessionend",Kc),hi.stop()},this.renderBufferDirect=function(T,G,Y,Q,K,le){G===null&&(G=se);let me=K.isMesh&&K.matrixWorld.determinantAffine()<0,ye=(function(Ve,lt,Tt,Le,Ue){lt.isScene!==!0&&(lt=se),fe.resetTextureUnits();let tn=lt.fog,vo=Le.isMeshStandardMaterial||Le.isMeshLambertMaterial||Le.isMeshPhongMaterial?lt.environment:null,Es=$===null?N.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:He.workingColorSpace,Er=Le.isMeshStandardMaterial||Le.isMeshLambertMaterial&&!Le.envMap||Le.isMeshPhongMaterial&&!Le.envMap,fn=tt.get(Le.envMap||vo,Er),Di=Le.vertexColors===!0&&!!Tt.attributes.color&&Tt.attributes.color.itemSize===4,In=!!Tt.attributes.tangent&&(!!Le.normalMap||Le.anisotropy>0),yo=!!Tt.morphAttributes.position,Ni=!!Tt.morphAttributes.normal,xd=!!Tt.morphAttributes.color,ih=un;Le.toneMapped&&($!==null&&$.isXRRenderTarget!==!0||(ih=N.toneMapping));let rh=Tt.morphAttributes.position||Tt.morphAttributes.normal||Tt.morphAttributes.color,Md=rh!==void 0?rh.length:0,De=re.get(Le),ui=M.state.lights;if(I===!0&&(w===!0||Ve!==be)){let ft=Ve===be&&Le.id===oe;nt.setState(Le,Ve,ft)}let nn=!1;Le.version===De.__version?De.needsLights&&De.lightsStateVersion!==ui.state.version||De.outputColorSpace!==Es||Ue.isBatchedMesh&&De.batching===!1?nn=!0:Ue.isBatchedMesh||De.batching!==!0?Ue.isBatchedMesh&&De.batchingColor===!0&&Ue.colorTexture===null||Ue.isBatchedMesh&&De.batchingColor===!1&&Ue.colorTexture!==null||Ue.isInstancedMesh&&De.instancing===!1?nn=!0:Ue.isInstancedMesh||De.instancing!==!0?Ue.isSkinnedMesh&&De.skinning===!1?nn=!0:Ue.isSkinnedMesh||De.skinning!==!0?Ue.isInstancedMesh&&De.instancingColor===!0&&Ue.instanceColor===null||Ue.isInstancedMesh&&De.instancingColor===!1&&Ue.instanceColor!==null||Ue.isInstancedMesh&&De.instancingMorph===!0&&Ue.morphTexture===null||Ue.isInstancedMesh&&De.instancingMorph===!1&&Ue.morphTexture!==null||De.envMap!==fn||Le.fog===!0&&De.fog!==tn?nn=!0:De.numClippingPlanes===void 0||De.numClippingPlanes===nt.numPlanes&&De.numIntersection===nt.numIntersection?(De.vertexAlphas!==Di||De.vertexTangents!==In||De.morphTargets!==yo||De.morphNormals!==Ni||De.morphColors!==xd||De.toneMapping!==ih||De.morphTargetsCount!==Md||!!De.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(nn=!0):nn=!0:nn=!0:nn=!0:nn=!0:(nn=!0,De.__version=Le.version);let Zn=De.currentProgram;nn===!0&&(Zn=Ts(Le,lt,Ue),O&&Le.isNodeMaterial&&O.onUpdateProgram(Le,Zn,De));let sh=!1,Ui=!1,xo=!1,ct=Zn.getUniforms(),Yt=De.uniforms;if(ne.useProgram(Zn.program)&&(sh=!0,Ui=!0,xo=!0),Le.id!==oe&&(oe=Le.id,Ui=!0),De.needsLights){let ft=(function(_n,So){if(_n.length===0)return null;if(_n.length===1)return _n[0].texture!==null?_n[0]:null;S.setFromMatrixPosition(So.matrixWorld);for(let Fi=0,Sd=_n.length;Fi<Sd;Fi++){let bo=_n[Fi];if(bo.texture!==null&&bo.boundingBox.containsPoint(S))return bo}return null})(M.state.lightProbeGridArray,Ue);De.lightProbeGrid!==ft&&(De.lightProbeGrid=ft,Ui=!0)}if(sh||be!==Ve){ne.buffers.depth.getReversed()&&Ve.reversedDepth!==!0&&(Ve._reversedDepth=!0,Ve.updateProjectionMatrix()),ct.setValue(B,"projectionMatrix",Ve.projectionMatrix),ct.setValue(B,"viewMatrix",Ve.matrixWorldInverse);let ft=ct.map.cameraPosition;ft!==void 0&&ft.setValue(B,j.setFromMatrixPosition(Ve.matrixWorld)),Re.logarithmicDepthBuffer&&ct.setValue(B,"logDepthBufFC",2/(Math.log(Ve.far+1)/Math.LN2)),(Le.isMeshPhongMaterial||Le.isMeshToonMaterial||Le.isMeshLambertMaterial||Le.isMeshBasicMaterial||Le.isMeshStandardMaterial||Le.isShaderMaterial)&&ct.setValue(B,"isOrthographic",Ve.isOrthographicCamera===!0),be!==Ve&&(be=Ve,Ui=!0,xo=!0)}if(De.needsLights&&(ui.state.directionalShadowMap.length>0&&ct.setValue(B,"directionalShadowMap",ui.state.directionalShadowMap,fe),ui.state.spotShadowMap.length>0&&ct.setValue(B,"spotShadowMap",ui.state.spotShadowMap,fe),ui.state.pointShadowMap.length>0&&ct.setValue(B,"pointShadowMap",ui.state.pointShadowMap,fe)),Ue.isSkinnedMesh){ct.setOptional(B,Ue,"bindMatrix"),ct.setOptional(B,Ue,"bindMatrixInverse");let ft=Ue.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),ct.setValue(B,"boneTexture",ft.boneTexture,fe))}Ue.isBatchedMesh&&(ct.setOptional(B,Ue,"batchingTexture"),ct.setValue(B,"batchingTexture",Ue._matricesTexture,fe),ct.setOptional(B,Ue,"batchingIdTexture"),ct.setValue(B,"batchingIdTexture",Ue._indirectTexture,fe),ct.setOptional(B,Ue,"batchingColorTexture"),Ue._colorsTexture!==null&&ct.setValue(B,"batchingColorTexture",Ue._colorsTexture,fe));let Mo=Tt.morphAttributes;if(Mo.position===void 0&&Mo.normal===void 0&&Mo.color===void 0||qt.update(Ue,Tt,Zn),(Ui||De.receiveShadow!==Ue.receiveShadow)&&(De.receiveShadow=Ue.receiveShadow,ct.setValue(B,"receiveShadow",Ue.receiveShadow)),(Le.isMeshStandardMaterial||Le.isMeshLambertMaterial||Le.isMeshPhongMaterial)&&Le.envMap===null&&lt.environment!==null&&(Yt.envMapIntensity.value=lt.environmentIntensity),Yt.dfgLUT!==void 0&&(Yt.dfgLUT.value=(Cn===null&&(Cn=new ca(Gm,16,16,wi,An),Cn.name="DFG_LUT",Cn.minFilter=Pt,Cn.magFilter=Pt,Cn.wrapS=ri,Cn.wrapT=ri,Cn.generateMipmaps=!1,Cn.needsUpdate=!0),Cn)),Ui){if(ct.setValue(B,"toneMappingExposure",N.toneMappingExposure),De.needsLights&&(rn=xo,(gn=Yt).ambientLightColor.needsUpdate=rn,gn.lightProbe.needsUpdate=rn,gn.directionalLights.needsUpdate=rn,gn.directionalLightShadows.needsUpdate=rn,gn.pointLights.needsUpdate=rn,gn.pointLightShadows.needsUpdate=rn,gn.spotLights.needsUpdate=rn,gn.spotLightShadows.needsUpdate=rn,gn.rectAreaLights.needsUpdate=rn,gn.hemisphereLights.needsUpdate=rn),tn&&Le.fog===!0&&Je.refreshFogUniforms(Yt,tn),Je.refreshMaterialUniforms(Yt,Le,ee,Fe,M.state.transmissionRenderTarget[Ve.id]),De.needsLights&&De.lightProbeGrid){let ft=De.lightProbeGrid;Yt.probesSH.value=ft.texture,Yt.probesMin.value.copy(ft.boundingBox.min),Yt.probesMax.value.copy(ft.boundingBox.max),Yt.probesResolution.value.copy(ft.resolution)}xr.upload(B,th(De),Yt,fe)}var gn,rn;if(Le.isShaderMaterial&&Le.uniformsNeedUpdate===!0&&(xr.upload(B,th(De),Yt,fe),Le.uniformsNeedUpdate=!1),Le.isSpriteMaterial&&ct.setValue(B,"center",Ue.center),ct.setValue(B,"modelViewMatrix",Ue.modelViewMatrix),ct.setValue(B,"normalMatrix",Ue.normalMatrix),ct.setValue(B,"modelMatrix",Ue.matrixWorld),Le.uniformsGroups!==void 0){let ft=Le.uniformsGroups;for(let _n=0,So=ft.length;_n<So;_n++){let Fi=ft[_n];Ss.update(Fi,Zn),Ss.bind(Fi,Zn)}}return Zn})(T,G,Y,Q,K);ne.setMaterial(Q,me);let Se=Y.index,Ie=1;if(Q.wireframe===!0){if(Se=dt.getWireframeAttribute(Y),Se===void 0)return;Ie=2}let ke=Y.drawRange,We=Y.attributes.position,Ce=ke.start*Ie,Xe=(ke.start+ke.count)*Ie;le!==null&&(Ce=Math.max(Ce,le.start*Ie),Xe=Math.min(Xe,(le.start+le.count)*Ie)),Se!==null?(Ce=Math.max(Ce,0),Xe=Math.min(Xe,Se.count)):We!=null&&(Ce=Math.max(Ce,0),Xe=Math.min(Xe,We.count));let vt=Xe-Ce;if(vt<0||vt===1/0)return;let mt;Yn.setup(K,Q,ye,Y,Se);let ot=en;if(Se!==null&&(mt=qe.get(Se),ot=ci,ot.setIndex(mt)),K.isMesh)Q.wireframe===!0?(ne.setLineWidth(Q.wireframeLinewidth*Me()),ot.setMode(B.LINES)):ot.setMode(B.TRIANGLES);else if(K.isLine){let Ve=Q.linewidth;Ve===void 0&&(Ve=1),ne.setLineWidth(Ve*Me()),K.isLineSegments?ot.setMode(B.LINES):K.isLineLoop?ot.setMode(B.LINE_LOOP):ot.setMode(B.LINE_STRIP)}else K.isPoints?ot.setMode(B.POINTS):K.isSprite&&ot.setMode(B.TRIANGLES);if(K.isBatchedMesh)if(pe.get("WEBGL_multi_draw"))ot.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let Ve=K._multiDrawStarts,lt=K._multiDrawCounts,Tt=K._multiDrawCount,Le=Se?qe.get(Se).bytesPerElement:1,Ue=re.get(Q).currentProgram.getUniforms();for(let tn=0;tn<Tt;tn++)Ue.setValue(B,"_gl_DrawID",tn),ot.render(Ve[tn]/Le,lt[tn])}else if(K.isInstancedMesh)ot.renderInstances(Ce,vt,K.count);else if(Y.isInstancedBufferGeometry){let Ve=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,lt=Math.min(Y.instanceCount,Ve);ot.renderInstances(Ce,vt,lt)}else ot.render(Ce,vt)},this.compile=function(T,G,Y=null){Y===null&&(Y=T),M=bt.get(Y),M.init(G),F.push(M),Y.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(M.pushLight(K),K.castShadow&&M.pushShadow(K))}),T!==Y&&T.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(M.pushLight(K),K.castShadow&&M.pushShadow(K))}),M.setupLights();let Q=new Set;return T.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let le=K.material;if(le)if(Array.isArray(le))for(let me=0;me<le.length;me++){let ye=le[me];Zc(ye,Y,K),Q.add(ye)}else Zc(le,Y,K),Q.add(le)}),M=F.pop(),Q},this.compileAsync=function(T,G,Y=null){let Q=this.compile(T,G,Y);return new Promise(K=>{function le(){Q.forEach(function(me){re.get(me).currentProgram.isReady()&&Q.delete(me)}),Q.size!==0?setTimeout(le,10):K(T)}pe.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let go=null;function Jc(){hi.stop()}function Kc(){hi.start()}let hi=new Qu;function _o(T,G,Y,Q){if(T.visible===!1)return;if(T.layers.test(G.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(G);else if(T.isLightProbeGrid)M.pushLightProbeGrid(T);else if(T.isLight)M.pushLight(T),T.castShadow&&M.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||L.intersectsSprite(T)){Q&&J.setFromMatrixPosition(T.matrixWorld).applyMatrix4(k);let le=Dt.update(T),me=T.material;me.visible&&E.push(T,le,me,Y,J.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||L.intersectsObject(T))){let le=Dt.update(T),me=T.material;if(Q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),J.copy(T.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),J.copy(le.boundingSphere.center)),J.applyMatrix4(T.matrixWorld).applyMatrix4(k)),Array.isArray(me)){let ye=le.groups;for(let Se=0,Ie=ye.length;Se<Ie;Se++){let ke=ye[Se],We=me[ke.materialIndex];We&&We.visible&&E.push(T,le,We,Y,J.z,ke)}}else me.visible&&E.push(T,le,me,Y,J.z,null)}}let K=T.children;for(let le=0,me=K.length;le<me;le++)_o(K[le],G,Y,Q)}function $c(T,G,Y,Q){let{opaque:K,transmissive:le,transparent:me}=T;M.setupLightsView(Y),I===!0&&nt.setGlobalState(N.clippingPlanes,Y),Q&&ne.viewport(ge.copy(Q)),K.length>0&&bs(K,G,Y),le.length>0&&bs(le,G,Y),me.length>0&&bs(me,G,Y),ne.buffers.depth.setTest(!0),ne.buffers.depth.setMask(!0),ne.buffers.color.setMask(!0),ne.setPolygonOffset(!1)}function Qc(T,G,Y,Q){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[Q.id]===void 0){let We=pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[Q.id]=new Ht(1,1,{generateMipmaps:!0,type:We?An:Xt,minFilter:Ti,samples:Math.max(4,Re.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:He.workingColorSpace})}let K=M.state.transmissionRenderTarget[Q.id],le=Q.viewport||ge;K.setSize(le.z*N.transmissionResolutionScale,le.w*N.transmissionResolutionScale);let me=N.getRenderTarget(),ye=N.getActiveCubeFace(),Se=N.getActiveMipmapLevel();N.setRenderTarget(K),N.getClearColor(ue),ce=N.getClearAlpha(),ce<1&&N.setClearColor(16777215,.5),N.clear(),xe&&ut.render(Y);let Ie=N.toneMapping;N.toneMapping=un;let ke=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),M.setupLightsView(Q),I===!0&&nt.setGlobalState(N.clippingPlanes,Q),bs(T,Y,Q),fe.updateMultisampleRenderTarget(K),fe.updateRenderTargetMipmap(K),pe.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let Ce=0,Xe=G.length;Ce<Xe;Ce++){let vt=G[Ce],{object:mt,geometry:ot,material:Ve,group:lt}=vt;if(Ve.side===$t&&mt.layers.test(Q.layers)){let Tt=Ve.side;Ve.side=Bt,Ve.needsUpdate=!0,eh(mt,Y,Q,ot,Ve,lt),Ve.side=Tt,Ve.needsUpdate=!0,We=!0}}We===!0&&(fe.updateMultisampleRenderTarget(K),fe.updateRenderTargetMipmap(K))}N.setRenderTarget(me,ye,Se),N.setClearColor(ue,ce),ke!==void 0&&(Q.viewport=ke),N.toneMapping=Ie}function bs(T,G,Y){let Q=G.isScene===!0?G.overrideMaterial:null;for(let K=0,le=T.length;K<le;K++){let me=T[K],{object:ye,geometry:Se,group:Ie}=me,ke=me.material;ke.allowOverride===!0&&Q!==null&&(ke=Q),ye.layers.test(Y.layers)&&eh(ye,G,Y,Se,ke,Ie)}}function eh(T,G,Y,Q,K,le){T.onBeforeRender(N,G,Y,Q,K,le),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),K.onBeforeRender(N,G,Y,Q,T,le),K.transparent===!0&&K.side===$t&&K.forceSinglePass===!1?(K.side=Bt,K.needsUpdate=!0,N.renderBufferDirect(Y,G,Q,K,T,le),K.side=mr,K.needsUpdate=!0,N.renderBufferDirect(Y,G,Q,K,T,le),K.side=$t):N.renderBufferDirect(Y,G,Q,K,T,le),T.onAfterRender(N,G,Y,Q,K,le)}function Ts(T,G,Y){G.isScene!==!0&&(G=se);let Q=re.get(T),K=M.state.lights,le=M.state.shadowsArray,me=K.state.version,ye=Te.getParameters(T,K.state,le,G,Y,M.state.lightProbeGridArray),Se=Te.getProgramCacheKey(ye),Ie=Q.programs;Q.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,Q.fog=G.fog;let ke=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;Q.envMap=tt.get(T.envMap||Q.environment,ke),Q.envMapRotation=Q.environment!==null&&T.envMap===null?G.environmentRotation:T.envMapRotation,Ie===void 0&&(T.addEventListener("dispose",Yc),Ie=new Map,Q.programs=Ie);let We=Ie.get(Se);if(We!==void 0){if(Q.currentProgram===We&&Q.lightsStateVersion===me)return nh(T,ye),We}else ye.uniforms=Te.getUniforms(T),O!==null&&T.isNodeMaterial&&O.build(T,Y,ye),T.onBeforeCompile(ye,N),We=Te.acquireProgram(ye,Se),Ie.set(Se,We),Q.uniforms=ye.uniforms;let Ce=Q.uniforms;return(T.isShaderMaterial||T.isRawShaderMaterial)&&T.clipping!==!0||(Ce.clippingPlanes=nt.uniform),nh(T,ye),Q.needsLights=(function(Xe){return Xe.isMeshLambertMaterial||Xe.isMeshToonMaterial||Xe.isMeshPhongMaterial||Xe.isMeshStandardMaterial||Xe.isShadowMaterial||Xe.isShaderMaterial&&Xe.lights===!0})(T),Q.lightsStateVersion=me,Q.needsLights&&(Ce.ambientLightColor.value=K.state.ambient,Ce.lightProbe.value=K.state.probe,Ce.directionalLights.value=K.state.directional,Ce.directionalLightShadows.value=K.state.directionalShadow,Ce.spotLights.value=K.state.spot,Ce.spotLightShadows.value=K.state.spotShadow,Ce.rectAreaLights.value=K.state.rectArea,Ce.ltc_1.value=K.state.rectAreaLTC1,Ce.ltc_2.value=K.state.rectAreaLTC2,Ce.pointLights.value=K.state.point,Ce.pointLightShadows.value=K.state.pointShadow,Ce.hemisphereLights.value=K.state.hemi,Ce.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ce.spotLightMatrix.value=K.state.spotLightMatrix,Ce.spotLightMap.value=K.state.spotLightMap,Ce.pointShadowMatrix.value=K.state.pointShadowMatrix),Q.lightProbeGrid=M.state.lightProbeGridArray.length>0,Q.currentProgram=We,Q.uniformsList=null,We}function th(T){if(T.uniformsList===null){let G=T.currentProgram.getUniforms();T.uniformsList=xr.seqWithValue(G.seq,T.uniforms)}return T.uniformsList}function nh(T,G){let Y=re.get(T);Y.outputColorSpace=G.outputColorSpace,Y.batching=G.batching,Y.batchingColor=G.batchingColor,Y.instancing=G.instancing,Y.instancingColor=G.instancingColor,Y.instancingMorph=G.instancingMorph,Y.skinning=G.skinning,Y.morphTargets=G.morphTargets,Y.morphNormals=G.morphNormals,Y.morphColors=G.morphColors,Y.morphTargetsCount=G.morphTargetsCount,Y.numClippingPlanes=G.numClippingPlanes,Y.numIntersection=G.numClipIntersection,Y.vertexAlphas=G.vertexAlphas,Y.vertexTangents=G.vertexTangents,Y.toneMapping=G.toneMapping}hi.setAnimationLoop(function(T){go&&go(T)}),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(T){go=T,pt.setAnimationLoop(T),T===null?hi.stop():hi.start()},pt.addEventListener("sessionstart",Jc),pt.addEventListener("sessionend",Kc),this.render=function(T,G){if(G!==void 0&&G.isCamera!==!0)return void Ae("WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(W===!0)return;O!==null&&O.renderStart(T,G);let Y=pt.enabled===!0&&pt.isPresenting===!0,Q=D!==null&&($===null||Y)&&D.begin(N,$);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),pt.enabled!==!0||pt.isPresenting!==!0||D!==null&&D.isCompositing()!==!1||(pt.cameraAutoUpdate===!0&&pt.updateCamera(G),G=pt.getCamera()),T.isScene===!0&&T.onBeforeRender(N,T,G,$),M=bt.get(T,F.length),M.init(G),M.state.textureUnits=fe.getTextureUnits(),F.push(M),k.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),L.setFromProjectionMatrix(k,Bn,G.reversedDepth),w=this.localClippingEnabled,I=nt.init(this.clippingPlanes,w),E=Ge.get(T,P.length),E.init(),P.push(E),pt.enabled===!0&&pt.isPresenting===!0){let le=N.xr.getDepthSensingMesh();le!==null&&_o(le,G,-1/0,N.sortObjects)}_o(T,G,0,N.sortObjects),E.finish(),N.sortObjects===!0&&E.sort(R,b,G.reversedDepth),xe=pt.enabled===!1||pt.isPresenting===!1||pt.hasDepthSensing()===!1,xe&&ut.addToRenderList(E,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),I===!0&&nt.beginShadows();let K=M.state.shadowsArray;if(_t.render(K,T,G),I===!0&&nt.endShadows(),(Q&&D.hasRenderPass())===!1){let le=E.opaque,me=E.transmissive;if(M.setupLights(),G.isArrayCamera){let ye=G.cameras;if(me.length>0)for(let Se=0,Ie=ye.length;Se<Ie;Se++)Qc(le,me,T,ye[Se]);xe&&ut.render(T);for(let Se=0,Ie=ye.length;Se<Ie;Se++){let ke=ye[Se];$c(E,T,ke,ke.viewport)}}else me.length>0&&Qc(le,me,T,G),xe&&ut.render(T),$c(E,T,G)}$!==null&&V===0&&(fe.updateMultisampleRenderTarget($),fe.updateRenderTargetMipmap($)),Q&&D.end(N),T.isScene===!0&&T.onAfterRender(N,T,G),Yn.resetDefaultState(),oe=-1,be=null,F.pop(),F.length>0?(M=F[F.length-1],fe.setTextureUnits(M.state.textureUnits),I===!0&&nt.setGlobalState(N.clippingPlanes,M.state.camera)):M=null,P.pop(),E=P.length>0?P[P.length-1]:null,O!==null&&O.renderEnd()},this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(T,G,Y){let Q=re.get(T);Q.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),re.get(T.texture).__webglTexture=G,re.get(T.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:Y,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,G){let Y=re.get(T);Y.__webglFramebuffer=G,Y.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(T,G=0,Y=0){$=T,z=G,V=Y;let Q=null,K=!1,le=!1;if(T){let me=re.get(T);if(me.__useDefaultFramebuffer!==void 0)return ne.bindFramebuffer(B.FRAMEBUFFER,me.__webglFramebuffer),ge.copy(T.viewport),ve.copy(T.scissor),te=T.scissorTest,ne.viewport(ge),ne.scissor(ve),ne.setScissorTest(te),void(oe=-1);if(me.__webglFramebuffer===void 0)fe.setupRenderTarget(T);else if(me.__hasExternalTextures)fe.rebindTextures(T,re.get(T.texture).__webglTexture,re.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Ie=T.depthTexture;if(me.__boundDepthTexture!==Ie){if(Ie!==null&&re.has(Ie)&&(T.width!==Ie.image.width||T.height!==Ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(T)}}let ye=T.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(le=!0);let Se=re.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Q=Array.isArray(Se[G])?Se[G][Y]:Se[G],K=!0):Q=T.samples>0&&fe.useMultisampledRTT(T)===!1?re.get(T).__webglMultisampledFramebuffer:Array.isArray(Se)?Se[Y]:Se,ge.copy(T.viewport),ve.copy(T.scissor),te=T.scissorTest}else ge.copy(C).multiplyScalar(ee).floor(),ve.copy(U).multiplyScalar(ee).floor(),te=x;if(Y!==0&&(Q=Z),ne.bindFramebuffer(B.FRAMEBUFFER,Q)&&ne.drawBuffers(T,Q),ne.viewport(ge),ne.scissor(ve),ne.setScissorTest(te),K){let me=re.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+G,me.__webglTexture,Y)}else if(le){let me=G;for(let ye=0;ye<T.textures.length;ye++){let Se=re.get(T.textures[ye]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+ye,Se.__webglTexture,Y,me)}}else if(T!==null&&Y!==0){let me=re.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,me.__webglTexture,Y)}oe=-1},this.readRenderTargetPixels=function(T,G,Y,Q,K,le,me,ye=0){if(!T||!T.isWebGLRenderTarget)return void Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=re.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&me!==void 0&&(Se=Se[me]),Se){ne.bindFramebuffer(B.FRAMEBUFFER,Se);try{let Ie=T.textures[ye],ke=Ie.format,We=Ie.type;if(T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+ye),!Re.textureFormatReadable(ke))return void Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!Re.textureTypeReadable(We))return void Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");G>=0&&G<=T.width-Q&&Y>=0&&Y<=T.height-K&&B.readPixels(G,Y,Q,K,mn.convert(ke),mn.convert(We),le)}finally{let Ie=$!==null?re.get($).__webglFramebuffer:null;ne.bindFramebuffer(B.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(T,G,Y,Q,K,le,me,ye=0){if(!T||!T.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=re.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&me!==void 0&&(Se=Se[me]),Se){if(G>=0&&G<=T.width-Q&&Y>=0&&Y<=T.height-K){ne.bindFramebuffer(B.FRAMEBUFFER,Se);let Ie=T.textures[ye],ke=Ie.format,We=Ie.type;if(T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+ye),!Re.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Re.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ce=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ce),B.bufferData(B.PIXEL_PACK_BUFFER,le.byteLength,B.STREAM_READ),B.readPixels(G,Y,Q,K,mn.convert(ke),mn.convert(We),0);let Xe=$!==null?re.get($).__webglFramebuffer:null;ne.bindFramebuffer(B.FRAMEBUFFER,Xe);let vt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Su(B,vt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ce),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,le),B.deleteBuffer(Ce),B.deleteSync(vt),le}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,G=null,Y=0){let Q=Math.pow(2,-Y),K=Math.floor(T.image.width*Q),le=Math.floor(T.image.height*Q),me=G!==null?G.x:0,ye=G!==null?G.y:0;fe.setTexture2D(T,0),B.copyTexSubImage2D(B.TEXTURE_2D,Y,0,0,me,ye,K,le),ne.unbindTexture()},this.copyTextureToTexture=function(T,G,Y=null,Q=null,K=0,le=0){let me,ye,Se,Ie,ke,We,Ce,Xe,vt,mt=T.isCompressedTexture?T.mipmaps[le]:T.image;if(Y!==null)me=Y.max.x-Y.min.x,ye=Y.max.y-Y.min.y,Se=Y.isBox3?Y.max.z-Y.min.z:1,Ie=Y.min.x,ke=Y.min.y,We=Y.isBox3?Y.min.z:0;else{let fn=Math.pow(2,-K);me=Math.floor(mt.width*fn),ye=Math.floor(mt.height*fn),Se=T.isDataArrayTexture?mt.depth:T.isData3DTexture?Math.floor(mt.depth*fn):1,Ie=0,ke=0,We=0}Q!==null?(Ce=Q.x,Xe=Q.y,vt=Q.z):(Ce=0,Xe=0,vt=0);let ot=mn.convert(G.format),Ve=mn.convert(G.type),lt;G.isData3DTexture?(fe.setTexture3D(G,0),lt=B.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(fe.setTexture2DArray(G,0),lt=B.TEXTURE_2D_ARRAY):(fe.setTexture2D(G,0),lt=B.TEXTURE_2D),ne.activeTexture(B.TEXTURE0),ne.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,G.flipY),ne.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),ne.pixelStorei(B.UNPACK_ALIGNMENT,G.unpackAlignment);let Tt=ne.getParameter(B.UNPACK_ROW_LENGTH),Le=ne.getParameter(B.UNPACK_IMAGE_HEIGHT),Ue=ne.getParameter(B.UNPACK_SKIP_PIXELS),tn=ne.getParameter(B.UNPACK_SKIP_ROWS),vo=ne.getParameter(B.UNPACK_SKIP_IMAGES);ne.pixelStorei(B.UNPACK_ROW_LENGTH,mt.width),ne.pixelStorei(B.UNPACK_IMAGE_HEIGHT,mt.height),ne.pixelStorei(B.UNPACK_SKIP_PIXELS,Ie),ne.pixelStorei(B.UNPACK_SKIP_ROWS,ke),ne.pixelStorei(B.UNPACK_SKIP_IMAGES,We);let Es=T.isDataArrayTexture||T.isData3DTexture,Er=G.isDataArrayTexture||G.isData3DTexture;if(T.isDepthTexture){let fn=re.get(T),Di=re.get(G),In=re.get(fn.__renderTarget),yo=re.get(Di.__renderTarget);ne.bindFramebuffer(B.READ_FRAMEBUFFER,In.__webglFramebuffer),ne.bindFramebuffer(B.DRAW_FRAMEBUFFER,yo.__webglFramebuffer);for(let Ni=0;Ni<Se;Ni++)Es&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,re.get(T).__webglTexture,K,We+Ni),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,re.get(G).__webglTexture,le,vt+Ni)),B.blitFramebuffer(Ie,ke,me,ye,Ce,Xe,me,ye,B.DEPTH_BUFFER_BIT,B.NEAREST);ne.bindFramebuffer(B.READ_FRAMEBUFFER,null),ne.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(K!==0||T.isRenderTargetTexture||re.has(T)){let fn=re.get(T),Di=re.get(G);ne.bindFramebuffer(B.READ_FRAMEBUFFER,X),ne.bindFramebuffer(B.DRAW_FRAMEBUFFER,H);for(let In=0;In<Se;In++)Es?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,fn.__webglTexture,K,We+In):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,fn.__webglTexture,K),Er?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Di.__webglTexture,le,vt+In):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Di.__webglTexture,le),K!==0?B.blitFramebuffer(Ie,ke,me,ye,Ce,Xe,me,ye,B.COLOR_BUFFER_BIT,B.NEAREST):Er?B.copyTexSubImage3D(lt,le,Ce,Xe,vt+In,Ie,ke,me,ye):B.copyTexSubImage2D(lt,le,Ce,Xe,Ie,ke,me,ye);ne.bindFramebuffer(B.READ_FRAMEBUFFER,null),ne.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Er?T.isDataTexture||T.isData3DTexture?B.texSubImage3D(lt,le,Ce,Xe,vt,me,ye,Se,ot,Ve,mt.data):G.isCompressedArrayTexture?B.compressedTexSubImage3D(lt,le,Ce,Xe,vt,me,ye,Se,ot,mt.data):B.texSubImage3D(lt,le,Ce,Xe,vt,me,ye,Se,ot,Ve,mt):T.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,le,Ce,Xe,me,ye,ot,Ve,mt.data):T.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,le,Ce,Xe,mt.width,mt.height,ot,mt.data):B.texSubImage2D(B.TEXTURE_2D,le,Ce,Xe,me,ye,ot,Ve,mt);ne.pixelStorei(B.UNPACK_ROW_LENGTH,Tt),ne.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Le),ne.pixelStorei(B.UNPACK_SKIP_PIXELS,Ue),ne.pixelStorei(B.UNPACK_SKIP_ROWS,tn),ne.pixelStorei(B.UNPACK_SKIP_IMAGES,vo),le===0&&G.generateMipmaps&&B.generateMipmap(lt),ne.unbindTexture()},this.initRenderTarget=function(T){re.get(T).__webglFramebuffer===void 0&&fe.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?fe.setTextureCube(T,0):T.isData3DTexture?fe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?fe.setTexture2DArray(T,0):fe.setTexture2D(T,0),ne.unbindTexture()},this.resetState=function(){z=0,V=0,$=null,ne.reset(),Yn.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=He._getDrawingBufferColorSpace(e),t.unpackColorSpace=He._getUnpackColorSpace()}};var Pi=document.querySelector("#mundo3d"),Hm=matchMedia("(prefers-reduced-motion: reduce)").matches,br=new Xr,Sr=new Rt(56,1,.08,150),Pn=new ho({canvas:Pi,alpha:!0,antialias:!0,powerPreference:"high-performance"});Pn.setPixelRatio(Math.min(devicePixelRatio||1,1.7));Pn.shadowMap.enabled=!0;Pn.shadowMap.type=Si;Pn.outputColorSpace=Ct;Pn.toneMapping=ps;Pn.toneMappingExposure=.94;var km=new hs(14216703,2435130,1.7);br.add(km);var jt=new us(16773330,2.2);jt.position.set(-7,12,-5);jt.castShadow=!0;jt.shadow.mapSize.set(1024,1024);jt.shadow.camera.left=-11;jt.shadow.camera.right=11;jt.shadow.camera.top=12;jt.shadow.camera.bottom=-3;jt.shadow.camera.near=1;jt.shadow.camera.far=34;br.add(jt);var zc=new Ye,Tr=new Ye,Oc=new Ye,Gc=new Ye,Vc=new Ye,Bc=new Ye;zc.add(Tr,Oc,Gc,Vc,Bc);br.add(zc);var Lc=new Map,Dc=new Map,Nc=new Map,he=(i,e={})=>{let t=`${i}:${e.emissive||""}:${e.emissiveIntensity??""}:${e.metalness||0}:${e.roughness??.68}:${e.transparent||!1}:${e.opacity??1}:${e.depthWrite??!0}`;return Lc.has(t)||Lc.set(t,new cr({color:i,roughness:e.roughness??.68,metalness:e.metalness||0,emissive:e.emissive||0,emissiveIntensity:e.emissive?e.emissiveIntensity??.62:0,transparent:!!e.transparent,opacity:e.opacity??1,depthWrite:e.depthWrite??!0})),Lc.get(t)},Wm=i=>(Dc.has(i)||Dc.set(i,new Vn({color:i,toneMapped:!1})),Dc.get(i)),Xm=i=>(Nc.has(i)||Nc.set(i,new Vn({color:i,transparent:!0,opacity:.075,depthWrite:!1,side:$t,toneMapped:!1})),Nc.get(i)),Ft=new Tn(1,1,1),Uc=new et(1,1,1,16),Ii=new Wn(1,1,16),at=new Mi(1,24,14),ud=new et(.34,.34,.3,20);ud.rotateZ(Math.PI/2);var ad=new je(.052,1.98,5,12),jm=new je(.052,1.02,5,12),qm=new En(1.08,2.02);function q(i,e,t,n,r,s=!0){let a=new It(i,e);return a.position.set(...t),a.scale.set(...n),a.castShadow=s,a.receiveShadow=s,(r||zc).add(a),a}function st(i,e,t,n){let r=q(at,i,e,t,n);return r.geometry.computeVertexNormals(),r}function Ym(i,e=24){let t=[],n=[];for(let[o,h,p,d]of i)for(let u=0;u<e;u++){let g=u/e*Math.PI*2,m=Math.cos(g);t.push(Math.sin(g)*h,p+m*d*(m<0?.58:1),o)}for(let o=0;o<i.length-1;o++)for(let h=0;h<e;h++){let p=(h+1)%e,d=o*e+h,u=o*e+p,g=(o+1)*e+p,m=(o+1)*e+h;n.push(d,u,g,d,g,m)}let r=t.length/3;t.push(0,i[0][2],i[0][0]);let s=t.length/3,a=i[i.length-1];t.push(0,a[2],a[0]);let l=(i.length-1)*e;for(let o=0;o<e;o++){let h=(o+1)%e;n.push(r,h,o),n.push(s,l+o,l+h)}let c=new Qe;return c.setAttribute("position",new we(t,3)),c.setIndex(n),c.computeVertexNormals(),c}function Li(i,e,t=30,n=16){let r=new or(i.map(u=>new A(...u))),s=r.computeFrenetFrames(t,!1),a=[],l=[],c=new A;for(let u=0;u<=t;u++){r.getPoint(u/t,c);let g=s.normals[u],m=s.binormals[u],v=e(u/t),f=Array.isArray(v)?v[0]:v,_=Array.isArray(v)?v[1]:v;for(let y=0;y<n;y++){let S=y/n*Math.PI*2,E=Math.cos(S)*f,M=Math.sin(S)*_;a.push(c.x+g.x*E+m.x*M,c.y+g.y*E+m.y*M,c.z+g.z*E+m.z*M)}}for(let u=0;u<t;u++)for(let g=0;g<n;g++){let m=(g+1)%n,v=u*n+g,f=u*n+m,_=(u+1)*n+m,y=(u+1)*n+g;l.push(v,_,f,v,y,_)}let o=a.length/3;r.getPoint(0,c),a.push(c.x,c.y,c.z);let h=a.length/3;r.getPoint(1,c),a.push(c.x,c.y,c.z);let p=t*n;for(let u=0;u<n;u++){let g=(u+1)%n;l.push(o,u,g),l.push(h,p+g,p+u)}let d=new Qe;return d.setAttribute("position",new we(a,3)),d.setIndex(l),d.computeVertexNormals(),d}var Zm=he("#fdfdff",{roughness:.26}),Jm=he("#ffffff",{emissive:"#dfe9f5",emissiveIntensity:.5,roughness:.1}),Km=he("#191220",{roughness:.3});function mo(i,e,t,n={}){let r=new Ye;if(r.position.set(...e),i.add(r),q(at,Zm,[0,0,0],[t,t*1.14,t*.72],r,!1),q(at,Km,[(n.lookX||0)*t*.22,(n.lookY||0)*t*.22,-t*.46],[t*.58,t*.62,t*.5],r,!1),q(at,Jm,[-t*.24,t*.34,-t*.78],[t*.2,t*.22,t*.16],r,!1),n.lid){let s=q(at,n.lid,[0,t*.34,-t*.04],[t*1.07,t*.68,t*.9],r,!1);s.rotation.x=-.26}return r}function Hc(i,e,t,n,r,s=Math.PI*.84){let a=q(new yt(t,n,8,22,s),r,e,[1,1,1],i,!1);return a.rotation.z=Math.PI*1.5-s/2,a}function qn(i,e){let t=new Ye;return t.position.set(...e),i.add(t),t}function $m(i){let e=new Ye,t=new Ye;e.add(t);let n=i||"#c62436",r=(z,V={})=>new hr({color:z,metalness:.3,roughness:.17,clearcoat:1,clearcoatRoughness:.06,...V}),s=r(n),a=r(Qt(n,.07)),l=r(Qt(n,-.12)),c=r("#f6fbff",{metalness:.18,roughness:.22}),o=he("#e9eff2",{metalness:.82,roughness:.11}),h=he("#a8b2b8",{metalness:.74,roughness:.2}),p=he("#0a0d11",{metalness:.35,roughness:.42}),d=he("#171c20",{metalness:.68,roughness:.3}),u=he("#171b21",{roughness:.82}),g=he("#efe9dd",{roughness:.44}),m=he("#8d5f38",{roughness:.66}),v=new hr({color:13034476,metalness:.05,roughness:.06,transmission:.55,transparent:!0,opacity:.58,depthWrite:!1}),f=he("#ff2b42",{emissive:"#ff1024",emissiveIntensity:1.05,roughness:.12}),_=he("#ffb340",{emissive:"#ff7a00",emissiveIntensity:.8,roughness:.16}),y=he("#f6fcff",{emissive:"#9fc3d4",emissiveIntensity:.7,roughness:.1});q(Ym([[-1.88,.68,.47,.2],[-1.62,.82,.48,.27],[-1.14,.86,.47,.31],[-.38,.87,.45,.31],[.46,.82,.43,.28],[1.3,.69,.43,.22],[1.84,.38,.43,.13]],28),s,[0,0,0],[1,1,1],t),q(Ft,p,[0,.18,-.02],[1.6,.1,3.4],t);for(let z of[-1,1]){st(a,[z*.8,.47,1.12],[.2,.14,.66],t),st(a,[z*.82,.49,-1.12],[.21,.15,.64],t);let V=q(new je(.036,1.3,4,10),o,[z*.95,.3,0],[1,1,1],t,!1);V.rotation.x=Math.PI/2;let $=q(new je(.009,.74,3,8),h,[z*1,.52,-.2],[1,1,1],t,!1);$.rotation.x=Math.PI/2;let oe=q(new je(.02,.14,3,8),o,[z*1.01,.62,-.4],[1,1,1],t,!1);oe.rotation.x=Math.PI/2}for(let z of[-1,1]){let V=q(Ft,c,[z*.17,.672,1],[.15,.03,1.4],t);V.rotation.x=.086;let $=q(Ft,c,[z*.17,.748,-1.42],[.15,.03,.9],t);$.rotation.x=-.125}let S=st(a,[0,.59,.92],[.64,.075,.84],t);S.rotation.x=-.035;let E=q(new je(.012,1.15,3,8),h,[0,.665,.95],[1,1,1],t,!1);E.rotation.x=Math.PI/2,q(new et(.038,.038,.02,18),o,[0,.665,1.58],[1,1,1],t,!1),q(Ft,he("#2a1f22",{roughness:.7}),[0,.6,-.2],[1.3,.04,1.05],t,!1);let M=st(s,[0,.68,-1.14],[.74,.06,.42],t);M.rotation.x=.05;for(let z of[-1,1]){let V=st(m,[z*.34,.67,-.56],[.24,.1,.24],t);V.rotation.x=.1;let $=st(m,[z*.34,.78,-.74],[.21,.13,.08],t);$.rotation.x=.16;let oe=q(new je(.014,.32,3,8),h,[z*.34,.88,-.75],[1,1,1],t,!1);oe.rotation.z=Math.PI/2}let P=q(new yt(.13,.022,10,22),p,[-.34,.76,-.1],[1,1,1],t,!1);P.rotation.x=1.25;let F=st(l,[0,.74,.12],[.66,.1,.18],t),D=q(Ft,v,[0,.93,-.02],[1.06,.34,.022],t,!1);D.rotation.x=-.3;for(let z of[-1,1]){let V=q(new je(.017,.36,3,8),o,[z*.53,.93,-.02],[1,1,1],t,!1);V.rotation.z=z*.13,V.rotation.x=-.3;let $=q(new je(.012,.1,3,7),o,[z*.74,.68,.22],[1,1,1],t,!1);$.rotation.z=z*.78,st(o,[z*.82,.71,.19],[.07,.045,.032],t)}st(o,[0,.42,1.8],[.5,.14,.024],t),st(d,[0,.42,1.825],[.43,.095,.018],t,!1);for(let z of[-.6,.6]){let V=q(new et(.21,.21,.055,28),o,[z,.59,1.62],[1,1,1],t);V.rotation.x=Math.PI/2;let $=q(new et(.165,.165,.064,28),y,[z,.59,1.655],[1,1,1],t,!1);$.rotation.x=Math.PI/2}let N=q(new je(.042,1.4,4,12),o,[0,.26,1.86],[1,1,1],t);N.rotation.z=Math.PI/2;for(let z of[-.36,.36])q(new je(.038,.24,4,10),o,[z,.35,1.89],[1,1,1],t);for(let z of[-.78,.78])q(at,_,[z,.34,1.66],[.06,.052,.025],t,!1);st(l,[0,.62,-1.5],[.5,.05,.2],t);let W=q(new je(.009,.84,3,8),h,[0,.7,-1.52],[1,1,1],t,!1);W.rotation.z=Math.PI/2;for(let z of[-1,1])for(let[V,$,oe]of[[.52,.115,f],[.31,.07,_]]){let be=q(new et($+.026,$+.026,.04,20),o,[z*.66,V,-1.78],[1,1,1],t,!1);be.rotation.x=Math.PI/2;let ge=q(new et($,$,.06,20),oe,[z*.66,V,-1.808],[1,1,1],t,!1);ge.rotation.x=Math.PI/2}let O=q(new xi(.04,1),o,[0,.6,-1.81],[1,.62,.28],t,!1);O.rotation.z=Math.PI/4,q(Ft,p,[0,.4,-1.8],[.38,.14,.016],t,!1),q(Ft,g,[0,.4,-1.822],[.3,.09,.01],t,!1);let Z=q(new je(.042,1.34,4,12),o,[0,.23,-1.86],[1,1,1],t);Z.rotation.z=Math.PI/2;for(let z of[-.42,.42])q(new je(.038,.24,4,10),o,[z,.32,-1.89],[1,1,1],t);for(let z of[-.3,.3]){let V=q(new et(.055,.055,.26,16),h,[z,.12,-1.78],[1,1,1],t);V.rotation.x=Math.PI/2;let $=q(new et(.037,.037,.02,16),p,[z,.12,-1.912],[1,1,1],t,!1);$.rotation.x=Math.PI/2}let X=[],H=[];for(let z of[-1,1])for(let V of[-1.1,1.14]){let $=new Ye;$.position.set(z*.89,.34,V),e.add($);let oe=new Ye;$.add(oe),X.push(oe),q(ud,u,[0,0,0],[.85,1,1],oe);let be=z*.135,ge=q(new yt(.255,.028,10,28),g,[be,0,0],[1,1,1],oe,!1);ge.rotation.y=Math.PI/2;let ve=q(new et(.145,.145,.034,24),o,[z*.155,0,0],[1,1,1],oe,!1);ve.rotation.z=Math.PI/2;for(let te=0;te<5;te++){let ue=q(new Tn(.028,.24,.028),h,[z*.15,0,0],[1,1,1],oe,!1);ue.rotation.x=te/5*Math.PI,ue.rotation.z=Math.PI/2}st(h,[z*.175,0,0],[.03,.1,.1],oe),V>0&&H.push($)}return e.userData={type:"carro",wheels:X,frontWheels:H,bodyRig:t,wheelSpin:0,steer:0},e}function Qm(i){let e=new Ye,t=i||"#ff5d5d",n=he("#f1f5fa",{metalness:.42,roughness:.24}),r=he("#c2ccd8",{metalness:.45,roughness:.3}),s=he(t,{metalness:.26,roughness:.3}),a=he(Qt(t,-.13),{metalness:.3,roughness:.34}),l=he("#dfe7ee",{metalness:.9,roughness:.12}),c=he("#232c3c",{metalness:.5,roughness:.32}),o=he("#38c6f2",{emissive:"#0e6f93",emissiveIntensity:.55,metalness:.2,roughness:.07});q(Li([[0,.12,0],[0,.55,0],[0,1.5,0],[0,2.5,0],[0,3.05,0]],v=>.48+Math.sin(Math.min(v,1)*Math.PI*.82)*.22,22,26),n,[0,0,0],[1,1,1],e),q(new Wn(.53,1.3,26),s,[0,3.62,0],[1,1,1],e),q(at,s,[0,4.28,0],[.06,.12,.06],e,!1),q(new et(.72,.705,.36,28),s,[0,1.95,0],[1,1,1],e,!1),q(new et(.725,.725,.07,28),a,[0,1.71,0],[1,1,1],e,!1),q(new yt(.63,.055,10,26),l,[0,2.94,0],[1,1,1],e).rotation.x=Math.PI/2,q(new et(.68,.46,.38,26),r,[0,.24,0],[1,1,1],e),q(new yt(.66,.07,10,26),l,[0,.44,0],[1,1,1],e).rotation.x=Math.PI/2,q(new et(.44,.3,.2,22),c,[0,.02,0],[1,1,1],e);let h=q(new et(.31,.31,.1,22),l,[0,2.42,-.5],[1,1,1],e);h.rotation.x=Math.PI/2;let p=q(new Mi(.245,22,14),o,[0,2.42,-.58],[1,1,.45],e);q(at,he("#ffffff",{emissive:"#b9d8ea",emissiveIntensity:.6}),[-.09,2.52,-.66],[.06,.07,.03],e,!1);for(let v=0;v<8;v++){let f=v/8*Math.PI*2;q(at,l,[Math.cos(f)*.29,2.42+Math.sin(f)*.29,-.55],[.022,.022,.022],e,!1)}let d=new Xn;d.moveTo(0,1.05),d.quadraticCurveTo(.3,.5,.74,-.1),d.quadraticCurveTo(.86,-.32,.62,-.32),d.lineTo(.16,-.32),d.quadraticCurveTo(0,-.28,0,0);let u=new ai(d,{depth:.09,bevelEnabled:!0,bevelSize:.028,bevelThickness:.028,bevelSegments:2,curveSegments:8});u.translate(0,0,-.045);for(let v=0;v<3;v++){let f=new Ye;f.rotation.y=Math.PI+v*Math.PI*2/3,e.add(f),q(u,v?s:a,[.42,.3,0],[1,1,1],f)}let g=q(new Wn(.44,1.05,20),he("#ff8c21",{emissive:"#ff5a13",emissiveIntensity:1.2}),[0,-.42,0],[1,1,1],e,!1);g.rotation.x=Math.PI;let m=q(new Wn(.23,.68,18),he("#fff6c8",{emissive:"#ffc329",emissiveIntensity:1.6}),[0,-.28,0],[1,1,1],e,!1);return m.rotation.x=Math.PI,e.userData={type:"foguete",flame:g,core:m,windowGlass:p},e}function ef(i){let e=new Ye,t=i||"#5ec8f5",n=he(t,{roughness:.5}),r=he(Qt(t,-.12),{roughness:.55}),s=he("#ffcfa2",{roughness:.66}),a=he("#3a2318",{roughness:.8}),l=he("#26314a",{roughness:.68}),c=he("#f2f5fb",{roughness:.6}),o=he("#fafcff",{roughness:.4}),h=he("#ff5470",{roughness:.48}),p=he("#7d2434",{roughness:.5});q(new je(.32,.44,8,20),n,[0,1.02,0],[1,1,.82],e);let d=q(new yt(.17,.05,10,22),r,[0,1.33,-.02],[1,1,.9],e,!1);d.rotation.x=Math.PI/2;let u=q(new yt(.305,.048,10,24),r,[0,.76,0],[1,1,.82],e,!1);u.rotation.x=Math.PI/2,st(l,[0,.64,0],[.33,.18,.28],e);let g=st(s,[0,1.76,0],[.45,.46,.42],e),m=st(a,[0,1.85,.04],[.465,.42,.43],e),v=st(a,[0,1.9,-.24],[.43,.2,.24],e);v.rotation.x=.34,q(at,a,[0,2.2,.05],[.12,.13,.11],e,!1);for(let y of[-1,1]){q(at,s,[y*.44,1.74,.02],[.07,.12,.09],e,!1),mo(e,[y*.17,1.74,-.34],.145,{lookY:-.12});let S=q(Ft,a,[y*.18,1.98,-.35],[.13,.03,.05],e,!1);S.rotation.z=y*.22}q(at,s,[0,1.64,-.41],[.075,.065,.065],e,!1),Hc(e,[0,1.58,-.38],.15,.033,p);for(let y of[-1,1])q(at,he("#ff9d9d",{roughness:.6}),[y*.34,1.62,-.29],[.08,.055,.04],e,!1);let f={},_={};for(let y of[-1,1]){let S=qn(e,[y*.36,1.22,0]),E=q(new je(.085,.34,5,12),s,[y*.1,-.24,-.02],[1,1,1],S);E.rotation.z=y*.2;let M=q(new je(.115,.11,5,12),n,[y*.04,-.06,0],[1,1,1],S,!1);M.rotation.z=y*.2,q(at,s,[y*.17,-.46,-.03],[.105,.1,.1],S),f[y]=S;let P=qn(e,[y*.17,.58,0]);q(new je(.115,.28,5,12),s,[0,-.24,0],[1,1,1],P),q(new et(.12,.115,.16,14),c,[0,-.42,0],[1,1,1],P,!1);let F=st(o,[0,-.53,-.06],[.13,.08,.21],P);q(at,h,[0,-.53,-.19],[.115,.06,.07],P,!1),_[y]=P}return e.userData={type:"mascote",limbs:[f[-1],_[-1],_[1],f[1]]},e}function tf(){let i=new Ye,e=he("#ffd93b",{roughness:.38}),t=he("#ffe98a",{roughness:.34}),n=he("#6b4a1c",{roughness:.7}),r=he("#fbfdff",{roughness:.4}),s=he("#2b3450",{roughness:.6}),a=he("#ff4d6d",{roughness:.44}),l=he("#7a2c1e",{roughness:.5}),c=[[-.1,.48,0],[.16,.84,0],[.26,1.3,0],[.16,1.76,0],[-.1,2.04,0]],o=q(Li(c,u=>{let g=Math.sin(Math.PI*Math.min(Math.max(u,0),1))**.5;return[.34*g+.03,.3*g+.03]},28,18),e,[0,0,0],[1,1,1],i);q(Li(c,u=>{let g=Math.sin(Math.PI*Math.min(Math.max(u,0),1))**.5;return[.3*g+.02,.27*g+.02]},28,18),t,[0,0,-.05],[1,1,1],i,!1),q(at,n,[-.11,.44,0],[.055,.07,.055],i,!1);let h=q(new et(.045,.07,.17,10),n,[-.12,2.11,0],[1,1,1],i);h.rotation.z=-.2;for(let u of[-1,1])mo(i,[.2+u*.16,1.42,-.24],.14,{lookY:-.1});Hc(i,[.2,1.24,-.27],.15,.032,l);for(let u of[-1,1])q(at,he("#ff9db4",{roughness:.55}),[.2+u*.31,1.28,-.19],[.08,.055,.04],i,!1);let p={},d={};for(let u of[-1,1]){let g=qn(i,[.1+u*.3,1.28,0]),m=q(new je(.058,.32,5,10),e,[u*.1,-.2,0],[1,1,1],g);m.rotation.z=u*.3,q(at,r,[u*.21,-.38,0],[.1,.095,.095],g),p[u]=g;let v=qn(i,[u*.17,.56,0]);q(new je(.075,.26,5,10),s,[0,-.2,0],[1,1,1],v);let f=st(a,[0,-.42,-.06],[.12,.08,.2],v);q(at,r,[0,-.45,-.13],[.11,.045,.1],v,!1),d[u]=v}return i.userData={type:"mascote",limbs:[p[-1],d[-1],d[1],p[1]]},i}function nf(){let i=new Ye,e=he("#4fb867",{roughness:.55}),t=he("#2f8148",{roughness:.6}),n=he("#d9e88c",{roughness:.58}),r=he("#cfe6f5",{metalness:.45,roughness:.3}),s=he("#7fa6c0",{metalness:.5,roughness:.28}),a=he("#fbfdff",{roughness:.3}),l=he("#a1364a",{roughness:.55}),c=he("#1d3325",{roughness:.5});q(new je(.42,.5,8,20),e,[0,1.02,0],[1,1,.88],i),st(n,[0,.98,-.3],[.3,.38,.18],i,!1);for(let v=0;v<4;v++){let f=q(new yt(.16-v*.02,.035,8,16,Math.PI),n,[0,.76+v*.19,-.33],[1,1,.6],i,!1);f.rotation.z=Math.PI}q(Li([[0,.78,.3],[0,.72,.78],[0,.82,1.2],[0,1.06,1.5]],v=>.3-v*.24,18,14),t,[0,0,0],[1,1,1],i);for(let v=0;v<7;v++){let f=v/6,_=q(Ii,t,[0,1.3-f*.5+Math.sin(f*3)*.06,.18+f*1.1],[.09-f*.04,.16-f*.06,.09-f*.04],i,!1);_.rotation.x=-.5-f*.5}let o=st(e,[0,1.62,-.08],[.4,.34,.42],i),h=q(Li([[0,1.62,-.3],[0,1.6,-.62],[0,1.58,-.92]],v=>[.3-v*.1,.19-v*.07],12,14),e,[0,0,0],[1,1,1],i),p=q(Li([[0,1.44,-.28],[0,1.42,-.6],[0,1.42,-.88]],v=>[.27-v*.09,.1-v*.03],12,14),t,[0,0,0],[1,1,1],i);st(l,[0,1.5,-.55],[.24,.04,.3],i,!1);for(let v=0;v<5;v++){let f=-.36-v*.13,_=.24-v*.028;for(let y of[-1,1]){let S=q(Ii,a,[y*_,1.5,f],[.045,.1,.045],i,!1);S.rotation.x=Math.PI,q(Ii,a,[y*_,1.46,f-.06],[.04,.09,.04],i,!1)}}for(let v of[-1,1])q(at,c,[v*.09,1.68,-.9],[.035,.03,.025],i,!1),mo(i,[v*.21,1.92,-.24],.15,{lookY:-.1,lid:t});let d=new Xn;d.moveTo(0,.34),d.quadraticCurveTo(.7,.16,1.16,-.04),d.lineTo(1.2,-.24),d.quadraticCurveTo(.6,-.32,0,-.38);let u=new ai(d,{depth:.09,bevelEnabled:!0,bevelSize:.022,bevelThickness:.022,bevelSegments:2,curveSegments:6});u.translate(0,0,-.045),u.rotateX(-Math.PI/2);for(let v of[-1,1]){let f=qn(i,[v*.28,1.22,.3]);f.rotation.z=v*.3,q(u,r,[0,0,0],[v*.82,1,.82],f);let _=q(new je(.032,.88,4,10),s,[v*.47,.04,-.14],[1,1,1],f,!1);_.rotation.z=Math.PI/2,_.rotation.y=v*.26;let y=q(Ft,s,[v*.95,.14,-.02],[.055,.26,.28],f);y.rotation.z=v*-.2}let g={},m={};for(let v of[-1,1]){let f=qn(i,[v*.42,1.18,-.06]);q(new je(.085,.22,5,10),e,[v*.06,-.16,0],[1,1,1],f);let _=st(t,[v*.1,-.32,-.04],[.09,.07,.11],f);g[v]=f;let y=qn(i,[v*.24,.62,0]);q(new je(.14,.22,5,12),e,[0,-.2,0],[1,1,1],y);let S=st(t,[0,-.4,-.1],[.16,.08,.24],y);for(let E of[-1,0,1]){let M=q(Ii,a,[E*.09,-.4,-.32],[.035,.09,.035],y,!1);M.rotation.x=-Math.PI/2}m[v]=y}return i.userData={type:"mascote",limbs:[g[-1],m[-1],m[1],g[1]]},i}function rf(){let i=new Ye,e=he("#fdfaf4",{metalness:.06,roughness:.26}),t=he("#ded6c9",{metalness:.06,roughness:.3}),n=he("#e8c169",{metalness:.82,roughness:.18}),r=he("#f3e2c6",{roughness:.55}),s=he("#6b3a20",{roughness:.5}),a=he("#ffb0d2",{roughness:.52}),l=he("#ffe0ee",{roughness:.5}),c=he("#ff7fae",{roughness:.45}),o=he("#ff7fae",{roughness:.5}),h=he("#f6d8bd",{roughness:.6}),p=he("#8d3141",{roughness:.5}),d=new Vn({color:16777215,transparent:!0,opacity:.18,depthWrite:!1,toneMapped:!1});q(new et(.54,.38,1.1,26),e,[0,1.24,0],[1,1,1],i),q(new et(.4,.32,.1,24),t,[0,.68,0],[1,1,1],i,!1),q(new yt(.54,.04,10,28),n,[0,1.79,0],[1,1,1],i).rotation.x=Math.PI/2,q(new yt(.47,.022,8,26),n,[0,.92,0],[1,1,1],i,!1).rotation.x=Math.PI/2,q(new et(.53,.515,.13,26),a,[0,1.67,0],[1,1,1],i,!1);let u=q(new yt(.29,.08,12,24,Math.PI*1.45),e,[.58,1.28,0],[1,1,1],i);u.rotation.y=Math.PI/2,u.rotation.z=-.35,q(new et(.51,.51,.07,26),r,[0,1.78,0],[1,1,1],i,!1);for(let f of[-1,1])q(at,s,[f*.11,1.82,.06],[.11,.03,.11],i,!1);let g=q(Ii,s,[0,1.82,-.16],[.17,.28,.04],i,!1);g.rotation.x=-Math.PI/2;for(let f of[-1,1])q(Li([[f*.18,1.85,0],[f*.3,2.14,-.04],[f*.12,2.39,.04],[f*.26,2.68,0]],_=>.05*(1-_*.7),16,8),d,[0,0,0],[1,1,1],i,!1);for(let f of[-1,1])mo(i,[f*.18,1.38,-.43],.145,{lookY:-.1});Hc(i,[0,1.18,-.44],.16,.033,p);for(let f of[-1,1])q(at,he("#ff9ec4",{roughness:.55}),[f*.35,1.22,-.34],[.085,.06,.04],i,!1);q(new yt(.56,.14,12,30),a,[0,.84,0],[1,.46,1],i),q(new yt(.45,.1,12,28),l,[0,.92,0],[1,.46,1],i,!1);let m={},v={};for(let f of[-1,1]){let _=qn(i,[f*.46,1.52,0]),y=q(new je(.07,.34,5,10),h,[f*.12,-.2,0],[1,1,1],_);y.rotation.z=f*.34,q(at,h,[f*.25,-.4,0],[.09,.085,.085],_),m[f]=_;let S=qn(i,[f*.18,.78,0]);q(new je(.082,.36,5,10),h,[0,-.28,0],[1,1,1],S);let E=st(c,[0,-.6,-.07],[.11,.075,.19],S);for(let M=0;M<2;M++){let P=q(new yt(.09,.016,6,14),o,[0,-.4+M*.09,0],[1,.4,1],S,!1);P.rotation.x=Math.PI/2}v[f]=S}return i.userData={type:"mascote",limbs:[m[-1],v[-1],v[1],m[1]]},i}var it=null,od="";function sf(i,e){let t=`${i}:${e}`;t!==od&&(it&&Bc.remove(it),it=i==="carro"?$m(e):i==="foguete"?Qm(e):i==="bananella"?tf():i==="coccodrillo"?nf():i==="cappuccino"?rf():ef(e),od=t,Bc.add(it))}var po=q(new En(4.7,180),he("#31394b",{roughness:.94}),[0,0,80],[1,1,1],Tr);po.rotation.x=-Math.PI/2;po.receiveShadow=!0;var fo=q(new En(90,180),he("#443447",{roughness:1}),[0,-.035,80],[1,1,1],Tr);fo.rotation.x=-Math.PI/2;fo.receiveShadow=!0;var dd=[],pd=he("#f5f6fb",{roughness:.75});for(let i=0;i<110;i++)for(let e of[-.62,.62])dd.push(q(Ft,pd,[e,.018,i*1.72],[.045,.018,.6],Tr,!1));var ld=q(Ft,he("#ff6fa7",{emissive:"#59213b"}),[-2.4,.035,80],[.1,.045,180],Tr,!1),cd=q(Ft,he("#75d8ff",{emissive:"#1c4158"}),[2.4,.035,80],[.1,.045,180],Tr,!1);function Fc(i){return Math.abs(Math.sin(i*91.733)*43758.5453)%1}function Qt(i,e){let t=new Pe(i||"#4b596e");return t.offsetHSL(0,0,e),`#${t.getHexString()}`}var md=NaN,fd="",gd="";function af(i,e,t){Oc.clear(),md=i,fd=e,gd=`${t.scenery}:${t.sceneryDark}:${t.ground}`;let n=he(t.ground||"#443447",{roughness:1});fo.material=n;for(let r=i;r<i+14;r++)for(let s of[-1,1]){let a=r*7.2,l=Fc(r*2.7+s),c=s*(6+l*2.8),o=new Ye;if(o.position.set(c,0,a),Oc.add(o),e==="cidade"){let h=3.4+l*4.4,p=1.55+Fc(r+4)*1.5,d=1.8+Fc(r+9)*1.2,u=s>0?Qt(t.sceneryDark,-.025):Qt(t.scenery,-.08);q(Ft,he(u,{roughness:.82}),[0,h/2,0],[p,h,d],o),q(Ft,he(Qt(u,.045),{roughness:.9}),[0,h+.08,0],[p*.82,.16,d*.78],o);let g=t.window||"#ffd985";for(let m=1.05;m<h-.55;m+=1.15)for(let v of[-.28,.28])q(Ft,he(g,{emissive:Qt(g,-.16)}),[v*p,m,-d/2-.018],[.19,.24,.025],o,!1)}else if(e==="deserto"){let h=he(t.scenery||"#3e7658",{roughness:.82}),p=1.35+l*.8;q(Uc,h,[0,p/2,0],[.24,p,.24],o),q(Uc,he(Qt(t.scenery,.035)),[s*.34,p*.55,0],[.13,.65,.13],o).rotation.z=s*1.08,q(at,he(Qt(t.ground,-.08),{roughness:1}),[-s*.8,.12,.35],[.55,.15,.38],o)}else{let h=.72+l*.42;q(Uc,he("#654838",{roughness:1}),[0,.55*h,0],[.16*h,1.1*h,.16*h],o);let d=e==="neve"?"#dff5fb":t.scenery||"#32624a";q(Ii,he(Qt(d,-.045),{roughness:.92}),[0,1.45*h,0],[.92*h,1.65*h,.92*h],o),q(Ii,he(Qt(d,.035),{roughness:.9}),[0,2.18*h,0],[.65*h,1.45*h,.65*h],o)}}}function _d(i,e,t=82,n=!0){let r=document.createElement("canvas");r.width=256,r.height=128;let s=r.getContext("2d");s.clearRect(0,0,r.width,r.height),n&&(s.fillStyle="rgba(10,14,25,.86)",s.strokeStyle=e,s.lineWidth=5,s.beginPath(),s.roundRect(38,8,180,112,30),s.fill(),s.stroke()),s.font=`900 ${t}px system-ui, sans-serif`,s.textAlign="center",s.textBaseline="middle",s.lineWidth=n?0:9,s.strokeStyle="rgba(8,10,18,.86)",n||s.strokeText(i,128,67),s.fillStyle=n?"#ffffff":e,s.fillText(i,128,67);let a=new Kr(r);a.colorSpace=Ct;let l=new Zr(new sr({map:a,transparent:!0,depthTest:!1}));return l.userData.texture=a,l}var Ms=new Map;function vd(i){i.traverse(e=>{e.userData.texture&&e.userData.texture.dispose(),e.isSprite&&e.material.dispose()})}function of(i,e){let t=new Ye;t.position.z=i.z/1e3,t.userData.signature=`${i.options.join(":")}:${e.join(":")}`,t.userData.fadeMaterials=[],t.userData.ownedMaterials=[];for(let n=0;n<3;n++){let r=e[n],s=-(n-1)*1.24,a=Wm(r).clone();a.transparent=!0,a.depthWrite=!1,a.opacity=0;let l=Xm(r).clone();l.opacity=0,t.userData.ownedMaterials.push(a,l),t.userData.fadeMaterials.push({material:a,base:1,label:!1},{material:l,base:.075,label:!1}),q(ad,a,[s-.55,1.04,0],[1,1,1],t,!1),q(ad,a,[s+.55,1.04,0],[1,1,1],t,!1);let c=q(jm,a,[s,2.08,0],[1,1,1],t,!1);c.rotation.z=Math.PI/2,q(qm,l,[s,1.04,.035],[1,1,1],t,!1);let o=_d(String(i.options[n]),r,74,!0);o.material.opacity=0,t.userData.fadeMaterials.push({material:o.material,base:1,label:!0}),o.position.set(s,1.2,-.09),o.scale.set(1.02,.51,1),t.add(o)}return Gc.add(t),t}function hd(i,e){vd(e),e.userData.ownedMaterials.forEach(t=>t.dispose()),Gc.remove(e),Ms.delete(i)}function lf(i,e){let t=new Set(i.map(n=>n.index));for(let n of i){let r=`${n.options.join(":")}:${e.join(":")}`,s=Ms.get(n.index);s&&s.userData.signature!==r&&(hd(n.index,s),s=null),s||(s=of(n,e),Ms.set(n.index,s)),s.position.z=n.z/1e3}for(let[n,r]of Ms)t.has(n)||hd(n,r)}function cf(){let t=new Xn;t.moveTo(-.5+.13,-.5),t.lineTo(.5-.13,-.5),t.quadraticCurveTo(.5,-.5,.5,-.5+.13),t.lineTo(.5,.5-.13),t.quadraticCurveTo(.5,.5,.5-.13,.5),t.lineTo(-.5+.13,.5),t.quadraticCurveTo(-.5,.5,-.5,.5-.13),t.lineTo(-.5,-.5+.13),t.quadraticCurveTo(-.5,-.5,-.5+.13,-.5);let n=new ai(t,{depth:1,steps:1,curveSegments:4,bevelEnabled:!0,bevelSegments:2,bevelSize:.075,bevelThickness:.075});return n.center(),n}var hf=cf(),uf=new xi(.32,0),xs=new Map;function df(i){let e=new Ye,t=new Ye;e.add(t);let n=he("#4fe4ff",{emissive:"#126f8a",metalness:.28,roughness:.2,transparent:!0,opacity:.72,depthWrite:!1}).clone(),r=he("#7d53e8",{emissive:"#36227c",metalness:.42,roughness:.2}).clone();r.transparent=!0,q(hf,n,[0,0,0],[1,1,1],t);let s=q(uf,r,[0,0,0],[1,1,1],t),a=_d("?","#ffffff",88,!1);return a.position.z=-.6,a.scale.set(1.32,.66,1),e.add(a),e.userData={index:i,visual:t,core:s,icon:a,shellMaterial:n,coreMaterial:r},Vc.add(e),e}function pf(i){let e=new Set(i.map(t=>t.index));for(let t of i)xs.has(t.index)||xs.set(t.index,df(t.index));for(let[t,n]of xs)e.has(t)||(vd(n),n.userData.shellMaterial.dispose(),n.userData.coreMaterial.dispose(),Vc.remove(n),xs.delete(t))}function yd(){let i=Math.max(Pi.clientWidth,1),e=Math.max(Pi.clientHeight,1);(Pi.width!==Math.round(i*Pn.getPixelRatio())||Pi.height!==Math.round(e*Pn.getPixelRatio()))&&Pn.setSize(i,e,!1),Sr.aspect=i/e,Sr.updateProjectionMatrix()}function mf(i){Pi.hidden=!1,yd();let e=i.playerZ/1e3;po.position.z=e+82,fo.position.z=e+82,ld.position.z=e+82,cd.position.z=e+82;let t=Math.floor((e-4)/1.72);dd.forEach((o,h)=>{o.position.z=(t+Math.floor(h/2))*1.72}),po.material.color.set(i.colors.road||"#31394b"),pd.color.set(i.colors.lane||"#f5f6fb"),ld.material.color.set(i.colors.edges?.[0]||"#ff6fa7"),cd.material.color.set(i.colors.edges?.[1]||"#75d8ff");let n=Math.floor((e-10)/7.2),r=`${i.colors.scenery}:${i.colors.sceneryDark}:${i.colors.ground}`;(n!==md||i.scenario!==fd||r!==gd)&&af(n,i.scenario,i.colors),lf(i.gates,i.gateColors);for(let o of Ms.values()){let h=o.position.z-e,p=Ci.smoothstep(h,.25,1.4),d=(1-Ci.smoothstep(h,22,42))*p,u=(1-Ci.smoothstep(h,20,29))*p;o.visible=d>.004;for(let g of o.userData.fadeMaterials)g.material.opacity=g.base*d*(g.label?u:1)}sf(i.runner,i.runnerColor);let s=i.runner==="carro"?.54:i.runner==="foguete"?.26:.62;if(it.scale.setScalar(s),it.position.set(-i.playerX/1e3,i.runner==="carro"?.045:i.runner==="foguete"?.08:.04,e+2.05),it.rotation.y=i.inclination*(i.runner==="carro"?1.02:1.15),it.rotation.z=i.runner==="foguete"?-i.inclination*.45:i.inclination*.04,it.userData.type==="carro"){let o=Math.min(Math.max(i.speed/6.2,.35),1),h=Hm?0:(Math.sin(i.time*9.2)*.004+Math.sin(i.time*15.7)*.0025)*o;it.userData.wheelSpin-=i.dt*i.speed*6.6,it.userData.steer+=(i.inclination*1.35-it.userData.steer)*Math.min(i.dt*12,1),it.userData.wheels.forEach(p=>{p.rotation.x=it.userData.wheelSpin}),it.userData.frontWheels.forEach(p=>{p.rotation.y=it.userData.steer}),it.userData.bodyRig.position.y=h,it.userData.bodyRig.rotation.x=-.012+Math.sin(i.time*5.4)*.004*o,it.userData.bodyRig.rotation.z+=(i.inclination*.3-it.userData.bodyRig.rotation.z)*Math.min(i.dt*9,1)}else if(it.userData.type==="foguete"){it.position.y+=.3+Math.sin(i.time*3.2)*.08;let o=.8+Math.abs(Math.sin(i.time*20))*.42;it.userData.flame.scale.y=o,it.userData.core.scale.y=.85+o*.22}else it.position.y+=Math.abs(Math.sin(i.time*8))*.09,it.userData.limbs.forEach((o,h)=>{o.rotation.x=Math.sin(i.time*9+h*Math.PI)*.58});let a=i.items||[];pf(a);for(let o of a){let h=xs.get(o.index),p=i.time+o.index*.73,d=.78+Math.sin(p*2.7)*.09,u=-(o.lane-1)*1.24,g=o.z/1e3-e,m=1-Ci.smoothstep(g,50,65),v=Ci.smoothstep(g,-2.2,.2),f=m*v;h.visible=f>.005,h.scale.setScalar(.56*(.82+f*.18)),h.position.set(u,d,o.z/1e3),h.userData.visual.rotation.set(Math.sin(p*.72)*.1,Math.sin(p*.9)*.42,Math.sin(p*.54)*.06),h.userData.core.rotation.y=-p*1.7,h.userData.core.rotation.x=p*.8,h.userData.shellMaterial.opacity=.72*f,h.userData.coreMaterial.opacity=f,h.userData.icon.material.opacity=f}let l=i.runner==="carro"?1.68:2.35,c=new A(-i.camX/1e3,l,e-2.65);Sr.position.lerp(c,i.dragging?.34:.13),Sr.lookAt(-i.camX/1e3,i.runner==="carro"?.3:.18,e+8.2),jt.position.set(Sr.position.x-7,12,e-4),jt.target.position.set(0,0,e+12),br.add(jt.target),br.fog=new Wr(i.colors.fog||i.colors.skyBottom||"#b76e73",18,68),Pn.render(br,Sr)}function ff(){Pi.hidden=!0}window.CorridaCena3D={ready:!0,render:mf,resize:yd,hide:ff};window.dispatchEvent(new Event("corrida3dready"));})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
