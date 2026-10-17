(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=35899,S=1021,C=1022,w=1023,T=1026,E=1027,D=1028,ee=1029,O=1030,k=1031,te=1033,A=33776,ne=33777,j=33778,re=33779,M=35840,ie=35841,ae=35842,oe=35843,se=36196,ce=37492,le=37496,ue=37488,N=37489,de=37490,fe=37491,pe=37808,me=37809,he=37810,ge=37811,_e=37812,ve=37813,ye=37814,be=37815,xe=37816,Se=37817,Ce=37818,we=37819,Te=37820,Ee=37821,De=36492,Oe=36494,ke=36495,Ae=36283,je=36284,Me=36285,Ne=36286,Pe=2300,P=2301,Fe=2302,Ie=2303,Le=2400,F=2401,Re=2402,ze=3200,Be=`srgb`,Ve=`srgb-linear`,He=`linear`,Ue=`srgb`,We=7680,Ge=35044,Ke=35048,qe=2e3;function Je(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ye(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Xe(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Ze(){let e=Xe(`canvas`);return e.style.display=`block`,e}var Qe={};function $e(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function et(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function I(...e){e=et(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function L(...e){e=et(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function tt(...e){let t=e.join(` `);t in Qe||(Qe[t]=!0,I(...e))}function nt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var rt={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},it=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},at=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),ot=1234567,st=Math.PI/180,ct=180/Math.PI;function lt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(at[e&255]+at[e>>8&255]+at[e>>16&255]+at[e>>24&255]+`-`+at[t&255]+at[t>>8&255]+`-`+at[t>>16&15|64]+at[t>>24&255]+`-`+at[n&63|128]+at[n>>8&255]+`-`+at[n>>16&255]+at[n>>24&255]+at[r&255]+at[r>>8&255]+at[r>>16&255]+at[r>>24&255]).toLowerCase()}function R(e,t,n){return Math.max(t,Math.min(n,e))}function ut(e,t){return(e%t+t)%t}function dt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function ft(e,t,n){return e===t?0:(n-e)/(t-e)}function pt(e,t,n){return(1-n)*e+n*t}function mt(e,t,n,r){return pt(e,t,1-Math.exp(-n*r))}function ht(e,t=1){return t-Math.abs(ut(e,t*2)-t)}function gt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function _t(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function vt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function yt(e,t){return e+Math.random()*(t-e)}function bt(e){return e*(.5-Math.random())}function xt(e){e!==void 0&&(ot=e);let t=ot+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function St(e){return e*st}function Ct(e){return e*ct}function wt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Tt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Et(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Dt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:I(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Ot(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function kt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var At={DEG2RAD:st,RAD2DEG:ct,generateUUID:lt,clamp:R,euclideanModulo:ut,mapLinear:dt,inverseLerp:ft,lerp:pt,damp:mt,pingpong:ht,smoothstep:gt,smootherstep:_t,randInt:vt,randFloat:yt,randFloatSpread:bt,seededRandom:xt,degToRad:St,radToDeg:Ct,isPowerOfTwo:wt,ceilPowerOfTwo:Tt,floorPowerOfTwo:Et,setQuaternionFromProperEuler:Dt,normalize:kt,denormalize:Ot},z=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=R(this.x,e.x,t.x),this.y=R(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=R(this.x,e,t),this.y=R(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(R(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(R(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},jt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:I(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(R(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=R(this.x,e.x,t.x),this.y=R(this.y,e.y,t.y),this.z=R(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=R(this.x,e,t),this.y=R(this.y,e,t),this.z=R(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(R(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Mt.copy(this).projectOnVector(e),this.sub(Mt)}reflect(e){return this.sub(Mt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(R(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Mt=new B,Nt=new jt,Pt=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return tt(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Ft.makeScale(e,t)),this}rotate(e){return tt(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Ft.makeRotation(-e)),this}translate(e,t){return tt(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Ft.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ft=new Pt,It=new Pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lt=new Pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rt(){let e={enabled:!0,workingColorSpace:Ve,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Bt(e.r),e.g=Bt(e.g),e.b=Bt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Vt(e.r),e.g=Vt(e.g),e.b=Vt(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?He:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return tt(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return tt(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Ve]:{primaries:t,whitePoint:r,transfer:He,toXYZ:It,fromXYZ:Lt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Be},outputColorSpaceConfig:{drawingBufferColorSpace:Be}},[Be]:{primaries:t,whitePoint:r,transfer:Ue,toXYZ:It,fromXYZ:Lt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Be}}}),e}var zt=Rt();function Bt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Vt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Ht,Ut=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ht===void 0&&(Ht=Xe(`canvas`)),Ht.width=e.width,Ht.height=e.height;let t=Ht.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Ht}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Xe(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Bt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Bt(t[e]/255)*255):t[e]=Bt(t[e]);return{data:t,width:e.width,height:e.height}}return I(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Wt=0,Gt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Wt++}),this.uuid=lt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Kt(r[t].image)):e.push(Kt(r[t]))}else e=Kt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Kt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Ut.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(I(`Texture: Unable to serialize Texture.`),{})}var qt=0,Jt=new B,Yt=class r extends it{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=w,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qt++}),this.uuid=lt(),this.name=``,this.source=new Gt(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new z(0,0),this.repeat=new z(1,1),this.center=new z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Jt).x}get height(){return this.source.getSize(Jt).y}get depth(){return this.source.getSize(Jt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){I(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?I(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Yt.DEFAULT_IMAGE=null,Yt.DEFAULT_MAPPING=300,Yt.DEFAULT_ANISOTROPY=1;var Xt=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=R(this.x,e.x,t.x),this.y=R(this.y,e.y,t.y),this.z=R(this.z,e.z,t.z),this.w=R(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=R(this.x,e,t),this.y=R(this.y,e,t),this.z=R(this.z,e,t),this.w=R(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(R(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Zt=class extends it{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Xt(0,0,e,t),this.scissorTest=!1,this.viewport=new Xt(0,0,e,t),this.textures=[];let r=new Yt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:o,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Gt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Qt=class extends Zt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},$t=class extends Yt{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},en=class extends Yt{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},tn=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/nn.setFromMatrixColumn(e,0).length(),i=1/nn.setFromMatrixColumn(e,1).length(),a=1/nn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(an,e,on)}lookAt(e,t,n){let r=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),sn.crossVectors(n,ln),sn.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),sn.crossVectors(n,ln)),sn.normalize(),cn.crossVectors(ln,sn),r[0]=sn.x,r[4]=cn.x,r[8]=ln.x,r[1]=sn.y,r[5]=cn.y,r[9]=ln.y,r[2]=sn.z,r[6]=cn.z,r[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],ee=r[13],O=r[2],k=r[6],te=r[10],A=r[14],ne=r[3],j=r[7],re=r[11],M=r[15];return i[0]=a*x+o*T+s*O+c*ne,i[4]=a*S+o*E+s*k+c*j,i[8]=a*C+o*D+s*te+c*re,i[12]=a*w+o*ee+s*A+c*M,i[1]=l*x+u*T+d*O+f*ne,i[5]=l*S+u*E+d*k+f*j,i[9]=l*C+u*D+d*te+f*re,i[13]=l*w+u*ee+d*A+f*M,i[2]=p*x+m*T+h*O+g*ne,i[6]=p*S+m*E+h*k+g*j,i[10]=p*C+m*D+h*te+g*re,i[14]=p*w+m*ee+h*A+g*M,i[3]=_*x+v*T+y*O+b*ne,i[7]=_*S+v*E+y*k+b*j,i[11]=_*C+v*D+y*te+b*re,i[15]=_*w+v*ee+y*A+b*M,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,ee=d*g-f*h,O=_*ee-v*D+y*E+b*T-x*w+S*C;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/O;return e[0]=(o*ee-s*D+c*E)*k,e[1]=(r*D-n*ee-i*E)*k,e[2]=(m*S-h*x+g*b)*k,e[3]=(d*x-u*S-f*b)*k,e[4]=(s*T-a*ee-c*w)*k,e[5]=(t*ee-r*T+i*w)*k,e[6]=(h*y-p*S-g*v)*k,e[7]=(l*S-d*y+f*v)*k,e[8]=(a*D-o*T+c*C)*k,e[9]=(n*T-t*D-i*C)*k,e[10]=(p*x-m*y+g*_)*k,e[11]=(u*y-l*x-f*_)*k,e[12]=(o*w-a*E-s*C)*k,e[13]=(t*E-n*w+r*C)*k,e[14]=(m*v-p*b-h*_)*k,e[15]=(l*b-u*v+d*_)*k,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=nn.set(r[0],r[1],r[2]).length(),o=nn.set(r[4],r[5],r[6]).length(),s=nn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),rn.copy(this);let c=1/a,l=1/o,u=1/s;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=l,rn.elements[5]*=l,rn.elements[6]*=l,rn.elements[8]*=u,rn.elements[9]*=u,rn.elements[10]*=u,t.setFromRotationMatrix(rn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=qe,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=qe,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},nn=new B,rn=new tn,an=new B(0,0,0),on=new B(1,1,1),sn=new B,cn=new B,ln=new B,un=new tn,dn=new jt,fn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(R(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-R(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(R(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-R(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(R(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-R(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:I(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return un.makeRotationFromQuaternion(e),this.setFromRotationMatrix(un,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dn.setFromEuler(this),this.setFromQuaternion(dn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fn.DEFAULT_ORDER=`XYZ`;var pn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},mn=0,hn=new B,gn=new jt,_n=new tn,vn=new B,yn=new B,bn=new B,xn=new jt,Sn=new B(1,0,0),Cn=new B(0,1,0),wn=new B(0,0,1),Tn={type:`added`},En={type:`removed`},Dn={type:`childadded`,child:null},On={type:`childremoved`,child:null},kn=class e extends it{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mn++}),this.uuid=lt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new B,n=new fn,r=new jt,i=new B(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new tn},normalMatrix:{value:new Pt}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gn.setFromAxisAngle(e,t),this.quaternion.multiply(gn),this}rotateOnWorldAxis(e,t){return gn.setFromAxisAngle(e,t),this.quaternion.premultiply(gn),this}rotateX(e){return this.rotateOnAxis(Sn,e)}rotateY(e){return this.rotateOnAxis(Cn,e)}rotateZ(e){return this.rotateOnAxis(wn,e)}translateOnAxis(e,t){return hn.copy(e).applyQuaternion(this.quaternion),this.position.add(hn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sn,e)}translateY(e){return this.translateOnAxis(Cn,e)}translateZ(e){return this.translateOnAxis(wn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?vn.copy(e):vn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),yn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(yn,vn,this.up):_n.lookAt(vn,yn,this.up),this.quaternion.setFromRotationMatrix(_n),r&&(_n.extractRotation(r.matrixWorld),gn.setFromRotationMatrix(_n),this.quaternion.premultiply(gn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(L(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tn),Dn.child=e,this.dispatchEvent(Dn),Dn.child=null):L(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(En),On.child=e,this.dispatchEvent(On),On.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_n.multiply(e.parent.matrixWorld)),e.applyMatrix4(_n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tn),Dn.child=e,this.dispatchEvent(Dn),Dn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yn,e,bn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yn,xn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};kn.DEFAULT_UP=new B(0,1,0),kn.DEFAULT_MATRIX_AUTO_UPDATE=!0,kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var An=class extends kn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},jn={type:`move`},Mn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new An,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new An,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new An,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new An;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Nn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},Fn={h:0,s:0,l:0};function In(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var V=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Be){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,zt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=zt.workingColorSpace){return this.r=e,this.g=t,this.b=n,zt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=zt.workingColorSpace){if(e=ut(e,1),t=R(t,0,1),n=R(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=In(i,r,e+1/3),this.g=In(i,r,e),this.b=In(i,r,e-1/3)}return zt.colorSpaceToWorking(this,r),this}setStyle(e,t=Be){function n(t){t!==void 0&&parseFloat(t)<1&&I(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:I(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);I(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Be){let n=Nn[e.toLowerCase()];return n===void 0?I(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bt(e.r),this.g=Bt(e.g),this.b=Bt(e.b),this}copyLinearToSRGB(e){return this.r=Vt(e.r),this.g=Vt(e.g),this.b=Vt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Be){return zt.workingToColorSpace(Ln.copy(this),e),Math.round(R(Ln.r*255,0,255))*65536+Math.round(R(Ln.g*255,0,255))*256+Math.round(R(Ln.b*255,0,255))}getHexString(e=Be){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=zt.workingColorSpace){zt.workingToColorSpace(Ln.copy(this),t);let n=Ln.r,r=Ln.g,i=Ln.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=zt.workingColorSpace){return zt.workingToColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=Be){zt.workingToColorSpace(Ln.copy(this),e);let t=Ln.r,n=Ln.g,r=Ln.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Pn),this.setHSL(Pn.h+e,Pn.s+t,Pn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pn),e.getHSL(Fn);let n=pt(Pn.h,Fn.h,t),r=pt(Pn.s,Fn.s,t),i=pt(Pn.l,Fn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ln=new V;V.NAMES=Nn;var Rn=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new V(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},zn=class extends kn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Bn=new B,Vn=new B,Hn=new B,Un=new B,Wn=new B,Gn=new B,Kn=new B,qn=new B,Jn=new B,Yn=new B,Xn=new Xt,Zn=new Xt,Qn=new Xt,$n=class e{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Bn.subVectors(e,t),r.cross(Bn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Bn.subVectors(r,t),Vn.subVectors(n,t),Hn.subVectors(e,t);let a=Bn.dot(Bn),o=Bn.dot(Vn),s=Bn.dot(Hn),c=Vn.dot(Vn),l=Vn.dot(Hn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Un)!==null&&Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Un)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Un.x),s.addScaledVector(a,Un.y),s.addScaledVector(o,Un.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Xn.setScalar(0),Zn.setScalar(0),Qn.setScalar(0),Xn.fromBufferAttribute(e,t),Zn.fromBufferAttribute(e,n),Qn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Xn,i.x),a.addScaledVector(Zn,i.y),a.addScaledVector(Qn,i.z),a}static isFrontFacing(e,t,n,r){return Bn.subVectors(n,t),Vn.subVectors(e,t),Bn.cross(Vn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),Bn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Wn.subVectors(r,n),Gn.subVectors(i,n),qn.subVectors(e,n);let s=Wn.dot(qn),c=Gn.dot(qn);if(s<=0&&c<=0)return t.copy(n);Jn.subVectors(e,r);let l=Wn.dot(Jn),u=Gn.dot(Jn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Wn,a);Yn.subVectors(e,i);let f=Wn.dot(Yn),p=Gn.dot(Yn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Gn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Kn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Kn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Wn,a).addScaledVector(Gn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},er=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(nr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(nr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=nr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,nr):nr.fromBufferAttribute(r,t),nr.applyMatrix4(e.matrixWorld),this.expandByPoint(nr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),rr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),rr.copy(e.boundingBox)),rr.applyMatrix4(e.matrixWorld),this.union(rr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nr),nr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ur),dr.subVectors(this.max,ur),ir.subVectors(e.a,ur),ar.subVectors(e.b,ur),or.subVectors(e.c,ur),sr.subVectors(ar,ir),cr.subVectors(or,ar),lr.subVectors(ir,or);let t=[0,-sr.z,sr.y,0,-cr.z,cr.y,0,-lr.z,lr.y,sr.z,0,-sr.x,cr.z,0,-cr.x,lr.z,0,-lr.x,-sr.y,sr.x,0,-cr.y,cr.x,0,-lr.y,lr.x,0];return!mr(t,ir,ar,or,dr)||(t=[1,0,0,0,1,0,0,0,1],!mr(t,ir,ar,or,dr))?!1:(fr.crossVectors(sr,cr),t=[fr.x,fr.y,fr.z],mr(t,ir,ar,or,dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tr)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},tr=[new B,new B,new B,new B,new B,new B,new B,new B],nr=new B,rr=new er,ir=new B,ar=new B,or=new B,sr=new B,cr=new B,lr=new B,ur=new B,dr=new B,fr=new B,pr=new B;function mr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){pr.fromArray(e,a);let o=i.x*Math.abs(pr.x)+i.y*Math.abs(pr.y)+i.z*Math.abs(pr.z),s=t.dot(pr),c=n.dot(pr),l=r.dot(pr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var hr=gr();function gr(){let e=new ArrayBuffer(4),t=new Float32Array(e),n=new Uint32Array(e),r=new Uint32Array(512),i=new Uint32Array(512);for(let e=0;e<256;++e){let t=e-127;t<-27?(r[e]=0,r[e|256]=32768,i[e]=24,i[e|256]=24):t<-14?(r[e]=1024>>-t-14,r[e|256]=1024>>-t-14|32768,i[e]=-t-1,i[e|256]=-t-1):t<=15?(r[e]=t+15<<10,r[e|256]=t+15<<10|32768,i[e]=13,i[e|256]=13):t<128?(r[e]=31744,r[e|256]=64512,i[e]=24,i[e|256]=24):(r[e]=31744,r[e|256]=64512,i[e]=13,i[e|256]=13)}let a=new Uint32Array(2048),o=new Uint32Array(64),s=new Uint32Array(64);for(let e=1;e<1024;++e){let t=e<<13,n=0;for(;!(t&8388608);)t<<=1,n-=8388608;t&=-8388609,n+=947912704,a[e]=t|n}for(let e=1024;e<2048;++e)a[e]=939524096+(e-1024<<13);for(let e=1;e<31;++e)o[e]=e<<23;o[31]=1199570944,o[32]=2147483648;for(let e=33;e<63;++e)o[e]=2147483648+(e-32<<23);o[63]=3347054592;for(let e=1;e<64;++e)e!==32&&(s[e]=1024);return{floatView:t,uint32View:n,baseTable:r,shiftTable:i,mantissaTable:a,exponentTable:o,offsetTable:s}}function _r(e){Math.abs(e)>65504&&I(`DataUtils.toHalfFloat(): Value out of range.`),e=R(e,-65504,65504),hr.floatView[0]=e;let t=hr.uint32View[0],n=t>>23&511;return hr.baseTable[n]+((t&8388607)>>hr.shiftTable[n])}function vr(e){let t=e>>10;return hr.uint32View[0]=hr.mantissaTable[hr.offsetTable[t]+(e&1023)]+hr.exponentTable[t],hr.floatView[0]}var yr=class{static toHalfFloat(e){return _r(e)}static fromHalfFloat(e){return vr(e)}},br=new B,xr=new z,Sr=0,Cr=class extends it{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ge,this.updateRanges=[],this.gpuType=h,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xr.fromBufferAttribute(this,t),xr.applyMatrix3(e),this.setXY(t,xr.x,xr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyMatrix3(e),this.setXYZ(t,br.x,br.y,br.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyMatrix4(e),this.setXYZ(t,br.x,br.y,br.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyNormalMatrix(e),this.setXYZ(t,br.x,br.y,br.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.transformDirection(e),this.setXYZ(t,br.x,br.y,br.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ot(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=kt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ot(t,this.array)),t}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ot(t,this.array)),t}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ot(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ot(t,this.array)),t}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),r=kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),r=kt(r,this.array),i=kt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},wr=class extends Cr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Tr=class extends Cr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Er=class extends Cr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Dr=new er,Or=new B,kr=new B,Ar=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Dr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Or.subVectors(e,this.center);let t=Or.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Or,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Or.copy(e.center).add(kr)),this.expandByPoint(Or.copy(e.center).sub(kr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},jr=0,Mr=new tn,Nr=new kn,Pr=new B,Fr=new er,Ir=new er,Lr=new B,Rr=class e extends it{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jr++}),this.uuid=lt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Je(e)?Tr:wr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Pt().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Mr.makeRotationFromQuaternion(e),this.applyMatrix4(Mr),this}rotateX(e){return Mr.makeRotationX(e),this.applyMatrix4(Mr),this}rotateY(e){return Mr.makeRotationY(e),this.applyMatrix4(Mr),this}rotateZ(e){return Mr.makeRotationZ(e),this.applyMatrix4(Mr),this}translate(e,t,n){return Mr.makeTranslation(e,t,n),this.applyMatrix4(Mr),this}scale(e,t,n){return Mr.makeScale(e,t,n),this.applyMatrix4(Mr),this}lookAt(e){return Nr.lookAt(e),Nr.updateMatrix(),this.applyMatrix4(Nr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Er(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&I(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new er);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)L(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Fr.setFromBufferAttribute(n),this.morphTargetsRelative?(Lr.addVectors(this.boundingBox.min,Fr.min),this.boundingBox.expandByPoint(Lr),Lr.addVectors(this.boundingBox.max,Fr.max),this.boundingBox.expandByPoint(Lr)):(this.boundingBox.expandByPoint(Fr.min),this.boundingBox.expandByPoint(Fr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&L(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ar);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)L(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new B,1/0);else if(e){let n=this.boundingSphere.center;if(Fr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ir.setFromBufferAttribute(n),this.morphTargetsRelative?(Lr.addVectors(Fr.min,Ir.min),Fr.expandByPoint(Lr),Lr.addVectors(Fr.max,Ir.max),Fr.expandByPoint(Lr)):(Fr.expandByPoint(Ir.min),Fr.expandByPoint(Ir.max))}Fr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Lr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Lr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Lr.fromBufferAttribute(a,t),o&&(Pr.fromBufferAttribute(e,t),Lr.add(Pr)),r=Math.max(r,n.distanceToSquared(Lr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&L(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){L(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Cr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new B,s[e]=new B;let c=new B,l=new B,u=new B,d=new z,f=new z,p=new z,m=new B,h=new B;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new B,y=new B,b=new B,x=new B;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Cr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new B,i=new B,a=new B,o=new B,s=new B,c=new B,l=new B,u=new B;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lr.fromBufferAttribute(e,t),Lr.normalize(),e.setXYZ(t,Lr.x,Lr.y,Lr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Cr(a,r,i)}if(this.index===null)return I(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},zr=new B,Br=new B,Vr=new Pt,Hr=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=zr.subVectors(n,t).cross(Br.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(zr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Vr.getNormalMatrix(e),r=this.coplanarPoint(zr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Ur=0,Wr=class extends it{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ur++}),this.uuid=lt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new V(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=We,this.stencilZFail=We,this.stencilZPass=We,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){I(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?I(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new V().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Hr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new z().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new z().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Gr=new B,Kr=new B,qr=new B,Jr=new B,Yr=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Gr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gr.copy(this.origin).addScaledVector(this.direction,t),Gr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Kr.copy(e).add(t).multiplyScalar(.5),qr.copy(t).sub(e).normalize(),Jr.copy(this.origin).sub(Kr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(qr),o=Jr.dot(this.direction),s=-Jr.dot(qr),c=Jr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Kr).addScaledVector(qr,d),f}intersectSphere(e,t){if(e.radius<0)return null;Gr.subVectors(e.center,this.origin);let n=Gr.dot(this.direction),r=Gr.dot(Gr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Gr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,ee,O,k,te,A,ne;if(y>=b&&y>=x?(w=s,D=u,k=p,ne=g,s>=0?(S=c,C=l,T=d,E=f,ee=m,O=h,te=_,A=v):(S=l,C=c,T=f,E=d,ee=h,O=m,te=v,A=_)):b>=x?(w=c,D=d,k=m,ne=_,c>=0?(S=l,C=s,T=f,E=u,ee=h,O=p,te=v,A=g):(S=s,C=l,T=u,E=f,ee=p,O=h,te=g,A=v)):(w=l,D=f,k=h,ne=v,l>=0?(S=s,C=c,T=u,E=d,ee=p,O=m,te=g,A=_):(S=c,C=s,T=d,E=u,ee=m,O=p,te=_,A=g)),w===0)return null;let j=S/w,re=C/w,M=1/w,ie=T-j*D,ae=E-re*D,oe=ee-j*k,se=O-re*k,ce=te-j*ne,le=A-re*ne,ue=ce*se-le*oe,N=ie*le-ae*ce,de=oe*ae-se*ie;if(r){if(ue<0||N<0||de<0)return null}else if((ue<0||N<0||de<0)&&(ue>0||N>0||de>0))return null;let fe=ue+N+de;if(fe===0)return null;let pe=M*(ue*D+N*k+de*ne);return(fe>0?pe<0:pe>0)?null:this.at(pe/fe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xr=class extends Wr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new V(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Zr=new tn,Qr=new Yr,$r=new Ar,ei=new B,ti=new B,ni=new B,ri=new B,ii=new B,ai=new B,oi=new B,si=new B,H=class extends kn{constructor(e=new Rr,t=new Xr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){ai.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(ii.fromBufferAttribute(s,e),a?ai.addScaledVector(ii,r):ai.addScaledVector(ii.sub(t),r))}t.add(ai)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(i),Qr.copy(e.ray).recast(e.near),!($r.containsPoint(Qr.origin)===!1&&(Qr.intersectSphere($r,ei)===null||Qr.origin.distanceToSquared(ei)>(e.far-e.near)**2))&&(Zr.copy(i).invert(),Qr.copy(e.ray).applyMatrix4(Zr),(n.boundingBox===null||Qr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Qr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=li(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=li(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=li(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=li(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function ci(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;si.copy(s),si.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(si);return l<n.near||l>n.far?null:{distance:l,point:si.clone(),object:e}}function li(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,ti),e.getVertexPosition(c,ni),e.getVertexPosition(l,ri);let u=ci(e,t,n,r,ti,ni,ri,oi);if(u){let e=new B;$n.getBarycoord(oi,ti,ni,ri,e),i&&(u.uv=$n.getInterpolatedAttribute(i,s,c,l,e,new z)),a&&(u.uv1=$n.getInterpolatedAttribute(a,s,c,l,e,new z)),o&&(u.normal=$n.getInterpolatedAttribute(o,s,c,l,e,new B),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new B,materialIndex:0};$n.getNormal(ti,ni,ri,t.normal),u.face=t,u.barycoord=e}return u}var ui=class extends Yt{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},di=class extends Cr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},fi=new tn,pi=new tn,mi=[],hi=new er,gi=new tn,_i=new H,vi=new Ar,yi=class extends H{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new di(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,gi)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new er),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fi),hi.copy(e.boundingBox).applyMatrix4(fi),this.boundingBox.union(hi)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ar),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fi),vi.copy(e.boundingSphere).applyMatrix4(fi),this.boundingSphere.union(vi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(_i.geometry=this.geometry,_i.material=this.material,_i.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vi.copy(this.boundingSphere),vi.applyMatrix4(n),e.ray.intersectsSphere(vi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,fi),pi.multiplyMatrices(n,fi),_i.matrixWorld=pi,_i.raycast(e,mi);for(let e=0,n=mi.length;e<n;e++){let n=mi[e];n.instanceId=i,n.object=this,t.push(n)}mi.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new di(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new ui(new Float32Array(r*this.count),r,this.count,D,h));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},bi=new Ar,xi=new z(.5,.5),Si=new B,Ci=class{constructor(e=new Hr,t=new Hr,n=new Hr,r=new Hr,i=new Hr,a=new Hr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=qe,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(e){return bi.center.set(0,0,0),bi.radius=.7071067811865476+xi.distanceTo(e.center),bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Si.x=r.normal.x>0?e.max.x:e.min.x,Si.y=r.normal.y>0?e.max.y:e.min.y,Si.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Si)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},wi=class extends Wr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new V(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ti=new tn,Ei=new Yr,Di=new Ar,Oi=new B,ki=class extends kn{constructor(e=new Rr,t=new wi){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Di.copy(n.boundingSphere),Di.applyMatrix4(r),Di.radius+=i,e.ray.intersectsSphere(Di)===!1)return;Ti.copy(r).invert(),Ei.copy(e.ray).applyMatrix4(Ti);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Oi.fromBufferAttribute(l,n),Ai(Oi,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Oi.fromBufferAttribute(l,a),Ai(Oi,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Ai(e,t,n,r,i,a,o){let s=Ei.distanceSqToPoint(e);if(s<n){let n=new B;Ei.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ji=class extends Yt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Mi=class extends Yt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ni=class extends Yt{constructor(e,t,n=m,i,a,o,s=r,c=r,l,u=T,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Pi=class extends Ni{constructor(e,t=m,n=301,i,a,o=r,s=r,c,l=T){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Fi=class extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ii=class e extends Rr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Er(c,3)),this.setAttribute(`normal`,new Er(l,3)),this.setAttribute(`uv`,new Er(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new B;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Li=class e extends Rr{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new B,g=new B;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new Er(o,3)),this.setAttribute(`normal`,new Er(s,3)),this.setAttribute(`uv`,new Er(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Ri=class e extends Rr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new B,l=new z;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new Er(a,3)),this.setAttribute(`normal`,new Er(o,3)),this.setAttribute(`uv`,new Er(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},zi=class e extends Rr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Er(u,3)),this.setAttribute(`normal`,new Er(d,3)),this.setAttribute(`uv`,new Er(f,2));function _(){let a=new B,_=new B,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new z,m=new B,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Bi=class e extends zi{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Vi=class e extends Rr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new Er(i,3)),this.setAttribute(`normal`,new Er(i.slice(),3)),this.setAttribute(`uv`,new Er(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new B,r=new B,i=new B;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new B;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new B;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new B,t=new B,n=new B,r=new B,o=new z,s=new z,c=new z;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Hi=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){I(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new z:new B);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new B,r=[],i=[],a=[],o=new B,s=new tn;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new B)}i[0]=new B,a[0]=new B;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(R(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(R(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ui=class extends Hi{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new z){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Wi=class extends Ui{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function Gi(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Ki=new B,qi=new B,Ji=new Gi,Yi=new Gi,Xi=new Gi,Zi=class extends Hi{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new B){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(qi.subVectors(r[0],r[1]).add(r[0]),c=qi);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Ki.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Ki),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Ji.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Yi.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Xi.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Ji.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Yi.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Xi.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Ji.calc(s),Yi.calc(s),Xi.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new B().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Qi(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function $i(e,t){let n=1-e;return n*n*t}function ea(e,t){return 2*(1-e)*e*t}function ta(e,t){return e*e*t}function na(e,t,n,r){return $i(e,t)+ea(e,n)+ta(e,r)}function ra(e,t){let n=1-e;return n*n*n*t}function ia(e,t){let n=1-e;return 3*n*n*e*t}function aa(e,t){return 3*(1-e)*e*e*t}function oa(e,t){return e*e*e*t}function sa(e,t,n,r,i){return ra(e,t)+ia(e,n)+aa(e,r)+oa(e,i)}var ca=class extends Hi{constructor(e=new z,t=new z,n=new z,r=new z){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new z){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(sa(e,r.x,i.x,a.x,o.x),sa(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},la=class extends Hi{constructor(e=new B,t=new B,n=new B,r=new B){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new B){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(sa(e,r.x,i.x,a.x,o.x),sa(e,r.y,i.y,a.y,o.y),sa(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ua=class extends Hi{constructor(e=new z,t=new z){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new z){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},da=class extends Hi{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new B){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fa=class extends Hi{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(na(e,r.x,i.x,a.x),na(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pa=class extends Hi{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(na(e,r.x,i.x,a.x),na(e,r.y,i.y,a.y),na(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ma=class extends Hi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new z){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Qi(o,s.x,c.x,l.x,u.x),Qi(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new z().fromArray(n))}return this}},ha=Object.freeze({__proto__:null,ArcCurve:Wi,CatmullRomCurve3:Zi,CubicBezierCurve:ca,CubicBezierCurve3:la,EllipseCurve:Ui,LineCurve:ua,LineCurve3:da,QuadraticBezierCurve:fa,QuadraticBezierCurve3:pa,SplineCurve:ma}),ga=class extends Hi{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new ha[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new ha[n.type]().fromJSON(n))}return this}},_a=class extends ga{constructor(e){super(),this.type=`Path`,this.currentPoint=new z,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ua(this.currentPoint.clone(),new z(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new fa(this.currentPoint.clone(),new z(e,t),new z(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new ca(this.currentPoint.clone(),new z(e,t),new z(n,r),new z(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new ma([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new Ui(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},va=class extends _a{constructor(e){super(e),this.uuid=lt(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new _a().fromJSON(n))}return this}};function ya(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=ba(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=Da(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return Sa(a,o,n,s,c,l,0),o}function ba(e,t,n,r,i){let a;if(i===Za(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=Ja(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=Ja(i/r|0,e[i],e[i+1],a);return a&&Ba(a,a.next)&&(Ya(a),a=a.next),a}function xa(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(Ba(n,n.next)||za(n.prev,n,n.next)===0)){if(Ya(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function Sa(e,t,n,r,i,a,o){if(!e)return;!o&&a&&Ma(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?wa(e,r,i,a):Ca(e))t.push(c.i,e.i,l.i),Ya(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=Ta(xa(e),t),Sa(e,t,n,r,i,a,2)):o===2&&Ea(e,t,n,r,i,a):Sa(xa(e),t,n,r,i,a,1);break}}}function Ca(e){let t=e.prev,n=e,r=e.next;if(za(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&La(i,s,a,c,o,l,m.x,m.y)&&za(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function wa(e,t,n,r){let i=e.prev,a=e,o=e.next;if(za(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=Pa(p,m,t,n,r),v=Pa(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&La(s,u,c,d,l,f,y.x,y.y)&&za(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&La(s,u,c,d,l,f,b.x,b.y)&&za(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&La(s,u,c,d,l,f,y.x,y.y)&&za(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&La(s,u,c,d,l,f,b.x,b.y)&&za(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Ta(e,t){let n=e;do{let r=n.prev,i=n.next.next;!Ba(r,i)&&Va(r,n,n.next,i)&&Ga(r,i)&&Ga(i,r)&&(t.push(r.i,n.i,i.i),Ya(n),Ya(n.next),n=e=i),n=n.next}while(n!==e);return xa(n)}function Ea(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&Ra(o,e)){let s=qa(o,e);o=xa(o,o.next),s=xa(s,s.next),Sa(o,t,n,r,i,a,0),Sa(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function Da(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=ba(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(Fa(o))}i.sort(Oa);for(let e=0;e<i.length;e++)n=ka(i[e],n);return n}function Oa(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function ka(e,t){let n=Aa(e,t);if(!n)return t;let r=qa(n,e);return xa(r,r.next),xa(n,n.next)}function Aa(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(Ba(e,n))return n;do{if(Ba(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&Ia(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);Ga(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&ja(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function ja(e,t){return za(e.prev,e,t.prev)<0&&za(t.next,e,e.next)<0}function Ma(e,t,n,r){let i=e;do i.z===0&&(i.z=Pa(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,Na(i)}function Na(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function Pa(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Fa(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Ia(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function La(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&Ia(e,t,n,r,i,a,o,s)}function Ra(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Wa(e,t)&&(Ga(e,t)&&Ga(t,e)&&Ka(e,t)&&(za(e.prev,e,t.prev)||za(e,t.prev,t))||Ba(e,t)&&za(e.prev,e,e.next)>0&&za(t.prev,t,t.next)>0)}function za(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Ba(e,t){return e.x===t.x&&e.y===t.y}function Va(e,t,n,r){let i=Ua(za(e,t,n)),a=Ua(za(e,t,r)),o=Ua(za(n,r,e)),s=Ua(za(n,r,t));return!!(i!==a&&o!==s||i===0&&Ha(e,n,t)||a===0&&Ha(e,r,t)||o===0&&Ha(n,e,r)||s===0&&Ha(n,t,r))}function Ha(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Ua(e){return e>0?1:e<0?-1:0}function Wa(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Va(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Ga(e,t){return za(e.prev,e,e.next)<0?za(e,t,e.next)>=0&&za(e,e.prev,t)>=0:za(e,t,e.prev)<0||za(e,e.next,t)<0}function Ka(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function qa(e,t){let n=Xa(e.i,e.x,e.y),r=Xa(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function Ja(e,t,n,r){let i=Xa(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Ya(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Xa(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Za(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var Qa=class{static triangulate(e,t,n=2){return ya(e,t,n)}},$a=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];eo(e),to(n,e);let a=e.length;t.forEach(eo);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,to(n,t[e]);let o=Qa.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function eo(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function to(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var no=class e extends Rr{constructor(e=new va([new z(.5,.5),new z(-.5,.5),new z(-.5,-.5),new z(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new Er(r,3)),this.setAttribute(`uv`,new Er(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?ro:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new B,b=new B,x=new B}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!$a.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];$a.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));s<=10000000000000001e-36*c*c?(e.splice(r,1),n--):t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function ee(e,t,n){return t||L(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let O=C.length;function k(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new z(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new z(r/a,i/a)}let te=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),te[e]=k(D[e],D[n],D[r]);let A=[],ne,j=te.concat();for(let e=0,t=E;e<t;e++){let t=w[e];ne=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),ne[e]=k(t[e],t[r],t[i]);A.push(ne),j=j.concat(ne)}let re;if(p===0)re=$a.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=ee(D[t],te[t],a);ce(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];ne=A[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=ee(n[e],ne[e],a);ce(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}re=$a.triangulateShape(e,t)}let M=re.length,ie=d+f;for(let e=0;e<O;e++){let t=l?ee(C[e],j[e],ie):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),ce(x.x,x.y,x.z)):ce(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<O;t++){let n=l?ee(C[t],j[t],ie):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),ce(x.x,x.y,x.z)):ce(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=ee(D[e],te[e],r);ce(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];ne=A[e];for(let e=0,i=t.length;e<i;e++){let i=ee(t[e],ne[e],r);_?ce(i.x,i.y+g[s-1].y,g[s-1].x+n):ce(i.x,i.y,c+n)}}}ae(),oe();function ae(){let e=r.length/3;if(l){let e=0,t=O*e;for(let e=0;e<M;e++){let n=re[e];le(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=O*e;for(let e=0;e<M;e++){let n=re[e];le(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<M;e++){let t=re[e];le(t[2],t[1],t[0])}for(let e=0;e<M;e++){let t=re[e];le(t[0]+O*s,t[1]+O*s,t[2]+O*s)}}n.addGroup(e,r.length/3-e,0)}function oe(){let e=r.length/3,t=0;se(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];se(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function se(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=O*e,a=O*(e+1);ue(t+r+n,t+i+n,t+i+a,t+r+a)}}}function ce(e,t,n){a.push(e),a.push(t),a.push(n)}function le(e,t,i){N(e),N(t),N(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);de(o[0]),de(o[1]),de(o[2])}function ue(e,t,i,a){N(e),N(t),N(a),N(t),N(i),N(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);de(s[0]),de(s[1]),de(s[3]),de(s[1]),de(s[2]),de(s[3])}function N(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function de(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return io(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new ha[i.type]().fromJSON(i)),new e(r,t.options)}},ro={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new z(a,o),new z(s,c),new z(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new z(o,1-c),new z(l,1-d),new z(f,1-m),new z(h,1-_)]:[new z(s,1-c),new z(u,1-d),new z(p,1-m),new z(g,1-_)]}};function io(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var ao=class e extends Vi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},oo=class e extends Rr{constructor(e=[new z(0,-.5),new z(.5,0),new z(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=R(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new B,d=new z,f=new B,p=new B,m=new B,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new Er(a,3)),this.setAttribute(`uv`,new Er(o,2)),this.setAttribute(`normal`,new Er(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},so=class e extends Rr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Er(p,3)),this.setAttribute(`normal`,new Er(m,3)),this.setAttribute(`uv`,new Er(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},U=class e extends Rr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new B,d=new B,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Er(p,3)),this.setAttribute(`normal`,new Er(m,3)),this.setAttribute(`uv`,new Er(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},co=class e extends Rr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new B,f=new B,p=new B;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new Er(c,3)),this.setAttribute(`normal`,new Er(l,3)),this.setAttribute(`uv`,new Er(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},lo=class e extends Rr{constructor(e=new pa(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new B,s=new B,c=new z,l=new B,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new Er(u,3)),this.setAttribute(`normal`,new Er(d,3)),this.setAttribute(`uv`,new Er(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new ha[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function uo(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(po(i))i.isRenderTargetTexture?(I(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(po(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function fo(e){let t={};for(let n=0;n<e.length;n++){let r=uo(e[n]);for(let e in r)t[e]=r[e]}return t}function po(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function mo(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function ho(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:zt.workingColorSpace}var go={clone:uo,merge:fo},_o=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vo=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yo=class extends Wr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_o,this.fragmentShader=vo,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=uo(e.uniforms),this.uniformsGroups=mo(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new V().setHex(r.value);break;case`v2`:this.uniforms[n].value=new z().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new B().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Xt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new Pt().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new tn().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},bo=class extends yo{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},W=class extends Wr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new V(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new V(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},xo=class extends W{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new z(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return R(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new V(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new V(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new V(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},So=class extends Wr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=ze,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Co=class extends Wr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function wo(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function To(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Eo=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Do=class extends Eo{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Le,endingEnd:Le}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case F:i=e,o=2*t-n;break;case Re:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case F:a=e,s=2*n-t;break;case Re:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Oo=class extends Eo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},ko=class extends Eo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ao=class extends Eo{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=No(n,t,g,y,r);i[p]=jo(x,o,_,b,m)}return i}};function jo(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Mo(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function No(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=jo(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Mo(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Po=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=wo(t,this.TimeBufferType),this.values=wo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:wo(e.times,Array),values:wo(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),To(e.settings)&&(n.settings={inTangents:wo(e.settings.inTangents,Array),outTangents:wo(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ko(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Oo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Do(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ao(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Pe:t=this.InterpolantFactoryMethodDiscrete;break;case P:t=this.InterpolantFactoryMethodLinear;break;case Fe:t=this.InterpolantFactoryMethodSmooth;break;case Ie:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return I(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pe;case this.InterpolantFactoryMethodLinear:return P;case this.InterpolantFactoryMethodSmooth:return Fe;case this.InterpolantFactoryMethodBezier:return Ie}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;To(this.settings)&&(Fo(this.settings.inTangents,e),Fo(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(L(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(L(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){L(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){L(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ye(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){L(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Fe,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,To(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Fo(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Po.prototype.ValueTypeName=``,Po.prototype.TimeBufferType=Float32Array,Po.prototype.ValueBufferType=Float32Array,Po.prototype.DefaultInterpolation=P;var Io=class extends Po{constructor(e,t,n){super(e,t,n)}};Io.prototype.ValueTypeName=`bool`,Io.prototype.ValueBufferType=Array,Io.prototype.DefaultInterpolation=Pe,Io.prototype.InterpolantFactoryMethodLinear=void 0,Io.prototype.InterpolantFactoryMethodSmooth=void 0;var Lo=class extends Po{constructor(e,t,n,r){super(e,t,n,r)}};Lo.prototype.ValueTypeName=`color`;var Ro=class extends Po{constructor(e,t,n,r){super(e,t,n,r)}};Ro.prototype.ValueTypeName=`number`;var zo=class extends Eo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)jt.slerpFlat(i,0,a,c-o,a,c,s);return i}},Bo=class extends Po{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new zo(this.times,this.values,this.getValueSize(),e)}};Bo.prototype.ValueTypeName=`quaternion`,Bo.prototype.InterpolantFactoryMethodSmooth=void 0;var Vo=class extends Po{constructor(e,t,n){super(e,t,n)}};Vo.prototype.ValueTypeName=`string`,Vo.prototype.ValueBufferType=Array,Vo.prototype.DefaultInterpolation=Pe,Vo.prototype.InterpolantFactoryMethodLinear=void 0,Vo.prototype.InterpolantFactoryMethodSmooth=void 0;var Ho=class extends Po{constructor(e,t,n,r){super(e,t,n,r)}};Ho.prototype.ValueTypeName=`vector`;var Uo={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(Wo(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!Wo(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function Wo(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var Go=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},Ko=class{constructor(e){this.manager=e===void 0?Go:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ko.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var qo={},Jo=class extends Error{constructor(e,t){super(e),this.response=t}},Yo=class extends Ko{constructor(e){super(e),this.mimeType=``,this.responseType=``,this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=Uo.get(`file:${e}`);if(i!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0);return}if(qo[e]!==void 0){qo[e].push({onLoad:t,onProgress:n,onError:r});return}qo[e]=[],qo[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?`include`:`same-origin`,signal:typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,s=this.responseType;fetch(a).then(t=>{if(t.status===200||t.status===0){if(t.status===0&&I(`FileLoader: HTTP Status 0 received.`),typeof ReadableStream>`u`||t.body===void 0||t.body.getReader===void 0)return t;let n=qo[e],r=t.body.getReader(),i=t.headers.get(`X-File-Size`)||t.headers.get(`Content-Length`),a=i?parseInt(i):0,o=a!==0,s=0,c=new ReadableStream({start(e){t();function t(){r.read().then(({done:r,value:i})=>{if(r)e.close();else{s+=i.byteLength;let r=new ProgressEvent(`progress`,{lengthComputable:o,loaded:s,total:a});for(let e=0,t=n.length;e<t;e++){let t=n[e];t.onProgress&&t.onProgress(r)}e.enqueue(i),t()}},t=>{e.error(t)})}}});return new Response(c)}throw new Jo(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,t)}).then(e=>{switch(s){case`arraybuffer`:return e.arrayBuffer();case`blob`:return e.blob();case`document`:return e.text().then(e=>new DOMParser().parseFromString(e,o));case`json`:return e.json();default:if(o===``)return e.text();{let t=/charset="?([^;"\s]*)"?/i.exec(o),n=t&&t[1]?t[1].toLowerCase():void 0,r=new TextDecoder(n);return e.arrayBuffer().then(e=>r.decode(e))}}}).then(t=>{Uo.add(`file:${e}`,t);let n=qo[e];delete qo[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onLoad&&r.onLoad(t)}}).catch(t=>{let n=qo[e];if(n===void 0)throw this.manager.itemError(e),t;delete qo[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onError&&r.onError(t)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Xo=new WeakMap,Zo=class extends Ko{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=Uo.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=Xo.get(a);e===void 0&&(e=[],Xo.set(a,e)),e.push({onLoad:t,onError:r})}return a}let o=Xe(`img`);function s(){l(),t&&t(this);let n=Xo.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}Xo.delete(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),Uo.remove(`image:${e}`);let n=Xo.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}Xo.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Uo.add(`image:${e}`,o),i.manager.itemStart(e),o.src=e,o}},Qo=class extends Ko{constructor(e){super(e)}load(e,t,n,r){let i=this,a=new ui,o=new Yo(this.manager);return o.setResponseType(`arraybuffer`),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(i.withCredentials),o.load(e,function(e){let n;try{n=i.parse(e)}catch(e){r===void 0?L(e):r(e);return}i._applyTexData(a,n),t&&t(a,n)},n,r),a}createDataTexture(e){let t=new ui;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,n){n.image===void 0?n.data!==void 0&&(e.image.width=n.width,e.image.height=n.height,e.image.data=n.data):e.image=n.image,e.wrapS=n.wrapS===void 0?t:n.wrapS,e.wrapT=n.wrapT===void 0?t:n.wrapT,e.magFilter=n.magFilter===void 0?o:n.magFilter,e.minFilter=n.minFilter===void 0?o:n.minFilter,e.anisotropy=n.anisotropy===void 0?1:n.anisotropy,n.colorSpace!==void 0&&(e.colorSpace=n.colorSpace),n.flipY!==void 0&&(e.flipY=n.flipY),n.format!==void 0&&(e.format=n.format),n.type!==void 0&&(e.type=n.type),n.mipmaps!==void 0&&(e.mipmaps=n.mipmaps,e.minFilter=c),n.mipmapCount===1&&(e.minFilter=o),n.generateMipmaps!==void 0&&(e.generateMipmaps=n.generateMipmaps),e.needsUpdate=!0}},$o=class extends Ko{constructor(e){super(e)}load(e,t,n,r){let i=new Yt,a=new Zo(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},es=class extends kn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new V(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ts=class extends es{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(kn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new V(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ns=new tn,rs=new B,is=new B,as=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new z(512,512),this.mapType=l,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ci,this._frameExtents=new z(1,1),this._viewportCount=1,this._viewports=[new Xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;rs.setFromMatrixPosition(e.matrixWorld),t.position.copy(rs),is.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(is),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){ns.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ns,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(ns)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},os=new B,ss=new jt,cs=new B,ls=class extends kn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=qe,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(os,ss,cs),cs.x===1&&cs.y===1&&cs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(os,ss,cs.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(os,ss,cs),cs.x===1&&cs.y===1&&cs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(os,ss,cs.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},us=new B,ds=new z,fs=new z,ps=class extends ls{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ct*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(st*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ct*2*Math.atan(Math.tan(st*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(us.x,us.y).multiplyScalar(-e/us.z),us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(us.x,us.y).multiplyScalar(-e/us.z)}getViewSize(e,t){return this.getViewBounds(e,ds,fs),t.subVectors(fs,ds)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(st*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ms=class extends ls{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},hs=class extends as{constructor(){super(new ms(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},gs=class extends es{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(kn.DEFAULT_UP),this.updateMatrix(),this.target=new kn,this.shadow=new hs}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},_s=-90,vs=1,ys=class extends kn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ps(_s,vs,e,t);r.layers=this.layers,this.add(r);let i=new ps(_s,vs,e,t);i.layers=this.layers,this.add(i);let a=new ps(_s,vs,e,t);a.layers=this.layers,this.add(a);let o=new ps(_s,vs,e,t);o.layers=this.layers,this.add(o);let s=new ps(_s,vs,e,t);s.layers=this.layers,this.add(s);let c=new ps(_s,vs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},bs=class extends ps{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},xs=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Ss.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Ss(){this._document.hidden===!1&&this.reset()}var Cs=`\\[\\]\\.:\\/`,ws=RegExp(`[\\[\\]\\.:\\/]`,`g`),Ts=`[^\\[\\]\\.:\\/]`,Es=`[^`+Cs.replace(`\\.`,``)+`]`,Ds=`((?:WC+[\\/:])*)`.replace(`WC`,Ts),Os=`(WCOD+)?`.replace(`WCOD`,Es),ks=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Ts),As=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Ts),js=RegExp(`^`+Ds+Os+ks+As+`$`),Ms=[`material`,`materials`,`bones`,`map`],Ns=class{constructor(e,t,n){let r=n||Ps.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ps=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(ws,``)}static parseTrackName(e){let t=js.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Ms.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){I(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){L(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){L(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){L(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){L(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){L(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){L(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){L(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;L(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){L(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){L(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ps.Composite=Ns,Ps.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Ps.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Ps.prototype.GetterByBindingType=[Ps.prototype._getValue_direct,Ps.prototype._getValue_array,Ps.prototype._getValue_arrayElement,Ps.prototype._getValue_toArray],Ps.prototype.SetterByBindingTypeAndVersioning=[[Ps.prototype._setValue_direct,Ps.prototype._setValue_direct_setNeedsUpdate,Ps.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ps.prototype._setValue_array,Ps.prototype._setValue_array_setNeedsUpdate,Ps.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ps.prototype._setValue_arrayElement,Ps.prototype._setValue_arrayElement_setNeedsUpdate,Ps.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ps.prototype._setValue_fromArray,Ps.prototype._setValue_fromArray_setNeedsUpdate,Ps.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function Fs(e,t,n,r){let i=Is(r);switch(n){case S:return e*t;case D:return e*t/i.components*i.byteLength;case ee:return e*t/i.components*i.byteLength;case O:return e*t*2/i.components*i.byteLength;case k:return e*t*2/i.components*i.byteLength;case C:return e*t*3/i.components*i.byteLength;case w:return e*t*4/i.components*i.byteLength;case te:return e*t*4/i.components*i.byteLength;case A:case ne:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case j:case re:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ie:case oe:return Math.max(e,16)*Math.max(t,8)/4;case M:case ae:return Math.max(e,8)*Math.max(t,8)/2;case se:case ce:case ue:case N:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case le:case de:case fe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case pe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case me:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case he:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ge:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case _e:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ve:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ye:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case be:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case xe:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Se:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ce:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case we:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Te:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ee:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case De:case Oe:case ke:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ae:case je:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Me:case Ne:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Is(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:case x:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?I(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Ls(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Rs(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var zs={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
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
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
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
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
}`},G={common:{diffuse:{value:new V(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pt}},envmap:{envMap:{value:null},envMapRotation:{value:new Pt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pt},normalScale:{value:new z(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new V(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new V(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new V(16777215)},opacity:{value:1},center:{value:new z(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}}},Bs={basic:{uniforms:fo([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.fog]),vertexShader:zs.meshbasic_vert,fragmentShader:zs.meshbasic_frag},lambert:{uniforms:fo([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.fog,G.lights,{emissive:{value:new V(0)},envMapIntensity:{value:1}}]),vertexShader:zs.meshlambert_vert,fragmentShader:zs.meshlambert_frag},phong:{uniforms:fo([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.fog,G.lights,{emissive:{value:new V(0)},specular:{value:new V(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:zs.meshphong_vert,fragmentShader:zs.meshphong_frag},standard:{uniforms:fo([G.common,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.roughnessmap,G.metalnessmap,G.fog,G.lights,{emissive:{value:new V(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zs.meshphysical_vert,fragmentShader:zs.meshphysical_frag},toon:{uniforms:fo([G.common,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.gradientmap,G.fog,G.lights,{emissive:{value:new V(0)}}]),vertexShader:zs.meshtoon_vert,fragmentShader:zs.meshtoon_frag},matcap:{uniforms:fo([G.common,G.bumpmap,G.normalmap,G.displacementmap,G.fog,{matcap:{value:null}}]),vertexShader:zs.meshmatcap_vert,fragmentShader:zs.meshmatcap_frag},points:{uniforms:fo([G.points,G.fog]),vertexShader:zs.points_vert,fragmentShader:zs.points_frag},dashed:{uniforms:fo([G.common,G.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zs.linedashed_vert,fragmentShader:zs.linedashed_frag},depth:{uniforms:fo([G.common,G.displacementmap]),vertexShader:zs.depth_vert,fragmentShader:zs.depth_frag},normal:{uniforms:fo([G.common,G.bumpmap,G.normalmap,G.displacementmap,{opacity:{value:1}}]),vertexShader:zs.meshnormal_vert,fragmentShader:zs.meshnormal_frag},sprite:{uniforms:fo([G.sprite,G.fog]),vertexShader:zs.sprite_vert,fragmentShader:zs.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zs.background_vert,fragmentShader:zs.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pt}},vertexShader:zs.backgroundCube_vert,fragmentShader:zs.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zs.cube_vert,fragmentShader:zs.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zs.equirect_vert,fragmentShader:zs.equirect_frag},distance:{uniforms:fo([G.common,G.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zs.distance_vert,fragmentShader:zs.distance_frag},shadow:{uniforms:fo([G.lights,G.fog,{color:{value:new V(0)},opacity:{value:1}}]),vertexShader:zs.shadow_vert,fragmentShader:zs.shadow_frag}};Bs.physical={uniforms:fo([Bs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pt},clearcoatNormalScale:{value:new z(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pt},sheen:{value:0},sheenColor:{value:new V(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pt},transmissionSamplerSize:{value:new z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pt},attenuationDistance:{value:0},attenuationColor:{value:new V(0)},specularColor:{value:new V(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pt},anisotropyVector:{value:new z},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pt}}]),vertexShader:zs.meshphysical_vert,fragmentShader:zs.meshphysical_frag};var Vs={r:0,b:0,g:0},Hs=new tn,Us=new Pt;Us.set(-1,0,0,0,1,0,0,0,1);function Ws(e,t,n,r,i,a){let o=new V(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new H(new Ii(1,1,1),new yo({name:`BackgroundCubeMaterial`,uniforms:uo(Bs.backgroundCube.uniforms),vertexShader:Bs.backgroundCube.vertexShader,fragmentShader:Bs.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Hs.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Us),l.material.toneMapped=zt.getTransfer(i.colorSpace)!==Ue,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new H(new so(2,2),new yo({name:`BackgroundMaterial`,uniforms:uo(Bs.background.uniforms),vertexShader:Bs.background.vertexShader,fragmentShader:Bs.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=zt.getTransfer(i.colorSpace)!==Ue,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Vs,ho(e)),n.buffers.color.setClear(Vs.r,Vs.g,Vs.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Gs(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Ks(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function qs(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(I(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&I(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Js(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Hr,s=new Pt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Ys=4,Xs=6,Zs=20,Qs=256,$s=new ms,ec=new V,tc=null,nc=0,rc=0,ic=!1,ac=new B,oc=new B,sc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=ac}=i;tc=this._renderer.getRenderTarget(),nc=this._renderer.getActiveCubeFace(),rc=this._renderer.getActiveMipmapLevel(),ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(tc,nc,rc),this._renderer.xr.enabled=ic,e.scissorTest=!1,uc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tc=this._renderer.getRenderTarget(),nc=this._renderer.getActiveCubeFace(),rc=this._renderer.getActiveMipmapLevel(),ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:o,minFilter:o,generateMipmaps:!1,type:g,format:w,colorSpace:Ve,depthBuffer:!1},r=lc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lc(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=cc(r)),this._blurMaterial=fc(r,e,t),this._ggxMaterial=dc(r,e,t)}return r}_compileMaterial(e){let t=new H(new Rr,e);this._renderer.compile(t,$s)}_sceneToCubeUV(e,t,n,r,i){let a=new ps(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(ec),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new H(new Ii,new Xr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(ec),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;uc(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=mc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pc());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;uc(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,$s)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Ys?n-d+Ys:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,uc(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,$s),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,uc(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,$s)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];uc(t,3*l*(r>this._lodMax-Ys?r-this._lodMax+Ys:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,$s)}};function cc(e){let t=[],n=[],r=e,i=e-Ys+1+Xs;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?oc.set(1,r,n):e===1?oc.set(-n,1,-r):e===2?oc.set(-n,r,1):e===3?oc.set(-1,r,-n):e===4?oc.set(-n,-1,r):oc.set(n,r,-1),oc.toArray(l,(e*6+t)*3)}}let u=new Rr;u.setAttribute(`position`,new Cr(c,3)),u.setAttribute(`outputDirection`,new Cr(l,3)),n.push(new H(u,null)),r>Ys&&r--}return{lodMeshes:n,sizeLods:t}}function lc(e,t,n){let r=new Qt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function uc(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function dc(e,t,n){return new yo({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Qs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hc(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function fc(e,t,n){return new yo({name:`SphericalGaussianBlur`,defines:{SAMPLES:Zs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:hc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function pc(){return new yo({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:hc(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function mc(){return new yo({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function hc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var gc=class extends Qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ji(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ii(5,5,5),i=new yo({name:`CubemapFromEquirect`,uniforms:uo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new H(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new ys(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function _c(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new gc(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new sc(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new sc(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function vc(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&tt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function yc(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Tr:wr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function bc(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function xc(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:L(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Sc(e,t,n){let r=new WeakMap,i=new Xt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new $t(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new z(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Cc(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var wc={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Tc(e,t,n,r,i,a){let o=new Qt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Rr;l.setAttribute(`position`,new Er([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new Er([0,2,0,0,2,0],2));let u=new bo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new H(l,u),f=new ms(-1,1,1,-1,0,1),p=null,m=null,h=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new Qt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}),c=new Qt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<y.length;e++){let r=y[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,h=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},zt.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=wc[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(d,f),v=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Ec=new Yt,Dc=new Ni(1,1),Oc=new $t,kc=new en,Ac=new ji,jc=[],Mc=[],Nc=new Float32Array(16),Pc=new Float32Array(9),Fc=new Float32Array(4);function Ic(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=jc[i];if(a===void 0&&(a=new Float32Array(i),jc[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Lc(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Rc(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function zc(e,t){let n=Mc[t];n===void 0&&(n=new Int32Array(t),Mc[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Bc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Vc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Lc(n,t))return;e.uniform2fv(this.addr,t),Rc(n,t)}}function Hc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Lc(n,t))return;e.uniform3fv(this.addr,t),Rc(n,t)}}function Uc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Lc(n,t))return;e.uniform4fv(this.addr,t),Rc(n,t)}}function Wc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Lc(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Rc(n,t)}else{if(Lc(n,r))return;Fc.set(r),e.uniformMatrix2fv(this.addr,!1,Fc),Rc(n,r)}}function Gc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Lc(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Rc(n,t)}else{if(Lc(n,r))return;Pc.set(r),e.uniformMatrix3fv(this.addr,!1,Pc),Rc(n,r)}}function Kc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Lc(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Rc(n,t)}else{if(Lc(n,r))return;Nc.set(r),e.uniformMatrix4fv(this.addr,!1,Nc),Rc(n,r)}}function qc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Jc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Lc(n,t))return;e.uniform2iv(this.addr,t),Rc(n,t)}}function Yc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Lc(n,t))return;e.uniform3iv(this.addr,t),Rc(n,t)}}function Xc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Lc(n,t))return;e.uniform4iv(this.addr,t),Rc(n,t)}}function Zc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Qc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Lc(n,t))return;e.uniform2uiv(this.addr,t),Rc(n,t)}}function $c(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Lc(n,t))return;e.uniform3uiv(this.addr,t),Rc(n,t)}}function el(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Lc(n,t))return;e.uniform4uiv(this.addr,t),Rc(n,t)}}function tl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Dc.compareFunction=n.isReversedDepthBuffer()?518:515,a=Dc):a=Ec,n.setTexture2D(t||a,i)}function nl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||kc,i)}function rl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Ac,i)}function il(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Oc,i)}function al(e){switch(e){case 5126:return Bc;case 35664:return Vc;case 35665:return Hc;case 35666:return Uc;case 35674:return Wc;case 35675:return Gc;case 35676:return Kc;case 5124:case 35670:return qc;case 35667:case 35671:return Jc;case 35668:case 35672:return Yc;case 35669:case 35673:return Xc;case 5125:return Zc;case 36294:return Qc;case 36295:return $c;case 36296:return el;case 35678:case 36198:case 36298:case 36306:case 35682:return tl;case 35679:case 36299:case 36307:return nl;case 35680:case 36300:case 36308:case 36293:return rl;case 36289:case 36303:case 36311:case 36292:return il}}function ol(e,t){e.uniform1fv(this.addr,t)}function sl(e,t){let n=Ic(t,this.size,2);e.uniform2fv(this.addr,n)}function cl(e,t){let n=Ic(t,this.size,3);e.uniform3fv(this.addr,n)}function ll(e,t){let n=Ic(t,this.size,4);e.uniform4fv(this.addr,n)}function ul(e,t){let n=Ic(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function dl(e,t){let n=Ic(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function fl(e,t){let n=Ic(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function pl(e,t){e.uniform1iv(this.addr,t)}function ml(e,t){e.uniform2iv(this.addr,t)}function hl(e,t){e.uniform3iv(this.addr,t)}function gl(e,t){e.uniform4iv(this.addr,t)}function _l(e,t){e.uniform1uiv(this.addr,t)}function vl(e,t){e.uniform2uiv(this.addr,t)}function yl(e,t){e.uniform3uiv(this.addr,t)}function bl(e,t){e.uniform4uiv(this.addr,t)}function xl(e,t,n){let r=this.cache,i=t.length,a=zc(n,i);Lc(r,a)||(e.uniform1iv(this.addr,a),Rc(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Dc:Ec;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Sl(e,t,n){let r=this.cache,i=t.length,a=zc(n,i);Lc(r,a)||(e.uniform1iv(this.addr,a),Rc(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||kc,a[e])}function Cl(e,t,n){let r=this.cache,i=t.length,a=zc(n,i);Lc(r,a)||(e.uniform1iv(this.addr,a),Rc(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Ac,a[e])}function wl(e,t,n){let r=this.cache,i=t.length,a=zc(n,i);Lc(r,a)||(e.uniform1iv(this.addr,a),Rc(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Oc,a[e])}function Tl(e){switch(e){case 5126:return ol;case 35664:return sl;case 35665:return cl;case 35666:return ll;case 35674:return ul;case 35675:return dl;case 35676:return fl;case 5124:case 35670:return pl;case 35667:case 35671:return ml;case 35668:case 35672:return hl;case 35669:case 35673:return gl;case 5125:return _l;case 36294:return vl;case 36295:return yl;case 36296:return bl;case 35678:case 36198:case 36298:case 36306:case 35682:return xl;case 35679:case 36299:case 36307:return Sl;case 35680:case 36300:case 36308:case 36293:return Cl;case 36289:case 36303:case 36311:case 36292:return wl}}var El=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=al(t.type)}},Dl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tl(t.type)}},Ol=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},kl=/(\w+)(\])?(\[|\.)?/g;function Al(e,t){e.seq.push(t),e.map[t.id]=t}function jl(e,t,n){let r=e.name,i=r.length;for(kl.lastIndex=0;;){let a=kl.exec(r),o=kl.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Al(n,l===void 0?new El(s,e,t):new Dl(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Ol(s),Al(n,e)),n=e}}}var Ml=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);jl(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Nl(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Pl=37297,Fl=0;function Il(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Ll=new Pt;function Rl(e){zt._getMatrix(Ll,zt.workingColorSpace,e);let t=`mat3( ${Ll.elements.map(e=>e.toFixed(4))} )`;switch(zt.getTransfer(e)){case He:return[t,`LinearTransferOETF`];case Ue:return[t,`sRGBTransferOETF`];default:return I(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function zl(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Il(e.getShaderSource(t),r)}return i}function Bl(e,t){let n=Rl(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Vl={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Hl(e,t){let n=Vl[t];return n===void 0?(I(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Ul=new B;function Wl(){return zt.getLuminanceCoefficients(Ul),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Ul.x.toFixed(4)}, ${Ul.y.toFixed(4)}, ${Ul.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Gl(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Jl).join(`
`)}function Kl(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function ql(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Jl(e){return e!==``}function Yl(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Zl=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ql(e){return e.replace(Zl,eu)}var $l=new Map;function eu(e,t){let n=zs[t];if(n===void 0){let e=$l.get(t);if(e!==void 0)n=zs[e],I(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Ql(n)}var tu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nu(e){return e.replace(tu,ru)}function ru(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function iu(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var au={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function ou(e){return au[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var su={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function cu(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:su[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var lu={302:`ENVMAP_MODE_REFRACTION`};function uu(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:lu[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var du={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function fu(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:du[e.combine]||`ENVMAP_BLENDING_NONE`}function pu(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function mu(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=ou(n),l=cu(n),u=uu(n),d=fu(n),f=pu(n),p=Gl(n),m=Kl(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Jl).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Jl).join(`
`),_.length>0&&(_+=`
`)):(g=[iu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Jl).join(`
`),_=[iu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:zs.tonemapping_pars_fragment,n.toneMapping===0?``:Hl(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,zs.colorspace_pars_fragment,Bl(`linearToOutputTexel`,n.outputColorSpace),Wl(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Jl).join(`
`)),o=Ql(o),o=Yl(o,n),o=Xl(o,n),s=Ql(s),s=Yl(s,n),s=Xl(s,n),o=nu(o),s=nu(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Nl(i,i.VERTEX_SHADER,y),S=Nl(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=zl(i,x,`vertex`),n=zl(i,S,`fragment`);L(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):I(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Ml(i,h),T=ql(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Pl)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Fl++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var hu=0,gu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new _u(e),t.set(e,n)),n}},_u=class{constructor(e){this.id=hu++,this.code=e,this.usedTimes=0}};function vu(e){return e===1030||e===37490||e===36285}function yu(e,t,n,r,i,a){let o=new pn,s=new gu,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&I(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,ee,O,k;if(C){let e=Bs[C];D=e.vertexShader,ee=e.fragmentShader}else{D=i.vertexShader,ee=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let te=e.getRenderTarget(),A=e.state.buffers.depth.getReversed(),ne=h.isInstancedMesh===!0,j=h.isBatchedMesh===!0,re=!!i.map,M=!!i.matcap,ie=!!x,ae=!!i.aoMap,oe=!!i.lightMap,se=!!i.bumpMap&&i.wireframe===!1,ce=!!i.normalMap,le=!!i.displacementMap,ue=!!i.emissiveMap,N=!!i.metalnessMap,de=!!i.roughnessMap,fe=i.anisotropy>0,pe=i.clearcoat>0,me=i.dispersion>0,he=i.retroreflectivity>0,ge=i.iridescence>0,_e=i.sheen>0,ve=i.transmission>0,ye=fe&&!!i.anisotropyMap,be=pe&&!!i.clearcoatMap,xe=pe&&!!i.clearcoatNormalMap,Se=pe&&!!i.clearcoatRoughnessMap,Ce=ge&&!!i.iridescenceMap,we=ge&&!!i.iridescenceThicknessMap,Te=_e&&!!i.sheenColorMap,Ee=_e&&!!i.sheenRoughnessMap,De=!!i.specularMap,Oe=!!i.specularColorMap,ke=!!i.specularIntensityMap,Ae=ve&&!!i.transmissionMap,je=ve&&!!i.thicknessMap,Me=!!i.gradientMap,Ne=!!i.alphaMap,Pe=i.alphaTest>0,P=!!i.alphaHash,Fe=!!i.extensions,Ie=0;i.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ie=e.toneMapping);let Le={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:ee,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:j,batchingColor:j&&h._colorsTexture!==null,instancing:ne,instancingColor:ne&&h.instanceColor!==null,instancingMorph:ne&&h.morphTexture!==null,outputColorSpace:te===null?e.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:zt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:re,matcap:M,envMap:ie,envMapMode:ie&&x.mapping,envMapCubeUVHeight:S,aoMap:ae,lightMap:oe,bumpMap:se,normalMap:ce,displacementMap:le,emissiveMap:ue,normalMapObjectSpace:ce&&i.normalMapType===1,normalMapTangentSpace:ce&&i.normalMapType===0,packedNormalMap:ce&&i.normalMapType===0&&vu(i.normalMap.format),metalnessMap:N,roughnessMap:de,anisotropy:fe,anisotropyMap:ye,clearcoat:pe,clearcoatMap:be,clearcoatNormalMap:xe,clearcoatRoughnessMap:Se,dispersion:me,retroreflection:he,iridescence:ge,iridescenceMap:Ce,iridescenceThicknessMap:we,sheen:_e,sheenColorMap:Te,sheenRoughnessMap:Ee,specularMap:De,specularColorMap:Oe,specularIntensityMap:ke,transmission:ve,transmissionMap:Ae,thicknessMap:je,gradientMap:Me,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ne,alphaTest:Pe,alphaHash:P,combine:i.combine,mapUv:re&&m(i.map.channel),aoMapUv:ae&&m(i.aoMap.channel),lightMapUv:oe&&m(i.lightMap.channel),bumpMapUv:se&&m(i.bumpMap.channel),normalMapUv:ce&&m(i.normalMap.channel),displacementMapUv:le&&m(i.displacementMap.channel),emissiveMapUv:ue&&m(i.emissiveMap.channel),metalnessMapUv:N&&m(i.metalnessMap.channel),roughnessMapUv:de&&m(i.roughnessMap.channel),anisotropyMapUv:ye&&m(i.anisotropyMap.channel),clearcoatMapUv:be&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:xe&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:we&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&m(i.sheenRoughnessMap.channel),specularMapUv:De&&m(i.specularMap.channel),specularColorMapUv:Oe&&m(i.specularColorMap.channel),specularIntensityMapUv:ke&&m(i.specularIntensityMap.channel),transmissionMapUv:Ae&&m(i.transmissionMap.channel),thicknessMapUv:je&&m(i.thicknessMap.channel),alphaMapUv:Ne&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(ce||fe),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(re||Ne),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&ce===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:A,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ie,decodeVideoTexture:re&&i.map.isVideoTexture===!0&&zt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ue&&i.emissiveMap.isVideoTexture===!0&&zt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Fe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Fe&&i.extensions.multiDraw===!0||j)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Le.vertexUv1s=c.has(1),Le.vertexUv2s=c.has(2),Le.vertexUv3s=c.has(3),c.clear(),Le}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Bs[t];n=go.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new mu(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function bu(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function xu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Su(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Cu(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||xu),r.length>1&&r.sort(t||Su),i.length>1&&i.sort(t||Su)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function wu(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Cu,e.set(t,[i])):n>=r.length?(i=new Cu,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Tu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new B,color:new V};break;case`SpotLight`:n={position:new B,direction:new B,color:new V,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new B,color:new V,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new B,skyColor:new V,groundColor:new V};break;case`RectAreaLight`:n={color:new V,position:new B,halfWidth:new B,halfHeight:new B}}return e[t.id]=n,n}}}function Eu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Du=0;function Ou(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function ku(e){let t=new Tu,n=Eu(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new B);let i=new B,a=new tn,o=new tn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Ou);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=G.LTC_FLOAT_1,r.rectAreaLTC2=G.LTC_FLOAT_2):(r.rectAreaLTC1=G.LTC_HALF_1,r.rectAreaLTC2=G.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Du++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Au(e){let t=new ku(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function ju(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Au(e),t.set(n,[a])):r>=i.length?(a=new Au(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Mu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nu=`uniform sampler2D shadow_pass;
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
}`,Pu=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],Fu=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Iu=new tn,Lu=new B,Ru=new B;function zu(e,t,n){let i=new Ci,a=new z,s=new z,c=new Xt,l=new So,u=new Co,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},_=new yo({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new z},radius:{value:4}},vertexShader:Mu,fragmentShader:Nu}),v=_.clone();v.defines.HORIZONTAL_PASS=1;let y=new Rr;y.setAttribute(`position`,new Cr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new H(y,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(I(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.state;_.setBlending(0),_.buffers.depth.getReversed()===!0?_.buffers.color.setClear(0,0,0,0):_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){I(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),s.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/y.x),a.x=s.x*y.x,p.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/y.y),a.y=s.y*y.y,p.mapSize.y=s.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){I(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Qt(a.x,a.y,{format:O,type:g,minFilter:o,magFilter:o,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new Ni(a.x,a.y,h),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=T,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r}else d.isPointLight?(p.map=new gc(a.x),p.map.depthTexture=new Pi(a.x,m)):(p.map=new Qt(a.x,a.y),p.map.depthTexture=new Ni(a.x,a.y,m)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=T,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);for(let t=0;t<x;t++){let r=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Lu.setFromMatrixPosition(d.matrixWorld),e.position.copy(Lu),Ru.copy(e.position),Ru.add(Pu[t]),e.up.copy(Fu[t]),e.lookAt(Ru),e.updateMatrixWorld(),n.makeTranslation(-Lu.x,-Lu.y,-Lu.z),Iu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(Iu,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(s.x*n.x,s.y*n.y,s.x*n.z,s.y*n.w),_.viewport(c)}i=p.getFrustum(t),E(n,l,r,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);_.defines.VSM_SAMPLES!==n.blurSamples&&(_.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new Qt(a.x,a.y,{format:O,type:g}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),_.uniforms.shadow_pass.value=n.map.depthTexture,_.uniforms.resolution.value.set(n.map.width,n.map.height),_.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,_,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function E(n,r,a,o,s){if(n.visible===!1)return;if(n.layers.test(r.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(i))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),c=n.material;if(Array.isArray(c)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)E(c[e],r,a,o,s)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Bu(e,t){function n(){let t=!1,n=new Xt,r=null,i=new Xt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?N(e.DEPTH_TEST):de(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=rt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?N(e.STENCIL_TEST):de(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new V(0,0,0),T=0,E=!1,D=null,ee=null,O=null,k=null,te=null,A=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ne=!1,j=0,re=e.getParameter(e.VERSION);re.indexOf(`WebGL`)===-1?re.indexOf(`OpenGL ES`)!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),ne=j>=2):(j=parseFloat(/^WebGL (\d)/.exec(re)[1]),ne=j>=1);let M=null,ie={},ae=e.getParameter(e.SCISSOR_BOX),oe=e.getParameter(e.VIEWPORT),se=new Xt().fromArray(ae),ce=new Xt().fromArray(oe);function le(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ue={};ue[e.TEXTURE_2D]=le(e.TEXTURE_2D,e.TEXTURE_2D,1),ue[e.TEXTURE_CUBE_MAP]=le(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[e.TEXTURE_2D_ARRAY]=le(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ue[e.TEXTURE_3D]=le(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),N(e.DEPTH_TEST),o.setFunc(3),ye(!1),be(1),N(e.CULL_FACE),_e(0);function N(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function de(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function fe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function pe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function me(t){return h!==t&&(e.useProgram(t),h=t,!0)}let he={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};he[103]=e.MIN,he[104]=e.MAX;let ge={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function _e(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(de(e.BLEND),g=!1);else if(g===!1&&(N(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:L(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:L(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:L(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:L(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(he[n],he[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ge[r],ge[i],ge[o],ge[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ve(t,n){t.side===2?de(e.CULL_FACE):N(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ye(r),t.blending===1&&t.transparent===!1?_e(0):_e(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Se(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?N(e.SAMPLE_ALPHA_TO_COVERAGE):de(e.SAMPLE_ALPHA_TO_COVERAGE)}function ye(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function be(t){t===0?de(e.CULL_FACE):(N(e.CULL_FACE),t!==ee&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),ee=t}function xe(t){t!==O&&(ne&&e.lineWidth(t),O=t)}function Se(t,n,r){t?(N(e.POLYGON_OFFSET_FILL),(k!==n||te!==r)&&(k=n,te=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):de(e.POLYGON_OFFSET_FILL)}function Ce(t){t?N(e.SCISSOR_TEST):de(e.SCISSOR_TEST)}function we(t){t===void 0&&(t=e.TEXTURE0+A-1),M!==t&&(e.activeTexture(t),M=t)}function Te(t,n,r){r===void 0&&(r=M===null?e.TEXTURE0+A-1:M);let i=ie[r];i===void 0&&(i={type:void 0,texture:void 0},ie[r]=i),(i.type!==t||i.texture!==n)&&(M!==r&&(e.activeTexture(r),M=r),e.bindTexture(t,n||ue[t]),i.type=t,i.texture=n)}function Ee(){let t=ie[M];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function De(){try{e.compressedTexImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Oe(){try{e.compressedTexImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function ke(){try{e.texSubImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Ae(){try{e.texSubImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Me(){try{e.compressedTexSubImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Ne(){try{e.texStorage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Pe(){try{e.texStorage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function P(){try{e.texImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Fe(){try{e.texImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Ie(t){return d[t]===void 0?e.getParameter(t):d[t]}function Le(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function F(t){se.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),se.copy(t))}function Re(t){ce.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ce.copy(t))}function ze(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Be(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Ve(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},M=null,ie={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new V(0,0,0),T=0,E=!1,D=null,ee=null,O=null,k=null,te=null,se.set(0,0,e.canvas.width,e.canvas.height),ce.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:N,disable:de,bindFramebuffer:fe,drawBuffers:pe,useProgram:me,setBlending:_e,setMaterial:ve,setFlipSided:ye,setCullFace:be,setLineWidth:xe,setPolygonOffset:Se,setScissorTest:Ce,activeTexture:we,bindTexture:Te,unbindTexture:Ee,compressedTexImage2D:De,compressedTexImage3D:Oe,texImage2D:P,texImage3D:Fe,pixelStorei:Le,getParameter:Ie,updateUBOMapping:ze,uniformBlockBinding:Be,texStorage2D:Ne,texStorage3D:Pe,texSubImage2D:ke,texSubImage3D:Ae,compressedTexSubImage2D:je,compressedTexSubImage3D:Me,scissor:F,viewport:Re,reset:Ve}}function Vu(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new z,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):Xe(`canvas`)}function T(e,t,n){let r=1,i=Ie(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),I(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&I(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function D(e){return e.generateMipmaps}function ee(e){l.generateMipmap(e)}function O(e){return e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?l.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function k(e,t,n,r,i,a=!1){if(e!==null){if(l[e]!==void 0)return l[e];I(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let o;r&&(o=u.get(`EXT_texture_norm16`),o||I(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let s=t;if(t===l.RED&&(n===l.FLOAT&&(s=l.R32F),n===l.HALF_FLOAT&&(s=l.R16F),n===l.UNSIGNED_BYTE&&(s=l.R8),n===l.UNSIGNED_SHORT&&o&&(s=o.R16_EXT),n===l.SHORT&&o&&(s=o.R16_SNORM_EXT)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.R8UI),n===l.UNSIGNED_SHORT&&(s=l.R16UI),n===l.UNSIGNED_INT&&(s=l.R32UI),n===l.BYTE&&(s=l.R8I),n===l.SHORT&&(s=l.R16I),n===l.INT&&(s=l.R32I)),t===l.RG&&(n===l.FLOAT&&(s=l.RG32F),n===l.HALF_FLOAT&&(s=l.RG16F),n===l.UNSIGNED_BYTE&&(s=l.RG8),n===l.UNSIGNED_SHORT&&o&&(s=o.RG16_EXT),n===l.SHORT&&o&&(s=o.RG16_SNORM_EXT)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RG8UI),n===l.UNSIGNED_SHORT&&(s=l.RG16UI),n===l.UNSIGNED_INT&&(s=l.RG32UI),n===l.BYTE&&(s=l.RG8I),n===l.SHORT&&(s=l.RG16I),n===l.INT&&(s=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGB8UI),n===l.UNSIGNED_SHORT&&(s=l.RGB16UI),n===l.UNSIGNED_INT&&(s=l.RGB32UI),n===l.BYTE&&(s=l.RGB8I),n===l.SHORT&&(s=l.RGB16I),n===l.INT&&(s=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(s=l.RGBA16UI),n===l.UNSIGNED_INT&&(s=l.RGBA32UI),n===l.BYTE&&(s=l.RGBA8I),n===l.SHORT&&(s=l.RGBA16I),n===l.INT&&(s=l.RGBA32I)),t===l.RGB&&(n===l.UNSIGNED_SHORT&&o&&(s=o.RGB16_EXT),n===l.SHORT&&o&&(s=o.RGB16_SNORM_EXT),n===l.UNSIGNED_INT_5_9_9_9_REV&&(s=l.RGB9_E5),n===l.UNSIGNED_INT_10F_11F_11F_REV&&(s=l.R11F_G11F_B10F)),t===l.RGBA){let e=a?He:zt.getTransfer(i);n===l.FLOAT&&(s=l.RGBA32F),n===l.HALF_FLOAT&&(s=l.RGBA16F),n===l.UNSIGNED_BYTE&&(s=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT&&o&&(s=o.RGBA16_EXT),n===l.SHORT&&o&&(s=o.RGBA16_SNORM_EXT),n===l.UNSIGNED_SHORT_4_4_4_4&&(s=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(s=l.RGB5_A1)}return(s===l.R16F||s===l.R32F||s===l.RG16F||s===l.RG32F||s===l.RGBA16F||s===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),s}function te(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,I(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function A(e,t){return D(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function ne(e){let t=e.target;t.removeEventListener(`dispose`,ne),re(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function j(e){let t=e.target;t.removeEventListener(`dispose`,j),ie(t)}function re(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&M(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function M(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=S.get(n);delete r[t.__cacheKey],h.memory.textures--}function ie(e){let t=f.get(e);if(e.depthTexture&&(e.depthTexture.dispose(),f.remove(e.depthTexture)),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let n=e.textures;for(let e=0,t=n.length;e<t;e++){let t=f.get(n[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(n[e])}f.remove(e)}let ae=0;function oe(){ae=0}function se(){return ae}function ce(e){ae=e}function le(){let e=ae;return e>=p.maxTextures&&I(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),ae+=1,e}function ue(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function N(e,t){let n=f.get(e);if(e.isVideoTexture&&P(e),e.isRenderTargetTexture===!1&&e.isExternalTexture!==!0&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)I(`WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)I(`WebGLRenderer: Texture marked for update but image is incomplete`);else{xe(n,e,t);return}}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function de(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?xe(n,e,t):(e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null),d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t))}function fe(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?xe(n,e,t):d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function pe(e,t){let n=f.get(e);e.isCubeDepthTexture!==!0&&e.version>0&&n.__version!==e.version?Se(n,e,t):d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let me={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},he={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},ge={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function _e(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&I(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,me[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,me[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,me[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,he[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,he[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,ge[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function ve(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,ne));let r=t.source,i=S.get(r);i===void 0&&(i={},S.set(r,i));let a=ue(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&M(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function ye(e,t,n){return Math.floor(Math.floor(e/n)/t)}function be(e,t,n,r){let i=e.updateRanges;if(i.length===0)d.texSubImage2D(l.TEXTURE_2D,0,0,0,t.width,t.height,n,r,t.data);else{i.sort((e,t)=>e.start-t.start);let a=0;for(let e=1;e<i.length;e++){let n=i[a],r=i[e],o=n.start+n.count,s=ye(r.start,t.width,4),c=ye(n.start,t.width,4);r.start<=o+1&&s===c&&ye(r.start+r.count-1,t.width,4)===s?n.count=Math.max(n.count,r.start+r.count-n.start):(++a,i[a]=r)}i.length=a+1;let o=d.getParameter(l.UNPACK_ROW_LENGTH),s=d.getParameter(l.UNPACK_SKIP_PIXELS),c=d.getParameter(l.UNPACK_SKIP_ROWS);d.pixelStorei(l.UNPACK_ROW_LENGTH,t.width);for(let e=0,a=i.length;e<a;e++){let a=i[e],o=Math.floor(a.start/4),s=Math.ceil(a.count/4),c=o%t.width,u=Math.floor(o/t.width),f=s;d.pixelStorei(l.UNPACK_SKIP_PIXELS,c),d.pixelStorei(l.UNPACK_SKIP_ROWS,u),d.texSubImage2D(l.TEXTURE_2D,0,c,u,f,1,n,r,t.data)}e.clearUpdateRanges(),d.pixelStorei(l.UNPACK_ROW_LENGTH,o),d.pixelStorei(l.UNPACK_SKIP_PIXELS,s),d.pixelStorei(l.UNPACK_SKIP_ROWS,c)}}function xe(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=ve(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){if(d.activeTexture(l.TEXTURE0+n),!(typeof ImageBitmap<`u`&&t.image instanceof ImageBitmap)){let e=zt.getPrimaries(zt.workingColorSpace),n=t.colorSpace===``?null:zt.getPrimaries(t.colorSpace),r=t.colorSpace===``||e===n?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,r)}d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment);let e=T(t.image,!1,p.maxTextureSize);e=Fe(t,e);let s=m.convert(t.format,t.colorSpace),c=m.convert(t.type),u=k(t.internalFormat,s,c,t.normalized,t.colorSpace,t.isVideoTexture);_e(r,t);let f,h=t.mipmaps,g=t.isVideoTexture!==!0,_=o.__version===void 0||i===!0,v=a.dataReady,y=A(t,e);if(t.isDepthTexture)u=te(t.format===E,t.type),_&&(g?d.texStorage2D(l.TEXTURE_2D,1,u,e.width,e.height):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,null));else if(t.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data);t.generateMipmaps=!1}else g?(_&&d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height),v&&be(t,e,s,c)):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,e.data)}else if(t.isCompressedTexture){if(t.isCompressedArrayTexture){g&&_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,e.depth);for(let n=0,r=h.length;n<r;n++)if(f=h[n],t.format!==1023){if(s!==null){if(g){if(v){if(t.layerUpdates.size>0){let e=Fs(f.width,f.height,t.format,t.type);for(let r of t.layerUpdates){let t=f.data.subarray(r*e/f.data.BYTES_PER_ELEMENT,(r+1)*e/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,r,f.width,f.height,1,s,t)}}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,f.data)}}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,f.data,0,0)}else I(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,c,f.data):d.texImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,s,c,f.data);t.layerUpdates.size>0&&t.clearLayerUpdates()}else{g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,n=h.length;e<n;e++)f=h[e],t.format===1023?g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data):s===null?I(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,f.data):d.compressedTexImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,f.data)}}else if(t.isDataArrayTexture){if(g){if(_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,e.width,e.height,e.depth),v){if(t.layerUpdates.size>0){let n=Fs(e.width,e.height,t.format,t.type);for(let r of t.layerUpdates){let t=e.data.subarray(r*n/e.data.BYTES_PER_ELEMENT,(r+1)*n/e.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,r,e.width,e.height,1,s,c,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)}}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,u,e.width,e.height,e.depth,0,s,c,e.data)}else if(t.isData3DTexture)g?(_&&d.texStorage3D(l.TEXTURE_3D,y,u,e.width,e.height,e.depth),v&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)):d.texImage3D(l.TEXTURE_3D,0,u,e.width,e.height,e.depth,0,s,c,e.data);else if(t.isFramebufferTexture){if(_){if(g)d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height);else{let t=e.width,n=e.height;for(let e=0;e<y;e++)d.texImage2D(l.TEXTURE_2D,e,u,t,n,0,s,c,null),t>>=1,n>>=1}}}else if(t.isHTMLTexture){if(`texElementImage2D`in l){let n=l.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),e.parentNode!==n){n.appendChild(e),b.add(t),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(l.texElementImage2D.length===3)l.texElementImage2D(l.TEXTURE_2D,l.RGBA8,e);else{let t=l.RGBA,n=l.RGBA,r=l.UNSIGNED_BYTE;l.texElementImage2D(l.TEXTURE_2D,0,t,n,r,e)}l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let e=Ie(h[0]);d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height)}for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,s,c,f):d.texImage2D(l.TEXTURE_2D,e,u,s,c,f);t.generateMipmaps=!1}else if(g){if(_){let t=Ie(e);d.texStorage2D(l.TEXTURE_2D,y,u,t.width,t.height)}v&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,s,c,e)}else d.texImage2D(l.TEXTURE_2D,0,u,s,c,e);D(t)&&ee(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function Se(e,t,n){if(t.image.length!==6)return;let r=ve(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=zt.getPrimaries(zt.workingColorSpace),o=t.colorSpace===``?null:zt.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=T(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=Fe(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=k(t.internalFormat,g,_,t.normalized,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=A(t,h);_e(l.TEXTURE_CUBE_MAP,t);let C;if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?I(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=Ie(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}D(t)&&ee(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function Ce(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=k(n.internalFormat,o,s,n.normalized,n.colorSpace),u=f.get(t),p=f.get(n);if(p.__renderTarget=t,!u.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),Pe(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,p.__webglTexture,0,Ne(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,p.__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function we(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=te(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;Pe(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Ne(t),a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Ne(t),a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=k(i.internalFormat,a,o,i.normalized,i.colorSpace);Pe(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Ne(t),s,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Ne(t),s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function Te(e,t,n){let r=t.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let i=f.get(t.depthTexture);if(i.__renderTarget=t,(!i.__webglTexture||t.depthTexture.image.width!==t.width||t.depthTexture.image.height!==t.height)&&(t.depthTexture.image.width=t.width,t.depthTexture.image.height=t.height,t.depthTexture.needsUpdate=!0),r){if(i.__webglInit===void 0&&(i.__webglInit=!0,t.depthTexture.addEventListener(`dispose`,ne)),i.__webglTexture===void 0){i.__webglTexture=l.createTexture(),d.bindTexture(l.TEXTURE_CUBE_MAP,i.__webglTexture),_e(l.TEXTURE_CUBE_MAP,t.depthTexture);let e=m.convert(t.depthTexture.format),n=m.convert(t.depthTexture.type),r;t.depthTexture.format===1026?r=l.DEPTH_COMPONENT24:t.depthTexture.format===1027&&(r=l.DEPTH24_STENCIL8);for(let i=0;i<6;i++)l.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,r,t.width,t.height,0,e,n,null)}}else N(t.depthTexture,0);let a=i.__webglTexture,o=Ne(t),s=r?l.TEXTURE_CUBE_MAP_POSITIVE_X+n:l.TEXTURE_2D,c=t.depthTexture.format===1027?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(t.depthTexture.format===1026)Pe(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else if(t.depthTexture.format===1027)Pe(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Ee(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)for(let n=0;n<6;n++)Te(t.__webglFramebuffer[n],e,n);else{let n=e.texture.mipmaps;n&&n.length>0?Te(t.__webglFramebuffer[0],e,0):Te(t.__webglFramebuffer,e,0)}}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),we(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else{let n=e.texture.mipmaps;if(n&&n.length>0?d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[0]):d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),we(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}}d.bindFramebuffer(l.FRAMEBUFFER,null)}function De(e,t,n){let r=f.get(e);t!==void 0&&Ce(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&Ee(e)}function Oe(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,j);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&Pe(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=k(r.internalFormat,a,o,r.normalized,r.colorSpace,e.isXRRenderTarget===!0),c=Ne(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),we(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),_e(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps&&t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)Ce(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else Ce(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);D(t)&&ee(l.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r),o=l.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(o=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(o,a.__webglTexture),_e(o,r),Ce(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,o,0),D(r)&&ee(o)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),_e(i,t),t.mipmaps&&t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)Ce(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else Ce(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);D(t)&&ee(i),d.unbindTexture()}e.depthBuffer&&Ee(e)}function ke(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(D(r)){let t=O(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),ee(t),d.unbindTexture()}}}let Ae=[],je=[];function Me(e){if(e.samples>0){if(Pe(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer);let c=e.texture.mipmaps;c&&c.length>0?d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer[0]):d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(Ae.length=0,je.length=0,Ae.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&(Ae.push(a),je.push(a),l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,je)),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,Ae))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function Ne(e){return Math.min(p.maxSamples,e.samples)}function Pe(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function P(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Fe(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(zt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&I(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):L(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ie(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=le,this.resetTextureUnits=oe,this.getTextureUnits=se,this.setTextureUnits=ce,this.setTexture2D=N,this.setTexture2DArray=de,this.setTexture3D=fe,this.setTextureCube=pe,this.rebindTextures=De,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Pe,this.isReversedDepthBuffer=function(){return d.buffers.depth.getReversed()}}function Hu(e,t){function n(n,r=``){let i,a=zt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Uu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wu=`
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

}`,Gu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Fi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new yo({vertexShader:Uu,fragmentShader:Wu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new H(new so(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ku=class extends it{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=typeof XRWebGLBinding<`u`,_=new Gu,v={},b=t.getContextAttributes(),x=null,S=null,C=[],D=[],ee=new z,O=null,k=null,te=new ps;te.viewport=new Xt;let A=new ps;A.viewport=new Xt;let ne=[te,A],j=new bs,re=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new Mn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new Mn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new Mn,C[e]=t),t.getHandSpace()};function ie(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ae(){r.removeEventListener(`select`,ie),r.removeEventListener(`selectstart`,ie),r.removeEventListener(`selectend`,ie),r.removeEventListener(`squeeze`,ie),r.removeEventListener(`squeezestart`,ie),r.removeEventListener(`squeezeend`,ie),r.removeEventListener(`end`,ae),r.removeEventListener(`inputsourceschange`,oe);for(let e=0;e<C.length;e++){let t=D[e];t!==null&&(D[e]=null,C[e].disconnect(t))}re=null,M=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,pe.stop(),n.isPresenting=!1,e.setPixelRatio(O),e.setSize(ee.width,ee.height,!1),k!==null){let e=k.camera;e.fov=k.fov,e.zoom=k.zoom,e.updateProjectionMatrix(),k=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&I(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&I(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,ie),r.addEventListener(`selectstart`,ie),r.addEventListener(`selectend`,ie),r.addEventListener(`squeeze`,ie),r.addEventListener(`squeezestart`,ie),r.addEventListener(`squeezeend`,ie),r.addEventListener(`end`,ae),r.addEventListener(`inputsourceschange`,oe),b.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(ee),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;b.depth&&(o=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?E:T,a=b.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Qt(f.textureWidth,f.textureHeight,{format:w,type:l,depthTexture:new Ni(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Qt(p.framebufferWidth,p.framebufferHeight,{format:w,type:l,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),pe.setContext(r),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function oe(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let se=new B,ce=new B;function le(e,t,n){se.setFromMatrixPosition(t.matrixWorld),ce.setFromMatrixPosition(n.matrixWorld);let r=se.distanceTo(ce),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ue(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),j.near=A.near=te.near=t,j.far=A.far=te.far=n,(re!==j.near||M!==j.far)&&(r.updateRenderState({depthNear:j.near,depthFar:j.far}),re=j.near,M=j.far),j.layers.mask=e.layers.mask|6,te.layers.mask=j.layers.mask&-5,A.layers.mask=j.layers.mask&-3;let i=e.parent,a=j.cameras;ue(j,i);for(let e=0;e<a.length;e++)ue(a[e],i);a.length===2?le(j,te,A):j.projectionMatrix.copy(te.projectionMatrix),k===null&&e.isPerspectiveCamera&&(k={camera:e,fov:e.fov,zoom:e.zoom}),N(e,j,i)};function N(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=ct*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(j)},this.getCameraTexture=function(e){return v[e]};let de=null;function fe(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==j.cameras.length&&(j.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=ne[n];o===void 0&&(o=new ps,o.layers.enable(n),o.viewport=new Xt,ne[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(j.matrix.copy(o.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),i===!0&&j.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new Fi,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=D[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}de&&de(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let pe=new Ls;pe.setAnimationLoop(fe),this.setAnimationLoop=function(e){de=e},this.dispose=function(){}}},qu=new tn,Ju=new Pt;Ju.set(-1,0,0,0,1,0,0,0,1);function Yu(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,ho(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(qu.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Ju),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Xu(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return L(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?I(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):I(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Zu=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Qu=null;function $u(){return Qu===null&&(Qu=new ui(Zu,16,16,O,g),Qu.name=`DFG_LUT`,Qu.minFilter=o,Qu.magFilter=o,Qu.wrapS=t,Qu.wrapT=t,Qu.generateMipmaps=!1,Qu.needsUpdate=!0),Qu}var ed=class{constructor(e={}){let{canvas:t=Ze(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:b=l}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=b,C=new Set([te,k,ee]),w=new Set([l,m,f,y,_,v]),T=new Uint32Array(4),E=new Int32Array(4),D=new B,O=null,A=null,ne=[],j=[],re=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,ie=!1,ae=null,oe=null,se=null,ce=null;this._outputColorSpace=Be;let le=0,ue=0,N=null,de=-1,fe=null,pe=new Xt,me=new Xt,he=null,ge=new V(0),_e=0,ve=t.width,ye=t.height,be=1,xe=null,Se=null,Ce=new Xt(0,0,ve,ye),we=new Xt(0,0,ve,ye),Te=!1,Ee=new Ci,De=!1,Oe=!1,ke=new tn,Ae=new B,je=new Xt,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ne=!1;function Pe(){return N===null?be:1}let P=n;function Fe(e,n){return t.getContext(e,n)}let Ie,Le,F,Re,ze,Ve,He,Ue,We,Ge,Ke,Je,Ye,Xe,Qe,et,tt,rt,it,at,ot,st,ct;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,ut,!1),t.addEventListener(`webglcontextrestored`,dt,!1),t.addEventListener(`webglcontextcreationerror`,ft,!1),P===null){let t=`webgl2`;if(P=Fe(t,e),P===null)throw Fe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}lt()}catch(e){throw t.removeEventListener(`webglcontextlost`,ut,!1),t.removeEventListener(`webglcontextrestored`,dt,!1),t.removeEventListener(`webglcontextcreationerror`,ft,!1),L(`WebGLRenderer: `+e.message),e}function lt(){Ie=new vc(P),Ie.init(),ot=new Hu(P,Ie),Le=new qs(P,Ie,e,ot),F=new Bu(P,Ie),Le.reversedDepthBuffer&&h&&F.buffers.depth.setReversed(!0),oe=P.createFramebuffer(),se=P.createFramebuffer(),ce=P.createFramebuffer(),Re=new xc(P),ze=new bu,Ve=new Vu(P,Ie,F,ze,Le,ot,Re),He=new _c(M),Ue=new Rs(P),st=new Gs(P,Ue),We=new yc(P,Ue,Re,st),Ge=new Cc(P,We,Ue,st,Re),rt=new Sc(P,Le,Ve),Qe=new Js(ze),Ke=new yu(M,He,Ie,Le,st,Qe),Je=new Yu(M,ze),Ye=new wu,Xe=new ju(Ie),tt=new Ws(M,He,F,Ge,x,s),et=new zu(M,Ge,Le),ct=new Xu(P,Re,Le,F),it=new Ks(P,Ie,Re),at=new bc(P,Ie,Re),Re.programs=Ke.programs,M.capabilities=Le,M.extensions=Ie,M.properties=ze,M.renderLists=Ye,M.shadowMap=et,M.state=F,M.info=Re}S!==1009&&(re=new Tc(S,t.width,t.height,o,r,i));let R=new Ku(M,P);this.xr=R,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let e=Ie.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ie.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(e){e!==void 0&&(be=e,this.setSize(ve,ye,!1))},this.getSize=function(e){return e.set(ve,ye)},this.setSize=function(e,n,r=!0){R.isPresenting?I(`WebGLRenderer: Can't change size while VR device is presenting.`):(ve=e,ye=n,t.width=Math.floor(e*be),t.height=Math.floor(n*be),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),re!==null&&re.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ve*be,ye*be).floor()},this.setDrawingBufferSize=function(e,n,r){ve=e,ye=n,be=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009)L(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){I(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}re.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(pe)},this.getViewport=function(e){return e.copy(Ce)},this.setViewport=function(e,t,n,r){e.isVector4?Ce.set(e.x,e.y,e.z,e.w):Ce.set(e,t,n,r),F.viewport(pe.copy(Ce).multiplyScalar(be).round())},this.getScissor=function(e){return e.copy(we)},this.setScissor=function(e,t,n,r){e.isVector4?we.set(e.x,e.y,e.z,e.w):we.set(e,t,n,r),F.scissor(me.copy(we).multiplyScalar(be).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(e){F.setScissorTest(Te=e)},this.setOpaqueSort=function(e){xe=e},this.setTransparentSort=function(e){Se=e},this.getClearColor=function(e){return e.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor(...arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(N!==null){let t=N.texture.format;e=C.has(t)}if(e){let e=N.texture.type,t=w.has(e),n=tt.getClearColor(),r=tt.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,P.clearBufferuiv(P.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,P.clearBufferiv(P.COLOR,0,E))}else r|=P.COLOR_BUFFER_BIT}t&&(r|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&P.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),ae=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ut,!1),t.removeEventListener(`webglcontextrestored`,dt,!1),t.removeEventListener(`webglcontextcreationerror`,ft,!1),tt.dispose(),Ye.dispose(),Xe.dispose(),ze.dispose(),He.dispose(),Ge.dispose(),st.dispose(),ct.dispose(),Ke.dispose(),R.dispose(),R.removeEventListener(`sessionstart`,yt),R.removeEventListener(`sessionend`,bt),xt.stop()};function ut(e){e.preventDefault(),$e(`WebGLRenderer: Context Lost.`),ie=!0}function dt(){$e(`WebGLRenderer: Context Restored.`),ie=!1;let e=Re.autoReset,t=et.enabled,n=et.autoUpdate,r=et.needsUpdate,i=et.type;lt(),Re.autoReset=e,et.enabled=t,et.autoUpdate=n,et.needsUpdate=r,et.type=i}function ft(e){L(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function pt(e){let t=e.target;t.removeEventListener(`dispose`,pt),mt(t)}function mt(e){ht(e),ze.remove(e)}function ht(e){let t=ze.get(e).programs;t!==void 0&&(t.forEach(function(e){Ke.releaseProgram(e)}),e.isShaderMaterial&&Ke.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Me);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=z(e,t,n,r,i);F.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=We.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;st.setup(i,r,s,n,c);let h,g=it;if(c!==null&&(h=Ue.get(c),g=at,g.setIndex(h)),i.isMesh)r.wireframe===!0?(F.setLineWidth(r.wireframeLinewidth*Pe()),g.setMode(P.LINES)):g.setMode(P.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),F.setLineWidth(e*Pe()),i.isLineSegments?g.setMode(P.LINES):i.isLineLoop?g.setMode(P.LINE_LOOP):g.setMode(P.LINE_STRIP)}else i.isPoints?g.setMode(P.POINTS):i.isSprite&&g.setMode(P.TRIANGLES);if(i.isBatchedMesh){if(Ie.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ue.get(c).bytesPerElement:1,o=ze.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(P,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function gt(e,t,n,r){ae!==null&&e.isNodeMaterial&&ae.setObject(r,e),De===!0&&Qe.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Dt(e,t,r),e.side=0,e.needsUpdate=!0,Dt(e,t,r),e.side=2):Dt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),ae!==null&&ae.renderStart(e,t,n),A=Xe.get(n),A.init(t),j.push(A),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(A.pushLight(e),e.castShadow&&A.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(A.pushLight(e),e.castShadow&&A.pushShadow(e))}),A.setupLights(),ae!==null&&ae.updateLights(A.state.lightsArray),Oe=this.localClippingEnabled,De=Qe.init(this.clippingPlanes,Oe),De===!0&&Qe.setGlobalState(this.clippingPlanes,t),ae!==null&&et.render(A.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];gt(o,n,t,e),r.add(o)}else gt(i,n,t,e),r.add(i)}}),A=j.pop(),ae!==null&&ae.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=ze.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Ie.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let _t=null;function vt(e){_t&&_t(e)}function yt(){xt.stop()}function bt(){xt.start()}let xt=new Ls;xt.setAnimationLoop(vt),typeof self<`u`&&xt.setContext(self),this.setAnimationLoop=function(e){_t=e,R.setAnimationLoop(e),e===null?xt.stop():xt.start()},R.addEventListener(`sessionstart`,yt),R.addEventListener(`sessionend`,bt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){L(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ie===!0)return;ae!==null&&ae.renderStart(e,t);let n=R.enabled===!0&&R.isPresenting===!0,r=re!==null&&(N===null||n)&&re.begin(M,N);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),R.enabled===!0&&R.isPresenting===!0&&(re===null||re.isCompositing()===!1)&&(R.cameraAutoUpdate===!0&&R.updateCamera(t),t=R.getCamera()),e.isScene===!0&&e.onBeforeRender(M,e,t,N),A=Xe.get(e,j.length),A.init(t),A.state.textureUnits=Ve.getTextureUnits(),j.push(A),ke.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Ee.setFromProjectionMatrix(ke,qe,t.reversedDepth),Oe=this.localClippingEnabled,De=Qe.init(this.clippingPlanes,Oe),O=Ye.get(e,ne.length),O.init(),ne.push(O),R.enabled===!0&&R.isPresenting===!0){let e=M.xr.getDepthSensingMesh();e!==null&&St(e,t,-1/0,M.sortObjects)}St(e,t,0,M.sortObjects),O.finish(),ae!==null&&ae.updateLights(A.state.lightsArray),M.sortObjects===!0&&O.sort(xe,Se),Ne=R.enabled===!1||R.isPresenting===!1||R.hasDepthSensing()===!1,Ne&&tt.addToRenderList(O,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),De===!0&&Qe.beginShadows();let i=A.state.shadowsArray;if(et.render(i,e,t),De===!0&&Qe.endShadows(),(r&&re.hasRenderPass())===!1){let n=O.opaque,r=O.transmissive;if(A.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];wt(n,r,e,a)}Ne&&tt.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];Ct(O,e,n,n.viewport)}}else r.length>0&&wt(n,r,e,t),Ne&&tt.render(e),Ct(O,e,t)}N!==null&&ue===0&&(Ve.updateMultisampleRenderTarget(N),Ve.updateRenderTargetMipmap(N)),r&&re.end(M),e.isScene===!0&&e.onAfterRender(M,e,t),st.resetDefaultState(),de=-1,fe=null,j.pop(),j.length>0?(A=j[j.length-1],Ve.setTextureUnits(A.state.textureUnits),De===!0&&Qe.setGlobalState(M.clippingPlanes,A.state.camera)):A=null,ne.pop(),O=ne.length>0?ne[ne.length-1]:null,ae!==null&&ae.renderEnd()};function St(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)A.pushLightProbeGrid(e);else if(e.isLight)A.pushLight(e),e.castShadow&&A.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(Ee)){r&&je.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ke);let i=Ge.update(e),a=e.material;a.visible&&O.push(e,i,a,n,je.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(Ee))){let i=Ge.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),je.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),je.copy(e.boundingSphere.center)),je.applyMatrix4(e.matrixWorld).applyMatrix4(ke)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&O.push(e,i,c,n,je.z,s,t)}}else a.visible&&O.push(e,i,a,n,je.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)St(i[e],t,n,r)}function Ct(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;A.setupLightsView(n),De===!0&&Qe.setGlobalState(M.clippingPlanes,n),r&&F.viewport(pe.copy(r)),i.length>0&&Tt(i,t,n),a.length>0&&Tt(a,t,n),o.length>0&&Tt(o,t,n),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function wt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[r.id]===void 0){let e=Ie.has(`EXT_color_buffer_half_float`)||Ie.has(`EXT_color_buffer_float`);A.state.transmissionRenderTarget[r.id]=new Qt(1,1,{generateMipmaps:!0,type:e?g:l,minFilter:c,samples:Math.max(4,Le.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:zt.workingColorSpace})}let a=A.state.transmissionRenderTarget[r.id],o=r.viewport||pe;a.setSize(o.z*M.transmissionResolutionScale,o.w*M.transmissionResolutionScale);let s=M.getRenderTarget(),u=M.getActiveCubeFace(),d=M.getActiveMipmapLevel();M.setRenderTarget(a),M.getClearColor(ge),_e=M.getClearAlpha(),_e<1&&M.setClearColor(16777215,.5),M.clear(),Ne&&tt.render(n);let f=M.toneMapping;M.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),A.setupLightsView(r),De===!0&&Qe.setGlobalState(M.clippingPlanes,r),Tt(e,n,r),Ve.updateMultisampleRenderTarget(a),Ve.updateRenderTargetMipmap(a),Ie.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Et(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Ve.updateMultisampleRenderTarget(a),Ve.updateRenderTargetMipmap(a))}M.setRenderTarget(s,u,d),M.setClearColor(ge,_e),p!==void 0&&(r.viewport=p),M.toneMapping=f}function Tt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Et(o,t,n,s,l,c)}}function Et(e,t,n,r,i,a){ae!==null&&i.isNodeMaterial&&ae.setObject(e,i),e.onBeforeRender(M,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(M,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,M.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,M.renderBufferDirect(n,t,r,i,e,a),i.side=2):M.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(M,t,n,r,i,a)}function Dt(e,t,n){t.isScene!==!0&&(t=Me);let r=ze.get(e),i=A.state.lights,a=A.state.shadowsArray,o=i.state.version,s=Ke.getParameters(e,i.state,a,t,n,A.state.lightProbeGridArray),c=Ke.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=He.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,pt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return kt(e,s),d}else s.uniforms=Ke.getUniforms(e),ae!==null&&e.isNodeMaterial&&ae.build(e,n,s),e.onBeforeCompile(s,M),d=Ke.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Qe.uniform),kt(e,s),r.needsLights=Mt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=A.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Ot(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Ml.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function kt(e,t){let n=ze.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function At(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function z(e,t,n,r,i){t.isScene!==!0&&(t=Me),Ve.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=N===null?M.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:zt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=He.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(h=M.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=ze.get(r),y=A.state.lights;if(De===!0&&(Oe===!0||e!==fe)){let t=e===fe&&r.id===de;Qe.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Qe.numPlanes||v.numIntersection!==Qe.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=A.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=Dt(r,t,i),ae&&r.isNodeMaterial&&ae.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(F.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==de&&(de=r.id,C=!0),v.needsLights){let e=At(A.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||fe!==e){F.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(P,`projectionMatrix`,e.projectionMatrix),T.setValue(P,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(P,Ae.setFromMatrixPosition(e.matrixWorld)),Le.logarithmicDepthBuffer&&T.setValue(P,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(P,`isOrthographic`,e.isOrthographicCamera===!0),fe!==e&&(fe=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(P,`sunShadowMap`,y.state.sunShadowMap,Ve),y.state.directionalShadowMap.length>0&&T.setValue(P,`directionalShadowMap`,y.state.directionalShadowMap,Ve),y.state.spotShadowMap.length>0&&T.setValue(P,`spotShadowMap`,y.state.spotShadowMap,Ve),y.state.pointShadowMap.length>0&&T.setValue(P,`pointShadowMap`,y.state.pointShadowMap,Ve)),i.isSkinnedMesh){T.setOptional(P,i,`bindMatrix`),T.setOptional(P,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(P,`boneTexture`,e.boneTexture,Ve))}i.isBatchedMesh&&(T.setOptional(P,i,`batchingTexture`),T.setValue(P,`batchingTexture`,i._matricesTexture,Ve),T.setOptional(P,i,`batchingIdTexture`),T.setValue(P,`batchingIdTexture`,i._indirectTexture,Ve),T.setOptional(P,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(P,`batchingColorTexture`,i._colorsTexture,Ve));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&rt.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(P,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=$u()),C){if(T.setValue(P,`toneMappingExposure`,M.toneMappingExposure),v.needsLights&&jt(E,w),a&&r.fog===!0&&Je.refreshFogUniforms(E,a),Je.refreshMaterialUniforms(E,r,be,ye,A.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}Ml.upload(P,Ot(v),E,Ve)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Ml.upload(P,Ot(v),E,Ve),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(P,`center`,i.center),T.setValue(P,`modelViewMatrix`,i.modelViewMatrix),T.setValue(P,`normalMatrix`,i.normalMatrix),T.setValue(P,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];ct.update(n,x),ct.bind(n,x)}}return x}function jt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Mt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return le},this.getActiveMipmapLevel=function(){return ue},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(e,t,n){let r=ze.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),ze.get(e.texture).__webglTexture=t,ze.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=ze.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){N=e,le=t,ue=n;let r=null,i=!1,a=!1;if(e){let o=ze.get(e);if(o.__useDefaultFramebuffer!==void 0){F.bindFramebuffer(P.FRAMEBUFFER,o.__webglFramebuffer),pe.copy(e.viewport),me.copy(e.scissor),he=e.scissorTest,F.viewport(pe),F.scissor(me),F.setScissorTest(he),de=-1;return}if(o.__webglFramebuffer===void 0)Ve.setupRenderTarget(e);else if(o.__hasExternalTextures)Ve.rebindTextures(e,ze.get(e.texture).__webglTexture,ze.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&ze.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Ve.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=ze.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Ve.useMultisampledRTT(e)===!1?ze.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,pe.copy(e.viewport),me.copy(e.scissor),he=e.scissorTest}else pe.copy(Ce).multiplyScalar(be).floor(),me.copy(we).multiplyScalar(be).floor(),he=Te;if(n!==0&&(r=oe),F.bindFramebuffer(P.FRAMEBUFFER,r)&&F.drawBuffers(e,r),F.viewport(pe),F.scissor(me),F.setScissorTest(he),i){let r=ze.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=ze.get(e.textures[t]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=ze.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,t.__webglTexture,n)}de=-1};function Nt(e){let t=ze.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Le.textureFormatReadable(e.format),t.__typeReadable=Le.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){L(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=ze.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){F.bindFramebuffer(P.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let u=Nt(o);if(u.__formatReadable===!1){L(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){L(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&P.readPixels(t,n,r,i,ot.convert(c),ot.convert(l),a)}finally{let e=N===null?null:ze.get(N).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=ze.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){F.bindFramebuffer(P.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let d=Nt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.bufferData(P.PIXEL_PACK_BUFFER,a.byteLength,P.STREAM_READ),P.readPixels(t,n,r,i,ot.convert(l),ot.convert(u),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let p=N===null?null:ze.get(N).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,p);let m=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await nt(P,m,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,a),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(f),P.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Ve.setTexture2D(e,0),P.copyTexSubImage2D(P.TEXTURE_2D,n,0,0,o,s,i,a),F.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=ot.convert(t.format),_=ot.convert(t.type),v;t.isData3DTexture?(Ve.setTexture3D(t,0),v=P.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Ve.setTexture2DArray(t,0),v=P.TEXTURE_2D_ARRAY):(Ve.setTexture2D(t,0),v=P.TEXTURE_2D),F.activeTexture(P.TEXTURE0),F.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,t.flipY),F.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),F.pixelStorei(P.UNPACK_ALIGNMENT,t.unpackAlignment);let y=F.getParameter(P.UNPACK_ROW_LENGTH),b=F.getParameter(P.UNPACK_IMAGE_HEIGHT),x=F.getParameter(P.UNPACK_SKIP_PIXELS),S=F.getParameter(P.UNPACK_SKIP_ROWS),C=F.getParameter(P.UNPACK_SKIP_IMAGES);F.pixelStorei(P.UNPACK_ROW_LENGTH,h.width),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,h.height),F.pixelStorei(P.UNPACK_SKIP_PIXELS,l),F.pixelStorei(P.UNPACK_SKIP_ROWS,u),F.pixelStorei(P.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=ze.get(e),r=ze.get(t),h=ze.get(n.__renderTarget),g=ze.get(r.__renderTarget);F.bindFramebuffer(P.READ_FRAMEBUFFER,h.__webglFramebuffer),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ze.get(e).__webglTexture,i,d+n),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ze.get(t).__webglTexture,a,m+n)),P.blitFramebuffer(l,u,o,s,f,p,o,s,P.DEPTH_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||ze.has(e)){let n=ze.get(e),r=ze.get(t);F.bindFramebuffer(P.READ_FRAMEBUFFER,se),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,ce);for(let e=0;e<c;e++)w?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,n.__webglTexture,i),T?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,r.__webglTexture,a),i===0?T?P.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):P.copyTexSubImage2D(v,a,f,p,l,u,o,s):P.blitFramebuffer(l,u,o,s,f,p,o,s,P.COLOR_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?P.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h);F.pixelStorei(P.UNPACK_ROW_LENGTH,y),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,b),F.pixelStorei(P.UNPACK_SKIP_PIXELS,x),F.pixelStorei(P.UNPACK_SKIP_ROWS,S),F.pixelStorei(P.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&P.generateMipmap(v),F.unbindTexture()},this.initRenderTarget=function(e){ze.get(e).__webglFramebuffer===void 0&&Ve.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Ve.setTextureCube(e,0):e.isData3DTexture?Ve.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Ve.setTexture2DArray(e,0):Ve.setTexture2D(e,0),F.unbindTexture()},this.resetState=function(){le=0,ue=0,N=null,F.reset(),st.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return qe}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=zt._getDrawingBufferColorSpace(e),t.unpackColorSpace=zt._getUnpackColorSpace()}},td=class extends Qo{constructor(e){super(e),this.type=g}parse(e){let t=function(e,t){switch(e){case 1:throw Error(`THREE.HDRLoader: Read Error: `+(t||``));case 2:throw Error(`THREE.HDRLoader: Write Error: `+(t||``));case 3:throw Error(`THREE.HDRLoader: Bad File Format: `+(t||``));default:case 4:throw Error(`THREE.HDRLoader: Memory Error: `+(t||``))}},n=function(e,t,n){t||=1024;let r=e.pos,i=-1,a=0,o=``,s=String.fromCharCode.apply(null,new Uint16Array(e.subarray(r,r+128)));for(;0>(i=s.indexOf(`
`))&&a<t&&r<e.byteLength;)o+=s,a+=s.length,r+=128,s=String.fromCharCode.apply(null,new Uint16Array(e.subarray(r,r+128)));return-1<i&&(!1!==n&&(e.pos+=a+i+1),o+s.slice(0,i))},r=function(e){let r=/^#\?(\S+)/,i=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,a=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,o=/^\s*FORMAT=(\S+)\s*$/,s=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,c={valid:0,string:``,comments:``,programtype:`RGBE`,format:``,gamma:1,exposure:1,width:0,height:0},l,u;for((e.pos>=e.byteLength||!(l=n(e)))&&t(1,`no header found`),(u=l.match(r))||t(3,`bad initial token`),c.valid|=1,c.programtype=u[1],c.string+=l+`
`;l=n(e),!1!==l;)if(c.string+=l+`
`,l.charAt(0)===`#`)c.comments+=l+`
`;else if((u=l.match(i))&&(c.gamma=parseFloat(u[1])),(u=l.match(a))&&(c.exposure=parseFloat(u[1])),(u=l.match(o))&&(c.valid|=2,c.format=u[1]),(u=l.match(s))&&(c.valid|=4,c.height=parseInt(u[1],10),c.width=parseInt(u[2],10)),c.valid&2&&c.valid&4)break;return c.valid&2||t(3,`missing format specifier`),c.valid&4||t(3,`missing image size specifier`),c},i=function(e,n,r){let i=n;if(i<8||i>32767||e[0]!==2||e[1]!==2||e[2]&128)return new Uint8Array(e);i!==(e[2]<<8|e[3])&&t(3,`wrong scanline width`);let a=new Uint8Array(4*n*r);a.length||t(4,`unable to allocate buffer space`);let o=0,s=0,c=4*i,l=new Uint8Array(4),u=new Uint8Array(c),d=r;for(;d>0&&s<e.byteLength;){s+4>e.byteLength&&t(1),l[0]=e[s++],l[1]=e[s++],l[2]=e[s++],l[3]=e[s++],(l[0]!=2||l[1]!=2||(l[2]<<8|l[3])!=i)&&t(3,`bad rgbe scanline format`);let n=0,r;for(;n<c&&s<e.byteLength;){r=e[s++];let i=r>128;if(i&&(r-=128),(r===0||n+r>c)&&t(3,`bad scanline data`),i){let t=e[s++];for(let e=0;e<r;e++)u[n++]=t}else u.set(e.subarray(s,s+r),n),n+=r,s+=r}let f=i;for(let e=0;e<f;e++){let t=0;a[o]=u[e+t],t+=i,a[o+1]=u[e+t],t+=i,a[o+2]=u[e+t],t+=i,a[o+3]=u[e+t],o+=4}d--}return a},a=function(e,t,n,r){let i=2**(e[t+3]-128)/255;n[r+0]=e[t+0]*i,n[r+1]=e[t+1]*i,n[r+2]=e[t+2]*i,n[r+3]=1},s=function(e,t,n,r){let i=2**(e[t+3]-128)/255;n[r+0]=yr.toHalfFloat(Math.min(e[t+0]*i,65504)),n[r+1]=yr.toHalfFloat(Math.min(e[t+1]*i,65504)),n[r+2]=yr.toHalfFloat(Math.min(e[t+2]*i,65504)),n[r+3]=yr.toHalfFloat(1)},c=new Uint8Array(e);c.pos=0;let l=r(c),u=l.width,d=l.height,f=i(c.subarray(c.pos),u,d),p,m,_;switch(this.type){case h:_=f.length/4;let e=new Float32Array(_*4);for(let t=0;t<_;t++)a(f,t*4,e,t*4);p=e,m=h;break;case g:_=f.length/4;let t=new Uint16Array(_*4);for(let e=0;e<_;e++)s(f,e*4,t,e*4);p=t,m=g;break;default:throw Error(`THREE.HDRLoader: Unsupported type: `+this.type)}return{width:u,height:d,data:p,header:l.string,gamma:l.gamma,exposure:l.exposure,type:m,colorSpace:Ve,minFilter:o,magFilter:o,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}},nd=60/116/4,rd=.15,id=e=>440*2**((e-69)/12),ad=[[60,64,67],[55,59,62],[57,60,64],[53,57,60]],od=[36,43,45,41],sd=[76,0,79,0,81,79,76,74,74,0,71,74,79,0,0,0,72,76,81,0,79,76,72,74,77,0,76,74,72,0,0,0],cd=[72,74,76,79,76,0,74,72,71,0,74,0,79,78,79,0,81,0,79,76,72,0,76,79,77,76,74,76,72,0,0,0],ld=class{ctx=null;out=null;drums=null;lead=null;noise=null;timer=0;step=0;next=0;enabled=!0;mode=`menu`;start(e,t,n){this.ctx=e,this.noise=n,this.out=e.createGain(),this.out.gain.value=0,this.out.connect(t),this.drums=e.createGain(),this.drums.gain.value=.4,this.drums.connect(this.out),this.lead=e.createGain(),this.lead.gain.value=.7,this.lead.connect(this.out),this.next=e.currentTime+.1,this.timer=window.setInterval(()=>this.schedule(),40),this.apply()}setEnabled(e){this.enabled=e,this.apply()}setMode(e){this.mode=e,this.apply()}apply(){if(!this.ctx||!this.out||!this.drums||!this.lead)return;let e=this.ctx.currentTime;this.out.gain.setTargetAtTime(this.enabled?.16:0,e,.3),this.drums.gain.setTargetAtTime(this.mode===`flight`?1:.35,e,.4),this.lead.gain.setTargetAtTime(this.mode===`flight`?.75:.5,e,.4)}stop(){window.clearInterval(this.timer)}schedule(){let e=this.ctx;if(!e||e.state!==`running`)e&&(this.next=e.currentTime+.05);else for(this.next<e.currentTime-.2&&(this.next=e.currentTime+.05);this.next<e.currentTime+rd;)this.play(this.step,this.next),this.step=(this.step+1)%128,this.next+=nd}play(e,t){let n=Math.floor(e/16)%4,r=Math.floor(e/64),i=e%16,a=ad[n];if(i%2==0){let e=a[i/2%3]+(i%8==6?12:0);this.pluck(id(e+12),t,.05,.22)}if((i===0||i===8||i===11)&&this.bass(id(od[n]),t),i%2==0){let e=(r?cd:sd)[n*8+i/2];e&&this.leadNote(id(e),t)}(i===0||i===8)&&this.kick(t),(i===4||i===12)&&this.snare(t),i%2==0&&this.hat(t,i%4==2?.05:.025)}voice(e,t,n,r,i,a){let o=this.ctx,s=o.createOscillator();s.type=e,s.frequency.value=t;let c=o.createGain();c.gain.setValueAtTime(1e-4,n),c.gain.exponentialRampToValueAtTime(r,n+.008),c.gain.exponentialRampToValueAtTime(1e-4,n+i),s.connect(c).connect(a),s.start(n),s.stop(n+i+.05)}pluck(e,t,n,r){this.voice(`triangle`,e,t,n,r,this.out)}bass(e,t){this.voice(`triangle`,e,t,.32,.32,this.out),this.voice(`sine`,e/2,t,.25,.25,this.out)}leadNote(e,t){let n=this.ctx,r=n.createOscillator();r.type=`square`,r.frequency.value=e;let i=n.createOscillator();i.frequency.value=5.5;let a=n.createGain();a.gain.value=e*.006,i.connect(a).connect(r.frequency);let o=n.createBiquadFilter();o.type=`lowpass`,o.frequency.value=2200;let s=n.createGain();s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(.05,t+.015),s.gain.exponentialRampToValueAtTime(1e-4,t+.32),r.connect(o).connect(s).connect(this.lead),r.start(t),i.start(t),r.stop(t+.36),i.stop(t+.36)}kick(e){let t=this.ctx,n=t.createOscillator();n.frequency.setValueAtTime(150,e),n.frequency.exponentialRampToValueAtTime(45,e+.14);let r=t.createGain();r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(.55,e+.005),r.gain.exponentialRampToValueAtTime(1e-4,e+.2),n.connect(r).connect(this.drums),n.start(e),n.stop(e+.25)}noiseHit(e,t,n,r,i){let a=this.ctx,o=a.createBufferSource();o.buffer=this.noise;let s=a.createBiquadFilter();s.type=t,s.frequency.value=n;let c=a.createGain();c.gain.setValueAtTime(1e-4,e),c.gain.exponentialRampToValueAtTime(r,e+.003),c.gain.exponentialRampToValueAtTime(1e-4,e+i),o.connect(s).connect(c).connect(this.drums),o.start(e,Math.random()),o.stop(e+i+.05)}snare(e){this.noiseHit(e,`bandpass`,1800,.22,.16)}hat(e,t){this.noiseHit(e,`highpass`,7e3,t,.05)}},ud=class{ctx=null;master=null;sfxBus=null;noiseBuffer=null;wind=null;scrape=null;rocket=null;music=new ld;soundOn=!0;musicOn=!0;muted=!1;duckUntil=0;unlock(){if(!this.ctx){let e=window.AudioContext??window.webkitAudioContext;if(!e)return;this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=+!this.muted,this.master.connect(this.ctx.destination),this.sfxBus=this.ctx.createGain(),this.sfxBus.gain.value=this.soundOn?.9:0,this.sfxBus.connect(this.master);let t=this.ctx.sampleRate*2;this.noiseBuffer=this.ctx.createBuffer(1,t,this.ctx.sampleRate);let n=this.noiseBuffer.getChannelData(0);for(let e=0;e<t;e++)n[e]=Math.random()*2-1;this.wind=this.loopNoise(`lowpass`,400,.5),this.scrape=this.loopNoise(`highpass`,2500,.5),this.startRocket(),this.music.start(this.ctx,this.master,this.noiseBuffer),this.music.setEnabled(this.musicOn)}this.ctx.state===`suspended`&&this.ctx.resume()}setSound(e){this.soundOn=e,this.sfxBus&&this.ctx&&this.sfxBus.gain.setTargetAtTime(e?.9:0,this.ctx.currentTime,.05)}setMusic(e){this.musicOn=e,this.music.setEnabled(e)}setMusicMode(e){this.music.setMode(e)}setMuted(e){this.muted=e,this.master&&this.ctx&&this.master.gain.setTargetAtTime(+!e,this.ctx.currentTime,.05)}setPaused(e){this.ctx&&(e?this.ctx.suspend():this.ctx.resume())}loopNoise(e,t,n){let r=this.ctx,i=r.createBufferSource();i.buffer=this.noiseBuffer,i.loop=!0;let a=r.createBiquadFilter();a.type=e,a.frequency.value=t,a.Q.value=n;let o=r.createGain();return o.gain.value=0,i.connect(a).connect(o).connect(this.sfxBus),i.start(),{gain:o,filter:a}}startRocket(){let e=this.ctx,t=this.loopNoise(`lowpass`,900,.8),n=e.createOscillator();n.type=`sawtooth`,n.frequency.value=70;let r=e.createGain();r.gain.value=.25,n.connect(r).connect(t.filter),n.start(),this.rocket={gain:t.gain,osc:n,filter:t.filter}}update(e){if(!this.ctx||this.ctx.state!==`running`)return;let t=this.ctx.currentTime,n=Math.min(1,e.speed/70);if(this.wind){let n=1-Math.exp(-e.speed/55),r=t<this.duckUntil?.35:1;this.wind.gain.gain.setTargetAtTime(e.inAir||e.ramp||e.sliding?(.02+n*.13)*r:0,t,.25),this.wind.filter.frequency.setTargetAtTime(260+n*520+Math.sin(t*.7)*60,t,.3)}if(this.scrape){let n=(e.ramp||e.sliding)&&e.speed>1;this.scrape.gain.gain.setTargetAtTime(n?.05+Math.min(1,e.speed/30)*.12:0,t,.06),this.scrape.filter.frequency.setTargetAtTime(1800+Math.min(1,e.speed/30)*2500,t,.1)}this.rocket&&(this.rocket.gain.gain.setTargetAtTime(e.boosting?.42:0,t,e.boosting?.03:.12),this.rocket.osc.frequency.setTargetAtTime(60+n*50,t,.1),this.rocket.filter.frequency.setTargetAtTime(e.boosting?1100+Math.random()*300:500,t,.05))}env(e,t,n,r,i){e.gain.setValueAtTime(1e-4,t),e.gain.exponentialRampToValueAtTime(n,t+r),e.gain.exponentialRampToValueAtTime(1e-4,t+r+i)}tone(e){if(!this.ctx||!this.sfxBus)return;let t=this.ctx.currentTime+(e.delay??0),n=this.ctx.createOscillator();n.type=e.type??`sine`,n.frequency.setValueAtTime(e.from,t),n.frequency.exponentialRampToValueAtTime(e.to,t+e.attack+e.decay);let r=this.ctx.createGain();this.env(r,t,e.peak,e.attack,e.decay),n.connect(r).connect(e.dest??this.sfxBus),n.start(t),n.stop(t+e.attack+e.decay+.05)}noise(e){if(!this.ctx||!this.sfxBus||!this.noiseBuffer)return;let t=this.ctx.currentTime+(e.delay??0),n=this.ctx.createBufferSource();n.buffer=this.noiseBuffer;let r=this.ctx.createBiquadFilter();r.type=e.type,r.Q.value=e.q??1,r.frequency.setValueAtTime(e.from,t),r.frequency.exponentialRampToValueAtTime(e.to,t+e.attack+e.decay);let i=this.ctx.createGain();this.env(i,t,e.peak,e.attack,e.decay),n.connect(r).connect(i).connect(this.sfxBus),n.start(t,Math.random()*1.5),n.stop(t+e.attack+e.decay+.05)}click(){this.tone({type:`triangle`,from:880,to:660,peak:.12,attack:.003,decay:.06})}whoosh(e=1){this.noise({type:`bandpass`,from:400,to:2600,q:1.2,peak:.25*e,attack:.08,decay:.32})}coin(e){let t=1046.5*2**(Math.min(e,14)/24);this.tone({type:`square`,from:t,to:t,peak:.045,attack:.002,decay:.07}),this.tone({type:`triangle`,from:t*1.5,to:t*1.5,peak:.08,attack:.002,decay:.18,delay:.05})}bigCoin(){[1046.5,1318.5,1568,2093].forEach((e,t)=>this.tone({type:`triangle`,from:e,to:e,peak:.1,attack:.003,decay:.2,delay:t*.05}))}ring(){this.whoosh(1.3),[784,1175,1568].forEach((e,t)=>this.tone({type:`sine`,from:e,to:e*1.01,peak:.12,attack:.005,decay:.45,delay:t*.04}))}pop(){this.noise({type:`highpass`,from:1800,to:900,peak:.4,attack:.002,decay:.08}),this.tone({from:500,to:1400,peak:.12,attack:.005,decay:.12,delay:.02})}boing(){this.tone({type:`sine`,from:140,to:520,peak:.35,attack:.01,decay:.38}),this.tone({type:`triangle`,from:280,to:900,peak:.12,attack:.01,decay:.3,delay:.03})}squawk(){this.tone({type:`sawtooth`,from:1100,to:700,peak:.12,attack:.01,decay:.12}),this.tone({type:`sawtooth`,from:1250,to:650,peak:.1,attack:.01,decay:.16,delay:.13}),this.thud(.6)}zap(){this.tone({type:`square`,from:120,to:90,peak:.16,attack:.005,decay:.35}),this.noise({type:`bandpass`,from:4e3,to:2500,q:2,peak:.25,attack:.002,decay:.3})}splash(){this.noise({type:`bandpass`,from:1500,to:300,q:.8,peak:.5,attack:.01,decay:.55}),this.tone({from:220,to:80,peak:.25,attack:.005,decay:.2})}skip(e){let t=600+e*120;this.tone({from:t,to:t*1.8,peak:.16,attack:.004,decay:.12}),this.noise({type:`highpass`,from:3e3,to:1500,peak:.16,attack:.003,decay:.12})}thud(e=1){this.tone({from:150,to:50,peak:.4*e,attack:.004,decay:.22}),this.noise({type:`lowpass`,from:900,to:200,peak:.2*e,attack:.004,decay:.18})}crash(){this.thud(1.4),this.noise({type:`bandpass`,from:800,to:200,q:.7,peak:.35,attack:.005,decay:.5})}launch(){this.whoosh(1.6),this.tone({type:`triangle`,from:300,to:900,peak:.12,attack:.02,decay:.35})}perfect(){[880,1108.7,1318.5,1760].forEach((e,t)=>this.tone({type:`triangle`,from:e,to:e,peak:.14,attack:.004,decay:.3+(t===3?.4:0),delay:t*.06}))}early(){this.tone({type:`triangle`,from:300,to:200,peak:.14,attack:.005,decay:.2})}fuel(){[523,784,1046].forEach((e,t)=>this.tone({type:`square`,from:e,to:e,peak:.05,attack:.003,decay:.09,delay:t*.06}))}near(){this.whoosh(1.1),this.tone({type:`sine`,from:1400,to:700,peak:.08,attack:.01,decay:.3})}record(){let e=[523.25,659.25,783.99,1046.5,783.99,1046.5,1318.5];e.forEach((t,n)=>this.tone({type:`triangle`,from:t,to:t,peak:.14,attack:.005,decay:n===e.length-1?.9:.16,delay:n*.1}))}buy(){[659.25,783.99,1046.5,1318.5].forEach((e,t)=>this.tone({type:`triangle`,from:e,to:e,peak:.13,attack:.004,decay:t===3?.5:.12,delay:t*.065})),this.noise({type:`highpass`,from:6e3,to:4e3,peak:.06,attack:.002,decay:.2,delay:.2})}goal(){[784,988,1175,1568].forEach((e,t)=>this.tone({type:`triangle`,from:e,to:e,peak:.12,attack:.004,decay:.25,delay:t*.08}))}tally(){this.tone({type:`square`,from:1568,to:1568,peak:.03,attack:.002,decay:.04})}space(){[392,523.25,659.25,783.99].forEach((e,t)=>this.tone({type:`sine`,from:e,to:e,peak:.1,attack:.05,decay:1.2,delay:t*.15}))}squeak(e){if(!this.ctx||!this.sfxBus)return;let t=this.ctx.currentTime,n=(e,n,r,i,a=.16)=>{let o=this.ctx.createOscillator();o.type=`triangle`,o.frequency.setValueAtTime(e,t+i),o.frequency.exponentialRampToValueAtTime(n,t+i+r);let s=this.ctx.createOscillator();s.frequency.value=28;let c=this.ctx.createGain();c.gain.value=e*.04,s.connect(c).connect(o.frequency);let l=this.ctx.createGain();this.env(l,t+i,a,.012,r),this.duckUntil=Math.max(this.duckUntil,t+i+r+.15),o.connect(l).connect(this.sfxBus),o.start(t+i),s.start(t+i),o.stop(t+i+r+.05),s.stop(t+i+r+.05)},r=.94+Math.random()*.12;e===`go`?n(1500*r,2900*r,.32,.22):e===`happy`?(n(1900*r,2500*r,.07,0),n(2100*r,2800*r,.09,.1)):e===`scared`?n(2900*r,2200*r,.12,0,.18):n(1700*r,900*r,.22,0,.18)}yawn(){this.tone({type:`triangle`,from:700,to:260,peak:.12,attack:.08,decay:.7}),this.noise({type:`lowpass`,from:500,to:250,peak:.12,attack:.3,decay:.6,delay:.85})}turbo(){this.whoosh(1.8),this.tone({type:`sawtooth`,from:180,to:720,peak:.1,attack:.02,decay:.45})}gust(){this.noise({type:`bandpass`,from:300,to:1600,q:.8,peak:.32,attack:.15,decay:.7})}cloud(){this.noise({type:`lowpass`,from:1200,to:400,peak:.18,attack:.05,decay:.4})}},dd=(e,t=0,n=1)=>e<t?t:e>n?n:e,fd=(e,t,n)=>e+(t-e)*n,K=(e,t,n)=>{let r=dd((n-e)/(t-e));return r*r*(3-2*r)},pd=(e,t,n,r)=>fd(e,t,1-Math.exp(-n*r)),md=e=>{let t=(e+Math.PI)%(Math.PI*2);return t<0&&(t+=Math.PI*2),t-Math.PI},hd=(e,t,n,r)=>e+md(t-e)*(1-Math.exp(-n*r)),gd=`
attribute vec4 aColor;
attribute float aSize;
uniform float uScale;
varying vec4 vColor;
void main() {
  vColor = aColor;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = aSize * uScale / max(0.1, -mv.z);
  gl_Position = projectionMatrix * mv;
}
`,_d={soft:`float a = smoothstep(1.0, 0.0, d); a *= a;`,star:`float a = max(smoothstep(0.22, 0.0, abs(p.x * p.y) * 9.0 + d * 0.25) * smoothstep(1.0, 0.4, d), smoothstep(0.35, 0.0, d));`,chunk:`float a = smoothstep(1.0, 0.8, max(abs(p.x), abs(p.y)) * 2.0);`},vd=e=>`
varying vec4 vColor;
void main() {
  vec2 p = gl_PointCoord - 0.5;
  float d = length(p) * 2.0;
  ${_d[e]}
  if (a < 0.01) discard;
  gl_FragColor = vec4(vColor.rgb, vColor.a * a);
}
`,yd=class{points;max;pos;col;size;vel;life;maxLife;size0;size1;alpha0;grav;drag;material;next=0;alive=0;constructor(e,t,n=`soft`){this.max=e,this.pos=new Float32Array(e*3),this.col=new Float32Array(e*4),this.size=new Float32Array(e),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.size0=new Float32Array(e),this.size1=new Float32Array(e),this.alpha0=new Float32Array(e),this.grav=new Float32Array(e),this.drag=new Float32Array(e);let r=new Rr;r.setAttribute(`position`,new Cr(this.pos,3).setUsage(Ke)),r.setAttribute(`aColor`,new Cr(this.col,4).setUsage(Ke)),r.setAttribute(`aSize`,new Cr(this.size,1).setUsage(Ke)),this.material=new yo({uniforms:{uScale:{value:400}},vertexShader:gd,fragmentShader:vd(n),transparent:!0,depthWrite:!1,blending:t?2:1}),this.points=new ki(r,this.material),this.points.frustumCulled=!1,this.points.renderOrder=t?3:2}setPixelScale(e){this.material.uniforms.uScale.value=e}emit(e){let t=this.next;this.next=(this.next+1)%this.max,this.pos[t*3]=e.x,this.pos[t*3+1]=e.y,this.pos[t*3+2]=e.z,this.vel[t*3]=e.vx??0,this.vel[t*3+1]=e.vy??0,this.vel[t*3+2]=e.vz??0,this.life[t]=e.life,this.maxLife[t]=e.life,this.size0[t]=e.size,this.size1[t]=e.size1??e.size,this.alpha0[t]=e.alpha??1,this.grav[t]=e.gravity??0,this.drag[t]=e.drag??0,this.col[t*4]=e.color.r,this.col[t*4+1]=e.color.g,this.col[t*4+2]=e.color.b,this.alive=Math.min(this.max,this.alive+1)}update(e){if(this.alive===0)return;let t=0;for(let n=0;n<this.max;n++){if(this.life[n]<=0){this.size[n]=0;continue}t++;let r=this.life[n]=this.life[n]-e;if(r<=0){this.size[n]=0;continue}let i=Math.exp(-this.drag[n]*e);this.vel[n*3]=this.vel[n*3]*i,this.vel[n*3+1]=this.vel[n*3+1]*i-this.grav[n]*e,this.vel[n*3+2]=this.vel[n*3+2]*i,this.pos[n*3]=this.pos[n*3]+this.vel[n*3]*e,this.pos[n*3+1]=this.pos[n*3+1]+this.vel[n*3+1]*e,this.pos[n*3+2]=this.pos[n*3+2]+this.vel[n*3+2]*e;let a=1-r/this.maxLife[n];this.size[n]=this.size0[n]+(this.size1[n]-this.size0[n])*a,this.col[n*4+3]=this.alpha0[n]*Math.min(1,(1-a)*3)*Math.min(1,a*12+.2)}this.alive=t;let n=this.points.geometry;n.getAttribute(`position`).needsUpdate=!0,n.getAttribute(`aColor`).needsUpdate=!0,n.getAttribute(`aSize`).needsUpdate=!0}clear(){this.life.fill(0),this.size.fill(0),this.alive=0,this.points.geometry.getAttribute(`aSize`).needsUpdate=!0}},bd={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},xd=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},Sd=new ms(-1,1,1,-1,0,1),Cd=new class extends Rr{constructor(){super(),this.setAttribute(`position`,new Er([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new Er([0,2,0,0,2,0],2))}},wd=class{constructor(e){this._mesh=new H(Cd,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Sd)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Td=class extends xd{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof yo?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=go.clone(e.uniforms),this.material=new yo({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new wd(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Ed=class extends xd{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},Dd=class extends xd{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},Od=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new z);this._width=n.width,this._height=n.height,t=new Qt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:g}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Td(bd),this.copyPass.material.blending=0,this.timer=new xs}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}Ed!==void 0&&(r instanceof Ed?n=!0:r instanceof Dd&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new z);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},kd={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},Ad=class extends xd{constructor(){super(),this.isOutputPass=!0,this.uniforms=go.clone(kd.uniforms),this.material=new bo({name:kd.name,uniforms:this.uniforms,vertexShader:kd.vertexShader,fragmentShader:kd.fragmentShader}),this._fsQuad=new wd(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},zt.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},jd=class extends xd{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new V}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},Md={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new V(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},Nd=class e extends xd{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new z(256,256):new z(e.x,e.y),this.clearColor=new V(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Qt(i,a,{type:g,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new Qt(i,a,{type:g,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new Qt(i,a,{type:g,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=Md;this.highPassUniforms=go.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new yo({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new z(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=go.clone(bd.uniforms),this.blendMaterial=new yo({uniforms:this.copyUniforms,vertexShader:bd.vertexShader,fragmentShader:bd.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new V,this._oldClearAlpha=1,this._basic=new Xr,this._fsQuad=new wd(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new z(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new yo({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new z(.5,.5)},direction:{value:new z(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new yo({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Nd.BlurDirectionX=new z(1,0),Nd.BlurDirectionY=new z(0,1);var Pd={uniforms:{tDiffuse:{value:null},uTime:{value:0},uSpeed:{value:0},uBoost:{value:0},uVignette:{value:.32},uFlash:{value:0},uAspect:{value:1},uSat:{value:1.1}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform float uSpeed;
    uniform float uBoost;
    uniform float uVignette;
    uniform float uFlash;
    uniform float uAspect;
    uniform float uSat;
    varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(41.3, 289.1))) * 43758.5453); }
    void main() {
      vec2 c = vUv - 0.5;
      float ca = uBoost * 0.0025 * dot(c, c) * 4.0;
      vec3 col;
      col.r = texture2D(tDiffuse, vUv + c * ca).r;
      col.g = texture2D(tDiffuse, vUv).g;
      col.b = texture2D(tDiffuse, vUv - c * ca).b;

      vec2 q = vec2(c.x * uAspect, c.y);
      float r = length(q);
      if (uSpeed > 0.01) {
        float ang = atan(q.y, q.x) / 6.28318 + 0.5;
        float bins = 110.0;
        float id = floor(ang * bins);
        float f = fract(ang * bins);
        float rnd = hash(vec2(id, floor(uTime * 14.0)));
        float line = smoothstep(0.32, 0.0, abs(f - 0.5)) * step(0.55, rnd);
        float radial = smoothstep(0.42 + 0.18 * rnd, 0.95, r);
        col = mix(col, vec3(1.0), line * radial * uSpeed * 0.55);
      }

      float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = max(mix(vec3(l), col, uSat), 0.0);
      float vig = smoothstep(1.05, 0.25, r);
      col *= mix(1.0, vig, uVignette);
      col += uFlash;
      gl_FragColor = vec4(col, 1.0);
    }
  `},Fd=class{renderer;composer;bloom;grade;target;bloomEnabled=!0;constructor(e,t,n,r){this.renderer=e;let i=e.getDrawingBufferSize(new z);this.target=new Qt(i.x,i.y,{type:g,samples:r}),this.composer=new Od(e,this.target),this.composer.addPass(new jd(t,n)),this.bloom=new Nd(new z(i.x/2,i.y/2),.32,.5,1.5);let a=this.bloom.setSize.bind(this.bloom);this.bloom.setSize=(e,t)=>a(Math.max(1,Math.round(e/2)),Math.max(1,Math.round(t/2))),this.composer.addPass(this.bloom),this.grade=new Td(Pd),this.composer.addPass(this.grade),this.composer.addPass(new Ad)}setSize(e,t){this.composer.setPixelRatio(this.renderer.getPixelRatio()),this.composer.setSize(e,t),this.grade.uniforms.uAspect.value=e/t}setBloom(e){this.bloomEnabled=e,this.bloom.enabled=e}setSamples(e){for(let t of[this.composer.renderTarget1,this.composer.renderTarget2])t.samples!==e&&(t.samples=e,t.dispose())}set speed(e){this.grade.uniforms.uSpeed.value=e}set boost(e){this.grade.uniforms.uBoost.value=e}set flash(e){this.grade.uniforms.uFlash.value=e}set vignette(e){this.grade.uniforms.uVignette.value=e}render(e){this.grade.uniforms.uTime.value=e,this.composer.render()}},Id=70,Ld=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
}
`,Rd=`
uniform float uOpacity;
varying vec2 vUv;
void main() {
  float along = smoothstep(0.0, 0.35, vUv.x) * smoothstep(1.0, 0.6, vUv.x);
  float across = 1.0 - abs(vUv.y - 0.5) * 2.0;
  gl_FragColor = vec4(vec3(1.0), uOpacity * along * across);
}
`,zd=class{mesh;material;items=[];m=new tn;q=new jt;v=new B;s=new B;axis=new B(0,0,1);constructor(){this.material=new yo({uniforms:{uOpacity:{value:0}},vertexShader:Ld,fragmentShader:Rd,transparent:!0,depthWrite:!1,blending:2}),this.mesh=new yi(new so(1,1),this.material,Id),this.mesh.frustumCulled=!1,this.mesh.renderOrder=4;for(let e=0;e<Id;e++)this.items.push({x:0,y:0,z:0,k:Math.random()})}respawn(e,t,n,r){e.x=t+(r?40+Math.random()*50:(Math.random()-.3)*90),e.y=n+(Math.random()-.5)*34,e.z=(Math.random()-.6)*26,e.k=.4+Math.random()*.6}update(e,t,n,r,i=!1){let a=Math.hypot(n,r),o=dd((a-22)/50)*.22;if(this.material.uniforms.uOpacity.value=o,this.mesh.visible=o>.002,!this.mesh.visible&&!i)return;let s=Math.atan2(r,n);this.q.setFromAxisAngle(this.axis,s);let c=dd(a*.09,1,14);this.items.forEach((n,r)=>{(i||n.x<e-50||Math.abs(n.y-t)>30)&&this.respawn(n,e,t,!i),this.m.compose(this.v.set(n.x,n.y,n.z),this.q,this.s.set(c*n.k,.05+n.k*.05,1)),this.mesh.setMatrixAt(r,this.m)}),this.mesh.instanceMatrix.needsUpdate=!0}},Bd=new B;function Vd(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;Bd.copy(t),Bd[r]=0,Bd.normalize();let l=.5*o/(o+s),u=1-Bd.angleTo(e)/c;return Math.sign(Bd[n])===1?u*l:s/(o+s)+l+l*(1-u)}var Hd=class e extends Ii{constructor(e=1,t=1,n=1,r=2,i=.1){let a=r*2+1;if(i=Math.min(e/2,t/2,n/2,i),super(1,1,1,a,a,a),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:t,depth:n,segments:r,radius:i},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let s=new B,c=new B,l=new B(e,t,n).divideScalar(2).subScalar(i),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,m=new B,h=.5/a;for(let r=0,a=0;r<u.length;r+=3,a+=2)switch(s.fromArray(u,r),c.copy(s),c.x-=Math.sign(c.x)*h,c.y-=Math.sign(c.y)*h,c.z-=Math.sign(c.z)*h,c.normalize(),u[r+0]=l.x*Math.sign(s.x)+c.x*i,u[r+1]=l.y*Math.sign(s.y)+c.y*i,u[r+2]=l.z*Math.sign(s.z)+c.z*i,d[r+0]=c.x,d[r+1]=c.y,d[r+2]=c.z,Math.floor(r/p)){case 0:m.set(1,0,0),f[a+0]=Vd(m,c,`z`,`y`,i,n),f[a+1]=1-Vd(m,c,`y`,`z`,i,t);break;case 1:m.set(-1,0,0),f[a+0]=1-Vd(m,c,`z`,`y`,i,n),f[a+1]=1-Vd(m,c,`y`,`z`,i,t);break;case 2:m.set(0,1,0),f[a+0]=1-Vd(m,c,`x`,`z`,i,e),f[a+1]=Vd(m,c,`z`,`x`,i,n);break;case 3:m.set(0,-1,0),f[a+0]=1-Vd(m,c,`x`,`z`,i,e),f[a+1]=1-Vd(m,c,`z`,`x`,i,n);break;case 4:m.set(0,0,1),f[a+0]=1-Vd(m,c,`x`,`y`,i,e),f[a+1]=1-Vd(m,c,`y`,`x`,i,t);break;case 5:m.set(0,0,-1),f[a+0]=Vd(m,c,`x`,`y`,i,e),f[a+1]=1-Vd(m,c,`y`,`x`,i,t)}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.segments,t.radius)}};function Ud(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Rr,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=Wd(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=Wd(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function Wd(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new Cr(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function Gd(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var q=(e,t,n)=>t+(n-t)*e();function J(e,t,n=!1){let r=e.index?e.toNonIndexed():e;r!==e&&e.dispose(),n||r.deleteAttribute(`uv`);let i=new V(t),a=r.getAttribute(`position`).count,o=new Float32Array(a*3);for(let e=0;e<a;e++)o[e*3]=i.r,o[e*3+1]=i.g,o[e*3+2]=i.b;return r.setAttribute(`color`,new Cr(o,3)),r}function Kd(e,t){let n=e.getAttribute(`position`),r=e.getAttribute(`normal`),i=e.getAttribute(`color`),a=new B,o=new B,s=new V;for(let e=0;e<n.count;e++)a.fromBufferAttribute(n,e),o.fromBufferAttribute(r,e),s.setRGB(i.getX(e),i.getY(e),i.getZ(e)),t(a,o,s),i.setXYZ(e,s.r,s.g,s.b);return e}var qd=new tn,Jd=new jt,Yd=new fn,Xd=new B,Zd=new B;function Y(e,t,n,r,i=1,a=[0,0,0]){return Yd.set(a[0],a[1],a[2]),Jd.setFromEuler(Yd),typeof i==`number`?Zd.setScalar(i):Zd.set(i[0],i[1],i[2]),qd.compose(Xd.set(t,n,r),Jd,Zd),e.applyMatrix4(qd),e}function Qd(e){let t=Ud(e);for(let t of e)t.dispose();return t.computeBoundingSphere(),t}function $d(e,t,n,r=10,i=7){let a=new U(e,r,i),o=a.getAttribute(`position`),s=Gd(n),c=s()*10,l=s()*10,u=s()*10,d=new B;for(let e=0;e<o.count;e++){d.fromBufferAttribute(o,e);let n=d.clone().normalize(),r=1+t*(Math.sin(n.x*3.1+c)*Math.sin(n.y*2.7+l)*Math.sin(n.z*3.3+u)+.35*Math.sin(n.x*7+n.z*5+c));o.setXYZ(e,d.x*r,d.y*r,d.z*r)}return a.computeVertexNormals(),a}function ef(e,t,n=8){let r=[];for(let n=0;n<=5;n++){let i=n/5,a=e*(1-i)**.9,o=t*i-.18*e*(1-i)**6;r.push(new z(Math.max(.001,a),o))}return r.unshift(new z(.001,-.12*e)),r.splice(1,0,new z(e*.92,-.2*e)),new oo(r,n)}function tf(e,t){let n=document.createElement(`canvas`);return n.width=e,n.height=t,[n,n.getContext(`2d`)]}function nf(e){let t=new Mi(e);return t.colorSpace=Be,t.anisotropy=4,t}function rf(e,t,n,r){e.beginPath();for(let i=0;i<10;i++){let a=-Math.PI/2+i*Math.PI/5,o=i%2?r*.45:r;e.lineTo(t+Math.cos(a)*o,n+Math.sin(a)*o)}e.closePath()}function af(){let[e,t]=tf(512,512),n=Gd(3);t.fillStyle=`#c99257`,t.fillRect(0,0,512,512);for(let e=0;e<2600;e++)t.fillStyle=`rgba(${n()<.5?`120,80,40`:`235,190,130`},${.05+n()*.08})`,t.fillRect(n()*512,n()*512,1+n()*3,1+n()*2);for(let e=0;e<512;e+=10)t.fillStyle=`rgba(110,70,30,0.10)`,t.fillRect(0,e,512,3);return t.fillStyle=`#3f86e8`,t.globalAlpha=.9,t.fillRect(0,210,512,70),t.globalAlpha=.35,t.fillStyle=`#ffffff`,t.fillRect(0,216,512,10),t.globalAlpha=1,t.fillStyle=`#fff4e2`,rf(t,256,110,70),t.fill(),t.lineWidth=8,t.strokeStyle=`#e2483d`,t.stroke(),t.fillStyle=`#e2483d`,t.font=`800 72px Rubik, system-ui, sans-serif`,t.textAlign=`center`,t.fillText(`Х-1`,256,400),nf(e)}function of(e=[`#e8383d`,`#ffffff`]){let[t,n]=tf(64,256);for(let t=0;t<256;t+=32)n.fillStyle=t/32%2?e[1]:e[0],n.fillRect(0,t,64,32);for(let e=0;e<256;e+=4)n.fillStyle=`rgba(0,0,0,0.06)`,n.fillRect(0,e,64,1);return nf(t)}var sf=new V(16773852),cf=14,lf={top:15499560,side:16097862,cream:16773852,scarf:[`#e8383d`,`#ffffff`]};function uf(e,t){let n=e.getAttribute(`normal`),r=new Float32Array(n.count*3),i=new V(t.top),a=new V(t.side),o=new V(t.cream),s=new V;for(let e=0;e<n.count;e++){let t=n.getX(e),c=n.getY(e),l=n.getZ(e);s.copy(a).lerp(i,K(.1,.8,c));let u=K(-.1,-.55,c),d=K(.72,.93,t)*K(.12,-.12,c)*K(.55,.2,Math.abs(l));s.lerp(o,dd(Math.max(u,d))),r[e*3]=s.r,r[e*3+1]=s.g,r[e*3+2]=s.b}e.setAttribute(`color`,new Cr(r,3))}function df(){let e=new U(.55,56,40);return e.scale(1.1,.96,1),uf(e,lf),e}function ff(e,t){let n=new va,r=e=>e*t;n.moveTo(.3,0),n.quadraticCurveTo(.26,r(e*.55),.1,r(e*.95)),n.quadraticCurveTo(.02,r(e*1.05),-.12,r(e*.98)),n.lineTo(-.26,r(e*.82)),n.quadraticCurveTo(-.38,r(e*.35),-.32,0),n.closePath();let i=new no(n,{depth:.035,bevelEnabled:!0,bevelThickness:.02,bevelSize:.025,bevelSegments:3,curveSegments:10});return i.rotateX(Math.PI/2),i.translate(0,.0175,0),i}var pf=[{base:14856824,accent:4163304,tip:16774370,roughness:.85,metalness:0},{base:5017584,accent:16777215,tip:16765503,roughness:.6,metalness:0},{base:16764730,accent:15218749,tip:15218749,roughness:.45,metalness:0},{base:9397234,accent:16777215,tip:16765503,roughness:.5,metalness:0},{base:16763210,accent:16773552,tip:16769658,roughness:.25,metalness:1},{base:10479871,accent:4163304,tip:16777215,roughness:.2,metalness:1},{base:3093826,accent:6291440,tip:16734936,roughness:.25,metalness:1}],mf=e=>e>=20?6:e>=15?5:e>=10?4:e>=7?3:e>=4?2:+(e>=1);function hf(e,t){let n=.95+.065*Math.min(e,10)+.015*Math.max(0,e-10),r=pf[mf(e)];return Kd(J(ff(n,t),r.base),(t,i,a)=>{let o=Math.abs(t.z)/n;o>.86?a.setHex(r.tip):(mf(e)===0?Math.abs(o-.45)<.08:mf(e)===3?Math.floor(o*6)%2==1:Math.abs(t.x-0)<.06)&&a.setHex(r.accent)})}function gf(e){let t=e>=20?4:e>=14?3:e>=8?2:+(e>=4),n=[15218749,3108822,14212582,16763210,3093826][t],r=[16777215,16777215,15218749,16777215,6291440][t],i=[16765503,16765503,3093826,15218749,16734936][t],a=Math.min(e,10)+.3*Math.max(0,e-10),o=.62+.03*a,s=.12+.006*a,c=[];for(let e=0;e<=10;e++){let t=e/10;c.push(new z(Math.max(.001,s*Math.sin(Math.acos(1-t))),o/2+.28*(1-t)))}c.reverse(),c.push(new z(s,-o/2)),c.push(new z(s*.75,-o/2-.05)),c.push(new z(.001,-o/2-.05));let l=[Kd(J(new oo(c,20),n),(e,t,n)=>{(e.y>o/2+.05||Math.abs(e.y)<.06)&&n.setHex(r)})];for(let e=0;e<3;e++){let t=new va;t.moveTo(0,0),t.lineTo(.2,-.05),t.lineTo(.2,-.24),t.lineTo(0,-.14),t.closePath();let n=J(new no(t,{depth:.025,bevelEnabled:!1}),i);n.translate(s-.02,-o/2+.12,-.0125),n.rotateY(e*Math.PI*2/3),l.push(n)}l.push(J(Y(new zi(s*.72,s*.9,.12,16,1,!0),0,-o/2-.1,0),3817290));let u=Qd(l);return u.rotateZ(-Math.PI/2),u}function _f(e){let t=vf(e);return t.computeBoundingBox(),t.translate(0,-t.boundingBox.min.y,0),t}function vf(e){if(e<=0)return Qd([J(Y(new Hd(1.35,.12,.86,2,.04),0,0,0),12881999),J(Y(new Hd(.12,.3,.86,2,.04),.63,.1,0,1,[0,0,-.5]),12026698),J(Y(new Hd(1.36,.02,.2,1,.01),0,.065,0),4163304)]);if(e<=4){let e=[];for(let t of[-.34,.34]){let n=new Zi([new B(-.7,-.12,t),new B(.45,-.12,t),new B(.72,0,t),new B(.72,.18,t),new B(.6,.22,t)]);e.push(J(new lo(n,24,.035,8),12729136));for(let n of[-.45,0,.4])e.push(J(Y(new zi(.03,.03,.12,6),n,-.06,t),7030320))}for(let t of[-.5,-.25,0,.25,.5])e.push(J(Y(new Hd(.2,.05,.86,2,.02),t,.02,0),13142608));return Qd(e)}let t=e>=9,n=t?16763210:15218749;return Qd([J(Y(new U(1,28,14,0,Math.PI*2,Math.PI/2,Math.PI/2),0,.05,0,[.78,.2,.48]),n),J(Y(new co(1,.06,8,40),0,.05,0,[.78,.48,.6],[Math.PI/2,0,0]),t?16773552:16777215),J(Y(new Hd(.1,.32,.5,2,.04),-.72,.18,0,1,[0,0,.3]),t?16773552:3093826)])}function yf(){let e=document.createElement(`canvas`);e.width=128,e.height=32;let t=e.getContext(`2d`),n=t.createLinearGradient(0,0,128,0);n.addColorStop(0,`rgba(255,255,240,1)`),n.addColorStop(.18,`rgba(255,230,120,1)`),n.addColorStop(.5,`rgba(255,140,40,0.85)`),n.addColorStop(1,`rgba(255,60,20,0)`),t.fillStyle=n,t.fillRect(0,0,128,32);let r=new Mi(e);return r.colorSpace=Be,r}function bf(){let e=new Bi(.17,1.1,14,1,!0);e.rotateZ(Math.PI/2),e.translate(-.55,0,0);let t=e.getAttribute(`position`),n=e.getAttribute(`uv`);for(let e=0;e<t.count;e++)n.setXY(e,Math.min(1,-t.getX(e)/1.1),.5);return e}function xf(e){let t=new Float32Array(90),n=new Float32Array(60),r=[];for(let e=0;e<15;e++)if(n.set([0,e/cf,1,e/cf],e*4),e<cf){let t=e*2;r.push(t,t+1,t+2,t+1,t+3,t+2)}let i=new Rr;i.setAttribute(`position`,new Cr(t,3)),i.setAttribute(`uv`,new Cr(n,2)),i.setIndex(r);let a=new H(i,e);return a.frustumCulled=!1,a.castShadow=!0,{mesh:a,geo:i}}var Sf=class{root=new An;poseGroup=new An;body=new An;goggles=new An;eyes=[];happyEyes=[];cheeks=[];mouthO;ears=[];frontPaws=[];hindPaws=[];backpack=new An;wingGroup=new An;rocketGroup=new An;sledGroup=new An;nozzle=new kn;ribbon;flame;flameLevel=0;mats={};furGeos=[];earGeos=[];furId=`classic`;wingMeshes=[];rocketMesh=null;sledMesh=null;look={wings:-1,rocket:-1,sled:-1};pose=`stand`;time=0;blinkT=2;blink=0;goggleDown=0;fold=1;packSwing=1;facing=-Math.PI/2;squash=0;squashVel=0;happy=0;scared=0;dizzy=0;sleep=0;strain=0;wave=0;speed=0;spin=0;ribbonPts=Array.from({length:15},()=>new B);constructor(){let e=this.mats;e.fur=new xo({vertexColors:!0,roughness:.72,sheen:1,sheenRoughness:.45,sheenColor:new V(16769200)}),e.cream=new xo({color:sf,roughness:.75,sheen:1,sheenRoughness:.5,sheenColor:new V(16777215)}),e.pink=new W({color:16752052,roughness:.55}),e.blush=new W({color:16748456,roughness:.8,transparent:!0,opacity:.75}),e.eye=new W({color:1905938,roughness:.1,metalness:0,envMapIntensity:1.6}),e.shine=new Xr({color:16777215,toneMapped:!1}),e.white=new W({color:16777215,roughness:.3}),e.dark=new W({color:4860446,roughness:.6}),e.brass=new W({color:14722618,metalness:1,roughness:.28}),e.leather=new W({color:8013094,roughness:.55}),e.glass=new xo({color:9430783,roughness:.03,metalness:0,transparent:!0,opacity:.42,clearcoat:1,envMapIntensity:2.2}),e.card=new W({map:af(),roughness:.88}),e.scarf=new W({map:of(),roughness:.9,side:2}),e.painted=new W({vertexColors:!0,roughness:.5}),e.metalPaint=new W({vertexColors:!0,roughness:.3,metalness:.6}),this.root.add(this.poseGroup),this.poseGroup.add(this.body);let t=(e,t,n,r,i,a=this.body)=>{let o=new H(e,t);return o.position.set(n,r,i),o.castShadow=!0,a.add(o),o},n=df();this.furGeos.push(n),t(n,e.fur,0,0,0),this.outline(n,this.body,1.035);for(let n of[-1,1]){let r=t(new U(.24,24,16),e.cream,.36,-.12,n*.3);r.scale.set(1,.85,.9),this.outline(r.geometry,r,1.06),this.cheeks.push(r);let i=t(new U(.075,16,10),e.blush,.545,-.035,n*.4);i.scale.set(1,.75,.3),i.lookAt(new B(.732,-.035+.086,n*.5));let a=new An;a.position.set(.535,.15,n*.215),this.body.add(a),t(new U(.1,24,18),e.eye,0,0,0,a),t(new U(.033,12,8),e.shine,.075,.045,n*.022,a),t(new U(.016,8,6),e.shine,.088,-.03,-n*.02,a),this.eyes.push(a);let o=new An;o.position.copy(a.position),t(new co(.07,.018,8,16,Math.PI),e.eye,.06,-.02,0,o).rotation.set(0,Math.PI/2,0),o.visible=!1,this.body.add(o),this.happyEyes.push(o);let s=new An;s.position.set(-.02,.46,n*.33),s.rotation.set(n*-.35,0,.15),this.body.add(s);let c=new U(.17,20,14);J(c,lf.top),this.earGeos.push(c);let l=t(c,e.fur,0,.07,0,s);l.scale.set(.5,1,.95),this.outline(l.geometry,l,1.1),t(new U(.12,16,12),e.pink,.05,.07,0,s).scale.set(.35,.9,.8),this.ears.push(s);let u=t(new U(.085,16,12),e.pink,.42,-.4,n*.2);u.scale.set(1.2,.8,1),this.frontPaws.push(u);let d=t(new U(.1,16,12),e.pink,-.45,-.4,n*.25);d.scale.set(1.6,.6,1),this.hindPaws.push(d)}t(new U(.058,16,12),e.pink,.6,.04,0);for(let n of[-1,1])t(new Hd(.03,.075,.045,2,.01),e.white,.6,-.085,n*.025);t(new lo(new Zi([new B(.6,-.02,-.075),new B(.615,-.05,-.04),new B(.615,-.03,0),new B(.615,-.05,.04),new B(.6,-.02,.075)]),16,.011,6),e.dark,0,0,0),this.mouthO=t(new U(.045,14,10),e.dark,.61,-.075,0),this.mouthO.scale.set(.5,1.2,1),this.mouthO.visible=!1,t(new U(.06,12,10),e.cream,-.6,.04,0),this.buildGoggles(),t(new co(.53,.07,14,48),e.scarf,.02,-.06,0).rotation.set(0,Math.PI/2,.62,`ZYX`),this.ribbon=xf(e.scarf),this.body.add(this.ribbon.mesh),this.body.add(this.backpack);let r=t(new Hd(.66,.34,.62,3,.07),e.card,-.12,.5,0,this.backpack);r.rotation.z=.08,this.flame=new H(bf(),new Xr({map:yf(),transparent:!0,blending:2,depthWrite:!1,toneMapped:!1,side:2})),this.flame.visible=!1,this.flame.renderOrder=6,this.backpack.add(this.wingGroup,this.rocketGroup,this.flame),this.wingGroup.position.set(-.12,.5,0),this.rocketGroup.position.set(-.16,.8,0),this.poseGroup.add(this.sledGroup),this.sledGroup.position.set(0,-.78,0),this.setLook({wings:0,rocket:0,sled:0}),this.setPose(`stand`)}outline(e,t,n){this.mats.outline??=new Xr({color:4858898,side:1});let r=new H(e,this.mats.outline);r.scale.setScalar(n),t.add(r)}buildGoggles(){let e=this.mats;this.body.add(this.goggles);let t=new H(new co(.56,.032,10,56),e.leather);t.rotation.set(Math.PI/2,0,.22,`ZYX`),t.scale.set(1.06,1,1),t.position.y=.06,t.castShadow=!0,this.goggles.add(t);for(let t of[-1,1]){let n=new An;n.position.set(.615,.15,t*.205),n.rotation.set(0,-t*.32,0);let r=new H(new co(.118,.032,10,28),e.brass);r.rotation.y=Math.PI/2;let i=new H(new U(.112,24,12,0,Math.PI*2,0,Math.PI/2),e.glass);i.rotation.z=-Math.PI/2,i.scale.set(1,.42,1),n.add(r,i),this.goggles.add(n)}let n=new H(new zi(.02,.02,.16,8),e.brass);n.position.set(.655,.165,0),n.rotation.x=Math.PI/2,this.goggles.add(n)}setSkin(e,t){if(e===this.furId)return;this.furId=e;for(let e of this.furGeos)uf(e,t);for(let e of this.earGeos)J(e,t.top);let n=this.mats.scarf;n.map?.dispose(),n.map=of(t.scarf),n.needsUpdate=!0}setLook(e){let t=this.mats;if(e.wings!==this.look.wings){for(let e of this.wingMeshes)e.geometry.dispose(),this.wingGroup.remove(e);let n=mf(e.wings)>=4?t.metalPaint:t.painted;this.wingMeshes=[1,-1].map(t=>{let r=new H(hf(e.wings,t),n);return r.position.set(0,-.05,t*.24),r.rotation.set(t*-.12,0,0),r.castShadow=!0,this.wingGroup.add(r),r})}if(e.rocket!==this.look.rocket&&(this.rocketMesh&&=(this.rocketMesh.geometry.dispose(),this.rocketGroup.remove(this.rocketMesh),null),e.rocket>0)){this.rocketMesh=new H(gf(e.rocket),e.rocket>=8?t.metalPaint:t.painted),this.rocketMesh.castShadow=!0,this.rocketGroup.add(this.rocketMesh);let n=.62+.03*(Math.min(e.rocket,10)+.3*Math.max(0,e.rocket-10));this.nozzle.position.set(-.16-n/2-.16,.8,0)}e.sled!==this.look.sled&&(this.sledMesh&&(this.sledMesh.geometry.dispose(),this.sledGroup.remove(this.sledMesh)),this.sledMesh=new H(_f(e.sled),e.sled>=9?t.metalPaint:t.painted),this.sledMesh.castShadow=!0,this.sledMesh.receiveShadow=!0,this.sledGroup.add(this.sledMesh)),this.look={...e},this.backpack.add(this.nozzle)}get hasRocket(){return this.look.rocket>0}setPose(e){this.pose=e,this.sledGroup.visible=e===`stand`||e===`ride`,this.spin=0}kick(e){this.squashVel+=e*14}setHappy(e){this.happy=e}setScared(e){this.scared=Math.max(this.scared,e),this.happy=0}setSleep(e){this.sleep=e,this.happy=0,this.scared=0}setDizzy(e){this.dizzy=e,this.happy=0}tumble(){this.spin=Math.PI*2}faceToward(e,t){this.facing=Math.atan2(-t,e)}waveHello(){this.wave=1.6}update(e,t,n){if(this.time+=e,this.flameLevel=pd(this.flameLevel,n&&this.hasRocket?1:0,n?18:10,e),this.flame.visible=this.flameLevel>.02,this.flame.visible){let e=.85+Math.random()*.3;this.flame.position.copy(this.nozzle.position),this.flame.scale.set(this.flameLevel*e*(1.1+this.look.rocket*.05),.6+this.flameLevel*.4,.6+this.flameLevel*.4)}this.speed=pd(this.speed,t,6,e);let r=this.time,i=dd(this.speed/45);this.squashVel+=(-this.squash*190-this.squashVel*13)*e,this.squash=dd(this.squash+this.squashVel*e,-.35,.35);let a=this.pose===`stand`?Math.sin(r*2.4)*.018:0,o=this.squash;this.body.scale.set(1-o*.7+(n?.04:0),1+o*.9+a-(n?.03:0),1-o*.35),this.blinkT-=e,this.blinkT<=0&&(this.blink=.14,this.blinkT=2.2+Math.random()*3),this.blink=Math.max(0,this.blink-e),this.happy=Math.max(0,this.happy-e),this.scared=Math.max(0,this.scared-e),this.dizzy=Math.max(0,this.dizzy-e),this.sleep=Math.max(0,this.sleep-e),this.strain=pd(this.strain,this.pose===`fly`?Math.max(+!!n,dd((this.speed-70)/90)):0,4,e);let s=this.happy>0&&this.scared<=0,c=this.scared>0,l=this.sleep>0?.06:this.blink>0&&!c?.12:c?1.25:this.dizzy>0?.18:1-this.strain*.4,u=c?1.2:1;for(let t of this.eyes)t.scale.y=pd(t.scale.y,l,30,e),t.scale.x=t.scale.z=pd(t.scale.x,u,20,e),t.visible=!s;for(let e of this.happyEyes)e.visible=s;let d=1+this.strain*.16+(s?.06:0);for(let e of this.cheeks)e.scale.set(d,.85*d,.9*d);this.mouthO.visible=c||this.strain>.6,this.mouthO.scale.y=c?1.5:1.1;let f=this.pose===`ride`?.35:0;this.goggleDown=pd(this.goggleDown,f,8,e),this.goggles.rotation.z=(1-this.goggleDown)*.5;let p=Math.sin(r*(14+i*30))*.12*i;this.ears.forEach((e,t)=>{let n=t===0?-1:1;e.rotation.z=fd(.15,1.1,i)+p*(t?1:-1),e.rotation.x=n*-.35+Math.sin(r*3+t)*.04});let m=this.pose===`fly`;this.frontPaws.forEach((e,t)=>{let n=t===0?-1:1;if(m)e.position.set(.66,-.26+Math.sin(r*8+t)*.02,n*.24);else if(this.pose===`stand`){let r=t===1&&this.wave>0?Math.sin(this.wave*12)*.08:0;e.position.set(.47,-.3+(t===1&&this.wave>0?.25:0)+r,n*.2)}else e.position.set(.5,-.4,n*.26)}),this.wave=Math.max(0,this.wave-e),this.hindPaws.forEach((e,t)=>{let n=t===0?-1:1;e.position.set(m?-.6:-.45,m?-.22+Math.sin(r*9+t*2)*.03:-.4,n*.22)});let h=+(this.pose===`ride`);this.fold=pd(this.fold,h,h?6:9,e),this.packSwing=pd(this.packSwing,+(this.pose===`stand`),6,e),this.backpack.rotation.z=this.packSwing*1.45,this.wingMeshes.forEach((e,t)=>{let n=t===0?1:-1;e.rotation.set(n*(-.12-(m?Math.sin(r*7)*.03*i:0)+this.fold*.1),-n*this.fold*1.3,0)});let g=0,_=0;if(this.pose===`stand`?(g=this.facing+Math.sin(r*.7)*.12,_=.12):this.pose===`swim`&&(_=Math.sin(r*3)*.08),this.spin>0&&(this.spin=Math.max(0,this.spin-e*9),_-=this.spin),this.sleep>0&&(_+=Math.sin(r*2.2)*.12),this.dizzy>0){let e=Math.min(1,this.dizzy);g+=Math.sin(r*8)*.14*e,_+=Math.cos(r*8)*.06*e}this.poseGroup.rotation.set(0,g,_),this.updateRibbon(e)}updateRibbon(e){let t=this.time,n=dd(this.speed/40),r=.11,i=new B(.18,.36,.34),a=this.ribbonPts;a[0].copy(i);let o=this.pose===`stand`?1-n:(1-n)*.5;for(let e=1;e<a.length;e++){let s=e/(a.length-1),c=(.05+.18*s)*(.4+.6*(1-n)+.5*n),l=6+n*16,u=-Math.cos(o*1.2),d=-Math.sin(o*1.2);a[e].set(a[e-1].x+u*r,a[e-1].y+d*r+Math.sin(t*l-e*.9)*c*.25,i.z+Math.sin(t*l*.7-e*.7)*c*.5+s*.12)}let s=this.ribbon.geo.getAttribute(`position`);for(let e=0;e<a.length;e++){let t=a[e],n=.17*(1-e/a.length*.25);s.setXYZ(e*2,t.x,t.y+n/2,t.z),s.setXYZ(e*2+1,t.x,t.y-n/2,t.z)}s.needsUpdate=!0,this.ribbon.geo.computeVertexNormals()}cloneSled(){if(!this.sledMesh)return null;let e=this.sledMesh.clone();return e.castShadow=!0,e}nozzleWorld(e){return this.nozzle.getWorldPosition(e)}},Cf={"app.title":`Полетели!`,"app.loading":`Смазываем санки…`,"app.tagline":`Разгонись, взлети и улетай всё дальше!`,"title.play":`Играть`,"title.best":`Рекорд: {d}`,"hangar.fly":`Полетели!`,"hangar.upgrades":`Улучшения`,"hangar.level":`ур. {n}`,"hangar.max":`Максимум`,"hangar.best":`Рекорд`,"hangar.goal":`Цель`,"hangar.daily":`Задание дня`,"hangar.rent":`Ракета на полёт`,"hangar.rentOn":`Ракета заправлена!`,"hangar.needRocket":`Сначала ракета`,"hangar.records":`Рекорды`,"hangar.settings":`Настройки`,"hangar.glide":`Планирование`,"up.ramp":`Трамплин`,"up.wings":`Крылья`,"up.sled":`Санки`,"up.aero":`Обтекаемость`,"up.rocket":`Ракета`,"up.fuel":`Топливо`,"up.magnet":`Магнит`,"up.ramp.desc":`Старт выше — разгон сильнее`,"up.wings.desc":`Дольше паришь в воздухе`,"up.sled.desc":`Резвее летишь по трамплину`,"up.aero.desc":`Воздух меньше тормозит`,"up.rocket.desc":`Жми — и вперёд, в небо!`,"up.fuel.desc":`Ракета работает дольше`,"up.magnet.desc":`Монеты летят к тебе сами`,"stat.ramp":`Высота`,"stat.wings":`Подъём`,"stat.sled":`Разгон`,"stat.aero":`Обтекаемость`,"stat.rocket":`Тяга`,"stat.fuel":`Топливо`,"stat.magnet":`Радиус`,"unit.m":`м`,"unit.km":`км`,"unit.kmh":`км/ч`,"unit.s":`с`,"unit.pct":`%`,"hud.distance":`Дистанция`,"hud.height":`Высота`,"hud.speed":`Скорость`,"hud.boost":`Ракета`,"hud.pause":`Пауза`,"hint.jump":`Жми у самого края трамплина!`,"hint.jumpTouch":`Тапни у самого края трамплина!`,"hint.steer":`↑ ↓ или W S — наклон`,"hint.steerTouch":`Стрелки слева или верх и низ экрана — наклон`,"hint.boost":`Пробел — ракета`,"hint.boostTouch":`Кнопка справа — ракета`,"hint.dive":`Ныряй вниз, чтобы разогнаться!`,"flash.go":`Поехали!`,"flash.perfect":`ИДЕАЛЬНО!`,"flash.early":`Рановато!`,"flash.near":`Чуть-чуть! +{n}`,"flash.record":`НОВЫЙ РЕКОРД!`,"flash.skip":`Блинчик ×{n}!`,"flash.ring":`Ускорение!`,"flash.gust":`Попутный ветер!`,"flash.sleep":`Сонная конфета… Хр-р`,"flash.turbo":`Турбо-перчик!`,"flash.magnet":`Звёздный магнит!`,"effect.sleep":`Спит: {n} с`,"effect.turbo":`Турбо: {n} с`,"effect.magnet":`Магнит: {n} с`,"flash.ouch":`Ой!`,"flash.zap":`Бзз!`,"flash.space":`Край космоса!`,"flash.bounce":`Пружинка!`,"flash.balloon":`Шарик!`,"flash.fuel":`+Топливо`,"flash.splash":`Плюх!`,"flash.crash":`Бум!`,"flash.lap":`Круг {n}!`,"flash.overtake":`Обогнал: {name}!`,"banner.lap":`Круг {n} · {d}`,"biome.mountains":`Снежные горы`,"biome.forest":`Лес`,"biome.lake":`Озеро`,"biome.town":`Городок`,"biome.desert":`Пустыня`,"biome.sea":`Море`,"results.title":`Полёт окончен!`,"results.record":`Новый рекорд!`,"results.distance":`За дистанцию`,"results.collected":`Собрано монет`,"results.style":`Высота и трюки`,"results.recordBonus":`Бонус за рекорд`,"results.goals":`Цели`,"results.total":`Итого`,"results.double":`Удвоить`,"results.continue":`Продолжить`,"results.next":`Дальше`,"results.height":`Высота`,"results.speed":`Скорость`,"results.best":`Рекорд {d}`,"results.toRecord":`До рекорда {d}`,"goal.done":`Цель выполнена!`,"goal.d200":`Пролети 200 м`,"goal.up1":`Купи первое улучшение`,"goal.perfect":`Сделай идеальный прыжок`,"goal.forest":`Долети до леса`,"goal.spd120":`Разгонись до 120 км/ч`,"goal.h60":`Взлети на 60 м над землёй`,"goal.coins40":`Собери 40 монет за полёт`,"goal.lake":`Долети до озера`,"goal.skip3":`Сделай 3 блинчика по воде`,"goal.town":`Долети до городка`,"goal.spd250":`Разгонись до 250 км/ч`,"goal.h250":`Взлети на 250 м над землёй`,"goal.desert":`Долети до пустыни`,"goal.coins150":`Собери 150 монет за полёт`,"goal.sea":`Долети до моря`,"goal.space":`Доберись до края космоса`,"goal.d8000":`Пролети 8 км`,"daily.distanceRun":`Пролети {n} м за один полёт`,"daily.coinsDay":`Собери {n} монет`,"daily.ringsDay":`Пролети сквозь {n} колец`,"daily.distanceDay":`Налетай {n} м за день`,"daily.skipsDay":`Сделай {n} блинчиков по воде`,"daily.claim":`Забрать`,"daily.done":`Выполнено`,"offline.title":`С возвращением!`,"offline.text":`Пока тебя не было, хомяк тренировался:`,"offline.take":`Забрать`,"offline.double":`Забрать ×2`,"records.title":`Рекорды`,"records.you":`Ты`,"records.empty":`Таблица пока недоступна`,"settings.title":`Настройки`,"settings.sound":`Звуки`,"settings.music":`Музыка`,"settings.fullscreen":`Во весь экран`,"settings.reset":`Начать заново`,"settings.resetConfirm":`Точно стереть весь прогресс?`,"pause.title":`Пауза`,"pause.resume":`Продолжить`,"pause.quit":`Закончить полёт`,"ad.title":`Реклама`,"ad.stub":`Здесь покажется реклама площадки`,"ad.badge":`Реклама`,"toast.bought":`{name}: уровень {n}!`,"toast.noCoins":`Не хватает монет`,"toast.rented":`Ракета заправлена на один полёт!`,"toast.doubled":`Монеты удвоены!`,"toast.adFail":`Реклама сейчас недоступна`,"toast.daily":`Задание дня выполнено!`,"toast.newBiome":`Новое место: {name}`,"results.stars":`Звёзды славы ★{n}`,"season.title":`Новый сезон`,"season.badge":`Сезон {n}`,"season.stars":`★ {n}`,"season.btn":`Новый сезон ★+{n}`,"season.lockedBtn":`Новый сезон — с {d}`,"season.text":`Хомяк начнёт заново: улучшения и монеты обнулятся. Взамен — звёзды славы навсегда: каждая звезда даёт больше монет за полёт и делает хомяка сильнее.`,"season.gain":`Ты получишь: ★ {n}`,"season.now":`Сейчас: ★ {stars} · монеты ×{mul}`,"season.after":`После: ★ {stars} · монеты ×{mul}`,"season.go":`Начать сезон`,"season.cancel":`Ещё полетаю`,"season.started":`Сезон {n}! Звёзд: {stars}`,"season.hint":`Новый сезон доступен — звёзды славы ускорят прокачку`,"streak.title":`Награда за вход`,"streak.sub":`Заходи каждый день: на 7-й день — большой мешок монет.`,"streak.day":`День {n}`,"streak.claim":`Забрать`,"streak.ok":`Отлично!`,"streak.skipHint":`Один пропуск в неделю прощается`,"streak.forgiven":`Пропуск прощён — серия продолжается`,"streak.back":`С возвращением! Серия продолжается: день {n}`,"streak.backFirst":`С возвращением! Сегодня — день 1`,"tomorrow.line":`Завтра: день {n} — {coins} {w} и новое задание дня`,"almost.line":`Почти: {name}`,"almost.season":`Открой новый сезон`,"shortcut.text":`Добавь «Полетели!» на рабочий стол — заходить в одно касание`,"shortcut.add":`Добавить`,"shortcut.later":`Не сейчас`,"shortcut.done":`Готово! Хомяк ждёт на рабочем столе`,"ach.title":`Достижения`,"ach.skins":`Скины`,"ach.btn":`Достижения`,"ach.done":`Достижение: {name}`,"ach.reward.coins":`+{n} монет`,"ach.reward.skin":`Скин «{name}»`,"ach.equip":`Надеть`,"ach.equipped":`Надет`,"ach.locked":`Закрыт`,"ach.km1":`Первый километр`,"ach.km5":`Пять километров`,"ach.km10":`Десятка`,"ach.km20":`Двадцать километров`,"ach.km30":`Тридцать километров`,"ach.km50":`Полсотни километров`,"ach.lap2":`Второй круг`,"ach.lap5":`Пятый круг`,"ach.space":`Край космоса`,"ach.orbit":`Почти орбита`,"ach.speed500":`500 км/ч`,"ach.sound":`Звуковой барьер`,"ach.perfect10":`10 идеальных прыжков`,"ach.perfect100":`100 идеальных прыжков`,"ach.skips5":`5 блинчиков за полёт`,"ach.rings100":`100 колец`,"ach.rings1000":`1000 колец`,"ach.runs10":`10 полётов`,"ach.runs100":`100 полётов`,"ach.runs500":`500 полётов`,"ach.total100":`Налёт 100 км`,"ach.total1000":`Налёт 1000 км`,"ach.season2":`Второй сезон`,"ach.season5":`Пятый сезон`,"ach.season10":`Десятый сезон`,"ach.streak7":`Неделя подряд`,"ach.cards5":`Пять открыток`,"ach.cardsAll":`Все открытки`,"flash.card":`Открытка: {name}!`,"cards.title":`Открытки`,"cards.where":`{place}, круг {n}`,"cards.hint":`Открытки спрятаны на трассе — по одной на место, новые появляются на следующих кругах`,"card.mountains1":`Вершина в облаках`,"card.forest1":`Сосновый бор`,"card.forest2":`Грибная поляна`,"card.forest3":`Совиное дупло`,"card.lake1":`Парусники`,"card.lake2":`Утиная бухта`,"card.lake3":`Закат над озером`,"card.town1":`Черепичные крыши`,"card.town2":`Площадь с часами`,"card.town3":`Ночные фонари`,"card.desert1":`Барханы`,"card.desert2":`Оазис`,"card.desert3":`Караван`,"card.sea1":`Маяк`,"card.sea2":`Дельфины`,"card.sea3":`Остров сокровищ`,"ach.maxed":`Всё на максимум`,"skin.classic":`Рыжик`,"skin.snow":`Снежок`,"skin.cocoa":`Какао`,"skin.smoke":`Дымок`,"skin.panda":`Панда`,"skin.berry":`Ягодка`,"skin.mint":`Мята`,"skin.cosmo":`Космос`,"skin.gold":`Золотой`,"skin.rainbow":`Радуга`,"skin.shop":`В магазине`,"records.distance":`Дальность`,"records.altitude":`Высота`,"records.total":`Налёт, км`,"records.stub":`Здесь пример: настоящая таблица — в игре на Яндексе.`,"rival.ahead":`Впереди {name}: {d}`,"shop.title":`Магазин`,"shop.owned":`Куплено`,"shop.hint":`Мешки монет растут с ценой твоих следующих улучшений.`,"product.coins":`+{n} монет`,"product.starter_pack":`+{coins} монет и скин «Радуга». Один раз.`,"product.no_ads":`Без рекламы между полётами. Реклама за награду — по желанию.`,"product.rocket_forever":`Ракета 5-го уровня в каждом полёте, даже без своей`,"toast.purchased":`Покупка получена!`,"toast.purchaseFailed":`Покупка не прошла`,"goal.lap2":`Начни второй круг`,"goal.d10000":`Пролети 10 км`,"goal.spd600":`Разгонись до 600 км/ч`,"goal.h1500":`Поднимись на 1,5 км`,"goal.d15000":`Пролети 15 км`,"goal.d20000":`Пролети 20 км`,"goal.sound":`Преодолей звуковой барьер`,"goal.d30000":`Пролети 30 км`,"goal.d50000":`Пролети 50 км`,"compare.pitches":`Это {n} {w}!`,"compare.pitch":`футбольное поле|футбольных поля|футбольных полей`,"compare.liberty":`Выше статуи Свободы!`,"compare.eiffel":`Выше Эйфелевой башни!`,"compare.ostankino":`Выше Останкинской башни!`,"compare.burj":`Выше самого высокого небоскрёба!`,close:`Закрыть`,coins:`монета|монеты|монет`},wf={ru:Cf},Tf=`ru`,Ef=new Intl.PluralRules(`ru`),Df=new Set([`ru`,`be`,`kk`,`uk`,`uz`,`ky`,`tg`,`hy`,`az`]);function Of(e){let t=(e??``).toLowerCase().split(`-`)[0]??``;return Df.has(t)?`ru`:`en`}function kf(e){Tf=wf[e]?e:`ru`,Ef=new Intl.PluralRules(Tf),typeof document<`u`&&(document.documentElement.lang=Tf)}var Af=()=>wf[Tf]??Cf;function X(e,t){let n=Af()[e];if(t)for(let[e,r]of Object.entries(t))n=n.replaceAll(`{${e}}`,String(r));return n}function jf(e,t){let n=Af()[e]??e;if(t)for(let[e,r]of Object.entries(t))n=n.replaceAll(`{${e}}`,String(r));return n}function Mf(e,t){let n=Af()[e].split(`|`),r=Ef.select(t);return Tf===`ru`?n[r===`one`?0:r===`few`?1:2]??n[0]:n[r===`one`?0:1]??n[0]}function Z(e,t=0){return e.toLocaleString(Tf===`ru`?`ru-RU`:`en-US`,{maximumFractionDigits:t,minimumFractionDigits:t})}function Nf(e){return e>=1e4?`${Z(e/1e3,1)} ${X(`unit.km`)}`:`${Z(Math.max(0,Math.floor(e)))} ${X(`unit.m`)}`}var Pf=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],Ff=.5*(Math.sqrt(3)-1),If=(3-Math.sqrt(3))/6;function Lf(e){let t=Gd(e),n=new Uint8Array(256);for(let e=0;e<256;e++)n[e]=e;for(let e=255;e>0;e--){let r=Math.floor(t()*(e+1)),i=n[e];n[e]=n[r],n[r]=i}let r=new Uint8Array(512);for(let e=0;e<512;e++)r[e]=n[e&255];let i=(e,t,n)=>{let r=.5-t*t-n*n;if(r<=0)return 0;let i=Pf[e&7];return r*=r,r*r*(i[0]*t+i[1]*n)};return(e,t)=>{let n=(e+t)*Ff,a=Math.floor(e+n),o=Math.floor(t+n),s=(a+o)*If,c=e-(a-s),l=t-(o-s),u=+(c>l),d=c>l?0:1,f=c-u+If,p=l-d+If,m=c-1+2*If,h=l-1+2*If,g=a&255,_=o&255;return 70*(i(r[g+r[_]],c,l)+i(r[g+u+r[_+d]],f,p)+i(r[g+1+r[_+1]],m,h))}}function Rf(e,t,n,r=4){let i=.5,a=1,o=0;for(let s=0;s<r;s++)o+=i*e(t*a,n*a),a*=2,i*=.5;return o}var zf=[{id:`mountains`,start:0,surface:`snow`},{id:`forest`,start:750,surface:`grass`},{id:`lake`,start:1550,surface:`grass`},{id:`town`,start:2450,surface:`road`},{id:`desert`,start:3500,surface:`sand`},{id:`sea`,start:4800,surface:`sand`}],Bf={snow:.5,grass:.6,sand:.7,road:.55,water:1},Vf=70,Hf=Lf(91),Uf=Lf(4242),Wf=Lf(777),Gf=Lf(1601),Kf=228,qf=.5,Jf=601,Yf=Math.PI/180;function Xf(e){return e<=Kf?-45*Yf+20*Yf*K(0,Kf,e):-25*Yf+49*Yf*K(Kf,300,e)}var Zf=new Float64Array(Jf),Qf=new Float64Array(Jf);Zf[600]=0,Qf[600]=160;for(let e=599;e>=0;e--){let t=Xf((e+.5)*qf);Zf[e]=Zf[e+1]-Math.cos(t)*qf,Qf[e]=Qf[e+1]-Math.sin(t)*qf}var $f=0;for(let e=1;e<Jf;e++)Qf[e]<Qf[$f]&&($f=e);var ep=Zf[0],tp=Zf[$f],np=Qf[$f];Xf(300);var rp=Qf[0]-160;function ip(e,t={x:0,y:0,angle:0}){let n=dd(e,0,300)/qf,r=Math.min(599,Math.floor(n)),i=n-r;return t.x=fd(Zf[r],Zf[r+1],i),t.y=fd(Qf[r],Qf[r+1],i),t.angle=Xf(dd(e,0,300)),t}function ap(e){let t=160+Math.min(e,rp);for(let e=$f;e>0;e--)if(Qf[e-1]>=t){let n=(t-Qf[e])/(Qf[e-1]-Qf[e]);return(e-n)*qf}return 0}function op(e){let t=0,n=600;for(;n-t>1;){let r=t+n>>1;Zf[r]<=e?t=r:n=r}let r=dd((e-Zf[t])/(Zf[n]-Zf[t]));return fd(Qf[t],Qf[n],r)}var sp=1.4,cp=np-sp-Math.abs(tp)*.05;function lp(e){if(e<ep){let t=ep-e;return Qf[0]-sp+t*.55*K(0,40,t)+6*Hf(e*.01,4.2)}if(e<=tp)return op(e)-sp;if(e<=0)return np-sp-(e-tp)*.05;let t=58*K(4,92,e),n=dd((e-92)/640),r=82*(1-(1-n)**1.8),i=1.4*Math.sin(e*.075)*K(130,230,e)*(1-n),a=2.2*Hf(e*.012,.5)*K(92,200,e);return cp-t-r+i+a}function up(e){return dd(15+13*(Rf(Uf,e*.0035,1.7,3)+.25)+5*Math.sin(e*.013),5,42)}function dp(e){let t=up(e)*.5+3,n=K(1560,1650,e)*(1-K(2330,2430,e)),r=-4.5+1.2*Wf(e*.01,2.2),i=9*Math.exp(-(((e-1990)/26)**2));return Math.max(fd(t,r,n),r+i)}function fp(e){return 8+2.2*Hf(e*.004,3.3)+1.5*Math.sin(e*.006)}function pp(e){return 12+8*Math.sin(e*.0105+1.2)+3.5*Math.sin(e*.027+.4)+3*Rf(Wf,e*.006,2.2,2)}var mp=820;function hp(e){let t=fd(8,-6,K(4820,4930,e)),n=Math.round((e-5400)/mp),r=5400+n*mp,i=n>=0?21*Math.exp(-(((e-r)/48)**2)):0;return Math.max(t,-6+i)}var gp=[lp,up,dp,fp,pp,hp],_p=6200,vp=1,yp=_p-zf[vp].start,bp=zf.map((e,t)=>({kind:t,id:e.id,start:e.start,lap:0,off:0}));function xp(e){for(;bp[bp.length-1].start<=e+140;){let e=bp[bp.length-1].lap+1,t=_p+(e-1)*yp-zf[vp].start;for(let n=vp;n<zf.length;n++)bp.push({kind:n,id:zf[n].id,start:zf[n].start+t,lap:e,off:t})}}function Sp(e){xp(e);let t=0,n=bp.length-1;for(;t<n;){let r=t+n+1>>1;bp[r].start<=e?t=r:n=r-1}return t}function Cp(e){for(xp(0);bp.length<=e;)xp(bp[bp.length-1].start+1);return bp[e]}var wp=e=>bp[Sp(e)].lap;function Tp(e){return bp[Sp(e)].kind}function Ep(e){let t=Sp(e),n=bp[t],r=bp[t+1];return e>=r.start-Vf?{a:n,b:r,t:K(r.start-Vf,r.start+Vf,e)}:t>0&&e<=n.start+Vf?{a:bp[t-1],b:n,t:K(n.start-Vf,n.start+Vf,e)}:{a:n,b:n,t:0}}function Dp(e){let{a:t,b:n,t:r}=Ep(e);return{a:t.kind,b:n.kind,t:r}}var Op=(e,t)=>gp[e.kind](t-e.off);function kp(e){let{a:t,b:n,t:r}=Ep(e);return r<=0?Op(t,e):r>=1?Op(n,e):fd(Op(t,e),Op(n,e),r)}function Ap(e,t={y:0,water:!1,surface:`snow`,friction:0,slope:0}){let n=kp(e);if(t.slope=(kp(e+.5)-kp(e-.5))/1,n<0)t.y=0,t.water=!0,t.surface=`water`,t.slope=0;else{t.y=n,t.water=!1;let{a:r,b:i,t:a}=Dp(e);t.surface=zf[a<.5?r:i].surface,n<2.2&&e>1400&&t.surface!==`snow`&&(t.surface=`sand`)}return t.friction=Bf[t.surface],t}function jp(e,t,n=3){let r=Rf(Gf,e,t,n);return 1-Math.sqrt(r*r+.012)}function Mp(e,t,n,r){switch(e){case 0:return fd(r,Math.max(10,r*.4),K(-25,-190,n))+(40+190*jp(t*.0024,n*.0024,2)**2.2)*K(-460,-1050,n);case 1:return 18+36*(Rf(Uf,t*.003,n*.003,4)+.5);case 2:{let e=K(-260,-520,n);return fd(-5,22+28*(Rf(Uf,t*.003,n*.003,3)+.5),e)}case 3:return 8+5*Rf(Hf,t*.004,n*.004,3)+30*K(-350,-700,n)*(Rf(Uf,t*.002,n*.002,3)+.6);case 4:return 12+10*Math.sin(t*.008+n*.012)+6*Rf(Wf,t*.004,n*.004,3)+70*K(.18,.26,Rf(Gf,t*.0016,n*.0016,2))*K(-180,-320,n);default:{let e=Math.round((t-5e3)/640),r=5e3+e*640,i=-260-180*(e*7919%5/5),a=Math.hypot((t-r)/70,(n-i)/55);return-7+26*Math.exp(-a*a)}}}function Np(e,t,n){let r=K(-620,-1050,t);return r<=0?0:(140+230*jp(e*.0018+3.1,t*.0018,2)**1.8)*r*(1-.75*n)}function Pp(e,t={x:0,g:0,a:0,b:0,t:0}){let n=Dp(e);return t.x=e,t.g=kp(e),t.a=n.a,t.b=n.b,t.t=n.t,t}function Fp(e,t){let n=e.x,r=e.a===5?1:e.b===5?e.t:0;if(t>=0){let r=e.a===0?7+48*(1-K(0,320,n)):7,i=e.g-r*K(10,140,t),a=e.g<.5?e.g:.8;return Math.max(a,i+3*Hf(n*.01,t*.01)*K(20,60,t))}let i=K(-10,-190,t),a=Mp(e.a,n,t,e.g);return e.t>0&&(a=fd(a,Mp(e.b,n,t,e.g),e.t)),fd(e.g,a,i)+Np(n,t,r)}var Ip=zf.flatMap((e,t)=>(t===0?[0]:[0,1,2]).map(n=>({id:`${e.id}${n+1}`,kind:t,lap:n}))),Lp=[[`#cfe9ff`,`#7fa8d6`],[`#9be07f`,`#2f8f4e`],[`#8fe0ff`,`#2a8bd6`],[`#ffc27a`,`#d9534f`],[`#ffe08a`,`#d98f2b`],[`#6fdcec`,`#1f6fb5`]];function Rp(e,t,n){return Ip.find(r=>r.kind===e&&r.lap<=t&&!n.includes(r.id))??null}var zp=[{id:`ramp`,max:13,base:25,growth:1.46},{id:`wings`,max:25,base:30,growth:1.46},{id:`sled`,max:25,base:15,growth:1.48},{id:`aero`,max:25,base:25,growth:1.46},{id:`rocket`,max:25,base:70,growth:1.48},{id:`fuel`,max:25,base:30,growth:1.48,requires:`rocket`},{id:`magnet`,max:25,base:15,growth:1.45}],Bp=1.24,Vp=e=>e>=20?2:+(e>=10),Hp=Object.fromEntries(zp.map(e=>[e.id,e])),Up=()=>({ramp:0,wings:0,sled:0,aero:0,rocket:0,fuel:0,magnet:0});function Wp(e,t){let n=Hp[e];if(t>=n.max)return null;let r=n.base*n.growth**+Math.min(t,10)*Bp**+Math.max(0,t-10),i=r<100?5:r<1e3?10:50;return Math.round(r/i)*i}var Gp=e=>16+9*e,Kp=e=>2+1.4*e,qp=e=>.02*(1+.06*Math.min(e,10)+.012*Math.max(0,e-10)),Jp=e=>e<=10?6*e:Math.round((60+15*(1-Math.exp(-(e-10)/6)))*10)/10,Yp=(e,t,n)=>t*Math.min(e,10)+n*Math.max(0,e-10),Xp=e=>e<=0?0:11+Yp(e-1,2.4,1.1),Zp=e=>1.6+Yp(e,.7,.3),Qp=e=>1.8+.85*e;function $p(e,t=!1,n=0){let r=im(n),i=1-Jp(e.aero)/100,a=t?Math.max(e.rocket,5):e.rocket,o=t?Math.max(e.fuel,5):e.fuel;return{rampHeight:Gp(e.ramp),rampFriction:.035-.003*e.sled,push:Kp(e.sled)*r,liftK:qp(e.wings)*r,drag0:.003*i,dragInduced:.0049*(1-.05*Math.min(e.wings,10))*(1-.25*(1-Math.exp(-Math.max(0,e.wings-10)/6))),thrust:Xp(a)*r,fuel:a>0?Zp(o):0,magnet:Qp(e.magnet)}}function em(e,t){switch(e){case`ramp`:return{value:Gp(t),unit:`m`,digits:0};case`wings`:return{value:10+2*t,unit:`lift`,digits:0};case`sled`:return{value:Math.round(Kp(t)*3.6),unit:`kmh`,digits:0};case`aero`:return{value:Jp(t),unit:`pct`,digits:1};case`rocket`:return{value:Math.round(Xp(t)),unit:`thrust`,digits:0};case`fuel`:return{value:Zp(t),unit:`s`,digits:1};case`magnet`:return{value:Qp(t),unit:`m`,digits:1}}}var tm=6e3;function nm(e){return e>=6e3?Math.floor(e/1e3):0}var rm=e=>1+.3*Math.sqrt(e),im=e=>1+.15*Math.log1p(e/10);function am(e){let t=Math.max(0,e.distance),n=Math.floor(t/5),r=Math.floor(e.maxHeight/10)+e.skips*5+e.nearMisses*3+(e.perfect?10:0),i=t>e.best&&t>1,a=i?10+Math.floor(n*.25):0;return{distance:n,collected:e.coins,style:r,record:a,total:n+e.coins+r+a,newRecord:i}}var om=e=>zf.find(t=>t.id===e).start,sm=[{id:`d200`,kind:`distance`,target:200,reward:30},{id:`up1`,kind:`upgrade`,target:1,reward:20},{id:`perfect`,kind:`perfect`,target:1,reward:30},{id:`forest`,kind:`distance`,target:om(`forest`),reward:70,biome:`forest`},{id:`spd120`,kind:`speed`,target:120,reward:50},{id:`h60`,kind:`height`,target:60,reward:60},{id:`coins40`,kind:`coinsRun`,target:40,reward:80},{id:`lake`,kind:`distance`,target:om(`lake`),reward:130,biome:`lake`},{id:`skip3`,kind:`skips`,target:3,reward:120},{id:`town`,kind:`distance`,target:om(`town`),reward:220,biome:`town`},{id:`spd250`,kind:`speed`,target:250,reward:160},{id:`h250`,kind:`height`,target:250,reward:200},{id:`desert`,kind:`distance`,target:om(`desert`),reward:350,biome:`desert`},{id:`coins150`,kind:`coinsRun`,target:150,reward:300},{id:`sea`,kind:`distance`,target:om(`sea`),reward:600,biome:`sea`},{id:`space`,kind:`altitude`,target:900,reward:900},{id:`lap2`,kind:`distance`,target:6200,reward:1500},{id:`d10000`,kind:`distance`,target:1e4,reward:2500},{id:`spd600`,kind:`speed`,target:600,reward:3e3},{id:`h1500`,kind:`altitude`,target:1500,reward:4e3},{id:`d15000`,kind:`distance`,target:15e3,reward:6e3},{id:`d20000`,kind:`distance`,target:2e4,reward:1e4},{id:`sound`,kind:`speed`,target:1200,reward:15e3},{id:`d30000`,kind:`distance`,target:3e4,reward:25e3},{id:`d50000`,kind:`distance`,target:5e4,reward:6e4}];function cm(e,t){switch(e.kind){case`distance`:return t.distance;case`height`:return t.maxHeight;case`speed`:return t.maxSpeedKmh;case`coinsRun`:return t.coins;case`skips`:return t.skips;case`perfect`:return+!!t.perfect;case`altitude`:return t.maxAlt;case`upgrade`:return t.upgradesBought}}function lm(e,t){return sm.filter(n=>!e.includes(n.id)&&cm(n,t)>=n.target)}function um(e,t=2){return sm.filter(t=>!e.includes(t.id)).slice(0,t)}function dm(e){let t=new Date(e);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,`0`)}-${String(t.getDate()).padStart(2,`0`)}`}function fm(e){let t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e);return t?Date.UTC(Number(t[1]),Number(t[2])-1,Number(t[3])):NaN}function pm(e,t){return Math.round((fm(t)-fm(e))/864e5)}function mm(e,t){let n=fm(e);if(Number.isNaN(n))return e;let r=new Date(n+t*864e5);return`${r.getUTCFullYear()}-${String(r.getUTCMonth()+1).padStart(2,`0`)}-${String(r.getUTCDate()).padStart(2,`0`)}`}var hm=[`distanceRun`,`coinsDay`,`ringsDay`,`distanceDay`,`skipsDay`];function gm(e,t){let n=2166136261;for(let t=0;t<e.length;t++)n=Math.imul(n^e.charCodeAt(t),16777619);let r=t<1500?hm.filter(e=>e!==`skipsDay`):hm,i=r[(n>>>0)%r.length],a=(e,t)=>Math.max(t,Math.round(e/t)*t),o=Math.max(1,t/600);switch(i){case`distanceRun`:return{day:e,kind:i,target:a(Math.max(300,t*.9),50),reward:a(80+t/8,10),progress:0,claimed:!1};case`coinsDay`:return{day:e,kind:i,target:a(60*o,10),reward:a(70+t/10,10),progress:0,claimed:!1};case`ringsDay`:return{day:e,kind:i,target:6,reward:a(90+t/10,10),progress:0,claimed:!1};case`distanceDay`:return{day:e,kind:i,target:a(Math.max(1500,t*3),100),reward:a(100+t/8,10),progress:0,claimed:!1};case`skipsDay`:return{day:e,kind:i,target:5,reward:a(120+t/10,10),progress:0,claimed:!1}}}function _m(e,t){switch(e.kind){case`distanceRun`:return Math.max(e.progress,t.distance)-e.progress;case`coinsDay`:return t.coins;case`ringsDay`:return t.rings;case`distanceDay`:return t.distance;case`skipsDay`:return t.skips}}var vm=3;function ym(e,t){let n=Object.values(t).reduce((e,t)=>e+t,0);return Math.round(12+e/40+n*1.5)}function bm(e,t,n,r){if(!e||t<=e)return 0;let i=(t-e)/6e4;if(i<vm)return 0;let a=Math.min(8,i/60);return Math.floor(ym(n,r)*a)}function xm(e,t){let n=60+t/25,r=e===7?8:1+(e-1)*.35;return Math.round(n*r/10)*10}var Sm=(e,t)=>!(pm(e,t)<7);function Cm(e,t){if(e.day===t)return{n:0,note:``};let n=pm(e.day,t),r=e.n>=7?0:Math.max(0,e.n);return n>=1?n===1?{n:r+1,note:``}:n===2&&r>0&&Sm(e.skip,t)?{n:r+1,note:`forgiven`}:{n:Math.max(1,Math.floor(r/2)),note:r>0?`back`:``}:{n:1,note:``}}function wm(e,t){let n=Cm(e,t);return n.n?{day:t,n:n.n,skip:n.note===`forgiven`?t:e.skip}:null}var Tm=(e,t,n,r)=>({id:e,goal:t,value:n,reward:r}),Em=[Tm(`km1`,1e3,e=>e.best,{coins:100}),Tm(`km5`,5e3,e=>e.best,{skin:`snow`}),Tm(`km10`,1e4,e=>e.best,{coins:3e3}),Tm(`km20`,2e4,e=>e.best,{skin:`cosmo`}),Tm(`km30`,3e4,e=>e.best,{coins:3e4}),Tm(`km50`,5e4,e=>e.best,{skin:`gold`}),Tm(`lap2`,1,e=>e.laps,{coins:1500}),Tm(`lap5`,4,e=>e.laps,{coins:15e3}),Tm(`space`,900,e=>e.bestAlt,{coins:2e3}),Tm(`orbit`,2e3,e=>e.bestAlt,{skin:`mint`}),Tm(`speed500`,500,e=>e.bestSpeed,{coins:800}),Tm(`sound`,1200,e=>e.bestSpeed,{skin:`smoke`}),Tm(`perfect10`,10,e=>e.perfects,{coins:300}),Tm(`perfect100`,100,e=>e.perfects,{skin:`berry`}),Tm(`skips5`,5,e=>e.maxSkips,{coins:500}),Tm(`rings100`,100,e=>e.rings,{coins:1e3}),Tm(`rings1000`,1e3,e=>e.rings,{coins:2e4}),Tm(`runs10`,10,e=>e.runs,{coins:200}),Tm(`runs100`,100,e=>e.runs,{skin:`cocoa`}),Tm(`runs500`,500,e=>e.runs,{coins:5e4}),Tm(`total100`,1e5,e=>e.totalDistance,{coins:2500}),Tm(`total1000`,1e6,e=>e.totalDistance,{coins:4e4}),Tm(`season2`,2,e=>e.season,{coins:1e3}),Tm(`season5`,5,e=>e.season,{skin:`panda`}),Tm(`season10`,10,e=>e.season,{coins:1e5}),Tm(`streak7`,7,e=>e.streak.n,{coins:2e3}),Tm(`cards5`,5,e=>e.cards.length,{coins:1500}),Tm(`cardsAll`,Ip.length,e=>e.cards.length,{coins:4e4}),Tm(`maxed`,1,e=>Number(zp.every(t=>e.levels[t.id]>=t.max)),{coins:2e4})];function Dm(e){let t=Em.filter(t=>!e.achievements.includes(t.id)&&t.value(e)>=t.goal);for(let n of t)e.achievements.push(n.id),n.reward.coins&&(e.coins+=n.reward.coins,e.totalCoins+=n.reward.coins),n.reward.skin&&!e.skinsOwned.includes(n.reward.skin)&&e.skinsOwned.push(n.reward.skin);return t}function Om(e,t,n){if(e.day!==t)return null;let r=Cm(e,mm(t,1)).n;return{day:r,coins:n(r),big:r===7}}function km(e,t,n){return e.added||e.declines>=3||t<2?!1:!(pm(e.day,n)<3)}var Am=.2;function jm(e){let t=null,n=-1/0;for(let r of e){if(!(r.target>0)||r.progress>=r.target)continue;let e=Math.max(0,r.progress)/r.target;if(e<.25)continue;let i=e+(r.advanced?Am:0);i>n&&(t=r,n=i)}return t}var Mm={distance:`distance`,altitude:`altitude`,total:`total`},Nm={m:`unit.m`,kmh:`unit.kmh`,pct:`unit.pct`,s:`unit.s`,thrust:``,lift:``};function Pm(e,t){if(e===`rocket`&&t===0)return`—`;let n=em(e,t),r=Nm[n.unit]?` ${jf(Nm[n.unit])}`:``;return`${Z(n.value,n.digits&&n.value%1!=0?n.digits:0)}${n.unit===`pct`?`%`:r}`}var Fm={distance:`m`,height:`m`,altitude:`m`,speed:`kmh`,coinsRun:``,skips:``,perfect:``,upgrade:``},Im=new Set([`season2`,`season5`,`season10`,`maxed`,`lap2`,`lap5`]),Lm=e=>/^(km|total)\d/.test(e)||e===`space`||e===`orbit`?`m`:e===`speed500`||e===`sound`?`kmh`:``;function Rm(e){return e.unit===`m`&&e.target>=1e4?`${Z(Math.floor(e.progress/100)/10,1)} / ${Z(e.target/1e3)} ${X(`unit.km`)}`:e.unit?`${Z(Math.floor(e.progress))} / ${Z(e.target)} ${X(e.unit===`m`?`unit.m`:`unit.kmh`)}`:`${Z(Math.floor(e.progress))}/${Z(e.target)}`}function zm(e,t){let n=e===`rocket`&&t===0?0:em(e,t).value,r=em(e,t+1),i=Math.round((r.value-n)*10)/10,a=r.unit===`pct`?`%`:Nm[r.unit]?` ${jf(Nm[r.unit])}`:``;return`+${Z(i,i%1==0?0:1)}${a}`}var Bm=class{store;platform;bestBefore=0;allBestBefore=0;staleRuns=0;granted=null;dailyApplied=0;almostBefore=new Map;heightBefore=0;cardsBefore=0;constructor(e,t){this.store=e,this.platform=t}get p(){return this.store.progress}stats(e){return $p(this.p.levels,e||this.p.rocketForever,this.p.stars)}ensureDaily(e=Date.now()){let t=dm(e);this.notePlayDay(t),(!this.p.daily||this.p.daily.day!==t)&&(this.p.daily=gm(t,this.p.seasonBest),this.store.save())}seasonGain(){return nm(this.p.seasonBest)}startSeason(){let e=this.seasonGain();if(e<=0)return 0;let t=this.p;return t.stars+=e,t.season++,t.levels=Up(),t.coins=0,t.seasonBest=0,this.staleRuns=0,t.daily=gm(dm(Date.now()),0),Dm(t),this.store.save(!0),e}seasonInfo(){return{season:this.p.season,stars:this.p.stars,gain:this.seasonGain(),min:tm,coinMul:rm(this.p.stars)}}notePlayDay(e){this.p.lastPlayDay!==e&&(this.p.lastPlayDay=e,this.p.playDays++,this.store.save())}streakDay(e=Date.now()){return Cm(this.p.streak,dm(e))}streakReward(e){return Math.round(xm(e,this.p.seasonBest)*rm(this.p.stars))}claimStreak(e=Date.now()){let t=wm(this.p.streak,dm(e));if(!t)return 0;let n=this.streakReward(t.n);return this.p.streak=t,this.p.coins+=n,this.p.totalCoins+=n,Dm(this.p),this.store.save(!0),n}tomorrowLine(e=Date.now()){let t=Om(this.p.streak,dm(e),e=>this.streakReward(e));return t?X(`tomorrow.line`,{n:t.day,coins:Z(t.coins),w:Mf(`coins`,t.coins)}):null}canOfferShortcut(e=Date.now()){return km(this.p.shortcut,this.p.playDays,dm(e))}shortcutReward(){return this.streakReward(2)}shortcutShown(e=Date.now()){this.p.shortcut.day=dm(e),this.store.save()}shortcutAnswer(e){let t=this.p.shortcut;if(!e)return t.declines=Math.min(3,t.declines+1),this.store.save(),0;if(t.added)return 0;t.added=!0;let n=this.shortcutReward();return this.p.coins+=n,this.p.totalCoins+=n,this.store.save(!0),n}shiftDays(e){let t=this.p,n=t=>t&&mm(t,e);t.streak={...t.streak,day:n(t.streak.day),skip:n(t.streak.skip)},t.shortcut.day=n(t.shortcut.day),t.lastPlayDay=n(t.lastPlayDay),t.daily&&(t.daily.day=n(t.daily.day)),this.store.save()}almostList(e){let t=this.p,n=[],r=(e,t,r,i,a)=>{n.push({id:e,title:t,progress:r,target:i,unit:a,advanced:r>(this.almostBefore.get(e)??1/0)})},i=t.daily;i&&!i.claimed&&r(`daily`,jf(`daily.${i.kind}`,{n:Z(i.target)}),i.progress,i.target,i.kind===`distanceRun`||i.kind===`distanceDay`?`m`:``);let a={...this.bestContext(),coins:e?.coins??0,skips:e?.skips??0};for(let e of sm)t.goalsDone.includes(e.id)||r(`goal.${e.id}`,jf(`goal.${e.id}`),cm(e,a),e.target,Fm[e.kind]);nm(t.seasonBest)===0&&r(`season`,X(`almost.season`),t.seasonBest,tm,`m`);for(let e of Em)!t.achievements.includes(e.id)&&!Im.has(e.id)&&r(`ach.${e.id}`,jf(`ach.${e.id}`),e.value(t),e.goal,Lm(e.id));return n}almostView(e){let t=jm(this.almostList(e));return t?{title:X(`almost.line`,{name:t.title}),progress:Rm(t),pct:t.progress/t.target*100}:null}submitScores(){this.platform.setScore(Mm.distance,this.p.best),this.platform.setScore(Mm.altitude,this.p.bestAlt),this.platform.setScore(Mm.total,Math.floor(this.p.totalDistance/1e3))}boardScore(e){return e===`distance`?this.p.best:e===`altitude`?this.p.bestAlt:Math.floor(this.p.totalDistance/1e3)}upgrades(){return zp.map(e=>{let t=this.p.levels[e.id],n=Wp(e.id,t),r=!!e.requires&&this.p.levels[e.requires]===0;return{id:e.id,level:t,max:e.max,cost:n,locked:r,stat:Pm(e.id,t),next:n===null?null:Pm(e.id,t+1),delta:n===null?null:zm(e.id,t)}})}goalViews(){let e=this.bestContext(),t=um(this.p.goalsDone,1).map(t=>({kind:`goal`,title:jf(`goal.${t.id}`),progress:Math.min(t.target,cm(t,e)),target:t.target,reward:t.reward,done:!1})),n=this.p.daily;return n&&t.push({kind:`daily`,title:jf(`daily.${n.kind}`,{n:Z(n.target)}),progress:Math.min(n.target,n.progress),target:n.target,reward:n.reward,done:n.claimed}),t}bestContext(){return{distance:this.p.best,maxHeight:this.p.bestHeight,maxSpeedKmh:this.p.bestSpeed,coins:0,skips:0,perfect:this.p.goalsDone.includes(`perfect`),maxAlt:this.p.bestAlt,upgradesBought:this.p.upgradesBought}}hangarView(e,t,n){let r=this.upgrades(),i=r.some(e=>e.cost!==null&&!e.locked&&e.cost<=this.p.coins),a=r.every(e=>e.cost===null),o=this.seasonGain();return{coins:this.p.coins,best:this.p.seasonBest,upgrades:r,goals:this.goalViews(),rentActive:e,canRent:t,pulseFly:!i,season:{season:this.p.season,stars:this.p.stars,gain:o,min:tm,urge:o>0&&(a||this.staleRuns>=4)},achNew:this.p.achievements.length>this.p.achSeen,shop:n}}buy(e){let t=this.p.levels[e],n=Wp(e,t),r=Hp[e];if(n===null||this.p.coins<n||r.requires&&this.p.levels[r.requires]===0)return{ok:!1,goals:[]};this.p.coins-=n,this.p.levels[e]=t+1,this.p.upgradesBought++;let i=lm(this.p.goalsDone,{...this.bestContext(),upgradesBought:this.p.upgradesBought});for(let e of i)this.p.goalsDone.push(e.id),this.p.coins+=e.reward;return this.store.save(),{ok:!0,goals:i}}beginRun(){this.bestBefore=this.p.seasonBest,this.allBestBefore=this.p.best,this.granted=null,this.dailyApplied=0,this.heightBefore=this.p.bestHeight,this.cardsBefore=this.p.cards.length,this.almostBefore=new Map(this.almostList().map(e=>[e.id,e.progress]))}finishRun(e){let t=this.p;this.notePlayDay(dm(Date.now()));let n=rm(t.stars),r=am({distance:e.distance,maxHeight:e.maxHeight,maxSpeed:e.maxSpeed,coins:e.coins,skips:e.skips,nearMisses:e.nearMisses,rings:e.rings,perfect:e.perfect,best:this.bestBefore}),i=e.maxSpeed*3.6,a={distance:e.distance,maxHeight:e.maxHeight,maxSpeedKmh:i,coins:e.coins,skips:e.skips,perfect:e.perfect,maxAlt:e.maxAlt,upgradesBought:t.upgradesBought},o=lm(t.goalsDone,a),s=[{label:X(`results.distance`),value:r.distance},{label:X(`results.collected`),value:r.collected}];r.style>0&&s.push({label:X(`results.style`),value:r.style}),r.record>0&&s.push({label:X(`results.recordBonus`),value:r.record});let c=Math.round(r.total*(n-1));c>0&&s.push({label:X(`results.stars`,{n:t.stars}),value:c});let l=r.total+c,u=0;for(let e of o)t.goalsDone.push(e.id),u+=e.reward,s.push({label:jf(`goal.${e.id}`),value:e.reward,goal:!0});let d=t.daily;d&&!d.claimed&&(d.progress-=this.dailyApplied,this.dailyApplied=_m(d,{distance:e.distance,coins:e.coins,rings:e.rings,skips:e.skips}),d.progress+=this.dailyApplied,d.progress>=d.target&&(d.claimed=!0,u+=d.reward,s.push({label:X(`hangar.daily`),value:d.reward,goal:!0}))),this.granted?(t.coins-=this.granted.runCoins,t.totalCoins-=this.granted.runCoins):(t.runs++,t.totalDistance+=Math.max(0,e.distance));let f=r.newRecord,p=e.distance>this.allBestBefore&&e.distance>1,m=f||e.maxHeight>this.heightBefore&&e.maxHeight>1||t.cards.length>this.cardsBefore;this.granted||(this.staleRuns=e.distance>t.seasonBest*1.03?0:this.staleRuns+1),t.seasonBest=Math.max(t.seasonBest,e.distance),t.best=Math.max(t.best,e.distance),e.perfect&&!this.granted&&t.perfects++,t.rings+=e.rings,t.maxSkips=Math.max(t.maxSkips,e.skips),t.laps=Math.max(t.laps,wp(Math.max(0,e.distance))),t.bestHeight=Math.max(t.bestHeight,e.maxHeight),t.bestSpeed=Math.max(t.bestSpeed,i),t.bestAlt=Math.max(t.bestAlt,e.maxAlt),t.coins+=l+u,t.totalCoins+=l+u,t.tutorialDone=!0;let h=Dm(t);for(let e of h)e.reward.coins&&s.push({label:jf(`ach.${e.id}`),value:e.reward.coins,goal:!0});this.store.save(!0),this.submitScores();let g={view:{distance:e.distance,best:this.bestBefore,newRecord:f,height:e.maxHeight,speedKmh:i,rows:s,total:l+u+h.reduce((e,t)=>e+(t.reward.coins??0),0),canDouble:!0,canContinue:!this.granted,almost:this.almostView(e),tomorrow:this.tomorrowLine()},runCoins:l,newRecord:f,allTimeRecord:p,highlight:m,goals:o,achievements:h};return this.granted=g,g}grantDouble(e){this.p.coins+=e.runCoins,this.p.totalCoins+=e.runCoins,this.store.save(!0)}offlineAmount(e=Date.now()){return Math.round(bm(this.p.lastSeen,e,this.p.seasonBest,this.p.levels)*rm(this.p.stars))}grant(e){this.p.coins+=e,this.p.totalCoins+=e,this.store.save(!0)}touch(e=Date.now()){this.p.lastSeen=e,this.store.save()}},Vm=9.81,Hm=.55,Um=.8700000000000001,Wm=1/120,Gm=.32,Km=1.1,qm=-.75,Jm=1.5,Ym=1.7,Xm=.7,Zm=.1,Qm=9,$m=.016,eh=120,th=550,nh={x:0,y:0,angle:0},rh={y:0,water:!1,surface:`snow`,friction:0,slope:0},ih=e=>Math.hypot(e.vx,e.vy);function ah(e){return e.y-Hm-Math.max(kp(e.x),0)}function oh(e){let t=ap(e.rampHeight);ip(t,nh);let n={phase:`ramp`,s:t,x:nh.x-Math.sin(nh.angle)*Um,y:nh.y+Math.cos(nh.angle)*Um,vx:0,vy:0,pitch:nh.angle,aoa:0,fuel:e.fuel,boosting:!1,time:0,airTime:0,maxHeight:0,maxSpeed:0,maxAlt:0,skips:0,bounces:0,restTime:0,sinkTime:0,launchSpeed:0,perfect:!1,jumpSpent:!1,surface:`snow`,contact:!1};return sh(n,e.push),n}function sh(e,t){ip(e.s,nh),e.vx=Math.cos(nh.angle)*t,e.vy=Math.sin(nh.angle)*t}function ch(e){return e.phase===`ramp`?(300-e.s)/Math.max(1,ih(e)):1/0}function lh(e){return e.phase!==`ramp`||e.jumpSpent||e.perfect?null:ch(e)<=.24?(e.perfect=!0,`perfect`):ch(e)<1.6?(e.jumpSpent=!0,`early`):null}function uh(e){return e.liftK/(2*Math.sqrt(e.drag0*e.dragInduced))}function dh(e){return-Math.atan(1/(.8*uh(e)))}function fh(e,t,n,r){ip(e.s,nh);let i=ih(e),a=-9.81*Math.sin(nh.angle)-t.rampFriction*Vm*Math.cos(nh.angle)-.0012*i*i;if(i=Math.max(1,i+a*n),e.s+=i*n,e.s>=300){e.s=300,ip(e.s,nh);let t=i;e.perfect&&(t*=1.15),e.vx=Math.cos(nh.angle)*t,e.vy=Math.sin(nh.angle)*t+(e.perfect?2.5:0),e.x=nh.x-Math.sin(nh.angle)*Um,e.y=nh.y+Math.cos(nh.angle)*Um,e.pitch=nh.angle,e.phase=`air`,e.launchSpeed=Math.hypot(e.vx,e.vy),r.push({type:`launch`,speed:e.launchSpeed,perfect:e.perfect})}else ip(e.s,nh),e.vx=Math.cos(nh.angle)*i,e.vy=Math.sin(nh.angle)*i,e.x=nh.x-Math.sin(nh.angle)*Um,e.y=nh.y+Math.cos(nh.angle)*Um,e.pitch=nh.angle}function ph(e){return Math.exp(-Math.max(0,e-eh)/th)}function mh(e,t,n,r){let i=ih(e),a=ph(e.y),o=Math.atan2(e.vy,e.vx);e.boosting=n.boost&&e.fuel>0&&t.thrust>0;let s=0;if(i>.5){let c=dd(n.pitch,-1,1),l=e.phase===`air`;if(l||c>0){let n=e.boosting?Zm:dh(t),r=l?dd(md(n-o)*Xm,-.7,.7):0,u=(c>=0?c*Jm:c*Ym)+(1-Math.abs(c))*r;s=dd((Vm*Math.cos(o)+i*u)/(a*t.liftK*i*i),qm,Km)}let u=s/Km*Gm;e.aoa=u,l&&(e.pitch=hd(e.pitch,o+u,Qm,r))}else e.aoa=0;let c=0,l=-9.81;if(i>.5){let n=a*t.liftK*i*i*s,r=a*i*i*(t.drag0+t.dragInduced*s*s+$m*Math.sin(e.aoa)**2),o=e.vx/i,u=e.vy/i;c+=-u*n-o*r,l+=o*n-u*r}e.boosting&&(c+=Math.cos(e.pitch)*t.thrust,l+=Math.sin(e.pitch)*t.thrust,e.fuel=Math.max(0,e.fuel-r)),e.vx+=c*r,e.vy+=l*r;let u=Math.hypot(e.vx,e.vy);u>345&&(e.vx*=345/u,e.vy*=345/u)}function hh(e,t){Ap(e.x,rh),e.surface=rh.surface;let n=rh.y+Hm;if(rh.water){if(e.phase===`water`){e.y=Math.min(e.y,0+Hm*.35);return}if(e.y>n)return;let r=Math.atan2(-e.vy,e.vx);e.vx>11&&r<.4?(e.vy=-e.vy*.5+1.4,e.vx*=.82,e.y=n,e.skips++,t.push({type:`skip`,speed:ih(e)})):(t.push({type:`splash`,speed:ih(e)}),e.phase=`water`,e.vx*=.25,e.vy=0,e.y=0+Hm*.35);return}if(!(e.y<=n+.03)){e.phase===`ground`&&(e.phase=`air`),e.contact=!1;return}let r=Math.hypot(rh.slope,1),i=-rh.slope/r,a=1/r,o=a,s=-i,c=e.vx*i+e.vy*a,l=e.vx*o+e.vy*s;if(c<0){let n=-c;if(n>3.5){let r=n>15&&n>Math.abs(l)*1.2;c=n*(r?.22:.42),l*=r?.55:.9,e.bounces++,t.push({type:r?`crash`:`bounce`,speed:n,surface:rh.surface})}else c=0,e.contact||t.push({type:`land`,speed:n,surface:rh.surface});e.vx=l*o+c*i,e.vy=l*s+c*a}e.y=Math.max(e.y,n),e.contact=!0,e.phase===`air`&&c<=.01&&(e.phase=`ground`)}function gh(e,t){if(!e.contact||e.phase!==`ground`)return;let n=Math.hypot(rh.slope,1),r=1/n,i=rh.slope/n,a=e.vx*r+e.vy*i,o=rh.friction*Vm*(1/n)*t;a=Math.abs(a)<=o?0:a-Math.sign(a)*o;let s=e.vx*-i+e.vy*r;e.vx=a*r-s*i,e.vy=a*i+s*r,e.pitch=hd(e.pitch,Math.atan(rh.slope),10,t)}function _h(e,t,n,r,i){if(e.phase===`water`)e.vx*=Math.exp(-2.6*r),e.x+=e.vx*r,e.y=0+Hm*.35-Math.min(.6,e.sinkTime*.25),e.sinkTime+=r,e.boosting=!1,e.sinkTime>1.6&&(e.phase=`done`,i.push({type:`stop`}));else if(mh(e,t,n,r),e.x+=e.vx*r,e.y+=e.vy*r,hh(e,i),gh(e,r),e.phase===`air`&&(e.airTime+=r),e.phase===`ground`){let t=ih(e);if(t<3&&!e.boosting){let t=Math.exp(-2.2*r);e.vx*=t,e.vy*=t}t<1.1&&!e.boosting?e.restTime+=r:e.restTime=0,e.restTime>.45&&(e.vx=0,e.vy=0,e.phase=`done`,i.push({type:`stop`}))}}function vh(e,t,n,r,i){let a=Math.min(r,.1);for(;a>1e-6&&e.phase!==`done`;){let r=Math.min(Wm,a);a-=r,e.time+=r,e.phase===`ramp`?fh(e,t,r,i):_h(e,t,n,r,i);let o=ih(e);if(o>e.maxSpeed&&(e.maxSpeed=o),e.y>e.maxAlt&&(e.maxAlt=e.y),e.phase===`air`){let t=ah(e);t>e.maxHeight&&(e.maxHeight=t)}}}function yh(e,t=9){let n=ih(e);if(n<.1)return;let r=Math.min(345,n+t)/n;e.vx*=r,e.vy*=r}function bh(e){e.vy=Math.max(e.vy,0)+13,e.vx=Math.max(e.vx,8),e.phase!==`air`&&(e.phase=`air`)}function xh(e){e.vy=Math.max(Math.abs(e.vy)*1.05,19),e.vx=Math.max(e.vx*1.05,14),e.phase=`air`,e.contact=!1}function Sh(e,t){e.vx*=t,e.vy=e.vy*t+2}function Ch(e,t,n){e.phase!==`ramp`&&e.phase!==`done`&&e.phase!==`water`&&(e.vy+=t*n)}function wh(e,t,n){if(e.phase!==`air`)return;let r=ih(e);if(r<1||r>=345)return;let i=Math.min(345,r+t*n)/r;e.vx*=i,e.vy*=i}function Th(e,t,n){e.fuel=Math.min(t.fuel,e.fuel+n)}function Eh(e,t){e.phase=`air`,e.y=Math.max(kp(e.x),0)+22,e.vx=34,e.vy=12,e.pitch=.3,e.fuel=t.fuel,e.restTime=0,e.sinkTime=0,e.contact=!1}function Dh(e,t){if(e.phase===`ramp`||e.phase===`done`||e.phase===`water`)return{pitch:0,boost:!1};let n=ah(e),r=Math.atan2(e.vy,e.vx);return t.thrust>0&&e.fuel>0&&e.phase===`air`?{pitch:r<.55?1:r>.75?-.5:0,boost:!0}:n<5&&e.vy<-3?{pitch:.8,boost:!1}:{pitch:0,boost:!1}}var Oh=(e,t=24)=>`<svg viewBox="0 0 24 24" width="${t}" height="${t}" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${e}</svg>`,kh=(e,t=24)=>`<svg viewBox="0 0 24 24" width="${t}" height="${t}" fill="currentColor" aria-hidden="true">${e}</svg>`,Ah=(e=24)=>`<svg viewBox="0 0 24 24" width="${e}" height="${e}" aria-hidden="true"><defs><radialGradient id="cg${e}" cx="40%" cy="35%" r="70%"><stop offset="0" stop-color="#fff6b8"/><stop offset=".55" stop-color="#ffcb3d"/><stop offset="1" stop-color="#e38f10"/></radialGradient></defs><circle cx="12" cy="12" r="10.5" fill="url(#cg${e})" stroke="#b86e06" stroke-width="1.3"/><circle cx="12" cy="12" r="7.6" fill="none" stroke="#f6b223" stroke-width="1.3"/><path d="M12 6.6l1.6 3.3 3.6.5-2.6 2.5.6 3.6L12 14.8l-3.2 1.7.6-3.6-2.6-2.5 3.6-.5z" fill="#e8a01c"/><path d="M11.6 7.4l1.2 2.5 2.7.4-2 1.9" fill="none" stroke="#fff3b0" stroke-width=".9" opacity=".9"/></svg>`,Q={coin:Ah(24),medal:kh(`<path d="M7 2h3.2l1.8 4 1.8-4H17l-3 6.2A6.5 6.5 0 1 1 10 8.2z" opacity=".55"/><circle cx="12" cy="15" r="5.6"/><path d="M12 11.6l1 2.1 2.3.3-1.7 1.6.4 2.3-2-1.1-2 1.1.4-2.3-1.7-1.6 2.3-.3z" fill="#fff" opacity=".85"/>`),bag:kh(`<path d="M8.5 7V6a3.5 3.5 0 0 1 7 0v1h3.2l1.3 14H4L5.3 7zm1.8 0h3.4V6a1.7 1.7 0 0 0-3.4 0z"/>`),crown:kh(`<path d="M3 8l4.5 3.5L12 4l4.5 7.5L21 8l-2 11H5z"/>`),ramp:kh(`<path d="M2 20h20v1.5H2z" opacity=".55"/><path d="M3 5c0 0 1.4 0 2.2 1.6C7.6 11.5 10 16 15 17.2c2.2.5 4.3-.2 6-1.2l.6 1.5c-2 1.3-4.6 2.2-7.3 1.6C8.6 17.8 6 12.6 3.6 8 3.3 7.4 3 7.2 3 7.2z"/><path d="M4 2.5v6" stroke="currentColor" stroke-width="1.6"/><path d="M4.3 2.6l4 1.4-4 1.5z"/>`),wings:kh(`<path d="M2 13c3-6 9-8.5 15-8 2 .2 3.6.8 5 1.6-1.6.4-3 1-4.2 1.9 1.4 0 2.6.2 3.6.6-1.5.6-2.8 1.4-3.9 2.4 1 .1 2 .4 2.8.8-3.2 1.5-7 3.2-11 3.4-2.9.2-5.3-.7-7.3-2.7z"/>`),sled:kh(`<path d="M3 13h14.5a3.5 3.5 0 0 0 3.5-3.5V8.6a1.1 1.1 0 0 1 2.2 0v.9A5.7 5.7 0 0 1 17.5 15.2H3a1.1 1.1 0 0 1 0-2.2z"/><path d="M5 9.5h11v2.3H5z"/><path d="M6.4 12.8h2v2.4h-2zM13 12.8h2v2.4h-2z"/><path d="M2.2 18h17.3a1.1 1.1 0 0 1 0 2.2H2.2z" opacity=".7"/>`),aero:Oh(`<path d="M3 8h10.5a3 3 0 1 0-3-3"/><path d="M3 12.5h15.5a3 3 0 1 1-3 3"/><path d="M3 17h7"/>`),rocket:kh(`<path d="M14.8 2.6c2.6-.6 5.2-.5 6.6-.1.4 1.4.5 4-.1 6.6-.6 2.6-2.1 5.2-4.8 7.4l-.6 3.5-3.6 2.1-.6-3.9-3.3-3.3-3.9-.6 2.1-3.6 3.5-.6c2.2-2.7 4.8-4.2 7.4-4.8z"/><circle cx="16.2" cy="7.8" r="1.9" fill="#ffffff" opacity=".45"/><path d="M6.3 14.6c-1.8.5-3 2-3.3 5.2 3.2-.3 4.7-1.5 5.2-3.3z" fill="#ffd23f"/>`),fuel:kh(`<path d="M7 3h7l3 3v13.5A2.5 2.5 0 0 1 14.5 22h-7A2.5 2.5 0 0 1 5 19.5V5a2 2 0 0 1 2-2z"/><path d="M12.6 8.5l-3.4 5h2.6l-1 4.2 3.6-5.4h-2.7z" fill="#ffffff" opacity=".85"/><path d="M17 5.5l2.3-2.3 1.4 1.4-2.3 2.3z"/>`),magnet:kh(`<path d="M4 3h5v8a3 3 0 0 0 6 0V3h5v8a8 8 0 0 1-16 0z"/><path d="M4 3h5v4H4zM15 3h5v4h-5z" fill="#ffffff" opacity=".55"/>`),trophy:kh(`<path d="M7 3h10v6a5 5 0 0 1-10 0z"/><path d="M5 4H2.5v2.3A4 4 0 0 0 6.6 10M19 4h2.5v2.3A4 4 0 0 1 17.4 10" fill="none" stroke="currentColor" stroke-width="2"/><path d="M10.5 14h3v3.5h-3zM7.5 18h9v3h-9z"/>`),gear:Oh(`<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>`),soundOn:Oh(`<path d="M4 9v6h4l5 4V5L8 9z" fill="currentColor"/><path d="M16.5 8.5a5 5 0 0 1 0 7"/><path d="M19.2 6a8.5 8.5 0 0 1 0 12"/>`),soundOff:Oh(`<path d="M4 9v6h4l5 4V5L8 9z" fill="currentColor"/><path d="M17 9l5 6M22 9l-5 6"/>`),expand:Oh(`<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>`),shrink:Oh(`<path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5"/>`),music:kh(`<path d="M9 18.5a3 3 0 1 1-2-2.8V5.2l12-2.7v12.8a3 3 0 1 1-2-2.8V7.3L9 9.1z"/>`),pause:kh(`<rect x="6" y="4.5" width="4.3" height="15" rx="1.6"/><rect x="13.7" y="4.5" width="4.3" height="15" rx="1.6"/>`),play:kh(`<path d="M7 4.5v15a1 1 0 0 0 1.5.9l12-7.5a1 1 0 0 0 0-1.8l-12-7.5A1 1 0 0 0 7 4.5z"/>`),close:Oh(`<path d="M6 6l12 12M18 6L6 18"/>`),ad:kh(`<rect x="2" y="5" width="20" height="14" rx="3.5"/><path d="M10 9v6l5-3z" fill="#ffffff"/>`),up:Oh(`<path d="M12 19V5M5.5 11.5L12 5l6.5 6.5"/>`),down:Oh(`<path d="M12 5v14M5.5 12.5L12 19l6.5-6.5"/>`),flag:kh(`<path d="M5 2.5h2V22H5z"/><path d="M7 3.5h12l-3 4 3 4H7z"/>`),star:kh(`<path d="M12 2.8l2.8 5.8 6.4.9-4.6 4.5 1.1 6.3L12 17.3l-5.7 3 1.1-6.3L2.8 9.5l6.4-.9z"/>`),check:Oh(`<path d="M4.5 12.5l5 5L19.5 7"/>`),lock:kh(`<rect x="4.5" y="10.5" width="15" height="11" rx="2.5"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" fill="none" stroke="currentColor" stroke-width="2.4"/>`),gift:kh(`<rect x="3" y="9" width="18" height="12" rx="2"/><rect x="2" y="7" width="20" height="4" rx="1.5"/><path d="M12 7c-2.8 0-5-1.1-5-3s2.4-2.6 5 3c2.6-5.6 5-4.9 5-3s-2.2 3-5 3z"/><path d="M11 7h2v14h-2z" fill="#ffffff" opacity=".45"/>`),target:Oh(`<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.3" fill="currentColor"/>`),height:Oh(`<path d="M12 21V4M7 8.5L12 3.5l5 5"/><path d="M4 21h16"/>`),speed:Oh(`<path d="M4.5 17a8.5 8.5 0 1 1 15 0"/><path d="M12 13l4.5-4.5"/><circle cx="12" cy="13" r="1.4" fill="currentColor"/>`),distance:Oh(`<path d="M3 17h18"/><path d="M3 13v8M21 13v8"/><path d="M7 9l-3 3 3 3M17 9l3 3-3 3" transform="translate(0 -3)"/>`),sparkle:kh(`<path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>`),hamster:`<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><circle cx="12" cy="13" r="8.5" fill="#f39a3d"/><circle cx="6.2" cy="6.5" r="2.6" fill="#f39a3d"/><circle cx="17.8" cy="6.5" r="2.6" fill="#f39a3d"/><circle cx="6.2" cy="6.6" r="1.4" fill="#ff9db4"/><circle cx="17.8" cy="6.6" r="1.4" fill="#ff9db4"/><ellipse cx="12" cy="16.5" rx="6" ry="4.4" fill="#fff2dc"/><circle cx="9" cy="12.2" r="1.4" fill="#1d1512"/><circle cx="15" cy="12.2" r="1.4" fill="#1d1512"/><circle cx="9.4" cy="11.7" r=".45" fill="#fff"/><circle cx="15.4" cy="11.7" r=".45" fill="#fff"/><ellipse cx="12" cy="14.6" rx="1.1" ry=".8" fill="#ff8fa6"/><circle cx="6.8" cy="15" r="1.3" fill="#ff9db4" opacity=".7"/><circle cx="17.2" cy="15" r="1.3" fill="#ff9db4" opacity=".7"/></svg>`};function $(e,t=``,n=``){let r=document.createElement(e);return t&&(r.className=t),n&&(r.innerHTML=n),r}function jh(e){e.classList.remove(`bump`),e.offsetWidth,e.classList.add(`bump`)}var Mh=class{root;fadeEl;flashEl=null;constructor(e){this.root=e,this.fadeEl=$(`div`,`fade`),e.append(this.fadeEl)}toast(e,t=`info`){this.root.querySelectorAll(`.toast`).forEach(e=>e.remove());let n=$(`div`,`toast ${t}`);n.textContent=e,this.root.append(n),window.setTimeout(()=>n.remove(),2500)}flash(e,t=`gold`,n=!1){this.flashEl?.remove();let r=this.root.querySelector(`.biome-banner`)?` under`:``,i=$(`div`,`flash ${t}${n?` small`:``}${r}`);i.textContent=e,this.root.append(i),this.flashEl=i,window.setTimeout(()=>i.remove(),1250)}banner(e,t){this.root.querySelectorAll(`.biome-banner`).forEach(e=>e.remove());let n=$(`div`,`biome-banner`);n.innerHTML=`<small></small><b></b>`,n.querySelector(`small`).textContent=t,n.querySelector(`b`).textContent=e,this.root.append(n),window.setTimeout(()=>n.remove(),2700)}floater(e,t,n,r=``){if(this.root.querySelectorAll(`.floater`).length>24)return;let i=$(`div`,`floater ${r}`);i.textContent=e,i.style.left=`${t}px`,i.style.top=`${n}px`,this.root.append(i),window.setTimeout(()=>i.remove(),950)}confetti(e=80,t=[`#ffc93c`,`#6ee67f`,`#58b0ff`,`#ff6b8a`,`#c07bff`,`#ffffff`]){let n=$(`div`,`confetti`);for(let r=0;r<e;r++){let e=$(`i`);e.style.left=`${50+(Math.random()-.5)*40}%`,e.style.background=t[r%t.length],e.style.setProperty(`--dx`,`${(Math.random()-.5)*110}vw`),e.style.setProperty(`--dy`,`${50+Math.random()*70}vh`),e.style.setProperty(`--rot`,`${Math.random()*1080-540}deg`),e.style.animationDelay=`${Math.random()*.2}s`,n.append(e)}this.root.append(n),window.setTimeout(()=>n.remove(),2700)}setFade(e){return this.fadeEl.classList.toggle(`on`,e),new Promise(e=>window.setTimeout(e,380))}modal(e,t={}){let n=$(`div`,`backdrop`);n.append(e);let r=!1,i=()=>{r||(r=!0,n.remove(),t.onClose?.())};if(t.dismissible!==!1){n.addEventListener(`pointerdown`,e=>{e.target===n&&i()});let t=$(`button`,`close`,Q.close);t.setAttribute(`aria-label`,X(`close`)),t.addEventListener(`click`,i),e.append(t)}return this.root.append(n),i}hasModal(){return this.root.querySelector(`.backdrop`)!==null}async adStub(){let e=$(`div`,`ad-stub`,`<div><h2>${X(`ad.title`)}</h2><p>${X(`ad.stub`)}</p><div class="bar"><div></div></div></div>`);this.root.append(e),await new Promise(e=>window.setTimeout(e,1700)),e.remove()}};function Nh(e){let t=document.querySelector(`#boot .boot-text`);t&&(t.textContent=e)}function Ph(e,t=.4){let n=document.querySelector(`#boot .boot-bar i`);n&&(n.style.transitionDuration=`${t}s`,n.style.transform=`scaleX(${e})`)}function Fh(){let e=document.getElementById(`boot`);e&&(Ph(1,.25),e.classList.add(`done`),window.setTimeout(()=>e.remove(),700))}var Ih={mountains:`#e8f0ff`,forest:`#5cc24a`,lake:`#3fa8ff`,town:`#ff9a3d`,desert:`#ffd23f`,sea:`#2f6fd6`},Lh=2*Math.PI*48,Rh=class{el;distEl;heightEl;speedEl;coinsEl;coinsPill;track;me;rec;boostEl;fuelFill;steer;hintEl;cue;rivalEl;effectEl;lastEffect=``;lastRival=``;trackMax=1e3;lastDist=-1;lastCoins=-1;constructor(e,t){this.el=$(`div`,`hud hidden`),this.el.innerHTML=`
      <div class="hud-top">
        <div class="dist-box">
          <div class="dist">0<small>${X(`unit.m`)}</small></div>
          <div class="hud-chips">
            <div class="pill"><span class="ico">${Q.height}</span><span class="h-val">0</span></div>
            <div class="pill"><span class="ico">${Q.speed}</span><span class="s-val">0</span></div>
          </div>
          <div class="rival-chip hidden">${Q.flag}<span></span></div>
          <div class="effect-chip hidden"></div>
        </div>
        <div class="track-wrap"><div class="track"><div class="mark rec">${Q.flag}</div><div class="mark me">${Q.hamster}</div></div></div>
        <div class="hud-right">
          <div class="pill coins-pill">${Ah(30)}<span class="c-val">0</span></div>
          <button class="round-btn pause-btn" aria-label="${X(`hud.pause`)}">${Q.pause}</button>
        </div>
      </div>
      <div class="steer hidden"><div class="up">${Q.up}</div><div class="down">${Q.down}</div></div>
      <div class="boost hidden">
        <svg class="ring" viewBox="0 0 112 112"><defs><linearGradient id="fuel-grad"><stop offset="0" stop-color="#ffd23f"/><stop offset="1" stop-color="#ff6a3d"/></linearGradient></defs>
          <circle class="track-c" cx="56" cy="56" r="48"/><circle class="fill" cx="56" cy="56" r="48" stroke-dasharray="${Lh}" stroke-dashoffset="0"/></svg>
        <button aria-label="${X(`hud.boost`)}">${Q.rocket}</button>
        <div class="label">${X(`hud.boost`)}</div>
      </div>
      <div class="hint"></div>
      <svg class="jump-cue hidden" viewBox="0 0 140 140"><circle class="target" cx="70" cy="70" r="26"/><circle class="closing" cx="70" cy="70" r="60"/></svg>
    `,e.append(this.el);let n=e=>this.el.querySelector(e);this.distEl=n(`.dist`),this.heightEl=n(`.h-val`),this.speedEl=n(`.s-val`),this.coinsEl=n(`.c-val`),this.coinsPill=n(`.coins-pill`),this.track=n(`.track`),this.me=n(`.me`),this.rec=n(`.rec`),this.boostEl=n(`.boost`),this.fuelFill=n(`.boost .fill`),this.steer=n(`.steer`),this.hintEl=n(`.hint`),this.cue=n(`.jump-cue`),this.rivalEl=n(`.rival-chip`),this.effectEl=n(`.effect-chip`);let r=n(`.boost button`);r.addEventListener(`pointerdown`,e=>{e.preventDefault(),e.stopPropagation(),r.setPointerCapture(e.pointerId),t.boost(!0)});let i=e=>{r.hasPointerCapture(e.pointerId)&&r.releasePointerCapture(e.pointerId),t.boost(!1)};r.addEventListener(`pointerup`,i),r.addEventListener(`pointercancel`,i),r.addEventListener(`contextmenu`,e=>e.preventDefault());for(let[e,r]of[[`.up`,1],[`.down`,-1]]){let i=n(e);i.addEventListener(`pointerdown`,e=>{e.preventDefault(),e.stopPropagation(),t.steer(r),i.setPointerCapture(e.pointerId)});let a=e=>{i.hasPointerCapture(e.pointerId)&&i.releasePointerCapture(e.pointerId),t.steer(0)};i.addEventListener(`pointerup`,a),i.addEventListener(`pointercancel`,a),i.addEventListener(`contextmenu`,e=>e.preventDefault())}n(`.pause-btn`).addEventListener(`click`,()=>t.pause())}show(e){this.el.classList.remove(`hidden`),this.boostEl.classList.toggle(`hidden`,!e.rocket),this.steer.classList.toggle(`hidden`,!e.touch);let t=Cp(Sp(e.best*1.05)+1);this.trackMax=Math.max(t.start*1.12,e.best*1.25,600),this.track.querySelectorAll(`.seg`).forEach(e=>e.remove());for(let e=0,t=Sp(this.trackMax);e<=t;e++){let t=Cp(e),n=Math.max(0,t.start),r=Math.min(this.trackMax,Cp(e+1).start);if(n>=this.trackMax)break;let i=$(`div`,`seg`);i.style.left=`${n/this.trackMax*100}%`,i.style.width=`${(r-n)/this.trackMax*100}%`,i.style.background=Ih[t.id],this.track.prepend(i)}this.rec.classList.toggle(`hidden`,e.best<20),this.rec.style.left=`${Math.min(100,e.best/this.trackMax*100)}%`,this.lastDist=-1,this.lastCoins=-1,this.update({distance:0,height:0,speedKmh:0,coins:0,fuel:e.rocket?1:null,boosting:!1})}hide(){this.el.classList.add(`hidden`),this.cueOff()}update(e){let t=Math.max(0,Math.floor(e.distance));t!==this.lastDist&&(this.lastDist=t,this.distEl.firstChild.textContent=Z(t),this.me.style.left=`${Math.min(100,t/this.trackMax*100)}%`),this.heightEl.textContent=`${Z(Math.max(0,Math.round(e.height)))} ${X(`unit.m`)}`,this.speedEl.textContent=`${Z(Math.round(e.speedKmh))} ${X(`unit.kmh`)}`,e.coins!==this.lastCoins&&(this.lastCoins>=0&&jh(this.coinsPill),this.lastCoins=e.coins,this.coinsEl.textContent=Z(e.coins)),e.fuel!==null&&(this.fuelFill.setAttribute(`stroke-dashoffset`,String(Lh*(1-Math.max(0,Math.min(1,e.fuel))))),this.boostEl.classList.toggle(`on`,e.boosting),this.boostEl.classList.toggle(`empty`,e.fuel<=.001));let n=e.effect?`${e.effect.kind}|${Math.ceil(e.effect.left)}`:``;n!==this.lastEffect&&(this.lastEffect=n,this.effectEl.classList.toggle(`hidden`,!e.effect),e.effect&&(this.effectEl.className=`effect-chip ${e.effect.kind}`,this.effectEl.textContent=X(`effect.${e.effect.kind}`,{n:Math.ceil(e.effect.left)})));let r=e.rival?`${e.rival.name}|${Math.ceil(e.rival.gap/10)}`:``;r!==this.lastRival&&(this.lastRival=r,this.rivalEl.classList.toggle(`hidden`,!e.rival),e.rival&&(this.rivalEl.querySelector(`span`).textContent=X(`rival.ahead`,{name:e.rival.name,d:Nf(e.rival.gap)})))}setSteer(e){this.steer.querySelector(`.up`).classList.toggle(`on`,e>0),this.steer.querySelector(`.down`).classList.toggle(`on`,e<0)}hint(e){this.hintEl.textContent!==e&&(this.hintEl.textContent=e)}jumpCue(e,t,n,r){this.cue.classList.remove(`hidden`),this.cue.style.left=`${e}px`,this.cue.style.top=`${t}px`;let i=26+34*Math.max(0,Math.min(1,n));this.cue.querySelector(`.closing`).setAttribute(`r`,String(i)),this.cue.classList.toggle(`hot`,r)}cueOff(){this.cue.classList.add(`hidden`)}},zh={ramp:[`#5fb4ff`,`#2f7df0`],wings:[`#ffb35c`,`#ff7a2f`],sled:[`#ff8080`,`#e8383d`],aero:[`#5fe0c8`,`#1fa88f`],rocket:[`#ff7aa0`,`#e83d6a`],fuel:[`#ffd54a`,`#f09a12`],magnet:[`#b38bff`,`#7d4ff0`]},Bh=(e,t)=>{let[n,r]=e===`goal`?[`#6ee67f`,`#2fbf55`]:e===`daily`?[`#ffd54a`,`#f09a12`]:zh[e];return`<div class="bubble" style="background:linear-gradient(180deg,${n},${r})">${Q[t]}</div>`},Vh=class{el;constructor(e,t){this.el=$(`div`,`screen title-screen hidden`),this.el.innerHTML=`
      <div class="logo"><h1>${X(`app.title`)}</h1><div class="tagline">${X(`app.tagline`)}</div></div>
      <div class="title-bottom">
        <button class="btn go play">${Q.play}<span>${X(`title.play`)}</span></button>
        <div class="title-row">
          <div class="pill small best-pill">${Q.trophy}<span class="best"></span></div>
          <button class="round-btn rec-btn" aria-label="${X(`hangar.records`)}">${Q.trophy}</button>
          <button class="round-btn set-btn" aria-label="${X(`hangar.settings`)}">${Q.gear}</button>
        </div>
      </div>`,e.append(this.el),this.el.querySelector(`.play`).addEventListener(`click`,()=>t.play()),this.el.querySelector(`.rec-btn`).addEventListener(`click`,()=>t.records()),this.el.querySelector(`.set-btn`).addEventListener(`click`,()=>t.settings())}show(e){this.el.classList.remove(`hidden`);let t=this.el.querySelector(`.best-pill`);t.classList.toggle(`hidden`,e<1),t.querySelector(`.best`).textContent=X(`title.best`,{d:Nf(e)})}hide(){this.el.classList.add(`hidden`)}},Hh=class{handlers;el;cards;coinsEl;coinsPill;bestEl;goalsEl;rentWrap;flyBtn;seasonWrap;view=null;shownCoins=0;coinAnim=0;constructor(e,t){this.handlers=t,this.el=$(`div`,`screen hangar hidden`),this.el.innerHTML=`
      <div class="hangar-top">
        <div class="pill coins-pill">${Ah(30)}<span class="c-val">0</span></div>
        <div class="pill small">${Q.trophy}<span class="best"></span></div>
        <div class="pill small star-pill hidden">${Q.star}<span class="stars"></span></div>
        <div class="spacer"></div>
        <button class="round-btn shop-btn hidden" aria-label="${X(`shop.title`)}">${Q.bag}</button>
        <button class="round-btn ach-btn" aria-label="${X(`ach.btn`)}">${Q.medal}<i class="dot hidden"></i></button>
        <button class="round-btn rec-btn" aria-label="${X(`hangar.records`)}">${Q.trophy}</button>
        <button class="round-btn set-btn" aria-label="${X(`hangar.settings`)}">${Q.gear}</button>
      </div>
      <div class="hangar-body">
        <div class="left-col"><div class="hero-spot"></div><div class="goals"></div></div>
        <div class="right-col">
          <div class="panel"><div class="panel-head"><span>${X(`hangar.upgrades`)}</span></div><div class="cards"></div></div>
          <div class="fly-col"><div class="season-wrap"></div><div class="rent-wrap"></div><button class="btn go fly">${X(`hangar.fly`)}</button></div>
        </div>
      </div>`,e.append(this.el);let n=e=>this.el.querySelector(e);this.cards=n(`.cards`),this.coinsEl=n(`.c-val`),this.coinsPill=n(`.coins-pill`),this.bestEl=n(`.best`),this.goalsEl=n(`.goals`),this.rentWrap=n(`.rent-wrap`),this.flyBtn=n(`.fly`),this.seasonWrap=n(`.season-wrap`),this.flyBtn.addEventListener(`click`,()=>t.fly()),n(`.ach-btn`).addEventListener(`click`,()=>t.achievements()),n(`.shop-btn`).addEventListener(`click`,()=>t.shop()),n(`.rec-btn`).addEventListener(`click`,()=>t.records()),n(`.set-btn`).addEventListener(`click`,()=>t.settings())}show(e){this.el.classList.remove(`hidden`),this.shownCoins=e.coins,this.render(e)}hide(){this.el.classList.add(`hidden`)}get visible(){return!this.el.classList.contains(`hidden`)}render(e,t){this.view=e,this.animateCoins(e.coins),this.bestEl.textContent=Nf(e.best),this.cards.innerHTML=``;for(let n of e.upgrades)this.cards.append(this.card(n,n.id===t));this.goalsEl.innerHTML=``;for(let t of e.goals)this.goalsEl.append(this.goal(t));if(this.rentWrap.innerHTML=``,e.rentActive)this.rentWrap.append($(`div`,`rent-on`,`${Q.rocket}<span>${X(`hangar.rentOn`)}</span>`));else if(e.canRent){let e=$(`button`,`btn purple rent`,`<span class="ad-badge">${Q.ad}</span><span>${X(`hangar.rent`)}</span>`);e.title=X(`hangar.rent`),e.addEventListener(`click`,()=>this.handlers.rent()),this.rentWrap.append(e)}this.flyBtn.classList.toggle(`pulse`,e.pulseFly&&!e.season.urge);let n=e.season,r=this.el.querySelector(`.star-pill`);if(r.classList.toggle(`hidden`,n.stars===0&&n.season===1),r.querySelector(`.stars`).textContent=`${Z(n.stars)} · ${X(`season.badge`,{n:n.season})}`,this.el.querySelector(`.ach-btn .dot`).classList.toggle(`hidden`,!e.achNew),this.el.querySelector(`.shop-btn`).classList.toggle(`hidden`,!e.shop),this.seasonWrap.innerHTML=``,n.gain>0){let e=$(`button`,`btn gold season${n.urge?` pulse`:``}`,`${Q.star}<span>${X(`season.btn`,{n:Z(n.gain)})}</span>`);e.addEventListener(`click`,()=>this.handlers.season()),this.seasonWrap.append(e)}else(e.best>=1e3||n.season>1)&&this.seasonWrap.append($(`div`,`season-locked`,`${Q.lock}<span>${X(`season.lockedBtn`,{d:Nf(n.min)})}</span>`))}animateCoins(e){window.cancelAnimationFrame(this.coinAnim);let t=this.shownCoins;if(t===e){this.coinsEl.textContent=Z(e);return}jh(this.coinsPill);let n=performance.now(),r=()=>{let i=Math.min(1,(performance.now()-n)/450);this.shownCoins=Math.round(t+(e-t)*(1-(1-i)**3)),this.coinsEl.textContent=Z(this.shownCoins),i<1&&(this.coinAnim=window.requestAnimationFrame(r))};r()}card(e,t){let n=this.view?.coins??0,r=e.cost!==null&&!e.locked&&n>=e.cost,i=$(`div`,`card tier${Vp(e.level)}${r?` can`:``}${t?` pop`:``}`);i.dataset.id=e.id;let a=Math.min(Math.floor(Math.max(0,e.level-1)/10)*10,Math.max(0,e.max-10)),o=Math.min(10,e.max-a),s=Array.from({length:o},(n,r)=>{let i=a+r;return`<i class="${i<e.level?`on`:``}${t&&i===e.level-1?` new`:``}"></i>`}).join(``),c=e.next?`${jf(`stat.${e.id}`)}: <b>${e.stat}</b> → <b>${e.next}</b><span class="delta">${e.delta}</span>`:`${jf(`stat.${e.id}`)}: <b>${e.stat}</b>`;i.innerHTML=`
      ${Bh(e.id,e.id)}
      <div class="card-info">
        <div class="card-title"><span>${jf(`up.${e.id}`)}</span><span class="lvl">${X(`hangar.level`,{n:e.level})}</span></div>
        <div class="pips">${s}</div>
        <div class="stat">${e.locked?jf(`up.${e.id}.desc`):c}</div>
      </div>`;let l;return e.cost===null?(l=$(`button`,`btn buy max`,X(`hangar.max`)),l.disabled=!0):e.locked?(l=$(`button`,`btn buy max`,`${Q.lock}`),l.title=X(`hangar.needRocket`),l.disabled=!0):(l=$(`button`,`btn buy${r?``:` poor`}`,`${Ah(24)}<span>${Z(e.cost)}</span>`),l.addEventListener(`click`,()=>this.handlers.buy(e.id))),i.append(l),i}goal(e){let t=$(`div`,`goal${e.kind===`daily`?` daily-goal`:``}`),n=Math.min(100,e.progress/Math.max(1,e.target)*100);return t.innerHTML=`
      ${Bh(e.kind,e.kind===`daily`?`gift`:`target`)}
      <div class="goal-text">
        <div class="goal-kind">${e.kind===`daily`?X(`hangar.daily`):X(`hangar.goal`)}<span class="goal-reward">+${Z(e.reward)} ${Ah(16)}</span></div>
        <div class="goal-name"></div>
        <div class="goal-bar"><i style="width:${e.done?100:n}%"></i></div>
      </div>`,t.querySelector(`.goal-name`).textContent=e.title,e.done&&t.classList.add(`done`),t}cardRect(e){return this.cards.querySelector(`[data-id="${e}"]`)?.getBoundingClientRect()??null}shake(e){let t=this.cards.querySelector(`[data-id="${e}"]`);t&&jh(t)}},Uh=[[828,`compare.burj`],[540,`compare.ostankino`],[330,`compare.eiffel`],[93,`compare.liberty`]],Wh=105;function Gh(e,t){let n=[],r=Math.round(e/Wh);r>=2&&n.push(X(`compare.pitches`,{n:Z(r),w:Mf(`compare.pitch`,r)}));let i=Uh.find(([e])=>t>=e);return i&&n.push(X(i[1])),n.join(` · `)}function Kh(e,t,n){let r=$(`div`,`sheet results`);r.innerHTML=`
    <h2 class="${t.newRecord?`record`:``}">${t.newRecord?X(`results.record`):X(`results.title`)}</h2>
    <div class="big-dist"><span class="num">0</span><small> ${X(`unit.m`)}</small></div>
    <div class="compare">${Gh(t.distance,t.height)}</div>
    <div class="sub"></div>
    <div class="stat-row">
      <span class="stat-chip">${Q.height}${Z(Math.round(t.height))} ${X(`unit.m`)}</span>
      <span class="stat-chip">${Q.speed}${Z(Math.round(t.speedKmh))} ${X(`unit.kmh`)}</span>
    </div>
    <div class="rows"></div>
    <div class="total">${Ah(44)}<span class="tot">0</span></div>
    <div class="actions"></div>`;let i=r.querySelector(`.sub`);i.textContent=[t.newRecord?``:t.best>t.distance?X(`results.toRecord`,{d:Nf(t.best-t.distance)}):``,t.chase??``].filter(Boolean).join(` · `);let a=r.querySelector(`.stat-row`);if(t.shortcut?a.after(Jh(t.shortcut,n.shortcut)):t.almost&&a.after(qh(t.almost)),t.tomorrow&&!t.shortcut){let e=$(`div`,`tomorrow`,`${Q.gift}<span></span>`);e.querySelector(`span`).textContent=t.tomorrow,r.querySelector(`.total`).after(e)}let o=r.querySelector(`.rows`),s=t.rows.map(e=>{let t=$(`div`,`row${e.goal?` goal-row`:``}`);return t.innerHTML=`<span></span><b>+${Z(e.value)} ${Ah(20)}</b>`,t.querySelector(`span`).textContent=e.label,o.append(t),t}),c=r.querySelector(`.actions`),l=r.querySelector(`.num`),u=r.querySelector(`.tot`),d=t.total,f=!1;if(t.canDouble){let e=$(`button`,`btn purple`,`<span class="ad-badge">${Q.ad}</span><span>${X(`results.double`)} ×2</span>`);e.addEventListener(`click`,async()=>{e.disabled=!0,await n.double()?(e.remove(),Yh(u,d,d*2,700,n.tick),d*=2,jh(u.parentElement)):e.disabled=!1}),c.append(e)}if(t.canContinue){let e=$(`button`,`btn blue`,`<span class="ad-badge">${Q.ad}</span><span>${X(`results.continue`)}</span>`);e.addEventListener(`click`,()=>{f||(f=!0,m(),n.cont())}),c.append(e)}let p=$(`button`,`btn go next`,`${X(`results.next`)}`);p.addEventListener(`click`,()=>{f||(f=!0,m(),n.next())}),c.append(p);let m=e.modal(r,{dismissible:!1});return Yh(l,0,Math.floor(t.distance),900,n.tick),s.forEach((e,t)=>window.setTimeout(()=>e.classList.add(`in`),500+t*160)),window.setTimeout(()=>Yh(u,0,d,700,n.tick),500+s.length*160),m}function qh(e){let t=$(`div`,`almost`,`<div class="almost-top"><span class="almost-name"></span><b></b></div><div class="goal-bar"><i style="width:${Math.min(100,e.pct)}%"></i></div>`);return t.querySelector(`.almost-name`).textContent=e.title,t.querySelector(`b`).textContent=e.progress,t}function Jh(e,t){let n=$(`div`,`shortcut`,`<p></p><span class="sc-chip">+${Z(e)} ${Ah(18)}</span><div class="sc-btns"></div>`),r=n.querySelector(`p`);r.textContent=X(`shortcut.text`);let i=$(`button`,`btn go small`,X(`shortcut.add`)),a=$(`button`,`btn white small`,X(`shortcut.later`)),o=n.querySelector(`.sc-btns`);o.append(i,a);let s=e=>{i.disabled=a.disabled=!0,t(e).then(e=>{e?(n.classList.add(`done`),r.textContent=X(`shortcut.done`),o.remove(),jh(n.querySelector(`.sc-chip`))):n.remove()})};return i.addEventListener(`click`,()=>s(!0)),a.addEventListener(`click`,()=>s(!1)),n}function Yh(e,t,n,r,i){let a=performance.now(),o=0,s=()=>{let c=Math.min(1,(performance.now()-a)/r);e.textContent=Z(Math.round(t+(n-t)*(1-(1-c)**3))),performance.now()-o>70&&c<1&&(o=performance.now(),i()),c<1&&window.requestAnimationFrame(s)};s()}function Xh(e,t,n){let r=$(`div`,`sheet`);r.innerHTML=`
    <h2>${X(`offline.title`)}</h2>
    <div class="offline-art">${Q.hamster}</div>
    <div class="sub">${X(`offline.text`)}</div>
    <div class="total">${Ah(44)}<span>+${Z(t)}</span></div>
    <div class="actions"></div>`;let i=r.querySelector(`.actions`),a=$(`button`,`btn purple`,`<span class="ad-badge">${Q.ad}</span><span>${X(`offline.double`)}</span>`),o=$(`button`,`btn go`,X(`offline.take`));i.append(a,o);let s=e.modal(r,{dismissible:!1}),c=!1,l=async e=>{c||(c=!0,await n.take(e),s())};a.addEventListener(`click`,()=>void l(!0)),o.addEventListener(`click`,()=>void l(!1))}function Zh(e,t,n){let r=$(`div`,`sheet`);r.innerHTML=`<h2>${X(`records.title`)}</h2><div class="tabs"></div><div class="leaders"></div>${n?`<div class="sub small-note">${X(`records.stub`)}</div>`:``}`;let i=r.querySelector(`.tabs`),a=r.querySelector(`.leaders`),o=`distance`,s=(e,t)=>e===`total`?`${Z(t)} ${X(`unit.km`)}`:Nf(t),c=async e=>{o=e,i.querySelectorAll(`button`).forEach(t=>t.classList.toggle(`on`,t.dataset.b===e));let n=await t(e);if(o===e){if(a.innerHTML=``,!n||n.length===0)a.append($(`div`,`sub`,X(`records.empty`)));else for(let t of n){let n=$(`div`,`leader${t.me?` me`:``}`);n.innerHTML=`<span class="rank">${t.rank}</span><span class="name"></span><span>${s(e,t.score)}</span>`,n.querySelector(`.name`).textContent=t.me?`${X(`records.you`)}${t.name?` (${t.name})`:``}`:t.name,a.append(n)}}};for(let e of[`distance`,`altitude`,`total`]){let t=$(`button`,``,X(`records.${e}`));t.dataset.b=e,t.addEventListener(`click`,()=>void c(e)),i.append(t)}c(`distance`),e.modal(r)}function Qh(e,t,n){let r=$(`div`,`sheet season-sheet`);r.innerHTML=`
    <div class="big-star">${Q.star}</div>
    <h2>${X(`season.title`)}</h2>
    <div class="sub">${X(`season.text`)}</div>
    <div class="season-gain">${X(`season.gain`,{n:Z(t.gain)})}</div>
    <div class="season-rows"><div>${X(`season.now`,{stars:Z(t.stars),mul:Z(t.mulNow,1)})}</div><div class="after">${X(`season.after`,{stars:Z(t.stars+t.gain),mul:Z(t.mulAfter,1)})}</div></div>
    <div class="actions"></div>`;let i=r.querySelector(`.actions`),a=$(`button`,`btn gold`,`${Q.star}<span>${X(`season.go`)}</span>`),o=$(`button`,`btn white`,X(`season.cancel`));i.append(a,o);let s=e.modal(r);a.addEventListener(`click`,()=>{s(),n()}),o.addEventListener(`click`,()=>s())}function $h(e,t,n){let r=$(`div`,`sheet streak-sheet`),i=t.note===`forgiven`?X(`streak.forgiven`):t.note===`back`?t.today>1?X(`streak.back`,{n:t.today}):X(`streak.backFirst`):``;r.innerHTML=`<h2>${X(`streak.title`)}</h2>${i?`<div class="streak-note">${i}</div>`:``}<div class="sub">${X(`streak.sub`)}</div><div class="streak"></div><div class="sub small-note">${X(`streak.skipHint`)}</div><div class="actions"></div>`;let a=r.querySelector(`.streak`),o=null;for(let e=1;e<=7;e++){let n=$(`div`,`streak-day${e<t.today?` taken`:``}${e===t.today?` today`:``}${e===7?` big`:``}`);n.innerHTML=`<span class="dn">${X(`streak.day`,{n:e})}</span>${e===7?Q.gift:Ah(26)}<b>${Z(t.coins(e))}</b>${e<t.today?`<span class="tick">${Q.check}</span>`:``}`,e===t.today&&(o=n),a.append(n)}let s=r.querySelector(`.actions`),c=$(`button`,`btn go`,`${Q.gift}<span>${X(`streak.claim`)}</span>`);s.append(c);let l=e.modal(r,{dismissible:!1}),u=!1;c.addEventListener(`click`,()=>{if(u){l();return}u=!0;let e=n();if(!e){l();return}o?.append($(`span`,`tick`,Q.check)),o&&jh(o);let t=$(`div`,`tomorrow`,`${Q.gift}<span></span>`);t.querySelector(`span`).textContent=e,s.before(t),c.innerHTML=`<span>${X(`streak.ok`)}</span>`})}function eg(e,t,n,r,i){let a=$(`div`,`sheet ach-sheet`),o=t.filter(e=>e.done).length,s=r.filter(e=>e.owned).length;a.innerHTML=`<h2>${X(`ach.title`)} <small>${o}/${t.length}</small></h2><div class="skins"></div><h3 class="cards-h">${X(`cards.title`)} <small>${s}/${r.length}</small></h3><div class="pcards"></div><div class="sub small-note">${X(`cards.hint`)}</div><div class="ach-list"></div>`;let c=a.querySelector(`.pcards`);for(let e of r){let t=$(`div`,`pcard${e.owned?``:` locked`}`);e.owned&&(t.style.background=`linear-gradient(170deg, #bfe8ff 0%, ${e.colors[0]} 55%, ${e.colors[1]} 100%)`),t.innerHTML=`<b></b><small></small>`,t.querySelector(`b`).textContent=e.owned?jf(`card.${e.id}`):`?`,t.querySelector(`small`).textContent=e.where,c.append(t)}let l=a.querySelector(`.skins`),u=()=>{l.innerHTML=``;for(let e of n){let t=$(`button`,`skin${e.owned?``:` locked`}${e.on?` on`:``}`,`<span class="sw" style="background:linear-gradient(135deg,${e.colors[0]} 50%,${e.colors[1]} 50%)"></span><span class="nm"></span><span class="how"></span>`);t.querySelector(`.nm`).textContent=jf(`skin.${e.id}`),t.querySelector(`.how`).textContent=e.on?X(`ach.equipped`):e.owned?X(`ach.equip`):e.how,t.disabled=!e.owned,t.addEventListener(`click`,()=>{if(e.owned){i(e.id);for(let t of n)t.on=t.id===e.id;u()}}),l.append(t)}};u();let d=a.querySelector(`.ach-list`);for(let e of[...t].sort((e,t)=>Number(e.done)-Number(t.done))){let t=$(`div`,`ach${e.done?` done`:``}`),n=Math.min(100,e.progress/Math.max(1,e.goal)*100),r=e.isDistance?`${Nf(Math.min(e.progress,e.goal))} / ${Nf(e.goal)}`:`${Z(Math.min(e.progress,e.goal))} / ${Z(e.goal)}`;t.innerHTML=`<span class="ic">${e.done?Q.check:Q.medal}</span><div class="tx"><b></b><div class="goal-bar"><i style="width:${e.done?100:n}%"></i></div><small></small></div><span class="rw"></span>`,t.querySelector(`b`).textContent=jf(`ach.${e.id}`),t.querySelector(`small`).textContent=e.done?X(`daily.done`):r,t.querySelector(`.rw`).textContent=e.reward,d.append(t)}e.modal(a)}function tg(e,t,n,r){let i=$(`div`,`sheet shop-sheet`);i.innerHTML=`<h2>${X(`shop.title`)}</h2><div class="pill coins-pill">${Ah(26)}<span class="c-val">${Z(t)}</span></div><div class="shop-list"></div><div class="sub small-note">${X(`shop.hint`)}</div>`;let a=i.querySelector(`.shop-list`),o=()=>{a.innerHTML=``;for(let e of n()){let t=$(`div`,`shop-item${e.owned?` owned`:``}`);t.innerHTML=`<span class="si-ico">${Q[e.icon]}</span><div class="si-body"><b></b><small></small></div>`,t.querySelector(`b`).textContent=e.title,t.querySelector(`small`).textContent=e.gives;let n=$(`button`,`btn ${e.owned?`white`:`go`} small`,e.owned?X(`shop.owned`):`<span class="pr"></span>${e.currencyIcon?`<img alt="" src="${e.currencyIcon}">`:``}`),i=n.querySelector(`.pr`);i&&(i.textContent=e.price),n.disabled=e.owned,n.addEventListener(`click`,()=>r(e.id,o)),t.append(n),a.append(t)}};o(),e.modal(i)}function ng(e,t,n){let r=$(`div`,`sheet`);r.innerHTML=`<h2>${X(`settings.title`)}</h2>`;let i=(e,t,n)=>{let i=$(`div`,`setting`);i.innerHTML=`<span></span>`,i.querySelector(`span`).textContent=e;let a=$(`button`,`toggle${t?` on`:``}`);a.setAttribute(`aria-label`,e),a.addEventListener(`click`,()=>{let e=!a.classList.contains(`on`);a.classList.toggle(`on`,e);let t=n(e);t&&t.then(e=>a.isConnected&&a.classList.toggle(`on`,e))}),i.append(a),r.append(i)};i(X(`settings.sound`),t.sound,n.sound),i(X(`settings.music`),t.music,n.music),t.fullscreen!==null&&i(`${X(`settings.fullscreen`)}${matchMedia(`(pointer: fine)`).matches?` · F`:``}`,t.fullscreen,n.fullscreen);let a=$(`button`,`btn white`,X(`settings.reset`));a.style.marginTop=`14px`,a.style.width=`100%`,a.addEventListener(`click`,()=>{window.confirm(X(`settings.resetConfirm`))&&n.reset()}),r.append(a),e.modal(r)}function rg(e,t){let n=$(`div`,`sheet`);n.innerHTML=`<h2>${X(`pause.title`)}</h2><div class="actions" style="margin-top:16px"></div>`;let r=n.querySelector(`.actions`),i=$(`button`,`btn go next`,`${Q.play}<span>${X(`pause.resume`)}</span>`),a=$(`button`,`btn white`,X(`pause.quit`));r.append(i,a);let o=t.fullscreen;if(o){let e=$(`button`,`btn white`),t=t=>{e.innerHTML=`${t?Q.shrink:Q.expand}<span>${X(`settings.fullscreen`)}</span>`};t(o.active),e.addEventListener(`click`,()=>void o.toggle().then(t)),r.append(e)}let s=!1,c=e.modal(n,{onClose:()=>{s||t.resume()}});return i.addEventListener(`click`,()=>c()),a.addEventListener(`click`,()=>{s=!0,c(),t.quit()}),c}var ig=[`coins_s`,`coins_m`,`coins_l`,`starter_pack`,`rocket_forever`,`no_ads`],ag=new Set([`no_ads`,`rocket_forever`]),og={coins_s:2,coins_m:6,coins_l:16},sg=e=>ig.includes(e);function cg(e,t){let n=zp.map(t=>Wp(t.id,e.levels[t.id])).filter(e=>e!==null),r=n.length?n.reduce((e,t)=>e+t,0)/n.length:5e3;return Math.round(Math.max(200,r)*og[t]/50)*50}var lg=e=>cg(e,`coins_m`);function ug(e,t){if(t===`no_ads`){e.noAds=!0;return}if(t===`rocket_forever`){e.rocketForever=!0;return}if(t===`starter_pack`){if(e.starterBought)return;e.starterBought=!0;let t=lg(e);e.coins+=t,e.totalCoins+=t,e.skinsOwned.includes(`rainbow`)||e.skinsOwned.push(`rainbow`),e.skin=`rainbow`;return}let n=cg(e,t);e.coins+=n,e.totalCoins+=n}var dg=[[`Мышка Пи`,330],[`Енот Макс`,760],[`Кролик Бо`,1480],[`Ёжик Тоша`,2650],[`Белка Сеня`,4300],[`Бурундук Чип`,6600],[`Суслик Гоша`,9500],[`Хорёк Феня`,13e3],[`Тушканчик Лёва`,17500],[`Шиншилла Ася`,23e3],[`Морская свинка Буся`,3e4],[`Капибара Кира`,38e3],[`Хомяк-чемпион Гром`,47e3]];function fg(e){let t=(e??[]).filter(e=>!e.me&&e.score>0).map(e=>({name:e.name||`Игрок`,distance:e.score})),n=[...t];for(let[e,r]of dg)t.some(e=>Math.abs(e.distance-r)<r*.08)||n.push({name:e,distance:r});return n.sort((e,t)=>e.distance-t.distance)}function pg(e,t){let n=e.filter(e=>e.distance>t).slice(0,4);return[...e.filter(e=>e.distance<=t).slice(-2),...n]}function mg(e,t){return e.find(e=>e.distance>t)??null}var hg=[{id:`classic`,top:15499560,side:16097862,cream:16773852,scarf:[`#e8383d`,`#ffffff`],from:`free`},{id:`snow`,top:15330802,side:16251387,cream:16777215,scarf:[`#3f86e8`,`#ffffff`],from:`achievement`},{id:`cocoa`,top:8014378,side:10118200,cream:15916224,scarf:[`#2fae52`,`#fff1b0`],from:`achievement`},{id:`smoke`,top:7173248,side:9410211,cream:15265010,scarf:[`#ffd23f`,`#2f3542`],from:`achievement`},{id:`panda`,top:2763312,side:16053492,cream:16777215,scarf:[`#e8383d`,`#2a2a30`],from:`achievement`},{id:`berry`,top:15231642,side:16095928,cream:16771312,scarf:[`#8f63f2`,`#ffffff`],from:`achievement`},{id:`mint`,top:4177818,side:8379582,cream:15400951,scarf:[`#ff8a3d`,`#ffffff`],from:`achievement`},{id:`cosmo`,top:3817376,side:6254550,cream:14673663,scarf:[`#ffd23f`,`#3a3fa0`],from:`achievement`},{id:`gold`,top:14721056,side:16763210,cream:16773568,scarf:[`#e8383d`,`#ffd23f`],from:`achievement`},{id:`rainbow`,top:16734858,side:6272255,cream:16773852,scarf:[`#ffd23f`,`#5fb4ff`],from:`shop`}],gg=Object.fromEntries(hg.map(e=>[e.id,e])),_g=e=>gg[e]??hg[0],vg=420,yg=.72,bg=[16731486,16763196,4172031,5951850,12610559];function xg(){let e=document.createElement(`canvas`);e.width=128,e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(52,48,6,64,64,64);n.addColorStop(0,`#fff3b0`),n.addColorStop(.55,`#ffcb3d`),n.addColorStop(1,`#e09412`),t.fillStyle=n,t.fillRect(0,0,128,128),t.lineWidth=7,t.strokeStyle=`#f5b524`,t.beginPath(),t.arc(64,64,52,0,Math.PI*2),t.stroke(),t.fillStyle=`#e8a01c`,t.beginPath();for(let e=0;e<10;e++){let n=-Math.PI/2+e*Math.PI/5,r=e%2?15:34;t.lineTo(64+Math.cos(n)*r,66+Math.sin(n)*r)}t.closePath(),t.fill(),t.fillStyle=`rgba(255,255,255,0.55)`,t.beginPath();for(let e=0;e<10;e++){let n=-Math.PI/2+e*Math.PI/5,r=e%2?12:28;t.lineTo(62+Math.cos(n)*r,62+Math.sin(n)*r)}t.closePath(),t.fill();let r=new Mi(e);return r.colorSpace=Be,r}function Sg(e){let[t,n]=Lp[e],r=document.createElement(`canvas`);r.width=256,r.height=176;let i=r.getContext(`2d`);i.fillStyle=`#fffaf0`,i.fillRect(0,0,256,176);let a=i.createLinearGradient(0,12,0,164);a.addColorStop(0,`#bfe8ff`),a.addColorStop(1,t),i.fillStyle=a,i.fillRect(12,12,232,152),i.fillStyle=`#fff3a8`,i.beginPath(),i.arc(70,60,22,0,Math.PI*2),i.fill();for(let[r,a,o]of[[118,t,18],[136,n,12]]){i.fillStyle=a,i.beginPath(),i.moveTo(12,164);for(let t=12;t<=244;t+=8)i.lineTo(t,r+Math.sin(t*.035+e)*o);i.lineTo(244,164),i.closePath(),i.fill()}i.fillStyle=`#ffffff`,i.fillRect(190,20,44,52),i.setLineDash([4,3]),i.strokeStyle=`#d9534f`,i.lineWidth=2,i.strokeRect(193,23,38,46),i.fillStyle=`#ffc23a`,i.beginPath();for(let e=0;e<10;e++){let t=-Math.PI/2+e*Math.PI/5,n=e%2?6:14;i.lineTo(212+Math.cos(t)*n,47+Math.sin(t)*n)}i.closePath(),i.fill();let o=new Mi(r);return o.colorSpace=Be,o}function Cg(e,t){let n=new va;for(let r=0;r<10;r++){let i=Math.PI/2+r*Math.PI/5,a=r%2?t:e;r===0?n.moveTo(Math.cos(i)*a,Math.sin(i)*a):n.lineTo(Math.cos(i)*a,Math.sin(i)*a)}return n.closePath(),n}function wg(e,t){let n=new An,r=t[e],i=new H(new U(.42,16,12),r);i.scale.set(1.35,.85,.85);let a=new H(new U(.27,14,10),r);a.position.set(-.5,.18,0);let o=new H(new Bi(.09,.32,8),t[3]);o.rotation.z=Math.PI/2,o.position.set(-.82,.14,0);let s=new U(.055,8,6);for(let e of[-1,1]){let r=new H(s,t[4]);r.position.set(-.66,.26,e*.15),n.add(r)}let c=new H(new Bi(.2,.5,8),r);c.rotation.z=-Math.PI/2,c.scale.set(1,1,.35),c.position.set(.66,.05,0),n.add(i,a,o,c);let l=[];for(let e of[-1,1]){let t=new An;t.position.set(-.05,.18,e*.25);let i=new H(new U(.5,14,8),r);i.scale.set(.65,.08,1.5),i.position.set(.05,0,e*.62),t.add(i),n.add(t),l.push(t)}return n.traverse(e=>{e instanceof H&&(e.castShadow=!0)}),{obj:n,wings:l}}var Tg=`
varying vec2 vUv;
varying vec3 vNormalV;
varying vec3 vViewDir;
void main() {
  vUv = uv;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vNormalV = normalize(normalMatrix * normal);
  vViewDir = normalize(-mv.xyz);
  gl_Position = projectionMatrix * mv;
}
`,Eg=`
uniform float uTime;
uniform vec3 uColor;
varying vec2 vUv;
varying vec3 vNormalV;
varying vec3 vViewDir;
void main() {
  float edge = 1.0 - abs(dot(vNormalV, vViewDir));
  float swirl = sin((vUv.x * 6.2831 * 3.0) + vUv.y * 22.0 - uTime * 6.0);
  float streak = smoothstep(0.55, 1.0, swirl);
  float fade = smoothstep(0.0, 0.08, vUv.y) * smoothstep(1.0, 0.55, vUv.y);
  float a = (0.10 + streak * 0.35) * fade * (0.35 + edge * 0.65);
  gl_FragColor = vec4(uColor, a);
}
`,Dg=`
uniform float uTime;
varying vec2 vUv;
varying vec3 vNormalV;
varying vec3 vViewDir;
void main() {
  float edge = 1.0 - abs(dot(vNormalV, vViewDir));
  float lane = floor(vUv.x * 9.0);
  float run = fract(vUv.y * 5.0 - uTime * 1.6 + fract(sin(lane * 12.9898) * 43758.5453));
  float streak = smoothstep(0.0, 0.08, run) * smoothstep(0.55, 0.12, run);
  float thin = smoothstep(0.5, 0.15, abs(fract(vUv.x * 9.0) - 0.5));
  float fade = smoothstep(0.0, 0.12, vUv.y) * smoothstep(1.0, 0.8, vUv.y);
  float a = (0.08 + streak * thin * 0.7) * fade * (0.35 + edge * 0.65);
  gl_FragColor = vec4(vec3(1.0, 0.98, 0.9), a);
}
`,Og=1.3,kg=4.5,Ag=class{group=new An;seedRng=Gd(1);coins=[];coinMesh;rings=[];balloons=[];fuels=[];birds=[];tramps=[];updrafts=[];wires=[];gusts=[];candies=[];gustMat;tailwind=0;cardsOwned=[];card;cardMats;cardFace;cardSeg=-1;updraftMat;spawnedTo=40;groundTo=120;combo=0;comboT=0;m=new tn;q=new jt;e=new fn;v=new B;s=new B;constructor(){let e=xg(),t=new W({color:16761402,metalness:.55,roughness:.25,emissive:16751104,emissiveIntensity:.55}),n=new W({map:e,metalness:.45,roughness:.28,emissive:16777215,emissiveIntensity:.55,emissiveMap:e}),r=new zi(yg,yg,.16,28);r.rotateX(Math.PI/2),this.coinMesh=new yi(r,[t,n,n],vg),this.coinMesh.frustumCulled=!1,this.coinMesh.castShadow=!0,this.coinMesh.count=0,this.group.add(this.coinMesh);for(let e=0;e<vg;e++)this.coins.push({x:0,y:0,value:1,alive:!1,pulled:!1,phase:0});let i=new co(3.1,.34,18,56),a=new Float32Array(i.getAttribute(`position`).count*3),o=i.getAttribute(`position`),s=new V;for(let e=0;e<o.count;e++){let t=Math.atan2(o.getY(e),o.getX(e));s.setHSL(.5+.35*(.5+.5*Math.sin(t*2)),.95,.6),a.set([s.r,s.g,s.b],e*3)}i.setAttribute(`color`,new Cr(a,3));let c=new W({vertexColors:!0,emissive:16777215,emissiveIntensity:0,roughness:.25,metalness:.2});c.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
totalEmissiveRadiance += vColor.rgb * 1.6;`)};let l=new Xr({color:10482687,transparent:!0,opacity:.18,blending:2,depthWrite:!1,side:2}),u=new Ri(2.9,40);for(let e=0;e<6;e++){let e=new An,t=new H(i,c),n=new H(u,l);e.add(t,n),e.visible=!1,this.group.add(e),this.rings.push({obj:e,x:0,y:0,alive:!1,t:0,hit:!1,near:!1})}let d=bg.map(e=>new xo({color:e,roughness:.18,clearcoat:1,clearcoatRoughness:.15})),f=new Xr({color:15921906}),p=new U(.9,24,18);p.scale(1,1.18,1);let m=new Bi(.16,.22,10),h=new zi(.015,.015,2.2,4);for(let e=0;e<6;e++){let t=new An,n=e%bg.length,r=new H(p,d[n]);r.castShadow=!0;let i=new H(m,d[n]);i.position.y=-1.1,i.rotation.x=Math.PI;let a=new H(h,f);a.position.y=-2.25,t.add(r,i,a),t.visible=!1,this.group.add(t),this.balloons.push({obj:t,x:0,y:0,alive:!1,t:0,hit:!1,near:!1,color:new V(bg[n])})}let g=Qd([J(new Hd(.9,1.15,.5,3,.12),15218749),J(Y(new co(.2,.06,8,16,Math.PI),0,.6,0),3093826),J(Y(new zi(.09,.11,.25,10),.32,.65,0),3093826),J(Y(this.boltGeometry(),0,-.05,.26),16765503)]),_=new W({vertexColors:!0,roughness:.35,metalness:.1,emissive:4198416,emissiveIntensity:.3});for(let e=0;e<3;e++){let e=new H(g,_);e.castShadow=!0,e.visible=!1,this.group.add(e),this.fuels.push({obj:e,x:0,y:0,alive:!1,t:0,hit:!1,near:!1})}let v=[new W({color:16185339,roughness:.7}),new W({color:3882834,roughness:.7}),new W({color:10119746,roughness:.7}),new W({color:16753443,roughness:.5}),new Xr({color:1118481})];for(let e=0;e<24;e++){let t=e%3,{obj:n,wings:r}=wg(t,v);n.visible=!1,this.group.add(n),this.birds.push({obj:n,x:0,y:0,alive:!1,t:0,hit:!1,near:!1,vx:0,wings:r,species:t,minD:1/0})}this.buildTramps(),this.updraftMat=new yo({uniforms:{uTime:{value:0},uColor:{value:new V(16777215)}},vertexShader:Tg,fragmentShader:Eg,transparent:!0,depthWrite:!1,side:2,blending:2});let y=new zi(6,7.5,150,32,1,!0);y.translate(0,75,0);for(let e=0;e<3;e++){let e=new H(y,this.updraftMat);e.visible=!1,e.renderOrder=5,this.group.add(e),this.updrafts.push({obj:e,x:0,y:0,alive:!1,t:0,hit:!1,near:!1,ground:0,strength:0})}this.buildWires(),this.gustMat=new yo({uniforms:{uTime:{value:0}},vertexShader:Tg,fragmentShader:Dg,transparent:!0,depthWrite:!1,side:2,blending:2}),this.cardMats=Lp.map((e,t)=>{let n=Sg(t);return new W({map:n,emissive:16777215,emissiveMap:n,emissiveIntensity:.35,roughness:.6})});let b=new An;this.cardFace=new H(new Hd(3.6,2.5,.1,2,.06),this.cardMats[0]),this.cardFace.castShadow=!0;let x=new H(new Ri(3.3,32),new Xr({color:16769674,transparent:!0,opacity:.45,blending:2,depthWrite:!1}));x.position.z=-.2,b.add(this.cardFace,x),b.rotation.y=1.15,b.visible=!1,this.group.add(b),this.card={obj:b,x:0,y:0,alive:!1,t:0,hit:!1,near:!1,id:``};let S=new zi(kg,kg,1,28,1,!0);S.translate(0,.5,0),S.rotateZ(-Math.PI/2);for(let e=0;e<2;e++){let e=new H(S,this.gustMat);e.visible=!1,e.renderOrder=5,this.group.add(e),this.gusts.push({obj:e,x:0,y:0,alive:!1,t:0,hit:!1,near:!1,length:0})}this.buildCandies()}buildCandies(){let e={sleep:[10185727,14272255],turbo:[16726832,16761402],magnet:[16761402,16774064]},t=new Ri(1.9,28);for(let n of[`sleep`,`turbo`,`magnet`]){let[r,i]=e[n],a=Qd(n===`magnet`?[J(new no(Cg(1.05,.48),{depth:.35,bevelEnabled:!0,bevelSize:.12,bevelThickness:.12,bevelSegments:2}).translate(0,0,-.17),r)]:[J(Y(new U(.62,24,16),0,0,0,[1.25,1,1]),r),J(Y(new Bi(.42,.62,14),-1.02,0,0,1,[0,0,Math.PI/2]),i),J(Y(new Bi(.42,.62,14),1.02,0,0,1,[0,0,-Math.PI/2]),i),J(Y(new co(.62,.07,8,24),0,0,0,[1.25,1,1],[0,Math.PI/2,0]),i)]),o=new W({vertexColors:!0,roughness:.25,metalness:n===`magnet`?.5:.05,emissive:r,emissiveIntensity:.35}),s=new Xr({color:r,transparent:!0,opacity:.32,blending:2,depthWrite:!1});for(let e=0;e<2;e++){let e=new An,r=new H(a,o);r.castShadow=!0;let i=new H(t,s);i.position.z=-.4,e.add(r,i),e.rotation.y=1.15,e.scale.setScalar(1.4),e.visible=!1,this.group.add(e),this.candies.push({obj:e,x:0,y:0,alive:!1,t:0,hit:!1,near:!1,kind:n})}}}boltGeometry(){let e=new va;return e.moveTo(.08,.38),e.lineTo(-.18,-.02),e.lineTo(-.01,-.02),e.lineTo(-.1,-.38),e.lineTo(.2,.06),e.lineTo(.03,.06),e.closePath(),new no(e,{depth:.04,bevelEnabled:!1})}buildTramps(){let e=Qd([J(Y(new zi(.75,.95,2.2,16),0,1.1,0),16773852),Kd(J(Y(new U(1,28,14,0,Math.PI*2,0,Math.PI/2),0,2.1,0,[3,1.6,3]),16728392),(e,t,n)=>{Math.sin(e.x*2.1)*Math.sin(e.z*2.1)*Math.sin(e.y*2.4+.6)>.42&&n.setHex(16777215)}),J(Y(new zi(2.95,2.95,.12,28),0,2.08,0),16769730)]),t=Qd([J(Y(new co(2.6,.22,10,40),0,1.2,0,1,[Math.PI/2,0,0]),16731486),J(Y(new zi(2.5,2.5,.1,40),0,1.18,0),3108822),...[0,1,2,3,4,5].map(e=>J(Y(new zi(.1,.1,1.2,8),Math.cos(e*1.047)*2.5,.6,Math.sin(e*1.047)*2.5),9146266))]),n=Qd([J(Y(new U(1,28,18),0,.9,0,[3,1.5,2.2]),16765503),J(Y(new U(1,24,16),-2.1,2.9,0,[1.25,1.25,1.2]),16765503),J(Y(new U(1,16,10),-3.25,2.65,0,[.7,.28,.6]),16747039),J(Y(new U(.17,10,8),-2.95,3.25,.62),2236962),J(Y(new U(.17,10,8),-2.95,3.25,-.62),2236962),J(Y(new U(1,16,10),2.4,1.8,0,[.9,.6,.5],[0,0,.6]),16765503)]),r=new W({vertexColors:!0,roughness:.4}),i=[[`mushroom`,e,3,2.9],[`trampoline`,t,1.3,2.6],[`duck`,n,2.3,2.6]];for(let[e,t,n,a]of i)for(let i=0;i<4;i++){let i=new H(t,r);i.castShadow=!0,i.receiveShadow=!0,i.visible=!1,this.group.add(i),this.tramps.push({obj:i,x:0,y:0,alive:!1,t:0,hit:!1,near:!1,kind:e,top:n,half:a,squash:0})}}buildWires(){let e=new W({color:8016432,roughness:.8}),t=new W({color:2303534,roughness:.5}),n=new W({color:9425151,roughness:.2}),r=[11.5,12.3,13.1];for(let i=0;i<3;i++){let i=new An;for(let t of[-13,13]){let a=new H(new zi(.16,.22,14,8),e);a.position.set(0,7,t);let o=new H(new Ii(.2,.2,2.4),e);o.position.set(0,13.4,t),o.rotation.y=Math.PI/2,i.add(a,o);for(let e of r){let r=new H(new zi(.08,.1,.25,8),n);r.position.set(0,e+.05,t),i.add(r)}}for(let e of r){let n=[];for(let t=0;t<=16;t++){let r=-13+26*t/16;n.push(new B(0,e-1.2*(1-(r/13)**2),r))}let r=new H(new lo(new Zi(n),32,.05,5),t);i.add(r)}i.traverse(e=>{e instanceof H&&(e.castShadow=!0)}),i.visible=!1,this.group.add(i),this.wires.push({obj:i,x:0,y:0,alive:!1,t:0,hit:!1,near:!1,ground:0})}}reset(e){this.seedRng=Gd(e);for(let e of this.coins)e.alive=!1;for(let e of[this.rings,this.balloons,this.fuels,this.birds,this.tramps,this.updrafts,this.wires,this.gusts,this.candies])for(let t of e)t.alive=!1,t.obj.visible=!1;this.card.alive=!1,this.card.obj.visible=!1,this.cardSeg=-1,this.spawnedTo=40,this.groundTo=140,this.combo=0,this.coinMesh.count=0}take(e){return e.find(e=>!e.alive)??null}addCoin(e,t,n=1){let r=this.coins.find(e=>!e.alive);r&&(r.x=e,r.y=Math.max(t,Math.max(kp(e),0)+1.2),r.value=n,r.alive=!0,r.pulled=!1,r.phase=e*.13)}launchArc(e,t){let n={...e},r=[],i=.3;for(;n.time-e.time<2.8&&n.phase===`air`;)vh(n,t,{pitch:0,boost:!1},1/30,r),n.time-e.time>=i&&(this.addCoin(n.x,n.y),i+=.18);this.spawnedTo=Math.max(this.spawnedTo,n.x+20)}spawnPattern(e,t,n){let r=this.seedRng,i=Math.max(kp(e),0),a=e-t.x,o=dd(t.vy/Math.max(6,t.vx),-.6,.6),s=Math.tan(dh(n)),c=t.phase===`ramp`?t.y+a*s:t.y+a*(o*.75+s*.25);c=Math.max(i+4+r()*6,c+q(r,-6,6)),t.phase===`ground`&&(c=i+2.5);let l=Tp(e);if(this.trySpawnCard(e,c))return;let u=r();if(u<.15){for(let t=0;t<3;t++)this.addCoin(e-12+t*3.2,c);let t=this.take(this.rings);t&&this.place(t,e,c)}else if(u<.25){let t=this.take(this.balloons);t&&this.place(t,e,c+q(r,4,14))}else if(u<.36&&e>150)this.spawnFlock(e,c+q(r,-6,12),l);else if(u<.42&&n.thrust>0){let t=this.take(this.fuels);t&&this.place(t,e,c+q(r,-2,6))}else if(u<.46){this.addCoin(e,c+q(r,10,22),10);for(let t=0;t<6;t++){let n=t/6*Math.PI*2;this.addCoin(e+Math.cos(n)*3.5,c+q(r,10,22)*0+Math.sin(n)*3.5+16)}}else if(u<.53&&e>300&&t.phase!==`ground`)this.spawnGust(e,c+q(r,2,10),ih(t));else if(u<.59&&e>250&&t.phase!==`ground`){let t=r(),n=t<.45?`turbo`:t<.75?`sleep`:`magnet`,i=this.candies.find(e=>!e.alive&&e.kind===n);i&&this.place(i,e,c+q(r,-2,5))}else if(u<.94){let t=r(),n=6+Math.floor(r()*7);for(let i=0;i<n;i++){let a=i/(n-1),o=c;o=t<.3?c:t<.55?c+Math.sin(a*Math.PI)*q(r,6,12):t<.8?c+Math.sin(a*Math.PI*2)*3.5:c+8-a*16,this.addCoin(e+i*3.3,o)}}}trySpawnCard(e,t){let n=Sp(e);if(n===this.cardSeg||this.card.alive)return!1;let r=Cp(n);if(e<r.start+150||this.seedRng()>.08)return!1;this.cardSeg=n;let i=Rp(r.kind,r.lap,this.cardsOwned);if(!i)return!1;this.card.id=i.id,this.cardFace.material=this.cardMats[i.kind],this.place(this.card,e,t+q(this.seedRng,5,11));for(let n=1;n<=4;n++)this.addCoin(e-n*4,t+n*1.8);return!0}spawnGust(e,t,n){let r=this.take(this.gusts);if(!r)return;r.length=dd(Math.max(30,n)*Og,50,360),this.place(r,e,t),r.obj.scale.set(r.length,1,1);let i=Math.min(10,Math.floor(r.length/9));for(let n=0;n<i;n++)this.addCoin(e+(n+.5)*r.length/i,t);this.spawnedTo=Math.max(this.spawnedTo,e+r.length*.6)}spawnFlock(e,t,n){let r=this.seedRng,i=n===2||n===5?0:n===0||n===4?2:1,a=3+Math.floor(r()*3),o=-q(r,4,9);for(let n=0;n<a;n++){let a=this.birds.find(e=>!e.alive&&e.species===i)??this.take(this.birds);if(!a)return;this.place(a,e+n*q(r,2.2,3.4),t+q(r,-2.5,2.5)+n%2*1.5),a.vx=o,a.t=r()*10,a.minD=1/0,a.obj.rotation.set(0,0,0)}}spawnGround(e){let t=this.seedRng,n=kp(e),r=n<0,i=Tp(e),a=Math.abs(kp(e+4)-kp(e-4))/8;if(e<260)return;let o=t();if(i===3&&o<.4){let t=this.take(this.wires);t&&(t.ground=n,this.place(t,e,n))}else if(o<.72&&a<.25){let t=r?`duck`:i<=1?`mushroom`:`trampoline`,a=this.tramps.find(e=>!e.alive&&e.kind===t);if(a){this.place(a,e,r?-.6:n-.1);for(let t=0;t<5;t++)this.addCoin(e+4+t*3.2,(r?0:n)+10+Math.sin(t/4*Math.PI)*8)}}else if(i>=1){let t=this.take(this.updrafts);if(t){t.ground=r?0:n,t.strength=24,this.place(t,e,t.ground);let a=[16777215,14286800,12579839,16769730,16766362,12577279][i];this.updraftMat.uniforms.uColor.value.setHex(a);for(let n=0;n<6;n++)this.addCoin(e,t.ground+25+n*9)}}}place(e,t,n){e.x=t,e.y=n,e.alive=!0,e.hit=!1,e.near=!1,e.obj.visible=!0,e.obj.position.set(t,n,0)}update(e,t,n,r,i){this.updraftMat.uniforms.uTime.value=t,this.gustMat.uniforms.uTime.value=t,this.tailwind=0,this.comboT-=e,this.comboT<=0&&(this.combo=0);let a=0;if(n&&n.phase!==`done`){let e=ih(n),t=n.x+150+e*1.6;for(;this.spawnedTo<t;)this.spawnedTo+=q(this.seedRng,38,72),this.spawnPattern(this.spawnedTo,n,r);for(;this.groundTo<t;)this.groundTo+=q(this.seedRng,110,200),this.spawnGround(this.groundTo)}let o=n?.x??-1e9,s=n?.y??-1e9,c=!!n&&(n.phase===`air`||n.phase===`ground`),l=o-120,u=0,d=r.magnet;for(let r of this.coins){if(!r.alive)continue;if(r.x<l){r.alive=!1;continue}if(c){let t=o-r.x,a=s-r.y,c=Math.hypot(t,a),l=c<Hm+yg+.2;if(!l&&(c<d||r.pulled)){r.pulled=!0;let i=(22+ih(n)*1.1)*e;l=i>=c;let o=Math.min(1,i/Math.max(c,.001));r.x+=t*o,r.y+=a*o}if(l){r.alive=!1,this.combo++,this.comboT=.9,i.push({type:`coin`,value:r.value,x:r.x,y:r.y,combo:this.combo});continue}}let a=t*3.2+r.phase;this.e.set(0,a,0),this.q.setFromEuler(this.e);let f=r.value>1?1.8:1;this.m.compose(this.v.set(r.x,r.y+Math.sin(t*2+r.phase)*.12,0),this.q,this.s.set(f,f,f)),this.coinMesh.setMatrixAt(u++,this.m)}this.coinMesh.count=u,this.coinMesh.instanceMatrix.needsUpdate=!0;for(let n of this.rings){if(!n.alive)continue;if(n.x<l){n.alive=!1,n.obj.visible=!1;continue}n.obj.rotation.set(0,1.15,Math.sin(t*1.5+n.x)*.08);let r=1+Math.sin(t*5+n.x)*.04;n.obj.scale.setScalar(n.hit?Math.min(2.2,n.obj.scale.x+e*5):r),c&&!n.hit&&Math.abs(o-n.x)<1.2&&Math.abs(s-n.y)<3&&(n.hit=!0,i.push({type:`ring`,x:n.x,y:n.y})),n.hit&&n.obj.scale.x>=2.15&&(n.alive=!1,n.obj.visible=!1)}for(let e of this.balloons)e.alive&&(e.x<l?(e.alive=!1,e.obj.visible=!1):(e.obj.position.y=e.y+Math.sin(t*1.3+e.x)*.5,e.obj.rotation.z=Math.sin(t*.9+e.x)*.08,c&&Math.hypot(o-e.x,s-e.obj.position.y)<1.6&&(e.alive=!1,e.obj.visible=!1,i.push({type:`balloon`,x:e.x,y:e.obj.position.y,color:e.color}))));for(let e of this.fuels)e.alive&&(e.x<l?(e.alive=!1,e.obj.visible=!1):(e.obj.rotation.set(0,t*2,Math.sin(t*3)*.15),e.obj.position.y=e.y+Math.sin(t*2.4)*.3,c&&Math.hypot(o-e.x,s-e.obj.position.y)<1.5&&(e.alive=!1,e.obj.visible=!1,i.push({type:`fuel`,x:e.x,y:e.y}))));for(let t of this.birds){if(!t.alive)continue;if(t.t+=e,t.hit?(t.y-=9*e,t.obj.rotation.z+=e*8):(t.x+=t.vx*e,t.y+=Math.sin(t.t*2.2)*.6*e),t.x<l||t.y<kp(t.x)-5){t.alive=!1,t.obj.visible=!1;continue}let n=Math.sin(t.t*13)*.75;if(t.wings[0].rotation.x=n,t.wings[1].rotation.x=-n,t.obj.position.set(t.x,t.y,0),t.hit||t.obj.rotation.set(0,t.vx>0?Math.PI:0,Math.sin(t.t*2.2)*.1),c&&!t.hit){let e=Math.hypot(o-t.x,s-t.y);t.minD=Math.min(t.minD,e),e<1.35?(t.hit=!0,i.push({type:`bird`,x:t.x,y:t.y})):!t.near&&o>t.x+2.5&&t.minD<3.2&&(t.near=!0,i.push({type:`near`,x:t.x,y:t.y}))}}for(let r of this.tramps){if(!r.alive)continue;if(r.x<l){r.alive=!1,r.obj.visible=!1;continue}r.squash=Math.max(0,r.squash-e*3);let a=1-Math.sin(r.squash*Math.PI)*.3*r.squash;r.obj.scale.set(1+(1-a)*.6,a,1+(1-a)*.6),r.kind===`duck`&&(r.obj.position.y=r.y+Math.sin(t*1.8+r.x)*.15),c&&n.vy<=1&&Math.abs(o-r.x)<r.half&&s-.55<r.obj.position.y+r.top+.4&&s>r.obj.position.y+r.top-1.4&&(r.squash=1,i.push({type:`trampoline`,x:r.x,y:r.obj.position.y+r.top,kind:r.kind}))}for(let e of this.updrafts){if(!e.alive)continue;if(e.x<l){e.alive=!1,e.obj.visible=!1;continue}let t=Math.abs(o-e.x),n=s-e.ground;c&&t<7.5&&n<175&&(a+=e.strength*(1-t/7.5)*dd(1-n/175))}let f=this.card;f.alive&&(f.x<l?(f.alive=!1,f.obj.visible=!1):(f.obj.position.y=f.y+Math.sin(t*1.6)*.4,this.cardFace.rotation.set(Math.sin(t*1.2)*.15,Math.sin(t*.9)*.5,Math.sin(t*1.4)*.1),c&&Math.hypot(o-f.x,s-f.obj.position.y)<3&&(f.alive=!1,f.obj.visible=!1,i.push({type:`card`,x:f.x,y:f.obj.position.y,id:f.id}))));for(let e of this.candies)e.alive&&(e.x<l?(e.alive=!1,e.obj.visible=!1):(e.obj.position.y=e.y+Math.sin(t*2.2+e.x)*.35,e.kind===`magnet`?e.obj.children[0].rotation.set(0,t*2.5,0):e.obj.children[0].rotation.set(Math.sin(t*3+e.x)*.5,0,Math.sin(t*1.7+e.x)*.25),c&&Math.hypot(o-e.x,s-e.obj.position.y)<2.3&&(e.alive=!1,e.obj.visible=!1,i.push({type:`candy`,x:e.x,y:e.obj.position.y,kind:e.kind}))));for(let e of this.gusts){if(!e.alive)continue;if(e.x+e.length<l){e.alive=!1,e.obj.visible=!1;continue}if(!c||o<e.x||o>e.x+e.length)continue;let t=Math.abs(s-e.y)/kg;t>1||(this.tailwind+=11*(1-t*t*.5),e.hit||(e.hit=!0,i.push({type:`gust`,x:o,y:s})))}for(let e of this.wires){if(!e.alive)continue;if(e.x<l){e.alive=!1,e.obj.visible=!1;continue}if(!c||e.hit)continue;let t=e.ground+10.3-.6,n=e.ground+11.9+.6;Math.abs(o-e.x)<.75&&s>t-.55&&s<n+.55?(e.hit=!0,i.push({type:`wire`,x:e.x,y:s})):!e.near&&o>e.x+.75&&o<e.x+6&&Math.min(Math.abs(s-t),Math.abs(s-n))<3.2&&(e.near=!0,i.push({type:`near`,x:e.x,y:s}))}return a}checkClouds(e,t,n){for(let r of t)if(Math.hypot(e.x-r.x,(e.y-r.y)*1.6)<r.r){let t=Math.round(r.x);this.lastCloud!==t&&(this.lastCloud=t,n.push({type:`cloud`,x:e.x,y:e.y}))}}lastCloud=0},jg=4,Mg=15,Ng=1800,Pg=3600;function Fg(e){let t=Gd(e),n=[],r=5+Math.floor(t()*4);for(let i=0;i<r;i++){let a=q(t,.7,1.25)*(i===Math.floor(r/2)?1.35:1),o=(i-(r-1)/2)*q(t,.75,.95),s=q(t,-.05,.35)*a,c=$d(a,.08,e*13+i,12,9),l=c.getAttribute(`position`),u=-.35*a-s*.6;for(let e=0;e<l.count;e++)l.getY(e)<u&&l.setY(e,u+(l.getY(e)-u)*.2);c.computeVertexNormals(),n.push(J(Y(c,o,s,q(t,-.35,.35)),16777215))}let i=Qd(n);i.computeBoundingBox();let a=i.boundingBox.min.y,o=i.boundingBox.max.y;return Kd(i,(e,t,n)=>{let r=At.clamp((e.y-a)/(o-a),0,1);n.setScalar(.8+.2*r**.7)})}function Ig(e=7){let t=Gd(e),n=new An,r=new W({vertexColors:!0,roughness:1,color:16777215,emissive:16777215,emissiveIntensity:.35}),i=[],a=[],o=new tn,s=new jt,c=new B,l=new B,u=(e,n)=>{let r=t();e.x=n,r<.22?(e.z=q(t,-3,3),e.y=q(t,95,420),e.s=q(t,7,12)):(e.z=-q(t,140,1500),e.y=q(t,120,520)+-e.z*.08,e.s=q(t,14,34)*(1+-e.z/1500)),e.sx=q(t,1,1.6),e.yaw=q(t,-.3,.3),e.puff&&(e.puff.r=e.s*1.1),f(e)},d=new B(0,1,0);function f(e){e.puff&&(e.puff.x=e.x,e.puff.y=e.y),o.compose(c.set(e.x,e.y,e.z),s.setFromAxisAngle(d,e.yaw),l.set(e.s*e.sx,e.s*.8,e.s)),e.mesh.setMatrixAt(e.i,o),e.mesh.instanceMatrix.needsUpdate=!0}for(let a=0;a<jg;a++){let o=new yi(Fg(e*31+a),r,Mg);o.frustumCulled=!1,n.add(o);for(let e=0;e<Mg;e++){let n={mesh:o,i:e,x:0,y:0,z:0,s:1,sx:1,speed:q(t,1,3),yaw:0,puff:null};n.puff={x:0,y:0,r:0},i.push(n),u(n,q(t,-1800,Pg))}}let p=()=>{a.length=0;for(let e of i)Math.abs(e.z)<4&&e.puff&&a.push(e.puff)};return p(),{group:n,inPlane:a,update(e,n,a){r.color.copy(n.cloud),r.emissive.copy(n.cloudShade).multiplyScalar(.75);let o=!1;for(let n of i)n.x-=n.speed*a,n.x<e-Ng?(u(n,e+Pg-q(t,0,400)),o=!0):n.x>e+Pg+600?(u(n,e-Ng+q(t,0,400)),o=!0):f(n);o&&p()},setVisible(e){n.visible=e}}}function Lg(e,t,n,r){let i=document.createElement(`canvas`);i.width=512,i.height=256;let a=i.getContext(`2d`);a.fillStyle=n,a.beginPath(),a.roundRect(8,8,496,240,36),a.fill(),a.lineWidth=10,a.strokeStyle=`rgba(255,255,255,0.85)`,a.stroke(),a.textAlign=`center`,a.textBaseline=`middle`,a.fillStyle=r,a.font=`800 ${e.length>9?70:84}px Rubik, system-ui, sans-serif`,a.fillText(e,256,104),a.font=`700 54px Rubik, system-ui, sans-serif`,a.globalAlpha=.85,a.fillText(t,256,188);let o=new Mi(i);return o.colorSpace=Be,o.anisotropy=4,o}var Rg={forest:[`#3f9a4a`,`#ffffff`],lake:[`#2f8fd0`,`#ffffff`],town:[`#e07a2f`,`#ffffff`],desert:[`#d9a02c`,`#4a2a10`],sea:[`#2f5fc0`,`#ffffff`]},zg=new zi(.09,.11,2.6,8);zg.translate(0,1.3,0);var Bg=new Hd(2.3,1.05,.16,2,.08),Vg=new so(2.15,.95),Hg=new W({color:16052714,roughness:.5}),Ug=new W({color:16763196,roughness:.55});function Wg(e){let t=document.createElement(`canvas`);t.width=256,t.height=112;let n=t.getContext(`2d`);n.fillStyle=e%500==0?`#ff5a6a`:`#ffc93c`,n.fillRect(0,0,256,112),n.fillStyle=e%500==0?`#ffffff`:`#3a2a10`,n.font=`900 72px Rubik, system-ui, sans-serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(`${e}`,128,60);let r=new Mi(t);return r.colorSpace=Be,r.anisotropy=4,r}function Gg(e,t,n){for(let r=Math.max(100,Math.ceil(e/100)*100);r<t;r+=100){let e=Math.max(kp(r),0),t=new An,i=new H(zg,Hg),a=new H(Bg,Ug);a.position.y=2.75;let o=new H(Vg,new W({map:Wg(r),roughness:.6}));o.position.set(0,2.75,.09),o.userData.ownsMaterial=!0,t.add(i,a,o),t.position.set(r,e-.1,-6.5),t.rotation.y=.35,i.castShadow=!0,a.castShadow=!0,n.add(t)}}var Kg=[[`#2f8fd0`,`#ffffff`],[`#8a4fe0`,`#ffffff`],[`#2fae52`,`#ffffff`],[`#e07a2f`,`#ffffff`],[`#d9a02c`,`#3a2a10`]],qg=e=>e>=1e3?`${(Math.round(e/100)/10).toLocaleString(`ru-RU`)} км`:`${Math.round(e)} м`,Jg=class{names;group=new An;flag=new An;flagCloth;flagGeo;flagBase;recordX=-1;wood=new W({color:9067059,roughness:.8});signs=new Map;rivals=new An;constructor(e){this.names=e,this.reach(0),this.group.add(this.rivals);let t=new H(new zi(.12,.14,9,10),new W({color:16052714,roughness:.4}));t.position.y=4.5;let n=new H(new U(.28,14,10),new W({color:16763196,metalness:.8,roughness:.3}));n.position.y=9.1,this.flagGeo=new so(3.6,2.2,12,4),this.flagGeo.translate(1.8,0,0),this.flagBase=Float32Array.from(this.flagGeo.getAttribute(`position`).array),this.flagCloth=new H(this.flagGeo,new W({map:Lg(`РЕКОРД`,``,`#ff4d5e`,`#ffffff`),roughness:.7,side:2})),this.flagCloth.position.y=7.6,this.flag.add(t,n,this.flagCloth),this.flag.traverse(e=>{e instanceof H&&(e.castShadow=!0)}),this.flag.visible=!1,this.group.add(this.flag)}reach(e){let t=Sp(e+1500);for(let n=1;n<=t;n++){if(this.signs.has(n))continue;let t=Cp(n);t.start<e-1500||this.addSign(n,t)}for(let[t,n]of this.signs)n.position.x<e-2e3&&(this.group.remove(n),n.traverse(e=>{e instanceof H&&e.userData.ownsMaterial&&(e.material.map?.dispose(),e.material.dispose())}),this.signs.delete(t))}addSign(e,t){let n=Rg[t.id];if(!n)return;let r=t.start,i=Math.max(kp(r-4),0),a=new An,o=new H(Qd([J(Y(new zi(.18,.22,6,8),-2.2,3,0),9067059),J(Y(new zi(.18,.22,6,8),2.2,3,0),9067059)]),new W({vertexColors:!0,roughness:.8})),s=new H(new Hd(5.6,2.8,.25,3,.12),this.wood);s.position.y=5.2;let c=t.lap>0?`Круг ${t.lap+1} · ${qg(r)}`:qg(r),l=new H(new so(5.3,2.65),new W({map:Lg(this.names[t.id]??t.id,c,n[0],n[1]),roughness:.6}));l.userData.ownsMaterial=!0,l.position.set(0,5.2,.14),a.add(o,s,l),a.position.set(r-4,i-.3,-10),a.rotation.y=.25,a.traverse(e=>{e instanceof H&&(e.castShadow=!0)}),this.group.add(a),this.signs.set(e,a)}setRivals(e){for(let e of[...this.rivals.children])this.rivals.remove(e),e.traverse(e=>{e instanceof H&&e.userData.ownsMaterial&&(e.material.map?.dispose(),e.material.dispose())});e.forEach((e,t)=>{let[n,r]=Kg[t%Kg.length],i=new An,a=new H(new zi(.1,.12,7,8),new W({color:16052714,roughness:.4}));a.position.y=3.5;let o=new H(new so(3.4,1.7),new W({map:Lg(e.name.slice(0,14),qg(e.distance),n,r),roughness:.7,side:2}));o.userData.ownsMaterial=!0,o.position.set(1.7,6,0),i.add(a,o),i.position.set(e.distance,Math.max(kp(e.distance),0)-.2,-5.5-t%2*2),i.rotation.y=.3,this.rivals.add(i)})}setRecord(e){e<30?this.flag.visible=!1:Math.abs(e-this.recordX)<.5&&this.flag.visible||(this.recordX=e,this.flag.visible=!0,this.flag.position.set(e,Math.max(kp(e),0)-.2,-4))}update(e){if(!this.flag.visible)return;let t=this.flagGeo.getAttribute(`position`);for(let n=0;n<t.count;n++){let r=this.flagBase[n*3],i=this.flagBase[n*3+1];t.setXYZ(n,r,i-r*.04,Math.sin(e*5-r*1.6)*.18*(r/3.6))}t.needsUpdate=!0,this.flagGeo.computeVertexNormals()}},Yg=[{fogNear:560,fogFar:3800,skyTop:2781912,skyHorizon:11721983,glow:16773592,fog:13624824,sun:16773336,sunIntensity:2.4,sunDir:[.42,.66,.62],hemiSky:11062774,hemiGround:12832998,hemiIntensity:.55,exposure:1,waterDeep:2785208,waterShallow:5817558,cloud:16777215,cloudShade:12177390},{fogNear:420,fogFar:3200,skyTop:3112928,skyHorizon:11986175,glow:16773328,fog:13166834,sun:16773334,sunIntensity:2.34,sunDir:[.45,.64,.62],hemiSky:12903167,hemiGround:10273402,hemiIntensity:.62,exposure:1,waterDeep:2324382,waterShallow:5227192,cloud:16777215,cloudShade:12440556},{fogNear:420,fogFar:3200,skyTop:2786020,skyHorizon:11592447,glow:16773590,fog:12773105,sun:16773852,sunIntensity:2.34,sunDir:[.5,.62,.6],hemiSky:12641535,hemiGround:9815194,hemiIntensity:.62,exposure:1,waterDeep:2061224,waterShallow:4703945,cloud:16777215,cloudShade:12243695},{fogNear:380,fogFar:3e3,skyTop:4163294,skyHorizon:16769216,glow:16765082,fog:15850696,sun:16769720,sunIntensity:2.34,sunDir:[.55,.62,.55],hemiSky:14082293,hemiGround:14205852,hemiIntensity:.62,exposure:1,waterDeep:2781086,waterShallow:5947328,cloud:16775408,cloudShade:14272200},{fogNear:320,fogFar:2700,skyTop:3832016,skyHorizon:16766880,glow:16760944,fog:15978914,sun:16767392,sunIntensity:2.5,sunDir:[.6,.55,.55],hemiSky:14933195,hemiGround:15254666,hemiIntensity:.62,exposure:1,waterDeep:2980518,waterShallow:6474176,cloud:16774372,cloudShade:14730160},{fogNear:420,fogFar:3300,skyTop:4939716,skyHorizon:16756358,glow:16747098,fog:15774876,sun:16757370,sunIntensity:2.26,sunDir:[.78,.3,.55],hemiSky:14271718,hemiGround:10467270,hemiIntensity:.65,exposure:1.02,waterDeep:2576282,waterShallow:5087172,cloud:16770780,cloudShade:13081781}];function Xg(){return{fogNear:400,fogFar:3e3,skyTop:new V,skyHorizon:new V,glow:new V,fog:new V,sun:new V,sunIntensity:2.34,sunDir:new B,hemiSky:new V,hemiGround:new V,hemiIntensity:.62,exposure:1,waterDeep:new V,waterShallow:new V,cloud:new V,cloudShade:new V}}var Zg=new V,Qg=new V,$g=[`skyTop`,`skyHorizon`,`glow`,`fog`,`sun`,`hemiSky`,`hemiGround`,`waterDeep`,`waterShallow`,`cloud`,`cloudShade`];function e_(e,t){let{a:n,b:r,t:i}=Dp(e),a=Yg[n],o=Yg[r];for(let e of $g)t[e].copy(Zg.setHex(a[e])).lerp(Qg.setHex(o[e]),i);return t.sunIntensity=At.lerp(a.sunIntensity,o.sunIntensity,i),t.hemiIntensity=At.lerp(a.hemiIntensity,o.hemiIntensity,i),t.exposure=At.lerp(a.exposure,o.exposure,i),t.fogNear=At.lerp(a.fogNear,o.fogNear,i),t.fogFar=At.lerp(a.fogFar,o.fogFar,i),t.sunDir.set(...a.sunDir).lerp(new B(...o.sunDir),i).normalize(),t}var t_=4,n_=61,r_=[420,300,210,140,90,64,46,34,25,18,13,9,6,3,0,-3,-6,-9,-12,-15,-18,-22,-27,-33,-40,-49,-60,-72,-86,-101,-118,-136,-156,-178,-202,-228,-256,-286,-318,-352,-390,-432,-478,-528,-584,-646,-716,-796,-886,-986,-1100,-1230,-1370,-1500],i_=r_.length,a_=Lf(5150),o_=e=>new V(e),s_={snow:o_(15331321),snowShade:o_(12964842),rock:o_(10134456),rockWarm:o_(10129306),grass:o_(8178010),grassLight:o_(10935404),grassDark:o_(5942860),dirt:o_(11109464),sand:o_(15783836),sandDark:o_(14859122),mesa:o_(13928794),mesaDark:o_(12020293),road:o_(7041152),roadEdge:o_(14275523),plaza:o_(14274486),under:o_(5941146),deep:o_(3112332),foam:o_(16777215)},c_=new V,l_=new V;function u_(e,t,n,r,i,a){let o=a_(t*.035,n*.035),s=a_(t*.008+7,n*.008);switch(e){case 0:a.copy(s_.snow).lerp(s_.snowShade,dd(i*1.4+o*.15)),i>.55&&a.lerp(s_.rock,K(.55,.85,i)),r<40&&t>300&&a.lerp(s_.grass,K(40,18,r)*K(300,650,t));break;case 1:a.copy(s_.grass).lerp(s_.grassLight,dd(s*.8+.3)).lerp(s_.grassDark,dd(o*.6)),i>.45&&a.lerp(s_.dirt,K(.45,.8,i));break;case 2:case 3:if(a.copy(s_.grass).lerp(s_.grassLight,dd(s*.8+.35)).lerp(s_.grassDark,dd(o*.5)),e===3){let e=K(-21,-19.5,n)*(1-K(-13.5,-12,n)),t=K(-22.5,-21.2,n)*(1-K(-21.2,-20.4,n))+K(-12.6,-12,n)*(1-K(-12,-11.2,n));a.lerp(s_.road,e).lerp(s_.roadEdge,t*.8),Math.abs(n)<7&&a.lerp(s_.plaza,.45*K(7,4,Math.abs(n)))}i>.5&&a.lerp(s_.dirt,K(.5,.85,i));break;case 4:a.copy(s_.sand).lerp(s_.sandDark,dd(.5+.5*Math.sin(t*.21+n*.13+o*2)*.6+o*.3)),r>35&&i>.3&&a.lerp(s_.mesa,K(.3,.55,i)),r>55&&a.lerp(s_.mesaDark,K(55,80,r)*.5);break;default:a.copy(s_.sand).lerp(s_.sandDark,dd(o*.4+.2)),r>4&&a.lerp(s_.grass,K(4,9,r)).lerp(s_.grassDark,dd(o*.5))}return a}function d_(e,t,n,r,i,a){u_(e.a,t,n,r,i,a),e.t>0&&a.lerp(u_(e.b,t,n,r,i,c_),e.t),(e.a!==0||e.t>.5)&&(r<2.6&&a.lerp(s_.sand,K(2.6,1.2,r)),r<.35&&r>-.5&&a.lerp(s_.foam,.55*(1-Math.abs(r+.05)/.45)),r<-.4&&a.copy(l_.copy(s_.under).lerp(s_.deep,K(-.5,-5,r)))),r>85&&a.lerp(i>.5?s_.rockWarm:s_.rock,K(85,140,r)*.8),r>170&&a.lerp(s_.snow,K(170,230,r)*K(.75,.35,i));let o=n>-120?a_(t*.11,n*.11)*K(-120,-60,n):0;return a.multiplyScalar(.96+.08*o)}function f_(e,t,n){let r=dd((t-e.x0)/t_,0,59.999),i=Math.floor(r),a=r-i,o=0;for(;o<i_-2&&r_[o+1]>n;)o++;let s=dd((r_[o]-n)/(r_[o]-r_[o+1])),c=e.heights;return fd(fd(c[o*n_+i],c[o*n_+i+1],a),fd(c[(o+1)*n_+i],c[(o+1)*n_+i+1],a),s)}var p_=new V;function m_(e,t){let n=e*240,r=new Float32Array(63*i_),i=[];for(let e=0;e<63;e++){let t=Pp(n+(e-1)*t_);i.push(t);for(let n=0;n<i_;n++)r[n*63+e]=Fp(t,r_[n])}let a=n_*i_,o=new Float32Array(a*3),s=new Float32Array(a*3),c=new Float32Array(a*3),l=new Float32Array(a);for(let e=0;e<i_;e++){let t=r_[e],a=Math.max(0,e-1),u=Math.min(i_-1,e+1);for(let d=0;d<n_;d++){let f=d+1,p=r[e*63+f],m=(r[e*63+f+1]-r[e*63+f-1])/8,h=(r[u*63+f]-r[a*63+f])/(r_[u]-r_[a]),g=Math.hypot(m,1,h),_=e*n_+d,v=n+d*t_;o[_*3]=v,o[_*3+1]=p,o[_*3+2]=t,s[_*3]=-m/g,s[_*3+1]=1/g,s[_*3+2]=-h/g,l[_]=p;let y=1-1/g;d_(i[f],v,t,p,y*2.2,p_),c[_*3]=p_.r,c[_*3+1]=p_.g,c[_*3+2]=p_.b}}let u=[];for(let e=0;e<i_-1;e++)for(let t=0;t<60;t++){let n=e*n_+t,r=n+1,i=n+n_,a=i+1;u.push(n,r,i,r,a,i)}let d=new Rr;d.setAttribute(`position`,new Cr(o,3)),d.setAttribute(`normal`,new Cr(s,3)),d.setAttribute(`color`,new Cr(c,3)),d.setIndex(u),d.computeBoundingSphere();let f=new H(d,t);f.receiveShadow=!0;let p=new An;return p.add(f),{index:e,x0:n,group:p,heights:l}}function h_(){let e=new W({vertexColors:!0,roughness:.93,metalness:0});return e.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vWorldPos;`).replace(`#include <worldpos_vertex>`,`#include <worldpos_vertex>
vWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
        varying vec3 vWorldPos;
        float tHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float tNoise(vec2 p) {
          vec2 i = floor(p); vec2 f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(mix(tHash(i), tHash(i + vec2(1.0, 0.0)), u.x), mix(tHash(i + vec2(0.0, 1.0)), tHash(i + vec2(1.0, 1.0)), u.x), u.y);
        }`).replace(`#include <color_fragment>`,`#include <color_fragment>
        float grain = tNoise(vWorldPos.xz * 0.9) * 0.55 + tNoise(vWorldPos.xz * 3.1) * 0.45;
        diffuseColor.rgb *= 0.93 + 0.12 * grain;`)},e}var g_=(e,t,n,r=7)=>new zi(e,t,n,r);function __(e){let t=[J(Y(g_(.22,.32,2.4,6),0,1.2,0),8015660)];return[[2.3,2.8,1.6],[1.75,2.5,3.2],[1.15,2.3,4.7]].forEach(([n,r,i],a)=>{let o=new V(a%2?3115594:3840594);t.push(J(Y(ef(n,r),0,i,0),o)),e&&t.push(J(Y(ef(n*.82,r*.62),0,i+r*.42,0),16054527))}),Qd(t)}function v_(e){let t=[J(Y(g_(.25,.32,2.4,5),0,1.2,0),8015660)];for(let[n,r,i,a]of[[2.2,3.4,1.4,3115594],[1.5,3,3.6,3840594]])t.push(J(Y(new Bi(n,r,6),0,i+r/2,0),a)),e&&t.push(J(Y(new Bi(n*.75,r*.5,6),0,i+r*.78,0),16054527));return Qd(t)}function y_(e,t,n){return Qd([J(Y(g_(.25,.35,n,5),0,n/2,0),e),J(Y(new ao(2.1,1),0,n+1,0,[1,.95,1]),t)])}function b_(e){let t=new V(7127114);return Qd([J(Y(g_(.25,.38,3.2),0,1.6,0),9067059),J(Y($d(1.9,.12,e),0,4.1,0,[1,.92,1]),t),J(Y($d(1.35,.12,e+1),1.15,3.5,.4),t.clone().multiplyScalar(.86)),J(Y($d(1.3,.12,e+2),-1,3.6,-.45),t.clone().multiplyScalar(.93)),J(Y($d(1.1,.12,e+3),.1,5.2,-.2),t.clone().lerp(new V(12116074),.35))])}function x_(){let e=Kd(J(Y(g_(.18,.26,4.2),0,2.1,0),15986918),(e,t,n)=>{Math.sin(e.y*6.5)>.82&&n.setHex(3815994)}),t=new V(10474586);return Qd([e,J(Y($d(1.5,.15,21),0,4.8,0,[1,1.2,1]),t),J(Y($d(1,.15,22),.7,4.1,.3),t.clone().multiplyScalar(.88))])}function S_(e){let t=new V(5219912);return Qd([J(Y($d(.9,.15,e),0,.55,0,[1,.8,1]),t),J(Y($d(.7,.15,e+1),.7,.45,.2,[1,.8,1]),t.clone().multiplyScalar(.88)),J(Y($d(.6,.15,e+2),-.6,.4,-.25,[1,.8,1]),t.clone().lerp(new V(10146653),.3))])}function C_(e,t){let n=[J(Y($d(1,.28,t,10,8),0,.3,0,[1.3,.75,1]),e?10133684:10132114)];return e&&n.push(J(Y($d(.92,.2,t+5,10,8),0,.62,0,[1.25,.42,.95]),16185855)),Qd(n)}function w_(){return Qd([J(Y(new U(.9,16,12),0,.8,0),16251647),J(Y(new U(.65,16,12),0,2,0),16251647),J(Y(new U(.45,16,12),0,2.95,0),16251647),J(Y(new Bi(.09,.5,8),0,2.95,.6,1,[Math.PI/2,0,0]),16742938),J(Y(new U(.06,8,6),.16,3.08,.4),2236962),J(Y(new U(.06,8,6),-.16,3.08,.4),2236962),J(Y(g_(.32,.36,.45),0,3.42,0),3095130),J(Y(g_(.5,.5,.05),0,3.2,0),3095130),J(Y(new co(.5,.11,8,20),0,2.45,0,1,[Math.PI/2,0,0]),15221052)])}function T_(e){let t=5218895,n=e=>Kd(e,(e,t,n)=>{Math.cos(Math.atan2(t.z,t.x)*8)>.55&&n.multiplyScalar(1.18)});return Qd(e?[n(J(Y(new Li(.42,.9,6,14),0,.85,0),t)),J(Y(new U(.12,8,6),0,1.75,0),16736143)]:[n(J(Y(new Li(.5,3.6,8,16),0,2.2,0),t)),n(J(Y(new Li(.3,.8,6,12),-.75,1.8,0,1,[0,0,Math.PI/2]),t)),n(J(Y(new Li(.3,1,6,12),-1.15,2.5,0),t)),n(J(Y(new Li(.28,.6,6,12),.7,2.6,0,1,[0,0,Math.PI/2]),t)),n(J(Y(new Li(.28,.8,6,12),1,3.15,0),t)),J(Y(new U(.16,8,6),0,4.35,0),16767050)])}function E_(){let e=[],t=0,n=0;for(let r=0;r<7;r++){let i=.95;e.push(J(Y(g_(.2-r*.012,.26-r*.012,1,9),t,n+i/2,0,1,[0,0,-.06-r*.025]),r%2?10185533:8804655)),t+=Math.sin(.06+r*.025)*i,n+=Math.cos(.06+r*.025)*i}let r=new B(t,n,0);for(let t=0;t<8;t++){let n=t/8*Math.PI*2,i=J(new U(1,12,8),t%2?4171850:5816149);i.scale(1.6,.07,.42),i.translate(1.4,0,0),i.rotateZ(-.45),i.rotateY(n),i.translate(r.x,r.y,r.z),e.push(i)}for(let r=0;r<3;r++)e.push(J(Y(new U(.2,8,6),t+Math.cos(r*2.1)*.3,n-.25,Math.sin(r*2.1)*.3),7031338));return Qd(e)}function D_(e,t,n){let r=new va;r.moveTo(-e/2,0),r.lineTo(e/2,0),r.lineTo(0,t),r.closePath();let i=new no(r,{depth:n,bevelEnabled:!0,bevelSize:.12,bevelThickness:.12,bevelSegments:1});return i.translate(0,0,-n/2),i}var O_=[{wall:16773590,roof:14829629,trim:7030320,floors:1},{wall:13625599,roof:4157393,trim:16777215,floors:2},{wall:16767459,roof:8015800,trim:16777215,floors:1},{wall:15136201,roof:15764004,trim:7030320,floors:2}];function k_(e){let t=O_[e],n=t.floors===2?5.2:3.2,r=[J(Y(new Hd(4.4,n,4.2,2,.28),0,n/2,0),t.wall),J(Y(D_(5.2,2.2,4.8),0,n,0),t.roof),J(Y(new Hd(.8,1.7,.8,2,.1),1.2,n+1.4,-.6),12152922),J(Y(new Hd(1,1.7,.2,2,.06),0,.85,2.12),t.trim)],i=t.floors===2?[1.6,3.8]:[1.8];for(let e of i)for(let n of t.floors===2&&e>2?[-1.2,0,1.2]:[-1.35,1.35])r.push(J(Y(new Ii(.9,.9,.16),n,e,2.12),16775920)),r.push(J(Y(new Ii(.66,.66,.2),n,e,2.14),8373488));return Qd(r)}function A_(){return Qd([J(Y(new Hd(3.2,11,3.2,3,.25),0,5.5,0),16643816),J(Y(new Bi(2.4,5.5,4,1),0,13.75,0,1,[0,Math.PI/4,0]),3829712),J(Y(new zi(.85,.85,.15,24),0,8.4,1.62,1,[Math.PI/2,0,0]),16777215),J(Y(new co(.85,.08,6,24),0,8.4,1.66),2766160),J(Y(new Hd(1.2,2.2,.2,2,.05),0,1.1,1.62),7030320),J(Y(new U(.25,10,8),0,16.7,0),16766282)])}function j_(){let e=[];for(let[t,n]of[[-1.3,-1.3],[1.3,-1.3],[-1.3,1.3],[1.3,1.3]])e.push(J(Y(g_(.14,.18,8),t,4,n,1,[n*.05,0,-t*.05]),9146266));return e.push(Kd(J(Y(new Li(2.1,1.6,8,20),0,9.6,0),15223356),(e,t,n)=>{Math.abs(e.y-9.6)<.45&&n.setHex(16777215)})),e.push(J(Y(new Bi(.6,.8,12),0,12.3,0),15223356)),Qd(e)}function M_(){return Qd([Kd(J(Y(g_(1.15,1.7,12,20),0,6,0),16777215),(e,t,n)=>{Math.floor(e.y/2.4)%2==1&&n.setHex(14826299)}),J(Y(g_(1.7,1.7,.35,20),0,12.15,0),3093826),J(Y(g_(.95,.95,1.6,16),0,13.1,0),16773800),J(Y(new Bi(1.3,1.5,16),0,14.65,0),14826299),J(Y(new Hd(1.2,1.9,.2,2,.06),0,.95,1.6),3820394)])}function N_(){let e=J(new U(1,16,10,0,Math.PI*2,Math.PI/2,Math.PI/2),16777215);e.scale(3.2,1,1.15);let t=new va;t.moveTo(0,0),t.lineTo(2.6,0),t.lineTo(0,5.2),t.closePath();let n=new no(t,{depth:.06,bevelEnabled:!1}),r=new va;r.moveTo(0,0),r.lineTo(-2,0),r.lineTo(0,4.2),r.closePath();let i=new no(r,{depth:.06,bevelEnabled:!1});return Qd([Kd(e,(e,t,n)=>{e.y>-.25&&n.setHex(3108822)}),J(Y(new Ri(1,20),0,-.03,0,[3.15,1.12,1],[-Math.PI/2,0,0]),14267002),J(Y(g_(.07,.08,6.2,6),.2,3,0),7030320),J(Y(n,.35,.6,-.03),16775922),J(Y(i,.05,.6,-.03),16739146)])}function P_(e){let t=[];for(let n=0;n<7;n++){let r=q(e,1.4,2.4),i=q(e,-.5,.5),a=q(e,-.5,.5),o=[q(e,-.15,.15),0,q(e,-.15,.15)];t.push(J(Y(new Bi(.05,r,5),i,r/2,a,1,o),7317834)),n%2==0&&t.push(J(Y(new Li(.08,.35,4,6),i+o[2]*-r*.8,r*.8,a+o[0]*r*.8),8014378))}return Qd(t)}function F_(e){let t=[16736122,16765503,16777215,11893759,16748351],n=[];for(let r=0;r<9;r++){let i=q(e,-1.2,1.2),a=q(e,-1.2,1.2);n.push(J(Y(g_(.025,.03,.5,4),i,.25,a),5216828)),n.push(J(Y(new U(.13,8,6),i,.52,a,[1,.6,1]),t[r%t.length]))}return Qd(n)}function I_(){let e=Kd(J(new U(1,20,12,0,Math.PI*2,0,Math.PI/2),15218749),(e,t,n)=>{Math.sin(e.x*6.2)*Math.sin(e.z*6.2)*Math.sin(e.y*4+1)>.45&&n.setHex(16777215)});return e.scale(1,.62,1),e.translate(0,1,0),Qd([J(Y(g_(.32,.42,1.1,12),0,.55,0),16774368),e])}function L_(e){return Qd([J(Y($d(.7,.3,e,10,8),0,.45,0,[1,.7,1]),11901530),J(Y($d(.5,.3,e+1,10,8),.5,.35,.2,[1,.7,1]),10256456)])}function R_(e){let t=new W({vertexColors:!0,roughness:.85});return t.onBeforeCompile=t=>{t.uniforms.uTime=e,t.vertexShader=t.vertexShader.replace(`#include <common>`,`#include <common>
uniform float uTime;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
      #ifdef USE_INSTANCING
      float swayPhase = instanceMatrix[3].x * 0.07 + instanceMatrix[3].z * 0.05;
      #else
      float swayPhase = 0.0;
      #endif
      float sway = sin(uTime * 1.3 + swayPhase) * 0.6 + sin(uTime * 2.3 + swayPhase * 1.7) * 0.4;
      float bend = max(position.y - 1.0, 0.0);
      transformed.x += sway * 0.012 * bend * bend;
      transformed.z += sway * 0.006 * bend * bend;`)},t}function z_(){let e={value:0},t=Gd(99);return{defs:{pine:{geo:__(!1),far:v_(!1),sway:!0,shadow:!0},snowPine:{geo:__(!0),far:v_(!0),sway:!0,shadow:!0},roundTree:{geo:b_(11),far:y_(9067059,6798152,3.2),sway:!0,shadow:!0},birch:{geo:x_(),far:y_(15986918,10474586,4),sway:!0,shadow:!0},bush:{geo:S_(31),sway:!1,shadow:!0},rock:{geo:C_(!1,41),sway:!1,shadow:!0},snowRock:{geo:C_(!0,43),sway:!1,shadow:!0},snowman:{geo:w_(),sway:!1,shadow:!0},cactus:{geo:T_(!1),sway:!1,shadow:!0},cactusSmall:{geo:T_(!0),sway:!1,shadow:!0},palm:{geo:E_(),sway:!0,shadow:!0},house0:{geo:k_(0),sway:!1,shadow:!0},house1:{geo:k_(1),sway:!1,shadow:!0},house2:{geo:k_(2),sway:!1,shadow:!0},house3:{geo:k_(3),sway:!1,shadow:!0},tower:{geo:A_(),sway:!1,shadow:!0},waterTower:{geo:j_(),sway:!1,shadow:!0},lighthouse:{geo:M_(),sway:!1,shadow:!0},sailboat:{geo:N_(),sway:!1,shadow:!1},reeds:{geo:P_(t),sway:!0,shadow:!1},flowers:{geo:F_(t),sway:!1,shadow:!1},mushroom:{geo:I_(),sway:!1,shadow:!0},dryBush:{geo:L_(51),sway:!1,shadow:!1}},solid:new W({vertexColors:!0,roughness:.8}),swaying:R_(e),time:e}}function B_(e,t){let{a:n,b:r,t:i}=Dp(e);return t()<i?r:n}function V_(e,t){let n={},r=(e,t)=>{(n[e]??=[]).push(t)},i=e.x0,a=()=>i+t()*240,o=(t,n)=>f_(e,t,n),s=(e=-12,n=-420)=>e+(n-e)*t()**1.6;for(let e=0;e<120;e++){let e=a(),n=B_(e,t),i=t()<.85?s(-12,-360):q(t,16,70),c=o(e,i),l=q(t,.8,1.4),u=t()*Math.PI*2;switch(n){case 0:{if(c>230||c<-1||e>-40&&e<20&&i>-30)break;let n=t();r(n<.8?`snowPine`:`snowRock`,{x:e,z:i,scale:n<.8?l:l*1.4,rotY:u});break}case 1:{let n=t();r(n<.5?`pine`:n<.78?`roundTree`:n<.88?`birch`:n<.95?`bush`:`rock`,{x:e,z:i,scale:l,rotY:u}),t()<.15&&i>-80&&r(`flowers`,{x:e+3,z:i+2,scale:1,rotY:u});break}case 2:{if(c<-.6){t()<.04&&i<-60&&r(`sailboat`,{x:e,z:i,scale:q(t,.9,1.3),rotY:q(t,-.4,.4),y:.15});break}if(c<.7){r(`reeds`,{x:e,z:i,scale:l,rotY:u,sink:0});break}let n=t();r(n<.4?`roundTree`:n<.65?`pine`:n<.8?`birch`:`bush`,{x:e,z:i,scale:l,rotY:u});break}case 3:{if(c<0)break;let n=t();r(n<.55?`roundTree`:n<.8?`bush`:`flowers`,{x:e,z:i,scale:l,rotY:u});break}case 4:{let n=t();if(c<0)break;r(n<.35?`cactus`:n<.6?`cactusSmall`:n<.85?`dryBush`:`rock`,{x:e,z:i,scale:l,rotY:u});break}default:c>3.2?r(t()<.75?`palm`:`bush`,{x:e,z:i,scale:l,rotY:u}):c<-.6&&t()<.06&&i<-40&&r(`sailboat`,{x:e,z:i,scale:q(t,.9,1.4),rotY:q(t,-.5,.5),y:.15})}}for(let e=i+6;e<i+240;e+=q(t,9,13))if(B_(e,t)===3)for(let[n,i]of[[-30,.9],[-58,.75],[-95,.6],[-140,.5],[26,.35]]){if(t()>i)continue;let a=n+q(t,-2,2),o=t();r(o<.03?`tower`:o<.06?`waterTower`:[`house0`,`house1`,`house2`,`house3`][Math.floor(t()*4)],{x:e+q(t,-1,1),z:a,scale:q(t,.95,1.15),rotY:n>0?Math.PI+q(t,-.1,.1):q(t,-.1,.1)})}for(let e=0;e<6;e++){let e=a(),n=B_(e,t),i=t()<.5?q(t,-24,-10):q(t,9,14),s=o(e,i);n===0&&s>20&&e>-260&&r(`snowman`,{x:e,z:i,scale:q(t,.9,1.1),rotY:q(t,-.6,.6)+.3}),n===1&&i<0&&r(`mushroom`,{x:e,z:i,scale:q(t,.8,1.5),rotY:t()*Math.PI*2}),n===5&&s>6&&t()<.35&&r(`lighthouse`,{x:e,z:i-20,scale:1,rotY:0})}return n}var H_=new tn,U_=new jt,W_=new B,G_=new B,K_=new B(0,1,0),q_=new V,J_=-45,Y_=-150;function X_(e,t){let n=Gd(e.index*7919+17),r=V_(e,n);for(let[i,a]of Object.entries(r)){if(!a.length)continue;let r=t.defs[i],o=[{items:a.filter(e=>e.z>=J_),geo:r.geo,shadow:r.shadow},{items:a.filter(e=>e.z<J_&&(e.z>=Y_||!r.far)),geo:r.geo,shadow:!1},{items:r.far?a.filter(e=>e.z<Y_):[],geo:r.far??r.geo,shadow:!1}];for(let i of o){if(!i.items.length)continue;let a=new yi(i.geo,r.sway&&i.geo===r.geo?t.swaying:t.solid,i.items.length);i.items.forEach((t,r)=>{let i=t.y??f_(e,t.x,t.z)-(t.sink??.15)*t.scale;U_.setFromAxisAngle(K_,t.rotY),H_.compose(G_.set(t.x,i,t.z),U_,W_.setScalar(t.scale)),a.setMatrixAt(r,H_),a.setColorAt(r,q_.setScalar(.88+n()*.22))}),a.instanceMatrix.needsUpdate=!0,a.instanceColor&&(a.instanceColor.needsUpdate=!0),a.castShadow=i.shadow,a.receiveShadow=i.shadow,a.computeBoundingSphere(),e.group.add(a)}}}var Z_=1.7,Q_=.5,$_=1;function ev(e){let t=[],n=[],r=[],i=[],a={x:0,y:0,angle:0},o=[];for(let t=e;t<300;t+=$_)o.push({...ip(t,a)});o.push({...ip(300,a)});let s=o.length,c=[{a:[0,-1.7],b:[0,Z_],n:[1,0]},{a:[0,Z_],b:[-.5,Z_],n:[0,1]},{a:[-.5,-1.7],b:[0,-1.7],n:[0,-1]},{a:[-.5,Z_],b:[-.5,-1.7],n:[-1,0]}];for(let e of c){let a=t.length/3;for(let i=0;i<s;i++){let a=o[i],s=-Math.sin(a.angle),c=Math.cos(a.angle),l=i*$_/2.5;for(let[i,[o,u]]of[e.a,e.b].entries())t.push(a.x+s*o,a.y+c*o,u),n.push(s*e.n[0],c*e.n[0],e.n[1]),r.push(e.n[1]===0?(u+Z_)/(Z_*2):i*.2,l)}for(let e=0;e<s-1;e++){let t=a+e*2;i.push(t,t+1,t+2,t+1,t+3,t+2)}}let l=new Rr;return l.setAttribute(`position`,new Er(t,3)),l.setAttribute(`normal`,new Er(n,3)),l.setAttribute(`uv`,new Er(r,2)),l.setIndex(i),l.computeBoundingSphere(),l}function tv(e,t,n){let r={x:0,y:0,angle:0},i=[],a=[],o=[],s=[],c=[-t,-t*.7,-.38,-.3,-.22,.22,.3,.38,t*.7,t],l=new V(16317439),u=new V(13228270),d=0;for(let s=e;s<=300.01;s+=$_){ip(Math.min(s,300),r);let e=-Math.sin(r.angle),f=Math.cos(r.angle);for(let s of c){let c=Math.abs(s)>t*.9,d=Math.abs(Math.abs(s)-.3)<.02,p=c?n*.2:d?n*.4:n;i.push(r.x+e*p,r.y+f*p,s),a.push(e,f,0);let m=d?u:l;o.push(m.r,m.g,m.b)}d++}let f=c.length;for(let e=0;e<d-1;e++)for(let t=0;t<f-1;t++){let n=e*f+t;s.push(n,n+1,n+f,n+1,n+f+1,n+f)}let p=new Rr;return p.setAttribute(`position`,new Er(i,3)),p.setAttribute(`normal`,new Er(a,3)),p.setAttribute(`color`,new Er(o,3)),p.setIndex(s),p}function nv(e){let t={x:0,y:0,angle:0},n=[],r=[],i=[],a=[16731469,16763196,4172031,5951850,11758591],o=0;for(let s=e;s<=300;s+=2){ip(s,t);let e=-Math.sin(t.angle),c=Math.cos(t.angle);for(let r of[-1,1]){let i=r*1.6199999999999999;n.push(J(Y(new zi(.06,.06,.8,6),t.x+e*.4,t.y+c*.4,i,1,[0,0,t.angle]),16052714))}if(Math.round(s)%6==0){let e=kp(t.x)-.5,n=t.y-Q_-e;if(n>.25){for(let i of[-1,1])r.push(J(Y(new zi(.16,.2,n,8),t.x,e+n/2,i*1.4),8016432));if(n>2.5){let i=Math.hypot(n,Z_*2-.6),a=Math.atan2(Z_*2-.6,n);r.push(J(Y(new zi(.08,.08,i,6),t.x,e+n/2,0,1,[a,0,0]),6964518)),r.push(J(Y(new zi(.08,.08,i,6),t.x,e+n/2,0,1,[-a,0,0]),6964518))}}}if(s>240)for(let n of[-1,1]){let r=n*1.75,s=a[o++%a.length],l=new Rr;l.setAttribute(`position`,new Er([0,0,0,.9,0,0,.45,-.6,0],3)),l.setAttribute(`normal`,new Er([0,0,1,0,0,1,0,0,1],3)),i.push(J(Y(l,t.x-.45*Math.cos(t.angle)+e*.82,t.y-.45*Math.sin(t.angle)+c*.82,r,1,[0,0,t.angle]),s))}}let s=[[],[]];for(let n=e;n<=300;n+=2){ip(n,t);let e=-Math.sin(t.angle),r=Math.cos(t.angle);s[0].push(new B(t.x+e*.8,t.y+r*.8,-1.6199999999999999)),s[1].push(new B(t.x+e*.8,t.y+r*.8,1.6199999999999999))}for(let e of s){if(e.length<2)continue;let t=new Zi(e);n.push(J(new lo(t,e.length*2,.09,6),14698043))}return{rails:Qd(n),wood:r.length?Qd(r):new Rr,flags:i.length?Qd(i):new Rr}}function rv(e){let t=document.createElement(`canvas`);t.width=512,t.height=128;let n=t.getContext(`2d`),r=n.createLinearGradient(0,0,0,128);r.addColorStop(0,`#ff6a3d`),r.addColorStop(1,`#e23b3b`),n.fillStyle=r,n.fillRect(0,0,512,128),n.fillStyle=`#ffd84a`;for(let e=0;e<512;e+=64)n.beginPath(),n.arc(e+32,120,10,0,Math.PI*2),n.fill();n.font=`800 78px Rubik, system-ui, sans-serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.lineWidth=10,n.strokeStyle=`#7a1f1f`,n.strokeText(e,256,60),n.fillStyle=`#ffffff`,n.fillText(e,256,60);let i=new Mi(t);return i.colorSpace=Be,i.anisotropy=4,i}function iv(){let e=document.createElement(`canvas`);e.width=256,e.height=64;let t=e.getContext(`2d`);for(let e=0;e<8;e++)t.fillStyle=e%2?`#ffffff`:`#ff3d3d`,t.beginPath(),t.moveTo(e*32,0),t.lineTo(e*32+32,0),t.lineTo(e*32+16,64),t.lineTo(e*32-16,64),t.closePath(),t.fill();let n=new Mi(e);return n.colorSpace=Be,n}function av(e,t){let n=ap(e),r=new An,i=[],a=e=>(i.push(e),e),o=a(new W({map:t.map,normalMap:t.normal,roughnessMap:t.rough,roughness:1,color:16777215})),s=new H(a(ev(n)),o);s.castShadow=!0,s.receiveShadow=!0;let c=a(new W({vertexColors:!0,roughness:.55})),l=new H(a(tv(n,1.25,.09)),c);l.receiveShadow=!0;let{rails:u,wood:d,flags:f}=nv(n),p=a(new W({vertexColors:!0,roughness:.6})),m=new H(a(u),p);m.castShadow=!0;let h=a(new W({vertexColors:!0,roughness:.85})),g=new H(a(d),h);g.castShadow=!0,g.receiveShadow=!0;let _=a(new W({vertexColors:!0,roughness:.7,side:2})),v=new H(a(f),_);r.add(s,l,m,g,v);let y=ip(300),b=a(new W({map:a(iv()),roughness:.5})),x=new H(a(new so(Z_*2,1.2)),b);x.position.set(y.x-Math.cos(y.angle)*.6-Math.sin(y.angle)*.1,y.y-Math.sin(y.angle)*.6+Math.cos(y.angle)*.1,0),x.quaternion.setFromEuler(new fn(-Math.PI/2,Math.PI/2,y.angle,`ZYX`)),r.add(x);let S=ip(n),C=a(new W({vertexColors:!0,roughness:.6})),w=a(Qd([J(Y(new zi(.14,.16,4.4,10),S.x+1.5,S.y+2.2,1.95),16052714),J(Y(new zi(.14,.16,4.4,10),S.x+1.5,S.y+2.2,-1.95),16052714),J(Y(new U(.24,12,8),S.x+1.5,S.y+4.5,1.95),16763196),J(Y(new U(.24,12,8),S.x+1.5,S.y+4.5,-1.95),16763196),J(Y(new Hd(9,.5,9,2,.12),S.x-4.3,S.y-.25,-1.6),11039551),J(Y(new Hd(3.2,2.6,3,3,.2),S.x-6.2,S.y+.9,-5.2),12089931),J(Y(new Bi(2.6,1.6,4),S.x-6.2,S.y+3,-5.2,1,[0,Math.PI/4,0]),14698043),J(Y(new Hd(.9,1.6,.15,2,.05),S.x-6.2,S.y+.4,-3.66),7030320),J(Y(new Hd(.8,.7,.15,2,.05),S.x-5.3,S.y+1.4,-3.66),10475775)]));r.add(new H(w,C));let T=a(new W({map:a(rv(`СТАРТ`)),roughness:.6})),E=a(new so(3.9,.95));for(let e of[-1,1]){let t=new H(E,T);t.position.set(S.x+1.5+e*.02,S.y+3.85,0),t.rotation.y=e*Math.PI/2,r.add(t)}return r.traverse(e=>{e instanceof H&&e!==l&&(e.castShadow=!0)}),{group:r,start:new B(S.x,S.y,0),platform:new B(S.x-1.9,S.y,.6),dispose(){for(let e of i)e.dispose()}}}var ov=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}
`,sv=`
uniform vec3 uTop;
uniform vec3 uHorizon;
uniform vec3 uGlow;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform float uSpace;
uniform float uTime;
varying vec3 vDir;

float hash(vec3 p) { return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }

void main() {
  vec3 d = normalize(vDir);
  float up = max(d.y, 0.0);
  vec3 col = mix(uHorizon, uTop, pow(up, 0.5));
  vec3 sd = normalize(uSunDir);
  vec2 flatD = normalize(d.xz + 1e-5);
  vec2 flatS = normalize(sd.xz + 1e-5);
  float az = max(dot(flatD, flatS), 0.0);
  col = mix(col, uGlow, pow(az, 2.5) * pow(1.0 - up, 5.0) * 0.6);
  if (d.y < 0.0) col = mix(col, uHorizon * 0.9, min(-d.y * 3.0, 1.0));
  float s = max(dot(d, sd), 0.0);
  col += uSunColor * (pow(s, 6.0) * 0.18 + pow(s, 90.0) * 0.7);
  col += uSunColor * smoothstep(0.9992, 0.9996, s) * 8.0;

  vec3 spaceCol = mix(vec3(0.05, 0.11, 0.32), vec3(0.004, 0.006, 0.03), pow(up, 0.45));
  float spaceMix = uSpace * smoothstep(-0.35, 0.25, d.y);
  col = mix(col, spaceCol, spaceMix);
  if (uSpace > 0.01) {
    vec3 cell = floor(d * 220.0);
    float r = hash(cell);
    float twinkle = 0.6 + 0.4 * sin(uTime * 2.1 + r * 50.0);
    col += step(0.9965, r) * twinkle * spaceMix * smoothstep(-0.05, 0.25, d.y) * vec3(1.2, 1.2, 1.4);
  }
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;function cv(){let e=new yo({uniforms:{uTop:{value:new V},uHorizon:{value:new V},uGlow:{value:new V},uSunDir:{value:new B(0,1,0)},uSunColor:{value:new V},uSpace:{value:0},uTime:{value:0}},vertexShader:ov,fragmentShader:sv,side:1,depthWrite:!1,fog:!1}),t=new H(new U(4e3,48,24),e);return t.renderOrder=-1,t.frustumCulled=!1,t}function lv(e,t,n,r){let i=e.material.uniforms;i.uTop.value.copy(t.skyTop),i.uHorizon.value.copy(t.skyHorizon),i.uGlow.value.copy(t.glow),i.uSunDir.value.copy(t.sunDir),i.uSunColor.value.copy(t.sun),i.uSpace.value=n,i.uTime.value=r}var uv=`
varying vec3 vWorld;
#include <fog_pars_vertex>
void main() {
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorld = world.xyz;
  vec4 mvPosition = viewMatrix * world;
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}
`,dv=`
uniform float uTime;
uniform vec3 uDeep;
uniform vec3 uShallow;
uniform vec3 uSkyTop;
uniform vec3 uSkyHorizon;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec4 uRipples[8];
varying vec3 vWorld;
#include <fog_pars_fragment>

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}
float waves(vec2 p) {
  float h = sin(p.x * 0.21 + uTime * 1.1) * 0.35 + sin(p.y * 0.17 - uTime * 0.9 + p.x * 0.05) * 0.35;
  h += (vnoise(p * 0.35 + uTime * vec2(0.18, 0.12)) - 0.5) * 1.0;
  h += (vnoise(p * 1.3 - uTime * vec2(0.15, 0.27)) - 0.5) * 0.45;
  h += (vnoise(p * 3.7 + uTime * vec2(0.37, -0.21)) - 0.5) * 0.2;
  return h;
}

void main() {
  vec2 p = vWorld.xz;
  float dist = length(cameraPosition - vWorld);
  float e = 0.15;
  float h0 = waves(p);
  float k = 0.08 * (1.0 - smoothstep(40.0, 500.0, dist) * 0.9);
  vec3 n = normalize(vec3(-(waves(p + vec2(e, 0.0)) - h0) / e * k, 1.0, -(waves(p + vec2(0.0, e)) - h0) / e * k));

  float ripLight = 0.0;
  for (int i = 0; i < 8; i++) {
    vec4 r = uRipples[i];
    float age = uTime - r.z;
    if (r.w <= 0.0 || age < 0.0 || age > 3.0) continue;
    vec2 delta = p - r.xy;
    float d = length(delta);
    float radius = 0.4 + age * (3.0 + r.w * 2.0);
    float ring = exp(-pow((d - radius) * 1.6, 2.0)) + 0.6 * exp(-pow((d - radius * 0.6) * 2.0, 2.0));
    float fade = (1.0 - age / 3.0) * r.w;
    n.xz += (delta / max(d, 0.001)) * cos((d - radius) * 4.0) * ring * fade * 0.6;
    ripLight += ring * fade;
  }
  n = normalize(n);

  vec3 V = normalize(cameraPosition - vWorld);
  float fres = 0.04 + 0.96 * pow(1.0 - max(dot(n, V), 0.0), 5.0);
  vec3 R = reflect(-V, n);
  vec3 sky = mix(uSkyHorizon, uSkyTop, pow(max(R.y, 0.0), 0.5));
  vec3 base = mix(uShallow, uDeep, smoothstep(20.0, 500.0, dist) * 0.7 + 0.3);
  vec3 col = mix(base, sky, fres * 0.85);
  vec3 L = normalize(uSunDir);
  float sd = max(dot(R, L), 0.0);
  col += uSunColor * (pow(sd, 220.0) * 2.0 + pow(sd, 18.0) * 0.1);
  float glint = smoothstep(0.8, 0.95, vnoise(p * 0.9 + uTime * 0.5)) * pow(sd, 40.0) * (1.0 - smoothstep(150.0, 700.0, dist));
  col += uSunColor * glint * 1.5;
  col += vec3(1.0) * ripLight * 0.25;

  gl_FragColor = vec4(col, mix(0.8, 0.95, fres));
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
}
`;function fv(){let e=Array.from({length:8},()=>new Xt(0,0,-100,0)),t={...go.clone(G.fog),uTime:{value:0},uDeep:{value:new V},uShallow:{value:new V},uSkyTop:{value:new V},uSkyHorizon:{value:new V},uSunDir:{value:new B(0,1,0)},uSunColor:{value:new V},uRipples:{value:e}},n=new yo({uniforms:t,vertexShader:uv,fragmentShader:dv,transparent:!0,depthWrite:!1,fog:!0}),r=new H(new so(7e3,3200,1,1),n);r.rotation.x=-Math.PI/2,r.renderOrder=1,r.frustumCulled=!1;let i=0,a=0;return{mesh:r,ripple(t,n,r){e[i].set(t,n,a,r),i=(i+1)%8},update(e,n,i){a=e,t.uTime.value=e,r.position.set(n+1500,0,-1200),t.uDeep.value.copy(i.waterDeep),t.uShallow.value.copy(i.waterShallow),t.uSkyTop.value.copy(i.skyTop),t.uSkyHorizon.value.copy(i.skyHorizon),t.uSunDir.value.copy(i.sunDir),t.uSunColor.value.copy(i.sun)}}}var pv=new V(2112122),mv=class{rampTextures;palette=Xg();sky;sun;hemi;water;clouds;markers;fog;space=0;root=new An;chunks=new Map;terrainMat;props;ramp=null;rampHeight=-1;ahead=1900;behind=1300;fogFar=2800;constructor(e,t,n){this.rampTextures=t,this.sky=cv(),this.terrainMat=h_(),this.props=z_(),this.water=fv(),this.clouds=Ig(),this.markers=new Jg(n),this.hemi=new ts(16777215,16777215,1),this.sun=new gs(16777215,3),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048);let r=this.sun.shadow.camera;r.left=-34,r.right=34,r.top=34,r.bottom=-34,r.near=1,r.far=400,this.sun.shadow.bias=-5e-4,this.sun.shadow.normalBias=.04,this.sun.shadow.radius=3,this.root.add(this.sky,this.water.mesh,this.clouds.group,this.markers.group,this.hemi,this.sun,this.sun.target),e.add(this.root),this.fog=new Rn(16777215,260,this.fogFar),e.fog=this.fog}setRamp(e){e!==this.rampHeight&&(this.rampHeight=e,this.ramp&&(this.root.remove(this.ramp.group),this.ramp.dispose()),this.ramp=av(e,this.rampTextures),this.root.add(this.ramp.group))}get rampStart(){return this.ramp?.start??new B}get platform(){return this.ramp?.platform??new B}prewarm(e){this.ensureChunks(e,1/0)}ensureChunks(e,t){let n=Math.floor((e-this.behind)/240),r=Math.floor((e+this.ahead)/240),i=[];for(let e=n;e<=r;e++)this.chunks.has(e)||i.push(e);i.sort((t,n)=>Math.abs(t*240+120-e-200)-Math.abs(n*240+120-e-200));for(let e of i.slice(0,t)){let t=m_(e,this.terrainMat);X_(t,this.props),Gg(t.x0,t.x0+240,t.group),this.chunks.set(e,t),this.root.add(t.group)}for(let[e,t]of this.chunks)(e<n-1||e>r+1)&&(this.root.remove(t.group),t.group.traverse(e=>{if(e instanceof yi)e.dispose();else if(e instanceof H&&e.userData.ownsMaterial){let t=e.material;t.map?.dispose(),t.dispose()}else e instanceof H&&e.geometry.userData.shared!==!0&&e.parent===t.group&&e.geometry.dispose()}),this.chunks.delete(e))}setPropsVisible(e){for(let t of this.chunks.values())t.group.children.forEach((t,n)=>t.visible=n===0||e)}setDrawDistance(e){this.fogFar=e,this.ahead=Math.min(1900,e*.75),this.behind=Math.min(1300,e*.5)}setShadows(e,t=2048){this.sun.castShadow=e,e&&this.sun.shadow.mapSize.x!==t&&(this.sun.shadow.mapSize.set(t,t),this.sun.shadow.map?.dispose(),this.sun.shadow.map=null)}update(e,t,n,r){let i=r.position.x;this.ensureChunks(i+150,1);let a=e_(n.x,this.palette);this.space=K(380,950,r.position.y),lv(this.sky,a,this.space,t),this.sky.position.copy(r.position),this.water.update(t,i,a),this.clouds.update(i,a,e),this.markers.reach(n.x),this.markers.update(t),this.props.time.value=t,this.hemi.color.copy(a.hemiSky),this.hemi.groundColor.copy(a.hemiGround),this.hemi.intensity=a.hemiIntensity*(1-this.space*.35),this.sun.color.copy(a.sun),this.sun.intensity=a.sunIntensity,this.sun.position.copy(n).addScaledVector(a.sunDir,150),this.sun.target.position.copy(n),this.fog.color.copy(a.fog).lerp(pv,this.space*.8);let o=Math.max(0,r.position.y-Math.max(0,n.y-40)),s=this.fogFar/2800;this.fog.near=a.fogNear*s+o*1.5+this.space*300,this.fog.far=a.fogFar*s+o*5+this.space*2500}},hv={snow:16777215,grass:9425258,sand:15913882,road:14275523,water:14218495},gv=new B,_v=(e,t)=>Fp(Pp(e),t),vv=e=>{try{navigator.vibrate?.(e)}catch{}},yv=class{platform;store;renderer;scene=new zn;camera=new ps(50,1,.3,9e3);post;world;hero=new Sf;items=new Ag;soft=new yd(900,!1,`soft`);glow=new yd(700,!0,`soft`);sparks=new yd(400,!0,`star`);bits=new yd(500,!1,`chunk`);streaks=new zd;sfx=new ud;meta;overlay;hud;title;hangar;coarse=window.matchMedia(`(pointer: coarse)`).matches;phase=`title`;run=null;stats;rentNext=!1;rentedRun=!1;runCoins=0;runRings=0;nearMisses=0;readyT=0;landedT=0;biome=0;passedRecord=!1;spaceShown=!1;sled=null;events=[];itemEvents=[];time=0;last=performance.now();timeScale=1;slowmo=0;shake=0;flashT=0;fovKick=0;pauses=new Set;keys=new Set;touchPitch=0;touchId=null;boostTouch=!1;steerArrow=0;sleepT=0;turboT=0;magnetT=0;zzzT=0;autopilotOn=!1;wasBoosting=!1;achQueue=[];lastSqueak=-10;devSpeed=1;career=null;steerHintT=0;starting=!1;bank=0;camDir=0;yaw=0;camPos=new B;camLook=new B;camInit=!1;orbit=0;lastAdAt=Date.now();catalog=[];rivals=fg(null);chase=null;shortcutReady=!1;forceShortcut=!1;lastSeenTimer=0;quality=3;gpuTimer=null;gpuQueryBusy=!1;gpuMs=0;eventLog={};cpuMs=0;maxQuality=3;autoQuality=!0;slowWindows=0;fastWindows=0;recoveries=0;directRender=!1;fpsTime=0;fpsFrames=0;fpsValue=60;warmup=3;tmp=new B;tmp2=new B;color=new V;constructor(e,t,n,r,i){this.platform=n,this.store=r,this.renderer=new ed({canvas:e,antialias:!1,powerPreference:`high-performance`,stencil:!1}),this.quality=this.coarse?2:3,this.maxQuality=this.quality,this.renderer.setPixelRatio(this.pixelRatioFor(this.quality)),this.renderer.toneMapping=4,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=2,this.renderer.info.autoReset=!1,this.post=new Fd(this.renderer,this.scene,this.camera,this.msaaSamples()),this.meta=new Bm(r,n),this.stats=this.meta.stats(!1);let a=Object.fromEntries(zf.map(e=>[e.id,jf(`biome.${e.id}`)]));this.world=new mv(this.scene,i,a),this.scene.add(this.hero.root,this.items.group,this.soft.points,this.glow.points,this.sparks.points,this.bits.points,this.streaks.mesh,this.camera),this.overlay=new Mh(t),this.hud=new Rh(t,{boost:e=>{this.sfx.unlock(),this.boostTouch=e},steer:e=>{this.sfx.unlock(),this.steerArrow=e},pause:()=>this.pause()}),this.title=new Vh(t,{play:()=>this.onPlay(),records:()=>void this.openRecords(),settings:()=>this.openSettings()}),this.hangar=new Hh(t,{buy:e=>this.buy(e),fly:()=>void this.startRun(),rent:()=>void this.rentRocket(),records:()=>void this.openRecords(),settings:()=>this.openSettings(),season:()=>this.openSeason(),achievements:()=>this.openAchievements(),shop:()=>this.openShop()}),t.append(t.querySelector(`.fade`)),this.bindInput(e),window.addEventListener(`resize`,()=>this.resize()),document.addEventListener(`visibilitychange`,()=>{this.setPause(`hidden`,document.hidden),document.hidden&&this.meta.touch()}),window.addEventListener(`blur`,()=>this.sfx.setMuted(!0)),window.addEventListener(`focus`,()=>this.sfx.setMuted(!1)),n.onPause(e=>this.setPause(`platform`,e)),n.onAccountChanged(()=>window.location.reload())}showAdStub(){return this.overlay.adStub()}async loadEnvironment(e){try{let t=await new td().loadAsync(e);t.mapping=303;let n=new sc(this.renderer),r=n.fromEquirectangular(t).texture;t.dispose(),n.dispose(),this.scene.environment=r,this.scene.environmentIntensity=.45}catch{}}async start(){let e=this.store.progress;for(this.platform.canAddShortcut().then(e=>this.shortcutReady=e),this.sfx.setSound(e.sound),this.sfx.setMusic(e.music),this.meta.ensureDaily(),this.applyLook(!1),this.applySkin(),this.world.setRamp(this.stats.rampHeight),this.world.markers.setRecord(e.seasonBest),this.world.markers.setRivals(pg(this.rivals,e.seasonBest)),this.placeHeroOnPlatform(),this.world.prewarm(this.hero.root.position.x),this.resize(),this.toTitle(),this.renderer.compile(this.scene,this.camera),this.renderFrame(),Fh(),this.platform.gameReady(),this.renderer.setAnimationLoop(()=>this.frame());this.pauses.size>0;)await new Promise(e=>window.setTimeout(e,200));await new Promise(e=>window.setTimeout(e,600)),this.platform.catalog().then(e=>{this.catalog=e.filter(e=>sg(e.id)),this.refreshHangar()}),this.settlePending(),this.loadRivals(),Dm(e),this.meta.submitScores();let t=this.meta.offlineAmount();t>=5?Xh(this.overlay,t,{take:async e=>{let n=t;e&&await this.rewarded()&&(n*=2),this.meta.grant(n),this.sfx.buy(),this.overlay.confetti(50),this.refreshHangar(),this.offerStreak()}}):this.offerStreak(),this.meta.touch()}offerStreak(){let e=this.meta.streakDay();e.n&&this.store.progress.runs!==0&&!this.overlay.hasModal()&&$h(this.overlay,{today:e.n,note:e.note,coins:e=>this.meta.streakReward(e)},()=>{let e=this.meta.claimStreak();return e?(this.sfx.goal(),this.overlay.confetti(60),this.overlay.toast(`+${Z(e)}`,`good`),this.refreshHangar(),this.meta.tomorrowLine()):null})}dailyCheck(e=!0){this.meta.ensureDaily(),this.refreshHangar(),e&&this.offerStreak()}answerShortcut(e){return(e?this.platform.addShortcut():Promise.resolve(!1)).then(t=>{let n=this.meta.shortcutAnswer(t);return n?(this.sfx.goal(),this.overlay.confetti(60),this.overlay.toast(`+${Z(n)}`,`good`)):e&&this.platform.canAddShortcut().then(e=>this.shortcutReady=e),n})}async loadRivals(){let e=this.store.progress;this.rivals=fg(await this.platform.leaderboard(`distance`,e.best)),this.world.markers.setRivals(pg(this.rivals,e.seasonBest))}openSeason(){this.sfx.unlock(),this.sfx.click();let e=this.store.progress,t=this.meta.seasonGain();t<=0||Qh(this.overlay,{gain:t,stars:e.stars,season:e.season,mulNow:rm(e.stars),mulAfter:rm(e.stars+t)},()=>{this.meta.startSeason(),this.rentNext=!1,this.applyLook(!1),this.world.setRamp(this.stats.rampHeight),this.placeHeroOnPlatform(),this.world.markers.setRecord(0),this.world.markers.setRivals(pg(this.rivals,0)),this.sfx.record(),this.overlay.confetti(120),this.overlay.flash(X(`season.started`,{n:e.season,stars:Z(e.stars)}),`gold`),this.hero.setHappy(2),this.refreshHangar()})}openAchievements(){this.sfx.unlock(),this.sfx.click();let e=this.store.progress;e.achSeen=e.achievements.length,this.store.save(),this.refreshHangar();let t=e=>`#${e.toString(16).padStart(6,`0`)}`,n=Em.map(t=>({id:t.id,done:e.achievements.includes(t.id),progress:t.value(e),goal:t.goal,reward:t.reward.skin?X(`ach.reward.skin`,{name:jf(`skin.${t.reward.skin}`)}):X(`ach.reward.coins`,{n:Z(t.reward.coins??0)}),isDistance:t.id.startsWith(`km`)||t.id===`space`||t.id===`orbit`})),r=hg.map(n=>{let r=Em.find(e=>e.reward.skin===n.id);return{id:n.id,owned:e.skinsOwned.includes(n.id),on:e.skin===n.id,colors:[t(n.top),t(n.side)],how:r?jf(`ach.${r.id}`):X(`skin.shop`)}}),i=Ip.map(t=>({id:t.id,owned:e.cards.includes(t.id),colors:Lp[t.kind],where:X(`cards.where`,{place:jf(`biome.${zf[t.kind].id}`),n:t.lap+1})}));eg(this.overlay,n,r,i,t=>{e.skin=t,this.store.save(),this.applySkin(),this.hero.kick(.3),this.hero.setHappy(1.2),this.sfx.buy()})}applySkin(){let e=_g(this.store.progress.skin);this.hero.setSkin(e.id,e)}openShop(){this.sfx.unlock(),this.sfx.click(),tg(this.overlay,this.store.progress.coins,()=>this.productViews(),(e,t)=>{sg(e)&&this.buyProduct(e,t)})}productViews(){let e=this.store.progress;return this.catalog.map(t=>{let n=t.id,r=n===`no_ads`?X(`product.no_ads`):n===`rocket_forever`?X(`product.rocket_forever`):n===`starter_pack`?X(`product.starter_pack`,{coins:Z(lg(e))}):X(`product.coins`,{n:Z(cg(e,n))}),i=n===`no_ads`&&e.noAds||n===`rocket_forever`&&e.rocketForever||n===`starter_pack`&&e.starterBought,a=n===`no_ads`?`ad`:n===`rocket_forever`?`rocket`:n===`starter_pack`?`gift`:`coin`;return{id:n,title:t.title,gives:r,price:t.priceValue||t.price,currencyIcon:t.currencyIcon,owned:i,icon:a}})}async settle(e,t){if(!sg(e))return;let n=this.store.progress;if(ag.has(e))ug(n,e),this.store.save(!0);else{n.grantedTokens.includes(t)||(ug(n,e),n.grantedTokens=[...n.grantedTokens,t].slice(-50),this.store.save(!0));try{await this.platform.consume(t)}catch{}}}async settlePending(){for(let e of await this.platform.purchases())await this.settle(e.id,e.token);this.applyLook(this.rentNext),this.applySkin(),this.refreshHangar()}async buyProduct(e,t){this.setPause(`purchase`,!0);let n=await this.platform.purchase(e);this.setPause(`purchase`,!1),n?(await this.settle(n.id,n.token),this.applyLook(this.rentNext),this.applySkin(),this.sfx.buy(),this.overlay.confetti(70),this.overlay.toast(X(`toast.purchased`),`good`),this.refreshHangar(),t()):this.overlay.toast(X(`toast.purchaseFailed`))}toTitle(){this.phase=`title`,this.hero.setPose(`stand`),this.hud.hide(),this.hangar.hide(),this.title.show(this.store.progress.best),this.sfx.setMusicMode(`menu`),this.camInit=!1}onPlay(){this.sfx.unlock(),this.sfx.click(),this.title.hide(),this.store.progress.runs===0?this.startRun(!0):this.toHangar()}toHangar(){this.phase=`hangar`,this.hud.hide(),this.title.hide(),this.applyLook(this.rentNext),this.world.setRamp(this.stats.rampHeight),this.placeHeroOnPlatform(),this.hero.setPose(`stand`),this.hero.waveHello(),this.hangar.show(this.meta.hangarView(this.rentNext,this.canRent(),this.catalog.length>0)),this.sfx.setMusicMode(`menu`),this.camInit=!1,this.platform.gameplayStop()}refreshHangar(e){this.hangar.visible&&this.hangar.render(this.meta.hangarView(this.rentNext,this.canRent(),this.catalog.length>0),e)}canRent(){let e=this.store.progress;return!this.rentNext&&!e.rocketForever&&e.levels.rocket<5}applyLook(e){let t=this.store.progress,n=t.levels;this.stats=this.meta.stats(e),this.hero.setLook({wings:n.wings,rocket:e||t.rocketForever?Math.max(n.rocket,5):n.rocket,sled:n.sled})}placeHeroOnPlatform(){let e=this.world.platform;this.hero.root.position.set(e.x,e.y+.84,e.z),this.hero.root.rotation.set(0,0,0)}buy(e){this.sfx.unlock();let t=this.store.progress.levels[e],{ok:n,goals:r}=this.meta.buy(e);if(!n){this.sfx.early(),this.hangar.shake(e),this.overlay.toast(X(`toast.noCoins`));return}this.sfx.buy(),vv(20),this.applyLook(this.rentNext),e===`ramp`&&(this.world.setRamp(this.stats.rampHeight),this.placeHeroOnPlatform()),this.hero.kick(.35),this.hero.setHappy(1.2),this.burst(this.hero.root.position,26,16765503,6),this.refreshHangar(e);let i=this.hangar.cardRect(e);i&&this.overlay.floater(`${jf(`up.${e}`)} ${t+1}!`,i.left+i.width/2,i.top+10,`white`);for(let e of r)this.sfx.goal(),this.overlay.toast(`${X(`goal.done`)} +${Z(e.reward)}`,`good`)}async rentRocket(){await this.rewarded()&&(this.rentNext=!0,this.applyLook(!0),this.hero.kick(.3),this.burst(this.hero.root.position,30,16747098,6),this.sfx.fuel(),this.overlay.toast(X(`toast.rented`),`good`),this.refreshHangar())}async openRecords(){this.sfx.unlock(),this.sfx.click(),Zh(this.overlay,e=>this.platform.leaderboard(e,this.meta.boardScore(e)),this.platform.kind===`local`)}openSettings(){this.sfx.unlock(),this.sfx.click();let e=this.store.progress,t=this.platform.fullscreen;ng(this.overlay,{sound:e.sound,music:e.music,fullscreen:t.supported?t.active():null},{sound:t=>{e.sound=t,this.sfx.setSound(t),this.store.save()},music:t=>{e.music=t,this.sfx.setMusic(t),this.store.save()},fullscreen:()=>t.toggle().then(()=>t.active()),reset:()=>{this.store.reset(),window.location.reload()}})}pause(){if(this.phase!==`ramp`&&this.phase!==`flight`&&this.phase!==`ready`||this.overlay.hasModal())return;this.setPause(`menu`,!0);let e=this.platform.fullscreen;rg(this.overlay,{fullscreen:e.supported?{active:e.active(),toggle:()=>e.toggle().then(()=>e.active())}:null,resume:()=>this.setPause(`menu`,!1),quit:()=>{this.setPause(`menu`,!1),this.run&&this.phase===`flight`?(this.run.phase=`done`,this.toLanded()):this.toHangar()}})}async rewarded(){this.setPause(`ad`,!0),this.sfx.setPaused(!0);let e=await this.platform.showRewarded();return this.setPause(`ad`,!1),this.sfx.setPaused(this.pauses.size>0),e||this.overlay.toast(X(`toast.adFail`)),e}setPause(e,t){t?this.pauses.add(e):this.pauses.delete(e),this.sfx.setPaused(this.pauses.size>0),this.last=performance.now(),t&&(this.keys.clear(),this.boostTouch=!1,this.steerArrow=0,this.touchPitch=0)}async startRun(e=!1){this.starting||this.phase!==`hangar`&&!(e&&this.phase===`title`)||(this.starting=!0,this.sfx.unlock(),this.sfx.click(),await this.overlay.setFade(!0),this.hangar.hide(),this.title.hide(),this.rentedRun=this.rentNext,this.rentNext=!1,this.applyLook(this.rentedRun),this.world.setRamp(this.stats.rampHeight),this.meta.beginRun(),this.run=oh(this.stats),this.items.reset((Date.now()&65535)+this.store.progress.runs*7919),this.items.cardsOwned=this.store.progress.cards,this.runCoins=0,this.runRings=0,this.nearMisses=0,this.passedRecord=!1,this.spaceShown=!1,this.chase=mg(this.rivals,0),this.biome=0,this.slowmo=0,this.timeScale=1,this.sleepT=this.turboT=this.magnetT=0,this.removeSled(),this.hero.setPose(`ride`),this.syncHero(0),this.world.prewarm(this.run.x),this.hud.show({rocket:this.stats.thrust>0,touch:this.coarse,best:this.store.progress.seasonBest}),this.steerHintT=this.store.progress.runs<3?7:0,this.hud.hint(this.coarse?X(`hint.jumpTouch`):X(`hint.jump`)),this.readyT=.9,this.phase=`ready`,this.starting=!1,this.camInit=!1,this.soft.clear(),this.glow.clear(),this.sparks.clear(),this.bits.clear(),this.sfx.setMusicMode(`flight`),this.platform.gameplayStart(),await this.overlay.setFade(!1))}go(){this.phase===`ready`&&(this.phase=`ramp`,this.overlay.flash(X(`flash.go`),`green`),this.hero.kick(-.2),this.sfx.whoosh(.8))}jumpTap(){this.run&&this.phase===`ramp`&&lh(this.run)===`early`&&(this.overlay.flash(X(`flash.early`),`red`,!0),this.sfx.early())}input(){let e=this.run;if(this.sleepT>0&&e.phase===`air`)return{pitch:-.3,boost:!1};if(this.autopilotOn)return Dh(e,this.stats);let t=this.keys.has(`ArrowUp`)||this.keys.has(`KeyW`),n=this.keys.has(`ArrowDown`)||this.keys.has(`KeyS`),r=!!t-+!!n;r===0&&(r=this.steerArrow||this.touchPitch);let i=this.keys.has(`Space`)||this.keys.has(`ShiftLeft`)||this.boostTouch;return{pitch:r,boost:i&&this.phase===`flight`}}updateRun(e){let t=this.run,n=this.input();this.hud.setSteer(n.pitch),this.events.length=0,vh(t,this.stats,n,e,this.events);for(let e of this.events)this.onFlightEvent(e);this.itemEvents.length=0;let r=this.magnetT>0?{...this.stats,magnet:this.stats.magnet*3+14}:this.stats,i=this.items.update(e,this.time,t,r,this.itemEvents);i>0&&Ch(t,i,e),this.items.tailwind>0&&wh(t,this.items.tailwind,e),this.candyEffects(e,t),t.boosting&&!this.wasBoosting&&this.time-this.lastSqueak>6&&this.squeak(`go`),this.wasBoosting=t.boosting,t.phase===`air`&&this.items.checkClouds(t,this.world.clouds.inPlane,this.itemEvents);for(let e of this.itemEvents)this.onItemEvent(e);if(this.syncHero(e),this.trailEffects(e,t),this.progressEffects(t),this.phase===`ramp`){let e=ch(t);e<1.5?(this.projectToScreen(this.hero.root.position,this.tmp),this.hud.jumpCue(this.tmp.x,this.tmp.y,e/1.5,e<=.24)):this.hud.cueOff(),this.autopilotOn&&e<.1&&lh(t)}if(this.phase===`flight`&&this.steerHintT>0){this.steerHintT-=e;let t=this.stats.thrust>0,n=this.steerHintT>3.5||!t?this.coarse?X(`hint.steerTouch`):X(`hint.steer`):this.coarse?X(`hint.boostTouch`):X(`hint.boost`);this.hud.hint(this.steerHintT>0?n:``)}}onFlightEvent(e){let t=this.run,n=this.hero.root.position;switch(e.type){case`launch`:this.phase=`flight`,this.hud.cueOff(),this.hud.hint(``),this.hero.setPose(`fly`),this.hero.kick(-.32),this.detachSled(),this.items.launchArc(t,this.stats),this.sfx.launch(),this.burst(n,40,16777215,7,this.soft),this.fovKick=6,this.squeak(e.perfect?`happy`:`go`),e.perfect&&(this.slowmo=.55,this.sfx.perfect(),this.overlay.flash(X(`flash.perfect`),`gold`),this.burst(n,40,16765503,9,this.sparks),this.hero.setHappy(1.5),vv(30));break;case`bounce`:case`land`:{let t=dd(e.speed/14,.2,1);this.sfx.thud(t),this.hero.kick(.25*t+.1),this.dust(n,e.surface,18+t*20),this.shake=Math.max(this.shake,.25*t),e.type===`land`&&this.hero.setPose(`slide`);break}case`crash`:this.sfx.crash(),this.hero.setPose(`slide`),this.hero.kick(.4),this.hero.tumble(),this.hero.setDizzy(2.2),this.squeak(`ouch`,!0),this.dust(n,e.surface,60),this.shake=Math.max(this.shake,.8),this.overlay.flash(X(`flash.crash`),`red`,!0),vv(60);break;case`skip`:this.sfx.skip(t.skips),this.splash(n,.6),this.world.water.ripple(n.x,0,.8),this.overlay.flash(X(`flash.skip`,{n:t.skips}),`blue`,!0),this.hero.kick(.25);break;case`splash`:this.sfx.splash(),this.splash(n,1.4),this.world.water.ripple(n.x,0,1.2),this.overlay.flash(X(`flash.splash`),`blue`,!0),this.hero.setPose(`swim`),this.shake=Math.max(this.shake,.4);break;case`stop`:this.toLanded()}}onItemEvent(e){let t=this.run,n=this.tmp2.set(e.x,e.y,0);switch(e.type){case`coin`:this.runCoins+=e.value,e.value>1?this.sfx.bigCoin():this.sfx.coin(e.combo),this.burst(n,e.value>1?24:7,16765503,e.value>1?6:3,this.sparks),(e.value>1||e.combo%5==0)&&(this.projectToScreen(n,this.tmp),this.overlay.floater(`+${e.value>1?e.value:e.combo}`,this.tmp.x,this.tmp.y-20,e.value>1?`big`:``));break;case`ring`:yh(t),this.runRings++,this.sfx.ring(),this.fovKick=8,this.flashT=.12,this.burst(n,36,10482687,8,this.glow),this.overlay.flash(X(`flash.ring`),`blue`,!0);break;case`balloon`:bh(t),this.runCoins+=3,this.sfx.pop(),this.hero.kick(.2);for(let t=0;t<26;t++)this.bits.emit({x:e.x,y:e.y,z:0,vx:(Math.random()-.5)*14,vy:(Math.random()-.3)*14,vz:(Math.random()-.5)*14,life:.9,size:.35,color:e.color,gravity:12,drag:1.5});this.projectToScreen(n,this.tmp),this.overlay.floater(`+3`,this.tmp.x,this.tmp.y-20,`big`);break;case`fuel`:Th(t,this.stats,Math.max(1.2,this.stats.fuel*.4)),this.sfx.fuel(),this.burst(n,20,16738877,5,this.glow),this.overlay.flash(X(`flash.fuel`),`gold`,!0);break;case`trampoline`:xh(t),this.sfx.boing(),this.hero.kick(.45),this.hero.setPose(`fly`),this.burst(n,26,e.kind===`duck`?12578815:16777215,6,this.soft),this.overlay.flash(X(`flash.bounce`),`green`,!0),this.shake=Math.max(this.shake,.3);break;case`bird`:Sh(t,.72),this.sfx.squawk(),this.shake=Math.max(this.shake,.6),this.hero.kick(.3),this.hero.setScared(1.1),this.squeak(`scared`,!0);for(let t=0;t<22;t++)this.bits.emit({x:e.x,y:e.y,z:0,vx:(Math.random()-.5)*10,vy:Math.random()*6,vz:(Math.random()-.5)*10,life:1.4,size:.28,color:this.color.setHex(16053492),gravity:3,drag:2.5});this.overlay.flash(X(`flash.ouch`),`red`,!0),vv(40);break;case`wire`:Sh(t,.6),this.sfx.zap(),this.shake=Math.max(this.shake,.7),this.hero.setScared(1.3),this.squeak(`ouch`,!0),this.flashT=.15,this.burst(n,40,9427199,9,this.sparks),this.overlay.flash(X(`flash.zap`),`blue`,!0),vv(50);break;case`near`:this.nearMisses++,this.runCoins+=3,this.slowmo=Math.max(this.slowmo,.35),this.sfx.near(),this.hero.setScared(.7),this.squeak(`scared`),this.overlay.flash(X(`flash.near`,{n:3}),`gold`,!0);break;case`card`:{let t=this.store.progress;t.cards.includes(e.id)||(t.cards.push(e.id),this.store.save()),this.runCoins+=25,this.sfx.bigCoin(),this.sfx.goal(),this.hero.setHappy(1.5),this.squeak(`happy`,!0),this.burst(n,40,16769674,8,this.sparks),this.overlay.flash(X(`flash.card`,{name:jf(`card.${e.id}`)}),`gold`),this.projectToScreen(n,this.tmp),this.overlay.floater(`+25`,this.tmp.x,this.tmp.y-20,`big`);break}case`candy`:this.onCandy(e.kind,n);break;case`gust`:this.sfx.gust(),this.fovKick=5,this.hero.kick(-.15),this.overlay.flash(X(`flash.gust`),`blue`,!0);break;case`cloud`:this.sfx.cloud();for(let n=0;n<30;n++)this.soft.emit({x:e.x+(Math.random()-.5)*4,y:e.y+(Math.random()-.5)*3,z:(Math.random()-.5)*4,vx:t.vx*.3+(Math.random()-.5)*6,vy:(Math.random()-.5)*4,vz:(Math.random()-.5)*6,life:1.2,size:3,size1:6,color:this.color.setHex(16777215),alpha:.5,drag:2})}}progressEffects(e){let t=this.store.progress,n=Sp(e.x);if(n>this.biome&&e.x>0){this.biome=n;let e=Cp(n),r=!t.biomesSeen.includes(e.id);r&&(t.biomesSeen.push(e.id),this.store.save()),e.lap>0&&e.kind===1&&(this.overlay.flash(X(`flash.lap`,{n:e.lap+1}),`gold`),this.sfx.record(),this.burst(this.hero.root.position,50,16765503,9,this.sparks)),this.overlay.banner(jf(`biome.${e.id}`),r?X(`toast.newBiome`,{name:``}).replace(/:\s*$/,``):e.lap>0?X(`banner.lap`,{n:e.lap+1,d:Nf(e.start)}):Nf(e.start)),r&&this.sfx.goal()}this.chase&&e.x>this.chase.distance&&(e.phase===`air`||e.phase===`ground`)&&(this.overlay.flash(X(`flash.overtake`,{name:this.chase.name}),`green`,!0),this.sfx.goal(),this.hero.setHappy(1),this.squeak(`happy`),this.burst(this.hero.root.position,30,7267967,7,this.sparks),this.chase=mg(this.rivals,e.x)),!this.passedRecord&&t.seasonBest>60&&e.x>t.seasonBest&&(e.phase===`air`||e.phase===`ground`)&&(this.passedRecord=!0,this.overlay.flash(X(`flash.record`),`gold`),this.sfx.record(),this.hero.setHappy(2),this.squeak(`happy`,!0),this.slowmo=Math.max(this.slowmo,.6),this.burst(this.hero.root.position,60,16765503,10,this.sparks),this.overlay.confetti(60)),!this.spaceShown&&e.y>900&&(this.spaceShown=!0,this.overlay.flash(X(`flash.space`),`blue`),this.sfx.space())}candyEffects(e,t){if(this.turboT>0){this.turboT=Math.max(0,this.turboT-e),wh(t,42,e);let n=this.hero.root.position;for(let e=0;e<2;e++)this.glow.emit({x:n.x-.8,y:n.y+(Math.random()-.5)*.6,z:(Math.random()-.5)*.8,vx:t.vx*.5-6,vy:t.vy*.5+(Math.random()-.5)*3,vz:(Math.random()-.5)*3,life:.35,size:1.1,size1:.3,color:this.color.setRGB(3,.9+Math.random()*.6,.2),drag:2})}this.magnetT>0&&(this.magnetT=Math.max(0,this.magnetT-e)),this.sleepT>0&&(this.sleepT=Math.max(0,this.sleepT-e),this.zzzT-=e,this.zzzT<=0&&(this.zzzT=.7,this.projectToScreen(this.tmp2.copy(this.hero.root.position).setY(this.hero.root.position.y+1.2),this.tmp),this.overlay.floater(`Z`,this.tmp.x+14,this.tmp.y-10,`white`)))}onCandy(e,t){e===`sleep`?(this.sleepT=3,this.zzzT=0,this.hero.setSleep(3),this.sfx.yawn(),this.overlay.flash(X(`flash.sleep`),`blue`,!0),this.burst(t,26,12098815,5,this.soft)):e===`turbo`?(this.turboT=3,this.sleepT=0,this.hero.setSleep(0),this.sfx.turbo(),this.squeak(`go`,!0),this.fovKick=10,this.shake=Math.max(this.shake,.3),this.overlay.flash(X(`flash.turbo`),`red`),this.burst(t,40,16738877,9,this.glow)):(this.magnetT=6,this.sfx.fuel(),this.hero.setHappy(1),this.overlay.flash(X(`flash.magnet`),`gold`,!0),this.burst(t,36,16765503,8,this.sparks)),vv(25)}squeak(e,t=!1){!t&&this.time-this.lastSqueak<2.5||(this.lastSqueak=this.time,this.sfx.squeak(e))}toLanded(){if(this.phase===`landed`||this.phase===`results`)return;this.phase=`landed`,this.landedT=1.5,this.hud.cueOff(),this.hud.hint(``);let e=this.run;e.x>this.store.progress.seasonBest&&e.x>1&&this.hero.setHappy(3)}toResults(){let e=this.run;this.phase=`results`,this.platform.gameplayStop();let t=this.meta.finishRun({distance:Math.max(0,e.x),maxHeight:e.maxHeight,maxSpeed:e.maxSpeed,maxAlt:e.maxAlt,coins:this.runCoins,skips:e.skips,nearMisses:this.nearMisses,rings:this.runRings,perfect:e.perfect});this.world.markers.setRecord(this.store.progress.seasonBest),this.world.markers.setRivals(pg(this.rivals,this.store.progress.seasonBest)),t.newRecord?(this.sfx.record(),this.overlay.confetti(90)):t.goals.length&&this.sfx.goal(),this.achQueue=t.achievements.map(e=>e.id);let n=this.store.progress,r=t.allTimeRecord&&n.runs>=6&&!n.reviewAsked;r&&(n.reviewAsked=!0,this.store.save(),window.setTimeout(()=>void this.platform.requestReview(),2500)),this.shortcutReady&&!r&&(this.forceShortcut||t.highlight&&this.meta.canOfferShortcut())&&(this.forceShortcut=!1,this.meta.shortcutShown(),t.view.shortcut=this.meta.shortcutReward()),this.hud.hide();let i=mg(this.rivals,Math.max(this.store.progress.seasonBest,e.x));t.view.chase=i?X(`rival.ahead`,{name:i.name,d:Nf(i.distance-Math.max(this.store.progress.seasonBest,e.x))}):null,Kh(this.overlay,t.view,{double:async()=>await this.rewarded()?(this.meta.grantDouble(t),this.sfx.buy(),this.overlay.toast(X(`toast.doubled`),`good`),!0):!1,cont:()=>void this.continueRun(),next:()=>void this.afterResults(),tick:()=>this.sfx.tally(),shortcut:e=>this.answerShortcut(e)})}async continueRun(){!this.run||!await this.rewarded()?this.afterResults():(Eh(this.run,this.stats),this.phase=`flight`,this.hero.setPose(`fly`),this.hero.kick(-.3),this.hud.show({rocket:this.stats.thrust>0,touch:this.coarse,best:this.store.progress.seasonBest}),this.burst(this.hero.root.position,40,16777215,8,this.soft),this.sfx.launch(),this.platform.gameplayStart())}async afterResults(){await this.overlay.setFade(!0),this.removeSled(),this.run=null,this.items.reset(1),this.toHangar(),this.world.prewarm(this.hero.root.position.x),this.syncCameraNow(),await this.overlay.setFade(!1),this.achQueue.forEach((e,t)=>window.setTimeout(()=>this.overlay.toast(X(`ach.done`,{name:jf(`ach.${e}`)}),`good`),300+t*2600)),this.achQueue=[];let e=Date.now();!this.store.progress.noAds&&this.store.progress.runs%3==0&&e-this.lastAdAt>9e4&&(this.lastAdAt=e,this.setPause(`ad`,!0),await this.platform.showFullscreen(),this.setPause(`ad`,!1)),this.dailyCheck(this.store.progress.runs>=2)}syncHero(e){let t=this.run;if(!t)return;let n=this.hero.root;n.position.set(t.x,t.y,0);let r=t.pitch;(t.phase===`ground`||t.phase===`done`)&&(r=Math.atan((kp(t.x+.5)-kp(t.x-.5))/1)),(t.phase===`water`||t.phase===`done`&&t.y<1)&&(r=0);let i=this.input().pitch,a=t.phase===`air`,o=a?.28-i*.12:0,s=a?-.95:0;this.bank=e>0?pd(this.bank,o,5,e):o,this.yaw=e>0?pd(this.yaw,s,4,e):s,n.rotation.set(this.bank,this.yaw,r,`ZYX`)}detachSled(){let e=this.hero.cloneSled();if(!e||!this.run)return;this.removeSled(),this.scene.add(e);let t=ip(300),n=.75;this.sled={obj:e,x:this.run.x,y:this.run.y-Um+.1,vx:this.run.vx*n,vy:this.run.vy*n-1,rot:t.angle,vr:-1.5-Math.random()*2,life:6},this.hero.sledGroup.visible=!1}removeSled(){this.sled&&this.scene.remove(this.sled.obj),this.sled=null}updateSled(e){let t=this.sled;if(!t)return;t.life-=e,t.vy-=9.81*e,t.vx*=Math.exp(-.4*e),t.x+=t.vx*e,t.y+=t.vy*e,t.rot+=t.vr*e;let n=Math.max(kp(t.x),0);t.y<n+.1&&(t.y=n+.1,t.vy<-2?(t.vy=-t.vy*.35,t.vr=(Math.random()-.5)*6,t.vx*=.7):(t.vy=0,t.vx*=Math.exp(-3*e),t.vr*=Math.exp(-4*e))),t.obj.position.set(t.x,t.y,.4),t.obj.rotation.set(0,0,t.rot),t.life<=0&&this.removeSled()}burst(e,t,n,r,i=this.sparks){let a=this.color.setHex(n);for(let n=0;n<t;n++){let t=Math.random()*Math.PI*2,n=Math.acos(Math.random()*2-1),o=r*(.4+Math.random()*.6);i.emit({x:e.x,y:e.y,z:e.z,vx:Math.sin(n)*Math.cos(t)*o,vy:Math.cos(n)*o,vz:Math.sin(n)*Math.sin(t)*o,life:.5+Math.random()*.5,size:i===this.soft?1.2:.55,size1:i===this.soft?2.4:.1,color:a,alpha:i===this.soft?.7:1,drag:3,gravity:i===this.soft?-1:2})}}dust(e,t,n){let r=this.color.setHex(hv[t]);for(let t=0;t<n;t++)this.soft.emit({x:e.x+(Math.random()-.5)*1.2,y:e.y-.4,z:(Math.random()-.5)*1.5,vx:(Math.random()-.2)*7,vy:Math.random()*6,vz:(Math.random()-.5)*7,life:.7+Math.random()*.6,size:.8,size1:2.6,color:r,alpha:.85,gravity:6,drag:2.2})}splash(e,t){let n=this.color.setHex(15137023);for(let r=0;r<50*t;r++){let r=Math.random()*Math.PI*2,i=3+Math.random()*6*t;this.soft.emit({x:e.x,y:.2,z:0,vx:Math.cos(r)*i*.6+2,vy:5+Math.random()*9*t,vz:Math.sin(r)*i,life:.9+Math.random()*.5,size:.45,size1:.9,color:n,alpha:.9,gravity:18,drag:.6})}}trailEffects(e,t){let n=this.hero.root.position,r=ih(t);if(t.boosting){let e=this.hero.nozzleWorld(this.tmp),n=-Math.cos(t.pitch),r=-Math.sin(t.pitch);for(let i=0;i<3;i++){let i=10+Math.random()*6;this.glow.emit({x:e.x,y:e.y,z:e.z,vx:t.vx*.6+n*i+(Math.random()-.5)*2,vy:t.vy*.6+r*i+(Math.random()-.5)*2,vz:(Math.random()-.5)*2,life:.18+Math.random()*.1,size:.9,size1:.25,color:this.color.setRGB(3.2,1.5+Math.random()*.8,.4),drag:2})}Math.random()<.7&&this.soft.emit({x:e.x,y:e.y,z:e.z,vx:t.vx*.25+n*4,vy:t.vy*.25+r*4+1,vz:(Math.random()-.5)*2,life:1.3,size:.8,size1:3.2,color:this.color.setHex(15263982),alpha:.45,drag:1.5})}let i=t.surface===`snow`;if(this.phase===`ramp`||t.phase===`ground`&&r>2){let e=this.color.setHex(this.phase===`ramp`?16777215:hv[t.surface]),a=Math.min(1,r/25)*(this.phase===`ramp`||i?1:.6);for(let r=0;r<3;r++)Math.random()>a||this.soft.emit({x:n.x-.6+(Math.random()-.5)*.4,y:n.y-.7,z:(Math.random()-.5)*1.6,vx:t.vx*.2-Math.random()*2,vy:1.5+Math.random()*3,vz:(Math.random()-.5)*4,life:.6+Math.random()*.4,size:.5,size1:1.6,color:e,alpha:.85,gravity:5,drag:2})}t.phase===`water`&&Math.random()<.3&&this.splash(n,.15),this.updateSled(e)}frameHangar(){let e=window.innerWidth,t=window.innerHeight,n=e>t&&t<=520,r=(e/t<1||e<=720)&&!n;this.phase===`hangar`?r?this.camera.setViewOffset(e,t,0,t*.33,e,t):n?this.camera.setViewOffset(e,t,e*.3,t*.12,e,t):this.camera.setViewOffset(e,t,e*.24,t*.07,e,t):this.phase===`title`&&r?this.camera.setViewOffset(e,t,0,-t*.1,e,t):this.camera.clearViewOffset()}syncCameraNow(){this.camInit=!1,this.updateCamera(0)}debugCam=null;updateCamera(e){if(this.debugCam){this.camera.position.copy(this.debugCam.pos),this.camera.lookAt(this.debugCam.look),this.camera.fov=this.debugCam.fov,this.camera.clearViewOffset(),this.camera.updateProjectionMatrix();return}let t=this.hero.root.position,n=this.tmp,r=gv,i=50,a=3.5,o=6,s=this.run,c=dd((1.3-this.camera.aspect)/.8,0,1);if(this.phase===`title`||this.phase===`hangar`){this.orbit+=e;let o=window.innerWidth/window.innerHeight<1;if(this.phase===`title`){let e=Math.sin(this.orbit*.12);o?(n.set(t.x-4.2+e*.8,t.y+1.6+e*.2,t.z+6.2-e*.5),r.set(t.x+3.5,t.y-.6,t.z-1.6)):(n.set(t.x-5.5+e*1.2,t.y+2.4+e*.3,t.z+7.5-e*.8),r.set(t.x+14,t.y-3.2,t.z-4)),i=o?70:50}else{let e=Math.sin(this.orbit*.3)*.25,a=o?1.35:1;n.set(t.x-3.3*a+e,t.y+.5,t.z+3.4*a+e*.5),r.set(t.x+.4,t.y+.65,t.z-.3),i=o?62:44}this.hero.faceToward(this.camPos.x-t.x,this.camPos.z-t.z),a=2.5}else if(s&&(this.phase===`ready`||this.phase===`ramp`)){let e=K(2.2,.4,ch(s)),o=s.pitch,l=this.tmp2.set(-Math.cos(o),-Math.sin(o),0);n.set(t.x+l.x*(7+1.5*c),t.y+l.y*7+3,t.z+5.5-2.5*c),n.lerp(this.tmp2.set(t.x-5-4*c,t.y+3.5,t.z+15-6*c),e);let u=10-4*c;r.set(t.x+Math.cos(o)*u,t.y+Math.sin(o)*u+.5,0),i=55+10*c+Math.min(12,ih(s)*.3),a=this.phase===`ready`?8:5}else if(s){let l=ih(s),u=dd(8+l*.08,8,17),d=l>.5?s.vx/l:1,f=l>.5?s.vy/l:0;if(this.phase===`landed`||this.phase===`results`){this.orbit+=e;let o=.25+this.orbit*.12;n.set(t.x+Math.sin(o)*9,t.y+3,Math.cos(o)*9),r.set(t.x,t.y+.3,0),a=1.8,i=48}else{let p=dd(Math.atan2(f,d),-.85,.85);this.camDir=e>0?this.camDir+(p-this.camDir)*(1-Math.exp(-3*e)):p;let m=Math.cos(this.camDir),h=Math.sin(this.camDir),g=u*(.48+.55*c);n.set(t.x-m*g,t.y-h*g*.55+u*(.06+.1*c),u*(.88-.4*c));let _=Math.max(_v(n.x,n.z),0)+2.2;n.y<_&&(n.y=_),r.set(t.x+m*u*(.9+.5*c),t.y+h*u*.5+.9,-u*.12),i=50+14*c+Math.min(16,l*.13)+(s.boosting?5:0),a=4,o=7}}this.fovKick=Math.max(0,this.fovKick-e*14),i+=this.fovKick,!this.camInit||e===0?(this.camPos.copy(n),this.camLook.copy(r),this.camInit=!0):(this.camPos.x=pd(this.camPos.x,n.x,a,e),this.camPos.y=pd(this.camPos.y,n.y,a,e),this.camPos.z=pd(this.camPos.z,n.z,a,e),this.camLook.x=pd(this.camLook.x,r.x,o,e),this.camLook.y=pd(this.camLook.y,r.y,o,e),this.camLook.z=pd(this.camLook.z,r.z,o,e)),this.shake=Math.max(0,this.shake-e*1.8);let l=this.shake*this.shake;this.camera.position.copy(this.camPos),this.camera.position.x+=(Math.random()-.5)*l*1.2,this.camera.position.y+=(Math.random()-.5)*l*1.2,this.camera.lookAt(this.camLook),this.camera.fov=e===0?i:pd(this.camera.fov,i,5,e),this.frameHangar(),this.camera.updateProjectionMatrix()}projectToScreen(e,t){return t.copy(e).project(this.camera),t.x=(t.x*.5+.5)*window.innerWidth,t.y=(-t.y*.5+.5)*window.innerHeight,t}bindInput(e){let t=e=>{let t=(window.innerHeight*.5-e)/(window.innerHeight*.12);return dd(Math.sign(t)*Math.min(1,Math.abs(t)+.35),-1,1)};e.addEventListener(`pointerdown`,n=>{this.sfx.unlock(),this.phase===`ready`?this.go():this.phase===`ramp`?this.jumpTap():this.phase===`flight`&&(this.touchId=n.pointerId,e.setPointerCapture(n.pointerId),this.touchPitch=t(n.clientY))}),e.addEventListener(`pointermove`,e=>{this.touchId===e.pointerId&&(this.touchPitch=t(e.clientY))});let n=e=>{this.touchId===e.pointerId&&(this.touchId=null,this.touchPitch=0)};e.addEventListener(`pointerup`,n),e.addEventListener(`pointercancel`,n),e.addEventListener(`contextmenu`,e=>e.preventDefault()),window.addEventListener(`keydown`,e=>{[`Space`,`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`].includes(e.code)&&e.preventDefault(),this.sfx.unlock(),e.code===`Escape`?this.pause():e.repeat||(e.code===`KeyF`&&this.platform.fullscreen.toggle(),(e.code===`Space`||e.code===`Enter`)&&(this.phase===`ready`?this.go():this.phase===`ramp`?this.jumpTap():this.phase===`title`&&!this.overlay.hasModal()?this.onPlay():this.phase===`hangar`&&!this.overlay.hasModal()&&e.code===`Enter`&&this.startRun()),this.keys.add(e.code))}),window.addEventListener(`keyup`,e=>this.keys.delete(e.code)),window.addEventListener(`blur`,()=>{this.keys.clear(),this.boostTouch=!1,this.steerArrow=0,this.touchPitch=0})}resize(){let e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t,!1),this.post.setSamples(this.msaaSamples()),this.post.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix();let n=t*this.renderer.getPixelRatio()/(2*Math.tan(At.degToRad(50)/2));for(let e of[this.soft,this.glow,this.sparks,this.bits])e.setPixelScale(n)}msaaSamples(){let e=this.pixelRatioFor(this.quality),t=window.innerWidth*window.innerHeight*e*e;return this.quality>=3&&t<=24e5?2:0}pixelRatioFor(e){let t=window.devicePixelRatio||1;return Math.min(t,e>=3?1.5:e===2?1.25:e===1?1:.85)}trackFps(e){this.fpsTime+=e,this.fpsFrames++,!(this.fpsTime<2)&&(this.fpsValue=this.fpsFrames/this.fpsTime,this.fpsTime=0,this.fpsFrames=0,this.warmup>0?this.warmup-=2:!this.autoQuality||this.overlay.hasModal()||document.hidden||(this.fpsValue<46?this.slowWindows++:this.slowWindows=0,this.fpsValue>=58?this.fastWindows++:this.fastWindows=0,this.slowWindows>=2&&this.quality>0?(this.slowWindows=0,this.setQuality(this.quality-1)):this.fastWindows>=4&&this.quality<this.maxQuality&&this.recoveries<2&&(this.fastWindows=0,this.recoveries++,this.setQuality(this.quality+1))))}setQuality(e){this.quality=dd(Math.round(e),0,3),this.warmup=4,this.renderer.setPixelRatio(this.pixelRatioFor(this.quality)),this.post.setSamples(this.msaaSamples()),this.post.setBloom(this.quality>=1),this.world.setShadows(this.quality>=1,this.quality>=2?2048:1024),this.world.setDrawDistance(this.quality>=1?2800:1700),this.world.clouds.setVisible(this.quality>=1),this.resize()}renderFrame(){this.renderer.info.reset();let e=this.gpuTimer,t=this.renderer.getContext(),n=null;if(e&&!this.gpuQueryBusy&&(n=t.createQuery(),n&&t.beginQuery(e.TIME_ELAPSED_EXT,n)),this.directRender?this.renderer.render(this.scene,this.camera):this.post.render(this.time),n&&e){t.endQuery(e.TIME_ELAPSED_EXT),this.gpuQueryBusy=!0;let r=()=>{t.getQueryParameter(n,t.QUERY_RESULT_AVAILABLE)?(t.getParameter(e.GPU_DISJOINT_EXT)||(this.gpuMs=this.gpuMs*.9+t.getQueryParameter(n,t.QUERY_RESULT)/1e6*.1),t.deleteQuery(n),this.gpuQueryBusy=!1):window.setTimeout(r,4)};window.setTimeout(r,4)}}frame(){let e=performance.now();this.frameBody(e),this.cpuMs=this.cpuMs*.95+(performance.now()-e)*.05}frameBody(e){let t=Math.min(.05,(e-this.last)/1e3);if(this.last=e,this.pauses.size>0)return;this.trackFps(t),this.timeScale=pd(this.timeScale,this.slowmo>0?.3:1,12,t),this.slowmo=Math.max(0,this.slowmo-t);let n=Math.min(.1,t*this.timeScale*this.devSpeed);this.time+=n,this.phase===`ready`?(this.readyT-=n,this.syncHero(n),this.readyT<=0&&this.go()):this.phase===`ramp`||this.phase===`flight`?this.updateRun(n):this.phase===`landed`&&(this.landedT-=t,this.run&&(this.events.length=0,this.run.phase!==`done`&&vh(this.run,this.stats,{pitch:0,boost:!1},n,this.events),this.syncHero(n)),this.updateSled(n),this.landedT<=0&&this.toResults()),(this.phase===`title`||this.phase===`hangar`)&&this.items.update(n,this.time,null,this.stats,this.itemEvents);let r=this.run,i=r?ih(r):0;this.hero.update(n,this.phase===`title`||this.phase===`hangar`?0:i,!!r?.boosting),this.updateCamera(t),this.world.update(n,this.time,this.hero.root.position,this.camera),this.soft.update(n),this.glow.update(n),this.sparks.update(n),this.bits.update(n);let a=this.phase===`flight`;this.streaks.update(this.hero.root.position.x,this.hero.root.position.y,a?r.vx:0,a?r.vy:0),this.flashT=Math.max(0,this.flashT-t),this.post.speed=a?dd((i-38)/50)*(r.boosting?1:.6):0,this.post.boost=a&&(r.boosting||this.turboT>0)?1:0,this.post.flash=this.flashT*2.5,this.sfx.update({speed:i,ramp:this.phase===`ramp`,sliding:!!r&&r.phase===`ground`&&this.phase!==`results`,boosting:!!r?.boosting&&a,inAir:!!r&&r.phase===`air`&&this.phase!==`results`}),r&&(this.phase===`ramp`||this.phase===`flight`||this.phase===`ready`)&&this.hud.update({distance:Math.max(0,r.x),height:ah(r),speedKmh:i*3.6,coins:this.runCoins,fuel:this.stats.thrust>0?r.fuel/Math.max(.01,this.stats.fuel):null,boosting:r.boosting,rival:this.chase?{name:this.chase.name,gap:this.chase.distance-Math.max(0,r.x)}:null,effect:this.sleepT>0?{kind:`sleep`,left:this.sleepT}:this.turboT>0?{kind:`turbo`,left:this.turboT}:this.magnetT>0?{kind:`magnet`,left:this.magnetT}:null}),this.lastSeenTimer+=t,this.lastSeenTimer>30&&(this.lastSeenTimer=0,this.meta.touch()),this.renderFrame()}debugGrant(e){this.meta.grant(e),this.refreshHangar()}debugLevels(e){Object.assign(this.store.progress.levels,e),this.store.save(),this.applyLook(this.rentNext),this.world.setRamp(this.stats.rampHeight),this.phase===`hangar`&&(this.placeHeroOnPlatform(),this.refreshHangar())}debugAutopilot(e){this.autopilotOn=e}debugInput(e,t){this.touchPitch=e,this.boostTouch=t}debugTimeScale(e){this.devSpeed=e}debugCareer(e){return this.career||={on:e,wait:0,stale:0,best0:0,runStart:0,logged:null,log:[]},this.career.on=e,this.autopilotOn=e,this.career.log}careerTick(e){let t=this.career;if(t.wait-=e,t.wait>0||this.starting)return;t.wait=.4;let n=e=>{let t=document.querySelector(e);return!t||t.disabled?!1:(t.click(),!0)};if(this.phase===`results`&&this.run&&t.logged!==this.run){t.logged=this.run,t.runStart=performance.now();let e=this.store.progress,n=this.run;t.log.push({season:e.season,run:e.runs,x:Math.round(n.x),s:Math.round(n.time),coins:e.coins,best:Math.round(e.seasonBest),stars:e.stars,at:Math.round(performance.now()/1e3)}),n.x>t.best0*1.03?t.stale=0:t.stale++,t.best0=Math.max(t.best0,n.x)}if(this.overlay.hasModal()){if(this.phase===`results`&&performance.now()-t.runStart<2500)return;n(`.sheet .actions .btn.go.next`)||n(`.season-sheet .btn.gold`)||n(`.sheet .actions .btn.go`)||n(`.sheet .close`)||console.warn(`career: stuck on a sheet`);return}if(this.phase===`title`&&this.onPlay(),this.phase!==`hangar`)return;let r=this.store.progress;for(;;){let e=zp.filter(e=>!(e.requires&&r.levels[e.requires]===0)).map(e=>({id:e.id,cost:Wp(e.id,r.levels[e.id])})).filter(e=>e.cost!==null&&e.cost<=r.coins).sort((e,t)=>e.cost-t.cost)[0];if(!e)break;this.buy(e.id)}let i=this.meta.seasonGain(),a=zp.every(e=>r.levels[e.id]>=e.max);i>=Math.max(5,r.stars*.5)&&t.stale>=3||a&&i>=5?(t.stale=0,t.best0=0,this.openSeason()):this.startRun()}debugDaysAway(e){this.meta.shiftDays(-e),this.dailyCheck()}debugShortcutOffer(){return this.forceShortcut=!0,this.store.progress.shortcut={day:``,declines:0,added:!1},this.store.save(),this.shortcutReady?`the next results screen offers the shortcut`:`the platform has no shortcut: open the game with ?shortcut=1`}debugState(){let e=this.run,t=this.store.progress;return{phase:this.phase,fps:Math.round(this.fpsValue),cpuMs:Math.round(this.cpuMs*10)/10,gpuMs:Math.round(this.gpuMs*10)/10,quality:this.quality,coins:this.store.progress.coins,best:Math.round(this.store.progress.best),runs:this.store.progress.runs,run:e?{phase:e.phase,x:Math.round(e.x),y:Math.round(e.y),speedKmh:Math.round(ih(e)*3.6),fuel:e.fuel,coins:this.runCoins}:null,levels:{...this.store.progress.levels},streak:{...t.streak},playDays:t.playDays,shortcut:{...t.shortcut},events:{...this.eventLog},drawCalls:this.renderer.info.render.calls,triangles:this.renderer.info.render.triangles}}debugWarp(e,t,n){let r=this.run;!r||this.phase!==`flight`&&this.phase!==`ramp`||(r.phase=`air`,this.phase=`flight`,this.hero.setPose(`fly`),this.hero.sledGroup.visible=!1,r.x=e,r.y=Math.max(kp(e),0)+t,r.vx=n,r.vy=0,r.pitch=0,this.items.reset(Math.floor(e)),this.hud.hint(``),this.hud.cueOff(),this.world.prewarm(e),this.syncHero(0),this.camInit=!1,this.biome=Sp(e))}debugCamera(e,t=[0,0,0],n=40){if(!e){this.debugCam=null;return}let r=this.hero.root.position;this.debugCam={pos:new B(r.x+e[0],r.y+e[1],r.z+e[2]),look:new B(r.x+t[0],r.y+t[1],r.z+t[2]),fov:n}}debugPhase(){return this.phase}debugStart(){return this.phase===`title`&&(this.title.hide(),this.toHangar()),this.startRun()}debugFinish(){this.run&&this.phase===`flight`&&(this.run.phase=`done`,this.toLanded())}debugQuality(e){this.autoQuality=!1,this.setQuality(e)}debugToggle(e,t){this.autoQuality=!1,e===`bloom`?this.post.setBloom(t):e===`msaa`?this.post.setSamples(t?2:0):e===`shadows`?this.world.setShadows(t):e===`post`?this.directRender=!t:e===`clouds`?this.world.clouds.setVisible(t):e===`pr1`?(this.renderer.setPixelRatio(t?1:this.pixelRatioFor(this.quality)),this.resize()):e===`props`&&this.world.setPropsVisible(t)}};function bv(){let e=()=>document,t=()=>!!(e().fullscreenElement??e().webkitFullscreenElement);return{get supported(){return!!(e().fullscreenEnabled??e().webkitFullscreenEnabled)},active:t,async toggle(){let n=e(),r=n.documentElement;try{t()?await(n.exitFullscreen?n.exitFullscreen():n.webkitExitFullscreen?.()):await(r.requestFullscreen?r.requestFullscreen({navigationUI:`hide`}):r.webkitRequestFullscreen?.())}catch{}}}}function xv(e){let t=e?.fullscreen;return t?{supported:!0,active:()=>t.status===`on`,async toggle(){try{await(t.status===`on`?t.exit():t.request())}catch{}}}:bv()}var Sv=`poleteli:cloud`,Cv=`data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2016%2016%22%3E%3Ccircle%20cx%3D%228%22%20cy%3D%228%22%20r%3D%227%22%20fill%3D%22%23f7c948%22%20stroke%3D%22%23c48a00%22%2F%3E%3Ctext%20x%3D%228%22%20y%3D%2211.5%22%20font-size%3D%229%22%20text-anchor%3D%22middle%22%20fill%3D%22%237a5200%22%20font-family%3D%22sans-serif%22%3E%D0%AF%3C%2Ftext%3E%3C%2Fsvg%3E`,wv=[[`coins_s`,`Горсть монет`,`19`],[`coins_m`,`Мешок монет`,`49`],[`coins_l`,`Сундук монет`,`129`],[`starter_pack`,`Набор пилота`,`79`],[`rocket_forever`,`Ракета навсегда`,`149`],[`no_ads`,`Без рекламы`,`99`]],Tv={distance:[[`Белка Сеня`,21400],[`Ёжик Тоша`,9800],[`Кролик Бо`,5200],[`Енот Макс`,2650],[`Мышка Пи`,760]],altitude:[[`Белка Сеня`,2100],[`Ёжик Тоша`,1250],[`Кролик Бо`,760],[`Енот Макс`,420],[`Мышка Пи`,230]],total:[[`Белка Сеня`,1800],[`Ёжик Тоша`,640],[`Кролик Бо`,210],[`Енот Макс`,75],[`Мышка Пи`,12]]};function Ev(){let e=new URLSearchParams(location.search).get(`lang`);if(e)return e;let t=navigator.languages?.length?navigator.languages:[navigator.language];return t.find(e=>Of(e)===`ru`)??t[0]??`ru`}var Dv=class{showAdStub;kind=`local`;fullscreen=bv();lang=Of(Ev());mockShop=!1;mockShortcut=!1;owned=[];constructor(e){this.showAdStub=e}gameReady(){}gameplayStart(){}gameplayStop(){}async showFullscreen(){}async showRewarded(){return await this.showAdStub(),!0}async loadData(){try{let e=localStorage.getItem(Sv);return e?JSON.parse(e):null}catch{return null}}async saveData(e){try{localStorage.setItem(Sv,JSON.stringify(e))}catch{}}async catalog(){return this.mockShop?wv.map(([e,t,n])=>({id:e,title:t,description:``,price:`${n} YAN`,priceValue:n,currencyIcon:Cv})):[]}async purchase(e){if(!this.mockShop)return null;let t={id:e,token:`local-${Date.now()}`};return this.owned.push(t),t}async purchases(){return[...this.owned]}async consume(e){let t=this.owned.findIndex(t=>t.token===e);t>=0&&this.owned.splice(t,1)}async setScore(){}async leaderboard(e,t){let n=(Tv[e]??Tv.distance).map(([e,t])=>({name:e,score:t,me:!1}));return n.push({name:``,score:Math.round(t),me:!0}),n.sort((e,t)=>t.score-e.score),n.map((e,t)=>({...e,rank:t+1}))}async requestReview(){}async canAddShortcut(){return this.mockShortcut}async addShortcut(){return this.mockShortcut}onPause(){}onAccountChanged(){}},Ov=`progress`,kv=6e4,Av=5e3;function jv(e,t){return new Promise(n=>{let r=e=>{window.clearTimeout(i),n(e)},i=window.setTimeout(r,t,!1);e().then(r,()=>r(!1))})}var Mv=class{sdk;kind=`yandex`;fullscreen;lang;gameplay=!1;player=null;payments=null;constructor(e){this.sdk=e,this.lang=Of(e.environment?.i18n?.lang),this.fullscreen=xv(e.screen)}gameReady(){this.sdk.features.LoadingAPI?.ready()}gameplayStart(){this.gameplay||(this.gameplay=!0,this.sdk.features.GameplayAPI?.start())}gameplayStop(){this.gameplay&&(this.gameplay=!1,this.sdk.features.GameplayAPI?.stop())}showFullscreen(){return new Promise(e=>{let t=()=>{window.clearTimeout(n),e()},n=window.setTimeout(t,kv);try{this.sdk.adv.showFullscreenAdv({callbacks:{onClose:t,onError:t,onOffline:t}})}catch{t()}})}showRewarded(){return new Promise(e=>{let t=!1,n=()=>{window.clearTimeout(r),e(t)},r=window.setTimeout(n,kv);try{this.sdk.adv.showRewardedVideo({callbacks:{onRewarded:()=>{t=!0},onClose:n,onError:n}})}catch{n()}})}getPlayer(){return this.player??=this.sdk.getPlayer(),this.player}getPayments(){return this.payments??=this.sdk.getPayments(),this.payments}async loadData(){try{return(await(await this.getPlayer()).getData([Ov]))[Ov]??null}catch{return null}}async saveData(e,t){try{await(await this.getPlayer()).setData({[Ov]:e},t)}catch{}}async catalog(){try{return(await(await this.getPayments()).getCatalog()).map(e=>({id:e.id,title:e.title,description:e.description,price:e.price,priceValue:e.priceValue,currencyIcon:typeof e.getPriceCurrencyImage==`function`?e.getPriceCurrencyImage(`svg`):``}))}catch{return[]}}async purchase(e){try{let t=await(await this.getPayments()).purchase({id:e});return{id:t.productID,token:t.purchaseToken}}catch{return null}}async purchases(){try{return(await(await this.getPayments()).getPurchases()).map(e=>({id:e.productID,token:e.purchaseToken}))}catch{return[]}}async consume(e){await(await this.getPayments()).consumePurchase(e)}async setScore(e,t){try{await this.sdk.leaderboards?.setScore(e,Math.round(t))}catch{}}async leaderboard(e){try{let t=this.sdk.leaderboards;if(!t)return null;let n=await t.getEntries(e,{quantityTop:5,includeUser:!0,quantityAround:5});return n.entries.map(e=>({rank:e.rank,score:e.score,name:e.player.publicName??``,me:e.rank===n.userRank}))}catch{return null}}async requestReview(){try{let e=this.sdk.feedback;e&&(await e.canReview()).value&&await e.requestReview()}catch{}}canAddShortcut(){let e=this.sdk.shortcut;return e?jv(async()=>(await e.canShowPrompt()).canShow===!0,Av):Promise.resolve(!1)}addShortcut(){let e=this.sdk.shortcut;return e?jv(async()=>(await e.showPrompt()).outcome===`accepted`,kv):Promise.resolve(!1)}onPause(e){this.sdk.on(`game_api_pause`,()=>e(!0)),this.sdk.on(`game_api_resume`,()=>e(!1))}onAccountChanged(e){let t=this.sdk.EVENTS?.ACCOUNT_SELECTION_DIALOG_CLOSED;t&&this.sdk.on(t,e)}};function Nv(e,t){return new Promise(n=>{let r=document.createElement(`script`),i=window.setTimeout(()=>n(!1),t);r.src=e,r.async=!0,r.onload=()=>{window.clearTimeout(i),n(!0)},r.onerror=()=>{window.clearTimeout(i),n(!1)},document.head.append(r)})}var Pv=(e,t)=>Promise.race([e,new Promise((e,n)=>window.setTimeout(()=>n(Error(`timeout`)),t))]);async function Fv(e){if(await Nv(`/sdk.js`,8e3)&&window.YaGames)try{return new Mv(await Pv(window.YaGames.init(),1e4))}catch{}return new Dv(e)}var Iv=`poleteli:v1`,Lv=3e3;function Rv(){return{v:1,savedAt:0,coins:0,levels:Up(),best:0,bestHeight:0,bestSpeed:0,bestAlt:0,runs:0,totalDistance:0,totalCoins:0,upgradesBought:0,goalsDone:[],daily:null,biomesSeen:[`mountains`],lastSeen:0,sound:!0,music:!0,tutorialDone:!1,grantedTokens:[],stars:0,season:1,seasonBest:0,achievements:[],achSeen:0,skin:`classic`,skinsOwned:[`classic`],cards:[],streak:{day:``,n:0,skip:``},playDays:0,lastPlayDay:``,shortcut:{day:``,declines:0,added:!1},perfects:0,rings:0,maxSkips:0,laps:0,reviewAsked:!1,noAds:!1,rocketForever:!1,starterBought:!1}}var zv=e=>typeof e==`object`&&!!e&&!Array.isArray(e),Bv=(e,t)=>typeof e==`number`&&Number.isFinite(e)?e:t,Vv=(e,t)=>typeof e==`boolean`?e:t,Hv=e=>Array.isArray(e)?e.filter(e=>typeof e==`string`):[];function Uv(e){return!zv(e)||typeof e.day!=`string`||typeof e.kind!=`string`||![`distanceRun`,`coinsDay`,`ringsDay`,`distanceDay`,`skipsDay`].includes(e.kind)?null:{day:e.day,kind:e.kind,target:Math.max(1,Bv(e.target,1)),reward:Math.max(0,Bv(e.reward,0)),progress:Math.max(0,Bv(e.progress,0)),claimed:Vv(e.claimed,!1)}}function Wv(e){return!zv(e)||typeof e.day!=`string`?{day:``,n:0,skip:``}:{day:e.day,n:Math.max(0,Math.min(7,Math.floor(Bv(e.n,0)))),skip:typeof e.skip==`string`?e.skip:``}}function Gv(e){if(!zv(e))return null;let t=Rv(),n=Up();if(zv(e.levels))for(let t of zp)n[t.id]=Math.max(0,Math.min(t.max,Math.floor(Bv(e.levels[t.id],0))));let r=zf.map(e=>e.id),i=Hv(e.biomesSeen).filter(e=>r.includes(e)),a=Math.max(0,Math.floor(Bv(e.runs,0))),o=Math.max(0,Bv(e.lastSeen,0)),s=Wv(e.streak),c=o>0?dm(o):``,l=Math.max(+(a>0),s.n,new Set([s.day,c].filter(Boolean)).size),u=zv(e.shortcut)?e.shortcut:{};return{v:1,savedAt:Bv(e.savedAt,0),coins:Math.max(0,Math.floor(Bv(e.coins,0))),levels:n,best:Math.max(0,Bv(e.best,0)),bestHeight:Math.max(0,Bv(e.bestHeight,0)),bestSpeed:Math.max(0,Bv(e.bestSpeed,0)),bestAlt:Math.max(0,Bv(e.bestAlt,0)),runs:a,totalDistance:Math.max(0,Bv(e.totalDistance,0)),totalCoins:Math.max(0,Bv(e.totalCoins,0)),upgradesBought:Math.max(0,Math.floor(Bv(e.upgradesBought,0))),goalsDone:Array.from(new Set(Hv(e.goalsDone))),daily:Uv(e.daily),biomesSeen:Array.from(new Set([`mountains`,...i])),lastSeen:o,sound:Vv(e.sound,t.sound),music:Vv(e.music,t.music),tutorialDone:Vv(e.tutorialDone,!1),grantedTokens:Hv(e.grantedTokens).slice(-50),stars:Math.max(0,Math.floor(Bv(e.stars,0))),season:Math.max(1,Math.floor(Bv(e.season,1))),seasonBest:Math.max(0,Bv(e.seasonBest,Bv(e.best,0))),achievements:Array.from(new Set(Hv(e.achievements))),achSeen:Math.max(0,Math.floor(Bv(e.achSeen,0))),skin:typeof e.skin==`string`?e.skin:`classic`,skinsOwned:Array.from(new Set([`classic`,...Hv(e.skinsOwned)])),cards:Array.from(new Set(Hv(e.cards))),streak:s,playDays:Math.max(0,Math.floor(Bv(e.playDays,l))),lastPlayDay:typeof e.lastPlayDay==`string`?e.lastPlayDay:c,shortcut:{day:typeof u.day==`string`?u.day:``,declines:Math.max(0,Math.min(3,Math.floor(Bv(u.declines,0)))),added:Vv(u.added,!1)},perfects:Math.max(0,Math.floor(Bv(e.perfects,0))),rings:Math.max(0,Math.floor(Bv(e.rings,0))),maxSkips:Math.max(0,Math.floor(Bv(e.maxSkips,0))),laps:Math.max(0,Math.floor(Bv(e.laps,0))),reviewAsked:Vv(e.reviewAsked,!1),noAds:Vv(e.noAds,!1),rocketForever:Vv(e.rocketForever,!1),starterBought:Vv(e.starterBought,!1)}}function Kv(){try{let e=localStorage.getItem(Iv);return e?JSON.parse(e):null}catch{return null}}function qv(e){try{localStorage.setItem(Iv,JSON.stringify(e))}catch{}}var Jv=class{platform;progress=Rv();timer=0;constructor(e){this.platform=e}async load(){let e=Gv(Kv()),t=Gv(await this.platform.loadData()),n=e&&t?t.savedAt>=e.savedAt?t:e:t??e;return this.progress=n??Rv(),this.progress}save(e=!1){this.progress.savedAt=Date.now(),qv(this.progress),e?(window.clearTimeout(this.timer),this.timer=0,this.platform.saveData(this.progress,!0)):this.timer||=window.setTimeout(()=>{this.timer=0,this.platform.saveData(this.progress,!1)},Lv)}reset(){this.progress={...Rv(),sound:this.progress.sound,music:this.progress.music},this.save(!0)}};function Yv(t,n,r){return new Promise(i=>{t.load(n,t=>{t.wrapS=e,t.wrapT=e,t.anisotropy=8,r&&(t.colorSpace=Be),i(t)},void 0,()=>i(new Yt))})}async function Xv(){let e=null;Ph(.25,4);let t=await Fv(()=>e?.showAdStub()??Promise.resolve()),n=new Jv(t);await n.load(),kf(t.lang),document.title=X(`app.title`),Nh(X(`app.loading`)),Ph(.5,3);let r=new $o,i=Promise.all([`800 20px Rubik`,`900 20px Rubik`,`700 20px Rubik`].map(e=>document.fonts.load(e,`Полетели`))).catch(()=>[]),[a,o,s]=await Promise.all([Yv(r,`./assets/wood_planks_diff_1k.jpg`,!0),Yv(r,`./assets/wood_planks_nor_gl_1k.jpg`,!1),Yv(r,`./assets/wood_planks_rough_1k.jpg`,!1),i]);Ph(.75,2.5),await new Promise(e=>window.setTimeout(e,30)),e=new yv(document.getElementById(`scene`),document.getElementById(`ui`),t,n,{map:a,normal:o,rough:s}),Ph(.94,2.5),await e.loadEnvironment(`./assets/kloofendal_48d_partly_cloudy_puresky_1k.hdr`),await e.start()}Xv();