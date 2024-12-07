var ah=Object.defineProperty;var oh=(s,t,e)=>t in s?ah(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var y=(s,t,e)=>oh(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yo="171",Jn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Wn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},lh=0,qo=1,ch=2,oc=1,hh=2,Di=3,rn=0,We=1,fi=2,en=0,Ui=1,ba=2,$o=3,jo=4,Ea=5,xn=100,uh=101,dh=102,fh=103,ph=104,mh=200,cr=201,gh=202,wa=203,Aa=204,As=205,_h=206,xh=207,lc=208,vh=209,yh=210,Mh=211,Sh=212,bh=213,Eh=214,Ta=0,Ca=1,Ra=2,is=3,Pa=4,Da=5,La=6,Ia=7,cc=0,wh=1,Ah=2,nn=0,Th=1,Ch=2,Rh=3,Ph=4,Dh=5,Lh=6,Ih=7,hc=300,ns=301,ss=302,Ua=303,Na=304,Ir=306,_r=1e3,Qi=1001,xr=1002,ke=1003,Uh=1004,Nh=1004,Bs=1005,Fh=1005,Xe=1006,Vr=1007,Oh=1007,Mn=1008,Bh=1008,zi=1009,uc=1010,dc=1011,Ts=1012,Mo=1013,bn=1014,Li=1015,Ds=1016,So=1017,bo=1018,rs=1020,fc=35902,pc=1021,mc=1022,gi=1023,gc=1024,_c=1025,Qn=1026,as=1027,xc=1028,Eo=1029,vc=1030,wo=1031,Ao=1033,hr=33776,ur=33777,dr=33778,fr=33779,Fa=35840,Oa=35841,Ba=35842,ka=35843,za=36196,Va=37492,Ha=37496,Ga=37808,Xa=37809,Wa=37810,Ya=37811,qa=37812,$a=37813,ja=37814,Ka=37815,Za=37816,Ja=37817,Qa=37818,to=37819,eo=37820,io=37821,pr=36492,no=36494,so=36495,yc=36283,ro=36284,ao=36285,oo=36286,kh=3200,zh=3201,Mc=0,Vh=1,Zi="",ii="srgb",os="srgb-linear",vr="linear",oe="srgb",Pn=7680,Ko=519,Hh=512,Gh=513,Xh=514,Sc=515,Wh=516,Yh=517,qh=518,$h=519,lo=35044,Zo="300 es",Ii=2e3,yr=2001;class Tn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const n=this._listeners[t];if(n!==void 0){const r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let r=0,o=n.length;r<o;r++)n[r].call(this,t);t.target=null}}}const Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Jo=1234567;const Ss=Math.PI/180,ls=180/Math.PI;function Ni(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Le[s&255]+Le[s>>8&255]+Le[s>>16&255]+Le[s>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[i&255]+Le[i>>8&255]+Le[i>>16&255]+Le[i>>24&255]).toLowerCase()}function Gt(s,t,e){return Math.max(t,Math.min(e,s))}function To(s,t){return(s%t+t)%t}function jh(s,t,e,i,n){return i+(s-t)*(n-i)/(e-t)}function Kh(s,t,e){return s!==t?(e-s)/(t-s):0}function bs(s,t,e){return(1-e)*s+e*t}function Zh(s,t,e,i){return bs(s,t,1-Math.exp(-e*i))}function Jh(s,t=1){return t-Math.abs(To(s,t*2)-t)}function Qh(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function tu(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function eu(s,t){return s+Math.floor(Math.random()*(t-s+1))}function iu(s,t){return s+Math.random()*(t-s)}function nu(s){return s*(.5-Math.random())}function su(s){s!==void 0&&(Jo=s);let t=Jo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ru(s){return s*Ss}function au(s){return s*ls}function ou(s){return(s&s-1)===0&&s!==0}function lu(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function cu(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function hu(s,t,e,i,n){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+i)/2),h=o((t+i)/2),u=r((t-i)/2),d=o((t-i)/2),f=r((i-t)/2),g=o((i-t)/2);switch(n){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*f,a*l);break;case"YXY":s.set(c*f,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function pi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ae(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const uu={DEG2RAD:Ss,RAD2DEG:ls,generateUUID:Ni,clamp:Gt,euclideanModulo:To,mapLinear:jh,inverseLerp:Kh,lerp:bs,damp:Zh,pingpong:Jh,smoothstep:Qh,smootherstep:tu,randInt:eu,randFloat:iu,randFloatSpread:nu,seededRandom:su,degToRad:ru,radToDeg:au,isPowerOfTwo:ou,ceilPowerOfTwo:lu,floorPowerOfTwo:cu,setQuaternionFromProperEuler:hu,normalize:ae,denormalize:pi};let Ht=class bc{constructor(t=0,e=0){bc.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Gt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Gt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*n+t.x,this.y=r*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};class Ot{constructor(t,e,i,n,r,o,a,c,l){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,c,l)}set(t,e,i,n,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=n,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],_=n[0],m=n[3],p=n[6],M=n[1],v=n[4],x=n[7],A=n[2],S=n[5],b=n[8];return r[0]=o*_+a*M+c*A,r[3]=o*m+a*v+c*S,r[6]=o*p+a*x+c*b,r[1]=l*_+h*M+u*A,r[4]=l*m+h*v+u*S,r[7]=l*p+h*x+u*b,r[2]=d*_+f*M+g*A,r[5]=d*m+f*v+g*S,r[8]=d*p+f*x+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-i*r*h+i*a*c+n*r*l-n*o*c}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=e*u+i*d+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(n*l-h*i)*_,t[2]=(a*i-n*o)*_,t[3]=d*_,t[4]=(h*e-n*c)*_,t[5]=(n*r-a*e)*_,t[6]=f*_,t[7]=(i*c-l*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-n*l,n*c,-n*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Hr.makeScale(t,e)),this}rotate(t){return this.premultiply(Hr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Hr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Hr=new Ot;function Ec(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Mr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function du(){const s=Mr("canvas");return s.style.display="block",s}const Qo={};function Xn(s){s in Qo||(Qo[s]=!0,console.warn(s))}function fu(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function pu(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function mu(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const tl=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),el=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gu(){const s={enabled:!0,workingColorSpace:os,spaces:{},convert:function(n,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===oe&&(n.r=Fi(n.r),n.g=Fi(n.g),n.b=Fi(n.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===oe&&(n.r=ts(n.r),n.g=ts(n.g),n.b=ts(n.b))),n},fromWorkingColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},toWorkingColorSpace:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Zi?vr:this.spaces[n].transfer},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,o){return n.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[os]:{primaries:t,whitePoint:i,transfer:vr,toXYZ:tl,fromXYZ:el,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ii},outputColorSpaceConfig:{drawingBufferColorSpace:ii}},[ii]:{primaries:t,whitePoint:i,transfer:oe,toXYZ:tl,fromXYZ:el,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ii}}}),s}const ee=gu();function Fi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ts(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Dn;class _u{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Dn===void 0&&(Dn=Mr("canvas")),Dn.width=t.width,Dn.height=t.height;const i=Dn.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Dn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Mr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let o=0;o<r.length;o++)r[o]=Fi(r[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Fi(e[i]/255)*255):e[i]=Fi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let xu=0;class wc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xu++}),this.uuid=Ni(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?r.push(Gr(n[o].image)):r.push(Gr(n[o]))}else r=Gr(n);i.url=r}return e||(t.images[this.uuid]=i),i}}function Gr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?_u.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vu=0,ri=class mr extends Tn{constructor(t=mr.DEFAULT_IMAGE,e=mr.DEFAULT_MAPPING,i=Qi,n=Qi,r=Xe,o=Mn,a=gi,c=zi,l=mr.DEFAULT_ANISOTROPY,h=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=Ni(),this.name="",this.source=new wc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _r:t.x=t.x-Math.floor(t.x);break;case Qi:t.x=t.x<0?0:1;break;case xr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _r:t.y=t.y-Math.floor(t.y);break;case Qi:t.y=t.y<0?0:1;break;case xr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ri.DEFAULT_IMAGE=null;ri.DEFAULT_MAPPING=hc;ri.DEFAULT_ANISOTROPY=1;class _e{constructor(t=0,e=0,i=0,n=1){_e.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,x=(f+1)/2,A=(p+1)/2,S=(h+d)/4,b=(u+_)/4,C=(g+m)/4;return v>x&&v>A?v<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(v),n=S/i,r=b/i):x>A?x<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(x),i=S/n,r=C/n):A<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(A),i=b/r,n=C/r),this.set(i,n,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-_)/M,this.z=(d-h)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this.w=Gt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this.w=Gt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Gt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yu extends Tn{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);const n={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new ri(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,n=t.textures.length;i<n;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new wc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class En extends yu{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Ac extends ri{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ke,this.minFilter=ke,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Mu extends ri{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ke,this.minFilter=ke,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wn{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,o,a){let c=i[n+0],l=i[n+1],h=i[n+2],u=i[n+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-a;const p=c*d+l*f+h*g+u*_,M=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const A=Math.sqrt(v),S=Math.atan2(A,p*M);m=Math.sin(m*S)/A,a=Math.sin(a*S)/A}const x=a*M;if(c=c*m+d*x,l=l*m+f*x,h=h*m+g*x,u=u*m+_*x,m===1-a){const A=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=A,l*=A,h*=A,u*=A}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,r,o){const a=i[n],c=i[n+1],l=i[n+2],h=i[n+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-a*f,t[e+2]=l*g+h*f+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(n/2),u=a(r/2),d=c(i/2),f=c(n/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-n)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(r-l)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(o-n)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Gt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+o*a+n*l-r*c,this._y=n*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-n*a,this._w=o*h-i*a-n*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+n*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=n,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*n+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(t=0,e=0,i=0){X.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(il.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(il.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*n-a*i),h=2*(a*e-r*n),u=2*(r*i-o*e);return this.x=e+c*l+o*u-a*h,this.y=i+c*h+a*l-r*u,this.z=n+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Gt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=n*c-r*a,this.y=r*o-i*c,this.z=i*a-n*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Xr.copy(this).projectOnVector(t),this.sub(Xr)}reflect(t){return this.sub(Xr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Gt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xr=new X,il=new wn;class Ls{constructor(t=new X(1/0,1/0,1/0),e=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ci.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ci.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=ci.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ci):ci.fromBufferAttribute(r,o),ci.applyMatrix4(t.matrixWorld),this.expandByPoint(ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ks.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ks.copy(i.boundingBox)),ks.applyMatrix4(t.matrixWorld),this.union(ks)}const n=t.children;for(let r=0,o=n.length;r<o;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ci),ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ms),zs.subVectors(this.max,ms),Ln.subVectors(t.a,ms),In.subVectors(t.b,ms),Un.subVectors(t.c,ms),Hi.subVectors(In,Ln),Gi.subVectors(Un,In),un.subVectors(Ln,Un);let e=[0,-Hi.z,Hi.y,0,-Gi.z,Gi.y,0,-un.z,un.y,Hi.z,0,-Hi.x,Gi.z,0,-Gi.x,un.z,0,-un.x,-Hi.y,Hi.x,0,-Gi.y,Gi.x,0,-un.y,un.x,0];return!Wr(e,Ln,In,Un,zs)||(e=[1,0,0,0,1,0,0,0,1],!Wr(e,Ln,In,Un,zs))?!1:(Vs.crossVectors(Hi,Gi),e=[Vs.x,Vs.y,Vs.z],Wr(e,Ln,In,Un,zs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ai),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ai=[new X,new X,new X,new X,new X,new X,new X,new X],ci=new X,ks=new Ls,Ln=new X,In=new X,Un=new X,Hi=new X,Gi=new X,un=new X,ms=new X,zs=new X,Vs=new X,dn=new X;function Wr(s,t,e,i,n){for(let r=0,o=s.length-3;r<=o;r+=3){dn.fromArray(s,r);const a=n.x*Math.abs(dn.x)+n.y*Math.abs(dn.y)+n.z*Math.abs(dn.z),c=t.dot(dn),l=e.dot(dn),h=i.dot(dn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Su=new Ls,gs=new X,Yr=new X;class Ur{constructor(t=new X,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Su.setFromPoints(t).getCenter(i);let n=0;for(let r=0,o=t.length;r<o;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gs.subVectors(t,this.center);const e=gs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(gs,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gs.copy(t.center).add(Yr)),this.expandByPoint(gs.copy(t.center).sub(Yr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ti=new X,qr=new X,Hs=new X,Xi=new X,$r=new X,Gs=new X,jr=new X;class Co{constructor(t=new X,e=new X(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ti.copy(this.origin).addScaledVector(this.direction,e),Ti.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){qr.copy(t).add(e).multiplyScalar(.5),Hs.copy(e).sub(t).normalize(),Xi.copy(this.origin).sub(qr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Hs),a=Xi.dot(this.direction),c=-Xi.dot(Hs),l=Xi.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(qr).addScaledVector(Hs,d),f}intersectSphere(t,e){Ti.subVectors(t.center,this.origin);const i=Ti.dot(this.direction),n=Ti.dot(Ti)-i*i,r=t.radius*t.radius;if(n>r)return null;const o=Math.sqrt(r-n),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,n=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,n=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>n||((r>i||isNaN(i))&&(i=r),(o<n||isNaN(n))&&(n=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),i>c||a>n)||((a>i||i!==i)&&(i=a),(c<n||n!==n)&&(n=c),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Ti)!==null}intersectTriangle(t,e,i,n,r){$r.subVectors(e,t),Gs.subVectors(i,t),jr.crossVectors($r,Gs);let o=this.direction.dot(jr),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xi.subVectors(this.origin,t);const c=a*this.direction.dot(Gs.crossVectors(Xi,Gs));if(c<0)return null;const l=a*this.direction.dot($r.cross(Xi));if(l<0||c+l>o)return null;const h=-a*Xi.dot(jr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pe{constructor(t,e,i,n,r,o,a,c,l,h,u,d,f,g,_,m){pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,c,l,h,u,d,f,g,_,m)}set(t,e,i,n,r,o,a,c,l,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/Nn.setFromMatrixColumn(t,0).length(),r=1/Nn.setFromMatrixColumn(t,1).length(),o=1/Nn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(n),l=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bu,t,Eu)}lookAt(t,e,i){const n=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),Wi.crossVectors(i,qe),Wi.lengthSq()===0&&(Math.abs(i.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),Wi.crossVectors(i,qe)),Wi.normalize(),Xs.crossVectors(qe,Wi),n[0]=Wi.x,n[4]=Xs.x,n[8]=qe.x,n[1]=Wi.y,n[5]=Xs.y,n[9]=qe.y,n[2]=Wi.z,n[6]=Xs.z,n[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],M=i[3],v=i[7],x=i[11],A=i[15],S=n[0],b=n[4],C=n[8],E=n[12],w=n[1],P=n[5],O=n[9],U=n[13],L=n[2],I=n[6],B=n[10],G=n[14],H=n[3],Z=n[7],nt=n[11],ot=n[15];return r[0]=o*S+a*w+c*L+l*H,r[4]=o*b+a*P+c*I+l*Z,r[8]=o*C+a*O+c*B+l*nt,r[12]=o*E+a*U+c*G+l*ot,r[1]=h*S+u*w+d*L+f*H,r[5]=h*b+u*P+d*I+f*Z,r[9]=h*C+u*O+d*B+f*nt,r[13]=h*E+u*U+d*G+f*ot,r[2]=g*S+_*w+m*L+p*H,r[6]=g*b+_*P+m*I+p*Z,r[10]=g*C+_*O+m*B+p*nt,r[14]=g*E+_*U+m*G+p*ot,r[3]=M*S+v*w+x*L+A*H,r[7]=M*b+v*P+x*I+A*Z,r[11]=M*C+v*O+x*B+A*nt,r[15]=M*E+v*U+x*G+A*ot,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*u-n*l*u-r*a*d+i*l*d+n*a*f-i*c*f)+_*(+e*c*f-e*l*d+r*o*d-n*o*f+n*l*h-r*c*h)+m*(+e*l*u-e*a*f-r*o*u+i*o*f+r*a*h-i*l*h)+p*(-n*a*h-e*c*u+e*a*d+n*o*u-i*o*d+i*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],M=u*m*l-_*d*l+_*c*f-a*m*f-u*c*p+a*d*p,v=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,x=h*_*l-g*u*l+g*a*f-o*_*f-h*a*p+o*u*p,A=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,S=e*M+i*v+n*x+r*A;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/S;return t[0]=M*b,t[1]=(_*d*r-u*m*r-_*n*f+i*m*f+u*n*p-i*d*p)*b,t[2]=(a*m*r-_*c*r+_*n*l-i*m*l-a*n*p+i*c*p)*b,t[3]=(u*c*r-a*d*r-u*n*l+i*d*l+a*n*f-i*c*f)*b,t[4]=v*b,t[5]=(h*m*r-g*d*r+g*n*f-e*m*f-h*n*p+e*d*p)*b,t[6]=(g*c*r-o*m*r-g*n*l+e*m*l+o*n*p-e*c*p)*b,t[7]=(o*d*r-h*c*r+h*n*l-e*d*l-o*n*f+e*c*f)*b,t[8]=x*b,t[9]=(g*u*r-h*_*r-g*i*f+e*_*f+h*i*p-e*u*p)*b,t[10]=(o*_*r-g*a*r+g*i*l-e*_*l-o*i*p+e*a*p)*b,t[11]=(h*a*r-o*u*r-h*i*l+e*u*l+o*i*f-e*a*f)*b,t[12]=A*b,t[13]=(h*_*n-g*u*n+g*i*d-e*_*d-h*i*m+e*u*m)*b,t[14]=(g*a*n-o*_*n-g*i*c+e*_*c+o*i*m-e*a*m)*b,t[15]=(o*u*n-h*a*n+h*i*c-e*u*c-o*i*d+e*a*d)*b,this}scale(t){const e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-n*c,l*c+n*a,0,l*a+n*c,h*a+i,h*c-n*o,0,l*c-n*a,h*c+n*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,o){return this.set(1,i,r,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,M=c*l,v=c*h,x=c*u,A=i.x,S=i.y,b=i.z;return n[0]=(1-(_+p))*A,n[1]=(f+x)*A,n[2]=(g-v)*A,n[3]=0,n[4]=(f-x)*S,n[5]=(1-(d+p))*S,n[6]=(m+M)*S,n[7]=0,n[8]=(g+v)*b,n[9]=(m-M)*b,n[10]=(1-(d+_))*b,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let r=Nn.set(n[0],n[1],n[2]).length();const o=Nn.set(n[4],n[5],n[6]).length(),a=Nn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),t.x=n[12],t.y=n[13],t.z=n[14],hi.copy(this);const l=1/r,h=1/o,u=1/a;return hi.elements[0]*=l,hi.elements[1]*=l,hi.elements[2]*=l,hi.elements[4]*=h,hi.elements[5]*=h,hi.elements[6]*=h,hi.elements[8]*=u,hi.elements[9]*=u,hi.elements[10]*=u,e.setFromRotationMatrix(hi),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,n,r,o,a=Ii){const c=this.elements,l=2*r/(e-t),h=2*r/(i-n),u=(e+t)/(e-t),d=(i+n)/(i-n);let f,g;if(a===Ii)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===yr)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,r,o,a=Ii){const c=this.elements,l=1/(e-t),h=1/(i-n),u=1/(o-r),d=(e+t)*l,f=(i+n)*h;let g,_;if(a===Ii)g=(o+r)*u,_=-2*u;else if(a===yr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Nn=new X,hi=new pe,bu=new X(0,0,0),Eu=new X(1,1,1),Wi=new X,Xs=new X,qe=new X,nl=new pe,sl=new wn;class Si{constructor(t=0,e=0,i=0,n=Si.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,r=n[0],o=n[4],a=n[8],c=n[1],l=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return nl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return sl.setFromEuler(this),this.setFromQuaternion(sl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Si.DEFAULT_ORDER="XYZ";class Tc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let wu=0;const rl=new X,Fn=new wn,Ci=new pe,Ws=new X,_s=new X,Au=new X,Tu=new wn,al=new X(1,0,0),ol=new X(0,1,0),ll=new X(0,0,1),cl={type:"added"},Cu={type:"removed"},On={type:"childadded",child:null},Kr={type:"childremoved",child:null};class xe extends Tn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new X,e=new Si,i=new wn,n=new X(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new pe},normalMatrix:{value:new Ot}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fn.setFromAxisAngle(t,e),this.quaternion.multiply(Fn),this}rotateOnWorldAxis(t,e){return Fn.setFromAxisAngle(t,e),this.quaternion.premultiply(Fn),this}rotateX(t){return this.rotateOnAxis(al,t)}rotateY(t){return this.rotateOnAxis(ol,t)}rotateZ(t){return this.rotateOnAxis(ll,t)}translateOnAxis(t,e){return rl.copy(t).applyQuaternion(this.quaternion),this.position.add(rl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(al,t)}translateY(t){return this.translateOnAxis(ol,t)}translateZ(t){return this.translateOnAxis(ll,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ws.copy(t):Ws.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),_s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(_s,Ws,this.up):Ci.lookAt(Ws,_s,this.up),this.quaternion.setFromRotationMatrix(Ci),n&&(Ci.extractRotation(n.matrixWorld),Fn.setFromRotationMatrix(Ci),this.quaternion.premultiply(Fn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(cl),On.child=t,this.dispatchEvent(On),On.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Cu),Kr.child=t,this.dispatchEvent(Kr),Kr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(cl),On.child=t,this.dispatchEvent(On),On.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,t,Au),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,Tu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));n.material=a}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];n.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}xe.DEFAULT_UP=new X(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ui=new X,Ri=new X,Zr=new X,Pi=new X,Bn=new X,kn=new X,hl=new X,Jr=new X,Qr=new X,ta=new X,ea=new _e,ia=new _e,na=new _e;class mi{constructor(t=new X,e=new X,i=new X){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),ui.subVectors(t,e),n.cross(ui);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){ui.subVectors(n,e),Ri.subVectors(i,e),Zr.subVectors(t,e);const o=ui.dot(ui),a=ui.dot(Ri),c=ui.dot(Zr),l=Ri.dot(Ri),h=Ri.dot(Zr),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(t,e,i,n,r,o,a,c){return this.getBarycoord(t,e,i,n,Pi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Pi.x),c.addScaledVector(o,Pi.y),c.addScaledVector(a,Pi.z),c)}static getInterpolatedAttribute(t,e,i,n,r,o){return ea.setScalar(0),ia.setScalar(0),na.setScalar(0),ea.fromBufferAttribute(t,e),ia.fromBufferAttribute(t,i),na.fromBufferAttribute(t,n),o.setScalar(0),o.addScaledVector(ea,r.x),o.addScaledVector(ia,r.y),o.addScaledVector(na,r.z),o}static isFrontFacing(t,e,i,n){return ui.subVectors(i,e),Ri.subVectors(t,e),ui.cross(Ri).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ui.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),ui.cross(Ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return mi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return mi.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return mi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,r=this.c;let o,a;Bn.subVectors(n,i),kn.subVectors(r,i),Jr.subVectors(t,i);const c=Bn.dot(Jr),l=kn.dot(Jr);if(c<=0&&l<=0)return e.copy(i);Qr.subVectors(t,n);const h=Bn.dot(Qr),u=kn.dot(Qr);if(h>=0&&u<=h)return e.copy(n);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(i).addScaledVector(Bn,o);ta.subVectors(t,r);const f=Bn.dot(ta),g=kn.dot(ta);if(g>=0&&f<=g)return e.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(kn,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return hl.subVectors(r,n),a=(u-h)/(u-h+(f-g)),e.copy(n).addScaledVector(hl,a);const p=1/(m+_+d);return o=_*p,a=d*p,e.copy(i).addScaledVector(Bn,o).addScaledVector(kn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Cc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},Ys={h:0,s:0,l:0};function sa(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}let Jt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ii){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=ee.workingColorSpace){return this.r=t,this.g=e,this.b=i,ee.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=ee.workingColorSpace){if(t=To(t,1),e=Gt(e,0,1),i=Gt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=sa(o,r,t+1/3),this.g=sa(o,r,t),this.b=sa(o,r,t-1/3)}return ee.toWorkingColorSpace(this,n),this}setStyle(t,e=ii){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=n[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ii){const i=Cc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fi(t.r),this.g=Fi(t.g),this.b=Fi(t.b),this}copyLinearToSRGB(t){return this.r=ts(t.r),this.g=ts(t.g),this.b=ts(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ii){return ee.fromWorkingColorSpace(Ie.copy(this),t),Math.round(Gt(Ie.r*255,0,255))*65536+Math.round(Gt(Ie.g*255,0,255))*256+Math.round(Gt(Ie.b*255,0,255))}getHexString(t=ii){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(Ie.copy(this),e);const i=Ie.r,n=Ie.g,r=Ie.b,o=Math.max(i,n,r),a=Math.min(i,n,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(n-r)/u+(n<r?6:0);break;case n:c=(r-i)/u+2;break;case r:c=(i-n)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=ii){ee.fromWorkingColorSpace(Ie.copy(this),t);const e=Ie.r,i=Ie.g,n=Ie.b;return t!==ii?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Yi),this.setHSL(Yi.h+t,Yi.s+e,Yi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Yi),t.getHSL(Ys);const i=bs(Yi.h,Ys.h,e),n=bs(Yi.s,Ys.s,e),r=bs(Yi.l,Ys.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Ie=new Jt;Jt.NAMES=Cc;let Ru=0;class Oi extends Tn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ru++}),this.uuid=Ni(),this.name="",this.type="Material",this.blending=Ui,this.side=rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Aa,this.blendDst=As,this.blendEquation=xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ko,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pn,this.stencilZFail=Pn,this.stencilZPass=Pn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ui&&(i.blending=this.blending),this.side!==rn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Aa&&(i.blendSrc=this.blendSrc),this.blendDst!==As&&(i.blendDst=this.blendDst),this.blendEquation!==xn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==is&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ko&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Pn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Pn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=n(t.textures),o=n(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Sr extends Oi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ye=new X,qs=new Ht;class si{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=lo,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)qs.fromBufferAttribute(this,e),qs.applyMatrix3(t),this.setXY(e,qs.x,qs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=pi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ae(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=pi(e,this.array)),e}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=pi(e,this.array)),e}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=pi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=pi(e,this.array)),e}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),i=ae(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),i=ae(i,this.array),n=ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),i=ae(i,this.array),n=ae(n,this.array),r=ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==lo&&(t.usage=this.usage),t}}class Rc extends si{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Pc extends si{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class yi extends si{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Pu=0;const ti=new pe,ra=new xe,zn=new X,$e=new Ls,xs=new Ls,we=new X;class bi extends Tn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ec(t)?Pc:Rc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ot().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ti.makeRotationFromQuaternion(t),this.applyMatrix4(ti),this}rotateX(t){return ti.makeRotationX(t),this.applyMatrix4(ti),this}rotateY(t){return ti.makeRotationY(t),this.applyMatrix4(ti),this}rotateZ(t){return ti.makeRotationZ(t),this.applyMatrix4(ti),this}translate(t,e,i){return ti.makeTranslation(t,e,i),this.applyMatrix4(ti),this}scale(t,e,i){return ti.makeScale(t,e,i),this.applyMatrix4(ti),this}lookAt(t){return ra.lookAt(t),ra.updateMatrix(),this.applyMatrix4(ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zn).negate(),this.translate(zn.x,zn.y,zn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let n=0,r=t.length;n<r;n++){const o=t[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new yi(i,3))}else{const i=Math.min(t.length,e.count);for(let n=0;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ls);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const r=e[i];$e.setFromBufferAttribute(r),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ur);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){const i=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];xs.setFromBufferAttribute(a),this.morphTargetsRelative?(we.addVectors($e.min,xs.min),$e.expandByPoint(we),we.addVectors($e.max,xs.max),$e.expandByPoint(we)):($e.expandByPoint(xs.min),$e.expandByPoint(xs.max))}$e.getCenter(i);let n=0;for(let r=0,o=t.count;r<o;r++)we.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(we));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)we.fromBufferAttribute(a,l),c&&(zn.fromBufferAttribute(t,l),we.add(zn)),n=Math.max(n,i.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new si(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<i.count;C++)a[C]=new X,c[C]=new X;const l=new X,h=new X,u=new X,d=new Ht,f=new Ht,g=new Ht,_=new X,m=new X;function p(C,E,w){l.fromBufferAttribute(i,C),h.fromBufferAttribute(i,E),u.fromBufferAttribute(i,w),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,w),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),a[C].add(_),a[E].add(_),a[w].add(_),c[C].add(m),c[E].add(m),c[w].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let C=0,E=M.length;C<E;++C){const w=M[C],P=w.start,O=w.count;for(let U=P,L=P+O;U<L;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const v=new X,x=new X,A=new X,S=new X;function b(C){A.fromBufferAttribute(n,C),S.copy(A);const E=a[C];v.copy(E),v.sub(A.multiplyScalar(A.dot(E))).normalize(),x.crossVectors(S,E);const P=x.dot(c[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,P)}for(let C=0,E=M.length;C<E;++C){const w=M[C],P=w.start,O=w.count;for(let U=P,L=P+O;U<L;U+=3)b(t.getX(U+0)),b(t.getX(U+1)),b(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new si(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const n=new X,r=new X,o=new X,a=new X,c=new X,l=new X,h=new X,u=new X;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);n.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(n,r),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(n,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new si(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new bi,i=this.index.array,n=this.attributes;for(const a in n){const c=n[a],l=t(c,i);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,i);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const n={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(n[c]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const n=t.attributes;for(const l in n){const h=n[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ul=new pe,fn=new Co,$s=new Ur,dl=new X,js=new X,Ks=new X,Zs=new X,aa=new X,Js=new X,fl=new X,Qs=new X;class ni extends xe{constructor(t=new bi,e=new Sr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const a=this.morphTargetInfluences;if(r&&a){Js.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(aa.fromBufferAttribute(u,t),o?Js.addScaledVector(aa,h):Js.addScaledVector(aa.sub(e),h))}e.add(Js)}return e}raycast(t,e){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$s.copy(i.boundingSphere),$s.applyMatrix4(r),fn.copy(t.ray).recast(t.near),!($s.containsPoint(fn.origin)===!1&&(fn.intersectSphere($s,dl)===null||fn.origin.distanceToSquared(dl)>(t.far-t.near)**2))&&(ul.copy(r).invert(),fn.copy(t.ray).applyMatrix4(ul),!(i.boundingBox!==null&&fn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,fn)))}_computeIntersections(t,e,i){let n;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,A=v;x<A;x+=3){const S=a.getX(x),b=a.getX(x+1),C=a.getX(x+2);n=tr(this,p,t,i,l,h,u,S,b,C),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);n=tr(this,o,t,i,l,h,u,M,v,x),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),v=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,A=v;x<A;x+=3){const S=x,b=x+1,C=x+2;n=tr(this,p,t,i,l,h,u,S,b,C),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=m,v=m+1,x=m+2;n=tr(this,o,t,i,l,h,u,M,v,x),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}}function Du(s,t,e,i,n,r,o,a){let c;if(t.side===We?c=i.intersectTriangle(o,r,n,!0,a):c=i.intersectTriangle(n,r,o,t.side===rn,a),c===null)return null;Qs.copy(a),Qs.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Qs);return l<e.near||l>e.far?null:{distance:l,point:Qs.clone(),object:s}}function tr(s,t,e,i,n,r,o,a,c,l){s.getVertexPosition(a,js),s.getVertexPosition(c,Ks),s.getVertexPosition(l,Zs);const h=Du(s,t,e,i,js,Ks,Zs,fl);if(h){const u=new X;mi.getBarycoord(fl,js,Ks,Zs,u),n&&(h.uv=mi.getInterpolatedAttribute(n,a,c,l,u,new Ht)),r&&(h.uv1=mi.getInterpolatedAttribute(r,a,c,l,u,new Ht)),o&&(h.normal=mi.getInterpolatedAttribute(o,a,c,l,u,new X),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new X,materialIndex:0};mi.getNormal(js,Ks,Zs,d.normal),h.face=d,h.barycoord=u}return h}class ds extends bi{constructor(t=1,e=1,i=1,n=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:o};const a=this;n=Math.floor(n),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,n,o,2),g("x","z","y",1,-1,t,i,-e,n,o,3),g("x","y","z",1,-1,t,e,i,n,r,4),g("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(c),this.setAttribute("position",new yi(l,3)),this.setAttribute("normal",new yi(h,3)),this.setAttribute("uv",new yi(u,2));function g(_,m,p,M,v,x,A,S,b,C,E){const w=x/b,P=A/C,O=x/2,U=A/2,L=S/2,I=b+1,B=C+1;let G=0,H=0;const Z=new X;for(let nt=0;nt<B;nt++){const ot=nt*P-U;for(let vt=0;vt<I;vt++){const at=vt*w-O;Z[_]=at*M,Z[m]=ot*v,Z[p]=L,l.push(Z.x,Z.y,Z.z),Z[_]=0,Z[m]=0,Z[p]=S>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(vt/b),u.push(1-nt/C),G+=1}}for(let nt=0;nt<C;nt++)for(let ot=0;ot<b;ot++){const vt=d+ot+I*nt,at=d+ot+I*(nt+1),W=d+(ot+1)+I*(nt+1),K=d+(ot+1)+I*nt;c.push(vt,at,K),c.push(at,W,K),H+=6}a.addGroup(f,H,E),f+=H,d+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ds(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function cs(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Oe(s){const t={};for(let e=0;e<s.length;e++){const i=cs(s[e]);for(const n in i)t[n]=i[n]}return t}function Lu(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Dc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const Iu={clone:cs,merge:Oe};var Uu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vi extends Oi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uu,this.fragmentShader=Nu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cs(t.uniforms),this.uniformsGroups=Lu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Lc extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=Ii}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qi=new X,pl=new Ht,ml=new Ht;class Ze extends Lc{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ls*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ss*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ls*2*Math.atan(Math.tan(Ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(qi.x,qi.y).multiplyScalar(-t/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qi.x,qi.y).multiplyScalar(-t/qi.z)}getViewSize(t,e){return this.getViewBounds(t,pl,ml),e.subVectors(ml,pl)}setViewOffset(t,e,i,n,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ss*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*n/c,e-=o.offsetY*i/l,n*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Vn=-90,Hn=1;class Fu extends xe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Ze(Vn,Hn,t,e);n.layers=this.layers,this.add(n);const r=new Ze(Vn,Hn,t,e);r.layers=this.layers,this.add(r);const o=new Ze(Vn,Hn,t,e);o.layers=this.layers,this.add(o);const a=new Ze(Vn,Hn,t,e);a.layers=this.layers,this.add(a);const c=new Ze(Vn,Hn,t,e);c.layers=this.layers,this.add(c);const l=new Ze(Vn,Hn,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Ii)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===yr)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,r),t.setRenderTarget(i,1,n),t.render(e,o),t.setRenderTarget(i,2,n),t.render(e,a),t.setRenderTarget(i,3,n),t.render(e,c),t.setRenderTarget(i,4,n),t.render(e,l),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Ic extends ri{constructor(t,e,i,n,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ns,super(t,e,i,n,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ou extends En{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Ic(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Xe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new ds(5,5,5),r=new Vi({name:"CubemapFromEquirect",uniforms:cs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:We,blending:en});r.uniforms.tEquirect.value=e;const o=new ni(n,r),a=e.minFilter;return e.minFilter===Mn&&(e.minFilter=Xe),new Fu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,n){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(r)}}class Bu extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ku{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=lo,this.updateRanges=[],this.version=0,this.uuid=Ni()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,r=this.stride;n<r;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Fe=new X;class Yn{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=pi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ae(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=pi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=pi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=pi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=pi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),i=ae(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),i=ae(i,this.array),n=ae(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),i=ae(i,this.array),n=ae(n,this.array),r=ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return new si(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Yn(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const oa=new X,zu=new X,Vu=new Ot;class $i{constructor(t=new X(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=oa.subVectors(i,e).cross(zu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(oa),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Vu.getNormalMatrix(t),n=this.coplanarPoint(oa).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pn=new Ur,er=new X;class Ro{constructor(t=new $i,e=new $i,i=new $i,n=new $i,r=new $i,o=new $i){this.planes=[t,e,i,n,r,o]}set(t,e,i,n,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ii){const i=this.planes,n=t.elements,r=n[0],o=n[1],a=n[2],c=n[3],l=n[4],h=n[5],u=n[6],d=n[7],f=n[8],g=n[9],_=n[10],m=n[11],p=n[12],M=n[13],v=n[14],x=n[15];if(i[0].setComponents(c-r,d-l,m-f,x-p).normalize(),i[1].setComponents(c+r,d+l,m+f,x+p).normalize(),i[2].setComponents(c+o,d+h,m+g,x+M).normalize(),i[3].setComponents(c-o,d-h,m-g,x-M).normalize(),i[4].setComponents(c-a,d-u,m-_,x-v).normalize(),e===Ii)i[5].setComponents(c+a,d+u,m+_,x+v).normalize();else if(e===yr)i[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),pn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),pn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(pn)}intersectsSprite(t){return pn.center.set(0,0,0),pn.radius=.7071067811865476,pn.applyMatrix4(t.matrixWorld),this.intersectsSphere(pn)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(er.x=n.normal.x>0?t.max.x:t.min.x,er.y=n.normal.y>0?t.max.y:t.min.y,er.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(er)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Uc extends Oi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const br=new X,Er=new X,gl=new pe,vs=new Co,ir=new Ur,la=new X,_l=new X;class Hu extends xe{constructor(t=new bi,e=new Uc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,r=e.count;n<r;n++)br.fromBufferAttribute(e,n-1),Er.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=br.distanceTo(Er);t.setAttribute("lineDistance",new yi(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ir.copy(i.boundingSphere),ir.applyMatrix4(n),ir.radius+=r,t.ray.intersectsSphere(ir)===!1)return;gl.copy(n).invert(),vs.copy(t.ray).applyMatrix4(gl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=h.getX(_),M=h.getX(_+1),v=nr(this,t,vs,c,p,M);v&&e.push(v)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=nr(this,t,vs,c,_,m);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=nr(this,t,vs,c,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=nr(this,t,vs,c,g-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function nr(s,t,e,i,n,r){const o=s.geometry.attributes.position;if(br.fromBufferAttribute(o,n),Er.fromBufferAttribute(o,r),e.distanceSqToSegment(br,Er,la,_l)>i)return;la.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(la);if(!(c<t.near||c>t.far))return{distance:c,point:_l.clone().applyMatrix4(s.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:s}}const xl=new X,vl=new X;class Gu extends Hu{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let n=0,r=e.count;n<r;n+=2)xl.fromBufferAttribute(e,n),vl.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+xl.distanceTo(vl);t.setAttribute("lineDistance",new yi(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class sr extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Xu extends ri{constructor(t,e,i,n,r,o,a,c,l){super(t,e,i,n,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Nc extends ri{constructor(t,e,i,n,r,o,a,c,l,h=Qn){if(h!==Qn&&h!==as)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Qn&&(i=bn),i===void 0&&h===as&&(i=rs),super(null,n,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ke,this.minFilter=c!==void 0?c:ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Is extends bi{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(n),l=a+1,h=c+1,u=t/a,d=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const M=p*d-o;for(let v=0;v<l;v++){const x=v*u-r;g.push(x,-M,0),_.push(0,0,1),m.push(v/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){const v=M+l*p,x=M+l*(p+1),A=M+1+l*(p+1),S=M+1+l*p;f.push(v,x,S),f.push(x,A,S)}this.setIndex(f),this.setAttribute("position",new yi(g,3)),this.setAttribute("normal",new yi(_,3)),this.setAttribute("uv",new yi(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Is(t.width,t.height,t.widthSegments,t.heightSegments)}}class Fc extends Oi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mc,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Wu extends Oi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Yu extends Oi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Po extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const ca=new pe,yl=new X,Ml=new X;class Oc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ht(512,512),this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ro,this._frameExtents=new Ht(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;yl.setFromMatrixPosition(t.matrixWorld),e.position.copy(yl),Ml.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ml),e.updateMatrixWorld(),ca.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ca),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ca)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class qu extends Oc{constructor(){super(new Ze(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,i=ls*2*t.angle*this.focus,n=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(i!==e.fov||n!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=n,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class $u extends Po{constructor(t,e,i=0,n=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.distance=i,this.angle=n,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new qu}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Bc extends Lc{constructor(t=-1,e=1,i=1,n=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=n+e,c=n-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class ju extends Oc{constructor(){super(new Bc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ku extends Po{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new ju}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Zu extends Po{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ju extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Sl{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Gt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Gt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const bl=new X;class Qu extends xe{constructor(t,e){super(),this.light=t,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";const i=new bi,n=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,c=32;o<c;o++,a++){const l=o/c*Math.PI*2,h=a/c*Math.PI*2;n.push(Math.cos(l),Math.sin(l),1,Math.cos(h),Math.sin(h),1)}i.setAttribute("position",new yi(n,3));const r=new Uc({fog:!1,toneMapped:!1});this.cone=new Gu(i,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),bl.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(bl),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}class td extends Tn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function El(s,t,e,i){const n=ed(i);switch(e){case pc:return s*t;case gc:return s*t;case _c:return s*t*2;case xc:return s*t/n.components*n.byteLength;case Eo:return s*t/n.components*n.byteLength;case vc:return s*t*2/n.components*n.byteLength;case wo:return s*t*2/n.components*n.byteLength;case mc:return s*t*3/n.components*n.byteLength;case gi:return s*t*4/n.components*n.byteLength;case Ao:return s*t*4/n.components*n.byteLength;case hr:case ur:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case dr:case fr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Oa:case ka:return Math.max(s,16)*Math.max(t,8)/4;case Fa:case Ba:return Math.max(s,8)*Math.max(t,8)/2;case za:case Va:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ha:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ga:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case qa:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case $a:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case ja:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Ka:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Za:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Qa:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case to:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case eo:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case io:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case pr:case no:case so:return Math.ceil(s/4)*Math.ceil(t/4)*16;case yc:case ro:return Math.ceil(s/4)*Math.ceil(t/4)*8;case ao:case oo:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ed(s){switch(s){case zi:case uc:return{byteLength:1,components:1};case Ts:case dc:case Ds:return{byteLength:2,components:1};case So:case bo:return{byteLength:2,components:4};case bn:case Mo:case Li:return{byteLength:4,components:1};case fc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yo);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function kc(){let s=null,t=!1,e=null,i=null;function n(r,o){e(r,o),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function id(s){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:n,remove:r,update:o}}var nd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sd=`#ifdef USE_ALPHAHASH
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
#endif`,rd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ad=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,od=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ld=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cd=`#ifdef USE_AOMAP
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
#endif`,hd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ud=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,dd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,md=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gd=`#ifdef USE_IRIDESCENCE
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
#endif`,_d=`#ifdef USE_BUMPMAP
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
#endif`,xd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Md=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ed=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ad=`#define PI 3.141592653589793
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
} // validated`,Td=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cd=`vec3 transformedNormal = objectNormal;
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
#endif`,Rd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ld=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Id="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ud=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nd=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Fd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Od=`#ifdef USE_ENVMAP
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
#endif`,Bd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kd=`#ifdef USE_ENVMAP
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
#endif`,zd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xd=`#ifdef USE_GRADIENTMAP
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
}`,Wd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$d=`uniform bool receiveShadow;
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
#endif`,jd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
#endif`,Kd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tf=`PhysicalMaterial material;
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
#endif`,ef=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
}`,nf=`
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sf=`#if defined( RE_IndirectDiffuse )
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
#endif`,rf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,af=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,of=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,df=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ff=`#if defined( USE_POINTS_UV )
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
#endif`,pf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_f=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vf=`#ifdef USE_MORPHTARGETS
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
#endif`,yf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ef=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Af=`#ifdef USE_NORMALMAP
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
#endif`,Tf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Df=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,If=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Uf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ff=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Of=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,zf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hf=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Gf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xf=`#ifdef USE_SKINNING
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
#endif`,Wf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yf=`#ifdef USE_SKINNING
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
#endif`,qf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$f=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zf=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jf=`#ifdef USE_TRANSMISSION
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
#endif`,Qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ip=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const np=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sp=`uniform sampler2D t2D;
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
}`,rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ap=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cp=`#include <common>
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
}`,hp=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,up=`#define DISTANCE
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
}`,dp=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mp=`uniform float scale;
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
}`,gp=`uniform vec3 diffuse;
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
}`,_p=`#include <common>
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
}`,xp=`uniform vec3 diffuse;
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
}`,vp=`#define LAMBERT
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
}`,yp=`#define LAMBERT
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
}`,Mp=`#define MATCAP
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
}`,Sp=`#define MATCAP
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
}`,bp=`#define NORMAL
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
}`,Ep=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wp=`#define PHONG
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
}`,Ap=`#define PHONG
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
}`,Tp=`#define STANDARD
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
}`,Cp=`#define STANDARD
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
}`,Rp=`#define TOON
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
}`,Pp=`#define TOON
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
}`,Dp=`uniform float size;
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
}`,Lp=`uniform vec3 diffuse;
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
}`,Ip=`#include <common>
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
}`,Up=`uniform vec3 color;
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
}`,Np=`uniform float rotation;
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
}`,Fp=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:nd,alphahash_pars_fragment:sd,alphamap_fragment:rd,alphamap_pars_fragment:ad,alphatest_fragment:od,alphatest_pars_fragment:ld,aomap_fragment:cd,aomap_pars_fragment:hd,batching_pars_vertex:ud,batching_vertex:dd,begin_vertex:fd,beginnormal_vertex:pd,bsdfs:md,iridescence_fragment:gd,bumpmap_pars_fragment:_d,clipping_planes_fragment:xd,clipping_planes_pars_fragment:vd,clipping_planes_pars_vertex:yd,clipping_planes_vertex:Md,color_fragment:Sd,color_pars_fragment:bd,color_pars_vertex:Ed,color_vertex:wd,common:Ad,cube_uv_reflection_fragment:Td,defaultnormal_vertex:Cd,displacementmap_pars_vertex:Rd,displacementmap_vertex:Pd,emissivemap_fragment:Dd,emissivemap_pars_fragment:Ld,colorspace_fragment:Id,colorspace_pars_fragment:Ud,envmap_fragment:Nd,envmap_common_pars_fragment:Fd,envmap_pars_fragment:Od,envmap_pars_vertex:Bd,envmap_physical_pars_fragment:jd,envmap_vertex:kd,fog_vertex:zd,fog_pars_vertex:Vd,fog_fragment:Hd,fog_pars_fragment:Gd,gradientmap_pars_fragment:Xd,lightmap_pars_fragment:Wd,lights_lambert_fragment:Yd,lights_lambert_pars_fragment:qd,lights_pars_begin:$d,lights_toon_fragment:Kd,lights_toon_pars_fragment:Zd,lights_phong_fragment:Jd,lights_phong_pars_fragment:Qd,lights_physical_fragment:tf,lights_physical_pars_fragment:ef,lights_fragment_begin:nf,lights_fragment_maps:sf,lights_fragment_end:rf,logdepthbuf_fragment:af,logdepthbuf_pars_fragment:of,logdepthbuf_pars_vertex:lf,logdepthbuf_vertex:cf,map_fragment:hf,map_pars_fragment:uf,map_particle_fragment:df,map_particle_pars_fragment:ff,metalnessmap_fragment:pf,metalnessmap_pars_fragment:mf,morphinstance_vertex:gf,morphcolor_vertex:_f,morphnormal_vertex:xf,morphtarget_pars_vertex:vf,morphtarget_vertex:yf,normal_fragment_begin:Mf,normal_fragment_maps:Sf,normal_pars_fragment:bf,normal_pars_vertex:Ef,normal_vertex:wf,normalmap_pars_fragment:Af,clearcoat_normal_fragment_begin:Tf,clearcoat_normal_fragment_maps:Cf,clearcoat_pars_fragment:Rf,iridescence_pars_fragment:Pf,opaque_fragment:Df,packing:Lf,premultiplied_alpha_fragment:If,project_vertex:Uf,dithering_fragment:Nf,dithering_pars_fragment:Ff,roughnessmap_fragment:Of,roughnessmap_pars_fragment:Bf,shadowmap_pars_fragment:kf,shadowmap_pars_vertex:zf,shadowmap_vertex:Vf,shadowmask_pars_fragment:Hf,skinbase_vertex:Gf,skinning_pars_vertex:Xf,skinning_vertex:Wf,skinnormal_vertex:Yf,specularmap_fragment:qf,specularmap_pars_fragment:$f,tonemapping_fragment:jf,tonemapping_pars_fragment:Kf,transmission_fragment:Zf,transmission_pars_fragment:Jf,uv_pars_fragment:Qf,uv_pars_vertex:tp,uv_vertex:ep,worldpos_vertex:ip,background_vert:np,background_frag:sp,backgroundCube_vert:rp,backgroundCube_frag:ap,cube_vert:op,cube_frag:lp,depth_vert:cp,depth_frag:hp,distanceRGBA_vert:up,distanceRGBA_frag:dp,equirect_vert:fp,equirect_frag:pp,linedashed_vert:mp,linedashed_frag:gp,meshbasic_vert:_p,meshbasic_frag:xp,meshlambert_vert:vp,meshlambert_frag:yp,meshmatcap_vert:Mp,meshmatcap_frag:Sp,meshnormal_vert:bp,meshnormal_frag:Ep,meshphong_vert:wp,meshphong_frag:Ap,meshphysical_vert:Tp,meshphysical_frag:Cp,meshtoon_vert:Rp,meshtoon_frag:Pp,points_vert:Dp,points_frag:Lp,shadow_vert:Ip,shadow_frag:Up,sprite_vert:Np,sprite_frag:Fp},ht={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},vi={basic:{uniforms:Oe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Oe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Jt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Oe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Oe([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Oe([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Jt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Oe([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Oe([ht.points,ht.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Oe([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Oe([ht.common,ht.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Oe([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Oe([ht.sprite,ht.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Oe([ht.common,ht.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Oe([ht.lights,ht.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};vi.physical={uniforms:Oe([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const rr={r:0,b:0,g:0},mn=new Si,Op=new pe;function Bp(s,t,e,i,n,r,o){const a=new Jt(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?e:t).get(x)),x}function _(v){let x=!1;const A=g(v);A===null?p(a,c):A&&A.isColor&&(p(A,1),x=!0);const S=s.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(v,x){const A=g(x);A&&(A.isCubeTexture||A.mapping===Ir)?(h===void 0&&(h=new ni(new ds(1,1,1),new Vi({name:"BackgroundCubeMaterial",uniforms:cs(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),mn.copy(x.backgroundRotation),mn.x*=-1,mn.y*=-1,mn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(mn.y*=-1,mn.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Op.makeRotationFromEuler(mn)),h.material.toneMapped=ee.getTransfer(A.colorSpace)!==oe,(u!==A||d!==A.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=A,d=A.version,f=s.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new ni(new Is(2,2),new Vi({name:"BackgroundMaterial",uniforms:cs(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=ee.getTransfer(A.colorSpace)!==oe,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=A,d=A.version,f=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,x){v.getRGB(rr,Dc(s)),i.buffers.color.setClear(rr.r,rr.g,rr.b,x,o)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:_,addToRenderList:m,dispose:M}}function kp(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=d(null);let r=n,o=!1;function a(w,P,O,U,L){let I=!1;const B=u(U,O,P);r!==B&&(r=B,l(r.object)),I=f(w,U,O,L),I&&g(w,U,O,L),L!==null&&t.update(L,s.ELEMENT_ARRAY_BUFFER),(I||o)&&(o=!1,x(w,P,O,U),L!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function c(){return s.createVertexArray()}function l(w){return s.bindVertexArray(w)}function h(w){return s.deleteVertexArray(w)}function u(w,P,O){const U=O.wireframe===!0;let L=i[w.id];L===void 0&&(L={},i[w.id]=L);let I=L[P.id];I===void 0&&(I={},L[P.id]=I);let B=I[U];return B===void 0&&(B=d(c()),I[U]=B),B}function d(w){const P=[],O=[],U=[];for(let L=0;L<e;L++)P[L]=0,O[L]=0,U[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:U,object:w,attributes:{},index:null}}function f(w,P,O,U){const L=r.attributes,I=P.attributes;let B=0;const G=O.getAttributes();for(const H in G)if(G[H].location>=0){const nt=L[H];let ot=I[H];if(ot===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(ot=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(ot=w.instanceColor)),nt===void 0||nt.attribute!==ot||ot&&nt.data!==ot.data)return!0;B++}return r.attributesNum!==B||r.index!==U}function g(w,P,O,U){const L={},I=P.attributes;let B=0;const G=O.getAttributes();for(const H in G)if(G[H].location>=0){let nt=I[H];nt===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(nt=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(nt=w.instanceColor));const ot={};ot.attribute=nt,nt&&nt.data&&(ot.data=nt.data),L[H]=ot,B++}r.attributes=L,r.attributesNum=B,r.index=U}function _(){const w=r.newAttributes;for(let P=0,O=w.length;P<O;P++)w[P]=0}function m(w){p(w,0)}function p(w,P){const O=r.newAttributes,U=r.enabledAttributes,L=r.attributeDivisors;O[w]=1,U[w]===0&&(s.enableVertexAttribArray(w),U[w]=1),L[w]!==P&&(s.vertexAttribDivisor(w,P),L[w]=P)}function M(){const w=r.newAttributes,P=r.enabledAttributes;for(let O=0,U=P.length;O<U;O++)P[O]!==w[O]&&(s.disableVertexAttribArray(O),P[O]=0)}function v(w,P,O,U,L,I,B){B===!0?s.vertexAttribIPointer(w,P,O,L,I):s.vertexAttribPointer(w,P,O,U,L,I)}function x(w,P,O,U){_();const L=U.attributes,I=O.getAttributes(),B=P.defaultAttributeValues;for(const G in I){const H=I[G];if(H.location>=0){let Z=L[G];if(Z===void 0&&(G==="instanceMatrix"&&w.instanceMatrix&&(Z=w.instanceMatrix),G==="instanceColor"&&w.instanceColor&&(Z=w.instanceColor)),Z!==void 0){const nt=Z.normalized,ot=Z.itemSize,vt=t.get(Z);if(vt===void 0)continue;const at=vt.buffer,W=vt.type,K=vt.bytesPerElement,mt=W===s.INT||W===s.UNSIGNED_INT||Z.gpuType===Mo;if(Z.isInterleavedBufferAttribute){const lt=Z.data,_t=lt.stride,wt=Z.offset;if(lt.isInstancedInterleavedBuffer){for(let Rt=0;Rt<H.locationSize;Rt++)p(H.location+Rt,lt.meshPerAttribute);w.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Rt=0;Rt<H.locationSize;Rt++)m(H.location+Rt);s.bindBuffer(s.ARRAY_BUFFER,at);for(let Rt=0;Rt<H.locationSize;Rt++)v(H.location+Rt,ot/H.locationSize,W,nt,_t*K,(wt+ot/H.locationSize*Rt)*K,mt)}else{if(Z.isInstancedBufferAttribute){for(let lt=0;lt<H.locationSize;lt++)p(H.location+lt,Z.meshPerAttribute);w.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let lt=0;lt<H.locationSize;lt++)m(H.location+lt);s.bindBuffer(s.ARRAY_BUFFER,at);for(let lt=0;lt<H.locationSize;lt++)v(H.location+lt,ot/H.locationSize,W,nt,ot*K,ot/H.locationSize*lt*K,mt)}}else if(B!==void 0){const nt=B[G];if(nt!==void 0)switch(nt.length){case 2:s.vertexAttrib2fv(H.location,nt);break;case 3:s.vertexAttrib3fv(H.location,nt);break;case 4:s.vertexAttrib4fv(H.location,nt);break;default:s.vertexAttrib1fv(H.location,nt)}}}}M()}function A(){C();for(const w in i){const P=i[w];for(const O in P){const U=P[O];for(const L in U)h(U[L].object),delete U[L];delete P[O]}delete i[w]}}function S(w){if(i[w.id]===void 0)return;const P=i[w.id];for(const O in P){const U=P[O];for(const L in U)h(U[L].object),delete U[L];delete P[O]}delete i[w.id]}function b(w){for(const P in i){const O=i[P];if(O[w.id]===void 0)continue;const U=O[w.id];for(const L in U)h(U[L].object),delete U[L];delete O[w.id]}}function C(){E(),o=!0,r!==n&&(r=n,l(r.object))}function E(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:C,resetDefaultState:E,dispose:A,releaseStatesOfGeometry:S,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function zp(s,t,e){let i;function n(l){i=l}function r(l,h){s.drawArrays(i,l,h),e.update(h,i,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(i,l,h,u),e.update(h,i,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,i,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,i,1)}}this.setMode=n,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Vp(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(b){return!(b!==gi&&i.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const C=b===Ds&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==zi&&i.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Li&&!C)}function c(b){if(b==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,S=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:A,maxSamples:S}}function Hp(s){const t=this;let e=null,i=0,n=!1,r=!1;const o=new $i,a=new Ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!n||g===null||g.length===0||r&&!m)r?h(null):l();else{const M=r?0:i,v=M*4;let x=p.clippingState||null;c.value=x,x=h(g,d,v,f);for(let A=0;A!==v;++A)x[A]=e[A];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,x=f;v!==_;++v,x+=4)o.copy(u[v]).applyMatrix4(M,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Gp(s){let t=new WeakMap;function e(o,a){return a===Ua?o.mapping=ns:a===Na&&(o.mapping=ss),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ua||a===Na)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Ou(c.height);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",n),e(l.texture,o.mapping)}else return null}}return o}function n(o){const a=o.target;a.removeEventListener("dispose",n);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const qn=4,wl=[.125,.215,.35,.446,.526,.582],vn=20,ha=new Bc,Al=new Jt;let ua=null,da=0,fa=0,pa=!1;const _n=(1+Math.sqrt(5))/2,Gn=1/_n,Tl=[new X(-_n,Gn,0),new X(_n,Gn,0),new X(-Gn,0,_n),new X(Gn,0,_n),new X(0,_n,-Gn),new X(0,_n,Gn),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class Cl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){ua=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),fa=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,n,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ua,da,fa),this._renderer.xr.enabled=pa,t.scissorTest=!1,ar(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ns||t.mapping===ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ua=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),fa=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Xe,minFilter:Xe,generateMipmaps:!1,type:Ds,format:gi,colorSpace:os,depthBuffer:!1},n=Rl(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rl(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xp(r)),this._blurMaterial=Wp(r,t,e)}return n}_compileMaterial(t){const e=new ni(this._lodPlanes[0],t);this._renderer.compile(e,ha)}_sceneToCubeUV(t,e,i,n){const a=new Ze(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Al),h.toneMapping=nn,h.autoClear=!1;const f=new Sr({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),g=new ni(new ds,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(Al),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):M===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const v=this._cubeSize;ar(n,M*v,p>2?v:0,v,v),h.setRenderTarget(n),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===ns||t.mapping===ss;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pl());const r=n?this._cubemapMaterial:this._equirectMaterial,o=new ni(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;ar(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,ha)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const n=this._lodPlanes.length;for(let r=1;r<n;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Tl[(n-r-1)%Tl.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,n,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,n,"latitudinal",r),this._halfBlur(o,t,i,i,n,"longitudinal",r)}_halfBlur(t,e,i,n,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ni(this._lodPlanes[n],l),d=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*vn-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):vn;m>vn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vn}`);const p=[];let M=0;for(let b=0;b<vn;++b){const C=b/_,E=Math.exp(-C*C/2);p.push(E),b===0?M+=E:b<m&&(M+=2*E)}for(let b=0;b<p.length;b++)p[b]=p[b]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-i;const x=this._sizeLods[n],A=3*x*(n>v-qn?n-v+qn:0),S=4*(this._cubeSize-x);ar(e,A,S,3*x,2*x),c.setRenderTarget(e),c.render(u,ha)}}function Xp(s){const t=[],e=[],i=[];let n=s;const r=s-qn+1+wl.length;for(let o=0;o<r;o++){const a=Math.pow(2,n);e.push(a);let c=1/a;o>s-qn?c=wl[o-s+qn-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*f),v=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let S=0;S<f;S++){const b=S%3*2/3-1,C=S>2?0:-1,E=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];M.set(E,_*g*S),v.set(d,m*g*S);const w=[S,S,S,S,S,S];x.set(w,p*g*S)}const A=new bi;A.setAttribute("position",new si(M,_)),A.setAttribute("uv",new si(v,m)),A.setAttribute("faceIndex",new si(x,p)),t.push(A),n>qn&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Rl(s,t,e){const i=new En(s,t,e);return i.texture.mapping=Ir,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ar(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function Wp(s,t,e){const i=new Float32Array(vn),n=new X(0,1,0);return new Vi({name:"SphericalGaussianBlur",defines:{n:vn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Do(),fragmentShader:`

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
		`,blending:en,depthTest:!1,depthWrite:!1})}function Pl(){return new Vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Do(),fragmentShader:`

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
		`,blending:en,depthTest:!1,depthWrite:!1})}function Dl(){return new Vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Do(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:en,depthTest:!1,depthWrite:!1})}function Do(){return`

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
	`}function Yp(s){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ua||c===Na,h=c===ns||c===ss;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Cl(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&n(f)?(e===null&&(e=new Cl(s)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function n(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function qp(s){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&Xn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function $p(s,t,e,i){const n={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete n[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return n[d.id]===!0||(d.addEventListener("dispose",o),n[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const f in d)t.update(d[f],s.ARRAY_BUFFER)}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const M=f.array;_=f.version;for(let v=0,x=M.length;v<x;v+=3){const A=M[v+0],S=M[v+1],b=M[v+2];d.push(A,S,S,b,b,A)}}else if(g!==void 0){const M=g.array;_=g.version;for(let v=0,x=M.length/3-1;v<x;v+=3){const A=v+0,S=v+1,b=v+2;d.push(A,S,S,b,b,A)}}else return;const m=new(Ec(d)?Pc:Rc)(d,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function jp(s,t,e){let i;function n(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){s.drawElements(i,f,r,d*o),e.update(f,i,1)}function l(d,f,g){g!==0&&(s.drawElementsInstanced(i,f,r,d*o,g),e.update(f,i,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,i,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M]*_[M];e.update(p,i,1)}}this.setMode=n,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Kp(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Zp(s,t,e){const i=new WeakMap,n=new _e;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==u){let w=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",w)};var f=w;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let A=a.attributes.position.count*x,S=1;A>t.maxTextureSize&&(S=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const b=new Float32Array(A*S*4*u),C=new Ac(b,A,S,u);C.type=Li,C.needsUpdate=!0;const E=x*4;for(let P=0;P<u;P++){const O=p[P],U=M[P],L=v[P],I=A*S*4*P;for(let B=0;B<O.count;B++){const G=B*E;g===!0&&(n.fromBufferAttribute(O,B),b[I+G+0]=n.x,b[I+G+1]=n.y,b[I+G+2]=n.z,b[I+G+3]=0),_===!0&&(n.fromBufferAttribute(U,B),b[I+G+4]=n.x,b[I+G+5]=n.y,b[I+G+6]=n.z,b[I+G+7]=0),m===!0&&(n.fromBufferAttribute(L,B),b[I+G+8]=n.x,b[I+G+9]=n.y,b[I+G+10]=n.z,b[I+G+11]=L.itemSize===4?n.w:1)}}d={count:u,texture:C,size:new Ht(A,S)},i.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Jp(s,t,e,i){let n=new WeakMap;function r(c){const l=i.render.frame,h=c.geometry,u=t.get(c,h);if(n.get(u)!==l&&(t.update(u),n.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),n.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),n.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;n.get(d)!==l&&(d.update(),n.set(d,l))}return u}function o(){n=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const zc=new ri,Ll=new Nc(1,1),Vc=new Ac,Hc=new Mu,Gc=new Ic,Il=[],Ul=[],Nl=new Float32Array(16),Fl=new Float32Array(9),Ol=new Float32Array(4);function fs(s,t,e){const i=s[0];if(i<=0||i>0)return s;const n=t*e;let r=Il[n];if(r===void 0&&(r=new Float32Array(n),Il[n]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function be(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Ee(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function Nr(s,t){let e=Ul[t];e===void 0&&(e=new Int32Array(t),Ul[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function Qp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function tm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;s.uniform2fv(this.addr,t),Ee(e,t)}}function em(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;s.uniform3fv(this.addr,t),Ee(e,t)}}function im(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;s.uniform4fv(this.addr,t),Ee(e,t)}}function nm(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(be(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(be(e,i))return;Ol.set(i),s.uniformMatrix2fv(this.addr,!1,Ol),Ee(e,i)}}function sm(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(be(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(be(e,i))return;Fl.set(i),s.uniformMatrix3fv(this.addr,!1,Fl),Ee(e,i)}}function rm(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(be(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(be(e,i))return;Nl.set(i),s.uniformMatrix4fv(this.addr,!1,Nl),Ee(e,i)}}function am(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function om(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;s.uniform2iv(this.addr,t),Ee(e,t)}}function lm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;s.uniform3iv(this.addr,t),Ee(e,t)}}function cm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;s.uniform4iv(this.addr,t),Ee(e,t)}}function hm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function um(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;s.uniform2uiv(this.addr,t),Ee(e,t)}}function dm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;s.uniform3uiv(this.addr,t),Ee(e,t)}}function fm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;s.uniform4uiv(this.addr,t),Ee(e,t)}}function pm(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(Ll.compareFunction=Sc,r=Ll):r=zc,e.setTexture2D(t||r,n)}function mm(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Hc,n)}function gm(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Gc,n)}function _m(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Vc,n)}function xm(s){switch(s){case 5126:return Qp;case 35664:return tm;case 35665:return em;case 35666:return im;case 35674:return nm;case 35675:return sm;case 35676:return rm;case 5124:case 35670:return am;case 35667:case 35671:return om;case 35668:case 35672:return lm;case 35669:case 35673:return cm;case 5125:return hm;case 36294:return um;case 36295:return dm;case 36296:return fm;case 35678:case 36198:case 36298:case 36306:case 35682:return pm;case 35679:case 36299:case 36307:return mm;case 35680:case 36300:case 36308:case 36293:return gm;case 36289:case 36303:case 36311:case 36292:return _m}}function vm(s,t){s.uniform1fv(this.addr,t)}function ym(s,t){const e=fs(t,this.size,2);s.uniform2fv(this.addr,e)}function Mm(s,t){const e=fs(t,this.size,3);s.uniform3fv(this.addr,e)}function Sm(s,t){const e=fs(t,this.size,4);s.uniform4fv(this.addr,e)}function bm(s,t){const e=fs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Em(s,t){const e=fs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function wm(s,t){const e=fs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Am(s,t){s.uniform1iv(this.addr,t)}function Tm(s,t){s.uniform2iv(this.addr,t)}function Cm(s,t){s.uniform3iv(this.addr,t)}function Rm(s,t){s.uniform4iv(this.addr,t)}function Pm(s,t){s.uniform1uiv(this.addr,t)}function Dm(s,t){s.uniform2uiv(this.addr,t)}function Lm(s,t){s.uniform3uiv(this.addr,t)}function Im(s,t){s.uniform4uiv(this.addr,t)}function Um(s,t,e){const i=this.cache,n=t.length,r=Nr(e,n);be(i,r)||(s.uniform1iv(this.addr,r),Ee(i,r));for(let o=0;o!==n;++o)e.setTexture2D(t[o]||zc,r[o])}function Nm(s,t,e){const i=this.cache,n=t.length,r=Nr(e,n);be(i,r)||(s.uniform1iv(this.addr,r),Ee(i,r));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||Hc,r[o])}function Fm(s,t,e){const i=this.cache,n=t.length,r=Nr(e,n);be(i,r)||(s.uniform1iv(this.addr,r),Ee(i,r));for(let o=0;o!==n;++o)e.setTextureCube(t[o]||Gc,r[o])}function Om(s,t,e){const i=this.cache,n=t.length,r=Nr(e,n);be(i,r)||(s.uniform1iv(this.addr,r),Ee(i,r));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||Vc,r[o])}function Bm(s){switch(s){case 5126:return vm;case 35664:return ym;case 35665:return Mm;case 35666:return Sm;case 35674:return bm;case 35675:return Em;case 35676:return wm;case 5124:case 35670:return Am;case 35667:case 35671:return Tm;case 35668:case 35672:return Cm;case 35669:case 35673:return Rm;case 5125:return Pm;case 36294:return Dm;case 36295:return Lm;case 36296:return Im;case 35678:case 36198:case 36298:case 36306:case 35682:return Um;case 35679:case 36299:case 36307:return Nm;case 35680:case 36300:case 36308:case 36293:return Fm;case 36289:case 36303:case 36311:case 36292:return Om}}class km{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=xm(e.type)}}class zm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Bm(e.type)}}class Vm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let r=0,o=n.length;r!==o;++r){const a=n[r];a.setValue(t,e[a.id],i)}}}const ma=/(\w+)(\])?(\[|\.)?/g;function Bl(s,t){s.seq.push(t),s.map[t.id]=t}function Hm(s,t,e){const i=s.name,n=i.length;for(ma.lastIndex=0;;){const r=ma.exec(i),o=ma.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===n){Bl(e,l===void 0?new km(a,s,t):new zm(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Vm(a),Bl(e,u)),e=u}}}class gr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const r=t.getActiveUniform(e,n),o=t.getUniformLocation(e,r.name);Hm(r,o,this)}}setValue(t,e,i,n){const r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,r=t.length;n!==r;++n){const o=t[n];o.id in e&&i.push(o)}return i}}function kl(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const Gm=37297;let Xm=0;function Wm(s,t){const e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=n;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const zl=new Ot;function Ym(s){ee._getMatrix(zl,ee.workingColorSpace,s);const t=`mat3( ${zl.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(s)){case vr:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Vl(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),n=s.getShaderInfoLog(t).trim();if(i&&n==="")return"";const r=/ERROR: 0:(\d+)/.exec(n);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+n+`

`+Wm(s.getShaderSource(t),o)}else return n}function qm(s,t){const e=Ym(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function $m(s,t){let e;switch(t){case Th:e="Linear";break;case Ch:e="Reinhard";break;case Rh:e="Cineon";break;case Ph:e="ACESFilmic";break;case Lh:e="AgX";break;case Ih:e="Neutral";break;case Dh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const or=new X;function jm(){ee.getLuminanceCoefficients(or);const s=or.x.toFixed(4),t=or.y.toFixed(4),e=or.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Km(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ys).join(`
`)}function Zm(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Jm(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=s.getActiveAttrib(t,n),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function ys(s){return s!==""}function Hl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gl(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Qm=/^[ \t]*#include +<([\w\d./]+)>/gm;function co(s){return s.replace(Qm,eg)}const tg=new Map;function eg(s,t){let e=zt[t];if(e===void 0){const i=tg.get(t);if(i!==void 0)e=zt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return co(e)}const ig=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xl(s){return s.replace(ig,ng)}function ng(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Wl(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function sg(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===oc?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===hh?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Di&&(t="SHADOWMAP_TYPE_VSM"),t}function rg(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ns:case ss:t="ENVMAP_TYPE_CUBE";break;case Ir:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ag(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ss:t="ENVMAP_MODE_REFRACTION";break}return t}function og(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case cc:t="ENVMAP_BLENDING_MULTIPLY";break;case wh:t="ENVMAP_BLENDING_MIX";break;case Ah:t="ENVMAP_BLENDING_ADD";break}return t}function lg(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function cg(s,t,e,i){const n=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=sg(e),l=rg(e),h=ag(e),u=og(e),d=lg(e),f=Km(e),g=Zm(r),_=n.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ys).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ys).join(`
`),p.length>0&&(p+=`
`)):(m=[Wl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ys).join(`
`),p=[Wl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==nn?"#define TONE_MAPPING":"",e.toneMapping!==nn?zt.tonemapping_pars_fragment:"",e.toneMapping!==nn?$m("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,qm("linearToOutputTexel",e.outputColorSpace),jm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ys).join(`
`)),o=co(o),o=Hl(o,e),o=Gl(o,e),a=co(a),a=Hl(a,e),a=Gl(a,e),o=Xl(o),a=Xl(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Zo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=M+m+o,x=M+p+a,A=kl(n,n.VERTEX_SHADER,v),S=kl(n,n.FRAGMENT_SHADER,x);n.attachShader(_,A),n.attachShader(_,S),e.index0AttributeName!==void 0?n.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function b(P){if(s.debug.checkShaderErrors){const O=n.getProgramInfoLog(_).trim(),U=n.getShaderInfoLog(A).trim(),L=n.getShaderInfoLog(S).trim();let I=!0,B=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(I=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,_,A,S);else{const G=Vl(n,A,"vertex"),H=Vl(n,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+G+`
`+H)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(U===""||L==="")&&(B=!1);B&&(P.diagnostics={runnable:I,programLog:O,vertexShader:{log:U,prefix:m},fragmentShader:{log:L,prefix:p}})}n.deleteShader(A),n.deleteShader(S),C=new gr(n,_),E=Jm(n,_)}let C;this.getUniforms=function(){return C===void 0&&b(this),C};let E;this.getAttributes=function(){return E===void 0&&b(this),E};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=n.getProgramParameter(_,Gm)),w},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Xm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=S,this}let hg=0;class ug{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new dg(t),e.set(t,i)),i}}class dg{constructor(t){this.id=hg++,this.code=t,this.usedTimes=0}}function fg(s,t,e,i,n,r,o){const a=new Tc,c=new ug,l=new Set,h=[],u=n.logarithmicDepthBuffer,d=n.vertexTextures;let f=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,w,P,O,U){const L=O.fog,I=U.geometry,B=E.isMeshStandardMaterial?O.environment:null,G=(E.isMeshStandardMaterial?e:t).get(E.envMap||B),H=G&&G.mapping===Ir?G.image.height:null,Z=g[E.type];E.precision!==null&&(f=n.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const nt=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ot=nt!==void 0?nt.length:0;let vt=0;I.morphAttributes.position!==void 0&&(vt=1),I.morphAttributes.normal!==void 0&&(vt=2),I.morphAttributes.color!==void 0&&(vt=3);let at,W,K,mt;if(Z){const re=vi[Z];at=re.vertexShader,W=re.fragmentShader}else at=E.vertexShader,W=E.fragmentShader,c.update(E),K=c.getVertexShaderID(E),mt=c.getFragmentShaderID(E);const lt=s.getRenderTarget(),_t=s.state.buffers.depth.getReversed(),wt=U.isInstancedMesh===!0,Rt=U.isBatchedMesh===!0,Qt=!!E.map,Vt=!!E.matcap,ue=!!G,N=!!E.aoMap,Pe=!!E.lightMap,Xt=!!E.bumpMap,Wt=!!E.normalMap,At=!!E.displacementMap,se=!!E.emissiveMap,Tt=!!E.metalnessMap,D=!!E.roughnessMap,T=E.anisotropy>0,Y=E.clearcoat>0,tt=E.dispersion>0,it=E.iridescence>0,Q=E.sheen>0,Ct=E.transmission>0,pt=T&&!!E.anisotropyMap,Mt=Y&&!!E.clearcoatMap,jt=Y&&!!E.clearcoatNormalMap,ct=Y&&!!E.clearcoatRoughnessMap,St=it&&!!E.iridescenceMap,Lt=it&&!!E.iridescenceThicknessMap,It=Q&&!!E.sheenColorMap,bt=Q&&!!E.sheenRoughnessMap,$t=!!E.specularMap,kt=!!E.specularColorMap,ce=!!E.specularIntensityMap,k=Ct&&!!E.transmissionMap,dt=Ct&&!!E.thicknessMap,j=!!E.gradientMap,et=!!E.alphaMap,xt=E.alphaTest>0,gt=!!E.alphaHash,Ft=!!E.extensions;let me=nn;E.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(me=s.toneMapping);const De={shaderID:Z,shaderType:E.type,shaderName:E.name,vertexShader:at,fragmentShader:W,defines:E.defines,customVertexShaderID:K,customFragmentShaderID:mt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Rt,batchingColor:Rt&&U._colorsTexture!==null,instancing:wt,instancingColor:wt&&U.instanceColor!==null,instancingMorph:wt&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:lt===null?s.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:os,alphaToCoverage:!!E.alphaToCoverage,map:Qt,matcap:Vt,envMap:ue,envMapMode:ue&&G.mapping,envMapCubeUVHeight:H,aoMap:N,lightMap:Pe,bumpMap:Xt,normalMap:Wt,displacementMap:d&&At,emissiveMap:se,normalMapObjectSpace:Wt&&E.normalMapType===Vh,normalMapTangentSpace:Wt&&E.normalMapType===Mc,metalnessMap:Tt,roughnessMap:D,anisotropy:T,anisotropyMap:pt,clearcoat:Y,clearcoatMap:Mt,clearcoatNormalMap:jt,clearcoatRoughnessMap:ct,dispersion:tt,iridescence:it,iridescenceMap:St,iridescenceThicknessMap:Lt,sheen:Q,sheenColorMap:It,sheenRoughnessMap:bt,specularMap:$t,specularColorMap:kt,specularIntensityMap:ce,transmission:Ct,transmissionMap:k,thicknessMap:dt,gradientMap:j,opaque:E.transparent===!1&&E.blending===Ui&&E.alphaToCoverage===!1,alphaMap:et,alphaTest:xt,alphaHash:gt,combine:E.combine,mapUv:Qt&&_(E.map.channel),aoMapUv:N&&_(E.aoMap.channel),lightMapUv:Pe&&_(E.lightMap.channel),bumpMapUv:Xt&&_(E.bumpMap.channel),normalMapUv:Wt&&_(E.normalMap.channel),displacementMapUv:At&&_(E.displacementMap.channel),emissiveMapUv:se&&_(E.emissiveMap.channel),metalnessMapUv:Tt&&_(E.metalnessMap.channel),roughnessMapUv:D&&_(E.roughnessMap.channel),anisotropyMapUv:pt&&_(E.anisotropyMap.channel),clearcoatMapUv:Mt&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:jt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:It&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:bt&&_(E.sheenRoughnessMap.channel),specularMapUv:$t&&_(E.specularMap.channel),specularColorMapUv:kt&&_(E.specularColorMap.channel),specularIntensityMapUv:ce&&_(E.specularIntensityMap.channel),transmissionMapUv:k&&_(E.transmissionMap.channel),thicknessMapUv:dt&&_(E.thicknessMap.channel),alphaMapUv:et&&_(E.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Wt||T),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!I.attributes.uv&&(Qt||et),fog:!!L,useFog:E.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:_t,skinning:U.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:vt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:me,decodeVideoTexture:Qt&&E.map.isVideoTexture===!0&&ee.getTransfer(E.map.colorSpace)===oe,decodeVideoTextureEmissive:se&&E.emissiveMap.isVideoTexture===!0&&ee.getTransfer(E.emissiveMap.colorSpace)===oe,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===fi,flipSided:E.side===We,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ft&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&E.extensions.multiDraw===!0||Rt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return De.vertexUv1s=l.has(1),De.vertexUv2s=l.has(2),De.vertexUv3s=l.has(3),l.clear(),De}function p(E){const w=[];if(E.shaderID?w.push(E.shaderID):(w.push(E.customVertexShaderID),w.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)w.push(P),w.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(M(w,E),v(w,E),w.push(s.outputColorSpace)),w.push(E.customProgramCacheKey),w.join()}function M(E,w){E.push(w.precision),E.push(w.outputColorSpace),E.push(w.envMapMode),E.push(w.envMapCubeUVHeight),E.push(w.mapUv),E.push(w.alphaMapUv),E.push(w.lightMapUv),E.push(w.aoMapUv),E.push(w.bumpMapUv),E.push(w.normalMapUv),E.push(w.displacementMapUv),E.push(w.emissiveMapUv),E.push(w.metalnessMapUv),E.push(w.roughnessMapUv),E.push(w.anisotropyMapUv),E.push(w.clearcoatMapUv),E.push(w.clearcoatNormalMapUv),E.push(w.clearcoatRoughnessMapUv),E.push(w.iridescenceMapUv),E.push(w.iridescenceThicknessMapUv),E.push(w.sheenColorMapUv),E.push(w.sheenRoughnessMapUv),E.push(w.specularMapUv),E.push(w.specularColorMapUv),E.push(w.specularIntensityMapUv),E.push(w.transmissionMapUv),E.push(w.thicknessMapUv),E.push(w.combine),E.push(w.fogExp2),E.push(w.sizeAttenuation),E.push(w.morphTargetsCount),E.push(w.morphAttributeCount),E.push(w.numDirLights),E.push(w.numPointLights),E.push(w.numSpotLights),E.push(w.numSpotLightMaps),E.push(w.numHemiLights),E.push(w.numRectAreaLights),E.push(w.numDirLightShadows),E.push(w.numPointLightShadows),E.push(w.numSpotLightShadows),E.push(w.numSpotLightShadowsWithMaps),E.push(w.numLightProbes),E.push(w.shadowMapType),E.push(w.toneMapping),E.push(w.numClippingPlanes),E.push(w.numClipIntersection),E.push(w.depthPacking)}function v(E,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),E.push(a.mask)}function x(E){const w=g[E.type];let P;if(w){const O=vi[w];P=Iu.clone(O.uniforms)}else P=E.uniforms;return P}function A(E,w){let P;for(let O=0,U=h.length;O<U;O++){const L=h[O];if(L.cacheKey===w){P=L,++P.usedTimes;break}}return P===void 0&&(P=new cg(s,w,E,r),h.push(P)),P}function S(E){if(--E.usedTimes===0){const w=h.indexOf(E);h[w]=h[h.length-1],h.pop(),E.destroy()}}function b(E){c.remove(E)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:A,releaseProgram:S,releaseShaderCache:b,programs:h,dispose:C}}function pg(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function i(o){s.delete(o)}function n(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function mg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Yl(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function ql(){const s=[];let t=0;const e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function o(u,d,f,g,_,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):e.push(p)}function c(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||mg),i.length>1&&i.sort(d||Yl),n.length>1&&n.sort(d||Yl)}function h(){for(let u=t,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:a,unshift:c,finish:h,sort:l}}function gg(){let s=new WeakMap;function t(i,n){const r=s.get(i);let o;return r===void 0?(o=new ql,s.set(i,[o])):n>=r.length?(o=new ql,r.push(o)):o=r[n],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function _g(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new X,color:new Jt};break;case"SpotLight":e={position:new X,direction:new X,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new X,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new X,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new X,halfWidth:new X,halfHeight:new X};break}return s[t.id]=e,e}}}function xg(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let vg=0;function yg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Mg(s){const t=new _g,e=xg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new X);const n=new X,r=new pe,o=new pe;function a(l){let h=0,u=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,M=0,v=0,x=0,A=0,S=0,b=0;l.sort(yg);for(let E=0,w=l.length;E<w;E++){const P=l[E],O=P.color,U=P.intensity,L=P.distance,I=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=O.r*U,u+=O.g*U,d+=O.b*U;else if(P.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(P.sh.coefficients[B],U);b++}else if(P.isDirectionalLight){const B=t.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const G=P.shadow,H=e.get(P);H.shadowIntensity=G.intensity,H.shadowBias=G.bias,H.shadowNormalBias=G.normalBias,H.shadowRadius=G.radius,H.shadowMapSize=G.mapSize,i.directionalShadow[f]=H,i.directionalShadowMap[f]=I,i.directionalShadowMatrix[f]=P.shadow.matrix,M++}i.directional[f]=B,f++}else if(P.isSpotLight){const B=t.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(O).multiplyScalar(U),B.distance=L,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,i.spot[_]=B;const G=P.shadow;if(P.map&&(i.spotLightMap[A]=P.map,A++,G.updateMatrices(P),P.castShadow&&S++),i.spotLightMatrix[_]=G.matrix,P.castShadow){const H=e.get(P);H.shadowIntensity=G.intensity,H.shadowBias=G.bias,H.shadowNormalBias=G.normalBias,H.shadowRadius=G.radius,H.shadowMapSize=G.mapSize,i.spotShadow[_]=H,i.spotShadowMap[_]=I,x++}_++}else if(P.isRectAreaLight){const B=t.get(P);B.color.copy(O).multiplyScalar(U),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=B,m++}else if(P.isPointLight){const B=t.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),B.distance=P.distance,B.decay=P.decay,P.castShadow){const G=P.shadow,H=e.get(P);H.shadowIntensity=G.intensity,H.shadowBias=G.bias,H.shadowNormalBias=G.normalBias,H.shadowRadius=G.radius,H.shadowMapSize=G.mapSize,H.shadowCameraNear=G.camera.near,H.shadowCameraFar=G.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=I,i.pointShadowMatrix[g]=P.shadow.matrix,v++}i.point[g]=B,g++}else if(P.isHemisphereLight){const B=t.get(P);B.skyColor.copy(P.color).multiplyScalar(U),B.groundColor.copy(P.groundColor).multiplyScalar(U),i.hemi[p]=B,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ht.LTC_FLOAT_1,i.rectAreaLTC2=ht.LTC_FLOAT_2):(i.rectAreaLTC1=ht.LTC_HALF_1,i.rectAreaLTC2=ht.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const C=i.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==M||C.numPointShadows!==v||C.numSpotShadows!==x||C.numSpotMaps!==A||C.numLightProbes!==b)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=x+A-S,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=b,C.directionalLength=f,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=M,C.numPointShadows=v,C.numSpotShadows=x,C.numSpotMaps=A,C.numLightProbes=b,i.version=vg++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const v=l[p];if(v.isDirectionalLight){const x=i.directional[u];x.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(n),x.direction.transformDirection(m),u++}else if(v.isSpotLight){const x=i.spot[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(n),x.direction.transformDirection(m),f++}else if(v.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:i}}function $l(s){const t=new Mg(s),e=[],i=[];function n(h){l.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Sg(s){let t=new WeakMap;function e(n,r=0){const o=t.get(n);let a;return o===void 0?(a=new $l(s),t.set(n,[a])):r>=o.length?(a=new $l(s),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const bg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Eg=`uniform sampler2D shadow_pass;
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
}`;function wg(s,t,e){let i=new Ro;const n=new Ht,r=new Ht,o=new _e,a=new Wu({depthPacking:zh}),c=new Yu,l={},h=e.maxTextureSize,u={[rn]:We,[We]:rn,[fi]:fi},d=new Vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:bg,fragmentShader:Eg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new bi;g.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ni(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oc;let p=this.type;this.render=function(S,b,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const E=s.getRenderTarget(),w=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),O=s.state;O.setBlending(en),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const U=p!==Di&&this.type===Di,L=p===Di&&this.type!==Di;for(let I=0,B=S.length;I<B;I++){const G=S[I],H=G.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;n.copy(H.mapSize);const Z=H.getFrameExtents();if(n.multiply(Z),r.copy(H.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/Z.x),n.x=r.x*Z.x,H.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/Z.y),n.y=r.y*Z.y,H.mapSize.y=r.y)),H.map===null||U===!0||L===!0){const ot=this.type!==Di?{minFilter:ke,magFilter:ke}:{};H.map!==null&&H.map.dispose(),H.map=new En(n.x,n.y,ot),H.map.texture.name=G.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const nt=H.getViewportCount();for(let ot=0;ot<nt;ot++){const vt=H.getViewport(ot);o.set(r.x*vt.x,r.y*vt.y,r.x*vt.z,r.y*vt.w),O.viewport(o),H.updateMatrices(G,ot),i=H.getFrustum(),x(b,C,H.camera,G,this.type)}H.isPointLightShadow!==!0&&this.type===Di&&M(H,C),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(E,w,P)};function M(S,b){const C=t.update(_);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new En(n.x,n.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(b,null,C,d,_,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(b,null,C,f,_,null)}function v(S,b,C,E){let w=null;const P=C.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)w=P;else if(w=C.isPointLight===!0?c:a,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const O=w.uuid,U=b.uuid;let L=l[O];L===void 0&&(L={},l[O]=L);let I=L[U];I===void 0&&(I=w.clone(),L[U]=I,b.addEventListener("dispose",A)),w=I}if(w.visible=b.visible,w.wireframe=b.wireframe,E===Di?w.side=b.shadowSide!==null?b.shadowSide:b.side:w.side=b.shadowSide!==null?b.shadowSide:u[b.side],w.alphaMap=b.alphaMap,w.alphaTest=b.alphaTest,w.map=b.map,w.clipShadows=b.clipShadows,w.clippingPlanes=b.clippingPlanes,w.clipIntersection=b.clipIntersection,w.displacementMap=b.displacementMap,w.displacementScale=b.displacementScale,w.displacementBias=b.displacementBias,w.wireframeLinewidth=b.wireframeLinewidth,w.linewidth=b.linewidth,C.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const O=s.properties.get(w);O.light=C}return w}function x(S,b,C,E,w){if(S.visible===!1)return;if(S.layers.test(b.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&w===Di)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,S.matrixWorld);const U=t.update(S),L=S.material;if(Array.isArray(L)){const I=U.groups;for(let B=0,G=I.length;B<G;B++){const H=I[B],Z=L[H.materialIndex];if(Z&&Z.visible){const nt=v(S,Z,E,w);S.onBeforeShadow(s,S,b,C,U,nt,H),s.renderBufferDirect(C,null,U,nt,S,H),S.onAfterShadow(s,S,b,C,U,nt,H)}}}else if(L.visible){const I=v(S,L,E,w);S.onBeforeShadow(s,S,b,C,U,I,null),s.renderBufferDirect(C,null,U,I,S,null),S.onAfterShadow(s,S,b,C,U,I,null)}}const O=S.children;for(let U=0,L=O.length;U<L;U++)x(O[U],b,C,E,w)}function A(S){S.target.removeEventListener("dispose",A);for(const C in l){const E=l[C],w=S.target.uuid;w in E&&(E[w].dispose(),delete E[w])}}}const Ag={[Ta]:Ca,[Ra]:La,[Pa]:Ia,[is]:Da,[Ca]:Ta,[La]:Ra,[Ia]:Pa,[Da]:is};function Tg(s,t){function e(){let k=!1;const dt=new _e;let j=null;const et=new _e(0,0,0,0);return{setMask:function(xt){j!==xt&&!k&&(s.colorMask(xt,xt,xt,xt),j=xt)},setLocked:function(xt){k=xt},setClear:function(xt,gt,Ft,me,De){De===!0&&(xt*=me,gt*=me,Ft*=me),dt.set(xt,gt,Ft,me),et.equals(dt)===!1&&(s.clearColor(xt,gt,Ft,me),et.copy(dt))},reset:function(){k=!1,j=null,et.set(-1,0,0,0)}}}function i(){let k=!1,dt=!1,j=null,et=null,xt=null;return{setReversed:function(gt){if(dt!==gt){const Ft=t.get("EXT_clip_control");dt?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT);const me=xt;xt=null,this.setClear(me)}dt=gt},getReversed:function(){return dt},setTest:function(gt){gt?lt(s.DEPTH_TEST):_t(s.DEPTH_TEST)},setMask:function(gt){j!==gt&&!k&&(s.depthMask(gt),j=gt)},setFunc:function(gt){if(dt&&(gt=Ag[gt]),et!==gt){switch(gt){case Ta:s.depthFunc(s.NEVER);break;case Ca:s.depthFunc(s.ALWAYS);break;case Ra:s.depthFunc(s.LESS);break;case is:s.depthFunc(s.LEQUAL);break;case Pa:s.depthFunc(s.EQUAL);break;case Da:s.depthFunc(s.GEQUAL);break;case La:s.depthFunc(s.GREATER);break;case Ia:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}et=gt}},setLocked:function(gt){k=gt},setClear:function(gt){xt!==gt&&(dt&&(gt=1-gt),s.clearDepth(gt),xt=gt)},reset:function(){k=!1,j=null,et=null,xt=null,dt=!1}}}function n(){let k=!1,dt=null,j=null,et=null,xt=null,gt=null,Ft=null,me=null,De=null;return{setTest:function(re){k||(re?lt(s.STENCIL_TEST):_t(s.STENCIL_TEST))},setMask:function(re){dt!==re&&!k&&(s.stencilMask(re),dt=re)},setFunc:function(re,oi,wi){(j!==re||et!==oi||xt!==wi)&&(s.stencilFunc(re,oi,wi),j=re,et=oi,xt=wi)},setOp:function(re,oi,wi){(gt!==re||Ft!==oi||me!==wi)&&(s.stencilOp(re,oi,wi),gt=re,Ft=oi,me=wi)},setLocked:function(re){k=re},setClear:function(re){De!==re&&(s.clearStencil(re),De=re)},reset:function(){k=!1,dt=null,j=null,et=null,xt=null,gt=null,Ft=null,me=null,De=null}}}const r=new e,o=new i,a=new n,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,M=null,v=null,x=null,A=null,S=null,b=new Jt(0,0,0),C=0,E=!1,w=null,P=null,O=null,U=null,L=null;const I=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,G=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(H)[1]),B=G>=1):H.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),B=G>=2);let Z=null,nt={};const ot=s.getParameter(s.SCISSOR_BOX),vt=s.getParameter(s.VIEWPORT),at=new _e().fromArray(ot),W=new _e().fromArray(vt);function K(k,dt,j,et){const xt=new Uint8Array(4),gt=s.createTexture();s.bindTexture(k,gt),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ft=0;Ft<j;Ft++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(dt,0,s.RGBA,1,1,et,0,s.RGBA,s.UNSIGNED_BYTE,xt):s.texImage2D(dt+Ft,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xt);return gt}const mt={};mt[s.TEXTURE_2D]=K(s.TEXTURE_2D,s.TEXTURE_2D,1),mt[s.TEXTURE_CUBE_MAP]=K(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[s.TEXTURE_2D_ARRAY]=K(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),mt[s.TEXTURE_3D]=K(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),lt(s.DEPTH_TEST),o.setFunc(is),Xt(!1),Wt(qo),lt(s.CULL_FACE),N(en);function lt(k){h[k]!==!0&&(s.enable(k),h[k]=!0)}function _t(k){h[k]!==!1&&(s.disable(k),h[k]=!1)}function wt(k,dt){return u[k]!==dt?(s.bindFramebuffer(k,dt),u[k]=dt,k===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=dt),k===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=dt),!0):!1}function Rt(k,dt){let j=f,et=!1;if(k){j=d.get(dt),j===void 0&&(j=[],d.set(dt,j));const xt=k.textures;if(j.length!==xt.length||j[0]!==s.COLOR_ATTACHMENT0){for(let gt=0,Ft=xt.length;gt<Ft;gt++)j[gt]=s.COLOR_ATTACHMENT0+gt;j.length=xt.length,et=!0}}else j[0]!==s.BACK&&(j[0]=s.BACK,et=!0);et&&s.drawBuffers(j)}function Qt(k){return g!==k?(s.useProgram(k),g=k,!0):!1}const Vt={[xn]:s.FUNC_ADD,[uh]:s.FUNC_SUBTRACT,[dh]:s.FUNC_REVERSE_SUBTRACT};Vt[fh]=s.MIN,Vt[ph]=s.MAX;const ue={[mh]:s.ZERO,[cr]:s.ONE,[gh]:s.SRC_COLOR,[Aa]:s.SRC_ALPHA,[yh]:s.SRC_ALPHA_SATURATE,[lc]:s.DST_COLOR,[_h]:s.DST_ALPHA,[wa]:s.ONE_MINUS_SRC_COLOR,[As]:s.ONE_MINUS_SRC_ALPHA,[vh]:s.ONE_MINUS_DST_COLOR,[xh]:s.ONE_MINUS_DST_ALPHA,[Mh]:s.CONSTANT_COLOR,[Sh]:s.ONE_MINUS_CONSTANT_COLOR,[bh]:s.CONSTANT_ALPHA,[Eh]:s.ONE_MINUS_CONSTANT_ALPHA};function N(k,dt,j,et,xt,gt,Ft,me,De,re){if(k===en){_===!0&&(_t(s.BLEND),_=!1);return}if(_===!1&&(lt(s.BLEND),_=!0),k!==Ea){if(k!==m||re!==E){if((p!==xn||x!==xn)&&(s.blendEquation(s.FUNC_ADD),p=xn,x=xn),re)switch(k){case Ui:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ba:s.blendFunc(s.ONE,s.ONE);break;case $o:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case jo:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Ui:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ba:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case $o:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case jo:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}M=null,v=null,A=null,S=null,b.set(0,0,0),C=0,m=k,E=re}return}xt=xt||dt,gt=gt||j,Ft=Ft||et,(dt!==p||xt!==x)&&(s.blendEquationSeparate(Vt[dt],Vt[xt]),p=dt,x=xt),(j!==M||et!==v||gt!==A||Ft!==S)&&(s.blendFuncSeparate(ue[j],ue[et],ue[gt],ue[Ft]),M=j,v=et,A=gt,S=Ft),(me.equals(b)===!1||De!==C)&&(s.blendColor(me.r,me.g,me.b,De),b.copy(me),C=De),m=k,E=!1}function Pe(k,dt){k.side===fi?_t(s.CULL_FACE):lt(s.CULL_FACE);let j=k.side===We;dt&&(j=!j),Xt(j),k.blending===Ui&&k.transparent===!1?N(en):N(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);const et=k.stencilWrite;a.setTest(et),et&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),se(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?lt(s.SAMPLE_ALPHA_TO_COVERAGE):_t(s.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(k){w!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),w=k)}function Wt(k){k!==lh?(lt(s.CULL_FACE),k!==P&&(k===qo?s.cullFace(s.BACK):k===ch?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):_t(s.CULL_FACE),P=k}function At(k){k!==O&&(B&&s.lineWidth(k),O=k)}function se(k,dt,j){k?(lt(s.POLYGON_OFFSET_FILL),(U!==dt||L!==j)&&(s.polygonOffset(dt,j),U=dt,L=j)):_t(s.POLYGON_OFFSET_FILL)}function Tt(k){k?lt(s.SCISSOR_TEST):_t(s.SCISSOR_TEST)}function D(k){k===void 0&&(k=s.TEXTURE0+I-1),Z!==k&&(s.activeTexture(k),Z=k)}function T(k,dt,j){j===void 0&&(Z===null?j=s.TEXTURE0+I-1:j=Z);let et=nt[j];et===void 0&&(et={type:void 0,texture:void 0},nt[j]=et),(et.type!==k||et.texture!==dt)&&(Z!==j&&(s.activeTexture(j),Z=j),s.bindTexture(k,dt||mt[k]),et.type=k,et.texture=dt)}function Y(){const k=nt[Z];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function tt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function it(){try{s.compressedTexImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Q(){try{s.texSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ct(){try{s.texSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Mt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function jt(){try{s.texStorage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ct(){try{s.texStorage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function St(){try{s.texImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Lt(){try{s.texImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function It(k){at.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),at.copy(k))}function bt(k){W.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),W.copy(k))}function $t(k,dt){let j=l.get(dt);j===void 0&&(j=new WeakMap,l.set(dt,j));let et=j.get(k);et===void 0&&(et=s.getUniformBlockIndex(dt,k.name),j.set(k,et))}function kt(k,dt){const et=l.get(dt).get(k);c.get(dt)!==et&&(s.uniformBlockBinding(dt,et,k.__bindingPointIndex),c.set(dt,et))}function ce(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},Z=null,nt={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,M=null,v=null,x=null,A=null,S=null,b=new Jt(0,0,0),C=0,E=!1,w=null,P=null,O=null,U=null,L=null,at.set(0,0,s.canvas.width,s.canvas.height),W.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:lt,disable:_t,bindFramebuffer:wt,drawBuffers:Rt,useProgram:Qt,setBlending:N,setMaterial:Pe,setFlipSided:Xt,setCullFace:Wt,setLineWidth:At,setPolygonOffset:se,setScissorTest:Tt,activeTexture:D,bindTexture:T,unbindTexture:Y,compressedTexImage2D:tt,compressedTexImage3D:it,texImage2D:St,texImage3D:Lt,updateUBOMapping:$t,uniformBlockBinding:kt,texStorage2D:jt,texStorage3D:ct,texSubImage2D:Q,texSubImage3D:Ct,compressedTexSubImage2D:pt,compressedTexSubImage3D:Mt,scissor:It,viewport:bt,reset:ce}}function Cg(s,t,e,i,n,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ht,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,T){return f?new OffscreenCanvas(D,T):Mr("canvas")}function _(D,T,Y){let tt=1;const it=Tt(D);if((it.width>Y||it.height>Y)&&(tt=Y/Math.max(it.width,it.height)),tt<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Q=Math.floor(tt*it.width),Ct=Math.floor(tt*it.height);u===void 0&&(u=g(Q,Ct));const pt=T?g(Q,Ct):u;return pt.width=Q,pt.height=Ct,pt.getContext("2d").drawImage(D,0,0,Q,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+Q+"x"+Ct+")."),pt}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),D;return D}function m(D){return D.generateMipmaps}function p(D){s.generateMipmap(D)}function M(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(D,T,Y,tt,it=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Q=T;if(T===s.RED&&(Y===s.FLOAT&&(Q=s.R32F),Y===s.HALF_FLOAT&&(Q=s.R16F),Y===s.UNSIGNED_BYTE&&(Q=s.R8)),T===s.RED_INTEGER&&(Y===s.UNSIGNED_BYTE&&(Q=s.R8UI),Y===s.UNSIGNED_SHORT&&(Q=s.R16UI),Y===s.UNSIGNED_INT&&(Q=s.R32UI),Y===s.BYTE&&(Q=s.R8I),Y===s.SHORT&&(Q=s.R16I),Y===s.INT&&(Q=s.R32I)),T===s.RG&&(Y===s.FLOAT&&(Q=s.RG32F),Y===s.HALF_FLOAT&&(Q=s.RG16F),Y===s.UNSIGNED_BYTE&&(Q=s.RG8)),T===s.RG_INTEGER&&(Y===s.UNSIGNED_BYTE&&(Q=s.RG8UI),Y===s.UNSIGNED_SHORT&&(Q=s.RG16UI),Y===s.UNSIGNED_INT&&(Q=s.RG32UI),Y===s.BYTE&&(Q=s.RG8I),Y===s.SHORT&&(Q=s.RG16I),Y===s.INT&&(Q=s.RG32I)),T===s.RGB_INTEGER&&(Y===s.UNSIGNED_BYTE&&(Q=s.RGB8UI),Y===s.UNSIGNED_SHORT&&(Q=s.RGB16UI),Y===s.UNSIGNED_INT&&(Q=s.RGB32UI),Y===s.BYTE&&(Q=s.RGB8I),Y===s.SHORT&&(Q=s.RGB16I),Y===s.INT&&(Q=s.RGB32I)),T===s.RGBA_INTEGER&&(Y===s.UNSIGNED_BYTE&&(Q=s.RGBA8UI),Y===s.UNSIGNED_SHORT&&(Q=s.RGBA16UI),Y===s.UNSIGNED_INT&&(Q=s.RGBA32UI),Y===s.BYTE&&(Q=s.RGBA8I),Y===s.SHORT&&(Q=s.RGBA16I),Y===s.INT&&(Q=s.RGBA32I)),T===s.RGB&&Y===s.UNSIGNED_INT_5_9_9_9_REV&&(Q=s.RGB9_E5),T===s.RGBA){const Ct=it?vr:ee.getTransfer(tt);Y===s.FLOAT&&(Q=s.RGBA32F),Y===s.HALF_FLOAT&&(Q=s.RGBA16F),Y===s.UNSIGNED_BYTE&&(Q=Ct===oe?s.SRGB8_ALPHA8:s.RGBA8),Y===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),Y===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function x(D,T){let Y;return D?T===null||T===bn||T===rs?Y=s.DEPTH24_STENCIL8:T===Li?Y=s.DEPTH32F_STENCIL8:T===Ts&&(Y=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===bn||T===rs?Y=s.DEPTH_COMPONENT24:T===Li?Y=s.DEPTH_COMPONENT32F:T===Ts&&(Y=s.DEPTH_COMPONENT16),Y}function A(D,T){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==ke&&D.minFilter!==Xe?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function S(D){const T=D.target;T.removeEventListener("dispose",S),C(T),T.isVideoTexture&&h.delete(T)}function b(D){const T=D.target;T.removeEventListener("dispose",b),w(T)}function C(D){const T=i.get(D);if(T.__webglInit===void 0)return;const Y=D.source,tt=d.get(Y);if(tt){const it=tt[T.__cacheKey];it.usedTimes--,it.usedTimes===0&&E(D),Object.keys(tt).length===0&&d.delete(Y)}i.remove(D)}function E(D){const T=i.get(D);s.deleteTexture(T.__webglTexture);const Y=D.source,tt=d.get(Y);delete tt[T.__cacheKey],o.memory.textures--}function w(D){const T=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(T.__webglFramebuffer[tt]))for(let it=0;it<T.__webglFramebuffer[tt].length;it++)s.deleteFramebuffer(T.__webglFramebuffer[tt][it]);else s.deleteFramebuffer(T.__webglFramebuffer[tt]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[tt])}else{if(Array.isArray(T.__webglFramebuffer))for(let tt=0;tt<T.__webglFramebuffer.length;tt++)s.deleteFramebuffer(T.__webglFramebuffer[tt]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let tt=0;tt<T.__webglColorRenderbuffer.length;tt++)T.__webglColorRenderbuffer[tt]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[tt]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Y=D.textures;for(let tt=0,it=Y.length;tt<it;tt++){const Q=i.get(Y[tt]);Q.__webglTexture&&(s.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(Y[tt])}i.remove(D)}let P=0;function O(){P=0}function U(){const D=P;return D>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+n.maxTextures),P+=1,D}function L(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function I(D,T){const Y=i.get(D);if(D.isVideoTexture&&At(D),D.isRenderTargetTexture===!1&&D.version>0&&Y.__version!==D.version){const tt=D.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(Y,D,T);return}}e.bindTexture(s.TEXTURE_2D,Y.__webglTexture,s.TEXTURE0+T)}function B(D,T){const Y=i.get(D);if(D.version>0&&Y.__version!==D.version){W(Y,D,T);return}e.bindTexture(s.TEXTURE_2D_ARRAY,Y.__webglTexture,s.TEXTURE0+T)}function G(D,T){const Y=i.get(D);if(D.version>0&&Y.__version!==D.version){W(Y,D,T);return}e.bindTexture(s.TEXTURE_3D,Y.__webglTexture,s.TEXTURE0+T)}function H(D,T){const Y=i.get(D);if(D.version>0&&Y.__version!==D.version){K(Y,D,T);return}e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture,s.TEXTURE0+T)}const Z={[_r]:s.REPEAT,[Qi]:s.CLAMP_TO_EDGE,[xr]:s.MIRRORED_REPEAT},nt={[ke]:s.NEAREST,[Uh]:s.NEAREST_MIPMAP_NEAREST,[Bs]:s.NEAREST_MIPMAP_LINEAR,[Xe]:s.LINEAR,[Vr]:s.LINEAR_MIPMAP_NEAREST,[Mn]:s.LINEAR_MIPMAP_LINEAR},ot={[Hh]:s.NEVER,[$h]:s.ALWAYS,[Gh]:s.LESS,[Sc]:s.LEQUAL,[Xh]:s.EQUAL,[qh]:s.GEQUAL,[Wh]:s.GREATER,[Yh]:s.NOTEQUAL};function vt(D,T){if(T.type===Li&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Xe||T.magFilter===Vr||T.magFilter===Bs||T.magFilter===Mn||T.minFilter===Xe||T.minFilter===Vr||T.minFilter===Bs||T.minFilter===Mn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,Z[T.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,Z[T.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,Z[T.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,nt[T.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,nt[T.minFilter]),T.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,ot[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ke||T.minFilter!==Bs&&T.minFilter!==Mn||T.type===Li&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");s.texParameterf(D,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,n.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function at(D,T){let Y=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",S));const tt=T.source;let it=d.get(tt);it===void 0&&(it={},d.set(tt,it));const Q=L(T);if(Q!==D.__cacheKey){it[Q]===void 0&&(it[Q]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),it[Q].usedTimes++;const Ct=it[D.__cacheKey];Ct!==void 0&&(it[D.__cacheKey].usedTimes--,Ct.usedTimes===0&&E(T)),D.__cacheKey=Q,D.__webglTexture=it[Q].texture}return Y}function W(D,T,Y){let tt=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(tt=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(tt=s.TEXTURE_3D);const it=at(D,T),Q=T.source;e.bindTexture(tt,D.__webglTexture,s.TEXTURE0+Y);const Ct=i.get(Q);if(Q.version!==Ct.__version||it===!0){e.activeTexture(s.TEXTURE0+Y);const pt=ee.getPrimaries(ee.workingColorSpace),Mt=T.colorSpace===Zi?null:ee.getPrimaries(T.colorSpace),jt=T.colorSpace===Zi||pt===Mt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let ct=_(T.image,!1,n.maxTextureSize);ct=se(T,ct);const St=r.convert(T.format,T.colorSpace),Lt=r.convert(T.type);let It=v(T.internalFormat,St,Lt,T.colorSpace,T.isVideoTexture);vt(tt,T);let bt;const $t=T.mipmaps,kt=T.isVideoTexture!==!0,ce=Ct.__version===void 0||it===!0,k=Q.dataReady,dt=A(T,ct);if(T.isDepthTexture)It=x(T.format===as,T.type),ce&&(kt?e.texStorage2D(s.TEXTURE_2D,1,It,ct.width,ct.height):e.texImage2D(s.TEXTURE_2D,0,It,ct.width,ct.height,0,St,Lt,null));else if(T.isDataTexture)if($t.length>0){kt&&ce&&e.texStorage2D(s.TEXTURE_2D,dt,It,$t[0].width,$t[0].height);for(let j=0,et=$t.length;j<et;j++)bt=$t[j],kt?k&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,bt.width,bt.height,St,Lt,bt.data):e.texImage2D(s.TEXTURE_2D,j,It,bt.width,bt.height,0,St,Lt,bt.data);T.generateMipmaps=!1}else kt?(ce&&e.texStorage2D(s.TEXTURE_2D,dt,It,ct.width,ct.height),k&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ct.width,ct.height,St,Lt,ct.data)):e.texImage2D(s.TEXTURE_2D,0,It,ct.width,ct.height,0,St,Lt,ct.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){kt&&ce&&e.texStorage3D(s.TEXTURE_2D_ARRAY,dt,It,$t[0].width,$t[0].height,ct.depth);for(let j=0,et=$t.length;j<et;j++)if(bt=$t[j],T.format!==gi)if(St!==null)if(kt){if(k)if(T.layerUpdates.size>0){const xt=El(bt.width,bt.height,T.format,T.type);for(const gt of T.layerUpdates){const Ft=bt.data.subarray(gt*xt/bt.data.BYTES_PER_ELEMENT,(gt+1)*xt/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,gt,bt.width,bt.height,1,St,Ft)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,bt.width,bt.height,ct.depth,St,bt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,j,It,bt.width,bt.height,ct.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?k&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,bt.width,bt.height,ct.depth,St,Lt,bt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,j,It,bt.width,bt.height,ct.depth,0,St,Lt,bt.data)}else{kt&&ce&&e.texStorage2D(s.TEXTURE_2D,dt,It,$t[0].width,$t[0].height);for(let j=0,et=$t.length;j<et;j++)bt=$t[j],T.format!==gi?St!==null?kt?k&&e.compressedTexSubImage2D(s.TEXTURE_2D,j,0,0,bt.width,bt.height,St,bt.data):e.compressedTexImage2D(s.TEXTURE_2D,j,It,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?k&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,bt.width,bt.height,St,Lt,bt.data):e.texImage2D(s.TEXTURE_2D,j,It,bt.width,bt.height,0,St,Lt,bt.data)}else if(T.isDataArrayTexture)if(kt){if(ce&&e.texStorage3D(s.TEXTURE_2D_ARRAY,dt,It,ct.width,ct.height,ct.depth),k)if(T.layerUpdates.size>0){const j=El(ct.width,ct.height,T.format,T.type);for(const et of T.layerUpdates){const xt=ct.data.subarray(et*j/ct.data.BYTES_PER_ELEMENT,(et+1)*j/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,et,ct.width,ct.height,1,St,Lt,xt)}T.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,St,Lt,ct.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,It,ct.width,ct.height,ct.depth,0,St,Lt,ct.data);else if(T.isData3DTexture)kt?(ce&&e.texStorage3D(s.TEXTURE_3D,dt,It,ct.width,ct.height,ct.depth),k&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,St,Lt,ct.data)):e.texImage3D(s.TEXTURE_3D,0,It,ct.width,ct.height,ct.depth,0,St,Lt,ct.data);else if(T.isFramebufferTexture){if(ce)if(kt)e.texStorage2D(s.TEXTURE_2D,dt,It,ct.width,ct.height);else{let j=ct.width,et=ct.height;for(let xt=0;xt<dt;xt++)e.texImage2D(s.TEXTURE_2D,xt,It,j,et,0,St,Lt,null),j>>=1,et>>=1}}else if($t.length>0){if(kt&&ce){const j=Tt($t[0]);e.texStorage2D(s.TEXTURE_2D,dt,It,j.width,j.height)}for(let j=0,et=$t.length;j<et;j++)bt=$t[j],kt?k&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,St,Lt,bt):e.texImage2D(s.TEXTURE_2D,j,It,St,Lt,bt);T.generateMipmaps=!1}else if(kt){if(ce){const j=Tt(ct);e.texStorage2D(s.TEXTURE_2D,dt,It,j.width,j.height)}k&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,St,Lt,ct)}else e.texImage2D(s.TEXTURE_2D,0,It,St,Lt,ct);m(T)&&p(tt),Ct.__version=Q.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function K(D,T,Y){if(T.image.length!==6)return;const tt=at(D,T),it=T.source;e.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+Y);const Q=i.get(it);if(it.version!==Q.__version||tt===!0){e.activeTexture(s.TEXTURE0+Y);const Ct=ee.getPrimaries(ee.workingColorSpace),pt=T.colorSpace===Zi?null:ee.getPrimaries(T.colorSpace),Mt=T.colorSpace===Zi||Ct===pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const jt=T.isCompressedTexture||T.image[0].isCompressedTexture,ct=T.image[0]&&T.image[0].isDataTexture,St=[];for(let et=0;et<6;et++)!jt&&!ct?St[et]=_(T.image[et],!0,n.maxCubemapSize):St[et]=ct?T.image[et].image:T.image[et],St[et]=se(T,St[et]);const Lt=St[0],It=r.convert(T.format,T.colorSpace),bt=r.convert(T.type),$t=v(T.internalFormat,It,bt,T.colorSpace),kt=T.isVideoTexture!==!0,ce=Q.__version===void 0||tt===!0,k=it.dataReady;let dt=A(T,Lt);vt(s.TEXTURE_CUBE_MAP,T);let j;if(jt){kt&&ce&&e.texStorage2D(s.TEXTURE_CUBE_MAP,dt,$t,Lt.width,Lt.height);for(let et=0;et<6;et++){j=St[et].mipmaps;for(let xt=0;xt<j.length;xt++){const gt=j[xt];T.format!==gi?It!==null?kt?k&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt,0,0,gt.width,gt.height,It,gt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt,$t,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt,0,0,gt.width,gt.height,It,bt,gt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt,$t,gt.width,gt.height,0,It,bt,gt.data)}}}else{if(j=T.mipmaps,kt&&ce){j.length>0&&dt++;const et=Tt(St[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,dt,$t,et.width,et.height)}for(let et=0;et<6;et++)if(ct){kt?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,St[et].width,St[et].height,It,bt,St[et].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,$t,St[et].width,St[et].height,0,It,bt,St[et].data);for(let xt=0;xt<j.length;xt++){const Ft=j[xt].image[et].image;kt?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt+1,0,0,Ft.width,Ft.height,It,bt,Ft.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt+1,$t,Ft.width,Ft.height,0,It,bt,Ft.data)}}else{kt?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,It,bt,St[et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,$t,It,bt,St[et]);for(let xt=0;xt<j.length;xt++){const gt=j[xt];kt?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt+1,0,0,It,bt,gt.image[et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt+1,$t,It,bt,gt.image[et])}}}m(T)&&p(s.TEXTURE_CUBE_MAP),Q.__version=it.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function mt(D,T,Y,tt,it,Q){const Ct=r.convert(Y.format,Y.colorSpace),pt=r.convert(Y.type),Mt=v(Y.internalFormat,Ct,pt,Y.colorSpace),jt=i.get(T),ct=i.get(Y);if(ct.__renderTarget=T,!jt.__hasExternalTextures){const St=Math.max(1,T.width>>Q),Lt=Math.max(1,T.height>>Q);it===s.TEXTURE_3D||it===s.TEXTURE_2D_ARRAY?e.texImage3D(it,Q,Mt,St,Lt,T.depth,0,Ct,pt,null):e.texImage2D(it,Q,Mt,St,Lt,0,Ct,pt,null)}e.bindFramebuffer(s.FRAMEBUFFER,D),Wt(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,tt,it,ct.__webglTexture,0,Xt(T)):(it===s.TEXTURE_2D||it>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,tt,it,ct.__webglTexture,Q),e.bindFramebuffer(s.FRAMEBUFFER,null)}function lt(D,T,Y){if(s.bindRenderbuffer(s.RENDERBUFFER,D),T.depthBuffer){const tt=T.depthTexture,it=tt&&tt.isDepthTexture?tt.type:null,Q=x(T.stencilBuffer,it),Ct=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pt=Xt(T);Wt(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pt,Q,T.width,T.height):Y?s.renderbufferStorageMultisample(s.RENDERBUFFER,pt,Q,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Q,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ct,s.RENDERBUFFER,D)}else{const tt=T.textures;for(let it=0;it<tt.length;it++){const Q=tt[it],Ct=r.convert(Q.format,Q.colorSpace),pt=r.convert(Q.type),Mt=v(Q.internalFormat,Ct,pt,Q.colorSpace),jt=Xt(T);Y&&Wt(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,jt,Mt,T.width,T.height):Wt(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,jt,Mt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Mt,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function _t(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const tt=i.get(T.depthTexture);tt.__renderTarget=T,(!tt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),I(T.depthTexture,0);const it=tt.__webglTexture,Q=Xt(T);if(T.depthTexture.format===Qn)Wt(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,it,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,it,0);else if(T.depthTexture.format===as)Wt(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,it,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function wt(D){const T=i.get(D),Y=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const tt=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),tt){const it=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,tt.removeEventListener("dispose",it)};tt.addEventListener("dispose",it),T.__depthDisposeCallback=it}T.__boundDepthTexture=tt}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");_t(T.__webglFramebuffer,D)}else if(Y){T.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[tt]),T.__webglDepthbuffer[tt]===void 0)T.__webglDepthbuffer[tt]=s.createRenderbuffer(),lt(T.__webglDepthbuffer[tt],D,!1);else{const it=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=T.__webglDepthbuffer[tt];s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,it,s.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),lt(T.__webglDepthbuffer,D,!1);else{const tt=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,it=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,it),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,it)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Rt(D,T,Y){const tt=i.get(D);T!==void 0&&mt(tt.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Y!==void 0&&wt(D)}function Qt(D){const T=D.texture,Y=i.get(D),tt=i.get(T);D.addEventListener("dispose",b);const it=D.textures,Q=D.isWebGLCubeRenderTarget===!0,Ct=it.length>1;if(Ct||(tt.__webglTexture===void 0&&(tt.__webglTexture=s.createTexture()),tt.__version=T.version,o.memory.textures++),Q){Y.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer[pt]=[];for(let Mt=0;Mt<T.mipmaps.length;Mt++)Y.__webglFramebuffer[pt][Mt]=s.createFramebuffer()}else Y.__webglFramebuffer[pt]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer=[];for(let pt=0;pt<T.mipmaps.length;pt++)Y.__webglFramebuffer[pt]=s.createFramebuffer()}else Y.__webglFramebuffer=s.createFramebuffer();if(Ct)for(let pt=0,Mt=it.length;pt<Mt;pt++){const jt=i.get(it[pt]);jt.__webglTexture===void 0&&(jt.__webglTexture=s.createTexture(),o.memory.textures++)}if(D.samples>0&&Wt(D)===!1){Y.__webglMultisampledFramebuffer=s.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let pt=0;pt<it.length;pt++){const Mt=it[pt];Y.__webglColorRenderbuffer[pt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Y.__webglColorRenderbuffer[pt]);const jt=r.convert(Mt.format,Mt.colorSpace),ct=r.convert(Mt.type),St=v(Mt.internalFormat,jt,ct,Mt.colorSpace,D.isXRRenderTarget===!0),Lt=Xt(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,Lt,St,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,Y.__webglColorRenderbuffer[pt])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(Y.__webglDepthRenderbuffer=s.createRenderbuffer(),lt(Y.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Q){e.bindTexture(s.TEXTURE_CUBE_MAP,tt.__webglTexture),vt(s.TEXTURE_CUBE_MAP,T);for(let pt=0;pt<6;pt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Mt=0;Mt<T.mipmaps.length;Mt++)mt(Y.__webglFramebuffer[pt][Mt],D,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Mt);else mt(Y.__webglFramebuffer[pt],D,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);m(T)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let pt=0,Mt=it.length;pt<Mt;pt++){const jt=it[pt],ct=i.get(jt);e.bindTexture(s.TEXTURE_2D,ct.__webglTexture),vt(s.TEXTURE_2D,jt),mt(Y.__webglFramebuffer,D,jt,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,0),m(jt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let pt=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(pt=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(pt,tt.__webglTexture),vt(pt,T),T.mipmaps&&T.mipmaps.length>0)for(let Mt=0;Mt<T.mipmaps.length;Mt++)mt(Y.__webglFramebuffer[Mt],D,T,s.COLOR_ATTACHMENT0,pt,Mt);else mt(Y.__webglFramebuffer,D,T,s.COLOR_ATTACHMENT0,pt,0);m(T)&&p(pt),e.unbindTexture()}D.depthBuffer&&wt(D)}function Vt(D){const T=D.textures;for(let Y=0,tt=T.length;Y<tt;Y++){const it=T[Y];if(m(it)){const Q=M(D),Ct=i.get(it).__webglTexture;e.bindTexture(Q,Ct),p(Q),e.unbindTexture()}}}const ue=[],N=[];function Pe(D){if(D.samples>0){if(Wt(D)===!1){const T=D.textures,Y=D.width,tt=D.height;let it=s.COLOR_BUFFER_BIT;const Q=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ct=i.get(D),pt=T.length>1;if(pt)for(let Mt=0;Mt<T.length;Mt++)e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Mt=0;Mt<T.length;Mt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(it|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(it|=s.STENCIL_BUFFER_BIT)),pt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ct.__webglColorRenderbuffer[Mt]);const jt=i.get(T[Mt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,jt,0)}s.blitFramebuffer(0,0,Y,tt,0,0,Y,tt,it,s.NEAREST),c===!0&&(ue.length=0,N.length=0,ue.push(s.COLOR_ATTACHMENT0+Mt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(ue.push(Q),N.push(Q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,N)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ue))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pt)for(let Mt=0;Mt<T.length;Mt++){e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.RENDERBUFFER,Ct.__webglColorRenderbuffer[Mt]);const jt=i.get(T[Mt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.TEXTURE_2D,jt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){const T=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Xt(D){return Math.min(n.maxSamples,D.samples)}function Wt(D){const T=i.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function At(D){const T=o.render.frame;h.get(D)!==T&&(h.set(D,T),D.update())}function se(D,T){const Y=D.colorSpace,tt=D.format,it=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Y!==os&&Y!==Zi&&(ee.getTransfer(Y)===oe?(tt!==gi||it!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),T}function Tt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=O,this.setTexture2D=I,this.setTexture2DArray=B,this.setTexture3D=G,this.setTextureCube=H,this.rebindTextures=Rt,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=Wt}function Rg(s,t){function e(i,n=Zi){let r;const o=ee.getTransfer(n);if(i===zi)return s.UNSIGNED_BYTE;if(i===So)return s.UNSIGNED_SHORT_4_4_4_4;if(i===bo)return s.UNSIGNED_SHORT_5_5_5_1;if(i===fc)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===uc)return s.BYTE;if(i===dc)return s.SHORT;if(i===Ts)return s.UNSIGNED_SHORT;if(i===Mo)return s.INT;if(i===bn)return s.UNSIGNED_INT;if(i===Li)return s.FLOAT;if(i===Ds)return s.HALF_FLOAT;if(i===pc)return s.ALPHA;if(i===mc)return s.RGB;if(i===gi)return s.RGBA;if(i===gc)return s.LUMINANCE;if(i===_c)return s.LUMINANCE_ALPHA;if(i===Qn)return s.DEPTH_COMPONENT;if(i===as)return s.DEPTH_STENCIL;if(i===xc)return s.RED;if(i===Eo)return s.RED_INTEGER;if(i===vc)return s.RG;if(i===wo)return s.RG_INTEGER;if(i===Ao)return s.RGBA_INTEGER;if(i===hr||i===ur||i===dr||i===fr)if(o===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ur)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===dr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===fr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fa||i===Oa||i===Ba||i===ka)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Fa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Oa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ba)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ka)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===za||i===Va||i===Ha)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===za||i===Va)return o===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ha)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ga||i===Xa||i===Wa||i===Ya||i===qa||i===$a||i===ja||i===Ka||i===Za||i===Ja||i===Qa||i===to||i===eo||i===io)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ga)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ya)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$a)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ja)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ka)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Za)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ja)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Qa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===to)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===eo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===io)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===pr||i===no||i===so)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===pr)return o===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===no)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===so)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===yc||i===ro||i===ao||i===oo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===pr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ro)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ao)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===oo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===rs?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}const Pg={type:"move"};class ga{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Pg)))}return a!==null&&(a.visible=n!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new sr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Dg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lg=`
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

}`;class Ig{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const n=new ri,r=t.properties.get(n);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Vi({vertexShader:Dg,fragmentShader:Lg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ni(new Is(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ug extends Tn{constructor(t,e){super();const i=this;let n=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=new Ig,m=e.getContextAttributes();let p=null,M=null;const v=[],x=[],A=new Ht;let S=null;const b=new Ze;b.viewport=new _e;const C=new Ze;C.viewport=new _e;const E=[b,C],w=new Ju;let P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let K=v[W];return K===void 0&&(K=new ga,v[W]=K),K.getTargetRaySpace()},this.getControllerGrip=function(W){let K=v[W];return K===void 0&&(K=new ga,v[W]=K),K.getGripSpace()},this.getHand=function(W){let K=v[W];return K===void 0&&(K=new ga,v[W]=K),K.getHandSpace()};function U(W){const K=x.indexOf(W.inputSource);if(K===-1)return;const mt=v[K];mt!==void 0&&(mt.update(W.inputSource,W.frame,l||o),mt.dispatchEvent({type:W.type,data:W.inputSource}))}function L(){n.removeEventListener("select",U),n.removeEventListener("selectstart",U),n.removeEventListener("selectend",U),n.removeEventListener("squeeze",U),n.removeEventListener("squeezestart",U),n.removeEventListener("squeezeend",U),n.removeEventListener("end",L),n.removeEventListener("inputsourceschange",I);for(let W=0;W<v.length;W++){const K=x[W];K!==null&&(x[W]=null,v[W].disconnect(K))}P=null,O=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,n=null,M=null,at.stop(),i.isPresenting=!1,t.setPixelRatio(S),t.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(W){if(n=W,n!==null){if(p=t.getRenderTarget(),n.addEventListener("select",U),n.addEventListener("selectstart",U),n.addEventListener("selectend",U),n.addEventListener("squeeze",U),n.addEventListener("squeezestart",U),n.addEventListener("squeezeend",U),n.addEventListener("end",L),n.addEventListener("inputsourceschange",I),m.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(A),n.renderState.layers===void 0){const K={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,e,K),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new En(f.framebufferWidth,f.framebufferHeight,{format:gi,type:zi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let K=null,mt=null,lt=null;m.depth&&(lt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=m.stencil?as:Qn,mt=m.stencil?rs:bn);const _t={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};u=new XRWebGLBinding(n,e),d=u.createProjectionLayer(_t),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new En(d.textureWidth,d.textureHeight,{format:gi,type:zi,depthTexture:new Nc(d.textureWidth,d.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await n.requestReferenceSpace(a),at.setContext(n),at.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function I(W){for(let K=0;K<W.removed.length;K++){const mt=W.removed[K],lt=x.indexOf(mt);lt>=0&&(x[lt]=null,v[lt].disconnect(mt))}for(let K=0;K<W.added.length;K++){const mt=W.added[K];let lt=x.indexOf(mt);if(lt===-1){for(let wt=0;wt<v.length;wt++)if(wt>=x.length){x.push(mt),lt=wt;break}else if(x[wt]===null){x[wt]=mt,lt=wt;break}if(lt===-1)break}const _t=v[lt];_t&&_t.connect(mt)}}const B=new X,G=new X;function H(W,K,mt){B.setFromMatrixPosition(K.matrixWorld),G.setFromMatrixPosition(mt.matrixWorld);const lt=B.distanceTo(G),_t=K.projectionMatrix.elements,wt=mt.projectionMatrix.elements,Rt=_t[14]/(_t[10]-1),Qt=_t[14]/(_t[10]+1),Vt=(_t[9]+1)/_t[5],ue=(_t[9]-1)/_t[5],N=(_t[8]-1)/_t[0],Pe=(wt[8]+1)/wt[0],Xt=Rt*N,Wt=Rt*Pe,At=lt/(-N+Pe),se=At*-N;if(K.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(se),W.translateZ(At),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),_t[10]===-1)W.projectionMatrix.copy(K.projectionMatrix),W.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const Tt=Rt+At,D=Qt+At,T=Xt-se,Y=Wt+(lt-se),tt=Vt*Qt/D*Tt,it=ue*Qt/D*Tt;W.projectionMatrix.makePerspective(T,Y,tt,it,Tt,D),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function Z(W,K){K===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(K.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(n===null)return;let K=W.near,mt=W.far;_.texture!==null&&(_.depthNear>0&&(K=_.depthNear),_.depthFar>0&&(mt=_.depthFar)),w.near=C.near=b.near=K,w.far=C.far=b.far=mt,(P!==w.near||O!==w.far)&&(n.updateRenderState({depthNear:w.near,depthFar:w.far}),P=w.near,O=w.far),b.layers.mask=W.layers.mask|2,C.layers.mask=W.layers.mask|4,w.layers.mask=b.layers.mask|C.layers.mask;const lt=W.parent,_t=w.cameras;Z(w,lt);for(let wt=0;wt<_t.length;wt++)Z(_t[wt],lt);_t.length===2?H(w,b,C):w.projectionMatrix.copy(b.projectionMatrix),nt(W,w,lt)};function nt(W,K,mt){mt===null?W.matrix.copy(K.matrixWorld):(W.matrix.copy(mt.matrixWorld),W.matrix.invert(),W.matrix.multiply(K.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(K.projectionMatrix),W.projectionMatrixInverse.copy(K.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=ls*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(W){c=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(w)};let ot=null;function vt(W,K){if(h=K.getViewerPose(l||o),g=K,h!==null){const mt=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let lt=!1;mt.length!==w.cameras.length&&(w.cameras.length=0,lt=!0);for(let wt=0;wt<mt.length;wt++){const Rt=mt[wt];let Qt=null;if(f!==null)Qt=f.getViewport(Rt);else{const ue=u.getViewSubImage(d,Rt);Qt=ue.viewport,wt===0&&(t.setRenderTargetTextures(M,ue.colorTexture,d.ignoreDepthValues?void 0:ue.depthStencilTexture),t.setRenderTarget(M))}let Vt=E[wt];Vt===void 0&&(Vt=new Ze,Vt.layers.enable(wt),Vt.viewport=new _e,E[wt]=Vt),Vt.matrix.fromArray(Rt.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(Rt.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),wt===0&&(w.matrix.copy(Vt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),lt===!0&&w.cameras.push(Vt)}const _t=n.enabledFeatures;if(_t&&_t.includes("depth-sensing")){const wt=u.getDepthInformation(mt[0]);wt&&wt.isValid&&wt.texture&&_.init(t,wt,n.renderState)}}for(let mt=0;mt<v.length;mt++){const lt=x[mt],_t=v[mt];lt!==null&&_t!==void 0&&_t.update(lt,K,l||o)}ot&&ot(W,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),g=null}const at=new kc;at.setAnimationLoop(vt),this.setAnimationLoop=function(W){ot=W},this.dispose=function(){}}}const gn=new Si,Ng=new pe;function Fg(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Dc(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,M,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,M,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===We&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===We&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),v=M.envMap,x=M.envMapRotation;v&&(m.envMap.value=v,gn.copy(x),gn.x*=-1,gn.y*=-1,gn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(gn.y*=-1,gn.z*=-1),m.envMapRotation.value.setFromMatrix4(Ng.makeRotationFromEuler(gn)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===We&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Og(s,t,e,i){let n={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,v){const x=v.program;i.uniformBlockBinding(M,x)}function l(M,v){let x=n[M.id];x===void 0&&(g(M),x=h(M),n[M.id]=x,M.addEventListener("dispose",m));const A=v.program;i.updateUBOMapping(M,A);const S=t.render.frame;r[M.id]!==S&&(d(M),r[M.id]=S)}function h(M){const v=u();M.__bindingPointIndex=v;const x=s.createBuffer(),A=M.__size,S=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,A,S),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,x),x}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const v=n[M.id],x=M.uniforms,A=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let S=0,b=x.length;S<b;S++){const C=Array.isArray(x[S])?x[S]:[x[S]];for(let E=0,w=C.length;E<w;E++){const P=C[E];if(f(P,S,E,A)===!0){const O=P.__offset,U=Array.isArray(P.value)?P.value:[P.value];let L=0;for(let I=0;I<U.length;I++){const B=U[I],G=_(B);typeof B=="number"||typeof B=="boolean"?(P.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,O+L,P.__data)):B.isMatrix3?(P.__data[0]=B.elements[0],P.__data[1]=B.elements[1],P.__data[2]=B.elements[2],P.__data[3]=0,P.__data[4]=B.elements[3],P.__data[5]=B.elements[4],P.__data[6]=B.elements[5],P.__data[7]=0,P.__data[8]=B.elements[6],P.__data[9]=B.elements[7],P.__data[10]=B.elements[8],P.__data[11]=0):(B.toArray(P.__data,L),L+=G.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(M,v,x,A){const S=M.value,b=v+"_"+x;if(A[b]===void 0)return typeof S=="number"||typeof S=="boolean"?A[b]=S:A[b]=S.clone(),!0;{const C=A[b];if(typeof S=="number"||typeof S=="boolean"){if(C!==S)return A[b]=S,!0}else if(C.equals(S)===!1)return C.copy(S),!0}return!1}function g(M){const v=M.uniforms;let x=0;const A=16;for(let b=0,C=v.length;b<C;b++){const E=Array.isArray(v[b])?v[b]:[v[b]];for(let w=0,P=E.length;w<P;w++){const O=E[w],U=Array.isArray(O.value)?O.value:[O.value];for(let L=0,I=U.length;L<I;L++){const B=U[L],G=_(B),H=x%A,Z=H%G.boundary,nt=H+Z;x+=Z,nt!==0&&A-nt<G.storage&&(x+=A-nt),O.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=G.storage}}}const S=x%A;return S>0&&(x+=A-S),M.__size=x,M.__cache={},this}function _(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function m(M){const v=M.target;v.removeEventListener("dispose",m);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(n[v.id]),delete n[v.id],delete r[v.id]}function p(){for(const M in n)s.deleteBuffer(n[M]);o=[],n={},r={}}return{bind:c,update:l,dispose:p}}class Bg{constructor(t={}){const{canvas:e=du(),context:i=null,depth:n=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const M=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ii,this.toneMapping=nn,this.toneMappingExposure=1;const x=this;let A=!1,S=0,b=0,C=null,E=-1,w=null;const P=new _e,O=new _e;let U=null;const L=new Jt(0);let I=0,B=e.width,G=e.height,H=1,Z=null,nt=null;const ot=new _e(0,0,B,G),vt=new _e(0,0,B,G);let at=!1;const W=new Ro;let K=!1,mt=!1;const lt=new pe,_t=new pe,wt=new X,Rt=new _e,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function ue(){return C===null?H:1}let N=i;function Pe(R,z){return e.getContext(R,z)}try{const R={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${yo}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",gt,!1),N===null){const z="webgl2";if(N=Pe(z,R),N===null)throw Pe(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Xt,Wt,At,se,Tt,D,T,Y,tt,it,Q,Ct,pt,Mt,jt,ct,St,Lt,It,bt,$t,kt,ce,k;function dt(){Xt=new qp(N),Xt.init(),kt=new Rg(N,Xt),Wt=new Vp(N,Xt,t,kt),At=new Tg(N,Xt),Wt.reverseDepthBuffer&&d&&At.buffers.depth.setReversed(!0),se=new Kp(N),Tt=new pg,D=new Cg(N,Xt,At,Tt,Wt,kt,se),T=new Gp(x),Y=new Yp(x),tt=new id(N),ce=new kp(N,tt),it=new $p(N,tt,se,ce),Q=new Jp(N,it,tt,se),It=new Zp(N,Wt,D),ct=new Hp(Tt),Ct=new fg(x,T,Y,Xt,Wt,ce,ct),pt=new Fg(x,Tt),Mt=new gg,jt=new Sg(Xt),Lt=new Bp(x,T,Y,At,Q,f,c),St=new wg(x,Q,Wt),k=new Og(N,se,Wt,At),bt=new zp(N,Xt,se),$t=new jp(N,Xt,se),se.programs=Ct.programs,x.capabilities=Wt,x.extensions=Xt,x.properties=Tt,x.renderLists=Mt,x.shadowMap=St,x.state=At,x.info=se}dt();const j=new Ug(x,N);this.xr=j,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const R=Xt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Xt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(R){R!==void 0&&(H=R,this.setSize(B,G,!1))},this.getSize=function(R){return R.set(B,G)},this.setSize=function(R,z,q=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,G=z,e.width=Math.floor(R*H),e.height=Math.floor(z*H),q===!0&&(e.style.width=R+"px",e.style.height=z+"px"),this.setViewport(0,0,R,z)},this.getDrawingBufferSize=function(R){return R.set(B*H,G*H).floor()},this.setDrawingBufferSize=function(R,z,q){B=R,G=z,H=q,e.width=Math.floor(R*q),e.height=Math.floor(z*q),this.setViewport(0,0,R,z)},this.getCurrentViewport=function(R){return R.copy(P)},this.getViewport=function(R){return R.copy(ot)},this.setViewport=function(R,z,q,$){R.isVector4?ot.set(R.x,R.y,R.z,R.w):ot.set(R,z,q,$),At.viewport(P.copy(ot).multiplyScalar(H).round())},this.getScissor=function(R){return R.copy(vt)},this.setScissor=function(R,z,q,$){R.isVector4?vt.set(R.x,R.y,R.z,R.w):vt.set(R,z,q,$),At.scissor(O.copy(vt).multiplyScalar(H).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(R){At.setScissorTest(at=R)},this.setOpaqueSort=function(R){Z=R},this.setTransparentSort=function(R){nt=R},this.getClearColor=function(R){return R.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(R=!0,z=!0,q=!0){let $=0;if(R){let V=!1;if(C!==null){const st=C.texture.format;V=st===Ao||st===wo||st===Eo}if(V){const st=C.texture.type,ft=st===zi||st===bn||st===Ts||st===rs||st===So||st===bo,yt=Lt.getClearColor(),Et=Lt.getClearAlpha(),Ut=yt.r,Nt=yt.g,Pt=yt.b;ft?(g[0]=Ut,g[1]=Nt,g[2]=Pt,g[3]=Et,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=Ut,_[1]=Nt,_[2]=Pt,_[3]=Et,N.clearBufferiv(N.COLOR,0,_))}else $|=N.COLOR_BUFFER_BIT}z&&($|=N.DEPTH_BUFFER_BIT),q&&($|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),Lt.dispose(),Mt.dispose(),jt.dispose(),Tt.dispose(),T.dispose(),Y.dispose(),Q.dispose(),ce.dispose(),k.dispose(),Ct.dispose(),j.dispose(),j.removeEventListener("sessionstart",zo),j.removeEventListener("sessionend",Vo),cn.stop()};function et(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const R=se.autoReset,z=St.enabled,q=St.autoUpdate,$=St.needsUpdate,V=St.type;dt(),se.autoReset=R,St.enabled=z,St.autoUpdate=q,St.needsUpdate=$,St.type=V}function gt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ft(R){const z=R.target;z.removeEventListener("dispose",Ft),me(z)}function me(R){De(R),Tt.remove(R)}function De(R){const z=Tt.get(R).programs;z!==void 0&&(z.forEach(function(q){Ct.releaseProgram(q)}),R.isShaderMaterial&&Ct.releaseShaderCache(R))}this.renderBufferDirect=function(R,z,q,$,V,st){z===null&&(z=Qt);const ft=V.isMesh&&V.matrixWorld.determinant()<0,yt=eh(R,z,q,$,V);At.setMaterial($,ft);let Et=q.index,Ut=1;if($.wireframe===!0){if(Et=it.getWireframeAttribute(q),Et===void 0)return;Ut=2}const Nt=q.drawRange,Pt=q.attributes.position;let Kt=Nt.start*Ut,ie=(Nt.start+Nt.count)*Ut;st!==null&&(Kt=Math.max(Kt,st.start*Ut),ie=Math.min(ie,(st.start+st.count)*Ut)),Et!==null?(Kt=Math.max(Kt,0),ie=Math.min(ie,Et.count)):Pt!=null&&(Kt=Math.max(Kt,0),ie=Math.min(ie,Pt.count));const ve=ie-Kt;if(ve<0||ve===1/0)return;ce.setup(V,$,yt,q,Et);let ge,te=bt;if(Et!==null&&(ge=tt.get(Et),te=$t,te.setIndex(ge)),V.isMesh)$.wireframe===!0?(At.setLineWidth($.wireframeLinewidth*ue()),te.setMode(N.LINES)):te.setMode(N.TRIANGLES);else if(V.isLine){let Dt=$.linewidth;Dt===void 0&&(Dt=1),At.setLineWidth(Dt*ue()),V.isLineSegments?te.setMode(N.LINES):V.isLineLoop?te.setMode(N.LINE_LOOP):te.setMode(N.LINE_STRIP)}else V.isPoints?te.setMode(N.POINTS):V.isSprite&&te.setMode(N.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)te.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Xt.get("WEBGL_multi_draw"))te.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Dt=V._multiDrawStarts,Ce=V._multiDrawCounts,ne=V._multiDrawCount,li=Et?tt.get(Et).bytesPerElement:1,Rn=Tt.get($).currentProgram.getUniforms();for(let Ye=0;Ye<ne;Ye++)Rn.setValue(N,"_gl_DrawID",Ye),te.render(Dt[Ye]/li,Ce[Ye])}else if(V.isInstancedMesh)te.renderInstances(Kt,ve,V.count);else if(q.isInstancedBufferGeometry){const Dt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ce=Math.min(q.instanceCount,Dt);te.renderInstances(Kt,ve,Ce)}else te.render(Kt,ve)};function re(R,z,q){R.transparent===!0&&R.side===fi&&R.forceSinglePass===!1?(R.side=We,R.needsUpdate=!0,Os(R,z,q),R.side=rn,R.needsUpdate=!0,Os(R,z,q),R.side=fi):Os(R,z,q)}this.compile=function(R,z,q=null){q===null&&(q=R),p=jt.get(q),p.init(z),v.push(p),q.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),R!==q&&R.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const $=new Set;return R.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const st=V.material;if(st)if(Array.isArray(st))for(let ft=0;ft<st.length;ft++){const yt=st[ft];re(yt,q,V),$.add(yt)}else re(st,q,V),$.add(st)}),v.pop(),p=null,$},this.compileAsync=function(R,z,q=null){const $=this.compile(R,z,q);return new Promise(V=>{function st(){if($.forEach(function(ft){Tt.get(ft).currentProgram.isReady()&&$.delete(ft)}),$.size===0){V(R);return}setTimeout(st,10)}Xt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let oi=null;function wi(R){oi&&oi(R)}function zo(){cn.stop()}function Vo(){cn.start()}const cn=new kc;cn.setAnimationLoop(wi),typeof self<"u"&&cn.setContext(self),this.setAnimationLoop=function(R){oi=R,j.setAnimationLoop(R),R===null?cn.stop():cn.start()},j.addEventListener("sessionstart",zo),j.addEventListener("sessionend",Vo),this.render=function(R,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(z),z=j.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,z,C),p=jt.get(R,v.length),p.init(z),v.push(p),_t.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),W.setFromProjectionMatrix(_t),mt=this.localClippingEnabled,K=ct.init(this.clippingPlanes,mt),m=Mt.get(R,M.length),m.init(),M.push(m),j.enabled===!0&&j.isPresenting===!0){const st=x.xr.getDepthSensingMesh();st!==null&&kr(st,z,-1/0,x.sortObjects)}kr(R,z,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(Z,nt),Vt=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Vt&&Lt.addToRenderList(m,R),this.info.render.frame++,K===!0&&ct.beginShadows();const q=p.state.shadowsArray;St.render(q,R,z),K===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=m.opaque,V=m.transmissive;if(p.setupLights(),z.isArrayCamera){const st=z.cameras;if(V.length>0)for(let ft=0,yt=st.length;ft<yt;ft++){const Et=st[ft];Go($,V,R,Et)}Vt&&Lt.render(R);for(let ft=0,yt=st.length;ft<yt;ft++){const Et=st[ft];Ho(m,R,Et,Et.viewport)}}else V.length>0&&Go($,V,R,z),Vt&&Lt.render(R),Ho(m,R,z);C!==null&&(D.updateMultisampleRenderTarget(C),D.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(x,R,z),ce.resetDefaultState(),E=-1,w=null,v.pop(),v.length>0?(p=v[v.length-1],K===!0&&ct.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function kr(R,z,q,$){if(R.visible===!1)return;if(R.layers.test(z.layers)){if(R.isGroup)q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(z);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||W.intersectsSprite(R)){$&&Rt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(_t);const ft=Q.update(R),yt=R.material;yt.visible&&m.push(R,ft,yt,q,Rt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||W.intersectsObject(R))){const ft=Q.update(R),yt=R.material;if($&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Rt.copy(R.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Rt.copy(ft.boundingSphere.center)),Rt.applyMatrix4(R.matrixWorld).applyMatrix4(_t)),Array.isArray(yt)){const Et=ft.groups;for(let Ut=0,Nt=Et.length;Ut<Nt;Ut++){const Pt=Et[Ut],Kt=yt[Pt.materialIndex];Kt&&Kt.visible&&m.push(R,ft,Kt,q,Rt.z,Pt)}}else yt.visible&&m.push(R,ft,yt,q,Rt.z,null)}}const st=R.children;for(let ft=0,yt=st.length;ft<yt;ft++)kr(st[ft],z,q,$)}function Ho(R,z,q,$){const V=R.opaque,st=R.transmissive,ft=R.transparent;p.setupLightsView(q),K===!0&&ct.setGlobalState(x.clippingPlanes,q),$&&At.viewport(P.copy($)),V.length>0&&Fs(V,z,q),st.length>0&&Fs(st,z,q),ft.length>0&&Fs(ft,z,q),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function Go(R,z,q,$){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new En(1,1,{generateMipmaps:!0,type:Xt.has("EXT_color_buffer_half_float")||Xt.has("EXT_color_buffer_float")?Ds:zi,minFilter:Mn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));const st=p.state.transmissionRenderTarget[$.id],ft=$.viewport||P;st.setSize(ft.z,ft.w);const yt=x.getRenderTarget();x.setRenderTarget(st),x.getClearColor(L),I=x.getClearAlpha(),I<1&&x.setClearColor(16777215,.5),x.clear(),Vt&&Lt.render(q);const Et=x.toneMapping;x.toneMapping=nn;const Ut=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),K===!0&&ct.setGlobalState(x.clippingPlanes,$),Fs(R,q,$),D.updateMultisampleRenderTarget(st),D.updateRenderTargetMipmap(st),Xt.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let Pt=0,Kt=z.length;Pt<Kt;Pt++){const ie=z[Pt],ve=ie.object,ge=ie.geometry,te=ie.material,Dt=ie.group;if(te.side===fi&&ve.layers.test($.layers)){const Ce=te.side;te.side=We,te.needsUpdate=!0,Xo(ve,q,$,ge,te,Dt),te.side=Ce,te.needsUpdate=!0,Nt=!0}}Nt===!0&&(D.updateMultisampleRenderTarget(st),D.updateRenderTargetMipmap(st))}x.setRenderTarget(yt),x.setClearColor(L,I),Ut!==void 0&&($.viewport=Ut),x.toneMapping=Et}function Fs(R,z,q){const $=z.isScene===!0?z.overrideMaterial:null;for(let V=0,st=R.length;V<st;V++){const ft=R[V],yt=ft.object,Et=ft.geometry,Ut=$===null?ft.material:$,Nt=ft.group;yt.layers.test(q.layers)&&Xo(yt,z,q,Et,Ut,Nt)}}function Xo(R,z,q,$,V,st){R.onBeforeRender(x,z,q,$,V,st),R.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),V.onBeforeRender(x,z,q,$,R,st),V.transparent===!0&&V.side===fi&&V.forceSinglePass===!1?(V.side=We,V.needsUpdate=!0,x.renderBufferDirect(q,z,$,V,R,st),V.side=rn,V.needsUpdate=!0,x.renderBufferDirect(q,z,$,V,R,st),V.side=fi):x.renderBufferDirect(q,z,$,V,R,st),R.onAfterRender(x,z,q,$,V,st)}function Os(R,z,q){z.isScene!==!0&&(z=Qt);const $=Tt.get(R),V=p.state.lights,st=p.state.shadowsArray,ft=V.state.version,yt=Ct.getParameters(R,V.state,st,z,q),Et=Ct.getProgramCacheKey(yt);let Ut=$.programs;$.environment=R.isMeshStandardMaterial?z.environment:null,$.fog=z.fog,$.envMap=(R.isMeshStandardMaterial?Y:T).get(R.envMap||$.environment),$.envMapRotation=$.environment!==null&&R.envMap===null?z.environmentRotation:R.envMapRotation,Ut===void 0&&(R.addEventListener("dispose",Ft),Ut=new Map,$.programs=Ut);let Nt=Ut.get(Et);if(Nt!==void 0){if($.currentProgram===Nt&&$.lightsStateVersion===ft)return Yo(R,yt),Nt}else yt.uniforms=Ct.getUniforms(R),R.onBeforeCompile(yt,x),Nt=Ct.acquireProgram(yt,Et),Ut.set(Et,Nt),$.uniforms=yt.uniforms;const Pt=$.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Pt.clippingPlanes=ct.uniform),Yo(R,yt),$.needsLights=nh(R),$.lightsStateVersion=ft,$.needsLights&&(Pt.ambientLightColor.value=V.state.ambient,Pt.lightProbe.value=V.state.probe,Pt.directionalLights.value=V.state.directional,Pt.directionalLightShadows.value=V.state.directionalShadow,Pt.spotLights.value=V.state.spot,Pt.spotLightShadows.value=V.state.spotShadow,Pt.rectAreaLights.value=V.state.rectArea,Pt.ltc_1.value=V.state.rectAreaLTC1,Pt.ltc_2.value=V.state.rectAreaLTC2,Pt.pointLights.value=V.state.point,Pt.pointLightShadows.value=V.state.pointShadow,Pt.hemisphereLights.value=V.state.hemi,Pt.directionalShadowMap.value=V.state.directionalShadowMap,Pt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Pt.spotShadowMap.value=V.state.spotShadowMap,Pt.spotLightMatrix.value=V.state.spotLightMatrix,Pt.spotLightMap.value=V.state.spotLightMap,Pt.pointShadowMap.value=V.state.pointShadowMap,Pt.pointShadowMatrix.value=V.state.pointShadowMatrix),$.currentProgram=Nt,$.uniformsList=null,Nt}function Wo(R){if(R.uniformsList===null){const z=R.currentProgram.getUniforms();R.uniformsList=gr.seqWithValue(z.seq,R.uniforms)}return R.uniformsList}function Yo(R,z){const q=Tt.get(R);q.outputColorSpace=z.outputColorSpace,q.batching=z.batching,q.batchingColor=z.batchingColor,q.instancing=z.instancing,q.instancingColor=z.instancingColor,q.instancingMorph=z.instancingMorph,q.skinning=z.skinning,q.morphTargets=z.morphTargets,q.morphNormals=z.morphNormals,q.morphColors=z.morphColors,q.morphTargetsCount=z.morphTargetsCount,q.numClippingPlanes=z.numClippingPlanes,q.numIntersection=z.numClipIntersection,q.vertexAlphas=z.vertexAlphas,q.vertexTangents=z.vertexTangents,q.toneMapping=z.toneMapping}function eh(R,z,q,$,V){z.isScene!==!0&&(z=Qt),D.resetTextureUnits();const st=z.fog,ft=$.isMeshStandardMaterial?z.environment:null,yt=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:os,Et=($.isMeshStandardMaterial?Y:T).get($.envMap||ft),Ut=$.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Nt=!!q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Pt=!!q.morphAttributes.position,Kt=!!q.morphAttributes.normal,ie=!!q.morphAttributes.color;let ve=nn;$.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ve=x.toneMapping);const ge=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,te=ge!==void 0?ge.length:0,Dt=Tt.get($),Ce=p.state.lights;if(K===!0&&(mt===!0||R!==w)){const Ne=R===w&&$.id===E;ct.setState($,R,Ne)}let ne=!1;$.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==Ce.state.version||Dt.outputColorSpace!==yt||V.isBatchedMesh&&Dt.batching===!1||!V.isBatchedMesh&&Dt.batching===!0||V.isBatchedMesh&&Dt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Dt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Dt.instancing===!1||!V.isInstancedMesh&&Dt.instancing===!0||V.isSkinnedMesh&&Dt.skinning===!1||!V.isSkinnedMesh&&Dt.skinning===!0||V.isInstancedMesh&&Dt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Dt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Dt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Dt.instancingMorph===!1&&V.morphTexture!==null||Dt.envMap!==Et||$.fog===!0&&Dt.fog!==st||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==ct.numPlanes||Dt.numIntersection!==ct.numIntersection)||Dt.vertexAlphas!==Ut||Dt.vertexTangents!==Nt||Dt.morphTargets!==Pt||Dt.morphNormals!==Kt||Dt.morphColors!==ie||Dt.toneMapping!==ve||Dt.morphTargetsCount!==te)&&(ne=!0):(ne=!0,Dt.__version=$.version);let li=Dt.currentProgram;ne===!0&&(li=Os($,z,V));let Rn=!1,Ye=!1,ps=!1;const de=li.getUniforms(),Je=Dt.uniforms;if(At.useProgram(li.program)&&(Rn=!0,Ye=!0,ps=!0),$.id!==E&&(E=$.id,Ye=!0),Rn||w!==R){At.buffers.depth.getReversed()?(lt.copy(R.projectionMatrix),pu(lt),mu(lt),de.setValue(N,"projectionMatrix",lt)):de.setValue(N,"projectionMatrix",R.projectionMatrix),de.setValue(N,"viewMatrix",R.matrixWorldInverse);const ze=de.map.cameraPosition;ze!==void 0&&ze.setValue(N,wt.setFromMatrixPosition(R.matrixWorld)),Wt.logarithmicDepthBuffer&&de.setValue(N,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&de.setValue(N,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,Ye=!0,ps=!0)}if(V.isSkinnedMesh){de.setOptional(N,V,"bindMatrix"),de.setOptional(N,V,"bindMatrixInverse");const Ne=V.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),de.setValue(N,"boneTexture",Ne.boneTexture,D))}V.isBatchedMesh&&(de.setOptional(N,V,"batchingTexture"),de.setValue(N,"batchingTexture",V._matricesTexture,D),de.setOptional(N,V,"batchingIdTexture"),de.setValue(N,"batchingIdTexture",V._indirectTexture,D),de.setOptional(N,V,"batchingColorTexture"),V._colorsTexture!==null&&de.setValue(N,"batchingColorTexture",V._colorsTexture,D));const Qe=q.morphAttributes;if((Qe.position!==void 0||Qe.normal!==void 0||Qe.color!==void 0)&&It.update(V,q,li),(Ye||Dt.receiveShadow!==V.receiveShadow)&&(Dt.receiveShadow=V.receiveShadow,de.setValue(N,"receiveShadow",V.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Je.envMap.value=Et,Je.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&z.environment!==null&&(Je.envMapIntensity.value=z.environmentIntensity),Ye&&(de.setValue(N,"toneMappingExposure",x.toneMappingExposure),Dt.needsLights&&ih(Je,ps),st&&$.fog===!0&&pt.refreshFogUniforms(Je,st),pt.refreshMaterialUniforms(Je,$,H,G,p.state.transmissionRenderTarget[R.id]),gr.upload(N,Wo(Dt),Je,D)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(gr.upload(N,Wo(Dt),Je,D),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&de.setValue(N,"center",V.center),de.setValue(N,"modelViewMatrix",V.modelViewMatrix),de.setValue(N,"normalMatrix",V.normalMatrix),de.setValue(N,"modelMatrix",V.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Ne=$.uniformsGroups;for(let ze=0,zr=Ne.length;ze<zr;ze++){const hn=Ne[ze];k.update(hn,li),k.bind(hn,li)}}return li}function ih(R,z){R.ambientLightColor.needsUpdate=z,R.lightProbe.needsUpdate=z,R.directionalLights.needsUpdate=z,R.directionalLightShadows.needsUpdate=z,R.pointLights.needsUpdate=z,R.pointLightShadows.needsUpdate=z,R.spotLights.needsUpdate=z,R.spotLightShadows.needsUpdate=z,R.rectAreaLights.needsUpdate=z,R.hemisphereLights.needsUpdate=z}function nh(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,z,q){Tt.get(R.texture).__webglTexture=z,Tt.get(R.depthTexture).__webglTexture=q;const $=Tt.get(R);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=q===void 0,$.__autoAllocateDepthBuffer||Xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,z){const q=Tt.get(R);q.__webglFramebuffer=z,q.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(R,z=0,q=0){C=R,S=z,b=q;let $=!0,V=null,st=!1,ft=!1;if(R){const Et=Tt.get(R);if(Et.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(N.FRAMEBUFFER,null),$=!1;else if(Et.__webglFramebuffer===void 0)D.setupRenderTarget(R);else if(Et.__hasExternalTextures)D.rebindTextures(R,Tt.get(R.texture).__webglTexture,Tt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Pt=R.depthTexture;if(Et.__boundDepthTexture!==Pt){if(Pt!==null&&Tt.has(Pt)&&(R.width!==Pt.image.width||R.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(R)}}const Ut=R.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(ft=!0);const Nt=Tt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Nt[z])?V=Nt[z][q]:V=Nt[z],st=!0):R.samples>0&&D.useMultisampledRTT(R)===!1?V=Tt.get(R).__webglMultisampledFramebuffer:Array.isArray(Nt)?V=Nt[q]:V=Nt,P.copy(R.viewport),O.copy(R.scissor),U=R.scissorTest}else P.copy(ot).multiplyScalar(H).floor(),O.copy(vt).multiplyScalar(H).floor(),U=at;if(At.bindFramebuffer(N.FRAMEBUFFER,V)&&$&&At.drawBuffers(R,V),At.viewport(P),At.scissor(O),At.setScissorTest(U),st){const Et=Tt.get(R.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+z,Et.__webglTexture,q)}else if(ft){const Et=Tt.get(R.texture),Ut=z||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Et.__webglTexture,q||0,Ut)}E=-1},this.readRenderTargetPixels=function(R,z,q,$,V,st,ft){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=Tt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ft!==void 0&&(yt=yt[ft]),yt){At.bindFramebuffer(N.FRAMEBUFFER,yt);try{const Et=R.texture,Ut=Et.format,Nt=Et.type;if(!Wt.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=R.width-$&&q>=0&&q<=R.height-V&&N.readPixels(z,q,$,V,kt.convert(Ut),kt.convert(Nt),st)}finally{const Et=C!==null?Tt.get(C).__webglFramebuffer:null;At.bindFramebuffer(N.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(R,z,q,$,V,st,ft){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=Tt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ft!==void 0&&(yt=yt[ft]),yt){const Et=R.texture,Ut=Et.format,Nt=Et.type;if(!Wt.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Wt.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=R.width-$&&q>=0&&q<=R.height-V){At.bindFramebuffer(N.FRAMEBUFFER,yt);const Pt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Pt),N.bufferData(N.PIXEL_PACK_BUFFER,st.byteLength,N.STREAM_READ),N.readPixels(z,q,$,V,kt.convert(Ut),kt.convert(Nt),0);const Kt=C!==null?Tt.get(C).__webglFramebuffer:null;At.bindFramebuffer(N.FRAMEBUFFER,Kt);const ie=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await fu(N,ie,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Pt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,st),N.deleteBuffer(Pt),N.deleteSync(ie),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,z=null,q=0){R.isTexture!==!0&&(Xn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,R=arguments[1]);const $=Math.pow(2,-q),V=Math.floor(R.image.width*$),st=Math.floor(R.image.height*$),ft=z!==null?z.x:0,yt=z!==null?z.y:0;D.setTexture2D(R,0),N.copyTexSubImage2D(N.TEXTURE_2D,q,0,0,ft,yt,V,st),At.unbindTexture()};const sh=N.createFramebuffer(),rh=N.createFramebuffer();this.copyTextureToTexture=function(R,z,q=null,$=null,V=0,st=null){R.isTexture!==!0&&(Xn("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,R=arguments[1],z=arguments[2],st=arguments[3]||0,q=null),st===null&&(V!==0?(Xn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),st=V,V=0):st=0);let ft,yt,Et,Ut,Nt,Pt,Kt,ie,ve;const ge=R.isCompressedTexture?R.mipmaps[st]:R.image;if(q!==null)ft=q.max.x-q.min.x,yt=q.max.y-q.min.y,Et=q.isBox3?q.max.z-q.min.z:1,Ut=q.min.x,Nt=q.min.y,Pt=q.isBox3?q.min.z:0;else{const Qe=Math.pow(2,-V);ft=Math.floor(ge.width*Qe),yt=Math.floor(ge.height*Qe),R.isDataArrayTexture?Et=ge.depth:R.isData3DTexture?Et=Math.floor(ge.depth*Qe):Et=1,Ut=0,Nt=0,Pt=0}$!==null?(Kt=$.x,ie=$.y,ve=$.z):(Kt=0,ie=0,ve=0);const te=kt.convert(z.format),Dt=kt.convert(z.type);let Ce;z.isData3DTexture?(D.setTexture3D(z,0),Ce=N.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(D.setTexture2DArray(z,0),Ce=N.TEXTURE_2D_ARRAY):(D.setTexture2D(z,0),Ce=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,z.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,z.unpackAlignment);const ne=N.getParameter(N.UNPACK_ROW_LENGTH),li=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Rn=N.getParameter(N.UNPACK_SKIP_PIXELS),Ye=N.getParameter(N.UNPACK_SKIP_ROWS),ps=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ge.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ge.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ut),N.pixelStorei(N.UNPACK_SKIP_ROWS,Nt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Pt);const de=R.isDataArrayTexture||R.isData3DTexture,Je=z.isDataArrayTexture||z.isData3DTexture;if(R.isDepthTexture){const Qe=Tt.get(R),Ne=Tt.get(z),ze=Tt.get(Qe.__renderTarget),zr=Tt.get(Ne.__renderTarget);At.bindFramebuffer(N.READ_FRAMEBUFFER,ze.__webglFramebuffer),At.bindFramebuffer(N.DRAW_FRAMEBUFFER,zr.__webglFramebuffer);for(let hn=0;hn<Et;hn++)de&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Tt.get(R).__webglTexture,V,Pt+hn),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Tt.get(z).__webglTexture,st,ve+hn)),N.blitFramebuffer(Ut,Nt,ft,yt,Kt,ie,ft,yt,N.DEPTH_BUFFER_BIT,N.NEAREST);At.bindFramebuffer(N.READ_FRAMEBUFFER,null),At.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(V!==0||R.isRenderTargetTexture||Tt.has(R)){const Qe=Tt.get(R),Ne=Tt.get(z);At.bindFramebuffer(N.READ_FRAMEBUFFER,sh),At.bindFramebuffer(N.DRAW_FRAMEBUFFER,rh);for(let ze=0;ze<Et;ze++)de?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Qe.__webglTexture,V,Pt+ze):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Qe.__webglTexture,V),Je?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ne.__webglTexture,st,ve+ze):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ne.__webglTexture,st),V!==0?N.blitFramebuffer(Ut,Nt,ft,yt,Kt,ie,ft,yt,N.COLOR_BUFFER_BIT,N.NEAREST):Je?N.copyTexSubImage3D(Ce,st,Kt,ie,ve+ze,Ut,Nt,ft,yt):N.copyTexSubImage2D(Ce,st,Kt,ie,Ut,Nt,ft,yt);At.bindFramebuffer(N.READ_FRAMEBUFFER,null),At.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Je?R.isDataTexture||R.isData3DTexture?N.texSubImage3D(Ce,st,Kt,ie,ve,ft,yt,Et,te,Dt,ge.data):z.isCompressedArrayTexture?N.compressedTexSubImage3D(Ce,st,Kt,ie,ve,ft,yt,Et,te,ge.data):N.texSubImage3D(Ce,st,Kt,ie,ve,ft,yt,Et,te,Dt,ge):R.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,st,Kt,ie,ft,yt,te,Dt,ge.data):R.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,st,Kt,ie,ge.width,ge.height,te,ge.data):N.texSubImage2D(N.TEXTURE_2D,st,Kt,ie,ft,yt,te,Dt,ge);N.pixelStorei(N.UNPACK_ROW_LENGTH,ne),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,li),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Rn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ye),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ps),st===0&&z.generateMipmaps&&N.generateMipmap(Ce),At.unbindTexture()},this.copyTextureToTexture3D=function(R,z,q=null,$=null,V=0){return R.isTexture!==!0&&(Xn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,$=arguments[1]||null,R=arguments[2],z=arguments[3],V=arguments[4]||0),Xn('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,z,q,$,V)},this.initRenderTarget=function(R){Tt.get(R).__webglFramebuffer===void 0&&D.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?D.setTextureCube(R,0):R.isData3DTexture?D.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?D.setTexture2DArray(R,0):D.setTexture2D(R,0),At.unbindTexture()},this.resetState=function(){S=0,b=0,C=null,At.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}if(typeof window<"u"&&window.THREE){let s=window.require;window.require=t=>{if(s)return s(t);if(t==="three")return window.THREE}}class Xc{constructor(){y(this,"entries",{});y(this,"size",0)}add(t){let e=this.entries[t];return this.entries[t]=!0,e?!1:(this.size++,!0)}addAll(t){let e=this.size;for(var i=0,n=t.length;i<n;i++)this.add(t[i]);return e!=this.size}contains(t){return this.entries[t]}clear(){this.entries={},this.size=0}}const je=class je{constructor(t=0,e=0,i=0,n=0){y(this,"r");y(this,"g");y(this,"b");y(this,"a");this.r=t,this.g=e,this.b=i,this.a=n}set(t,e,i,n){return this.r=t,this.g=e,this.b=i,this.a=n,this.clamp()}setFromColor(t){return this.r=t.r,this.g=t.g,this.b=t.b,this.a=t.a,this}setFromString(t){return t=t.charAt(0)=="#"?t.substr(1):t,this.r=parseInt(t.substr(0,2),16)/255,this.g=parseInt(t.substr(2,2),16)/255,this.b=parseInt(t.substr(4,2),16)/255,this.a=t.length!=8?1:parseInt(t.substr(6,2),16)/255,this}add(t,e,i,n){return this.r+=t,this.g+=e,this.b+=i,this.a+=n,this.clamp()}clamp(){return this.r<0?this.r=0:this.r>1&&(this.r=1),this.g<0?this.g=0:this.g>1&&(this.g=1),this.b<0?this.b=0:this.b>1&&(this.b=1),this.a<0?this.a=0:this.a>1&&(this.a=1),this}static rgba8888ToColor(t,e){t.r=((e&4278190080)>>>24)/255,t.g=((e&16711680)>>>16)/255,t.b=((e&65280)>>>8)/255,t.a=(e&255)/255}static rgb888ToColor(t,e){t.r=((e&16711680)>>>16)/255,t.g=((e&65280)>>>8)/255,t.b=(e&255)/255}toRgb888(){const t=e=>("0"+(e*255).toString(16)).slice(-2);return+("0x"+t(this.r)+t(this.g)+t(this.b))}static fromString(t){return new je().setFromString(t)}};y(je,"WHITE",new je(1,1,1,1)),y(je,"RED",new je(1,0,0,1)),y(je,"GREEN",new je(0,1,0,1)),y(je,"BLUE",new je(0,0,1,1)),y(je,"MAGENTA",new je(1,0,1,1));let Zt=je;const Se=class Se{static clamp(t,e,i){return t<e?e:t>i?i:t}static cosDeg(t){return Math.cos(t*Se.degRad)}static sinDeg(t){return Math.sin(t*Se.degRad)}static atan2Deg(t,e){return Math.atan2(t,e)*Se.degRad}static signum(t){return t>0?1:t<0?-1:0}static toInt(t){return t>0?Math.floor(t):Math.ceil(t)}static cbrt(t){let e=Math.pow(Math.abs(t),.3333333333333333);return t<0?-e:e}static randomTriangular(t,e){return Se.randomTriangularWith(t,e,(t+e)*.5)}static randomTriangularWith(t,e,i){let n=Math.random(),r=e-t;return n<=(i-t)/r?t+Math.sqrt(n*r*(i-t)):e-Math.sqrt((1-n)*r*(e-i))}static isPowerOfTwo(t){return t&&(t&t-1)===0}};y(Se,"PI",3.1415927),y(Se,"PI2",Se.PI*2),y(Se,"invPI2",1/Se.PI2),y(Se,"radiansToDegrees",180/Se.PI),y(Se,"radDeg",Se.radiansToDegrees),y(Se,"degreesToRadians",Se.PI/180),y(Se,"degRad",Se.degreesToRadians);let rt=Se;const ji=class ji{static arrayCopy(t,e,i,n,r){for(let o=e,a=n;o<e+r;o++,a++)i[a]=t[o]}static arrayFill(t,e,i,n){for(let r=e;r<i;r++)t[r]=n}static setArraySize(t,e,i=0){let n=t.length;if(n==e)return t;if(t.length=e,n<e)for(let r=n;r<e;r++)t[r]=i;return t}static ensureArrayCapacity(t,e,i=0){return t.length>=e?t:ji.setArraySize(t,e,i)}static newArray(t,e){let i=new Array(t);for(let n=0;n<t;n++)i[n]=e;return i}static newFloatArray(t){if(ji.SUPPORTS_TYPED_ARRAYS)return new Float32Array(t);{let e=new Array(t);for(let i=0;i<e.length;i++)e[i]=0;return e}}static newShortArray(t){if(ji.SUPPORTS_TYPED_ARRAYS)return new Int16Array(t);{let e=new Array(t);for(let i=0;i<e.length;i++)e[i]=0;return e}}static toFloatArray(t){return ji.SUPPORTS_TYPED_ARRAYS?new Float32Array(t):t}static toSinglePrecision(t){return ji.SUPPORTS_TYPED_ARRAYS?Math.fround(t):t}static webkit602BugfixHelper(t,e){}static contains(t,e,i=!0){for(var n=0;n<t.length;n++)if(t[n]==e)return!0;return!1}static enumValue(t,e){return t[e[0].toUpperCase()+e.slice(1)]}};y(ji,"SUPPORTS_TYPED_ARRAYS",typeof Float32Array<"u");let ut=ji;class ho{constructor(t){y(this,"items",new Array);y(this,"instantiator");this.instantiator=t}obtain(){return this.items.length>0?this.items.pop():this.instantiator()}free(t){t.reset&&t.reset(),this.items.push(t)}freeAll(t){for(let e=0;e<t.length;e++)this.free(t[e])}clear(){this.items.length=0}}class Cs{constructor(t=0,e=0){y(this,"x");y(this,"y");this.x=t,this.y=e}set(t,e){return this.x=t,this.y=e,this}length(){let t=this.x,e=this.y;return Math.sqrt(t*t+e*e)}normalize(){let t=this.length();return t!=0&&(this.x/=t,this.y/=t),this}}class Wc{constructor(t){y(this,"name");if(!t)throw new Error("name cannot be null.");this.name=t}}const Rr=class Rr extends Wc{constructor(e){super(e);y(this,"id",Rr.nextID++);y(this,"bones",null);y(this,"vertices",[]);y(this,"worldVerticesLength",0);y(this,"timelineAttachment",this)}computeWorldVertices(e,i,n,r,o,a){n=o+(n>>1)*a;let c=e.bone.skeleton,l=e.deform,h=this.vertices,u=this.bones;if(!u){l.length>0&&(h=l);let _=e.bone,m=_.worldX,p=_.worldY,M=_.a,v=_.b,x=_.c,A=_.d;for(let S=i,b=o;b<n;S+=2,b+=a){let C=h[S],E=h[S+1];r[b]=C*M+E*v+m,r[b+1]=C*x+E*A+p}return}let d=0,f=0;for(let _=0;_<i;_+=2){let m=u[d];d+=m+1,f+=m}let g=c.bones;if(l.length==0)for(let _=o,m=f*3;_<n;_+=a){let p=0,M=0,v=u[d++];for(v+=d;d<v;d++,m+=3){let x=g[u[d]],A=h[m],S=h[m+1],b=h[m+2];p+=(A*x.a+S*x.b+x.worldX)*b,M+=(A*x.c+S*x.d+x.worldY)*b}r[_]=p,r[_+1]=M}else{let _=l;for(let m=o,p=f*3,M=f<<1;m<n;m+=a){let v=0,x=0,A=u[d++];for(A+=d;d<A;d++,p+=3,M+=2){let S=g[u[d]],b=h[p]+_[M],C=h[p+1]+_[M+1],E=h[p+2];v+=(b*S.a+C*S.b+S.worldX)*E,x+=(b*S.c+C*S.d+S.worldY)*E}r[m]=v,r[m+1]=x}}}copyTo(e){this.bones?(e.bones=new Array(this.bones.length),ut.arrayCopy(this.bones,0,e.bones,0,this.bones.length)):e.bones=null,this.vertices&&(e.vertices=ut.newFloatArray(this.vertices.length),ut.arrayCopy(this.vertices,0,e.vertices,0,this.vertices.length)),e.worldVerticesLength=this.worldVerticesLength,e.timelineAttachment=this.timelineAttachment}};y(Rr,"nextID",0);let _i=Rr;const jn=class jn{constructor(t){y(this,"id",jn.nextID());y(this,"regions");y(this,"start",0);y(this,"digits",0);y(this,"setupIndex",0);this.regions=new Array(t)}copy(){let t=new jn(this.regions.length);return ut.arrayCopy(this.regions,0,t.regions,0,this.regions.length),t.start=this.start,t.digits=this.digits,t.setupIndex=this.setupIndex,t}apply(t,e){let i=t.sequenceIndex;i==-1&&(i=this.setupIndex),i>=this.regions.length&&(i=this.regions.length-1);let n=this.regions[i];e.region!=n&&(e.region=n,e.updateRegion())}getPath(t,e){let i=t,n=(this.start+e).toString();for(let r=this.digits-n.length;r>0;r--)i+="0";return i+=n,i}static nextID(){return jn._nextID++}};y(jn,"_nextID",0);let uo=jn;var Re;(function(s){s[s.hold=0]="hold",s[s.once=1]="once",s[s.loop=2]="loop",s[s.pingpong=3]="pingpong",s[s.onceReverse=4]="onceReverse",s[s.loopReverse=5]="loopReverse",s[s.pingpongReverse=6]="pingpongReverse"})(Re||(Re={}));const kg=[Re.hold,Re.once,Re.loop,Re.pingpong,Re.onceReverse,Re.loopReverse,Re.pingpongReverse];class Yc{constructor(t,e,i){y(this,"name");y(this,"timelines",[]);y(this,"timelineIds",new Xc);y(this,"duration");if(!t)throw new Error("name cannot be null.");this.name=t,this.setTimelines(e),this.duration=i}setTimelines(t){if(!t)throw new Error("timelines cannot be null.");this.timelines=t,this.timelineIds.clear();for(var e=0;e<t.length;e++)this.timelineIds.addAll(t[e].getPropertyIds())}hasTimeline(t){for(let e=0;e<t.length;e++)if(this.timelineIds.contains(t[e]))return!0;return!1}apply(t,e,i,n,r,o,a,c){if(!t)throw new Error("skeleton cannot be null.");n&&this.duration!=0&&(i%=this.duration,e>0&&(e%=this.duration));let l=this.timelines;for(let h=0,u=l.length;h<u;h++)l[h].apply(t,e,i,r,o,a,c)}}var J;(function(s){s[s.setup=0]="setup",s[s.first=1]="first",s[s.replace=2]="replace",s[s.add=3]="add"})(J||(J={}));var Ue;(function(s){s[s.mixIn=0]="mixIn",s[s.mixOut=1]="mixOut"})(Ue||(Ue={}));const Bt={rotate:0,x:1,y:2,scaleX:3,scaleY:4,shearX:5,shearY:6,inherit:7,rgb:8,alpha:9,rgb2:10,attachment:11,deform:12,event:13,drawOrder:14,ikConstraint:15,transformConstraint:16,pathConstraintPosition:17,pathConstraintSpacing:18,pathConstraintMix:19,physicsConstraintInertia:20,physicsConstraintStrength:21,physicsConstraintDamping:22,physicsConstraintMass:23,physicsConstraintWind:24,physicsConstraintGravity:25,physicsConstraintMix:26,physicsConstraintReset:27,sequence:28};class he{constructor(t,e){y(this,"propertyIds");y(this,"frames");this.propertyIds=e,this.frames=ut.newFloatArray(t*this.getFrameEntries())}getPropertyIds(){return this.propertyIds}getFrameEntries(){return 1}getFrameCount(){return this.frames.length/this.getFrameEntries()}getDuration(){return this.frames[this.frames.length-this.getFrameEntries()]}static search1(t,e){let i=t.length;for(let n=1;n<i;n++)if(t[n]>e)return n-1;return i-1}static search(t,e,i){let n=t.length;for(let r=i;r<n;r+=i)if(t[r]>e)return r-i;return n-i}}class Ei extends he{constructor(e,i,n){super(e,n);y(this,"curves");this.curves=ut.newFloatArray(e+i*18),this.curves[e-1]=1}setLinear(e){this.curves[e]=0}setStepped(e){this.curves[e]=1}shrink(e){let i=this.getFrameCount()+e*18;if(this.curves.length>i){let n=ut.newFloatArray(i);ut.arrayCopy(this.curves,0,n,0,i),this.curves=n}}setBezier(e,i,n,r,o,a,c,l,h,u,d){let f=this.curves,g=this.getFrameCount()+e*18;n==0&&(f[i]=2+g);let _=(r-a*2+l)*.03,m=(o-c*2+h)*.03,p=((a-l)*3-r+u)*.006,M=((c-h)*3-o+d)*.006,v=_*2+p,x=m*2+M,A=(a-r)*.3+_+p*.16666667,S=(c-o)*.3+m+M*.16666667,b=r+A,C=o+S;for(let E=g+18;g<E;g+=2)f[g]=b,f[g+1]=C,A+=v,S+=x,v+=p,x+=M,b+=A,C+=S}getBezierValue(e,i,n,r){let o=this.curves;if(o[r]>e){let h=this.frames[i],u=this.frames[i+n];return u+(e-h)/(o[r]-h)*(o[r+1]-u)}let a=r+18;for(r+=2;r<a;r+=2)if(o[r]>=e){let h=o[r-2],u=o[r-1];return u+(e-h)/(o[r]-h)*(o[r+1]-u)}i+=this.getFrameEntries();let c=o[a-2],l=o[a-1];return l+(e-c)/(this.frames[i]-c)*(this.frames[i+n]-l)}}class xi extends Ei{constructor(t,e,i){super(t,e,[i])}getFrameEntries(){return 2}setFrame(t,e,i){t<<=1,this.frames[t]=e,this.frames[t+1]=i}getCurveValue(t){let e=this.frames,i=e.length-2;for(let r=2;r<=i;r+=2)if(e[r]>t){i=r-2;break}let n=this.curves[i>>1];switch(n){case 0:let r=e[i],o=e[i+1];return o+(t-r)/(e[i+2]-r)*(e[i+2+1]-o);case 1:return e[i+1]}return this.getBezierValue(t,i,1,n-2)}getRelativeValue(t,e,i,n,r){if(t<this.frames[0]){switch(i){case J.setup:return r;case J.first:return n+(r-n)*e}return n}let o=this.getCurveValue(t);switch(i){case J.setup:return r+o*e;case J.first:case J.replace:o+=r-n}return n+o*e}getAbsoluteValue(t,e,i,n,r){if(t<this.frames[0]){switch(i){case J.setup:return r;case J.first:return n+(r-n)*e}return n}let o=this.getCurveValue(t);return i==J.setup?r+(o-r)*e:n+(o-n)*e}getAbsoluteValue2(t,e,i,n,r,o){if(t<this.frames[0]){switch(i){case J.setup:return r;case J.first:return n+(r-n)*e}return n}return i==J.setup?r+(o-r)*e:n+(o-n)*e}getScaleValue(t,e,i,n,r,o){const a=this.frames;if(t<a[0]){switch(i){case J.setup:return o;case J.first:return r+(o-r)*e}return r}let c=this.getCurveValue(t)*o;if(e==1)return i==J.add?r+c-o:c;if(n==Ue.mixOut)switch(i){case J.setup:return o+(Math.abs(c)*rt.signum(o)-o)*e;case J.first:case J.replace:return r+(Math.abs(c)*rt.signum(r)-r)*e}else{let l=0;switch(i){case J.setup:return l=Math.abs(o)*rt.signum(c),l+(c-l)*e;case J.first:case J.replace:return l=Math.abs(r)*rt.signum(c),l+(c-l)*e}}return r+(c-o)*e}}class Lo extends Ei{constructor(t,e,i,n){super(t,e,[i,n])}getFrameEntries(){return 3}setFrame(t,e,i,n){t*=3,this.frames[t]=e,this.frames[t+1]=i,this.frames[t+2]=n}}class fo extends xi{constructor(e,i,n){super(e,i,Bt.rotate+"|"+n);y(this,"boneIndex",0);this.boneIndex=n}apply(e,i,n,r,o,a,c){let l=e.bones[this.boneIndex];l.active&&(l.rotation=this.getRelativeValue(n,o,a,l.rotation,l.data.rotation))}}class zg extends Lo{constructor(e,i,n){super(e,i,Bt.x+"|"+n,Bt.y+"|"+n);y(this,"boneIndex",0);this.boneIndex=n}apply(e,i,n,r,o,a,c){let l=e.bones[this.boneIndex];if(!l.active)return;let h=this.frames;if(n<h[0]){switch(a){case J.setup:l.x=l.data.x,l.y=l.data.y;return;case J.first:l.x+=(l.data.x-l.x)*o,l.y+=(l.data.y-l.y)*o}return}let u=0,d=0,f=he.search(h,n,3),g=this.curves[f/3];switch(g){case 0:let _=h[f];u=h[f+1],d=h[f+2];let m=(n-_)/(h[f+3]-_);u+=(h[f+3+1]-u)*m,d+=(h[f+3+2]-d)*m;break;case 1:u=h[f+1],d=h[f+2];break;default:u=this.getBezierValue(n,f,1,g-2),d=this.getBezierValue(n,f,2,g+18-2)}switch(a){case J.setup:l.x=l.data.x+u*o,l.y=l.data.y+d*o;break;case J.first:case J.replace:l.x+=(l.data.x+u-l.x)*o,l.y+=(l.data.y+d-l.y)*o;break;case J.add:l.x+=u*o,l.y+=d*o}}}class Vg extends xi{constructor(e,i,n){super(e,i,Bt.x+"|"+n);y(this,"boneIndex",0);this.boneIndex=n}apply(e,i,n,r,o,a,c){let l=e.bones[this.boneIndex];l.active&&(l.x=this.getRelativeValue(n,o,a,l.x,l.data.x))}}class Hg extends xi{constructor(e,i,n){super(e,i,Bt.y+"|"+n);y(this,"boneIndex",0);this.boneIndex=n}apply(e,i,n,r,o,a,c){let l=e.bones[this.boneIndex];l.active&&(l.y=this.getRelativeValue(n,o,a,l.y,l.data.y))}}class Gg extends Lo{constructor(e,i,n){super(e,i,Bt.scaleX+"|"+n,Bt.scaleY+"|"+n);y(this,"boneIndex",0);this.boneIndex=n}apply(e,i,n,r,o,a,c){let l=e.bones[this.boneIndex];if(!l.active)return;let h=this.frames;if(n<h[0]){switch(a){case J.setup:l.scaleX=l.data.scaleX,l.scaleY=l.data.scaleY;return;case J.first:l.scaleX+=(l.data.scaleX-l.scaleX)*o,l.scaleY+=(l.data.scaleY-l.scaleY)*o}return}let u,d,f=he.search(h,n,3),g=this.curves[f/3];switch(g){case 0:let _=h[f];u=h[f+1],d=h[f+2];let m=(n-_)/(h[f+3]-_);u+=(h[f+3+1]-u)*m,d+=(h[f+3+2]-d)*m;break;case 1:u=h[f+1],d=h[f+2];break;default:u=this.getBezierValue(n,f,1,g-2),d=this.getBezierValue(n,f,2,g+18-2)}if(u*=l.data.scaleX,d*=l.data.scaleY,o==1)a==J.add?(l.scaleX+=u-l.data.scaleX,l.scaleY+=d-l.data.scaleY):(l.scaleX=u,l.scaleY=d);else{let _=0,m=0;if(c==Ue.mixOut)switch(a){case J.setup:_=l.data.scaleX,m=l.data.scaleY,l.scaleX=_+(Math.abs(u)*rt.signum(_)-_)*o,l.scaleY=m+(Math.abs(d)*rt.signum(m)-m)*o;break;case J.first:case J.replace:_=l.scaleX,m=l.scaleY,l.scaleX=_+(Math.abs(u)*rt.signum(_)-_)*o,l.scaleY=m+(Math.abs(d)*rt.signum(m)-m)*o;break;case J.add:l.scaleX+=(u-l.data.scaleX)*o,l.scaleY+=(d-l.data.scaleY)*o}else switch(a){case J.setup:_=Math.abs(l.data.scaleX)*rt.signum(u),m=Math.abs(l.data.scaleY)*rt.signum(d),l.scaleX=_+(u-_)*o,l.scaleY=m+(d-m)*o;break;case J.first:case J.replace:_=Math.abs(l.scaleX)*rt.signum(u),m=Math.abs(l.scaleY)*rt.signum(d),l.scaleX=_+(u-_)*o,l.scaleY=m+(d-m)*o;break;case J.add:l.scaleX+=(u-l.data.scaleX)*o,l.scaleY+=(d-l.data.scaleY)*o}}}}class Xg extends xi{constructor(e,i,n){super(e,i,Bt.scaleX+"|"+n);y(this,"boneIndex",0);this.boneIndex=n}apply(e,i,n,r,o,a,c){let l=e.bones[this.boneIndex];l.active&&(l.scaleX=this.getScaleValue(n,o,a,c,l.scaleX,l.data.scaleX))}}class Wg extends xi{constructor(e,i,n){super(e,i,Bt.scaleY+"|"+n);y(this,"boneIndex",0);this.boneIndex=n}apply(e,i,n,r,o,a,c){let l=e.bones[this.boneIndex];l.active&&(l.scaleY=this.getScaleValue(n,o,a,c,l.scaleY,l.data.scaleY))}}class Yg extends Lo{constructor(e,i,n){super(e,i,Bt.shearX+"|"+n,Bt.shearY+"|"+n);y(this,"boneIndex",0);this.boneIndex=n}apply(e,i,n,r,o,a,c){let l=e.bones[this.boneIndex];if(!l.active)return;let h=this.frames;if(n<h[0]){switch(a){case J.setup:l.shearX=l.data.shearX,l.shearY=l.data.shearY;return;case J.first:l.shearX+=(l.data.shearX-l.shearX)*o,l.shearY+=(l.data.shearY-l.shearY)*o}return}let u=0,d=0,f=he.search(h,n,3),g=this.curves[f/3];switch(g){case 0:let _=h[f];u=h[f+1],d=h[f+2];let m=(n-_)/(h[f+3]-_);u+=(h[f+3+1]-u)*m,d+=(h[f+3+2]-d)*m;break;case 1:u=h[f+1],d=h[f+2];break;default:u=this.getBezierValue(n,f,1,g-2),d=this.getBezierValue(n,f,2,g+18-2)}switch(a){case J.setup:l.shearX=l.data.shearX+u*o,l.shearY=l.data.shearY+d*o;break;case J.first:case J.replace:l.shearX+=(l.data.shearX+u-l.shearX)*o,l.shearY+=(l.data.shearY+d-l.shearY)*o;break;case J.add:l.shearX+=u*o,l.shearY+=d*o}}}class qg extends xi{constructor(e,i,n){super(e,i,Bt.shearX+"|"+n);y(this,"boneIndex",0);this.boneIndex=n}apply(e,i,n,r,o,a,c){let l=e.bones[this.boneIndex];l.active&&(l.shearX=this.getRelativeValue(n,o,a,l.shearX,l.data.shearX))}}class $g extends xi{constructor(e,i,n){super(e,i,Bt.shearY+"|"+n);y(this,"boneIndex",0);this.boneIndex=n}apply(e,i,n,r,o,a,c){let l=e.bones[this.boneIndex];l.active&&(l.shearY=this.getRelativeValue(n,o,a,l.shearY,l.data.shearY))}}class jg extends he{constructor(e,i){super(e,[Bt.inherit+"|"+i]);y(this,"boneIndex",0);this.boneIndex=i}getFrameEntries(){return 2}setFrame(e,i,n){e*=2,this.frames[e]=i,this.frames[e+1]=n}apply(e,i,n,r,o,a,c){let l=e.bones[this.boneIndex];if(!l.active)return;if(c==Ue.mixOut){a==J.setup&&(l.inherit=l.data.inherit);return}let h=this.frames;if(n<h[0]){(a==J.setup||a==J.first)&&(l.inherit=l.data.inherit);return}l.inherit=this.frames[he.search(h,n,2)+1]}}class Kg extends Ei{constructor(e,i,n){super(e,i,[Bt.rgb+"|"+n,Bt.alpha+"|"+n]);y(this,"slotIndex",0);this.slotIndex=n}getFrameEntries(){return 5}setFrame(e,i,n,r,o,a){e*=5,this.frames[e]=i,this.frames[e+1]=n,this.frames[e+2]=r,this.frames[e+3]=o,this.frames[e+4]=a}apply(e,i,n,r,o,a,c){let l=e.slots[this.slotIndex];if(!l.bone.active)return;let h=this.frames,u=l.color;if(n<h[0]){let M=l.data.color;switch(a){case J.setup:u.setFromColor(M);return;case J.first:u.add((M.r-u.r)*o,(M.g-u.g)*o,(M.b-u.b)*o,(M.a-u.a)*o)}return}let d=0,f=0,g=0,_=0,m=he.search(h,n,5),p=this.curves[m/5];switch(p){case 0:let M=h[m];d=h[m+1],f=h[m+2],g=h[m+3],_=h[m+4];let v=(n-M)/(h[m+5]-M);d+=(h[m+5+1]-d)*v,f+=(h[m+5+2]-f)*v,g+=(h[m+5+3]-g)*v,_+=(h[m+5+4]-_)*v;break;case 1:d=h[m+1],f=h[m+2],g=h[m+3],_=h[m+4];break;default:d=this.getBezierValue(n,m,1,p-2),f=this.getBezierValue(n,m,2,p+18-2),g=this.getBezierValue(n,m,3,p+18*2-2),_=this.getBezierValue(n,m,4,p+18*3-2)}o==1?u.set(d,f,g,_):(a==J.setup&&u.setFromColor(l.data.color),u.add((d-u.r)*o,(f-u.g)*o,(g-u.b)*o,(_-u.a)*o))}}class Zg extends Ei{constructor(e,i,n){super(e,i,[Bt.rgb+"|"+n]);y(this,"slotIndex",0);this.slotIndex=n}getFrameEntries(){return 4}setFrame(e,i,n,r,o){e<<=2,this.frames[e]=i,this.frames[e+1]=n,this.frames[e+2]=r,this.frames[e+3]=o}apply(e,i,n,r,o,a,c){let l=e.slots[this.slotIndex];if(!l.bone.active)return;let h=this.frames,u=l.color;if(n<h[0]){let p=l.data.color;switch(a){case J.setup:u.r=p.r,u.g=p.g,u.b=p.b;return;case J.first:u.r+=(p.r-u.r)*o,u.g+=(p.g-u.g)*o,u.b+=(p.b-u.b)*o}return}let d=0,f=0,g=0,_=he.search(h,n,4),m=this.curves[_>>2];switch(m){case 0:let p=h[_];d=h[_+1],f=h[_+2],g=h[_+3];let M=(n-p)/(h[_+4]-p);d+=(h[_+4+1]-d)*M,f+=(h[_+4+2]-f)*M,g+=(h[_+4+3]-g)*M;break;case 1:d=h[_+1],f=h[_+2],g=h[_+3];break;default:d=this.getBezierValue(n,_,1,m-2),f=this.getBezierValue(n,_,2,m+18-2),g=this.getBezierValue(n,_,3,m+18*2-2)}if(o==1)u.r=d,u.g=f,u.b=g;else{if(a==J.setup){let p=l.data.color;u.r=p.r,u.g=p.g,u.b=p.b}u.r+=(d-u.r)*o,u.g+=(f-u.g)*o,u.b+=(g-u.b)*o}}}class Jg extends xi{constructor(e,i,n){super(e,i,Bt.alpha+"|"+n);y(this,"slotIndex",0);this.slotIndex=n}apply(e,i,n,r,o,a,c){let l=e.slots[this.slotIndex];if(!l.bone.active)return;let h=l.color;if(n<this.frames[0]){let d=l.data.color;switch(a){case J.setup:h.a=d.a;return;case J.first:h.a+=(d.a-h.a)*o}return}let u=this.getCurveValue(n);o==1?h.a=u:(a==J.setup&&(h.a=l.data.color.a),h.a+=(u-h.a)*o)}}class Qg extends Ei{constructor(e,i,n){super(e,i,[Bt.rgb+"|"+n,Bt.alpha+"|"+n,Bt.rgb2+"|"+n]);y(this,"slotIndex",0);this.slotIndex=n}getFrameEntries(){return 8}setFrame(e,i,n,r,o,a,c,l,h){e<<=3,this.frames[e]=i,this.frames[e+1]=n,this.frames[e+2]=r,this.frames[e+3]=o,this.frames[e+4]=a,this.frames[e+5]=c,this.frames[e+6]=l,this.frames[e+7]=h}apply(e,i,n,r,o,a,c){let l=e.slots[this.slotIndex];if(!l.bone.active)return;let h=this.frames,u=l.color,d=l.darkColor;if(n<h[0]){let S=l.data.color,b=l.data.darkColor;switch(a){case J.setup:u.setFromColor(S),d.r=b.r,d.g=b.g,d.b=b.b;return;case J.first:u.add((S.r-u.r)*o,(S.g-u.g)*o,(S.b-u.b)*o,(S.a-u.a)*o),d.r+=(b.r-d.r)*o,d.g+=(b.g-d.g)*o,d.b+=(b.b-d.b)*o}return}let f=0,g=0,_=0,m=0,p=0,M=0,v=0,x=he.search(h,n,8),A=this.curves[x>>3];switch(A){case 0:let S=h[x];f=h[x+1],g=h[x+2],_=h[x+3],m=h[x+4],p=h[x+5],M=h[x+6],v=h[x+7];let b=(n-S)/(h[x+8]-S);f+=(h[x+8+1]-f)*b,g+=(h[x+8+2]-g)*b,_+=(h[x+8+3]-_)*b,m+=(h[x+8+4]-m)*b,p+=(h[x+8+5]-p)*b,M+=(h[x+8+6]-M)*b,v+=(h[x+8+7]-v)*b;break;case 1:f=h[x+1],g=h[x+2],_=h[x+3],m=h[x+4],p=h[x+5],M=h[x+6],v=h[x+7];break;default:f=this.getBezierValue(n,x,1,A-2),g=this.getBezierValue(n,x,2,A+18-2),_=this.getBezierValue(n,x,3,A+18*2-2),m=this.getBezierValue(n,x,4,A+18*3-2),p=this.getBezierValue(n,x,5,A+18*4-2),M=this.getBezierValue(n,x,6,A+18*5-2),v=this.getBezierValue(n,x,7,A+18*6-2)}if(o==1)u.set(f,g,_,m),d.r=p,d.g=M,d.b=v;else{if(a==J.setup){u.setFromColor(l.data.color);let S=l.data.darkColor;d.r=S.r,d.g=S.g,d.b=S.b}u.add((f-u.r)*o,(g-u.g)*o,(_-u.b)*o,(m-u.a)*o),d.r+=(p-d.r)*o,d.g+=(M-d.g)*o,d.b+=(v-d.b)*o}}}class t_ extends Ei{constructor(e,i,n){super(e,i,[Bt.rgb+"|"+n,Bt.rgb2+"|"+n]);y(this,"slotIndex",0);this.slotIndex=n}getFrameEntries(){return 7}setFrame(e,i,n,r,o,a,c,l){e*=7,this.frames[e]=i,this.frames[e+1]=n,this.frames[e+2]=r,this.frames[e+3]=o,this.frames[e+4]=a,this.frames[e+5]=c,this.frames[e+6]=l}apply(e,i,n,r,o,a,c){let l=e.slots[this.slotIndex];if(!l.bone.active)return;let h=this.frames,u=l.color,d=l.darkColor;if(n<h[0]){let A=l.data.color,S=l.data.darkColor;switch(a){case J.setup:u.r=A.r,u.g=A.g,u.b=A.b,d.r=S.r,d.g=S.g,d.b=S.b;return;case J.first:u.r+=(A.r-u.r)*o,u.g+=(A.g-u.g)*o,u.b+=(A.b-u.b)*o,d.r+=(S.r-d.r)*o,d.g+=(S.g-d.g)*o,d.b+=(S.b-d.b)*o}return}let f=0,g=0,_=0,m=0,p=0,M=0,v=he.search(h,n,7),x=this.curves[v/7];switch(x){case 0:let A=h[v];f=h[v+1],g=h[v+2],_=h[v+3],m=h[v+4],p=h[v+5],M=h[v+6];let S=(n-A)/(h[v+7]-A);f+=(h[v+7+1]-f)*S,g+=(h[v+7+2]-g)*S,_+=(h[v+7+3]-_)*S,m+=(h[v+7+4]-m)*S,p+=(h[v+7+5]-p)*S,M+=(h[v+7+6]-M)*S;break;case 1:f=h[v+1],g=h[v+2],_=h[v+3],m=h[v+4],p=h[v+5],M=h[v+6];break;default:f=this.getBezierValue(n,v,1,x-2),g=this.getBezierValue(n,v,2,x+18-2),_=this.getBezierValue(n,v,3,x+18*2-2),m=this.getBezierValue(n,v,4,x+18*3-2),p=this.getBezierValue(n,v,5,x+18*4-2),M=this.getBezierValue(n,v,6,x+18*5-2)}if(o==1)u.r=f,u.g=g,u.b=_,d.r=m,d.g=p,d.b=M;else{if(a==J.setup){let A=l.data.color,S=l.data.darkColor;u.r=A.r,u.g=A.g,u.b=A.b,d.r=S.r,d.g=S.g,d.b=S.b}u.r+=(f-u.r)*o,u.g+=(g-u.g)*o,u.b+=(_-u.b)*o,d.r+=(m-d.r)*o,d.g+=(p-d.g)*o,d.b+=(M-d.b)*o}}}class Ms extends he{constructor(e,i){super(e,[Bt.attachment+"|"+i]);y(this,"slotIndex",0);y(this,"attachmentNames");this.slotIndex=i,this.attachmentNames=new Array(e)}getFrameCount(){return this.frames.length}setFrame(e,i,n){this.frames[e]=i,this.attachmentNames[e]=n}apply(e,i,n,r,o,a,c){let l=e.slots[this.slotIndex];if(l.bone.active){if(c==Ue.mixOut){a==J.setup&&this.setAttachment(e,l,l.data.attachmentName);return}if(n<this.frames[0]){(a==J.setup||a==J.first)&&this.setAttachment(e,l,l.data.attachmentName);return}this.setAttachment(e,l,this.attachmentNames[he.search1(this.frames,n)])}}setAttachment(e,i,n){i.setAttachment(n?e.getAttachment(this.slotIndex,n):null)}}class e_ extends Ei{constructor(e,i,n,r){super(e,i,[Bt.deform+"|"+n+"|"+r.id]);y(this,"slotIndex",0);y(this,"attachment");y(this,"vertices");this.slotIndex=n,this.attachment=r,this.vertices=new Array(e)}getFrameCount(){return this.frames.length}setFrame(e,i,n){this.frames[e]=i,this.vertices[e]=n}setBezier(e,i,n,r,o,a,c,l,h,u,d){let f=this.curves,g=this.getFrameCount()+e*18;n==0&&(f[i]=2+g);let _=(r-a*2+l)*.03,m=h*.03-c*.06,p=((a-l)*3-r+u)*.006,M=(c-h+.33333333)*.018,v=_*2+p,x=m*2+M,A=(a-r)*.3+_+p*.16666667,S=c*.3+m+M*.16666667,b=r+A,C=S;for(let E=g+18;g<E;g+=2)f[g]=b,f[g+1]=C,A+=v,S+=x,v+=p,x+=M,b+=A,C+=S}getCurvePercent(e,i){let n=this.curves,r=n[i];switch(r){case 0:let l=this.frames[i];return(e-l)/(this.frames[i+this.getFrameEntries()]-l);case 1:return 0}if(r-=2,n[r]>e){let l=this.frames[i];return n[r+1]*(e-l)/(n[r]-l)}let o=r+18;for(r+=2;r<o;r+=2)if(n[r]>=e){let l=n[r-2],h=n[r-1];return h+(e-l)/(n[r]-l)*(n[r+1]-h)}let a=n[o-2],c=n[o-1];return c+(1-c)*(e-a)/(this.frames[i+this.getFrameEntries()]-a)}apply(e,i,n,r,o,a,c){let l=e.slots[this.slotIndex];if(!l.bone.active)return;let h=l.getAttachment();if(!h||!(h instanceof _i)||h.timelineAttachment!=this.attachment)return;let u=l.deform;u.length==0&&(a=J.setup);let d=this.vertices,f=d[0].length,g=this.frames;if(n<g[0]){switch(a){case J.setup:u.length=0;return;case J.first:if(o==1){u.length=0;return}u.length=f;let x=h;if(x.bones){o=1-o;for(var _=0;_<f;_++)u[_]*=o}else{let A=x.vertices;for(var _=0;_<f;_++)u[_]+=(A[_]-u[_])*o}}return}if(u.length=f,n>=g[g.length-1]){let x=d[g.length-1];if(o==1)if(a==J.add){let A=h;if(A.bones)for(let S=0;S<f;S++)u[S]+=x[S];else{let S=A.vertices;for(let b=0;b<f;b++)u[b]+=x[b]-S[b]}}else ut.arrayCopy(x,0,u,0,f);else switch(a){case J.setup:{let S=h;if(S.bones)for(let b=0;b<f;b++)u[b]=x[b]*o;else{let b=S.vertices;for(let C=0;C<f;C++){let E=b[C];u[C]=E+(x[C]-E)*o}}break}case J.first:case J.replace:for(let S=0;S<f;S++)u[S]+=(x[S]-u[S])*o;break;case J.add:let A=h;if(A.bones)for(let S=0;S<f;S++)u[S]+=x[S]*o;else{let S=A.vertices;for(let b=0;b<f;b++)u[b]+=(x[b]-S[b])*o}}return}let m=he.search1(g,n),p=this.getCurvePercent(n,m),M=d[m],v=d[m+1];if(o==1)if(a==J.add){let x=h;if(x.bones)for(let A=0;A<f;A++){let S=M[A];u[A]+=S+(v[A]-S)*p}else{let A=x.vertices;for(let S=0;S<f;S++){let b=M[S];u[S]+=b+(v[S]-b)*p-A[S]}}}else for(let x=0;x<f;x++){let A=M[x];u[x]=A+(v[x]-A)*p}else switch(a){case J.setup:{let A=h;if(A.bones)for(let S=0;S<f;S++){let b=M[S];u[S]=(b+(v[S]-b)*p)*o}else{let S=A.vertices;for(let b=0;b<f;b++){let C=M[b],E=S[b];u[b]=E+(C+(v[b]-C)*p-E)*o}}break}case J.first:case J.replace:for(let A=0;A<f;A++){let S=M[A];u[A]+=(S+(v[A]-S)*p-u[A])*o}break;case J.add:let x=h;if(x.bones)for(let A=0;A<f;A++){let S=M[A];u[A]+=(S+(v[A]-S)*p)*o}else{let A=x.vertices;for(let S=0;S<f;S++){let b=M[S];u[S]+=(b+(v[S]-b)*p-A[S])*o}}}}}const Pr=class Pr extends he{constructor(e){super(e,Pr.propertyIds);y(this,"events");this.events=new Array(e)}getFrameCount(){return this.frames.length}setFrame(e,i){this.frames[e]=i.time,this.events[e]=i}apply(e,i,n,r,o,a,c){if(!r)return;let l=this.frames,h=this.frames.length;if(i>n)this.apply(e,i,Number.MAX_VALUE,r,o,a,c),i=-1;else if(i>=l[h-1])return;if(n<l[0])return;let u=0;if(i<l[0])u=0;else{u=he.search1(l,i)+1;let d=l[u];for(;u>0&&l[u-1]==d;)u--}for(;u<h&&n>=l[u];u++)r.push(this.events[u])}};y(Pr,"propertyIds",[""+Bt.event]);let wr=Pr;const Dr=class Dr extends he{constructor(e){super(e,Dr.propertyIds);y(this,"drawOrders");this.drawOrders=new Array(e)}getFrameCount(){return this.frames.length}setFrame(e,i,n){this.frames[e]=i,this.drawOrders[e]=n}apply(e,i,n,r,o,a,c){if(c==Ue.mixOut){a==J.setup&&ut.arrayCopy(e.slots,0,e.drawOrder,0,e.slots.length);return}if(n<this.frames[0]){(a==J.setup||a==J.first)&&ut.arrayCopy(e.slots,0,e.drawOrder,0,e.slots.length);return}let l=he.search1(this.frames,n),h=this.drawOrders[l];if(!h)ut.arrayCopy(e.slots,0,e.drawOrder,0,e.slots.length);else{let u=e.drawOrder,d=e.slots;for(let f=0,g=h.length;f<g;f++)u[f]=d[h[f]]}}};y(Dr,"propertyIds",[""+Bt.drawOrder]);let es=Dr;class i_ extends Ei{constructor(e,i,n){super(e,i,[Bt.ikConstraint+"|"+n]);y(this,"constraintIndex",0);this.constraintIndex=n}getFrameEntries(){return 6}setFrame(e,i,n,r,o,a,c){e*=6,this.frames[e]=i,this.frames[e+1]=n,this.frames[e+2]=r,this.frames[e+3]=o,this.frames[e+4]=a?1:0,this.frames[e+5]=c?1:0}apply(e,i,n,r,o,a,c){let l=e.ikConstraints[this.constraintIndex];if(!l.active)return;let h=this.frames;if(n<h[0]){switch(a){case J.setup:l.mix=l.data.mix,l.softness=l.data.softness,l.bendDirection=l.data.bendDirection,l.compress=l.data.compress,l.stretch=l.data.stretch;return;case J.first:l.mix+=(l.data.mix-l.mix)*o,l.softness+=(l.data.softness-l.softness)*o,l.bendDirection=l.data.bendDirection,l.compress=l.data.compress,l.stretch=l.data.stretch}return}let u=0,d=0,f=he.search(h,n,6),g=this.curves[f/6];switch(g){case 0:let _=h[f];u=h[f+1],d=h[f+2];let m=(n-_)/(h[f+6]-_);u+=(h[f+6+1]-u)*m,d+=(h[f+6+2]-d)*m;break;case 1:u=h[f+1],d=h[f+2];break;default:u=this.getBezierValue(n,f,1,g-2),d=this.getBezierValue(n,f,2,g+18-2)}a==J.setup?(l.mix=l.data.mix+(u-l.data.mix)*o,l.softness=l.data.softness+(d-l.data.softness)*o,c==Ue.mixOut?(l.bendDirection=l.data.bendDirection,l.compress=l.data.compress,l.stretch=l.data.stretch):(l.bendDirection=h[f+3],l.compress=h[f+4]!=0,l.stretch=h[f+5]!=0)):(l.mix+=(u-l.mix)*o,l.softness+=(d-l.softness)*o,c==Ue.mixIn&&(l.bendDirection=h[f+3],l.compress=h[f+4]!=0,l.stretch=h[f+5]!=0))}}class n_ extends Ei{constructor(e,i,n){super(e,i,[Bt.transformConstraint+"|"+n]);y(this,"constraintIndex",0);this.constraintIndex=n}getFrameEntries(){return 7}setFrame(e,i,n,r,o,a,c,l){let h=this.frames;e*=7,h[e]=i,h[e+1]=n,h[e+2]=r,h[e+3]=o,h[e+4]=a,h[e+5]=c,h[e+6]=l}apply(e,i,n,r,o,a,c){let l=e.transformConstraints[this.constraintIndex];if(!l.active)return;let h=this.frames;if(n<h[0]){let v=l.data;switch(a){case J.setup:l.mixRotate=v.mixRotate,l.mixX=v.mixX,l.mixY=v.mixY,l.mixScaleX=v.mixScaleX,l.mixScaleY=v.mixScaleY,l.mixShearY=v.mixShearY;return;case J.first:l.mixRotate+=(v.mixRotate-l.mixRotate)*o,l.mixX+=(v.mixX-l.mixX)*o,l.mixY+=(v.mixY-l.mixY)*o,l.mixScaleX+=(v.mixScaleX-l.mixScaleX)*o,l.mixScaleY+=(v.mixScaleY-l.mixScaleY)*o,l.mixShearY+=(v.mixShearY-l.mixShearY)*o}return}let u,d,f,g,_,m,p=he.search(h,n,7),M=this.curves[p/7];switch(M){case 0:let v=h[p];u=h[p+1],d=h[p+2],f=h[p+3],g=h[p+4],_=h[p+5],m=h[p+6];let x=(n-v)/(h[p+7]-v);u+=(h[p+7+1]-u)*x,d+=(h[p+7+2]-d)*x,f+=(h[p+7+3]-f)*x,g+=(h[p+7+4]-g)*x,_+=(h[p+7+5]-_)*x,m+=(h[p+7+6]-m)*x;break;case 1:u=h[p+1],d=h[p+2],f=h[p+3],g=h[p+4],_=h[p+5],m=h[p+6];break;default:u=this.getBezierValue(n,p,1,M-2),d=this.getBezierValue(n,p,2,M+18-2),f=this.getBezierValue(n,p,3,M+18*2-2),g=this.getBezierValue(n,p,4,M+18*3-2),_=this.getBezierValue(n,p,5,M+18*4-2),m=this.getBezierValue(n,p,6,M+18*5-2)}if(a==J.setup){let v=l.data;l.mixRotate=v.mixRotate+(u-v.mixRotate)*o,l.mixX=v.mixX+(d-v.mixX)*o,l.mixY=v.mixY+(f-v.mixY)*o,l.mixScaleX=v.mixScaleX+(g-v.mixScaleX)*o,l.mixScaleY=v.mixScaleY+(_-v.mixScaleY)*o,l.mixShearY=v.mixShearY+(m-v.mixShearY)*o}else l.mixRotate+=(u-l.mixRotate)*o,l.mixX+=(d-l.mixX)*o,l.mixY+=(f-l.mixY)*o,l.mixScaleX+=(g-l.mixScaleX)*o,l.mixScaleY+=(_-l.mixScaleY)*o,l.mixShearY+=(m-l.mixShearY)*o}}class s_ extends xi{constructor(e,i,n){super(e,i,Bt.pathConstraintPosition+"|"+n);y(this,"constraintIndex",0);this.constraintIndex=n}apply(e,i,n,r,o,a,c){let l=e.pathConstraints[this.constraintIndex];l.active&&(l.position=this.getAbsoluteValue(n,o,a,l.position,l.data.position))}}class r_ extends xi{constructor(e,i,n){super(e,i,Bt.pathConstraintSpacing+"|"+n);y(this,"constraintIndex",0);this.constraintIndex=n}apply(e,i,n,r,o,a,c){let l=e.pathConstraints[this.constraintIndex];l.active&&(l.spacing=this.getAbsoluteValue(n,o,a,l.spacing,l.data.spacing))}}class a_ extends Ei{constructor(e,i,n){super(e,i,[Bt.pathConstraintMix+"|"+n]);y(this,"constraintIndex",0);this.constraintIndex=n}getFrameEntries(){return 4}setFrame(e,i,n,r,o){let a=this.frames;e<<=2,a[e]=i,a[e+1]=n,a[e+2]=r,a[e+3]=o}apply(e,i,n,r,o,a,c){let l=e.pathConstraints[this.constraintIndex];if(!l.active)return;let h=this.frames;if(n<h[0]){switch(a){case J.setup:l.mixRotate=l.data.mixRotate,l.mixX=l.data.mixX,l.mixY=l.data.mixY;return;case J.first:l.mixRotate+=(l.data.mixRotate-l.mixRotate)*o,l.mixX+=(l.data.mixX-l.mixX)*o,l.mixY+=(l.data.mixY-l.mixY)*o}return}let u,d,f,g=he.search(h,n,4),_=this.curves[g>>2];switch(_){case 0:let m=h[g];u=h[g+1],d=h[g+2],f=h[g+3];let p=(n-m)/(h[g+4]-m);u+=(h[g+4+1]-u)*p,d+=(h[g+4+2]-d)*p,f+=(h[g+4+3]-f)*p;break;case 1:u=h[g+1],d=h[g+2],f=h[g+3];break;default:u=this.getBezierValue(n,g,1,_-2),d=this.getBezierValue(n,g,2,_+18-2),f=this.getBezierValue(n,g,3,_+18*2-2)}if(a==J.setup){let m=l.data;l.mixRotate=m.mixRotate+(u-m.mixRotate)*o,l.mixX=m.mixX+(d-m.mixX)*o,l.mixY=m.mixY+(f-m.mixY)*o}else l.mixRotate+=(u-l.mixRotate)*o,l.mixX+=(d-l.mixX)*o,l.mixY+=(f-l.mixY)*o}}class Cn extends xi{constructor(e,i,n,r){super(e,i,r+"|"+n);y(this,"constraintIndex",0);this.constraintIndex=n}apply(e,i,n,r,o,a,c){let l;if(this.constraintIndex==-1){const h=n>=this.frames[0]?this.getCurveValue(n):0;for(const u of e.physicsConstraints)u.active&&this.global(u.data)&&this.set(u,this.getAbsoluteValue2(n,o,a,this.get(u),this.setup(u),h))}else l=e.physicsConstraints[this.constraintIndex],l.active&&this.set(l,this.getAbsoluteValue(n,o,a,this.get(l),this.setup(l)))}}class o_ extends Cn{constructor(t,e,i){super(t,e,i,Bt.physicsConstraintInertia)}setup(t){return t.data.inertia}get(t){return t.inertia}set(t,e){t.inertia=e}global(t){return t.inertiaGlobal}}class l_ extends Cn{constructor(t,e,i){super(t,e,i,Bt.physicsConstraintStrength)}setup(t){return t.data.strength}get(t){return t.strength}set(t,e){t.strength=e}global(t){return t.strengthGlobal}}class c_ extends Cn{constructor(t,e,i){super(t,e,i,Bt.physicsConstraintDamping)}setup(t){return t.data.damping}get(t){return t.damping}set(t,e){t.damping=e}global(t){return t.dampingGlobal}}class h_ extends Cn{constructor(t,e,i){super(t,e,i,Bt.physicsConstraintMass)}setup(t){return 1/t.data.massInverse}get(t){return 1/t.massInverse}set(t,e){t.massInverse=1/e}global(t){return t.massGlobal}}class u_ extends Cn{constructor(t,e,i){super(t,e,i,Bt.physicsConstraintWind)}setup(t){return t.data.wind}get(t){return t.wind}set(t,e){t.wind=e}global(t){return t.windGlobal}}class d_ extends Cn{constructor(t,e,i){super(t,e,i,Bt.physicsConstraintGravity)}setup(t){return t.data.gravity}get(t){return t.gravity}set(t,e){t.gravity=e}global(t){return t.gravityGlobal}}class f_ extends Cn{constructor(t,e,i){super(t,e,i,Bt.physicsConstraintMix)}setup(t){return t.data.mix}get(t){return t.mix}set(t,e){t.mix=e}global(t){return t.mixGlobal}}const Lr=class Lr extends he{constructor(e,i){super(e,Lr.propertyIds);y(this,"constraintIndex");this.constraintIndex=i}getFrameCount(){return this.frames.length}setFrame(e,i){this.frames[e]=i}apply(e,i,n,r,o,a,c){let l;if(this.constraintIndex!=-1&&(l=e.physicsConstraints[this.constraintIndex],!l.active))return;const h=this.frames;if(i>n)this.apply(e,i,Number.MAX_VALUE,[],o,a,c),i=-1;else if(i>=h[h.length-1])return;if(!(n<h[0])&&(i<h[0]||n>=h[he.search1(h,i)+1]))if(l!=null)l.reset();else for(const u of e.physicsConstraints)u.active&&u.reset()}};y(Lr,"propertyIds",[Bt.physicsConstraintReset.toString()]);let po=Lr;const ei=class ei extends he{constructor(e,i,n){super(e,[Bt.sequence+"|"+i+"|"+n.sequence.id]);y(this,"slotIndex");y(this,"attachment");this.slotIndex=i,this.attachment=n}getFrameEntries(){return ei.ENTRIES}getSlotIndex(){return this.slotIndex}getAttachment(){return this.attachment}setFrame(e,i,n,r,o){let a=this.frames;e*=ei.ENTRIES,a[e]=i,a[e+ei.MODE]=n|r<<4,a[e+ei.DELAY]=o}apply(e,i,n,r,o,a,c){let l=e.slots[this.slotIndex];if(!l.bone.active)return;let h=l.attachment,u=this.attachment;if(h!=u&&(!(h instanceof _i)||h.timelineAttachment!=u))return;if(c==Ue.mixOut){a==J.setup&&(l.sequenceIndex=-1);return}let d=this.frames;if(n<d[0]){(a==J.setup||a==J.first)&&(l.sequenceIndex=-1);return}let f=he.search(d,n,ei.ENTRIES),g=d[f],_=d[f+ei.MODE],m=d[f+ei.DELAY];if(!this.attachment.sequence)return;let p=_>>4,M=this.attachment.sequence.regions.length,v=kg[_&15];if(v!=Re.hold)switch(p+=(n-g)/m+1e-5|0,v){case Re.once:p=Math.min(M-1,p);break;case Re.loop:p%=M;break;case Re.pingpong:{let x=(M<<1)-2;p=x==0?0:p%x,p>=M&&(p=x-p);break}case Re.onceReverse:p=Math.max(M-1-p,0);break;case Re.loopReverse:p=M-1-p%M;break;case Re.pingpongReverse:{let x=(M<<1)-2;p=x==0?0:(p+M-1)%x,p>=M&&(p=x-p)}}l.sequenceIndex=p}};y(ei,"ENTRIES",3),y(ei,"MODE",1),y(ei,"DELAY",2);let mo=ei;const Kn=class Kn{constructor(t){y(this,"data");y(this,"tracks",new Array);y(this,"timeScale",1);y(this,"unkeyedState",0);y(this,"events",new Array);y(this,"listeners",new Array);y(this,"queue",new m_(this));y(this,"propertyIDs",new Xc);y(this,"animationsChanged",!1);y(this,"trackEntryPool",new ho(()=>new p_));this.data=t}static emptyAnimation(){return Kn._emptyAnimation}update(t){t*=this.timeScale;let e=this.tracks;for(let i=0,n=e.length;i<n;i++){let r=e[i];if(!r)continue;r.animationLast=r.nextAnimationLast,r.trackLast=r.nextTrackLast;let o=t*r.timeScale;if(r.delay>0){if(r.delay-=o,r.delay>0)continue;o=-r.delay,r.delay=0}let a=r.next;if(a){let c=r.trackLast-a.delay;if(c>=0){for(a.delay=0,a.trackTime+=r.timeScale==0?0:(c/r.timeScale+t)*a.timeScale,r.trackTime+=o,this.setCurrent(i,a,!0);a.mixingFrom;)a.mixTime+=t,a=a.mixingFrom;continue}}else if(r.trackLast>=r.trackEnd&&!r.mixingFrom){e[i]=null,this.queue.end(r),this.clearNext(r);continue}if(r.mixingFrom&&this.updateMixingFrom(r,t)){let c=r.mixingFrom;for(r.mixingFrom=null,c&&(c.mixingTo=null);c;)this.queue.end(c),c=c.mixingFrom}r.trackTime+=o}this.queue.drain()}updateMixingFrom(t,e){let i=t.mixingFrom;if(!i)return!0;let n=this.updateMixingFrom(i,e);return i.animationLast=i.nextAnimationLast,i.trackLast=i.nextTrackLast,t.mixTime>0&&t.mixTime>=t.mixDuration?((i.totalAlpha==0||t.mixDuration==0)&&(t.mixingFrom=i.mixingFrom,i.mixingFrom&&(i.mixingFrom.mixingTo=t),t.interruptAlpha=i.interruptAlpha,this.queue.end(i)),n):(i.trackTime+=e*i.timeScale,t.mixTime+=e,!1)}apply(t){if(!t)throw new Error("skeleton cannot be null.");this.animationsChanged&&this._animationsChanged();let e=this.events,i=this.tracks,n=!1;for(let d=0,f=i.length;d<f;d++){let g=i[d];if(!g||g.delay>0)continue;n=!0;let _=d==0?J.first:g.mixBlend,m=g.alpha;g.mixingFrom?m*=this.applyMixingFrom(g,t,_):g.trackTime>=g.trackEnd&&!g.next&&(m=0);let p=m>=g.alphaAttachmentThreshold,M=g.animationLast,v=g.getAnimationTime(),x=v,A=e;g.reverse&&(x=g.animation.duration-x,A=null);let S=g.animation.timelines,b=S.length;if(d==0&&m==1||_==J.add){d==0&&(p=!0);for(let C=0;C<b;C++){var r=S[C];r instanceof Ms?this.applyAttachmentTimeline(r,t,x,_,p):r.apply(t,M,x,A,m,_,Ue.mixIn)}}else{let C=g.timelineMode,E=g.shortestRotation,w=!E&&g.timelinesRotation.length!=b<<1;w&&(g.timelinesRotation.length=b<<1);for(let P=0;P<b;P++){let O=S[P],U=C[P]==_a?_:J.setup;!E&&O instanceof fo?this.applyRotateTimeline(O,t,x,m,U,g.timelinesRotation,P<<1,w):O instanceof Ms?this.applyAttachmentTimeline(O,t,x,_,p):O.apply(t,M,x,A,m,U,Ue.mixIn)}}this.queueEvents(g,v),e.length=0,g.nextAnimationLast=v,g.nextTrackLast=g.trackTime}for(var o=this.unkeyedState+Zl,a=t.slots,c=0,l=t.slots.length;c<l;c++){var h=a[c];if(h.attachmentState==o){var u=h.data.attachmentName;h.setAttachment(u?t.getAttachment(h.data.index,u):null)}}return this.unkeyedState+=2,this.queue.drain(),n}applyMixingFrom(t,e,i){let n=t.mixingFrom;n.mixingFrom&&this.applyMixingFrom(n,e,i);let r=0;t.mixDuration==0?(r=1,i==J.first&&(i=J.setup)):(r=t.mixTime/t.mixDuration,r>1&&(r=1),i!=J.first&&(i=n.mixBlend));let o=r<n.mixAttachmentThreshold,a=r<n.mixDrawOrderThreshold,c=n.animation.timelines,l=c.length,h=n.alpha*t.interruptAlpha,u=h*(1-r),d=n.animationLast,f=n.getAnimationTime(),g=f,_=null;if(n.reverse?g=n.animation.duration-g:r<n.eventThreshold&&(_=this.events),i==J.add)for(let m=0;m<l;m++)c[m].apply(e,d,g,_,u,i,Ue.mixOut);else{let m=n.timelineMode,p=n.timelineHoldMix,M=n.shortestRotation,v=!M&&n.timelinesRotation.length!=l<<1;v&&(n.timelinesRotation.length=l<<1),n.totalAlpha=0;for(let x=0;x<l;x++){let A=c[x],S=Ue.mixOut,b,C=0;switch(m[x]){case _a:if(!a&&A instanceof es)continue;b=i,C=u;break;case jl:b=J.setup,C=u;break;case Kl:b=i,C=h;break;case xa:b=J.setup,C=h;break;default:b=J.setup;let E=p[x];C=h*Math.max(0,1-E.mixTime/E.mixDuration);break}n.totalAlpha+=C,!M&&A instanceof fo?this.applyRotateTimeline(A,e,g,C,b,n.timelinesRotation,x<<1,v):A instanceof Ms?this.applyAttachmentTimeline(A,e,g,b,o&&C>=n.alphaAttachmentThreshold):(a&&A instanceof es&&b==J.setup&&(S=Ue.mixIn),A.apply(e,d,g,_,C,b,S))}}return t.mixDuration>0&&this.queueEvents(n,f),this.events.length=0,n.nextAnimationLast=f,n.nextTrackLast=n.trackTime,r}applyAttachmentTimeline(t,e,i,n,r){var o=e.slots[t.slotIndex];o.bone.active&&(i<t.frames[0]?(n==J.setup||n==J.first)&&this.setAttachment(e,o,o.data.attachmentName,r):this.setAttachment(e,o,t.attachmentNames[he.search1(t.frames,i)],r),o.attachmentState<=this.unkeyedState&&(o.attachmentState=this.unkeyedState+Zl))}setAttachment(t,e,i,n){e.setAttachment(i?t.getAttachment(e.data.index,i):null),n&&(e.attachmentState=this.unkeyedState+__)}applyRotateTimeline(t,e,i,n,r,o,a,c){if(c&&(o[a]=0),n==1){t.apply(e,0,i,null,1,r,Ue.mixIn);return}let l=e.bones[t.boneIndex];if(!l.active)return;let h=t.frames,u=0,d=0;if(i<h[0])switch(r){case J.setup:l.rotation=l.data.rotation;default:return;case J.first:u=l.rotation,d=l.data.rotation}else u=r==J.setup?l.data.rotation:l.rotation,d=l.data.rotation+t.getCurveValue(i);let f=0,g=d-u;if(g-=Math.ceil(g/360-.5)*360,g==0)f=o[a];else{let _=0,m=0;c?(_=0,m=g):(_=o[a],m=o[a+1]);let p=_-_%360;f=g+p;let M=g>=0,v=_>=0;Math.abs(m)<=90&&rt.signum(m)!=rt.signum(g)&&(Math.abs(_-p)>180?(f+=360*rt.signum(_),v=M):p!=0?f-=360*rt.signum(_):v=M),v!=M&&(f+=360*rt.signum(_)),o[a]=f}o[a+1]=g,l.rotation=u+f*n}queueEvents(t,e){let i=t.animationStart,n=t.animationEnd,r=n-i,o=t.trackLast%r,a=this.events,c=0,l=a.length;for(;c<l;c++){let u=a[c];if(u.time<o)break;u.time>n||this.queue.event(t,u)}let h=!1;if(t.loop)if(r==0)h=!0;else{const u=Math.floor(t.trackTime/r);h=u>0&&u>Math.floor(t.trackLast/r)}else h=e>=n&&t.animationLast<n;for(h&&this.queue.complete(t);c<l;c++){let u=a[c];u.time<i||this.queue.event(t,u)}}clearTracks(){let t=this.queue.drainDisabled;this.queue.drainDisabled=!0;for(let e=0,i=this.tracks.length;e<i;e++)this.clearTrack(e);this.tracks.length=0,this.queue.drainDisabled=t,this.queue.drain()}clearTrack(t){if(t>=this.tracks.length)return;let e=this.tracks[t];if(!e)return;this.queue.end(e),this.clearNext(e);let i=e;for(;;){let n=i.mixingFrom;if(!n)break;this.queue.end(n),i.mixingFrom=null,i.mixingTo=null,i=n}this.tracks[e.trackIndex]=null,this.queue.drain()}setCurrent(t,e,i){let n=this.expandToIndex(t);this.tracks[t]=e,e.previous=null,n&&(i&&this.queue.interrupt(n),e.mixingFrom=n,n.mixingTo=e,e.mixTime=0,n.mixingFrom&&n.mixDuration>0&&(e.interruptAlpha*=Math.min(1,n.mixTime/n.mixDuration)),n.timelinesRotation.length=0),this.queue.start(e)}setAnimation(t,e,i=!1){let n=this.data.skeletonData.findAnimation(e);if(!n)throw new Error("Animation not found: "+e);return this.setAnimationWith(t,n,i)}setAnimationWith(t,e,i=!1){if(!e)throw new Error("animation cannot be null.");let n=!0,r=this.expandToIndex(t);r&&(r.nextTrackLast==-1?(this.tracks[t]=r.mixingFrom,this.queue.interrupt(r),this.queue.end(r),this.clearNext(r),r=r.mixingFrom,n=!1):this.clearNext(r));let o=this.trackEntry(t,e,i,r);return this.setCurrent(t,o,n),this.queue.drain(),o}addAnimation(t,e,i=!1,n=0){let r=this.data.skeletonData.findAnimation(e);if(!r)throw new Error("Animation not found: "+e);return this.addAnimationWith(t,r,i,n)}addAnimationWith(t,e,i=!1,n=0){if(!e)throw new Error("animation cannot be null.");let r=this.expandToIndex(t);if(r)for(;r.next;)r=r.next;let o=this.trackEntry(t,e,i,r);return r?(r.next=o,o.previous=r,n<=0&&(n+=r.getTrackComplete()-o.mixDuration)):(this.setCurrent(t,o,!0),this.queue.drain()),o.delay=n,o}setEmptyAnimation(t,e=0){let i=this.setAnimationWith(t,Kn.emptyAnimation(),!1);return i.mixDuration=e,i.trackEnd=e,i}addEmptyAnimation(t,e=0,i=0){let n=this.addAnimationWith(t,Kn.emptyAnimation(),!1,i);return i<=0&&(n.delay+=n.mixDuration-e),n.mixDuration=e,n.trackEnd=e,n}setEmptyAnimations(t=0){let e=this.queue.drainDisabled;this.queue.drainDisabled=!0;for(let i=0,n=this.tracks.length;i<n;i++){let r=this.tracks[i];r&&this.setEmptyAnimation(r.trackIndex,t)}this.queue.drainDisabled=e,this.queue.drain()}expandToIndex(t){return t<this.tracks.length?this.tracks[t]:(ut.ensureArrayCapacity(this.tracks,t+1,null),this.tracks.length=t+1,null)}trackEntry(t,e,i,n){let r=this.trackEntryPool.obtain();return r.reset(),r.trackIndex=t,r.animation=e,r.loop=i,r.holdPrevious=!1,r.reverse=!1,r.shortestRotation=!1,r.eventThreshold=0,r.alphaAttachmentThreshold=0,r.mixAttachmentThreshold=0,r.mixDrawOrderThreshold=0,r.animationStart=0,r.animationEnd=e.duration,r.animationLast=-1,r.nextAnimationLast=-1,r.delay=0,r.trackTime=0,r.trackLast=-1,r.nextTrackLast=-1,r.trackEnd=Number.MAX_VALUE,r.timeScale=1,r.alpha=1,r.mixTime=0,r.mixDuration=n?this.data.getMix(n.animation,e):0,r.interruptAlpha=1,r.totalAlpha=0,r.mixBlend=J.replace,r}clearNext(t){let e=t.next;for(;e;)this.queue.dispose(e),e=e.next;t.next=null}_animationsChanged(){this.animationsChanged=!1,this.propertyIDs.clear();let t=this.tracks;for(let e=0,i=t.length;e<i;e++){let n=t[e];if(n){for(;n.mixingFrom;)n=n.mixingFrom;do(!n.mixingTo||n.mixBlend!=J.add)&&this.computeHold(n),n=n.mixingTo;while(n)}}}computeHold(t){let e=t.mixingTo,i=t.animation.timelines,n=t.animation.timelines.length,r=t.timelineMode;r.length=n;let o=t.timelineHoldMix;o.length=0;let a=this.propertyIDs;if(e&&e.holdPrevious){for(let c=0;c<n;c++)r[c]=a.addAll(i[c].getPropertyIds())?xa:Kl;return}t:for(let c=0;c<n;c++){let l=i[c],h=l.getPropertyIds();if(!a.addAll(h))r[c]=_a;else if(!e||l instanceof Ms||l instanceof es||l instanceof wr||!e.animation.hasTimeline(h))r[c]=jl;else{for(let u=e.mixingTo;u;u=u.mixingTo)if(!u.animation.hasTimeline(h)){if(t.mixDuration>0){r[c]=g_,o[c]=u;continue t}break}r[c]=xa}}}getCurrent(t){return t>=this.tracks.length?null:this.tracks[t]}addListener(t){if(!t)throw new Error("listener cannot be null.");this.listeners.push(t)}removeListener(t){let e=this.listeners.indexOf(t);e>=0&&this.listeners.splice(e,1)}clearListeners(){this.listeners.length=0}clearListenerNotifications(){this.queue.clear()}};y(Kn,"_emptyAnimation",new Yc("<empty>",[],0));let go=Kn;class p_{constructor(){y(this,"animation",null);y(this,"previous",null);y(this,"next",null);y(this,"mixingFrom",null);y(this,"mixingTo",null);y(this,"listener",null);y(this,"trackIndex",0);y(this,"loop",!1);y(this,"holdPrevious",!1);y(this,"reverse",!1);y(this,"shortestRotation",!1);y(this,"eventThreshold",0);y(this,"mixAttachmentThreshold",0);y(this,"alphaAttachmentThreshold",0);y(this,"mixDrawOrderThreshold",0);y(this,"animationStart",0);y(this,"animationEnd",0);y(this,"animationLast",0);y(this,"nextAnimationLast",0);y(this,"delay",0);y(this,"trackTime",0);y(this,"trackLast",0);y(this,"nextTrackLast",0);y(this,"trackEnd",0);y(this,"timeScale",0);y(this,"alpha",0);y(this,"mixTime",0);y(this,"_mixDuration",0);y(this,"interruptAlpha",0);y(this,"totalAlpha",0);y(this,"mixBlend",J.replace);y(this,"timelineMode",new Array);y(this,"timelineHoldMix",new Array);y(this,"timelinesRotation",new Array)}get mixDuration(){return this._mixDuration}set mixDuration(t){this._mixDuration=t}setMixDurationWithDelay(t,e){this._mixDuration=t,this.previous!=null&&e<=0&&(e+=this.previous.getTrackComplete()-t),this.delay=e}reset(){this.next=null,this.previous=null,this.mixingFrom=null,this.mixingTo=null,this.animation=null,this.listener=null,this.timelineMode.length=0,this.timelineHoldMix.length=0,this.timelinesRotation.length=0}getAnimationTime(){if(this.loop){let t=this.animationEnd-this.animationStart;return t==0?this.animationStart:this.trackTime%t+this.animationStart}return Math.min(this.trackTime+this.animationStart,this.animationEnd)}setAnimationLast(t){this.animationLast=t,this.nextAnimationLast=t}isComplete(){return this.trackTime>=this.animationEnd-this.animationStart}resetRotationDirections(){this.timelinesRotation.length=0}getTrackComplete(){let t=this.animationEnd-this.animationStart;if(t!=0){if(this.loop)return t*(1+(this.trackTime/t|0));if(this.trackTime<t)return t}return this.trackTime}wasApplied(){return this.nextTrackLast!=-1}isNextReady(){return this.next!=null&&this.nextTrackLast-this.next.delay>=0}}class m_{constructor(t){y(this,"objects",[]);y(this,"drainDisabled",!1);y(this,"animState");this.animState=t}start(t){this.objects.push(He.start),this.objects.push(t),this.animState.animationsChanged=!0}interrupt(t){this.objects.push(He.interrupt),this.objects.push(t)}end(t){this.objects.push(He.end),this.objects.push(t),this.animState.animationsChanged=!0}dispose(t){this.objects.push(He.dispose),this.objects.push(t)}complete(t){this.objects.push(He.complete),this.objects.push(t)}event(t,e){this.objects.push(He.event),this.objects.push(t),this.objects.push(e)}drain(){if(this.drainDisabled)return;this.drainDisabled=!0;let t=this.objects,e=this.animState.listeners;for(let i=0;i<t.length;i+=2){let n=t[i],r=t[i+1];switch(n){case He.start:r.listener&&r.listener.start&&r.listener.start(r);for(let a=0;a<e.length;a++){let c=e[a];c.start&&c.start(r)}break;case He.interrupt:r.listener&&r.listener.interrupt&&r.listener.interrupt(r);for(let a=0;a<e.length;a++){let c=e[a];c.interrupt&&c.interrupt(r)}break;case He.end:r.listener&&r.listener.end&&r.listener.end(r);for(let a=0;a<e.length;a++){let c=e[a];c.end&&c.end(r)}case He.dispose:r.listener&&r.listener.dispose&&r.listener.dispose(r);for(let a=0;a<e.length;a++){let c=e[a];c.dispose&&c.dispose(r)}this.animState.trackEntryPool.free(r);break;case He.complete:r.listener&&r.listener.complete&&r.listener.complete(r);for(let a=0;a<e.length;a++){let c=e[a];c.complete&&c.complete(r)}break;case He.event:let o=t[i+++2];r.listener&&r.listener.event&&r.listener.event(r,o);for(let a=0;a<e.length;a++){let c=e[a];c.event&&c.event(r,o)}break}}this.clear(),this.drainDisabled=!1}clear(){this.objects.length=0}}var He;(function(s){s[s.start=0]="start",s[s.interrupt=1]="interrupt",s[s.end=2]="end",s[s.dispose=3]="dispose",s[s.complete=4]="complete",s[s.event=5]="event"})(He||(He={}));const _a=0,jl=1,Kl=2,xa=3,g_=4,Zl=1,__=2;class x_{constructor(t){y(this,"skeletonData");y(this,"animationToMixTime",{});y(this,"defaultMix",0);if(!t)throw new Error("skeletonData cannot be null.");this.skeletonData=t}setMix(t,e,i){let n=this.skeletonData.findAnimation(t);if(!n)throw new Error("Animation not found: "+t);let r=this.skeletonData.findAnimation(e);if(!r)throw new Error("Animation not found: "+e);this.setMixWith(n,r,i)}setMixWith(t,e,i){if(!t)throw new Error("from cannot be null.");if(!e)throw new Error("to cannot be null.");let n=t.name+"."+e.name;this.animationToMixTime[n]=i}getMix(t,e){let i=t.name+"."+e.name,n=this.animationToMixTime[i];return n===void 0?this.defaultMix:n}}class Io extends _i{constructor(e){super(e);y(this,"color",new Zt(1,1,1,1))}copy(){let e=new Io(this.name);return this.copyTo(e),e.color.setFromColor(this.color),e}}class Us extends _i{constructor(e){super(e);y(this,"endSlot",null);y(this,"color",new Zt(.2275,.2275,.8078,1))}copy(){let e=new Us(this.name);return this.copyTo(e),e.endSlot=this.endSlot,e.color.setFromColor(this.color),e}}class v_{constructor(t){y(this,"_image");this._image=t}getImage(){return this._image}}var Ae;(function(s){s[s.Nearest=9728]="Nearest",s[s.Linear=9729]="Linear",s[s.MipMap=9987]="MipMap",s[s.MipMapNearestNearest=9984]="MipMapNearestNearest",s[s.MipMapLinearNearest=9985]="MipMapLinearNearest",s[s.MipMapNearestLinear=9986]="MipMapNearestLinear",s[s.MipMapLinearLinear=9987]="MipMapLinearLinear"})(Ae||(Ae={}));var Bi;(function(s){s[s.MirroredRepeat=33648]="MirroredRepeat",s[s.ClampToEdge=33071]="ClampToEdge",s[s.Repeat=10497]="Repeat"})(Bi||(Bi={}));class y_{constructor(){y(this,"texture");y(this,"u",0);y(this,"v",0);y(this,"u2",0);y(this,"v2",0);y(this,"width",0);y(this,"height",0);y(this,"degrees",0);y(this,"offsetX",0);y(this,"offsetY",0);y(this,"originalWidth",0);y(this,"originalHeight",0)}}class M_{constructor(t){y(this,"pages",new Array);y(this,"regions",new Array);let e=new S_(t),i=new Array(4),n={};n.size=h=>{h.width=parseInt(i[1]),h.height=parseInt(i[2])},n.format=()=>{},n.filter=h=>{h.minFilter=ut.enumValue(Ae,i[1]),h.magFilter=ut.enumValue(Ae,i[2])},n.repeat=h=>{i[1].indexOf("x")!=-1&&(h.uWrap=Bi.Repeat),i[1].indexOf("y")!=-1&&(h.vWrap=Bi.Repeat)},n.pma=h=>{h.pma=i[1]=="true"};var r={};r.xy=h=>{h.x=parseInt(i[1]),h.y=parseInt(i[2])},r.size=h=>{h.width=parseInt(i[1]),h.height=parseInt(i[2])},r.bounds=h=>{h.x=parseInt(i[1]),h.y=parseInt(i[2]),h.width=parseInt(i[3]),h.height=parseInt(i[4])},r.offset=h=>{h.offsetX=parseInt(i[1]),h.offsetY=parseInt(i[2])},r.orig=h=>{h.originalWidth=parseInt(i[1]),h.originalHeight=parseInt(i[2])},r.offsets=h=>{h.offsetX=parseInt(i[1]),h.offsetY=parseInt(i[2]),h.originalWidth=parseInt(i[3]),h.originalHeight=parseInt(i[4])},r.rotate=h=>{let u=i[1];u=="true"?h.degrees=90:u!="false"&&(h.degrees=parseInt(u))},r.index=h=>{h.index=parseInt(i[1])};let o=e.readLine();for(;o&&o.trim().length==0;)o=e.readLine();for(;!(!o||o.trim().length==0||e.readEntry(i,o)==0);)o=e.readLine();let a=null,c=null,l=null;for(;o!==null;)if(o.trim().length==0)a=null,o=e.readLine();else if(a){let h=new qc(a,o);for(;;){let u=e.readEntry(i,o=e.readLine());if(u==0)break;let d=r[i[0]];if(d)d(h);else{c||(c=[]),l||(l=[]),c.push(i[0]);let f=[];for(let g=0;g<u;g++)f.push(parseInt(i[g+1]));l.push(f)}}h.originalWidth==0&&h.originalHeight==0&&(h.originalWidth=h.width,h.originalHeight=h.height),c&&c.length>0&&l&&l.length>0&&(h.names=c,h.values=l,c=null,l=null),h.u=h.x/a.width,h.v=h.y/a.height,h.degrees==90?(h.u2=(h.x+h.height)/a.width,h.v2=(h.y+h.width)/a.height):(h.u2=(h.x+h.width)/a.width,h.v2=(h.y+h.height)/a.height),this.regions.push(h)}else{for(a=new b_(o.trim());e.readEntry(i,o=e.readLine())!=0;){let h=n[i[0]];h&&h(a)}this.pages.push(a)}}findRegion(t){for(let e=0;e<this.regions.length;e++)if(this.regions[e].name==t)return this.regions[e];return null}setTextures(t,e=""){for(let i of this.pages)i.setTexture(t.get(e+i.name))}dispose(){var t;for(let e=0;e<this.pages.length;e++)(t=this.pages[e].texture)==null||t.dispose()}}class S_{constructor(t){y(this,"lines");y(this,"index",0);this.lines=t.split(/\r\n|\r|\n/)}readLine(){return this.index>=this.lines.length?null:this.lines[this.index++]}readEntry(t,e){if(!e||(e=e.trim(),e.length==0))return 0;let i=e.indexOf(":");if(i==-1)return 0;t[0]=e.substr(0,i).trim();for(let n=1,r=i+1;;n++){let o=e.indexOf(",",r);if(o==-1)return t[n]=e.substr(r).trim(),n;if(t[n]=e.substr(r,o-r).trim(),r=o+1,n==4)return 4}}}class b_{constructor(t){y(this,"name");y(this,"minFilter",Ae.Nearest);y(this,"magFilter",Ae.Nearest);y(this,"uWrap",Bi.ClampToEdge);y(this,"vWrap",Bi.ClampToEdge);y(this,"texture",null);y(this,"width",0);y(this,"height",0);y(this,"pma",!1);y(this,"regions",new Array);this.name=t}setTexture(t){this.texture=t,t.setFilters(this.minFilter,this.magFilter),t.setWraps(this.uWrap,this.vWrap);for(let e of this.regions)e.texture=t}}class qc extends y_{constructor(e,i){super();y(this,"page");y(this,"name");y(this,"x",0);y(this,"y",0);y(this,"offsetX",0);y(this,"offsetY",0);y(this,"originalWidth",0);y(this,"originalHeight",0);y(this,"index",0);y(this,"degrees",0);y(this,"names",null);y(this,"values",null);this.page=e,this.name=i,e.regions.push(this)}}class An extends _i{constructor(e,i){super(e);y(this,"region",null);y(this,"path");y(this,"regionUVs",[]);y(this,"uvs",[]);y(this,"triangles",[]);y(this,"color",new Zt(1,1,1,1));y(this,"width",0);y(this,"height",0);y(this,"hullLength",0);y(this,"edges",[]);y(this,"parentMesh",null);y(this,"sequence",null);y(this,"tempColor",new Zt(0,0,0,0));this.path=i}updateRegion(){if(!this.region)throw new Error("Region not set.");let e=this.regionUVs;(!this.uvs||this.uvs.length!=e.length)&&(this.uvs=ut.newFloatArray(e.length));let i=this.uvs,n=this.uvs.length,r=this.region.u,o=this.region.v,a=0,c=0;if(this.region instanceof qc){let l=this.region,h=l.page,u=h.width,d=h.height;switch(l.degrees){case 90:r-=(l.originalHeight-l.offsetY-l.height)/u,o-=(l.originalWidth-l.offsetX-l.width)/d,a=l.originalHeight/u,c=l.originalWidth/d;for(let f=0;f<n;f+=2)i[f]=r+e[f+1]*a,i[f+1]=o+(1-e[f])*c;return;case 180:r-=(l.originalWidth-l.offsetX-l.width)/u,o-=l.offsetY/d,a=l.originalWidth/u,c=l.originalHeight/d;for(let f=0;f<n;f+=2)i[f]=r+(1-e[f])*a,i[f+1]=o+(1-e[f+1])*c;return;case 270:r-=l.offsetY/u,o-=l.offsetX/d,a=l.originalHeight/u,c=l.originalWidth/d;for(let f=0;f<n;f+=2)i[f]=r+(1-e[f+1])*a,i[f+1]=o+e[f]*c;return}r-=l.offsetX/u,o-=(l.originalHeight-l.offsetY-l.height)/d,a=l.originalWidth/u,c=l.originalHeight/d}else this.region?(a=this.region.u2-r,c=this.region.v2-o):(r=o=0,a=c=1);for(let l=0;l<n;l+=2)i[l]=r+e[l]*a,i[l+1]=o+e[l+1]*c}getParentMesh(){return this.parentMesh}setParentMesh(e){this.parentMesh=e,e&&(this.bones=e.bones,this.vertices=e.vertices,this.worldVerticesLength=e.worldVerticesLength,this.regionUVs=e.regionUVs,this.triangles=e.triangles,this.hullLength=e.hullLength,this.worldVerticesLength=e.worldVerticesLength)}copy(){if(this.parentMesh)return this.newLinkedMesh();let e=new An(this.name,this.path);return e.region=this.region,e.color.setFromColor(this.color),this.copyTo(e),e.regionUVs=new Array(this.regionUVs.length),ut.arrayCopy(this.regionUVs,0,e.regionUVs,0,this.regionUVs.length),e.uvs=new Array(this.uvs.length),ut.arrayCopy(this.uvs,0,e.uvs,0,this.uvs.length),e.triangles=new Array(this.triangles.length),ut.arrayCopy(this.triangles,0,e.triangles,0,this.triangles.length),e.hullLength=this.hullLength,e.sequence=this.sequence!=null?this.sequence.copy():null,this.edges&&(e.edges=new Array(this.edges.length),ut.arrayCopy(this.edges,0,e.edges,0,this.edges.length)),e.width=this.width,e.height=this.height,e}computeWorldVertices(e,i,n,r,o,a){this.sequence!=null&&this.sequence.apply(e,this),super.computeWorldVertices(e,i,n,r,o,a)}newLinkedMesh(){let e=new An(this.name,this.path);return e.region=this.region,e.color.setFromColor(this.color),e.timelineAttachment=this.timelineAttachment,e.setParentMesh(this.parentMesh?this.parentMesh:this),e.region!=null&&e.updateRegion(),e}}class hs extends _i{constructor(e){super(e);y(this,"lengths",[]);y(this,"closed",!1);y(this,"constantSpeed",!1);y(this,"color",new Zt(1,1,1,1))}copy(){let e=new hs(this.name);return this.copyTo(e),e.lengths=new Array(this.lengths.length),ut.arrayCopy(this.lengths,0,e.lengths,0,this.lengths.length),e.closed=closed,e.constantSpeed=this.constantSpeed,e.color.setFromColor(this.color),e}}class Uo extends _i{constructor(e){super(e);y(this,"x",0);y(this,"y",0);y(this,"rotation",0);y(this,"color",new Zt(.38,.94,0,1))}computeWorldPosition(e,i){return i.x=this.x*e.a+this.y*e.b+e.worldX,i.y=this.x*e.c+this.y*e.d+e.worldY,i}computeWorldRotation(e){const i=this.rotation*rt.degRad,n=Math.cos(i),r=Math.sin(i),o=n*e.a+r*e.b,a=n*e.c+r*e.d;return rt.atan2Deg(a,o)}copy(){let e=new Uo(this.name);return e.x=this.x,e.y=this.y,e.rotation=this.rotation,e.color.setFromColor(this.color),e}}const Yt=class Yt extends Wc{constructor(e,i){super(e);y(this,"x",0);y(this,"y",0);y(this,"scaleX",1);y(this,"scaleY",1);y(this,"rotation",0);y(this,"width",0);y(this,"height",0);y(this,"color",new Zt(1,1,1,1));y(this,"path");y(this,"region",null);y(this,"sequence",null);y(this,"offset",ut.newFloatArray(8));y(this,"uvs",ut.newFloatArray(8));y(this,"tempColor",new Zt(1,1,1,1));this.path=i}updateRegion(){if(!this.region)throw new Error("Region not set.");let e=this.region,i=this.uvs;if(e==null){i[0]=0,i[1]=0,i[2]=0,i[3]=1,i[4]=1,i[5]=1,i[6]=1,i[7]=0;return}let n=this.width/this.region.originalWidth*this.scaleX,r=this.height/this.region.originalHeight*this.scaleY,o=-this.width/2*this.scaleX+this.region.offsetX*n,a=-this.height/2*this.scaleY+this.region.offsetY*r,c=o+this.region.width*n,l=a+this.region.height*r,h=this.rotation*rt.degRad,u=Math.cos(h),d=Math.sin(h),f=this.x,g=this.y,_=o*u+f,m=o*d,p=a*u+g,M=a*d,v=c*u+f,x=c*d,A=l*u+g,S=l*d,b=this.offset;b[0]=_-M,b[1]=p+m,b[2]=_-S,b[3]=A+m,b[4]=v-S,b[5]=A+x,b[6]=v-M,b[7]=p+x,e.degrees==90?(i[0]=e.u2,i[1]=e.v2,i[2]=e.u,i[3]=e.v2,i[4]=e.u,i[5]=e.v,i[6]=e.u2,i[7]=e.v):(i[0]=e.u,i[1]=e.v2,i[2]=e.u,i[3]=e.v,i[4]=e.u2,i[5]=e.v,i[6]=e.u2,i[7]=e.v2)}computeWorldVertices(e,i,n,r){this.sequence!=null&&this.sequence.apply(e,this);let o=e.bone,a=this.offset,c=o.worldX,l=o.worldY,h=o.a,u=o.b,d=o.c,f=o.d,g=0,_=0;g=a[0],_=a[1],i[n]=g*h+_*u+c,i[n+1]=g*d+_*f+l,n+=r,g=a[2],_=a[3],i[n]=g*h+_*u+c,i[n+1]=g*d+_*f+l,n+=r,g=a[4],_=a[5],i[n]=g*h+_*u+c,i[n+1]=g*d+_*f+l,n+=r,g=a[6],_=a[7],i[n]=g*h+_*u+c,i[n+1]=g*d+_*f+l}copy(){let e=new Yt(this.name,this.path);return e.region=this.region,e.x=this.x,e.y=this.y,e.scaleX=this.scaleX,e.scaleY=this.scaleY,e.rotation=this.rotation,e.width=this.width,e.height=this.height,ut.arrayCopy(this.uvs,0,e.uvs,0,8),ut.arrayCopy(this.offset,0,e.offset,0,8),e.color.setFromColor(this.color),e.sequence=this.sequence!=null?this.sequence.copy():null,e}};y(Yt,"X1",0),y(Yt,"Y1",1),y(Yt,"C1R",2),y(Yt,"C1G",3),y(Yt,"C1B",4),y(Yt,"C1A",5),y(Yt,"U1",6),y(Yt,"V1",7),y(Yt,"X2",8),y(Yt,"Y2",9),y(Yt,"C2R",10),y(Yt,"C2G",11),y(Yt,"C2B",12),y(Yt,"C2A",13),y(Yt,"U2",14),y(Yt,"V2",15),y(Yt,"X3",16),y(Yt,"Y3",17),y(Yt,"C3R",18),y(Yt,"C3G",19),y(Yt,"C3B",20),y(Yt,"C3A",21),y(Yt,"U3",22),y(Yt,"V3",23),y(Yt,"X4",24),y(Yt,"Y4",25),y(Yt,"C4R",26),y(Yt,"C4G",27),y(Yt,"C4B",28),y(Yt,"C4A",29),y(Yt,"U4",30),y(Yt,"V4",31);let Rs=Yt;class E_{constructor(t){y(this,"atlas");this.atlas=t}loadSequence(t,e,i){let n=i.regions;for(let r=0,o=n.length;r<o;r++){let a=i.getPath(e,r),c=this.atlas.findRegion(a);if(c==null)throw new Error("Region not found in atlas: "+a+" (sequence: "+t+")");n[r]=c}}newRegionAttachment(t,e,i,n){let r=new Rs(e,i);if(n!=null)this.loadSequence(e,i,n);else{let o=this.atlas.findRegion(i);if(!o)throw new Error("Region not found in atlas: "+i+" (region attachment: "+e+")");r.region=o}return r}newMeshAttachment(t,e,i,n){let r=new An(e,i);if(n!=null)this.loadSequence(e,i,n);else{let o=this.atlas.findRegion(i);if(!o)throw new Error("Region not found in atlas: "+i+" (mesh attachment: "+e+")");r.region=o}return r}newBoundingBoxAttachment(t,e){return new Io(e)}newPathAttachment(t,e){return new hs(e)}newPointAttachment(t,e){return new Uo(e)}newClippingAttachment(t,e){return new Us(e)}}class w_{constructor(t,e,i){y(this,"index",0);y(this,"name");y(this,"parent",null);y(this,"length",0);y(this,"x",0);y(this,"y",0);y(this,"rotation",0);y(this,"scaleX",1);y(this,"scaleY",1);y(this,"shearX",0);y(this,"shearY",0);y(this,"inherit",fe.Normal);y(this,"skinRequired",!1);y(this,"color",new Zt);y(this,"icon");y(this,"visible",!1);if(t<0)throw new Error("index must be >= 0.");if(!e)throw new Error("name cannot be null.");this.index=t,this.name=e,this.parent=i}}var fe;(function(s){s[s.Normal=0]="Normal",s[s.OnlyTranslation=1]="OnlyTranslation",s[s.NoRotationOrReflection=2]="NoRotationOrReflection",s[s.NoScale=3]="NoScale",s[s.NoScaleOrReflection=4]="NoScaleOrReflection"})(fe||(fe={}));class Jl{constructor(t,e,i){y(this,"data");y(this,"skeleton");y(this,"parent",null);y(this,"children",new Array);y(this,"x",0);y(this,"y",0);y(this,"rotation",0);y(this,"scaleX",0);y(this,"scaleY",0);y(this,"shearX",0);y(this,"shearY",0);y(this,"ax",0);y(this,"ay",0);y(this,"arotation",0);y(this,"ascaleX",0);y(this,"ascaleY",0);y(this,"ashearX",0);y(this,"ashearY",0);y(this,"a",0);y(this,"b",0);y(this,"c",0);y(this,"d",0);y(this,"worldY",0);y(this,"worldX",0);y(this,"inherit",fe.Normal);y(this,"sorted",!1);y(this,"active",!1);if(!t)throw new Error("data cannot be null.");if(!e)throw new Error("skeleton cannot be null.");this.data=t,this.skeleton=e,this.parent=i,this.setToSetupPose()}isActive(){return this.active}update(t){this.updateWorldTransformWith(this.ax,this.ay,this.arotation,this.ascaleX,this.ascaleY,this.ashearX,this.ashearY)}updateWorldTransform(){this.updateWorldTransformWith(this.x,this.y,this.rotation,this.scaleX,this.scaleY,this.shearX,this.shearY)}updateWorldTransformWith(t,e,i,n,r,o,a){this.ax=t,this.ay=e,this.arotation=i,this.ascaleX=n,this.ascaleY=r,this.ashearX=o,this.ashearY=a;let c=this.parent;if(!c){let f=this.skeleton;const g=f.scaleX,_=f.scaleY,m=(i+o)*rt.degRad,p=(i+90+a)*rt.degRad;this.a=Math.cos(m)*n*g,this.b=Math.cos(p)*r*g,this.c=Math.sin(m)*n*_,this.d=Math.sin(p)*r*_,this.worldX=t*g+f.x,this.worldY=e*_+f.y;return}let l=c.a,h=c.b,u=c.c,d=c.d;switch(this.worldX=l*t+h*e+c.worldX,this.worldY=u*t+d*e+c.worldY,this.inherit){case fe.Normal:{const f=(i+o)*rt.degRad,g=(i+90+a)*rt.degRad,_=Math.cos(f)*n,m=Math.cos(g)*r,p=Math.sin(f)*n,M=Math.sin(g)*r;this.a=l*_+h*p,this.b=l*m+h*M,this.c=u*_+d*p,this.d=u*m+d*M;return}case fe.OnlyTranslation:{const f=(i+o)*rt.degRad,g=(i+90+a)*rt.degRad;this.a=Math.cos(f)*n,this.b=Math.cos(g)*r,this.c=Math.sin(f)*n,this.d=Math.sin(g)*r;break}case fe.NoRotationOrReflection:{let f=1/this.skeleton.scaleX,g=1/this.skeleton.scaleY;l*=f,u*=g;let _=l*l+u*u,m=0;_>1e-4?(_=Math.abs(l*d*g-h*f*u)/_,h=u*_,d=l*_,m=Math.atan2(u,l)*rt.radDeg):(l=0,u=0,m=90-Math.atan2(d,h)*rt.radDeg);const p=(i+o-m)*rt.degRad,M=(i+a-m+90)*rt.degRad,v=Math.cos(p)*n,x=Math.cos(M)*r,A=Math.sin(p)*n,S=Math.sin(M)*r;this.a=l*v-h*A,this.b=l*x-h*S,this.c=u*v+d*A,this.d=u*x+d*S;break}case fe.NoScale:case fe.NoScaleOrReflection:{i*=rt.degRad;const f=Math.cos(i),g=Math.sin(i);let _=(l*f+h*g)/this.skeleton.scaleX,m=(u*f+d*g)/this.skeleton.scaleY,p=Math.sqrt(_*_+m*m);p>1e-5&&(p=1/p),_*=p,m*=p,p=Math.sqrt(_*_+m*m),this.inherit==fe.NoScale&&l*d-h*u<0!=(this.skeleton.scaleX<0!=this.skeleton.scaleY<0)&&(p=-p),i=Math.PI/2+Math.atan2(m,_);const M=Math.cos(i)*p,v=Math.sin(i)*p;o*=rt.degRad,a=(90+a)*rt.degRad;const x=Math.cos(o)*n,A=Math.cos(a)*r,S=Math.sin(o)*n,b=Math.sin(a)*r;this.a=_*x+M*S,this.b=_*A+M*b,this.c=m*x+v*S,this.d=m*A+v*b;break}}this.a*=this.skeleton.scaleX,this.b*=this.skeleton.scaleX,this.c*=this.skeleton.scaleY,this.d*=this.skeleton.scaleY}setToSetupPose(){let t=this.data;this.x=t.x,this.y=t.y,this.rotation=t.rotation,this.scaleX=t.scaleX,this.scaleY=t.scaleY,this.shearX=t.shearX,this.shearY=t.shearY,this.inherit=t.inherit}updateAppliedTransform(){let t=this.parent;if(!t){this.ax=this.worldX-this.skeleton.x,this.ay=this.worldY-this.skeleton.y,this.arotation=Math.atan2(this.c,this.a)*rt.radDeg,this.ascaleX=Math.sqrt(this.a*this.a+this.c*this.c),this.ascaleY=Math.sqrt(this.b*this.b+this.d*this.d),this.ashearX=0,this.ashearY=Math.atan2(this.a*this.b+this.c*this.d,this.a*this.d-this.b*this.c)*rt.radDeg;return}let e=t.a,i=t.b,n=t.c,r=t.d,o=1/(e*r-i*n),a=r*o,c=i*o,l=n*o,h=e*o,u=this.worldX-t.worldX,d=this.worldY-t.worldY;this.ax=u*a-d*c,this.ay=d*h-u*l;let f,g,_,m;if(this.inherit==fe.OnlyTranslation)f=this.a,g=this.b,_=this.c,m=this.d;else{switch(this.inherit){case fe.NoRotationOrReflection:{let A=Math.abs(e*r-i*n)/(e*e+n*n);i=-n*this.skeleton.scaleX*A/this.skeleton.scaleY,r=e*this.skeleton.scaleY*A/this.skeleton.scaleX,o=1/(e*r-i*n),a=r*o,c=i*o;break}case fe.NoScale:case fe.NoScaleOrReflection:let p=rt.cosDeg(this.rotation),M=rt.sinDeg(this.rotation);e=(e*p+i*M)/this.skeleton.scaleX,n=(n*p+r*M)/this.skeleton.scaleY;let v=Math.sqrt(e*e+n*n);v>1e-5&&(v=1/v),e*=v,n*=v,v=Math.sqrt(e*e+n*n),this.inherit==fe.NoScale&&o<0!=(this.skeleton.scaleX<0!=this.skeleton.scaleY<0)&&(v=-v);let x=rt.PI/2+Math.atan2(n,e);i=Math.cos(x)*v,r=Math.sin(x)*v,o=1/(e*r-i*n),a=r*o,c=i*o,l=n*o,h=e*o}f=a*this.a-c*this.c,g=a*this.b-c*this.d,_=h*this.c-l*this.a,m=h*this.d-l*this.b}if(this.ashearX=0,this.ascaleX=Math.sqrt(f*f+_*_),this.ascaleX>1e-4){let p=f*m-g*_;this.ascaleY=p/this.ascaleX,this.ashearY=-Math.atan2(f*g+_*m,p)*rt.radDeg,this.arotation=Math.atan2(_,f)*rt.radDeg}else this.ascaleX=0,this.ascaleY=Math.sqrt(g*g+m*m),this.ashearY=0,this.arotation=90-Math.atan2(m,g)*rt.radDeg}getWorldRotationX(){return Math.atan2(this.c,this.a)*rt.radDeg}getWorldRotationY(){return Math.atan2(this.d,this.b)*rt.radDeg}getWorldScaleX(){return Math.sqrt(this.a*this.a+this.c*this.c)}getWorldScaleY(){return Math.sqrt(this.b*this.b+this.d*this.d)}worldToLocal(t){let e=1/(this.a*this.d-this.b*this.c),i=t.x-this.worldX,n=t.y-this.worldY;return t.x=i*this.d*e-n*this.b*e,t.y=n*this.a*e-i*this.c*e,t}localToWorld(t){let e=t.x,i=t.y;return t.x=e*this.a+i*this.b+this.worldX,t.y=e*this.c+i*this.d+this.worldY,t}worldToParent(t){if(t==null)throw new Error("world cannot be null.");return this.parent==null?t:this.parent.worldToLocal(t)}parentToWorld(t){if(t==null)throw new Error("world cannot be null.");return this.parent==null?t:this.parent.localToWorld(t)}worldToLocalRotation(t){let e=rt.sinDeg(t),i=rt.cosDeg(t);return Math.atan2(this.a*e-this.c*i,this.d*i-this.b*e)*rt.radDeg+this.rotation-this.shearX}localToWorldRotation(t){t-=this.rotation-this.shearX;let e=rt.sinDeg(t),i=rt.cosDeg(t);return Math.atan2(i*this.c+e*this.d,i*this.a+e*this.b)*rt.radDeg}rotateWorld(t){t*=rt.degRad;const e=Math.sin(t),i=Math.cos(t),n=this.a,r=this.b;this.a=i*n-e*this.c,this.b=i*r-e*this.d,this.c=e*n+i*this.c,this.d=e*r+i*this.d}}class Fr{constructor(t,e,i){y(this,"name");y(this,"order");y(this,"skinRequired");this.name=t,this.order=e,this.skinRequired=i}}class A_{constructor(t,e="",i=new $c){y(this,"pathPrefix","");y(this,"textureLoader");y(this,"downloader");y(this,"assets",{});y(this,"errors",{});y(this,"toLoad",0);y(this,"loaded",0);this.textureLoader=t,this.pathPrefix=e,this.downloader=i}start(t){return this.toLoad++,this.pathPrefix+t}success(t,e,i){this.toLoad--,this.loaded++,this.assets[e]=i,t&&t(e,i)}error(t,e,i){this.toLoad--,this.loaded++,this.errors[e]=i,t&&t(e,i)}loadAll(){return new Promise((e,i)=>{let n=()=>{if(this.isLoadingComplete()){this.hasErrors()?i(this.errors):e(this);return}requestAnimationFrame(n)};requestAnimationFrame(n)})}setRawDataURI(t,e){this.downloader.rawDataUris[this.pathPrefix+t]=e}loadBinary(t,e=()=>{},i=()=>{}){t=this.start(t),this.downloader.downloadBinary(t,n=>{this.success(e,t,n)},(n,r)=>{this.error(i,t,`Couldn't load binary ${t}: status ${n}, ${r}`)})}loadText(t,e=()=>{},i=()=>{}){t=this.start(t),this.downloader.downloadText(t,n=>{this.success(e,t,n)},(n,r)=>{this.error(i,t,`Couldn't load text ${t}: status ${n}, ${r}`)})}loadJson(t,e=()=>{},i=()=>{}){t=this.start(t),this.downloader.downloadJson(t,n=>{this.success(e,t,n)},(n,r)=>{this.error(i,t,`Couldn't load JSON ${t}: status ${n}, ${r}`)})}loadTexture(t,e=()=>{},i=()=>{}){if(t=this.start(t),!!!(typeof window<"u"&&typeof navigator<"u"&&window.document))fetch(t,{mode:"cors"}).then(o=>o.ok?o.blob():(this.error(i,t,`Couldn't load image: ${t}`),null)).then(o=>o?createImageBitmap(o,{premultiplyAlpha:"none",colorSpaceConversion:"none"}):null).then(o=>{o&&this.success(e,t,this.textureLoader(o))});else{let o=new Image;o.crossOrigin="anonymous",o.onload=()=>{this.success(e,t,this.textureLoader(o))},o.onerror=()=>{this.error(i,t,`Couldn't load image: ${t}`)},this.downloader.rawDataUris[t]&&(t=this.downloader.rawDataUris[t]),o.src=t}}loadTextureAtlas(t,e=()=>{},i=()=>{},n){let r=t.lastIndexOf("/"),o=r>=0?t.substring(0,r+1):"";t=this.start(t),this.downloader.downloadText(t,a=>{try{let c=new M_(a),l=c.pages.length,h=!1;for(let u of c.pages)this.loadTexture(n?n[u.name]:o+u.name,(d,f)=>{h||(u.setTexture(f),--l==0&&this.success(e,t,c))},(d,f)=>{h||this.error(i,t,`Couldn't load texture atlas ${t} page image: ${d}`),h=!0})}catch(c){this.error(i,t,`Couldn't parse texture atlas ${t}: ${c.message}`)}},(a,c)=>{this.error(i,t,`Couldn't load texture atlas ${t}: status ${a}, ${c}`)})}get(t){return this.assets[this.pathPrefix+t]}require(t){t=this.pathPrefix+t;let e=this.assets[t];if(e)return e;let i=this.errors[t];throw Error("Asset not found: "+t+(i?`
`+i:""))}remove(t){t=this.pathPrefix+t;let e=this.assets[t];return e.dispose&&e.dispose(),delete this.assets[t],e}removeAll(){for(let t in this.assets){let e=this.assets[t];e.dispose&&e.dispose()}this.assets={}}isLoadingComplete(){return this.toLoad==0}getToLoad(){return this.toLoad}getLoaded(){return this.loaded}dispose(){this.removeAll()}hasErrors(){return Object.keys(this.errors).length>0}getErrors(){return this.errors}}class $c{constructor(){y(this,"callbacks",{});y(this,"rawDataUris",{})}dataUriToString(t){if(!t.startsWith("data:"))throw new Error("Not a data URI.");let e=t.indexOf("base64,");return e!=-1?(e+=7,atob(t.substr(e))):t.substr(t.indexOf(",")+1)}base64ToUint8Array(t){for(var e=window.atob(t),i=e.length,n=new Uint8Array(i),r=0;r<i;r++)n[r]=e.charCodeAt(r);return n}dataUriToUint8Array(t){if(!t.startsWith("data:"))throw new Error("Not a data URI.");let e=t.indexOf("base64,");if(e==-1)throw new Error("Not a binary data URI.");return e+=7,this.base64ToUint8Array(t.substr(e))}downloadText(t,e,i){if(this.start(t,e,i))return;if(this.rawDataUris[t]){try{let o=this.rawDataUris[t];this.finish(t,200,this.dataUriToString(o))}catch(o){this.finish(t,400,JSON.stringify(o))}return}let n=new XMLHttpRequest;n.overrideMimeType("text/html"),n.open("GET",t,!0);let r=()=>{this.finish(t,n.status,n.responseText)};n.onload=r,n.onerror=r,n.send()}downloadJson(t,e,i){this.downloadText(t,n=>{e(JSON.parse(n))},i)}downloadBinary(t,e,i){if(this.start(t,e,i))return;if(this.rawDataUris[t]){try{let o=this.rawDataUris[t];this.finish(t,200,this.dataUriToUint8Array(o))}catch(o){this.finish(t,400,JSON.stringify(o))}return}let n=new XMLHttpRequest;n.open("GET",t,!0),n.responseType="arraybuffer";let r=()=>{this.finish(t,n.status,n.response)};n.onload=()=>{n.status==200||n.status==0?this.finish(t,200,new Uint8Array(n.response)):r()},n.onerror=r,n.send()}start(t,e,i){let n=this.callbacks[t];try{if(n)return!0;this.callbacks[t]=n=[]}finally{n.push(e,i)}}finish(t,e,i){let n=this.callbacks[t];delete this.callbacks[t];let r=e==200||e==0?[i]:[e,i];for(let o=r.length-1,a=n.length;o<a;o+=2)n[o].apply(null,r)}}class T_{constructor(t,e){y(this,"data");y(this,"intValue",0);y(this,"floatValue",0);y(this,"stringValue",null);y(this,"time",0);y(this,"volume",0);y(this,"balance",0);if(!e)throw new Error("data cannot be null.");this.time=t,this.data=e}}class C_{constructor(t){y(this,"name");y(this,"intValue",0);y(this,"floatValue",0);y(this,"stringValue",null);y(this,"audioPath",null);y(this,"volume",0);y(this,"balance",0);this.name=t}}class R_{constructor(t,e){y(this,"data");y(this,"bones");y(this,"target");y(this,"bendDirection",0);y(this,"compress",!1);y(this,"stretch",!1);y(this,"mix",1);y(this,"softness",0);y(this,"active",!1);if(!t)throw new Error("data cannot be null.");if(!e)throw new Error("skeleton cannot be null.");this.data=t,this.bones=new Array;for(let n=0;n<t.bones.length;n++){let r=e.findBone(t.bones[n].name);if(!r)throw new Error(`Couldn't find bone ${t.bones[n].name}`);this.bones.push(r)}let i=e.findBone(t.target.name);if(!i)throw new Error(`Couldn't find bone ${t.target.name}`);this.target=i,this.mix=t.mix,this.softness=t.softness,this.bendDirection=t.bendDirection,this.compress=t.compress,this.stretch=t.stretch}isActive(){return this.active}setToSetupPose(){const t=this.data;this.mix=t.mix,this.softness=t.softness,this.bendDirection=t.bendDirection,this.compress=t.compress,this.stretch=t.stretch}update(t){if(this.mix==0)return;let e=this.target,i=this.bones;switch(i.length){case 1:this.apply1(i[0],e.worldX,e.worldY,this.compress,this.stretch,this.data.uniform,this.mix);break;case 2:this.apply2(i[0],i[1],e.worldX,e.worldY,this.bendDirection,this.stretch,this.data.uniform,this.softness,this.mix);break}}apply1(t,e,i,n,r,o,a){let c=t.parent;if(!c)throw new Error("IK bone must have parent.");let l=c.a,h=c.b,u=c.c,d=c.d,f=-t.ashearX-t.arotation,g=0,_=0;switch(t.inherit){case fe.OnlyTranslation:g=(e-t.worldX)*rt.signum(t.skeleton.scaleX),_=(i-t.worldY)*rt.signum(t.skeleton.scaleY);break;case fe.NoRotationOrReflection:let M=Math.abs(l*d-h*u)/Math.max(1e-4,l*l+u*u),v=l/t.skeleton.scaleX,x=u/t.skeleton.scaleY;h=-x*M*t.skeleton.scaleX,d=v*M*t.skeleton.scaleY,f+=Math.atan2(x,v)*rt.radDeg;default:let A=e-c.worldX,S=i-c.worldY,b=l*d-h*u;Math.abs(b)<=1e-4?(g=0,_=0):(g=(A*d-S*h)/b-t.ax,_=(S*l-A*u)/b-t.ay)}f+=Math.atan2(_,g)*rt.radDeg,t.ascaleX<0&&(f+=180),f>180?f-=360:f<-180&&(f+=360);let m=t.ascaleX,p=t.ascaleY;if(n||r){switch(t.inherit){case fe.NoScale:case fe.NoScaleOrReflection:g=e-t.worldX,_=i-t.worldY}const M=t.data.length*m;if(M>1e-4){const v=g*g+_*_;if(n&&v<M*M||r&&v>M*M){const x=(Math.sqrt(v)/M-1)*a+1;m*=x,o&&(p*=x)}}}t.updateWorldTransformWith(t.ax,t.ay,t.arotation+f*a,m,p,t.ashearX,t.ashearY)}apply2(t,e,i,n,r,o,a,c,l){if(t.inherit!=fe.Normal||e.inherit!=fe.Normal)return;let h=t.ax,u=t.ay,d=t.ascaleX,f=t.ascaleY,g=d,_=f,m=e.ascaleX,p=0,M=0,v=0;d<0?(d=-d,p=180,v=-1):(p=0,v=1),f<0&&(f=-f,v=-v),m<0?(m=-m,M=180):M=0;let x=e.ax,A=0,S=0,b=0,C=t.a,E=t.b,w=t.c,P=t.d,O=Math.abs(d-f)<=1e-4;!O||o?(A=0,S=C*x+t.worldX,b=w*x+t.worldY):(A=e.ay,S=C*x+E*A+t.worldX,b=w*x+P*A+t.worldY);let U=t.parent;if(!U)throw new Error("IK parent must itself have a parent.");C=U.a,E=U.b,w=U.c,P=U.d;let L=C*P-E*w,I=S-U.worldX,B=b-U.worldY;L=Math.abs(L)<=1e-4?0:1/L;let G=(I*P-B*E)*L-h,H=(B*C-I*w)*L-u,Z=Math.sqrt(G*G+H*H),nt=e.data.length*m,ot,vt;if(Z<1e-4){this.apply1(t,i,n,!1,o,!1,l),e.updateWorldTransformWith(x,A,0,e.ascaleX,e.ascaleY,e.ashearX,e.ashearY);return}I=i-U.worldX,B=n-U.worldY;let at=(I*P-B*E)*L-h,W=(B*C-I*w)*L-u,K=at*at+W*W;if(c!=0){c*=d*(m+1)*.5;let _t=Math.sqrt(K),wt=_t-Z-nt*d+c;if(wt>0){let Rt=Math.min(1,wt/(c*2))-1;Rt=(wt-c*(1-Rt*Rt))/_t,at-=Rt*at,W-=Rt*W,K=at*at+W*W}}t:if(O){nt*=d;let _t=(K-Z*Z-nt*nt)/(2*Z*nt);_t<-1?(_t=-1,vt=Math.PI*r):_t>1?(_t=1,vt=0,o&&(C=(Math.sqrt(K)/(Z+nt)-1)*l+1,g*=C,a&&(_*=C))):vt=Math.acos(_t)*r,C=Z+nt*_t,E=nt*Math.sin(vt),ot=Math.atan2(W*C-at*E,at*C+W*E)}else{C=d*nt,E=f*nt;let _t=C*C,wt=E*E,Rt=Math.atan2(W,at);w=wt*Z*Z+_t*K-_t*wt;let Qt=-2*wt*Z,Vt=wt-_t;if(P=Qt*Qt-4*Vt*w,P>=0){let D=Math.sqrt(P);Qt<0&&(D=-D),D=-(Qt+D)*.5;let T=D/Vt,Y=w/D,tt=Math.abs(T)<Math.abs(Y)?T:Y;if(T=K-tt*tt,T>=0){B=Math.sqrt(T)*r,ot=Rt-Math.atan2(B,tt),vt=Math.atan2(B/f,(tt-Z)/d);break t}}let ue=rt.PI,N=Z-C,Pe=N*N,Xt=0,Wt=0,At=Z+C,se=At*At,Tt=0;w=-C*Z/(_t-wt),w>=-1&&w<=1&&(w=Math.acos(w),I=C*Math.cos(w)+Z,B=E*Math.sin(w),P=I*I+B*B,P<Pe&&(ue=w,Pe=P,N=I,Xt=B),P>se&&(Wt=w,se=P,At=I,Tt=B)),K<=(Pe+se)*.5?(ot=Rt-Math.atan2(Xt*r,N),vt=ue*r):(ot=Rt-Math.atan2(Tt*r,At),vt=Wt*r)}let mt=Math.atan2(A,x)*v,lt=t.arotation;ot=(ot-mt)*rt.radDeg+p-lt,ot>180?ot-=360:ot<-180&&(ot+=360),t.updateWorldTransformWith(h,u,lt+ot*l,g,_,0,0),lt=e.arotation,vt=((vt+mt)*rt.radDeg-e.ashearX)*v+M-lt,vt>180?vt-=360:vt<-180&&(vt+=360),e.updateWorldTransformWith(x,A,lt+vt*l,e.ascaleX,e.ascaleY,e.ashearX,e.ashearY)}}class P_ extends Fr{constructor(e){super(e,0,!1);y(this,"bones",new Array);y(this,"_target",null);y(this,"bendDirection",0);y(this,"compress",!1);y(this,"stretch",!1);y(this,"uniform",!1);y(this,"mix",0);y(this,"softness",0)}set target(e){this._target=e}get target(){if(this._target)return this._target;throw new Error("BoneData not set.")}}class D_ extends Fr{constructor(e){super(e,0,!1);y(this,"bones",new Array);y(this,"_target",null);y(this,"positionMode",sn.Fixed);y(this,"spacingMode",Be.Fixed);y(this,"rotateMode",Sn.Chain);y(this,"offsetRotation",0);y(this,"position",0);y(this,"spacing",0);y(this,"mixRotate",0);y(this,"mixX",0);y(this,"mixY",0)}set target(e){this._target=e}get target(){if(this._target)return this._target;throw new Error("SlotData not set.")}}var sn;(function(s){s[s.Fixed=0]="Fixed",s[s.Percent=1]="Percent"})(sn||(sn={}));var Be;(function(s){s[s.Length=0]="Length",s[s.Fixed=1]="Fixed",s[s.Percent=2]="Percent",s[s.Proportional=3]="Proportional"})(Be||(Be={}));var Sn;(function(s){s[s.Tangent=0]="Tangent",s[s.Chain=1]="Chain",s[s.ChainScale=2]="ChainScale"})(Sn||(Sn={}));const Ke=class Ke{constructor(t,e){y(this,"data");y(this,"bones");y(this,"target");y(this,"position",0);y(this,"spacing",0);y(this,"mixRotate",0);y(this,"mixX",0);y(this,"mixY",0);y(this,"spaces",new Array);y(this,"positions",new Array);y(this,"world",new Array);y(this,"curves",new Array);y(this,"lengths",new Array);y(this,"segments",new Array);y(this,"active",!1);if(!t)throw new Error("data cannot be null.");if(!e)throw new Error("skeleton cannot be null.");this.data=t,this.bones=new Array;for(let n=0,r=t.bones.length;n<r;n++){let o=e.findBone(t.bones[n].name);if(!o)throw new Error(`Couldn't find bone ${t.bones[n].name}.`);this.bones.push(o)}let i=e.findSlot(t.target.name);if(!i)throw new Error(`Couldn't find target bone ${t.target.name}`);this.target=i,this.position=t.position,this.spacing=t.spacing,this.mixRotate=t.mixRotate,this.mixX=t.mixX,this.mixY=t.mixY}isActive(){return this.active}setToSetupPose(){const t=this.data;this.position=t.position,this.spacing=t.spacing,this.mixRotate=t.mixRotate,this.mixX=t.mixX,this.mixY=t.mixY}update(t){let e=this.target.getAttachment();if(!(e instanceof hs))return;let i=this.mixRotate,n=this.mixX,r=this.mixY;if(i==0&&n==0&&r==0)return;let o=this.data,a=o.rotateMode==Sn.Tangent,c=o.rotateMode==Sn.ChainScale,l=this.bones,h=l.length,u=a?h:h+1,d=ut.setArraySize(this.spaces,u),f=c?this.lengths=ut.setArraySize(this.lengths,h):[],g=this.spacing;switch(o.spacingMode){case Be.Percent:if(c)for(let S=0,b=u-1;S<b;S++){let C=l[S],E=C.data.length,w=E*C.a,P=E*C.c;f[S]=Math.sqrt(w*w+P*P)}ut.arrayFill(d,1,u,g);break;case Be.Proportional:let x=0;for(let S=0,b=u-1;S<b;){let C=l[S],E=C.data.length;if(E<Ke.epsilon)c&&(f[S]=0),d[++S]=g;else{let w=E*C.a,P=E*C.c,O=Math.sqrt(w*w+P*P);c&&(f[S]=O),d[++S]=O,x+=O}}if(x>0){x=u/x*g;for(let S=1;S<u;S++)d[S]*=x}break;default:let A=o.spacingMode==Be.Length;for(let S=0,b=u-1;S<b;){let C=l[S],E=C.data.length;if(E<Ke.epsilon)c&&(f[S]=0),d[++S]=g;else{let w=E*C.a,P=E*C.c,O=Math.sqrt(w*w+P*P);c&&(f[S]=O),d[++S]=(A?E+g:g)*O/E}}}let _=this.computeWorldPositions(e,u,a),m=_[0],p=_[1],M=o.offsetRotation,v=!1;if(M==0)v=o.rotateMode==Sn.Chain;else{v=!1;let x=this.target.bone;M*=x.a*x.d-x.b*x.c>0?rt.degRad:-rt.degRad}for(let x=0,A=3;x<h;x++,A+=3){let S=l[x];S.worldX+=(m-S.worldX)*n,S.worldY+=(p-S.worldY)*r;let b=_[A],C=_[A+1],E=b-m,w=C-p;if(c){let P=f[x];if(P!=0){let O=(Math.sqrt(E*E+w*w)/P-1)*i+1;S.a*=O,S.c*=O}}if(m=b,p=C,i>0){let P=S.a,O=S.b,U=S.c,L=S.d,I=0,B=0,G=0;if(a?I=_[A-1]:d[x+1]==0?I=_[A+2]:I=Math.atan2(w,E),I-=Math.atan2(U,P),v){B=Math.cos(I),G=Math.sin(I);let H=S.data.length;m+=(H*(B*P-G*U)-E)*i,p+=(H*(G*P+B*U)-w)*i}else I+=M;I>rt.PI?I-=rt.PI2:I<-rt.PI&&(I+=rt.PI2),I*=i,B=Math.cos(I),G=Math.sin(I),S.a=B*P-G*U,S.b=B*O-G*L,S.c=G*P+B*U,S.d=G*O+B*L}S.updateAppliedTransform()}}computeWorldPositions(t,e,i){let n=this.target,r=this.position,o=this.spaces,a=ut.setArraySize(this.positions,e*3+2),c=this.world,l=t.closed,h=t.worldVerticesLength,u=h/6,d=Ke.NONE;if(!t.constantSpeed){let H=t.lengths;u-=l?1:2;let Z=H[u];this.data.positionMode==sn.Percent&&(r*=Z);let nt;switch(this.data.spacingMode){case Be.Percent:nt=Z;break;case Be.Proportional:nt=Z/e;break;default:nt=1}c=ut.setArraySize(this.world,8);for(let ot=0,vt=0,at=0;ot<e;ot++,vt+=3){let W=o[ot]*nt;r+=W;let K=r;if(l)K%=Z,K<0&&(K+=Z),at=0;else if(K<0){d!=Ke.BEFORE&&(d=Ke.BEFORE,t.computeWorldVertices(n,2,4,c,0,2)),this.addBeforePosition(K,c,0,a,vt);continue}else if(K>Z){d!=Ke.AFTER&&(d=Ke.AFTER,t.computeWorldVertices(n,h-6,4,c,0,2)),this.addAfterPosition(K-Z,c,0,a,vt);continue}for(;;at++){let mt=H[at];if(!(K>mt)){if(at==0)K/=mt;else{let lt=H[at-1];K=(K-lt)/(mt-lt)}break}}at!=d&&(d=at,l&&at==u?(t.computeWorldVertices(n,h-4,4,c,0,2),t.computeWorldVertices(n,0,4,c,4,2)):t.computeWorldVertices(n,at*6+2,8,c,0,2)),this.addCurvePosition(K,c[0],c[1],c[2],c[3],c[4],c[5],c[6],c[7],a,vt,i||ot>0&&W==0)}return a}l?(h+=2,c=ut.setArraySize(this.world,h),t.computeWorldVertices(n,2,h-4,c,0,2),t.computeWorldVertices(n,0,2,c,h-4,2),c[h-2]=c[0],c[h-1]=c[1]):(u--,h-=4,c=ut.setArraySize(this.world,h),t.computeWorldVertices(n,2,h,c,0,2));let f=ut.setArraySize(this.curves,u),g=0,_=c[0],m=c[1],p=0,M=0,v=0,x=0,A=0,S=0,b=0,C=0,E=0,w=0,P=0,O=0,U=0,L=0;for(let H=0,Z=2;H<u;H++,Z+=6)p=c[Z],M=c[Z+1],v=c[Z+2],x=c[Z+3],A=c[Z+4],S=c[Z+5],b=(_-p*2+v)*.1875,C=(m-M*2+x)*.1875,E=((p-v)*3-_+A)*.09375,w=((M-x)*3-m+S)*.09375,P=b*2+E,O=C*2+w,U=(p-_)*.75+b+E*.16666667,L=(M-m)*.75+C+w*.16666667,g+=Math.sqrt(U*U+L*L),U+=P,L+=O,P+=E,O+=w,g+=Math.sqrt(U*U+L*L),U+=P,L+=O,g+=Math.sqrt(U*U+L*L),U+=P+E,L+=O+w,g+=Math.sqrt(U*U+L*L),f[H]=g,_=A,m=S;this.data.positionMode==sn.Percent&&(r*=g);let I;switch(this.data.spacingMode){case Be.Percent:I=g;break;case Be.Proportional:I=g/e;break;default:I=1}let B=this.segments,G=0;for(let H=0,Z=0,nt=0,ot=0;H<e;H++,Z+=3){let vt=o[H]*I;r+=vt;let at=r;if(l)at%=g,at<0&&(at+=g),nt=0;else if(at<0){this.addBeforePosition(at,c,0,a,Z);continue}else if(at>g){this.addAfterPosition(at-g,c,h-4,a,Z);continue}for(;;nt++){let W=f[nt];if(!(at>W)){if(nt==0)at/=W;else{let K=f[nt-1];at=(at-K)/(W-K)}break}}if(nt!=d){d=nt;let W=nt*6;for(_=c[W],m=c[W+1],p=c[W+2],M=c[W+3],v=c[W+4],x=c[W+5],A=c[W+6],S=c[W+7],b=(_-p*2+v)*.03,C=(m-M*2+x)*.03,E=((p-v)*3-_+A)*.006,w=((M-x)*3-m+S)*.006,P=b*2+E,O=C*2+w,U=(p-_)*.3+b+E*.16666667,L=(M-m)*.3+C+w*.16666667,G=Math.sqrt(U*U+L*L),B[0]=G,W=1;W<8;W++)U+=P,L+=O,P+=E,O+=w,G+=Math.sqrt(U*U+L*L),B[W]=G;U+=P,L+=O,G+=Math.sqrt(U*U+L*L),B[8]=G,U+=P+E,L+=O+w,G+=Math.sqrt(U*U+L*L),B[9]=G,ot=0}for(at*=G;;ot++){let W=B[ot];if(!(at>W)){if(ot==0)at/=W;else{let K=B[ot-1];at=ot+(at-K)/(W-K)}break}}this.addCurvePosition(at*.1,_,m,p,M,v,x,A,S,a,Z,i||H>0&&vt==0)}return a}addBeforePosition(t,e,i,n,r){let o=e[i],a=e[i+1],c=e[i+2]-o,l=e[i+3]-a,h=Math.atan2(l,c);n[r]=o+t*Math.cos(h),n[r+1]=a+t*Math.sin(h),n[r+2]=h}addAfterPosition(t,e,i,n,r){let o=e[i+2],a=e[i+3],c=o-e[i],l=a-e[i+1],h=Math.atan2(l,c);n[r]=o+t*Math.cos(h),n[r+1]=a+t*Math.sin(h),n[r+2]=h}addCurvePosition(t,e,i,n,r,o,a,c,l,h,u,d){if(t==0||isNaN(t)){h[u]=e,h[u+1]=i,h[u+2]=Math.atan2(r-i,n-e);return}let f=t*t,g=f*t,_=1-t,m=_*_,p=m*_,M=_*t,v=M*3,x=_*v,A=v*t,S=e*p+n*x+o*A+c*g,b=i*p+r*x+a*A+l*g;h[u]=S,h[u+1]=b,d&&(t<.001?h[u+2]=Math.atan2(r-i,n-e):h[u+2]=Math.atan2(b-(i*m+r*M*2+a*f),S-(e*m+n*M*2+o*f)))}};y(Ke,"NONE",-1),y(Ke,"BEFORE",-2),y(Ke,"AFTER",-3),y(Ke,"epsilon",1e-5);let _o=Ke;class L_{constructor(t,e){y(this,"data");y(this,"_bone",null);y(this,"inertia",0);y(this,"strength",0);y(this,"damping",0);y(this,"massInverse",0);y(this,"wind",0);y(this,"gravity",0);y(this,"mix",0);y(this,"_reset",!0);y(this,"ux",0);y(this,"uy",0);y(this,"cx",0);y(this,"cy",0);y(this,"tx",0);y(this,"ty",0);y(this,"xOffset",0);y(this,"xVelocity",0);y(this,"yOffset",0);y(this,"yVelocity",0);y(this,"rotateOffset",0);y(this,"rotateVelocity",0);y(this,"scaleOffset",0);y(this,"scaleVelocity",0);y(this,"active",!1);y(this,"skeleton");y(this,"remaining",0);y(this,"lastTime",0);this.data=t,this.skeleton=e,this.bone=e.bones[t.bone.index],this.inertia=t.inertia,this.strength=t.strength,this.damping=t.damping,this.massInverse=t.massInverse,this.wind=t.wind,this.gravity=t.gravity,this.mix=t.mix}set bone(t){this._bone=t}get bone(){if(this._bone)return this._bone;throw new Error("Bone not set.")}reset(){this.remaining=0,this.lastTime=this.skeleton.time,this._reset=!0,this.xOffset=0,this.xVelocity=0,this.yOffset=0,this.yVelocity=0,this.rotateOffset=0,this.rotateVelocity=0,this.scaleOffset=0,this.scaleVelocity=0}setToSetupPose(){const t=this.data;this.inertia=t.inertia,this.strength=t.strength,this.damping=t.damping,this.massInverse=t.massInverse,this.wind=t.wind,this.gravity=t.gravity,this.mix=t.mix}isActive(){return this.active}update(t){const e=this.mix;if(e==0)return;const i=this.data.x>0,n=this.data.y>0,r=this.data.rotate>0||this.data.shearX>0,o=this.data.scaleX>0,a=this.bone,c=a.data.length;switch(t){case Ji.none:return;case Ji.reset:this.reset();case Ji.update:const l=this.skeleton,h=Math.max(this.skeleton.time-this.lastTime,0);this.remaining+=h,this.lastTime=l.time;const u=a.worldX,d=a.worldY;if(this._reset)this._reset=!1,this.ux=u,this.uy=d;else{let f=this.remaining,g=this.inertia,_=this.data.step,m=this.skeleton.data.referenceScale,p=-1,M=this.data.limit*h,v=M*Math.abs(l.scaleY);if(M*=Math.abs(l.scaleX),i||n){if(i){const x=(this.ux-u)*g;this.xOffset+=x>M?M:x<-M?-M:x,this.ux=u}if(n){const x=(this.uy-d)*g;this.yOffset+=x>v?v:x<-v?-v:x,this.uy=d}if(f>=_){p=Math.pow(this.damping,60*_);const x=this.massInverse*_,A=this.strength,S=this.wind*m,b=this.gravity*m;do i&&(this.xVelocity+=(S-this.xOffset*A)*x,this.xOffset+=this.xVelocity*_,this.xVelocity*=p),n&&(this.yVelocity-=(b+this.yOffset*A)*x,this.yOffset+=this.yVelocity*_,this.yVelocity*=p),f-=_;while(f>=_)}i&&(a.worldX+=this.xOffset*e*this.data.x),n&&(a.worldY+=this.yOffset*e*this.data.y)}if(r||o){let x=Math.atan2(a.c,a.a),A=0,S=0,b=0,C=this.cx-a.worldX,E=this.cy-a.worldY;if(C>M?C=M:C<-M&&(C=-M),E>v?E=v:E<-v&&(E=-v),r){b=(this.data.rotate+this.data.shearX)*e;let w=Math.atan2(E+this.ty,C+this.tx)-x-this.rotateOffset*b;this.rotateOffset+=(w-Math.ceil(w*rt.invPI2-.5)*rt.PI2)*g,w=this.rotateOffset*b+x,A=Math.cos(w),S=Math.sin(w),o&&(w=c*a.getWorldScaleX(),w>0&&(this.scaleOffset+=(C*A+E*S)*g/w))}else{A=Math.cos(x),S=Math.sin(x);const w=c*a.getWorldScaleX();w>0&&(this.scaleOffset+=(C*A+E*S)*g/w)}if(f=this.remaining,f>=_){p==-1&&(p=Math.pow(this.damping,60*_));const w=this.massInverse*_,P=this.strength,O=this.wind,U=this.gravity,L=c/m;for(;;)if(f-=_,o&&(this.scaleVelocity+=(O*A-U*S-this.scaleOffset*P)*w,this.scaleOffset+=this.scaleVelocity*_,this.scaleVelocity*=p),r){if(this.rotateVelocity-=((O*S+U*A)*L+this.rotateOffset*P)*w,this.rotateOffset+=this.rotateVelocity*_,this.rotateVelocity*=p,f<_)break;const I=this.rotateOffset*b+x;A=Math.cos(I),S=Math.sin(I)}else if(f<_)break}}this.remaining=f}this.cx=a.worldX,this.cy=a.worldY;break;case Ji.pose:i&&(a.worldX+=this.xOffset*e*this.data.x),n&&(a.worldY+=this.yOffset*e*this.data.y)}if(r){let l=this.rotateOffset*e,h=0,u=0,d=0;if(this.data.shearX>0){let f=0;this.data.rotate>0&&(f=l*this.data.rotate,h=Math.sin(f),u=Math.cos(f),d=a.b,a.b=u*d-h*a.d,a.d=h*d+u*a.d),f+=l*this.data.shearX,h=Math.sin(f),u=Math.cos(f),d=a.a,a.a=u*d-h*a.c,a.c=h*d+u*a.c}else l*=this.data.rotate,h=Math.sin(l),u=Math.cos(l),d=a.a,a.a=u*d-h*a.c,a.c=h*d+u*a.c,d=a.b,a.b=u*d-h*a.d,a.d=h*d+u*a.d}if(o){const l=1+this.scaleOffset*e*this.data.scaleX;a.a*=l,a.c*=l}t!=Ji.pose&&(this.tx=c*a.a,this.ty=c*a.c),a.updateAppliedTransform()}translate(t,e){this.ux-=t,this.uy-=e,this.cx-=t,this.cy-=e}rotate(t,e,i){const n=i*rt.degRad,r=Math.cos(n),o=Math.sin(n),a=this.cx-t,c=this.cy-e;this.translate(a*r-c*o-a,a*o+c*r-c)}}class I_{constructor(t,e){y(this,"data");y(this,"bone");y(this,"color");y(this,"darkColor",null);y(this,"attachment",null);y(this,"attachmentState",0);y(this,"sequenceIndex",-1);y(this,"deform",new Array);if(!t)throw new Error("data cannot be null.");if(!e)throw new Error("bone cannot be null.");this.data=t,this.bone=e,this.color=new Zt,this.darkColor=t.darkColor?new Zt:null,this.setToSetupPose()}getSkeleton(){return this.bone.skeleton}getAttachment(){return this.attachment}setAttachment(t){this.attachment!=t&&((!(t instanceof _i)||!(this.attachment instanceof _i)||t.timelineAttachment!=this.attachment.timelineAttachment)&&(this.deform.length=0),this.attachment=t,this.sequenceIndex=-1)}setToSetupPose(){this.color.setFromColor(this.data.color),this.darkColor&&this.darkColor.setFromColor(this.data.darkColor),this.data.attachmentName?(this.attachment=null,this.setAttachment(this.bone.skeleton.getAttachment(this.data.index,this.data.attachmentName))):this.attachment=null}}class U_{constructor(t,e){y(this,"data");y(this,"bones");y(this,"target");y(this,"mixRotate",0);y(this,"mixX",0);y(this,"mixY",0);y(this,"mixScaleX",0);y(this,"mixScaleY",0);y(this,"mixShearY",0);y(this,"temp",new Cs);y(this,"active",!1);if(!t)throw new Error("data cannot be null.");if(!e)throw new Error("skeleton cannot be null.");this.data=t,this.bones=new Array;for(let n=0;n<t.bones.length;n++){let r=e.findBone(t.bones[n].name);if(!r)throw new Error(`Couldn't find bone ${t.bones[n].name}.`);this.bones.push(r)}let i=e.findBone(t.target.name);if(!i)throw new Error(`Couldn't find target bone ${t.target.name}.`);this.target=i,this.mixRotate=t.mixRotate,this.mixX=t.mixX,this.mixY=t.mixY,this.mixScaleX=t.mixScaleX,this.mixScaleY=t.mixScaleY,this.mixShearY=t.mixShearY}isActive(){return this.active}setToSetupPose(){const t=this.data;this.mixRotate=t.mixRotate,this.mixX=t.mixX,this.mixY=t.mixY,this.mixScaleX=t.mixScaleX,this.mixScaleY=t.mixScaleY,this.mixShearY=t.mixShearY}update(t){this.mixRotate==0&&this.mixX==0&&this.mixY==0&&this.mixScaleX==0&&this.mixScaleY==0&&this.mixShearY==0||(this.data.local?this.data.relative?this.applyRelativeLocal():this.applyAbsoluteLocal():this.data.relative?this.applyRelativeWorld():this.applyAbsoluteWorld())}applyAbsoluteWorld(){let t=this.mixRotate,e=this.mixX,i=this.mixY,n=this.mixScaleX,r=this.mixScaleY,o=this.mixShearY,a=e!=0||i!=0,c=this.target,l=c.a,h=c.b,u=c.c,d=c.d,f=l*d-h*u>0?rt.degRad:-rt.degRad,g=this.data.offsetRotation*f,_=this.data.offsetShearY*f,m=this.bones;for(let p=0,M=m.length;p<M;p++){let v=m[p];if(t!=0){let x=v.a,A=v.b,S=v.c,b=v.d,C=Math.atan2(u,l)-Math.atan2(S,x)+g;C>rt.PI?C-=rt.PI2:C<-rt.PI&&(C+=rt.PI2),C*=t;let E=Math.cos(C),w=Math.sin(C);v.a=E*x-w*S,v.b=E*A-w*b,v.c=w*x+E*S,v.d=w*A+E*b}if(a){let x=this.temp;c.localToWorld(x.set(this.data.offsetX,this.data.offsetY)),v.worldX+=(x.x-v.worldX)*e,v.worldY+=(x.y-v.worldY)*i}if(n!=0){let x=Math.sqrt(v.a*v.a+v.c*v.c);x!=0&&(x=(x+(Math.sqrt(l*l+u*u)-x+this.data.offsetScaleX)*n)/x),v.a*=x,v.c*=x}if(r!=0){let x=Math.sqrt(v.b*v.b+v.d*v.d);x!=0&&(x=(x+(Math.sqrt(h*h+d*d)-x+this.data.offsetScaleY)*r)/x),v.b*=x,v.d*=x}if(o>0){let x=v.b,A=v.d,S=Math.atan2(A,x),b=Math.atan2(d,h)-Math.atan2(u,l)-(S-Math.atan2(v.c,v.a));b>rt.PI?b-=rt.PI2:b<-rt.PI&&(b+=rt.PI2),b=S+(b+_)*o;let C=Math.sqrt(x*x+A*A);v.b=Math.cos(b)*C,v.d=Math.sin(b)*C}v.updateAppliedTransform()}}applyRelativeWorld(){let t=this.mixRotate,e=this.mixX,i=this.mixY,n=this.mixScaleX,r=this.mixScaleY,o=this.mixShearY,a=e!=0||i!=0,c=this.target,l=c.a,h=c.b,u=c.c,d=c.d,f=l*d-h*u>0?rt.degRad:-rt.degRad,g=this.data.offsetRotation*f,_=this.data.offsetShearY*f,m=this.bones;for(let p=0,M=m.length;p<M;p++){let v=m[p];if(t!=0){let x=v.a,A=v.b,S=v.c,b=v.d,C=Math.atan2(u,l)+g;C>rt.PI?C-=rt.PI2:C<-rt.PI&&(C+=rt.PI2),C*=t;let E=Math.cos(C),w=Math.sin(C);v.a=E*x-w*S,v.b=E*A-w*b,v.c=w*x+E*S,v.d=w*A+E*b}if(a){let x=this.temp;c.localToWorld(x.set(this.data.offsetX,this.data.offsetY)),v.worldX+=x.x*e,v.worldY+=x.y*i}if(n!=0){let x=(Math.sqrt(l*l+u*u)-1+this.data.offsetScaleX)*n+1;v.a*=x,v.c*=x}if(r!=0){let x=(Math.sqrt(h*h+d*d)-1+this.data.offsetScaleY)*r+1;v.b*=x,v.d*=x}if(o>0){let x=Math.atan2(d,h)-Math.atan2(u,l);x>rt.PI?x-=rt.PI2:x<-rt.PI&&(x+=rt.PI2);let A=v.b,S=v.d;x=Math.atan2(S,A)+(x-rt.PI/2+_)*o;let b=Math.sqrt(A*A+S*S);v.b=Math.cos(x)*b,v.d=Math.sin(x)*b}v.updateAppliedTransform()}}applyAbsoluteLocal(){let t=this.mixRotate,e=this.mixX,i=this.mixY,n=this.mixScaleX,r=this.mixScaleY,o=this.mixShearY,a=this.target,c=this.bones;for(let l=0,h=c.length;l<h;l++){let u=c[l],d=u.arotation;t!=0&&(d+=(a.arotation-d+this.data.offsetRotation)*t);let f=u.ax,g=u.ay;f+=(a.ax-f+this.data.offsetX)*e,g+=(a.ay-g+this.data.offsetY)*i;let _=u.ascaleX,m=u.ascaleY;n!=0&&_!=0&&(_=(_+(a.ascaleX-_+this.data.offsetScaleX)*n)/_),r!=0&&m!=0&&(m=(m+(a.ascaleY-m+this.data.offsetScaleY)*r)/m);let p=u.ashearY;o!=0&&(p+=(a.ashearY-p+this.data.offsetShearY)*o),u.updateWorldTransformWith(f,g,d,_,m,u.ashearX,p)}}applyRelativeLocal(){let t=this.mixRotate,e=this.mixX,i=this.mixY,n=this.mixScaleX,r=this.mixScaleY,o=this.mixShearY,a=this.target,c=this.bones;for(let l=0,h=c.length;l<h;l++){let u=c[l],d=u.arotation+(a.arotation+this.data.offsetRotation)*t,f=u.ax+(a.ax+this.data.offsetX)*e,g=u.ay+(a.ay+this.data.offsetY)*i,_=u.ascaleX*((a.ascaleX-1+this.data.offsetScaleX)*n+1),m=u.ascaleY*((a.ascaleY-1+this.data.offsetScaleY)*r+1),p=u.ashearY+(a.ashearY+this.data.offsetShearY)*o;u.updateWorldTransformWith(f,g,d,_,m,u.ashearX,p)}}}const Zn=class Zn{constructor(t){y(this,"data");y(this,"bones");y(this,"slots");y(this,"drawOrder");y(this,"ikConstraints");y(this,"transformConstraints");y(this,"pathConstraints");y(this,"physicsConstraints");y(this,"_updateCache",new Array);y(this,"skin",null);y(this,"color");y(this,"scaleX",1);y(this,"_scaleY",1);y(this,"x",0);y(this,"y",0);y(this,"time",0);if(!t)throw new Error("data cannot be null.");this.data=t,this.bones=new Array;for(let e=0;e<t.bones.length;e++){let i=t.bones[e],n;if(!i.parent)n=new Jl(i,this,null);else{let r=this.bones[i.parent.index];n=new Jl(i,this,r),r.children.push(n)}this.bones.push(n)}this.slots=new Array,this.drawOrder=new Array;for(let e=0;e<t.slots.length;e++){let i=t.slots[e],n=this.bones[i.boneData.index],r=new I_(i,n);this.slots.push(r),this.drawOrder.push(r)}this.ikConstraints=new Array;for(let e=0;e<t.ikConstraints.length;e++){let i=t.ikConstraints[e];this.ikConstraints.push(new R_(i,this))}this.transformConstraints=new Array;for(let e=0;e<t.transformConstraints.length;e++){let i=t.transformConstraints[e];this.transformConstraints.push(new U_(i,this))}this.pathConstraints=new Array;for(let e=0;e<t.pathConstraints.length;e++){let i=t.pathConstraints[e];this.pathConstraints.push(new _o(i,this))}this.physicsConstraints=new Array;for(let e=0;e<t.physicsConstraints.length;e++){let i=t.physicsConstraints[e];this.physicsConstraints.push(new L_(i,this))}this.color=new Zt(1,1,1,1),this.updateCache()}get scaleY(){return Zn.yDown?-this._scaleY:this._scaleY}set scaleY(t){this._scaleY=t}updateCache(){let t=this._updateCache;t.length=0;let e=this.bones;for(let d=0,f=e.length;d<f;d++){let g=e[d];g.sorted=g.data.skinRequired,g.active=!g.sorted}if(this.skin){let d=this.skin.bones;for(let f=0,g=this.skin.bones.length;f<g;f++){let _=this.bones[d[f].index];do _.sorted=!1,_.active=!0,_=_.parent;while(_)}}let i=this.ikConstraints,n=this.transformConstraints,r=this.pathConstraints,o=this.physicsConstraints,a=i.length,c=n.length,l=r.length,h=this.physicsConstraints.length,u=a+c+l+h;t:for(let d=0;d<u;d++){for(let f=0;f<a;f++){let g=i[f];if(g.data.order==d){this.sortIkConstraint(g);continue t}}for(let f=0;f<c;f++){let g=n[f];if(g.data.order==d){this.sortTransformConstraint(g);continue t}}for(let f=0;f<l;f++){let g=r[f];if(g.data.order==d){this.sortPathConstraint(g);continue t}}for(let f=0;f<h;f++){const g=o[f];if(g.data.order==d){this.sortPhysicsConstraint(g);continue t}}}for(let d=0,f=e.length;d<f;d++)this.sortBone(e[d])}sortIkConstraint(t){if(t.active=t.target.isActive()&&(!t.data.skinRequired||this.skin&&ut.contains(this.skin.constraints,t.data,!0)),!t.active)return;let e=t.target;this.sortBone(e);let i=t.bones,n=i[0];if(this.sortBone(n),i.length==1)this._updateCache.push(t),this.sortReset(n.children);else{let r=i[i.length-1];this.sortBone(r),this._updateCache.push(t),this.sortReset(n.children),r.sorted=!0}}sortPathConstraint(t){if(t.active=t.target.bone.isActive()&&(!t.data.skinRequired||this.skin&&ut.contains(this.skin.constraints,t.data,!0)),!t.active)return;let e=t.target,i=e.data.index,n=e.bone;this.skin&&this.sortPathConstraintAttachment(this.skin,i,n),this.data.defaultSkin&&this.data.defaultSkin!=this.skin&&this.sortPathConstraintAttachment(this.data.defaultSkin,i,n);for(let c=0,l=this.data.skins.length;c<l;c++)this.sortPathConstraintAttachment(this.data.skins[c],i,n);let r=e.getAttachment();r instanceof hs&&this.sortPathConstraintAttachmentWith(r,n);let o=t.bones,a=o.length;for(let c=0;c<a;c++)this.sortBone(o[c]);this._updateCache.push(t);for(let c=0;c<a;c++)this.sortReset(o[c].children);for(let c=0;c<a;c++)o[c].sorted=!0}sortTransformConstraint(t){if(t.active=t.target.isActive()&&(!t.data.skinRequired||this.skin&&ut.contains(this.skin.constraints,t.data,!0)),!t.active)return;this.sortBone(t.target);let e=t.bones,i=e.length;if(t.data.local)for(let n=0;n<i;n++){let r=e[n];this.sortBone(r.parent),this.sortBone(r)}else for(let n=0;n<i;n++)this.sortBone(e[n]);this._updateCache.push(t);for(let n=0;n<i;n++)this.sortReset(e[n].children);for(let n=0;n<i;n++)e[n].sorted=!0}sortPathConstraintAttachment(t,e,i){let n=t.attachments[e];if(n)for(let r in n)this.sortPathConstraintAttachmentWith(n[r],i)}sortPathConstraintAttachmentWith(t,e){if(!(t instanceof hs))return;let i=t.bones;if(!i)this.sortBone(e);else{let n=this.bones;for(let r=0,o=i.length;r<o;){let a=i[r++];for(a+=r;r<a;)this.sortBone(n[i[r++]])}}}sortPhysicsConstraint(t){const e=t.bone;t.active=e.active&&(!t.data.skinRequired||this.skin!=null&&ut.contains(this.skin.constraints,t.data,!0)),t.active&&(this.sortBone(e),this._updateCache.push(t),this.sortReset(e.children),e.sorted=!0)}sortBone(t){if(!t||t.sorted)return;let e=t.parent;e&&this.sortBone(e),t.sorted=!0,this._updateCache.push(t)}sortReset(t){for(let e=0,i=t.length;e<i;e++){let n=t[e];n.active&&(n.sorted&&this.sortReset(n.children),n.sorted=!1)}}updateWorldTransform(t){if(t==null)throw new Error("physics is undefined");let e=this.bones;for(let n=0,r=e.length;n<r;n++){let o=e[n];o.ax=o.x,o.ay=o.y,o.arotation=o.rotation,o.ascaleX=o.scaleX,o.ascaleY=o.scaleY,o.ashearX=o.shearX,o.ashearY=o.shearY}let i=this._updateCache;for(let n=0,r=i.length;n<r;n++)i[n].update(t)}updateWorldTransformWith(t,e){if(!e)throw new Error("parent cannot be null.");let i=this.bones;for(let m=1,p=i.length;m<p;m++){let M=i[m];M.ax=M.x,M.ay=M.y,M.arotation=M.rotation,M.ascaleX=M.scaleX,M.ascaleY=M.scaleY,M.ashearX=M.shearX,M.ashearY=M.shearY}let n=this.getRootBone();if(!n)throw new Error("Root bone must not be null.");let r=e.a,o=e.b,a=e.c,c=e.d;n.worldX=r*this.x+o*this.y+e.worldX,n.worldY=a*this.x+c*this.y+e.worldY;const l=(n.rotation+n.shearX)*rt.degRad,h=(n.rotation+90+n.shearY)*rt.degRad,u=Math.cos(l)*n.scaleX,d=Math.cos(h)*n.scaleY,f=Math.sin(l)*n.scaleX,g=Math.sin(h)*n.scaleY;n.a=(r*u+o*f)*this.scaleX,n.b=(r*d+o*g)*this.scaleX,n.c=(a*u+c*f)*this.scaleY,n.d=(a*d+c*g)*this.scaleY;let _=this._updateCache;for(let m=0,p=_.length;m<p;m++){let M=_[m];M!=n&&M.update(t)}}setToSetupPose(){this.setBonesToSetupPose(),this.setSlotsToSetupPose()}setBonesToSetupPose(){for(const t of this.bones)t.setToSetupPose();for(const t of this.ikConstraints)t.setToSetupPose();for(const t of this.transformConstraints)t.setToSetupPose();for(const t of this.pathConstraints)t.setToSetupPose();for(const t of this.physicsConstraints)t.setToSetupPose()}setSlotsToSetupPose(){let t=this.slots;ut.arrayCopy(t,0,this.drawOrder,0,t.length);for(let e=0,i=t.length;e<i;e++)t[e].setToSetupPose()}getRootBone(){return this.bones.length==0?null:this.bones[0]}findBone(t){if(!t)throw new Error("boneName cannot be null.");let e=this.bones;for(let i=0,n=e.length;i<n;i++){let r=e[i];if(r.data.name==t)return r}return null}findSlot(t){if(!t)throw new Error("slotName cannot be null.");let e=this.slots;for(let i=0,n=e.length;i<n;i++){let r=e[i];if(r.data.name==t)return r}return null}setSkinByName(t){let e=this.data.findSkin(t);if(!e)throw new Error("Skin not found: "+t);this.setSkin(e)}setSkin(t){if(t!=this.skin){if(t)if(this.skin)t.attachAll(this,this.skin);else{let e=this.slots;for(let i=0,n=e.length;i<n;i++){let r=e[i],o=r.data.attachmentName;if(o){let a=t.getAttachment(i,o);a&&r.setAttachment(a)}}}this.skin=t,this.updateCache()}}getAttachmentByName(t,e){let i=this.data.findSlot(t);if(!i)throw new Error(`Can't find slot with name ${t}`);return this.getAttachment(i.index,e)}getAttachment(t,e){if(!e)throw new Error("attachmentName cannot be null.");if(this.skin){let i=this.skin.getAttachment(t,e);if(i)return i}return this.data.defaultSkin?this.data.defaultSkin.getAttachment(t,e):null}setAttachment(t,e){if(!t)throw new Error("slotName cannot be null.");let i=this.slots;for(let n=0,r=i.length;n<r;n++){let o=i[n];if(o.data.name==t){let a=null;if(e&&(a=this.getAttachment(n,e),!a))throw new Error("Attachment not found: "+e+", for slot: "+t);o.setAttachment(a);return}}throw new Error("Slot not found: "+t)}findIkConstraint(t){if(!t)throw new Error("constraintName cannot be null.");return this.ikConstraints.find(e=>e.data.name==t)??null}findTransformConstraint(t){if(!t)throw new Error("constraintName cannot be null.");return this.transformConstraints.find(e=>e.data.name==t)??null}findPathConstraint(t){if(!t)throw new Error("constraintName cannot be null.");return this.pathConstraints.find(e=>e.data.name==t)??null}findPhysicsConstraint(t){if(t==null)throw new Error("constraintName cannot be null.");return this.physicsConstraints.find(e=>e.data.name==t)??null}getBoundsRect(){let t=new Cs,e=new Cs;return this.getBounds(t,e),{x:t.x,y:t.y,width:e.x,height:e.y}}getBounds(t,e,i=new Array(2),n=null){if(!t)throw new Error("offset cannot be null.");if(!e)throw new Error("size cannot be null.");let r=this.drawOrder,o=Number.POSITIVE_INFINITY,a=Number.POSITIVE_INFINITY,c=Number.NEGATIVE_INFINITY,l=Number.NEGATIVE_INFINITY;for(let h=0,u=r.length;h<u;h++){let d=r[h];if(!d.bone.active)continue;let f=0,g=null,_=null,m=d.getAttachment();if(m instanceof Rs)f=8,g=ut.setArraySize(i,f,0),m.computeWorldVertices(d,g,0,2),_=Zn.quadTriangles;else if(m instanceof An){let p=m;f=p.worldVerticesLength,g=ut.setArraySize(i,f,0),p.computeWorldVertices(d,0,f,g,0,2),_=p.triangles}else if(m instanceof Us&&n!=null){n.clipStart(d,m);continue}if(g&&_){n!=null&&n.isClipping()&&(n.clipTriangles(g,_,_.length),g=n.clippedVertices,f=n.clippedVertices.length);for(let p=0,M=g.length;p<M;p+=2){let v=g[p],x=g[p+1];o=Math.min(o,v),a=Math.min(a,x),c=Math.max(c,v),l=Math.max(l,x)}}n!=null&&n.clipEndWithSlot(d)}n!=null&&n.clipEnd(),t.set(o,a),e.set(c-o,l-a)}update(t){this.time+=t}physicsTranslate(t,e){const i=this.physicsConstraints;for(let n=0,r=i.length;n<r;n++)i[n].translate(t,e)}physicsRotate(t,e,i){const n=this.physicsConstraints;for(let r=0,o=n.length;r<o;r++)n[r].rotate(t,e,i)}};y(Zn,"quadTriangles",[0,1,2,2,3,0]),y(Zn,"yDown",!1);let xo=Zn;var Ji;(function(s){s[s.none=0]="none",s[s.reset=1]="reset",s[s.update=2]="update",s[s.pose=3]="pose"})(Ji||(Ji={}));class N_ extends Fr{constructor(e){super(e,0,!1);y(this,"_bone",null);y(this,"x",0);y(this,"y",0);y(this,"rotate",0);y(this,"scaleX",0);y(this,"shearX",0);y(this,"limit",0);y(this,"step",0);y(this,"inertia",0);y(this,"strength",0);y(this,"damping",0);y(this,"massInverse",0);y(this,"wind",0);y(this,"gravity",0);y(this,"mix",0);y(this,"inertiaGlobal",!1);y(this,"strengthGlobal",!1);y(this,"dampingGlobal",!1);y(this,"massGlobal",!1);y(this,"windGlobal",!1);y(this,"gravityGlobal",!1);y(this,"mixGlobal",!1)}set bone(e){this._bone=e}get bone(){if(this._bone)return this._bone;throw new Error("BoneData not set.")}}class F_{constructor(){y(this,"name",null);y(this,"bones",new Array);y(this,"slots",new Array);y(this,"skins",new Array);y(this,"defaultSkin",null);y(this,"events",new Array);y(this,"animations",new Array);y(this,"ikConstraints",new Array);y(this,"transformConstraints",new Array);y(this,"pathConstraints",new Array);y(this,"physicsConstraints",new Array);y(this,"x",0);y(this,"y",0);y(this,"width",0);y(this,"height",0);y(this,"referenceScale",100);y(this,"version",null);y(this,"hash",null);y(this,"fps",0);y(this,"imagesPath",null);y(this,"audioPath",null)}findBone(t){if(!t)throw new Error("boneName cannot be null.");let e=this.bones;for(let i=0,n=e.length;i<n;i++){let r=e[i];if(r.name==t)return r}return null}findSlot(t){if(!t)throw new Error("slotName cannot be null.");let e=this.slots;for(let i=0,n=e.length;i<n;i++){let r=e[i];if(r.name==t)return r}return null}findSkin(t){if(!t)throw new Error("skinName cannot be null.");let e=this.skins;for(let i=0,n=e.length;i<n;i++){let r=e[i];if(r.name==t)return r}return null}findEvent(t){if(!t)throw new Error("eventDataName cannot be null.");let e=this.events;for(let i=0,n=e.length;i<n;i++){let r=e[i];if(r.name==t)return r}return null}findAnimation(t){if(!t)throw new Error("animationName cannot be null.");let e=this.animations;for(let i=0,n=e.length;i<n;i++){let r=e[i];if(r.name==t)return r}return null}findIkConstraint(t){if(!t)throw new Error("constraintName cannot be null.");const e=this.ikConstraints;for(let i=0,n=e.length;i<n;i++){const r=e[i];if(r.name==t)return r}return null}findTransformConstraint(t){if(!t)throw new Error("constraintName cannot be null.");const e=this.transformConstraints;for(let i=0,n=e.length;i<n;i++){const r=e[i];if(r.name==t)return r}return null}findPathConstraint(t){if(!t)throw new Error("constraintName cannot be null.");const e=this.pathConstraints;for(let i=0,n=e.length;i<n;i++){const r=e[i];if(r.name==t)return r}return null}findPhysicsConstraint(t){if(!t)throw new Error("constraintName cannot be null.");const e=this.physicsConstraints;for(let i=0,n=e.length;i<n;i++){const r=e[i];if(r.name==t)return r}return null}}class Ql{constructor(t=0,e,i){y(this,"slotIndex");y(this,"name");y(this,"attachment");this.slotIndex=t,this.name=e,this.attachment=i}}class O_{constructor(t){y(this,"name");y(this,"attachments",new Array);y(this,"bones",Array());y(this,"constraints",new Array);y(this,"color",new Zt(.99607843,.61960787,.30980393,1));if(!t)throw new Error("name cannot be null.");this.name=t}setAttachment(t,e,i){if(!i)throw new Error("attachment cannot be null.");let n=this.attachments;t>=n.length&&(n.length=t+1),n[t]||(n[t]={}),n[t][e]=i}addSkin(t){for(let n=0;n<t.bones.length;n++){let r=t.bones[n],o=!1;for(let a=0;a<this.bones.length;a++)if(this.bones[a]==r){o=!0;break}o||this.bones.push(r)}for(let n=0;n<t.constraints.length;n++){let r=t.constraints[n],o=!1;for(let a=0;a<this.constraints.length;a++)if(this.constraints[a]==r){o=!0;break}o||this.constraints.push(r)}let e=t.getAttachments();for(let n=0;n<e.length;n++){var i=e[n];this.setAttachment(i.slotIndex,i.name,i.attachment)}}copySkin(t){for(let n=0;n<t.bones.length;n++){let r=t.bones[n],o=!1;for(let a=0;a<this.bones.length;a++)if(this.bones[a]==r){o=!0;break}o||this.bones.push(r)}for(let n=0;n<t.constraints.length;n++){let r=t.constraints[n],o=!1;for(let a=0;a<this.constraints.length;a++)if(this.constraints[a]==r){o=!0;break}o||this.constraints.push(r)}let e=t.getAttachments();for(let n=0;n<e.length;n++){var i=e[n];i.attachment&&(i.attachment instanceof An?(i.attachment=i.attachment.newLinkedMesh(),this.setAttachment(i.slotIndex,i.name,i.attachment)):(i.attachment=i.attachment.copy(),this.setAttachment(i.slotIndex,i.name,i.attachment)))}}getAttachment(t,e){let i=this.attachments[t];return i?i[e]:null}removeAttachment(t,e){let i=this.attachments[t];i&&delete i[e]}getAttachments(){let t=new Array;for(var e=0;e<this.attachments.length;e++){let i=this.attachments[e];if(i)for(let n in i){let r=i[n];r&&t.push(new Ql(e,n,r))}}return t}getAttachmentsForSlot(t,e){let i=this.attachments[t];if(i)for(let n in i){let r=i[n];r&&e.push(new Ql(t,n,r))}}clear(){this.attachments.length=0,this.bones.length=0,this.constraints.length=0}attachAll(t,e){let i=0;for(let n=0;n<t.slots.length;n++){let r=t.slots[n],o=r.getAttachment();if(o&&i<e.attachments.length){let a=e.attachments[i];for(let c in a){let l=a[c];if(o==l){let h=this.getAttachment(i,c);h&&r.setAttachment(h);break}}}i++}}}class B_{constructor(t,e,i){y(this,"index",0);y(this,"name");y(this,"boneData");y(this,"color",new Zt(1,1,1,1));y(this,"darkColor",null);y(this,"attachmentName",null);y(this,"blendMode",tn.Normal);y(this,"visible",!0);if(t<0)throw new Error("index must be >= 0.");if(!e)throw new Error("name cannot be null.");if(!i)throw new Error("boneData cannot be null.");this.index=t,this.name=e,this.boneData=i}}var tn;(function(s){s[s.Normal=0]="Normal",s[s.Additive=1]="Additive",s[s.Multiply=2]="Multiply",s[s.Screen=3]="Screen"})(tn||(tn={}));class k_ extends Fr{constructor(e){super(e,0,!1);y(this,"bones",new Array);y(this,"_target",null);y(this,"mixRotate",0);y(this,"mixX",0);y(this,"mixY",0);y(this,"mixScaleX",0);y(this,"mixScaleY",0);y(this,"mixShearY",0);y(this,"offsetRotation",0);y(this,"offsetX",0);y(this,"offsetY",0);y(this,"offsetScaleX",0);y(this,"offsetScaleY",0);y(this,"offsetShearY",0);y(this,"relative",!1);y(this,"local",!1)}set target(e){this._target=e}get target(){if(this._target)return this._target;throw new Error("BoneData not set.")}}var tc;(function(s){s[s.Region=0]="Region",s[s.BoundingBox=1]="BoundingBox",s[s.Mesh=2]="Mesh",s[s.LinkedMesh=3]="LinkedMesh",s[s.Path=4]="Path",s[s.Point=5]="Point",s[s.Clipping=6]="Clipping"})(tc||(tc={}));class Ge{constructor(){y(this,"convexPolygons",new Array);y(this,"convexPolygonsIndices",new Array);y(this,"indicesArray",new Array);y(this,"isConcaveArray",new Array);y(this,"triangles",new Array);y(this,"polygonPool",new ho(()=>new Array));y(this,"polygonIndicesPool",new ho(()=>new Array))}triangulate(t){let e=t,i=t.length>>1,n=this.indicesArray;n.length=0;for(let a=0;a<i;a++)n[a]=a;let r=this.isConcaveArray;r.length=0;for(let a=0,c=i;a<c;++a)r[a]=Ge.isConcave(a,i,e,n);let o=this.triangles;for(o.length=0;i>3;){let a=i-1,c=0,l=1;for(;;){t:if(!r[c]){let d=n[a]<<1,f=n[c]<<1,g=n[l]<<1,_=e[d],m=e[d+1],p=e[f],M=e[f+1],v=e[g],x=e[g+1];for(let A=(l+1)%i;A!=a;A=(A+1)%i){if(!r[A])continue;let S=n[A]<<1,b=e[S],C=e[S+1];if(Ge.positiveArea(v,x,_,m,b,C)&&Ge.positiveArea(_,m,p,M,b,C)&&Ge.positiveArea(p,M,v,x,b,C))break t}break}if(l==0){do{if(!r[c])break;c--}while(c>0);break}a=c,c=l,l=(l+1)%i}o.push(n[(i+c-1)%i]),o.push(n[c]),o.push(n[(c+1)%i]),n.splice(c,1),r.splice(c,1),i--;let h=(i+c-1)%i,u=c==i?0:c;r[h]=Ge.isConcave(h,i,e,n),r[u]=Ge.isConcave(u,i,e,n)}return i==3&&(o.push(n[2]),o.push(n[0]),o.push(n[1])),o}decompose(t,e){let i=t,n=this.convexPolygons;this.polygonPool.freeAll(n),n.length=0;let r=this.convexPolygonsIndices;this.polygonIndicesPool.freeAll(r),r.length=0;let o=this.polygonIndicesPool.obtain();o.length=0;let a=this.polygonPool.obtain();a.length=0;let c=-1,l=0;for(let h=0,u=e.length;h<u;h+=3){let d=e[h]<<1,f=e[h+1]<<1,g=e[h+2]<<1,_=i[d],m=i[d+1],p=i[f],M=i[f+1],v=i[g],x=i[g+1],A=!1;if(c==d){let S=a.length-4,b=Ge.winding(a[S],a[S+1],a[S+2],a[S+3],v,x),C=Ge.winding(v,x,a[0],a[1],a[2],a[3]);b==l&&C==l&&(a.push(v),a.push(x),o.push(g),A=!0)}A||(a.length>0?(n.push(a),r.push(o)):(this.polygonPool.free(a),this.polygonIndicesPool.free(o)),a=this.polygonPool.obtain(),a.length=0,a.push(_),a.push(m),a.push(p),a.push(M),a.push(v),a.push(x),o=this.polygonIndicesPool.obtain(),o.length=0,o.push(d),o.push(f),o.push(g),l=Ge.winding(_,m,p,M,v,x),c=d)}a.length>0&&(n.push(a),r.push(o));for(let h=0,u=n.length;h<u;h++){if(o=r[h],o.length==0)continue;let d=o[0],f=o[o.length-1];a=n[h];let g=a.length-4,_=a[g],m=a[g+1],p=a[g+2],M=a[g+3],v=a[0],x=a[1],A=a[2],S=a[3],b=Ge.winding(_,m,p,M,v,x);for(let C=0;C<u;C++){if(C==h)continue;let E=r[C];if(E.length!=3)continue;let w=E[0],P=E[1],O=E[2],U=n[C],L=U[U.length-2],I=U[U.length-1];if(w!=d||P!=f)continue;let B=Ge.winding(_,m,p,M,L,I),G=Ge.winding(L,I,v,x,A,S);B==b&&G==b&&(U.length=0,E.length=0,a.push(L),a.push(I),o.push(O),_=p,m=M,p=L,M=I,C=0)}}for(let h=n.length-1;h>=0;h--)a=n[h],a.length==0&&(n.splice(h,1),this.polygonPool.free(a),o=r[h],r.splice(h,1),this.polygonIndicesPool.free(o));return n}static isConcave(t,e,i,n){let r=n[(e+t-1)%e]<<1,o=n[t]<<1,a=n[(t+1)%e]<<1;return!this.positiveArea(i[r],i[r+1],i[o],i[o+1],i[a],i[a+1])}static positiveArea(t,e,i,n,r,o){return t*(o-n)+i*(e-o)+r*(n-e)>=0}static winding(t,e,i,n,r,o){let a=i-t,c=n-e;return r*c-o*a+a*e-t*c>=0?1:-1}}class Ar{constructor(){y(this,"triangulator",new Ge);y(this,"clippingPolygon",new Array);y(this,"clipOutput",new Array);y(this,"clippedVertices",new Array);y(this,"clippedUVs",new Array);y(this,"clippedTriangles",new Array);y(this,"scratch",new Array);y(this,"clipAttachment",null);y(this,"clippingPolygons",null)}clipStart(t,e){if(this.clipAttachment)return 0;this.clipAttachment=e;let i=e.worldVerticesLength,n=ut.setArraySize(this.clippingPolygon,i);e.computeWorldVertices(t,0,i,n,0,2);let r=this.clippingPolygon;Ar.makeClockwise(r);let o=this.clippingPolygons=this.triangulator.decompose(r,this.triangulator.triangulate(r));for(let a=0,c=o.length;a<c;a++){let l=o[a];Ar.makeClockwise(l),l.push(l[0]),l.push(l[1])}return o.length}clipEndWithSlot(t){this.clipAttachment&&this.clipAttachment.endSlot==t.data&&this.clipEnd()}clipEnd(){this.clipAttachment&&(this.clipAttachment=null,this.clippingPolygons=null,this.clippedVertices.length=0,this.clippedTriangles.length=0,this.clippingPolygon.length=0)}isClipping(){return this.clipAttachment!=null}clipTriangles(t,e,i,n,r,o,a,c){let l,h,u,d,f,g;typeof e=="number"?(l=i,h=n,u=r,d=o,f=a,g=c):(l=e,h=i,u=n,d=r,f=o,g=a),u&&d&&f&&typeof g=="boolean"?this.clipTrianglesRender(t,l,h,u,d,f,g):this.clipTrianglesNoRender(t,l,h)}clipTrianglesNoRender(t,e,i){let n=this.clipOutput,r=this.clippedVertices,o=this.clippedTriangles,a=this.clippingPolygons,c=a.length,l=0;r.length=0,o.length=0;for(let h=0;h<i;h+=3){let u=e[h]<<1,d=t[u],f=t[u+1];u=e[h+1]<<1;let g=t[u],_=t[u+1];u=e[h+2]<<1;let m=t[u],p=t[u+1];for(let M=0;M<c;M++){let v=r.length;if(this.clip(d,f,g,_,m,p,a[M],n)){let x=n.length;if(x==0)continue;let A=x>>1,S=this.clipOutput,b=ut.setArraySize(r,v+A*2);for(let E=0;E<x;E+=2,v+=2){let w=S[E],P=S[E+1];b[v]=w,b[v+1]=P}v=o.length;let C=ut.setArraySize(o,v+3*(A-2));A--;for(let E=1;E<A;E++,v+=3)C[v]=l,C[v+1]=l+E,C[v+2]=l+E+1;l+=A+1}else{let x=ut.setArraySize(r,v+6);x[v]=d,x[v+1]=f,x[v+2]=g,x[v+3]=_,x[v+4]=m,x[v+5]=p,v=o.length;let A=ut.setArraySize(o,v+3);A[v]=l,A[v+1]=l+1,A[v+2]=l+2,l+=3;break}}}}clipTrianglesRender(t,e,i,n,r,o,a){let c=this.clipOutput,l=this.clippedVertices,h=this.clippedTriangles,u=this.clippingPolygons,d=u.length,f=a?12:8,g=0;l.length=0,h.length=0;for(let _=0;_<i;_+=3){let m=e[_]<<1,p=t[m],M=t[m+1],v=n[m],x=n[m+1];m=e[_+1]<<1;let A=t[m],S=t[m+1],b=n[m],C=n[m+1];m=e[_+2]<<1;let E=t[m],w=t[m+1],P=n[m],O=n[m+1];for(let U=0;U<d;U++){let L=l.length;if(this.clip(p,M,A,S,E,w,u[U],c)){let I=c.length;if(I==0)continue;let B=S-w,G=E-A,H=p-E,Z=w-M,nt=1/(B*H+G*(M-w)),ot=I>>1,vt=this.clipOutput,at=ut.setArraySize(l,L+ot*f);for(let K=0;K<I;K+=2,L+=f){let mt=vt[K],lt=vt[K+1];at[L]=mt,at[L+1]=lt,at[L+2]=r.r,at[L+3]=r.g,at[L+4]=r.b,at[L+5]=r.a;let _t=mt-E,wt=lt-w,Rt=(B*_t+G*wt)*nt,Qt=(Z*_t+H*wt)*nt,Vt=1-Rt-Qt;at[L+6]=v*Rt+b*Qt+P*Vt,at[L+7]=x*Rt+C*Qt+O*Vt,a&&(at[L+8]=o.r,at[L+9]=o.g,at[L+10]=o.b,at[L+11]=o.a)}L=h.length;let W=ut.setArraySize(h,L+3*(ot-2));ot--;for(let K=1;K<ot;K++,L+=3)W[L]=g,W[L+1]=g+K,W[L+2]=g+K+1;g+=ot+1}else{let I=ut.setArraySize(l,L+3*f);I[L]=p,I[L+1]=M,I[L+2]=r.r,I[L+3]=r.g,I[L+4]=r.b,I[L+5]=r.a,a?(I[L+6]=v,I[L+7]=x,I[L+8]=o.r,I[L+9]=o.g,I[L+10]=o.b,I[L+11]=o.a,I[L+12]=A,I[L+13]=S,I[L+14]=r.r,I[L+15]=r.g,I[L+16]=r.b,I[L+17]=r.a,I[L+18]=b,I[L+19]=C,I[L+20]=o.r,I[L+21]=o.g,I[L+22]=o.b,I[L+23]=o.a,I[L+24]=E,I[L+25]=w,I[L+26]=r.r,I[L+27]=r.g,I[L+28]=r.b,I[L+29]=r.a,I[L+30]=P,I[L+31]=O,I[L+32]=o.r,I[L+33]=o.g,I[L+34]=o.b,I[L+35]=o.a):(I[L+6]=v,I[L+7]=x,I[L+8]=A,I[L+9]=S,I[L+10]=r.r,I[L+11]=r.g,I[L+12]=r.b,I[L+13]=r.a,I[L+14]=b,I[L+15]=C,I[L+16]=E,I[L+17]=w,I[L+18]=r.r,I[L+19]=r.g,I[L+20]=r.b,I[L+21]=r.a,I[L+22]=P,I[L+23]=O),L=h.length;let B=ut.setArraySize(h,L+3);B[L]=g,B[L+1]=g+1,B[L+2]=g+2,g+=3;break}}}}clipTrianglesUnpacked(t,e,i,n){let r=this.clipOutput,o=this.clippedVertices,a=this.clippedUVs,c=this.clippedTriangles,l=this.clippingPolygons,h=l.length,u=0;o.length=0,a.length=0,c.length=0;for(let d=0;d<i;d+=3){let f=e[d]<<1,g=t[f],_=t[f+1],m=n[f],p=n[f+1];f=e[d+1]<<1;let M=t[f],v=t[f+1],x=n[f],A=n[f+1];f=e[d+2]<<1;let S=t[f],b=t[f+1],C=n[f],E=n[f+1];for(let w=0;w<h;w++){let P=o.length;if(this.clip(g,_,M,v,S,b,l[w],r)){let O=r.length;if(O==0)continue;let U=v-b,L=S-M,I=g-S,B=b-_,G=1/(U*I+L*(_-b)),H=O>>1,Z=this.clipOutput,nt=ut.setArraySize(o,P+H*2),ot=ut.setArraySize(a,P+H*2);for(let at=0;at<O;at+=2,P+=2){let W=Z[at],K=Z[at+1];nt[P]=W,nt[P+1]=K;let mt=W-S,lt=K-b,_t=(U*mt+L*lt)*G,wt=(B*mt+I*lt)*G,Rt=1-_t-wt;ot[P]=m*_t+x*wt+C*Rt,ot[P+1]=p*_t+A*wt+E*Rt}P=c.length;let vt=ut.setArraySize(c,P+3*(H-2));H--;for(let at=1;at<H;at++,P+=3)vt[P]=u,vt[P+1]=u+at,vt[P+2]=u+at+1;u+=H+1}else{let O=ut.setArraySize(o,P+6);O[P]=g,O[P+1]=_,O[P+2]=M,O[P+3]=v,O[P+4]=S,O[P+5]=b;let U=ut.setArraySize(a,P+3*2);U[P]=m,U[P+1]=p,U[P+2]=x,U[P+3]=A,U[P+4]=C,U[P+5]=E,P=c.length;let L=ut.setArraySize(c,P+3);L[P]=u,L[P+1]=u+1,L[P+2]=u+2,u+=3;break}}}}clip(t,e,i,n,r,o,a,c){let l=c,h=!1,u;a.length%4>=2?(u=c,c=this.scratch):u=this.scratch,u.length=0,u.push(t),u.push(e),u.push(i),u.push(n),u.push(r),u.push(o),u.push(t),u.push(e),c.length=0;let d=a.length-4,f=a;for(let g=0;;g+=2){let _=f[g],m=f[g+1],p=_-f[g+2],M=m-f[g+3],v=c.length,x=u;for(let S=0,b=u.length-2;S<b;){let C=x[S],E=x[S+1];S+=2;let w=x[S],P=x[S+1],O=M*(_-w)>p*(m-P),U=M*(_-C)-p*(m-E);if(U>0){if(O){c.push(w),c.push(P);continue}let L=w-C,I=P-E,B=U/(L*M-I*p);if(B>=0&&B<=1)c.push(C+L*B),c.push(E+I*B);else{c.push(w),c.push(P);continue}}else if(O){let L=w-C,I=P-E,B=U/(L*M-I*p);if(B>=0&&B<=1)c.push(C+L*B),c.push(E+I*B),c.push(w),c.push(P);else{c.push(w),c.push(P);continue}}h=!0}if(v==c.length)return l.length=0,!0;if(c.push(c[0]),c.push(c[1]),g==d)break;let A=c;c=u,c.length=0,u=A}if(l!=c){l.length=0;for(let g=0,_=c.length-2;g<_;g++)l[g]=c[g]}else l.length=l.length-2;return h}static makeClockwise(t){let e=t,i=t.length,n=e[i-2]*e[1]-e[0]*e[i-1],r=0,o=0,a=0,c=0;for(let l=0,h=i-3;l<h;l+=2)r=e[l],o=e[l+1],a=e[l+2],c=e[l+3],n+=r*c-a*o;if(!(n<0))for(let l=0,h=i-2,u=i>>1;l<u;l+=2){let d=e[l],f=e[l+1],g=h-l;e[l]=e[g],e[l+1]=e[g+1],e[g]=d,e[g+1]=f}}}class z_{constructor(t){y(this,"attachmentLoader");y(this,"scale",1);y(this,"linkedMeshes",new Array);this.attachmentLoader=t}readSkeletonData(t){let e=this.scale,i=new F_,n=typeof t=="string"?JSON.parse(t):t,r=n.skeleton;if(r&&(i.hash=r.hash,i.version=r.spine,i.x=r.x,i.y=r.y,i.width=r.width,i.height=r.height,i.referenceScale=F(r,"referenceScale",100)*e,i.fps=r.fps,i.imagesPath=r.images??null,i.audioPath=r.audio??null),n.bones)for(let o=0;o<n.bones.length;o++){let a=n.bones[o],c=null,l=F(a,"parent",null);l&&(c=i.findBone(l));let h=new w_(i.bones.length,a.name,c);h.length=F(a,"length",0)*e,h.x=F(a,"x",0)*e,h.y=F(a,"y",0)*e,h.rotation=F(a,"rotation",0),h.scaleX=F(a,"scaleX",1),h.scaleY=F(a,"scaleY",1),h.shearX=F(a,"shearX",0),h.shearY=F(a,"shearY",0),h.inherit=ut.enumValue(fe,F(a,"inherit","Normal")),h.skinRequired=F(a,"skin",!1);let u=F(a,"color",null);u&&h.color.setFromString(u),i.bones.push(h)}if(n.slots)for(let o=0;o<n.slots.length;o++){let a=n.slots[o],c=a.name,l=i.findBone(a.bone);if(!l)throw new Error(`Couldn't find bone ${a.bone} for slot ${c}`);let h=new B_(i.slots.length,c,l),u=F(a,"color",null);u&&h.color.setFromString(u);let d=F(a,"dark",null);d&&(h.darkColor=Zt.fromString(d)),h.attachmentName=F(a,"attachment",null),h.blendMode=ut.enumValue(tn,F(a,"blend","normal")),h.visible=F(a,"visible",!0),i.slots.push(h)}if(n.ik)for(let o=0;o<n.ik.length;o++){let a=n.ik[o],c=new P_(a.name);c.order=F(a,"order",0),c.skinRequired=F(a,"skin",!1);for(let h=0;h<a.bones.length;h++){let u=i.findBone(a.bones[h]);if(!u)throw new Error(`Couldn't find bone ${a.bones[h]} for IK constraint ${a.name}.`);c.bones.push(u)}let l=i.findBone(a.target);if(!l)throw new Error(`Couldn't find target bone ${a.target} for IK constraint ${a.name}.`);c.target=l,c.mix=F(a,"mix",1),c.softness=F(a,"softness",0)*e,c.bendDirection=F(a,"bendPositive",!0)?1:-1,c.compress=F(a,"compress",!1),c.stretch=F(a,"stretch",!1),c.uniform=F(a,"uniform",!1),i.ikConstraints.push(c)}if(n.transform)for(let o=0;o<n.transform.length;o++){let a=n.transform[o],c=new k_(a.name);c.order=F(a,"order",0),c.skinRequired=F(a,"skin",!1);for(let u=0;u<a.bones.length;u++){let d=a.bones[u],f=i.findBone(d);if(!f)throw new Error(`Couldn't find bone ${d} for transform constraint ${a.name}.`);c.bones.push(f)}let l=a.target,h=i.findBone(l);if(!h)throw new Error(`Couldn't find target bone ${l} for transform constraint ${a.name}.`);c.target=h,c.local=F(a,"local",!1),c.relative=F(a,"relative",!1),c.offsetRotation=F(a,"rotation",0),c.offsetX=F(a,"x",0)*e,c.offsetY=F(a,"y",0)*e,c.offsetScaleX=F(a,"scaleX",0),c.offsetScaleY=F(a,"scaleY",0),c.offsetShearY=F(a,"shearY",0),c.mixRotate=F(a,"mixRotate",1),c.mixX=F(a,"mixX",1),c.mixY=F(a,"mixY",c.mixX),c.mixScaleX=F(a,"mixScaleX",1),c.mixScaleY=F(a,"mixScaleY",c.mixScaleX),c.mixShearY=F(a,"mixShearY",1),i.transformConstraints.push(c)}if(n.path)for(let o=0;o<n.path.length;o++){let a=n.path[o],c=new D_(a.name);c.order=F(a,"order",0),c.skinRequired=F(a,"skin",!1);for(let u=0;u<a.bones.length;u++){let d=a.bones[u],f=i.findBone(d);if(!f)throw new Error(`Couldn't find bone ${d} for path constraint ${a.name}.`);c.bones.push(f)}let l=a.target,h=i.findSlot(l);if(!h)throw new Error(`Couldn't find target slot ${l} for path constraint ${a.name}.`);c.target=h,c.positionMode=ut.enumValue(sn,F(a,"positionMode","Percent")),c.spacingMode=ut.enumValue(Be,F(a,"spacingMode","Length")),c.rotateMode=ut.enumValue(Sn,F(a,"rotateMode","Tangent")),c.offsetRotation=F(a,"rotation",0),c.position=F(a,"position",0),c.positionMode==sn.Fixed&&(c.position*=e),c.spacing=F(a,"spacing",0),(c.spacingMode==Be.Length||c.spacingMode==Be.Fixed)&&(c.spacing*=e),c.mixRotate=F(a,"mixRotate",1),c.mixX=F(a,"mixX",1),c.mixY=F(a,"mixY",c.mixX),i.pathConstraints.push(c)}if(n.physics)for(let o=0;o<n.physics.length;o++){const a=n.physics[o],c=new N_(a.name);c.order=F(a,"order",0),c.skinRequired=F(a,"skin",!1);const l=a.bone,h=i.findBone(l);if(h==null)throw new Error("Physics bone not found: "+l);c.bone=h,c.x=F(a,"x",0),c.y=F(a,"y",0),c.rotate=F(a,"rotate",0),c.scaleX=F(a,"scaleX",0),c.shearX=F(a,"shearX",0),c.limit=F(a,"limit",5e3)*e,c.step=1/F(a,"fps",60),c.inertia=F(a,"inertia",1),c.strength=F(a,"strength",100),c.damping=F(a,"damping",1),c.massInverse=1/F(a,"mass",1),c.wind=F(a,"wind",0),c.gravity=F(a,"gravity",0),c.mix=F(a,"mix",1),c.inertiaGlobal=F(a,"inertiaGlobal",!1),c.strengthGlobal=F(a,"strengthGlobal",!1),c.dampingGlobal=F(a,"dampingGlobal",!1),c.massGlobal=F(a,"massGlobal",!1),c.windGlobal=F(a,"windGlobal",!1),c.gravityGlobal=F(a,"gravityGlobal",!1),c.mixGlobal=F(a,"mixGlobal",!1),i.physicsConstraints.push(c)}if(n.skins)for(let o=0;o<n.skins.length;o++){let a=n.skins[o],c=new O_(a.name);if(a.bones)for(let l=0;l<a.bones.length;l++){let h=a.bones[l],u=i.findBone(h);if(!u)throw new Error(`Couldn't find bone ${h} for skin ${a.name}.`);c.bones.push(u)}if(a.ik)for(let l=0;l<a.ik.length;l++){let h=a.ik[l],u=i.findIkConstraint(h);if(!u)throw new Error(`Couldn't find IK constraint ${h} for skin ${a.name}.`);c.constraints.push(u)}if(a.transform)for(let l=0;l<a.transform.length;l++){let h=a.transform[l],u=i.findTransformConstraint(h);if(!u)throw new Error(`Couldn't find transform constraint ${h} for skin ${a.name}.`);c.constraints.push(u)}if(a.path)for(let l=0;l<a.path.length;l++){let h=a.path[l],u=i.findPathConstraint(h);if(!u)throw new Error(`Couldn't find path constraint ${h} for skin ${a.name}.`);c.constraints.push(u)}if(a.physics)for(let l=0;l<a.physics.length;l++){let h=a.physics[l],u=i.findPhysicsConstraint(h);if(!u)throw new Error(`Couldn't find physics constraint ${h} for skin ${a.name}.`);c.constraints.push(u)}for(let l in a.attachments){let h=i.findSlot(l);if(!h)throw new Error(`Couldn't find slot ${l} for skin ${a.name}.`);let u=a.attachments[l];for(let d in u){let f=this.readAttachment(u[d],c,h.index,d,i);f&&c.setAttachment(h.index,d,f)}}i.skins.push(c),c.name=="default"&&(i.defaultSkin=c)}for(let o=0,a=this.linkedMeshes.length;o<a;o++){let c=this.linkedMeshes[o],l=c.skin?i.findSkin(c.skin):i.defaultSkin;if(!l)throw new Error(`Skin not found: ${c.skin}`);let h=l.getAttachment(c.slotIndex,c.parent);if(!h)throw new Error(`Parent mesh not found: ${c.parent}`);c.mesh.timelineAttachment=c.inheritTimeline?h:c.mesh,c.mesh.setParentMesh(h),c.mesh.region!=null&&c.mesh.updateRegion()}if(this.linkedMeshes.length=0,n.events)for(let o in n.events){let a=n.events[o],c=new C_(o);c.intValue=F(a,"int",0),c.floatValue=F(a,"float",0),c.stringValue=F(a,"string",""),c.audioPath=F(a,"audio",null),c.audioPath&&(c.volume=F(a,"volume",1),c.balance=F(a,"balance",0)),i.events.push(c)}if(n.animations)for(let o in n.animations){let a=n.animations[o];this.readAnimation(a,o,i)}return i}readAttachment(t,e,i,n,r){let o=this.scale;switch(n=F(t,"name",n),F(t,"type","region")){case"region":{let a=F(t,"path",n),c=this.readSequence(F(t,"sequence",null)),l=this.attachmentLoader.newRegionAttachment(e,n,a,c);if(!l)return null;l.path=a,l.x=F(t,"x",0)*o,l.y=F(t,"y",0)*o,l.scaleX=F(t,"scaleX",1),l.scaleY=F(t,"scaleY",1),l.rotation=F(t,"rotation",0),l.width=t.width*o,l.height=t.height*o,l.sequence=c;let h=F(t,"color",null);return h&&l.color.setFromString(h),l.region!=null&&l.updateRegion(),l}case"boundingbox":{let a=this.attachmentLoader.newBoundingBoxAttachment(e,n);if(!a)return null;this.readVertices(t,a,t.vertexCount<<1);let c=F(t,"color",null);return c&&a.color.setFromString(c),a}case"mesh":case"linkedmesh":{let a=F(t,"path",n),c=this.readSequence(F(t,"sequence",null)),l=this.attachmentLoader.newMeshAttachment(e,n,a,c);if(!l)return null;l.path=a;let h=F(t,"color",null);h&&l.color.setFromString(h),l.width=F(t,"width",0)*o,l.height=F(t,"height",0)*o,l.sequence=c;let u=F(t,"parent",null);if(u)return this.linkedMeshes.push(new V_(l,F(t,"skin",null),i,u,F(t,"timelines",!0))),l;let d=t.uvs;return this.readVertices(t,l,d.length),l.triangles=t.triangles,l.regionUVs=d,l.region!=null&&l.updateRegion(),l.edges=F(t,"edges",null),l.hullLength=F(t,"hull",0)*2,l}case"path":{let a=this.attachmentLoader.newPathAttachment(e,n);if(!a)return null;a.closed=F(t,"closed",!1),a.constantSpeed=F(t,"constantSpeed",!0);let c=t.vertexCount;this.readVertices(t,a,c<<1);let l=ut.newArray(c/3,0);for(let u=0;u<t.lengths.length;u++)l[u]=t.lengths[u]*o;a.lengths=l;let h=F(t,"color",null);return h&&a.color.setFromString(h),a}case"point":{let a=this.attachmentLoader.newPointAttachment(e,n);if(!a)return null;a.x=F(t,"x",0)*o,a.y=F(t,"y",0)*o,a.rotation=F(t,"rotation",0);let c=F(t,"color",null);return c&&a.color.setFromString(c),a}case"clipping":{let a=this.attachmentLoader.newClippingAttachment(e,n);if(!a)return null;let c=F(t,"end",null);c&&(a.endSlot=r.findSlot(c));let l=t.vertexCount;this.readVertices(t,a,l<<1);let h=F(t,"color",null);return h&&a.color.setFromString(h),a}}return null}readSequence(t){if(t==null)return null;let e=new uo(F(t,"count",0));return e.start=F(t,"start",1),e.digits=F(t,"digits",0),e.setupIndex=F(t,"setup",0),e}readVertices(t,e,i){let n=this.scale;e.worldVerticesLength=i;let r=t.vertices;if(i==r.length){let c=ut.toFloatArray(r);if(n!=1)for(let l=0,h=r.length;l<h;l++)c[l]*=n;e.vertices=c;return}let o=new Array,a=new Array;for(let c=0,l=r.length;c<l;){let h=r[c++];a.push(h);for(let u=c+h*4;c<u;c+=4)a.push(r[c]),o.push(r[c+1]*n),o.push(r[c+2]*n),o.push(r[c+3])}e.bones=a,e.vertices=ut.toFloatArray(o)}readAnimation(t,e,i){let n=this.scale,r=new Array;if(t.slots)for(let a in t.slots){let c=t.slots[a],l=i.findSlot(a);if(!l)throw new Error("Slot not found: "+a);let h=l.index;for(let u in c){let d=c[u];if(!d)continue;let f=d.length;if(u=="attachment"){let g=new Ms(f,h);for(let _=0;_<f;_++){let m=d[_];g.setFrame(_,F(m,"time",0),F(m,"name",null))}r.push(g)}else if(u=="rgba"){let g=new Kg(f,f<<2,h),_=d[0],m=F(_,"time",0),p=Zt.fromString(_.color);for(let M=0,v=0;;M++){g.setFrame(M,m,p.r,p.g,p.b,p.a);let x=d[M+1];if(!x){g.shrink(v);break}let A=F(x,"time",0),S=Zt.fromString(x.color),b=_.curve;b&&(v=qt(b,g,v,M,0,m,A,p.r,S.r,1),v=qt(b,g,v,M,1,m,A,p.g,S.g,1),v=qt(b,g,v,M,2,m,A,p.b,S.b,1),v=qt(b,g,v,M,3,m,A,p.a,S.a,1)),m=A,p=S,_=x}r.push(g)}else if(u=="rgb"){let g=new Zg(f,f*3,h),_=d[0],m=F(_,"time",0),p=Zt.fromString(_.color);for(let M=0,v=0;;M++){g.setFrame(M,m,p.r,p.g,p.b);let x=d[M+1];if(!x){g.shrink(v);break}let A=F(x,"time",0),S=Zt.fromString(x.color),b=_.curve;b&&(v=qt(b,g,v,M,0,m,A,p.r,S.r,1),v=qt(b,g,v,M,1,m,A,p.g,S.g,1),v=qt(b,g,v,M,2,m,A,p.b,S.b,1)),m=A,p=S,_=x}r.push(g)}else if(u=="alpha")r.push(di(d,new Jg(f,f,h),0,1));else if(u=="rgba2"){let g=new Qg(f,f*7,h),_=d[0],m=F(_,"time",0),p=Zt.fromString(_.light),M=Zt.fromString(_.dark);for(let v=0,x=0;;v++){g.setFrame(v,m,p.r,p.g,p.b,p.a,M.r,M.g,M.b);let A=d[v+1];if(!A){g.shrink(x);break}let S=F(A,"time",0),b=Zt.fromString(A.light),C=Zt.fromString(A.dark),E=_.curve;E&&(x=qt(E,g,x,v,0,m,S,p.r,b.r,1),x=qt(E,g,x,v,1,m,S,p.g,b.g,1),x=qt(E,g,x,v,2,m,S,p.b,b.b,1),x=qt(E,g,x,v,3,m,S,p.a,b.a,1),x=qt(E,g,x,v,4,m,S,M.r,C.r,1),x=qt(E,g,x,v,5,m,S,M.g,C.g,1),x=qt(E,g,x,v,6,m,S,M.b,C.b,1)),m=S,p=b,M=C,_=A}r.push(g)}else if(u=="rgb2"){let g=new t_(f,f*6,h),_=d[0],m=F(_,"time",0),p=Zt.fromString(_.light),M=Zt.fromString(_.dark);for(let v=0,x=0;;v++){g.setFrame(v,m,p.r,p.g,p.b,M.r,M.g,M.b);let A=d[v+1];if(!A){g.shrink(x);break}let S=F(A,"time",0),b=Zt.fromString(A.light),C=Zt.fromString(A.dark),E=_.curve;E&&(x=qt(E,g,x,v,0,m,S,p.r,b.r,1),x=qt(E,g,x,v,1,m,S,p.g,b.g,1),x=qt(E,g,x,v,2,m,S,p.b,b.b,1),x=qt(E,g,x,v,3,m,S,M.r,C.r,1),x=qt(E,g,x,v,4,m,S,M.g,C.g,1),x=qt(E,g,x,v,5,m,S,M.b,C.b,1)),m=S,p=b,M=C,_=A}r.push(g)}}}if(t.bones)for(let a in t.bones){let c=t.bones[a],l=i.findBone(a);if(!l)throw new Error("Bone not found: "+a);let h=l.index;for(let u in c){let d=c[u],f=d.length;if(f!=0){if(u==="rotate")r.push(di(d,new fo(f,f,h),0,1));else if(u==="translate"){let g=new zg(f,f<<1,h);r.push(va(d,g,"x","y",0,n))}else if(u==="translatex"){let g=new Vg(f,f,h);r.push(di(d,g,0,n))}else if(u==="translatey"){let g=new Hg(f,f,h);r.push(di(d,g,0,n))}else if(u==="scale"){let g=new Gg(f,f<<1,h);r.push(va(d,g,"x","y",1,1))}else if(u==="scalex"){let g=new Xg(f,f,h);r.push(di(d,g,1,1))}else if(u==="scaley"){let g=new Wg(f,f,h);r.push(di(d,g,1,1))}else if(u==="shear"){let g=new Yg(f,f<<1,h);r.push(va(d,g,"x","y",0,1))}else if(u==="shearx"){let g=new qg(f,f,h);r.push(di(d,g,0,1))}else if(u==="sheary"){let g=new $g(f,f,h);r.push(di(d,g,0,1))}else if(u==="inherit"){let g=new jg(f,l.index);for(let _=0;_<d.length;_++){let m=d[_];g.setFrame(_,F(m,"time",0),ut.enumValue(fe,F(m,"inherit","Normal")))}r.push(g)}}}}if(t.ik)for(let a in t.ik){let c=t.ik[a],l=c[0];if(!l)continue;let h=i.findIkConstraint(a);if(!h)throw new Error("IK Constraint not found: "+a);let u=i.ikConstraints.indexOf(h),d=new i_(c.length,c.length<<1,u),f=F(l,"time",0),g=F(l,"mix",1),_=F(l,"softness",0)*n;for(let m=0,p=0;;m++){d.setFrame(m,f,g,_,F(l,"bendPositive",!0)?1:-1,F(l,"compress",!1),F(l,"stretch",!1));let M=c[m+1];if(!M){d.shrink(p);break}let v=F(M,"time",0),x=F(M,"mix",1),A=F(M,"softness",0)*n,S=l.curve;S&&(p=qt(S,d,p,m,0,f,v,g,x,1),p=qt(S,d,p,m,1,f,v,_,A,n)),f=v,g=x,_=A,l=M}r.push(d)}if(t.transform)for(let a in t.transform){let c=t.transform[a],l=c[0];if(!l)continue;let h=i.findTransformConstraint(a);if(!h)throw new Error("Transform constraint not found: "+a);let u=i.transformConstraints.indexOf(h),d=new n_(c.length,c.length*6,u),f=F(l,"time",0),g=F(l,"mixRotate",1),_=F(l,"mixX",1),m=F(l,"mixY",_),p=F(l,"mixScaleX",1),M=F(l,"mixScaleY",p),v=F(l,"mixShearY",1);for(let x=0,A=0;;x++){d.setFrame(x,f,g,_,m,p,M,v);let S=c[x+1];if(!S){d.shrink(A);break}let b=F(S,"time",0),C=F(S,"mixRotate",1),E=F(S,"mixX",1),w=F(S,"mixY",E),P=F(S,"mixScaleX",1),O=F(S,"mixScaleY",P),U=F(S,"mixShearY",1),L=l.curve;L&&(A=qt(L,d,A,x,0,f,b,g,C,1),A=qt(L,d,A,x,1,f,b,_,E,1),A=qt(L,d,A,x,2,f,b,m,w,1),A=qt(L,d,A,x,3,f,b,p,P,1),A=qt(L,d,A,x,4,f,b,M,O,1),A=qt(L,d,A,x,5,f,b,v,U,1)),f=b,g=C,_=E,m=w,p=P,M=O,p=P,l=S}r.push(d)}if(t.path)for(let a in t.path){let c=t.path[a],l=i.findPathConstraint(a);if(!l)throw new Error("Path constraint not found: "+a);let h=i.pathConstraints.indexOf(l);for(let u in c){let d=c[u],f=d[0];if(!f)continue;let g=d.length;if(u==="position"){let _=new s_(g,g,h);r.push(di(d,_,0,l.positionMode==sn.Fixed?n:1))}else if(u==="spacing"){let _=new r_(g,g,h);r.push(di(d,_,0,l.spacingMode==Be.Length||l.spacingMode==Be.Fixed?n:1))}else if(u==="mix"){let _=new a_(g,g*3,h),m=F(f,"time",0),p=F(f,"mixRotate",1),M=F(f,"mixX",1),v=F(f,"mixY",M);for(let x=0,A=0;;x++){_.setFrame(x,m,p,M,v);let S=d[x+1];if(!S){_.shrink(A);break}let b=F(S,"time",0),C=F(S,"mixRotate",1),E=F(S,"mixX",1),w=F(S,"mixY",E),P=f.curve;P&&(A=qt(P,_,A,x,0,m,b,p,C,1),A=qt(P,_,A,x,1,m,b,M,E,1),A=qt(P,_,A,x,2,m,b,v,w,1)),m=b,p=C,M=E,v=w,f=S}r.push(_)}}}if(t.physics)for(let a in t.physics){let c=t.physics[a],l=-1;if(a.length>0){let h=i.findPhysicsConstraint(a);if(!h)throw new Error("Physics constraint not found: "+a);l=i.physicsConstraints.indexOf(h)}for(let h in c){let u=c[h],d=u[0];if(!d)continue;let f=u.length;if(h=="reset"){const _=new po(f,l);for(let m=0;d!=null;d=u[m+1],m++)_.setFrame(m,F(d,"time",0));r.push(_);continue}let g;if(h=="inertia")g=new o_(f,f,l);else if(h=="strength")g=new l_(f,f,l);else if(h=="damping")g=new c_(f,f,l);else if(h=="mass")g=new h_(f,f,l);else if(h=="wind")g=new u_(f,f,l);else if(h=="gravity")g=new d_(f,f,l);else if(h=="mix")g=new f_(f,f,l);else continue;r.push(di(u,g,0,1))}}if(t.attachments)for(let a in t.attachments){let c=t.attachments[a],l=i.findSkin(a);if(!l)throw new Error("Skin not found: "+a);for(let h in c){let u=c[h],d=i.findSlot(h);if(!d)throw new Error("Slot not found: "+h);let f=d.index;for(let g in u){let _=u[g],m=l.getAttachment(f,g);for(let p in _){let M=_[p],v=M[0];if(v){if(p=="deform"){let x=m.bones,A=m.vertices,S=x?A.length/3*2:A.length,b=new e_(M.length,M.length,f,m),C=F(v,"time",0);for(let E=0,w=0;;E++){let P,O=F(v,"vertices",null);if(!O)P=x?ut.newFloatArray(S):A;else{P=ut.newFloatArray(S);let B=F(v,"offset",0);if(ut.arrayCopy(O,0,P,B,O.length),n!=1)for(let G=B,H=G+O.length;G<H;G++)P[G]*=n;if(!x)for(let G=0;G<S;G++)P[G]+=A[G]}b.setFrame(E,C,P);let U=M[E+1];if(!U){b.shrink(w);break}let L=F(U,"time",0),I=v.curve;I&&(w=qt(I,b,w,E,0,C,L,0,1,1)),C=L,v=U}r.push(b)}else if(p=="sequence"){let x=new mo(M.length,f,m),A=0;for(let S=0;S<M.length;S++){let b=F(v,"delay",A),C=F(v,"time",0),E=Re[F(v,"mode","hold")],w=F(v,"index",0);x.setFrame(S,C,E,w,b),A=b,v=M[S+1]}r.push(x)}}}}}}if(t.drawOrder){let a=new es(t.drawOrder.length),c=i.slots.length,l=0;for(let h=0;h<t.drawOrder.length;h++,l++){let u=t.drawOrder[h],d=null,f=F(u,"offsets",null);if(f){d=ut.newArray(c,-1);let g=ut.newArray(c-f.length,0),_=0,m=0;for(let p=0;p<f.length;p++){let M=f[p],v=i.findSlot(M.slot);if(!v)throw new Error("Slot not found: "+v);let x=v.index;for(;_!=x;)g[m++]=_++;d[_+M.offset]=_++}for(;_<c;)g[m++]=_++;for(let p=c-1;p>=0;p--)d[p]==-1&&(d[p]=g[--m])}a.setFrame(l,F(u,"time",0),d)}r.push(a)}if(t.events){let a=new wr(t.events.length),c=0;for(let l=0;l<t.events.length;l++,c++){let h=t.events[l],u=i.findEvent(h.name);if(!u)throw new Error("Event not found: "+h.name);let d=new T_(ut.toSinglePrecision(F(h,"time",0)),u);d.intValue=F(h,"int",u.intValue),d.floatValue=F(h,"float",u.floatValue),d.stringValue=F(h,"string",u.stringValue),d.data.audioPath&&(d.volume=F(h,"volume",1),d.balance=F(h,"balance",0)),a.setFrame(c,d)}r.push(a)}let o=0;for(let a=0,c=r.length;a<c;a++)o=Math.max(o,r[a].getDuration());i.animations.push(new Yc(e,r,o))}}class V_{constructor(t,e,i,n,r){y(this,"parent");y(this,"skin");y(this,"slotIndex");y(this,"mesh");y(this,"inheritTimeline");this.mesh=t,this.skin=e,this.slotIndex=i,this.parent=n,this.inheritTimeline=r}}function di(s,t,e,i){let n=s[0],r=F(n,"time",0),o=F(n,"value",e)*i,a=0;for(let c=0;;c++){t.setFrame(c,r,o);let l=s[c+1];if(!l)return t.shrink(a),t;let h=F(l,"time",0),u=F(l,"value",e)*i;n.curve&&(a=qt(n.curve,t,a,c,0,r,h,o,u,i)),r=h,o=u,n=l}}function va(s,t,e,i,n,r){let o=s[0],a=F(o,"time",0),c=F(o,e,n)*r,l=F(o,i,n)*r,h=0;for(let u=0;;u++){t.setFrame(u,a,c,l);let d=s[u+1];if(!d)return t.shrink(h),t;let f=F(d,"time",0),g=F(d,e,n)*r,_=F(d,i,n)*r,m=o.curve;m&&(h=qt(m,t,h,u,0,a,f,c,g,r),h=qt(m,t,h,u,1,a,f,l,_,r)),a=f,c=g,l=_,o=d}}function qt(s,t,e,i,n,r,o,a,c,l){if(s=="stepped")return t.setStepped(i),e;let h=n<<2,u=s[h],d=s[h+1]*l,f=s[h+2],g=s[h+3]*l;return t.setBezier(e,i,n,r,a,u,d,f,g,o,c),e+1}function F(s,t,e){return s[t]!==void 0?s[t]:e}typeof Math.fround>"u"&&(Math.fround=function(s){return function(t){return s[0]=t,s[0]}}(new Float32Array(1)));const yn=class yn extends v_{constructor(e,i=!1){super(e);y(this,"texture");e instanceof ImageBitmap?this.texture=new Xu(e):this.texture=new ri(e),this.texture.premultiplyAlpha=!i,this.texture.flipY=!1,this.texture.needsUpdate=!0}setFilters(e,i){this.texture.minFilter=yn.toThreeJsMinificationTextureFilter(e),this.texture.magFilter=yn.toThreeJsMagnificationTextureFilter(i)}setWraps(e,i){this.texture.wrapS=yn.toThreeJsTextureWrap(e),this.texture.wrapT=yn.toThreeJsTextureWrap(i)}dispose(){this.texture.dispose()}static toThreeJsMinificationTextureFilter(e){if(e===Ae.Linear)return Xe;if(e===Ae.MipMap)return Bh;if(e===Ae.MipMapLinearNearest)return Oh;if(e===Ae.MipMapNearestLinear)return Fh;if(e===Ae.MipMapNearestNearest)return Nh;if(e===Ae.Nearest)return ke;throw new Error("Unknown texture filter: "+e)}static toThreeJsMagnificationTextureFilter(e){if(e===Ae.Linear)return Xe;if(e===Ae.MipMap)return Xe;if(e===Ae.MipMapLinearNearest)return ke;if(e===Ae.MipMapNearestLinear)return Xe;if(e===Ae.MipMapNearestNearest)return ke;if(e===Ae.Nearest)return ke;throw new Error("Unknown texture filter: "+e)}static toThreeJsTextureWrap(e){if(e===Bi.ClampToEdge)return Qi;if(e===Bi.MirroredRepeat)return xr;if(e===Bi.Repeat)return _r;throw new Error("Unknown texture wrap: "+e)}static toThreeJsBlending(e){if(e===tn.Normal)return{blending:Ui};if(e===tn.Additive)return{blending:ba};if(e===tn.Multiply)return{blending:Ea,blendSrc:lc,blendDst:As,blendSrcAlpha:cr,blendDstAlpha:As};if(e===tn.Screen)return{blending:Ea,blendSrc:cr,blendDst:wa,blendSrcAlpha:cr,blendDstAlpha:wa};throw new Error("Unknown blendMode: "+e)}};y(yn,"fist",!0);let Tr=yn;class H_ extends A_{constructor(t="",e=new $c,i=!1){super(n=>new Tr(n,i),t,e)}}const Ki=class Ki extends xe{constructor(e,i=()=>{}){super();y(this,"tempPos",new Cs);y(this,"tempUv",new Cs);y(this,"tempLight",new Zt);y(this,"tempDark",new Zt);y(this,"skeleton");y(this,"state");y(this,"zOffset",.1);y(this,"batches",new Array);y(this,"materialFactory");y(this,"nextBatchIndex",0);y(this,"clipper",new Ar);y(this,"vertexSize",8);y(this,"twoColorTint");y(this,"vertices",ut.newFloatArray(1024));y(this,"tempColor",new Zt);y(this,"tempDarkColor",new Zt);y(this,"_castShadow",!1);y(this,"_receiveShadow",!1);"skeletonData"in e||(e={skeletonData:e,materialFactory:()=>{const o={...Ki.DEFAULT_MATERIAL_PARAMETERS};return i(o),new Sr(o)}}),this.twoColorTint=e.twoColorTint??!0,this.twoColorTint&&(this.vertexSize+=4),this.materialFactory=e.materialFactory??(()=>new Sr(Ki.DEFAULT_MATERIAL_PARAMETERS)),this.skeleton=new xo(e.skeletonData);let n=new x_(e.skeletonData);this.state=new go(n),Object.defineProperty(this,"castShadow",{get:()=>this._castShadow,set:r=>{this._castShadow=r,this.traverse(o=>{o instanceof $n&&(o.castShadow=r)})}}),Object.defineProperty(this,"receiveShadow",{get:()=>this._receiveShadow,set:r=>{this._receiveShadow=r,this.traverse(o=>{o instanceof $n&&(o.receiveShadow=r)})}})}update(e){let i=this.state,n=this.skeleton;i.update(e),i.apply(n),n.update(e),n.updateWorldTransform(Ji.update),this.updateGeometry()}dispose(){for(var e=0;e<this.batches.length;e++)this.batches[e].dispose()}clearBatches(){for(var e=0;e<this.batches.length;e++)this.batches[e].clear(),this.batches[e].visible=!1;this.nextBatchIndex=0}nextBatch(){if(this.batches.length==this.nextBatchIndex){let i=new $n($n.MAX_VERTICES,this.materialFactory,this.twoColorTint);i.castShadow=this._castShadow,i.receiveShadow=this._receiveShadow,this.add(i),this.batches.push(i)}let e=this.batches[this.nextBatchIndex++];return e.visible=!0,e}updateGeometry(){this.clearBatches();let e=this.tempLight;this.tempDark;let i=this.clipper,n=this.vertices,r=null,o=null,a=this.skeleton.drawOrder,c=this.nextBatch();c.begin();let l=0,h=this.zOffset;for(let u=0,d=a.length;u<d;u++){let f=i.isClipping()?2:this.vertexSize,g=a[u];if(!g.bone.active){i.clipEndWithSlot(g);continue}let _=g.getAttachment(),m,p,M=0;if(_ instanceof Rs){let v=_;m=v.color,n=this.vertices,M=f*4,v.computeWorldVertices(g,n,0,f),r=Ki.QUAD_TRIANGLES,o=v.uvs,p=v.region.texture}else if(_ instanceof An){let v=_;m=v.color,n=this.vertices,M=(v.worldVerticesLength>>1)*f,M>n.length&&(n=this.vertices=ut.newFloatArray(M)),v.computeWorldVertices(g,0,v.worldVerticesLength,n,0,f),r=v.triangles,o=v.uvs,p=v.region.texture}else if(_ instanceof Us){let v=_;i.clipStart(g,v);continue}else{i.clipEndWithSlot(g);continue}if(p!=null){let x=g.bone.skeleton.color,A=g.color,S=x.a*A.a*m.a,b=this.tempColor;b.set(x.r*A.r*m.r*S,x.g*A.g*m.g*S,x.b*A.b*m.b*S,S);let C=this.tempDarkColor;g.darkColor?(C.r=g.darkColor.r*S,C.g=g.darkColor.g*S,C.b=g.darkColor.b*S,C.a=1):C.set(1,1,1,0);let E,w,P,O;if(i.isClipping()){i.clipTriangles(n,r,r.length,o,b,e,this.twoColorTint);let B=i.clippedVertices,G=i.clippedTriangles;E=B,w=B.length,P=G,O=G.length}else{let B=n;if(this.twoColorTint)for(let G=2,H=0,Z=M;G<Z;G+=f,H+=2)B[G]=b.r,B[G+1]=b.g,B[G+2]=b.b,B[G+3]=b.a,B[G+4]=o[H],B[G+5]=o[H+1],B[G+6]=C.r,B[G+7]=C.g,B[G+8]=C.b,B[G+9]=C.a;else for(let G=2,H=0,Z=M;G<Z;G+=f,H+=2)B[G]=b.r,B[G+1]=b.g,B[G+2]=b.b,B[G+3]=b.a,B[G+4]=o[H],B[G+5]=o[H+1];E=n,w=M,P=r,O=r.length}if(w==0||O==0){i.clipEndWithSlot(g);continue}c.canBatch(w/this.vertexSize,O)||(c.end(),c=this.nextBatch(),c.begin());const U=g.data.blendMode,L=p.texture,I=c.findMaterialGroup(L,U);c.addMaterialGroup(O,I),c.batch(E,w,P,O,l),l+=h}i.clipEndWithSlot(g)}i.clipEnd(),c.end()}};y(Ki,"DEFAULT_MATERIAL_PARAMETERS",{side:fi,depthWrite:!0,depthTest:!0,transparent:!0,alphaTest:.001,vertexColors:!0,premultipliedAlpha:!0}),y(Ki,"QUAD_TRIANGLES",[0,1,2,2,3,0]),y(Ki,"VERTEX_SIZE",8);let Cr=Ki;const ws=class ws extends ni{constructor(e=ws.MAX_VERTICES,i,n=!0){super();y(this,"materialFactory");y(this,"twoColorTint");y(this,"vertexSize",9);y(this,"vertexBuffer");y(this,"vertices");y(this,"verticesLength",0);y(this,"indices");y(this,"indicesLength",0);y(this,"materialGroups",[]);if(this.materialFactory=i,this.twoColorTint=n,e>ws.MAX_VERTICES)throw new Error("Can't have more than 10920 triangles per batch: "+e);n&&(this.vertexSize+=3);let r=this.vertices=new Float32Array(e*this.vertexSize),o=this.indices=new Uint16Array(e*3),a=new bi,c=this.vertexBuffer=new ku(r,this.vertexSize);c.usage=WebGLRenderingContext.DYNAMIC_DRAW,a.setAttribute("position",new Yn(c,3,0,!1)),a.setAttribute("color",new Yn(c,4,3,!1)),a.setAttribute("uv",new Yn(c,2,7,!1)),n&&a.setAttribute("darkcolor",new Yn(c,3,9,!1)),a.setIndex(new si(o,1)),a.getIndex().usage=WebGLRenderingContext.DYNAMIC_DRAW,a.drawRange.start=0,a.drawRange.count=0,this.geometry=a,this.material=[]}dispose(){if(this.geometry.dispose(),this.material instanceof Oi)this.material.dispose();else if(this.material)for(let e=0;e<this.material.length;e++){let i=this.material[e];i instanceof Oi&&i.dispose()}}clear(){let e=this.geometry;if(e.drawRange.start=0,e.drawRange.count=0,e.clearGroups(),this.materialGroups=[],this.material instanceof Oi){const i=this.material;i.map=null,i.blending=Ui}else if(Array.isArray(this.material))for(let i=0;i<this.material.length;i++){const n=this.material[i];n.map=null,n.blending=Ui}return this}begin(){this.verticesLength=0,this.indicesLength=0}canBatch(e,i){return!(this.indicesLength+i>=this.indices.byteLength/2||this.verticesLength/this.vertexSize+e>=this.vertices.byteLength/4/this.vertexSize)}batch(e,i,n,r,o=0){let a=this.verticesLength/this.vertexSize,c=this.vertices,l=this.verticesLength,h=0;if(this.twoColorTint)for(;h<i;)c[l++]=e[h++],c[l++]=e[h++],c[l++]=o,c[l++]=e[h++],c[l++]=e[h++],c[l++]=e[h++],c[l++]=e[h++],c[l++]=e[h++],c[l++]=e[h++],c[l++]=e[h++],c[l++]=e[h++],c[l++]=e[h++],h++;else for(;h<i;)c[l++]=e[h++],c[l++]=e[h++],c[l++]=o,c[l++]=e[h++],c[l++]=e[h++],c[l++]=e[h++],c[l++]=e[h++],c[l++]=e[h++],c[l++]=e[h++];this.verticesLength=l;let u=this.indices;for(l=this.indicesLength,h=0;h<r;l++,h++)u[l]=n[h]+a;this.indicesLength+=r}end(){this.vertexBuffer.needsUpdate=this.verticesLength>0,this.vertexBuffer.addUpdateRange(0,this.verticesLength);let e=this.geometry;this.closeMaterialGroups();let i=e.getIndex();if(!i)throw new Error("BufferAttribute must not be null.");i.needsUpdate=this.indicesLength>0,i.addUpdateRange(0,this.indicesLength),e.drawRange.start=0,e.drawRange.count=this.indicesLength,e.computeVertexNormals()}addMaterialGroup(e,i){const n=this.materialGroups[this.materialGroups.length-1];n===void 0||n[2]!==i?this.materialGroups.push([this.indicesLength,e,i]):n[1]+=e}closeMaterialGroups(){const e=this.geometry;for(let i=0;i<this.materialGroups.length;i++){const[n,r,o]=this.materialGroups[i];e.addGroup(n,r,o)}}findMaterialGroup(e,i){const n=Tr.toThreeJsBlending(i);let r=-1;if(Array.isArray(this.material)){for(let a=0;a<this.material.length;a++){const c=this.material[a];if(!c.map)return ec(c,e,n),a;if(c.map===e&&n.blending===c.blending&&(n.blendSrc===void 0||n.blendSrc===c.blendSrc)&&(n.blendDst===void 0||n.blendDst===c.blendDst)&&(n.blendSrcAlpha===void 0||n.blendSrcAlpha===c.blendSrcAlpha)&&(n.blendDstAlpha===void 0||n.blendDstAlpha===c.blendDstAlpha))return a}const o=this.newMaterial();ec(o,e,n),this.material.push(o),r=this.material.length-1}else throw new Error("MeshBatcher.material needs to be an array for geometry groups to work");return r}newMaterial(){const e=this.materialFactory(Cr.DEFAULT_MATERIAL_PARAMETERS);if(!("map"in e))throw new Error("The material factory must return a material having the map property for the texture.");return e instanceof X_||(this.twoColorTint&&(e.defines={...e.defines,USE_SPINE_DARK_TINT:1}),e.onBeforeCompile=G_),e}};y(ws,"MAX_VERTICES",10920);let $n=ws;const G_=s=>{let t;s.vertexShader=`
		#if defined( USE_SPINE_DARK_TINT )
			attribute vec3 darkcolor;
		#endif
	`+s.vertexShader,t=`
		#if defined( USE_SPINE_DARK_TINT )
			varying vec3 v_dark;
		#endif
	`,s.vertexShader=ya(s.vertexShader,"#include <color_pars_vertex>",t),t=`
		#if defined( USE_SPINE_DARK_TINT )
			v_dark = vec3( 1.0 );
			v_dark *= darkcolor;
		#endif
	`,s.vertexShader=ya(s.vertexShader,"#include <color_vertex>",t),t=`
		#ifdef USE_SPINE_DARK_TINT
			varying vec3 v_dark;
		#endif
	`,s.fragmentShader=ya(s.fragmentShader,"#include <color_pars_fragment>",t),s.fragmentShader=s.fragmentShader.replace("#include <color_fragment>",`
			#ifdef USE_SPINE_DARK_TINT
				#ifdef USE_COLOR_ALPHA
						diffuseColor.a *= vColor.a;
						diffuseColor.rgb *= (1.0 - diffuseColor.rgb) * v_dark.rgb + diffuseColor.rgb * vColor.rgb;
				#endif
			#else
				#ifdef USE_COLOR_ALPHA
						diffuseColor *= vColor;
				#endif
			#endif
		`),s.fragmentShader=s.fragmentShader.replace("#include <premultiplied_alpha_fragment>",""),s.fragmentShader=s.fragmentShader.replace("#include <colorspace_fragment>","")};function ya(s,t,e){const i=s.indexOf(t),n=s.slice(0,i+t.length),r=s.slice(i+t.length);return n+e+r}function ec(s,t,e){s.map=t,Object.assign(s,e),s.needsUpdate=!0}class X_ extends Vi{get map(){return this.uniforms.map.value}set map(t){this.uniforms.map.value=t}constructor(t){let e=`
			varying vec2 vUv;
			varying vec4 vColor;
			void main() {
				vUv = uv;
				vColor = color;
				gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);
			}
		`,i=`
			uniform sampler2D map;
			#ifdef USE_SPINE_ALPHATEST
			uniform float alphaTest;
			#endif
			varying vec2 vUv;
			varying vec4 vColor;
			void main(void) {
				gl_FragColor = texture2D(map, vUv)*vColor;
				#ifdef USE_SPINE_ALPHATEST
					if (gl_FragColor.a < alphaTest) discard;
				#endif
			}
		`,n={map:{value:null}};t.uniforms&&(n={...t.uniforms,...n}),t.alphaTest&&t.alphaTest>0&&(t.defines={USE_SPINE_ALPHATEST:1}),super({vertexShader:e,fragmentShader:i,...t,uniforms:n})}}const ic={type:"change"},No={type:"start"},jc={type:"end"},lr=new Co,nc=new $i,W_=Math.cos(70*uu.DEG2RAD),Me=new X,Ve=2*Math.PI,le={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ma=1e-6;class Y_ extends td{constructor(t,e=null){super(t,e),this.state=le.NONE,this.enabled=!0,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Jn.ROTATE,MIDDLE:Jn.DOLLY,RIGHT:Jn.PAN},this.touches={ONE:Wn.ROTATE,TWO:Wn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new X,this._lastQuaternion=new wn,this._lastTargetPosition=new X,this._quat=new wn().setFromUnitVectors(t.up,new X(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Sl,this._sphericalDelta=new Sl,this._scale=1,this._panOffset=new X,this._rotateStart=new Ht,this._rotateEnd=new Ht,this._rotateDelta=new Ht,this._panStart=new Ht,this._panEnd=new Ht,this._panDelta=new Ht,this._dollyStart=new Ht,this._dollyEnd=new Ht,this._dollyDelta=new Ht,this._dollyDirection=new X,this._mouse=new Ht,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=$_.bind(this),this._onPointerDown=q_.bind(this),this._onPointerUp=j_.bind(this),this._onContextMenu=i0.bind(this),this._onMouseWheel=J_.bind(this),this._onKeyDown=Q_.bind(this),this._onTouchStart=t0.bind(this),this._onTouchMove=e0.bind(this),this._onMouseDown=K_.bind(this),this._onMouseMove=Z_.bind(this),this._interceptControlDown=n0.bind(this),this._interceptControlUp=s0.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ic),this.update(),this.state=le.NONE}update(t=null){const e=this.object.position;Me.copy(e).sub(this.target),Me.applyQuaternion(this._quat),this._spherical.setFromVector3(Me),this.autoRotate&&this.state===le.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,n=this.maxAzimuthAngle;isFinite(i)&&isFinite(n)&&(i<-Math.PI?i+=Ve:i>Math.PI&&(i-=Ve),n<-Math.PI?n+=Ve:n>Math.PI&&(n-=Ve),i<=n?this._spherical.theta=Math.max(i,Math.min(n,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+n)/2?Math.max(i,this._spherical.theta):Math.min(n,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Me.setFromSpherical(this._spherical),Me.applyQuaternion(this._quatInverse),e.copy(this.target).add(Me),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Me.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new X(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new X(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Me.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(lr.origin.copy(this.object.position),lr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(lr.direction))<W_?this.object.lookAt(this.target):(nc.setFromNormalAndCoplanarPoint(this.object.up,this.target),lr.intersectPlane(nc,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ma||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ma||this._lastTargetPosition.distanceToSquared(this.target)>Ma?(this.dispatchEvent(ic),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ve/60*this.autoRotateSpeed*t:Ve/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Me.setFromMatrixColumn(e,0),Me.multiplyScalar(-t),this._panOffset.add(Me)}_panUp(t,e){this.screenSpacePanning===!0?Me.setFromMatrixColumn(e,1):(Me.setFromMatrixColumn(e,0),Me.crossVectors(this.object.up,Me)),Me.multiplyScalar(t),this._panOffset.add(Me)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const n=this.object.position;Me.copy(n).sub(this.target);let r=Me.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),n=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=n/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ve*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ve*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ve*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ve*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ve*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ve*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),n=.5*(t.pageY+e.y);this._rotateStart.set(i,n)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),n=.5*(t.pageY+e.y);this._panStart.set(i,n)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,n=t.pageY-e.y,r=Math.sqrt(i*i+n*n);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),n=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ve*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ve*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),n=.5*(t.pageY+e.y);this._panEnd.set(i,n)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,n=t.pageY-e.y,r=Math.sqrt(i*i+n*n);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ht,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function q_(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function $_(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function j_(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(jc),this.state=le.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function K_(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Jn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=le.DOLLY;break;case Jn.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=le.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=le.ROTATE}break;case Jn.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=le.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=le.PAN}break;default:this.state=le.NONE}this.state!==le.NONE&&this.dispatchEvent(No)}function Z_(s){switch(this.state){case le.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case le.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case le.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function J_(s){this.enabled===!1||this.enableZoom===!1||this.state!==le.NONE||(s.preventDefault(),this.dispatchEvent(No),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(jc))}function Q_(s){this.enabled!==!1&&this._handleKeyDown(s)}function t0(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Wn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=le.TOUCH_ROTATE;break;case Wn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=le.TOUCH_PAN;break;default:this.state=le.NONE}break;case 2:switch(this.touches.TWO){case Wn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=le.TOUCH_DOLLY_PAN;break;case Wn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=le.TOUCH_DOLLY_ROTATE;break;default:this.state=le.NONE}break;default:this.state=le.NONE}this.state!==le.NONE&&this.dispatchEvent(No)}function e0(s){switch(this._trackPointer(s),this.state){case le.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case le.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case le.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case le.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=le.NONE}}function i0(s){this.enabled!==!1&&s.preventDefault()}function n0(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function s0(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class Mi{constructor(t,e,i,n,r="div"){this.parent=t,this.object=e,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("controller"),this.domElement.classList.add(n),this.$name=document.createElement("div"),this.$name.classList.add("name"),Mi.nextNameID=Mi.nextNameID||0,this.$name.id=`lil-gui-name-${++Mi.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class r0 extends Mi{constructor(t,e,i){super(t,e,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function vo(s){let t,e;return(t=s.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const a0={isPrimitive:!0,match:s=>typeof s=="string",fromHexString:vo,toHexString:vo},Ps={isPrimitive:!0,match:s=>typeof s=="number",fromHexString:s=>parseInt(s.substring(1),16),toHexString:s=>"#"+s.toString(16).padStart(6,0)},o0={isPrimitive:!1,match:s=>Array.isArray(s),fromHexString(s,t,e=1){const i=Ps.fromHexString(s);t[0]=(i>>16&255)/255*e,t[1]=(i>>8&255)/255*e,t[2]=(i&255)/255*e},toHexString([s,t,e],i=1){i=255/i;const n=s*i<<16^t*i<<8^e*i<<0;return Ps.toHexString(n)}},l0={isPrimitive:!1,match:s=>Object(s)===s,fromHexString(s,t,e=1){const i=Ps.fromHexString(s);t.r=(i>>16&255)/255*e,t.g=(i>>8&255)/255*e,t.b=(i&255)/255*e},toHexString({r:s,g:t,b:e},i=1){i=255/i;const n=s*i<<16^t*i<<8^e*i<<0;return Ps.toHexString(n)}},c0=[a0,Ps,o0,l0];function h0(s){return c0.find(t=>t.match(s))}class u0 extends Mi{constructor(t,e,i,n){super(t,e,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=h0(this.initialValue),this._rgbScale=n,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=vo(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Sa extends Mi{constructor(t,e,i){super(t,e,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",n=>{n.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class d0 extends Mi{constructor(t,e,i,n,r,o){super(t,e,i,"number"),this._initInput(),this.min(n),this.max(r);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let M=parseFloat(this.$input.value);isNaN(M)||(this._stepExplicit&&(M=this._snap(M)),this.setValue(this._clamp(M)))},i=M=>{const v=parseFloat(this.$input.value);isNaN(v)||(this._snapClampSetValue(v+M),this.$input.value=this.getValue())},n=M=>{M.key==="Enter"&&this.$input.blur(),M.code==="ArrowUp"&&(M.preventDefault(),i(this._step*this._arrowKeyMultiplier(M))),M.code==="ArrowDown"&&(M.preventDefault(),i(this._step*this._arrowKeyMultiplier(M)*-1))},r=M=>{this._inputFocused&&(M.preventDefault(),i(this._step*this._normalizeMouseWheel(M)))};let o=!1,a,c,l,h,u;const d=5,f=M=>{a=M.clientX,c=l=M.clientY,o=!0,h=this.getValue(),u=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",_)},g=M=>{if(o){const v=M.clientX-a,x=M.clientY-c;Math.abs(x)>d?(M.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(v)>d&&_()}if(!o){const v=M.clientY-l;u-=v*this._step*this._arrowKeyMultiplier(M),h+u>this._max?u=this._max-h:h+u<this._min&&(u=this._min-h),this._snapClampSetValue(h+u)}l=M.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",_)},m=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(p,M,v,x,A)=>(p-M)/(v-M)*(A-x)+x,e=p=>{const M=this.$slider.getBoundingClientRect();let v=t(p,M.left,M.right,this._min,this._max);this._snapClampSetValue(v)},i=p=>{this._setDraggingStyle(!0),e(p.clientX),window.addEventListener("mousemove",n),window.addEventListener("mouseup",r)},n=p=>{e(p.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",r)};let o=!1,a,c;const l=p=>{p.preventDefault(),this._setDraggingStyle(!0),e(p.touches[0].clientX),o=!1},h=p=>{p.touches.length>1||(this._hasScrollBar?(a=p.touches[0].clientX,c=p.touches[0].clientY,o=!0):l(p),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",d))},u=p=>{if(o){const M=p.touches[0].clientX-a,v=p.touches[0].clientY-c;Math.abs(M)>Math.abs(v)?l(p):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d))}else p.preventDefault(),e(p.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d)},f=this._callOnFinishChange.bind(this),g=400;let _;const m=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const v=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+v),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(f,g)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:i}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,i=-t.wheelDelta/120,i*=this._stepExplicit?1:10),e+-i}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class f0 extends Mi{constructor(t,e,i,n){super(t,e,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(n)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const i=document.createElement("option");i.textContent=e,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class p0 extends Mi{constructor(t,e,i){super(t,e,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",n=>{n.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const m0=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function g0(s){const t=document.createElement("style");t.innerHTML=s;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let sc=!1;class Fo{constructor({parent:t,autoPlace:e=t===void 0,container:i,width:n,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:c=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{(l.code==="Enter"||l.code==="Space")&&(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),c&&this.domElement.classList.add("allow-touch-styles"),!sc&&a&&(g0(m0),sc=!0),i?i.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),n&&this.domElement.style.setProperty("--width",n+"px"),this._closeFolders=o}add(t,e,i,n,r){if(Object(i)===i)return new f0(this,t,e,i);const o=t[e];switch(typeof o){case"number":return new d0(this,t,e,i,n,r);case"boolean":return new r0(this,t,e);case"string":return new p0(this,t,e);case"function":return new Sa(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,o)}addColor(t,e,i=1){return new u0(this,t,e,i)}addFolder(t){const e=new Fo({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(i=>{i instanceof Sa||i._name in t.controllers&&i.load(t.controllers[i._name])}),e&&t.folders&&this.folders.forEach(i=>{i._title in t.folders&&i.load(t.folders[i._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof Sa)){if(i._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);e.controllers[i._name]=i.save()}}),t&&this.folders.forEach(i=>{if(i._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);e.folders[i._title]=i.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const i=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const n=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=n+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}const _0=({throttlingMsTime:s=.5*1e3,onResize:t=()=>{}})=>{let e=0;window.addEventListener("resize",()=>{e>0&&clearTimeout(e),e=window.setTimeout(t,s)})},x0="/pub_web_spine2d-threejs_test",v0=`${x0}/assets`,Kc=window.innerWidth||800,Zc=window.innerHeight||600,y0=window.devicePixelRatio||1,an=new Bg({antialias:!0,alpha:!0});an.setPixelRatio(y0);an.setSize(Kc,Zc);an.shadowMap.enabled=!0;const Oo=new Fo,on=new Bu,us=new Ze(45,Kc/Zc,1,1e4);us.position.set(10,10,10);us.lookAt(new X(0,0,0));const M0=new Is(16,16),S0=new Fc({color:2176371}),Or=new ni(M0,S0);Or.rotation.x=-Math.PI/2;Or.material.side=fi;Or.receiveShadow=!0;on.add(Or);const Jc=new Ku(16777215);Jc.position.set(1,1,1);on.add(Jc);const Qc=new Zu(16777215,1);on.add(Qc);const ai=new $u(16777215,48,32,Math.PI/4,10,.5);ai.position.set(0,8,0);ai.castShadow=!0;ai.shadow.mapSize.set(4096,4096);on.add(ai);const Bo=new Qu(ai);on.add(Bo);const ln=Oo.addFolder("SpotLight");ln.addColor({color:16777215},"color").onChange(s=>{ai.color=new Jt(s)});ln.add({intensity:48},"intensity",12,200,.1).onChange(s=>{ai.intensity=s});ln.add({distance:32},"distance",12,60,.1).onChange(s=>{ai.distance=s});ln.add({positionX:0},"positionX",-10,10,.1).onChange(s=>{ai.position.x=s});ln.add({positionY:8},"positionY",0,20,.1).onChange(s=>{ai.position.y=s});ln.add({positionZ:0},"positionZ",-10,10,.1).onChange(s=>{ai.position.z=s});ln.add({showLight:!0},"showLight").onChange(s=>{Qc.visible=s});ln.add({showHelper:!0},"showHelper").onChange(s=>{Bo.visible=s});const b0=new ds(1,1,1),E0=new Fc({metalness:.75,roughness:0}),ki=new ni(b0,E0);ki.position.set(-1.5,3,0);ki.castShadow=!0;on.add(ki);const ko=Oo.addFolder("BoxFolder");ko.add({positionX:-1.5},"positionX",-10,10,.001).onChange(s=>{ki.position.x=s});ko.add({positionY:3},"positionY",0,20,.001).onChange(s=>{ki.position.y=s});ko.add({positionZ:0},"positionZ",-10,10,.001).onChange(s=>{ki.position.z=s});let rc=!1,Te;const Es=new H_(`${v0}/spines/`);Es.loadText("model.json");Es.loadTextureAtlas("model.atlas");const Br=Oo.addFolder("SpineFolder");Br.add({wind:0},"wind",-20,20,.1).onChange(s=>{Te&&Te.skeleton.physicsConstraints.map(t=>{t.wind=s})});Br.add({positionX:1.5},"positionX",-10,10,.001).onChange(s=>{Te&&(Te.position.x=s)});Br.add({positionY:2.5},"positionY",0,20,.001).onChange(s=>{Te&&(Te.position.y=s)});Br.add({positionZ:2.5},"positionZ",-10,10,.001).onChange(s=>{Te&&(Te.position.z=s)});const Ns=new Y_(us,an.domElement);Ns.maxPolarAngle=Math.PI;Ns.minDistance=.1;Ns.maxDistance=1e4;Ns.autoRotateSpeed=1;const w0=document.querySelector("#app");w0.appendChild(an.domElement);_0({onResize:()=>{const s=window.innerWidth,t=window.innerHeight;an.setPixelRatio(window.devicePixelRatio||1),an.setSize(s,t),us.aspect=s/t,us.updateProjectionMatrix()}});let ac=Date.now()/1e3;const th=()=>{requestAnimationFrame(th);const s=Date.now()/1e3,t=s-ac;if(ac=s,Es.isLoadingComplete()){if(!rc){const e=Es.require("model.atlas"),i=new E_(e),r=new z_(i).readSkeletonData(Es.require("model.json"));Te=new Cr(r,l=>{l.depthWrite=!1,l.depthTest=!0,l.alphaTest=.001});const o=r.width,a=r.height,c=o/a;Te.scale.set(5/o*c,5/a,0),Te.rotation.x=-Math.PI/2,Te.position.set(1.5,2.5,2.5),Te.castShadow=!0,Te.receiveShadow=!0,Te.state.setAnimation(0,"animation",!0),on.add(Te)}rc=!0}ki.rotation.x+=.01,ki.rotation.y+=.01,ki.rotation.z+=.01,ai.lookAt(new X(0,0,0)),Te&&Te.update(t),Bo.update(),Ns.update(),an.render(on,us)};th();
