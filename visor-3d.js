/* visor-3d.js · generado con «npm run build:visor» desde visor/ (no editar a mano). three.js 0.160.0 (MIT). Maniquí: «Human Male/Female Basemesh Rigged», de Niclas (Sketchfab), CC BY 4.0. */
(()=>{var ho="160",ci={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ui={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Yu=0,ll=1,Ku=2;var Yc=1,fo=2,Mn=3,cn=0,mt=1,Pt=2;var Fn=0,Di=1,cl=2,ul=3,hl=4,Ju=5,ti=100,Qu=101,$u=102,fl=103,dl=104,eh=200,th=201,nh=202,ih=203,Pa=204,Ca=205,sh=206,rh=207,ah=208,oh=209,lh=210,ch=211,uh=212,hh=213,fh=214,dh=0,ph=1,mh=2,sr=3,gh=4,yh=5,xh=6,vh=7,Kc=0,Mh=1,bh=2,Bn=0,Sh=1,Ah=2,wh=3,po=4,Th=5,Eh=6,pl="attached",_h="detached",Jc=300,Oi=301,Ui=302,La=303,Ia=304,Ur=306,rn=1e3,Wt=1001,cs=1002,dt=1003,rr=1004;var ss=1005;var zt=1006,mo=1007;var kn=1008;var Hn=1009,Rh=1010,Ph=1011,go=1012,Qc=1013,On=1014,bn=1015,us=1016,$c=1017,eu=1018,ii=1020,Ch=1021,Yt=1023,Lh=1024,Ih=1025,si=1026,Fi=1027,Dh=1028,tu=1029,Nh=1030,nu=1031,iu=1033,Kr=33776,Jr=33777,Qr=33778,$r=33779,ml=35840,gl=35841,yl=35842,xl=35843,su=36196,vl=37492,Ml=37496,bl=37808,Sl=37809,Al=37810,wl=37811,Tl=37812,El=37813,_l=37814,Rl=37815,Pl=37816,Cl=37817,Ll=37818,Il=37819,Dl=37820,Nl=37821,ea=36492,zl=36494,Ol=36495,zh=36283,Ul=36284,Fl=36285,Bl=36286;var Bi=2300,ai=2301,ta=2302,Hl=2400,kl=2401,Vl=2402,Oh=2500;var ru=0,Fr=1,Ts=2,au=3e3,ri=3001,Uh=3200,Fh=3201,ou=0,Bh=1,Kt="",$e="srgb",gt="srgb-linear",yo="display-p3",Br="display-p3-linear",ar="linear",st="srgb",or="rec709",lr="p3";var di=7680;var Gl=519,Hh=512,kh=513,Vh=514,lu=515,Gh=516,Wh=517,Xh=518,qh=519,Da=35044,cu=35048;var Wl="300 es",Na=1035,Sn=2e3,cr=2001,un=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},_t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xl=1234567,rs=Math.PI/180,Hi=180/Math.PI;function sn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_t[i&255]+_t[i>>8&255]+_t[i>>16&255]+_t[i>>24&255]+"-"+_t[e&255]+_t[e>>8&255]+"-"+_t[e>>16&15|64]+_t[e>>24&255]+"-"+_t[t&63|128]+_t[t>>8&255]+"-"+_t[t>>16&255]+_t[t>>24&255]+_t[n&255]+_t[n>>8&255]+_t[n>>16&255]+_t[n>>24&255]).toLowerCase()}function wt(i,e,t){return Math.max(e,Math.min(t,i))}function xo(i,e){return(i%e+e)%e}function jh(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Zh(i,e,t){return i!==e?(t-i)/(e-i):0}function as(i,e,t){return(1-t)*i+t*e}function Yh(i,e,t,n){return as(i,e,1-Math.exp(-t*n))}function Kh(i,e=1){return e-Math.abs(xo(i,e*2)-e)}function Jh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Qh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function $h(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ef(i,e){return i+Math.random()*(e-i)}function tf(i){return i*(.5-Math.random())}function nf(i){i!==void 0&&(Xl=i);let e=Xl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function sf(i){return i*rs}function rf(i){return i*Hi}function za(i){return(i&i-1)===0&&i!==0}function af(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ur(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function of(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),f=a((e-n)/2),p=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*h,l*f,o*c);break;case"YZY":i.set(l*f,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*f,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ln(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Qe(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ji={DEG2RAD:rs,RAD2DEG:Hi,generateUUID:sn,clamp:wt,euclideanModulo:xo,mapLinear:jh,inverseLerp:Zh,lerp:as,damp:Yh,pingpong:Kh,smoothstep:Jh,smootherstep:Qh,randInt:$h,randFloat:ef,randFloatSpread:tf,seededRandom:nf,degToRad:sf,radToDeg:rf,isPowerOfTwo:za,ceilPowerOfTwo:af,floorPowerOfTwo:ur,setQuaternionFromProperEuler:of,normalize:Qe,denormalize:ln},Ae=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ve=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],y=s[0],m=s[3],d=s[6],v=s[1],x=s[4],A=s[7],P=s[2],E=s[5],w=s[8];return r[0]=a*y+o*v+l*P,r[3]=a*m+o*x+l*E,r[6]=a*d+o*A+l*w,r[1]=c*y+u*v+h*P,r[4]=c*m+u*x+h*E,r[7]=c*d+u*A+h*w,r[2]=f*y+p*v+g*P,r[5]=f*m+p*x+g*E,r[8]=f*d+p*A+g*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*r,p=c*r-a*l,g=t*h+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=h*y,e[1]=(s*c-u*n)*y,e[2]=(o*n-s*a)*y,e[3]=f*y,e[4]=(u*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=p*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(na.makeScale(e,t)),this}rotate(e){return this.premultiply(na.makeRotation(-e)),this}translate(e,t){return this.premultiply(na.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},na=new Ve;function uu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function hs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lf(){let i=hs("canvas");return i.style.display="block",i}var ql={};function os(i){i in ql||(ql[i]=!0,console.warn(i))}var jl=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Zl=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Cs={[gt]:{transfer:ar,primaries:or,toReference:i=>i,fromReference:i=>i},[$e]:{transfer:st,primaries:or,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Br]:{transfer:ar,primaries:lr,toReference:i=>i.applyMatrix3(Zl),fromReference:i=>i.applyMatrix3(jl)},[yo]:{transfer:st,primaries:lr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Zl),fromReference:i=>i.applyMatrix3(jl).convertLinearToSRGB()}},cf=new Set([gt,Br]),Je={enabled:!0,_workingColorSpace:gt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!cf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Cs[e].toReference,s=Cs[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Cs[i].primaries},getTransfer:function(i){return i===Kt?ar:Cs[i].transfer}};function Ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ia(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var pi,hr=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{pi===void 0&&(pi=hs("canvas")),pi.width=e.width,pi.height=e.height;let n=pi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=pi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=hs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ni(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ni(t[n]/255)*255):t[n]=Ni(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},uf=0,fr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=sn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(sa(s[a].image)):r.push(sa(s[a]))}else r=sa(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function sa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var hf=0,Tt=class i extends un{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Wt,s=Wt,r=zt,a=kn,o=Yt,l=Hn,c=i.DEFAULT_ANISOTROPY,u=Kt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=sn(),this.name="",this.source=new fr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(os("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===ri?$e:Kt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rn:e.x=e.x-Math.floor(e.x);break;case Wt:e.x=e.x<0?0:1;break;case cs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rn:e.y=e.y-Math.floor(e.y);break;case Wt:e.y=e.y<0?0:1;break;case cs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return os("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===$e?ri:au}set encoding(e){os("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ri?$e:Kt}};Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=Jc;Tt.DEFAULT_ANISOTROPY=1;var et=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],y=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,A=(p+1)/2,P=(d+1)/2,E=(u+f)/4,w=(h+y)/4,z=(g+m)/4;return x>A&&x>P?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=E/n,r=w/n):A>P?A<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),n=E/s,r=z/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=w/r,s=z/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(h-y)*(h-y)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-y)/v,this.z=(f-u)/v,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Oa=class extends un{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(os("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ri?$e:Kt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Tt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new fr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},An=class extends Oa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},dr=class extends Tt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=dt,this.minFilter=dt,this.wrapR=Wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ua=class extends Tt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=dt,this.minFilter=dt,this.wrapR=Wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ft=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],f=r[a+0],p=r[a+1],g=r[a+2],y=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=y;return}if(h!==y||l!==f||c!==p||u!==g){let m=1-o,d=l*f+c*p+u*g+h*y,v=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){let P=Math.sqrt(x),E=Math.atan2(P,d*v);m=Math.sin(m*E)/P,o=Math.sin(o*E)/P}let A=o*v;if(l=l*m+f*A,c=c*m+p*A,u=u*m+g*A,h=h*m+y*A,m===1-o){let P=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=P,c*=P,u*=P,h*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-o*p,e[t+2]=c*g+u*p+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>h){let p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>h){let p=2*Math.sqrt(1+o-n-h);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ra.copy(this).projectOnVector(e),this.sub(ra)}reflect(e){return this.sub(ra.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ra=new L,Yl=new Ft,Jt=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(en.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(en.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=en.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,en):en.fromBufferAttribute(r,a),en.applyMatrix4(e.matrixWorld),this.expandByPoint(en);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ls.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ls.copy(n.boundingBox)),Ls.applyMatrix4(e.matrixWorld),this.union(Ls)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,en),en.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ji),Is.subVectors(this.max,Ji),mi.subVectors(e.a,Ji),gi.subVectors(e.b,Ji),yi.subVectors(e.c,Ji),Ln.subVectors(gi,mi),In.subVectors(yi,gi),Kn.subVectors(mi,yi);let t=[0,-Ln.z,Ln.y,0,-In.z,In.y,0,-Kn.z,Kn.y,Ln.z,0,-Ln.x,In.z,0,-In.x,Kn.z,0,-Kn.x,-Ln.y,Ln.x,0,-In.y,In.x,0,-Kn.y,Kn.x,0];return!aa(t,mi,gi,yi,Is)||(t=[1,0,0,0,1,0,0,0,1],!aa(t,mi,gi,yi,Is))?!1:(Ds.crossVectors(Ln,In),t=[Ds.x,Ds.y,Ds.z],aa(t,mi,gi,yi,Is))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,en).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(en).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},pn=[new L,new L,new L,new L,new L,new L,new L,new L],en=new L,Ls=new Jt,mi=new L,gi=new L,yi=new L,Ln=new L,In=new L,Kn=new L,Ji=new L,Is=new L,Ds=new L,Jn=new L;function aa(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Jn.fromArray(i,r);let o=s.x*Math.abs(Jn.x)+s.y*Math.abs(Jn.y)+s.z*Math.abs(Jn.z),l=e.dot(Jn),c=t.dot(Jn),u=n.dot(Jn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var ff=new Jt,Qi=new L,oa=new L,Ot=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):ff.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qi.subVectors(e,this.center);let t=Qi.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Qi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qi.copy(e.center).add(oa)),this.expandByPoint(Qi.copy(e.center).sub(oa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},mn=new L,la=new L,Ns=new L,Dn=new L,ca=new L,zs=new L,ua=new L,wn=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mn.copy(this.origin).addScaledVector(this.direction,t),mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){la.copy(e).add(t).multiplyScalar(.5),Ns.copy(t).sub(e).normalize(),Dn.copy(this.origin).sub(la);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ns),o=Dn.dot(this.direction),l=-Dn.dot(Ns),c=Dn.lengthSq(),u=Math.abs(1-a*a),h,f,p,g;if(u>0)if(h=a*l-o,f=a*o-l,g=r*u,h>=0)if(f>=-g)if(f<=g){let y=1/u;h*=y,f*=y,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(la).addScaledVector(Ns,f),p}intersectSphere(e,t){mn.subVectors(e.center,this.origin);let n=mn.dot(this.direction),s=mn.dot(mn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,mn)!==null}intersectTriangle(e,t,n,s,r){ca.subVectors(t,e),zs.subVectors(n,e),ua.crossVectors(ca,zs);let a=this.direction.dot(ua),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Dn.subVectors(this.origin,e);let l=o*this.direction.dot(zs.crossVectors(Dn,zs));if(l<0)return null;let c=o*this.direction.dot(ca.cross(Dn));if(c<0||l+c>a)return null;let u=-o*Dn.dot(ua);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ge=class i{constructor(e,t,n,s,r,a,o,l,c,u,h,f,p,g,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,h,f,p,g,y,m)}set(e,t,n,s,r,a,o,l,c,u,h,f,p,g,y,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/xi.setFromMatrixColumn(e,0).length(),r=1/xi.setFromMatrixColumn(e,1).length(),a=1/xi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=a*u,p=a*h,g=o*u,y=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-y*c,t[9]=-o*l,t[2]=y-f*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*u,p=l*h,g=c*u,y=c*h;t[0]=f+y*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=y+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*u,p=l*h,g=c*u,y=c*h;t[0]=f-y*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=y-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*u,p=a*h,g=o*u,y=o*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+y,t[1]=l*h,t[5]=y*c+f,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,p=a*c,g=o*l,y=o*c;t[0]=l*u,t[4]=y-f*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-y*h}else if(e.order==="XZY"){let f=a*l,p=a*c,g=o*l,y=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+y,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=y*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(df,e,pf)}lookAt(e,t,n){let s=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),Nn.crossVectors(n,kt),Nn.lengthSq()===0&&(Math.abs(n.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),Nn.crossVectors(n,kt)),Nn.normalize(),Os.crossVectors(kt,Nn),s[0]=Nn.x,s[4]=Os.x,s[8]=kt.x,s[1]=Nn.y,s[5]=Os.y,s[9]=kt.y,s[2]=Nn.z,s[6]=Os.z,s[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],y=n[6],m=n[10],d=n[14],v=n[3],x=n[7],A=n[11],P=n[15],E=s[0],w=s[4],z=s[8],b=s[12],_=s[1],k=s[5],q=s[9],ae=s[13],I=s[2],O=s[6],G=s[10],j=s[14],X=s[3],W=s[7],Q=s[11],ne=s[15];return r[0]=a*E+o*_+l*I+c*X,r[4]=a*w+o*k+l*O+c*W,r[8]=a*z+o*q+l*G+c*Q,r[12]=a*b+o*ae+l*j+c*ne,r[1]=u*E+h*_+f*I+p*X,r[5]=u*w+h*k+f*O+p*W,r[9]=u*z+h*q+f*G+p*Q,r[13]=u*b+h*ae+f*j+p*ne,r[2]=g*E+y*_+m*I+d*X,r[6]=g*w+y*k+m*O+d*W,r[10]=g*z+y*q+m*G+d*Q,r[14]=g*b+y*ae+m*j+d*ne,r[3]=v*E+x*_+A*I+P*X,r[7]=v*w+x*k+A*O+P*W,r[11]=v*z+x*q+A*G+P*Q,r[15]=v*b+x*ae+A*j+P*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],y=e[7],m=e[11],d=e[15];return g*(+r*l*h-s*c*h-r*o*f+n*c*f+s*o*p-n*l*p)+y*(+t*l*p-t*c*f+r*a*f-s*a*p+s*c*u-r*l*u)+m*(+t*c*h-t*o*p-r*a*h+n*a*p+r*o*u-n*c*u)+d*(-s*o*u-t*l*h+t*o*f+s*a*h-n*a*f+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],y=e[13],m=e[14],d=e[15],v=h*m*c-y*f*c+y*l*p-o*m*p-h*l*d+o*f*d,x=g*f*c-u*m*c-g*l*p+a*m*p+u*l*d-a*f*d,A=u*y*c-g*h*c+g*o*p-a*y*p-u*o*d+a*h*d,P=g*h*l-u*y*l-g*o*f+a*y*f+u*o*m-a*h*m,E=t*v+n*x+s*A+r*P;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/E;return e[0]=v*w,e[1]=(y*f*r-h*m*r-y*s*p+n*m*p+h*s*d-n*f*d)*w,e[2]=(o*m*r-y*l*r+y*s*c-n*m*c-o*s*d+n*l*d)*w,e[3]=(h*l*r-o*f*r-h*s*c+n*f*c+o*s*p-n*l*p)*w,e[4]=x*w,e[5]=(u*m*r-g*f*r+g*s*p-t*m*p-u*s*d+t*f*d)*w,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*d-t*l*d)*w,e[7]=(a*f*r-u*l*r+u*s*c-t*f*c-a*s*p+t*l*p)*w,e[8]=A*w,e[9]=(g*h*r-u*y*r-g*n*p+t*y*p+u*n*d-t*h*d)*w,e[10]=(a*y*r-g*o*r+g*n*c-t*y*c-a*n*d+t*o*d)*w,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*p-t*o*p)*w,e[12]=P*w,e[13]=(u*y*s-g*h*s+g*n*f-t*y*f-u*n*m+t*h*m)*w,e[14]=(g*o*s-a*y*s-g*n*l+t*y*l+a*n*m-t*o*m)*w,e[15]=(a*h*s-u*o*s+u*n*l-t*h*l-a*n*f+t*o*f)*w,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,f=r*c,p=r*u,g=r*h,y=a*u,m=a*h,d=o*h,v=l*c,x=l*u,A=l*h,P=n.x,E=n.y,w=n.z;return s[0]=(1-(y+d))*P,s[1]=(p+A)*P,s[2]=(g-x)*P,s[3]=0,s[4]=(p-A)*E,s[5]=(1-(f+d))*E,s[6]=(m+v)*E,s[7]=0,s[8]=(g+x)*w,s[9]=(m-v)*w,s[10]=(1-(f+y))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=xi.set(s[0],s[1],s[2]).length(),a=xi.set(s[4],s[5],s[6]).length(),o=xi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],tn.copy(this);let c=1/r,u=1/a,h=1/o;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=u,tn.elements[5]*=u,tn.elements[6]*=u,tn.elements[8]*=h,tn.elements[9]*=h,tn.elements[10]*=h,t.setFromRotationMatrix(tn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Sn){let l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s),p,g;if(o===Sn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===cr)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Sn){let l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(a-r),f=(t+e)*c,p=(n+s)*u,g,y;if(o===Sn)g=(a+r)*h,y=-2*h;else if(o===cr)g=r*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},xi=new L,tn=new Ge,df=new L(0,0,0),pf=new L(1,1,1),Nn=new L,Os=new L,kt=new L,Kl=new Ge,Jl=new Ft,pr=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(wt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-wt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Kl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jl.setFromEuler(this),this.setFromQuaternion(Jl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pr.DEFAULT_ORDER="XYZ";var fs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},mf=0,Ql=new L,vi=new Ft,gn=new Ge,Us=new L,$i=new L,gf=new L,yf=new Ft,$l=new L(1,0,0),ec=new L(0,1,0),tc=new L(0,0,1),xf={type:"added"},vf={type:"removed"},ot=class i extends un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new pr,n=new Ft,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ge},normalMatrix:{value:new Ve}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.multiply(vi),this}rotateOnWorldAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.premultiply(vi),this}rotateX(e){return this.rotateOnAxis($l,e)}rotateY(e){return this.rotateOnAxis(ec,e)}rotateZ(e){return this.rotateOnAxis(tc,e)}translateOnAxis(e,t){return Ql.copy(e).applyQuaternion(this.quaternion),this.position.add(Ql.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($l,e)}translateY(e){return this.translateOnAxis(ec,e)}translateZ(e){return this.translateOnAxis(tc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Us.copy(e):Us.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),$i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt($i,Us,this.up):gn.lookAt(Us,$i,this.up),this.quaternion.setFromRotationMatrix(gn),s&&(gn.extractRotation(s.matrixWorld),vi.setFromRotationMatrix(gn),this.quaternion.premultiply(vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(xf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vf)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(gn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,e,gf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,yf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};ot.DEFAULT_UP=new L(0,1,0);ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var nn=new L,yn=new L,ha=new L,xn=new L,Mi=new L,bi=new L,nc=new L,fa=new L,da=new L,pa=new L,Fs=!1,Ci=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),nn.subVectors(e,t),s.cross(nn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){nn.subVectors(s,t),yn.subVectors(n,t),ha.subVectors(e,t);let a=nn.dot(nn),o=nn.dot(yn),l=nn.dot(ha),c=yn.dot(yn),u=yn.dot(ha),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;let f=1/h,p=(c*l-o*u)*f,g=(a*u-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getUV(e,t,n,s,r,a,o,l){return Fs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Fs=!0),this.getInterpolation(e,t,n,s,r,a,o,l)}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,xn.x),l.addScaledVector(a,xn.y),l.addScaledVector(o,xn.z),l)}static isFrontFacing(e,t,n,s){return nn.subVectors(n,t),yn.subVectors(e,t),nn.cross(yn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),nn.cross(yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Fs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Fs=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Mi.subVectors(s,n),bi.subVectors(r,n),fa.subVectors(e,n);let l=Mi.dot(fa),c=bi.dot(fa);if(l<=0&&c<=0)return t.copy(n);da.subVectors(e,s);let u=Mi.dot(da),h=bi.dot(da);if(u>=0&&h<=u)return t.copy(s);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Mi,a);pa.subVectors(e,r);let p=Mi.dot(pa),g=bi.dot(pa);if(g>=0&&p<=g)return t.copy(r);let y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(bi,o);let m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return nc.subVectors(r,s),o=(h-u)/(h-u+(p-g)),t.copy(s).addScaledVector(nc,o);let d=1/(m+y+f);return a=y*d,o=f*d,t.copy(n).addScaledVector(Mi,a).addScaledVector(bi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},hu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},Bs={h:0,s:0,l:0};function ma(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var pe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Je.workingColorSpace){if(e=xo(e,1),t=wt(t,0,1),n=wt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ma(a,r,e+1/3),this.g=ma(a,r,e),this.b=ma(a,r,e-1/3)}return Je.toWorkingColorSpace(this,s),this}setStyle(e,t=$e){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$e){let n=hu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}copyLinearToSRGB(e){return this.r=ia(e.r),this.g=ia(e.g),this.b=ia(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$e){return Je.fromWorkingColorSpace(Rt.copy(this),e),Math.round(wt(Rt.r*255,0,255))*65536+Math.round(wt(Rt.g*255,0,255))*256+Math.round(wt(Rt.b*255,0,255))}getHexString(e=$e){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(Rt.copy(this),t);let n=Rt.r,s=Rt.g,r=Rt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=$e){Je.fromWorkingColorSpace(Rt.copy(this),e);let t=Rt.r,n=Rt.g,s=Rt.b;return e!==$e?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(zn),this.setHSL(zn.h+e,zn.s+t,zn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zn),e.getHSL(Bs);let n=as(zn.h,Bs.h,t),s=as(zn.s,Bs.s,t),r=as(zn.l,Bs.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Rt=new pe;pe.NAMES=hu;var Mf=0,Bt=class extends un{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=sn(),this.name="",this.type="Material",this.blending=Di,this.side=cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pa,this.blendDst=Ca,this.blendEquation=ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=di,this.stencilZFail=di,this.stencilZPass=di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Di&&(n.blending=this.blending),this.side!==cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Pa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ca&&(n.blendDst=this.blendDst),this.blendEquation!==ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==sr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},qt=class extends Bt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var ut=new L,Hs=new Ae,Ye=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Da,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Hs.fromBufferAttribute(this,t),Hs.applyMatrix3(e),this.setXY(t,Hs.x,Hs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ln(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ln(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ln(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ln(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),s=Qe(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),s=Qe(s,this.array),r=Qe(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Da&&(e.usage=this.usage),e}};var mr=class extends Ye{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var gr=class extends Ye{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ht=class extends Ye{constructor(e,t,n){super(new Float32Array(e),t,n)}};var bf=0,Zt=new Ge,ga=new ot,Si=new L,Vt=new Jt,es=new Jt,At=new L,ft=class i extends un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=sn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uu(e)?gr:mr)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return ga.lookAt(e),ga.updateMatrix(),this.applyMatrix4(ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Si).negate(),this.translate(Si.x,Si.y,Si.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ht(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Vt.setFromBufferAttribute(r),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ot);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];es.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(Vt.min,es.min),Vt.expandByPoint(At),At.addVectors(Vt.max,es.max),Vt.expandByPoint(At)):(Vt.expandByPoint(es.min),Vt.expandByPoint(es.max))}Vt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)At.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(At));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)At.fromBufferAttribute(o,c),l&&(Si.fromBufferAttribute(e,c),At.add(Si)),s=Math.max(s,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ye(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],u=[];for(let _=0;_<o;_++)c[_]=new L,u[_]=new L;let h=new L,f=new L,p=new L,g=new Ae,y=new Ae,m=new Ae,d=new L,v=new L;function x(_,k,q){h.fromArray(s,_*3),f.fromArray(s,k*3),p.fromArray(s,q*3),g.fromArray(a,_*2),y.fromArray(a,k*2),m.fromArray(a,q*2),f.sub(h),p.sub(h),y.sub(g),m.sub(g);let ae=1/(y.x*m.y-m.x*y.y);isFinite(ae)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-y.y).multiplyScalar(ae),v.copy(p).multiplyScalar(y.x).addScaledVector(f,-m.x).multiplyScalar(ae),c[_].add(d),c[k].add(d),c[q].add(d),u[_].add(v),u[k].add(v),u[q].add(v))}let A=this.groups;A.length===0&&(A=[{start:0,count:n.length}]);for(let _=0,k=A.length;_<k;++_){let q=A[_],ae=q.start,I=q.count;for(let O=ae,G=ae+I;O<G;O+=3)x(n[O+0],n[O+1],n[O+2])}let P=new L,E=new L,w=new L,z=new L;function b(_){w.fromArray(r,_*3),z.copy(w);let k=c[_];P.copy(k),P.sub(w.multiplyScalar(w.dot(k))).normalize(),E.crossVectors(z,k);let ae=E.dot(u[_])<0?-1:1;l[_*4]=P.x,l[_*4+1]=P.y,l[_*4+2]=P.z,l[_*4+3]=ae}for(let _=0,k=A.length;_<k;++_){let q=A[_],ae=q.start,I=q.count;for(let O=ae,G=ae+I;O<G;O+=3)b(n[O+0]),b(n[O+1]),b(n[O+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ye(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,u=new L,h=new L;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u),p=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new Ye(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){let f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ic=new Ge,Qn=new wn,ks=new Ot,sc=new L,Ai=new L,wi=new L,Ti=new L,ya=new L,Vs=new L,Gs=new Ae,Ws=new Ae,Xs=new Ae,rc=new L,ac=new L,oc=new L,qs=new L,js=new L,at=class extends ot{constructor(e=new ft,t=new qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Vs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],h=r[l];u!==0&&(ya.fromBufferAttribute(h,e),a?Vs.addScaledVector(ya,u):Vs.addScaledVector(ya.sub(t),u))}t.add(Vs)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ks.copy(n.boundingSphere),ks.applyMatrix4(r),Qn.copy(e.ray).recast(e.near),!(ks.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(ks,sc)===null||Qn.origin.distanceToSquared(sc)>(e.far-e.near)**2))&&(ic.copy(r).invert(),Qn.copy(e.ray).applyMatrix4(ic),!(n.boundingBox!==null&&Qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Qn)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=f.length;g<y;g++){let m=f[g],d=a[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let A=v,P=x;A<P;A+=3){let E=o.getX(A),w=o.getX(A+1),z=o.getX(A+2);s=Zs(this,d,e,n,c,u,h,E,w,z),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=g,d=y;m<d;m+=3){let v=o.getX(m),x=o.getX(m+1),A=o.getX(m+2);s=Zs(this,a,e,n,c,u,h,v,x,A),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=f.length;g<y;g++){let m=f[g],d=a[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let A=v,P=x;A<P;A+=3){let E=A,w=A+1,z=A+2;s=Zs(this,d,e,n,c,u,h,E,w,z),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,d=y;m<d;m+=3){let v=m,x=m+1,A=m+2;s=Zs(this,a,e,n,c,u,h,v,x,A),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Sf(i,e,t,n,s,r,a,o){let l;if(e.side===mt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===cn,o),l===null)return null;js.copy(o),js.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(js);return c<t.near||c>t.far?null:{distance:c,point:js.clone(),object:i}}function Zs(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Ai),i.getVertexPosition(l,wi),i.getVertexPosition(c,Ti);let u=Sf(i,e,t,n,Ai,wi,Ti,qs);if(u){s&&(Gs.fromBufferAttribute(s,o),Ws.fromBufferAttribute(s,l),Xs.fromBufferAttribute(s,c),u.uv=Ci.getInterpolation(qs,Ai,wi,Ti,Gs,Ws,Xs,new Ae)),r&&(Gs.fromBufferAttribute(r,o),Ws.fromBufferAttribute(r,l),Xs.fromBufferAttribute(r,c),u.uv1=Ci.getInterpolation(qs,Ai,wi,Ti,Gs,Ws,Xs,new Ae),u.uv2=u.uv1),a&&(rc.fromBufferAttribute(a,o),ac.fromBufferAttribute(a,l),oc.fromBufferAttribute(a,c),u.normal=Ci.getInterpolation(qs,Ai,wi,Ti,rc,ac,oc,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new L,materialIndex:0};Ci.getNormal(Ai,wi,Ti,h.normal),u.face=h}return u}var ds=class i extends ft{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],h=[],f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(u,3)),this.setAttribute("uv",new ht(h,2));function g(y,m,d,v,x,A,P,E,w,z,b){let _=A/w,k=P/z,q=A/2,ae=P/2,I=E/2,O=w+1,G=z+1,j=0,X=0,W=new L;for(let Q=0;Q<G;Q++){let ne=Q*k-ae;for(let fe=0;fe<O;fe++){let V=fe*_-q;W[y]=V*v,W[m]=ne*x,W[d]=I,c.push(W.x,W.y,W.z),W[y]=0,W[m]=0,W[d]=E>0?1:-1,u.push(W.x,W.y,W.z),h.push(fe/w),h.push(1-Q/z),j+=1}}for(let Q=0;Q<z;Q++)for(let ne=0;ne<w;ne++){let fe=f+ne+O*Q,V=f+ne+O*(Q+1),Y=f+(ne+1)+O*(Q+1),he=f+(ne+1)+O*Q;l.push(fe,V,he),l.push(V,Y,he),X+=6}o.addGroup(p,X,b),p+=X,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ki(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Nt(i){let e={};for(let t=0;t<i.length;t++){let n=ki(i[t]);for(let s in n)e[s]=n[s]}return e}function Af(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function fu(i){return i.getRenderTarget()===null?i.outputColorSpace:Je.workingColorSpace}var wf={clone:ki,merge:Nt},Tf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ef=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Tn=class extends Bt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tf,this.fragmentShader=Ef,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ki(e.uniforms),this.uniformsGroups=Af(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},yr=class extends ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=Sn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},pt=class extends yr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Hi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(rs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hi*2*Math.atan(Math.tan(rs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(rs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ei=-90,_i=1,Fa=class extends ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new pt(Ei,_i,e,t);s.layers=this.layers,this.add(s);let r=new pt(Ei,_i,e,t);r.layers=this.layers,this.add(r);let a=new pt(Ei,_i,e,t);a.layers=this.layers,this.add(a);let o=new pt(Ei,_i,e,t);o.layers=this.layers,this.add(o);let l=new pt(Ei,_i,e,t);l.layers=this.layers,this.add(l);let c=new pt(Ei,_i,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===cr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},xr=class extends Tt{constructor(e,t,n,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Oi,super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ba=class extends An{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(os("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ri?$e:Kt),this.texture=new xr(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ds(5,5,5),r=new Tn({name:"CubemapFromEquirect",uniforms:ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mt,blending:Fn});r.uniforms.tEquirect.value=t;let a=new at(s,r),o=t.minFilter;return t.minFilter===kn&&(t.minFilter=zt),new Fa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},xa=new L,_f=new L,Rf=new Ve,Gt=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=xa.subVectors(n,t).cross(_f.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(xa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Rf.getNormalMatrix(e),s=this.coplanarPoint(xa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},$n=new Ot,Ys=new L,ps=class{constructor(e=new Gt,t=new Gt,n=new Gt,s=new Gt,r=new Gt,a=new Gt){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Sn){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],p=s[8],g=s[9],y=s[10],m=s[11],d=s[12],v=s[13],x=s[14],A=s[15];if(n[0].setComponents(l-r,f-c,m-p,A-d).normalize(),n[1].setComponents(l+r,f+c,m+p,A+d).normalize(),n[2].setComponents(l+a,f+u,m+g,A+v).normalize(),n[3].setComponents(l-a,f-u,m-g,A-v).normalize(),n[4].setComponents(l-o,f-h,m-y,A-x).normalize(),t===Sn)n[5].setComponents(l+o,f+h,m+y,A+x).normalize();else if(t===cr)n[5].setComponents(o,h,y,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$n.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$n.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($n)}intersectsSprite(e){return $n.center.set(0,0,0),$n.radius=.7071067811865476,$n.applyMatrix4(e.matrixWorld),this.intersectsSphere($n)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ys.x=s.normal.x>0?e.max.x:e.min.x,Ys.y=s.normal.y>0?e.max.y:e.min.y,Ys.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ys)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function du(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Pf(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,u){let h=c.array,f=c.usage,p=h.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,h,f),c.onUploadCallback();let y;if(h instanceof Float32Array)y=i.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)y=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=i.SHORT;else if(h instanceof Uint32Array)y=i.UNSIGNED_INT;else if(h instanceof Int32Array)y=i.INT;else if(h instanceof Int8Array)y=i.BYTE;else if(h instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,u,h){let f=u.array,p=u._updateRange,g=u.updateRanges;if(i.bindBuffer(h,c),p.count===-1&&g.length===0&&i.bufferSubData(h,0,f),g.length!==0){for(let y=0,m=g.length;y<m;y++){let d=g[y];t?i.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):i.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}p.count!==-1&&(t?i.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):i.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);if(h===void 0)n.set(c,s(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,c,u),h.version=c.version}}return{get:a,remove:o,update:l}}var ms=class i extends ft{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=e/o,f=t/l,p=[],g=[],y=[],m=[];for(let d=0;d<u;d++){let v=d*f-a;for(let x=0;x<c;x++){let A=x*h-r;g.push(A,-v,0),y.push(0,0,1),m.push(x/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<o;v++){let x=v+c*d,A=v+c*(d+1),P=v+1+c*(d+1),E=v+1+c*d;p.push(x,A,E),p.push(A,P,E)}this.setIndex(p),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(y,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Cf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lf=`#ifdef USE_ALPHAHASH
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
#endif`,If=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Df=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,zf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Of=`#ifdef USE_AOMAP
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
#endif`,Uf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ff=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Bf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Hf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gf=`#ifdef USE_IRIDESCENCE
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
#endif`,Wf=`#ifdef USE_BUMPMAP
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
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Qf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,$f=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,ed=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,td=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,nd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,id=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ad="gl_FragColor = linearToOutputTexel( gl_FragColor );",od=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,ld=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ud=`#ifdef USE_ENVMAP
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
#endif`,hd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,md=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yd=`#ifdef USE_GRADIENTMAP
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
}`,xd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,vd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Md=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sd=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,Ad=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,wd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Td=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ed=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_d=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Pd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Cd=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ld=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,Id=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Od=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ud=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hd=`#if defined( USE_POINTS_UV )
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
#endif`,kd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Xd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,qd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,jd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Zd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Yd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qd=`#ifdef USE_NORMALMAP
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
#endif`,$d=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ep=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,np=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ip=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,rp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ap=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,op=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,up=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,fp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,pp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gp=`#ifdef USE_SKINNING
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
#endif`,yp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xp=`#ifdef USE_SKINNING
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
#endif`,vp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sp=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ap=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wp=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Pp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cp=`uniform sampler2D t2D;
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
}`,Lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ip=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Np=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zp=`#include <common>
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
}`,Op=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Up=`#define DISTANCE
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
}`,Fp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kp=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vp=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gp=`#include <common>
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
}`,Wp=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Xp=`#define LAMBERT
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
}`,qp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,jp=`#define MATCAP
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
}`,Zp=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Yp=`#define NORMAL
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
}`,Kp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jp=`#define PHONG
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
}`,Qp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,$p=`#define STANDARD
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
}`,e0=`#define STANDARD
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
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,t0=`#define TOON
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
}`,n0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,i0=`uniform float size;
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
}`,s0=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,r0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,a0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,o0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,l0=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ue={alphahash_fragment:Cf,alphahash_pars_fragment:Lf,alphamap_fragment:If,alphamap_pars_fragment:Df,alphatest_fragment:Nf,alphatest_pars_fragment:zf,aomap_fragment:Of,aomap_pars_fragment:Uf,batching_pars_vertex:Ff,batching_vertex:Bf,begin_vertex:Hf,beginnormal_vertex:kf,bsdfs:Vf,iridescence_fragment:Gf,bumpmap_pars_fragment:Wf,clipping_planes_fragment:Xf,clipping_planes_pars_fragment:qf,clipping_planes_pars_vertex:jf,clipping_planes_vertex:Zf,color_fragment:Yf,color_pars_fragment:Kf,color_pars_vertex:Jf,color_vertex:Qf,common:$f,cube_uv_reflection_fragment:ed,defaultnormal_vertex:td,displacementmap_pars_vertex:nd,displacementmap_vertex:id,emissivemap_fragment:sd,emissivemap_pars_fragment:rd,colorspace_fragment:ad,colorspace_pars_fragment:od,envmap_fragment:ld,envmap_common_pars_fragment:cd,envmap_pars_fragment:ud,envmap_pars_vertex:hd,envmap_physical_pars_fragment:Ad,envmap_vertex:fd,fog_vertex:dd,fog_pars_vertex:pd,fog_fragment:md,fog_pars_fragment:gd,gradientmap_pars_fragment:yd,lightmap_fragment:xd,lightmap_pars_fragment:vd,lights_lambert_fragment:Md,lights_lambert_pars_fragment:bd,lights_pars_begin:Sd,lights_toon_fragment:wd,lights_toon_pars_fragment:Td,lights_phong_fragment:Ed,lights_phong_pars_fragment:_d,lights_physical_fragment:Rd,lights_physical_pars_fragment:Pd,lights_fragment_begin:Cd,lights_fragment_maps:Ld,lights_fragment_end:Id,logdepthbuf_fragment:Dd,logdepthbuf_pars_fragment:Nd,logdepthbuf_pars_vertex:zd,logdepthbuf_vertex:Od,map_fragment:Ud,map_pars_fragment:Fd,map_particle_fragment:Bd,map_particle_pars_fragment:Hd,metalnessmap_fragment:kd,metalnessmap_pars_fragment:Vd,morphcolor_vertex:Gd,morphnormal_vertex:Wd,morphtarget_pars_vertex:Xd,morphtarget_vertex:qd,normal_fragment_begin:jd,normal_fragment_maps:Zd,normal_pars_fragment:Yd,normal_pars_vertex:Kd,normal_vertex:Jd,normalmap_pars_fragment:Qd,clearcoat_normal_fragment_begin:$d,clearcoat_normal_fragment_maps:ep,clearcoat_pars_fragment:tp,iridescence_pars_fragment:np,opaque_fragment:ip,packing:sp,premultiplied_alpha_fragment:rp,project_vertex:ap,dithering_fragment:op,dithering_pars_fragment:lp,roughnessmap_fragment:cp,roughnessmap_pars_fragment:up,shadowmap_pars_fragment:hp,shadowmap_pars_vertex:fp,shadowmap_vertex:dp,shadowmask_pars_fragment:pp,skinbase_vertex:mp,skinning_pars_vertex:gp,skinning_vertex:yp,skinnormal_vertex:xp,specularmap_fragment:vp,specularmap_pars_fragment:Mp,tonemapping_fragment:bp,tonemapping_pars_fragment:Sp,transmission_fragment:Ap,transmission_pars_fragment:wp,uv_pars_fragment:Tp,uv_pars_vertex:Ep,uv_vertex:_p,worldpos_vertex:Rp,background_vert:Pp,background_frag:Cp,backgroundCube_vert:Lp,backgroundCube_frag:Ip,cube_vert:Dp,cube_frag:Np,depth_vert:zp,depth_frag:Op,distanceRGBA_vert:Up,distanceRGBA_frag:Fp,equirect_vert:Bp,equirect_frag:Hp,linedashed_vert:kp,linedashed_frag:Vp,meshbasic_vert:Gp,meshbasic_frag:Wp,meshlambert_vert:Xp,meshlambert_frag:qp,meshmatcap_vert:jp,meshmatcap_frag:Zp,meshnormal_vert:Yp,meshnormal_frag:Kp,meshphong_vert:Jp,meshphong_frag:Qp,meshphysical_vert:$p,meshphysical_frag:e0,meshtoon_vert:t0,meshtoon_frag:n0,points_vert:i0,points_frag:s0,shadow_vert:r0,shadow_frag:a0,sprite_vert:o0,sprite_frag:l0},ce={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},on={basic:{uniforms:Nt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Nt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new pe(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Nt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Nt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Nt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new pe(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Nt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Nt([ce.points,ce.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Nt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Nt([ce.common,ce.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Nt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Nt([ce.sprite,ce.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Nt([ce.common,ce.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Nt([ce.lights,ce.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};on.physical={uniforms:Nt([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};var Ks={r:0,b:0,g:0};function c0(i,e,t,n,s,r,a){let o=new pe(0),l=r===!0?0:1,c,u,h=null,f=0,p=null;function g(m,d){let v=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?t:e).get(x)),x===null?y(o,l):x&&x.isColor&&(y(x,1),v=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ur)?(u===void 0&&(u=new at(new ds(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:ki(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:mt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=Je.getTransfer(x.colorSpace)!==st,(h!==x||f!==x.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,p=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new at(new ms(2,2),new Tn({name:"BackgroundMaterial",uniforms:ki(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Je.getTransfer(x.colorSpace)!==st,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function y(m,d){m.getRGB(Ks,fu(i)),n.buffers.color.setClear(Ks.r,Ks.g,Ks.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),l=d,y(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,y(o,l)},render:g}}function u0(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null),c=l,u=!1;function h(I,O,G,j,X){let W=!1;if(a){let Q=y(j,G,O);c!==Q&&(c=Q,p(c.object)),W=d(I,j,G,X),W&&v(I,j,G,X)}else{let Q=O.wireframe===!0;(c.geometry!==j.id||c.program!==G.id||c.wireframe!==Q)&&(c.geometry=j.id,c.program=G.id,c.wireframe=Q,W=!0)}X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(W||u)&&(u=!1,z(I,O,G,j),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(I){return n.isWebGL2?i.bindVertexArray(I):r.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?i.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function y(I,O,G){let j=G.wireframe===!0,X=o[I.id];X===void 0&&(X={},o[I.id]=X);let W=X[O.id];W===void 0&&(W={},X[O.id]=W);let Q=W[j];return Q===void 0&&(Q=m(f()),W[j]=Q),Q}function m(I){let O=[],G=[],j=[];for(let X=0;X<s;X++)O[X]=0,G[X]=0,j[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:G,attributeDivisors:j,object:I,attributes:{},index:null}}function d(I,O,G,j){let X=c.attributes,W=O.attributes,Q=0,ne=G.getAttributes();for(let fe in ne)if(ne[fe].location>=0){let Y=X[fe],he=W[fe];if(he===void 0&&(fe==="instanceMatrix"&&I.instanceMatrix&&(he=I.instanceMatrix),fe==="instanceColor"&&I.instanceColor&&(he=I.instanceColor)),Y===void 0||Y.attribute!==he||he&&Y.data!==he.data)return!0;Q++}return c.attributesNum!==Q||c.index!==j}function v(I,O,G,j){let X={},W=O.attributes,Q=0,ne=G.getAttributes();for(let fe in ne)if(ne[fe].location>=0){let Y=W[fe];Y===void 0&&(fe==="instanceMatrix"&&I.instanceMatrix&&(Y=I.instanceMatrix),fe==="instanceColor"&&I.instanceColor&&(Y=I.instanceColor));let he={};he.attribute=Y,Y&&Y.data&&(he.data=Y.data),X[fe]=he,Q++}c.attributes=X,c.attributesNum=Q,c.index=j}function x(){let I=c.newAttributes;for(let O=0,G=I.length;O<G;O++)I[O]=0}function A(I){P(I,0)}function P(I,O){let G=c.newAttributes,j=c.enabledAttributes,X=c.attributeDivisors;G[I]=1,j[I]===0&&(i.enableVertexAttribArray(I),j[I]=1),X[I]!==O&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,O),X[I]=O)}function E(){let I=c.newAttributes,O=c.enabledAttributes;for(let G=0,j=O.length;G<j;G++)O[G]!==I[G]&&(i.disableVertexAttribArray(G),O[G]=0)}function w(I,O,G,j,X,W,Q){Q===!0?i.vertexAttribIPointer(I,O,G,X,W):i.vertexAttribPointer(I,O,G,j,X,W)}function z(I,O,G,j){if(n.isWebGL2===!1&&(I.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let X=j.attributes,W=G.getAttributes(),Q=O.defaultAttributeValues;for(let ne in W){let fe=W[ne];if(fe.location>=0){let V=X[ne];if(V===void 0&&(ne==="instanceMatrix"&&I.instanceMatrix&&(V=I.instanceMatrix),ne==="instanceColor"&&I.instanceColor&&(V=I.instanceColor)),V!==void 0){let Y=V.normalized,he=V.itemSize,Me=t.get(V);if(Me===void 0)continue;let xe=Me.buffer,Le=Me.type,Ie=Me.bytesPerElement,Ee=n.isWebGL2===!0&&(Le===i.INT||Le===i.UNSIGNED_INT||V.gpuType===Qc);if(V.isInterleavedBufferAttribute){let Xe=V.data,N=Xe.stride,Mt=V.offset;if(Xe.isInstancedInterleavedBuffer){for(let we=0;we<fe.locationSize;we++)P(fe.location+we,Xe.meshPerAttribute);I.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Xe.meshPerAttribute*Xe.count)}else for(let we=0;we<fe.locationSize;we++)A(fe.location+we);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let we=0;we<fe.locationSize;we++)w(fe.location+we,he/fe.locationSize,Le,Y,N*Ie,(Mt+he/fe.locationSize*we)*Ie,Ee)}else{if(V.isInstancedBufferAttribute){for(let Xe=0;Xe<fe.locationSize;Xe++)P(fe.location+Xe,V.meshPerAttribute);I.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Xe=0;Xe<fe.locationSize;Xe++)A(fe.location+Xe);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let Xe=0;Xe<fe.locationSize;Xe++)w(fe.location+Xe,he/fe.locationSize,Le,Y,he*Ie,he/fe.locationSize*Xe*Ie,Ee)}}else if(Q!==void 0){let Y=Q[ne];if(Y!==void 0)switch(Y.length){case 2:i.vertexAttrib2fv(fe.location,Y);break;case 3:i.vertexAttrib3fv(fe.location,Y);break;case 4:i.vertexAttrib4fv(fe.location,Y);break;default:i.vertexAttrib1fv(fe.location,Y)}}}}E()}function b(){q();for(let I in o){let O=o[I];for(let G in O){let j=O[G];for(let X in j)g(j[X].object),delete j[X];delete O[G]}delete o[I]}}function _(I){if(o[I.id]===void 0)return;let O=o[I.id];for(let G in O){let j=O[G];for(let X in j)g(j[X].object),delete j[X];delete O[G]}delete o[I.id]}function k(I){for(let O in o){let G=o[O];if(G[I.id]===void 0)continue;let j=G[I.id];for(let X in j)g(j[X].object),delete j[X];delete G[I.id]}}function q(){ae(),u=!0,c!==l&&(c=l,p(c.object))}function ae(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:q,resetDefaultState:ae,dispose:b,releaseStatesOfGeometry:_,releaseStatesOfProgram:k,initAttributes:x,enableAttribute:A,disableUnusedAttributes:E}}function h0(i,e,t,n){let s=n.isWebGL2,r;function a(u){r=u}function o(u,h){i.drawArrays(r,u,h),t.update(h,r,1)}function l(u,h,f){if(f===0)return;let p,g;if(s)p=i,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,u,h,f),t.update(h,r,f)}function c(u,h,f){if(f===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f;g++)this.render(u[g],h[g]);else{p.multiDrawArraysWEBGL(r,u,0,h,0,f);let g=0;for(let y=0;y<f;y++)g+=h[y];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function f0(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,A=a||e.has("OES_texture_float"),P=x&&A,E=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:A,floatVertexTextures:P,maxSamples:E}}function d0(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Gt,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||n!==0||s;return s=f,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){let g=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let v=r?0:n,x=v*4,A=d.clippingState||null;l.value=A,A=u(g,f,x,p);for(let P=0;P!==x;++P)A[P]=t[P];d.clippingState=A,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,g){let y=h!==null?h.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let d=p+y*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,A=p;x!==y;++x,A+=4)a.copy(h[x]).applyMatrix4(v,o),a.normal.toArray(m,A),m[A+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function p0(i){let e=new WeakMap;function t(a,o){return o===La?a.mapping=Oi:o===Ia&&(a.mapping=Ui),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===La||o===Ia)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Ba(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Vi=class extends yr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Li=4,lc=[.125,.215,.35,.446,.526,.582],ni=20,va=new Vi,cc=new pe,Ma=null,ba=0,Sa=0,ei=(1+Math.sqrt(5))/2,Ri=1/ei,uc=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,ei,Ri),new L(0,ei,-Ri),new L(Ri,0,ei),new L(-Ri,0,ei),new L(ei,Ri,0),new L(-ei,Ri,0)],Gi=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Ma=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Sa=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ma,ba,Sa),e.scissorTest=!1,Js(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Oi||e.mapping===Ui?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ma=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Sa=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:us,format:Yt,colorSpace:gt,depthBuffer:!1},s=hc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hc(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=m0(r)),this._blurMaterial=g0(r,e,t)}return s}_compileMaterial(e){let t=new at(this._lodPlanes[0],e);this._renderer.compile(t,va)}_sceneToCubeUV(e,t,n,s){let o=new pt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(cc),u.toneMapping=Bn,u.autoClear=!1;let p=new qt({name:"PMREM.Background",side:mt,depthWrite:!1,depthTest:!1}),g=new at(new ds,p),y=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(cc),y=!0);for(let d=0;d<6;d++){let v=d%3;v===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):v===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));let x=this._cubeSize;Js(s,v*x,d>2?x:0,x,x),u.setRenderTarget(s),y&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Oi||e.mapping===Ui;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=dc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new at(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Js(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,va)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=uc[(s-1)%uc.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new at(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ni-1),y=r/g,m=isFinite(r)?1+Math.floor(u*y):ni;m>ni&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ni}`);let d=[],v=0;for(let w=0;w<ni;++w){let z=w/y,b=Math.exp(-z*z/2);d.push(b),w===0?v+=b:w<m&&(v+=2*b)}for(let w=0;w<d.length;w++)d[w]=d[w]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;let A=this._sizeLods[s],P=3*A*(s>x-Li?s-x+Li:0),E=4*(this._cubeSize-A);Js(t,P,E,3*A,2*A),l.setRenderTarget(t),l.render(h,va)}};function m0(i){let e=[],t=[],n=[],s=i,r=i-Li+1+lc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Li?l=lc[a-i+Li-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,y=3,m=2,d=1,v=new Float32Array(y*g*p),x=new Float32Array(m*g*p),A=new Float32Array(d*g*p);for(let E=0;E<p;E++){let w=E%3*2/3-1,z=E>2?0:-1,b=[w,z,0,w+2/3,z,0,w+2/3,z+1,0,w,z,0,w+2/3,z+1,0,w,z+1,0];v.set(b,y*g*E),x.set(f,m*g*E);let _=[E,E,E,E,E,E];A.set(_,d*g*E)}let P=new ft;P.setAttribute("position",new Ye(v,y)),P.setAttribute("uv",new Ye(x,m)),P.setAttribute("faceIndex",new Ye(A,d)),e.push(P),s>Li&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function hc(i,e,t){let n=new An(i,e,t);return n.texture.mapping=Ur,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Js(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function g0(i,e,t){let n=new Float32Array(ni),s=new L(0,1,0);return new Tn({name:"SphericalGaussianBlur",defines:{n:ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vo(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function fc(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vo(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function dc(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function vo(){return`

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
	`}function y0(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===La||l===Ia,u=l===Oi||l===Ui;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Gi(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{let h=o.image;if(c&&h&&h.height>0||u&&h&&s(h)){t===null&&(t=new Gi(i));let f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function x0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function v0(i,e,t,n){let s={},r=new WeakMap;function a(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let y=f.morphAttributes[g];for(let m=0,d=y.length;m<d;m++)e.remove(y[m])}f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(h){let f=h.attributes;for(let g in f)e.update(f[g],i.ARRAY_BUFFER);let p=h.morphAttributes;for(let g in p){let y=p[g];for(let m=0,d=y.length;m<d;m++)e.update(y[m],i.ARRAY_BUFFER)}}function c(h){let f=[],p=h.index,g=h.attributes.position,y=0;if(p!==null){let v=p.array;y=p.version;for(let x=0,A=v.length;x<A;x+=3){let P=v[x+0],E=v[x+1],w=v[x+2];f.push(P,E,E,w,w,P)}}else if(g!==void 0){let v=g.array;y=g.version;for(let x=0,A=v.length/3-1;x<A;x+=3){let P=x+0,E=x+1,w=x+2;f.push(P,E,E,w,w,P)}}else return;let m=new(uu(f)?gr:mr)(f,1);m.version=y;let d=r.get(h);d&&e.remove(d),r.set(h,m)}function u(h){let f=r.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function M0(i,e,t,n){let s=n.isWebGL2,r;function a(p){r=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function u(p,g){i.drawElements(r,g,o,p*l),t.update(g,r,1)}function h(p,g,y){if(y===0)return;let m,d;if(s)m=i,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,g,o,p*l,y),t.update(g,r,y)}function f(p,g,y){if(y===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<y;d++)this.render(p[d]/l,g[d]);else{m.multiDrawElementsWEBGL(r,g,0,o,p,0,y);let d=0;for(let v=0;v<y;v++)d+=g[v];t.update(d,r,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function b0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function S0(i,e){return i[0]-e[0]}function A0(i,e){return Math.abs(e[1])-Math.abs(i[1])}function w0(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new et,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){let f=c.morphTargetInfluences;if(e.isWebGL2===!0){let p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0,y=r.get(u);if(y===void 0||y.count!==g){let I=function(){q.dispose(),r.delete(u),u.removeEventListener("dispose",I)};y!==void 0&&y.texture.dispose();let v=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,P=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],w=u.morphAttributes.color||[],z=0;v===!0&&(z=1),x===!0&&(z=2),A===!0&&(z=3);let b=u.attributes.position.count*z,_=1;b>e.maxTextureSize&&(_=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let k=new Float32Array(b*_*4*g),q=new dr(k,b,_,g);q.type=bn,q.needsUpdate=!0;let ae=z*4;for(let O=0;O<g;O++){let G=P[O],j=E[O],X=w[O],W=b*_*4*O;for(let Q=0;Q<G.count;Q++){let ne=Q*ae;v===!0&&(a.fromBufferAttribute(G,Q),k[W+ne+0]=a.x,k[W+ne+1]=a.y,k[W+ne+2]=a.z,k[W+ne+3]=0),x===!0&&(a.fromBufferAttribute(j,Q),k[W+ne+4]=a.x,k[W+ne+5]=a.y,k[W+ne+6]=a.z,k[W+ne+7]=0),A===!0&&(a.fromBufferAttribute(X,Q),k[W+ne+8]=a.x,k[W+ne+9]=a.y,k[W+ne+10]=a.z,k[W+ne+11]=X.itemSize===4?a.w:1)}}y={count:g,texture:q,size:new Ae(b,_)},r.set(u,y),u.addEventListener("dispose",I)}let m=0;for(let v=0;v<f.length;v++)m+=f[v];let d=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(i,"morphTargetBaseInfluence",d),h.getUniforms().setValue(i,"morphTargetInfluences",f),h.getUniforms().setValue(i,"morphTargetsTexture",y.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",y.size)}else{let p=f===void 0?0:f.length,g=n[u.id];if(g===void 0||g.length!==p){g=[];for(let x=0;x<p;x++)g[x]=[x,0];n[u.id]=g}for(let x=0;x<p;x++){let A=g[x];A[0]=x,A[1]=f[x]}g.sort(A0);for(let x=0;x<8;x++)x<p&&g[x][1]?(o[x][0]=g[x][0],o[x][1]=g[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(S0);let y=u.morphAttributes.position,m=u.morphAttributes.normal,d=0;for(let x=0;x<8;x++){let A=o[x],P=A[0],E=A[1];P!==Number.MAX_SAFE_INTEGER&&E?(y&&u.getAttribute("morphTarget"+x)!==y[P]&&u.setAttribute("morphTarget"+x,y[P]),m&&u.getAttribute("morphNormal"+x)!==m[P]&&u.setAttribute("morphNormal"+x,m[P]),s[x]=E,d+=E):(y&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),m&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),s[x]=0)}let v=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(i,"morphTargetBaseInfluence",v),h.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function T0(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var vr=class extends Tt{constructor(e,t,n,s,r,a,o,l,c,u){if(u=u!==void 0?u:si,u!==si&&u!==Fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===si&&(n=On),n===void 0&&u===Fi&&(n=ii),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:dt,this.minFilter=l!==void 0?l:dt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},pu=new Tt,mu=new vr(1,1);mu.compareFunction=lu;var gu=new dr,yu=new Ua,xu=new xr,pc=[],mc=[],gc=new Float32Array(16),yc=new Float32Array(9),xc=new Float32Array(4);function Zi(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=pc[s];if(r===void 0&&(r=new Float32Array(s),pc[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Hr(i,e){let t=mc[e];t===void 0&&(t=new Int32Array(e),mc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function E0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function _0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2fv(this.addr,e),xt(t,e)}}function R0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;i.uniform3fv(this.addr,e),xt(t,e)}}function P0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4fv(this.addr,e),xt(t,e)}}function C0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(yt(t,n))return;xc.set(n),i.uniformMatrix2fv(this.addr,!1,xc),xt(t,n)}}function L0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(yt(t,n))return;yc.set(n),i.uniformMatrix3fv(this.addr,!1,yc),xt(t,n)}}function I0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(yt(t,n))return;gc.set(n),i.uniformMatrix4fv(this.addr,!1,gc),xt(t,n)}}function D0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function N0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2iv(this.addr,e),xt(t,e)}}function z0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;i.uniform3iv(this.addr,e),xt(t,e)}}function O0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4iv(this.addr,e),xt(t,e)}}function U0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function F0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2uiv(this.addr,e),xt(t,e)}}function B0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;i.uniform3uiv(this.addr,e),xt(t,e)}}function H0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4uiv(this.addr,e),xt(t,e)}}function k0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?mu:pu;t.setTexture2D(e||r,s)}function V0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||yu,s)}function G0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||xu,s)}function W0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||gu,s)}function X0(i){switch(i){case 5126:return E0;case 35664:return _0;case 35665:return R0;case 35666:return P0;case 35674:return C0;case 35675:return L0;case 35676:return I0;case 5124:case 35670:return D0;case 35667:case 35671:return N0;case 35668:case 35672:return z0;case 35669:case 35673:return O0;case 5125:return U0;case 36294:return F0;case 36295:return B0;case 36296:return H0;case 35678:case 36198:case 36298:case 36306:case 35682:return k0;case 35679:case 36299:case 36307:return V0;case 35680:case 36300:case 36308:case 36293:return G0;case 36289:case 36303:case 36311:case 36292:return W0}}function q0(i,e){i.uniform1fv(this.addr,e)}function j0(i,e){let t=Zi(e,this.size,2);i.uniform2fv(this.addr,t)}function Z0(i,e){let t=Zi(e,this.size,3);i.uniform3fv(this.addr,t)}function Y0(i,e){let t=Zi(e,this.size,4);i.uniform4fv(this.addr,t)}function K0(i,e){let t=Zi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function J0(i,e){let t=Zi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Q0(i,e){let t=Zi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function $0(i,e){i.uniform1iv(this.addr,e)}function em(i,e){i.uniform2iv(this.addr,e)}function tm(i,e){i.uniform3iv(this.addr,e)}function nm(i,e){i.uniform4iv(this.addr,e)}function im(i,e){i.uniform1uiv(this.addr,e)}function sm(i,e){i.uniform2uiv(this.addr,e)}function rm(i,e){i.uniform3uiv(this.addr,e)}function am(i,e){i.uniform4uiv(this.addr,e)}function om(i,e,t){let n=this.cache,s=e.length,r=Hr(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),xt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||pu,r[a])}function lm(i,e,t){let n=this.cache,s=e.length,r=Hr(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),xt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||yu,r[a])}function cm(i,e,t){let n=this.cache,s=e.length,r=Hr(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),xt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||xu,r[a])}function um(i,e,t){let n=this.cache,s=e.length,r=Hr(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),xt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||gu,r[a])}function hm(i){switch(i){case 5126:return q0;case 35664:return j0;case 35665:return Z0;case 35666:return Y0;case 35674:return K0;case 35675:return J0;case 35676:return Q0;case 5124:case 35670:return $0;case 35667:case 35671:return em;case 35668:case 35672:return tm;case 35669:case 35673:return nm;case 5125:return im;case 36294:return sm;case 36295:return rm;case 36296:return am;case 35678:case 36198:case 36298:case 36306:case 35682:return om;case 35679:case 36299:case 36307:return lm;case 35680:case 36300:case 36308:case 36293:return cm;case 36289:case 36303:case 36311:case 36292:return um}}var Ha=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=X0(t.type)}},ka=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hm(t.type)}},Va=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Aa=/(\w+)(\])?(\[|\.)?/g;function vc(i,e){i.seq.push(e),i.map[e.id]=e}function fm(i,e,t){let n=i.name,s=n.length;for(Aa.lastIndex=0;;){let r=Aa.exec(n),a=Aa.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){vc(t,c===void 0?new Ha(o,i,e):new ka(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Va(o),vc(t,h)),t=h}}}var zi=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);fm(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Mc(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var dm=37297,pm=0;function mm(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function gm(i){let e=Je.getPrimaries(Je.workingColorSpace),t=Je.getPrimaries(i),n;switch(e===t?n="":e===lr&&t===or?n="LinearDisplayP3ToLinearSRGB":e===or&&t===lr&&(n="LinearSRGBToLinearDisplayP3"),i){case gt:case Br:return[n,"LinearTransferOETF"];case $e:case yo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function bc(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+mm(i.getShaderSource(e),a)}else return s}function ym(i,e){let t=gm(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function xm(i,e){let t;switch(e){case Sh:t="Linear";break;case Ah:t="Reinhard";break;case wh:t="OptimizedCineon";break;case po:t="ACESFilmic";break;case Eh:t="AgX";break;case Th:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function vm(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ii).join(`
`)}function Mm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ii).join(`
`)}function bm(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Sm(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ii(i){return i!==""}function Sc(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ac(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Am=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ga(i){return i.replace(Am,Tm)}var wm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Tm(i,e){let t=Ue[e];if(t===void 0){let n=wm.get(e);if(n!==void 0)t=Ue[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ga(t)}var Em=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wc(i){return i.replace(Em,_m)}function _m(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Tc(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Rm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Yc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===fo?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Mn&&(e="SHADOWMAP_TYPE_VSM"),e}function Pm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Oi:case Ui:e="ENVMAP_TYPE_CUBE";break;case Ur:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Cm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ui:e="ENVMAP_MODE_REFRACTION";break}return e}function Lm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Kc:e="ENVMAP_BLENDING_MULTIPLY";break;case Mh:e="ENVMAP_BLENDING_MIX";break;case bh:e="ENVMAP_BLENDING_ADD";break}return e}function Im(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Dm(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Rm(t),c=Pm(t),u=Cm(t),h=Lm(t),f=Im(t),p=t.isWebGL2?"":vm(t),g=Mm(t),y=bm(r),m=s.createProgram(),d,v,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Ii).join(`
`),d.length>0&&(d+=`
`),v=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Ii).join(`
`),v.length>0&&(v+=`
`)):(d=[Tc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ii).join(`
`),v=[p,Tc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bn?"#define TONE_MAPPING":"",t.toneMapping!==Bn?Ue.tonemapping_pars_fragment:"",t.toneMapping!==Bn?xm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,ym("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ii).join(`
`)),a=Ga(a),a=Sc(a,t),a=Ac(a,t),o=Ga(o),o=Sc(o,t),o=Ac(o,t),a=wc(a),o=wc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Wl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let A=x+d+a,P=x+v+o,E=Mc(s,s.VERTEX_SHADER,A),w=Mc(s,s.FRAGMENT_SHADER,P);s.attachShader(m,E),s.attachShader(m,w),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function z(q){if(i.debug.checkShaderErrors){let ae=s.getProgramInfoLog(m).trim(),I=s.getShaderInfoLog(E).trim(),O=s.getShaderInfoLog(w).trim(),G=!0,j=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,E,w);else{let X=bc(s,E,"vertex"),W=bc(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+ae+`
`+X+`
`+W)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(I===""||O==="")&&(j=!1);j&&(q.diagnostics={runnable:G,programLog:ae,vertexShader:{log:I,prefix:d},fragmentShader:{log:O,prefix:v}})}s.deleteShader(E),s.deleteShader(w),b=new zi(s,m),_=Sm(s,m)}let b;this.getUniforms=function(){return b===void 0&&z(this),b};let _;this.getAttributes=function(){return _===void 0&&z(this),_};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(m,dm)),k},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=pm++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=w,this}var Nm=0,Wa=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Xa(e),t.set(e,n)),n}},Xa=class{constructor(e){this.id=Nm++,this.code=e,this.usedTimes=0}};function zm(i,e,t,n,s,r,a){let o=new fs,l=new Wa,c=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(b){return b===0?"uv":`uv${b}`}function m(b,_,k,q,ae){let I=q.fog,O=ae.geometry,G=b.isMeshStandardMaterial?q.environment:null,j=(b.isMeshStandardMaterial?t:e).get(b.envMap||G),X=j&&j.mapping===Ur?j.image.height:null,W=g[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));let Q=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ne=Q!==void 0?Q.length:0,fe=0;O.morphAttributes.position!==void 0&&(fe=1),O.morphAttributes.normal!==void 0&&(fe=2),O.morphAttributes.color!==void 0&&(fe=3);let V,Y,he,Me;if(W){let Lt=on[W];V=Lt.vertexShader,Y=Lt.fragmentShader}else V=b.vertexShader,Y=b.fragmentShader,l.update(b),he=l.getVertexShaderID(b),Me=l.getFragmentShaderID(b);let xe=i.getRenderTarget(),Le=ae.isInstancedMesh===!0,Ie=ae.isBatchedMesh===!0,Ee=!!b.map,Xe=!!b.matcap,N=!!j,Mt=!!b.aoMap,we=!!b.lightMap,Pe=!!b.bumpMap,ge=!!b.normalMap,it=!!b.displacementMap,De=!!b.emissiveMap,T=!!b.metalnessMap,M=!!b.roughnessMap,U=b.anisotropy>0,te=b.clearcoat>0,J=b.iridescence>0,ee=b.sheen>0,ye=b.transmission>0,ue=U&&!!b.anisotropyMap,me=te&&!!b.clearcoatMap,_e=te&&!!b.clearcoatNormalMap,ze=te&&!!b.clearcoatRoughnessMap,K=J&&!!b.iridescenceMap,qe=J&&!!b.iridescenceThicknessMap,R=ee&&!!b.sheenColorMap,Z=ee&&!!b.sheenRoughnessMap,le=!!b.specularMap,ie=!!b.specularColorMap,ve=!!b.specularIntensityMap,He=ye&&!!b.transmissionMap,je=ye&&!!b.thicknessMap,Fe=!!b.gradientMap,oe=!!b.alphaMap,C=b.alphaTest>0,se=!!b.alphaHash,re=!!b.extensions,Te=!!O.attributes.uv1,be=!!O.attributes.uv2,Ze=!!O.attributes.uv3,Ke=Bn;return b.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Ke=i.toneMapping),{isWebGL2:u,shaderID:W,shaderType:b.type,shaderName:b.name,vertexShader:V,fragmentShader:Y,defines:b.defines,customVertexShaderID:he,customFragmentShaderID:Me,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Ie,instancing:Le,instancingColor:Le&&ae.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:xe===null?i.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:gt,map:Ee,matcap:Xe,envMap:N,envMapMode:N&&j.mapping,envMapCubeUVHeight:X,aoMap:Mt,lightMap:we,bumpMap:Pe,normalMap:ge,displacementMap:f&&it,emissiveMap:De,normalMapObjectSpace:ge&&b.normalMapType===Bh,normalMapTangentSpace:ge&&b.normalMapType===ou,metalnessMap:T,roughnessMap:M,anisotropy:U,anisotropyMap:ue,clearcoat:te,clearcoatMap:me,clearcoatNormalMap:_e,clearcoatRoughnessMap:ze,iridescence:J,iridescenceMap:K,iridescenceThicknessMap:qe,sheen:ee,sheenColorMap:R,sheenRoughnessMap:Z,specularMap:le,specularColorMap:ie,specularIntensityMap:ve,transmission:ye,transmissionMap:He,thicknessMap:je,gradientMap:Fe,opaque:b.transparent===!1&&b.blending===Di,alphaMap:oe,alphaTest:C,alphaHash:se,combine:b.combine,mapUv:Ee&&y(b.map.channel),aoMapUv:Mt&&y(b.aoMap.channel),lightMapUv:we&&y(b.lightMap.channel),bumpMapUv:Pe&&y(b.bumpMap.channel),normalMapUv:ge&&y(b.normalMap.channel),displacementMapUv:it&&y(b.displacementMap.channel),emissiveMapUv:De&&y(b.emissiveMap.channel),metalnessMapUv:T&&y(b.metalnessMap.channel),roughnessMapUv:M&&y(b.roughnessMap.channel),anisotropyMapUv:ue&&y(b.anisotropyMap.channel),clearcoatMapUv:me&&y(b.clearcoatMap.channel),clearcoatNormalMapUv:_e&&y(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&y(b.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&y(b.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&y(b.iridescenceThicknessMap.channel),sheenColorMapUv:R&&y(b.sheenColorMap.channel),sheenRoughnessMapUv:Z&&y(b.sheenRoughnessMap.channel),specularMapUv:le&&y(b.specularMap.channel),specularColorMapUv:ie&&y(b.specularColorMap.channel),specularIntensityMapUv:ve&&y(b.specularIntensityMap.channel),transmissionMapUv:He&&y(b.transmissionMap.channel),thicknessMapUv:je&&y(b.thicknessMap.channel),alphaMapUv:oe&&y(b.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ge||U),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Te,vertexUv2s:be,vertexUv3s:Ze,pointsUvs:ae.isPoints===!0&&!!O.attributes.uv&&(Ee||oe),fog:!!I,useFog:b.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:ae.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:fe,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ke,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ee&&b.map.isVideoTexture===!0&&Je.getTransfer(b.map.colorSpace)===st,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Pt,flipSided:b.side===mt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:re&&b.extensions.derivatives===!0,extensionFragDepth:re&&b.extensions.fragDepth===!0,extensionDrawBuffers:re&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:re&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:re&&b.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function d(b){let _=[];if(b.shaderID?_.push(b.shaderID):(_.push(b.customVertexShaderID),_.push(b.customFragmentShaderID)),b.defines!==void 0)for(let k in b.defines)_.push(k),_.push(b.defines[k]);return b.isRawShaderMaterial===!1&&(v(_,b),x(_,b),_.push(i.outputColorSpace)),_.push(b.customProgramCacheKey),_.join()}function v(b,_){b.push(_.precision),b.push(_.outputColorSpace),b.push(_.envMapMode),b.push(_.envMapCubeUVHeight),b.push(_.mapUv),b.push(_.alphaMapUv),b.push(_.lightMapUv),b.push(_.aoMapUv),b.push(_.bumpMapUv),b.push(_.normalMapUv),b.push(_.displacementMapUv),b.push(_.emissiveMapUv),b.push(_.metalnessMapUv),b.push(_.roughnessMapUv),b.push(_.anisotropyMapUv),b.push(_.clearcoatMapUv),b.push(_.clearcoatNormalMapUv),b.push(_.clearcoatRoughnessMapUv),b.push(_.iridescenceMapUv),b.push(_.iridescenceThicknessMapUv),b.push(_.sheenColorMapUv),b.push(_.sheenRoughnessMapUv),b.push(_.specularMapUv),b.push(_.specularColorMapUv),b.push(_.specularIntensityMapUv),b.push(_.transmissionMapUv),b.push(_.thicknessMapUv),b.push(_.combine),b.push(_.fogExp2),b.push(_.sizeAttenuation),b.push(_.morphTargetsCount),b.push(_.morphAttributeCount),b.push(_.numDirLights),b.push(_.numPointLights),b.push(_.numSpotLights),b.push(_.numSpotLightMaps),b.push(_.numHemiLights),b.push(_.numRectAreaLights),b.push(_.numDirLightShadows),b.push(_.numPointLightShadows),b.push(_.numSpotLightShadows),b.push(_.numSpotLightShadowsWithMaps),b.push(_.numLightProbes),b.push(_.shadowMapType),b.push(_.toneMapping),b.push(_.numClippingPlanes),b.push(_.numClipIntersection),b.push(_.depthPacking)}function x(b,_){o.disableAll(),_.isWebGL2&&o.enable(0),_.supportsVertexTextures&&o.enable(1),_.instancing&&o.enable(2),_.instancingColor&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),b.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.skinning&&o.enable(4),_.morphTargets&&o.enable(5),_.morphNormals&&o.enable(6),_.morphColors&&o.enable(7),_.premultipliedAlpha&&o.enable(8),_.shadowMapEnabled&&o.enable(9),_.useLegacyLights&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),b.push(o.mask)}function A(b){let _=g[b.type],k;if(_){let q=on[_];k=wf.clone(q.uniforms)}else k=b.uniforms;return k}function P(b,_){let k;for(let q=0,ae=c.length;q<ae;q++){let I=c[q];if(I.cacheKey===_){k=I,++k.usedTimes;break}}return k===void 0&&(k=new Dm(i,_,b,r),c.push(k)),k}function E(b){if(--b.usedTimes===0){let _=c.indexOf(b);c[_]=c[c.length-1],c.pop(),b.destroy()}}function w(b){l.remove(b)}function z(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:A,acquireProgram:P,releaseProgram:E,releaseShaderCache:w,programs:c,dispose:z}}function Om(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Um(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ec(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function _c(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,f,p,g,y,m){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:y,group:m},i[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=y,d.group=m),e++,d}function o(h,f,p,g,y,m){let d=a(h,f,p,g,y,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(h,f,p,g,y,m){let d=a(h,f,p,g,y,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||Um),n.length>1&&n.sort(f||Ec),s.length>1&&s.sort(f||Ec)}function u(){for(let h=e,f=i.length;h<f;h++){let p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function Fm(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new _c,i.set(n,[a])):s>=r.length?(a=new _c,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Bm(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new pe};break;case"SpotLight":t={position:new L,direction:new L,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":t={color:new pe,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function Hm(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var km=0;function Vm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Gm(i,e){let t=new Bm,n=Hm(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new L);let r=new L,a=new Ge,o=new Ge;function l(u,h){let f=0,p=0,g=0;for(let q=0;q<9;q++)s.probe[q].set(0,0,0);let y=0,m=0,d=0,v=0,x=0,A=0,P=0,E=0,w=0,z=0,b=0;u.sort(Vm);let _=h===!0?Math.PI:1;for(let q=0,ae=u.length;q<ae;q++){let I=u[q],O=I.color,G=I.intensity,j=I.distance,X=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=O.r*G*_,p+=O.g*G*_,g+=O.b*G*_;else if(I.isLightProbe){for(let W=0;W<9;W++)s.probe[W].addScaledVector(I.sh.coefficients[W],G);b++}else if(I.isDirectionalLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity*_),I.castShadow){let Q=I.shadow,ne=n.get(I);ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize=Q.mapSize,s.directionalShadow[y]=ne,s.directionalShadowMap[y]=X,s.directionalShadowMatrix[y]=I.shadow.matrix,A++}s.directional[y]=W,y++}else if(I.isSpotLight){let W=t.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(O).multiplyScalar(G*_),W.distance=j,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,s.spot[d]=W;let Q=I.shadow;if(I.map&&(s.spotLightMap[w]=I.map,w++,Q.updateMatrices(I),I.castShadow&&z++),s.spotLightMatrix[d]=Q.matrix,I.castShadow){let ne=n.get(I);ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize=Q.mapSize,s.spotShadow[d]=ne,s.spotShadowMap[d]=X,E++}d++}else if(I.isRectAreaLight){let W=t.get(I);W.color.copy(O).multiplyScalar(G),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),s.rectArea[v]=W,v++}else if(I.isPointLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity*_),W.distance=I.distance,W.decay=I.decay,I.castShadow){let Q=I.shadow,ne=n.get(I);ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize=Q.mapSize,ne.shadowCameraNear=Q.camera.near,ne.shadowCameraFar=Q.camera.far,s.pointShadow[m]=ne,s.pointShadowMap[m]=X,s.pointShadowMatrix[m]=I.shadow.matrix,P++}s.point[m]=W,m++}else if(I.isHemisphereLight){let W=t.get(I);W.skyColor.copy(I.color).multiplyScalar(G*_),W.groundColor.copy(I.groundColor).multiplyScalar(G*_),s.hemi[x]=W,x++}}v>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ce.LTC_FLOAT_1,s.rectAreaLTC2=ce.LTC_FLOAT_2):(s.rectAreaLTC1=ce.LTC_HALF_1,s.rectAreaLTC2=ce.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ce.LTC_FLOAT_1,s.rectAreaLTC2=ce.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ce.LTC_HALF_1,s.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=p,s.ambient[2]=g;let k=s.hash;(k.directionalLength!==y||k.pointLength!==m||k.spotLength!==d||k.rectAreaLength!==v||k.hemiLength!==x||k.numDirectionalShadows!==A||k.numPointShadows!==P||k.numSpotShadows!==E||k.numSpotMaps!==w||k.numLightProbes!==b)&&(s.directional.length=y,s.spot.length=d,s.rectArea.length=v,s.point.length=m,s.hemi.length=x,s.directionalShadow.length=A,s.directionalShadowMap.length=A,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=E,s.spotShadowMap.length=E,s.directionalShadowMatrix.length=A,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=E+w-z,s.spotLightMap.length=w,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=b,k.directionalLength=y,k.pointLength=m,k.spotLength=d,k.rectAreaLength=v,k.hemiLength=x,k.numDirectionalShadows=A,k.numPointShadows=P,k.numSpotShadows=E,k.numSpotMaps=w,k.numLightProbes=b,s.version=km++)}function c(u,h){let f=0,p=0,g=0,y=0,m=0,d=h.matrixWorldInverse;for(let v=0,x=u.length;v<x;v++){let A=u[v];if(A.isDirectionalLight){let P=s.directional[f];P.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(d),f++}else if(A.isSpotLight){let P=s.spot[g];P.position.setFromMatrixPosition(A.matrixWorld),P.position.applyMatrix4(d),P.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(d),g++}else if(A.isRectAreaLight){let P=s.rectArea[y];P.position.setFromMatrixPosition(A.matrixWorld),P.position.applyMatrix4(d),o.identity(),a.copy(A.matrixWorld),a.premultiply(d),o.extractRotation(a),P.halfWidth.set(A.width*.5,0,0),P.halfHeight.set(0,A.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),y++}else if(A.isPointLight){let P=s.point[p];P.position.setFromMatrixPosition(A.matrixWorld),P.position.applyMatrix4(d),p++}else if(A.isHemisphereLight){let P=s.hemi[m];P.direction.setFromMatrixPosition(A.matrixWorld),P.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:s}}function Rc(i,e){let t=new Gm(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(h){n.push(h)}function o(h){s.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Wm(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),l;return o===void 0?(l=new Rc(i,e),t.set(r,[l])):a>=o.length?(l=new Rc(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var qa=class extends Bt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ja=class extends Bt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Xm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function jm(i,e,t){let n=new ps,s=new Ae,r=new Ae,a=new et,o=new qa({depthPacking:Fh}),l=new ja,c={},u=t.maxTextureSize,h={[cn]:mt,[mt]:cn,[Pt]:Pt},f=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:Xm,fragmentShader:qm}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new ft;g.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new at(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yc;let d=this.type;this.render=function(E,w,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let b=i.getRenderTarget(),_=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),q=i.state;q.setBlending(Fn),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let ae=d!==Mn&&this.type===Mn,I=d===Mn&&this.type!==Mn;for(let O=0,G=E.length;O<G;O++){let j=E[O],X=j.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let W=X.getFrameExtents();if(s.multiply(W),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/W.x),s.x=r.x*W.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/W.y),s.y=r.y*W.y,X.mapSize.y=r.y)),X.map===null||ae===!0||I===!0){let ne=this.type!==Mn?{minFilter:dt,magFilter:dt}:{};X.map!==null&&X.map.dispose(),X.map=new An(s.x,s.y,ne),X.map.texture.name=j.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let Q=X.getViewportCount();for(let ne=0;ne<Q;ne++){let fe=X.getViewport(ne);a.set(r.x*fe.x,r.y*fe.y,r.x*fe.z,r.y*fe.w),q.viewport(a),X.updateMatrices(j,ne),n=X.getFrustum(),A(w,z,X.camera,j,this.type)}X.isPointLightShadow!==!0&&this.type===Mn&&v(X,z),X.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(b,_,k)};function v(E,w){let z=e.update(y);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new An(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(w,null,z,f,y,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(w,null,z,p,y,null)}function x(E,w,z,b){let _=null,k=z.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(k!==void 0)_=k;else if(_=z.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let q=_.uuid,ae=w.uuid,I=c[q];I===void 0&&(I={},c[q]=I);let O=I[ae];O===void 0&&(O=_.clone(),I[ae]=O,w.addEventListener("dispose",P)),_=O}if(_.visible=w.visible,_.wireframe=w.wireframe,b===Mn?_.side=w.shadowSide!==null?w.shadowSide:w.side:_.side=w.shadowSide!==null?w.shadowSide:h[w.side],_.alphaMap=w.alphaMap,_.alphaTest=w.alphaTest,_.map=w.map,_.clipShadows=w.clipShadows,_.clippingPlanes=w.clippingPlanes,_.clipIntersection=w.clipIntersection,_.displacementMap=w.displacementMap,_.displacementScale=w.displacementScale,_.displacementBias=w.displacementBias,_.wireframeLinewidth=w.wireframeLinewidth,_.linewidth=w.linewidth,z.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let q=i.properties.get(_);q.light=z}return _}function A(E,w,z,b,_){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&_===Mn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld);let ae=e.update(E),I=E.material;if(Array.isArray(I)){let O=ae.groups;for(let G=0,j=O.length;G<j;G++){let X=O[G],W=I[X.materialIndex];if(W&&W.visible){let Q=x(E,W,b,_);E.onBeforeShadow(i,E,w,z,ae,Q,X),i.renderBufferDirect(z,null,ae,Q,E,X),E.onAfterShadow(i,E,w,z,ae,Q,X)}}}else if(I.visible){let O=x(E,I,b,_);E.onBeforeShadow(i,E,w,z,ae,O,null),i.renderBufferDirect(z,null,ae,O,E,null),E.onAfterShadow(i,E,w,z,ae,O,null)}}let q=E.children;for(let ae=0,I=q.length;ae<I;ae++)A(q[ae],w,z,b,_)}function P(E){E.target.removeEventListener("dispose",P);for(let z in c){let b=c[z],_=E.target.uuid;_ in b&&(b[_].dispose(),delete b[_])}}}function Zm(i,e,t){let n=t.isWebGL2;function s(){let C=!1,se=new et,re=null,Te=new et(0,0,0,0);return{setMask:function(be){re!==be&&!C&&(i.colorMask(be,be,be,be),re=be)},setLocked:function(be){C=be},setClear:function(be,Ze,Ke,bt,Lt){Lt===!0&&(be*=bt,Ze*=bt,Ke*=bt),se.set(be,Ze,Ke,bt),Te.equals(se)===!1&&(i.clearColor(be,Ze,Ke,bt),Te.copy(se))},reset:function(){C=!1,re=null,Te.set(-1,0,0,0)}}}function r(){let C=!1,se=null,re=null,Te=null;return{setTest:function(be){be?Ie(i.DEPTH_TEST):Ee(i.DEPTH_TEST)},setMask:function(be){se!==be&&!C&&(i.depthMask(be),se=be)},setFunc:function(be){if(re!==be){switch(be){case dh:i.depthFunc(i.NEVER);break;case ph:i.depthFunc(i.ALWAYS);break;case mh:i.depthFunc(i.LESS);break;case sr:i.depthFunc(i.LEQUAL);break;case gh:i.depthFunc(i.EQUAL);break;case yh:i.depthFunc(i.GEQUAL);break;case xh:i.depthFunc(i.GREATER);break;case vh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}re=be}},setLocked:function(be){C=be},setClear:function(be){Te!==be&&(i.clearDepth(be),Te=be)},reset:function(){C=!1,se=null,re=null,Te=null}}}function a(){let C=!1,se=null,re=null,Te=null,be=null,Ze=null,Ke=null,bt=null,Lt=null;return{setTest:function(tt){C||(tt?Ie(i.STENCIL_TEST):Ee(i.STENCIL_TEST))},setMask:function(tt){se!==tt&&!C&&(i.stencilMask(tt),se=tt)},setFunc:function(tt,It,an){(re!==tt||Te!==It||be!==an)&&(i.stencilFunc(tt,It,an),re=tt,Te=It,be=an)},setOp:function(tt,It,an){(Ze!==tt||Ke!==It||bt!==an)&&(i.stencilOp(tt,It,an),Ze=tt,Ke=It,bt=an)},setLocked:function(tt){C=tt},setClear:function(tt){Lt!==tt&&(i.clearStencil(tt),Lt=tt)},reset:function(){C=!1,se=null,re=null,Te=null,be=null,Ze=null,Ke=null,bt=null,Lt=null}}}let o=new s,l=new r,c=new a,u=new WeakMap,h=new WeakMap,f={},p={},g=new WeakMap,y=[],m=null,d=!1,v=null,x=null,A=null,P=null,E=null,w=null,z=null,b=new pe(0,0,0),_=0,k=!1,q=null,ae=null,I=null,O=null,G=null,j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,W=0,Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Q)[1]),X=W>=1):Q.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),X=W>=2);let ne=null,fe={},V=i.getParameter(i.SCISSOR_BOX),Y=i.getParameter(i.VIEWPORT),he=new et().fromArray(V),Me=new et().fromArray(Y);function xe(C,se,re,Te){let be=new Uint8Array(4),Ze=i.createTexture();i.bindTexture(C,Ze),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ke=0;Ke<re;Ke++)n&&(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)?i.texImage3D(se,0,i.RGBA,1,1,Te,0,i.RGBA,i.UNSIGNED_BYTE,be):i.texImage2D(se+Ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,be);return Ze}let Le={};Le[i.TEXTURE_2D]=xe(i.TEXTURE_2D,i.TEXTURE_2D,1),Le[i.TEXTURE_CUBE_MAP]=xe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Le[i.TEXTURE_2D_ARRAY]=xe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Le[i.TEXTURE_3D]=xe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ie(i.DEPTH_TEST),l.setFunc(sr),De(!1),T(ll),Ie(i.CULL_FACE),ge(Fn);function Ie(C){f[C]!==!0&&(i.enable(C),f[C]=!0)}function Ee(C){f[C]!==!1&&(i.disable(C),f[C]=!1)}function Xe(C,se){return p[C]!==se?(i.bindFramebuffer(C,se),p[C]=se,n&&(C===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=se),C===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=se)),!0):!1}function N(C,se){let re=y,Te=!1;if(C)if(re=g.get(se),re===void 0&&(re=[],g.set(se,re)),C.isWebGLMultipleRenderTargets){let be=C.texture;if(re.length!==be.length||re[0]!==i.COLOR_ATTACHMENT0){for(let Ze=0,Ke=be.length;Ze<Ke;Ze++)re[Ze]=i.COLOR_ATTACHMENT0+Ze;re.length=be.length,Te=!0}}else re[0]!==i.COLOR_ATTACHMENT0&&(re[0]=i.COLOR_ATTACHMENT0,Te=!0);else re[0]!==i.BACK&&(re[0]=i.BACK,Te=!0);Te&&(t.isWebGL2?i.drawBuffers(re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(re))}function Mt(C){return m!==C?(i.useProgram(C),m=C,!0):!1}let we={[ti]:i.FUNC_ADD,[Qu]:i.FUNC_SUBTRACT,[$u]:i.FUNC_REVERSE_SUBTRACT};if(n)we[fl]=i.MIN,we[dl]=i.MAX;else{let C=e.get("EXT_blend_minmax");C!==null&&(we[fl]=C.MIN_EXT,we[dl]=C.MAX_EXT)}let Pe={[eh]:i.ZERO,[th]:i.ONE,[nh]:i.SRC_COLOR,[Pa]:i.SRC_ALPHA,[lh]:i.SRC_ALPHA_SATURATE,[ah]:i.DST_COLOR,[sh]:i.DST_ALPHA,[ih]:i.ONE_MINUS_SRC_COLOR,[Ca]:i.ONE_MINUS_SRC_ALPHA,[oh]:i.ONE_MINUS_DST_COLOR,[rh]:i.ONE_MINUS_DST_ALPHA,[ch]:i.CONSTANT_COLOR,[uh]:i.ONE_MINUS_CONSTANT_COLOR,[hh]:i.CONSTANT_ALPHA,[fh]:i.ONE_MINUS_CONSTANT_ALPHA};function ge(C,se,re,Te,be,Ze,Ke,bt,Lt,tt){if(C===Fn){d===!0&&(Ee(i.BLEND),d=!1);return}if(d===!1&&(Ie(i.BLEND),d=!0),C!==Ju){if(C!==v||tt!==k){if((x!==ti||E!==ti)&&(i.blendEquation(i.FUNC_ADD),x=ti,E=ti),tt)switch(C){case Di:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cl:i.blendFunc(i.ONE,i.ONE);break;case ul:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ul:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}A=null,P=null,w=null,z=null,b.set(0,0,0),_=0,v=C,k=tt}return}be=be||se,Ze=Ze||re,Ke=Ke||Te,(se!==x||be!==E)&&(i.blendEquationSeparate(we[se],we[be]),x=se,E=be),(re!==A||Te!==P||Ze!==w||Ke!==z)&&(i.blendFuncSeparate(Pe[re],Pe[Te],Pe[Ze],Pe[Ke]),A=re,P=Te,w=Ze,z=Ke),(bt.equals(b)===!1||Lt!==_)&&(i.blendColor(bt.r,bt.g,bt.b,Lt),b.copy(bt),_=Lt),v=C,k=!1}function it(C,se){C.side===Pt?Ee(i.CULL_FACE):Ie(i.CULL_FACE);let re=C.side===mt;se&&(re=!re),De(re),C.blending===Di&&C.transparent===!1?ge(Fn):ge(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),o.setMask(C.colorWrite);let Te=C.stencilWrite;c.setTest(Te),Te&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),U(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Ie(i.SAMPLE_ALPHA_TO_COVERAGE):Ee(i.SAMPLE_ALPHA_TO_COVERAGE)}function De(C){q!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),q=C)}function T(C){C!==Yu?(Ie(i.CULL_FACE),C!==ae&&(C===ll?i.cullFace(i.BACK):C===Ku?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ee(i.CULL_FACE),ae=C}function M(C){C!==I&&(X&&i.lineWidth(C),I=C)}function U(C,se,re){C?(Ie(i.POLYGON_OFFSET_FILL),(O!==se||G!==re)&&(i.polygonOffset(se,re),O=se,G=re)):Ee(i.POLYGON_OFFSET_FILL)}function te(C){C?Ie(i.SCISSOR_TEST):Ee(i.SCISSOR_TEST)}function J(C){C===void 0&&(C=i.TEXTURE0+j-1),ne!==C&&(i.activeTexture(C),ne=C)}function ee(C,se,re){re===void 0&&(ne===null?re=i.TEXTURE0+j-1:re=ne);let Te=fe[re];Te===void 0&&(Te={type:void 0,texture:void 0},fe[re]=Te),(Te.type!==C||Te.texture!==se)&&(ne!==re&&(i.activeTexture(re),ne=re),i.bindTexture(C,se||Le[C]),Te.type=C,Te.texture=se)}function ye(){let C=fe[ne];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function ue(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function me(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function _e(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ze(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function K(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function qe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function R(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Z(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function le(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ie(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ve(C){he.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),he.copy(C))}function He(C){Me.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),Me.copy(C))}function je(C,se){let re=h.get(se);re===void 0&&(re=new WeakMap,h.set(se,re));let Te=re.get(C);Te===void 0&&(Te=i.getUniformBlockIndex(se,C.name),re.set(C,Te))}function Fe(C,se){let Te=h.get(se).get(C);u.get(se)!==Te&&(i.uniformBlockBinding(se,Te,C.__bindingPointIndex),u.set(se,Te))}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},ne=null,fe={},p={},g=new WeakMap,y=[],m=null,d=!1,v=null,x=null,A=null,P=null,E=null,w=null,z=null,b=new pe(0,0,0),_=0,k=!1,q=null,ae=null,I=null,O=null,G=null,he.set(0,0,i.canvas.width,i.canvas.height),Me.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ie,disable:Ee,bindFramebuffer:Xe,drawBuffers:N,useProgram:Mt,setBlending:ge,setMaterial:it,setFlipSided:De,setCullFace:T,setLineWidth:M,setPolygonOffset:U,setScissorTest:te,activeTexture:J,bindTexture:ee,unbindTexture:ye,compressedTexImage2D:ue,compressedTexImage3D:me,texImage2D:le,texImage3D:ie,updateUBOMapping:je,uniformBlockBinding:Fe,texStorage2D:R,texStorage3D:Z,texSubImage2D:_e,texSubImage3D:ze,compressedTexSubImage2D:K,compressedTexSubImage3D:qe,scissor:ve,viewport:He,reset:oe}}function Ym(i,e,t,n,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,h,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,M){return p?new OffscreenCanvas(T,M):hs("canvas")}function y(T,M,U,te){let J=1;if((T.width>te||T.height>te)&&(J=te/Math.max(T.width,T.height)),J<1||M===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){let ee=M?ur:Math.floor,ye=ee(J*T.width),ue=ee(J*T.height);h===void 0&&(h=g(ye,ue));let me=U?g(ye,ue):h;return me.width=ye,me.height=ue,me.getContext("2d").drawImage(T,0,0,ye,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+ye+"x"+ue+")."),me}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function m(T){return za(T.width)&&za(T.height)}function d(T){return o?!1:T.wrapS!==Wt||T.wrapT!==Wt||T.minFilter!==dt&&T.minFilter!==zt}function v(T,M){return T.generateMipmaps&&M&&T.minFilter!==dt&&T.minFilter!==zt}function x(T){i.generateMipmap(T)}function A(T,M,U,te,J=!1){if(o===!1)return M;if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ee=M;if(M===i.RED&&(U===i.FLOAT&&(ee=i.R32F),U===i.HALF_FLOAT&&(ee=i.R16F),U===i.UNSIGNED_BYTE&&(ee=i.R8)),M===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(ee=i.R8UI),U===i.UNSIGNED_SHORT&&(ee=i.R16UI),U===i.UNSIGNED_INT&&(ee=i.R32UI),U===i.BYTE&&(ee=i.R8I),U===i.SHORT&&(ee=i.R16I),U===i.INT&&(ee=i.R32I)),M===i.RG&&(U===i.FLOAT&&(ee=i.RG32F),U===i.HALF_FLOAT&&(ee=i.RG16F),U===i.UNSIGNED_BYTE&&(ee=i.RG8)),M===i.RGBA){let ye=J?ar:Je.getTransfer(te);U===i.FLOAT&&(ee=i.RGBA32F),U===i.HALF_FLOAT&&(ee=i.RGBA16F),U===i.UNSIGNED_BYTE&&(ee=ye===st?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function P(T,M,U){return v(T,U)===!0||T.isFramebufferTexture&&T.minFilter!==dt&&T.minFilter!==zt?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function E(T){return T===dt||T===rr||T===ss?i.NEAREST:i.LINEAR}function w(T){let M=T.target;M.removeEventListener("dispose",w),b(M),M.isVideoTexture&&u.delete(M)}function z(T){let M=T.target;M.removeEventListener("dispose",z),k(M)}function b(T){let M=n.get(T);if(M.__webglInit===void 0)return;let U=T.source,te=f.get(U);if(te){let J=te[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&_(T),Object.keys(te).length===0&&f.delete(U)}n.remove(T)}function _(T){let M=n.get(T);i.deleteTexture(M.__webglTexture);let U=T.source,te=f.get(U);delete te[M.__cacheKey],a.memory.textures--}function k(T){let M=T.texture,U=n.get(T),te=n.get(M);if(te.__webglTexture!==void 0&&(i.deleteTexture(te.__webglTexture),a.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(U.__webglFramebuffer[J]))for(let ee=0;ee<U.__webglFramebuffer[J].length;ee++)i.deleteFramebuffer(U.__webglFramebuffer[J][ee]);else i.deleteFramebuffer(U.__webglFramebuffer[J]);U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer[J])}else{if(Array.isArray(U.__webglFramebuffer))for(let J=0;J<U.__webglFramebuffer.length;J++)i.deleteFramebuffer(U.__webglFramebuffer[J]);else i.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&i.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let J=0;J<U.__webglColorRenderbuffer.length;J++)U.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(U.__webglColorRenderbuffer[J]);U.__webglDepthRenderbuffer&&i.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let J=0,ee=M.length;J<ee;J++){let ye=n.get(M[J]);ye.__webglTexture&&(i.deleteTexture(ye.__webglTexture),a.memory.textures--),n.remove(M[J])}n.remove(M),n.remove(T)}let q=0;function ae(){q=0}function I(){let T=q;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),q+=1,T}function O(T){let M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function G(T,M){let U=n.get(T);if(T.isVideoTexture&&it(T),T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){let te=T.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(U,T,M);return}}t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+M)}function j(T,M){let U=n.get(T);if(T.version>0&&U.__version!==T.version){he(U,T,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+M)}function X(T,M){let U=n.get(T);if(T.version>0&&U.__version!==T.version){he(U,T,M);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+M)}function W(T,M){let U=n.get(T);if(T.version>0&&U.__version!==T.version){Me(U,T,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+M)}let Q={[rn]:i.REPEAT,[Wt]:i.CLAMP_TO_EDGE,[cs]:i.MIRRORED_REPEAT},ne={[dt]:i.NEAREST,[rr]:i.NEAREST_MIPMAP_NEAREST,[ss]:i.NEAREST_MIPMAP_LINEAR,[zt]:i.LINEAR,[mo]:i.LINEAR_MIPMAP_NEAREST,[kn]:i.LINEAR_MIPMAP_LINEAR},fe={[Hh]:i.NEVER,[qh]:i.ALWAYS,[kh]:i.LESS,[lu]:i.LEQUAL,[Vh]:i.EQUAL,[Xh]:i.GEQUAL,[Gh]:i.GREATER,[Wh]:i.NOTEQUAL};function V(T,M,U){if(U?(i.texParameteri(T,i.TEXTURE_WRAP_S,Q[M.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Q[M.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Q[M.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ne[M.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ne[M.minFilter])):(i.texParameteri(T,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(T,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==Wt||M.wrapT!==Wt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(T,i.TEXTURE_MAG_FILTER,E(M.magFilter)),i.texParameteri(T,i.TEXTURE_MIN_FILTER,E(M.minFilter)),M.minFilter!==dt&&M.minFilter!==zt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,fe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let te=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===dt||M.minFilter!==ss&&M.minFilter!==kn||M.type===bn&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===us&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(T,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function Y(T,M){let U=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",w));let te=M.source,J=f.get(te);J===void 0&&(J={},f.set(te,J));let ee=O(M);if(ee!==T.__cacheKey){J[ee]===void 0&&(J[ee]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,U=!0),J[ee].usedTimes++;let ye=J[T.__cacheKey];ye!==void 0&&(J[T.__cacheKey].usedTimes--,ye.usedTimes===0&&_(M)),T.__cacheKey=ee,T.__webglTexture=J[ee].texture}return U}function he(T,M,U){let te=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(te=i.TEXTURE_3D);let J=Y(T,M),ee=M.source;t.bindTexture(te,T.__webglTexture,i.TEXTURE0+U);let ye=n.get(ee);if(ee.version!==ye.__version||J===!0){t.activeTexture(i.TEXTURE0+U);let ue=Je.getPrimaries(Je.workingColorSpace),me=M.colorSpace===Kt?null:Je.getPrimaries(M.colorSpace),_e=M.colorSpace===Kt||ue===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let ze=d(M)&&m(M.image)===!1,K=y(M.image,ze,!1,s.maxTextureSize);K=De(M,K);let qe=m(K)||o,R=r.convert(M.format,M.colorSpace),Z=r.convert(M.type),le=A(M.internalFormat,R,Z,M.colorSpace,M.isVideoTexture);V(te,M,qe);let ie,ve=M.mipmaps,He=o&&M.isVideoTexture!==!0&&le!==su,je=ye.__version===void 0||J===!0,Fe=P(M,K,qe);if(M.isDepthTexture)le=i.DEPTH_COMPONENT,o?M.type===bn?le=i.DEPTH_COMPONENT32F:M.type===On?le=i.DEPTH_COMPONENT24:M.type===ii?le=i.DEPTH24_STENCIL8:le=i.DEPTH_COMPONENT16:M.type===bn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===si&&le===i.DEPTH_COMPONENT&&M.type!==go&&M.type!==On&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=On,Z=r.convert(M.type)),M.format===Fi&&le===i.DEPTH_COMPONENT&&(le=i.DEPTH_STENCIL,M.type!==ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=ii,Z=r.convert(M.type))),je&&(He?t.texStorage2D(i.TEXTURE_2D,1,le,K.width,K.height):t.texImage2D(i.TEXTURE_2D,0,le,K.width,K.height,0,R,Z,null));else if(M.isDataTexture)if(ve.length>0&&qe){He&&je&&t.texStorage2D(i.TEXTURE_2D,Fe,le,ve[0].width,ve[0].height);for(let oe=0,C=ve.length;oe<C;oe++)ie=ve[oe],He?t.texSubImage2D(i.TEXTURE_2D,oe,0,0,ie.width,ie.height,R,Z,ie.data):t.texImage2D(i.TEXTURE_2D,oe,le,ie.width,ie.height,0,R,Z,ie.data);M.generateMipmaps=!1}else He?(je&&t.texStorage2D(i.TEXTURE_2D,Fe,le,K.width,K.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,K.width,K.height,R,Z,K.data)):t.texImage2D(i.TEXTURE_2D,0,le,K.width,K.height,0,R,Z,K.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){He&&je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Fe,le,ve[0].width,ve[0].height,K.depth);for(let oe=0,C=ve.length;oe<C;oe++)ie=ve[oe],M.format!==Yt?R!==null?He?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,ie.width,ie.height,K.depth,R,ie.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,oe,le,ie.width,ie.height,K.depth,0,ie.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?t.texSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,ie.width,ie.height,K.depth,R,Z,ie.data):t.texImage3D(i.TEXTURE_2D_ARRAY,oe,le,ie.width,ie.height,K.depth,0,R,Z,ie.data)}else{He&&je&&t.texStorage2D(i.TEXTURE_2D,Fe,le,ve[0].width,ve[0].height);for(let oe=0,C=ve.length;oe<C;oe++)ie=ve[oe],M.format!==Yt?R!==null?He?t.compressedTexSubImage2D(i.TEXTURE_2D,oe,0,0,ie.width,ie.height,R,ie.data):t.compressedTexImage2D(i.TEXTURE_2D,oe,le,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?t.texSubImage2D(i.TEXTURE_2D,oe,0,0,ie.width,ie.height,R,Z,ie.data):t.texImage2D(i.TEXTURE_2D,oe,le,ie.width,ie.height,0,R,Z,ie.data)}else if(M.isDataArrayTexture)He?(je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Fe,le,K.width,K.height,K.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,R,Z,K.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,le,K.width,K.height,K.depth,0,R,Z,K.data);else if(M.isData3DTexture)He?(je&&t.texStorage3D(i.TEXTURE_3D,Fe,le,K.width,K.height,K.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,R,Z,K.data)):t.texImage3D(i.TEXTURE_3D,0,le,K.width,K.height,K.depth,0,R,Z,K.data);else if(M.isFramebufferTexture){if(je)if(He)t.texStorage2D(i.TEXTURE_2D,Fe,le,K.width,K.height);else{let oe=K.width,C=K.height;for(let se=0;se<Fe;se++)t.texImage2D(i.TEXTURE_2D,se,le,oe,C,0,R,Z,null),oe>>=1,C>>=1}}else if(ve.length>0&&qe){He&&je&&t.texStorage2D(i.TEXTURE_2D,Fe,le,ve[0].width,ve[0].height);for(let oe=0,C=ve.length;oe<C;oe++)ie=ve[oe],He?t.texSubImage2D(i.TEXTURE_2D,oe,0,0,R,Z,ie):t.texImage2D(i.TEXTURE_2D,oe,le,R,Z,ie);M.generateMipmaps=!1}else He?(je&&t.texStorage2D(i.TEXTURE_2D,Fe,le,K.width,K.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,R,Z,K)):t.texImage2D(i.TEXTURE_2D,0,le,R,Z,K);v(M,qe)&&x(te),ye.__version=ee.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function Me(T,M,U){if(M.image.length!==6)return;let te=Y(T,M),J=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+U);let ee=n.get(J);if(J.version!==ee.__version||te===!0){t.activeTexture(i.TEXTURE0+U);let ye=Je.getPrimaries(Je.workingColorSpace),ue=M.colorSpace===Kt?null:Je.getPrimaries(M.colorSpace),me=M.colorSpace===Kt||ye===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let _e=M.isCompressedTexture||M.image[0].isCompressedTexture,ze=M.image[0]&&M.image[0].isDataTexture,K=[];for(let oe=0;oe<6;oe++)!_e&&!ze?K[oe]=y(M.image[oe],!1,!0,s.maxCubemapSize):K[oe]=ze?M.image[oe].image:M.image[oe],K[oe]=De(M,K[oe]);let qe=K[0],R=m(qe)||o,Z=r.convert(M.format,M.colorSpace),le=r.convert(M.type),ie=A(M.internalFormat,Z,le,M.colorSpace),ve=o&&M.isVideoTexture!==!0,He=ee.__version===void 0||te===!0,je=P(M,qe,R);V(i.TEXTURE_CUBE_MAP,M,R);let Fe;if(_e){ve&&He&&t.texStorage2D(i.TEXTURE_CUBE_MAP,je,ie,qe.width,qe.height);for(let oe=0;oe<6;oe++){Fe=K[oe].mipmaps;for(let C=0;C<Fe.length;C++){let se=Fe[C];M.format!==Yt?Z!==null?ve?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,C,0,0,se.width,se.height,Z,se.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,C,ie,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ve?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,C,0,0,se.width,se.height,Z,le,se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,C,ie,se.width,se.height,0,Z,le,se.data)}}}else{Fe=M.mipmaps,ve&&He&&(Fe.length>0&&je++,t.texStorage2D(i.TEXTURE_CUBE_MAP,je,ie,K[0].width,K[0].height));for(let oe=0;oe<6;oe++)if(ze){ve?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,K[oe].width,K[oe].height,Z,le,K[oe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ie,K[oe].width,K[oe].height,0,Z,le,K[oe].data);for(let C=0;C<Fe.length;C++){let re=Fe[C].image[oe].image;ve?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,C+1,0,0,re.width,re.height,Z,le,re.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,C+1,ie,re.width,re.height,0,Z,le,re.data)}}else{ve?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Z,le,K[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ie,Z,le,K[oe]);for(let C=0;C<Fe.length;C++){let se=Fe[C];ve?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,C+1,0,0,Z,le,se.image[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,C+1,ie,Z,le,se.image[oe])}}}v(M,R)&&x(i.TEXTURE_CUBE_MAP),ee.__version=J.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function xe(T,M,U,te,J,ee){let ye=r.convert(U.format,U.colorSpace),ue=r.convert(U.type),me=A(U.internalFormat,ye,ue,U.colorSpace);if(!n.get(M).__hasExternalTextures){let ze=Math.max(1,M.width>>ee),K=Math.max(1,M.height>>ee);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,ee,me,ze,K,M.depth,0,ye,ue,null):t.texImage2D(J,ee,me,ze,K,0,ye,ue,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),ge(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,J,n.get(U).__webglTexture,0,Pe(M)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,J,n.get(U).__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(T,M,U){if(i.bindRenderbuffer(i.RENDERBUFFER,T),M.depthBuffer&&!M.stencilBuffer){let te=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(U||ge(M)){let J=M.depthTexture;J&&J.isDepthTexture&&(J.type===bn?te=i.DEPTH_COMPONENT32F:J.type===On&&(te=i.DEPTH_COMPONENT24));let ee=Pe(M);ge(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,te,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,te,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,te,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,T)}else if(M.depthBuffer&&M.stencilBuffer){let te=Pe(M);U&&ge(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,i.DEPTH24_STENCIL8,M.width,M.height):ge(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,T)}else{let te=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let J=0;J<te.length;J++){let ee=te[J],ye=r.convert(ee.format,ee.colorSpace),ue=r.convert(ee.type),me=A(ee.internalFormat,ye,ue,ee.colorSpace),_e=Pe(M);U&&ge(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,me,M.width,M.height):ge(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,me,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,me,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ie(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),G(M.depthTexture,0);let te=n.get(M.depthTexture).__webglTexture,J=Pe(M);if(M.depthTexture.format===si)ge(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(M.depthTexture.format===Fi)ge(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Ee(T){let M=n.get(T),U=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");Ie(M.__webglFramebuffer,T)}else if(U){M.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[te]),M.__webglDepthbuffer[te]=i.createRenderbuffer(),Le(M.__webglDepthbuffer[te],T,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),Le(M.__webglDepthbuffer,T,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xe(T,M,U){let te=n.get(T);M!==void 0&&xe(te.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&Ee(T)}function N(T){let M=T.texture,U=n.get(T),te=n.get(M);T.addEventListener("dispose",z),T.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=M.version,a.memory.textures++);let J=T.isWebGLCubeRenderTarget===!0,ee=T.isWebGLMultipleRenderTargets===!0,ye=m(T)||o;if(J){U.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(o&&M.mipmaps&&M.mipmaps.length>0){U.__webglFramebuffer[ue]=[];for(let me=0;me<M.mipmaps.length;me++)U.__webglFramebuffer[ue][me]=i.createFramebuffer()}else U.__webglFramebuffer[ue]=i.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){U.__webglFramebuffer=[];for(let ue=0;ue<M.mipmaps.length;ue++)U.__webglFramebuffer[ue]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(ee)if(s.drawBuffers){let ue=T.texture;for(let me=0,_e=ue.length;me<_e;me++){let ze=n.get(ue[me]);ze.__webglTexture===void 0&&(ze.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&ge(T)===!1){let ue=ee?M:[M];U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let me=0;me<ue.length;me++){let _e=ue[me];U.__webglColorRenderbuffer[me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[me]);let ze=r.convert(_e.format,_e.colorSpace),K=r.convert(_e.type),qe=A(_e.internalFormat,ze,K,_e.colorSpace,T.isXRRenderTarget===!0),R=Pe(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,R,qe,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,U.__webglColorRenderbuffer[me])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),Le(U.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),V(i.TEXTURE_CUBE_MAP,M,ye);for(let ue=0;ue<6;ue++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)xe(U.__webglFramebuffer[ue][me],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,me);else xe(U.__webglFramebuffer[ue],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);v(M,ye)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ee){let ue=T.texture;for(let me=0,_e=ue.length;me<_e;me++){let ze=ue[me],K=n.get(ze);t.bindTexture(i.TEXTURE_2D,K.__webglTexture),V(i.TEXTURE_2D,ze,ye),xe(U.__webglFramebuffer,T,ze,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,0),v(ze,ye)&&x(i.TEXTURE_2D)}t.unbindTexture()}else{let ue=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?ue=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ue,te.__webglTexture),V(ue,M,ye),o&&M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)xe(U.__webglFramebuffer[me],T,M,i.COLOR_ATTACHMENT0,ue,me);else xe(U.__webglFramebuffer,T,M,i.COLOR_ATTACHMENT0,ue,0);v(M,ye)&&x(ue),t.unbindTexture()}T.depthBuffer&&Ee(T)}function Mt(T){let M=m(T)||o,U=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let te=0,J=U.length;te<J;te++){let ee=U[te];if(v(ee,M)){let ye=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ue=n.get(ee).__webglTexture;t.bindTexture(ye,ue),x(ye),t.unbindTexture()}}}function we(T){if(o&&T.samples>0&&ge(T)===!1){let M=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],U=T.width,te=T.height,J=i.COLOR_BUFFER_BIT,ee=[],ye=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=n.get(T),me=T.isWebGLMultipleRenderTargets===!0;if(me)for(let _e=0;_e<M.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let _e=0;_e<M.length;_e++){ee.push(i.COLOR_ATTACHMENT0+_e),T.depthBuffer&&ee.push(ye);let ze=ue.__ignoreDepthValues!==void 0?ue.__ignoreDepthValues:!1;if(ze===!1&&(T.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),me&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ue.__webglColorRenderbuffer[_e]),ze===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[ye]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[ye])),me){let K=n.get(M[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,K,0)}i.blitFramebuffer(0,0,U,te,0,0,U,te,J,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ee)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),me)for(let _e=0;_e<M.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,ue.__webglColorRenderbuffer[_e]);let ze=n.get(M[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,ze,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}}function Pe(T){return Math.min(s.maxSamples,T.samples)}function ge(T){let M=n.get(T);return o&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function it(T){let M=a.render.frame;u.get(T)!==M&&(u.set(T,M),T.update())}function De(T,M){let U=T.colorSpace,te=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Na||U!==gt&&U!==Kt&&(Je.getTransfer(U)===st?o===!1?e.has("EXT_sRGB")===!0&&te===Yt?(T.format=Na,T.minFilter=zt,T.generateMipmaps=!1):M=hr.sRGBToLinear(M):(te!==Yt||J!==Hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),M}this.allocateTextureUnit=I,this.resetTextureUnits=ae,this.setTexture2D=G,this.setTexture2DArray=j,this.setTexture3D=X,this.setTextureCube=W,this.rebindTextures=Xe,this.setupRenderTarget=N,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=ge}function Km(i,e,t){let n=t.isWebGL2;function s(r,a=Kt){let o,l=Je.getTransfer(a);if(r===Hn)return i.UNSIGNED_BYTE;if(r===$c)return i.UNSIGNED_SHORT_4_4_4_4;if(r===eu)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Rh)return i.BYTE;if(r===Ph)return i.SHORT;if(r===go)return i.UNSIGNED_SHORT;if(r===Qc)return i.INT;if(r===On)return i.UNSIGNED_INT;if(r===bn)return i.FLOAT;if(r===us)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Ch)return i.ALPHA;if(r===Yt)return i.RGBA;if(r===Lh)return i.LUMINANCE;if(r===Ih)return i.LUMINANCE_ALPHA;if(r===si)return i.DEPTH_COMPONENT;if(r===Fi)return i.DEPTH_STENCIL;if(r===Na)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Dh)return i.RED;if(r===tu)return i.RED_INTEGER;if(r===Nh)return i.RG;if(r===nu)return i.RG_INTEGER;if(r===iu)return i.RGBA_INTEGER;if(r===Kr||r===Jr||r===Qr||r===$r)if(l===st)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Kr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Jr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Qr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===$r)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Kr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Jr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Qr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===$r)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ml||r===gl||r===yl||r===xl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===ml)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===gl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===yl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===xl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===su)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===vl||r===Ml)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===vl)return l===st?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Ml)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===bl||r===Sl||r===Al||r===wl||r===Tl||r===El||r===_l||r===Rl||r===Pl||r===Cl||r===Ll||r===Il||r===Dl||r===Nl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===bl)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Sl)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Al)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===wl)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Tl)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===El)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===_l)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Rl)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Pl)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Cl)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ll)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Il)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Dl)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Nl)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ea||r===zl||r===Ol)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===ea)return l===st?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===zl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ol)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===zh||r===Ul||r===Fl||r===Bl)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===ea)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Ul)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Fl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Bl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ii?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Za=class extends pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Xt=class extends ot{constructor(){super(),this.isGroup=!0,this.type="Group"}},Jm={type:"move"},ls=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),d=this._getHandJoint(c,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Xt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ya=class extends un{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null,y=t.getContextAttributes(),m=null,d=null,v=[],x=[],A=new Ae,P=null,E=new pt;E.layers.enable(1),E.viewport=new et;let w=new pt;w.layers.enable(2),w.viewport=new et;let z=[E,w],b=new Za;b.layers.enable(1),b.layers.enable(2);let _=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Y=v[V];return Y===void 0&&(Y=new ls,v[V]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(V){let Y=v[V];return Y===void 0&&(Y=new ls,v[V]=Y),Y.getGripSpace()},this.getHand=function(V){let Y=v[V];return Y===void 0&&(Y=new ls,v[V]=Y),Y.getHandSpace()};function q(V){let Y=x.indexOf(V.inputSource);if(Y===-1)return;let he=v[Y];he!==void 0&&(he.update(V.inputSource,V.frame,c||a),he.dispatchEvent({type:V.type,data:V.inputSource}))}function ae(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",ae),s.removeEventListener("inputsourceschange",I);for(let V=0;V<v.length;V++){let Y=x[V];Y!==null&&(x[V]=null,v[V].disconnect(Y))}_=null,k=null,e.setRenderTarget(m),p=null,f=null,h=null,s=null,d=null,fe.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",ae),s.addEventListener("inputsourceschange",I),y.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(A),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let Y={antialias:s.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Y),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new An(p.framebufferWidth,p.framebufferHeight,{format:Yt,type:Hn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let Y=null,he=null,Me=null;y.depth&&(Me=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=y.stencil?Fi:si,he=y.stencil?ii:On);let xe={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(xe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),d=new An(f.textureWidth,f.textureHeight,{format:Yt,type:Hn,depthTexture:new vr(f.textureWidth,f.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});let Le=e.properties.get(d);Le.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),fe.setContext(s),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function I(V){for(let Y=0;Y<V.removed.length;Y++){let he=V.removed[Y],Me=x.indexOf(he);Me>=0&&(x[Me]=null,v[Me].disconnect(he))}for(let Y=0;Y<V.added.length;Y++){let he=V.added[Y],Me=x.indexOf(he);if(Me===-1){for(let Le=0;Le<v.length;Le++)if(Le>=x.length){x.push(he),Me=Le;break}else if(x[Le]===null){x[Le]=he,Me=Le;break}if(Me===-1)break}let xe=v[Me];xe&&xe.connect(he)}}let O=new L,G=new L;function j(V,Y,he){O.setFromMatrixPosition(Y.matrixWorld),G.setFromMatrixPosition(he.matrixWorld);let Me=O.distanceTo(G),xe=Y.projectionMatrix.elements,Le=he.projectionMatrix.elements,Ie=xe[14]/(xe[10]-1),Ee=xe[14]/(xe[10]+1),Xe=(xe[9]+1)/xe[5],N=(xe[9]-1)/xe[5],Mt=(xe[8]-1)/xe[0],we=(Le[8]+1)/Le[0],Pe=Ie*Mt,ge=Ie*we,it=Me/(-Mt+we),De=it*-Mt;Y.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(De),V.translateZ(it),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();let T=Ie+it,M=Ee+it,U=Pe-De,te=ge+(Me-De),J=Xe*Ee/M*T,ee=N*Ee/M*T;V.projectionMatrix.makePerspective(U,te,J,ee,T,M),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function X(V,Y){Y===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Y.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;b.near=w.near=E.near=V.near,b.far=w.far=E.far=V.far,(_!==b.near||k!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),_=b.near,k=b.far);let Y=V.parent,he=b.cameras;X(b,Y);for(let Me=0;Me<he.length;Me++)X(he[Me],Y);he.length===2?j(b,E,w):b.projectionMatrix.copy(E.projectionMatrix),W(V,b,Y)};function W(V,Y,he){he===null?V.matrix.copy(Y.matrixWorld):(V.matrix.copy(he.matrixWorld),V.matrix.invert(),V.matrix.multiply(Y.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Y.projectionMatrix),V.projectionMatrixInverse.copy(Y.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Hi*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(V){l=V,f!==null&&(f.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)};let Q=null;function ne(V,Y){if(u=Y.getViewerPose(c||a),g=Y,u!==null){let he=u.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let Me=!1;he.length!==b.cameras.length&&(b.cameras.length=0,Me=!0);for(let xe=0;xe<he.length;xe++){let Le=he[xe],Ie=null;if(p!==null)Ie=p.getViewport(Le);else{let Xe=h.getViewSubImage(f,Le);Ie=Xe.viewport,xe===0&&(e.setRenderTargetTextures(d,Xe.colorTexture,f.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(d))}let Ee=z[xe];Ee===void 0&&(Ee=new pt,Ee.layers.enable(xe),Ee.viewport=new et,z[xe]=Ee),Ee.matrix.fromArray(Le.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(Le.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),xe===0&&(b.matrix.copy(Ee.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Me===!0&&b.cameras.push(Ee)}}for(let he=0;he<v.length;he++){let Me=x[he],xe=v[he];Me!==null&&xe!==void 0&&xe.update(Me,Y,c||a)}Q&&Q(V,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),g=null}let fe=new du;fe.setAnimationLoop(ne),this.setAnimationLoop=function(V){Q=V},this.dispose=function(){}}};function Qm(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,fu(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,v,x,A){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,A)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),y(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,v,x):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===mt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===mt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let v=e.get(d).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;let x=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*x,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,v,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=x*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===mt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){let v=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function $m(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){let A=x.program;n.uniformBlockBinding(v,A)}function c(v,x){let A=s[v.id];A===void 0&&(g(v),A=u(v),s[v.id]=A,v.addEventListener("dispose",m));let P=x.program;n.updateUBOMapping(v,P);let E=e.render.frame;r[v.id]!==E&&(f(v),r[v.id]=E)}function u(v){let x=h();v.__bindingPointIndex=x;let A=i.createBuffer(),P=v.__size,E=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,P,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,A),A}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let x=s[v.id],A=v.uniforms,P=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let E=0,w=A.length;E<w;E++){let z=Array.isArray(A[E])?A[E]:[A[E]];for(let b=0,_=z.length;b<_;b++){let k=z[b];if(p(k,E,b,P)===!0){let q=k.__offset,ae=Array.isArray(k.value)?k.value:[k.value],I=0;for(let O=0;O<ae.length;O++){let G=ae[O],j=y(G);typeof G=="number"||typeof G=="boolean"?(k.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,q+I,k.__data)):G.isMatrix3?(k.__data[0]=G.elements[0],k.__data[1]=G.elements[1],k.__data[2]=G.elements[2],k.__data[3]=0,k.__data[4]=G.elements[3],k.__data[5]=G.elements[4],k.__data[6]=G.elements[5],k.__data[7]=0,k.__data[8]=G.elements[6],k.__data[9]=G.elements[7],k.__data[10]=G.elements[8],k.__data[11]=0):(G.toArray(k.__data,I),I+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,k.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(v,x,A,P){let E=v.value,w=x+"_"+A;if(P[w]===void 0)return typeof E=="number"||typeof E=="boolean"?P[w]=E:P[w]=E.clone(),!0;{let z=P[w];if(typeof E=="number"||typeof E=="boolean"){if(z!==E)return P[w]=E,!0}else if(z.equals(E)===!1)return z.copy(E),!0}return!1}function g(v){let x=v.uniforms,A=0,P=16;for(let w=0,z=x.length;w<z;w++){let b=Array.isArray(x[w])?x[w]:[x[w]];for(let _=0,k=b.length;_<k;_++){let q=b[_],ae=Array.isArray(q.value)?q.value:[q.value];for(let I=0,O=ae.length;I<O;I++){let G=ae[I],j=y(G),X=A%P;X!==0&&P-X<j.boundary&&(A+=P-X),q.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=A,A+=j.storage}}}let E=A%P;return E>0&&(A+=P-E),v.__size=A,v.__cache={},this}function y(v){let x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){let x=v.target;x.removeEventListener("dispose",m);let A=a.indexOf(x.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function d(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}var gs=class{constructor(e={}){let{canvas:t=lf(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;let p=new Uint32Array(4),g=new Int32Array(4),y=null,m=null,d=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$e,this._useLegacyLights=!1,this.toneMapping=Bn,this.toneMappingExposure=1;let x=this,A=!1,P=0,E=0,w=null,z=-1,b=null,_=new et,k=new et,q=null,ae=new pe(0),I=0,O=t.width,G=t.height,j=1,X=null,W=null,Q=new et(0,0,O,G),ne=new et(0,0,O,G),fe=!1,V=new ps,Y=!1,he=!1,Me=null,xe=new Ge,Le=new Ae,Ie=new L,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Xe(){return w===null?j:1}let N=n;function Mt(S,D){for(let B=0;B<S.length;B++){let H=S[B],F=t.getContext(H,D);if(F!==null)return F}return null}try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ho}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",C,!1),t.addEventListener("webglcontextcreationerror",se,!1),N===null){let D=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&D.shift(),N=Mt(D,S),N===null)throw Mt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let we,Pe,ge,it,De,T,M,U,te,J,ee,ye,ue,me,_e,ze,K,qe,R,Z,le,ie,ve,He;function je(){we=new x0(N),Pe=new f0(N,we,e),we.init(Pe),ie=new Km(N,we,Pe),ge=new Zm(N,we,Pe),it=new b0(N),De=new Om,T=new Ym(N,we,ge,De,Pe,ie,it),M=new p0(x),U=new y0(x),te=new Pf(N,Pe),ve=new u0(N,we,te,Pe),J=new v0(N,te,it,ve),ee=new T0(N,J,te,it),R=new w0(N,Pe,T),ze=new d0(De),ye=new zm(x,M,U,we,Pe,ve,ze),ue=new Qm(x,De),me=new Fm,_e=new Wm(we,Pe),qe=new c0(x,M,U,ge,ee,f,l),K=new jm(x,ee,Pe),He=new $m(N,it,Pe,ge),Z=new h0(N,we,it,Pe),le=new M0(N,we,it,Pe),it.programs=ye.programs,x.capabilities=Pe,x.extensions=we,x.properties=De,x.renderLists=me,x.shadowMap=K,x.state=ge,x.info=it}je();let Fe=new Ya(x,N);this.xr=Fe,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let S=we.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=we.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(S){S!==void 0&&(j=S,this.setSize(O,G,!1))},this.getSize=function(S){return S.set(O,G)},this.setSize=function(S,D,B=!0){if(Fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=S,G=D,t.width=Math.floor(S*j),t.height=Math.floor(D*j),B===!0&&(t.style.width=S+"px",t.style.height=D+"px"),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(O*j,G*j).floor()},this.setDrawingBufferSize=function(S,D,B){O=S,G=D,j=B,t.width=Math.floor(S*B),t.height=Math.floor(D*B),this.setViewport(0,0,S,D)},this.getCurrentViewport=function(S){return S.copy(_)},this.getViewport=function(S){return S.copy(Q)},this.setViewport=function(S,D,B,H){S.isVector4?Q.set(S.x,S.y,S.z,S.w):Q.set(S,D,B,H),ge.viewport(_.copy(Q).multiplyScalar(j).floor())},this.getScissor=function(S){return S.copy(ne)},this.setScissor=function(S,D,B,H){S.isVector4?ne.set(S.x,S.y,S.z,S.w):ne.set(S,D,B,H),ge.scissor(k.copy(ne).multiplyScalar(j).floor())},this.getScissorTest=function(){return fe},this.setScissorTest=function(S){ge.setScissorTest(fe=S)},this.setOpaqueSort=function(S){X=S},this.setTransparentSort=function(S){W=S},this.getClearColor=function(S){return S.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(S=!0,D=!0,B=!0){let H=0;if(S){let F=!1;if(w!==null){let de=w.texture.format;F=de===iu||de===nu||de===tu}if(F){let de=w.texture.type,Se=de===Hn||de===On||de===go||de===ii||de===$c||de===eu,Re=qe.getClearColor(),Ce=qe.getClearAlpha(),Be=Re.r,Ne=Re.g,Oe=Re.b;Se?(p[0]=Be,p[1]=Ne,p[2]=Oe,p[3]=Ce,N.clearBufferuiv(N.COLOR,0,p)):(g[0]=Be,g[1]=Ne,g[2]=Oe,g[3]=Ce,N.clearBufferiv(N.COLOR,0,g))}else H|=N.COLOR_BUFFER_BIT}D&&(H|=N.DEPTH_BUFFER_BIT),B&&(H|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",C,!1),t.removeEventListener("webglcontextcreationerror",se,!1),me.dispose(),_e.dispose(),De.dispose(),M.dispose(),U.dispose(),ee.dispose(),ve.dispose(),He.dispose(),ye.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",Lt),Fe.removeEventListener("sessionend",tt),Me&&(Me.dispose(),Me=null),It.stop()};function oe(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let S=it.autoReset,D=K.enabled,B=K.autoUpdate,H=K.needsUpdate,F=K.type;je(),it.autoReset=S,K.enabled=D,K.autoUpdate=B,K.needsUpdate=H,K.type=F}function se(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function re(S){let D=S.target;D.removeEventListener("dispose",re),Te(D)}function Te(S){be(S),De.remove(S)}function be(S){let D=De.get(S).programs;D!==void 0&&(D.forEach(function(B){ye.releaseProgram(B)}),S.isShaderMaterial&&ye.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,B,H,F,de){D===null&&(D=Ee);let Se=F.isMesh&&F.matrixWorld.determinant()<0,Re=Xu(S,D,B,H,F);ge.setMaterial(H,Se);let Ce=B.index,Be=1;if(H.wireframe===!0){if(Ce=J.getWireframeAttribute(B),Ce===void 0)return;Be=2}let Ne=B.drawRange,Oe=B.attributes.position,ct=Ne.start*Be,Ht=(Ne.start+Ne.count)*Be;de!==null&&(ct=Math.max(ct,de.start*Be),Ht=Math.min(Ht,(de.start+de.count)*Be)),Ce!==null?(ct=Math.max(ct,0),Ht=Math.min(Ht,Ce.count)):Oe!=null&&(ct=Math.max(ct,0),Ht=Math.min(Ht,Oe.count));let St=Ht-ct;if(St<0||St===1/0)return;ve.setup(F,H,Re,B,Ce);let dn,rt=Z;if(Ce!==null&&(dn=te.get(Ce),rt=le,rt.setIndex(dn)),F.isMesh)H.wireframe===!0?(ge.setLineWidth(H.wireframeLinewidth*Xe()),rt.setMode(N.LINES)):rt.setMode(N.TRIANGLES);else if(F.isLine){let ke=H.linewidth;ke===void 0&&(ke=1),ge.setLineWidth(ke*Xe()),F.isLineSegments?rt.setMode(N.LINES):F.isLineLoop?rt.setMode(N.LINE_LOOP):rt.setMode(N.LINE_STRIP)}else F.isPoints?rt.setMode(N.POINTS):F.isSprite&&rt.setMode(N.TRIANGLES);if(F.isBatchedMesh)rt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)rt.renderInstances(ct,St,F.count);else if(B.isInstancedBufferGeometry){let ke=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,qr=Math.min(B.instanceCount,ke);rt.renderInstances(ct,St,qr)}else rt.render(ct,St)};function Ze(S,D,B){S.transparent===!0&&S.side===Pt&&S.forceSinglePass===!1?(S.side=mt,S.needsUpdate=!0,Ps(S,D,B),S.side=cn,S.needsUpdate=!0,Ps(S,D,B),S.side=Pt):Ps(S,D,B)}this.compile=function(S,D,B=null){B===null&&(B=S),m=_e.get(B),m.init(),v.push(m),B.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),S!==B&&S.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights(x._useLegacyLights);let H=new Set;return S.traverse(function(F){let de=F.material;if(de)if(Array.isArray(de))for(let Se=0;Se<de.length;Se++){let Re=de[Se];Ze(Re,B,F),H.add(Re)}else Ze(de,B,F),H.add(de)}),v.pop(),m=null,H},this.compileAsync=function(S,D,B=null){let H=this.compile(S,D,B);return new Promise(F=>{function de(){if(H.forEach(function(Se){De.get(Se).currentProgram.isReady()&&H.delete(Se)}),H.size===0){F(S);return}setTimeout(de,10)}we.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Ke=null;function bt(S){Ke&&Ke(S)}function Lt(){It.stop()}function tt(){It.start()}let It=new du;It.setAnimationLoop(bt),typeof self<"u"&&It.setContext(self),this.setAnimationLoop=function(S){Ke=S,Fe.setAnimationLoop(S),S===null?It.stop():It.start()},Fe.addEventListener("sessionstart",Lt),Fe.addEventListener("sessionend",tt),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(D),D=Fe.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,D,w),m=_e.get(S,v.length),m.init(),v.push(m),xe.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),V.setFromProjectionMatrix(xe),he=this.localClippingEnabled,Y=ze.init(this.clippingPlanes,he),y=me.get(S,d.length),y.init(),d.push(y),an(S,D,0,x.sortObjects),y.finish(),x.sortObjects===!0&&y.sort(X,W),this.info.render.frame++,Y===!0&&ze.beginShadows();let B=m.state.shadowsArray;if(K.render(B,S,D),Y===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),qe.render(y,S),m.setupLights(x._useLegacyLights),D.isArrayCamera){let H=D.cameras;for(let F=0,de=H.length;F<de;F++){let Se=H[F];nl(y,S,Se,Se.viewport)}}else nl(y,S,D);w!==null&&(T.updateMultisampleRenderTarget(w),T.updateRenderTargetMipmap(w)),S.isScene===!0&&S.onAfterRender(x,S,D),ve.resetDefaultState(),z=-1,b=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,d.pop(),d.length>0?y=d[d.length-1]:y=null};function an(S,D,B,H){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)B=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||V.intersectsSprite(S)){H&&Ie.setFromMatrixPosition(S.matrixWorld).applyMatrix4(xe);let Se=ee.update(S),Re=S.material;Re.visible&&y.push(S,Se,Re,B,Ie.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||V.intersectsObject(S))){let Se=ee.update(S),Re=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ie.copy(S.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Ie.copy(Se.boundingSphere.center)),Ie.applyMatrix4(S.matrixWorld).applyMatrix4(xe)),Array.isArray(Re)){let Ce=Se.groups;for(let Be=0,Ne=Ce.length;Be<Ne;Be++){let Oe=Ce[Be],ct=Re[Oe.materialIndex];ct&&ct.visible&&y.push(S,Se,ct,B,Ie.z,Oe)}}else Re.visible&&y.push(S,Se,Re,B,Ie.z,null)}}let de=S.children;for(let Se=0,Re=de.length;Se<Re;Se++)an(de[Se],D,B,H)}function nl(S,D,B,H){let F=S.opaque,de=S.transmissive,Se=S.transparent;m.setupLightsView(B),Y===!0&&ze.setGlobalState(x.clippingPlanes,B),de.length>0&&Wu(F,de,D,B),H&&ge.viewport(_.copy(H)),F.length>0&&Rs(F,D,B),de.length>0&&Rs(de,D,B),Se.length>0&&Rs(Se,D,B),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Wu(S,D,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;let de=Pe.isWebGL2;Me===null&&(Me=new An(1,1,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")?us:Hn,minFilter:kn,samples:de?4:0})),x.getDrawingBufferSize(Le),de?Me.setSize(Le.x,Le.y):Me.setSize(ur(Le.x),ur(Le.y));let Se=x.getRenderTarget();x.setRenderTarget(Me),x.getClearColor(ae),I=x.getClearAlpha(),I<1&&x.setClearColor(16777215,.5),x.clear();let Re=x.toneMapping;x.toneMapping=Bn,Rs(S,B,H),T.updateMultisampleRenderTarget(Me),T.updateRenderTargetMipmap(Me);let Ce=!1;for(let Be=0,Ne=D.length;Be<Ne;Be++){let Oe=D[Be],ct=Oe.object,Ht=Oe.geometry,St=Oe.material,dn=Oe.group;if(St.side===Pt&&ct.layers.test(H.layers)){let rt=St.side;St.side=mt,St.needsUpdate=!0,il(ct,B,H,Ht,St,dn),St.side=rt,St.needsUpdate=!0,Ce=!0}}Ce===!0&&(T.updateMultisampleRenderTarget(Me),T.updateRenderTargetMipmap(Me)),x.setRenderTarget(Se),x.setClearColor(ae,I),x.toneMapping=Re}function Rs(S,D,B){let H=D.isScene===!0?D.overrideMaterial:null;for(let F=0,de=S.length;F<de;F++){let Se=S[F],Re=Se.object,Ce=Se.geometry,Be=H===null?Se.material:H,Ne=Se.group;Re.layers.test(B.layers)&&il(Re,D,B,Ce,Be,Ne)}}function il(S,D,B,H,F,de){S.onBeforeRender(x,D,B,H,F,de),S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.onBeforeRender(x,D,B,H,S,de),F.transparent===!0&&F.side===Pt&&F.forceSinglePass===!1?(F.side=mt,F.needsUpdate=!0,x.renderBufferDirect(B,D,H,F,S,de),F.side=cn,F.needsUpdate=!0,x.renderBufferDirect(B,D,H,F,S,de),F.side=Pt):x.renderBufferDirect(B,D,H,F,S,de),S.onAfterRender(x,D,B,H,F,de)}function Ps(S,D,B){D.isScene!==!0&&(D=Ee);let H=De.get(S),F=m.state.lights,de=m.state.shadowsArray,Se=F.state.version,Re=ye.getParameters(S,F.state,de,D,B),Ce=ye.getProgramCacheKey(Re),Be=H.programs;H.environment=S.isMeshStandardMaterial?D.environment:null,H.fog=D.fog,H.envMap=(S.isMeshStandardMaterial?U:M).get(S.envMap||H.environment),Be===void 0&&(S.addEventListener("dispose",re),Be=new Map,H.programs=Be);let Ne=Be.get(Ce);if(Ne!==void 0){if(H.currentProgram===Ne&&H.lightsStateVersion===Se)return rl(S,Re),Ne}else Re.uniforms=ye.getUniforms(S),S.onBuild(B,Re,x),S.onBeforeCompile(Re,x),Ne=ye.acquireProgram(Re,Ce),Be.set(Ce,Ne),H.uniforms=Re.uniforms;let Oe=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Oe.clippingPlanes=ze.uniform),rl(S,Re),H.needsLights=ju(S),H.lightsStateVersion=Se,H.needsLights&&(Oe.ambientLightColor.value=F.state.ambient,Oe.lightProbe.value=F.state.probe,Oe.directionalLights.value=F.state.directional,Oe.directionalLightShadows.value=F.state.directionalShadow,Oe.spotLights.value=F.state.spot,Oe.spotLightShadows.value=F.state.spotShadow,Oe.rectAreaLights.value=F.state.rectArea,Oe.ltc_1.value=F.state.rectAreaLTC1,Oe.ltc_2.value=F.state.rectAreaLTC2,Oe.pointLights.value=F.state.point,Oe.pointLightShadows.value=F.state.pointShadow,Oe.hemisphereLights.value=F.state.hemi,Oe.directionalShadowMap.value=F.state.directionalShadowMap,Oe.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Oe.spotShadowMap.value=F.state.spotShadowMap,Oe.spotLightMatrix.value=F.state.spotLightMatrix,Oe.spotLightMap.value=F.state.spotLightMap,Oe.pointShadowMap.value=F.state.pointShadowMap,Oe.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Ne,H.uniformsList=null,Ne}function sl(S){if(S.uniformsList===null){let D=S.currentProgram.getUniforms();S.uniformsList=zi.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function rl(S,D){let B=De.get(S);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function Xu(S,D,B,H,F){D.isScene!==!0&&(D=Ee),T.resetTextureUnits();let de=D.fog,Se=H.isMeshStandardMaterial?D.environment:null,Re=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:gt,Ce=(H.isMeshStandardMaterial?U:M).get(H.envMap||Se),Be=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ne=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Oe=!!B.morphAttributes.position,ct=!!B.morphAttributes.normal,Ht=!!B.morphAttributes.color,St=Bn;H.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(St=x.toneMapping);let dn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,rt=dn!==void 0?dn.length:0,ke=De.get(H),qr=m.state.lights;if(Y===!0&&(he===!0||S!==b)){let jt=S===b&&H.id===z;ze.setState(H,S,jt)}let lt=!1;H.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==qr.state.version||ke.outputColorSpace!==Re||F.isBatchedMesh&&ke.batching===!1||!F.isBatchedMesh&&ke.batching===!0||F.isInstancedMesh&&ke.instancing===!1||!F.isInstancedMesh&&ke.instancing===!0||F.isSkinnedMesh&&ke.skinning===!1||!F.isSkinnedMesh&&ke.skinning===!0||F.isInstancedMesh&&ke.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&ke.instancingColor===!1&&F.instanceColor!==null||ke.envMap!==Ce||H.fog===!0&&ke.fog!==de||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==ze.numPlanes||ke.numIntersection!==ze.numIntersection)||ke.vertexAlphas!==Be||ke.vertexTangents!==Ne||ke.morphTargets!==Oe||ke.morphNormals!==ct||ke.morphColors!==Ht||ke.toneMapping!==St||Pe.isWebGL2===!0&&ke.morphTargetsCount!==rt)&&(lt=!0):(lt=!0,ke.__version=H.version);let Zn=ke.currentProgram;lt===!0&&(Zn=Ps(H,D,F));let al=!1,Ki=!1,jr=!1,Et=Zn.getUniforms(),Yn=ke.uniforms;if(ge.useProgram(Zn.program)&&(al=!0,Ki=!0,jr=!0),H.id!==z&&(z=H.id,Ki=!0),al||b!==S){Et.setValue(N,"projectionMatrix",S.projectionMatrix),Et.setValue(N,"viewMatrix",S.matrixWorldInverse);let jt=Et.map.cameraPosition;jt!==void 0&&jt.setValue(N,Ie.setFromMatrixPosition(S.matrixWorld)),Pe.logarithmicDepthBuffer&&Et.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Et.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),b!==S&&(b=S,Ki=!0,jr=!0)}if(F.isSkinnedMesh){Et.setOptional(N,F,"bindMatrix"),Et.setOptional(N,F,"bindMatrixInverse");let jt=F.skeleton;jt&&(Pe.floatVertexTextures?(jt.boneTexture===null&&jt.computeBoneTexture(),Et.setValue(N,"boneTexture",jt.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(Et.setOptional(N,F,"batchingTexture"),Et.setValue(N,"batchingTexture",F._matricesTexture,T));let Zr=B.morphAttributes;if((Zr.position!==void 0||Zr.normal!==void 0||Zr.color!==void 0&&Pe.isWebGL2===!0)&&R.update(F,B,Zn),(Ki||ke.receiveShadow!==F.receiveShadow)&&(ke.receiveShadow=F.receiveShadow,Et.setValue(N,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Yn.envMap.value=Ce,Yn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),Ki&&(Et.setValue(N,"toneMappingExposure",x.toneMappingExposure),ke.needsLights&&qu(Yn,jr),de&&H.fog===!0&&ue.refreshFogUniforms(Yn,de),ue.refreshMaterialUniforms(Yn,H,j,G,Me),zi.upload(N,sl(ke),Yn,T)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(zi.upload(N,sl(ke),Yn,T),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Et.setValue(N,"center",F.center),Et.setValue(N,"modelViewMatrix",F.modelViewMatrix),Et.setValue(N,"normalMatrix",F.normalMatrix),Et.setValue(N,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let jt=H.uniformsGroups;for(let Yr=0,Zu=jt.length;Yr<Zu;Yr++)if(Pe.isWebGL2){let ol=jt[Yr];He.update(ol,Zn),He.bind(ol,Zn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Zn}function qu(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function ju(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(S,D,B){De.get(S.texture).__webglTexture=D,De.get(S.depthTexture).__webglTexture=B;let H=De.get(S);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=B===void 0,H.__autoAllocateDepthBuffer||we.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,D){let B=De.get(S);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,B=0){w=S,P=D,E=B;let H=!0,F=null,de=!1,Se=!1;if(S){let Ce=De.get(S);Ce.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(N.FRAMEBUFFER,null),H=!1):Ce.__webglFramebuffer===void 0?T.setupRenderTarget(S):Ce.__hasExternalTextures&&T.rebindTextures(S,De.get(S.texture).__webglTexture,De.get(S.depthTexture).__webglTexture);let Be=S.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Se=!0);let Ne=De.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ne[D])?F=Ne[D][B]:F=Ne[D],de=!0):Pe.isWebGL2&&S.samples>0&&T.useMultisampledRTT(S)===!1?F=De.get(S).__webglMultisampledFramebuffer:Array.isArray(Ne)?F=Ne[B]:F=Ne,_.copy(S.viewport),k.copy(S.scissor),q=S.scissorTest}else _.copy(Q).multiplyScalar(j).floor(),k.copy(ne).multiplyScalar(j).floor(),q=fe;if(ge.bindFramebuffer(N.FRAMEBUFFER,F)&&Pe.drawBuffers&&H&&ge.drawBuffers(S,F),ge.viewport(_),ge.scissor(k),ge.setScissorTest(q),de){let Ce=De.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,Ce.__webglTexture,B)}else if(Se){let Ce=De.get(S.texture),Be=D||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ce.__webglTexture,B||0,Be)}z=-1},this.readRenderTargetPixels=function(S,D,B,H,F,de,Se){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=De.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Se!==void 0&&(Re=Re[Se]),Re){ge.bindFramebuffer(N.FRAMEBUFFER,Re);try{let Ce=S.texture,Be=Ce.format,Ne=Ce.type;if(Be!==Yt&&ie.convert(Be)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Oe=Ne===us&&(we.has("EXT_color_buffer_half_float")||Pe.isWebGL2&&we.has("EXT_color_buffer_float"));if(Ne!==Hn&&ie.convert(Ne)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===bn&&(Pe.isWebGL2||we.has("OES_texture_float")||we.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-H&&B>=0&&B<=S.height-F&&N.readPixels(D,B,H,F,ie.convert(Be),ie.convert(Ne),de)}finally{let Ce=w!==null?De.get(w).__webglFramebuffer:null;ge.bindFramebuffer(N.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(S,D,B=0){let H=Math.pow(2,-B),F=Math.floor(D.image.width*H),de=Math.floor(D.image.height*H);T.setTexture2D(D,0),N.copyTexSubImage2D(N.TEXTURE_2D,B,0,0,S.x,S.y,F,de),ge.unbindTexture()},this.copyTextureToTexture=function(S,D,B,H=0){let F=D.image.width,de=D.image.height,Se=ie.convert(B.format),Re=ie.convert(B.type);T.setTexture2D(B,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,B.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,B.unpackAlignment),D.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,H,S.x,S.y,F,de,Se,Re,D.image.data):D.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,H,S.x,S.y,D.mipmaps[0].width,D.mipmaps[0].height,Se,D.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,H,S.x,S.y,Se,Re,D.image),H===0&&B.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(S,D,B,H,F=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let de=S.max.x-S.min.x+1,Se=S.max.y-S.min.y+1,Re=S.max.z-S.min.z+1,Ce=ie.convert(H.format),Be=ie.convert(H.type),Ne;if(H.isData3DTexture)T.setTexture3D(H,0),Ne=N.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)T.setTexture2DArray(H,0),Ne=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,H.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,H.unpackAlignment);let Oe=N.getParameter(N.UNPACK_ROW_LENGTH),ct=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Ht=N.getParameter(N.UNPACK_SKIP_PIXELS),St=N.getParameter(N.UNPACK_SKIP_ROWS),dn=N.getParameter(N.UNPACK_SKIP_IMAGES),rt=B.isCompressedTexture?B.mipmaps[F]:B.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,rt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,rt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,S.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,S.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,S.min.z),B.isDataTexture||B.isData3DTexture?N.texSubImage3D(Ne,F,D.x,D.y,D.z,de,Se,Re,Ce,Be,rt.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Ne,F,D.x,D.y,D.z,de,Se,Re,Ce,rt.data)):N.texSubImage3D(Ne,F,D.x,D.y,D.z,de,Se,Re,Ce,Be,rt),N.pixelStorei(N.UNPACK_ROW_LENGTH,Oe),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ct),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ht),N.pixelStorei(N.UNPACK_SKIP_ROWS,St),N.pixelStorei(N.UNPACK_SKIP_IMAGES,dn),F===0&&H.generateMipmaps&&N.generateMipmap(Ne),ge.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),ge.unbindTexture()},this.resetState=function(){P=0,E=0,w=null,ge.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===yo?"display-p3":"srgb",t.unpackColorSpace=Je.workingColorSpace===Br?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===$e?ri:au}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ri?$e:gt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Ka=class extends gs{};Ka.prototype.isWebGL1Renderer=!0;var ys=class extends ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},xs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Da,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=sn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Dt=new L,vs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ln(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ln(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ln(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ln(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),s=Qe(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),s=Qe(s,this.array),r=Qe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ye(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Pc=new L,Cc=new et,Lc=new et,eg=new L,Ic=new Ge,Qs=new L,wa=new Ot,Dc=new Ge,Ta=new wn,Mr=class extends at{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=pl,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Jt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Qs),this.boundingBox.expandByPoint(Qs)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ot),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Qs),this.boundingSphere.expandByPoint(Qs)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wa.copy(this.boundingSphere),wa.applyMatrix4(s),e.ray.intersectsSphere(wa)!==!1&&(Dc.copy(s).invert(),Ta.copy(e.ray).applyMatrix4(Dc),!(this.boundingBox!==null&&Ta.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ta)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new et,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===pl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===_h?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Cc.fromBufferAttribute(s.attributes.skinIndex,e),Lc.fromBufferAttribute(s.attributes.skinWeight,e),Pc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=Lc.getComponent(r);if(a!==0){let o=Cc.getComponent(r);Ic.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(eg.copy(Pc).applyMatrix4(Ic),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Ms=class extends ot{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ja=class extends Tt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=dt,u=dt,h,f){super(null,a,o,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Nc=new Ge,tg=new Ge,br=class i{constructor(e=[],t=[]){this.uuid=sn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ge;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:tg;Nc.multiplyMatrices(o,t[r]),Nc.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ja(t,e,e,Yt,bn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Ms),this.bones.push(a),this.boneInverses.push(new Ge().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},oi=class extends Ye{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Pi=new Ge,zc=new Ge,$s=[],Oc=new Jt,ng=new Ge,ts=new at,ns=new Ot,Sr=class extends at{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new oi(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ng)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Jt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Pi),Oc.copy(e.boundingBox).applyMatrix4(Pi),this.boundingBox.union(Oc)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ot),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Pi),ns.copy(e.boundingSphere).applyMatrix4(Pi),this.boundingSphere.union(ns)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(ts.geometry=this.geometry,ts.material=this.material,ts.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ns.copy(this.boundingSphere),ns.applyMatrix4(n),e.ray.intersectsSphere(ns)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Pi),zc.multiplyMatrices(n,Pi),ts.matrixWorld=zc,ts.raycast(e,$s);for(let a=0,o=$s.length;a<o;a++){let l=$s[a];l.instanceId=r,l.object=this,t.push(l)}$s.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new oi(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var bs=class extends Bt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Uc=new L,Fc=new L,Bc=new Ge,Ea=new wn,er=new Ot,Wi=class extends ot{constructor(e=new ft,t=new bs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Uc.fromBufferAttribute(t,s-1),Fc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Uc.distanceTo(Fc);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),er.copy(n.boundingSphere),er.applyMatrix4(s),er.radius+=r,e.ray.intersectsSphere(er)===!1)return;Bc.copy(s).invert(),Ea.copy(e.ray).applyMatrix4(Bc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new L,u=new L,h=new L,f=new L,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let d=Math.max(0,a.start),v=Math.min(g.count,a.start+a.count);for(let x=d,A=v-1;x<A;x+=p){let P=g.getX(x),E=g.getX(x+1);if(c.fromBufferAttribute(m,P),u.fromBufferAttribute(m,E),Ea.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);let z=e.ray.origin.distanceTo(f);z<e.near||z>e.far||t.push({distance:z,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let d=Math.max(0,a.start),v=Math.min(m.count,a.start+a.count);for(let x=d,A=v-1;x<A;x+=p){if(c.fromBufferAttribute(m,x),u.fromBufferAttribute(m,x+1),Ea.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);let E=e.ray.origin.distanceTo(f);E<e.near||E>e.far||t.push({distance:E,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},Hc=new L,kc=new L,Ar=class extends Wi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Hc.fromBufferAttribute(t,s),kc.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Hc.distanceTo(kc);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},wr=class extends Wi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ss=class extends Bt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Vc=new Ge,Qa=new wn,tr=new Ot,nr=new L,Tr=class extends ot{constructor(e=new ft,t=new Ss){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere),tr.applyMatrix4(s),tr.radius+=r,e.ray.intersectsSphere(tr)===!1)return;Vc.copy(s).invert(),Qa.copy(e.ray).applyMatrix4(Vc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=f,y=p;g<y;g++){let m=c.getX(g);nr.fromBufferAttribute(h,m),Gc(nr,m,l,s,e,t,this)}}else{let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=f,y=p;g<y;g++)nr.fromBufferAttribute(h,g),Gc(nr,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Gc(i,e,t,n,s,r,a){let o=Qa.distanceSqToPoint(i);if(o<t){let l=new L;Qa.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}var Xi=class extends Tt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Er=class i extends ft{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new L,u=new Ae;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){let p=n+h/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[f]/e+1)/2,u.y=(a[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ht(a,3)),this.setAttribute("normal",new ht(o,3)),this.setAttribute("uv",new ht(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}};var _r=class i extends ft{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],h=new L,f=new L,p=[],g=[],y=[],m=[];for(let d=0;d<=n;d++){let v=[],x=d/n,A=0;d===0&&a===0?A=.5/t:d===n&&l===Math.PI&&(A=-.5/t);for(let P=0;P<=t;P++){let E=P/t;h.x=-e*Math.cos(s+E*r)*Math.sin(a+x*o),h.y=e*Math.cos(a+x*o),h.z=e*Math.sin(s+E*r)*Math.sin(a+x*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),y.push(f.x,f.y,f.z),m.push(E+A,1-x),v.push(c++)}u.push(v)}for(let d=0;d<n;d++)for(let v=0;v<t;v++){let x=u[d][v+1],A=u[d][v],P=u[d+1][v],E=u[d+1][v+1];(d!==0||a>0)&&p.push(x,A,E),(d!==n-1||l<Math.PI)&&p.push(A,P,E)}this.setIndex(p),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(y,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Rr=class extends Bt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new pe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};var hn=class extends Bt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ou,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},vt=class extends hn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return wt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function ir(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ig(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function sg(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Wc(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function vu(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var Vn=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},$a=class extends Vn{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hl,endingEnd:Hl}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case kl:r=e,o=2*t-n;break;case Vl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case kl:a=e,l=2*n-t;break;case Vl:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),y=g*g,m=y*g,d=-f*m+2*f*y-f*g,v=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*g+1,x=(-1-p)*m+(1.5+p)*y+.5*g,A=p*m-p*y;for(let P=0;P!==o;++P)r[P]=d*a[u+P]+v*a[c+P]+x*a[l+P]+A*a[h+P];return r}},eo=class extends Vn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),h=1-u;for(let f=0;f!==o;++f)r[f]=a[c+f]*h+a[l+f]*u;return r}},to=class extends Vn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Qt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ir(t,this.TimeBufferType),this.values=ir(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ir(e.times,Array),values:ir(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new to(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new eo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new $a(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Bi:t=this.InterpolantFactoryMethodDiscrete;break;case ai:t=this.InterpolantFactoryMethodLinear;break;case ta:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bi;case this.InterpolantFactoryMethodLinear:return ai;case this.InterpolantFactoryMethodSmooth:return ta}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&ig(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ta,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let h=o*n,f=h-n,p=h+n;for(let g=0;g!==n;++g){let y=t[h+g];if(y!==t[f+g]||y!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Qt.prototype.TimeBufferType=Float32Array;Qt.prototype.ValueBufferType=Float32Array;Qt.prototype.DefaultInterpolation=ai;var Gn=class extends Qt{};Gn.prototype.ValueTypeName="bool";Gn.prototype.ValueBufferType=Array;Gn.prototype.DefaultInterpolation=Bi;Gn.prototype.InterpolantFactoryMethodLinear=void 0;Gn.prototype.InterpolantFactoryMethodSmooth=void 0;var Pr=class extends Qt{};Pr.prototype.ValueTypeName="color";var En=class extends Qt{};En.prototype.ValueTypeName="number";var no=class extends Vn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)Ft.slerpFlat(r,0,a,c-o,a,c,l);return r}},fn=class extends Qt{InterpolantFactoryMethodLinear(e){return new no(this.times,this.values,this.getValueSize(),e)}};fn.prototype.ValueTypeName="quaternion";fn.prototype.DefaultInterpolation=ai;fn.prototype.InterpolantFactoryMethodSmooth=void 0;var Wn=class extends Qt{};Wn.prototype.ValueTypeName="string";Wn.prototype.ValueBufferType=Array;Wn.prototype.DefaultInterpolation=Bi;Wn.prototype.InterpolantFactoryMethodLinear=void 0;Wn.prototype.InterpolantFactoryMethodSmooth=void 0;var _n=class extends Qt{};_n.prototype.ValueTypeName="vector";var Cr=class{constructor(e,t=-1,n,s=Oh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=sn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(ag(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Qt.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let u=sg(l);l=Wc(l,1,u),c=Wc(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new En(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],u=c.name.match(r);if(u&&u.length>1){let h=u[1],f=s[h];f||(s[h]=f=[]),f.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,f,p,g,y){if(p.length!==0){let m=[],d=[];vu(p,m,d,g),m.length!==0&&y.push(new h(f,m,d))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let p={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let y=0;y<f[g].morphTargets.length;y++)p[f[g].morphTargets[y]]=-1;for(let y in p){let m=[],d=[];for(let v=0;v!==f[g].morphTargets.length;++v){let x=f[g];m.push(x.time),d.push(x.morphTarget===y?1:0)}s.push(new En(".morphTargetInfluence["+y+"]",m,d))}l=p.length*a}else{let p=".bones["+t[h].name+"]";n(_n,p+".position",f,"pos",s),n(fn,p+".quaternion",f,"rot",s),n(_n,p+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function rg(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return En;case"vector":case"vector2":case"vector3":case"vector4":return _n;case"color":return Pr;case"quaternion":return fn;case"bool":case"boolean":return Gn;case"string":return Wn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function ag(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=rg(i.type);if(i.times===void 0){let t=[],n=[];vu(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Un={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},io=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}},og=new io,Rn=class{constructor(e){this.manager=e!==void 0?e:og,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Rn.DEFAULT_MATERIAL_NAME="__DEFAULT";var vn={},so=class extends Error{constructor(e,t){super(e),this.response=t}},As=class extends Rn{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Un.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(vn[e]!==void 0){vn[e].push({onLoad:t,onProgress:n,onError:s});return}vn[e]=[],vn[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=vn[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=f?parseInt(f):0,g=p!==0,y=0,m=new ReadableStream({start(d){v();function v(){h.read().then(({done:x,value:A})=>{if(x)d.close();else{y+=A.byteLength;let P=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:p});for(let E=0,w=u.length;E<w;E++){let z=u[E];z.onProgress&&z.onProgress(P)}d.enqueue(A),v()}})}}});return new Response(m)}else throw new so(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Un.add(e,c);let u=vn[e];delete vn[e];for(let h=0,f=u.length;h<f;h++){let p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{let u=vn[e];if(u===void 0)throw this.manager.itemError(e),c;delete vn[e];for(let h=0,f=u.length;h<f;h++){let p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var ro=class extends Rn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Un.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=hs("img");function l(){u(),Un.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var Lr=class extends Rn{constructor(e){super(e)}load(e,t,n,s){let r=new Tt,a=new ro(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},qi=class extends ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Ir=class extends qi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},_a=new Ge,Xc=new L,qc=new L,ws=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ps,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Xc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xc),qc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qc),t.updateMatrixWorld(),_a.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_a),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_a)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ao=class extends ws{constructor(){super(new pt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Hi*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Dr=class extends qi{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.target=new ot,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new ao}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},jc=new Ge,is=new L,Ra=new L,oo=class extends ws{constructor(){super(new pt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ae(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),is.setFromMatrixPosition(e.matrixWorld),n.position.copy(is),Ra.copy(n.position),Ra.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ra),n.updateMatrixWorld(),s.makeTranslation(-is.x,-is.y,-is.z),jc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jc)}},Nr=class extends qi{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new oo}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},lo=class extends ws{constructor(){super(new Vi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Pn=class extends qi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.target=new ot,this.shadow=new lo}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Xn=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var zr=class extends Rn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Un.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Un.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Un.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Un.add(e,l),r.manager.itemStart(e)}};var Mo="\\[\\]\\.:\\/",lg=new RegExp("["+Mo+"]","g"),bo="[^"+Mo+"]",cg="[^"+Mo.replace("\\.","")+"]",ug=/((?:WC+[\/:])*)/.source.replace("WC",bo),hg=/(WCOD+)?/.source.replace("WCOD",cg),fg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bo),dg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bo),pg=new RegExp("^"+ug+hg+fg+dg+"$"),mg=["material","materials","bones","map"],co=class{constructor(e,t,n){let s=n||nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},nt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(lg,"")}static parseTrackName(e){let t=pg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);mg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};nt.Composite=co;nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nt.prototype.GetterByBindingType=[nt.prototype._getValue_direct,nt.prototype._getValue_array,nt.prototype._getValue_arrayElement,nt.prototype._getValue_toArray];nt.prototype.SetterByBindingTypeAndVersioning=[[nt.prototype._setValue_direct,nt.prototype._setValue_direct_setNeedsUpdate,nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_array,nt.prototype._setValue_array_setNeedsUpdate,nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_arrayElement,nt.prototype._setValue_arrayElement_setNeedsUpdate,nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_fromArray,nt.prototype._setValue_fromArray_setNeedsUpdate,nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Kg=new Float32Array(1);var Or=class{constructor(e,t,n=0,s=1/0){this.ray=new wn(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new fs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return uo(e,this,n,t),n.sort(Zc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)uo(e[s],this,n,t);return n.sort(Zc),n}};function Zc(i,e){return i.distance-e.distance}function uo(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)uo(s[r],e,t,!0)}}var li=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(wt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ho}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ho);var Mu={type:"change"},So={type:"start"},bu={type:"end"},kr=new wn,Su=new Gt,yg=Math.cos(70*ji.DEG2RAD),Vr=class extends un{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ci.ROTATE,MIDDLE:ci.DOLLY,RIGHT:ci.PAN},this.touches={ONE:ui.ROTATE,TWO:ui.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",ee),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ee),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Mu),n.update(),r=s.NONE},this.update=function(){let R=new L,Z=new Ft().setFromUnitVectors(e.up,new L(0,1,0)),le=Z.clone().invert(),ie=new L,ve=new Ft,He=new L,je=2*Math.PI;return function(oe=null){let C=n.object.position;R.copy(C).sub(n.target),R.applyQuaternion(Z),o.setFromVector3(R),n.autoRotate&&r===s.NONE&&k(b(oe)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let se=n.minAzimuthAngle,re=n.maxAzimuthAngle;isFinite(se)&&isFinite(re)&&(se<-Math.PI?se+=je:se>Math.PI&&(se-=je),re<-Math.PI?re+=je:re>Math.PI&&(re-=je),se<=re?o.theta=Math.max(se,Math.min(re,o.theta)):o.theta=o.theta>(se+re)/2?Math.max(se,o.theta):Math.min(re,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&E||n.object.isOrthographicCamera?o.radius=W(o.radius):o.radius=W(o.radius*c),R.setFromSpherical(o),R.applyQuaternion(le),C.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let Te=!1;if(n.zoomToCursor&&E){let be=null;if(n.object.isPerspectiveCamera){let Ze=R.length();be=W(Ze*c);let Ke=Ze-be;n.object.position.addScaledVector(A,Ke),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let Ze=new L(P.x,P.y,0);Ze.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Te=!0;let Ke=new L(P.x,P.y,0);Ke.unproject(n.object),n.object.position.sub(Ke).add(Ze),n.object.updateMatrixWorld(),be=R.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;be!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(be).add(n.object.position):(kr.origin.copy(n.object.position),kr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(kr.direction))<yg?e.lookAt(n.target):(Su.setFromNormalAndCoplanarPoint(n.object.up,n.target),kr.intersectPlane(Su,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Te=!0);return c=1,E=!1,Te||ie.distanceToSquared(n.object.position)>a||8*(1-ve.dot(n.object.quaternion))>a||He.distanceToSquared(n.target)>0?(n.dispatchEvent(Mu),ie.copy(n.object.position),ve.copy(n.object.quaternion),He.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",me),n.domElement.removeEventListener("pointerdown",De),n.domElement.removeEventListener("pointercancel",M),n.domElement.removeEventListener("wheel",J),n.domElement.removeEventListener("pointermove",T),n.domElement.removeEventListener("pointerup",M),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ee),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,a=1e-6,o=new li,l=new li,c=1,u=new L,h=new Ae,f=new Ae,p=new Ae,g=new Ae,y=new Ae,m=new Ae,d=new Ae,v=new Ae,x=new Ae,A=new L,P=new Ae,E=!1,w=[],z={};function b(R){return R!==null?2*Math.PI/60*n.autoRotateSpeed*R:2*Math.PI/60/60*n.autoRotateSpeed}function _(R){let Z=Math.abs(R)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*Z)}function k(R){l.theta-=R}function q(R){l.phi-=R}let ae=function(){let R=new L;return function(le,ie){R.setFromMatrixColumn(ie,0),R.multiplyScalar(-le),u.add(R)}}(),I=function(){let R=new L;return function(le,ie){n.screenSpacePanning===!0?R.setFromMatrixColumn(ie,1):(R.setFromMatrixColumn(ie,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(le),u.add(R)}}(),O=function(){let R=new L;return function(le,ie){let ve=n.domElement;if(n.object.isPerspectiveCamera){let He=n.object.position;R.copy(He).sub(n.target);let je=R.length();je*=Math.tan(n.object.fov/2*Math.PI/180),ae(2*le*je/ve.clientHeight,n.object.matrix),I(2*ie*je/ve.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(ae(le*(n.object.right-n.object.left)/n.object.zoom/ve.clientWidth,n.object.matrix),I(ie*(n.object.top-n.object.bottom)/n.object.zoom/ve.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function G(R){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(R){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(R,Z){if(!n.zoomToCursor)return;E=!0;let le=n.domElement.getBoundingClientRect(),ie=R-le.left,ve=Z-le.top,He=le.width,je=le.height;P.x=ie/He*2-1,P.y=-(ve/je)*2+1,A.set(P.x,P.y,1).unproject(n.object).sub(n.object.position).normalize()}function W(R){return Math.max(n.minDistance,Math.min(n.maxDistance,R))}function Q(R){h.set(R.clientX,R.clientY)}function ne(R){X(R.clientX,R.clientX),d.set(R.clientX,R.clientY)}function fe(R){g.set(R.clientX,R.clientY)}function V(R){f.set(R.clientX,R.clientY),p.subVectors(f,h).multiplyScalar(n.rotateSpeed);let Z=n.domElement;k(2*Math.PI*p.x/Z.clientHeight),q(2*Math.PI*p.y/Z.clientHeight),h.copy(f),n.update()}function Y(R){v.set(R.clientX,R.clientY),x.subVectors(v,d),x.y>0?G(_(x.y)):x.y<0&&j(_(x.y)),d.copy(v),n.update()}function he(R){y.set(R.clientX,R.clientY),m.subVectors(y,g).multiplyScalar(n.panSpeed),O(m.x,m.y),g.copy(y),n.update()}function Me(R){X(R.clientX,R.clientY),R.deltaY<0?j(_(R.deltaY)):R.deltaY>0&&G(_(R.deltaY)),n.update()}function xe(R){let Z=!1;switch(R.code){case n.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,n.keyPanSpeed),Z=!0;break;case n.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,-n.keyPanSpeed),Z=!0;break;case n.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?k(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(n.keyPanSpeed,0),Z=!0;break;case n.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?k(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(-n.keyPanSpeed,0),Z=!0;break}Z&&(R.preventDefault(),n.update())}function Le(R){if(w.length===1)h.set(R.pageX,R.pageY);else{let Z=qe(R),le=.5*(R.pageX+Z.x),ie=.5*(R.pageY+Z.y);h.set(le,ie)}}function Ie(R){if(w.length===1)g.set(R.pageX,R.pageY);else{let Z=qe(R),le=.5*(R.pageX+Z.x),ie=.5*(R.pageY+Z.y);g.set(le,ie)}}function Ee(R){let Z=qe(R),le=R.pageX-Z.x,ie=R.pageY-Z.y,ve=Math.sqrt(le*le+ie*ie);d.set(0,ve)}function Xe(R){n.enableZoom&&Ee(R),n.enablePan&&Ie(R)}function N(R){n.enableZoom&&Ee(R),n.enableRotate&&Le(R)}function Mt(R){if(w.length==1)f.set(R.pageX,R.pageY);else{let le=qe(R),ie=.5*(R.pageX+le.x),ve=.5*(R.pageY+le.y);f.set(ie,ve)}p.subVectors(f,h).multiplyScalar(n.rotateSpeed);let Z=n.domElement;k(2*Math.PI*p.x/Z.clientHeight),q(2*Math.PI*p.y/Z.clientHeight),h.copy(f)}function we(R){if(w.length===1)y.set(R.pageX,R.pageY);else{let Z=qe(R),le=.5*(R.pageX+Z.x),ie=.5*(R.pageY+Z.y);y.set(le,ie)}m.subVectors(y,g).multiplyScalar(n.panSpeed),O(m.x,m.y),g.copy(y)}function Pe(R){let Z=qe(R),le=R.pageX-Z.x,ie=R.pageY-Z.y,ve=Math.sqrt(le*le+ie*ie);v.set(0,ve),x.set(0,Math.pow(v.y/d.y,n.zoomSpeed)),G(x.y),d.copy(v);let He=(R.pageX+Z.x)*.5,je=(R.pageY+Z.y)*.5;X(He,je)}function ge(R){n.enableZoom&&Pe(R),n.enablePan&&we(R)}function it(R){n.enableZoom&&Pe(R),n.enableRotate&&Mt(R)}function De(R){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",T),n.domElement.addEventListener("pointerup",M)),_e(R),R.pointerType==="touch"?ye(R):U(R))}function T(R){n.enabled!==!1&&(R.pointerType==="touch"?ue(R):te(R))}function M(R){ze(R),w.length===0&&(n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",T),n.domElement.removeEventListener("pointerup",M)),n.dispatchEvent(bu),r=s.NONE}function U(R){let Z;switch(R.button){case 0:Z=n.mouseButtons.LEFT;break;case 1:Z=n.mouseButtons.MIDDLE;break;case 2:Z=n.mouseButtons.RIGHT;break;default:Z=-1}switch(Z){case ci.DOLLY:if(n.enableZoom===!1)return;ne(R),r=s.DOLLY;break;case ci.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enablePan===!1)return;fe(R),r=s.PAN}else{if(n.enableRotate===!1)return;Q(R),r=s.ROTATE}break;case ci.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enableRotate===!1)return;Q(R),r=s.ROTATE}else{if(n.enablePan===!1)return;fe(R),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(So)}function te(R){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;V(R);break;case s.DOLLY:if(n.enableZoom===!1)return;Y(R);break;case s.PAN:if(n.enablePan===!1)return;he(R);break}}function J(R){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(R.preventDefault(),n.dispatchEvent(So),Me(R),n.dispatchEvent(bu))}function ee(R){n.enabled===!1||n.enablePan===!1||xe(R)}function ye(R){switch(K(R),w.length){case 1:switch(n.touches.ONE){case ui.ROTATE:if(n.enableRotate===!1)return;Le(R),r=s.TOUCH_ROTATE;break;case ui.PAN:if(n.enablePan===!1)return;Ie(R),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case ui.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Xe(R),r=s.TOUCH_DOLLY_PAN;break;case ui.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;N(R),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(So)}function ue(R){switch(K(R),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Mt(R),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;we(R),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ge(R),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;it(R),n.update();break;default:r=s.NONE}}function me(R){n.enabled!==!1&&R.preventDefault()}function _e(R){w.push(R.pointerId)}function ze(R){delete z[R.pointerId];for(let Z=0;Z<w.length;Z++)if(w[Z]==R.pointerId){w.splice(Z,1);return}}function K(R){let Z=z[R.pointerId];Z===void 0&&(Z=new Ae,z[R.pointerId]=Z),Z.set(R.pageX,R.pageY)}function qe(R){let Z=R.pointerId===w[0]?w[1]:w[0];return z[Z]}n.domElement.addEventListener("contextmenu",me),n.domElement.addEventListener("pointerdown",De),n.domElement.addEventListener("pointercancel",M),n.domElement.addEventListener("wheel",J,{passive:!1}),this.update()}};function Ao(i,e){if(e===ru)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Ts||e===Fr){let t=i.getIndex();if(t===null){let a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Ts)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Gr=class extends Rn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Co(t)}),this.register(function(t){return new Bo(t)}),this.register(function(t){return new Ho(t)}),this.register(function(t){return new ko(t)}),this.register(function(t){return new Io(t)}),this.register(function(t){return new Do(t)}),this.register(function(t){return new No(t)}),this.register(function(t){return new zo(t)}),this.register(function(t){return new Po(t)}),this.register(function(t){return new Oo(t)}),this.register(function(t){return new Lo(t)}),this.register(function(t){return new Fo(t)}),this.register(function(t){return new Uo(t)}),this.register(function(t){return new _o(t)}),this.register(function(t){return new Vo(t)}),this.register(function(t){return new Go(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Xn.extractUrlBase(e);a=Xn.resolveURL(c,this.path)}else a=Xn.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new As(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===_u){try{a[We.KHR_BINARY_GLTF]=new Wo(e)}catch(h){s&&s(h);return}r=JSON.parse(a[We.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Jo(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case We.KHR_MATERIALS_UNLIT:a[h]=new Ro;break;case We.KHR_DRACO_MESH_COMPRESSION:a[h]=new Xo(r,this.dracoLoader);break;case We.KHR_TEXTURE_TRANSFORM:a[h]=new qo;break;case We.KHR_MESH_QUANTIZATION:a[h]=new jo;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function xg(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var We={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},_o=class{constructor(e){this.parser=e,this.name=We.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new pe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],gt);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Pn(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Nr(u),c.distance=h;break;case"spot":c=new Dr(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,jn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},Ro=class{constructor(){this.name=We.KHR_MATERIALS_UNLIT}getMaterialType(){return qt}extendParams(e,t,n){let s=[];e.color=new pe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],gt),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,$e))}return Promise.all(s)}},Po=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Co=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ae(o,o)}return Promise.all(r)}},Lo=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},Io=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new pe(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],gt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,$e)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},Do=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},No=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new pe().setRGB(o[0],o[1],o[2],gt),Promise.all(r)}},zo=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vt}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Oo=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new pe().setRGB(o[0],o[1],o[2],gt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,$e)),Promise.all(r)}},Uo=class{constructor(e){this.parser=e,this.name=We.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},Fo=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},Bo=class{constructor(e){this.parser=e,this.name=We.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Ho=class{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},ko=class{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Vo=class{constructor(e){this.name=We.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(p),u,h,f,s.mode,s.filter),p})})}else return null}},Go=class{constructor(e){this.name=We.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==$t.TRIANGLES&&c.mode!==$t.TRIANGLE_STRIP&&c.mode!==$t.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,p=[];for(let g of h){let y=new Ge,m=new L,d=new Ft,v=new L(1,1,1),x=new Sr(g.geometry,g.material,f);for(let A=0;A<f;A++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,A),l.ROTATION&&d.fromBufferAttribute(l.ROTATION,A),l.SCALE&&v.fromBufferAttribute(l.SCALE,A),x.setMatrixAt(A,y.compose(m,d,v));for(let A in l)if(A==="_COLOR_0"){let P=l[A];x.instanceColor=new oi(P.array,P.itemSize,P.normalized)}else A!=="TRANSLATION"&&A!=="ROTATION"&&A!=="SCALE"&&g.geometry.setAttribute(A,l[A]);ot.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),p.push(x)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}},_u="glTF",Es=12,Au={JSON:1313821514,BIN:5130562},Wo=class{constructor(e){this.name=We.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Es),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==_u)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Es,r=new DataView(e,Es),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Au.JSON){let c=new Uint8Array(e,Es+a,o);this.content=n.decode(c)}else if(l===Au.BIN){let c=Es+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Xo=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=We.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let u in a){let h=Yo[u]||u.toLowerCase();o[h]=a[u]}for(let u in e.attributes){let h=Yo[u]||u.toLowerCase();if(a[u]!==void 0){let f=n.accessors[e.attributes[u]],p=Yi[f.componentType];c[h]=p.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(p){for(let g in p.attributes){let y=p.attributes[g],m=l[g];m!==void 0&&(y.normalized=m)}h(p)},o,c,gt,f)})})}},qo=class{constructor(){this.name=We.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},jo=class{constructor(){this.name=We.KHR_MESH_QUANTIZATION}},Wr=class extends Vn{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=s-t,h=(n-t)/u,f=h*h,p=f*h,g=e*c,y=g-c,m=-2*p+3*f,d=p-f,v=1-m,x=d-f+h;for(let A=0;A!==o;A++){let P=a[y+A+o],E=a[y+A+l]*u,w=a[g+A+o],z=a[g+A]*u;r[A]=v*P+x*E+m*w+d*z}return r}},vg=new Ft,Zo=class extends Wr{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return vg.fromArray(r).normalize().toArray(r),r}},$t={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Yi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},wu={9728:dt,9729:zt,9984:rr,9985:mo,9986:ss,9987:kn},Tu={33071:Wt,33648:cs,10497:rn},wo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Yo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},qn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Mg={CUBICSPLINE:void 0,LINEAR:ai,STEP:Bi},To={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function bg(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new hn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:cn})),i.DefaultMaterial}function hi(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function jn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Sg(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(f)}if(s){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(f)}if(r){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],f=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function Ag(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function wg(i){let e,t=i.extensions&&i.extensions[We.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Eo(t.attributes):e=i.indices+":"+Eo(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Eo(i.targets[n]);return e}function Eo(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Ko(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Tg(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var Eg=new Ge,Jo=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new xg,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||s&&r<98?this.textureLoader=new Lr(this.options.manager):this.textureLoader=new zr(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new As(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return hi(r,o,s),jn(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,u]of a.children.entries())r(u,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[We.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(Xn.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=wo[s.type],o=Yi[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new Ye(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=wo[s.type],c=Yi[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,y,m;if(p&&p!==h){let d=Math.floor(f/p),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+d+":"+s.count,x=t.cache.get(v);x||(y=new c(o,d*p,s.count*p/u),x=new xs(y,p/u),t.cache.add(v,x)),m=new vs(x,l,f%p/u,g)}else o===null?y=new c(s.count*l):y=new c(o,f,s.count*l),m=new Ye(y,l,g);if(s.sparse!==void 0){let d=wo.SCALAR,v=Yi[s.sparse.indices.componentType],x=s.sparse.indices.byteOffset||0,A=s.sparse.values.byteOffset||0,P=new v(a[1],x,s.sparse.count*d),E=new c(a[2],A,s.sparse.count*l);o!==null&&(m=new Ye(m.array.slice(),m.itemSize,m.normalized));for(let w=0,z=P.length;w<z;w++){let b=P[w];if(m.setX(b,E[w*l]),l>=2&&m.setY(b,E[w*l+1]),l>=3&&m.setZ(b,E[w*l+2]),l>=4&&m.setW(b,E[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let f=(r.samplers||{})[a.sampler]||{};return u.magFilter=wu[f.magFilter]||zt,u.minFilter=wu[f.minFilter]||kn,u.wrapS=Tu[f.wrapS]||rn,u.wrapT=Tu[f.wrapT]||rn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;let f=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(f,p){let g=f;t.isImageBitmapLoader===!0&&(g=function(y){let m=new Tt(y);m.needsUpdate=!0,f(m)}),t.load(Xn.resolveURL(h,r.path),g,void 0,p)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),h.userData.mimeType=a.mimeType||Tg(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[We.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[We.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[We.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Ss,Bt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new bs,Bt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return hn}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[We.KHR_MATERIALS_UNLIT]){let h=s[We.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{let h=r.pbrMetallicRoughness||{};if(o.color=new pe(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],gt),o.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,$e)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Pt);let u=r.alphaMode||To.OPAQUE;if(u===To.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===To.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==qt&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ae(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==qt&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==qt){let h=r.emissiveFactor;o.emissive=new pe().setRGB(h[0],h[1],h[2],gt)}return r.emissiveTexture!==void 0&&a!==qt&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,$e)),Promise.all(c).then(function(){let h=new a(o);return r.name&&(h.name=r.name),jn(h,r),t.associations.set(h,{materials:e}),r.extensions&&hi(s,h,r),h})}createUniqueName(e){let t=nt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[We.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Eu(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],u=wg(c),h=s[u];if(h)a.push(h.promise);else{let f;c.extensions&&c.extensions[We.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Eu(new ft,c,t),s[u]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let u=a[l].material===void 0?bg(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,g=u.length;p<g;p++){let y=u[p],m=a[p],d,v=c[p];if(m.mode===$t.TRIANGLES||m.mode===$t.TRIANGLE_STRIP||m.mode===$t.TRIANGLE_FAN||m.mode===void 0)d=r.isSkinnedMesh===!0?new Mr(y,v):new at(y,v),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===$t.TRIANGLE_STRIP?d.geometry=Ao(d.geometry,Fr):m.mode===$t.TRIANGLE_FAN&&(d.geometry=Ao(d.geometry,Ts));else if(m.mode===$t.LINES)d=new Ar(y,v);else if(m.mode===$t.LINE_STRIP)d=new Wi(y,v);else if(m.mode===$t.LINE_LOOP)d=new wr(y,v);else if(m.mode===$t.POINTS)d=new Tr(y,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&Ag(d,r),d.name=t.createUniqueName(r.name||"mesh_"+e),jn(d,r),m.extensions&&hi(s,d,m),t.assignFinalMaterial(d),h.push(d)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return r.extensions&&hi(s,h[0],r),h[0];let f=new Xt;r.extensions&&hi(s,f,r),t.associations.set(f,{meshes:e});for(let p=0,g=h.length;p<g;p++)f.add(h[p]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new pt(ji.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Vi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),jn(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,u=a.length;c<u;c++){let h=a[c];if(h){o.push(h);let f=new Ge;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new br(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){let p=s.channels[h],g=s.samplers[p.sampler],y=p.target,m=y.node,d=s.parameters!==void 0?s.parameters[g.input]:g.input,v=s.parameters!==void 0?s.parameters[g.output]:g.output;y.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",d)),l.push(this.getDependency("accessor",v)),c.push(g),u.push(y))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let f=h[0],p=h[1],g=h[2],y=h[3],m=h[4],d=[];for(let v=0,x=f.length;v<x;v++){let A=f[v],P=p[v],E=g[v],w=y[v],z=m[v];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();let b=n._createAnimationTracks(A,P,E,w,z);if(b)for(let _=0;_<b.length;_++)d.push(b[_])}return new Cr(r,void 0,d)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(f,Eg)});for(let p=0,g=h.length;p<g;p++)u.add(h[p]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new Ms:c.length>1?u=new Xt:c.length===1?u=c[0]:u=new ot,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=a),jn(u,r),r.extensions&&hi(n,u,r),r.matrix!==void 0){let h=new Ge;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Xt;n.name&&(r.name=s.createUniqueName(n.name)),jn(r,n),n.extensions&&hi(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);let c=u=>{let h=new Map;for(let[f,p]of s.associations)(f instanceof Bt||f instanceof Tt)&&h.set(f,p);return u.traverse(f=>{let p=s.associations.get(f);p!=null&&h.set(f,p)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];qn[r.path]===qn.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(o);let c;switch(qn[r.path]){case qn.weights:c=En;break;case qn.rotation:c=fn;break;case qn.position:case qn.scale:c=_n;break;default:switch(n.itemSize){case 1:c=En;break;case 2:case 3:default:c=_n;break}break}let u=s.interpolation!==void 0?Mg[s.interpolation]:ai,h=this._getArrayFromAccessor(n);for(let f=0,p=l.length;f<p;f++){let g=new c(l[f]+"."+qn[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Ko(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof fn?Zo:Wr;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function _g(i,e,t){let n=e.attributes,s=new Jt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),o.normalized){let u=Ko(Yi[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new L,l=new L;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){let y=Ko(Yi[f.componentType]);l.multiplyScalar(y)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new Ot;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Eu(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=Yo[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return Je.workingColorSpace!==gt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Je.workingColorSpace}" not supported.`),jn(i,e),_g(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Sg(i,e.targets,t):i})}var Ru=`
'use strict';
const DEG = Math.PI / 180;
const add=(a,b)=>[a[0]+b[0],a[1]+b[1],a[2]+b[2]];
const sub=(a,b)=>[a[0]-b[0],a[1]-b[1],a[2]-b[2]];
const mul=(a,s)=>[a[0]*s,a[1]*s,a[2]*s];
const dot=(a,b)=>a[0]*b[0]+a[1]*b[1]+a[2]*b[2];
const cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];
const len=a=>Math.hypot(a[0],a[1],a[2]);
const norm=a=>{const l=len(a)||1;return [a[0]/l,a[1]/l,a[2]/l]};
const lerp=(a,b,t)=>[a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t,a[2]+(b[2]-a[2])*t];
const I3=[[1,0,0],[0,1,0],[0,0,1]];

function frameAlong(dir, hint){
  const ey=norm(dir); let h=sub(hint, mul(ey, dot(hint,ey)));
  if(len(h)<1e-6) h=[1,0,0];
  const ez=norm(h); const ex=cross(ey,ez); return [ex,ey,ez];
}
function frameEuler(rx,ry,rz){
  const rot=v=>{ let [x,y,z]=v, c, s;
    c=Math.cos(rz); s=Math.sin(rz); [x,y]=[x*c-y*s, x*s+y*c];
    c=Math.cos(rx); s=Math.sin(rx); [y,z]=[y*c-z*s, y*s+z*c];
    c=Math.cos(ry); s=Math.sin(ry); [x,z]=[x*c+z*s, -x*s+z*c];
    return [x,y,z]; };
  return [rot([1,0,0]), rot([0,1,0]), rot([0,0,1])];
}

/* ---------- especificaciones de primitivas ---------- */
function E(L,c,r,ax,k,op){ L.push({t:'e',c,r,ax:ax||I3,k:k==null?0.02:k,op:op||0}); }
function C(L,a,b,r1,r2,k,op){ L.push({t:'c',a,b,r1,r2,k:k==null?0.02:k,op:op||0}); }
function G0(L,tag){ L.push({t:'g0',tag:tag||''}); }
function G1(L){ L.push({t:'g1'}); }
const mx=v=>[-v[0],v[1],v[2]];
function mirrorSpec(s){
  if(s.t==='e') return {...s,c:mx(s.c),ax:s.ax.map(mx)};
  if(s.t==='c') return {...s,a:mx(s.a),b:mx(s.b)};
  if(s.t==='t') return {...s,mx:!s.mx};
  return {...s};
}
function both(L,fn){ const tmp=[]; fn(tmp); for(const s of tmp) L.push(s); for(const s of tmp) L.push(mirrorSpec(s)); }

function sstep(a,b,v){ const t=Math.min(1,Math.max(0,(v-a)/(b-a))); return t*t*(3-2*t); }

/* ---------- datos anat\xF3micos de referencia ----------
   Remuestreo de \xABHuman Male/Female Basemesh Rigged\xBB de Niclas (Sketchfab, CC BY 4.0):
   \xB7 HEADS: mapa radial esf\xE9rico R(\u03B8,\u03C6) de cada cabeza.
   \xB7 BODY:  tubos radiales R(s,\u03C6) de torso, pierna, pie, brazo y antebrazo, m\xE1s articulaciones.
   Todo va en deltas de 16 bits + deflate + base64 y se descomprime al arrancar el worker. */
const HEADS={"nf":{"nlat":160,"nlon":320,"lo":0.06172,"hi":0.13666,"dc":0.095,"zc":-0.012,"dcut":0.214,"nk":[-0.0369,0.0469,0.0475],"z":"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"},"nm":{"nlat":160,"nlon":320,"lo":0.06108,"hi":0.13569,"dc":0.095,"zc":-0.012,"dcut":0.209,"nk":[-0.0345,0.0582,0.0567],"z":"zLt1XBtB2/eLu1uLF2poldJS2mItFCmlFG2huLu7e3F3dwvu7u4W3AOEEAJBQwjvJ7S9n/t5z/mcv8+1k9ldspn9zm+ua2Z22QVj/P/c+jEwMDEw/2T/tfx/Z/9Z/dfyP6v/WqPT/976vzb/H5//vYGBgWGAgYmJiYmF+S/HQqf/K/uz/s/n79F/DONf9j8V+Lf7//bBwPxftfuH+z92c5v+q+JYmFh/DBud/mb/e0GnvxnW7eGY/5Zb2v859R/a/1QJ62/Z/87wd+v2739rif7dLeENxg3aUGi7RqFud25uv6rDxMbB/mNYf9I/FCwcbJw/Cfu/Drn9FvsPJ+b/CPBHvVu4v5X9Y+hf49za39Wfrb8lYv2nlFu462vkNRKJzlHXaEPdYNxgJGHh4uDi/Dv8tlJ/qoPCwPwDcnta7D8l/y0XG10sBrrMG/Rygy4ILcZfur9QuLi4uHi4eHh4ePjo5dYIbu12Dw8Xfd5bwj9019fXSCTy+rbMf0KiMOJw8PDwcG+P/Xta1M01Cn0kEl0d5NXV1RUCcYW6reYtKDY2FsYN6vb7a9QfvhuMmz8C/sPDxcG9JcPDxydAQxESEhIRk5KSkpGTk5ORkZIQExMREuDj4+LiYKPPiYZBk/2pLsbNH4X+7Kbi3tYID+9vdTBu0EpfXV1dIi4uLs7Pz85OT09PTs7Ozs/Ozs4RKBS6OVHIqyvEFRL1z7P/0v23fmi2W70I0XBERMQkZJTUNHR0d2hpqKgoKMhISNCIuDjo2t78pxVuw+QG43b/1h9RN1W4xESEhAQEeHh4aHEwMW9Q10gE4vLylu0EDocfHcOODtEGg8GO4aenF1fIq1vxbl3kX9jdcqIpcXBwcfBw8fBvqYiISYhJSEhJSUlJSEnJKaju0DMw0t+ho6GmIicjJSbEx8PF/tf1YP4Llls81N9wuUYB8UhJ/wiOh4uLBsRAXSMvL87Pzk7g8KMj2OHhwR+DQA9hh9BD6CHsGA4/vUQgb934Nr9GF3R9c4NWEAcPn4CQgBAtGQkpCSkZGRklJSUVJSUFOTkpGTkFzV0mZmZGejpaakoyUmICfNxbx/8T0Rh/o/mvC6Id7foaRUxAgXYKIiI0Ic4fBa8uz09Pjo9gh9ADCGR/fx8MOTiAQCCQA8g+ZB+8j07Qw6PTi0sEekGnKyQKdYN5qxzBrXTEJGiXIyWjoKSlu3uHjo6OhoYaTUlBdYfxHisakYaSjJQQH+dPbGL9E/A/Xc2fiEYir2WJqCkpKEhJiQkJ0R6BiXFzfXV1cQ4/PoRC9vfBe+C9/X0wGAze293d2QGBtrdBW9u3trN3AIOfnqHtEnGFQscPLj4eAf5tQKAJSUnJyCjpGFhYmJmZmBgY7t6lQzctBRUt0z22e0wMdDSUpIR4OLe9x1/AW/n+0N3CoQP0upaQmpqKkoKUhIgAH82H9sDL81P44QF4b293b29vb3dnZ3t7c3NzY319bXV1dWV1ZWV1ZXV1bW19aw8CO4KfnV9dY2DcdkS4eLi3ofGXkJyage3ho4cP7rOz32NlYWZkoL9LS0tNRcvEdp+NmYGOihQtyb/u7V9niPpDd4VEXCEQCATSDI+EHB37JET4uFgYKHR8nJ0eH0H393bBe+Dd3Z3tzc31tdWV5aWlxYUFIBA4Nzs3NzcHnAMC5xeW1kH7R+fI69v4QIcvunP5S0hEQkpx9wH3E15ebi7Ox48ePWBnu8fCxEB/h4aGjvn+Azbmu5REuDg4fyW8dcGb/9ChuzbEJeLi8hJpge4H8dE1xsfFukEiLk7hR9D93R0QaA+8t7O9tbGxurK0OA+cm52Znp6cmBgfQ9v4xMTkxOTUzNzi+j788uoKeY261RAX3cp/+IhJyGgY7/O+fPXq5YtnT3h5uDge3b9/7x4zI/0d2rssDx+y3iFF94P/+mq0fH/hEFdo3768vED3c8hkbDwsDBQKAwePAA8b4/ryHA47AO+gfQy0vbG2vLi4gEabmhgfHR0eGhoYGBgYGhwcHB4dRXNOTEzNru4ewuGn5xdIdDeOi0eAT/g3hMmomVjZHj8TeP9eUOD1qxfPnnBzPHzIzsbMyHCXjoHtESs1IR4eLjaa7xbub/eLVu4f3PnF2TlyGRsP8+bq/Oz88gYLGwOFOIMfQvZ2dnZAW+vLi8CZyYnRkcHBwf6+vr6e7q7u7p7u3v6B/oGBwaHBoaHh4eGR0clF0P7h4fHJ+SXy+gYbF5+AkPgWj5ya5eGjh4+4XgqLf/oo8kFQ4NWLJzwcD9lvAWkY2RhI0Xy3Q8MNehy51Q7xV7lz9BCBHhrOrviwcbGuEWfH0IPDEwQKhTg7Ptzf29sBbawuAmcmRof6ezvb21qaGpuaW1rb2ru6OtGYt9bT09Pb198/MLawvX8AOzo5u0BcY2Dh4KMbl4ycnJqZ8ykvDxfXEwGJr1+lJcVFhQRfv3zK9YidmYGWioyalpwABxf7Fu/6+ho9cl1e3g5c/9hO0cvpKSIFBxcTeXECg+xsb+4dXV6cHUMhe7vba8vzM5OjQ31dHS1N9TWV5RWV1XVNzc1trS0tzc3NLc3NLS0trW1t7R2d3b0jC6D9g8Pj03MEEoWFjU9IQkZOSUXFwMn/+tXLF0+fvBT+pqKs8E1G8pPIu9cvnnDcZ75DSUJChHfbvaD50IF5cXZ2CocfH8GOjuHw4+PjI/jJrcERd7FxMa/Ojw/2ttYWF5Z3YSdH0P2drbXF2Sk0XltzfU1lWSkAUFFZWV1dVVNdU1NTXV1VXY3eqK2tr29oamnvHl8H3wJeXt9g4uATkpBTUtPeYef7IPT+nQD/q5dvpNS0NdWUFb5KiQsL8j95zEZPQ05MgIN5g55ZoZBINN7pCfwYBoPejgf7++DdvX3oIRR6eHyMKMbGvUGcwsDb64uzk6OTS7tQyO7myvz0+FBfZ1tjbVV5SVFxSXllZWU5oLS4qLCouKS4pLi4pKSkBACoqKqurq1v7h5bBUOP4KfniGu0ggQkZBQ0dExcb4TFRESFhQQF3ggrGZka6mr8UJCTEhV4/piN8Q41GTE+FgpxcXp6dnFxeX72b+DaR7vXzvb21uY2aHt7C7QPOZPCwUFdwA92NpbmJoZ6O3tmNjdXgFMTw/2drY01FYDC/IIiQEVFRVlJUUF+TlZmZkZGVlZ2Vk5eQWFhcVlFZVV1fcfg1AIIcoh2QuQ1BjYOPjEpBc3dB3wfhEVExT59FBN+/15a397O0kRPU0VW9PUTjvusjHeoyIhwMZHnx7CDA9jxycnJ8dHh4QF6MAWDd3dB25tbW5vr6+jBAFaDjX19cbS/vTY/NdLbWt8wMDM10t/V1dZYU1FWkp+bk1dSVl5eWlKYn5OVkZaSnBAfH5+YmpaZU1BQUFhcUlJW29o3Oja1BNqHwuDoMLnBxCUkoaRleiL6+bME2j6LfxT5pObg5eZgqa/y+T3/Mx40IR0VKQH2zeXJIRi0vQ2Gwo6P4Ucw6OERDHYA2d/bAW1voYeH5cWFgx5s7OtzGHhrGTje11Zb2dQ/1NveUFNRkp+Vnp6amlkIqCgvLS7Iy8lMT0mKj42OioqMiklMzcjMzsrOysrJK2vq6u0fHJxcAe0dHMKOT84QKGx8Ykpa9ndyiooK8vJfv8rKSH8Wl7cMDPa01JD7+OEt/4unPI/Yme5QkeBhXZ3BwNuri8vru8cXt46IVhK6D0aPXxtrK8tLC/OQfGxs5NkheHNpeqijrqyyra+zubasMDs1MTYyIjIxF1BWUlyYl5WRmhwfExURHh4eERUZGRUTn5CQmJCQlFZY3dzW3t7ZNTC9uomeP0COzq4w8Igp6LhlNHW0tTQ11H/+UFb8Jitn4B/mavBDQVbqo/C7t6+fcT1guUNBhIM8h+1tr84DZ5f2zxGIi/MT+NEhFIIewTY31lbRfHMQFzQgDLw5P9bTWFZS097WUFGcm5EUFx0eGhGflZ+fnZ6elpyUEBsVHhIaEhoeHhYWEhwYGBQcGhoWHptZWl1bV9/Q1Nw2ML0wv7i6uQuFX97gEFEyvdawtLK0MDMzMdLX1fqlqqTl5mtnZKCv+VPhi6TYe/5nHGz01MTY1+eH+6D1JeDkxNwO/OwMfgyDQtD6bW3945vdF8HGvkHA91dnBlorC0vqGmsBBdmpSXGRYaGRKbn5OWmJ0ZGhv0OCg34H/Q4JCQn5Hejv4+Xp7u7u6e37OyGnuLSsvKKquqa+tX90cnZxHQQ5OkfhktI+krb29PRwc3V2tLOxMDHU1TFycne2s7Yw0ful/PWziMBzLnYGKmIc1MUxOjxnJ4b6x9ag8KPDg/09dIhsrK0tLy8toCcA4CtcQjwUfHdxtKu2KLe0uqokPxPdvCHBkan5hblpCdGhAV5uzk5uPgG/fwcF+Hh5uDo72tva2Ng4eISlZOXmFRQXlwLKK2pae4cngcubu7ALTCIaxpda/uERaK39PFyd7G1sHDwD/DydrEyMddRVFaQ/Cr7kvs9IQ4KHgTg52FlfmB7t72zrXwSj+dB4q7feBwTOzk5P7bUTkBGhYJuz/U2ArIwiQHFeRmpCdHhwYHhaYVFeemJUSICns52VtYObh7e3lxtaEUsLU2MjIxML98iUtLSMzOzc3PzC4rK6NjTh2h78moCSnk3YMTkjPS0pOiLE38fX1zcwKjkxKtDDzkxPXUnhq+THD/w8D5lpyQmwECcHoFXg5HBPa0NNB3APvAfa3lhfWV5cAKJnKFOTExO7ZVi4OMjDtcmumryUtOzczNSEqLDfAf4hqUUl+RlJ0aH+Hs52NjZ29rbWVta2NtYWpsaG+vp6uroGpk7BMbFxCYlJKakZWflF5Q3tvSPAjUMEDikdK8fX8PKygpyUmMiIiMiYmMRsQHlhelyIl72phpLspw/v3/A9eXzvLgUhFgIO2V6eG+/vbKoBlLbMbaNnUCtLC/OzM9OT4+NjIyNju8VXp6cnB+sTnZXZKWmZKQlRIf4erq6+MXnFhVnJsaEBns72tvb2tpbGetqaWroG+no6erq6+jraOoYWLv7BIWERkTFxSWlZuSWVjV1jK+BTDEIqhgcvdTLrADkpiYmJqZnZeYVV7T0ddYDspDAfBxMNefG3L7h50YDkBBgXMPDGwvRwb1t9RXFOftPcxsba2urSAnBmanJsbGRoeGwWqn0F29veXp3orMpJy0Q3qZ+7k41dQHJWZmpCZEigt4uDvYOdlYm+5k8l+a/flH5p6xoY6GprqP/S0jG29/D2DQgKjYxNTM3KAzQOzIGOEDhkdPc4Bc3S89JT0zLzi8or6xo6xxeA4z1NlfnJET6Opr/kRZ8/5uK8z0hNjH0F399cnhnpb2+sBhRkpBb2rmxtbGysLAKnJ8eHhwZHpld2zwpQp7vL87PjnZW5WZmpcRHBvh6Otu6xGamx4QFe7i72Dg72NmYGWj+V5KTFRcWkVPUNDXQ0figrKamoqulbObp4eAeERiWkZOZXdE2u7Z/eEFIxPuD+oB8Sl5CRX1pZ19zeM7IEge4uTw+01RalRQc4m//68pqbm4OZmgTn+gSytTQ92tvWUFVWWpCdWdi+CNreWF2am54YGeofHJvf3D9CFGIioavTw/3tlfnZGSnxUaEBnk5uUdnZSREB7g5WxgYm5iaG2j8Vvn4WE3r/Xljyh46uxk8leVkZWVk5eWVtc0c374CQmKSM3NLGoflN6CUWCS3Tfa4PhkHxqbkllXUtHf1jC3vn53DI1sJ4b1N5TnyIm7GC4NNnnExkOMiTg63l6ZGetsa6yvIKQHFxRcPI6sYycGZiZLCvd3ByeRt8cHgRhot9Cpob7GgoL8jNzkiNjwj0dA/NKcpKigx0tzfVUf+hJP9NVkZcWFBA4N0HYUlFVSVF+S+fP4qJiX+W+aZu6urtHxwRm5xRUNY8srB9iMAhoaZn4xa3i83IK61saOsdnl1e3ji8OD893FmfH+msLU4NtlEW5nvJw0yOAd/fXJoZ6e9ua2tBTznLKioA9WPzsxOjg73dPYPTKxs7O2DI2Q9C4uuDldG2akBxaUlBVnJkgFdQVgUgLy022MPWUENRWuQt3/MXz1/wv3n3XkBQTEbm82dxsfcC74RExWWVdW1cfQKCw6MT0nKL6wcXQDAEJgHF3QfP5X0yC8vrWrqHpld2IRvLYMTNJQyCDoehdkCMo5qYwOunrBQYsE3g9OTYMHpe11BdBigvL8rOaxoZHert6ugenFpcWdvYAu2ePCEkwz0DzXTXlFU3VJdkJYT5BmTUt9QBMuOCXM00FSWFXnLdo6ehe/T6ncCrZy/eiX4QfCPw5hW/oMjHz/IaprbO7j7+weHRSRl5VX3zIOgZEpeCmVvwV0RxVX1bz+j8JvTi/AB0gCLGvz6BbC4trkzVJ7v9kvgg+IKNCvN4Ezg1Ozs52tfeWAUAlJUVZiXG57b0dbW1dg6Mz84tLK6sbmwd82Li4d8crY211LW21Zdmxv32imwc7W8uy4jysdVRkvzwkoOZmugGm/E53zOuR1wvXz1/wsv7/NWbd0Jikkq65jb2zu7efoGhMUmZpd1z67uwK/w7D158Mk2uqGvuHl3YPr7GxUacnWPRMlLjIyDAqa3l9kwvbSkxYb4HtHgI2Nbi3Mx4f2djFaC0rKwgMyEyKLKoqaWptWd4bHxqenZ+YWX1SObqHIlxdbA41N3T3VKZlxQalN49N9FamhriYvJDWvgVJxMFHhJ+QXX/PhsLEzsnJ8cjDg6e56/eCHyQVjMys7Kxd3J28woIjUkuaBlf2Dy6IWXmfitrm1Ze1z48DzrBIKEmIyLAJ2bg5GShRM4Prm325/rpyX7+KMDFSkOIhK2jR7nmakAJAFCYmRDu7+ERU1rf2N7TNzA0OjE1M7ewBDW5hB7AEWe78xNjg52NZVkJqRU9MzO9FakB1tqKn/g5mciwL2F7MAJaSnJSKkb2+w/YWVnvc/I+5ROS1zI0s7C2trS0dfEKiojPremZ2T7Dpb7/QljRLqGormd6/QhFyniPmZGBgZ7txTv+h/jLQyt748WB+t9kv4i9ecJOg3OyNd3f0VwDKC4tK8pMCPdzs7XwyGlo6+jq7h0YGZ+YnJmdP/h1Adne2j85Ai0BJwY660ry6/oGxufGGrL9DX/KC/MwkmCcw3bWdq7xMZFIgrus6Nk61R2WB5wvPqlqG5pYWJoZGFg4uPuFpZRUNY5sXxDRc7yW+GEfnVfbM7N9ikP3gJuHh4eXm0dASvoV+c70yuFiVYihsoqqvIQAJz3Bxc5cb1MNoKikrCQrMTzQy8nK0D69pau7u7e3b3B4ZHRicgZCew7ZWlrcPITurM5PDLTXtUwtTYzNzXQV+Okqfnn3iOLm5HBndW7l6AIOP0GR0lGT4mPjElMzPHgt+1NL39jCylhb19jG2Sc6r6auphMIJ2TmfS+j6RyN1hN0QcjA+YJfQPD9+w9i31WEGS5WNk53WhPdjXW0f8i842YkvNyb72sAFBQBAIUZ8aFBPq625nZxde0dnZ2dXd29ff1Do5PginPI5uLU5PIeZGcdONnfB4RCV6Zm5oeK/fTkpQTYiS8hoJXp0ZltCOwMfgBDYV2fn5xjEFDe/yD/Q0PPxNLWVFNDz9whIBnQ2FDbMrqNyfBMVF7fLTq3pg8IviZjffLmvYi4pPRXeTXNz5xEB7tXx5NthX5GWqoyglz0BOc7wN6agoLKmvLi3OQoNKClZWBRQ0NDU1Nza2tHV9/g6K7SBWRjYWJgaAEM3lqeGQee4lwfLM8tjAJ+G38X579Hcrm3OtnfNbwGOT0FTY2vQiDb2wdnmCTs72WVf+mbWjtaaahqmjhHZJXVNzZ0jK7CSbk+qph4RufWD67AsKgf8n34JPnlm8ovfXNDuZd0FzAswmtIf7TJT+Uv73gYCM5Bs321BSXN7TWlOUnh/u4OVqYGjqnl6IvFmtqGptbOvkEQ9cX+xvxYd+fUNmhtYRa4h0NJdLm3DByrjLJS/Mj3gBq5tzDYWD+4fQTbGGmsbRubm10EHd8QM/F9lPupZ2brYqelpG7mE5ddUtPY3DO1AcNmFFSx8IotaJ3YOsW/w/VWXEZOSV3P0tXTTk2ICXVKxs2BPZpsoyonK/yMhQwFXZnoqCxvaa0qSI0O9HS2NdP/ZRKeW1RUXAooq6ptbO3q3Vq/2F8HDre1TW2sL84vbZ/gUFHiHG/Nj9TFO6h+EnjKeLM711tTN7q9szRQkZ2RXd42NLtxeIVLw/leSlHD2NbVWU9Jwy4oLr2gsqFtcH7nFIeGV8bYJ7m8Z273kojxiajsdxUtI1vP3yGeJt+ekV3fEXmDP1XgpSb1+dMbTgbSG+jyaFNFdXVJRlywj6uDhaGmioZHUmZWTm5+EaCitqG1a6PxArw+N9DYNL2+vLgGOkJiE1MRIfeXR+uSnNWlJQTZMHdm+1o7hidHugAJoaERiUXNIwugYxTRvTcS337qWTi7mqrrOwdGJmUDGrvHVw6uiO5yfNDwyawbWNi/ImN9+VleVcvY1uN3TOxve83PHOSsn94Sr9dHGH4R//zpLTcT8eXOdEdlaXFOYpifp5ONibaqvIJFWGJSclpWbkFpRU1j63raxf76TE9N4/Tq8hoIisDFwSEjx4FvjDWkuGr/UBK7j727MDXU3V5flhvl6erhGxxf2DQwvwPHoHshLvdD29TO1VbP2MkrODq9rGN0bguORc7K+07JPbNucAmComB//fm7mr6Va2BUWnqMp7Hiu/uc4sIMJ6P5Xppfv3wReX6PEuNgsa+mMCclMsjb3d5cV01BSkrTKyIqNiElMxetYdOq3yV0Y6KtsnFyZXV7/wSHlBALj5zoCjTRmOZtaar1+SHu4e7aSENFZqSvnZmFraObX1xBff/c9ikhh6icqraprZuTsaG1q29EVuMocHX/goDuwUtRFeeEiv4l6A3VA37xb2qGtp6hyflFaUE26uLPXsrKPaeA9Ga6aCrJifAykd9AV0YbitJiQvy9nK0NNRS/fBJVdA4Jj4pLTMspKCmrbl77fnW0PtZU3ji+vLEDuSShIcHCICTFBE81ZYX6ORt+4Sa7OVvrKMkIczFWU1XXNjS39YkvrOsD7l7T80up6po7eLmb6Znae8eVDQLXtmEoEiZugc/qzlGF7cBDTOqHrz9+/Wlg6xWRWV6TF+GiK/te5KemBBfBZnOsteZPaT5WkjPQ/GBDUUp4kJ+Hg4W+uoLUJ1EFh9CIqLiE1IzcgtKatg0i5NHmeFNly+TKxg4EQUFHgn11Q3CzM9FUmBHva/L9DRsVYqYyNdLN+KeM2EdphZ86Fn5Jxc2j6yeE7O/k9axd/X0tdQ1tA/Pap1a29s+wKFmfCclqu0bl1I+DMWkfvxaTVTWw9YvPr2sCxHua/pBX1teVfXXnbKrUz9xITZyX9mp7ohmQGR0aGuTuYGWkofRV6rOidWBIeFRsQnJ6LqCufWMecbg51VbXNbe+vQu9oaIlw7q8RJ0s99eWF6f6matJv2E+G8iO8DRRkhZ+8YxfSOLrL7vQ7Nr+RcgNLZfIDwuP4GA7HX2X5LqhuY092BUBzf0XYgoG7lHZNf0bSFqO16IyP4xdQ1OLGzuq0wLsTA0MTA2+vaZHrbUkutubqgg/JjmeacoJ9wmJDvF2sjTUUFb4/uW7kbtfYHBYVFxqflldy9r4JWRzprN5eHlrb/+UkJaGHBeJREBmWiuriqOcjbTUxFmP2+PdjeSFXz97wPboqcAnBWOfJEDH1PYlGRvfZw3H4AhXPbNwQOfYIujgDIOU4RHfR2UTz+js6t4FODnHa5GvmrZ+0WnFLb1N2WFejjaW1haqgkw3a105gZ6uJnKvGTE2ewpDPQIigr0czHTU1dRUvspq2bl5+QWGxqbnAaoaVnYvDzZmejqntsAHRygqeioyfBwcBGiiqaa5KMBYTeOHKONBrb+u9GvuB4zUtEyPX338rucSkVU3uHxEyPJUSE7fPczHyiunsW9qZe/4Co+alfvNJyUTr+icmh7gPh7bawlVU7fA6LTitqGWnOggbxd7B0edj/exNzoz/Nz9nDTEOEhh03UpgX6//VytjXR09XV+yEqpmNk7e/iGxqXmFJbVLLFcwTZm+/uXIDD4BQEjMyURATHR5dpQS1tHkZemkqrMM7LlbHNxHhYqQgwc6ntcbz4p6NkHJpa0Tu1iMvK+k/5h7h0UkFTZPjy3cXCBRUL/4Pl7SSVDj6ic6p7ZXeSd19/0bN0Do1KL2/rrsxMignxc3TzNpLnxt9uTnK29PIy+8jNhbA+UxgT6ezmYG5taWeipfhGX07Owc/ENjU5Kzy0uX3BBHm/PDY1tn5wjMKnYWanwCChIzxa72wfaM5x/Kcm9pr/oDvjOQYIB3wVjMHC/EpZW1rX1jc6p7ls8o+N9J/XDyCUkrbSpd2JpF44ipmXheiX6RdXQLTKzqnN6+5SMT9nY1s0/MrmoubUiNzUuLNDLx9/2Gw/+RlOMrYmzu7mKGCfl6UJrdpivq62lnauLlZ6KtJikurGVi8/viNikzLwSICHqdBc4MnOAuMYgYn7MQomLT00Kn+3oHG6MsfihKMp8PZ9rxEewvzY3DcJjfvpBUuGXoY1neFpJ8xiEivfD119mbpGFTd23AuJSszx88lb8m5qJe3hmecfkGhTvuYqRtYtveEpJY0NZXlp8WKBvQJDdNy7c5cpQC0M7dys1ieeM2HujlQl+TvbugQHuVjrKUkJiygZWzp5+6KvFzILZaYzLvbnRhRNMHAKq+4+ZSLHwqUlgk23dfWWBut+lnuAsVXuKU+1N9fdMHBAwPRWS/aFnYe8aFJdbPQihfCL6XdfGJxbQNTqzsnuMJGJ4yMP3QUpRy9w9PKO8bXQRhPlM2cDSyTcys7KhrjQ3JTo00NfP10aOA2Mq18dUy9LDXkvqFQsBfKE9J8jNPyY22N1SR1FC8P13PTNbJw/f3+ExqSWLS5hXuzMTm0hCUoq7Dx/S4qPwKHAhY+1dzZmuP6X5qXaaw1TZjifa6ltmYHiMT4Rk1QxtnZx9IjOqxmFUT8SUDR0DEyv6Ztd2Di8wyVm5+d6KyarqWnuEp5U1909t3DxV1jd3CkjIr6qvKspKjAoN8HB1t5R9AG+LdzNSM/B0M/gqwEZ8stpfGhOVnpkQ5GymIScqICSnoWdsae/iFRiZ17FDjXUJmgNC8WnoaBgfsJBeX+ISXoNGOzsA4ebfRVig3cnGL1HzLaXFLUAYDv0Tka9qhnauzp5hmQ1zcEpeMRUT15DU6qFF0NHlDT7NgxdvhT/LqxnaeYalFdd2jq2inirpWbiHp+SX1ZQXpMdHB/vYW9ubStEuloQ7GShqePiYKQk9Ij9fHagsKAVkRfrY6ClLiYpKfFVW0zEwt3UJSG+ZPdTEPN9dWr+mY6GnY2SlxoKfYGMfrQz3Nae7/ZLix+1LsvtEvtFVlJLXsXiEQ/9UTE7dyM7VxSM0p33xhAwN6B6eWTe6AjnHJKSg53wjIiGrqGHi4BWWlFvROrqMfKpkYO8XmZxdUgHITU+I9HcyMzDXE7joygp21JFTcQm0+yXOS3O1MdTcWF+SEuJi9kte5ssXGRk5JTUtAyuvxNrRRdjgzQVkG0bxgI2empYa7xwMQyF2Jgf766JMvgo/gmSbfGI+HK1MiirsXz3GpX8q9l3d0MbZ2T28qGfpmJT7o7KJe0R2w8Tm4RU+FT370w+fZRV+aJs6ev+OzShrHlq8evbD3DUgIj6jAFCclx4X7G6praYtR79Ykx5sry2r4BzqafDlBf0NaKq3tTovzt/BUE1JWfm7zGepr4o/9Z3jyrvH5g91MJBwOA47NxsNEREeYndl9ww639vRBfBTE3pBOeYtQo9c6sgPDy8ZXjvGucP7UUFNz9zeySO6rG8JRsz9UdnYPSKncRoERxHTsXG//iSr8ENL38LBPSAyraRpAHjFr23r5hcSk5JTXJKXFuFjp6/yVfLp5WhNerCDlpyya3SA6Td+Rsz9uf56QEaEl42+tqbmDwXpTx8l5X5aRxU1dI/OQp9iY2Lg3uXmZSFCYV5BZkeWwKsDNVV16XbSz5jhxdqP8Y5m6tICfpcMLh9i0XB/lFfRNLZx8E6o6Fs6IkJffnhEZjdO755hkt19+OyDtIKqpr6ptYOrT0RKcUP/HIawoa2zd2BEfGZRSU58kLOxmqzwM8qDsbqMIFttBRWXmCDz728YMcEzHRV5ycFu1qa3d9KkRT98UjD5nVXe0Dk0DeHCI6W8c/8pJy3q/AK20N48vTJcnZOfH6r7lhlnIkCSEbU/WRHr7lvYCwRfU3CKfpH/oW/pGJBSNbB8TMQt/sPMIyq7cRJ0jk3B+OiFiKzyL10TS3tnV++wlKL6vmUiCSNLezff4KjUwoK0MA9LLfmPbx7g7IzWpPhZ6yp9t4oMsVTgv3u1NdZQkBEb6Opga22sq6Yg/eG9tL5PQi6grm1gcv87KQsbGwfvPcIzGHS1F1A+PN6QEZuW5PadE3+3zOItKWx1uDTU3j23a2rrlPC+oPgXFR0L17DM2qHVYxIuCTVzz+ichvHNE2xKJg4+ka+qmobmts6u7t6hyYWNIzuUUugLPw//0ITsrFh/OwNlyfcvWW7W+srifOwN5CX1wkKtvj0hPVnuq8hIjAzw8nC2NdVVV5ASEdd0CU/KLqlp6RsDV9Dxcj/mfEiNQs+cqzILOlvyIkPiIiw+0hwOxf3iRKyOtxcEmjtlto2vQm/uPBOWUdW1co/KaxxehxNzSqhbeEXnNIytw24omLn4ROVUNA2tHN090YDF7bMHdFLahma2Lp4BEalJoa5m6l9FX3PfuVjoKIwLcNSVfqf6O8zkEysOZLatMCEqIiTQ183O3EBTRVZG3c4/IjGruKq5dxT8ivH1Cx5OFuJz8PJIbWpURnVJvJ9fdJA27/V8jY8MNWikrTzNx9g2tXloEXxJfF9A5oeBlWd0YfPYxgnx40/qFl4xufWja9ArIkYufjE5lV8Gls7ePh7eoWmVgwtQBslfusaWds7ugXHRvna6ihKCT9nJj2aaC5KC7dRFn0r7Bvx8QYPcHqvLjIqIi4sM8na2NTfQUFE39wiMTLoFHNtvYn73lo+HleQaMlmXGhiUkp8c5OAe7StHt9WTbc53OVBbnBLiZGidVN8/t3OKR/9cQlXf2jO6sHVy85To0cefFl7RufUjq5BLXNrH/B+/qv7SNXXy8ffyichrGZk/ZJL8qalvYmFl5xUe4mr684vwy0cMeODxptL0IAsFATZBOxvxx+SXG4NVqVFx6RlJ0cG+rvbmelr6Nl5BUUnZxdWtAxPgF/fERN+9fEhPBB0ojAmJy0wLcTR0jnYRvh6sCP1OPZYdH+ltq//LOqGmZ2YLjkXDLSyvY+0ZWdg2uXVO9ED0h5lnVE790ArkHJuc9YWYnOovbWMbrwAf/6SKjpG5Q9bPKupauvpGZs6Bvja63z+94WamuN4e66hM9TGQfn6HQ/2X4ENKxPpgZXpcUlZORnJMsK+rrYmekZ3X76ik7NL6zqHJ/ZhHX798EuTjotztKMrIzM1N8jfXd4+04NqsTLN5sp7i6WqvrywtbxVT1jW1DkNRcgjKqJu7RRa0TmyfEbGLqJi6R2bXDC6DzzBJ6bnef1X5pWNo7uzrH5lb1zE4fXj/s6LKD7VfGnq2Xq4mP6Q/PGWnxTvbnOmrSnDV+sRNyfj5u+ADsrPlnorMxKSsnKzUxMjfXk5WxqYOXsFRKXmVLT3Dk+DNJxrq8rKSL0lWOqtL8/PykgOsrULC1KhGsgO+XBXbGekpi/MLfLcMyu+YXDu4InkoIKls6Bia3zKxdUrIJqpi7BqWWdW3sHeCIqa9/1JCSV3HwMzGPSSlBN1FwB5Jyn2TV1BUUjd3sdaWF3vFwUCMgu8v95fHOKmJPCahfCv1hhUPOtNelhmfmJObnZYUFxbgYW9h4egdHJMBqO/oHZ4EM/Jb2VkYKT3FXuxtLEzPLc6J9vBOCJREtUbrMg76/pD79JKdmV/N3DWtZWL9EEF077WEoo5VYE7L+MYJ3n0JNUOn4NSyzrkt2BUeFdNDAblf2vqmVi5hmSW1Lf2Tp1wSUlLS0jJfFA1tjFQl3/Heo8RGXp+t9xWH2yq/Z8fH5xZ+egcFGmspzYhNyCnITU+Jjwz2dbG1dvYJTS6sae7sHZ4A83zwCY/yVOXBWBusSUuqaKnOCgtP83hzWOEudJyvL8jFQoFLJfjL0C6mdnztCEVyj+/Td01zn+yW0dVjbDYZHSN7/8Silom1/TNMYko6bmk1LQNjS+fQtKLKpp4ZFK+wqJiY2EdxWS0jDTnRl4/uEmHiEV+vduYGmcu/Yb65YuHjID9bGWwqTouKyyvOy0pNiA4L8HSycw2Iy6uob+noG57Y2/4Ymp77W/0pPniiPj27d6qrLCk20ZJzr8yaF5SpdBd1vHNALqiiaxUMGFo7xqG5/1Lsm4aZV1bz8DIUg1nKwMLOOzq3fnhx+wiBgU1y/9MPLT1jC8eg5DxAfecCLver128E3gq+l1DVUPz8lpeVioCYjvpqvjnDx0j2Bd35IQXnPbwDYF9DUXJETB6gMCc9KSb8t4+bk09UVml1Q0tn3/A4mFEkIK0gVPMV3eVyY1b10tZUW25cuD4HtN5TCKNGiXCtp2qE4NUXTSv/vP71c2ImjpcichqmHulNw4v7yLui+jaOnmEZVX0za+DDYwQB6wclLV1jczu/+KySmvZFwocc3Nw8PNzPhL4qyYrycTCQUzDfozyZrk3y0JPkIT3cxGSlQ4Kme2sLkkIiC8pL8rJSEqJCA7y8QtOLytG3tvqGx/emX9rFpAdqCT/EmclJGTk7358ojv2tw3uzUmXHM6iIN5MfWX3N/VHd0i9nYAdJeY+HX0xOw8Q9uWF4YfeCSvCXlYt3cHJp5/j8yvruOR7j6++aekam1p4x6YVVrcsEjEwsTAy0dx/xi0lLvnvKfucOOxcr0eFoeZyL5scHuNvAY0rik43J7rrCpJCIgqpydCPHR4X4B8XmlFTWNrV19Q9P7HFw6PmHuWgI3d3K9cyFkWEdT+ZHBei/52RHNOiBjaimMsNqrx9/UDH1K52EYNA+ePZOQkHTxDWhbggIOiV9oWTi6BMcX9A8MDo2t32Ke+f5Vw09QxMz14jUfEDTGjYFOQkeBiY5K8dLIeHXXKyMHC956LF3B0qiHH+8Y0IuDW/i4BxtTPc1lqZHROVXV5WX5Geh4yQ0LrOooq65vbt/ZGKP4b6qk4epFON8+A/jJiQ2ZKohJyPZ30JP/Q12+bMyiZOm7G6CJ4JyhuHtq0e49Bzoq0pdC9eY6gHg1jEB1xcda4/gmJyalrae6U04Dg2vlLquoaGhY2hKdm7dBgr9NAQEQUxBx/789fNH93jfvXlMdbXRXRhuo/CK9myuZ/by5mRnfri1IjsmJq+svKKsJDcjOSY8Ij4jD1DT3NE9MDwBzmGWNjCVpRs2ZySSSWwfGexoaFsEL7bkxnvLQu2wkj4TAZeo+IS/WWXPQS+ImHkFJeQ1jG09YisHZjePsO59/Gns6B+VVgio7pxch2NRc3z8qauvGyKF7BQeVw8kIFmdX9g5u0TiULPzcD96Jvbx1T2ik6WuwmDzr88p4XM9k9CLo73lsY7K3Pi4PEBRUUlJYXZaQnR0cmZeUWVDe8/AyMTeEfnDF0+wy9+MZOb0HHlL+9qZqRlYy1OS/y5eJS+W2sqxfk7KJKBoHNh6gMSmuP9C+IuqnqVrYGpt//QG9Jr6lZyWpUdIXFImoHV8HYZJ9UBIRdd8pkMsa+HrgrYd3CJxcGZ9a2P3DIea9fHLz1+Fee5gHa72FQQaSfOSH80NTO7DdjcXx7pq8hMSCiuKcrJz83OzkuPi0nMLigE1Ld1oQI2j2c501RXBFTg0fdjEfE6CioftMFMgcmXT5yyqhGKlJ1pFQNE3tnARi4SCnlPgs4KWqZNfQmlz78TK/jk+q5CyoYNfSFhCQePwMhRFzvZWyX2XTItOtU5z20Arb/OHzthY/8jtrWsuCUXp1+xk16fg4RxfPQlOYhhwcAYC21qYGu6sLUhOKqkC5KWlpGZkpiUmZRWUlJZXNbT1jUzsiQ3pEQPeFvIiiQ66UkcDsoU+RIcw5D8J8BXppa/KL2O8gjQHRLUNzyDpmO49fCEq99PQ1iuqsLmzZ2R+B46i4PqsYe7qFxiVU9MH3EMQ3/td4vordLOhhAyo3bBmoyPT9r6ivGVoYe+SmOuLwsenzCQ4WEdDGR5aog8JYAtDszD49vxwd0tVYUoqoK6iMDMxJiYhOSk1r6SsorKmvrlzYBxMnL/z0KDJPiHHXFsI1791pYlmP5Uhme10B6je2RzQvWRiJH0DxiImZeHkffb8nbSKjrnr78z6vv7ewZn1QwQBI/83PTs3n/DMyq7p7Qty4c31r9N3pjgrxS0lf762z+6ZULibXtE+tnaMxSb2RYiXiZaKENaX4qz+no0AtjgEPD7fWxxtry3NTU4rb6wtyU2OCQ0JjU4pLK+srq1vaG7rGd7l9tXjI5MJe28vVyMElPNpXO7hTGNIYcvnvmI1oPT62KElgRGi8E3us8i790IfxBW1jO19Eiq6R0YGh8aXwOfYNI9FVU3sPUJSy9qndrF4H/MYSVWzGfx6NIMN3GF2ds/HjEzwzq/vA+5eUvJ9esfzgJ2RANyVaKcswIp/tDQ8f4aArI531RSmxSVXtNaX56fHhvp7eUfmV9bW1Tc1t7Z19W0X/Zqhb9Gh6yfT/eDKFiXyyHr4aRZzGttsCU+IPKK/ZYafLYu6IzfO20BOSkbmm4axtVt4QcvQ5NTY6Pjc5jEm+T0+GS0Lp6Ck4rb5c8ZeTF2dxaC709Ss74PlhbypCvzrJKedokraRpYPsNjfCb58zsOItd0WY/GNn5XgeHlk4eL6cG2qu7YwKTKurKWhoiAtLtTXxc4ro7KuEc3X2dmz+UpUYVG2ftlirqglfLiJyPtr/dPip13KAvJdw5cTcrW2smpQxwens7URRorfldSNrZ0DUmt6xoHAmcmpmWUIkoyJR1jRwMYrtrhvj8Ls5PlT/cbCjtUInC9vOEHl3SXxZtiRUvyhpT0LIDjlS2Hhdzx0V2uNYYZfXqEBx5YvUYfrE101eUlRCYW1NWV5qTEh3k5WTollNY0tre3of8tuOry6aFg8ztSlZxehTsykH6u2YqmRvSlSozCKGpO0EpYge4motXxLsFzhr/NdxcDK2TumpHVwZmkJODs7t7iDIGbgFJBSNXCIqlnE4sMdBGBLZgsv1k7co7HAsOfa4tLT61ZcHRb0KJ3YPKfhl5Z5z0F+ulAVoCPNx4J/vDazfnl1sDLWUZmfnpyUU1JamJ0SFeTlaOEYV1RR19J2+x/PLXnG392VwvYRznamnwj30i8Y2K7yv2AVccbeGAzYz6T+3KBCDsUZcB60x5rJKxk7eIRk1vaMAVeW5ueA8ytgJPHdx6/EpJSsE7sO7ujadeo8Wt16HMdMv6yj0fl6mVPtvMOeKME6TsC2cAaHT+GHrAAbPnSy1EtL8iUzwdnu0sb5BXhxuK2mrDAtPj0vNystPjLAw8HMIaagtLK+tbOnt29gu3J5bhU+qllZlKhJ0aS+9C6svc7m8YbrpQdDg+yLzGfRixgHbek2nLstMQYy301c/GKLmgeml1aXgHPApS3YDdGdB3wfROVs0gZPGFzchJjSNh202gMem9nz2kHKOr61Z+sjAsnrT/htK1Gy9nqfn9HfgIYK3H9JPmchxTxaWYOfguaHutrqSpKjkjIzkuOjQ/3cbc3sovOKAFUNbT19A4OgH/HXa7qxEuV1FcZQzb5HfmuPhe+ft+leZmi/JLmrk92zBRsritOgmAF4KwjLm7sHJ5e1jy6srS0BZxfX945viGnZXwgKy9lmDB4R6/IFXgV//xajU5fKrbZ2D1BxAFiQGUEEkM0U4YtHHCq46whxkJ+v9Oa6qkm8fMBAAl9cgh1tASdGexsK40JjU5Ljo0IDvV1tTGwjcwpLyqob2nsHh0GsKs8nGvSfZbY0GCw8cerCk/At724J/84KH64oaJrbPTxcqIqzfXXQEKUnxC9n6RWeVtkzu7a1sTwHXN2BHKMIqO89FXj/zT6zbw3KO9B8s8eu7gpc1Ttv9pzNBnJ9oTR6eulPMim/dN8dImunys+KD53vzHb+KSHI95AMBgRCDrdXl2Z6a3IiAyMS4qLCAn3dnayNbMKz84sA5TUNHb3DO29JzEeXbrDCJlu/9bJoJg6cs31x8DaQ+fj+AfE1FhkdGbQrye4TXm+E0WdebllL78jM2tFV0M7W8vzy1h7kGIlPwcTNLyjvlFbb3H6iSqBc8dZLZeoZ7nth2vJuaisht912uAeu9kITlfOWiKEcLy1qb6Yjw0FdXlr4MfHB1Az4GApen+4oTwv1CY6ODg3y83CxszSyCsvMLSwBVNY2tPeDWCFdblEvM0MuRoUrSGU8K5dvHsuoKn5XU5d9y831io98PtdFlm4+WVeUh55N2tI7Kqt5fhe8B1pfXgeBD46ucEnvPnwuqOAQEhMS2bhk+xorpFyc5zpdyW8GB1urUQ1j8+TQBZNBMpfMZvaZmvh90ovtydY0Z0M9FZGHeHvj04fX59DVkZaihEAP//Cw3/6ero42ZoZWoek5ecWl5dW1Te2bT5h6D1MVSYNoZt6kXbwxyRw/YRCU/P7LyERbWUZSRuCm0U/5wW6x2Qd2KiIWWQuvqNy25YPDg33Q5tYOGHJ8iU1Me49b8JuusYmOoa06hlIqFUL9dNSWxi9Apzln1dYjsfAmiBR3PwZXt5v1iyA9/snGeHNmgJvVjw/3sEHDk3AcxP7iQH1+rK+bf1hIgI+Hi721mZF1cEpWbmFJWWVtQ8tqugVmpTahtyRGB3f43nO9yA4Y/WtJRW1zRzvjHzKfuHdTdPkum5xFGAkxcB99t/SKKWoD7p+eHEP3tnfBkKMLTCJqpsf8ohIS4p9EWM6G3Wgz9DIIPOVOR+9EkGVuesJEtZlzHxcf/z79VkEu+owa82h1pLEw8beNsiAL1mbfIPjqFDw/0FAQH+gVHBGMBnSwsTCxCUlOz84vBqDnC6tEG3W6dO0/bbt+E7ku8RjHNB0wvhb/9svax8tc4d1TygE7IarZUMm7mIgL/Ocqlr6J5V1ToLMrxBl0bwd8ADvDIKBkZOfg5eXles48El9Uakk5g/iaxn5vCKy5pP7cCxsoJdQtLs0RABLNJxXiJruGLg7UFmeGWisJsmIsdfat7e1uL4y0lKaGBUbGhgX4eLg62lmZOoSlpGXmFZZWVNc3rfJIjRK3mVK4UEosag+x6CV3Qe/wvJVQsfFx1ZN4Qg/LkKGFVqnTIc5Oz0kF1K0D0mqG5taPbzBRJ5C9vYPD02t8qrt379y5e4fxMV4sz/ucgaAvejU3ilRP9tTnVa5M2ksxAgndNxQ9F4WrmUUeESH25rqqi7NCrZUFmc5nOkc31oGzU6Mdldkx4QnJ0YFet88MWzhFZmRk5uSXlFfXNa0GmhyUS15kifJv1Mm2kH+P6T/AY+AQVLKw1P4qwI495PL4oD+IA7x3enJJI6RpF5zVPL26CUXh4SBh4D0I9OSakIKKGAcLh4Du/lVolzor6HzpStRzQJkH3+1cXpbenfFt23t+UxenVYWp58KseGdbk+1VZVmhNkqvKA+n+2bB29N9XV0dtYVJsemZiaHers6ODrZWrrHZ2Tm5+cWAqrqmlS8/j+T6XDlHTUtixOrwpYOaFg5uqHm//FQQe/mQYqdAjWggTeVqdO34BMX8UdsxLK9zaXf/EIFPhHl2sAeGnmAQkhAgj2AXWHfYcTvDxAj8qKXi1+n0Vn++LuUKD7JkkbWGsy/vFPhd2cNFBWmxjlbH2usqskMtv3AQHADHVo8gwL6G6sqK4syU3Pz06EB3B1tbWxv3hPx89LsMgMraphV3/lpnT858ueOwu7zlOFLu2c3jm8g7vK9fct2jPmlzFzwqteLe6J6FnuBxSus6h+f3bMLgp1e4JHhXMPAu9AILFxsJXd85waLnfUGV5lYTM6g5LVTCEwXRmMM781UFfuwT5Yi33stjTSD/wkeCPFge72qsyg7Q/cCCd7wyu3t5tDbaDMjJzM7ILC7NTQzzdba2sLT2SEa/aFFaWl5Z27h694mFnIliJWPsC7XRRJSIiX9azcguApeIlIryajhUhmIiSoF6sX1k54KKX97QLbxgcOcUgbwhICO8hoNBB5c314ij9cXtM5wHqnYS9e961Ujf7jqwTXLguxzb8HeMTaUzJZKHPxYcEixnk+PGv9hfmeptqUx2/M7HTHS+tQq7uQDNdFflJMREJwMqi9Jjgz0dLEyMXZNLAGXo549q6ppWqk+cQ7LVjkE2B34fvU6efTcLTG8cn19cBZ8cjiWp0i/n2UnQrbd0bWDcE1Ix9YoqnYScY2Djk9GS3MD3t7aPL8+PdxcW9y4JRHNq1Lr5FBQZkff6HJ+VMoXhklSJP7mL5VTFlLn0G/6z/Y4AC9bZ/trMQEtBoL4kHzvZ9d72BS5yf2GgviAx2Du8sqU8Oyk8AH0D0zYJgKarrWtoalh2JY+Xc7z5xbs2n18bfsojre/om1BWXt7U21MVqf14u8RdTYjlsKN5nZjns7q1X3zd0hECi4icjpEK82x/YwUEg8M2ppaOsCh+LkC8lzkuKqP2ZRkho+Sel6txmtHfz83dqrkDNcY43fuRNCTXJ+C16e7yKDv1z/wPqG6g+9cE15CFwfqChEDnsI6p1sKUqCBPBwt968Tyqttrkubm+sWDVGqfNweOMzMfxgKbqUU0zAx/mfj4+kTH+5nIPDqu9tGW4mO8GmsD3X0jp+cQnNEJOkPikNIxs9LhXRxsLSyBoND10flLcpaf87Q1lwxpFm0CiYjXz220/aS/j02vq7hetz3mrsSXjxw8wcO+Ot5Z6CtP9DRVlXj1gBITfoSFd7UH7K/NTwjxih/bmW7Iifvt7WRtZJ9UUV1b39TS2trcuCz1axZDqQRrxTOqjX+SX8PRQkFIVF5eVllR5DH+VluEvhQ/O9nF0tTF448qpm4RRWPQKww8cob77PRESNjWwtwyaH9teO6a4ZnWIFvuwMtaWzahKXH/BCb2rTtrRf4yrTu/uvejQFxGucuYBFiXkKWBqrRgRwOljy/ZqfHOT7FwzkAzvbVFGXHhWdP766P1WZF+rrbmTskVNfWNre3tHR2dG1xP86KIM0T0S3qdi5OYdJw0P3Cw3WegoCI8WWgrjHGUf8FMcgVZg1K/+qJh4xtXvXJxg0tIyfjwIQMZxjFoYQa4AloZmb1m/+SxQCogXveDt96OIhbI1ure10ZEE9n2lN4822SYVCZ46JIQ/+pweaipONHPRvubyIuHd4kvTzAwjjame5oqi3NSAbO767P9tdkR3o5WrqkVtY2tHd29fQPDoJ9+/rHTAgUqrls+Kvc7nql+5qbFhG9MjbZmBzlYGKgIseCfQza2MdjeKxg4Bqe2H+HiEpJRMz9+yEiKdQICTs/Ory2MzF0//lmKTWfwbDpLdQQg5+xqdd/O/7jOnri7W8FesgHx2qEBio9/BV0Z72kGxLqbqcuiH94lOoejEAer00Pd6FcN6oHbyzNDndU5Ub4OHqmVDa3dfYMjY5MzEDwAziuFbLK82HEJWLn6HMMjWoyNnqK4UFdtSf7nvI+YCM/2VhbBuA9EVM09IrOHMekoKKjo2bk56IlvTrYmR6fmFmaGgTecFqtvbDOb1p9F9h09//Jk/NH7rFh2fLwO53DZ+hMu/dxVDOxLyAZwYri7NNTeQEVW7A0XPf4Z/PIUvL44OzbY3dbQBVxfmBzsbKrIiwsMyq5t7xkcmZieW1yF3Zs0ykmYeJ5kU0pfoXpo0nd8ttOfavNT/tNTWiT0AAqFbMyNzYDx2EV/2QbEl8wQ37/HSM/C8ZybgQgFXx/sHZmcGe+fu+F2xzTfieF4M51WD72DDB5bf/lUZamRIK/fc/SaRyNmAHJ2crizsbIw15frZaGtKveJ/xEt9unx2Ql0b2ttAf3w/sj84uz4APqNr/zUtPL2vuHxKeDi+ibo5NFewuYei2LAC6FUNRKfE6PGmfEqH6nHTBSIxfrswsaeocHOzoldLDYRTeeI9OpVKi4ezocPeV7xMpNcw1d6mruHx4e7Z66fRbJkvxp58mQ+tWm9SzrAshUoZPc7CIFVi6J+oRPdPLe2Cdrd29vZWu2OszfV/vFV+Pk9SsxT+CXiHH4IBm2urS4uAOemRge6Wxtry0vKWvpHp2aX1rZ2dvdOnBcsIOaTFwxW2yeL9ZzR1B61rdl2/KituZY4EyXDwPSS8vKG4c1rVhFN17iiNvDdJy/4+J69eP2EhQwFX2qvauwa6u+YRIlUSi4ZTJHc2a8DBJKKk7/riGvcx9L6svX03SfDuKbxubl59Ax8/2CtLtDaREtR4i03CwX2FRIbBwt1hX4jHHawMz81PjbU19Xe1FDb0DU6Pb+yub27C94/H658NFmitWtSmY7l+QOqs/h/2rsTaKj2PwDgd+4sGClbi6VCKaIebYrWJ3ktKK+UUkLRq0iP9hQVLdpFiKLShrwSpVBpkexLSUTZI9lmmO3e+z93GIZZ3EEv/3PePe+cp7pz5+P7W+7vfn+/+c2SgCjfzRpfogIOmasr6Py54/il0PvJxTTl+TZu/vcz6Co60/Rnz541c9KoIUDTp/jIqEcvXyXmkFa+tB0U+B0EysNM3uBfvos08Zo30s2JtmKfo6v/0/TcDx8/FRaXVv5ozAnc62y/1ux3PW01BWkJySFD2J+tJ4IAQP2cmZGZkf7u7csXz5JSsgs+fykrr/z2o5mZc4FxwFMFPD3BZF7OtHz74vnnb5+2Vs31tJwt86MaVjPcsM/nblJ+s9J8m4OBj4rImpOnz5pvtEAf/bhFY0Hc7Vvhj+Kf5kqvfmo9Jk1rQtN1bc+Y8zf9Urd9233JImdO4IPA4CfvsvI+ovH70dRcesvRev0ai2XGc/R+01QbqaSEfi5/mBy6EwOpLO1delZObm5WRnpaevaHgsLi0qofVBYu4CJx1gI3HfFpX+crJhKvaXolPPGxVUvfNpb2PjEhn6E4c4Nn6OO0OgVDO/eQ51Vyv03XmzXf2Ehv3AhJuOHTk5shobfvRWcPWnp3pUbNJpPX6g6uy+O/jsV71nxxSlFzf/oqLj4l68On0loKCyQA1Q9czIyMjE3NlhgbzTPQmzJJQ119rOroUaNUxmiM+P4uOS37Q9GX0sqqoozkt5nvCyu+t0AEAitax23qCSRKJe+P47oTl4OmOnV3to15uQpJvuZ7OTafqmSyx+f2i2pFI/vjd1N/yE+crmcw3/h3HeUhePqPgoRbl/0Dg64kMmddMp7Y6jjNxnWrcuSyZwHy5hqh1Ck7wuPikzM+FFXUteLEyJJgTZyHjfnv+rMNjRYuNl26ZPEiQ72JWpoaWlP05xmZzMKnJaXmFZV/b6LD9amxT15lFZbVUhEx0uik2YlbtdLHKe2yOHhyl87Ua3+JPdymGLOg/Np+F49LsQXicza7Bz6tVFq8/WJMTqOshs6UGXOM5o6XxdPqq98/Dgs4f9b7aFDhmMMG2vlKefnuw8JvuNu8eu9SqGbj7nXlUfKnitoGBg5PIiH0ssfeztsdls2dM9fQaMkyc4u1mxxWzpqqZ/DHagfnfcd2a+Y8fZNVUPq9iUlsfXsnIuZ52ofiGgZZ3CdhelZUxDk75bOX96plJD7aF3dr3wI4dGrG4XXrt7kFvW6ZYO7sE1ettsLtSvyH5iGqGhMn682eNkqcUVta9O5e0AVvLw9n14iWRUSqta2W/LwsHVurgN2fFJZvc/M6eze9kk4eTMLBrc1N3wsen3Pbf9hj86J5C4xNV66z27LvUsQFq8V/rt92wDvg9qOolfnhj16++/C1jkFmJpw+denag9e5lUzZwYavzZEaBqX4+R78jpINC+7oP2gRo6cdVk9yNl1p43w6plJ54eYzsTWa1p7Xnn1sIA0bNUZTS1tFCmosz09PCD3r5X5g90ZT54jSPebXdqlKHap22mit6LrTeb/boQsxH+rxQ9W1h9GqSktLsqJ9vbzO+AWd2mRiumL91r2e/rElwBdvmy17j/vdjs8uqz7+yTswMjGjpAE/nBRlu87l5PUnmeXQcDnNnP3TFEeNIH2LMK0+OvJDRuPkA5HRPmuHJe2xWGnrcjKybIzplpNRZerWnqFPM0tbSEOGjhghK0atrfqc/So60HPf305blquP+/PwZ+ck/zEeyjt0q7clt36+duxUyLPPjaDsKI3J41hF73PfRPidOecfGvEi5dp2my27PC/H5ENj/5iWd8wdnRAvg+TUk2t27PeNfveFOkh9ePQS/VU7L0a++kSVlfZL2W82llH0PuX8jNKzRkNBnPJyN49N05hJl3bbbzt4PrJy4rrdZ8I/Kqx29w9/mvGVAiMIi9H0NT8/J/XZPf8jLps3WBmwKsT0tt5vHYIAS15OPl0grTu+Kurui6I6Ol5aSX2KnkJlypMwXx//kLtx7xnDWm/scb8Qkd6kMNv+0h2zt4ERz3K+ASMNLPCjdm46HJqQ/wM3Qj529shZVvv9Y9KrCBJhD6wWyt63Xr5aM+fU8hEtTVRQy8J2qWLFy38CDu45ERxTO8nGIyjmg5TJ34d9bj5OKy4vK6uoKs168/rV87i7vkdcN1kun1D2qpA50thfdmc8aWVIqczUZdZ6NSnZ6IqzwcoTZhrNYMUHX/QLvvnwbbXMDItFrXeuv6oiT7I8mQTqfFaIjs+oAEZMWek4a/vpJZsOX43PLmmihY2FRs62PhTyNKceGHFrgTbrpHh2+pWFsrTU6yF3Yr6MXqAnU58RE+J16EL4W8Zk68M3kooJk803u52/EfPizduM3I85L2IfPoy+f+OMm6vDWhOVvLis75LTgpZ+VP8rvFJ6orHt/h2aFfmlP5jiQ8do6c5bOvpdgH9o5LNCZNxiB6+Q/cOqIdXFuyNrVS0vbgqoeP6hUWrM9OVbHV5Hauj96XIq6M7zzJOkQvrIebaeoU8+NIM3pkqV7Ppy8uDKlsQYbwtDw2X7n7ZKkqi50UFHj15NqpSesc7j+uuvrYMnLLTZfyH0dvj9uKSUVw/DboTdDAs44uJob7Vc5f3rKgntlY93Ku18UCY+Rm/Z1uMXbcnldXRQXEZptKqBzdrBT8NiMxuGz7RwvZQ2aHS8sb71uVSCvn1gfpH+nLdZ1YTh2gsd/ZSzWyrJvy2y2OwVurEw6j1j9AIHrytPyp9e1/jxeF3ung1zau/6OEySlZRUnOf2/Ov7+Kjr530fFSEqBmvcribk19DER89at+uUn59/SPjDh7f8fX19L3i5bN64fu3KiZSGYfpWp6n3LP/Ja5RUn71658WoCzo/6mhMGpOsor/hWKAjMfMrScN4g3tU7dSd13Z89buVN9jQOSSPMDK/RaFMbMISi8Wbo6ygh9tD0hrENc33GARtPB9fJa1vffROCTVycnnIovdHV6t/vXvCRpOEp5U3qdoHXg0Kj4t9lFE/aOys1bv97qeUNNCIynrLth44eMjzjO+l015HD7vtdrRZZ7XWxmaewhgT98cMB/Doy0LK4AnG1ju8rgUsaPxcVdeEV1vqejE6O+XAJKUppk7+6YMMDyUCKknajVKL9l/JHOORgqwa90N+ppX92n0vnaDrVmcSSqFRi1bKWpF+cwjOIelvv/FlTqIpJXjul4ANowrvBeydJy8FFH9sGWfhcioitfBTJaAwaYGl07HQx1ll9a0ERR0j8zW2W513Oa1d7+hot3zRqk3bnPe6Wpo536wzcM+dfzWromWQ+vzlf1q5uJlCReWtcjNsve+9rRQbzozYaH3odtkoswMJMja3QuX3OcQhGhtf3KPr7pzKUPvDcc+20wXuLB/jA5F5DXJzTcSM60aYn3pF19kc8nlPmoPYbQvxJLeZrW8f+NvrayrRSxuGGtidiMisbUVkNOaY22xCO82skupm0lDVcbrzzdZYm6iP/t3CSGG45enA4NBgv/s1qlZB+SOdoz9W1tKlxk6dZ2K3116tVVxnrcf1dzXAsIkLLaYWRr0slzc/9W64Y/zQg7ufexaOMzvb+Flr08UFYjqrD3kfDGn0Ybnr/hX8ulRsuhF9ci4we+/DOnWby0Xm2a6jci6Y4h65TIOyoy84rV2kISWntXDzqQf5LBlZ5cnGVpu3/LX37M2E9E/ldS1MWGz4xLmGUwdDipMVvtFWhSen5pU0Ky3dH1U30fX2i6yS6haJkbrG61zOX3Y1tvC4nfyVIaMydZnjqcu7dGTUzC5VTNjXuq/eNooVhpjujR8jtSH44Qr5uX9duHI+RuIWy0lxhXdsHlPboE7pUdV4++slSqv9CgNyDs4ZUhq0GE44vFi+/v3j4KN/rVyxbsuRsNRmWTVVzVmm1tt3bHE+7Hsz5lVaZm5+QXEtXlFNZeggaWnmd9LKB6WNgKKBQ3Cm1LobabmZH7/RySN1je08gl98b8p88rqwgTBUY9bqPT733jfnh56Lwnu02FItJz6rmZWsvjusdtX8S/n5m1RND4RFh70bE89aA87dG/b6h5ruF/By2hDzC9nSy84VmOT7bDJSq7r855Dsq3tW6sn9yH0R+8+dO08LqINGqqn+tmCFnZPzFqf9x31CI6Ifx79ITvtQiUjLyQ+VlRmmZrAtpnnYDJuTz8QMDzyjwFVf6xE5bcM1roFJlZIzrSwnSwGE4VOWbNjrl1gx2NDeIyp9EP5NwNS7TqqabjUm13NHnt6dXSBo40aodbZ7EsHYO39E0d0TWxYpl0c4akOlb0J3LZ0yZrgUwBQbqjJeQ1FWbba53fa/XfYcOeMfGv5PdNzz5Ky8wh+EwbLKmgbmDh43StTXnk+hTbAPSgdUZBFQXn3uBvfLcUUEDVOXwPhHJ0wnTjFz8gp5y9JaE6lZFBIw73d87k744bEtL4fsYmLcYjKgPC740AZ92W+Jp63nKLdk3Q885mpnbmr+57IlBiqyoyYvtvn74FFvv6u378clJjx/m/Wx6HM5NGraIutdZ+8Xkf/wTqxXMXG99JQy237NogVLbQ8EPvnYOkJ//eGb6YyRCt9vbtvmn1g6fMk58n27NTEluzznyzxZxdwvyh6YCtUvwk44melI16eG7Fs1XZnUVJL66NZl39PujmbTJunNN1vndCLwRmRs4svklHdZn0qra2ppww23Hg9LqR2xwvNePkvFaNuZ8JIpPmmfcp5FR8Zk1w/+zdTp3IMCcNIaj0suQz9XEyedhu2Q8unhZM17qUfNRN2kc8K3pJveOyzna0pVJlw+7Lh6ge7owUjdp9Qn147Yr7Gy2+LofOhq3Ju0nPz87JyCagqNCUhpLt0V9Jyqs+ZgeFpJk9Qk0/2xLMvYelndP1ZZm+ioaC60OxicWCY5feu95kkz8C99T9wdl6nUOihyouOp976i7yL6puZV2HEni7kastScRzd8Dztbm86brCpFyY8JOnvu4qXLQSFR74orvn2rrq6oagDIciq6S7d6R7yqGOfgF5NeyZTRtvQp1A+ulh41zfJKs8rIhlh/b5/YYpLuhoDvBjsu3ku8t7PF1u5tmaYmOeZCr7Y5PUn98M/JrebTFcCGrzkvH1w77/G3nYWRjjylKCczIysrO/vjdwiBcQCIF5eUVdYyXL/nYmRiZglTyzYguUZCy+pU1m9Hcwerjp3hUbfIy9tl6679VvoTFp14Tdewu5N3pKW4OLIuevys+d8W93YfVm0JRsrl3ZYGCnBNcUFOcnzklXPu29ctmq6uPGKY7GApCaK0po7GuHHjNbR19WYvWr/vUlRS5sdKWFHf9txbGfPzZROcElijNQzPVZslZAV7B2XqvFa4I01V1gVPG3tV/l6xZuXcGrM+bRQ7RVryy2NfV3NdWXp5fmZq8vOY24HeB5ztrdes+tP0D8M5BoYr1qyytLSwWGO9actO75tPUvLYS7w3HnmA/+vtiA3Xv0gbHf8Hd664MjfqsVbuvMWPxJveui5Tdj8lMc5WfnXfd7K1kBSvehd+avuyaUrg90+ZaelvEmLv3Qj2O3vc0/3ALpdtDg6OrnsOHDp89MRZH78r/7zJ+VyHGzXbau/1Yq3z36e6htM2xpL9vgz9a9NM8+gJaUOOjLGRTLr0uxp0d1o/bbUbRybW5j69dmz7qvnaw/GN1ZVln3JSk548/Ccq/PbNsOtXz+xydN59+CJ7OVrSuw9l9TjFqWZOgXmKrsly5p7pU2Mtyfe1TRJDg7Yfr98q0Sj7zkHJT7U/9wJeQSI0fcl8euOM2zarJQaairKSQHNNSX5WTl5udnZOXmGKj91qG9fzYfcevUgtqKUR5DSNNgemSW+JY87Y/krrzhHb90fGOZ1jFObfeguJL1/f/5sVWwOM+vKPafFRN/zPHNltv9ZstvrQwUSE3tpKbW6iSaqoUUOsLTYfOhcc/uhVAVVy9DTTLWGD/gpvnLS7Yt/C6oVfA2VTHB64TJn5u9FP2k3ZsaXqa9H7jJSkhNj7EbdDgy7uXKgxZuw49XHq6uM1plv8fWjPlCyvdQ6eARGJ2VU4pZlrdl/IW/beUc6zTjNgu+IB2bxrT8SeBP3E7Z5TmkrZe+R8yMvJzszMyEx9eMRm/abt7sddNjntPXk95nX2S59JcVGFTRKqemb2h3yvRSVV6j4Iehgls/xJYKLfVTPXn7wfdTED3USPvaUeuqteU2NtQWpKRu4PWnJYVEJqQekPGp5U4L3zxOWIxIyvTQTxlpp6qvisu7r7vNbmz/k3NszO5P/Xg6Sp5VXfm1sZMI4kIc5saqZDePHBcgrDJXH/8o7e0EDfclxroAMtBjrQY6ADIwY68P1AB8IDHTh+oAPNBjpw10AHXh3owNcDHfhtoAN3DnQg8h9QZA8yEIHt30/S9RhItzqE/wEgfIFtv44oF+1jQSCCD16goBO7VAc+v2n/Adu/n6T9gEX4bTql3JWkv4qX+/tJkD4AuwcO6deGhvA0Fxjoi5BPq+v31jywfBgu++t0/DtDpF98P7EzHDDhE/TuuP6pf31HCrou2N719F2I/JQ7CYLn6in7COytUfglif3A6hOwp0uS+hWI9LsPEf91QGxXlOhX308ASv46ILY3HtS/QJGImK4n1d/A/hYOHujAIf0ORPoXKP1/APx1rQTLO8sMdKBsfwP7uyeU+3VtGBtQ/lcCkQEOxHRBeWBg+xD5gT6a+X8A/gtCHO7nAuHeA9k0XMd3w/YCiCBIT6fCMNxLII776GUr7vkUWAQgIASI+0n9YPsXHSOYlMJ8PwcIcx+/AignChCGeypvoUBcvwABocAeIynMh+ve3/QG2P1lsIjCHoHcRCxAWSFJ/H4H4roBgX4AiioUDuSpiSIDeV8mGhAQEQiICASwAuE+AHF9iCCf18EiCbH4RGsmsnxqIJZKCPc+gKIBZYQ3ERFDCGATilLGMjzX7wMQEB0IiA4EgJ8OFCWEssKbiEhAPgPpvodQls/1+fkgCOpR+FOAcnwuz+uDIAxAoHfAHoRyAO/VeYDQLwTKdwMifLppCBOQ/9Ncz74egMOAbu1DoO8XAYf3E1DQ83DPvh6AI4R0MF19vwioCAj2IV18/QYU7dlJWciKARg7sA8B7AE4SshZXX08wv4CCi9iFcGnwT8HKOLTsRp2X3dhz3WwP4Dqgs6C/y1gD/fi8UKB0K8HThDWBf4MoKgJGm1MfTRf4b8DnCQECIkAxHorFjkTrCtkGP2vAHsa8k8RDIR+BpCLyP8hsvsxVTiQxWKxMDUS7ONVEYHThRexMGCPQ2osQAQzEBAIZP00IIIBqNfFx/UCPkC4X4GIaEA++V9UKCyAGJ6ahM1FYJzYmC74bE4MRQbi8CAKgSGED1FU4LT2kznvyd1BdetpekwutGtAghieDaTTYF6hyMCO0mQfCOcaOFw3IZbsB/uFBDESiQiygdRWHiHQGyC7sqFlCSMd835owhtAhDwyCQgh6sODIB5PwOMYVGoLbwxFrYMogtXWWNlvALKvwckVtvU2MMYEEuojEUAAhwPxRBIRpFMoHGGvgTMQGGIxmSgQrYA4EATbgHBHPwrDGIFtPrQDxuHwBJI4CWymUGiCChkj0ACBWAwGKoRgBMHh8Rxg+yQsVwPCAMQTCQAMwwAOxBOIYhIkRjOFAvUNOA+BGHQ6KoRgGAE5QLR00aJFOFYMQjSABBz6MgDEEwh4gpgEoZlCae0aQlEbiRHCorfSGEx2AAEQBLmBEMzp6zEA0fqBBxF2V4AnEAh4PEFCgt5MobD6BFyCsGgt7UD0IqiPXcZtOUvOzQUjEAQgFgTj8GgA8SBejIzWwhaEu4hFBS6Hma3UVk4EAc5FOifaRQLiYLQzAAloAEEQJJFJzc0UKswlFHnNwmoY/VIARlsVRNqu07tUP/pSBO1NATyRiAYQBIkS4igQ6gvQGmZQKR1AQR+rwthIAJjdneLFSOwA4okS4tRmCpXF+c17A7SH6ZTmlg5gl1R151Ww9TPtQBgUkxAjoHcTorhYSzOFyoQRfmtTsAGdIFpzUwu9E8jvEyZYO0K000crM16cLEbAo0BSazOFyugLcDdMa2ik0Jns+xkvEBHpVoKwb+oQDBAkyGQCHk8UI7KBkEBgz0oPuKWhsalVGBDGCuyYT0EAApksKYYnkggtFDYQ6XUET8GUhsbGZgarByCG4QzccSIC4CTIZEkikQRSKew6iHRfroAZeBFpaWhobGphQRAfIPcTKM/qlO5Crn/mAAkwhUKl8Qdi7KgDEKgBFdJYAoB8J5o6NV0fYTh/BeDJZDKZQMQz0RJm9QUYhECs+obGxiZ6RzNGugcQ4gNEOn0d/4fYtyP268XQABIIII1Caek7kNmMCpmd4eBTwDxZj64/sF8GMZntN0y8BJksgSfgEQqFSme23+Z7VQWRQIjeykSgxsYmKqubEMEA7FLSELMtWDicOJlMJhHwODqF2sJk9aWNIBfpTVQmAuKojU0MPjOsMJ8mwu/mwgEyIRgdFrKbCB5EqFQqnWsYAojeDSKnGE1UJgziIUoTnRcICwYivL0NxKQzWDCAJ4qhBYwHARrahNt8vMtEMQKPsGg0tBAgWgtTgA8jEGgD4ghEkjhZHPVBFCqnhfBbx4op84EchJlM9jMTgwHBAsZYXYGIMCALRyCQSOJieBAEYFpnAXOGcaIDD6BDOCYbCcH8R1j8A9hF2A5kQTg0gCQCCOIAhMntA/il97EB4XZh53ima/3nHz8eIPqUgIAoEB0K4gCY2drSVgERAQuVsbXigwhHyOIIeX1QD74OBZo1anvsgpm0VrpQH0agBzcQ4qVBGIHspAT7gQvlIWwfC4KFLU7HBvRsG8S1lTG3kH9iSwiQ80SI+iAGjcZgQcLXzmMDHkPakjNMBjrsh2BY+AwOFmC7r6N5CAZiUXq2Dwe6FjIWINK1CuLageiDCYNOZ/bowxjOI5xhEsTqDuST/UWEAdt8COpjiOoTvIUHGkEWE0KHSlCXImbxy58jgnuZNiDb15EG6Jap7gUQALzaWjGLyWC1Jbjaxy8sVhehcCDMAaI+JoPJ03oFTNNh2cTgaGcdZLDvm5w/9wSEeYFtPt7wYdBxA7vsEwMc7BiysNrvJtwl3CHkM8DvKmwrQ7i9GETFCQHu4RoTtHs6JumEAHkf79jvAbUlyTAWLf8BbJfSBoC/u08stZcpfyAsOFeDcJKyPFM4gOAJHu4P7ggAOvKf/2cJAPI9OE9z7U2j8435zBHj+OHb+3e+wK1dBvYdIBGBnLxEt2LlAXb8if33nGQurguwrYg6hFu5niy5SL0Ddkd1z6p2+VAEjp1uFgTsEG7pmGdicaO6+YQL2/8Z6Z7M7zY3gusIG4fXLmw/Cek6Wm//0aEjgCy+B4RByKmDfGYbun6ShBM2jg/PnnXEdQI5Lq4Gadsd2PaEwuProZQ75iH5Ba3zaFeBHB8q7AbkGjOzgZY8EeQW9jDbyTum7grEdS1VHEeF7/iBIADYkeVBFnedXBcGhISnCXmmvHDclY3Lh84BcHwEsDO83NmUTuCMzvSG4PrHi4S4U4ZdZ7P5lGrnwUaJtQPZ0o7zcAhX6qy92aHL8xDefkaIjyuOnck27qFLzzwSUYxABPFYgRLd1vH06ONNxHUfG/DC2gsUTyASCEQSUZxI5ASQIOg+CHMyvnV8VxoJ0fF5iufcWHGCeG0cIpH9HxuIZkawHV+FLcfrSci9UoG3XNsaawePREKBRCL7KxKxH1/4JWKw+RD+vi6FigfbaxuRRBIjEYhEkfccKhGQjMEWPS4fv0rHnpRl89DY4cHe7KdezH8Miq3ydXbOvIXa3gjaiOy7R+/25BIAhCEsS2a687iPDhyIfdTPFwj0NKEpeAKHU/m4eWhxEjhli++brR3YC2HnKhnuG2xbV0IkdcatP/bwL+m64A07r9PXUd3YTaHt5tB/m05+xfQ5SWE8dg/cBiSC/YtDjwrs0//dGm8nrw3IfnLv/6NG0Mo8vhM2XXnoAq02Hwj+tK+MaOw5hcgnfmjLwINtVQ8H/tTvs6BhyXLyWyGDrovB9XuN4z1YPeq6PkdzNRDgXzmgnnI5XAtwf8kx4L+fBP4P+B/wP+D/OfC/Lw74D/gf8P8d+D8="}};
const BODY={"f":{"H":1.7188,"ycr":0.8716,"ycut":1.5048,"tubes":{"torso":{"o":[0,0.8756,0],"u":[0,1,0],"e1":[0,0,1],"e2":[1,0,0],"ds":0.005,"ns":133,"na":96,"lo":0.03641,"hi":0.22838,"cen":[-0.0427,0,-0.0439,0,-0.045,0,-0.046,0,-0.0468,0,-0.0488,0,-0.0505,0,-0.052,0,-0.0531,0,-0.054,0,-0.0548,0,-0.0553,0,-0.0558,0,-0.0561,0,-0.0563,0,-0.0564,0,-0.0564,0,-0.0563,0,-0.0561,0,-0.0558,0,-0.0554,0,-0.0548,0,-0.0542,0,-0.0535,0,-0.0526,0,-0.0517,0,-0.0507,0,-0.0496,0,-0.0484,0,-0.0471,0,-0.0458,0,-0.0443,0,-0.0428,0,-0.0413,0,-0.0397,0,-0.038,0,-0.0363,0,-0.0346,0,-0.0328,0,-0.031,0,-0.0293,0,-0.0275,0,-0.0258,0,-0.0242,0,-0.0226,0,-0.0211,0,-0.0196,0,-0.0184,0,-0.0172,0,-0.0162,0,-0.0153,0,-0.0146,0,-0.014,0,-0.0136,0,-0.0133,0,-0.0131,0,-0.013,0,-0.013,0,-0.0132,0,-0.0134,0,-0.0137,0,-0.0141,0,-0.0145,0,-0.015,0,-0.0156,0,-0.0162,0,-0.0169,0,-0.0176,0,-0.0183,0,-0.0189,0,-0.0196,0,-0.0202,0,-0.0208,0,-0.0214,0,-0.0219,0,-0.0224,0,-0.0229,0,-0.0234,0,-0.0239,0,-0.0245,0,-0.0251,0,-0.0258,0,-0.0265,0,-0.0273,0,-0.0281,0,-0.029,0,-0.0299,0,-0.0308,0,-0.0318,0,-0.0327,0,-0.0336,0,-0.0346,0,-0.0356,0,-0.0367,0,-0.0378,0,-0.039,0,-0.0402,0,-0.0415,0,-0.0428,0,-0.0441,0,-0.0454,0,-0.0467,0,-0.0478,0,-0.0487,0,-0.0495,0,-0.0502,0,-0.0508,0,-0.0512,0,-0.0514,0,-0.0515,0,-0.0515,0,-0.0513,0,-0.051,0,-0.0506,0,-0.05,0,-0.0493,0,-0.0485,0,-0.0476,0,-0.0466,0,-0.0455,0,-0.0444,0,-0.0432,0,-0.042,0,-0.0409,0,-0.04,0,-0.0392,0,-0.0385,0,-0.038,0,-0.0376,0,-0.0373,0,-0.0372,0,-0.0372,0,-0.0372,0],"z":"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"},"leg":{"o":[0,0.0747,0],"u":[0,1,0],"e1":[0,0,1],"e2":[1,0,0],"ds":0.006,"ns":142,"na":72,"lo":0.02848,"hi":0.1425,"cen":[-0.0256,0.1598,-0.0269,0.1597,-0.0289,0.1596,-0.0318,0.1593,-0.0351,0.159,-0.0383,0.1586,-0.0413,0.1583,-0.0438,0.158,-0.0459,0.1578,-0.0475,0.1577,-0.0488,0.1577,-0.0498,0.1578,-0.0507,0.1579,-0.0515,0.1581,-0.0522,0.1582,-0.053,0.1583,-0.0537,0.1584,-0.0544,0.1584,-0.0551,0.1583,-0.0558,0.1582,-0.0565,0.1581,-0.0572,0.1579,-0.0578,0.1577,-0.0584,0.1574,-0.059,0.1572,-0.0596,0.1569,-0.0601,0.1566,-0.0606,0.1563,-0.0611,0.156,-0.0615,0.1557,-0.0619,0.1553,-0.0623,0.1549,-0.0626,0.1545,-0.063,0.1541,-0.0633,0.1536,-0.0636,0.1531,-0.0639,0.1525,-0.0641,0.1519,-0.0643,0.1511,-0.0644,0.1504,-0.0645,0.1496,-0.0646,0.1488,-0.0646,0.148,-0.0645,0.1473,-0.0645,0.1466,-0.0644,0.146,-0.0643,0.1456,-0.0642,0.1452,-0.064,0.1449,-0.0639,0.1446,-0.0637,0.1444,-0.0635,0.1442,-0.0632,0.144,-0.0629,0.1437,-0.0625,0.1435,-0.062,0.1432,-0.0613,0.1428,-0.0606,0.1424,-0.0596,0.142,-0.0586,0.1415,-0.0575,0.1409,-0.0563,0.1403,-0.055,0.1396,-0.0536,0.1388,-0.0522,0.1379,-0.0507,0.1368,-0.049,0.1355,-0.0473,0.134,-0.0454,0.1323,-0.0434,0.1306,-0.0413,0.1288,-0.0391,0.1271,-0.0368,0.1255,-0.0346,0.124,-0.0324,0.1227,-0.0304,0.1215,-0.0287,0.1205,-0.0271,0.1196,-0.0259,0.1188,-0.025,0.1181,-0.0243,0.1174,-0.0238,0.1167,-0.0236,0.116,-0.0235,0.1154,-0.0236,0.1148,-0.0237,0.1142,-0.0239,0.1136,-0.024,0.1131,-0.0242,0.1126,-0.0242,0.1121,-0.0243,0.1116,-0.0243,0.1111,-0.0244,0.1107,-0.0245,0.1102,-0.0246,0.1097,-0.0247,0.1092,-0.0249,0.1086,-0.0249,0.1081,-0.025,0.1075,-0.025,0.107,-0.0249,0.1064,-0.0248,0.1059,-0.0248,0.1054,-0.0247,0.105,-0.0245,0.1045,-0.0244,0.1041,-0.0243,0.1038,-0.0242,0.1034,-0.0241,0.1031,-0.024,0.1028,-0.0239,0.1025,-0.0239,0.1022,-0.0238,0.1019,-0.0239,0.1015,-0.0239,0.1012,-0.024,0.1009,-0.0241,0.1006,-0.0243,0.1003,-0.0245,0.1001,-0.0247,0.0999,-0.025,0.0998,-0.0253,0.0996,-0.0258,0.0995,-0.0263,0.0993,-0.0269,0.0992,-0.0277,0.099,-0.0286,0.0987,-0.0298,0.0983,-0.0313,0.0978,-0.033,0.0973,-0.0347,0.0969,-0.0362,0.0966,-0.0374,0.0966,-0.0383,0.0968,-0.0389,0.0973,-0.0393,0.0979,-0.0396,0.0985,-0.0399,0.0991,-0.0402,0.0997,-0.0405,0.1003,-0.0406,0.1006,-0.0407,0.1008],"z":"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"},"foot":{"o":[0,0,-0.1043],"u":[0,0,1],"e1":[0,1,0],"e2":[1,0,0],"ds":0.004,"ns":66,"na":64,"lo":0.00494,"hi":0.08827,"cen":[0.0255,0.1575,0.0264,0.1576,0.0274,0.1577,0.0286,0.1579,0.0294,0.158,0.0298,0.1581,0.03,0.1581,0.03,0.1581,0.03,0.1581,0.03,0.1581,0.03,0.1582,0.03,0.1583,0.03,0.1585,0.03,0.1588,0.03,0.1592,0.03,0.1597,0.03,0.1602,0.03,0.1608,0.03,0.1614,0.03,0.162,0.03,0.1626,0.03,0.1632,0.03,0.1638,0.03,0.1643,0.03,0.1648,0.03,0.1653,0.03,0.1658,0.03,0.1662,0.03,0.1664,0.03,0.1666,0.03,0.1667,0.03,0.1667,0.03,0.1667,0.03,0.1666,0.03,0.1665,0.03,0.1663,0.03,0.1662,0.03,0.166,0.03,0.1658,0.03,0.1655,0.03,0.1653,0.03,0.165,0.0299,0.1648,0.0296,0.1645,0.0292,0.1642,0.0287,0.164,0.0279,0.1637,0.027,0.1633,0.0261,0.163,0.0252,0.1627,0.0244,0.1624,0.0237,0.1621,0.023,0.1618,0.0224,0.1615,0.0219,0.1612,0.0213,0.1609,0.0208,0.1606,0.0203,0.1603,0.0197,0.1599,0.0192,0.1596,0.0185,0.1593,0.0178,0.159,0.0168,0.1588,0.0159,0.1587,0.0151,0.1586,0.0146,0.1586],"z":"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"},"arm":{"o":[0.1119,1.4284,-0.0547],"u":[0.8088,-0.5837,-0.0717],"e1":[0.0581,-0.0419,0.9974],"e2":[-0.5852,-0.8109,0],"ds":0.005,"ns":72,"na":56,"lo":0.01579,"hi":0.08339,"cen":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"z":"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"},"fore":{"o":[0.3545,1.2599,-0.0933],"u":[0.6313,-0.6431,0.4334],"e1":[-0.3036,0.3093,0.9012],"e2":[-0.7136,-0.7005,0],"ds":0.005,"ns":62,"na":48,"lo":0.01514,"hi":0.06621,"cen":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"z":"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"}},"legBot":0.0747,"hand":{"W":[0.5391,1.0719,0.0334],"dir":[0.5714,-0.7065,0.4177],"wid":[-0.1306,0.1278,0.9832],"len":0.108},"j":{"S":[0.1726,1.3846,-0.06],"hip":[0.1036,0.9384,-0.0421],"ank":[0.159,0.1097,-0.0452]}},"m":{"H":1.6963,"ycr":0.8497,"ycut":1.4873,"tubes":{"torso":{"o":[0,0.8537,0],"u":[0,1,0],"e1":[0,0,1],"e2":[1,0,0],"ds":0.005,"ns":134,"na":96,"lo":0.03228,"hi":0.25821,"cen":[-0.0058,0,-0.0088,0,-0.0113,0,-0.0133,0,-0.015,0,-0.0193,0,-0.023,0,-0.0258,0,-0.0276,0,-0.0287,0,-0.0296,0,-0.0302,0,-0.0306,0,-0.031,0,-0.0311,0,-0.0311,0,-0.031,0,-0.0308,0,-0.0304,0,-0.0299,0,-0.0293,0,-0.0286,0,-0.0278,0,-0.0268,0,-0.0258,0,-0.0248,0,-0.0237,0,-0.0225,0,-0.0213,0,-0.0201,0,-0.0188,0,-0.0175,0,-0.0163,0,-0.015,0,-0.0138,0,-0.0127,0,-0.0117,0,-0.0108,0,-0.01,0,-0.0093,0,-0.0088,0,-0.0083,0,-0.0079,0,-0.0077,0,-0.0075,0,-0.0072,0,-0.0071,0,-0.0069,0,-0.0068,0,-0.0068,0,-0.0067,0,-0.0068,0,-0.0068,0,-0.007,0,-0.0072,0,-0.0075,0,-0.0078,0,-0.0082,0,-0.0086,0,-0.0091,0,-0.0095,0,-0.01,0,-0.0104,0,-0.0109,0,-0.0114,0,-0.0119,0,-0.0124,0,-0.0128,0,-0.0134,0,-0.0139,0,-0.0145,0,-0.0151,0,-0.0157,0,-0.0164,0,-0.0171,0,-0.0178,0,-0.0186,0,-0.0194,0,-0.0202,0,-0.0211,0,-0.0219,0,-0.0228,0,-0.0236,0,-0.0245,0,-0.0254,0,-0.0262,0,-0.0271,0,-0.0279,0,-0.0287,0,-0.0296,0,-0.0304,0,-0.0313,0,-0.0322,0,-0.0332,0,-0.0342,0,-0.0353,0,-0.0364,0,-0.0375,0,-0.0386,0,-0.0398,0,-0.041,0,-0.0422,0,-0.0434,0,-0.0447,0,-0.0459,0,-0.0472,0,-0.0485,0,-0.0498,0,-0.0509,0,-0.0519,0,-0.0528,0,-0.0534,0,-0.0538,0,-0.054,0,-0.0539,0,-0.0535,0,-0.0529,0,-0.0521,0,-0.0511,0,-0.0499,0,-0.0484,0,-0.0468,0,-0.045,0,-0.0431,0,-0.0414,0,-0.0398,0,-0.0384,0,-0.0372,0,-0.0363,0,-0.0356,0,-0.0352,0,-0.035,0,-0.035,0,-0.035,0],"z":"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"},"leg":{"o":[0,0.0827,0],"u":[0,1,0],"e1":[0,0,1],"e2":[1,0,0],"ds":0.006,"ns":137,"na":72,"lo":0.02806,"hi":0.12671,"cen":[-0.0309,0.1571,-0.0322,0.1569,-0.034,0.1567,-0.0367,0.1564,-0.0395,0.156,-0.0421,0.1557,-0.0444,0.1555,-0.0461,0.1554,-0.0475,0.1554,-0.0486,0.1554,-0.0495,0.1555,-0.0503,0.1557,-0.051,0.1558,-0.0518,0.1559,-0.0525,0.156,-0.0532,0.156,-0.054,0.156,-0.0547,0.1559,-0.0554,0.1557,-0.056,0.1555,-0.0567,0.1553,-0.0573,0.1551,-0.0579,0.1548,-0.0584,0.1546,-0.0589,0.1543,-0.0594,0.154,-0.0599,0.1537,-0.0603,0.1533,-0.0607,0.153,-0.0611,0.1526,-0.0615,0.1522,-0.0618,0.1517,-0.0621,0.1513,-0.0624,0.1507,-0.0627,0.1502,-0.0629,0.1495,-0.0631,0.1488,-0.0632,0.148,-0.0633,0.1472,-0.0633,0.1464,-0.0633,0.1456,-0.0633,0.1449,-0.0632,0.1443,-0.0631,0.1437,-0.063,0.1433,-0.0629,0.1429,-0.0628,0.1426,-0.0626,0.1423,-0.0624,0.1421,-0.0622,0.1419,-0.0619,0.1417,-0.0616,0.1415,-0.0611,0.1412,-0.0606,0.1409,-0.0599,0.1405,-0.059,0.1401,-0.0581,0.1396,-0.057,0.1391,-0.0558,0.1385,-0.0545,0.1378,-0.0532,0.1371,-0.0518,0.1362,-0.0503,0.1352,-0.0487,0.134,-0.0471,0.1326,-0.0453,0.131,-0.0433,0.1293,-0.0412,0.1275,-0.039,0.1257,-0.0367,0.124,-0.0344,0.1224,-0.0321,0.1209,-0.03,0.1196,-0.028,0.1185,-0.0263,0.1175,-0.0248,0.1166,-0.0235,0.1158,-0.0225,0.115,-0.0218,0.1142,-0.0212,0.1135,-0.0208,0.1128,-0.0204,0.1121,-0.0201,0.1114,-0.0198,0.1107,-0.0195,0.1101,-0.0191,0.1096,-0.0188,0.1092,-0.0184,0.1089,-0.0181,0.1087,-0.0178,0.1085,-0.0176,0.1083,-0.0175,0.1082,-0.0175,0.108,-0.0175,0.1078,-0.0176,0.1076,-0.0177,0.1073,-0.0178,0.107,-0.0178,0.1067,-0.0178,0.1063,-0.0178,0.1059,-0.0178,0.1054,-0.0177,0.1049,-0.0176,0.1044,-0.0175,0.1038,-0.0174,0.1032,-0.0173,0.1025,-0.0172,0.1018,-0.0171,0.101,-0.017,0.1002,-0.0169,0.0994,-0.0169,0.0985,-0.0168,0.0977,-0.0167,0.0968,-0.0167,0.096,-0.0166,0.0952,-0.0166,0.0944,-0.0166,0.0936,-0.0166,0.0928,-0.0167,0.092,-0.0169,0.0912,-0.0171,0.0905,-0.0175,0.0897,-0.0179,0.089,-0.0185,0.0883,-0.0192,0.0878,-0.02,0.0873,-0.0208,0.087,-0.0217,0.0869,-0.0225,0.0869,-0.0234,0.0871,-0.0243,0.0873,-0.0252,0.0875,-0.0261,0.0878,-0.027,0.088,-0.0277,0.0883,-0.0282,0.0884,-0.0285,0.0885],"z":"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"},"foot":{"o":[0,0,-0.1007],"u":[0,0,1],"e1":[0,1,0],"e2":[1,0,0],"ds":0.004,"ns":64,"na":64,"lo":0.0057,"hi":0.09476,"cen":[0.027,0.1544,0.0276,0.1544,0.0283,0.1545,0.0291,0.1547,0.0297,0.1549,0.0299,0.1551,0.03,0.1552,0.03,0.1554,0.03,0.1555,0.03,0.1557,0.03,0.1558,0.03,0.1561,0.03,0.1563,0.03,0.1567,0.03,0.157,0.03,0.1575,0.03,0.1579,0.03,0.1584,0.03,0.1589,0.03,0.1594,0.03,0.1598,0.03,0.1602,0.03,0.1606,0.03,0.1611,0.03,0.1615,0.03,0.1619,0.03,0.1623,0.03,0.1627,0.03,0.1631,0.03,0.1634,0.03,0.1637,0.03,0.1639,0.03,0.164,0.03,0.1641,0.03,0.1641,0.03,0.1641,0.03,0.164,0.03,0.1639,0.03,0.1637,0.03,0.1636,0.0299,0.1634,0.0297,0.1632,0.0294,0.1629,0.0288,0.1627,0.0281,0.1624,0.0272,0.1621,0.0263,0.1618,0.0254,0.1615,0.0245,0.1612,0.0237,0.1608,0.023,0.1605,0.0224,0.1602,0.0218,0.1599,0.0212,0.1596,0.0206,0.1592,0.0201,0.1589,0.0196,0.1586,0.019,0.1582,0.0184,0.1579,0.0177,0.1575,0.017,0.1572,0.0162,0.1569,0.0157,0.1567,0.0153,0.1565],"z":"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"},"arm":{"o":[0.1134,1.4272,-0.0516],"u":[0.7726,-0.6296,-0.0819],"e1":[0.0635,-0.0518,0.9966],"e2":[-0.6317,-0.7752,0],"ds":0.005,"ns":75,"na":56,"lo":0.01612,"hi":0.08614,"cen":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"z":"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"},"fore":{"o":[0.3558,1.2336,-0.0959],"u":[0.6278,-0.6254,0.4634],"e1":[-0.3283,0.327,0.8862],"e2":[-0.7058,-0.7084,0],"ds":0.005,"ns":58,"na":48,"lo":0.01323,"hi":0.06645,"cen":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"z":"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"}},"legBot":0.0827,"hand":{"W":[0.5267,1.0634,0.0303],"dir":[0.5667,-0.7267,0.3883],"wid":[-0.1555,0.1247,0.9799],"len":0.1195},"j":{"S":[0.1714,1.3799,-0.0578],"hip":[0.0906,0.9384,-0.0357],"ank":[0.1576,0.1177,-0.0483]}}};
const HEADS_TALL=8.25;     // estatura en cabezas (la referencia mide ~8,6; aqu\xED se agranda un poco la cabeza)
const HEAD_REFINE=0.5;     // la cabeza se malla con la mitad de tama\xF1o de v\xF3xel que el cuerpo
async function inflateB64(b64){
  const bin=atob(b64), u8=new Uint8Array(bin.length); for(let i=0;i<bin.length;i++) u8[i]=bin.charCodeAt(i);
  const st=new Blob([u8]).stream().pipeThrough(new DecompressionStream('deflate-raw'));
  return new Uint8Array(await new Response(st).arrayBuffer());
}
function undelta(by,n,lo,hi){ const out=new Float32Array(n); let prev=0;
  for(let k=0;k<n;k++){ prev=(prev+(by[k]|(by[n+k]<<8)))&0xFFFF; out[k]=lo+(hi-lo)*prev/65535; } return out; }
// G = 1/\u221A(1+pendiente\xB2) con filtro de m\xEDnimo 3\xD73: convierte la diferencia radial en distancia casi eucl\xEDdea
function slopeTable(R,ns,na,arcS,sphere){
  const g=new Float32Array(ns*na), dph=2*Math.PI/na;
  for(let i=0;i<ns;i++) for(let j=0;j<na;j++){
    const r=R[i*na+j], i1=Math.min(ns-1,i+1), i0=Math.max(0,i-1);
    const sn=sphere?Math.max(Math.sin(i*arcS),0.03):1;
    const a=(R[i1*na+j]-R[i0*na+j])/((i1-i0)*(sphere?arcS*r:arcS));
    const b=(R[i*na+(j+1)%na]-R[i*na+(j+na-1)%na])/(2*dph*sn*r);
    g[i*na+j]=1/Math.sqrt(1+a*a+b*b); }
  const gm=new Float32Array(ns*na);
  for(let i=0;i<ns;i++) for(let j=0;j<na;j++){ let m=1;
    for(let a=-1;a<=1;a++) for(let b=-1;b<=1;b++){ const ii=i+a; if(ii<0||ii>=ns) continue; m=Math.min(m,g[ii*na+(j+b+na)%na]); }
    gm[i*na+j]=m; }
  return gm;
}
const READY=(async()=>{
  for(const k in HEADS){ // media cabeza \u2192 tabla completa por simetr\xEDa
    const h=HEADS[k], half=h.nlon/2+1, hv=undelta(await inflateB64(h.z),h.nlat*half,h.lo,h.hi), t=new Float32Array(h.nlat*h.nlon);
    for(let i=0;i<h.nlat;i++) for(let j=0;j<half;j++){ const v=hv[i*half+j]; t[i*h.nlon+j]=v; if(j>0&&j<h.nlon/2) t[i*h.nlon+h.nlon-j]=v; }
    h.tab=t; h.g=slopeTable(t,h.nlat,h.nlon,Math.PI/(h.nlat-1),true); h.z=null; }
  for(const k in BODY) for(const name in BODY[k].tubes){ const t=BODY[k].tubes[name];
    t.R=undelta(await inflateB64(t.z),t.ns*t.na,t.lo,t.hi); t.z=null; }
})();

/* ---------- compilaci\xF3n a primitivas r\xE1pidas ---------- */
const mk=()=>({t:0,op:0,k:0,bx:0,by:0,bz:0,br:0,skip:0,arm:false,mx:false,start:0,q:new Float64Array(16),tab:null,gt:null,cen:null,off:null,fk:0,nlat:0,nlon:0});
function compile(specs){
  const out=[], stack=[];
  for(const s of specs){
    if(s.t==='g0'){ const g=mk(); g.t=3; g.start=out.length+1; g.arm=s.tag==='arm'; stack.push(g); out.push(g); continue; }
    if(s.t==='g1'){
      const g=stack.pop(); const items=out.slice(g.start).filter(p=>p.t!==3);
      let mnx=1e9,mny=1e9,mnz=1e9,mxx=-1e9,mxy=-1e9,mxz=-1e9,km=0;
      for(const p of items){ mnx=Math.min(mnx,p.bx-p.br); mxx=Math.max(mxx,p.bx+p.br); mny=Math.min(mny,p.by-p.br); mxy=Math.max(mxy,p.by+p.br); mnz=Math.min(mnz,p.bz-p.br); mxz=Math.max(mxz,p.bz+p.br); km=Math.max(km,p.k); }
      g.bx=(mnx+mxx)/2; g.by=(mny+mxy)/2; g.bz=(mnz+mxz)/2;
      let r=0; for(const p of items){ r=Math.max(r, Math.hypot(p.bx-g.bx,p.by-g.by,p.bz-g.bz)+p.br); }
      g.br=r; g.k=km+0.01; g.skip=out.length-g.start; continue;
    }
    const p=mk(), q=p.q; p.op=s.op||0; p.k=Math.max(s.k,1e-4);
    if(s.t==='h'){ const h=HEADS[s.key]; p.t=4; p.tab=h.tab; p.gt=h.g; p.nlat=h.nlat; p.nlon=h.nlon;
      q[0]=s.c[0];q[1]=s.c[1];q[2]=s.c[2];q[3]=s.s;q[4]=h.lo*s.s;q[5]=s.fy0;q[6]=s.fyL;q[7]=s.fk; p.bx=s.c[0];p.by=s.c[1];p.bz=s.c[2]; p.br=h.hi*s.s+0.004; }
    else if(s.t==='t'){ // tubo radial: origen o, eje u, marco (e1,e2), filas cada ds
      p.t=5; p.tab=s.R; p.gt=slopeTable(s.R,s.ns,s.na,s.ds,false); p.cen=s.cen; p.off=s.off||null; p.fk=s.fk||0; q[14]=s.fy0||0; q[15]=s.fyL||1; p.nlat=s.ns; p.nlon=s.na; p.mx=!!s.mx;
      const L=(s.ns-1)*s.ds;
      q[0]=s.o[0];q[1]=s.o[1];q[2]=s.o[2]; q[3]=s.u[0];q[4]=s.u[1];q[5]=s.u[2]; q[6]=s.e1[0];q[7]=s.e1[1];q[8]=s.e1[2]; q[9]=s.e2[0];q[10]=s.e2[1];q[11]=s.e2[2]; q[12]=s.ds; q[13]=L;
      let c1=0,c2=0,rm=0; for(let i=0;i<s.ns;i++){ c1+=s.cen[2*i]; c2+=s.cen[2*i+1]; } c1/=s.ns; c2/=s.ns;
      for(let i=0;i<s.ns;i++){ const d1=s.cen[2*i]-c1, d2=s.cen[2*i+1]-c2, dc=Math.hypot(d1,d2); for(let j=0;j<s.na;j++) rm=Math.max(rm,dc+s.R[i*s.na+j]); }
      const m=[s.o[0]+s.u[0]*L/2+s.e1[0]*c1+s.e2[0]*c2, s.o[1]+s.u[1]*L/2+s.e1[1]*c1+s.e2[1]*c2, s.o[2]+s.u[2]*L/2+s.e1[2]*c1+s.e2[2]*c2];
      p.bx=p.mx?-m[0]:m[0]; p.by=m[1]; p.bz=m[2]; p.br=Math.hypot(L/2,rm)+0.004; }
    else if(s.t==='e'){
      p.t=0; q[0]=s.c[0];q[1]=s.c[1];q[2]=s.c[2]; q[3]=1/s.r[0];q[4]=1/s.r[1];q[5]=1/s.r[2];
      for(let a=0;a<3;a++) for(let b=0;b<3;b++) q[6+a*3+b]=s.ax[a][b];
      q[15]=Math.min(s.r[0],s.r[1],s.r[2]);
      p.bx=s.c[0];p.by=s.c[1];p.bz=s.c[2]; p.br=Math.max(s.r[0],s.r[1],s.r[2])+0.004;
    } else if(s.t==='c'){
      p.t=1; const ba=sub(s.b,s.a); const l2=dot(ba,ba); const rr=s.r1-s.r2;
      q[0]=s.a[0];q[1]=s.a[1];q[2]=s.a[2]; q[3]=ba[0];q[4]=ba[1];q[5]=ba[2];
      q[6]=l2; q[7]=rr; q[8]=l2-rr*rr; q[9]=1/l2; q[10]=s.r1; q[11]=s.r2;
      const m=lerp(s.a,s.b,0.5); p.bx=m[0];p.by=m[1];p.bz=m[2]; p.br=Math.sqrt(l2)/2+Math.max(s.r1,s.r2)+0.004;
    }
    out.push(p);
  }
  return out;
}

// Fundido cruzado entre dos tramos que comparten superficie: cada uno se hunde \u03B4(t) de modo que su uni\xF3n
// suave (par\xE1metro k) devuelve exactamente la superficie com\xFAn. A: manda en t=0; B: manda en t=1.
function xfade(t,k,A){ if(t<=0) return A?0:k; if(t>=1) return A?k:0;
  const u=k*(2*t-1), au=u<0?-u:u, m=(k-au)*(k-au)/(4*k); return (t<0.5)===A ? m : m+au; }
function evalPrim(p,x,y,z){
  const q=p.q;
  if(p.t===0){ // elipsoide
    const dx=x-q[0],dy=y-q[1],dz=z-q[2];
    const lx=dx*q[6]+dy*q[7]+dz*q[8], ly=dx*q[9]+dy*q[10]+dz*q[11], lz=dx*q[12]+dy*q[13]+dz*q[14];
    const ax=lx*q[3], ay=ly*q[4], az=lz*q[5];
    const k0=Math.sqrt(ax*ax+ay*ay+az*az);
    const bx=ax*q[3], by=ay*q[4], bz=az*q[5];
    const k1=Math.sqrt(bx*bx+by*by+bz*bz);
    return k1<1e-9 ? -q[15] : k0*(k0-1)/k1;
  }
  if(p.t===1){ // cono redondeado
    const pax=x-q[0], pay=y-q[1], paz=z-q[2];
    const l2=q[6], rr=q[7], a2=q[8], il2=q[9];
    const yy=pax*q[3]+pay*q[4]+paz*q[5];
    const zz=yy-l2;
    const vx=pax*l2-q[3]*yy, vy=pay*l2-q[4]*yy, vz=paz*l2-q[5]*yy;
    const x2=vx*vx+vy*vy+vz*vz, y2=yy*yy*l2, z2=zz*zz*l2;
    const k=Math.sign(rr)*rr*rr*x2;
    if(Math.sign(zz)*a2*z2>k) return Math.sqrt(x2+z2)*il2-q[11];
    if(Math.sign(yy)*a2*y2<k) return Math.sqrt(x2+y2)*il2-q[10];
    return (Math.sqrt(x2*a2*il2)+yy*rr)*il2-q[10];
  }
  if(p.t===5){ // tubo radial (interpolaci\xF3n bilineal en fila y \xE1ngulo, tapas planas en los extremos)
    if(p.mx) x=-x;
    const px=x-q[0], py=y-q[1], pz=z-q[2], s=px*q[3]+py*q[4]+pz*q[5];
    const ns=p.nlat, na=p.nlon, T=p.tab, G=p.gt, C=p.cen;
    let v=s/q[12]; if(v<0) v=0; else if(v>ns-1) v=ns-1;
    const i0=Math.min(ns-2,v|0), fu=v-i0;
    const a1=px*q[6]+py*q[7]+pz*q[8]-(C[2*i0]+(C[2*i0+2]-C[2*i0])*fu);
    const a2=px*q[9]+py*q[10]+pz*q[11]-(C[2*i0+1]+(C[2*i0+3]-C[2*i0+1])*fu);
    const rho=Math.sqrt(a1*a1+a2*a2);
    let w=Math.atan2(a2,a1)/(2*Math.PI)*na; if(w<0) w+=na;
    const jw=w|0, j0=jw%na, j1=(j0+1)%na, fv=w-jw, k00=i0*na+j0, k01=i0*na+j1, k10=k00+na, k11=k01+na;
    const R=(T[k00]+(T[k01]-T[k00])*fv)*(1-fu)+(T[k10]+(T[k11]-T[k10])*fv)*fu;
    const g=(G[k00]+(G[k01]-G[k00])*fv)*(1-fu)+(G[k10]+(G[k11]-G[k10])*fv)*fu;
    let d=(rho-R)*g*0.92; const O=p.off;
    if(O) d+=O[i0]+(O[i0+1]-O[i0])*fu;
    if(p.fk>0) d+=xfade((y-q[14])/q[15],p.fk,true);
    const dc=Math.max(-s,s-q[13]);
    if(dc>0) return d>0?Math.sqrt(d*d+dc*dc):dc;
    return d>dc?d:dc;
  }
  { // cabeza: distancia radial contra el mapa esf\xE9rico
    const dx=x-q[0], dy=y-q[1], dz=z-q[2], r=Math.sqrt(dx*dx+dy*dy+dz*dz);
    if(r<1e-6) return -q[4];
    const nlat=p.nlat, nlon=p.nlon, T=p.tab, G=p.gt;
    const u=Math.acos(dy/r)/Math.PI*(nlat-1); let v=Math.atan2(dx,dz)/(2*Math.PI)*nlon; if(v<0) v+=nlon;
    const i0=Math.min(nlat-2,u|0), fu=u-i0, jv=v|0, j0=jv%nlon, j1=(j0+1)%nlon, fv=v-jv;
    const k00=i0*nlon+j0, k01=i0*nlon+j1, k10=k00+nlon, k11=k01+nlon;
    const R=(T[k00]+(T[k01]-T[k00])*fv)*(1-fu)+(T[k10]+(T[k11]-T[k10])*fv)*fu;
    const g=(G[k00]+(G[k01]-G[k00])*fv)*(1-fu)+(G[k10]+(G[k11]-G[k10])*fv)*fu;
    return (r-R*q[3])*g*0.95+xfade((y-q[5])/q[6],q[7],false);   // la base se funde con el cuello del torso
  }
}

let BASE=[], LEGS=[], U=1, NOARMS=false, HS=[0,-9,0,0];
const KX=0.010, KF=0.008, KE=0.008, KN=0.006;   // anchos de fundido: cadera, tobillo, codo, cuello
function chain(list,d,x,y,z){
  for(let i=0,n=list.length;i<n;i++){
    const p=list[i];
    const dx=x-p.bx, dy=y-p.by, dz=z-p.bz, r2=dx*dx+dy*dy+dz*dz;
    if(p.t===3){ const T=p.k+(d<0?-d:d)+p.br; if((NOARMS&&p.arm) || r2>T*T) i+=p.skip; continue; }
    if(p.op===0){
      const T=d+p.k+p.br; if(T<=0 || r2>T*T) continue;
      const di=evalPrim(p,x,y,z); const k=p.k;
      const h=Math.max(k-Math.abs(d-di),0)/k; d=Math.min(d,di)-h*h*k*0.25;
    } else {
      const T=p.k-d+p.br; if(T<=0 || r2>T*T) continue;
      const di=-evalPrim(p,x,y,z); const k=p.k;
      const h=Math.max(k-Math.abs(d-di),0)/k; d=Math.max(d,di)+h*h*k*0.25;
    }
  }
  return d;
}
function sdfN(x,y,z){
  const d=chain(BASE,1e9,x,y,z);                      // torso, cabeza, brazos
  const dl=chain(LEGS,d+KX+0.003,x,y,z);              // piernas y pies (uni\xF3n dura entre s\xED)
  const h=Math.max(KX-Math.abs(d-dl),0)/KX; return Math.min(d,dl)-h*h*KX*0.25;
}
function sdf(x,y,z){ const d=U*sdfN(x/U,y/U,z/U); return Math.max(d,-y); }

/* ---------- construcci\xF3n del cuerpo ----------
   Unidades normalizadas (U escala al tama\xF1o real). Par\xE1metros del cuerpo (todos relativos, 1 = referencia):
     U       escala global (altura)                kB     escala vertical de piernas y tronco
     kPel    profundidad de tiro (cadera\u2192cintura)  kHead  escala de cuello+cabeza sobre el punto alto del hombro
     b,w,hp  contorno de busto, cintura, cadera    fsh    anchura de hombros
     la      largo de brazo                         fgl    proyecci\xF3n de gl\xFAteos (tiro trasero)
     fbi     b\xEDceps     fwr  mu\xF1eca    fth  muslo    fnk    cuello
   Cada factor act\xFAa de lleno en su zona y arrastra con menos peso a las vecinas: el cuerpo acompa\xF1a al cambio. */
const PDEF={U:1,kB:1,kPel:1,kHead:1,b:1,w:1,hp:1,fsh:1,la:1,fgl:1,fbi:1,fwr:1,fth:1,fnk:1};
let TORSO_X=0.3, NECK_Y=1.45, YCUT=1.5, LV={bust:1.33,waist:1.15,hip:0.97,armpit:1.37}, TZ=null, LEGT=null, LM=null, WARP=null;
function torsoZ(yN){ if(!TZ) return 0; let v=(yN-TZ.y0)/TZ.ds; v=Math.max(0,Math.min(TZ.n-1,v)); const i=Math.min(TZ.n-2,v|0), f=v-i; return TZ.z0+TZ.c[2*i]+(TZ.c[2*i+2]-TZ.c[2*i])*f; }

// Puntos de referencia de cada sexo (normalizados, sin deformar). Se calculan una vez.
const REFLM={};
function refLM(sex){
  if(REFLM[sex]) return REFLM[sex];
  const F=sex==='f', D=BODY[F?'f':'m'], hd=HEADS[F?'nf':'nm'];
  const hk=(1.753/HEADS_TALL)/0.2025, sB=(1.753-hd.dcut*hk)/D.ycut, Z0=-D.j.ank[2]*sB;
  const P=v=>[v[0]*sB,v[1]*sB,v[2]*sB+Z0];
  const fr=F?{hip:0.553,waist:0.658,bust:0.765,arm:0.787}:{hip:0.535,waist:0.650,bust:0.772,arm:0.787};
  // punto alto del hombro: bajando desde el corte del cuello, primera fila donde el lateral se ensancha 1,45\xD7
  const t=D.tubes.torso, side=t.na>>2, iC=Math.min(t.ns-1,Math.round((D.ycut-t.o[1])/t.ds)), rn=t.R[iC*t.na+side];
  let iH=iC; while(iH>0 && t.R[iH*t.na+side]<1.45*rn) iH--;
  const ta=D.tubes.arm, tf=D.tubes.fore;
  const E=P(add(ta.o,mul(ta.u,(ta.ns-1)*ta.ds-0.03))), Wr=P(add(tf.o,mul(tf.u,(tf.ns-1)*tf.ds-0.012)));
  return REFLM[sex]={F,D,hd,hk,sB,Z0,P,
    yA:0.10, yCr:D.ycr*sB, yCut:D.ycut*sB, yHPS:(t.o[1]+iH*t.ds)*sB,
    yW:fr.waist*D.H*sB, yHip:fr.hip*D.H*sB, yBust:fr.bust*D.H*sB, yArm:fr.arm*D.H*sB,
    S:P(D.j.S), E, Wr, U0:F?1:1.85/1.75};
}

// Deformaci\xF3n vertical suave: pendiente por tramos (tobillo fijo \xB7 piernas \xB7 tiro \xB7 tronco \xB7 cuello+cabeza),
// suavizada con dos filtros de caja de 2 cm (conservan el \xE1rea: la altura total no cambia) e integrada.
function makeWarp(L,p){
  const dy=0.001, n=2100, s=new Float64Array(n);
  for(let i=0;i<n;i++){ const y=(i+0.5)*dy;
    s[i]= y<L.yA?1 : y<L.yCr?p.kB : y<L.yW?p.kPel : y<L.yHPS?p.kB : p.kHead; }
  const blur=a=>{ const o=new Float64Array(n), r=10; let acc=0;
    for(let i=-r;i<=r;i++) acc+=a[Math.max(0,Math.min(n-1,i))];
    for(let i=0;i<n;i++){ o[i]=acc/(2*r+1); acc+=a[Math.min(n-1,i+r+1)]-a[Math.max(0,i-r)]; } return o; };
  const sl=blur(blur(s)), Wt=new Float64Array(n+1);
  for(let i=0;i<n;i++) Wt[i+1]=Wt[i]+sl[i]*dy;
  const W=y=>{ if(y<=0) return y; const v=y/dy; if(v>=n) return Wt[n]+(y-n*dy)*sl[n-1]; const i=v|0; return Wt[i]+(Wt[i+1]-Wt[i])*(v-i); };
  const Winv=yp=>{ if(yp<=0) return yp; let lo=0, hi=n; if(yp>=Wt[n]) return n*dy+(yp-Wt[n])/sl[n-1];
    while(hi-lo>1){ const m=(lo+hi)>>1; if(Wt[m]<=yp) lo=m; else hi=m; } return (lo+(yp-Wt[lo])/(Wt[lo+1]-Wt[lo]))*dy; };
  return {W,Winv};
}
// Remuestrea las filas de un tubo vertical (eje y) seg\xFAn la deformaci\xF3n: los radios no cambian, solo su altura.
function warpRows(R,cen,ns,na,ds,y0,WP){
  const a=WP.W(y0), b=WP.W(y0+(ns-1)*ds), n2=Math.max(2,Math.round((b-a)/ds)+1), d2=(b-a)/(n2-1);
  const R2=new Float32Array(n2*na), c2=new Float32Array(n2*2), ys=new Float32Array(n2);
  for(let i=0;i<n2;i++){ const yp=a+i*d2, y=WP.Winv(yp); ys[i]=y;
    let v=(y-y0)/ds; v=Math.max(0,Math.min(ns-1,v)); const k=Math.min(ns-2,v|0), f=v-k;
    for(let j=0;j<na;j++) R2[i*na+j]=R[k*na+j]+(R[(k+1)*na+j]-R[k*na+j])*f;
    c2[2*i]=cen[2*k]+(cen[2*k+2]-cen[2*k])*f; c2[2*i+1]=cen[2*k+1]+(cen[2*k+3]-cen[2*k+1])*f; }
  return {R:R2,cen:c2,ns:n2,ds:d2,y0:a,ysrc:ys};
}

function build(o){
  const L=refLM(o.sex), F=L.F, D=L.D, hd=L.hd, sB=L.sB, Z0=L.Z0, P=L.P;
  const p={...PDEF,...(o.prm||{})};
  U=p.U;
  const b=p.b, w=p.w, hp=p.hp, mass=(b+w+hp)/3;
  const cp=(f,a)=>1+(f-1)*a, g=(y,yc,s)=>Math.exp(-((y-yc)*(y-yc))/(2*s*s));
  const WP=makeWarp(L,p); WARP=WP;
  const yCr=L.yCr, yCut=L.yCut, yNb=yCut-0.075, yHPS=L.yHPS, S=L.S;
  LV={hip:L.yHip, waist:L.yW, bust:L.yBust, armpit:L.yArm, crotch:yCr};
  const wTh=y=>1-sstep(yCr-0.02,yCr+0.08,y);             // peso del muslo alrededor de la entrepierna (igual en torso y piernas)
  const fT=y=>{                                          // escala horizontal seg\xFAn la altura (sin deformar)
    if(y>=yCr) return fTtorso(y);
    return fTleg(y);
  };
  const fTtorso=y=>{
    {
      const neck=1-sstep(yNb,yCut,y);
      const gb=Math.max(g(y,LV.bust,0.075), y>LV.bust?0.4:0)*neck;   // el t\xF3rax arrastra a los hombros
      const gw=g(y,LV.waist,0.07);
      const gh=y<LV.hip?1:g(y,LV.hip,0.075);
      const gt=wTh(y);                                   // el muslo ensancha tambi\xE9n el fondo de la pelvis
      const gn=sstep(yHPS-0.07,yHPS+0.012,y)*(1-0.6*sstep(yCut+0.012,yCut+0.03,y));   // rampa larga: sin collar en la base
      return cp(b,gb)*cp(w,gw)*cp(hp,gh)*cp(mass,0.3*neck)*cp(p.fth,gt)*cp(p.fnk,gn);
    }
  };
  const fTleg=y=>{
    const t=y/yCr, kn=0.61;                             // piernas: de la cadera (t=1) al tobillo
    const a=t>kn ? 0.45+0.55*sstep(kn,1,t) : 0.15+0.30*sstep(0.12,kn,t);
    const at=(t>0.82 ? 1 : t>0.6 ? 0.35+0.65*sstep(0.6,0.82,t) : 0.12+0.23*sstep(0.1,0.6,t))*(y>yCr-0.02?wTh(y):1);
    return cp(hp,a)*cp(mass,0.12+0.18*sstep(0.1,0.5,t))*cp(p.fth,at);
  };
  const wS=y=>sstep(LV.bust-0.03,S[1]-0.03,y)*(1-sstep(S[1]+0.01,yHPS+0.005,y));        // franja de hombros
  const wG=y=>sstep(yCr-0.07,yCr+0.02,y)*(1-sstep(LV.hip+0.03,LV.waist-0.01,y));        // franja de gl\xFAteos
  const wD=y=>sstep(LV.armpit-0.05,S[1]-0.02,y)*(1-sstep(S[1]+0.02,yHPS,y));            // casquete del hombro (deltoides en la tabla del torso)
  const B=[], LG=[], Y=[0,1,0], Zv=[0,0,1], X=[1,0,0];
  const LOV=0.05*sB, FOV=0.04*sB, EOV=0.065*sB, NOV=0.028*p.kHead;   // longitudes de solape: cadera, tobillo, codo, cuello
  const yCrW=WP.W(yCr), yCutW=WP.W(yCut);

  /* torso (de la entrepierna al cuello) */
  { const t=D.tubes.torso, na=t.na, ds=t.ds*sB, y0=t.o[1]*sB, R=new Float32Array(t.R.length), cen=new Float32Array(t.ns*2);
    for(let i=0;i<t.ns;i++){ const y=y0+i*ds, f=fT(y), fb=(b-1)*g(y,LV.bust,0.075)*0.3;   // el busto crece m\xE1s por delante
      const ks=(p.fsh-1)*wS(y)+(cp(p.fbi,0.7)*cp(mass,0.4)-1)*wD(y), kg=(p.fgl-1)*wG(y), kh=1+(p.kHead-1)*sstep(yCut-0.008,yCut+0.016,y);   // el cuello acompa\xF1a a la cabeza
      cen[2*i]=t.cen[2*i]*sB;
      for(let j=0;j<na;j++){ const ph=j/na*2*Math.PI, c=Math.cos(ph), s=Math.sin(ph), bk=c<0?Math.pow(-c,1.5):0;
        R[i*na+j]=t.R[i*na+j]*sB*f*kh*(1+fb*c)*(1+ks*s*s)*(1+kg*bk); } }
    const T=warpRows(R,cen,t.ns,na,ds,y0,WP), off=new Float32Array(T.ns);   // cede la pelvis a las piernas y, arriba, el cuello a la cabeza
    for(let i=0;i<T.ns;i++){ const y=T.y0+i*T.ds; off[i]= y>yCutW ? xfade((y-yCutW)/NOV,KN,true) : xfade((y-yCrW)/LOV,KX,false); }
    B.push({t:'t',o:[0,T.y0,Z0],u:Y,e1:Zv,e2:X,ds:T.ds,ns:T.ns,na,R:T.R,cen:T.cen,off,k:0.006});
    TZ={y0:T.y0,ds:T.ds,n:T.ns,c:T.cen,z0:Z0};
    { const i=Math.round((LV.bust-0.04-y0)/ds); LV.bustX=R[i*na+(na>>2)]*1.04; } }   // semiancho del t\xF3rax justo bajo la axila

  /* cabeza: r\xEDgida, escalada por kHead y apoyada sobre el corte deformado del cuello */
  const hk=L.hk*p.kHead, hc0=[0,1.753-hd.dc*L.hk,hd.nk[0]*sB+Z0-(hd.nk[0]-hd.zc)*L.hk];
  const ncz=torsoZ(yCutW), hc=[0,yCutW+(hc0[1]-yCut)*p.kHead,ncz+(hc0[2]-ncz)*p.kHead];
  B.push({t:'h',key:F?'nf':'nm',c:hc,s:hk,k:KN,fy0:yCutW,fyL:NOV,fk:KN});
  HS=[hc[0],hc[1],hc[2],hd.hi*hk+0.012];
  YCUT=yCutW-0.035*p.kHead; NECK_Y=yCutW-0.05;

  /* piernas y pies */
  both(LG,Lg=>{
    { const t=D.tubes.leg, na=t.na, ds=t.ds*sB, y0=t.o[1]*sB, R=new Float32Array(t.R.length), cen=new Float32Array(t.ns*2);
      for(let i=0;i<t.ns;i++){ const y=y0+i*ds, f=fT(y), kg=(p.fgl-1)*wG(y)*sstep(yCr-0.07,yCr-0.01,y);
        cen[2*i]=t.cen[2*i]*sB; cen[2*i+1]=t.cen[2*i+1]*sB*f;
        for(let j=0;j<na;j++){ const c=Math.cos(j/na*2*Math.PI), bk=c<0?Math.pow(-c,1.5):0; R[i*na+j]=t.R[i*na+j]*sB*f*(1+kg*bk); } }
      const T=warpRows(R,cen,t.ns,na,ds,y0,WP), off=new Float32Array(T.ns), y0w=WP.W(y0);
      for(let i=0;i<T.ns;i++){ const y=T.y0+i*T.ds, s=y-y0w; off[i]= y>yCrW ? xfade((y-yCrW)/LOV,KX,true) : (s<FOV ? xfade(s/FOV,KF,false) : 0); }
      Lg.push({t:'t',o:[0,T.y0,Z0],u:Y,e1:Zv,e2:X,ds:T.ds,ns:T.ns,na,R:T.R,cen:T.cen,off,k:0.002});
      LEGT={y0:T.y0,ds:T.ds,n:T.ns,cen:T.cen,z0:Z0}; }
    { const t=D.tubes.foot, fA=fT(0.08), R=new Float32Array(t.R.length), cen=new Float32Array(t.ns*2);
      for(let i=0;i<t.ns;i++){ cen[2*i]=t.cen[2*i]*sB; cen[2*i+1]=t.cen[2*i+1]*sB*fA; }
      for(let k=0;k<R.length;k++) R[k]=t.R[k]*sB;
      Lg.push({t:'t',o:[0,0,t.o[2]*sB+Z0],u:Zv,e1:Y,e2:X,ds:t.ds*sB,ns:t.ns,na:t.na,R,cen,k:KF,fk:KF,fy0:D.legBot*sB,fyL:FOV}); }
  });

  /* brazos (A-pose) y manos: el hombro sube/baja con la deformaci\xF3n, se abre con t\xF3rax y hombros y el brazo se alarga desde \xE9l */
  const S2=[S[0]*fT(S[1])*p.fsh, WP.W(S[1]), S[2]], at2=v=>add(S2,mul(sub(v,S),p.la));
  const af=cp(mass,0.75)*cp(b,0.15);
  let rS=0.04, Ew=at2(L.E), Ww=at2(L.Wr), fu=[0,-1,0], fe=[[1,0,0],[0,0,1]], au=[0,-1,0], ae=[[1,0,0],[0,0,1]];
  both(B,La=>{
    G0(La,'arm');
    let rW=0.026;
    for(const name of ['arm','fore']){
      const t=D.tubes[name], R=new Float32Array(t.R.length), o2=at2(P(t.o)), ds=t.ds*sB*p.la, Lt=(t.ns-1)*ds;
      for(let i=0;i<t.ns;i++){ const s=i*ds;
        const f= name==='arm' ? af*cp(p.fbi,0.55+0.45*sstep(0.04*p.la,0.12*p.la,s)*(1-sstep(Lt-0.08*p.la,Lt-0.02*p.la,s)))
                              : cp(af,0.6)*cp(p.fbi,0.5*(1-sstep(0.02,0.12*p.la,s)))*cp(p.fwr,sstep(0.05*p.la,Lt-0.03*p.la,s));
        for(let j=0;j<t.na;j++) R[i*t.na+j]=t.R[i*t.na+j]*sB*f; }
      const off=new Float32Array(t.ns);
      for(let i=0;i<t.ns;i++){ const s=i*ds;
        off[i]= name==='arm' ? 0.008*(1-sstep(0,0.045,s))+(s>Lt-EOV ? xfade((s-(Lt-EOV))/EOV,KE,true) : 0)   // ra\xEDz bajo el hombro; codo
                             : (s<EOV ? xfade(s/EOV,KE,false) : 0); }
      La.push({t:'t',o:o2,u:t.u,e1:t.e1,e2:t.e2,ds,ns:t.ns,na:t.na,R,cen:new Float32Array(t.ns*2),off,k:name==='arm'?0.01:KE});
      if(name==='fore'){ let s=0; for(let j=0;j<t.na;j++) s+=R[(t.ns-4)*t.na+j]; rW=s/t.na; fu=t.u; fe=[t.e1,t.e2]; }
      else { let s=0; const i=Math.round(0.09/(t.ds*sB)); for(let j=0;j<t.na;j++) s+=R[i*t.na+j]; rS=s/t.na; au=t.u; ae=[t.e1,t.e2]; }
    }
    // mano procedimental anclada a la mu\xF1eca
    const W=Ww;
    const u3=norm(D.hand.dir), w=norm(sub(D.hand.wid,mul(u3,dot(D.hand.wid,u3)))), n=norm(cross(u3,w));
    const hs=D.hand.len*sB/0.1*Math.sqrt(p.la)*cp(p.fwr,0.5), fr2=frameAlong(u3,w), at=(a,bb,c)=>add(add(add(W,mul(u3,a*hs)),mul(w,bb*hs)),mul(n,c*hs));
    G0(La);
    E(La,at(0.004,0,0),[rW*0.8,0.024*hs,rW*1.12],fr2,0.014);                            // mu\xF1eca
    E(La,at(0.05,0,0.002),[0.016*hs,0.05*hs,0.04*hs],fr2,0.018);                        // palma
    E(La,at(0.036,0.022,0.008),[0.014*hs,0.028*hs,0.016*hs],fr2,0.012);                 // tenar
    const offs=[0.026,0.009,-0.009,-0.025], lens=[0.072,0.08,0.075,0.06];
    for(let f=0;f<4;f++){
      const b0=at(0.094,offs[f],0), d1=norm(add(u3,mul(n,0.10))), d2=norm(add(u3,mul(n,0.42)));
      const b1=add(b0,mul(d1,lens[f]*0.55*hs)), b2=add(b1,mul(d2,lens[f]*0.45*hs));
      C(La,b0,b1,0.0092*hs,0.0082*hs,0.006); C(La,b1,b2,0.0082*hs,0.0068*hs,0.004);
    }
    const T0=at(0.026,0.026,0.006);
    const T1=add(T0,mul(norm(add(add(mul(u3,0.75),mul(w,0.45)),mul(n,0.45))),0.036*hs));
    const T2=add(T1,mul(norm(add(add(mul(u3,0.85),mul(w,0.2)),mul(n,0.5))),0.03*hs));
    C(La,T0,T1,0.0125*hs,0.0105*hs,0.008); C(La,T1,T2,0.0105*hs,0.0085*hs,0.005);
    G1(La);
    G1(La);
  });
  BASE=compile(B); LEGS=compile(LG);
  TORSO_X=0.3;
  // puntos de medida (normalizados, ya deformados), lado +x
  LM={S:S2, E:Ew, W:Ww, rS, au, ae, fu, fe, yCrW, yCutW, yHPSW:WP.W(yHPS),
      lv:{bust:WP.W(LV.bust), waist:WP.W(LV.waist), hip:WP.W(LV.hip), armpit:WP.W(LV.armpit)}, bustX:LV.bustX};
}

/* ---------- Surface Nets por capas ---------- */
// Campo recortado por el plano de uni\xF3n cuello/cabeza: sg=+1 conserva y<ycl (cuerpo), sg=-1 conserva y>ycl (cabeza).
function fclip(x,y,z,ycl,sg){ const d=sdf(x,y,z), c=sg*(y-ycl); return d>c?d:c; }
const SN_EA=[0,1,2,3,4,5,6,7, 0,2,1,3,4,6,5,7, 0,4,1,5,2,6,3,7];
const SN_CO=[0,0,0, 1,0,0, 0,1,0, 1,1,0, 0,0,1, 1,0,1, 0,1,1, 1,1,1];
// Una pasada de Surface Nets sobre la caja BX. Sin funciones anidadas: el bucle caliente solo usa variables locales.
function meshPass(h,BX,ycl,sg,prog){
  const x0=BX[0], x1=BX[1], y0=BX[2], y1=BX[3], z0=BX[4], z1=BX[5];
  const nx=Math.ceil((x1-x0)/h)+1, ny=Math.ceil((y1-y0)/h)+1, nz=Math.ceil((z1-z0)/h)+1;
  let Vlo=new Float32Array(nx*nz), Vhi=new Float32Array(nx*nz);
  const cx=nx-1, cz=nz-1;
  let Ca=new Int32Array(cx*cz).fill(-1), Cb=new Int32Array(cx*cz).fill(-1);
  const P=[], Q=[], QD=[];   // QD: eje y sentido de la arista que genera cada quad (orienta sus tri\xE1ngulos)
  const v=new Float64Array(8), th=1.5*h;
  const hsx=HS[0]*U, hsy=HS[1]*U, hsz=HS[2]*U, hsr=HS[3]*U+2*h;
  for(let j=-1;j<ny-1;j++){
    /* 1) rellena la capa j+1 usando cotas de distancia (capa anterior y saltos en x) para no evaluar lejos de la superficie */
    { const V=Vhi, first=j<0, y=y0+(j+1)*h;
      for(let k=0;k<nz;k++){
        const z=z0+k*h, row=k*nx; let i=0;
        // junto a la cabeza las cotas se usan con mucho margen (su campo radial no es una distancia exacta)
        let ia=nx, ib=nx; { const dy=y-hsy, dz=z-hsz, q=hsr*hsr-dy*dy-dz*dz;
          if(q>0){ const sq=Math.sqrt(q); ia=Math.max(0,Math.floor((hsx-sq-x0)/h)); ib=Math.min(nx,Math.ceil((hsx+sq-x0)/h)+1); } }
        while(i<nx){
          const kx=(i>=ia&&i<ib)?0.3:1;
          if(!first){ const pv=Vlo[row+i], ap=(pv<0?-pv*0.6:pv)*kx-h; if(ap>th){ V[row+i]=pv<0?-ap:ap; i++; continue; } }   // dentro del cuerpo la cota es optimista: se salta menos
          const d=fclip(x0+i*h,y,z,ycl,sg); V[row+i]=d; const ad=(d<0?-d:d)*kx;
          if(ad>2*h){
            let e=Math.min(nx,i+Math.floor(ad*(d<0?0.4:0.7)/h)); if(i<ia&&e>ia) e=ia;
            for(let m=i+1;m<e;m++){ const b=ad-(m-i)*h*1.25; V[row+m]=d<0?-b:b; }
            i=Math.max(e,i+1);
          } else i++;
        }
      }
    }
    if(j<0){ const t=Vlo; Vlo=Vhi; Vhi=t; continue; }
    /* 2) un v\xE9rtice por celda con cambio de signo y un quad por arista cruzada */
    for(let k=0;k<cz;k++){
      for(let i=0;i<cx;i++){
        const o=k*nx+i, ci=k*cx+i;
        v[0]=Vlo[o]; v[1]=Vlo[o+1]; v[2]=Vhi[o]; v[3]=Vhi[o+1];
        v[4]=Vlo[o+nx]; v[5]=Vlo[o+nx+1]; v[6]=Vhi[o+nx]; v[7]=Vhi[o+nx+1];
        let mask=0; for(let c=0;c<8;c++) if(v[c]<0) mask|=1<<c;
        if(mask===0||mask===255){ Cb[ci]=-1; continue; }
        let sx=0,sy=0,sz=0,n=0;
        for(let e=0;e<24;e+=2){
          const a=SN_EA[e], b=SN_EA[e+1], va=v[a], vb=v[b];
          if((va<0)!==(vb<0)){ const t=va/(va-vb), a3=a*3, b3=b*3;
            sx+=SN_CO[a3]+(SN_CO[b3]-SN_CO[a3])*t; sy+=SN_CO[a3+1]+(SN_CO[b3+1]-SN_CO[a3+1])*t; sz+=SN_CO[a3+2]+(SN_CO[b3+2]-SN_CO[a3+2])*t; n++; }
        }
        Cb[ci]=P.length/3;
        P.push(x0+(i+sx/n)*h, y0+(j+sy/n)*h, z0+(k+sz/n)*h);
        const s0=v[0]<0;
        if((v[1]<0)!==s0 && j>0 && k>0){ Q.push(Cb[ci],Ca[ci],Ca[ci-cx],Cb[ci-cx]); QD.push(s0?1:-1); }
        if((v[2]<0)!==s0 && i>0 && k>0){ Q.push(Cb[ci],Cb[ci-1],Cb[ci-cx-1],Cb[ci-cx]); QD.push(s0?2:-2); }
        if((v[4]<0)!==s0 && i>0 && j>0){ Q.push(Cb[ci],Cb[ci-1],Ca[ci-1],Ca[ci]); QD.push(s0?3:-3); }
      }
    }
    { const t=Vlo; Vlo=Vhi; Vhi=t; const c=Ca; Ca=Cb; Cb=c; }
    if((j&15)===0) prog(0.05+0.7*j/ny);
  }
  /* 3) dos pasos de Newton hacia la isosuperficie; la normal es el gradiente del campo */
  const nv=P.length/3, pos=new Float32Array(P), nor=new Float32Array(nv*3);
  const e=h*0.3, lim=0.5*h;
  for(let vi=0;vi<nv;vi++){
    let x=pos[vi*3], y=pos[vi*3+1], z=pos[vi*3+2], gx=0, gy=1, gz=0;
    for(let pass=0;pass<2;pass++){
      const f1=fclip(x+e,y-e,z-e,ycl,sg), f2=fclip(x-e,y-e,z+e,ycl,sg), f3=fclip(x-e,y+e,z-e,ycl,sg), f4=fclip(x+e,y+e,z+e,ycl,sg);
      gx=f1-f2-f3+f4; gy=-f1-f2+f3+f4; gz=-f1+f2-f3+f4; const gl=Math.hypot(gx,gy,gz)||1e-12; gx/=gl; gy/=gl; gz/=gl;
      const d=(f1+f2+f3+f4)*0.25; let st=d/(gl/(4*e)); if(st>lim)st=lim; else if(st<-lim)st=-lim;
      x-=gx*st; y-=gy*st; z-=gz*st;
    }
    if(Math.abs(y-ycl)<3*h){                           // junto al plano de uni\xF3n la normal sale del campo sin recortar
      const f1=sdf(x+e,y-e,z-e), f2=sdf(x-e,y-e,z+e), f3=sdf(x-e,y+e,z-e), f4=sdf(x+e,y+e,z+e);
      gx=f1-f2-f3+f4; gy=-f1-f2+f3+f4; gz=-f1+f2-f3+f4; const gl=Math.hypot(gx,gy,gz)||1e-12; gx/=gl; gy/=gl; gz/=gl;
    }
    pos[vi*3]=x; pos[vi*3+1]=y; pos[vi*3+2]=z; nor[vi*3]=gx; nor[vi*3+1]=gy; nor[vi*3+2]=gz;
    if((vi&8191)===0) prog(0.75+0.2*vi/nv);
  }
  /* 4) cada quad \u2192 dos tri\xE1ngulos por la diagonal corta, orientados seg\xFAn el signo de su arista */
  const nq=Q.length/4, idx=new Uint32Array(nq*6);
  for(let qi=0;qi<nq;qi++){
    const a=Q[qi*4], b=Q[qi*4+1], c=Q[qi*4+2], d=Q[qi*4+3], a3=a*3, b3=b*3, c3=c*3, d3=d*3;
    const ux=pos[c3]-pos[a3], uy=pos[c3+1]-pos[a3+1], uz=pos[c3+2]-pos[a3+2];
    const vx=pos[d3]-pos[b3], vy=pos[d3+1]-pos[b3+1], vz=pos[d3+2]-pos[b3+2];
    const qd=QD[qi], fa=qd===1||qd===-1?uy*vz-uz*vy:(qd===2||qd===-2?uz*vx-ux*vz:ux*vy-uy*vx);
    const flip=(qd>0?fa:-fa)<0, o=qi*6;
    if(ux*ux+uy*uy+uz*uz<=vx*vx+vy*vy+vz*vz){ idx[o]=a; idx[o+3]=a; if(flip){ idx[o+1]=c; idx[o+2]=b; idx[o+4]=d; idx[o+5]=c; } else { idx[o+1]=b; idx[o+2]=c; idx[o+4]=c; idx[o+5]=d; } }
    else if(flip){ idx[o]=a; idx[o+1]=d; idx[o+2]=b; idx[o+3]=b; idx[o+4]=d; idx[o+5]=c; }
    else { idx[o]=a; idx[o+1]=b; idx[o+2]=d; idx[o+3]=b; idx[o+4]=c; idx[o+5]=d; }
  }
  return {pos,nor,idx};
}
function mesh(h,prog){
  // cuerpo hasta medio cuello; cabeza (v\xF3xel m\xE1s fino) desde 6 mm m\xE1s abajo: ambas mallas se solapan sobre la misma superficie
  const yc=YCUT*U, ov=0.006*U, hh=h*HEAD_REFINE, r=HS[3]*U;
  const a=meshPass(h,[-0.80*U,0.80*U,-0.006,yc+3*h,(TZ.z0-0.26)*U,(TZ.z0+0.30)*U],yc,1,p=>prog(p*0.62));
  const b=meshPass(hh,[HS[0]*U-r,HS[0]*U+r,yc-ov-3*hh,(HS[1]+HS[3])*U,HS[2]*U-r,HS[2]*U+r],yc-ov,-1,p=>prog(0.62+p*0.38));
  const na=a.pos.length/3, pos=new Float32Array(a.pos.length+b.pos.length), nor=new Float32Array(pos.length), idx=new Uint32Array(a.idx.length+b.idx.length);
  pos.set(a.pos); pos.set(b.pos,a.pos.length); nor.set(a.nor); nor.set(b.nor,a.nor.length);
  idx.set(a.idx); for(let i=0;i<b.idx.length;i++) idx[a.idx.length+i]=b.idx[i]+na;
  return {pos,nor,idx,split:[a.pos.length/3,b.pos.length/3]};
}

/* ---------- medici\xF3n tipo cinta ---------- */
function hullPerimeter(pts){
  const P=[]; for(let i=0;i<pts.length;i+=2) P.push([pts[i],pts[i+1]]);
  if(P.length<3) return {per:0,hull:[]};
  P.sort((a,b)=>a[0]-b[0]||a[1]-b[1]);
  const cr=(o,a,b)=>(a[0]-o[0])*(b[1]-o[1])-(a[1]-o[1])*(b[0]-o[0]);
  const lo=[],up=[];
  for(const p of P){ while(lo.length>=2&&cr(lo[lo.length-2],lo[lo.length-1],p)<=0) lo.pop(); lo.push(p); }
  for(let i=P.length-1;i>=0;i--){ const p=P[i]; while(up.length>=2&&cr(up[up.length-2],up[up.length-1],p)<=0) up.pop(); up.push(p); }
  const hull=lo.slice(0,-1).concat(up.slice(0,-1));
  let per=0; for(let i=0;i<hull.length;i++){ const a=hull[i], b=hull[(i+1)%hull.length]; per+=Math.hypot(a[0]-b[0],a[1]-b[1]); }
  return {per,hull};
}
function slice(yW,rays,step,txN){
  const zc=torsoZ(yW/U)*U;
  const R=0.34*U, tx=(txN||TORSO_X)*U, pts=[];
  for(let a=0;a<rays;a++){
    const th=a/rays*Math.PI*2, cx=Math.cos(th), cz=Math.sin(th);
    let prev=R;
    for(let r=R;r>0;r-=step){
      const x=cx*r, z=zc+cz*r;
      if(Math.abs(x)<=tx && sdf(x,yW,z)<0){
        let lo=r, hi=prev;
        for(let it=0;it<12;it++){ const m=(lo+hi)/2, xx=cx*m, zz=zc+cz*m; if(Math.abs(xx)<=tx && sdf(xx,yW,zz)<0) lo=m; else hi=m; }
        pts.push(cx*lo, zc+cz*lo); break;
      }
      prev=r;
    }
  }
  return pts;
}
function findLevel(y0,y1,mode,txN){
  let best=null;
  for(let y=y0;y<=y1+1e-9;y+=0.008*U){
    const per=hullPerimeter(slice(y,96,0.006*U,txN)).per;
    if(per>0 && (!best || (mode==='max'?per>best.per:per<best.per))) best={y,per};
  }
  const pts=slice(best.y,240,0.0025*U,txN); const hp=hullPerimeter(pts);
  const flat=[]; let xm=0; for(const p of hp.hull){ flat.push(p[0],p[1]); xm=Math.max(xm,Math.abs(p[0])); }
  return {y:best.y, c:hp.per, xmax:xm, pts:new Float32Array(flat)};
}
// Contorno en un plano: rayos desde un centro interior hacia fuera hasta salir del cuerpo (secci\xF3n del brazo, muslo, cuello).
function ringOut(c,e1,e2,rays,Rmax,step){
  const pts=[];
  for(let a=0;a<rays;a++){
    const th=a/rays*Math.PI*2, d1=Math.cos(th), d2=Math.sin(th);
    const at=r=>sdf(c[0]+(e1[0]*d1+e2[0]*d2)*r, c[1]+(e1[1]*d1+e2[1]*d2)*r, c[2]+(e1[2]*d1+e2[2]*d2)*r);
    let r=0, prev=0;
    while(r<Rmax && at(r)<0){ prev=r; r+=step; }
    if(r>=Rmax) continue;
    let lo=prev, hi=r; for(let it=0;it<12;it++){ const m=(lo+hi)/2; if(at(m)<0) lo=m; else hi=m; }
    pts.push(d1*lo, d2*lo);
  }
  return hullPerimeter(pts).per;
}
// Distancia sobre el eje z hasta la superficie, a x=0 (perfil sagital para el tiro).
function zEdge(y,zc,dir){
  let z=zc, prev=zc; const st=0.003*U;
  if(sdf(0,y,z)>=0) return null;
  while(sdf(0,y,z)<0 && Math.abs(z-zc)<0.4*U){ prev=z; z+=dir*st; }
  let lo=prev, hi=z; for(let it=0;it<12;it++){ const m=(lo+hi)/2; if(sdf(0,y,m)<0) lo=m; else hi=m; }
  return lo;
}
// Tiro: desde el punto de entrepierna, por la l\xEDnea media, hasta el nivel de la cintura (delante o detr\xE1s).
function rise(yWaist){
  const u=U, y0=(LM.yCrW-0.05)*u;
  let yc=null, zc=0;
  for(let y=y0;y<(LM.yCrW+0.06)*u;y+=0.0015*u){
    const zt=torsoZ(y/u)*u; let s=0, n=0;
    for(let z=zt-0.2*u;z<=zt+0.2*u;z+=0.003*u) if(sdf(0,y,z)<0){ s+=z; n++; }
    if(n){ yc=y; zc=s/n; break; }
  }
  if(yc===null) return {f:0,b:0};
  const out={};
  for(const [key,dir] of [['f',1],['b',-1]]){
    let py=yc, pz=zc, L=0;
    for(let y=yc+0.002*u;y<=yWaist+1e-9;y+=0.004*u){
      const z=zEdge(y,torsoZ(y/u)*u,dir); if(z===null) continue;
      L+=Math.hypot(y-py,z-pz); py=y; pz=z;
    }
    out[key]=L;
  }
  return out;
}
const MKEYS=['height','lt','bust','waist','hip','shoulders','sleeve','riseF','riseB','biceps','wrist','thigh','neck'];
// Mide en metros las medidas pedidas (todas si keys es null). Busto, cintura y cadera devuelven tambi\xE9n nivel y contorno.
function measureAll(keys){
  const want=k=>!keys||keys.has(k), u=U, m={};
  if(want('height')){ let lo=1.2*u, hi=2.4*u;
    for(let i=0;i<32;i++){ const y=(lo+hi)/2; if(sdf(HS[0]*u,y,HS[2]*u)<0) lo=y; else hi=y; } m.height=lo; }
  m.lt=LM.yHPSW*u;                                       // punto alto del hombro \u2192 suelo
  const aS=LM.S, A=[aS[0]+0.35*LM.rS, aS[1]+0.85*LM.rS, aS[2]];
  m.shoulders=2*A[0]*u;                                  // de punta a punta de hombro (acromion)
  m.sleeve=(len(sub(LM.E,A))+len(sub(LM.W,LM.E)))*u;     // punta de hombro \u2192 codo \u2192 mu\xF1eca
  NOARMS=true;
  if(want('bust')) m.bust=findLevel((LM.lv.bust-0.05)*u,(LM.lv.bust+0.012)*u,'max',LM.bustX);   // la cinta pasa bajo las axilas
  if(want('waist')) m.waist=findLevel((LM.lv.waist-0.035)*u,(LM.lv.waist+0.035)*u,'min');
  if(want('hip')) m.hip=findLevel(Math.max(LM.lv.hip-0.06,LM.yCrW+0.03)*u,(LM.lv.hip+0.06)*u,'max');
  if(want('riseF')||want('riseB')){ const r=rise(LM.lv.waist*u); m.riseF=r.f; m.riseB=r.b; }   // hasta la l\xEDnea de cintura del patr\xF3n
  if(want('neck')){ let best=1e9;                         // m\xEDnimo del cuello entre la base y la mand\xEDbula
    for(let y=LM.yHPSW+0.01;y<=LM.yCutW-0.008;y+=0.004){
      const c=[0,y*u,torsoZ(y)*u]; best=Math.min(best,ringOut(c,[1,0,0],[0,0,1],72,0.12*u,0.004*u)); }
    m.neck=best<1e8?best:0; }
  if(want('thigh')&&LEGT){ let best=0;                   // m\xE1ximo del muslo justo bajo la entrepierna
    for(let y=LM.yCrW-0.015;y>=LM.yCrW-0.075;y-=0.01){
      let v=(y-LEGT.y0)/LEGT.ds; v=Math.max(0,Math.min(LEGT.n-1,v)); const i=Math.min(LEGT.n-2,v|0), f=v-i;
      const cz=LEGT.z0+LEGT.cen[2*i]+(LEGT.cen[2*i+2]-LEGT.cen[2*i])*f, cx=LEGT.cen[2*i+1]+(LEGT.cen[2*i+3]-LEGT.cen[2*i+1])*f;
      best=Math.max(best,ringOut([cx*u,y*u,cz*u],[1,0,0],[0,0,1],72,0.16*u,0.004*u)); }
    m.thigh=best; }
  NOARMS=false;
  if(want('biceps')){ let best=0;                        // m\xE1ximo del brazo entre el 30 % y el 70 % del h\xFAmero
    for(const t of [0.3,0.4,0.5,0.6,0.7]){ const c=mul(lerp(LM.S,LM.E,t),u); best=Math.max(best,ringOut(c,LM.ae[0],LM.ae[1],64,0.1*u,0.003*u)); }
    m.biceps=best; }
  if(want('wrist')){ let best=1e9;                       // m\xEDnimo del antebrazo junto a la mu\xF1eca
    for(const k of [0.008,0.016,0.024,0.032,0.04]){ const c=mul(sub(LM.W,mul(LM.fu,k)),u); best=Math.min(best,ringOut(c,LM.fe[0],LM.fe[1],64,0.06*u,0.002*u)); }
    m.wrist=best<1e8?best:0; }
  return m;
}
const mval=(m,k)=>{ const v=m[k]; return v&&typeof v==='object'?v.c:v; };

/* ---------- ajuste a medidas fijadas ----------
   Altura y largo total se resuelven en forma cerrada (escala global, piernas/tronco y cabeza). Cada contorno o largo
   fijado tiene su factor; como los factores se influyen entre s\xED (cadera, gl\xFAteo y muslo, por ejemplo), se resuelve
   el sistema completo en escala logar\xEDtmica: jacobiano num\xE9rico al inicio y pasos de Newton con actualizaci\xF3n de
   Broyden. Las medidas no fijadas siguen al cuerpo en proporci\xF3n. */
const PMAP={bust:'b',waist:'w',hip:'hp',shoulders:'fsh',sleeve:'la',riseF:'kPel',riseB:'fgl',biceps:'fbi',wrist:'fwr',thigh:'fth',neck:'fnk'};
const PLIM={b:[0.7,1.45],w:[0.65,1.6],hp:[0.7,1.45],fsh:[0.82,1.2],la:[0.85,1.18],kPel:[0.72,1.35],fgl:[0.55,1.6],fbi:[0.7,1.55],fwr:[0.8,1.3],fth:[0.7,1.5],fnk:[0.8,1.35]};
const H0N={};
function linSolve(A,bv){ const n=bv.length, M=A.map((r,i)=>[...r,bv[i]]);
  for(let c=0;c<n;c++){ let pv=c; for(let r=c+1;r<n;r++) if(Math.abs(M[r][c])>Math.abs(M[pv][c])) pv=r;
    if(Math.abs(M[pv][c])<1e-9) return null; [M[c],M[pv]]=[M[pv],M[c]];
    for(let r=0;r<n;r++) if(r!==c){ const f=M[r][c]/M[c][c]; for(let k=c;k<=n;k++) M[r][k]-=f*M[c][k]; } }
  return M.map((r,i)=>r[n]/r[i]); }
function solve(sex,pins,prog){
  const L=refLM(sex), p={...PDEF};
  if(!H0N[sex]){ build({sex,prm:{...PDEF,U:1}}); H0N[sex]=measureAll(new Set(['height'])).height; }
  let H0=H0N[sex];
  const Hd=pins.height!=null?pins.height/100:null, Ld=pins.lt!=null?pins.lt/100:null;
  const vert=()=>{
    const segL=(L.yCr-L.yA)+(L.yHPS-L.yW), pel=p.kPel*(L.yW-L.yCr);
    let LTn=L.yHPS; p.kHead=1;
    if(Hd!=null&&Ld!=null){ p.U=Hd/H0; LTn=Ld/p.U; p.kHead=Math.min(1.08,Math.max(0.92,(H0-LTn)/(H0-L.yHPS))); LTn=H0-p.kHead*(H0-L.yHPS); }   // la cabeza solo var\xEDa \xB18 %
    else if(Hd!=null) p.U=Hd/H0;
    else if(Ld!=null) p.U=Ld/L.yHPS;
    else p.U=L.U0;
    p.kB=(LTn-L.yA-pel)/segL;
  };
  const keys=Object.keys(pins).filter(k=>PMAP[k]), n=keys.length, q=keys.map(k=>PMAP[k]);
  const T=keys.map(k=>Math.log(pins[k]/100)), lo=q.map(c=>Math.log(PLIM[c][0])), hi=q.map(c=>Math.log(PLIM[c][1]));
  let evals=0;
  const evalF=()=>{ vert(); build({sex,prm:p}); evals++;
    if(!n && Hd==null) return [];
    const m=measureAll(new Set([...keys,'height']));
    if(Hd!=null) H0=m.height/p.U;                        // corrige la altura real de la cabeza para la siguiente pasada
    return keys.map((k,i)=>Math.log(Math.max(1e-4,mval(m,k)))-T[i]); };
  let Fv=evalF(); if(Hd!=null){ Fv=evalF(); }
  const ok=F=>F.every((f,i)=>Math.abs(Math.expm1(f))*pins[keys[i]]<0.15);
  for(let round=0; round<2 && n && !ok(Fv); round++){   // si Broyden se estanca, se recalcula el jacobiano una vez
    const J=Array.from({length:n},()=>new Array(n).fill(0)), hstep=0.03;
    for(let j=0;j<n;j++){ const x0=Math.log(p[q[j]]), dir=x0+hstep>hi[j]?-1:1;
      p[q[j]]=Math.exp(x0+dir*hstep); const F2=evalF();
      for(let i=0;i<n;i++) J[i][j]=(F2[i]-Fv[i])/(dir*hstep);
      p[q[j]]=Math.exp(x0); prog(0.01+0.02*(j+1)/n); }
    let best=Fv.reduce((s,f)=>s+f*f,0), bestP={...p};
    for(let it=0;it<10 && !ok(Fv);it++){
      let dx=linSolve(J,Fv.map(f=>-f)); if(!dx) dx=Fv.map((f,i)=>-f/(J[i][i]||1));
      const mx=Math.max(...dx.map(Math.abs)); if(mx>0.12) dx=dx.map(v=>v*0.12/mx);
      const dxa=dx.map((v,i)=>{ const x0=Math.log(p[q[i]]), x1=Math.min(hi[i],Math.max(lo[i],x0+v)); p[q[i]]=Math.exp(x1); return x1-x0; });
      const F2=evalF(), dF=F2.map((f,i)=>f-Fv[i]), dd=dxa.reduce((s,v)=>s+v*v,0);
      if(dd>1e-12) for(let i=0;i<n;i++){ const r=(dF[i]-J[i].reduce((s,v,j)=>s+v*dxa[j],0))/dd; for(let j=0;j<n;j++) J[i][j]+=r*dxa[j]; }
      Fv=F2; const e=Fv.reduce((s,f)=>s+f*f,0); if(e<best){ best=e; bestP={...p}; }
      prog(0.03+0.02*it/10);
      if(dxa.every(v=>Math.abs(v)<1e-5)) break;           // todos los factores en su l\xEDmite: no se puede ir m\xE1s all\xE1
    }
    if(!ok(Fv)){ Object.assign(p,bestP); Fv=evalF(); }     // se queda con la mejor aproximaci\xF3n
  }
  return {prm:p,iters:evals};
}

onmessage=async(ev)=>{
  const o=ev.data;
  try{
    await READY;
    const t0=performance.now();
    const prog=p=>postMessage({type:'progress',p});
    const sol=solve(o.sex,o.pins||{},prog);
    const m=mesh(o.h,q=>prog(0.05+q*0.9));
    prog(0.96);
    const me=measureAll(null), vals={};
    for(const k of MKEYS) vals[k]=Math.round(mval(me,k)*1000)/10;
    const ms=Math.round(performance.now()-t0);
    postMessage({type:'done',pos:m.pos,nor:m.nor,idx:m.idx,vals,prm:sol.prm,
      meas:{height:me.height,bust:me.bust,waist:me.waist,hip:me.hip,torsoX:TORSO_X*U,neckY:NECK_Y*U},ms,id:o.id},[m.pos.buffer,m.nor.buffer,m.idx.buffer]);
  }catch(err){ postMessage({type:'error',message:String(err&&err.stack||err),id:o.id}); }
};
`;var Qo=`(()=>{var Dt=Math.PI*2;function Ut(t){if(t.length<3)return t.slice();t.sort((e,c)=>e[0]-c[0]||e[1]-c[1]);let n=(e,c,u)=>(c[0]-e[0])*(u[1]-e[1])-(c[1]-e[1])*(u[0]-e[0]),s=[],r=[];for(let e of t){for(;s.length>=2&&n(s[s.length-2],s[s.length-1],e)<=0;)s.pop();s.push(e)}for(let e=t.length-1;e>=0;e--){let c=t[e];for(;r.length>=2&&n(r[r.length-2],r[r.length-1],c)<=0;)r.pop();r.push(c)}return s.slice(0,-1).concat(r.slice(0,-1))}function Ot(t){let n=0,s=0,r=0,e=0;for(let c=0;c<t.length;c++){let u=t[c],M=t[(c+1)%t.length],z=u[0]*M[1]-M[0]*u[1];n+=z,s+=(u[0]+M[0])*z,r+=(u[1]+M[1])*z,e+=Math.hypot(M[0]-u[0],M[1]-u[1])}if(Math.abs(n)<1e-12){let c=0,u=0;for(let M of t)c+=M[0],u+=M[1];return{P:e,cx:c/t.length,cz:u/t.length}}return{P:e,cx:s/(3*n),cz:r/(3*n)}}function Ft(t,n,s){for(let r=0;r<t.length;r++){let e=t[r],c=t[(r+1)%t.length];if((c[0]-e[0])*(s-e[1])-(c[1]-e[1])*(n-e[0])<-1e-12)return!1}return!0}function St(t,n,s,r,e){let c=1/0;for(let u=0;u<t.length;u++){let M=t[u],z=t[(u+1)%t.length],l=z[0]-M[0],b=z[1]-M[1],w=r*b-e*l;if(Math.abs(w)<1e-14)continue;let O=M[0]-n,L=M[1]-s,T=(O*b-L*l)/w,W=(O*e-L*r)/w;T>0&&W>=-1e-9&&W<=1+1e-9&&T<c&&(c=T)}return c}function Nt(t,n,s){let r=t.length/3,e=n.length/3,c=s.height,u=c/1.753,M=s.lt,z=.005,l=Math.ceil((c+.05)/z)+1,b=Array.from({length:l},()=>[]);for(let A=0;A<e;A++){let j=n[3*A]*3,S=n[3*A+1]*3,I=n[3*A+2]*3,P=Math.min(t[j+1],t[S+1],t[I+1]),C=Math.max(t[j+1],t[S+1],t[I+1]);for(let U=Math.max(0,Math.floor(P/z));U<=Math.min(l-1,Math.floor(C/z));U++)b[U].push(A)}let w=2*u;for(let A=0;A<t.length;A+=3){let j=t[A+1];Math.abs(t[A])<.006&&j>.5*u&&j<1.1*u&&j<w&&(w=j)}function O(A){let j=Math.floor(A/z),S=b[j]||[],I=[],P=new Map;for(let f of S){let y=n[3*f],a=n[3*f+1],d=n[3*f+2],o=[y,a,d],g=[];for(let h=0;h<3;h++){let p=o[h],m=o[(h+1)%3];if(p>m){let k=p;p=m,m=k}let x=t[3*p+1],N=t[3*m+1];if((x-A)*(N-A)<0){let k=(A-x)/(N-x);g.push(p*r+m,t[3*p]+(t[3*m]-t[3*p])*k,t[3*p+2]+(t[3*m+2]-t[3*p+2])*k)}}g.length===6&&I.push(g)}let C=I.map((f,y)=>y),U=f=>{for(;C[f]!==f;)C[f]=C[C[f]],f=C[f];return f};I.forEach((f,y)=>{for(let a of[0,3]){let d=P.get(f[a]);d===void 0?P.set(f[a],y):C[U(y)]=U(d)}});let E=new Map;return I.forEach((f,y)=>{let a=U(y),d=E.get(a);d||E.set(a,d={pts:[],sx:0,sz:0,xm:1/0,xM:-1/0});for(let o of[0,3]){let g=f[o+1],h=f[o+2];d.pts.push([g,h]),d.sx+=g,d.sz+=h,g<d.xm&&(d.xm=g),g>d.xM&&(d.xM=g)}}),[...E.values()].map(f=>({pts:f.pts,cx:f.sx/f.pts.length,cz:f.sz/f.pts.length,xm:f.xm,xM:f.xM}))}let L=Math.ceil(Math.min(c,M+.15)/.005)+1,T=.3*u,W=[],$=null,ot=null,_=!1;for(let A=0;A<L;A++){let j=A*.005+13e-5,S=O(j),I={y:j,torso:[],legs:[[],[]],arms:[[],[]]};if(!S.length){W.push(I);continue}if(j<=w+.005)for(let P of S){if(Math.abs(P.cx)>=T&&!(P.xm<0&&P.xM>0)){I.arms[P.cx>0?1:0].push(...P.pts);continue}for(let C of P.pts)I.legs[C[0]>0?1:0].push(C),I.torso.push(C)}else{let P=S.filter(a=>a.xm<0&&a.xM>0),C=S.filter(a=>!(a.xm<0&&a.xM>0)),U=P.length?P:[S.reduce((a,d)=>Math.abs(a.cx)<Math.abs(d.cx)?a:d)],E=C.filter(a=>Math.abs(a.cx)>.12*u&&!U.includes(a)),f=E.some(a=>a.cx>0)&&E.some(a=>a.cx<0);j>w+.1*u&&f&&(_=!0,$=j,ot=Math.max(...U.map(a=>Math.max(-a.xm,a.xM)))+.003);let y=_&&!f&&j>($||0);for(let a of U)for(let d of a.pts)y&&Math.abs(d[0])>ot?I.arms[d[0]>0?1:0].push(d):I.torso.push(d);for(let a of C)U.includes(a)||I.arms[a.cx>0?1:0].push(...a.pts);if(j<=w+.03)for(let a of I.torso)I.legs[a[0]>0?1:0].push(a)}W.push(I)}function H(A,j,S){let I=W.map(o=>{let g=A(o);return g.length>=6?Ut(g.slice()):null}),P=I.findIndex(o=>o&&o.length>=3),C=-1;for(let o=I.length-1;o>=0;o--)if(I[o]&&I[o].length>=3){C=o;break}if(P<0)return null;let U=C-P+1,E=[];for(let o=0;o<U;o++)E.push(I[P+o]&&I[P+o].length>=3?Ot(I[P+o]):null);for(let o=0;o<U;o++)if(!E[o]){let g=o-1;for(;g>=0&&!E[g];)g--;let h=o+1;for(;h<U&&!E[h];)h++;let p=g>=0&&(h>=U||o-g<=h-o)?g:h;I[P+o]=I[P+p],E[o]=E[p]}let f=new Float32Array(U),y=new Float32Array(U),a=new Float32Array(U),d=new Float32Array(U*96);for(let o=0;o<U;o++){let g=0,h=0,p=0;for(let k=-j;k<=j;k++){let q=E[o+k];q&&(g+=q.cx,h+=q.cz,p++)}let m=I[P+o],x=S?0:g/p,N=h/p;Ft(m,x,N)||(x=S&&Ft(m,0,E[o].cz)?0:E[o].cx,N=E[o].cz),f[o]=x,y[o]=N,a[o]=E[o].P;for(let k=0;k<96;k++){let q=k/96*Dt,G=St(m,x,N,Math.cos(q),Math.sin(q));isFinite(G)||(G=k?d[o*96+k-1]:.01),d[o*96+k]=G}}return{i0:P,n:U,cx:f,cz:y,P:a,r:d}}let Y={x0:-.45,z0:-.25,d:.005,nx:181,nz:111},tt=new Float32Array(Y.nx*Y.nz).fill(NaN),ut=($||M-.15)-.1,pt=M+.03;for(let A=0;A<t.length;A+=3){let j=t[A+1];if(j<ut||j>pt)continue;let S=Math.round((t[A]-Y.x0)/Y.d),I=Math.round((t[A+2]-Y.z0)/Y.d);if(S<0||I<0||S>=Y.nx||I>=Y.nz)continue;let P=I*Y.nx+S;tt[P]>=j||(tt[P]=j)}let st=tt.slice();for(let A=1;A<Y.nz-1;A++)for(let j=1;j<Y.nx-1;j++){let S=A*Y.nx+j;if(tt[S]===tt[S])continue;let I=-1/0,P=0;for(let C of[-1,1,-Y.nx,Y.nx]){let U=tt[S+C];U===U&&(P++,U>I&&(I=U))}P>=3&&(st[S]=I)}return Y.h=st,{v:1,dy:.005,nu:96,height:c,hps:M,crotch:w,yArmTop:$,xcut:ot,alturas:Y,tubos:{torso:H(A=>A.torso,6,!0),piernaD:H(A=>A.legs[0],5,!1),piernaI:H(A=>A.legs[1],5,!1),brazoD:H(A=>A.arms[0],3,!1),brazoI:H(A=>A.arms[1],3,!1)}}}var It=t=>{let n=atob(t),s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s};function jt(t){let n={};for(let[r,e]of Object.entries(t.tubos)){if(!e){n[r]=null;continue}let c=It(e.r),u=new Int16Array(c.buffer,c.byteOffset,c.byteLength/2),M=new Float32Array(u.length);for(let z=0;z<u.length;z++)M[z]=u[z]/1e4;n[r]={i0:e.i0,n:e.n,cx:Float32Array.from(e.cx),cz:Float32Array.from(e.cz),P:Float32Array.from(e.P),r:M}}let s=null;if(t.alturas){let r=It(t.alturas.h),e=new Int16Array(r.buffer,r.byteOffset,r.byteLength/2),c=new Float32Array(e.length);for(let u=0;u<e.length;u++)c[u]=e[u]===-32768?NaN:e[u]/1e4;s={...t.alturas,h:c}}return{v:t.v,dy:t.dy,nu:t.nu,height:t.height,hps:t.hps,crotch:t.crotch,yArmTop:t.yArmTop,xcut:t.xcut,alturas:s,tubos:n}}var Mt=Math.PI*2,dt=(t,n,s)=>{let r=Math.min(1,Math.max(0,(s-t)/(n-t)));return r*r*(3-2*r)},qt=.003,nt=48,Ct=.06;function wt(t){for(let n of Object.values(t.tubos)){if(!n||n.rs)continue;let{n:s,r}=n,e=new Float32Array(r.length);for(let c=0;c<s;c++)for(let u=0;u<96;u++){let M=0,z=0;for(let l=-2;l<=2;l++){let b=c+l;if(!(b<0||b>=s))for(let w=-1;w<=1;w++)M+=r[b*96+(u+w+96)%96],z++}e[c*96+u]=M/z}n.rs=e}return t}function rt(t,n,s,r){let e=n/.005-t.i0,c=t.n;if(e>=0&&e<=c-1){let M=Math.min(c-2,Math.max(0,Math.floor(e))),z=e-M;return c===1?(r[0]=t.cx[0],r[1]=t.cz[0]):(r[0]=t.cx[M]+(t.cx[M+1]-t.cx[M])*z,r[1]=t.cz[M]+(t.cz[M+1]-t.cz[M])*z),r[2]=e,r}let u=e<0?0:c-1;if(r[0]=t.cx[u],r[1]=t.cz[u],r[2]=e,s&&c>12){let M=e<0?10:-10,z=e<0?e:e-(c-1);r[0]+=(t.cx[u+M]-t.cx[u])/M*z,r[1]+=(t.cz[u+M]-t.cz[u])/M*z}return r}function et(t,n,s,r){let e=t.n,c=Math.min(e-1,Math.max(0,n)),u=Math.min(Math.max(0,e-2),Math.floor(c)),M=e>1?c-u:0,z=s/Mt*96;z=(z%96+96)%96;let l=Math.floor(z)%96,b=z-Math.floor(z),w=(l+1)%96,O=Math.min(e-1,u+1),L=r[u*96+l]*(1-b)+r[u*96+w]*b,T=r[O*96+l]*(1-b)+r[O*96+w]*b;return L+(T-L)*M}function at(t,n,s){let r=(n-t.x0)/t.d,e=(s-t.z0)/t.d,c=Math.floor(r),u=Math.floor(e);if(c<0||u<0||c>=t.nx-1||u>=t.nz-1)return NaN;let M=r-c,z=e-u,l=u*t.nx+c,b=t.h;return(b[l]*(1-M)+b[l+1]*M)*(1-z)+(b[l+t.nx]*(1-M)+b[l+t.nx+1]*M)*z}function Et(t,n,s){let r=t.d*1.5,e=(at(t,n+r,s)-at(t,n-r,s))/(2*r),c=(at(t,n,s+r)-at(t,n,s-r))/(2*r);return Math.hypot(e,c)}function xt(t,n){let s=t.n,r=Math.min(s-1,Math.max(0,n)),e=Math.min(Math.max(0,s-2),Math.floor(r)),c=s>1?r-e:0;return t.P[e]+(t.P[Math.min(s-1,e+1)]-t.P[e])*c}function zt(t,n){let s=t.length/3,r=new Int32Array(s);for(let l=0;l<s;l++)r[l]=l;let e=l=>{for(;r[l]!==l;)r[l]=r[r[l]],l=r[l];return l},c=(l,b)=>{l=e(l),b=e(b),l!==b&&(r[l]=b)},u=new Map;for(let l=0;l<s;l++){let b=Math.round(t[3*l]*1e5)+","+Math.round(t[3*l+1]*1e5)+","+Math.round(t[3*l+2]*1e5),w=u.get(b);w===void 0?u.set(b,l):c(l,w)}if(n)for(let l=0;l<n.length;l+=3)c(n[l],n[l+1]),c(n[l+1],n[l+2]);else for(let l=0;l+2<s;l+=3)c(l,l+1),c(l+1,l+2);let M=new Int32Array(s),z=new Map;for(let l=0;l<s;l++){let b=e(l),w=z.get(b);w===void 0&&z.set(b,w=z.size),M[l]=w}return{id:M,n:z.size}}function Pt(t,n,s,r={}){let e=r.tipo||"dress",c=r.gap==null?qt:r.gap,u=e==="bottom",M=u?n.crotch:n.hps,z=u?s.crotch:s.hps,l=z-M,b=u?["torso","piernaD","piernaI"]:["torso"],w=[0,0,0],O=[0,0,0],L=t.map(f=>{let y=f.comp||(f.comp=zt(f.pos,f.idx)),a=new Float64Array(y.n),d=new Float64Array(y.n),o=new Float64Array(y.n),g=new Float64Array(y.n);for(let h=0;h<y.id.length;h++){let p=y.id[h],m=f.pos[3*h],x=f.pos[3*h+1];o[p]+=m,g[p]++,x<n.crotch-.02&&(a[p]+=m,d[p]++)}return Array.from({length:y.n},(h,p)=>{let m=d[p]?a[p]/d[p]:o[p]/g[p];return Math.abs(m)>=.01?m>0?1:-1:0})}),T=(f,y)=>(f||(y>0?1:-1))>0?"piernaI":"piernaD",W=f=>u?dt(n.crotch+.01,n.crotch-.03,f):0,$=n.tubos.torso;function ot(f,y,a){let d=n.tubos[f>0?"brazoI":"brazoD"];if(!d)return 0;rt(d,y,!0,O);let o=O[2],g=o<0?-o*.005:o>d.n-1?(o-d.n+1)*.005:0;if(g>.25)return 0;let h=f-O[0],p=a-O[1],m=Math.hypot(h,p),x=m-et(d,o,Math.atan2(p,h),d.r);if(x>.25)return 0;rt($,y,!1,w);let N=f-w[0],k=a-w[1],q=Math.hypot(N,k)-et($,w[2],Math.atan2(k,N),$.r),G=Math.max(x,.002),X=Math.max(q,.002);return X*X/(X*X+G*G)*(1-dt(.1,.25,g))}let _=Math.ceil(2.5/.005),H={},Y={};for(let f of b)H[f]=new Float32Array(_*nt).fill(1/0);let tt=(f,y,a,d)=>{let o=n.tubos[f];if(!o)return;rt(o,a,!1,w);let g=y-w[0],h=d-w[1],p=Math.atan2(h,g),m=Math.hypot(g,h)-et(o,w[2],p,o.rs),x=Math.round(a/.005);if(x<0||x>=_)return;let N=Math.floor((p+Math.PI)/Mt*nt)%nt,k=H[f];m<k[x*nt+N]&&(k[x*nt+N]=m)},ut=t.map(f=>{let y=new Float32Array(f.pos.length/3);for(let a=0;a<y.length;a++)y[a]=ot(f.pos[3*a],f.pos[3*a+1],f.pos[3*a+2]);return y});t.forEach((f,y)=>{let a=f.pos,d=L[y],o=f.comp.id;for(let g=0;g<o.length;g++){if(ut[y][g]>.5)continue;let h=a[3*g],p=a[3*g+1],m=a[3*g+2];W(p)<.5?tt("torso",h,p,m):tt(T(d[o[g]],h),h,p,m)}});for(let f of b){let y=n.tubos[f],a=s.tubos[f],d=H[f],o=new Float32Array(_).fill(NaN);if(!y||!a){Y[f]=o;continue}for(let h=0;h<_;h++){let p=0,m=0;for(let k=0;k<nt;k++){let q=d[h*nt+k];q!==1/0&&(p+=q,m++)}if(!m)continue;let x=h*.005,N=(xt(y,x/.005-y.i0)-xt(a,(x+l)/.005-a.i0))/Mt;o[h]=m>=.4*nt?Math.max(N,Math.min(0,c-p/m)):N}let g=new Float32Array(_).fill(NaN);for(let h=0;h<_;h++){if(isNaN(o[h]))continue;let p=0,m=0;for(let x=-4;x<=4;x++){let N=o[h+x];N===N&&N!==void 0&&(p+=N,m++)}g[h]=p/m}Y[f]=g}let pt=(f,y)=>{let a=Y[f],d=y/.005,o=Math.max(0,Math.min(_-2,Math.floor(d))),g=d-o,h=a[o],p=a[o+1];if(h===h&&p===p)return h+(p-h)*g;if(h===h)return h;if(p===p)return p;let m=n.tubos[f],x=s.tubos[f];return(xt(m,d-m.i0)-xt(x,(y+l)/.005-x.i0))/Mt};function st(f,y,a,d,o,g,h){let p=n.tubos[f],m=s.tubos[f];if(!p||!m)return h[0]=y,h[1]=a+l,h[2]=d,h;rt(p,a,g,w);let x=y-w[0],N=d-w[1],k=Math.hypot(x,N),q=Math.atan2(N,x),G=k-et(p,w[2],q,p.rs),X=k-et(p,w[2],q,p.r),ct=a+l;rt(m,ct,g,O);let i=et(m,O[2],q,m.rs)+G+o,v=et(m,O[2],q,m.r)+Math.min(c,X);i<v&&(i=v);let F=k>1e-9?x/k:Math.cos(q),D=k>1e-9?N/k:Math.sin(q);return h[0]=O[0]+i*F,h[1]=ct,h[2]=O[1]+i*D,h}let A=[0,0,0],j=[0,0,0],S=[0,0,0];function I(f,y,a,d,o,g){st("torso",f,y,a,pt("torso",y),!1,A);let h=A[0],p=A[1],m=A[2],x=W(y);if(x>0){let N=T(d,f);st(N,f,y,a,pt(N,y),!1,j),h+=(j[0]-h)*x,p+=(j[1]-p)*x,m+=(j[2]-m)*x}if(o>0&&(st(f>0?"brazoI":"brazoD",f,y,a,0,!0,S),h+=(S[0]-h)*o,p+=(S[1]-p)*o,m+=(S[2]-m)*o),P&&C&&y>U){let N=at(P,f,a),k=y-N;if(k>-.004&&k<.03){let q=dt(.03,.012,k)*dt(1.3,.6,Et(P,f,a));if(q>0){let G=at(C,h,m);G===G&&(p+=(G+k-p)*q)}}}return g[0]=h,g[1]=Math.max(.002,p),g[2]=m,g}let P=n.alturas,C=s.alturas,U=(n.yArmTop||n.hps-.15)-.06,E=[0,0,0];return t.map((f,y)=>{let a=f.pos,d=new Float32Array(a.length),o=f.comp,g=L[y],h=new Float64Array(o.n*3).fill(1/0),p=new Float64Array(o.n*3).fill(-1/0);for(let i=0;i<o.id.length;i++){let v=o.id[i];for(let F=0;F<3;F++){let D=a[3*i+F];D<h[3*v+F]&&(h[3*v+F]=D),D>p[3*v+F]&&(p[3*v+F]=D)}}let m=new Uint8Array(o.n);for(let i=0;i<o.n;i++)Math.hypot(p[3*i]-h[3*i],p[3*i+1]-h[3*i+1],p[3*i+2]-h[3*i+2])<Ct&&(m[i]=1);for(let i=0;i<o.id.length;i++){let v=o.id[i];I(a[3*i],a[3*i+1],a[3*i+2],g[v],ut[y][i],E),d[3*i]=E[0],d[3*i+1]=E[1],d[3*i+2]=E[2]}let x=new Float64Array(o.n*8);for(let i=0;i<o.id.length;i++){let v=o.id[i];if(!m[v])continue;let F=8*v;x[F]++;for(let D=0;D<3;D++)x[F+1+D]+=a[3*i+D],x[F+4+D]+=d[3*i+D]}let N=new Float64Array(o.n*2);for(let i=0;i<o.id.length;i++){let v=o.id[i];if(!m[v])continue;let F=8*v,D=x[F],Z=a[3*i]-x[F+1]/D,R=a[3*i+2]-x[F+3]/D,K=d[3*i]-x[F+4]/D,Q=d[3*i+2]-x[F+6]/D;N[2*v]+=Z*Q-R*K,N[2*v+1]+=Z*K+R*Q}for(let i=0;i<o.id.length;i++){let v=o.id[i];if(!m[v])continue;let F=8*v,D=x[F],Z=Math.atan2(N[2*v],N[2*v+1]||1e-12),R=Math.cos(Z),K=Math.sin(Z),Q=a[3*i]-x[F+1]/D,it=a[3*i+2]-x[F+3]/D;d[3*i]=x[F+4]/D+Q*R-it*K,d[3*i+2]=x[F+6]/D+Q*K+it*R,d[3*i+1]=Math.max(.002,a[3*i+1]-x[F+2]/D+x[F+5]/D)}let k=new Float64Array(o.n),q=(i,v,F,D,Z)=>{let R=i.tubos[v];if(!R)return 1/0;rt(R,D,!1,w);let K=F-w[0],Q=Z-w[1];return Math.hypot(K,Q)-et(R,w[2],Math.atan2(Q,K),R.r)},G=(i,v,F)=>u&&F<n.crotch?T(g[i],v):"torso";for(let i=0;i<o.id.length;i++){let v=o.id[i];if(!m[v])continue;let F=G(v,a[3*i],a[3*i+1]),D=q(n,F,a[3*i],a[3*i+1],a[3*i+2]),Z=q(s,F,d[3*i],d[3*i+1],d[3*i+2]),R=Math.min(D,.001)-Z;R>k[v]&&(k[v]=R)}let X=new Float64Array(o.n*2),ct=!1;for(let i=0;i<o.n;i++)if(k[i]>0&&k[i]<1/0){let v=8*i,F=x[v],D=x[v+4]/F,Z=x[v+5]/F,R=x[v+6]/F,K=s.tubos[G(i,x[v+1]/F,x[v+2]/F)];if(!K)continue;rt(K,Z,!1,w);let Q=D-w[0],it=R-w[1],vt=Math.hypot(Q,it)||1;X[2*i]=Q/vt*k[i],X[2*i+1]=it/vt*k[i],ct=!0}if(ct)for(let i=0;i<o.id.length;i++){let v=o.id[i];d[3*i]+=X[2*v],d[3*i+2]+=X[2*v+1]}return d})}var V=self.postMessage.bind(self),mt=typeof self.onmessage=="function"?self.onmessage:null,bt=null,lt=new Map,ft=new Map,yt=Promise.resolve(),ht=null,At=!1,kt=!1,gt=null,Yt=t=>{let n=[];for(let s of Object.values(t.tubos))s&&n.push(s.cx.buffer,s.cz.buffer,s.P.buffer,s.r.buffer);return n};self.postMessage=(t,n)=>{if(!(kt&&(t&&t.type==="error"&&(gt=t.message||"error"),t&&(t.type==="progress"||t.type==="done"||t.type==="error")))){if(t&&t.type==="progress")return V({tipo:"progreso",p:Math.min(.9,t.p*.92)});if(t&&t.type==="done"){At=!0;let s=performance.now(),r=null;try{r=Nt(t.pos,t.idx,{height:t.meas.height,lt:t.vals.lt/100})}catch(c){return V({tipo:"error",id:t.id,mensaje:"No se pudo medir el maniqu\\xED: "+(c&&c.message)})}let e=Math.round(performance.now()-s);return V({tipo:"cuerpo",id:t.id,pos:t.pos,nor:t.nor,idx:t.idx,vals:t.vals,height:t.meas.height,ms:t.ms,msCortes:e,tablas:r},[t.pos.buffer,t.nor.buffer,t.idx.buffer,...Yt(r)])}return t&&t.type==="error"?V({tipo:"error",id:t.id,mensaje:t.message}):V(t,n)}};function Lt(t,n){let s=new Float32Array(t.length),r=(e,c,u)=>{let M=t[3*e],z=t[3*e+1],l=t[3*e+2],b=t[3*c]-M,w=t[3*c+1]-z,O=t[3*c+2]-l,L=t[3*u]-M,T=t[3*u+1]-z,W=t[3*u+2]-l,$=w*W-O*T,ot=O*L-b*W,_=b*T-w*L;for(let H of[e,c,u])s[3*H]+=$,s[3*H+1]+=ot,s[3*H+2]+=_};if(n)for(let e=0;e<n.length;e+=3)r(n[e],n[e+1],n[e+2]);else for(let e=0;e+2<t.length/3;e+=3)r(e,e+1,e+2);for(let e=0;e<s.length;e+=3){let c=Math.hypot(s[e],s[e+1],s[e+2])||1;s[e]/=c,s[e+1]/=c,s[e+2]/=c}return s}async function Gt(t){try{if(!mt||typeof self.sdf!="function")throw new Error("Worker sin mallador.");if(ht!==t.clave){kt=!0,gt=null,ht=null;try{await mt({data:{sex:t.sex,pins:t.pins,h:t.h,id:-1}})}finally{kt=!1}if(gt)throw new Error(gt);ht=t.clave}let n=t.caja,s=self.sdf,r=new Float32Array(n.nx*n.ny*n.nz),e=performance.now();for(let c=0,u=0;c<n.nz;c++){let M=n.z0+c*n.s;for(let z=0;z<n.ny;z++){let l=n.y0+z*n.s;for(let b=0;b<n.nx;b++)r[u++]=s(n.x0+b*n.s,l,M)}}V({tipo:"sdf",id:t.id,D:r,ms:Math.round(performance.now()-e)},[r.buffer])}catch(n){V({tipo:"sdf",id:t.id,error:String(n&&n.message||n)})}}self.onmessage=t=>{let n=t.data||{};if(n.tipo==="cuerpo"){if(!mt)return V({tipo:"error",id:n.id,mensaje:"Worker sin mallador."});yt=yt.then(async()=>{ht=null,At=!1,await mt({data:{sex:n.sex,pins:n.pins,h:n.h,id:n.id}}),At&&(ht=n.clave||null)}).catch(()=>{});return}if(n.tipo==="sdf"){yt=yt.then(()=>Gt(n)).catch(()=>{});return}if(n.tipo==="base"){bt=wt(jt(n.json));return}if(n.tipo==="prenda")try{if(!bt)throw new Error("Faltan los cortes del cuerpo por defecto.");if(n.partes){let l=n.partes.map(b=>({pos:b.pos,idx:b.idx}));for(let b of l)b.comp=zt(b.pos,b.idx);lt.set(n.url,l),lt.size>6&&lt.delete(lt.keys().next().value)}let s=lt.get(n.url);if(!s)return V({tipo:"prenda",id:n.id,falta:!0});let r=ft.get(n.cuerpo);if(!r){if(!n.tablas)return V({tipo:"prenda",id:n.id,faltaCuerpo:!0});r=wt(n.tablas),ft.set(n.cuerpo,r),ft.size>4&&ft.delete(ft.keys().next().value)}let e=performance.now(),c=Pt(s,bt,r,{tipo:n.prenda}),u=Math.round(performance.now()-e),M=0;c.forEach((l,b)=>{let w=s[b].pos;for(let O=0;O<w.length;O+=3){let L=Math.hypot(l[O]-w[O],l[O+1]-w[O+1],l[O+2]-w[O+2]);L>M&&(M=L)}});let z=c.map((l,b)=>Lt(l,s[b].idx));V({tipo:"prenda",id:n.id,pos:c,nor:z,ms:u,desplazamientoMax:M},[...c.map(l=>l.buffer),...z.map(l=>l.buffer)])}catch(s){V({tipo:"error",id:n.id,mensaje:String(s&&s.message||s)})}};})();
`;var Pu=`(()=>{var qt={g:9.81,sub:12,friccionS:.6,friccionK:.45,margen:.003,margenMano:.006,aire:2.2,interna:.03,seca:.3,autoCada:3,vmax:4,nucleo:.032,tVestir:.4};function Ft(h){let{x0:n,y0:e,z0:i,nx:o,ny:t,nz:s,D:a}=h,r=1/h.s,l=o,c=o*t,b=o-1,p=t-1,x=s-1;return(g,y,d)=>{let z=(g-n)*r,P=(y-e)*r,C=(d-i)*r;if(!(z>=0&&P>=0&&C>=0&&z<b&&P<p&&C<x))return 1;let m=z|0,w=P|0,L=C|0,O=z-m,k=P-w,q=C-L,j=L*c+w*l+m,X=a[j]+(a[j+1]-a[j])*O,U=a[j+l]+(a[j+l+1]-a[j+l])*O,E=a[j+c]+(a[j+c+1]-a[j+c])*O,Y=a[j+c+l]+(a[j+c+l+1]-a[j+c+l])*O,K=X+(U-X)*k,H=E+(Y-E)*k;return K+(H-K)*q}}var yt=class{constructor(n,e={}){let i=this.N=n.n;this.P=n,this.A={...qt,...e},this.x=new Float64Array(3*i),this.p=new Float64Array(3*i),this.v=new Float64Array(3*i),this.w=new Float64Array(i);for(let c=0;c<i;c++)this.w[c]=1/n.masa[c];if(this.radio=.62*n.h,this.S=()=>1,this.margen=this.A.margen,this.gravedad=this.A.g,this.t=0,this.paso=0,this.vMaxima=0,this.vMedia=0,this.agarre=null,this.suelo=n.tienda&&n.tienda.suelo!=null?n.tienda.suelo:null,this.pega=null,n.tienda&&n.tienda.pantalon){let c=new Uint8Array(i),b=0;for(let p=0;p<i;p++)n.tM[3*p+1]>0&&(c[p]=1,b++);b&&(this.pega=c)}let o=new Int32Array(i+1),t=n.ea,s=n.eb,a=t.length;for(let c=0;c<a;c++)o[t[c]+1]++,o[s[c]+1]++;for(let c=0;c<i;c++)o[c+1]+=o[c];let r=new Int32Array(o[i]),l=o.slice(0,i);for(let c=0;c<a;c++)r[l[t[c]]++]=s[c],r[l[s[c]]++]=t[c];this.nbOff=o,this.nbList=r,this.HS=1<<17,this.cellStart=new Int32Array(this.HS+1),this.cellEntry=new Int32Array(i),this.cellOf=new Int32Array(i),this.parA=new Int32Array(4096),this.parB=new Int32Array(4096),this.nPares=0,this.tension=new Float32Array(a),this.contactos=0,this.pares=0}usarCuerpo(n){this.S=Ft(n)}_colocarPantalon(n){let e=this.P,i=this.N,o=this.x,t=e.tT,s=e.tM,a=e.tW,r=e.tLado,l=n.pierna||null,c=n.entrepierna,b=this.A.nucleo-.02,p=Math.max(1,(n.semiancho-b)/e.tienda.xCostura),x=Math.max(1,(n.frente-b)/.15),g=Math.max(1,(n.espalda-b)/.15);for(let y=0;y<i;y++){let d=3*y,z=t[d+2],P=a[y],C=t[d+1]+c,m=t[d]*p,w=z*(z>0?x:g);if(P>0){let L=.095,O=0;if(l){let j=Math.max(0,Math.min(l.cx.length-1,Math.round((l.y0-C)/l.dy)));L=l.cx[j],O=l.cz[j]}let k=r[y]*(L+s[d]),q=O+s[d+2];m+=(k-m)*P,w+=(q-w)*P}o[d]=m,o[d+1]=C,o[d+2]=w}this.mano=null,this.v.fill(0),this.t=0}colocar(n){if(this.P.tienda&&this.P.tienda.pantalon)return this._colocarPantalon(n);let e=this.P,i=this.N,o=this.x,t=n.brazo,s=t.u,a=this.A.nucleo-.02,r=Math.max(1,(n.semiancho-a)/e.tienda.xCostura),l=Math.max(1,(n.frente-a)/.15),c=Math.max(1,(n.espalda-a)/.15),b=Math.hypot(s[0],s[1])||1,p=[-s[1]/b,s[0]/b],x=e.tT,g=e.tM,y=e.tW,d=e.tLado,z=t.linea,P=t.s,C=P?P.length:0,m=0;for(let k=0;k<i;k++)y[k]>0&&g[3*k]>m&&(m=g[3*k]);let w=t.muneca?t.muneca.s-.015:1/0,L=m>w?.03+.5*(w-.03):.03,O=m>w&&m>L?(w-L)/(m-L):1;for(let k=0;k<i;k++){let q=3*k,j=x[q+2],X=x[q]*r,U=x[q+1]+n.hps,E=j*(j>0?l:c),Y=y[k];if(Y>0){let K=d[k],H=g[q+1],R=g[q+2],N=g[q];N>L&&(N=L+(N-L)*O);let J,st,$;if(C>1){let V=0;if(N>0)for(;V<C-2&&P[V+1]<N;)V++;let W=3*V,nt=P[V+1]-P[V]||1,S=(z[W+3]-z[W])/nt,tt=(z[W+4]-z[W+1])/nt,D=(z[W+5]-z[W+2])/nt,ot=N-P[V],u=p[0]*S+p[1]*tt,f=p[0]-u*S,M=p[1]-u*tt,A=-u*D,v=Math.hypot(f,M,A)||1;f/=v,M/=v,A/=v;let I=tt*A-D*M,F=D*f-S*A,B=S*M-tt*f;J=K*(z[W]+S*ot+f*H+I*R),st=z[W+1]+tt*ot+M*H+F*R,$=z[W+2]+D*ot+A*H+B*R}else J=K*(t.O[0]+s[0]*N+p[0]*H),st=t.O[1]+s[1]*N+p[1]*H,$=t.O[2]+s[2]*N+R;X+=(J-X)*Y,U+=(st-U)*Y,E+=($-E)*Y}o[q]=X,o[q+1]=U,o[q+2]=E}this.mano=t.muneca||null,this.v.fill(0),this.t=0}_autochoque(){let n=this.N,e=this.x,i=this.HS,o=this.cellStart,t=this.cellEntry,s=this.cellOf,a=1.25*this.radio,r=1/a,l=a*a,c=this.nbOff,b=this.nbList;o.fill(0);for(let d=0;d<n;d++){let z=(Math.floor(e[3*d]*r)*92837111^Math.floor(e[3*d+1]*r)*689287499^Math.floor(e[3*d+2]*r)*283923481)&i-1;s[d]=z,o[z]++}let p=0;for(let d=0;d<i;d++)p+=o[d],o[d]=p;o[i]=p;for(let d=0;d<n;d++)t[--o[s[d]]]=d;let x=this.parA,g=this.parB,y=0;for(let d=0;d<n;d++){let z=e[3*d],P=e[3*d+1],C=e[3*d+2],m=Math.floor(z*r),w=Math.floor(P*r),L=Math.floor(C*r);for(let O=m-1;O<=m+1;O++)for(let k=w-1;k<=w+1;k++)for(let q=L-1;q<=L+1;q++){let j=(O*92837111^k*689287499^q*283923481)&i-1;for(let X=o[j],U=o[j+1];X<U;X++){let E=t[X];if(E<=d)continue;let Y=e[3*E]-z,K=e[3*E+1]-P,H=e[3*E+2]-C;if(Y*Y+K*K+H*H>=l)continue;let R=!1;for(let N=c[d],J=c[d+1];N<J;N++)if(b[N]===E){R=!0;break}if(!R){if(y===x.length){let N=new Int32Array(2*y),J=new Int32Array(2*y);N.set(x),J.set(g),x=this.parA=N,g=this.parB=J}x[y]=d,g[y]=E,y++}}}}this.nPares=y}_separar(){let n=this.x,e=this.w,i=this.parA,o=this.parB,t=this.radio,s=t*t,a=0;for(let r=0;r<this.nPares;r++){let l=i[r],c=o[r],b=3*l,p=3*c,x=n[p]-n[b],g=n[p+1]-n[b+1],y=n[p+2]-n[b+2],d=x*x+g*g+y*y;if(d>=s||d<1e-18)continue;let z=Math.sqrt(d),P=(t-z)/z/(e[l]+e[c]),C=P*e[l],m=P*e[c];n[b]-=x*C,n[b+1]-=g*C,n[b+2]-=y*C,n[p]+=x*m,n[p+1]+=g*m,n[p+2]+=y*m,a++}this.pares=a}subpaso(n){let e=this.N,i=this.P,o=this.A,t=this.x,s=this.p,a=this.v,r=this.w,l=this.S,c=1/(n*n),b=this.gravedad*n,p=Math.exp(-o.aire*n),x=o.vmax;for(let u=0;u<e;u++){let f=3*u,M=a[f]*p,A=(a[f+1]-b)*p,v=a[f+2]*p,I=M*M+A*A+v*v;if(I>x*x){let F=x/Math.sqrt(I);M*=F,A*=F,v*=F}s[f]=t[f],s[f+1]=t[f+1],s[f+2]=t[f+2],t[f]+=M*n,t[f+1]+=A*n,t[f+2]+=v*n}let g=this.agarre;if(g)for(let u=0;u<g.i.length;u++){let f=3*g.i[u],M=g.k[u];t[f]+=(g.obj[0]+g.d[3*u]-t[f])*M,t[f+1]+=(g.obj[1]+g.d[3*u+1]-t[f+1])*M,t[f+2]+=(g.obj[2]+g.d[3*u+2]-t[f+2])*M}let y=i.ea,d=i.eb,z=this.er||i.er,P=i.ealfa,C=y.length,m=this.tension;for(let u=0;u<C;u++){let f=y[u],M=d[u],A=3*f,v=3*M,I=t[v]-t[A],F=t[v+1]-t[A+1],B=t[v+2]-t[A+2],_=Math.sqrt(I*I+F*F+B*B);if(_<1e-12)continue;m[u]=_/z[u]-1;let T=(_-z[u])/(_*(r[f]+r[M]+P[u]*c)),Z=T*r[f],G=T*r[M];t[A]+=I*Z,t[A+1]+=F*Z,t[A+2]+=B*Z,t[v]-=I*G,t[v+1]-=F*G,t[v+2]-=B*G}let w=i.h0,L=i.h1,O=i.h2,k=i.h3,q=i.hk,j=i.halfa,X=w.length;for(let u=0;u<X;u++){let f=w[u],M=L[u],A=O[u],v=k[u],I=3*f,F=3*M,B=3*A,_=3*v,T=q[4*u],Z=q[4*u+1],G=q[4*u+2],Q=q[4*u+3],rt=T*t[I]+Z*t[F]+G*t[B]+Q*t[_],ct=T*t[I+1]+Z*t[F+1]+G*t[B+1]+Q*t[_+1],et=T*t[I+2]+Z*t[F+2]+G*t[B+2]+Q*t[_+2],at=1/(r[f]*T*T+r[M]*Z*Z+r[A]*G*G+r[v]*Q*Q+j[u]*c),lt=at*r[f]*T,ht=at*r[M]*Z,ft=at*r[A]*G,ut=at*r[v]*Q;t[I]-=lt*rt,t[I+1]-=lt*ct,t[I+2]-=lt*et,t[F]-=ht*rt,t[F+1]-=ht*ct,t[F+2]-=ht*et,t[B]-=ft*rt,t[B+1]-=ft*ct,t[B+2]-=ft*et,t[_]-=ut*rt,t[_+1]-=ut*ct,t[_+2]-=ut*et}o.autoCada>0&&(this.paso%o.autoCada===0&&this._autochoque(),this._separar());let U=this.margen,E=o.friccionS,Y=o.friccionK,K=.003,H=this.pega,R=0;if(this.suelo!==null){let u=this.suelo;for(let f=0;f<e;f++){let M=3*f;if(t[M+1]>=u)continue;let A=u-t[M+1];t[M+1]=u;let v=t[M]-s[M],I=t[M+2]-s[M+2],F=Math.sqrt(v*v+I*I);if(F<1e-12)continue;let B=F<=E*A?1:Math.min(1,Y*A/F);t[M]-=v*B,t[M+2]-=I*B}}let N=this.mano,J=N?N.P[0]:0,st=N?N.P[1]:0,$=N?N.P[2]:0,V=N?N.t[0]:0,W=N?N.t[1]:0,nt=N?N.t[2]:0,S=U>0?o.margenMano:0;for(let u=0;u<e;u++){let f=3*u,M=t[f],A=t[f+1],v=t[f+2],I=U;if(N){let Mt=((M<0?-M:M)-J)*V+(A-st)*W+(v-$)*nt;if(Mt>-.02){let gt=Mt>=.03?1:(Mt+.02)*20;I+=S*gt*gt*(3-2*gt)}}let F=I-l(M,A,v);if(F<=0)continue;R++;let B=l(M+K,A,v)-l(M-K,A,v),_=l(M,A+K,v)-l(M,A-K,v),T=l(M,A,v+K)-l(M,A,v-K),Z=Math.sqrt(B*B+_*_+T*T)||1;B/=Z,_/=Z,T/=Z;let G=Math.min(.008,F/Math.max(.2,Z/(2*K)));t[f]+=B*G,t[f+1]+=_*G,t[f+2]+=T*G;let Q=t[f]-s[f],rt=t[f+1]-s[f+1],ct=t[f+2]-s[f+2],et=Q*B+rt*_+ct*T,at=Q-et*B,lt=rt-et*_,ht=ct-et*T,ft=Math.sqrt(at*at+lt*lt+ht*ht);if(ft<1e-12)continue;let ut=H!==null&&H[u]===1&&E>0||ft<=E*F?1:Math.min(1,Y*F/ft);t[f]-=at*ut,t[f+1]-=lt*ut,t[f+2]-=ht*ut}this.contactos=R;let tt=1/n;for(let u=0;u<3*e;u++)a[u]=(t[u]-s[u])*tt;let D=o.interna;if(D>0)for(let u=0;u<C;u++){let f=m[u],M=f>.03?Math.min(.5,D+6*(f-.03)):D,A=y[u],v=d[u],I=3*A,F=3*v,B=M/(r[A]+r[v]),_=B*r[A],T=B*r[v],Z=a[F]-a[I],G=a[F+1]-a[I+1],Q=a[F+2]-a[I+2];a[I]+=Z*_,a[I+1]+=G*_,a[I+2]+=Q*_,a[F]-=Z*T,a[F+1]-=G*T,a[F+2]-=Q*T}let ot=o.seca*n;if(ot>0&&this.gravedad>0)for(let u=0;u<e;u++){let f=3*u,M=Math.sqrt(a[f]*a[f]+a[f+1]*a[f+1]+a[f+2]*a[f+2]);if(M<=ot)a[f]=a[f+1]=a[f+2]=0;else{let A=1-ot/M;a[f]*=A,a[f+1]*=A,a[f+2]*=A}}this.paso++,this.t+=n}fotograma(n=this.A.sub){let e=.016666666666666666/n,i=this.x,o=this.N,t=this.xAntes||(this.xAntes=new Float64Array(3*o));t.set(i);for(let l=0;l<n;l++)this.subpaso(e);let s=0,a=0,r=0;for(let l=0;l<o;l++){let c=3*l,b=i[c]-t[c],p=i[c+1]-t[c+1],x=i[c+2]-t[c+2],g=(b*b+p*p+x*x)*3600;g>s&&(s=g),g>16e-6&&r++,a+=g}return this.vMaxima=Math.sqrt(s),this.vMedia=Math.sqrt(a/o),this.rapidos=r,this.quieta=r<=o*.003,this.vMaxima}*vestir(){let n=this.A,e=Math.round(n.tVestir*60),i=this.gravedad,o=n.aire,t=n.vmax,s=n.autoCada,a=n.friccionS,r=n.friccionK;this.gravedad=0,n.aire=14,n.vmax=1.2,n.autoCada=0,n.friccionS=0,n.friccionK=0;for(let l=0;l<e+8;l++){let c=Math.min(1,l/e);this.margen=-n.nucleo+(n.margen+n.nucleo)*c*c*(3-2*c),this.fotograma(),yield(l+1)/(e+8)}if(this.pega&&this.P.tienda.cordon&&(this.margen=n.margen,this._cenir()))for(let l=0;l<14;l++)this.fotograma(),yield 1;this.margen=n.margen,this.gravedad=i,n.aire=o,n.vmax=t,n.autoCada=s,n.friccionS=a,n.friccionK=r,this.v.fill(0)}_cenir(){let n=this.P,e=this.N,i=this.x,o=this.S,t=this.pega,s=0,a=0;for(let x=0;x<e;x++)t[x]&&(s+=o(i[3*x],i[3*x+1],i[3*x+2])-this.A.margen,a++);let r=n.medidas&&n.medidas.cintura;if(!a||!r)return!1;let l=Math.max(.75,1-.9*2*Math.PI*(s/a)/r);if(l>.985)return!1;let c=this.er=Float32Array.from(n.er),b=n.ea,p=n.eb;for(let x=0;x<c.length;x++)t[b[x]]&&t[p[x]]&&(c[x]*=l);return this.cenido=l,!0}normales(n){let e=this.x,i=this.P.tris,o=this.N;n.fill(0);for(let t=0;t<i.length;t+=3){let s=3*i[t],a=3*i[t+1],r=3*i[t+2],l=e[a]-e[s],c=e[a+1]-e[s+1],b=e[a+2]-e[s+2],p=e[r]-e[s],x=e[r+1]-e[s+1],g=e[r+2]-e[s+2],y=c*g-b*x,d=b*p-l*g,z=l*x-c*p;n[s]+=y,n[s+1]+=d,n[s+2]+=z,n[a]+=y,n[a+1]+=d,n[a+2]+=z,n[r]+=y,n[r+1]+=d,n[r+2]+=z}for(let t=0;t<3*o;t+=3){let s=Math.hypot(n[t],n[t+1],n[t+2])||1;n[t]/=s,n[t+1]/=s,n[t+2]/=s}return n}deformacion(){let n=this.P,e=this.x,i=n.ea.length,o=new Float64Array(i);for(let s=0;s<i;s++){let a=3*n.ea[s],r=3*n.eb[s];o[s]=Math.hypot(e[r]-e[a],e[r+1]-e[a+1],e[r+2]-e[a+2])/n.er[s]-1}o.sort();let t=s=>o[Math.floor(s*(i-1))];return[t(.01),t(.5),t(.99)]}agarrar(n,e,i,o=.035){let t=this.x,s=this.N,a=-1,r=1e9;for(let y=0;y<s;y++){let d=(t[3*y]-n)**2+(t[3*y+1]-e)**2+(t[3*y+2]-i)**2;d<r&&(r=d,a=y)}if(a<0||r>.05*.05)return!1;let l=[],c=[],b=[],p=t[3*a],x=t[3*a+1],g=t[3*a+2];for(let y=0;y<s;y++){let d=t[3*y]-p,z=t[3*y+1]-x,P=t[3*y+2]-g,C=Math.sqrt(d*d+z*z+P*P);if(C<o){let m=1-C/o;l.push(y),c.push(.35*m*m),b.push(d,z,P)}}return this.agarre={i:Int32Array.from(l),k:Float64Array.from(c),d:Float64Array.from(b),obj:[p,x,g]},!0}mover(n,e,i){this.agarre&&(this.agarre.obj=[n,e,i])}soltar(){this.agarre=null}};var dt=self.postMessage.bind(self),pt=new Map,xt=new Map,mt=[],it=null,wt=new MessageChannel,bt=null;wt.port1.onmessage=()=>{let h=bt;bt=null,h&&h()};var jt=(h,n)=>{n>=2?setTimeout(h,n):(bt=h,wt.port2.postMessage(0))},Nt=()=>new Promise(h=>setTimeout(h,0)),At=Math.PI*2;function Pt(h){let n=h.rgid.length,e=n,i=0,o=h.lineas.map(t=>{let s=t.t.length,a={k:s,v0:e,cos:new Float32Array(t.radial),sin:new Float32Array(t.radial)};for(let r=0;r<t.radial;r++)a.cos[r]=Math.cos(r/t.radial*At),a.sin[r]=Math.sin(r/t.radial*At);return e+=s*t.radial,s>i&&(i=s),a});return{nr:n,nv:e,lineas:o,nsim:new Float32Array(3*h.n),px:new Float32Array(3*i),pn:new Float32Array(3*i)}}function vt(h){let n=h*4;for(let e=0;e<mt.length;e++)if(mt[e].byteLength===n)return new Float32Array(mt.splice(e,1)[0]);return new Float32Array(h)}function kt(h){let n=h.T,e=h.P,i=h.G,o=n.x,t=n.normales(i.nsim),s=vt(3*i.nv),a=vt(3*i.nv),r=e.rgid;for(let b=0;b<i.nr;b++){let p=3*r[b],x=3*b;s[x]=o[p],s[x+1]=o[p+1],s[x+2]=o[p+2],a[x]=t[p],a[x+1]=t[p+1],a[x+2]=t[p+2]}let l=i.px,c=i.pn;for(let b=0;b<e.lineas.length;b++){let p=e.lineas[b],x=i.lineas[b],g=x.k,y=p.ab,d=p.t,z=p.off,P=p.r,C=p.radial;for(let m=0;m<g;m++){let w=3*y[2*m],L=3*y[2*m+1],O=d[m],k=t[w]+(t[L]-t[w])*O,q=t[w+1]+(t[L+1]-t[w+1])*O,j=t[w+2]+(t[L+2]-t[w+2])*O,X=Math.hypot(k,q,j)||1;k/=X,q/=X,j/=X,l[3*m]=o[w]+(o[L]-o[w])*O+k*z,l[3*m+1]=o[w+1]+(o[L+1]-o[w+1])*O+q*z,l[3*m+2]=o[w+2]+(o[L+2]-o[w+2])*O+j*z,c[3*m]=k,c[3*m+1]=q,c[3*m+2]=j}for(let m=0;m<g;m++){let w=m>0?m-1:p.cerrada?g-1:0,L=m<g-1?m+1:p.cerrada?0:g-1,O=l[3*L]-l[3*w],k=l[3*L+1]-l[3*w+1],q=l[3*L+2]-l[3*w+2],j=Math.hypot(O,k,q)||1;O/=j,k/=j,q/=j;let X=c[3*m],U=c[3*m+1],E=c[3*m+2],Y=k*E-q*U,K=q*X-O*E,H=O*U-k*X,R=Math.hypot(Y,K,H)||1;Y/=R,K/=R,H/=R;let N=K*q-H*k,J=H*O-Y*q,st=Y*k-K*O;for(let $=0;$<C;$++){let V=x.cos[$],W=x.sin[$],nt=V*N+W*Y,S=V*J+W*K,tt=V*st+W*H,D=3*(x.v0+m*C+$);s[D]=l[3*m]+P*nt,s[D+1]=l[3*m+1]+P*S,s[D+2]=l[3*m+2]+P*tt,a[D]=nt,a[D+1]=S,a[D+2]=tt}}}dt({tipo:"cuadro",id:h.id,pos:s,nor:a,t:n.t},[s.buffer,a.buffer])}function zt(h){if(it!==h||h.dormida)return;let n=performance.now(),e=h.T;e.fotograma(),h.f++,h.quieta=e.quieta&&!e.agarre?h.quieta+1:0,kt(h);let i=performance.now()-n;if(h.ms+=i,h.nms++,h.nms===30&&(dt({tipo:"estado",id:h.id,ms:h.ms/30,t:e.t,vmax:e.vMaxima,contactos:e.contactos}),h.ms=0,h.nms=0),(h.quieta>=30||h.f-h.f0>60*15)&&!e.agarre){h.dormida=!0;let o=e.deformacion();dt({tipo:"reposo",id:h.id,t:e.t,fotogramas:h.f,estirada:o[1],vmax:e.vMaxima});return}jt(()=>zt(h),16.6-i)}function It(h){h.dormida&&(h.dormida=!1,h.quieta=0,h.f0=h.f,zt(h))}async function Ot(h){try{it=null,h.datos&&(pt.set(h.url,h.datos),pt.size>3&&pt.delete(pt.keys().next().value)),h.rejilla&&(xt.set(h.cuerpo,h.rejilla),xt.size>2&&xt.delete(xt.keys().next().value));let n=pt.get(h.url),e=xt.get(h.cuerpo);if(!n||!e)return dt({tipo:"falta",id:h.id,datos:!n,rejilla:!e});let i=performance.now(),o=new yt(n,h.ambiente||{});o.usarCuerpo(e),o.colocar(h.marcas);let t=it={id:h.id,T:o,P:n,G:Pt(n),f:0,f0:0,quieta:0,dormida:!1,ms:0,nms:0},s=0;for(let a of o.vestir())if(++s%4===0&&(dt({tipo:"progreso",id:h.id,p:a}),await Nt(),it!==t))return;dt({tipo:"vestida",id:h.id,ms:Math.round(performance.now()-i),nv:t.G.nv}),kt(t),zt(t)}catch(n){dt({tipo:"error",id:h.id,mensaje:String(n&&n.message||n)})}}self.onmessage=h=>{let n=h.data||{};if(n.tipo==="vestir"){Ot(n);return}if(n.tipo==="devolver"){for(let i of n.bufs)mt.length<6&&mt.push(i);return}if(n.tipo==="parar"){it&&(n.id==null||it.id===n.id)&&(it=null);return}let e=it;if(!(!e||e.id!==n.id)){if(n.tipo==="agarrar"){e.T.agarrar(n.p[0],n.p[1],n.p[2])&&It(e);return}if(n.tipo==="mover"){e.T.mover(n.p[0],n.p[1],n.p[2]);return}if(n.tipo==="soltar"){e.T.soltar();return}}};})();
`;function Cu(i){let e=i.dy||.005,t=i.nu||96,n=i.hps,s=i.yArmTop||n-.15,r={hps:n,yAxila:s,brazo:{O:[.19*n/1.502,s+.04,-.014],u:[.7808,-.6248,-.01]},semiancho:.18,frente:.135,espalda:.125},a=i.tubos&&i.tubos.brazoI;if(a){let l=0,c=0,u=0,h=0,f=0,p=0,g=0;for(let v=0;v<a.n;v++){let x=(a.i0+v)*e;x>s-.025||x<s-.125||(l++,c+=x,u+=a.cx[v],h+=a.cz[v],f+=x*x,p+=a.cx[v]*x,g+=a.cz[v]*x)}if(l>=8){let v=l*f-c*c,x=(l*p-u*c)/v,A=(l*g-h*c)/v,P=(u-x*c)/l,E=(h-A*c)/l,w=Math.hypot(x,1,A),z=s+.04;r.brazo={O:[P+x*z,z,E+A*z],u:[-x/w,-1/w,-A/w]}}let y=[r.brazo.O[0],r.brazo.O[1],r.brazo.O[2]],m=[-1],d=0;for(let v=a.n-2;v>=0;v--)if(!((a.i0+v+1)*e>s-.03)&&Math.hypot(a.cx[v]-a.cx[v+1],a.cz[v]-a.cz[v+1])>.03){d=v+1;break}for(let v=a.n-1;v>=d;v--){let x=(a.i0+v)*e;if(x>s-.03)continue;let A=0,P=0,E=0;for(let w=-3;w<=3;w++)v+w>=d&&v+w<a.n&&(A+=a.cx[v+w],P+=a.cz[v+w],E++);y.push(A/E,x,P/E),m.push(v)}if(y.length>=9){let v=Float32Array.from(y),x=new Float32Array(v.length/3);for(let w=1;w<x.length;w++)x[w]=x[w-1]+Math.hypot(v[3*w]-v[3*w-3],v[3*w+1]-v[3*w-2],v[3*w+2]-v[3*w-1]);r.brazo.linea=v,r.brazo.s=x;let A=x[x.length-1],P=1/0,E=-1;for(let w=1;w<x.length;w++){if(x[w]<.5*A)continue;if(x[w]>.9*A)break;let z=a.P[m[w]];if(z<P)P=z,E=w;else if(E>0&&z>1.06*P&&x[w]-x[E]>.02)break}if(E>0){let w=Math.max(1,E-4),z=Math.min(x.length-1,E+4),b=Math.hypot(v[3*z]-v[3*w],v[3*z+1]-v[3*w+1],v[3*z+2]-v[3*w+2])||1;r.brazo.muneca={P:[v[3*E],v[3*E+1],v[3*E+2]],t:[(v[3*z]-v[3*w])/b,(v[3*z+1]-v[3*w+1])/b,(v[3*z+2]-v[3*w+2])/b],s:x[E],contorno:P}}}}let o=i.tubos&&i.tubos.torso;if(o){let l=0,c=0,u=0;for(let h=0;h<o.n;h++){let f=(o.i0+h)*e;if(!(f>s||f<n-.75))for(let p=0;p<t;p++){let g=p/t*Math.PI*2,y=o.r[h*t+p],m=Math.abs(o.cx[h]+y*Math.cos(g)),d=o.cz[h]+y*Math.sin(g);m>l&&(l=m),d>c&&(c=d),-d>u&&(u=-d)}}l>0&&(r.semiancho=l,r.frente=c,r.espalda=u)}if(i.crotch!=null){r.entrepierna=i.crotch;let l=i.tubos&&i.tubos.piernaI;if(l&&l.n>8){let c=new Float32Array(l.n),u=new Float32Array(l.n);for(let h=0;h<l.n;h++){let f=l.n-1-h,p=0,g=0,y=0;for(let m=-3;m<=3;m++)f+m>=0&&f+m<l.n&&(p+=l.cx[f+m],g+=l.cz[f+m],y++);c[h]=p/y,u[h]=g/y}r.pierna={y0:(l.i0+l.n-1)*e,dy:e,cx:c,cz:u}}}return r}function Lu(i,e,t,n=.006,s=null){if(s&&s.pantalon){let f=.12;if(i.pierna)for(let v of i.pierna.cx)v>f&&(f=v);let p=Math.max(i.semiancho,f+.1)+.16,g=-.03,y=(i.entrepierna||.8)+(s.alto||.42),m=-Math.max(.3,i.espalda+.2),d=Math.max(.34,i.frente+.2);return{x0:-p,y0:g,z0:m,s:n,nx:Math.ceil(2*p/n)+1,ny:Math.ceil((y-g)/n)+1,nz:Math.ceil((d-m)/n)+1}}let r=i.brazo,a=.1+t+.1,o=r.linea?i.semiancho+.16:Math.max(i.semiancho+.16,r.O[0]+r.u[0]*a+.14),l=i.hps-e-.22,c=-Math.max(.3,i.espalda+.2),u=Math.max(.32,i.frente+.2),h=i.hps+.13;if(r.linea)for(let f=0;f<r.s.length&&r.s[f]<=a;f++)o=Math.max(o,r.linea[3*f]+.14),l=Math.min(l,r.linea[3*f+1]-.14),c=Math.min(c,r.linea[3*f+2]-.14),u=Math.max(u,r.linea[3*f+2]+.14);return{x0:-o,y0:l,z0:c,s:n,nx:Math.ceil(2*o/n)+1,ny:Math.ceil((h-l)/n)+1,nz:Math.ceil((u-c)/n)+1}}var Cn=Math.PI*2,$o=.0042,el=1.753,Iu={front:0,tq:.62,left:-Math.PI/2,right:Math.PI/2,back:Math.PI},zu={height:[120,215],lt:[100,185],bust:[60,150],waist:[45,140],hip:[60,150],shoulders:[30,56],sleeve:[40,72],riseF:[18,45],riseB:[22,52],biceps:[18,50],wrist:[12,26],thigh:[35,80],neck:[25,52]},Ou=()=>typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,$=null;function Lg(i){let e=new Gi(i),t=new ys,n=new _r(30,64,32),s=n.attributes.position,r=[],a=new pe,o=new pe(724240),l=new pe(3817803),c=new pe(9081500);for(let f=0;f<s.count;f++){let p=s.getY(f)/30;p<0?a.copy(l).lerp(o,Math.min(1,-p*2.2)):a.copy(l).lerp(c,p),r.push(a.r,a.g,a.b)}n.setAttribute("color",new ht(r,3)),t.add(new at(n,new qt({vertexColors:!0,side:mt})));let u=(f,p,g,y,m)=>{let d=new at(new ms(f,p),new qt({color:new pe(y).multiplyScalar(g),side:Pt}));d.position.set(...m),d.lookAt(0,1,0),t.add(d)};u(16,12,6,16773602,[-14,12,16]),u(3,30,10,14411775,[18,6,-14]),u(3,30,8,16777215,[-18,6,-14]),u(22,6,3.5,16777215,[0,26,2]),u(12,18,2.2,15002879,[20,4,12]),u(3,30,4,16777215,[4,6,24]),u(40,3,2,16777215,[0,3,-27]);let h=e.fromScene(t,.03).texture;return t.traverse(f=>{f.isMesh&&(f.geometry.dispose(),f.material.dispose())}),e.dispose(),h}function Ig(i){let e=new gs({antialias:!0,alpha:!0});e.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),e.outputColorSpace=$e,e.toneMapping=po,e.toneMappingExposure=1,e.shadowMap.enabled=!0,e.shadowMap.type=fo;let t=e.domElement;t.setAttribute("role","img"),t.setAttribute("aria-label","Maniqu\xED 3D con tus medidas y la prenda. Arrastra para girarlo; en las prendas de tela, arrastra sobre la prenda para tirar de ella.");let n=new ys,s=new pt(28,1,.05,60),r=new Vr(s,t);r.target.set(0,.9,0),r.enableDamping=!0,r.dampingFactor=.08,r.minDistance=.5,r.maxDistance=9,r.maxPolarAngle=Math.PI*.54,r.autoRotateSpeed=.9,n.environment=Lg(e);let a=new Pn(16773342,2.6);a.position.set(-2.2,3.8,2.9),a.castShadow=!0,a.shadow.mapSize.set(2048,2048),Object.assign(a.shadow.camera,{left:-1.2,right:1.2,top:2.1,bottom:-.3,near:.5,far:12}),a.shadow.bias=-3e-4,a.shadow.normalBias=.02,a.shadow.radius=3,a.target.position.set(0,.9,0),n.add(a,a.target);let o=new Pn(13624063,3.4);o.position.set(2.8,2.6,-3);let l=new Pn(16777215,2.2);l.position.set(-3,2.2,-2.6);let c=new Pn(14674175,.55);c.position.set(3,1.4,2.6);let u=new Ir(16777215,1842980,.35);n.add(o,l,c,u);let h=new at(new Er(3,64),new Rr({opacity:.3}));h.rotation.x=-Math.PI/2,h.receiveShadow=!0,n.add(h);let f=new vt({color:15988216,metalness:1,roughness:.07,clearcoat:.6,clearcoatRoughness:.04,envMapIntensity:1.15}),p=new vt({color:14014684,metalness:0,roughness:.8,sheen:.35,sheenRoughness:.7,sheenColor:new pe(16777215),envMapIntensity:.45}),g=new at(new ft,f);g.castShadow=g.receiveShadow=!0,g.visible=!1,n.add(g);let y=document.createElement("div");y.className="atelier-estado",y.setAttribute("role","status"),y.setAttribute("aria-live","polite"),y.textContent="Generando maniqu\xED\u2026";let m=URL.createObjectURL(new Blob([Ru,`
;
`,Qo],{type:"text/javascript"})),d=URL.createObjectURL(new Blob([Qo],{type:"text/javascript"})),v=new Worker(m),x=new Worker(d),A={renderer:e,canvas:t,scene:n,camera:s,controls:r,key:a,floor:h,matChrome:f,matTech:p,mannequin:g,estado:y,wCuerpo:v,wPrenda:x,blobs:[m,d],el:null,opts:i||{},raf:0,anim:null,ro:null,cuerpos:new Map,cuerpo:null,pedidoCuerpo:null,ocupado:!1,pendiente:null,reqId:0,alto:el,gltfs:new Map,urlsEnWorker:new Set,cuerposEnWorker:new Set,xfer:new Map,prenda:null,grupo:null,token:0,trabajos:new Map,jobId:0,piezasOff:new Set,base:null,baseP:null,ultimo:{},primerCuadro:!0,wTela:null,sdfs:new Map,sdfId:0,vivo:null,telaId:0,telaUrls:new Set,telaCuerpos:new Set,matsTela:new Map,agarre:null};A.baseP=fetch(i&&i.base||"modelos-3d/cuerpo-base.json",{cache:"no-cache"}).then(E=>{if(!E.ok)throw new Error("HTTP "+E.status);return E.json()}).then(E=>(A.base=E,x.postMessage({tipo:"base",json:E}),E)).catch(E=>{throw A.base=null,E}),A.baseP.catch(()=>{}),v.onmessage=E=>Ug(A,E.data),v.onerror=E=>{A.ocupado=!1,Ct(A,"No se pudo generar el maniqu\xED en este navegador."),Ut(A,"error",{mensaje:E.message||"worker"});for(let w of A.sdfs.values())w({error:E.message||"worker"});A.sdfs.clear()},x.onmessage=E=>{let w=E.data,z=A.trabajos.get(w.id);z&&(A.trabajos.delete(w.id),z(w))},x.onerror=E=>{for(let w of A.trabajos.values())w({tipo:"error",mensaje:E.message||"worker"});A.trabajos.clear()},r.addEventListener("start",()=>{A.anim=null,r.autoRotate=!1,Ut(A,"giro",{activo:!1})}),r.autoRotate=!Ou();let P=new li(4.6,1.45,.5);return s.position.setFromSpherical(P).add(r.target),A.sph=P,Zg(A),A}var Ut=(i,e,t)=>{try{i.opts.alEvento&&i.opts.alEvento(e,t)}catch(n){console.error(n)}};function Ct(i,e){i.estado.textContent=e||"",i.estado.hidden=!e}function Uu(i){return 4.6*(i.alto/el)*Math.max(1,.8/i.camera.aspect)}function Du(i){let e=i.el;if(!e)return;let t=e.clientWidth,n=e.clientHeight;!t||!n||(i.renderer.setSize(t,n,!1),i.camera.aspect=t/n,i.camera.updateProjectionMatrix(),i.primerCuadro&&(i.primerCuadro=!1,i.sph.set(Uu(i),1.45,.5),i.camera.position.setFromSpherical(i.sph).add(i.controls.target)))}function Fu(i,e){if(!i.canvas.isConnected){i.raf=0;return}if(i.anim){let t=i.anim,n=Math.min(1,(e-t.t0)/t.dur);n=n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2,i.sph.set(t.from.r+(t.to.r-t.from.r)*n,t.from.ph+(t.to.ph-t.from.ph)*n,t.from.th+(t.to.th-t.from.th)*n),i.camera.position.setFromSpherical(i.sph).add(i.controls.target),n>=1&&(i.anim=null)}i.controls.update(),i.renderer.render(i.scene,i.camera),i.raf=requestAnimationFrame(t=>Fu(i,t))}function Dg(i,e){let t=i.camera.position.clone().sub(i.controls.target);i.sph.setFromVector3(t);let n=e;for(;n-i.sph.theta>Math.PI;)n-=Cn;for(;n-i.sph.theta<-Math.PI;)n+=Cn;let s={th:i.sph.theta,ph:i.sph.phi,r:i.sph.radius},r={th:n,ph:1.45,r:Uu(i)};if(i.controls.autoRotate=!1,Ut(i,"giro",{activo:!1}),Ou()){i.sph.set(r.r,r.ph,r.th),i.camera.position.setFromSpherical(i.sph).add(i.controls.target);return}i.anim={t0:performance.now(),from:s,to:r,dur:800}}function Ng(i,e){let t=i.alto;i.alto=e;let n=.9*e/el,s=n-i.controls.target.y;i.controls.target.y=n,i.camera.position.y+=s;let r=i.camera.position.clone().sub(i.controls.target);r.multiplyScalar(e/t),i.camera.position.copy(i.controls.target).add(r),i.key.shadow.camera.top=e+.35,i.key.shadow.camera.updateProjectionMatrix(),i.key.target.position.y=n}function zg(i){let e=i&&i.sex==="m"?"m":"f",t={},n={},s=[];for(let[a,o]of Object.entries(i&&i.pins||{})){let l=Number(o),c=zu[a];if(!c||!Number.isFinite(l))continue;n[a]=l;let u=Math.round(Math.min(c[1],Math.max(c[0],l))*10)/10;t[a]=u,u!==Math.round(l*10)/10&&s.push(a)}let r=e+"|"+Object.keys(t).sort().map(a=>a+":"+t[a]).join(",")+"|"+$o;return{sex:e,pins:t,pedidas:n,ajustadas:s,clave:r}}function Og(i,e){let t={tipo:"cuerpo",sex:e.sex,pins:e.pins,h:$o,id:++i.reqId,clave:e.clave};if(i.pedidoCuerpo=e,i.esperando=t.id,Ct(i,i.cuerpo?"Ajustando el maniqu\xED a tus medidas\u2026 0 %":"Generando maniqu\xED\u2026 0 %"),i.ocupado){i.pendiente=t;return}i.ocupado=!0,i.t0Cuerpo=performance.now(),i.wCuerpo.postMessage(t)}function Ug(i,e){if(e.tipo==="sdf"){let s=i.sdfs.get(e.id);s&&(i.sdfs.delete(e.id),s(e));return}if(e.tipo==="progreso"){i.ocupado&&Ct(i,`${i.cuerpo?"Ajustando el maniqu\xED a tus medidas\u2026":"Generando maniqu\xED\u2026"} ${Math.round(e.p*100)} %`);return}if(e.tipo==="error"){i.ocupado=!1,Ct(i,"No se pudo generar el maniqu\xED: "+e.mensaje),Ut(i,"error",{mensaje:e.mensaje}),Nu(i);return}if(e.tipo!=="cuerpo")return;i.ocupado=!1;let t=i.pedidoCuerpo&&e.id===i.esperando?i.pedidoCuerpo:null,n=Math.round(performance.now()-(i.t0Cuerpo||performance.now()));if(t){let s=new ft;s.setAttribute("position",new Ye(e.pos,3)),s.setAttribute("normal",new Ye(e.nor,3)),s.setIndex(new Ye(e.idx,1)),s.computeBoundingSphere();let r={...t,geo:s,tablas:e.tablas,vals:e.vals,alto:e.height,ms:e.ms,msCortes:e.msCortes,msTotal:n};for(i.cuerpos.set(t.clave,r);i.cuerpos.size>4;){let a=[...i.cuerpos.keys()].find(o=>o!==t.clave&&(!i.cuerpo||o!==i.cuerpo.clave));if(!a)break;i.cuerpos.get(a).geo.dispose(),i.cuerpos.delete(a)}Bu(i,r)}Nu(i)}function Nu(i){if(i.pendiente){let e=i.pendiente;i.pendiente=null,i.ocupado=!0,i.t0Cuerpo=performance.now(),i.wCuerpo.postMessage(e)}}function Bu(i,e){i.cuerpo=e,i.pedidoCuerpo=null,i.mannequin.geometry=e.geo,i.mannequin.visible=!0,Ng(i,e.alto),Ct(i,""),Ut(i,"cuerpo",{clave:e.clave,sex:e.sex,pins:e.pins,pedidas:e.pedidas,ajustadas:e.ajustadas,vals:e.vals,ms:e.ms,msCortes:e.msCortes,msTotal:e.msTotal}),Gu(i)}function Hu(i,e){if(i.gltfs.has(e)){let n=i.gltfs.get(e);return i.gltfs.delete(e),i.gltfs.set(e,n),n.p}let t=new Gr().loadAsync(e).then(n=>{let s=n.scene;s.updateMatrixWorld(!0);let r=[];return s.traverse(a=>{if(!a.isMesh)return;let o=a.geometry,l=o.attributes.position,c=l.count,u=new Float32Array(c*3),h=new L;for(let p=0;p<c;p++)h.fromBufferAttribute(l,p).applyMatrix4(a.matrixWorld),u[3*p]=h.x,u[3*p+1]=h.y,u[3*p+2]=h.z;let f=[];for(let p=a;p&&p!==s;p=p.parent)p.name&&f.push(p.name);r.push({malla:a,pos:u,idx:o.index?Uint32Array.from(o.index.array):null,nombres:f})}),Hg(n).catch(()=>null).then(a=>({gltf:n,mallas:r,tela:a}))});for(i.gltfs.set(e,{p:t}),t.catch(()=>i.gltfs.delete(e));i.gltfs.size>4;){let n=[...i.gltfs.keys()].find(r=>!i.prenda||r!==i.prenda.glbUrl);if(!n)break;let s=i.gltfs.get(n);i.gltfs.delete(n),i.urlsEnWorker.delete(n);for(let[r,a]of[...i.xfer])a.url===n&&a.grupo!==i.grupo&&(tl(a.grupo),i.xfer.delete(r));s.p.then(({gltf:r})=>r.scene.traverse(a=>{if(a.isMesh){a.geometry.dispose();for(let o of[].concat(a.material)){for(let l of Object.values(o))l&&l.isTexture&&l.dispose();o.dispose()}}})).catch(()=>{})}return t}function tl(i){i&&i.traverse(e=>{e.isMesh&&e.geometry.dispose()})}function Fg(i,e,t){return new Promise(n=>{let s=++i.jobId;i.trabajos.set(s,n),i.wPrenda.postMessage({...e,id:s},t||[])})}var Bg={tris:Uint16Array,ea:Uint16Array,eb:Uint16Array,er:Float32Array,ealfa:Float32Array,h0:Uint16Array,h1:Uint16Array,h2:Uint16Array,h3:Uint16Array,hk:Float32Array,halfa:Float32Array,masa:Float32Array,tT:Float32Array,tM:Float32Array,tW:Float32Array,tLado:Int8Array,rgid:Uint16Array,ruv:Float32Array,rtris:Uint16Array};async function Hg(i){let e=i.parser&&i.parser.json&&i.parser.json.extras&&i.parser.json.extras.tela;if(!e||e.version!==2)return null;let t=s=>i.parser.getDependency("bufferView",s),n={version:2,tipo:e.tipo,talla:e.talla,h:e.h,n:e.n,tejido:e.tejido,tienda:e.tienda,partes:e.partes,medidas:e.medidas,interior:e.interior||null};return await Promise.all(Object.entries(Bg).map(async([s,r])=>{n[s]=new r(await t(e.campos[s]))})),e.desgaste!=null&&(n.desgaste=new Float32Array(await t(e.desgaste))),n.lineas=await Promise.all(e.lineas.map(async s=>({nombre:s.nombre,r:s.r,off:s.off,radial:s.radial,cerrada:!!s.cerrada,ab:new Uint16Array(await t(s.ab)),t:new Float32Array(await t(s.t))}))),n}function kg(i,e,t){return new Promise((n,s)=>{let r=++i.sdfId;i.sdfs.set(r,a=>a.error?s(new Error(a.error)):n(a)),i.wCuerpo.postMessage({tipo:"sdf",id:r,clave:e.clave,sex:e.sex,pins:e.pins,h:$o,caja:t})})}function Xr(i,e){let n=document.createElement("canvas");n.width=n.height=128;let s=new Float32Array(128*128),r=n.getContext("2d"),a=r.createImageData(128,128);for(let c=0;c<128;c++)for(let u=0;u<128;u++){let h=u/128*8,f=c/128*8;if(e==="canale")s[c*128+u]=.5+.5*Math.cos(Cn*h*.5);else if(e==="sarga")s[c*128+u]=.5+.5*Math.cos(Cn*(h+f));else if(e==="plano")s[c*128+u]=.5+.5*Math.cos(Cn*h)*Math.cos(Cn*f);else if(e==="cuero"){let p=Cn*u/128,g=Cn*c/128;s[c*128+u]=.5+.11*(Math.sin(5*p+3*g)+Math.sin(-4*p+7*g+1.3)+Math.sin(9*p-2*g+2.1)+.7*Math.sin(11*p+6*g+.4)+.7*Math.sin(-7*p-10*g+4.2)+.5*Math.sin(13*p+g+5))}else{let p=Math.abs(h%1-.5)*2;s[c*128+u]=(1-p*p)*(.72+.28*Math.cos(Cn*(f+.35*p)))}}let o=e==="canale"?5:3.5;for(let c=0;c<128;c++)for(let u=0;u<128;u++){let h=(s[c*128+(u+1)%128]-s[c*128+(u+128-1)%128])*o,f=(s[(c+1)%128*128+u]-s[(c+128-1)%128*128+u])*o,p=Math.hypot(h,f,1),g=4*(c*128+u);a.data[g]=Math.round((-h/p*.5+.5)*255),a.data[g+1]=Math.round((-f/p*.5+.5)*255),a.data[g+2]=Math.round((1/p*.5+.5)*255),a.data[g+3]=255}r.putImageData(a,0,0);let l=new Xi(n);return l.wrapS=l.wrapT=rn,l.anisotropy=Math.min(8,i.renderer.capabilities.getMaxAnisotropy()),l}function Vg(i,e){let n=document.createElement("canvas");n.width=n.height=256;let s=n.getContext("2d"),r=s.createImageData(256,256),a=h=>[parseInt(h.slice(1,3),16),parseInt(h.slice(3,5),16),parseInt(h.slice(5,7),16)],o=a(e.claro),l=a(e.medio),c=a(e.oscuro);for(let h=0;h<256;h++)for(let f=0;f<256;f++){let p=f<128,g=h>=256/2,y=4*(h*256+f),m=.94+.12*((f*73856093^h*19349663)>>>0)%97/97,d=p&&g?o:!p&&!g?c:l;if(p!==g){let v=(f+h&7)<4?1.13:.87;d=[d[0]*v,d[1]*v,d[2]*v]}r.data[y]=Math.min(255,d[0]*m),r.data[y+1]=Math.min(255,d[1]*m),r.data[y+2]=Math.min(255,d[2]*m),r.data[y+3]=255}s.putImageData(r,0,0);let u=new Xi(n);return u.wrapS=u.wrapT=rn,u.colorSpace=$e,u.anisotropy=Math.min(8,i.renderer.capabilities.getMaxAnisotropy()),u.repeat.set(.021/e.periodo,.016/e.periodo),u.offset.set(.25,0),u}function Gg(i){let t=(a,o)=>{let l=a/128*4,c=o/128*4,u=Math.floor(c),h=l+(u&1?.5:0),f=h-Math.floor(h)-.5,p=c-u-.5,g=Math.hypot(f,p);return Math.min(1,Math.max(0,(g-.17)/.13))},n=a=>{let o=document.createElement("canvas");o.width=o.height=128;let l=o.getContext("2d"),c=l.createImageData(128,128);for(let h=0;h<128;h++)for(let f=0;f<128;f++)a(f,h,c.data,4*(h*128+f));l.putImageData(c,0,0);let u=new Xi(o);return u.wrapS=u.wrapT=rn,u.anisotropy=Math.min(8,i.renderer.capabilities.getMaxAnisotropy()),u},s=n((a,o,l,c)=>{let u=Math.round(255*(.55+.45*t(a,o)));l[c]=l[c+1]=l[c+2]=u,l[c+3]=255});s.colorSpace=$e;let r=n((a,o,l,c)=>{let h=(t((a+1)%128,o)-t((a+128-1)%128,o))*2.2,f=(t(a,(o+1)%128)-t(a,(o+128-1)%128))*2.2,p=Math.hypot(h,f,1);l[c]=Math.round((-h/p*.5+.5)*255),l[c+1]=Math.round((-f/p*.5+.5)*255),l[c+2]=Math.round((1/p*.5+.5)*255),l[c+3]=255});return{mapa:s,normal:r}}function Wg(i,e){let t=e.color+"|"+e.hilo+(e.cuadros?"|"+JSON.stringify(e.cuadros):"")+(e.tejidoPlano?"|plano":"")+(e.boton?"|"+e.boton:"")+(e.satinado?"|satinado":"")+(e.malla?"|"+e.malla:"")+(e.cuero?"|cuero":"")+(e.metal?"|metal":"")+(e.pano?"|pano":"")+(e.denim?"|denim":"")+(e.lavado?"|"+e.lavado:"")+(e.parche?"|"+e.parche:"");if(i.matsTela.has(t))return i.matsTela.get(t);let n=new pe(e.color),s=n.clone().lerp(new pe(16777215),.5),r={color:n,roughness:1,metalness:0,specularIntensity:.12,sheen:.4,sheenRoughness:.9,sheenColor:s,side:Pt,envMapIntensity:.25},a=new vt({...r,normalMap:Xr(i,e.tejidoPlano?"plano":"punto"),normalScale:e.tejidoPlano?new Ae(.22,.22):new Ae(.32,.32)});e.cuadros&&(a.map=Vg(i,e.cuadros),a.color.set(16777215)),e.cuero&&(a.normalMap=Xr(i,"cuero"),a.normalScale.set(.09,.09),a.roughness=.42,a.sheen=0,a.specularIntensity=.9,a.envMapIntensity=.85,a.clearcoat=.15,a.clearcoatRoughness=.45),e.pano&&(a.normalScale.set(.1,.1),a.sheen=.7,a.sheenRoughness=1,a.specularIntensity=.05),e.denim&&(a.normalMap=Xr(i,"sarga"),a.normalScale.set(.55,.55),a.sheen=.12,a.specularIntensity=.1),e.lavado&&(a.vertexColors=!0),e.satinado&&(a.roughness=.66,a.specularIntensity=.45,a.sheen=.25,a.normalScale.set(.12,.12),a.envMapIntensity=.45);let o=a;if(e.malla){let g=Gg(i);o=new vt({...r,color:new pe(e.malla),map:g.mapa,normalMap:g.normal,normalScale:new Ae(.9,.9),roughness:.9}),o.shadowSide=mt}let l=new vt({...r,normalMap:Xr(i,"canale"),normalScale:new Ae(1,1)}),c=new hn({color:new pe(e.hilo),roughness:.85,metalness:0,envMapIntensity:.2,side:Pt}),u=new hn({color:new pe(e.boton||e.hilo),roughness:e.metal?.3:.38,metalness:e.metal?.85:0,envMapIntensity:e.metal?1:.6});a.shadowSide=l.shadowSide=mt;let h=a.clone();h.color.multiplyScalar(.8),h.shadowSide=mt;let f=new hn({color:new pe(e.parche||e.hilo),roughness:.62,metalness:0,envMapIntensity:.4,side:Pt}),p=[a,l,c,u,o,h,f];return i.matsTela.set(t,p),p}function Xg(i,e,t){let n=e.rgid.length,s=n,r=e.rtris.length,a=e.lineas.map(g=>{let y=g.t.length,m={k:y,v0:s};return s+=y*g.radial,r+=(g.cerrada?y:y-1)*g.radial*6,m}),o=s>65535?new Uint32Array(r):new Uint16Array(r),l=new ft;o.set(e.rtris,0);let c=g=>g.material==="canale"||g.nombre==="cuello"&&!g.material;for(let g of e.partes)l.addGroup(g.t0*3,g.nt*3,c(g)?1:g.material==="malla"?4:g.material==="cinturon"?5:g.material==="parche"?6:0);let u=e.rtris.length;e.lineas.forEach((g,y)=>{let m=a[y].k,d=g.radial,v=a[y].v0,x=u,A=g.cerrada?m:m-1;for(let P=0;P<A;P++){let E=v+P*d,w=v+(P+1)%m*d;for(let z=0;z<d;z++){let b=(z+1)%d;o[u++]=E+z,o[u++]=E+b,o[u++]=w+z,o[u++]=E+b,o[u++]=w+b,o[u++]=w+z}}l.addGroup(x,u-x,g.nombre==="pespunte"?2:g.nombre==="boton"?3:g.nombre==="cuello-borde"?1:0)});let h=new Float32Array(2*s);for(let g of e.partes){let y=c(g)?62.5:47.61904761904761,m=1/.016;for(let d=g.v0;d<g.v0+g.nv;d++)h[2*d]=e.ruv[2*d]*y,h[2*d+1]=e.ruv[2*d+1]*m}let f=()=>{let g=new Ye(new Float32Array(3*s),3);return g.setUsage(cu),g};if(l.setIndex(new Ye(o,1)),l.setAttribute("position",f()),l.setAttribute("normal",f()),l.setAttribute("uv",new Ye(h,2)),e.tejido.lavado){let g=new pe(e.tejido.color),y=new pe(e.tejido.lavado),m=y.r/g.r-1,d=y.g/g.g-1,v=y.b/g.b-1,x=new Float32Array(3*s).fill(1),A=e.desgaste;if(A)for(let P=0;P<n;P++){let E=A[P];x[3*P]=1+m*E,x[3*P+1]=1+d*E,x[3*P+2]=1+v*E}l.setAttribute("color",new Ye(x,3))}l.boundingSphere=new Ot(new L(0,1,0),3);let p=new at(l,Wg(i,e.tejido));return p.name=e.tipo,p.frustumCulled=!1,p.castShadow=p.receiveShadow=!0,p.userData.nombres=[e.tipo],p}function qg(i,e,t,n){let s=t.geo.attributes.position.array,r=t.geo.attributes.normal.array,a=t.geo.index.array,o=s.length/3,l=n.brazo.O,c=n.brazo.u,u=n.hps-(e.largo||.62)*n.hps/1.5,h=n.semiancho+.03,f=new Int32Array(o).fill(-1),p=[],g=[],y=[],m=P=>{let E=s[3*P],w=s[3*P+1],z=s[3*P+2],b=E<0?-E:E;if(w<u||b>h||w>n.hps-.045+.5*Math.min(b,.09))return!1;let _=b-l[0],k=w-l[1],q=z-l[2],ae=_*c[0]+k*c[1]+q*c[2];return!(ae>.012&&_*_+k*k+q*q-ae*ae<.0056)};for(let P=0;P<a.length;P+=3){let E=a[P],w=a[P+1],z=a[P+2];if(!(!m(E)||!m(w)||!m(z)))for(let b of[E,w,z])f[b]<0&&(f[b]=p.length/3,p.push(s[3*b]+r[3*b]*.001,s[3*b+1]+r[3*b+1]*.001,s[3*b+2]+r[3*b+2]*.001),g.push(r[3*b],r[3*b+1],r[3*b+2])),y.push(f[b])}let d=new ft;d.setAttribute("position",new Ye(new Float32Array(p),3)),d.setAttribute("normal",new Ye(new Float32Array(g),3)),d.setIndex(new Ye(new Uint32Array(y),1)),d.computeBoundingSphere();let v=new pe(e.color||"#f2f0e9"),x=new vt({color:v,roughness:1,metalness:0,specularIntensity:.1,sheen:.4,sheenRoughness:.9,sheenColor:v.clone().lerp(new pe(16777215),.5),envMapIntensity:.25}),A=new at(d,x);return A.name="interior",A.userData.nombres=["interior"],A.castShadow=A.receiveShadow=!0,A}function _s(i){let e=i.vivo;e&&(i.vivo=null,i.soltarAgarre&&i.soltarAgarre(),i.wTela&&i.wTela.postMessage({tipo:"parar",id:e.id}),i.grupo===e.grupo&&(i.scene.remove(e.grupo),i.grupo=null),e.geo.dispose(),e.interior&&(e.interior.geometry.dispose(),e.interior.material.dispose()))}function jg(i,e){let t=i.vivo;if(!t||e.id!==t.id){e.tipo==="cuadro"&&i.wTela&&i.wTela.postMessage({tipo:"devolver",bufs:[e.pos.buffer,e.nor.buffer]},[e.pos.buffer,e.nor.buffer]);return}if(e.tipo==="progreso"){t.visto||Ct(i,`Vistiendo la prenda\u2026 ${Math.round(e.p*100)} %`);return}if(e.tipo==="vestida"){t.msVestir=e.ms;return}if(e.tipo==="estado"){t.estado={ms:e.ms,t:e.t,vmax:e.vmax,contactos:e.contactos};return}if(e.tipo==="cuadro"){let n=t.geo.attributes.position,s=t.geo.attributes.normal,r=t.prev;n.array=e.pos,s.array=e.nor,n.needsUpdate=s.needsUpdate=!0,t.prev=e,t.cuadros++,r&&i.wTela.postMessage({tipo:"devolver",bufs:[r.pos.buffer,r.nor.buffer]},[r.pos.buffer,r.nor.buffer]),t.visto||(t.visto=!0,Ct(i,""),t.info={productId:t.g.productId,size:t.g.size,piezas:[t.P.tipo],cuerpo:t.c.clave,tela:"cayendo",msVestir:t.msVestir,msSdf:t.msSdf,msHastaVerla:Math.round(performance.now()-t.t0)},fi(i,t.grupo,t.info),Ut(i,"prenda",t.info));return}if(e.tipo==="reposo"){t.reposo=!0,t.info={...t.info,tela:!0,tReposo:Math.round(e.t*100)/100,estirada:e.estirada,msFotograma:t.estado?Math.round(t.estado.ms*10)/10:null},i.ultimo=t.info,Ut(i,"prenda",t.info);return}if(e.tipo==="falta"){let{g:n,c:s,datos:r}=t;i.telaUrls.delete(t.url),i.telaCuerpos.delete(t.clave),_s(i),t.reintento||ku(i,n,s,r,i.token,!0);return}if(e.tipo==="error"){console.warn("No se pudo simular la tela.",e.mensaje);let n=t.g;_s(i),Ct(i,""),Ut(i,"prenda",{productId:n.productId,size:n.size,error:"tela"})}}async function ku(i,e,t,n,s,r){let a=n.tela,o=performance.now();if(fi(i,null),i.pedidoCuerpo)return;Ct(i,"Vistiendo la prenda\u2026"),i.wTela||(i.blobTela=URL.createObjectURL(new Blob([Pu],{type:"text/javascript"})),i.wTela=new Worker(i.blobTela),i.wTela.onmessage=v=>jg(i,v.data),i.wTela.onerror=v=>{console.warn("Worker de tela:",v.message);let x=i.vivo;if(x){let A=x.g;_s(i),Ct(i,""),Ut(i,"prenda",{productId:A.productId,size:A.size,error:"tela"})}});let l=Cu(t.tablas),c=Math.ceil((a.medidas.largo+.02)*10)/10,u=Math.ceil((a.medidas.manga+.05)*10)/10,h=t.clave+"|"+c+"|"+u,f=null,p=0;if(!i.telaCuerpos.has(h)){let v=Lu(l,c,u,.006,a.tienda);try{let x=await kg(i,t,v);f={...v,D:x.D},p=x.ms}catch(x){console.warn("No se pudo medir el cuerpo para la tela.",x),s===i.token&&(Ct(i,""),Ut(i,"prenda",{productId:e.productId,size:e.size,error:"tela"}));return}}if(s!==i.token||i.cuerpo!==t)return;let g=++i.telaId,y=Xg(i,a,e),m=new Xt;m.name=e.productId+"-"+e.size,m.add(y);let d=a.interior?qg(i,a.interior,t,l):null;d&&m.add(d),i.vivo={id:g,g:e,c:t,P:a,datos:n,clave:h,url:e.glbUrl,malla:y,grupo:m,interior:d,geo:y.geometry,prev:null,t0:o,msSdf:p,msVestir:0,visto:!1,cuadros:0,estado:null,reposo:!1,info:null,reintento:!!r},i.wTela.postMessage({tipo:"vestir",id:g,url:e.glbUrl,datos:i.telaUrls.has(e.glbUrl)?null:a,cuerpo:h,rejilla:f,marcas:l},f?[f.D.buffer]:[]),i.telaUrls.add(e.glbUrl),i.telaUrls.size>3&&i.telaUrls.delete(i.telaUrls.values().next().value),i.telaCuerpos.add(h),i.telaCuerpos.size>2&&i.telaCuerpos.delete(i.telaCuerpos.values().next().value)}function Zg(i){let e=i.canvas,t=new Or,n=new Ae,s=new Gt,r=new L,a=l=>{let c=e.getBoundingClientRect();n.set((l.clientX-c.left)/c.width*2-1,-((l.clientY-c.top)/c.height)*2+1),t.setFromCamera(n,i.camera)},o=l=>{let c=i.agarre;if(!(!c||l&&l.pointerId!==c.puntero)){i.agarre=null,i.controls.enabled=!0;try{e.releasePointerCapture(c.puntero)}catch{}i.vivo&&i.wTela&&i.wTela.postMessage({tipo:"soltar",id:i.vivo.id})}};e.addEventListener("pointerdown",l=>{let c=i.vivo;if(!c||!c.visto||l.button!==0||i.agarre)return;a(l);let u=t.intersectObject(c.malla,!1)[0];if(!u){i.ultimoAgarre="fuera de la prenda";return}let h=t.intersectObject(i.mannequin,!1)[0];if(h&&h.distance<u.distance){i.ultimoAgarre="tapado por el maniqu\xED";return}{let f=c.geo.attributes.position.array,p=c.P.tW,g=c.P.rgid,y=g.length,m=u.point,d=-1,v=1/0;for(let x=0;x<y;x++){let A=f[3*x]-m.x,P=f[3*x+1]-m.y,E=f[3*x+2]-m.z,w=A*A+P*P+E*E;w<v&&(v=w,d=x)}if(d>=0&&p&&p[g[d]]>=.5&&!(c.P.tienda&&c.P.tienda.pantalon)){i.ultimoAgarre="en el brazo";return}}i.ultimoAgarre="agarrada",l.stopImmediatePropagation(),l.preventDefault(),i.camera.getWorldDirection(r),s.setFromNormalAndCoplanarPoint(r,u.point),i.agarre={puntero:l.pointerId,origen:u.point.clone()};try{e.setPointerCapture(l.pointerId)}catch{}i.controls.enabled=!1,i.anim=null,i.controls.autoRotate&&(i.controls.autoRotate=!1,Ut(i,"giro",{activo:!1})),c.reposo=!1,c.info&&(c.info={...c.info,tela:"cayendo"},i.ultimo=c.info),i.wTela.postMessage({tipo:"agarrar",id:c.id,p:u.point.toArray()})},!0),e.addEventListener("pointermove",l=>{let c=i.agarre,u=i.vivo;if(!c||l.pointerId!==c.puntero||!u||(l.stopImmediatePropagation(),a(l),!t.ray.intersectPlane(s,r)))return;let h=r.clone().sub(c.origen);h.length()>.3&&h.setLength(.3),i.wTela.postMessage({tipo:"mover",id:u.id,p:r.copy(c.origen).add(h).toArray()})},!0),e.addEventListener("pointerup",o,!0),e.addEventListener("pointercancel",o,!0),i.soltarAgarre=()=>o(null)}function fi(i,e,t){i.grupo&&i.grupo!==e&&i.scene.remove(i.grupo),i.grupo=e,e&&(i.scene.add(e),Vu(i)),i.ultimo=t||{}}function Vu(i){i.grupo&&i.grupo.traverse(e=>{e.isMesh&&(e.visible=!e.userData.nombres.some(t=>i.piezasOff.has(t)))})}async function Gu(i){let e=i.prenda,t=++i.token;if(_s(i),!e||!e.glbUrl){fi(i,null);return}let n=i.cuerpo;if(!n)return;let s=n.clave+"|"+e.glbUrl;if(i.xfer.has(s)){let f=i.xfer.get(s);i.xfer.delete(s),i.xfer.set(s,f),fi(i,f.grupo,f.info),Ut(i,"prenda",{...f.info,desdeCache:!0});return}Ct(i,"Cargando la prenda\u2026");let r;try{await i.baseP,r=await Hu(i,e.glbUrl)}catch{t===i.token&&(Ct(i,""),fi(i,null),Ut(i,"prenda",{productId:e.productId,size:e.size,error:"carga"}));return}if(t!==i.token)return;if(r.tela){ku(i,e,n,r,t);return}Ct(i,"Ajustando la prenda a tu cuerpo\u2026");let a=()=>{let f=r.mallas.map(p=>({pos:p.pos.slice(),idx:p.idx?p.idx.slice():null}));return{partes:f,tr:f.flatMap(p=>p.idx?[p.pos.buffer,p.idx.buffer]:[p.pos.buffer])}},o=f=>{let p=f||!i.urlsEnWorker.has(e.glbUrl)?a():{partes:null,tr:[]},g=f||!i.cuerposEnWorker.has(n.clave)?n.tablas:null;return Fg(i,{tipo:"prenda",url:e.glbUrl,partes:p.partes,prenda:e.tipo||"dress",cuerpo:n.clave,tablas:g},p.tr)},l=performance.now(),c=await o(!1);if((c.falta||c.faltaCuerpo)&&(c=await o(!0)),c.tipo!=="error"&&(i.cuerposEnWorker.add(n.clave),i.cuerposEnWorker.size>4&&i.cuerposEnWorker.delete(i.cuerposEnWorker.values().next().value)),c.tipo==="error"){t===i.token&&(Ct(i,""),Ut(i,"prenda",{productId:e.productId,size:e.size,error:c.mensaje}));return}i.urlsEnWorker.add(e.glbUrl);let u=new Xt;u.name=e.productId+"-"+e.size,r.mallas.forEach((f,p)=>{let g=f.malla.geometry,y=new ft;for(let[x,A]of Object.entries(g.attributes))x!=="position"&&x!=="normal"&&y.setAttribute(x,A.clone());g.index&&y.setIndex(g.index.clone()),y.setAttribute("position",new Ye(c.pos[p],3)),y.setAttribute("normal",new Ye(c.nor[p],3)),y.computeBoundingSphere();let m=f.malla.material,d=[].concat(m).some(x=>x.transparent);for(let x of[].concat(m))x.envMapIntensity===1&&!x.userData.atelier&&(x.envMapIntensity=x.metalness>.8?1.15:x.transparent?.6:.55,x.userData.atelier=!0);let v=new at(y,m);v.name=f.malla.name,v.castShadow=!d,v.receiveShadow=!0,d&&(v.renderOrder=2),v.userData.nombres=f.nombres,u.add(v)});let h={productId:e.productId,size:e.size,piezas:[...new Set(r.mallas.flatMap(f=>f.nombres))],ms:c.ms,msTotal:Math.round(performance.now()-l),desplazamientoMax:c.desplazamientoMax,cuerpo:n.clave};for(i.xfer.set(s,{grupo:u,url:e.glbUrl,info:h});i.xfer.size>6;){let f=[...i.xfer.keys()].find(p=>i.xfer.get(p).grupo!==i.grupo&&p!==s);if(!f)break;tl(i.xfer.get(f).grupo),i.xfer.delete(f)}t!==i.token||i.cuerpo!==n||(Ct(i,""),fi(i,u,h),Ut(i,"prenda",h))}var Yg={LIMITES:zu,mount(i,e){i&&($?e&&($.opts={...$.opts,...e}):$=Ig(e),($.el!==i||!$.canvas.isConnected)&&(i.prepend($.estado),i.prepend($.canvas),$.el=i,$.ro&&$.ro.disconnect(),$.ro=new ResizeObserver(()=>Du($)),$.ro.observe(i),Du($)),$.raf||($.raf=requestAnimationFrame(t=>Fu($,t))))},setBody(i){if(!$)return;let e=zg(i);if($.cuerpo&&$.cuerpo.clave===e.clave&&!$.pedidoCuerpo||$.pedidoCuerpo&&$.pedidoCuerpo.clave===e.clave)return;let t=$.cuerpos.get(e.clave);if(t){$.pendiente=null,$.pedidoCuerpo=null,$.esperando=-1,Bu($,{...t,pedidas:e.pedidas,ajustadas:e.ajustadas});return}Og($,e)},setGarment(i){if(!$)return;let e=i&&$.prenda&&$.prenda.glbUrl===i.glbUrl&&$.prenda.productId===i.productId&&$.prenda.size===i.size;if($.prenda=i&&i.glbUrl?{productId:i.productId,size:i.size,glbUrl:i.glbUrl,tipo:i.tipo}:null,!$.prenda){$.token++,fi($,null);return}e&&$.grupo&&$.ultimo&&$.ultimo.cuerpo===($.cuerpo&&$.cuerpo.clave)||Gu($)},setFinish(i){$&&($.mannequin.material=i==="tech"?$.matTech:$.matChrome)},setView(i){$&&i in Iu&&Dg($,Iu[i])},togglePiece(i,e){$&&(e?$.piezasOff.delete(i):$.piezasOff.add(i),Vu($))},setAutoRotate(i){$&&($.anim=null,$.controls.autoRotate=!!i)},autoRotate(){return!!($&&$.controls.autoRotate)},zoom(i){if(!$)return;let e=$.camera,t=$.controls.target,n=e.position.clone().sub(t).multiplyScalar(i);n.setLength(ji.clamp(n.length(),$.controls.minDistance,$.controls.maxDistance)),e.position.copy(t).add(n)},async _verOriginal(i){if(!$||!$.prenda)return!1;let{gltf:e}=await Hu($,$.prenda.glbUrl);return i?($.grupo&&($.grupo.visible=!1),$.scene.add(e.scene)):($.scene.remove(e.scene),$.grupo&&($.grupo.visible=!0)),!0},_mirar(i,e,t,n,s=0,r=1.45){$&&($.anim=null,$.controls.autoRotate=!1,$.controls.target.set(i,e,t),$.sph.set(n,r,s),$.camera.position.setFromSpherical($.sph).add($.controls.target),$.controls.update())},info(){if(!$)return null;let i=$.cuerpo;return{cuerpo:i?{clave:i.clave,vals:i.vals,ms:i.ms,msCortes:i.msCortes,msTotal:i.msTotal,alto:i.alto}:null,prenda:$.ultimo,listo:!!i&&!$.ocupado}},_tela(){let i=$&&$.vivo;return i?{id:i.id,vista:i.visto,reposo:i.reposo,cuadros:i.cuadros,estado:i.estado,msVestir:i.msVestir,msSdf:i.msSdf,vertices:i.geo.attributes.position.count,agarrada:!!$.agarre,ultimoAgarre:$.ultimoAgarre||null}:null},dispose(){if(!$)return;let i=$;$=null,_s(i),i.wTela&&i.wTela.terminate(),i.blobTela&&URL.revokeObjectURL(i.blobTela);for(let e of i.matsTela.values())for(let t of e)t.normalMap&&t.normalMap.dispose(),t.dispose();cancelAnimationFrame(i.raf),i.ro&&i.ro.disconnect(),i.wCuerpo.terminate(),i.wPrenda.terminate(),i.blobs.forEach(e=>URL.revokeObjectURL(e));for(let e of i.cuerpos.values())e.geo.dispose();for(let e of i.xfer.values())tl(e.grupo);for(let e of i.gltfs.values())e.p.then(({gltf:t})=>t.scene.traverse(n=>{if(n.isMesh){n.geometry.dispose();for(let s of[].concat(n.material)){for(let r of Object.values(s))r&&r.isTexture&&r.dispose();s.dispose()}}})).catch(()=>{});i.matChrome.dispose(),i.matTech.dispose(),i.floor.geometry.dispose(),i.floor.material.dispose(),i.scene.environment&&i.scene.environment.dispose(),i.controls.dispose(),i.renderer.dispose(),i.canvas.remove(),i.estado.remove()}};window.VisorAtelier=Yg;})();
