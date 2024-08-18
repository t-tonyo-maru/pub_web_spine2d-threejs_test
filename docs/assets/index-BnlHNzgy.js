var Kc=Object.defineProperty;var jc=(r,t,e)=>t in r?Kc(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var y=(r,t,e)=>jc(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ho="167",Ai={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ti={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Zc=0,Do=1,Jc=2,jl=1,Qc=2,Tn=3,ti=0,Oe=1,on=2,Zn=0,Pn=1,va=2,Uo=3,No=4,ya=5,fi=100,th=101,eh=102,nh=103,ih=104,sh=200,or=201,rh=202,Ma=203,Sa=204,bs=205,ah=206,oh=207,Zl=208,lh=209,ch=210,hh=211,uh=212,dh=213,fh=214,ph=0,mh=1,gh=2,mr=3,_h=4,xh=5,vh=6,yh=7,Jl=0,Mh=1,Sh=2,Jn=0,bh=1,Eh=2,wh=3,Ah=4,Th=5,Ch=6,Rh=7,Ql=300,ts=301,es=302,ba=303,Ea=304,Lr=306,gr=1e3,Kn=1001,_r=1002,Xe=1003,Ph=1004,Lh=1004,Ns=1005,Ih=1005,je=1006,zr=1007,Dh=1007,gi=1008,Uh=1008,Un=1009,tc=1010,ec=1011,Es=1012,uo=1013,vi=1014,Cn=1015,Cs=1016,fo=1017,po=1018,ns=1020,nc=35902,ic=1021,sc=1022,cn=1023,rc=1024,ac=1025,Ki=1026,is=1027,oc=1028,mo=1029,lc=1030,go=1031,_o=1033,lr=33776,cr=33777,hr=33778,ur=33779,wa=35840,Aa=35841,Ta=35842,Ca=35843,Ra=36196,Pa=37492,La=37496,Ia=37808,Da=37809,Ua=37810,Na=37811,Fa=37812,Oa=37813,Ba=37814,ka=37815,za=37816,Va=37817,Ha=37818,Ga=37819,Wa=37820,Xa=37821,dr=36492,Ya=36494,qa=36495,cc=36283,$a=36284,Ka=36285,ja=36286,Nh=3200,Fh=3201,hc=0,Oh=1,qn="",fn="srgb",ii="srgb-linear",xo="display-p3",Ir="display-p3-linear",xr="linear",ae="srgb",vr="rec709",yr="p3",Ci=7680,Fo=519,Bh=512,kh=513,zh=514,uc=515,Vh=516,Hh=517,Gh=518,Wh=519,Za=35044,Oo="300 es",Rn=2e3,Mr=2001;class bi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bo=1234567;const vs=Math.PI/180,ss=180/Math.PI;function Ln(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ce[r&255]+Ce[r>>8&255]+Ce[r>>16&255]+Ce[r>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]).toLowerCase()}function Pe(r,t,e){return Math.max(t,Math.min(e,r))}function vo(r,t){return(r%t+t)%t}function Xh(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Yh(r,t,e){return r!==t?(e-r)/(t-r):0}function ys(r,t,e){return(1-e)*r+e*t}function qh(r,t,e,n){return ys(r,t,1-Math.exp(-e*n))}function $h(r,t=1){return t-Math.abs(vo(r,t*2)-t)}function Kh(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function jh(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Zh(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Jh(r,t){return r+Math.random()*(t-r)}function Qh(r){return r*(.5-Math.random())}function tu(r){r!==void 0&&(Bo=r);let t=Bo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function eu(r){return r*vs}function nu(r){return r*ss}function iu(r){return(r&r-1)===0&&r!==0}function su(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function ru(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function au(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),d=o((t-n)/2),f=s((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":r.set(a*h,c*u,c*d,a*l);break;case"YZY":r.set(c*d,a*h,c*u,a*l);break;case"ZXZ":r.set(c*u,c*d,a*h,a*l);break;case"XZX":r.set(a*h,c*g,c*f,a*l);break;case"YXY":r.set(c*f,a*h,c*g,a*l);break;case"ZYZ":r.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ln(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ie(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ou={DEG2RAD:vs,RAD2DEG:ss,generateUUID:Ln,clamp:Pe,euclideanModulo:vo,mapLinear:Xh,inverseLerp:Yh,lerp:ys,damp:qh,pingpong:$h,smoothstep:Kh,smootherstep:jh,randInt:Zh,randFloat:Jh,randFloatSpread:Qh,seededRandom:tu,degToRad:eu,radToDeg:nu,isPowerOfTwo:iu,ceilPowerOfTwo:su,floorPowerOfTwo:ru,setQuaternionFromProperEuler:au,normalize:ie,denormalize:ln};let zt=class dc{constructor(t=0,e=0){dc.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};class Gt{constructor(t,e,n,i,s,o,a,c,l){Gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l)}set(t,e,n,i,s,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],M=i[1],x=i[4],v=i[7],T=i[2],S=i[5],b=i[8];return s[0]=o*_+a*M+c*T,s[3]=o*m+a*x+c*S,s[6]=o*p+a*v+c*b,s[1]=l*_+h*M+u*T,s[4]=l*m+h*x+u*S,s[7]=l*p+h*v+u*b,s[2]=d*_+f*M+g*T,s[5]=d*m+f*x+g*S,s[8]=d*p+f*v+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*s*h+n*a*c+i*s*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*s,f=l*s-o*c,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*l-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=d*_,t[4]=(h*e-i*c)*_,t[5]=(i*s-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Vr.makeScale(t,e)),this}rotate(t){return this.premultiply(Vr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Vr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Vr=new Gt;function fc(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Sr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function lu(){const r=Sr("canvas");return r.style.display="block",r}const ko={};function ji(r){r in ko||(ko[r]=!0,console.warn(r))}function cu(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const zo=new Gt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Vo=new Gt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),us={[ii]:{transfer:xr,primaries:vr,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[fn]:{transfer:ae,primaries:vr,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Ir]:{transfer:xr,primaries:yr,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(Vo),fromReference:r=>r.applyMatrix3(zo)},[xo]:{transfer:ae,primaries:yr,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(Vo),fromReference:r=>r.applyMatrix3(zo).convertLinearToSRGB()}},hu=new Set([ii,Ir]),ne={enabled:!0,_workingColorSpace:ii,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!hu.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=us[t].toReference,i=us[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return us[r].primaries},getTransfer:function(r){return r===qn?xr:us[r].transfer},getLuminanceCoefficients:function(r,t=this._workingColorSpace){return r.fromArray(us[t].luminanceCoefficients)}};function Zi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Hr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ri;class uu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ri===void 0&&(Ri=Sr("canvas")),Ri.width=t.width,Ri.height=t.height;const n=Ri.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ri}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Sr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Zi(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Zi(e[n]/255)*255):e[n]=Zi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let du=0;class pc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=Ln(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Gr(i[o].image)):s.push(Gr(i[o]))}else s=Gr(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Gr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?uu.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fu=0,Qe=class fr extends bi{constructor(t=fr.DEFAULT_IMAGE,e=fr.DEFAULT_MAPPING,n=Kn,i=Kn,s=je,o=gi,a=cn,c=Un,l=fr.DEFAULT_ANISOTROPY,h=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=Ln(),this.name="",this.source=new pc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ql)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gr:t.x=t.x-Math.floor(t.x);break;case Kn:t.x=t.x<0?0:1;break;case _r:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gr:t.y=t.y-Math.floor(t.y);break;case Kn:t.y=t.y<0?0:1;break;case _r:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=Ql;Qe.DEFAULT_ANISOTROPY=1;class Me{constructor(t=0,e=0,n=0,i=1){Me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,v=(f+1)/2,T=(p+1)/2,S=(h+d)/4,b=(u+_)/4,L=(g+m)/4;return x>v&&x>T?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=S/n,s=b/n):v>T?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=S/i,s=L/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=b/s,i=L/s),this.set(n,i,s,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-_)/M,this.z=(d-h)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pu extends bi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:je,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Qe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new pc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yi extends pu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class mc extends Qe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class mu extends Qe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-a;const p=c*d+l*f+h*g+u*_,M=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const T=Math.sqrt(x),S=Math.atan2(T,p*M);m=Math.sin(m*S)/T,a=Math.sin(a*S)/T}const v=a*M;if(c=c*m+d*v,l=l*m+f*v,h=h*m+g*v,u=u*m+_*v,m===1-a){const T=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=T,l*=T,h*=T,u*=T}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return t[e]=a*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-a*f,t[e+2]=l*g+h*f+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(s/2),d=c(n/2),f=c(i/2),g=c(s/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-s*c,this._y=i*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(t=0,e=0,n=0){H.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ho.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ho.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-s*i),u=2*(s*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-s*u,this.z=i+c*u+s*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Wr.copy(this).projectOnVector(t),this.sub(Wr)}reflect(t){return this.sub(Wr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wr=new H,Ho=new Mi;class Rs{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,nn):nn.fromBufferAttribute(s,o),nn.applyMatrix4(t.matrixWorld),this.expandByPoint(nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fs.copy(n.boundingBox)),Fs.applyMatrix4(t.matrixWorld),this.union(Fs)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,nn),nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ds),Os.subVectors(this.max,ds),Pi.subVectors(t.a,ds),Li.subVectors(t.b,ds),Ii.subVectors(t.c,ds),Bn.subVectors(Li,Pi),kn.subVectors(Ii,Li),ai.subVectors(Pi,Ii);let e=[0,-Bn.z,Bn.y,0,-kn.z,kn.y,0,-ai.z,ai.y,Bn.z,0,-Bn.x,kn.z,0,-kn.x,ai.z,0,-ai.x,-Bn.y,Bn.x,0,-kn.y,kn.x,0,-ai.y,ai.x,0];return!Xr(e,Pi,Li,Ii,Os)||(e=[1,0,0,0,1,0,0,0,1],!Xr(e,Pi,Li,Ii,Os))?!1:(Bs.crossVectors(Bn,kn),e=[Bs.x,Bs.y,Bs.z],Xr(e,Pi,Li,Ii,Os))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Sn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Sn=[new H,new H,new H,new H,new H,new H,new H,new H],nn=new H,Fs=new Rs,Pi=new H,Li=new H,Ii=new H,Bn=new H,kn=new H,ai=new H,ds=new H,Os=new H,Bs=new H,oi=new H;function Xr(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){oi.fromArray(r,s);const a=i.x*Math.abs(oi.x)+i.y*Math.abs(oi.y)+i.z*Math.abs(oi.z),c=t.dot(oi),l=e.dot(oi),h=n.dot(oi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const gu=new Rs,fs=new H,Yr=new H;class Dr{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):gu.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fs.subVectors(t,this.center);const e=fs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(fs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fs.copy(t.center).add(Yr)),this.expandByPoint(fs.copy(t.center).sub(Yr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bn=new H,qr=new H,ks=new H,zn=new H,$r=new H,zs=new H,Kr=new H;class yo{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(bn.copy(this.origin).addScaledVector(this.direction,e),bn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){qr.copy(t).add(e).multiplyScalar(.5),ks.copy(e).sub(t).normalize(),zn.copy(this.origin).sub(qr);const s=t.distanceTo(e)*.5,o=-this.direction.dot(ks),a=zn.dot(this.direction),c=-zn.dot(ks),l=zn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(qr).addScaledVector(ks,d),f}intersectSphere(t,e){bn.subVectors(t.center,this.origin);const n=bn.dot(this.direction),i=bn.dot(bn)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,bn)!==null}intersectTriangle(t,e,n,i,s){$r.subVectors(e,t),zs.subVectors(n,t),Kr.crossVectors($r,zs);let o=this.direction.dot(Kr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zn.subVectors(this.origin,t);const c=a*this.direction.dot(zs.crossVectors(zn,zs));if(c<0)return null;const l=a*this.direction.dot($r.cross(zn));if(l<0||c+l>o)return null;const h=-a*zn.dot(Kr);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class de{constructor(t,e,n,i,s,o,a,c,l,h,u,d,f,g,_,m){de.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l,h,u,d,f,g,_,m)}set(t,e,n,i,s,o,a,c,l,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new de().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Di.setFromMatrixColumn(t,0).length(),s=1/Di.setFromMatrixColumn(t,1).length(),o=1/Di.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_u,t,xu)}lookAt(t,e,n){const i=this.elements;return ze.subVectors(t,e),ze.lengthSq()===0&&(ze.z=1),ze.normalize(),Vn.crossVectors(n,ze),Vn.lengthSq()===0&&(Math.abs(n.z)===1?ze.x+=1e-4:ze.z+=1e-4,ze.normalize(),Vn.crossVectors(n,ze)),Vn.normalize(),Vs.crossVectors(ze,Vn),i[0]=Vn.x,i[4]=Vs.x,i[8]=ze.x,i[1]=Vn.y,i[5]=Vs.y,i[9]=ze.y,i[2]=Vn.z,i[6]=Vs.z,i[10]=ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],x=n[7],v=n[11],T=n[15],S=i[0],b=i[4],L=i[8],E=i[12],w=i[1],R=i[5],B=i[9],F=i[13],I=i[2],U=i[6],k=i[10],Y=i[14],W=i[3],Q=i[7],it=i[11],at=i[15];return s[0]=o*S+a*w+c*I+l*W,s[4]=o*b+a*R+c*U+l*Q,s[8]=o*L+a*B+c*k+l*it,s[12]=o*E+a*F+c*Y+l*at,s[1]=h*S+u*w+d*I+f*W,s[5]=h*b+u*R+d*U+f*Q,s[9]=h*L+u*B+d*k+f*it,s[13]=h*E+u*F+d*Y+f*at,s[2]=g*S+_*w+m*I+p*W,s[6]=g*b+_*R+m*U+p*Q,s[10]=g*L+_*B+m*k+p*it,s[14]=g*E+_*F+m*Y+p*at,s[3]=M*S+x*w+v*I+T*W,s[7]=M*b+x*R+v*U+T*Q,s[11]=M*L+x*B+v*k+T*it,s[15]=M*E+x*F+v*Y+T*at,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+s*c*u-i*l*u-s*a*d+n*l*d+i*a*f-n*c*f)+_*(+e*c*f-e*l*d+s*o*d-i*o*f+i*l*h-s*c*h)+m*(+e*l*u-e*a*f-s*o*u+n*o*f+s*a*h-n*l*h)+p*(-i*a*h-e*c*u+e*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],M=u*m*l-_*d*l+_*c*f-a*m*f-u*c*p+a*d*p,x=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,v=h*_*l-g*u*l+g*a*f-o*_*f-h*a*p+o*u*p,T=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,S=e*M+n*x+i*v+s*T;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/S;return t[0]=M*b,t[1]=(_*d*s-u*m*s-_*i*f+n*m*f+u*i*p-n*d*p)*b,t[2]=(a*m*s-_*c*s+_*i*l-n*m*l-a*i*p+n*c*p)*b,t[3]=(u*c*s-a*d*s-u*i*l+n*d*l+a*i*f-n*c*f)*b,t[4]=x*b,t[5]=(h*m*s-g*d*s+g*i*f-e*m*f-h*i*p+e*d*p)*b,t[6]=(g*c*s-o*m*s-g*i*l+e*m*l+o*i*p-e*c*p)*b,t[7]=(o*d*s-h*c*s+h*i*l-e*d*l-o*i*f+e*c*f)*b,t[8]=v*b,t[9]=(g*u*s-h*_*s-g*n*f+e*_*f+h*n*p-e*u*p)*b,t[10]=(o*_*s-g*a*s+g*n*l-e*_*l-o*n*p+e*a*p)*b,t[11]=(h*a*s-o*u*s-h*n*l+e*u*l+o*n*f-e*a*f)*b,t[12]=T*b,t[13]=(h*_*i-g*u*i+g*n*d-e*_*d-h*n*m+e*u*m)*b,t[14]=(g*a*i-o*_*i-g*n*c+e*_*c+o*n*m-e*a*m)*b,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*d+e*a*d)*b,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,h=o+o,u=a+a,d=s*l,f=s*h,g=s*u,_=o*h,m=o*u,p=a*u,M=c*l,x=c*h,v=c*u,T=n.x,S=n.y,b=n.z;return i[0]=(1-(_+p))*T,i[1]=(f+v)*T,i[2]=(g-x)*T,i[3]=0,i[4]=(f-v)*S,i[5]=(1-(d+p))*S,i[6]=(m+M)*S,i[7]=0,i[8]=(g+x)*b,i[9]=(m-M)*b,i[10]=(1-(d+_))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Di.set(i[0],i[1],i[2]).length();const o=Di.set(i[4],i[5],i[6]).length(),a=Di.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],sn.copy(this);const l=1/s,h=1/o,u=1/a;return sn.elements[0]*=l,sn.elements[1]*=l,sn.elements[2]*=l,sn.elements[4]*=h,sn.elements[5]*=h,sn.elements[6]*=h,sn.elements[8]*=u,sn.elements[9]*=u,sn.elements[10]*=u,e.setFromRotationMatrix(sn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Rn){const c=this.elements,l=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let f,g;if(a===Rn)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Mr)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Rn){const c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(o-s),d=(e+t)*l,f=(n+i)*h;let g,_;if(a===Rn)g=(o+s)*u,_=-2*u;else if(a===Mr)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Di=new H,sn=new de,_u=new H(0,0,0),xu=new H(1,1,1),Vn=new H,Vs=new H,ze=new H,Go=new de,Wo=new Mi;class xn{constructor(t=0,e=0,n=0,i=xn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Pe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Pe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Go.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Go,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wo.setFromEuler(this),this.setFromQuaternion(Wo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xn.DEFAULT_ORDER="XYZ";class gc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let vu=0;const Xo=new H,Ui=new Mi,En=new de,Hs=new H,ps=new H,yu=new H,Mu=new Mi,Yo=new H(1,0,0),qo=new H(0,1,0),$o=new H(0,0,1),Ko={type:"added"},Su={type:"removed"},Ni={type:"childadded",child:null},jr={type:"childremoved",child:null};class pe extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=Ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pe.DEFAULT_UP.clone();const t=new H,e=new xn,n=new Mi,i=new H(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new de},normalMatrix:{value:new Gt}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.premultiply(Ui),this}rotateX(t){return this.rotateOnAxis(Yo,t)}rotateY(t){return this.rotateOnAxis(qo,t)}rotateZ(t){return this.rotateOnAxis($o,t)}translateOnAxis(t,e){return Xo.copy(t).applyQuaternion(this.quaternion),this.position.add(Xo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yo,t)}translateY(t){return this.translateOnAxis(qo,t)}translateZ(t){return this.translateOnAxis($o,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Hs.copy(t):Hs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(ps,Hs,this.up):En.lookAt(Hs,ps,this.up),this.quaternion.setFromRotationMatrix(En),i&&(En.extractRotation(i.matrixWorld),Ui.setFromRotationMatrix(En),this.quaternion.premultiply(Ui.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ko),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Su),jr.child=t,this.dispatchEvent(jr),jr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),En.multiply(t.parent.matrixWorld)),t.applyMatrix4(En),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ko),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,t,yu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,Mu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}pe.DEFAULT_UP=new H(0,1,0);pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new H,wn=new H,Zr=new H,An=new H,Fi=new H,Oi=new H,jo=new H,Jr=new H,Qr=new H,ta=new H;class mn{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),rn.subVectors(t,e),i.cross(rn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){rn.subVectors(i,e),wn.subVectors(n,e),Zr.subVectors(t,e);const o=rn.dot(rn),a=rn.dot(wn),c=rn.dot(Zr),l=wn.dot(wn),h=wn.dot(Zr),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(t,e,n,i,s,o,a,c){return this.getBarycoord(t,e,n,i,An)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,An.x),c.addScaledVector(o,An.y),c.addScaledVector(a,An.z),c)}static isFrontFacing(t,e,n,i){return rn.subVectors(n,e),wn.subVectors(t,e),rn.cross(wn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return rn.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),rn.cross(wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return mn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;Fi.subVectors(i,n),Oi.subVectors(s,n),Jr.subVectors(t,n);const c=Fi.dot(Jr),l=Oi.dot(Jr);if(c<=0&&l<=0)return e.copy(n);Qr.subVectors(t,i);const h=Fi.dot(Qr),u=Oi.dot(Qr);if(h>=0&&u<=h)return e.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Fi,o);ta.subVectors(t,s);const f=Fi.dot(ta),g=Oi.dot(ta);if(g>=0&&f<=g)return e.copy(s);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Oi,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return jo.subVectors(s,i),a=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(jo,a);const p=1/(m+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(Fi,o).addScaledVector(Oi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const _c={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},Gs={h:0,s:0,l:0};function ea(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}let Zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ne.workingColorSpace){if(t=vo(t,1),e=Pe(e,0,1),n=Pe(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=ea(o,s,t+1/3),this.g=ea(o,s,t),this.b=ea(o,s,t-1/3)}return ne.toWorkingColorSpace(this,i),this}setStyle(t,e=fn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fn){const n=_c[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zi(t.r),this.g=Zi(t.g),this.b=Zi(t.b),this}copyLinearToSRGB(t){return this.r=Hr(t.r),this.g=Hr(t.g),this.b=Hr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fn){return ne.fromWorkingColorSpace(Re.copy(this),t),Math.round(Pe(Re.r*255,0,255))*65536+Math.round(Pe(Re.g*255,0,255))*256+Math.round(Pe(Re.b*255,0,255))}getHexString(t=fn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(Re.copy(this),e);const n=Re.r,i=Re.g,s=Re.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=fn){ne.fromWorkingColorSpace(Re.copy(this),t);const e=Re.r,n=Re.g,i=Re.b;return t!==fn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Hn),this.setHSL(Hn.h+t,Hn.s+e,Hn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hn),t.getHSL(Gs);const n=ys(Hn.h,Gs.h,e),i=ys(Hn.s,Gs.s,e),s=ys(Hn.l,Gs.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Re=new Zt;Zt.NAMES=_c;let bu=0;class In extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=Ln(),this.name="",this.type="Material",this.blending=Pn,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sa,this.blendDst=bs,this.blendEquation=fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ci,this.stencilZFail=Ci,this.stencilZPass=Ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Pn&&(n.blending=this.blending),this.side!==ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sa&&(n.blendSrc=this.blendSrc),this.blendDst!==bs&&(n.blendDst=this.blendDst),this.blendEquation!==fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==mr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class xc extends In{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=Jl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _e=new H,Ws=new zt;class Je{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Za,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return ji("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ws.fromBufferAttribute(this,e),Ws.applyMatrix3(t),this.setXY(e,Ws.x,Ws.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ln(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ie(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ln(e,this.array)),e}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ln(e,this.array)),e}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ln(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ln(e,this.array)),e}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),i=ie(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),i=ie(i,this.array),s=ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Za&&(t.usage=this.usage),t}}class vc extends Je{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class yc extends Je{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class gn extends Je{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Eu=0;const qe=new de,na=new pe,Bi=new H,Ve=new Rs,ms=new Rs,Ee=new H;class vn extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=Ln(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fc(t)?yc:vc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Gt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qe.makeRotationFromQuaternion(t),this.applyMatrix4(qe),this}rotateX(t){return qe.makeRotationX(t),this.applyMatrix4(qe),this}rotateY(t){return qe.makeRotationY(t),this.applyMatrix4(qe),this}rotateZ(t){return qe.makeRotationZ(t),this.applyMatrix4(qe),this}translate(t,e,n){return qe.makeTranslation(t,e,n),this.applyMatrix4(qe),this}scale(t,e,n){return qe.makeScale(t,e,n),this.applyMatrix4(qe),this}lookAt(t){return na.lookAt(t),na.updateMatrix(),this.applyMatrix4(na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new gn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Ve.setFromBufferAttribute(s),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,Ve.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,Ve.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(Ve.min),this.boundingBox.expandByPoint(Ve.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){const n=this.boundingSphere.center;if(Ve.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];ms.setFromBufferAttribute(a),this.morphTargetsRelative?(Ee.addVectors(Ve.min,ms.min),Ve.expandByPoint(Ee),Ee.addVectors(Ve.max,ms.max),Ve.expandByPoint(Ee)):(Ve.expandByPoint(ms.min),Ve.expandByPoint(ms.max))}Ve.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Ee.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ee));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ee.fromBufferAttribute(a,l),c&&(Bi.fromBufferAttribute(t,l),Ee.add(Bi)),i=Math.max(i,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Je(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<n.count;L++)a[L]=new H,c[L]=new H;const l=new H,h=new H,u=new H,d=new zt,f=new zt,g=new zt,_=new H,m=new H;function p(L,E,w){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,w),d.fromBufferAttribute(s,L),f.fromBufferAttribute(s,E),g.fromBufferAttribute(s,w),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(R),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(R),a[L].add(_),a[E].add(_),a[w].add(_),c[L].add(m),c[E].add(m),c[w].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let L=0,E=M.length;L<E;++L){const w=M[L],R=w.start,B=w.count;for(let F=R,I=R+B;F<I;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const x=new H,v=new H,T=new H,S=new H;function b(L){T.fromBufferAttribute(i,L),S.copy(T);const E=a[L];x.copy(E),x.sub(T.multiplyScalar(T.dot(E))).normalize(),v.crossVectors(S,E);const R=v.dot(c[L])<0?-1:1;o.setXYZW(L,x.x,x.y,x.z,R)}for(let L=0,E=M.length;L<E;++L){const w=M[L],R=w.start,B=w.count;for(let F=R,I=R+B;F<I;F+=3)b(t.getX(F+0)),b(t.getX(F+1)),b(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new H,s=new H,o=new H,a=new H,c=new H,l=new H,h=new H,u=new H;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Je(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new vn,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zo=new de,li=new yo,Xs=new Dr,Jo=new H,ki=new H,zi=new H,Vi=new H,ia=new H,Ys=new H,qs=new zt,$s=new zt,Ks=new zt,Qo=new H,tl=new H,el=new H,js=new H,Zs=new H;class Ze extends pe{constructor(t=new vn,e=new xc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Ys.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],u=s[c];h!==0&&(ia.fromBufferAttribute(u,t),o?Ys.addScaledVector(ia,h):Ys.addScaledVector(ia.sub(e),h))}e.add(Ys)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(s),li.copy(t.ray).recast(t.near),!(Xs.containsPoint(li.origin)===!1&&(li.intersectSphere(Xs,Jo)===null||li.origin.distanceToSquared(Jo)>(t.far-t.near)**2))&&(Zo.copy(s).invert(),li.copy(t.ray).applyMatrix4(Zo),!(n.boundingBox!==null&&li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,li)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,T=x;v<T;v+=3){const S=a.getX(v),b=a.getX(v+1),L=a.getX(v+2);i=Js(this,p,t,n,l,h,u,S,b,L),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);i=Js(this,o,t,n,l,h,u,M,x,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,T=x;v<T;v+=3){const S=v,b=v+1,L=v+2;i=Js(this,p,t,n,l,h,u,S,b,L),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=m,x=m+1,v=m+2;i=Js(this,o,t,n,l,h,u,M,x,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function wu(r,t,e,n,i,s,o,a){let c;if(t.side===Oe?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,t.side===ti,a),c===null)return null;Zs.copy(a),Zs.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(Zs);return l<e.near||l>e.far?null:{distance:l,point:Zs.clone(),object:r}}function Js(r,t,e,n,i,s,o,a,c,l){r.getVertexPosition(a,ki),r.getVertexPosition(c,zi),r.getVertexPosition(l,Vi);const h=wu(r,t,e,n,ki,zi,Vi,js);if(h){i&&(qs.fromBufferAttribute(i,a),$s.fromBufferAttribute(i,c),Ks.fromBufferAttribute(i,l),h.uv=mn.getInterpolation(js,ki,zi,Vi,qs,$s,Ks,new zt)),s&&(qs.fromBufferAttribute(s,a),$s.fromBufferAttribute(s,c),Ks.fromBufferAttribute(s,l),h.uv1=mn.getInterpolation(js,ki,zi,Vi,qs,$s,Ks,new zt)),o&&(Qo.fromBufferAttribute(o,a),tl.fromBufferAttribute(o,c),el.fromBufferAttribute(o,l),h.normal=mn.getInterpolation(js,ki,zi,Vi,Qo,tl,el,new H),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new H,materialIndex:0};mn.getNormal(ki,zi,Vi,u.normal),h.face=u}return h}class ls extends vn{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new gn(l,3)),this.setAttribute("normal",new gn(h,3)),this.setAttribute("uv",new gn(u,2));function g(_,m,p,M,x,v,T,S,b,L,E){const w=v/b,R=T/L,B=v/2,F=T/2,I=S/2,U=b+1,k=L+1;let Y=0,W=0;const Q=new H;for(let it=0;it<k;it++){const at=it*R-F;for(let vt=0;vt<U;vt++){const ot=vt*w-B;Q[_]=ot*M,Q[m]=at*x,Q[p]=I,l.push(Q.x,Q.y,Q.z),Q[_]=0,Q[m]=0,Q[p]=S>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(vt/b),u.push(1-it/L),Y+=1}}for(let it=0;it<L;it++)for(let at=0;at<b;at++){const vt=d+at+U*it,ot=d+at+U*(it+1),G=d+(at+1)+U*(it+1),J=d+(at+1)+U*it;c.push(vt,ot,J),c.push(ot,G,J),W+=6}a.addGroup(f,W,E),f+=W,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ls(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function rs(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ie(r){const t={};for(let e=0;e<r.length;e++){const n=rs(r[e]);for(const i in n)t[i]=n[i]}return t}function Au(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Mc(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const Tu={clone:rs,merge:Ie};var Cu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ru=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends In{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cu,this.fragmentShader=Ru,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=rs(t.uniforms),this.uniformsGroups=Au(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Sc extends pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=Rn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gn=new H,nl=new zt,il=new zt;class We extends Sc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ss*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(vs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ss*2*Math.atan(Math.tan(vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z)}getViewSize(t,e){return this.getViewBounds(t,nl,il),e.subVectors(il,nl)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(vs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Hi=-90,Gi=1;class Pu extends pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new We(Hi,Gi,t,e);i.layers=this.layers,this.add(i);const s=new We(Hi,Gi,t,e);s.layers=this.layers,this.add(s);const o=new We(Hi,Gi,t,e);o.layers=this.layers,this.add(o);const a=new We(Hi,Gi,t,e);a.layers=this.layers,this.add(a);const c=new We(Hi,Gi,t,e);c.layers=this.layers,this.add(c);const l=new We(Hi,Gi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Mr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class bc extends Qe{constructor(t,e,n,i,s,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ts,super(t,e,n,i,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Lu extends yi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new bc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:je}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ls(5,5,5),s=new Nn({name:"CubemapFromEquirect",uniforms:rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Oe,blending:Zn});s.uniforms.tEquirect.value=e;const o=new Ze(i,s),a=e.minFilter;return e.minFilter===gi&&(e.minFilter=je),new Pu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const sa=new H,Iu=new H,Du=new Gt;class Wn{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=sa.subVectors(n,e).cross(Iu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(sa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Du.getNormalMatrix(t),i=this.coplanarPoint(sa).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ci=new Dr,Qs=new H;class Mo{constructor(t=new Wn,e=new Wn,n=new Wn,i=new Wn,s=new Wn,o=new Wn){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Rn){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],M=i[13],x=i[14],v=i[15];if(n[0].setComponents(c-s,d-l,m-f,v-p).normalize(),n[1].setComponents(c+s,d+l,m+f,v+p).normalize(),n[2].setComponents(c+o,d+h,m+g,v+M).normalize(),n[3].setComponents(c-o,d-h,m-g,v-M).normalize(),n[4].setComponents(c-a,d-u,m-_,v-x).normalize(),e===Rn)n[5].setComponents(c+a,d+u,m+_,v+x).normalize();else if(e===Mr)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(t){return ci.center.set(0,0,0),ci.radius=.7071067811865476,ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Qs.x=i.normal.x>0?t.max.x:t.min.x,Qs.y=i.normal.y>0?t.max.y:t.min.y,Qs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Qs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ec(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Uu(r){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=r.createBuffer();r.bindBuffer(c,d),r.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=r.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=r.SHORT;else if(l instanceof Uint32Array)f=r.UNSIGNED_INT;else if(l instanceof Int32Array)f=r.INT;else if(l instanceof Int8Array)f=r.BYTE;else if(l instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c._updateRange,d=c.updateRanges;if(r.bindBuffer(l,a),u.count===-1&&d.length===0&&r.bufferSubData(l,0,h),d.length!==0){for(let f=0,g=d.length;f<g;f++){const _=d[f];r.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}u.count!==-1&&(r.bufferSubData(l,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(r.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:s,update:o}}class Ps extends vn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,d=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const M=p*d-o;for(let x=0;x<l;x++){const v=x*u-s;g.push(v,-M,0),_.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){const x=M+l*p,v=M+l*(p+1),T=M+1+l*(p+1),S=M+1+l*p;f.push(x,v,S),f.push(v,T,S)}this.setIndex(f),this.setAttribute("position",new gn(g,3)),this.setAttribute("normal",new gn(_,3)),this.setAttribute("uv",new gn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ps(t.width,t.height,t.widthSegments,t.heightSegments)}}var Nu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fu=`#ifdef USE_ALPHAHASH
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
#endif`,Ou=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ku=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vu=`#ifdef USE_AOMAP
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
#endif`,Hu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gu=`#ifdef USE_BATCHING
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
#endif`,Wu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$u=`#ifdef USE_IRIDESCENCE
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
#endif`,Ku=`#ifdef USE_BUMPMAP
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
#endif`,ju=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ju=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,td=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ed=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,id=`#if defined( USE_COLOR_ALPHA )
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
#endif`,sd=`#define PI 3.141592653589793
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
} // validated`,rd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ad=`vec3 transformedNormal = objectNormal;
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
#endif`,od=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ld=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ud="gl_FragColor = linearToOutputTexel( gl_FragColor );",dd=`
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
}`,fd=`#ifdef USE_ENVMAP
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
#endif`,pd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,md=`#ifdef USE_ENVMAP
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
#endif`,gd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_d=`#ifdef USE_ENVMAP
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
#endif`,xd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Md=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sd=`#ifdef USE_GRADIENTMAP
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
}`,bd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ed=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ad=`uniform bool receiveShadow;
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
#endif`,Td=`#ifdef USE_ENVMAP
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
#endif`,Cd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ld=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Id=`PhysicalMaterial material;
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
#endif`,Dd=`struct PhysicalMaterial {
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
}`,Ud=`
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
#endif`,Nd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Od=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wd=`#if defined( USE_POINTS_UV )
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
#endif`,Xd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$d=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jd=`#ifdef USE_MORPHTARGETS
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
#endif`,Zd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ef=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sf=`#ifdef USE_NORMALMAP
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
#endif`,rf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,af=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,of=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,uf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,df=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ff=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_f=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yf=`float getShadowMask() {
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
}`,Mf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sf=`#ifdef USE_SKINNING
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
#endif`,bf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ef=`#ifdef USE_SKINNING
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
#endif`,wf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Af=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rf=`#ifdef USE_TRANSMISSION
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
#endif`,Pf=`#ifdef USE_TRANSMISSION
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
#endif`,Lf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,If=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Nf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ff=`uniform sampler2D t2D;
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
}`,Of=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vf=`#include <common>
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
}`,Hf=`#if DEPTH_PACKING == 3200
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
}`,Gf=`#define DISTANCE
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
}`,Wf=`#define DISTANCE
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
}`,Xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qf=`uniform float scale;
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
}`,$f=`uniform vec3 diffuse;
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
}`,Kf=`#include <common>
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
}`,jf=`uniform vec3 diffuse;
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
}`,Zf=`#define LAMBERT
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
}`,Jf=`#define LAMBERT
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
}`,Qf=`#define MATCAP
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
}`,tp=`#define MATCAP
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
}`,ep=`#define NORMAL
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
}`,np=`#define NORMAL
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
}`,ip=`#define PHONG
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
}`,sp=`#define PHONG
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
}`,rp=`#define STANDARD
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
}`,ap=`#define STANDARD
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
}`,op=`#define TOON
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
}`,lp=`#define TOON
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
}`,cp=`uniform float size;
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
}`,hp=`uniform vec3 diffuse;
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
}`,up=`#include <common>
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
}`,dp=`uniform vec3 color;
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
}`,fp=`uniform float rotation;
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
}`,pp=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:Nu,alphahash_pars_fragment:Fu,alphamap_fragment:Ou,alphamap_pars_fragment:Bu,alphatest_fragment:ku,alphatest_pars_fragment:zu,aomap_fragment:Vu,aomap_pars_fragment:Hu,batching_pars_vertex:Gu,batching_vertex:Wu,begin_vertex:Xu,beginnormal_vertex:Yu,bsdfs:qu,iridescence_fragment:$u,bumpmap_pars_fragment:Ku,clipping_planes_fragment:ju,clipping_planes_pars_fragment:Zu,clipping_planes_pars_vertex:Ju,clipping_planes_vertex:Qu,color_fragment:td,color_pars_fragment:ed,color_pars_vertex:nd,color_vertex:id,common:sd,cube_uv_reflection_fragment:rd,defaultnormal_vertex:ad,displacementmap_pars_vertex:od,displacementmap_vertex:ld,emissivemap_fragment:cd,emissivemap_pars_fragment:hd,colorspace_fragment:ud,colorspace_pars_fragment:dd,envmap_fragment:fd,envmap_common_pars_fragment:pd,envmap_pars_fragment:md,envmap_pars_vertex:gd,envmap_physical_pars_fragment:Td,envmap_vertex:_d,fog_vertex:xd,fog_pars_vertex:vd,fog_fragment:yd,fog_pars_fragment:Md,gradientmap_pars_fragment:Sd,lightmap_pars_fragment:bd,lights_lambert_fragment:Ed,lights_lambert_pars_fragment:wd,lights_pars_begin:Ad,lights_toon_fragment:Cd,lights_toon_pars_fragment:Rd,lights_phong_fragment:Pd,lights_phong_pars_fragment:Ld,lights_physical_fragment:Id,lights_physical_pars_fragment:Dd,lights_fragment_begin:Ud,lights_fragment_maps:Nd,lights_fragment_end:Fd,logdepthbuf_fragment:Od,logdepthbuf_pars_fragment:Bd,logdepthbuf_pars_vertex:kd,logdepthbuf_vertex:zd,map_fragment:Vd,map_pars_fragment:Hd,map_particle_fragment:Gd,map_particle_pars_fragment:Wd,metalnessmap_fragment:Xd,metalnessmap_pars_fragment:Yd,morphinstance_vertex:qd,morphcolor_vertex:$d,morphnormal_vertex:Kd,morphtarget_pars_vertex:jd,morphtarget_vertex:Zd,normal_fragment_begin:Jd,normal_fragment_maps:Qd,normal_pars_fragment:tf,normal_pars_vertex:ef,normal_vertex:nf,normalmap_pars_fragment:sf,clearcoat_normal_fragment_begin:rf,clearcoat_normal_fragment_maps:af,clearcoat_pars_fragment:of,iridescence_pars_fragment:lf,opaque_fragment:cf,packing:hf,premultiplied_alpha_fragment:uf,project_vertex:df,dithering_fragment:ff,dithering_pars_fragment:pf,roughnessmap_fragment:mf,roughnessmap_pars_fragment:gf,shadowmap_pars_fragment:_f,shadowmap_pars_vertex:xf,shadowmap_vertex:vf,shadowmask_pars_fragment:yf,skinbase_vertex:Mf,skinning_pars_vertex:Sf,skinning_vertex:bf,skinnormal_vertex:Ef,specularmap_fragment:wf,specularmap_pars_fragment:Af,tonemapping_fragment:Tf,tonemapping_pars_fragment:Cf,transmission_fragment:Rf,transmission_pars_fragment:Pf,uv_pars_fragment:Lf,uv_pars_vertex:If,uv_vertex:Df,worldpos_vertex:Uf,background_vert:Nf,background_frag:Ff,backgroundCube_vert:Of,backgroundCube_frag:Bf,cube_vert:kf,cube_frag:zf,depth_vert:Vf,depth_frag:Hf,distanceRGBA_vert:Gf,distanceRGBA_frag:Wf,equirect_vert:Xf,equirect_frag:Yf,linedashed_vert:qf,linedashed_frag:$f,meshbasic_vert:Kf,meshbasic_frag:jf,meshlambert_vert:Zf,meshlambert_frag:Jf,meshmatcap_vert:Qf,meshmatcap_frag:tp,meshnormal_vert:ep,meshnormal_frag:np,meshphong_vert:ip,meshphong_frag:sp,meshphysical_vert:rp,meshphysical_frag:ap,meshtoon_vert:op,meshtoon_frag:lp,points_vert:cp,points_frag:hp,shadow_vert:up,shadow_frag:dp,sprite_vert:fp,sprite_frag:pp},pt={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},pn={basic:{uniforms:Ie([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Ie([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Ie([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Ie([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Ie([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Ie([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Ie([pt.points,pt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Ie([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Ie([pt.common,pt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Ie([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Ie([pt.sprite,pt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:Ie([pt.common,pt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:Ie([pt.lights,pt.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};pn.physical={uniforms:Ie([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const tr={r:0,b:0,g:0},hi=new xn,mp=new de;function gp(r,t,e,n,i,s,o){const a=new Zt(0);let c=s===!0?0:1,l,h,u=null,d=0,f=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function _(M){let x=!1;const v=g(M);v===null?p(a,c):v&&v.isColor&&(p(v,1),x=!0);const T=r.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(M,x){const v=g(x);v&&(v.isCubeTexture||v.mapping===Lr)?(h===void 0&&(h=new Ze(new ls(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:rs(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Oe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,S,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),hi.copy(x.backgroundRotation),hi.x*=-1,hi.y*=-1,hi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(mp.makeRotationFromEuler(hi)),h.material.toneMapped=ne.getTransfer(v.colorSpace)!==ae,(u!==v||d!==v.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=r.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ze(new Ps(2,2),new Nn({name:"BackgroundMaterial",uniforms:rs(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=ne.getTransfer(v.colorSpace)!==ae,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,f=r.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,x){M.getRGB(tr,Mc(r)),n.buffers.color.setClear(tr.r,tr.g,tr.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(a,c)},render:_,addToRenderList:m}}function _p(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(w,R,B,F,I){let U=!1;const k=u(F,B,R);s!==k&&(s=k,l(s.object)),U=f(w,F,B,I),U&&g(w,F,B,I),I!==null&&t.update(I,r.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,v(w,R,B,F),I!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function c(){return r.createVertexArray()}function l(w){return r.bindVertexArray(w)}function h(w){return r.deleteVertexArray(w)}function u(w,R,B){const F=B.wireframe===!0;let I=n[w.id];I===void 0&&(I={},n[w.id]=I);let U=I[R.id];U===void 0&&(U={},I[R.id]=U);let k=U[F];return k===void 0&&(k=d(c()),U[F]=k),k}function d(w){const R=[],B=[],F=[];for(let I=0;I<e;I++)R[I]=0,B[I]=0,F[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:B,attributeDivisors:F,object:w,attributes:{},index:null}}function f(w,R,B,F){const I=s.attributes,U=R.attributes;let k=0;const Y=B.getAttributes();for(const W in Y)if(Y[W].location>=0){const it=I[W];let at=U[W];if(at===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(at=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(at=w.instanceColor)),it===void 0||it.attribute!==at||at&&it.data!==at.data)return!0;k++}return s.attributesNum!==k||s.index!==F}function g(w,R,B,F){const I={},U=R.attributes;let k=0;const Y=B.getAttributes();for(const W in Y)if(Y[W].location>=0){let it=U[W];it===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(it=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(it=w.instanceColor));const at={};at.attribute=it,it&&it.data&&(at.data=it.data),I[W]=at,k++}s.attributes=I,s.attributesNum=k,s.index=F}function _(){const w=s.newAttributes;for(let R=0,B=w.length;R<B;R++)w[R]=0}function m(w){p(w,0)}function p(w,R){const B=s.newAttributes,F=s.enabledAttributes,I=s.attributeDivisors;B[w]=1,F[w]===0&&(r.enableVertexAttribArray(w),F[w]=1),I[w]!==R&&(r.vertexAttribDivisor(w,R),I[w]=R)}function M(){const w=s.newAttributes,R=s.enabledAttributes;for(let B=0,F=R.length;B<F;B++)R[B]!==w[B]&&(r.disableVertexAttribArray(B),R[B]=0)}function x(w,R,B,F,I,U,k){k===!0?r.vertexAttribIPointer(w,R,B,I,U):r.vertexAttribPointer(w,R,B,F,I,U)}function v(w,R,B,F){_();const I=F.attributes,U=B.getAttributes(),k=R.defaultAttributeValues;for(const Y in U){const W=U[Y];if(W.location>=0){let Q=I[Y];if(Q===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(Q=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(Q=w.instanceColor)),Q!==void 0){const it=Q.normalized,at=Q.itemSize,vt=t.get(Q);if(vt===void 0)continue;const ot=vt.buffer,G=vt.type,J=vt.bytesPerElement,dt=G===r.INT||G===r.UNSIGNED_INT||Q.gpuType===uo;if(Q.isInterleavedBufferAttribute){const ut=Q.data,yt=ut.stride,wt=Q.offset;if(ut.isInstancedInterleavedBuffer){for(let At=0;At<W.locationSize;At++)p(W.location+At,ut.meshPerAttribute);w.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let At=0;At<W.locationSize;At++)m(W.location+At);r.bindBuffer(r.ARRAY_BUFFER,ot);for(let At=0;At<W.locationSize;At++)x(W.location+At,at/W.locationSize,G,it,yt*J,(wt+at/W.locationSize*At)*J,dt)}else{if(Q.isInstancedBufferAttribute){for(let ut=0;ut<W.locationSize;ut++)p(W.location+ut,Q.meshPerAttribute);w.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ut=0;ut<W.locationSize;ut++)m(W.location+ut);r.bindBuffer(r.ARRAY_BUFFER,ot);for(let ut=0;ut<W.locationSize;ut++)x(W.location+ut,at/W.locationSize,G,it,at*J,at/W.locationSize*ut*J,dt)}}else if(k!==void 0){const it=k[Y];if(it!==void 0)switch(it.length){case 2:r.vertexAttrib2fv(W.location,it);break;case 3:r.vertexAttrib3fv(W.location,it);break;case 4:r.vertexAttrib4fv(W.location,it);break;default:r.vertexAttrib1fv(W.location,it)}}}}M()}function T(){L();for(const w in n){const R=n[w];for(const B in R){const F=R[B];for(const I in F)h(F[I].object),delete F[I];delete R[B]}delete n[w]}}function S(w){if(n[w.id]===void 0)return;const R=n[w.id];for(const B in R){const F=R[B];for(const I in F)h(F[I].object),delete F[I];delete R[B]}delete n[w.id]}function b(w){for(const R in n){const B=n[R];if(B[w.id]===void 0)continue;const F=B[w.id];for(const I in F)h(F[I].object),delete F[I];delete B[w.id]}}function L(){E(),o=!0,s!==i&&(s=i,l(s.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:L,resetDefaultState:E,dispose:T,releaseStatesOfGeometry:S,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function xp(r,t,e){let n;function i(l){n=l}function s(l,h){r.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(r.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<d.length;_++)e.update(g,n,d[_])}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function vp(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(S){return!(S!==cn&&n.convert(S)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){const b=S===Cs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==Un&&n.convert(S)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==Cn&&!b)}function c(S){if(S==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),p=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,T=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:p,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:v,maxSamples:T}}function yp(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Wn,a=new Gt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):l();else{const M=s?0:n,x=M*4;let v=p.clippingState||null;c.value=v,v=h(g,d,x,f);for(let T=0;T!==x;++T)v[T]=e[T];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=f;x!==_;++x,v+=4)o.copy(u[x]).applyMatrix4(M,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Mp(r){let t=new WeakMap;function e(o,a){return a===ba?o.mapping=ts:a===Ea&&(o.mapping=es),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ba||a===Ea)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Lu(c.height);return l.fromEquirectangularTexture(r,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class wc extends Sc{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Xi=4,sl=[.125,.215,.35,.446,.526,.582],pi=20,ra=new wc,rl=new Zt;let aa=null,oa=0,la=0,ca=!1;const di=(1+Math.sqrt(5))/2,Wi=1/di,al=[new H(-di,Wi,0),new H(di,Wi,0),new H(-Wi,0,di),new H(Wi,0,di),new H(0,di,-Wi),new H(0,di,Wi),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class ol{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){aa=this._renderer.getRenderTarget(),oa=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(aa,oa,la),this._renderer.xr.enabled=ca,t.scissorTest=!1,er(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ts||t.mapping===es?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),aa=this._renderer.getRenderTarget(),oa=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:je,minFilter:je,generateMipmaps:!1,type:Cs,format:cn,colorSpace:ii,depthBuffer:!1},i=ll(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ll(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sp(s)),this._blurMaterial=bp(s,t,e)}return i}_compileMaterial(t){const e=new Ze(this._lodPlanes[0],t);this._renderer.compile(e,ra)}_sceneToCubeUV(t,e,n,i){const a=new We(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(rl),h.toneMapping=Jn,h.autoClear=!1;const f=new xc({name:"PMREM.Background",side:Oe,depthWrite:!1,depthTest:!1}),g=new Ze(new ls,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(rl),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):M===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const x=this._cubeSize;er(i,M*x,p>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ts||t.mapping===es;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=hl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cl());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Ze(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;er(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,ra)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=al[(i-s-1)%al.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ze(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*pi-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):pi;m>pi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${pi}`);const p=[];let M=0;for(let b=0;b<pi;++b){const L=b/_,E=Math.exp(-L*L/2);p.push(E),b===0?M+=E:b<m&&(M+=2*E)}for(let b=0;b<p.length;b++)p[b]=p[b]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const v=this._sizeLods[i],T=3*v*(i>x-Xi?i-x+Xi:0),S=4*(this._cubeSize-v);er(e,T,S,3*v,2*v),c.setRenderTarget(e),c.render(u,ra)}}function Sp(r){const t=[],e=[],n=[];let i=r;const s=r-Xi+1+sl.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>r-Xi?c=sl[o-r+Xi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*f),x=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let S=0;S<f;S++){const b=S%3*2/3-1,L=S>2?0:-1,E=[b,L,0,b+2/3,L,0,b+2/3,L+1,0,b,L,0,b+2/3,L+1,0,b,L+1,0];M.set(E,_*g*S),x.set(d,m*g*S);const w=[S,S,S,S,S,S];v.set(w,p*g*S)}const T=new vn;T.setAttribute("position",new Je(M,_)),T.setAttribute("uv",new Je(x,m)),T.setAttribute("faceIndex",new Je(v,p)),t.push(T),i>Xi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ll(r,t,e){const n=new yi(r,t,e);return n.texture.mapping=Lr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function er(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function bp(r,t,e){const n=new Float32Array(pi),i=new H(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:pi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:So(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function cl(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:So(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function hl(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:So(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function So(){return`

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
	`}function Ep(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===ba||c===Ea,h=c===ts||c===es;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new ol(r)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new ol(r)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function wp(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&ji("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ap(r,t,e,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)t.update(d[g],r.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],r.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const M=f.array;_=f.version;for(let x=0,v=M.length;x<v;x+=3){const T=M[x+0],S=M[x+1],b=M[x+2];d.push(T,S,S,b,b,T)}}else if(g!==void 0){const M=g.array;_=g.version;for(let x=0,v=M.length/3-1;x<v;x+=3){const T=x+0,S=x+1,b=x+2;d.push(T,S,S,b,b,T)}}else return;const m=new(fc(d)?yc:vc)(d,1);m.version=_;const p=s.get(u);p&&t.remove(p),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Tp(r,t,e){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,f){r.drawElements(n,f,s,d*o),e.update(f,n,1)}function l(d,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M];for(let M=0;M<_.length;M++)e.update(p,n,_[M])}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Cp(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Rp(r,t,e){const n=new WeakMap,i=new Me;function s(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let w=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",w)};var f=w;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let T=a.attributes.position.count*v,S=1;T>t.maxTextureSize&&(S=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const b=new Float32Array(T*S*4*u),L=new mc(b,T,S,u);L.type=Cn,L.needsUpdate=!0;const E=v*4;for(let R=0;R<u;R++){const B=p[R],F=M[R],I=x[R],U=T*S*4*R;for(let k=0;k<B.count;k++){const Y=k*E;g===!0&&(i.fromBufferAttribute(B,k),b[U+Y+0]=i.x,b[U+Y+1]=i.y,b[U+Y+2]=i.z,b[U+Y+3]=0),_===!0&&(i.fromBufferAttribute(F,k),b[U+Y+4]=i.x,b[U+Y+5]=i.y,b[U+Y+6]=i.z,b[U+Y+7]=0),m===!0&&(i.fromBufferAttribute(I,k),b[U+Y+8]=i.x,b[U+Y+9]=i.y,b[U+Y+10]=i.z,b[U+Y+11]=I.itemSize===4?i.w:1)}}d={count:u,texture:L,size:new zt(T,S)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(r,"morphTargetBaseInfluence",_),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function Pp(r,t,e,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}class Ac extends Qe{constructor(t,e,n,i,s,o,a,c,l,h=Ki){if(h!==Ki&&h!==is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ki&&(n=vi),n===void 0&&h===is&&(n=ns),super(null,i,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Xe,this.minFilter=c!==void 0?c:Xe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Tc=new Qe,ul=new Ac(1,1),Cc=new mc,Rc=new mu,Pc=new bc,dl=[],fl=[],pl=new Float32Array(16),ml=new Float32Array(9),gl=new Float32Array(4);function cs(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=dl[i];if(s===void 0&&(s=new Float32Array(i),dl[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Se(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function be(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Ur(r,t){let e=fl[t];e===void 0&&(e=new Int32Array(t),fl[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Lp(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Ip(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;r.uniform2fv(this.addr,t),be(e,t)}}function Dp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;r.uniform3fv(this.addr,t),be(e,t)}}function Up(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;r.uniform4fv(this.addr,t),be(e,t)}}function Np(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(Se(e,n))return;gl.set(n),r.uniformMatrix2fv(this.addr,!1,gl),be(e,n)}}function Fp(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(Se(e,n))return;ml.set(n),r.uniformMatrix3fv(this.addr,!1,ml),be(e,n)}}function Op(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(Se(e,n))return;pl.set(n),r.uniformMatrix4fv(this.addr,!1,pl),be(e,n)}}function Bp(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function kp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;r.uniform2iv(this.addr,t),be(e,t)}}function zp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;r.uniform3iv(this.addr,t),be(e,t)}}function Vp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;r.uniform4iv(this.addr,t),be(e,t)}}function Hp(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Gp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;r.uniform2uiv(this.addr,t),be(e,t)}}function Wp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;r.uniform3uiv(this.addr,t),be(e,t)}}function Xp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;r.uniform4uiv(this.addr,t),be(e,t)}}function Yp(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(ul.compareFunction=uc,s=ul):s=Tc,e.setTexture2D(t||s,i)}function qp(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Rc,i)}function $p(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Pc,i)}function Kp(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Cc,i)}function jp(r){switch(r){case 5126:return Lp;case 35664:return Ip;case 35665:return Dp;case 35666:return Up;case 35674:return Np;case 35675:return Fp;case 35676:return Op;case 5124:case 35670:return Bp;case 35667:case 35671:return kp;case 35668:case 35672:return zp;case 35669:case 35673:return Vp;case 5125:return Hp;case 36294:return Gp;case 36295:return Wp;case 36296:return Xp;case 35678:case 36198:case 36298:case 36306:case 35682:return Yp;case 35679:case 36299:case 36307:return qp;case 35680:case 36300:case 36308:case 36293:return $p;case 36289:case 36303:case 36311:case 36292:return Kp}}function Zp(r,t){r.uniform1fv(this.addr,t)}function Jp(r,t){const e=cs(t,this.size,2);r.uniform2fv(this.addr,e)}function Qp(r,t){const e=cs(t,this.size,3);r.uniform3fv(this.addr,e)}function tm(r,t){const e=cs(t,this.size,4);r.uniform4fv(this.addr,e)}function em(r,t){const e=cs(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function nm(r,t){const e=cs(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function im(r,t){const e=cs(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function sm(r,t){r.uniform1iv(this.addr,t)}function rm(r,t){r.uniform2iv(this.addr,t)}function am(r,t){r.uniform3iv(this.addr,t)}function om(r,t){r.uniform4iv(this.addr,t)}function lm(r,t){r.uniform1uiv(this.addr,t)}function cm(r,t){r.uniform2uiv(this.addr,t)}function hm(r,t){r.uniform3uiv(this.addr,t)}function um(r,t){r.uniform4uiv(this.addr,t)}function dm(r,t,e){const n=this.cache,i=t.length,s=Ur(e,i);Se(n,s)||(r.uniform1iv(this.addr,s),be(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Tc,s[o])}function fm(r,t,e){const n=this.cache,i=t.length,s=Ur(e,i);Se(n,s)||(r.uniform1iv(this.addr,s),be(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Rc,s[o])}function pm(r,t,e){const n=this.cache,i=t.length,s=Ur(e,i);Se(n,s)||(r.uniform1iv(this.addr,s),be(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Pc,s[o])}function mm(r,t,e){const n=this.cache,i=t.length,s=Ur(e,i);Se(n,s)||(r.uniform1iv(this.addr,s),be(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Cc,s[o])}function gm(r){switch(r){case 5126:return Zp;case 35664:return Jp;case 35665:return Qp;case 35666:return tm;case 35674:return em;case 35675:return nm;case 35676:return im;case 5124:case 35670:return sm;case 35667:case 35671:return rm;case 35668:case 35672:return am;case 35669:case 35673:return om;case 5125:return lm;case 36294:return cm;case 36295:return hm;case 36296:return um;case 35678:case 36198:case 36298:case 36306:case 35682:return dm;case 35679:case 36299:case 36307:return fm;case 35680:case 36300:case 36308:case 36293:return pm;case 36289:case 36303:case 36311:case 36292:return mm}}class _m{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=jp(e.type)}}class xm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=gm(e.type)}}class vm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const ha=/(\w+)(\])?(\[|\.)?/g;function _l(r,t){r.seq.push(t),r.map[t.id]=t}function ym(r,t,e){const n=r.name,i=n.length;for(ha.lastIndex=0;;){const s=ha.exec(n),o=ha.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){_l(e,l===void 0?new _m(a,r,t):new xm(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new vm(a),_l(e,u)),e=u}}}class pr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);ym(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function xl(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const Mm=37297;let Sm=0;function bm(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Em(r){const t=ne.getPrimaries(ne.workingColorSpace),e=ne.getPrimaries(r);let n;switch(t===e?n="":t===yr&&e===vr?n="LinearDisplayP3ToLinearSRGB":t===vr&&e===yr&&(n="LinearSRGBToLinearDisplayP3"),r){case ii:case Ir:return[n,"LinearTransferOETF"];case fn:case xo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function vl(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+bm(r.getShaderSource(t),o)}else return i}function wm(r,t){const e=Em(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Am(r,t){let e;switch(t){case bh:e="Linear";break;case Eh:e="Reinhard";break;case wh:e="OptimizedCineon";break;case Ah:e="ACESFilmic";break;case Ch:e="AgX";break;case Rh:e="Neutral";break;case Th:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const nr=new H;function Tm(){ne.getLuminanceCoefficients(nr);const r=nr.x.toFixed(4),t=nr.y.toFixed(4),e=nr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cm(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_s).join(`
`)}function Rm(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Pm(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function _s(r){return r!==""}function yl(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ml(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Lm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ja(r){return r.replace(Lm,Dm)}const Im=new Map;function Dm(r,t){let e=Ht[t];if(e===void 0){const n=Im.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ja(e)}const Um=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sl(r){return r.replace(Um,Nm)}function Nm(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function bl(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Fm(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===jl?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Qc?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Tn&&(t="SHADOWMAP_TYPE_VSM"),t}function Om(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ts:case es:t="ENVMAP_TYPE_CUBE";break;case Lr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Bm(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case es:t="ENVMAP_MODE_REFRACTION";break}return t}function km(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Jl:t="ENVMAP_BLENDING_MULTIPLY";break;case Mh:t="ENVMAP_BLENDING_MIX";break;case Sh:t="ENVMAP_BLENDING_ADD";break}return t}function zm(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Vm(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Fm(e),l=Om(e),h=Bm(e),u=km(e),d=zm(e),f=Cm(e),g=Rm(s),_=i.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(_s).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(_s).join(`
`),p.length>0&&(p+=`
`)):(m=[bl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_s).join(`
`),p=[bl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Jn?"#define TONE_MAPPING":"",e.toneMapping!==Jn?Ht.tonemapping_pars_fragment:"",e.toneMapping!==Jn?Am("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,wm("linearToOutputTexel",e.outputColorSpace),Tm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(_s).join(`
`)),o=Ja(o),o=yl(o,e),o=Ml(o,e),a=Ja(a),a=yl(a,e),a=Ml(a,e),o=Sl(o),a=Sl(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Oo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Oo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=M+m+o,v=M+p+a,T=xl(i,i.VERTEX_SHADER,x),S=xl(i,i.FRAGMENT_SHADER,v);i.attachShader(_,T),i.attachShader(_,S),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(R){if(r.debug.checkShaderErrors){const B=i.getProgramInfoLog(_).trim(),F=i.getShaderInfoLog(T).trim(),I=i.getShaderInfoLog(S).trim();let U=!0,k=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(U=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,T,S);else{const Y=vl(i,T,"vertex"),W=vl(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+B+`
`+Y+`
`+W)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(F===""||I==="")&&(k=!1);k&&(R.diagnostics={runnable:U,programLog:B,vertexShader:{log:F,prefix:m},fragmentShader:{log:I,prefix:p}})}i.deleteShader(T),i.deleteShader(S),L=new pr(i,_),E=Pm(i,_)}let L;this.getUniforms=function(){return L===void 0&&b(this),L};let E;this.getAttributes=function(){return E===void 0&&b(this),E};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(_,Mm)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Sm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=S,this}let Hm=0;class Gm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Wm(t),e.set(t,n)),n}}class Wm{constructor(t){this.id=Hm++,this.code=t,this.usedTimes=0}}function Xm(r,t,e,n,i,s,o){const a=new gc,c=new Gm,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,w,R,B,F){const I=B.fog,U=F.geometry,k=E.isMeshStandardMaterial?B.environment:null,Y=(E.isMeshStandardMaterial?e:t).get(E.envMap||k),W=Y&&Y.mapping===Lr?Y.image.height:null,Q=g[E.type];E.precision!==null&&(f=i.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const it=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,at=it!==void 0?it.length:0;let vt=0;U.morphAttributes.position!==void 0&&(vt=1),U.morphAttributes.normal!==void 0&&(vt=2),U.morphAttributes.color!==void 0&&(vt=3);let ot,G,J,dt;if(Q){const jt=pn[Q];ot=jt.vertexShader,G=jt.fragmentShader}else ot=E.vertexShader,G=E.fragmentShader,c.update(E),J=c.getVertexShaderID(E),dt=c.getFragmentShaderID(E);const ut=r.getRenderTarget(),yt=F.isInstancedMesh===!0,wt=F.isBatchedMesh===!0,At=!!E.map,Kt=!!E.matcap,N=!!Y,se=!!E.aoMap,Wt=!!E.lightMap,Yt=!!E.bumpMap,Et=!!E.normalMap,re=!!E.displacementMap,Pt=!!E.emissiveMap,It=!!E.metalnessMap,D=!!E.roughnessMap,C=E.anisotropy>0,$=E.clearcoat>0,nt=E.dispersion>0,st=E.iridescence>0,et=E.sheen>0,Rt=E.transmission>0,ft=C&&!!E.anisotropyMap,_t=$&&!!E.clearcoatMap,kt=$&&!!E.clearcoatNormalMap,ct=$&&!!E.clearcoatRoughnessMap,xt=st&&!!E.iridescenceMap,Xt=st&&!!E.iridescenceThicknessMap,Dt=et&&!!E.sheenColorMap,Mt=et&&!!E.sheenRoughnessMap,Nt=!!E.specularMap,Bt=!!E.specularColorMap,le=!!E.specularIntensityMap,A=Rt&&!!E.transmissionMap,X=Rt&&!!E.thicknessMap,q=!!E.gradientMap,Z=!!E.alphaMap,rt=E.alphaTest>0,Tt=!!E.alphaHash,Ft=!!E.extensions;let fe=Jn;E.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(fe=r.toneMapping);const xe={shaderID:Q,shaderType:E.type,shaderName:E.name,vertexShader:ot,fragmentShader:G,defines:E.defines,customVertexShaderID:J,customFragmentShaderID:dt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:wt,batchingColor:wt&&F._colorsTexture!==null,instancing:yt,instancingColor:yt&&F.instanceColor!==null,instancingMorph:yt&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ut===null?r.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:ii,alphaToCoverage:!!E.alphaToCoverage,map:At,matcap:Kt,envMap:N,envMapMode:N&&Y.mapping,envMapCubeUVHeight:W,aoMap:se,lightMap:Wt,bumpMap:Yt,normalMap:Et,displacementMap:d&&re,emissiveMap:Pt,normalMapObjectSpace:Et&&E.normalMapType===Oh,normalMapTangentSpace:Et&&E.normalMapType===hc,metalnessMap:It,roughnessMap:D,anisotropy:C,anisotropyMap:ft,clearcoat:$,clearcoatMap:_t,clearcoatNormalMap:kt,clearcoatRoughnessMap:ct,dispersion:nt,iridescence:st,iridescenceMap:xt,iridescenceThicknessMap:Xt,sheen:et,sheenColorMap:Dt,sheenRoughnessMap:Mt,specularMap:Nt,specularColorMap:Bt,specularIntensityMap:le,transmission:Rt,transmissionMap:A,thicknessMap:X,gradientMap:q,opaque:E.transparent===!1&&E.blending===Pn&&E.alphaToCoverage===!1,alphaMap:Z,alphaTest:rt,alphaHash:Tt,combine:E.combine,mapUv:At&&_(E.map.channel),aoMapUv:se&&_(E.aoMap.channel),lightMapUv:Wt&&_(E.lightMap.channel),bumpMapUv:Yt&&_(E.bumpMap.channel),normalMapUv:Et&&_(E.normalMap.channel),displacementMapUv:re&&_(E.displacementMap.channel),emissiveMapUv:Pt&&_(E.emissiveMap.channel),metalnessMapUv:It&&_(E.metalnessMap.channel),roughnessMapUv:D&&_(E.roughnessMap.channel),anisotropyMapUv:ft&&_(E.anisotropyMap.channel),clearcoatMapUv:_t&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:kt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Xt&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&_(E.sheenRoughnessMap.channel),specularMapUv:Nt&&_(E.specularMap.channel),specularColorMapUv:Bt&&_(E.specularColorMap.channel),specularIntensityMapUv:le&&_(E.specularIntensityMap.channel),transmissionMapUv:A&&_(E.transmissionMap.channel),thicknessMapUv:X&&_(E.thicknessMap.channel),alphaMapUv:Z&&_(E.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Et||C),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!U.attributes.uv&&(At||Z),fog:!!I,useFog:E.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:F.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:vt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:fe,decodeVideoTexture:At&&E.map.isVideoTexture===!0&&ne.getTransfer(E.map.colorSpace)===ae,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===on,flipSided:E.side===Oe,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ft&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&E.extensions.multiDraw===!0||wt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return xe.vertexUv1s=l.has(1),xe.vertexUv2s=l.has(2),xe.vertexUv3s=l.has(3),l.clear(),xe}function p(E){const w=[];if(E.shaderID?w.push(E.shaderID):(w.push(E.customVertexShaderID),w.push(E.customFragmentShaderID)),E.defines!==void 0)for(const R in E.defines)w.push(R),w.push(E.defines[R]);return E.isRawShaderMaterial===!1&&(M(w,E),x(w,E),w.push(r.outputColorSpace)),w.push(E.customProgramCacheKey),w.join()}function M(E,w){E.push(w.precision),E.push(w.outputColorSpace),E.push(w.envMapMode),E.push(w.envMapCubeUVHeight),E.push(w.mapUv),E.push(w.alphaMapUv),E.push(w.lightMapUv),E.push(w.aoMapUv),E.push(w.bumpMapUv),E.push(w.normalMapUv),E.push(w.displacementMapUv),E.push(w.emissiveMapUv),E.push(w.metalnessMapUv),E.push(w.roughnessMapUv),E.push(w.anisotropyMapUv),E.push(w.clearcoatMapUv),E.push(w.clearcoatNormalMapUv),E.push(w.clearcoatRoughnessMapUv),E.push(w.iridescenceMapUv),E.push(w.iridescenceThicknessMapUv),E.push(w.sheenColorMapUv),E.push(w.sheenRoughnessMapUv),E.push(w.specularMapUv),E.push(w.specularColorMapUv),E.push(w.specularIntensityMapUv),E.push(w.transmissionMapUv),E.push(w.thicknessMapUv),E.push(w.combine),E.push(w.fogExp2),E.push(w.sizeAttenuation),E.push(w.morphTargetsCount),E.push(w.morphAttributeCount),E.push(w.numDirLights),E.push(w.numPointLights),E.push(w.numSpotLights),E.push(w.numSpotLightMaps),E.push(w.numHemiLights),E.push(w.numRectAreaLights),E.push(w.numDirLightShadows),E.push(w.numPointLightShadows),E.push(w.numSpotLightShadows),E.push(w.numSpotLightShadowsWithMaps),E.push(w.numLightProbes),E.push(w.shadowMapType),E.push(w.toneMapping),E.push(w.numClippingPlanes),E.push(w.numClipIntersection),E.push(w.depthPacking)}function x(E,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.doubleSided&&a.enable(10),w.flipSided&&a.enable(11),w.useDepthPacking&&a.enable(12),w.dithering&&a.enable(13),w.transmission&&a.enable(14),w.sheen&&a.enable(15),w.opaque&&a.enable(16),w.pointsUvs&&a.enable(17),w.decodeVideoTexture&&a.enable(18),w.alphaToCoverage&&a.enable(19),E.push(a.mask)}function v(E){const w=g[E.type];let R;if(w){const B=pn[w];R=Tu.clone(B.uniforms)}else R=E.uniforms;return R}function T(E,w){let R;for(let B=0,F=h.length;B<F;B++){const I=h[B];if(I.cacheKey===w){R=I,++R.usedTimes;break}}return R===void 0&&(R=new Vm(r,w,E,s),h.push(R)),R}function S(E){if(--E.usedTimes===0){const w=h.indexOf(E);h[w]=h[h.length-1],h.pop(),E.destroy()}}function b(E){c.remove(E)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:T,releaseProgram:S,releaseShaderCache:b,programs:h,dispose:L}}function Ym(){let r=new WeakMap;function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function e(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function qm(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function El(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function wl(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,g,_,m){let p=r[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},r[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function c(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||qm),n.length>1&&n.sort(d||El),i.length>1&&i.sort(d||El)}function h(){for(let u=t,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:h,sort:l}}function $m(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new wl,r.set(n,[o])):i>=s.length?(o=new wl,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Km(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new Zt};break;case"SpotLight":e={position:new H,direction:new H,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new H,halfWidth:new H,halfHeight:new H};break}return r[t.id]=e,e}}}function jm(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Zm=0;function Jm(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Qm(r){const t=new Km,e=jm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new H);const i=new H,s=new de,o=new de;function a(l){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,M=0,x=0,v=0,T=0,S=0,b=0;l.sort(Jm);for(let E=0,w=l.length;E<w;E++){const R=l[E],B=R.color,F=R.intensity,I=R.distance,U=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=B.r*F,u+=B.g*F,d+=B.b*F;else if(R.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(R.sh.coefficients[k],F);b++}else if(R.isDirectionalLight){const k=t.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Y=R.shadow,W=e.get(R);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=U,n.directionalShadowMatrix[f]=R.shadow.matrix,M++}n.directional[f]=k,f++}else if(R.isSpotLight){const k=t.get(R);k.position.setFromMatrixPosition(R.matrixWorld),k.color.copy(B).multiplyScalar(F),k.distance=I,k.coneCos=Math.cos(R.angle),k.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),k.decay=R.decay,n.spot[_]=k;const Y=R.shadow;if(R.map&&(n.spotLightMap[T]=R.map,T++,Y.updateMatrices(R),R.castShadow&&S++),n.spotLightMatrix[_]=Y.matrix,R.castShadow){const W=e.get(R);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=U,v++}_++}else if(R.isRectAreaLight){const k=t.get(R);k.color.copy(B).multiplyScalar(F),k.halfWidth.set(R.width*.5,0,0),k.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=k,m++}else if(R.isPointLight){const k=t.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),k.distance=R.distance,k.decay=R.decay,R.castShadow){const Y=R.shadow,W=e.get(R);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,W.shadowCameraNear=Y.camera.near,W.shadowCameraFar=Y.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=U,n.pointShadowMatrix[g]=R.shadow.matrix,x++}n.point[g]=k,g++}else if(R.isHemisphereLight){const k=t.get(R);k.skyColor.copy(R.color).multiplyScalar(F),k.groundColor.copy(R.groundColor).multiplyScalar(F),n.hemi[p]=k,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==M||L.numPointShadows!==x||L.numSpotShadows!==v||L.numSpotMaps!==T||L.numLightProbes!==b)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+T-S,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=b,L.directionalLength=f,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=M,L.numPointShadows=x,L.numSpotShadows=v,L.numSpotMaps=T,L.numLightProbes=b,n.version=Zm++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const x=l[p];if(x.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(x.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Al(r){const t=new Qm(r),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function tg(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new Al(r),t.set(i,[a])):s>=o.length?(a=new Al(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class eg extends In{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ng extends In{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ig=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sg=`uniform sampler2D shadow_pass;
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
}`;function rg(r,t,e){let n=new Mo;const i=new zt,s=new zt,o=new Me,a=new eg({depthPacking:Fh}),c=new ng,l={},h=e.maxTextureSize,u={[ti]:Oe,[Oe]:ti,[on]:on},d=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:ig,fragmentShader:sg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new vn;g.setAttribute("position",new Je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ze(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jl;let p=this.type;this.render=function(S,b,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const E=r.getRenderTarget(),w=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),B=r.state;B.setBlending(Zn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const F=p!==Tn&&this.type===Tn,I=p===Tn&&this.type!==Tn;for(let U=0,k=S.length;U<k;U++){const Y=S[U],W=Y.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const Q=W.getFrameExtents();if(i.multiply(Q),s.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Q.x),i.x=s.x*Q.x,W.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Q.y),i.y=s.y*Q.y,W.mapSize.y=s.y)),W.map===null||F===!0||I===!0){const at=this.type!==Tn?{minFilter:Xe,magFilter:Xe}:{};W.map!==null&&W.map.dispose(),W.map=new yi(i.x,i.y,at),W.map.texture.name=Y.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();const it=W.getViewportCount();for(let at=0;at<it;at++){const vt=W.getViewport(at);o.set(s.x*vt.x,s.y*vt.y,s.x*vt.z,s.y*vt.w),B.viewport(o),W.updateMatrices(Y,at),n=W.getFrustum(),v(b,L,W.camera,Y,this.type)}W.isPointLightShadow!==!0&&this.type===Tn&&M(W,L),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(E,w,R)};function M(S,b){const L=t.update(_);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new yi(i.x,i.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,r.setRenderTarget(S.mapPass),r.clear(),r.renderBufferDirect(b,null,L,d,_,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,r.setRenderTarget(S.map),r.clear(),r.renderBufferDirect(b,null,L,f,_,null)}function x(S,b,L,E){let w=null;const R=L.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(R!==void 0)w=R;else if(w=L.isPointLight===!0?c:a,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const B=w.uuid,F=b.uuid;let I=l[B];I===void 0&&(I={},l[B]=I);let U=I[F];U===void 0&&(U=w.clone(),I[F]=U,b.addEventListener("dispose",T)),w=U}if(w.visible=b.visible,w.wireframe=b.wireframe,E===Tn?w.side=b.shadowSide!==null?b.shadowSide:b.side:w.side=b.shadowSide!==null?b.shadowSide:u[b.side],w.alphaMap=b.alphaMap,w.alphaTest=b.alphaTest,w.map=b.map,w.clipShadows=b.clipShadows,w.clippingPlanes=b.clippingPlanes,w.clipIntersection=b.clipIntersection,w.displacementMap=b.displacementMap,w.displacementScale=b.displacementScale,w.displacementBias=b.displacementBias,w.wireframeLinewidth=b.wireframeLinewidth,w.linewidth=b.linewidth,L.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const B=r.properties.get(w);B.light=L}return w}function v(S,b,L,E,w){if(S.visible===!1)return;if(S.layers.test(b.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&w===Tn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,S.matrixWorld);const F=t.update(S),I=S.material;if(Array.isArray(I)){const U=F.groups;for(let k=0,Y=U.length;k<Y;k++){const W=U[k],Q=I[W.materialIndex];if(Q&&Q.visible){const it=x(S,Q,E,w);S.onBeforeShadow(r,S,b,L,F,it,W),r.renderBufferDirect(L,null,F,it,S,W),S.onAfterShadow(r,S,b,L,F,it,W)}}}else if(I.visible){const U=x(S,I,E,w);S.onBeforeShadow(r,S,b,L,F,U,null),r.renderBufferDirect(L,null,F,U,S,null),S.onAfterShadow(r,S,b,L,F,U,null)}}const B=S.children;for(let F=0,I=B.length;F<I;F++)v(B[F],b,L,E,w)}function T(S){S.target.removeEventListener("dispose",T);for(const L in l){const E=l[L],w=S.target.uuid;w in E&&(E[w].dispose(),delete E[w])}}}function ag(r){function t(){let A=!1;const X=new Me;let q=null;const Z=new Me(0,0,0,0);return{setMask:function(rt){q!==rt&&!A&&(r.colorMask(rt,rt,rt,rt),q=rt)},setLocked:function(rt){A=rt},setClear:function(rt,Tt,Ft,fe,xe){xe===!0&&(rt*=fe,Tt*=fe,Ft*=fe),X.set(rt,Tt,Ft,fe),Z.equals(X)===!1&&(r.clearColor(rt,Tt,Ft,fe),Z.copy(X))},reset:function(){A=!1,q=null,Z.set(-1,0,0,0)}}}function e(){let A=!1,X=null,q=null,Z=null;return{setTest:function(rt){rt?dt(r.DEPTH_TEST):ut(r.DEPTH_TEST)},setMask:function(rt){X!==rt&&!A&&(r.depthMask(rt),X=rt)},setFunc:function(rt){if(q!==rt){switch(rt){case ph:r.depthFunc(r.NEVER);break;case mh:r.depthFunc(r.ALWAYS);break;case gh:r.depthFunc(r.LESS);break;case mr:r.depthFunc(r.LEQUAL);break;case _h:r.depthFunc(r.EQUAL);break;case xh:r.depthFunc(r.GEQUAL);break;case vh:r.depthFunc(r.GREATER);break;case yh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}q=rt}},setLocked:function(rt){A=rt},setClear:function(rt){Z!==rt&&(r.clearDepth(rt),Z=rt)},reset:function(){A=!1,X=null,q=null,Z=null}}}function n(){let A=!1,X=null,q=null,Z=null,rt=null,Tt=null,Ft=null,fe=null,xe=null;return{setTest:function(jt){A||(jt?dt(r.STENCIL_TEST):ut(r.STENCIL_TEST))},setMask:function(jt){X!==jt&&!A&&(r.stencilMask(jt),X=jt)},setFunc:function(jt,ve,me){(q!==jt||Z!==ve||rt!==me)&&(r.stencilFunc(jt,ve,me),q=jt,Z=ve,rt=me)},setOp:function(jt,ve,me){(Tt!==jt||Ft!==ve||fe!==me)&&(r.stencilOp(jt,ve,me),Tt=jt,Ft=ve,fe=me)},setLocked:function(jt){A=jt},setClear:function(jt){xe!==jt&&(r.clearStencil(jt),xe=jt)},reset:function(){A=!1,X=null,q=null,Z=null,rt=null,Tt=null,Ft=null,fe=null,xe=null}}}const i=new t,s=new e,o=new n,a=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,d=[],f=null,g=!1,_=null,m=null,p=null,M=null,x=null,v=null,T=null,S=new Zt(0,0,0),b=0,L=!1,E=null,w=null,R=null,B=null,F=null;const I=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,k=0;const Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(Y)[1]),U=k>=1):Y.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),U=k>=2);let W=null,Q={};const it=r.getParameter(r.SCISSOR_BOX),at=r.getParameter(r.VIEWPORT),vt=new Me().fromArray(it),ot=new Me().fromArray(at);function G(A,X,q,Z){const rt=new Uint8Array(4),Tt=r.createTexture();r.bindTexture(A,Tt),r.texParameteri(A,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(A,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ft=0;Ft<q;Ft++)A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY?r.texImage3D(X,0,r.RGBA,1,1,Z,0,r.RGBA,r.UNSIGNED_BYTE,rt):r.texImage2D(X+Ft,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,rt);return Tt}const J={};J[r.TEXTURE_2D]=G(r.TEXTURE_2D,r.TEXTURE_2D,1),J[r.TEXTURE_CUBE_MAP]=G(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[r.TEXTURE_2D_ARRAY]=G(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),J[r.TEXTURE_3D]=G(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),dt(r.DEPTH_TEST),s.setFunc(mr),Yt(!1),Et(Do),dt(r.CULL_FACE),se(Zn);function dt(A){l[A]!==!0&&(r.enable(A),l[A]=!0)}function ut(A){l[A]!==!1&&(r.disable(A),l[A]=!1)}function yt(A,X){return h[A]!==X?(r.bindFramebuffer(A,X),h[A]=X,A===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=X),A===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=X),!0):!1}function wt(A,X){let q=d,Z=!1;if(A){q=u.get(X),q===void 0&&(q=[],u.set(X,q));const rt=A.textures;if(q.length!==rt.length||q[0]!==r.COLOR_ATTACHMENT0){for(let Tt=0,Ft=rt.length;Tt<Ft;Tt++)q[Tt]=r.COLOR_ATTACHMENT0+Tt;q.length=rt.length,Z=!0}}else q[0]!==r.BACK&&(q[0]=r.BACK,Z=!0);Z&&r.drawBuffers(q)}function At(A){return f!==A?(r.useProgram(A),f=A,!0):!1}const Kt={[fi]:r.FUNC_ADD,[th]:r.FUNC_SUBTRACT,[eh]:r.FUNC_REVERSE_SUBTRACT};Kt[nh]=r.MIN,Kt[ih]=r.MAX;const N={[sh]:r.ZERO,[or]:r.ONE,[rh]:r.SRC_COLOR,[Sa]:r.SRC_ALPHA,[ch]:r.SRC_ALPHA_SATURATE,[Zl]:r.DST_COLOR,[ah]:r.DST_ALPHA,[Ma]:r.ONE_MINUS_SRC_COLOR,[bs]:r.ONE_MINUS_SRC_ALPHA,[lh]:r.ONE_MINUS_DST_COLOR,[oh]:r.ONE_MINUS_DST_ALPHA,[hh]:r.CONSTANT_COLOR,[uh]:r.ONE_MINUS_CONSTANT_COLOR,[dh]:r.CONSTANT_ALPHA,[fh]:r.ONE_MINUS_CONSTANT_ALPHA};function se(A,X,q,Z,rt,Tt,Ft,fe,xe,jt){if(A===Zn){g===!0&&(ut(r.BLEND),g=!1);return}if(g===!1&&(dt(r.BLEND),g=!0),A!==ya){if(A!==_||jt!==L){if((m!==fi||x!==fi)&&(r.blendEquation(r.FUNC_ADD),m=fi,x=fi),jt)switch(A){case Pn:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case va:r.blendFunc(r.ONE,r.ONE);break;case Uo:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case No:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case Pn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case va:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Uo:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case No:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}p=null,M=null,v=null,T=null,S.set(0,0,0),b=0,_=A,L=jt}return}rt=rt||X,Tt=Tt||q,Ft=Ft||Z,(X!==m||rt!==x)&&(r.blendEquationSeparate(Kt[X],Kt[rt]),m=X,x=rt),(q!==p||Z!==M||Tt!==v||Ft!==T)&&(r.blendFuncSeparate(N[q],N[Z],N[Tt],N[Ft]),p=q,M=Z,v=Tt,T=Ft),(fe.equals(S)===!1||xe!==b)&&(r.blendColor(fe.r,fe.g,fe.b,xe),S.copy(fe),b=xe),_=A,L=!1}function Wt(A,X){A.side===on?ut(r.CULL_FACE):dt(r.CULL_FACE);let q=A.side===Oe;X&&(q=!q),Yt(q),A.blending===Pn&&A.transparent===!1?se(Zn):se(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),s.setFunc(A.depthFunc),s.setTest(A.depthTest),s.setMask(A.depthWrite),i.setMask(A.colorWrite);const Z=A.stencilWrite;o.setTest(Z),Z&&(o.setMask(A.stencilWriteMask),o.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),o.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),Pt(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?dt(r.SAMPLE_ALPHA_TO_COVERAGE):ut(r.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(A){E!==A&&(A?r.frontFace(r.CW):r.frontFace(r.CCW),E=A)}function Et(A){A!==Zc?(dt(r.CULL_FACE),A!==w&&(A===Do?r.cullFace(r.BACK):A===Jc?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ut(r.CULL_FACE),w=A}function re(A){A!==R&&(U&&r.lineWidth(A),R=A)}function Pt(A,X,q){A?(dt(r.POLYGON_OFFSET_FILL),(B!==X||F!==q)&&(r.polygonOffset(X,q),B=X,F=q)):ut(r.POLYGON_OFFSET_FILL)}function It(A){A?dt(r.SCISSOR_TEST):ut(r.SCISSOR_TEST)}function D(A){A===void 0&&(A=r.TEXTURE0+I-1),W!==A&&(r.activeTexture(A),W=A)}function C(A,X,q){q===void 0&&(W===null?q=r.TEXTURE0+I-1:q=W);let Z=Q[q];Z===void 0&&(Z={type:void 0,texture:void 0},Q[q]=Z),(Z.type!==A||Z.texture!==X)&&(W!==q&&(r.activeTexture(q),W=q),r.bindTexture(A,X||J[A]),Z.type=A,Z.texture=X)}function $(){const A=Q[W];A!==void 0&&A.type!==void 0&&(r.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function nt(){try{r.compressedTexImage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function st(){try{r.compressedTexImage3D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function et(){try{r.texSubImage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Rt(){try{r.texSubImage3D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ft(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function _t(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function kt(){try{r.texStorage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ct(){try{r.texStorage3D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function xt(){try{r.texImage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Xt(){try{r.texImage3D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Dt(A){vt.equals(A)===!1&&(r.scissor(A.x,A.y,A.z,A.w),vt.copy(A))}function Mt(A){ot.equals(A)===!1&&(r.viewport(A.x,A.y,A.z,A.w),ot.copy(A))}function Nt(A,X){let q=c.get(X);q===void 0&&(q=new WeakMap,c.set(X,q));let Z=q.get(A);Z===void 0&&(Z=r.getUniformBlockIndex(X,A.name),q.set(A,Z))}function Bt(A,X){const Z=c.get(X).get(A);a.get(X)!==Z&&(r.uniformBlockBinding(X,Z,A.__bindingPointIndex),a.set(X,Z))}function le(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),l={},W=null,Q={},h={},u=new WeakMap,d=[],f=null,g=!1,_=null,m=null,p=null,M=null,x=null,v=null,T=null,S=new Zt(0,0,0),b=0,L=!1,E=null,w=null,R=null,B=null,F=null,vt.set(0,0,r.canvas.width,r.canvas.height),ot.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:dt,disable:ut,bindFramebuffer:yt,drawBuffers:wt,useProgram:At,setBlending:se,setMaterial:Wt,setFlipSided:Yt,setCullFace:Et,setLineWidth:re,setPolygonOffset:Pt,setScissorTest:It,activeTexture:D,bindTexture:C,unbindTexture:$,compressedTexImage2D:nt,compressedTexImage3D:st,texImage2D:xt,texImage3D:Xt,updateUBOMapping:Nt,uniformBlockBinding:Bt,texStorage2D:kt,texStorage3D:ct,texSubImage2D:et,texSubImage3D:Rt,compressedTexSubImage2D:ft,compressedTexSubImage3D:_t,scissor:Dt,viewport:Mt,reset:le}}function Tl(r,t,e,n){const i=og(n);switch(e){case ic:return r*t;case rc:return r*t;case ac:return r*t*2;case oc:return r*t/i.components*i.byteLength;case mo:return r*t/i.components*i.byteLength;case lc:return r*t*2/i.components*i.byteLength;case go:return r*t*2/i.components*i.byteLength;case sc:return r*t*3/i.components*i.byteLength;case cn:return r*t*4/i.components*i.byteLength;case _o:return r*t*4/i.components*i.byteLength;case lr:case cr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case hr:case ur:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Aa:case Ca:return Math.max(r,16)*Math.max(t,8)/4;case wa:case Ta:return Math.max(r,8)*Math.max(t,8)/2;case Ra:case Pa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case La:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ia:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Da:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Ua:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Na:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Oa:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case ka:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case za:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Va:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Ha:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Ga:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Wa:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Xa:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case dr:case Ya:case qa:return Math.ceil(r/4)*Math.ceil(t/4)*16;case cc:case $a:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Ka:case ja:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function og(r){switch(r){case Un:case tc:return{byteLength:1,components:1};case Es:case ec:case Cs:return{byteLength:2,components:1};case fo:case po:return{byteLength:2,components:4};case vi:case uo:case Cn:return{byteLength:4,components:1};case nc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function lg(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new zt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,C){return f?new OffscreenCanvas(D,C):Sr("canvas")}function _(D,C,$){let nt=1;const st=It(D);if((st.width>$||st.height>$)&&(nt=$/Math.max(st.width,st.height)),nt<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const et=Math.floor(nt*st.width),Rt=Math.floor(nt*st.height);u===void 0&&(u=g(et,Rt));const ft=C?g(et,Rt):u;return ft.width=et,ft.height=Rt,ft.getContext("2d").drawImage(D,0,0,et,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+et+"x"+Rt+")."),ft}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),D;return D}function m(D){return D.generateMipmaps&&D.minFilter!==Xe&&D.minFilter!==je}function p(D){r.generateMipmap(D)}function M(D,C,$,nt,st=!1){if(D!==null){if(r[D]!==void 0)return r[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let et=C;if(C===r.RED&&($===r.FLOAT&&(et=r.R32F),$===r.HALF_FLOAT&&(et=r.R16F),$===r.UNSIGNED_BYTE&&(et=r.R8)),C===r.RED_INTEGER&&($===r.UNSIGNED_BYTE&&(et=r.R8UI),$===r.UNSIGNED_SHORT&&(et=r.R16UI),$===r.UNSIGNED_INT&&(et=r.R32UI),$===r.BYTE&&(et=r.R8I),$===r.SHORT&&(et=r.R16I),$===r.INT&&(et=r.R32I)),C===r.RG&&($===r.FLOAT&&(et=r.RG32F),$===r.HALF_FLOAT&&(et=r.RG16F),$===r.UNSIGNED_BYTE&&(et=r.RG8)),C===r.RG_INTEGER&&($===r.UNSIGNED_BYTE&&(et=r.RG8UI),$===r.UNSIGNED_SHORT&&(et=r.RG16UI),$===r.UNSIGNED_INT&&(et=r.RG32UI),$===r.BYTE&&(et=r.RG8I),$===r.SHORT&&(et=r.RG16I),$===r.INT&&(et=r.RG32I)),C===r.RGB&&$===r.UNSIGNED_INT_5_9_9_9_REV&&(et=r.RGB9_E5),C===r.RGBA){const Rt=st?xr:ne.getTransfer(nt);$===r.FLOAT&&(et=r.RGBA32F),$===r.HALF_FLOAT&&(et=r.RGBA16F),$===r.UNSIGNED_BYTE&&(et=Rt===ae?r.SRGB8_ALPHA8:r.RGBA8),$===r.UNSIGNED_SHORT_4_4_4_4&&(et=r.RGBA4),$===r.UNSIGNED_SHORT_5_5_5_1&&(et=r.RGB5_A1)}return(et===r.R16F||et===r.R32F||et===r.RG16F||et===r.RG32F||et===r.RGBA16F||et===r.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function x(D,C){let $;return D?C===null||C===vi||C===ns?$=r.DEPTH24_STENCIL8:C===Cn?$=r.DEPTH32F_STENCIL8:C===Es&&($=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===vi||C===ns?$=r.DEPTH_COMPONENT24:C===Cn?$=r.DEPTH_COMPONENT32F:C===Es&&($=r.DEPTH_COMPONENT16),$}function v(D,C){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==Xe&&D.minFilter!==je?Math.log2(Math.max(C.width,C.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?C.mipmaps.length:1}function T(D){const C=D.target;C.removeEventListener("dispose",T),b(C),C.isVideoTexture&&h.delete(C)}function S(D){const C=D.target;C.removeEventListener("dispose",S),E(C)}function b(D){const C=n.get(D);if(C.__webglInit===void 0)return;const $=D.source,nt=d.get($);if(nt){const st=nt[C.__cacheKey];st.usedTimes--,st.usedTimes===0&&L(D),Object.keys(nt).length===0&&d.delete($)}n.remove(D)}function L(D){const C=n.get(D);r.deleteTexture(C.__webglTexture);const $=D.source,nt=d.get($);delete nt[C.__cacheKey],o.memory.textures--}function E(D){const C=n.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(C.__webglFramebuffer[nt]))for(let st=0;st<C.__webglFramebuffer[nt].length;st++)r.deleteFramebuffer(C.__webglFramebuffer[nt][st]);else r.deleteFramebuffer(C.__webglFramebuffer[nt]);C.__webglDepthbuffer&&r.deleteRenderbuffer(C.__webglDepthbuffer[nt])}else{if(Array.isArray(C.__webglFramebuffer))for(let nt=0;nt<C.__webglFramebuffer.length;nt++)r.deleteFramebuffer(C.__webglFramebuffer[nt]);else r.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&r.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&r.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let nt=0;nt<C.__webglColorRenderbuffer.length;nt++)C.__webglColorRenderbuffer[nt]&&r.deleteRenderbuffer(C.__webglColorRenderbuffer[nt]);C.__webglDepthRenderbuffer&&r.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const $=D.textures;for(let nt=0,st=$.length;nt<st;nt++){const et=n.get($[nt]);et.__webglTexture&&(r.deleteTexture(et.__webglTexture),o.memory.textures--),n.remove($[nt])}n.remove(D)}let w=0;function R(){w=0}function B(){const D=w;return D>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),w+=1,D}function F(D){const C=[];return C.push(D.wrapS),C.push(D.wrapT),C.push(D.wrapR||0),C.push(D.magFilter),C.push(D.minFilter),C.push(D.anisotropy),C.push(D.internalFormat),C.push(D.format),C.push(D.type),C.push(D.generateMipmaps),C.push(D.premultiplyAlpha),C.push(D.flipY),C.push(D.unpackAlignment),C.push(D.colorSpace),C.join()}function I(D,C){const $=n.get(D);if(D.isVideoTexture&&re(D),D.isRenderTargetTexture===!1&&D.version>0&&$.__version!==D.version){const nt=D.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ot($,D,C);return}}e.bindTexture(r.TEXTURE_2D,$.__webglTexture,r.TEXTURE0+C)}function U(D,C){const $=n.get(D);if(D.version>0&&$.__version!==D.version){ot($,D,C);return}e.bindTexture(r.TEXTURE_2D_ARRAY,$.__webglTexture,r.TEXTURE0+C)}function k(D,C){const $=n.get(D);if(D.version>0&&$.__version!==D.version){ot($,D,C);return}e.bindTexture(r.TEXTURE_3D,$.__webglTexture,r.TEXTURE0+C)}function Y(D,C){const $=n.get(D);if(D.version>0&&$.__version!==D.version){G($,D,C);return}e.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture,r.TEXTURE0+C)}const W={[gr]:r.REPEAT,[Kn]:r.CLAMP_TO_EDGE,[_r]:r.MIRRORED_REPEAT},Q={[Xe]:r.NEAREST,[Ph]:r.NEAREST_MIPMAP_NEAREST,[Ns]:r.NEAREST_MIPMAP_LINEAR,[je]:r.LINEAR,[zr]:r.LINEAR_MIPMAP_NEAREST,[gi]:r.LINEAR_MIPMAP_LINEAR},it={[Bh]:r.NEVER,[Wh]:r.ALWAYS,[kh]:r.LESS,[uc]:r.LEQUAL,[zh]:r.EQUAL,[Gh]:r.GEQUAL,[Vh]:r.GREATER,[Hh]:r.NOTEQUAL};function at(D,C){if(C.type===Cn&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===je||C.magFilter===zr||C.magFilter===Ns||C.magFilter===gi||C.minFilter===je||C.minFilter===zr||C.minFilter===Ns||C.minFilter===gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,W[C.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,W[C.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,W[C.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,Q[C.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,Q[C.minFilter]),C.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,it[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Xe||C.minFilter!==Ns&&C.minFilter!==gi||C.type===Cn&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");r.texParameterf(D,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function vt(D,C){let $=!1;D.__webglInit===void 0&&(D.__webglInit=!0,C.addEventListener("dispose",T));const nt=C.source;let st=d.get(nt);st===void 0&&(st={},d.set(nt,st));const et=F(C);if(et!==D.__cacheKey){st[et]===void 0&&(st[et]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,$=!0),st[et].usedTimes++;const Rt=st[D.__cacheKey];Rt!==void 0&&(st[D.__cacheKey].usedTimes--,Rt.usedTimes===0&&L(C)),D.__cacheKey=et,D.__webglTexture=st[et].texture}return $}function ot(D,C,$){let nt=r.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(nt=r.TEXTURE_2D_ARRAY),C.isData3DTexture&&(nt=r.TEXTURE_3D);const st=vt(D,C),et=C.source;e.bindTexture(nt,D.__webglTexture,r.TEXTURE0+$);const Rt=n.get(et);if(et.version!==Rt.__version||st===!0){e.activeTexture(r.TEXTURE0+$);const ft=ne.getPrimaries(ne.workingColorSpace),_t=C.colorSpace===qn?null:ne.getPrimaries(C.colorSpace),kt=C.colorSpace===qn||ft===_t?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let ct=_(C.image,!1,i.maxTextureSize);ct=Pt(C,ct);const xt=s.convert(C.format,C.colorSpace),Xt=s.convert(C.type);let Dt=M(C.internalFormat,xt,Xt,C.colorSpace,C.isVideoTexture);at(nt,C);let Mt;const Nt=C.mipmaps,Bt=C.isVideoTexture!==!0,le=Rt.__version===void 0||st===!0,A=et.dataReady,X=v(C,ct);if(C.isDepthTexture)Dt=x(C.format===is,C.type),le&&(Bt?e.texStorage2D(r.TEXTURE_2D,1,Dt,ct.width,ct.height):e.texImage2D(r.TEXTURE_2D,0,Dt,ct.width,ct.height,0,xt,Xt,null));else if(C.isDataTexture)if(Nt.length>0){Bt&&le&&e.texStorage2D(r.TEXTURE_2D,X,Dt,Nt[0].width,Nt[0].height);for(let q=0,Z=Nt.length;q<Z;q++)Mt=Nt[q],Bt?A&&e.texSubImage2D(r.TEXTURE_2D,q,0,0,Mt.width,Mt.height,xt,Xt,Mt.data):e.texImage2D(r.TEXTURE_2D,q,Dt,Mt.width,Mt.height,0,xt,Xt,Mt.data);C.generateMipmaps=!1}else Bt?(le&&e.texStorage2D(r.TEXTURE_2D,X,Dt,ct.width,ct.height),A&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ct.width,ct.height,xt,Xt,ct.data)):e.texImage2D(r.TEXTURE_2D,0,Dt,ct.width,ct.height,0,xt,Xt,ct.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Bt&&le&&e.texStorage3D(r.TEXTURE_2D_ARRAY,X,Dt,Nt[0].width,Nt[0].height,ct.depth);for(let q=0,Z=Nt.length;q<Z;q++)if(Mt=Nt[q],C.format!==cn)if(xt!==null)if(Bt){if(A)if(C.layerUpdates.size>0){const rt=Tl(Mt.width,Mt.height,C.format,C.type);for(const Tt of C.layerUpdates){const Ft=Mt.data.subarray(Tt*rt/Mt.data.BYTES_PER_ELEMENT,(Tt+1)*rt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,Tt,Mt.width,Mt.height,1,xt,Ft,0,0)}C.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,Mt.width,Mt.height,ct.depth,xt,Mt.data,0,0)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,q,Dt,Mt.width,Mt.height,ct.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?A&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,Mt.width,Mt.height,ct.depth,xt,Xt,Mt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,q,Dt,Mt.width,Mt.height,ct.depth,0,xt,Xt,Mt.data)}else{Bt&&le&&e.texStorage2D(r.TEXTURE_2D,X,Dt,Nt[0].width,Nt[0].height);for(let q=0,Z=Nt.length;q<Z;q++)Mt=Nt[q],C.format!==cn?xt!==null?Bt?A&&e.compressedTexSubImage2D(r.TEXTURE_2D,q,0,0,Mt.width,Mt.height,xt,Mt.data):e.compressedTexImage2D(r.TEXTURE_2D,q,Dt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?A&&e.texSubImage2D(r.TEXTURE_2D,q,0,0,Mt.width,Mt.height,xt,Xt,Mt.data):e.texImage2D(r.TEXTURE_2D,q,Dt,Mt.width,Mt.height,0,xt,Xt,Mt.data)}else if(C.isDataArrayTexture)if(Bt){if(le&&e.texStorage3D(r.TEXTURE_2D_ARRAY,X,Dt,ct.width,ct.height,ct.depth),A)if(C.layerUpdates.size>0){const q=Tl(ct.width,ct.height,C.format,C.type);for(const Z of C.layerUpdates){const rt=ct.data.subarray(Z*q/ct.data.BYTES_PER_ELEMENT,(Z+1)*q/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Z,ct.width,ct.height,1,xt,Xt,rt)}C.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,xt,Xt,ct.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Dt,ct.width,ct.height,ct.depth,0,xt,Xt,ct.data);else if(C.isData3DTexture)Bt?(le&&e.texStorage3D(r.TEXTURE_3D,X,Dt,ct.width,ct.height,ct.depth),A&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,xt,Xt,ct.data)):e.texImage3D(r.TEXTURE_3D,0,Dt,ct.width,ct.height,ct.depth,0,xt,Xt,ct.data);else if(C.isFramebufferTexture){if(le)if(Bt)e.texStorage2D(r.TEXTURE_2D,X,Dt,ct.width,ct.height);else{let q=ct.width,Z=ct.height;for(let rt=0;rt<X;rt++)e.texImage2D(r.TEXTURE_2D,rt,Dt,q,Z,0,xt,Xt,null),q>>=1,Z>>=1}}else if(Nt.length>0){if(Bt&&le){const q=It(Nt[0]);e.texStorage2D(r.TEXTURE_2D,X,Dt,q.width,q.height)}for(let q=0,Z=Nt.length;q<Z;q++)Mt=Nt[q],Bt?A&&e.texSubImage2D(r.TEXTURE_2D,q,0,0,xt,Xt,Mt):e.texImage2D(r.TEXTURE_2D,q,Dt,xt,Xt,Mt);C.generateMipmaps=!1}else if(Bt){if(le){const q=It(ct);e.texStorage2D(r.TEXTURE_2D,X,Dt,q.width,q.height)}A&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,xt,Xt,ct)}else e.texImage2D(r.TEXTURE_2D,0,Dt,xt,Xt,ct);m(C)&&p(nt),Rt.__version=et.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function G(D,C,$){if(C.image.length!==6)return;const nt=vt(D,C),st=C.source;e.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+$);const et=n.get(st);if(st.version!==et.__version||nt===!0){e.activeTexture(r.TEXTURE0+$);const Rt=ne.getPrimaries(ne.workingColorSpace),ft=C.colorSpace===qn?null:ne.getPrimaries(C.colorSpace),_t=C.colorSpace===qn||Rt===ft?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const kt=C.isCompressedTexture||C.image[0].isCompressedTexture,ct=C.image[0]&&C.image[0].isDataTexture,xt=[];for(let Z=0;Z<6;Z++)!kt&&!ct?xt[Z]=_(C.image[Z],!0,i.maxCubemapSize):xt[Z]=ct?C.image[Z].image:C.image[Z],xt[Z]=Pt(C,xt[Z]);const Xt=xt[0],Dt=s.convert(C.format,C.colorSpace),Mt=s.convert(C.type),Nt=M(C.internalFormat,Dt,Mt,C.colorSpace),Bt=C.isVideoTexture!==!0,le=et.__version===void 0||nt===!0,A=st.dataReady;let X=v(C,Xt);at(r.TEXTURE_CUBE_MAP,C);let q;if(kt){Bt&&le&&e.texStorage2D(r.TEXTURE_CUBE_MAP,X,Nt,Xt.width,Xt.height);for(let Z=0;Z<6;Z++){q=xt[Z].mipmaps;for(let rt=0;rt<q.length;rt++){const Tt=q[rt];C.format!==cn?Dt!==null?Bt?A&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt,0,0,Tt.width,Tt.height,Dt,Tt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt,Nt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?A&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt,0,0,Tt.width,Tt.height,Dt,Mt,Tt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt,Nt,Tt.width,Tt.height,0,Dt,Mt,Tt.data)}}}else{if(q=C.mipmaps,Bt&&le){q.length>0&&X++;const Z=It(xt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,X,Nt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ct){Bt?A&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,xt[Z].width,xt[Z].height,Dt,Mt,xt[Z].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Nt,xt[Z].width,xt[Z].height,0,Dt,Mt,xt[Z].data);for(let rt=0;rt<q.length;rt++){const Ft=q[rt].image[Z].image;Bt?A&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt+1,0,0,Ft.width,Ft.height,Dt,Mt,Ft.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt+1,Nt,Ft.width,Ft.height,0,Dt,Mt,Ft.data)}}else{Bt?A&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Dt,Mt,xt[Z]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Nt,Dt,Mt,xt[Z]);for(let rt=0;rt<q.length;rt++){const Tt=q[rt];Bt?A&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt+1,0,0,Dt,Mt,Tt.image[Z]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt+1,Nt,Dt,Mt,Tt.image[Z])}}}m(C)&&p(r.TEXTURE_CUBE_MAP),et.__version=st.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function J(D,C,$,nt,st,et){const Rt=s.convert($.format,$.colorSpace),ft=s.convert($.type),_t=M($.internalFormat,Rt,ft,$.colorSpace);if(!n.get(C).__hasExternalTextures){const ct=Math.max(1,C.width>>et),xt=Math.max(1,C.height>>et);st===r.TEXTURE_3D||st===r.TEXTURE_2D_ARRAY?e.texImage3D(st,et,_t,ct,xt,C.depth,0,Rt,ft,null):e.texImage2D(st,et,_t,ct,xt,0,Rt,ft,null)}e.bindFramebuffer(r.FRAMEBUFFER,D),Et(C)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,nt,st,n.get($).__webglTexture,0,Yt(C)):(st===r.TEXTURE_2D||st>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,nt,st,n.get($).__webglTexture,et),e.bindFramebuffer(r.FRAMEBUFFER,null)}function dt(D,C,$){if(r.bindRenderbuffer(r.RENDERBUFFER,D),C.depthBuffer){const nt=C.depthTexture,st=nt&&nt.isDepthTexture?nt.type:null,et=x(C.stencilBuffer,st),Rt=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=Yt(C);Et(C)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ft,et,C.width,C.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,ft,et,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,et,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Rt,r.RENDERBUFFER,D)}else{const nt=C.textures;for(let st=0;st<nt.length;st++){const et=nt[st],Rt=s.convert(et.format,et.colorSpace),ft=s.convert(et.type),_t=M(et.internalFormat,Rt,ft,et.colorSpace),kt=Yt(C);$&&Et(C)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,kt,_t,C.width,C.height):Et(C)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,kt,_t,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,_t,C.width,C.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ut(D,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,D),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),I(C.depthTexture,0);const nt=n.get(C.depthTexture).__webglTexture,st=Yt(C);if(C.depthTexture.format===Ki)Et(C)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,nt,0,st):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,nt,0);else if(C.depthTexture.format===is)Et(C)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,nt,0,st):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function yt(D){const C=n.get(D),$=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!C.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");ut(C.__webglFramebuffer,D)}else if($){C.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)e.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer[nt]),C.__webglDepthbuffer[nt]=r.createRenderbuffer(),dt(C.__webglDepthbuffer[nt],D,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=r.createRenderbuffer(),dt(C.__webglDepthbuffer,D,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function wt(D,C,$){const nt=n.get(D);C!==void 0&&J(nt.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),$!==void 0&&yt(D)}function At(D){const C=D.texture,$=n.get(D),nt=n.get(C);D.addEventListener("dispose",S);const st=D.textures,et=D.isWebGLCubeRenderTarget===!0,Rt=st.length>1;if(Rt||(nt.__webglTexture===void 0&&(nt.__webglTexture=r.createTexture()),nt.__version=C.version,o.memory.textures++),et){$.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(C.mipmaps&&C.mipmaps.length>0){$.__webglFramebuffer[ft]=[];for(let _t=0;_t<C.mipmaps.length;_t++)$.__webglFramebuffer[ft][_t]=r.createFramebuffer()}else $.__webglFramebuffer[ft]=r.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){$.__webglFramebuffer=[];for(let ft=0;ft<C.mipmaps.length;ft++)$.__webglFramebuffer[ft]=r.createFramebuffer()}else $.__webglFramebuffer=r.createFramebuffer();if(Rt)for(let ft=0,_t=st.length;ft<_t;ft++){const kt=n.get(st[ft]);kt.__webglTexture===void 0&&(kt.__webglTexture=r.createTexture(),o.memory.textures++)}if(D.samples>0&&Et(D)===!1){$.__webglMultisampledFramebuffer=r.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let ft=0;ft<st.length;ft++){const _t=st[ft];$.__webglColorRenderbuffer[ft]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,$.__webglColorRenderbuffer[ft]);const kt=s.convert(_t.format,_t.colorSpace),ct=s.convert(_t.type),xt=M(_t.internalFormat,kt,ct,_t.colorSpace,D.isXRRenderTarget===!0),Xt=Yt(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,Xt,xt,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.RENDERBUFFER,$.__webglColorRenderbuffer[ft])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&($.__webglDepthRenderbuffer=r.createRenderbuffer(),dt($.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(et){e.bindTexture(r.TEXTURE_CUBE_MAP,nt.__webglTexture),at(r.TEXTURE_CUBE_MAP,C);for(let ft=0;ft<6;ft++)if(C.mipmaps&&C.mipmaps.length>0)for(let _t=0;_t<C.mipmaps.length;_t++)J($.__webglFramebuffer[ft][_t],D,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,_t);else J($.__webglFramebuffer[ft],D,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(C)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let ft=0,_t=st.length;ft<_t;ft++){const kt=st[ft],ct=n.get(kt);e.bindTexture(r.TEXTURE_2D,ct.__webglTexture),at(r.TEXTURE_2D,kt),J($.__webglFramebuffer,D,kt,r.COLOR_ATTACHMENT0+ft,r.TEXTURE_2D,0),m(kt)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let ft=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ft=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ft,nt.__webglTexture),at(ft,C),C.mipmaps&&C.mipmaps.length>0)for(let _t=0;_t<C.mipmaps.length;_t++)J($.__webglFramebuffer[_t],D,C,r.COLOR_ATTACHMENT0,ft,_t);else J($.__webglFramebuffer,D,C,r.COLOR_ATTACHMENT0,ft,0);m(C)&&p(ft),e.unbindTexture()}D.depthBuffer&&yt(D)}function Kt(D){const C=D.textures;for(let $=0,nt=C.length;$<nt;$++){const st=C[$];if(m(st)){const et=D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Rt=n.get(st).__webglTexture;e.bindTexture(et,Rt),p(et),e.unbindTexture()}}}const N=[],se=[];function Wt(D){if(D.samples>0){if(Et(D)===!1){const C=D.textures,$=D.width,nt=D.height;let st=r.COLOR_BUFFER_BIT;const et=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Rt=n.get(D),ft=C.length>1;if(ft)for(let _t=0;_t<C.length;_t++)e.bindFramebuffer(r.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Rt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let _t=0;_t<C.length;_t++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(st|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(st|=r.STENCIL_BUFFER_BIT)),ft){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Rt.__webglColorRenderbuffer[_t]);const kt=n.get(C[_t]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,kt,0)}r.blitFramebuffer(0,0,$,nt,0,0,$,nt,st,r.NEAREST),c===!0&&(N.length=0,se.length=0,N.push(r.COLOR_ATTACHMENT0+_t),D.depthBuffer&&D.resolveDepthBuffer===!1&&(N.push(et),se.push(et),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,se)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,N))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ft)for(let _t=0;_t<C.length;_t++){e.bindFramebuffer(r.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.RENDERBUFFER,Rt.__webglColorRenderbuffer[_t]);const kt=n.get(C[_t]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Rt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.TEXTURE_2D,kt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){const C=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[C])}}}function Yt(D){return Math.min(i.maxSamples,D.samples)}function Et(D){const C=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function re(D){const C=o.render.frame;h.get(D)!==C&&(h.set(D,C),D.update())}function Pt(D,C){const $=D.colorSpace,nt=D.format,st=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||$!==ii&&$!==qn&&(ne.getTransfer($)===ae?(nt!==cn||st!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),C}function It(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=R,this.setTexture2D=I,this.setTexture2DArray=U,this.setTexture3D=k,this.setTextureCube=Y,this.rebindTextures=wt,this.setupRenderTarget=At,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Et}function cg(r,t){function e(n,i=qn){let s;const o=ne.getTransfer(i);if(n===Un)return r.UNSIGNED_BYTE;if(n===fo)return r.UNSIGNED_SHORT_4_4_4_4;if(n===po)return r.UNSIGNED_SHORT_5_5_5_1;if(n===nc)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===tc)return r.BYTE;if(n===ec)return r.SHORT;if(n===Es)return r.UNSIGNED_SHORT;if(n===uo)return r.INT;if(n===vi)return r.UNSIGNED_INT;if(n===Cn)return r.FLOAT;if(n===Cs)return r.HALF_FLOAT;if(n===ic)return r.ALPHA;if(n===sc)return r.RGB;if(n===cn)return r.RGBA;if(n===rc)return r.LUMINANCE;if(n===ac)return r.LUMINANCE_ALPHA;if(n===Ki)return r.DEPTH_COMPONENT;if(n===is)return r.DEPTH_STENCIL;if(n===oc)return r.RED;if(n===mo)return r.RED_INTEGER;if(n===lc)return r.RG;if(n===go)return r.RG_INTEGER;if(n===_o)return r.RGBA_INTEGER;if(n===lr||n===cr||n===hr||n===ur)if(o===ae)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===lr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===cr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===hr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ur)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===lr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===cr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===hr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ur)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wa||n===Aa||n===Ta||n===Ca)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===wa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Aa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ta)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ca)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ra||n===Pa||n===La)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ra||n===Pa)return o===ae?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===La)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ia||n===Da||n===Ua||n===Na||n===Fa||n===Oa||n===Ba||n===ka||n===za||n===Va||n===Ha||n===Ga||n===Wa||n===Xa)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ia)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Da)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ua)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Na)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fa)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oa)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ba)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ka)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===za)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Va)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ha)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ga)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wa)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xa)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===dr||n===Ya||n===qa)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===dr)return o===ae?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ya)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cc||n===$a||n===Ka||n===ja)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===dr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===$a)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ka)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ja)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ns?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class hg extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ir extends pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ug={type:"move"};class ua{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ir,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ir,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ir,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ug)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ir;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const dg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fg=`
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

}`;class pg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Qe,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Nn({vertexShader:dg,fragmentShader:fg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ze(new Ps(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mg extends bi{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=new pg,m=e.getContextAttributes();let p=null,M=null;const x=[],v=[],T=new zt;let S=null;const b=new We;b.layers.enable(1),b.viewport=new Me;const L=new We;L.layers.enable(2),L.viewport=new Me;const E=[b,L],w=new hg;w.layers.enable(1),w.layers.enable(2);let R=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let J=x[G];return J===void 0&&(J=new ua,x[G]=J),J.getTargetRaySpace()},this.getControllerGrip=function(G){let J=x[G];return J===void 0&&(J=new ua,x[G]=J),J.getGripSpace()},this.getHand=function(G){let J=x[G];return J===void 0&&(J=new ua,x[G]=J),J.getHandSpace()};function F(G){const J=v.indexOf(G.inputSource);if(J===-1)return;const dt=x[J];dt!==void 0&&(dt.update(G.inputSource,G.frame,l||o),dt.dispatchEvent({type:G.type,data:G.inputSource}))}function I(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",I),i.removeEventListener("inputsourceschange",U);for(let G=0;G<x.length;G++){const J=v[G];J!==null&&(v[G]=null,x[G].disconnect(J))}R=null,B=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,M=null,ot.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",I),i.addEventListener("inputsourceschange",U),m.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(T),i.renderState.layers===void 0){const J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,J),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new yi(f.framebufferWidth,f.framebufferHeight,{format:cn,type:Un,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,dt=null,ut=null;m.depth&&(ut=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=m.stencil?is:Ki,dt=m.stencil?ns:vi);const yt={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:s};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(yt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new yi(d.textureWidth,d.textureHeight,{format:cn,type:Un,depthTexture:new Ac(d.textureWidth,d.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),ot.setContext(i),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function U(G){for(let J=0;J<G.removed.length;J++){const dt=G.removed[J],ut=v.indexOf(dt);ut>=0&&(v[ut]=null,x[ut].disconnect(dt))}for(let J=0;J<G.added.length;J++){const dt=G.added[J];let ut=v.indexOf(dt);if(ut===-1){for(let wt=0;wt<x.length;wt++)if(wt>=v.length){v.push(dt),ut=wt;break}else if(v[wt]===null){v[wt]=dt,ut=wt;break}if(ut===-1)break}const yt=x[ut];yt&&yt.connect(dt)}}const k=new H,Y=new H;function W(G,J,dt){k.setFromMatrixPosition(J.matrixWorld),Y.setFromMatrixPosition(dt.matrixWorld);const ut=k.distanceTo(Y),yt=J.projectionMatrix.elements,wt=dt.projectionMatrix.elements,At=yt[14]/(yt[10]-1),Kt=yt[14]/(yt[10]+1),N=(yt[9]+1)/yt[5],se=(yt[9]-1)/yt[5],Wt=(yt[8]-1)/yt[0],Yt=(wt[8]+1)/wt[0],Et=At*Wt,re=At*Yt,Pt=ut/(-Wt+Yt),It=Pt*-Wt;J.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(It),G.translateZ(Pt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const D=At+Pt,C=Kt+Pt,$=Et-It,nt=re+(ut-It),st=N*Kt/C*D,et=se*Kt/C*D;G.projectionMatrix.makePerspective($,nt,st,et,D,C),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function Q(G,J){J===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(J.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;_.texture!==null&&(G.near=_.depthNear,G.far=_.depthFar),w.near=L.near=b.near=G.near,w.far=L.far=b.far=G.far,(R!==w.near||B!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),R=w.near,B=w.far,b.near=R,b.far=B,L.near=R,L.far=B,b.updateProjectionMatrix(),L.updateProjectionMatrix(),G.updateProjectionMatrix());const J=G.parent,dt=w.cameras;Q(w,J);for(let ut=0;ut<dt.length;ut++)Q(dt[ut],J);dt.length===2?W(w,b,L):w.projectionMatrix.copy(b.projectionMatrix),it(G,w,J)};function it(G,J,dt){dt===null?G.matrix.copy(J.matrixWorld):(G.matrix.copy(dt.matrixWorld),G.matrix.invert(),G.matrix.multiply(J.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(J.projectionMatrix),G.projectionMatrixInverse.copy(J.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=ss*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(G){c=G,d!==null&&(d.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(w)};let at=null;function vt(G,J){if(h=J.getViewerPose(l||o),g=J,h!==null){const dt=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let ut=!1;dt.length!==w.cameras.length&&(w.cameras.length=0,ut=!0);for(let wt=0;wt<dt.length;wt++){const At=dt[wt];let Kt=null;if(f!==null)Kt=f.getViewport(At);else{const se=u.getViewSubImage(d,At);Kt=se.viewport,wt===0&&(t.setRenderTargetTextures(M,se.colorTexture,d.ignoreDepthValues?void 0:se.depthStencilTexture),t.setRenderTarget(M))}let N=E[wt];N===void 0&&(N=new We,N.layers.enable(wt),N.viewport=new Me,E[wt]=N),N.matrix.fromArray(At.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(At.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),wt===0&&(w.matrix.copy(N.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ut===!0&&w.cameras.push(N)}const yt=i.enabledFeatures;if(yt&&yt.includes("depth-sensing")){const wt=u.getDepthInformation(dt[0]);wt&&wt.isValid&&wt.texture&&_.init(t,wt,i.renderState)}}for(let dt=0;dt<x.length;dt++){const ut=v[dt],yt=x[dt];ut!==null&&yt!==void 0&&yt.update(ut,J,l||o)}at&&at(G,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const ot=new Ec;ot.setAnimationLoop(vt),this.setAnimationLoop=function(G){at=G},this.dispose=function(){}}}const ui=new xn,gg=new de;function _g(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Mc(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,M,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Oe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Oe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),x=M.envMap,v=M.envMapRotation;x&&(m.envMap.value=x,ui.copy(v),ui.x*=-1,ui.y*=-1,ui.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),m.envMapRotation.value.setFromMatrix4(gg.makeRotationFromEuler(ui)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Oe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function xg(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,x){const v=x.program;n.uniformBlockBinding(M,v)}function l(M,x){let v=i[M.id];v===void 0&&(g(M),v=h(M),i[M.id]=v,M.addEventListener("dispose",m));const T=x.program;n.updateUBOMapping(M,T);const S=t.render.frame;s[M.id]!==S&&(d(M),s[M.id]=S)}function h(M){const x=u();M.__bindingPointIndex=x;const v=r.createBuffer(),T=M.__size,S=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,T,S),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,v),v}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const x=i[M.id],v=M.uniforms,T=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let S=0,b=v.length;S<b;S++){const L=Array.isArray(v[S])?v[S]:[v[S]];for(let E=0,w=L.length;E<w;E++){const R=L[E];if(f(R,S,E,T)===!0){const B=R.__offset,F=Array.isArray(R.value)?R.value:[R.value];let I=0;for(let U=0;U<F.length;U++){const k=F[U],Y=_(k);typeof k=="number"||typeof k=="boolean"?(R.__data[0]=k,r.bufferSubData(r.UNIFORM_BUFFER,B+I,R.__data)):k.isMatrix3?(R.__data[0]=k.elements[0],R.__data[1]=k.elements[1],R.__data[2]=k.elements[2],R.__data[3]=0,R.__data[4]=k.elements[3],R.__data[5]=k.elements[4],R.__data[6]=k.elements[5],R.__data[7]=0,R.__data[8]=k.elements[6],R.__data[9]=k.elements[7],R.__data[10]=k.elements[8],R.__data[11]=0):(k.toArray(R.__data,I),I+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,B,R.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(M,x,v,T){const S=M.value,b=x+"_"+v;if(T[b]===void 0)return typeof S=="number"||typeof S=="boolean"?T[b]=S:T[b]=S.clone(),!0;{const L=T[b];if(typeof S=="number"||typeof S=="boolean"){if(L!==S)return T[b]=S,!0}else if(L.equals(S)===!1)return L.copy(S),!0}return!1}function g(M){const x=M.uniforms;let v=0;const T=16;for(let b=0,L=x.length;b<L;b++){const E=Array.isArray(x[b])?x[b]:[x[b]];for(let w=0,R=E.length;w<R;w++){const B=E[w],F=Array.isArray(B.value)?B.value:[B.value];for(let I=0,U=F.length;I<U;I++){const k=F[I],Y=_(k),W=v%T,Q=W%Y.boundary,it=W+Q;v+=Q,it!==0&&T-it<Y.storage&&(v+=T-it),B.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=v,v+=Y.storage}}}const S=v%T;return S>0&&(v+=T-S),M.__size=v,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){const x=M.target;x.removeEventListener("dispose",m);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function p(){for(const M in i)r.deleteBuffer(i[M]);o=[],i={},s={}}return{bind:c,update:l,dispose:p}}class vg{constructor(t={}){const{canvas:e=lu(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fn,this.toneMapping=Jn,this.toneMappingExposure=1;const x=this;let v=!1,T=0,S=0,b=null,L=-1,E=null;const w=new Me,R=new Me;let B=null;const F=new Zt(0);let I=0,U=e.width,k=e.height,Y=1,W=null,Q=null;const it=new Me(0,0,U,k),at=new Me(0,0,U,k);let vt=!1;const ot=new Mo;let G=!1,J=!1;const dt=new de,ut=new H,yt=new Me,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let At=!1;function Kt(){return b===null?Y:1}let N=n;function se(P,z){return e.getContext(P,z)}try{const P={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ho}`),e.addEventListener("webglcontextlost",q,!1),e.addEventListener("webglcontextrestored",Z,!1),e.addEventListener("webglcontextcreationerror",rt,!1),N===null){const z="webgl2";if(N=se(z,P),N===null)throw se(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Wt,Yt,Et,re,Pt,It,D,C,$,nt,st,et,Rt,ft,_t,kt,ct,xt,Xt,Dt,Mt,Nt,Bt,le;function A(){Wt=new wp(N),Wt.init(),Nt=new cg(N,Wt),Yt=new vp(N,Wt,t,Nt),Et=new ag(N),re=new Cp(N),Pt=new Ym,It=new lg(N,Wt,Et,Pt,Yt,Nt,re),D=new Mp(x),C=new Ep(x),$=new Uu(N),Bt=new _p(N,$),nt=new Ap(N,$,re,Bt),st=new Pp(N,nt,$,re),Xt=new Rp(N,Yt,It),kt=new yp(Pt),et=new Xm(x,D,C,Wt,Yt,Bt,kt),Rt=new _g(x,Pt),ft=new $m,_t=new tg(Wt),xt=new gp(x,D,C,Et,st,d,c),ct=new rg(x,st,Yt),le=new xg(N,re,Yt,Et),Dt=new xp(N,Wt,re),Mt=new Tp(N,Wt,re),re.programs=et.programs,x.capabilities=Yt,x.extensions=Wt,x.properties=Pt,x.renderLists=ft,x.shadowMap=ct,x.state=Et,x.info=re}A();const X=new mg(x,N);this.xr=X,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const P=Wt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Wt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(P){P!==void 0&&(Y=P,this.setSize(U,k,!1))},this.getSize=function(P){return P.set(U,k)},this.setSize=function(P,z,K=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=P,k=z,e.width=Math.floor(P*Y),e.height=Math.floor(z*Y),K===!0&&(e.style.width=P+"px",e.style.height=z+"px"),this.setViewport(0,0,P,z)},this.getDrawingBufferSize=function(P){return P.set(U*Y,k*Y).floor()},this.setDrawingBufferSize=function(P,z,K){U=P,k=z,Y=K,e.width=Math.floor(P*K),e.height=Math.floor(z*K),this.setViewport(0,0,P,z)},this.getCurrentViewport=function(P){return P.copy(w)},this.getViewport=function(P){return P.copy(it)},this.setViewport=function(P,z,K,j){P.isVector4?it.set(P.x,P.y,P.z,P.w):it.set(P,z,K,j),Et.viewport(w.copy(it).multiplyScalar(Y).round())},this.getScissor=function(P){return P.copy(at)},this.setScissor=function(P,z,K,j){P.isVector4?at.set(P.x,P.y,P.z,P.w):at.set(P,z,K,j),Et.scissor(R.copy(at).multiplyScalar(Y).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(P){Et.setScissorTest(vt=P)},this.setOpaqueSort=function(P){W=P},this.setTransparentSort=function(P){Q=P},this.getClearColor=function(P){return P.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor.apply(xt,arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha.apply(xt,arguments)},this.clear=function(P=!0,z=!0,K=!0){let j=0;if(P){let V=!1;if(b!==null){const ht=b.texture.format;V=ht===_o||ht===go||ht===mo}if(V){const ht=b.texture.type,gt=ht===Un||ht===vi||ht===Es||ht===ns||ht===fo||ht===po,St=xt.getClearColor(),bt=xt.getClearAlpha(),Ut=St.r,Ot=St.g,Lt=St.b;gt?(f[0]=Ut,f[1]=Ot,f[2]=Lt,f[3]=bt,N.clearBufferuiv(N.COLOR,0,f)):(g[0]=Ut,g[1]=Ot,g[2]=Lt,g[3]=bt,N.clearBufferiv(N.COLOR,0,g))}else j|=N.COLOR_BUFFER_BIT}z&&(j|=N.DEPTH_BUFFER_BIT),K&&(j|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",q,!1),e.removeEventListener("webglcontextrestored",Z,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),ft.dispose(),_t.dispose(),Pt.dispose(),D.dispose(),C.dispose(),st.dispose(),Bt.dispose(),le.dispose(),et.dispose(),X.dispose(),X.removeEventListener("sessionstart",me),X.removeEventListener("sessionend",Fn),we.stop()};function q(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const P=re.autoReset,z=ct.enabled,K=ct.autoUpdate,j=ct.needsUpdate,V=ct.type;A(),re.autoReset=P,ct.enabled=z,ct.autoUpdate=K,ct.needsUpdate=j,ct.type=V}function rt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Tt(P){const z=P.target;z.removeEventListener("dispose",Tt),Ft(z)}function Ft(P){fe(P),Pt.remove(P)}function fe(P){const z=Pt.get(P).programs;z!==void 0&&(z.forEach(function(K){et.releaseProgram(K)}),P.isShaderMaterial&&et.releaseShaderCache(P))}this.renderBufferDirect=function(P,z,K,j,V,ht){z===null&&(z=wt);const gt=V.isMesh&&V.matrixWorld.determinant()<0,St=Xc(P,z,K,j,V);Et.setMaterial(j,gt);let bt=K.index,Ut=1;if(j.wireframe===!0){if(bt=nt.getWireframeAttribute(K),bt===void 0)return;Ut=2}const Ot=K.drawRange,Lt=K.attributes.position;let Qt=Ot.start*Ut,he=(Ot.start+Ot.count)*Ut;ht!==null&&(Qt=Math.max(Qt,ht.start*Ut),he=Math.min(he,(ht.start+ht.count)*Ut)),bt!==null?(Qt=Math.max(Qt,0),he=Math.min(he,bt.count)):Lt!=null&&(Qt=Math.max(Qt,0),he=Math.min(he,Lt.count));const ue=he-Qt;if(ue<0||ue===1/0)return;Bt.setup(V,j,St,K,bt);let Be,te=Dt;if(bt!==null&&(Be=$.get(bt),te=Mt,te.setIndex(Be)),V.isMesh)j.wireframe===!0?(Et.setLineWidth(j.wireframeLinewidth*Kt()),te.setMode(N.LINES)):te.setMode(N.TRIANGLES);else if(V.isLine){let Ct=j.linewidth;Ct===void 0&&(Ct=1),Et.setLineWidth(Ct*Kt()),V.isLineSegments?te.setMode(N.LINES):V.isLineLoop?te.setMode(N.LINE_LOOP):te.setMode(N.LINE_STRIP)}else V.isPoints?te.setMode(N.POINTS):V.isSprite&&te.setMode(N.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)te.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Wt.get("WEBGL_multi_draw"))te.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ct=V._multiDrawStarts,Ae=V._multiDrawCounts,ee=V._multiDrawCount,en=bt?$.get(bt).bytesPerElement:1,wi=Pt.get(j).currentProgram.getUniforms();for(let ke=0;ke<ee;ke++)wi.setValue(N,"_gl_DrawID",ke),te.render(Ct[ke]/en,Ae[ke])}else if(V.isInstancedMesh)te.renderInstances(Qt,ue,V.count);else if(K.isInstancedBufferGeometry){const Ct=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ae=Math.min(K.instanceCount,Ct);te.renderInstances(Qt,ue,Ae)}else te.render(Qt,ue)};function xe(P,z,K){P.transparent===!0&&P.side===on&&P.forceSinglePass===!1?(P.side=Oe,P.needsUpdate=!0,Us(P,z,K),P.side=ti,P.needsUpdate=!0,Us(P,z,K),P.side=on):Us(P,z,K)}this.compile=function(P,z,K=null){K===null&&(K=P),m=_t.get(K),m.init(z),M.push(m),K.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),P!==K&&P.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights();const j=new Set;return P.traverse(function(V){const ht=V.material;if(ht)if(Array.isArray(ht))for(let gt=0;gt<ht.length;gt++){const St=ht[gt];xe(St,K,V),j.add(St)}else xe(ht,K,V),j.add(ht)}),M.pop(),m=null,j},this.compileAsync=function(P,z,K=null){const j=this.compile(P,z,K);return new Promise(V=>{function ht(){if(j.forEach(function(gt){Pt.get(gt).currentProgram.isReady()&&j.delete(gt)}),j.size===0){V(P);return}setTimeout(ht,10)}Wt.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let jt=null;function ve(P){jt&&jt(P)}function me(){we.stop()}function Fn(){we.start()}const we=new Ec;we.setAnimationLoop(ve),typeof self<"u"&&we.setContext(self),this.setAnimationLoop=function(P){jt=P,X.setAnimationLoop(P),P===null?we.stop():we.start()},X.addEventListener("sessionstart",me),X.addEventListener("sessionend",Fn),this.render=function(P,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(z),z=X.getCamera()),P.isScene===!0&&P.onBeforeRender(x,P,z,b),m=_t.get(P,M.length),m.init(z),M.push(m),dt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ot.setFromProjectionMatrix(dt),J=this.localClippingEnabled,G=kt.init(this.clippingPlanes,J),_=ft.get(P,p.length),_.init(),p.push(_),X.enabled===!0&&X.isPresenting===!0){const ht=x.xr.getDepthSensingMesh();ht!==null&&Mn(ht,z,-1/0,x.sortObjects)}Mn(P,z,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(W,Q),At=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,At&&xt.addToRenderList(_,P),this.info.render.frame++,G===!0&&kt.beginShadows();const K=m.state.shadowsArray;ct.render(K,P,z),G===!0&&kt.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=_.opaque,V=_.transmissive;if(m.setupLights(),z.isArrayCamera){const ht=z.cameras;if(V.length>0)for(let gt=0,St=ht.length;gt<St;gt++){const bt=ht[gt];hs(j,V,P,bt)}At&&xt.render(P);for(let gt=0,St=ht.length;gt<St;gt++){const bt=ht[gt];ri(_,P,bt,bt.viewport)}}else V.length>0&&hs(j,V,P,z),At&&xt.render(P),ri(_,P,z);b!==null&&(It.updateMultisampleRenderTarget(b),It.updateRenderTargetMipmap(b)),P.isScene===!0&&P.onAfterRender(x,P,z),Bt.resetDefaultState(),L=-1,E=null,M.pop(),M.length>0?(m=M[M.length-1],G===!0&&kt.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Mn(P,z,K,j){if(P.visible===!1)return;if(P.layers.test(z.layers)){if(P.isGroup)K=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(z);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||ot.intersectsSprite(P)){j&&yt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(dt);const gt=st.update(P),St=P.material;St.visible&&_.push(P,gt,St,K,yt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||ot.intersectsObject(P))){const gt=st.update(P),St=P.material;if(j&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),yt.copy(P.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),yt.copy(gt.boundingSphere.center)),yt.applyMatrix4(P.matrixWorld).applyMatrix4(dt)),Array.isArray(St)){const bt=gt.groups;for(let Ut=0,Ot=bt.length;Ut<Ot;Ut++){const Lt=bt[Ut],Qt=St[Lt.materialIndex];Qt&&Qt.visible&&_.push(P,gt,Qt,K,yt.z,Lt)}}else St.visible&&_.push(P,gt,St,K,yt.z,null)}}const ht=P.children;for(let gt=0,St=ht.length;gt<St;gt++)Mn(ht[gt],z,K,j)}function ri(P,z,K,j){const V=P.opaque,ht=P.transmissive,gt=P.transparent;m.setupLightsView(K),G===!0&&kt.setGlobalState(x.clippingPlanes,K),j&&Et.viewport(w.copy(j)),V.length>0&&Ds(V,z,K),ht.length>0&&Ds(ht,z,K),gt.length>0&&Ds(gt,z,K),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function hs(P,z,K,j){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[j.id]===void 0&&(m.state.transmissionRenderTarget[j.id]=new yi(1,1,{generateMipmaps:!0,type:Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float")?Cs:Un,minFilter:gi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));const ht=m.state.transmissionRenderTarget[j.id],gt=j.viewport||w;ht.setSize(gt.z,gt.w);const St=x.getRenderTarget();x.setRenderTarget(ht),x.getClearColor(F),I=x.getClearAlpha(),I<1&&x.setClearColor(16777215,.5),x.clear(),At&&xt.render(K);const bt=x.toneMapping;x.toneMapping=Jn;const Ut=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),m.setupLightsView(j),G===!0&&kt.setGlobalState(x.clippingPlanes,j),Ds(P,K,j),It.updateMultisampleRenderTarget(ht),It.updateRenderTargetMipmap(ht),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let Lt=0,Qt=z.length;Lt<Qt;Lt++){const he=z[Lt],ue=he.object,Be=he.geometry,te=he.material,Ct=he.group;if(te.side===on&&ue.layers.test(j.layers)){const Ae=te.side;te.side=Oe,te.needsUpdate=!0,Ro(ue,K,j,Be,te,Ct),te.side=Ae,te.needsUpdate=!0,Ot=!0}}Ot===!0&&(It.updateMultisampleRenderTarget(ht),It.updateRenderTargetMipmap(ht))}x.setRenderTarget(St),x.setClearColor(F,I),Ut!==void 0&&(j.viewport=Ut),x.toneMapping=bt}function Ds(P,z,K){const j=z.isScene===!0?z.overrideMaterial:null;for(let V=0,ht=P.length;V<ht;V++){const gt=P[V],St=gt.object,bt=gt.geometry,Ut=j===null?gt.material:j,Ot=gt.group;St.layers.test(K.layers)&&Ro(St,z,K,bt,Ut,Ot)}}function Ro(P,z,K,j,V,ht){P.onBeforeRender(x,z,K,j,V,ht),P.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),V.transparent===!0&&V.side===on&&V.forceSinglePass===!1?(V.side=Oe,V.needsUpdate=!0,x.renderBufferDirect(K,z,j,V,P,ht),V.side=ti,V.needsUpdate=!0,x.renderBufferDirect(K,z,j,V,P,ht),V.side=on):x.renderBufferDirect(K,z,j,V,P,ht),P.onAfterRender(x,z,K,j,V,ht)}function Us(P,z,K){z.isScene!==!0&&(z=wt);const j=Pt.get(P),V=m.state.lights,ht=m.state.shadowsArray,gt=V.state.version,St=et.getParameters(P,V.state,ht,z,K),bt=et.getProgramCacheKey(St);let Ut=j.programs;j.environment=P.isMeshStandardMaterial?z.environment:null,j.fog=z.fog,j.envMap=(P.isMeshStandardMaterial?C:D).get(P.envMap||j.environment),j.envMapRotation=j.environment!==null&&P.envMap===null?z.environmentRotation:P.envMapRotation,Ut===void 0&&(P.addEventListener("dispose",Tt),Ut=new Map,j.programs=Ut);let Ot=Ut.get(bt);if(Ot!==void 0){if(j.currentProgram===Ot&&j.lightsStateVersion===gt)return Lo(P,St),Ot}else St.uniforms=et.getUniforms(P),P.onBeforeCompile(St,x),Ot=et.acquireProgram(St,bt),Ut.set(bt,Ot),j.uniforms=St.uniforms;const Lt=j.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Lt.clippingPlanes=kt.uniform),Lo(P,St),j.needsLights=qc(P),j.lightsStateVersion=gt,j.needsLights&&(Lt.ambientLightColor.value=V.state.ambient,Lt.lightProbe.value=V.state.probe,Lt.directionalLights.value=V.state.directional,Lt.directionalLightShadows.value=V.state.directionalShadow,Lt.spotLights.value=V.state.spot,Lt.spotLightShadows.value=V.state.spotShadow,Lt.rectAreaLights.value=V.state.rectArea,Lt.ltc_1.value=V.state.rectAreaLTC1,Lt.ltc_2.value=V.state.rectAreaLTC2,Lt.pointLights.value=V.state.point,Lt.pointLightShadows.value=V.state.pointShadow,Lt.hemisphereLights.value=V.state.hemi,Lt.directionalShadowMap.value=V.state.directionalShadowMap,Lt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Lt.spotShadowMap.value=V.state.spotShadowMap,Lt.spotLightMatrix.value=V.state.spotLightMatrix,Lt.spotLightMap.value=V.state.spotLightMap,Lt.pointShadowMap.value=V.state.pointShadowMap,Lt.pointShadowMatrix.value=V.state.pointShadowMatrix),j.currentProgram=Ot,j.uniformsList=null,Ot}function Po(P){if(P.uniformsList===null){const z=P.currentProgram.getUniforms();P.uniformsList=pr.seqWithValue(z.seq,P.uniforms)}return P.uniformsList}function Lo(P,z){const K=Pt.get(P);K.outputColorSpace=z.outputColorSpace,K.batching=z.batching,K.batchingColor=z.batchingColor,K.instancing=z.instancing,K.instancingColor=z.instancingColor,K.instancingMorph=z.instancingMorph,K.skinning=z.skinning,K.morphTargets=z.morphTargets,K.morphNormals=z.morphNormals,K.morphColors=z.morphColors,K.morphTargetsCount=z.morphTargetsCount,K.numClippingPlanes=z.numClippingPlanes,K.numIntersection=z.numClipIntersection,K.vertexAlphas=z.vertexAlphas,K.vertexTangents=z.vertexTangents,K.toneMapping=z.toneMapping}function Xc(P,z,K,j,V){z.isScene!==!0&&(z=wt),It.resetTextureUnits();const ht=z.fog,gt=j.isMeshStandardMaterial?z.environment:null,St=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:ii,bt=(j.isMeshStandardMaterial?C:D).get(j.envMap||gt),Ut=j.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ot=!!K.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Lt=!!K.morphAttributes.position,Qt=!!K.morphAttributes.normal,he=!!K.morphAttributes.color;let ue=Jn;j.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(ue=x.toneMapping);const Be=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,te=Be!==void 0?Be.length:0,Ct=Pt.get(j),Ae=m.state.lights;if(G===!0&&(J===!0||P!==E)){const Ye=P===E&&j.id===L;kt.setState(j,P,Ye)}let ee=!1;j.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==Ae.state.version||Ct.outputColorSpace!==St||V.isBatchedMesh&&Ct.batching===!1||!V.isBatchedMesh&&Ct.batching===!0||V.isBatchedMesh&&Ct.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ct.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ct.instancing===!1||!V.isInstancedMesh&&Ct.instancing===!0||V.isSkinnedMesh&&Ct.skinning===!1||!V.isSkinnedMesh&&Ct.skinning===!0||V.isInstancedMesh&&Ct.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ct.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ct.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ct.instancingMorph===!1&&V.morphTexture!==null||Ct.envMap!==bt||j.fog===!0&&Ct.fog!==ht||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==kt.numPlanes||Ct.numIntersection!==kt.numIntersection)||Ct.vertexAlphas!==Ut||Ct.vertexTangents!==Ot||Ct.morphTargets!==Lt||Ct.morphNormals!==Qt||Ct.morphColors!==he||Ct.toneMapping!==ue||Ct.morphTargetsCount!==te)&&(ee=!0):(ee=!0,Ct.__version=j.version);let en=Ct.currentProgram;ee===!0&&(en=Us(j,z,V));let wi=!1,ke=!1,Or=!1;const ge=en.getUniforms(),On=Ct.uniforms;if(Et.useProgram(en.program)&&(wi=!0,ke=!0,Or=!0),j.id!==L&&(L=j.id,ke=!0),wi||E!==P){ge.setValue(N,"projectionMatrix",P.projectionMatrix),ge.setValue(N,"viewMatrix",P.matrixWorldInverse);const Ye=ge.map.cameraPosition;Ye!==void 0&&Ye.setValue(N,ut.setFromMatrixPosition(P.matrixWorld)),Yt.logarithmicDepthBuffer&&ge.setValue(N,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&ge.setValue(N,"isOrthographic",P.isOrthographicCamera===!0),E!==P&&(E=P,ke=!0,Or=!0)}if(V.isSkinnedMesh){ge.setOptional(N,V,"bindMatrix"),ge.setOptional(N,V,"bindMatrixInverse");const Ye=V.skeleton;Ye&&(Ye.boneTexture===null&&Ye.computeBoneTexture(),ge.setValue(N,"boneTexture",Ye.boneTexture,It))}V.isBatchedMesh&&(ge.setOptional(N,V,"batchingTexture"),ge.setValue(N,"batchingTexture",V._matricesTexture,It),ge.setOptional(N,V,"batchingIdTexture"),ge.setValue(N,"batchingIdTexture",V._indirectTexture,It),ge.setOptional(N,V,"batchingColorTexture"),V._colorsTexture!==null&&ge.setValue(N,"batchingColorTexture",V._colorsTexture,It));const Br=K.morphAttributes;if((Br.position!==void 0||Br.normal!==void 0||Br.color!==void 0)&&Xt.update(V,K,en),(ke||Ct.receiveShadow!==V.receiveShadow)&&(Ct.receiveShadow=V.receiveShadow,ge.setValue(N,"receiveShadow",V.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(On.envMap.value=bt,On.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&z.environment!==null&&(On.envMapIntensity.value=z.environmentIntensity),ke&&(ge.setValue(N,"toneMappingExposure",x.toneMappingExposure),Ct.needsLights&&Yc(On,Or),ht&&j.fog===!0&&Rt.refreshFogUniforms(On,ht),Rt.refreshMaterialUniforms(On,j,Y,k,m.state.transmissionRenderTarget[P.id]),pr.upload(N,Po(Ct),On,It)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(pr.upload(N,Po(Ct),On,It),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&ge.setValue(N,"center",V.center),ge.setValue(N,"modelViewMatrix",V.modelViewMatrix),ge.setValue(N,"normalMatrix",V.normalMatrix),ge.setValue(N,"modelMatrix",V.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Ye=j.uniformsGroups;for(let kr=0,$c=Ye.length;kr<$c;kr++){const Io=Ye[kr];le.update(Io,en),le.bind(Io,en)}}return en}function Yc(P,z){P.ambientLightColor.needsUpdate=z,P.lightProbe.needsUpdate=z,P.directionalLights.needsUpdate=z,P.directionalLightShadows.needsUpdate=z,P.pointLights.needsUpdate=z,P.pointLightShadows.needsUpdate=z,P.spotLights.needsUpdate=z,P.spotLightShadows.needsUpdate=z,P.rectAreaLights.needsUpdate=z,P.hemisphereLights.needsUpdate=z}function qc(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(P,z,K){Pt.get(P.texture).__webglTexture=z,Pt.get(P.depthTexture).__webglTexture=K;const j=Pt.get(P);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=K===void 0,j.__autoAllocateDepthBuffer||Wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,z){const K=Pt.get(P);K.__webglFramebuffer=z,K.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(P,z=0,K=0){b=P,T=z,S=K;let j=!0,V=null,ht=!1,gt=!1;if(P){const bt=Pt.get(P);bt.__useDefaultFramebuffer!==void 0?(Et.bindFramebuffer(N.FRAMEBUFFER,null),j=!1):bt.__webglFramebuffer===void 0?It.setupRenderTarget(P):bt.__hasExternalTextures&&It.rebindTextures(P,Pt.get(P.texture).__webglTexture,Pt.get(P.depthTexture).__webglTexture);const Ut=P.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(gt=!0);const Ot=Pt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ot[z])?V=Ot[z][K]:V=Ot[z],ht=!0):P.samples>0&&It.useMultisampledRTT(P)===!1?V=Pt.get(P).__webglMultisampledFramebuffer:Array.isArray(Ot)?V=Ot[K]:V=Ot,w.copy(P.viewport),R.copy(P.scissor),B=P.scissorTest}else w.copy(it).multiplyScalar(Y).floor(),R.copy(at).multiplyScalar(Y).floor(),B=vt;if(Et.bindFramebuffer(N.FRAMEBUFFER,V)&&j&&Et.drawBuffers(P,V),Et.viewport(w),Et.scissor(R),Et.setScissorTest(B),ht){const bt=Pt.get(P.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+z,bt.__webglTexture,K)}else if(gt){const bt=Pt.get(P.texture),Ut=z||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,bt.__webglTexture,K||0,Ut)}L=-1},this.readRenderTargetPixels=function(P,z,K,j,V,ht,gt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=Pt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&gt!==void 0&&(St=St[gt]),St){Et.bindFramebuffer(N.FRAMEBUFFER,St);try{const bt=P.texture,Ut=bt.format,Ot=bt.type;if(!Yt.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Yt.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=P.width-j&&K>=0&&K<=P.height-V&&N.readPixels(z,K,j,V,Nt.convert(Ut),Nt.convert(Ot),ht)}finally{const bt=b!==null?Pt.get(b).__webglFramebuffer:null;Et.bindFramebuffer(N.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(P,z,K,j,V,ht,gt){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=Pt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&gt!==void 0&&(St=St[gt]),St){Et.bindFramebuffer(N.FRAMEBUFFER,St);try{const bt=P.texture,Ut=bt.format,Ot=bt.type;if(!Yt.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Yt.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=P.width-j&&K>=0&&K<=P.height-V){const Lt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Lt),N.bufferData(N.PIXEL_PACK_BUFFER,ht.byteLength,N.STREAM_READ),N.readPixels(z,K,j,V,Nt.convert(Ut),Nt.convert(Ot),0),N.flush();const Qt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);await cu(N,Qt,4);try{N.bindBuffer(N.PIXEL_PACK_BUFFER,Lt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ht)}finally{N.deleteBuffer(Lt),N.deleteSync(Qt)}return ht}}finally{const bt=b!==null?Pt.get(b).__webglFramebuffer:null;Et.bindFramebuffer(N.FRAMEBUFFER,bt)}}},this.copyFramebufferToTexture=function(P,z=null,K=0){P.isTexture!==!0&&(ji("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,P=arguments[1]);const j=Math.pow(2,-K),V=Math.floor(P.image.width*j),ht=Math.floor(P.image.height*j),gt=z!==null?z.x:0,St=z!==null?z.y:0;It.setTexture2D(P,0),N.copyTexSubImage2D(N.TEXTURE_2D,K,0,0,gt,St,V,ht),Et.unbindTexture()},this.copyTextureToTexture=function(P,z,K=null,j=null,V=0){P.isTexture!==!0&&(ji("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,P=arguments[1],z=arguments[2],V=arguments[3]||0,K=null);let ht,gt,St,bt,Ut,Ot;K!==null?(ht=K.max.x-K.min.x,gt=K.max.y-K.min.y,St=K.min.x,bt=K.min.y):(ht=P.image.width,gt=P.image.height,St=0,bt=0),j!==null?(Ut=j.x,Ot=j.y):(Ut=0,Ot=0);const Lt=Nt.convert(z.format),Qt=Nt.convert(z.type);It.setTexture2D(z,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,z.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,z.unpackAlignment);const he=N.getParameter(N.UNPACK_ROW_LENGTH),ue=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Be=N.getParameter(N.UNPACK_SKIP_PIXELS),te=N.getParameter(N.UNPACK_SKIP_ROWS),Ct=N.getParameter(N.UNPACK_SKIP_IMAGES),Ae=P.isCompressedTexture?P.mipmaps[V]:P.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,Ae.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ae.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,St),N.pixelStorei(N.UNPACK_SKIP_ROWS,bt),P.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,V,Ut,Ot,ht,gt,Lt,Qt,Ae.data):P.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,V,Ut,Ot,Ae.width,Ae.height,Lt,Ae.data):N.texSubImage2D(N.TEXTURE_2D,V,Ut,Ot,ht,gt,Lt,Qt,Ae),N.pixelStorei(N.UNPACK_ROW_LENGTH,he),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ue),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Be),N.pixelStorei(N.UNPACK_SKIP_ROWS,te),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ct),V===0&&z.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Et.unbindTexture()},this.copyTextureToTexture3D=function(P,z,K=null,j=null,V=0){P.isTexture!==!0&&(ji("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,j=arguments[1]||null,P=arguments[2],z=arguments[3],V=arguments[4]||0);let ht,gt,St,bt,Ut,Ot,Lt,Qt,he;const ue=P.isCompressedTexture?P.mipmaps[V]:P.image;K!==null?(ht=K.max.x-K.min.x,gt=K.max.y-K.min.y,St=K.max.z-K.min.z,bt=K.min.x,Ut=K.min.y,Ot=K.min.z):(ht=ue.width,gt=ue.height,St=ue.depth,bt=0,Ut=0,Ot=0),j!==null?(Lt=j.x,Qt=j.y,he=j.z):(Lt=0,Qt=0,he=0);const Be=Nt.convert(z.format),te=Nt.convert(z.type);let Ct;if(z.isData3DTexture)It.setTexture3D(z,0),Ct=N.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)It.setTexture2DArray(z,0),Ct=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,z.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,z.unpackAlignment);const Ae=N.getParameter(N.UNPACK_ROW_LENGTH),ee=N.getParameter(N.UNPACK_IMAGE_HEIGHT),en=N.getParameter(N.UNPACK_SKIP_PIXELS),wi=N.getParameter(N.UNPACK_SKIP_ROWS),ke=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ue.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ue.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,bt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ut),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ot),P.isDataTexture||P.isData3DTexture?N.texSubImage3D(Ct,V,Lt,Qt,he,ht,gt,St,Be,te,ue.data):z.isCompressedArrayTexture?N.compressedTexSubImage3D(Ct,V,Lt,Qt,he,ht,gt,St,Be,ue.data):N.texSubImage3D(Ct,V,Lt,Qt,he,ht,gt,St,Be,te,ue),N.pixelStorei(N.UNPACK_ROW_LENGTH,Ae),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ee),N.pixelStorei(N.UNPACK_SKIP_PIXELS,en),N.pixelStorei(N.UNPACK_SKIP_ROWS,wi),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ke),V===0&&z.generateMipmaps&&N.generateMipmap(Ct),Et.unbindTexture()},this.initRenderTarget=function(P){Pt.get(P).__webglFramebuffer===void 0&&It.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?It.setTextureCube(P,0):P.isData3DTexture?It.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?It.setTexture2DArray(P,0):It.setTexture2D(P,0),Et.unbindTexture()},this.resetState=function(){T=0,S=0,b=null,Et.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===xo?"display-p3":"srgb",e.unpackColorSpace=ne.workingColorSpace===Ir?"display-p3":"srgb"}}class yg extends pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Mg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Za,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ln()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return ji("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Le=new H;class Ms{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ln(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ie(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ln(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ln(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ln(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ln(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),i=ie(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),i=ie(i,this.array),s=ie(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new Je(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ms(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Lc extends In{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const br=new H,Er=new H,Cl=new de,gs=new yo,sr=new Dr,da=new H,Rl=new H;class Sg extends pe{constructor(t=new vn,e=new Lc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)br.fromBufferAttribute(e,i-1),Er.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=br.distanceTo(Er);t.setAttribute("lineDistance",new gn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere),sr.applyMatrix4(i),sr.radius+=s,t.ray.intersectsSphere(sr)===!1)return;Cl.copy(i).invert(),gs.copy(t.ray).applyMatrix4(Cl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=h.getX(_),M=h.getX(_+1),x=rr(this,t,gs,c,p,M);x&&e.push(x)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=rr(this,t,gs,c,_,m);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=rr(this,t,gs,c,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=rr(this,t,gs,c,g-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function rr(r,t,e,n,i,s){const o=r.geometry.attributes.position;if(br.fromBufferAttribute(o,i),Er.fromBufferAttribute(o,s),e.distanceSqToSegment(br,Er,da,Rl)>n)return;da.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(da);if(!(c<t.near||c>t.far))return{distance:c,point:Rl.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,object:r}}const Pl=new H,Ll=new H;class bg extends Sg{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Pl.fromBufferAttribute(e,i),Ll.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Pl.distanceTo(Ll);t.setAttribute("lineDistance",new gn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Eg extends Qe{constructor(t,e,n,i,s,o,a,c,l){super(t,e,n,i,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ic extends In{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hc,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class bo extends pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const fa=new de,Il=new H,Dl=new H;class Dc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mo,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Il.setFromMatrixPosition(t.matrixWorld),e.position.copy(Il),Dl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Dl),e.updateMatrixWorld(),fa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class wg extends Dc{constructor(){super(new We(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=ss*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Ag extends bo{constructor(t,e,n=0,i=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.target=new pe,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new wg}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Tg extends Dc{constructor(){super(new wc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cg extends bo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.target=new pe,this.shadow=new Tg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Rg extends bo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ul{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Pe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Nl=new H;class Pg extends pe{constructor(t,e){super(),this.light=t,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";const n=new vn,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,c=32;o<c;o++,a++){const l=o/c*Math.PI*2,h=a/c*Math.PI*2;i.push(Math.cos(l),Math.sin(l),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new gn(i,3));const s=new Lc({fog:!1,toneMapped:!1});this.cone=new bg(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),Nl.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Nl),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ho}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ho);if(typeof window<"u"&&window.THREE){let r=window.require;window.require=t=>{if(r)return r(t);if(t==="three")return window.THREE}}class Uc{constructor(){y(this,"entries",{});y(this,"size",0)}add(t){let e=this.entries[t];return this.entries[t]=!0,e?!1:(this.size++,!0)}addAll(t){let e=this.size;for(var n=0,i=t.length;n<i;n++)this.add(t[n]);return e!=this.size}contains(t){return this.entries[t]}clear(){this.entries={},this.size=0}}const He=class He{constructor(t=0,e=0,n=0,i=0){y(this,"r");y(this,"g");y(this,"b");y(this,"a");this.r=t,this.g=e,this.b=n,this.a=i}set(t,e,n,i){return this.r=t,this.g=e,this.b=n,this.a=i,this.clamp()}setFromColor(t){return this.r=t.r,this.g=t.g,this.b=t.b,this.a=t.a,this}setFromString(t){return t=t.charAt(0)=="#"?t.substr(1):t,this.r=parseInt(t.substr(0,2),16)/255,this.g=parseInt(t.substr(2,2),16)/255,this.b=parseInt(t.substr(4,2),16)/255,this.a=t.length!=8?1:parseInt(t.substr(6,2),16)/255,this}add(t,e,n,i){return this.r+=t,this.g+=e,this.b+=n,this.a+=i,this.clamp()}clamp(){return this.r<0?this.r=0:this.r>1&&(this.r=1),this.g<0?this.g=0:this.g>1&&(this.g=1),this.b<0?this.b=0:this.b>1&&(this.b=1),this.a<0?this.a=0:this.a>1&&(this.a=1),this}static rgba8888ToColor(t,e){t.r=((e&4278190080)>>>24)/255,t.g=((e&16711680)>>>16)/255,t.b=((e&65280)>>>8)/255,t.a=(e&255)/255}static rgb888ToColor(t,e){t.r=((e&16711680)>>>16)/255,t.g=((e&65280)>>>8)/255,t.b=(e&255)/255}toRgb888(){const t=e=>("0"+(e*255).toString(16)).slice(-2);return+("0x"+t(this.r)+t(this.g)+t(this.b))}static fromString(t){return new He().setFromString(t)}};y(He,"WHITE",new He(1,1,1,1)),y(He,"RED",new He(1,0,0,1)),y(He,"GREEN",new He(0,1,0,1)),y(He,"BLUE",new He(0,0,1,1)),y(He,"MAGENTA",new He(1,0,1,1));let Jt=He;const ye=class ye{static clamp(t,e,n){return t<e?e:t>n?n:t}static cosDeg(t){return Math.cos(t*ye.degRad)}static sinDeg(t){return Math.sin(t*ye.degRad)}static atan2Deg(t,e){return Math.atan2(t,e)*ye.degRad}static signum(t){return t>0?1:t<0?-1:0}static toInt(t){return t>0?Math.floor(t):Math.ceil(t)}static cbrt(t){let e=Math.pow(Math.abs(t),.3333333333333333);return t<0?-e:e}static randomTriangular(t,e){return ye.randomTriangularWith(t,e,(t+e)*.5)}static randomTriangularWith(t,e,n){let i=Math.random(),s=e-t;return i<=(n-t)/s?t+Math.sqrt(i*s*(n-t)):e-Math.sqrt((1-i)*s*(e-n))}static isPowerOfTwo(t){return t&&(t&t-1)===0}};y(ye,"PI",3.1415927),y(ye,"PI2",ye.PI*2),y(ye,"invPI2",1/ye.PI2),y(ye,"radiansToDegrees",180/ye.PI),y(ye,"radDeg",ye.radiansToDegrees),y(ye,"degreesToRadians",ye.PI/180),y(ye,"degRad",ye.degreesToRadians);let lt=ye;const Xn=class Xn{static arrayCopy(t,e,n,i,s){for(let o=e,a=i;o<e+s;o++,a++)n[a]=t[o]}static arrayFill(t,e,n,i){for(let s=e;s<n;s++)t[s]=i}static setArraySize(t,e,n=0){let i=t.length;if(i==e)return t;if(t.length=e,i<e)for(let s=i;s<e;s++)t[s]=n;return t}static ensureArrayCapacity(t,e,n=0){return t.length>=e?t:Xn.setArraySize(t,e,n)}static newArray(t,e){let n=new Array(t);for(let i=0;i<t;i++)n[i]=e;return n}static newFloatArray(t){if(Xn.SUPPORTS_TYPED_ARRAYS)return new Float32Array(t);{let e=new Array(t);for(let n=0;n<e.length;n++)e[n]=0;return e}}static newShortArray(t){if(Xn.SUPPORTS_TYPED_ARRAYS)return new Int16Array(t);{let e=new Array(t);for(let n=0;n<e.length;n++)e[n]=0;return e}}static toFloatArray(t){return Xn.SUPPORTS_TYPED_ARRAYS?new Float32Array(t):t}static toSinglePrecision(t){return Xn.SUPPORTS_TYPED_ARRAYS?Math.fround(t):t}static webkit602BugfixHelper(t,e){}static contains(t,e,n=!0){for(var i=0;i<t.length;i++)if(t[i]==e)return!0;return!1}static enumValue(t,e){return t[e[0].toUpperCase()+e.slice(1)]}};y(Xn,"SUPPORTS_TYPED_ARRAYS",typeof Float32Array<"u");let mt=Xn;class Qa{constructor(t){y(this,"items",new Array);y(this,"instantiator");this.instantiator=t}obtain(){return this.items.length>0?this.items.pop():this.instantiator()}free(t){t.reset&&t.reset(),this.items.push(t)}freeAll(t){for(let e=0;e<t.length;e++)this.free(t[e])}clear(){this.items.length=0}}class ws{constructor(t=0,e=0){y(this,"x");y(this,"y");this.x=t,this.y=e}set(t,e){return this.x=t,this.y=e,this}length(){let t=this.x,e=this.y;return Math.sqrt(t*t+e*e)}normalize(){let t=this.length();return t!=0&&(this.x/=t,this.y/=t),this}}class Nc{constructor(t){y(this,"name");if(!t)throw new Error("name cannot be null.");this.name=t}}const Tr=class Tr extends Nc{constructor(e){super(e);y(this,"id",Tr.nextID++);y(this,"bones",null);y(this,"vertices",[]);y(this,"worldVerticesLength",0);y(this,"timelineAttachment",this)}computeWorldVertices(e,n,i,s,o,a){i=o+(i>>1)*a;let c=e.bone.skeleton,l=e.deform,h=this.vertices,u=this.bones;if(!u){l.length>0&&(h=l);let _=e.bone,m=_.worldX,p=_.worldY,M=_.a,x=_.b,v=_.c,T=_.d;for(let S=n,b=o;b<i;S+=2,b+=a){let L=h[S],E=h[S+1];s[b]=L*M+E*x+m,s[b+1]=L*v+E*T+p}return}let d=0,f=0;for(let _=0;_<n;_+=2){let m=u[d];d+=m+1,f+=m}let g=c.bones;if(l.length==0)for(let _=o,m=f*3;_<i;_+=a){let p=0,M=0,x=u[d++];for(x+=d;d<x;d++,m+=3){let v=g[u[d]],T=h[m],S=h[m+1],b=h[m+2];p+=(T*v.a+S*v.b+v.worldX)*b,M+=(T*v.c+S*v.d+v.worldY)*b}s[_]=p,s[_+1]=M}else{let _=l;for(let m=o,p=f*3,M=f<<1;m<i;m+=a){let x=0,v=0,T=u[d++];for(T+=d;d<T;d++,p+=3,M+=2){let S=g[u[d]],b=h[p]+_[M],L=h[p+1]+_[M+1],E=h[p+2];x+=(b*S.a+L*S.b+S.worldX)*E,v+=(b*S.c+L*S.d+S.worldY)*E}s[m]=x,s[m+1]=v}}}copyTo(e){this.bones?(e.bones=new Array(this.bones.length),mt.arrayCopy(this.bones,0,e.bones,0,this.bones.length)):e.bones=null,this.vertices&&(e.vertices=mt.newFloatArray(this.vertices.length),mt.arrayCopy(this.vertices,0,e.vertices,0,this.vertices.length)),e.worldVerticesLength=this.worldVerticesLength,e.timelineAttachment=this.timelineAttachment}};y(Tr,"nextID",0);let hn=Tr;const Yi=class Yi{constructor(t){y(this,"id",Yi.nextID());y(this,"regions");y(this,"start",0);y(this,"digits",0);y(this,"setupIndex",0);this.regions=new Array(t)}copy(){let t=new Yi(this.regions.length);return mt.arrayCopy(this.regions,0,t.regions,0,this.regions.length),t.start=this.start,t.digits=this.digits,t.setupIndex=this.setupIndex,t}apply(t,e){let n=t.sequenceIndex;n==-1&&(n=this.setupIndex),n>=this.regions.length&&(n=this.regions.length-1);let i=this.regions[n];e.region!=i&&(e.region=i,e.updateRegion())}getPath(t,e){let n=t,i=(this.start+e).toString();for(let s=this.digits-i.length;s>0;s--)n+="0";return n+=i,n}static nextID(){return Yi._nextID++}};y(Yi,"_nextID",0);let to=Yi;var Te;(function(r){r[r.hold=0]="hold",r[r.once=1]="once",r[r.loop=2]="loop",r[r.pingpong=3]="pingpong",r[r.onceReverse=4]="onceReverse",r[r.loopReverse=5]="loopReverse",r[r.pingpongReverse=6]="pingpongReverse"})(Te||(Te={}));const Lg=[Te.hold,Te.once,Te.loop,Te.pingpong,Te.onceReverse,Te.loopReverse,Te.pingpongReverse];class Fc{constructor(t,e,n){y(this,"name");y(this,"timelines",[]);y(this,"timelineIds",new Uc);y(this,"duration");if(!t)throw new Error("name cannot be null.");this.name=t,this.setTimelines(e),this.duration=n}setTimelines(t){if(!t)throw new Error("timelines cannot be null.");this.timelines=t,this.timelineIds.clear();for(var e=0;e<t.length;e++)this.timelineIds.addAll(t[e].getPropertyIds())}hasTimeline(t){for(let e=0;e<t.length;e++)if(this.timelineIds.contains(t[e]))return!0;return!1}apply(t,e,n,i,s,o,a,c){if(!t)throw new Error("skeleton cannot be null.");i&&this.duration!=0&&(n%=this.duration,e>0&&(e%=this.duration));let l=this.timelines;for(let h=0,u=l.length;h<u;h++)l[h].apply(t,e,n,s,o,a,c)}}var tt;(function(r){r[r.setup=0]="setup",r[r.first=1]="first",r[r.replace=2]="replace",r[r.add=3]="add"})(tt||(tt={}));var Ue;(function(r){r[r.mixIn=0]="mixIn",r[r.mixOut=1]="mixOut"})(Ue||(Ue={}));const Vt={rotate:0,x:1,y:2,scaleX:3,scaleY:4,shearX:5,shearY:6,inherit:7,rgb:8,alpha:9,rgb2:10,attachment:11,deform:12,event:13,drawOrder:14,ikConstraint:15,transformConstraint:16,pathConstraintPosition:17,pathConstraintSpacing:18,pathConstraintMix:19,physicsConstraintInertia:20,physicsConstraintStrength:21,physicsConstraintDamping:22,physicsConstraintMass:23,physicsConstraintWind:24,physicsConstraintGravity:25,physicsConstraintMix:26,physicsConstraintReset:27,sequence:28};class oe{constructor(t,e){y(this,"propertyIds");y(this,"frames");this.propertyIds=e,this.frames=mt.newFloatArray(t*this.getFrameEntries())}getPropertyIds(){return this.propertyIds}getFrameEntries(){return 1}getFrameCount(){return this.frames.length/this.getFrameEntries()}getDuration(){return this.frames[this.frames.length-this.getFrameEntries()]}static search1(t,e){let n=t.length;for(let i=1;i<n;i++)if(t[i]>e)return i-1;return n-1}static search(t,e,n){let i=t.length;for(let s=n;s<i;s+=n)if(t[s]>e)return s-n;return i-n}}class yn extends oe{constructor(e,n,i){super(e,i);y(this,"curves");this.curves=mt.newFloatArray(e+n*18),this.curves[e-1]=1}setLinear(e){this.curves[e]=0}setStepped(e){this.curves[e]=1}shrink(e){let n=this.getFrameCount()+e*18;if(this.curves.length>n){let i=mt.newFloatArray(n);mt.arrayCopy(this.curves,0,i,0,n),this.curves=i}}setBezier(e,n,i,s,o,a,c,l,h,u,d){let f=this.curves,g=this.getFrameCount()+e*18;i==0&&(f[n]=2+g);let _=(s-a*2+l)*.03,m=(o-c*2+h)*.03,p=((a-l)*3-s+u)*.006,M=((c-h)*3-o+d)*.006,x=_*2+p,v=m*2+M,T=(a-s)*.3+_+p*.16666667,S=(c-o)*.3+m+M*.16666667,b=s+T,L=o+S;for(let E=g+18;g<E;g+=2)f[g]=b,f[g+1]=L,T+=x,S+=v,x+=p,v+=M,b+=T,L+=S}getBezierValue(e,n,i,s){let o=this.curves;if(o[s]>e){let h=this.frames[n],u=this.frames[n+i];return u+(e-h)/(o[s]-h)*(o[s+1]-u)}let a=s+18;for(s+=2;s<a;s+=2)if(o[s]>=e){let h=o[s-2],u=o[s-1];return u+(e-h)/(o[s]-h)*(o[s+1]-u)}n+=this.getFrameEntries();let c=o[a-2],l=o[a-1];return l+(e-c)/(this.frames[n]-c)*(this.frames[n+i]-l)}}class un extends yn{constructor(t,e,n){super(t,e,[n])}getFrameEntries(){return 2}setFrame(t,e,n){t<<=1,this.frames[t]=e,this.frames[t+1]=n}getCurveValue(t){let e=this.frames,n=e.length-2;for(let s=2;s<=n;s+=2)if(e[s]>t){n=s-2;break}let i=this.curves[n>>1];switch(i){case 0:let s=e[n],o=e[n+1];return o+(t-s)/(e[n+2]-s)*(e[n+2+1]-o);case 1:return e[n+1]}return this.getBezierValue(t,n,1,i-2)}getRelativeValue(t,e,n,i,s){if(t<this.frames[0]){switch(n){case tt.setup:return s;case tt.first:return i+(s-i)*e}return i}let o=this.getCurveValue(t);switch(n){case tt.setup:return s+o*e;case tt.first:case tt.replace:o+=s-i}return i+o*e}getAbsoluteValue(t,e,n,i,s){if(t<this.frames[0]){switch(n){case tt.setup:return s;case tt.first:return i+(s-i)*e}return i}let o=this.getCurveValue(t);return n==tt.setup?s+(o-s)*e:i+(o-i)*e}getAbsoluteValue2(t,e,n,i,s,o){if(t<this.frames[0]){switch(n){case tt.setup:return s;case tt.first:return i+(s-i)*e}return i}return n==tt.setup?s+(o-s)*e:i+(o-i)*e}getScaleValue(t,e,n,i,s,o){const a=this.frames;if(t<a[0]){switch(n){case tt.setup:return o;case tt.first:return s+(o-s)*e}return s}let c=this.getCurveValue(t)*o;if(e==1)return n==tt.add?s+c-o:c;if(i==Ue.mixOut)switch(n){case tt.setup:return o+(Math.abs(c)*lt.signum(o)-o)*e;case tt.first:case tt.replace:return s+(Math.abs(c)*lt.signum(s)-s)*e}else{let l=0;switch(n){case tt.setup:return l=Math.abs(o)*lt.signum(c),l+(c-l)*e;case tt.first:case tt.replace:return l=Math.abs(s)*lt.signum(c),l+(c-l)*e}}return s+(c-o)*e}}class Eo extends yn{constructor(t,e,n,i){super(t,e,[n,i])}getFrameEntries(){return 3}setFrame(t,e,n,i){t*=3,this.frames[t]=e,this.frames[t+1]=n,this.frames[t+2]=i}}class eo extends un{constructor(e,n,i){super(e,n,Vt.rotate+"|"+i);y(this,"boneIndex",0);this.boneIndex=i}apply(e,n,i,s,o,a,c){let l=e.bones[this.boneIndex];l.active&&(l.rotation=this.getRelativeValue(i,o,a,l.rotation,l.data.rotation))}}class Ig extends Eo{constructor(e,n,i){super(e,n,Vt.x+"|"+i,Vt.y+"|"+i);y(this,"boneIndex",0);this.boneIndex=i}apply(e,n,i,s,o,a,c){let l=e.bones[this.boneIndex];if(!l.active)return;let h=this.frames;if(i<h[0]){switch(a){case tt.setup:l.x=l.data.x,l.y=l.data.y;return;case tt.first:l.x+=(l.data.x-l.x)*o,l.y+=(l.data.y-l.y)*o}return}let u=0,d=0,f=oe.search(h,i,3),g=this.curves[f/3];switch(g){case 0:let _=h[f];u=h[f+1],d=h[f+2];let m=(i-_)/(h[f+3]-_);u+=(h[f+3+1]-u)*m,d+=(h[f+3+2]-d)*m;break;case 1:u=h[f+1],d=h[f+2];break;default:u=this.getBezierValue(i,f,1,g-2),d=this.getBezierValue(i,f,2,g+18-2)}switch(a){case tt.setup:l.x=l.data.x+u*o,l.y=l.data.y+d*o;break;case tt.first:case tt.replace:l.x+=(l.data.x+u-l.x)*o,l.y+=(l.data.y+d-l.y)*o;break;case tt.add:l.x+=u*o,l.y+=d*o}}}class Dg extends un{constructor(e,n,i){super(e,n,Vt.x+"|"+i);y(this,"boneIndex",0);this.boneIndex=i}apply(e,n,i,s,o,a,c){let l=e.bones[this.boneIndex];l.active&&(l.x=this.getRelativeValue(i,o,a,l.x,l.data.x))}}class Ug extends un{constructor(e,n,i){super(e,n,Vt.y+"|"+i);y(this,"boneIndex",0);this.boneIndex=i}apply(e,n,i,s,o,a,c){let l=e.bones[this.boneIndex];l.active&&(l.y=this.getRelativeValue(i,o,a,l.y,l.data.y))}}class Ng extends Eo{constructor(e,n,i){super(e,n,Vt.scaleX+"|"+i,Vt.scaleY+"|"+i);y(this,"boneIndex",0);this.boneIndex=i}apply(e,n,i,s,o,a,c){let l=e.bones[this.boneIndex];if(!l.active)return;let h=this.frames;if(i<h[0]){switch(a){case tt.setup:l.scaleX=l.data.scaleX,l.scaleY=l.data.scaleY;return;case tt.first:l.scaleX+=(l.data.scaleX-l.scaleX)*o,l.scaleY+=(l.data.scaleY-l.scaleY)*o}return}let u,d,f=oe.search(h,i,3),g=this.curves[f/3];switch(g){case 0:let _=h[f];u=h[f+1],d=h[f+2];let m=(i-_)/(h[f+3]-_);u+=(h[f+3+1]-u)*m,d+=(h[f+3+2]-d)*m;break;case 1:u=h[f+1],d=h[f+2];break;default:u=this.getBezierValue(i,f,1,g-2),d=this.getBezierValue(i,f,2,g+18-2)}if(u*=l.data.scaleX,d*=l.data.scaleY,o==1)a==tt.add?(l.scaleX+=u-l.data.scaleX,l.scaleY+=d-l.data.scaleY):(l.scaleX=u,l.scaleY=d);else{let _=0,m=0;if(c==Ue.mixOut)switch(a){case tt.setup:_=l.data.scaleX,m=l.data.scaleY,l.scaleX=_+(Math.abs(u)*lt.signum(_)-_)*o,l.scaleY=m+(Math.abs(d)*lt.signum(m)-m)*o;break;case tt.first:case tt.replace:_=l.scaleX,m=l.scaleY,l.scaleX=_+(Math.abs(u)*lt.signum(_)-_)*o,l.scaleY=m+(Math.abs(d)*lt.signum(m)-m)*o;break;case tt.add:l.scaleX+=(u-l.data.scaleX)*o,l.scaleY+=(d-l.data.scaleY)*o}else switch(a){case tt.setup:_=Math.abs(l.data.scaleX)*lt.signum(u),m=Math.abs(l.data.scaleY)*lt.signum(d),l.scaleX=_+(u-_)*o,l.scaleY=m+(d-m)*o;break;case tt.first:case tt.replace:_=Math.abs(l.scaleX)*lt.signum(u),m=Math.abs(l.scaleY)*lt.signum(d),l.scaleX=_+(u-_)*o,l.scaleY=m+(d-m)*o;break;case tt.add:l.scaleX+=(u-l.data.scaleX)*o,l.scaleY+=(d-l.data.scaleY)*o}}}}class Fg extends un{constructor(e,n,i){super(e,n,Vt.scaleX+"|"+i);y(this,"boneIndex",0);this.boneIndex=i}apply(e,n,i,s,o,a,c){let l=e.bones[this.boneIndex];l.active&&(l.scaleX=this.getScaleValue(i,o,a,c,l.scaleX,l.data.scaleX))}}class Og extends un{constructor(e,n,i){super(e,n,Vt.scaleY+"|"+i);y(this,"boneIndex",0);this.boneIndex=i}apply(e,n,i,s,o,a,c){let l=e.bones[this.boneIndex];l.active&&(l.scaleY=this.getScaleValue(i,o,a,c,l.scaleY,l.data.scaleY))}}class Bg extends Eo{constructor(e,n,i){super(e,n,Vt.shearX+"|"+i,Vt.shearY+"|"+i);y(this,"boneIndex",0);this.boneIndex=i}apply(e,n,i,s,o,a,c){let l=e.bones[this.boneIndex];if(!l.active)return;let h=this.frames;if(i<h[0]){switch(a){case tt.setup:l.shearX=l.data.shearX,l.shearY=l.data.shearY;return;case tt.first:l.shearX+=(l.data.shearX-l.shearX)*o,l.shearY+=(l.data.shearY-l.shearY)*o}return}let u=0,d=0,f=oe.search(h,i,3),g=this.curves[f/3];switch(g){case 0:let _=h[f];u=h[f+1],d=h[f+2];let m=(i-_)/(h[f+3]-_);u+=(h[f+3+1]-u)*m,d+=(h[f+3+2]-d)*m;break;case 1:u=h[f+1],d=h[f+2];break;default:u=this.getBezierValue(i,f,1,g-2),d=this.getBezierValue(i,f,2,g+18-2)}switch(a){case tt.setup:l.shearX=l.data.shearX+u*o,l.shearY=l.data.shearY+d*o;break;case tt.first:case tt.replace:l.shearX+=(l.data.shearX+u-l.shearX)*o,l.shearY+=(l.data.shearY+d-l.shearY)*o;break;case tt.add:l.shearX+=u*o,l.shearY+=d*o}}}class kg extends un{constructor(e,n,i){super(e,n,Vt.shearX+"|"+i);y(this,"boneIndex",0);this.boneIndex=i}apply(e,n,i,s,o,a,c){let l=e.bones[this.boneIndex];l.active&&(l.shearX=this.getRelativeValue(i,o,a,l.shearX,l.data.shearX))}}class zg extends un{constructor(e,n,i){super(e,n,Vt.shearY+"|"+i);y(this,"boneIndex",0);this.boneIndex=i}apply(e,n,i,s,o,a,c){let l=e.bones[this.boneIndex];l.active&&(l.shearY=this.getRelativeValue(i,o,a,l.shearY,l.data.shearY))}}class Vg extends oe{constructor(e,n){super(e,[Vt.inherit+"|"+n]);y(this,"boneIndex",0);this.boneIndex=n}getFrameEntries(){return 2}setFrame(e,n,i){e*=2,this.frames[e]=n,this.frames[e+1]=i}apply(e,n,i,s,o,a,c){let l=e.bones[this.boneIndex];if(!l.active)return;if(c==Ue.mixOut){a==tt.setup&&(l.inherit=l.data.inherit);return}let h=this.frames;if(i<h[0]){(a==tt.setup||a==tt.first)&&(l.inherit=l.data.inherit);return}l.inherit=this.frames[oe.search(h,i,2)+1]}}class Hg extends yn{constructor(e,n,i){super(e,n,[Vt.rgb+"|"+i,Vt.alpha+"|"+i]);y(this,"slotIndex",0);this.slotIndex=i}getFrameEntries(){return 5}setFrame(e,n,i,s,o,a){e*=5,this.frames[e]=n,this.frames[e+1]=i,this.frames[e+2]=s,this.frames[e+3]=o,this.frames[e+4]=a}apply(e,n,i,s,o,a,c){let l=e.slots[this.slotIndex];if(!l.bone.active)return;let h=this.frames,u=l.color;if(i<h[0]){let M=l.data.color;switch(a){case tt.setup:u.setFromColor(M);return;case tt.first:u.add((M.r-u.r)*o,(M.g-u.g)*o,(M.b-u.b)*o,(M.a-u.a)*o)}return}let d=0,f=0,g=0,_=0,m=oe.search(h,i,5),p=this.curves[m/5];switch(p){case 0:let M=h[m];d=h[m+1],f=h[m+2],g=h[m+3],_=h[m+4];let x=(i-M)/(h[m+5]-M);d+=(h[m+5+1]-d)*x,f+=(h[m+5+2]-f)*x,g+=(h[m+5+3]-g)*x,_+=(h[m+5+4]-_)*x;break;case 1:d=h[m+1],f=h[m+2],g=h[m+3],_=h[m+4];break;default:d=this.getBezierValue(i,m,1,p-2),f=this.getBezierValue(i,m,2,p+18-2),g=this.getBezierValue(i,m,3,p+18*2-2),_=this.getBezierValue(i,m,4,p+18*3-2)}o==1?u.set(d,f,g,_):(a==tt.setup&&u.setFromColor(l.data.color),u.add((d-u.r)*o,(f-u.g)*o,(g-u.b)*o,(_-u.a)*o))}}class Gg extends yn{constructor(e,n,i){super(e,n,[Vt.rgb+"|"+i]);y(this,"slotIndex",0);this.slotIndex=i}getFrameEntries(){return 4}setFrame(e,n,i,s,o){e<<=2,this.frames[e]=n,this.frames[e+1]=i,this.frames[e+2]=s,this.frames[e+3]=o}apply(e,n,i,s,o,a,c){let l=e.slots[this.slotIndex];if(!l.bone.active)return;let h=this.frames,u=l.color;if(i<h[0]){let p=l.data.color;switch(a){case tt.setup:u.r=p.r,u.g=p.g,u.b=p.b;return;case tt.first:u.r+=(p.r-u.r)*o,u.g+=(p.g-u.g)*o,u.b+=(p.b-u.b)*o}return}let d=0,f=0,g=0,_=oe.search(h,i,4),m=this.curves[_>>2];switch(m){case 0:let p=h[_];d=h[_+1],f=h[_+2],g=h[_+3];let M=(i-p)/(h[_+4]-p);d+=(h[_+4+1]-d)*M,f+=(h[_+4+2]-f)*M,g+=(h[_+4+3]-g)*M;break;case 1:d=h[_+1],f=h[_+2],g=h[_+3];break;default:d=this.getBezierValue(i,_,1,m-2),f=this.getBezierValue(i,_,2,m+18-2),g=this.getBezierValue(i,_,3,m+18*2-2)}if(o==1)u.r=d,u.g=f,u.b=g;else{if(a==tt.setup){let p=l.data.color;u.r=p.r,u.g=p.g,u.b=p.b}u.r+=(d-u.r)*o,u.g+=(f-u.g)*o,u.b+=(g-u.b)*o}}}class Wg extends un{constructor(e,n,i){super(e,n,Vt.alpha+"|"+i);y(this,"slotIndex",0);this.slotIndex=i}apply(e,n,i,s,o,a,c){let l=e.slots[this.slotIndex];if(!l.bone.active)return;let h=l.color;if(i<this.frames[0]){let d=l.data.color;switch(a){case tt.setup:h.a=d.a;return;case tt.first:h.a+=(d.a-h.a)*o}return}let u=this.getCurveValue(i);o==1?h.a=u:(a==tt.setup&&(h.a=l.data.color.a),h.a+=(u-h.a)*o)}}class Xg extends yn{constructor(e,n,i){super(e,n,[Vt.rgb+"|"+i,Vt.alpha+"|"+i,Vt.rgb2+"|"+i]);y(this,"slotIndex",0);this.slotIndex=i}getFrameEntries(){return 8}setFrame(e,n,i,s,o,a,c,l,h){e<<=3,this.frames[e]=n,this.frames[e+1]=i,this.frames[e+2]=s,this.frames[e+3]=o,this.frames[e+4]=a,this.frames[e+5]=c,this.frames[e+6]=l,this.frames[e+7]=h}apply(e,n,i,s,o,a,c){let l=e.slots[this.slotIndex];if(!l.bone.active)return;let h=this.frames,u=l.color,d=l.darkColor;if(i<h[0]){let S=l.data.color,b=l.data.darkColor;switch(a){case tt.setup:u.setFromColor(S),d.r=b.r,d.g=b.g,d.b=b.b;return;case tt.first:u.add((S.r-u.r)*o,(S.g-u.g)*o,(S.b-u.b)*o,(S.a-u.a)*o),d.r+=(b.r-d.r)*o,d.g+=(b.g-d.g)*o,d.b+=(b.b-d.b)*o}return}let f=0,g=0,_=0,m=0,p=0,M=0,x=0,v=oe.search(h,i,8),T=this.curves[v>>3];switch(T){case 0:let S=h[v];f=h[v+1],g=h[v+2],_=h[v+3],m=h[v+4],p=h[v+5],M=h[v+6],x=h[v+7];let b=(i-S)/(h[v+8]-S);f+=(h[v+8+1]-f)*b,g+=(h[v+8+2]-g)*b,_+=(h[v+8+3]-_)*b,m+=(h[v+8+4]-m)*b,p+=(h[v+8+5]-p)*b,M+=(h[v+8+6]-M)*b,x+=(h[v+8+7]-x)*b;break;case 1:f=h[v+1],g=h[v+2],_=h[v+3],m=h[v+4],p=h[v+5],M=h[v+6],x=h[v+7];break;default:f=this.getBezierValue(i,v,1,T-2),g=this.getBezierValue(i,v,2,T+18-2),_=this.getBezierValue(i,v,3,T+18*2-2),m=this.getBezierValue(i,v,4,T+18*3-2),p=this.getBezierValue(i,v,5,T+18*4-2),M=this.getBezierValue(i,v,6,T+18*5-2),x=this.getBezierValue(i,v,7,T+18*6-2)}if(o==1)u.set(f,g,_,m),d.r=p,d.g=M,d.b=x;else{if(a==tt.setup){u.setFromColor(l.data.color);let S=l.data.darkColor;d.r=S.r,d.g=S.g,d.b=S.b}u.add((f-u.r)*o,(g-u.g)*o,(_-u.b)*o,(m-u.a)*o),d.r+=(p-d.r)*o,d.g+=(M-d.g)*o,d.b+=(x-d.b)*o}}}class Yg extends yn{constructor(e,n,i){super(e,n,[Vt.rgb+"|"+i,Vt.rgb2+"|"+i]);y(this,"slotIndex",0);this.slotIndex=i}getFrameEntries(){return 7}setFrame(e,n,i,s,o,a,c,l){e*=7,this.frames[e]=n,this.frames[e+1]=i,this.frames[e+2]=s,this.frames[e+3]=o,this.frames[e+4]=a,this.frames[e+5]=c,this.frames[e+6]=l}apply(e,n,i,s,o,a,c){let l=e.slots[this.slotIndex];if(!l.bone.active)return;let h=this.frames,u=l.color,d=l.darkColor;if(i<h[0]){let T=l.data.color,S=l.data.darkColor;switch(a){case tt.setup:u.r=T.r,u.g=T.g,u.b=T.b,d.r=S.r,d.g=S.g,d.b=S.b;return;case tt.first:u.r+=(T.r-u.r)*o,u.g+=(T.g-u.g)*o,u.b+=(T.b-u.b)*o,d.r+=(S.r-d.r)*o,d.g+=(S.g-d.g)*o,d.b+=(S.b-d.b)*o}return}let f=0,g=0,_=0,m=0,p=0,M=0,x=oe.search(h,i,7),v=this.curves[x/7];switch(v){case 0:let T=h[x];f=h[x+1],g=h[x+2],_=h[x+3],m=h[x+4],p=h[x+5],M=h[x+6];let S=(i-T)/(h[x+7]-T);f+=(h[x+7+1]-f)*S,g+=(h[x+7+2]-g)*S,_+=(h[x+7+3]-_)*S,m+=(h[x+7+4]-m)*S,p+=(h[x+7+5]-p)*S,M+=(h[x+7+6]-M)*S;break;case 1:f=h[x+1],g=h[x+2],_=h[x+3],m=h[x+4],p=h[x+5],M=h[x+6];break;default:f=this.getBezierValue(i,x,1,v-2),g=this.getBezierValue(i,x,2,v+18-2),_=this.getBezierValue(i,x,3,v+18*2-2),m=this.getBezierValue(i,x,4,v+18*3-2),p=this.getBezierValue(i,x,5,v+18*4-2),M=this.getBezierValue(i,x,6,v+18*5-2)}if(o==1)u.r=f,u.g=g,u.b=_,d.r=m,d.g=p,d.b=M;else{if(a==tt.setup){let T=l.data.color,S=l.data.darkColor;u.r=T.r,u.g=T.g,u.b=T.b,d.r=S.r,d.g=S.g,d.b=S.b}u.r+=(f-u.r)*o,u.g+=(g-u.g)*o,u.b+=(_-u.b)*o,d.r+=(m-d.r)*o,d.g+=(p-d.g)*o,d.b+=(M-d.b)*o}}}class xs extends oe{constructor(e,n){super(e,[Vt.attachment+"|"+n]);y(this,"slotIndex",0);y(this,"attachmentNames");this.slotIndex=n,this.attachmentNames=new Array(e)}getFrameCount(){return this.frames.length}setFrame(e,n,i){this.frames[e]=n,this.attachmentNames[e]=i}apply(e,n,i,s,o,a,c){let l=e.slots[this.slotIndex];if(l.bone.active){if(c==Ue.mixOut){a==tt.setup&&this.setAttachment(e,l,l.data.attachmentName);return}if(i<this.frames[0]){(a==tt.setup||a==tt.first)&&this.setAttachment(e,l,l.data.attachmentName);return}this.setAttachment(e,l,this.attachmentNames[oe.search1(this.frames,i)])}}setAttachment(e,n,i){n.setAttachment(i?e.getAttachment(this.slotIndex,i):null)}}class qg extends yn{constructor(e,n,i,s){super(e,n,[Vt.deform+"|"+i+"|"+s.id]);y(this,"slotIndex",0);y(this,"attachment");y(this,"vertices");this.slotIndex=i,this.attachment=s,this.vertices=new Array(e)}getFrameCount(){return this.frames.length}setFrame(e,n,i){this.frames[e]=n,this.vertices[e]=i}setBezier(e,n,i,s,o,a,c,l,h,u,d){let f=this.curves,g=this.getFrameCount()+e*18;i==0&&(f[n]=2+g);let _=(s-a*2+l)*.03,m=h*.03-c*.06,p=((a-l)*3-s+u)*.006,M=(c-h+.33333333)*.018,x=_*2+p,v=m*2+M,T=(a-s)*.3+_+p*.16666667,S=c*.3+m+M*.16666667,b=s+T,L=S;for(let E=g+18;g<E;g+=2)f[g]=b,f[g+1]=L,T+=x,S+=v,x+=p,v+=M,b+=T,L+=S}getCurvePercent(e,n){let i=this.curves,s=i[n];switch(s){case 0:let l=this.frames[n];return(e-l)/(this.frames[n+this.getFrameEntries()]-l);case 1:return 0}if(s-=2,i[s]>e){let l=this.frames[n];return i[s+1]*(e-l)/(i[s]-l)}let o=s+18;for(s+=2;s<o;s+=2)if(i[s]>=e){let l=i[s-2],h=i[s-1];return h+(e-l)/(i[s]-l)*(i[s+1]-h)}let a=i[o-2],c=i[o-1];return c+(1-c)*(e-a)/(this.frames[n+this.getFrameEntries()]-a)}apply(e,n,i,s,o,a,c){let l=e.slots[this.slotIndex];if(!l.bone.active)return;let h=l.getAttachment();if(!h||!(h instanceof hn)||h.timelineAttachment!=this.attachment)return;let u=l.deform;u.length==0&&(a=tt.setup);let d=this.vertices,f=d[0].length,g=this.frames;if(i<g[0]){switch(a){case tt.setup:u.length=0;return;case tt.first:if(o==1){u.length=0;return}u.length=f;let v=h;if(v.bones){o=1-o;for(var _=0;_<f;_++)u[_]*=o}else{let T=v.vertices;for(var _=0;_<f;_++)u[_]+=(T[_]-u[_])*o}}return}if(u.length=f,i>=g[g.length-1]){let v=d[g.length-1];if(o==1)if(a==tt.add){let T=h;if(T.bones)for(let S=0;S<f;S++)u[S]+=v[S];else{let S=T.vertices;for(let b=0;b<f;b++)u[b]+=v[b]-S[b]}}else mt.arrayCopy(v,0,u,0,f);else switch(a){case tt.setup:{let S=h;if(S.bones)for(let b=0;b<f;b++)u[b]=v[b]*o;else{let b=S.vertices;for(let L=0;L<f;L++){let E=b[L];u[L]=E+(v[L]-E)*o}}break}case tt.first:case tt.replace:for(let S=0;S<f;S++)u[S]+=(v[S]-u[S])*o;break;case tt.add:let T=h;if(T.bones)for(let S=0;S<f;S++)u[S]+=v[S]*o;else{let S=T.vertices;for(let b=0;b<f;b++)u[b]+=(v[b]-S[b])*o}}return}let m=oe.search1(g,i),p=this.getCurvePercent(i,m),M=d[m],x=d[m+1];if(o==1)if(a==tt.add){let v=h;if(v.bones)for(let T=0;T<f;T++){let S=M[T];u[T]+=S+(x[T]-S)*p}else{let T=v.vertices;for(let S=0;S<f;S++){let b=M[S];u[S]+=b+(x[S]-b)*p-T[S]}}}else for(let v=0;v<f;v++){let T=M[v];u[v]=T+(x[v]-T)*p}else switch(a){case tt.setup:{let T=h;if(T.bones)for(let S=0;S<f;S++){let b=M[S];u[S]=(b+(x[S]-b)*p)*o}else{let S=T.vertices;for(let b=0;b<f;b++){let L=M[b],E=S[b];u[b]=E+(L+(x[b]-L)*p-E)*o}}break}case tt.first:case tt.replace:for(let T=0;T<f;T++){let S=M[T];u[T]+=(S+(x[T]-S)*p-u[T])*o}break;case tt.add:let v=h;if(v.bones)for(let T=0;T<f;T++){let S=M[T];u[T]+=(S+(x[T]-S)*p)*o}else{let T=v.vertices;for(let S=0;S<f;S++){let b=M[S];u[S]+=(b+(x[S]-b)*p-T[S])*o}}}}}const Cr=class Cr extends oe{constructor(e){super(e,Cr.propertyIds);y(this,"events");this.events=new Array(e)}getFrameCount(){return this.frames.length}setFrame(e,n){this.frames[e]=n.time,this.events[e]=n}apply(e,n,i,s,o,a,c){if(!s)return;let l=this.frames,h=this.frames.length;if(n>i)this.apply(e,n,Number.MAX_VALUE,s,o,a,c),n=-1;else if(n>=l[h-1])return;if(i<l[0])return;let u=0;if(n<l[0])u=0;else{u=oe.search1(l,n)+1;let d=l[u];for(;u>0&&l[u-1]==d;)u--}for(;u<h&&i>=l[u];u++)s.push(this.events[u])}};y(Cr,"propertyIds",[""+Vt.event]);let wr=Cr;const Rr=class Rr extends oe{constructor(e){super(e,Rr.propertyIds);y(this,"drawOrders");this.drawOrders=new Array(e)}getFrameCount(){return this.frames.length}setFrame(e,n,i){this.frames[e]=n,this.drawOrders[e]=i}apply(e,n,i,s,o,a,c){if(c==Ue.mixOut){a==tt.setup&&mt.arrayCopy(e.slots,0,e.drawOrder,0,e.slots.length);return}if(i<this.frames[0]){(a==tt.setup||a==tt.first)&&mt.arrayCopy(e.slots,0,e.drawOrder,0,e.slots.length);return}let l=oe.search1(this.frames,i),h=this.drawOrders[l];if(!h)mt.arrayCopy(e.slots,0,e.drawOrder,0,e.slots.length);else{let u=e.drawOrder,d=e.slots;for(let f=0,g=h.length;f<g;f++)u[f]=d[h[f]]}}};y(Rr,"propertyIds",[""+Vt.drawOrder]);let Ji=Rr;class $g extends yn{constructor(e,n,i){super(e,n,[Vt.ikConstraint+"|"+i]);y(this,"constraintIndex",0);this.constraintIndex=i}getFrameEntries(){return 6}setFrame(e,n,i,s,o,a,c){e*=6,this.frames[e]=n,this.frames[e+1]=i,this.frames[e+2]=s,this.frames[e+3]=o,this.frames[e+4]=a?1:0,this.frames[e+5]=c?1:0}apply(e,n,i,s,o,a,c){let l=e.ikConstraints[this.constraintIndex];if(!l.active)return;let h=this.frames;if(i<h[0]){switch(a){case tt.setup:l.mix=l.data.mix,l.softness=l.data.softness,l.bendDirection=l.data.bendDirection,l.compress=l.data.compress,l.stretch=l.data.stretch;return;case tt.first:l.mix+=(l.data.mix-l.mix)*o,l.softness+=(l.data.softness-l.softness)*o,l.bendDirection=l.data.bendDirection,l.compress=l.data.compress,l.stretch=l.data.stretch}return}let u=0,d=0,f=oe.search(h,i,6),g=this.curves[f/6];switch(g){case 0:let _=h[f];u=h[f+1],d=h[f+2];let m=(i-_)/(h[f+6]-_);u+=(h[f+6+1]-u)*m,d+=(h[f+6+2]-d)*m;break;case 1:u=h[f+1],d=h[f+2];break;default:u=this.getBezierValue(i,f,1,g-2),d=this.getBezierValue(i,f,2,g+18-2)}a==tt.setup?(l.mix=l.data.mix+(u-l.data.mix)*o,l.softness=l.data.softness+(d-l.data.softness)*o,c==Ue.mixOut?(l.bendDirection=l.data.bendDirection,l.compress=l.data.compress,l.stretch=l.data.stretch):(l.bendDirection=h[f+3],l.compress=h[f+4]!=0,l.stretch=h[f+5]!=0)):(l.mix+=(u-l.mix)*o,l.softness+=(d-l.softness)*o,c==Ue.mixIn&&(l.bendDirection=h[f+3],l.compress=h[f+4]!=0,l.stretch=h[f+5]!=0))}}class Kg extends yn{constructor(e,n,i){super(e,n,[Vt.transformConstraint+"|"+i]);y(this,"constraintIndex",0);this.constraintIndex=i}getFrameEntries(){return 7}setFrame(e,n,i,s,o,a,c,l){let h=this.frames;e*=7,h[e]=n,h[e+1]=i,h[e+2]=s,h[e+3]=o,h[e+4]=a,h[e+5]=c,h[e+6]=l}apply(e,n,i,s,o,a,c){let l=e.transformConstraints[this.constraintIndex];if(!l.active)return;let h=this.frames;if(i<h[0]){let x=l.data;switch(a){case tt.setup:l.mixRotate=x.mixRotate,l.mixX=x.mixX,l.mixY=x.mixY,l.mixScaleX=x.mixScaleX,l.mixScaleY=x.mixScaleY,l.mixShearY=x.mixShearY;return;case tt.first:l.mixRotate+=(x.mixRotate-l.mixRotate)*o,l.mixX+=(x.mixX-l.mixX)*o,l.mixY+=(x.mixY-l.mixY)*o,l.mixScaleX+=(x.mixScaleX-l.mixScaleX)*o,l.mixScaleY+=(x.mixScaleY-l.mixScaleY)*o,l.mixShearY+=(x.mixShearY-l.mixShearY)*o}return}let u,d,f,g,_,m,p=oe.search(h,i,7),M=this.curves[p/7];switch(M){case 0:let x=h[p];u=h[p+1],d=h[p+2],f=h[p+3],g=h[p+4],_=h[p+5],m=h[p+6];let v=(i-x)/(h[p+7]-x);u+=(h[p+7+1]-u)*v,d+=(h[p+7+2]-d)*v,f+=(h[p+7+3]-f)*v,g+=(h[p+7+4]-g)*v,_+=(h[p+7+5]-_)*v,m+=(h[p+7+6]-m)*v;break;case 1:u=h[p+1],d=h[p+2],f=h[p+3],g=h[p+4],_=h[p+5],m=h[p+6];break;default:u=this.getBezierValue(i,p,1,M-2),d=this.getBezierValue(i,p,2,M+18-2),f=this.getBezierValue(i,p,3,M+18*2-2),g=this.getBezierValue(i,p,4,M+18*3-2),_=this.getBezierValue(i,p,5,M+18*4-2),m=this.getBezierValue(i,p,6,M+18*5-2)}if(a==tt.setup){let x=l.data;l.mixRotate=x.mixRotate+(u-x.mixRotate)*o,l.mixX=x.mixX+(d-x.mixX)*o,l.mixY=x.mixY+(f-x.mixY)*o,l.mixScaleX=x.mixScaleX+(g-x.mixScaleX)*o,l.mixScaleY=x.mixScaleY+(_-x.mixScaleY)*o,l.mixShearY=x.mixShearY+(m-x.mixShearY)*o}else l.mixRotate+=(u-l.mixRotate)*o,l.mixX+=(d-l.mixX)*o,l.mixY+=(f-l.mixY)*o,l.mixScaleX+=(g-l.mixScaleX)*o,l.mixScaleY+=(_-l.mixScaleY)*o,l.mixShearY+=(m-l.mixShearY)*o}}class jg extends un{constructor(e,n,i){super(e,n,Vt.pathConstraintPosition+"|"+i);y(this,"constraintIndex",0);this.constraintIndex=i}apply(e,n,i,s,o,a,c){let l=e.pathConstraints[this.constraintIndex];l.active&&(l.position=this.getAbsoluteValue(i,o,a,l.position,l.data.position))}}class Zg extends un{constructor(e,n,i){super(e,n,Vt.pathConstraintSpacing+"|"+i);y(this,"constraintIndex",0);this.constraintIndex=i}apply(e,n,i,s,o,a,c){let l=e.pathConstraints[this.constraintIndex];l.active&&(l.spacing=this.getAbsoluteValue(i,o,a,l.spacing,l.data.spacing))}}class Jg extends yn{constructor(e,n,i){super(e,n,[Vt.pathConstraintMix+"|"+i]);y(this,"constraintIndex",0);this.constraintIndex=i}getFrameEntries(){return 4}setFrame(e,n,i,s,o){let a=this.frames;e<<=2,a[e]=n,a[e+1]=i,a[e+2]=s,a[e+3]=o}apply(e,n,i,s,o,a,c){let l=e.pathConstraints[this.constraintIndex];if(!l.active)return;let h=this.frames;if(i<h[0]){switch(a){case tt.setup:l.mixRotate=l.data.mixRotate,l.mixX=l.data.mixX,l.mixY=l.data.mixY;return;case tt.first:l.mixRotate+=(l.data.mixRotate-l.mixRotate)*o,l.mixX+=(l.data.mixX-l.mixX)*o,l.mixY+=(l.data.mixY-l.mixY)*o}return}let u,d,f,g=oe.search(h,i,4),_=this.curves[g>>2];switch(_){case 0:let m=h[g];u=h[g+1],d=h[g+2],f=h[g+3];let p=(i-m)/(h[g+4]-m);u+=(h[g+4+1]-u)*p,d+=(h[g+4+2]-d)*p,f+=(h[g+4+3]-f)*p;break;case 1:u=h[g+1],d=h[g+2],f=h[g+3];break;default:u=this.getBezierValue(i,g,1,_-2),d=this.getBezierValue(i,g,2,_+18-2),f=this.getBezierValue(i,g,3,_+18*2-2)}if(a==tt.setup){let m=l.data;l.mixRotate=m.mixRotate+(u-m.mixRotate)*o,l.mixX=m.mixX+(d-m.mixX)*o,l.mixY=m.mixY+(f-m.mixY)*o}else l.mixRotate+=(u-l.mixRotate)*o,l.mixX+=(d-l.mixX)*o,l.mixY+=(f-l.mixY)*o}}class Ei extends un{constructor(e,n,i,s){super(e,n,s+"|"+i);y(this,"constraintIndex",0);this.constraintIndex=i}apply(e,n,i,s,o,a,c){let l;if(this.constraintIndex==-1){const h=i>=this.frames[0]?this.getCurveValue(i):0;for(const u of e.physicsConstraints)u.active&&this.global(u.data)&&this.set(u,this.getAbsoluteValue2(i,o,a,this.get(u),this.setup(u),h))}else l=e.physicsConstraints[this.constraintIndex],l.active&&this.set(l,this.getAbsoluteValue(i,o,a,this.get(l),this.setup(l)))}}class Qg extends Ei{constructor(t,e,n){super(t,e,n,Vt.physicsConstraintInertia)}setup(t){return t.data.inertia}get(t){return t.inertia}set(t,e){t.inertia=e}global(t){return t.inertiaGlobal}}class t0 extends Ei{constructor(t,e,n){super(t,e,n,Vt.physicsConstraintStrength)}setup(t){return t.data.strength}get(t){return t.strength}set(t,e){t.strength=e}global(t){return t.strengthGlobal}}class e0 extends Ei{constructor(t,e,n){super(t,e,n,Vt.physicsConstraintDamping)}setup(t){return t.data.damping}get(t){return t.damping}set(t,e){t.damping=e}global(t){return t.dampingGlobal}}class n0 extends Ei{constructor(t,e,n){super(t,e,n,Vt.physicsConstraintMass)}setup(t){return 1/t.data.massInverse}get(t){return 1/t.massInverse}set(t,e){t.massInverse=1/e}global(t){return t.massGlobal}}class i0 extends Ei{constructor(t,e,n){super(t,e,n,Vt.physicsConstraintWind)}setup(t){return t.data.wind}get(t){return t.wind}set(t,e){t.wind=e}global(t){return t.windGlobal}}class s0 extends Ei{constructor(t,e,n){super(t,e,n,Vt.physicsConstraintGravity)}setup(t){return t.data.gravity}get(t){return t.gravity}set(t,e){t.gravity=e}global(t){return t.gravityGlobal}}class r0 extends Ei{constructor(t,e,n){super(t,e,n,Vt.physicsConstraintMix)}setup(t){return t.data.mix}get(t){return t.mix}set(t,e){t.mix=e}global(t){return t.mixGlobal}}const Pr=class Pr extends oe{constructor(e,n){super(e,Pr.propertyIds);y(this,"constraintIndex");this.constraintIndex=n}getFrameCount(){return this.frames.length}setFrame(e,n){this.frames[e]=n}apply(e,n,i,s,o,a,c){let l;if(this.constraintIndex!=-1&&(l=e.physicsConstraints[this.constraintIndex],!l.active))return;const h=this.frames;if(n>i)this.apply(e,n,Number.MAX_VALUE,[],o,a,c),n=-1;else if(n>=h[h.length-1])return;if(!(i<h[0])&&(n<h[0]||i>=h[oe.search1(h,n)+1]))if(l!=null)l.reset();else for(const u of e.physicsConstraints)u.active&&u.reset()}};y(Pr,"propertyIds",[Vt.physicsConstraintReset.toString()]);let no=Pr;const $e=class $e extends oe{constructor(e,n,i){super(e,[Vt.sequence+"|"+n+"|"+i.sequence.id]);y(this,"slotIndex");y(this,"attachment");this.slotIndex=n,this.attachment=i}getFrameEntries(){return $e.ENTRIES}getSlotIndex(){return this.slotIndex}getAttachment(){return this.attachment}setFrame(e,n,i,s,o){let a=this.frames;e*=$e.ENTRIES,a[e]=n,a[e+$e.MODE]=i|s<<4,a[e+$e.DELAY]=o}apply(e,n,i,s,o,a,c){let l=e.slots[this.slotIndex];if(!l.bone.active)return;let h=l.attachment,u=this.attachment;if(h!=u&&(!(h instanceof hn)||h.timelineAttachment!=u))return;let d=this.frames;if(i<d[0]){(a==tt.setup||a==tt.first)&&(l.sequenceIndex=-1);return}let f=oe.search(d,i,$e.ENTRIES),g=d[f],_=d[f+$e.MODE],m=d[f+$e.DELAY];if(!this.attachment.sequence)return;let p=_>>4,M=this.attachment.sequence.regions.length,x=Lg[_&15];if(x!=Te.hold)switch(p+=(i-g)/m+1e-5|0,x){case Te.once:p=Math.min(M-1,p);break;case Te.loop:p%=M;break;case Te.pingpong:{let v=(M<<1)-2;p=v==0?0:p%v,p>=M&&(p=v-p);break}case Te.onceReverse:p=Math.max(M-1-p,0);break;case Te.loopReverse:p=M-1-p%M;break;case Te.pingpongReverse:{let v=(M<<1)-2;p=v==0?0:(p+M-1)%v,p>=M&&(p=v-p)}}l.sequenceIndex=p}};y($e,"ENTRIES",3),y($e,"MODE",1),y($e,"DELAY",2);let io=$e;const qi=class qi{constructor(t){y(this,"data");y(this,"tracks",new Array);y(this,"timeScale",1);y(this,"unkeyedState",0);y(this,"events",new Array);y(this,"listeners",new Array);y(this,"queue",new o0(this));y(this,"propertyIDs",new Uc);y(this,"animationsChanged",!1);y(this,"trackEntryPool",new Qa(()=>new a0));this.data=t}static emptyAnimation(){return qi._emptyAnimation}update(t){t*=this.timeScale;let e=this.tracks;for(let n=0,i=e.length;n<i;n++){let s=e[n];if(!s)continue;s.animationLast=s.nextAnimationLast,s.trackLast=s.nextTrackLast;let o=t*s.timeScale;if(s.delay>0){if(s.delay-=o,s.delay>0)continue;o=-s.delay,s.delay=0}let a=s.next;if(a){let c=s.trackLast-a.delay;if(c>=0){for(a.delay=0,a.trackTime+=s.timeScale==0?0:(c/s.timeScale+t)*a.timeScale,s.trackTime+=o,this.setCurrent(n,a,!0);a.mixingFrom;)a.mixTime+=t,a=a.mixingFrom;continue}}else if(s.trackLast>=s.trackEnd&&!s.mixingFrom){e[n]=null,this.queue.end(s),this.clearNext(s);continue}if(s.mixingFrom&&this.updateMixingFrom(s,t)){let c=s.mixingFrom;for(s.mixingFrom=null,c&&(c.mixingTo=null);c;)this.queue.end(c),c=c.mixingFrom}s.trackTime+=o}this.queue.drain()}updateMixingFrom(t,e){let n=t.mixingFrom;if(!n)return!0;let i=this.updateMixingFrom(n,e);return n.animationLast=n.nextAnimationLast,n.trackLast=n.nextTrackLast,t.mixTime>0&&t.mixTime>=t.mixDuration?((n.totalAlpha==0||t.mixDuration==0)&&(t.mixingFrom=n.mixingFrom,n.mixingFrom&&(n.mixingFrom.mixingTo=t),t.interruptAlpha=n.interruptAlpha,this.queue.end(n)),i):(n.trackTime+=e*n.timeScale,t.mixTime+=e,!1)}apply(t){if(!t)throw new Error("skeleton cannot be null.");this.animationsChanged&&this._animationsChanged();let e=this.events,n=this.tracks,i=!1;for(let d=0,f=n.length;d<f;d++){let g=n[d];if(!g||g.delay>0)continue;i=!0;let _=d==0?tt.first:g.mixBlend,m=g.alpha;g.mixingFrom?m*=this.applyMixingFrom(g,t,_):g.trackTime>=g.trackEnd&&!g.next&&(m=0);let p=m>=g.alphaAttachmentThreshold,M=g.animationLast,x=g.getAnimationTime(),v=x,T=e;g.reverse&&(v=g.animation.duration-v,T=null);let S=g.animation.timelines,b=S.length;if(d==0&&m==1||_==tt.add){d==0&&(p=!0);for(let L=0;L<b;L++){var s=S[L];s instanceof xs?this.applyAttachmentTimeline(s,t,v,_,p):s.apply(t,M,v,T,m,_,Ue.mixIn)}}else{let L=g.timelineMode,E=g.shortestRotation,w=!E&&g.timelinesRotation.length!=b<<1;w&&(g.timelinesRotation.length=b<<1);for(let R=0;R<b;R++){let B=S[R],F=L[R]==pa?_:tt.setup;!E&&B instanceof eo?this.applyRotateTimeline(B,t,v,m,F,g.timelinesRotation,R<<1,w):B instanceof xs?this.applyAttachmentTimeline(B,t,v,_,p):B.apply(t,M,v,T,m,F,Ue.mixIn)}}this.queueEvents(g,x),e.length=0,g.nextAnimationLast=x,g.nextTrackLast=g.trackTime}for(var o=this.unkeyedState+Bl,a=t.slots,c=0,l=t.slots.length;c<l;c++){var h=a[c];if(h.attachmentState==o){var u=h.data.attachmentName;h.setAttachment(u?t.getAttachment(h.data.index,u):null)}}return this.unkeyedState+=2,this.queue.drain(),i}applyMixingFrom(t,e,n){let i=t.mixingFrom;i.mixingFrom&&this.applyMixingFrom(i,e,n);let s=0;t.mixDuration==0?(s=1,n==tt.first&&(n=tt.setup)):(s=t.mixTime/t.mixDuration,s>1&&(s=1),n!=tt.first&&(n=i.mixBlend));let o=s<i.mixAttachmentThreshold,a=s<i.mixDrawOrderThreshold,c=i.animation.timelines,l=c.length,h=i.alpha*t.interruptAlpha,u=h*(1-s),d=i.animationLast,f=i.getAnimationTime(),g=f,_=null;if(i.reverse?g=i.animation.duration-g:s<i.eventThreshold&&(_=this.events),n==tt.add)for(let m=0;m<l;m++)c[m].apply(e,d,g,_,u,n,Ue.mixOut);else{let m=i.timelineMode,p=i.timelineHoldMix,M=i.shortestRotation,x=!M&&i.timelinesRotation.length!=l<<1;x&&(i.timelinesRotation.length=l<<1),i.totalAlpha=0;for(let v=0;v<l;v++){let T=c[v],S=Ue.mixOut,b,L=0;switch(m[v]){case pa:if(!a&&T instanceof Ji)continue;b=n,L=u;break;case Fl:b=tt.setup,L=u;break;case Ol:b=n,L=h;break;case ma:b=tt.setup,L=h;break;default:b=tt.setup;let E=p[v];L=h*Math.max(0,1-E.mixTime/E.mixDuration);break}i.totalAlpha+=L,!M&&T instanceof eo?this.applyRotateTimeline(T,e,g,L,b,i.timelinesRotation,v<<1,x):T instanceof xs?this.applyAttachmentTimeline(T,e,g,b,o&&L>=i.alphaAttachmentThreshold):(a&&T instanceof Ji&&b==tt.setup&&(S=Ue.mixIn),T.apply(e,d,g,_,L,b,S))}}return t.mixDuration>0&&this.queueEvents(i,f),this.events.length=0,i.nextAnimationLast=f,i.nextTrackLast=i.trackTime,s}applyAttachmentTimeline(t,e,n,i,s){var o=e.slots[t.slotIndex];o.bone.active&&(n<t.frames[0]?(i==tt.setup||i==tt.first)&&this.setAttachment(e,o,o.data.attachmentName,s):this.setAttachment(e,o,t.attachmentNames[oe.search1(t.frames,n)],s),o.attachmentState<=this.unkeyedState&&(o.attachmentState=this.unkeyedState+Bl))}setAttachment(t,e,n,i){e.setAttachment(n?t.getAttachment(e.data.index,n):null),i&&(e.attachmentState=this.unkeyedState+c0)}applyRotateTimeline(t,e,n,i,s,o,a,c){if(c&&(o[a]=0),i==1){t.apply(e,0,n,null,1,s,Ue.mixIn);return}let l=e.bones[t.boneIndex];if(!l.active)return;let h=t.frames,u=0,d=0;if(n<h[0])switch(s){case tt.setup:l.rotation=l.data.rotation;default:return;case tt.first:u=l.rotation,d=l.data.rotation}else u=s==tt.setup?l.data.rotation:l.rotation,d=l.data.rotation+t.getCurveValue(n);let f=0,g=d-u;if(g-=Math.ceil(g/360-.5)*360,g==0)f=o[a];else{let _=0,m=0;c?(_=0,m=g):(_=o[a],m=o[a+1]);let p=_-_%360;f=g+p;let M=g>=0,x=_>=0;Math.abs(m)<=90&&lt.signum(m)!=lt.signum(g)&&(Math.abs(_-p)>180?(f+=360*lt.signum(_),x=M):p!=0?f-=360*lt.signum(_):x=M),x!=M&&(f+=360*lt.signum(_)),o[a]=f}o[a+1]=g,l.rotation=u+f*i}queueEvents(t,e){let n=t.animationStart,i=t.animationEnd,s=i-n,o=t.trackLast%s,a=this.events,c=0,l=a.length;for(;c<l;c++){let u=a[c];if(u.time<o)break;u.time>i||this.queue.event(t,u)}let h=!1;if(t.loop)if(s==0)h=!0;else{const u=Math.floor(t.trackTime/s);h=u>0&&u>Math.floor(t.trackLast/s)}else h=e>=i&&t.animationLast<i;for(h&&this.queue.complete(t);c<l;c++){let u=a[c];u.time<n||this.queue.event(t,u)}}clearTracks(){let t=this.queue.drainDisabled;this.queue.drainDisabled=!0;for(let e=0,n=this.tracks.length;e<n;e++)this.clearTrack(e);this.tracks.length=0,this.queue.drainDisabled=t,this.queue.drain()}clearTrack(t){if(t>=this.tracks.length)return;let e=this.tracks[t];if(!e)return;this.queue.end(e),this.clearNext(e);let n=e;for(;;){let i=n.mixingFrom;if(!i)break;this.queue.end(i),n.mixingFrom=null,n.mixingTo=null,n=i}this.tracks[e.trackIndex]=null,this.queue.drain()}setCurrent(t,e,n){let i=this.expandToIndex(t);this.tracks[t]=e,e.previous=null,i&&(n&&this.queue.interrupt(i),e.mixingFrom=i,i.mixingTo=e,e.mixTime=0,i.mixingFrom&&i.mixDuration>0&&(e.interruptAlpha*=Math.min(1,i.mixTime/i.mixDuration)),i.timelinesRotation.length=0),this.queue.start(e)}setAnimation(t,e,n=!1){let i=this.data.skeletonData.findAnimation(e);if(!i)throw new Error("Animation not found: "+e);return this.setAnimationWith(t,i,n)}setAnimationWith(t,e,n=!1){if(!e)throw new Error("animation cannot be null.");let i=!0,s=this.expandToIndex(t);s&&(s.nextTrackLast==-1?(this.tracks[t]=s.mixingFrom,this.queue.interrupt(s),this.queue.end(s),this.clearNext(s),s=s.mixingFrom,i=!1):this.clearNext(s));let o=this.trackEntry(t,e,n,s);return this.setCurrent(t,o,i),this.queue.drain(),o}addAnimation(t,e,n=!1,i=0){let s=this.data.skeletonData.findAnimation(e);if(!s)throw new Error("Animation not found: "+e);return this.addAnimationWith(t,s,n,i)}addAnimationWith(t,e,n=!1,i=0){if(!e)throw new Error("animation cannot be null.");let s=this.expandToIndex(t);if(s)for(;s.next;)s=s.next;let o=this.trackEntry(t,e,n,s);return s?(s.next=o,o.previous=s,i<=0&&(i+=s.getTrackComplete()-o.mixDuration)):(this.setCurrent(t,o,!0),this.queue.drain()),o.delay=i,o}setEmptyAnimation(t,e=0){let n=this.setAnimationWith(t,qi.emptyAnimation(),!1);return n.mixDuration=e,n.trackEnd=e,n}addEmptyAnimation(t,e=0,n=0){let i=this.addAnimationWith(t,qi.emptyAnimation(),!1,n);return n<=0&&(i.delay+=i.mixDuration-e),i.mixDuration=e,i.trackEnd=e,i}setEmptyAnimations(t=0){let e=this.queue.drainDisabled;this.queue.drainDisabled=!0;for(let n=0,i=this.tracks.length;n<i;n++){let s=this.tracks[n];s&&this.setEmptyAnimation(s.trackIndex,t)}this.queue.drainDisabled=e,this.queue.drain()}expandToIndex(t){return t<this.tracks.length?this.tracks[t]:(mt.ensureArrayCapacity(this.tracks,t+1,null),this.tracks.length=t+1,null)}trackEntry(t,e,n,i){let s=this.trackEntryPool.obtain();return s.reset(),s.trackIndex=t,s.animation=e,s.loop=n,s.holdPrevious=!1,s.reverse=!1,s.shortestRotation=!1,s.eventThreshold=0,s.alphaAttachmentThreshold=0,s.mixAttachmentThreshold=0,s.mixDrawOrderThreshold=0,s.animationStart=0,s.animationEnd=e.duration,s.animationLast=-1,s.nextAnimationLast=-1,s.delay=0,s.trackTime=0,s.trackLast=-1,s.nextTrackLast=-1,s.trackEnd=Number.MAX_VALUE,s.timeScale=1,s.alpha=1,s.mixTime=0,s.mixDuration=i?this.data.getMix(i.animation,e):0,s.interruptAlpha=1,s.totalAlpha=0,s.mixBlend=tt.replace,s}clearNext(t){let e=t.next;for(;e;)this.queue.dispose(e),e=e.next;t.next=null}_animationsChanged(){this.animationsChanged=!1,this.propertyIDs.clear();let t=this.tracks;for(let e=0,n=t.length;e<n;e++){let i=t[e];if(i){for(;i.mixingFrom;)i=i.mixingFrom;do(!i.mixingTo||i.mixBlend!=tt.add)&&this.computeHold(i),i=i.mixingTo;while(i)}}}computeHold(t){let e=t.mixingTo,n=t.animation.timelines,i=t.animation.timelines.length,s=t.timelineMode;s.length=i;let o=t.timelineHoldMix;o.length=0;let a=this.propertyIDs;if(e&&e.holdPrevious){for(let c=0;c<i;c++)s[c]=a.addAll(n[c].getPropertyIds())?ma:Ol;return}t:for(let c=0;c<i;c++){let l=n[c],h=l.getPropertyIds();if(!a.addAll(h))s[c]=pa;else if(!e||l instanceof xs||l instanceof Ji||l instanceof wr||!e.animation.hasTimeline(h))s[c]=Fl;else{for(let u=e.mixingTo;u;u=u.mixingTo)if(!u.animation.hasTimeline(h)){if(t.mixDuration>0){s[c]=l0,o[c]=u;continue t}break}s[c]=ma}}}getCurrent(t){return t>=this.tracks.length?null:this.tracks[t]}addListener(t){if(!t)throw new Error("listener cannot be null.");this.listeners.push(t)}removeListener(t){let e=this.listeners.indexOf(t);e>=0&&this.listeners.splice(e,1)}clearListeners(){this.listeners.length=0}clearListenerNotifications(){this.queue.clear()}};y(qi,"_emptyAnimation",new Fc("<empty>",[],0));let so=qi;class a0{constructor(){y(this,"animation",null);y(this,"previous",null);y(this,"next",null);y(this,"mixingFrom",null);y(this,"mixingTo",null);y(this,"listener",null);y(this,"trackIndex",0);y(this,"loop",!1);y(this,"holdPrevious",!1);y(this,"reverse",!1);y(this,"shortestRotation",!1);y(this,"eventThreshold",0);y(this,"mixAttachmentThreshold",0);y(this,"alphaAttachmentThreshold",0);y(this,"mixDrawOrderThreshold",0);y(this,"animationStart",0);y(this,"animationEnd",0);y(this,"animationLast",0);y(this,"nextAnimationLast",0);y(this,"delay",0);y(this,"trackTime",0);y(this,"trackLast",0);y(this,"nextTrackLast",0);y(this,"trackEnd",0);y(this,"timeScale",0);y(this,"alpha",0);y(this,"mixTime",0);y(this,"_mixDuration",0);y(this,"interruptAlpha",0);y(this,"totalAlpha",0);y(this,"mixBlend",tt.replace);y(this,"timelineMode",new Array);y(this,"timelineHoldMix",new Array);y(this,"timelinesRotation",new Array)}get mixDuration(){return this._mixDuration}set mixDuration(t){this._mixDuration=t}setMixDurationWithDelay(t,e){this._mixDuration=t,this.previous!=null&&e<=0&&(e+=this.previous.getTrackComplete()-t),this.delay=e}reset(){this.next=null,this.previous=null,this.mixingFrom=null,this.mixingTo=null,this.animation=null,this.listener=null,this.timelineMode.length=0,this.timelineHoldMix.length=0,this.timelinesRotation.length=0}getAnimationTime(){if(this.loop){let t=this.animationEnd-this.animationStart;return t==0?this.animationStart:this.trackTime%t+this.animationStart}return Math.min(this.trackTime+this.animationStart,this.animationEnd)}setAnimationLast(t){this.animationLast=t,this.nextAnimationLast=t}isComplete(){return this.trackTime>=this.animationEnd-this.animationStart}resetRotationDirections(){this.timelinesRotation.length=0}getTrackComplete(){let t=this.animationEnd-this.animationStart;if(t!=0){if(this.loop)return t*(1+(this.trackTime/t|0));if(this.trackTime<t)return t}return this.trackTime}wasApplied(){return this.nextTrackLast!=-1}isNextReady(){return this.next!=null&&this.nextTrackLast-this.next.delay>=0}}class o0{constructor(t){y(this,"objects",[]);y(this,"drainDisabled",!1);y(this,"animState");this.animState=t}start(t){this.objects.push(Ne.start),this.objects.push(t),this.animState.animationsChanged=!0}interrupt(t){this.objects.push(Ne.interrupt),this.objects.push(t)}end(t){this.objects.push(Ne.end),this.objects.push(t),this.animState.animationsChanged=!0}dispose(t){this.objects.push(Ne.dispose),this.objects.push(t)}complete(t){this.objects.push(Ne.complete),this.objects.push(t)}event(t,e){this.objects.push(Ne.event),this.objects.push(t),this.objects.push(e)}drain(){if(this.drainDisabled)return;this.drainDisabled=!0;let t=this.objects,e=this.animState.listeners;for(let n=0;n<t.length;n+=2){let i=t[n],s=t[n+1];switch(i){case Ne.start:s.listener&&s.listener.start&&s.listener.start(s);for(let a=0;a<e.length;a++){let c=e[a];c.start&&c.start(s)}break;case Ne.interrupt:s.listener&&s.listener.interrupt&&s.listener.interrupt(s);for(let a=0;a<e.length;a++){let c=e[a];c.interrupt&&c.interrupt(s)}break;case Ne.end:s.listener&&s.listener.end&&s.listener.end(s);for(let a=0;a<e.length;a++){let c=e[a];c.end&&c.end(s)}case Ne.dispose:s.listener&&s.listener.dispose&&s.listener.dispose(s);for(let a=0;a<e.length;a++){let c=e[a];c.dispose&&c.dispose(s)}this.animState.trackEntryPool.free(s);break;case Ne.complete:s.listener&&s.listener.complete&&s.listener.complete(s);for(let a=0;a<e.length;a++){let c=e[a];c.complete&&c.complete(s)}break;case Ne.event:let o=t[n+++2];s.listener&&s.listener.event&&s.listener.event(s,o);for(let a=0;a<e.length;a++){let c=e[a];c.event&&c.event(s,o)}break}}this.clear(),this.drainDisabled=!1}clear(){this.objects.length=0}}var Ne;(function(r){r[r.start=0]="start",r[r.interrupt=1]="interrupt",r[r.end=2]="end",r[r.dispose=3]="dispose",r[r.complete=4]="complete",r[r.event=5]="event"})(Ne||(Ne={}));const pa=0,Fl=1,Ol=2,ma=3,l0=4,Bl=1,c0=2;class h0{constructor(t){y(this,"skeletonData");y(this,"animationToMixTime",{});y(this,"defaultMix",0);if(!t)throw new Error("skeletonData cannot be null.");this.skeletonData=t}setMix(t,e,n){let i=this.skeletonData.findAnimation(t);if(!i)throw new Error("Animation not found: "+t);let s=this.skeletonData.findAnimation(e);if(!s)throw new Error("Animation not found: "+e);this.setMixWith(i,s,n)}setMixWith(t,e,n){if(!t)throw new Error("from cannot be null.");if(!e)throw new Error("to cannot be null.");let i=t.name+"."+e.name;this.animationToMixTime[i]=n}getMix(t,e){let n=t.name+"."+e.name,i=this.animationToMixTime[n];return i===void 0?this.defaultMix:i}}class wo extends hn{constructor(e){super(e);y(this,"color",new Jt(1,1,1,1))}copy(){let e=new wo(this.name);return this.copyTo(e),e.color.setFromColor(this.color),e}}class Ls extends hn{constructor(e){super(e);y(this,"endSlot",null);y(this,"color",new Jt(.2275,.2275,.8078,1))}copy(){let e=new Ls(this.name);return this.copyTo(e),e.endSlot=this.endSlot,e.color.setFromColor(this.color),e}}class u0{constructor(t){y(this,"_image");this._image=t}getImage(){return this._image}}var Ke;(function(r){r[r.Nearest=9728]="Nearest",r[r.Linear=9729]="Linear",r[r.MipMap=9987]="MipMap",r[r.MipMapNearestNearest=9984]="MipMapNearestNearest",r[r.MipMapLinearNearest=9985]="MipMapLinearNearest",r[r.MipMapNearestLinear=9986]="MipMapNearestLinear",r[r.MipMapLinearLinear=9987]="MipMapLinearLinear"})(Ke||(Ke={}));var Dn;(function(r){r[r.MirroredRepeat=33648]="MirroredRepeat",r[r.ClampToEdge=33071]="ClampToEdge",r[r.Repeat=10497]="Repeat"})(Dn||(Dn={}));class d0{constructor(){y(this,"texture");y(this,"u",0);y(this,"v",0);y(this,"u2",0);y(this,"v2",0);y(this,"width",0);y(this,"height",0);y(this,"degrees",0);y(this,"offsetX",0);y(this,"offsetY",0);y(this,"originalWidth",0);y(this,"originalHeight",0)}}class f0{constructor(t){y(this,"pages",new Array);y(this,"regions",new Array);let e=new p0(t),n=new Array(4),i={};i.size=h=>{h.width=parseInt(n[1]),h.height=parseInt(n[2])},i.format=()=>{},i.filter=h=>{h.minFilter=mt.enumValue(Ke,n[1]),h.magFilter=mt.enumValue(Ke,n[2])},i.repeat=h=>{n[1].indexOf("x")!=-1&&(h.uWrap=Dn.Repeat),n[1].indexOf("y")!=-1&&(h.vWrap=Dn.Repeat)},i.pma=h=>{h.pma=n[1]=="true"};var s={};s.xy=h=>{h.x=parseInt(n[1]),h.y=parseInt(n[2])},s.size=h=>{h.width=parseInt(n[1]),h.height=parseInt(n[2])},s.bounds=h=>{h.x=parseInt(n[1]),h.y=parseInt(n[2]),h.width=parseInt(n[3]),h.height=parseInt(n[4])},s.offset=h=>{h.offsetX=parseInt(n[1]),h.offsetY=parseInt(n[2])},s.orig=h=>{h.originalWidth=parseInt(n[1]),h.originalHeight=parseInt(n[2])},s.offsets=h=>{h.offsetX=parseInt(n[1]),h.offsetY=parseInt(n[2]),h.originalWidth=parseInt(n[3]),h.originalHeight=parseInt(n[4])},s.rotate=h=>{let u=n[1];u=="true"?h.degrees=90:u!="false"&&(h.degrees=parseInt(u))},s.index=h=>{h.index=parseInt(n[1])};let o=e.readLine();for(;o&&o.trim().length==0;)o=e.readLine();for(;!(!o||o.trim().length==0||e.readEntry(n,o)==0);)o=e.readLine();let a=null,c=null,l=null;for(;o!==null;)if(o.trim().length==0)a=null,o=e.readLine();else if(a){let h=new Oc(a,o);for(;;){let u=e.readEntry(n,o=e.readLine());if(u==0)break;let d=s[n[0]];if(d)d(h);else{c||(c=[]),l||(l=[]),c.push(n[0]);let f=[];for(let g=0;g<u;g++)f.push(parseInt(n[g+1]));l.push(f)}}h.originalWidth==0&&h.originalHeight==0&&(h.originalWidth=h.width,h.originalHeight=h.height),c&&c.length>0&&l&&l.length>0&&(h.names=c,h.values=l,c=null,l=null),h.u=h.x/a.width,h.v=h.y/a.height,h.degrees==90?(h.u2=(h.x+h.height)/a.width,h.v2=(h.y+h.width)/a.height):(h.u2=(h.x+h.width)/a.width,h.v2=(h.y+h.height)/a.height),this.regions.push(h)}else{for(a=new m0(o.trim());e.readEntry(n,o=e.readLine())!=0;){let h=i[n[0]];h&&h(a)}this.pages.push(a)}}findRegion(t){for(let e=0;e<this.regions.length;e++)if(this.regions[e].name==t)return this.regions[e];return null}setTextures(t,e=""){for(let n of this.pages)n.setTexture(t.get(e+n.name))}dispose(){var t;for(let e=0;e<this.pages.length;e++)(t=this.pages[e].texture)==null||t.dispose()}}class p0{constructor(t){y(this,"lines");y(this,"index",0);this.lines=t.split(/\r\n|\r|\n/)}readLine(){return this.index>=this.lines.length?null:this.lines[this.index++]}readEntry(t,e){if(!e||(e=e.trim(),e.length==0))return 0;let n=e.indexOf(":");if(n==-1)return 0;t[0]=e.substr(0,n).trim();for(let i=1,s=n+1;;i++){let o=e.indexOf(",",s);if(o==-1)return t[i]=e.substr(s).trim(),i;if(t[i]=e.substr(s,o-s).trim(),s=o+1,i==4)return 4}}}class m0{constructor(t){y(this,"name");y(this,"minFilter",Ke.Nearest);y(this,"magFilter",Ke.Nearest);y(this,"uWrap",Dn.ClampToEdge);y(this,"vWrap",Dn.ClampToEdge);y(this,"texture",null);y(this,"width",0);y(this,"height",0);y(this,"pma",!1);y(this,"regions",new Array);this.name=t}setTexture(t){this.texture=t,t.setFilters(this.minFilter,this.magFilter),t.setWraps(this.uWrap,this.vWrap);for(let e of this.regions)e.texture=t}}class Oc extends d0{constructor(e,n){super();y(this,"page");y(this,"name");y(this,"x",0);y(this,"y",0);y(this,"offsetX",0);y(this,"offsetY",0);y(this,"originalWidth",0);y(this,"originalHeight",0);y(this,"index",0);y(this,"degrees",0);y(this,"names",null);y(this,"values",null);this.page=e,this.name=n,e.regions.push(this)}}class Si extends hn{constructor(e,n){super(e);y(this,"region",null);y(this,"path");y(this,"regionUVs",[]);y(this,"uvs",[]);y(this,"triangles",[]);y(this,"color",new Jt(1,1,1,1));y(this,"width",0);y(this,"height",0);y(this,"hullLength",0);y(this,"edges",[]);y(this,"parentMesh",null);y(this,"sequence",null);y(this,"tempColor",new Jt(0,0,0,0));this.path=n}updateRegion(){if(!this.region)throw new Error("Region not set.");let e=this.regionUVs;(!this.uvs||this.uvs.length!=e.length)&&(this.uvs=mt.newFloatArray(e.length));let n=this.uvs,i=this.uvs.length,s=this.region.u,o=this.region.v,a=0,c=0;if(this.region instanceof Oc){let l=this.region,h=l.page,u=h.width,d=h.height;switch(l.degrees){case 90:s-=(l.originalHeight-l.offsetY-l.height)/u,o-=(l.originalWidth-l.offsetX-l.width)/d,a=l.originalHeight/u,c=l.originalWidth/d;for(let f=0;f<i;f+=2)n[f]=s+e[f+1]*a,n[f+1]=o+(1-e[f])*c;return;case 180:s-=(l.originalWidth-l.offsetX-l.width)/u,o-=l.offsetY/d,a=l.originalWidth/u,c=l.originalHeight/d;for(let f=0;f<i;f+=2)n[f]=s+(1-e[f])*a,n[f+1]=o+(1-e[f+1])*c;return;case 270:s-=l.offsetY/u,o-=l.offsetX/d,a=l.originalHeight/u,c=l.originalWidth/d;for(let f=0;f<i;f+=2)n[f]=s+(1-e[f+1])*a,n[f+1]=o+e[f]*c;return}s-=l.offsetX/u,o-=(l.originalHeight-l.offsetY-l.height)/d,a=l.originalWidth/u,c=l.originalHeight/d}else this.region?(a=this.region.u2-s,c=this.region.v2-o):(s=o=0,a=c=1);for(let l=0;l<i;l+=2)n[l]=s+e[l]*a,n[l+1]=o+e[l+1]*c}getParentMesh(){return this.parentMesh}setParentMesh(e){this.parentMesh=e,e&&(this.bones=e.bones,this.vertices=e.vertices,this.worldVerticesLength=e.worldVerticesLength,this.regionUVs=e.regionUVs,this.triangles=e.triangles,this.hullLength=e.hullLength,this.worldVerticesLength=e.worldVerticesLength)}copy(){if(this.parentMesh)return this.newLinkedMesh();let e=new Si(this.name,this.path);return e.region=this.region,e.color.setFromColor(this.color),this.copyTo(e),e.regionUVs=new Array(this.regionUVs.length),mt.arrayCopy(this.regionUVs,0,e.regionUVs,0,this.regionUVs.length),e.uvs=new Array(this.uvs.length),mt.arrayCopy(this.uvs,0,e.uvs,0,this.uvs.length),e.triangles=new Array(this.triangles.length),mt.arrayCopy(this.triangles,0,e.triangles,0,this.triangles.length),e.hullLength=this.hullLength,e.sequence=this.sequence!=null?this.sequence.copy():null,this.edges&&(e.edges=new Array(this.edges.length),mt.arrayCopy(this.edges,0,e.edges,0,this.edges.length)),e.width=this.width,e.height=this.height,e}computeWorldVertices(e,n,i,s,o,a){this.sequence!=null&&this.sequence.apply(e,this),super.computeWorldVertices(e,n,i,s,o,a)}newLinkedMesh(){let e=new Si(this.name,this.path);return e.region=this.region,e.color.setFromColor(this.color),e.timelineAttachment=this.timelineAttachment,e.setParentMesh(this.parentMesh?this.parentMesh:this),e.region!=null&&e.updateRegion(),e}}class as extends hn{constructor(e){super(e);y(this,"lengths",[]);y(this,"closed",!1);y(this,"constantSpeed",!1);y(this,"color",new Jt(1,1,1,1))}copy(){let e=new as(this.name);return this.copyTo(e),e.lengths=new Array(this.lengths.length),mt.arrayCopy(this.lengths,0,e.lengths,0,this.lengths.length),e.closed=closed,e.constantSpeed=this.constantSpeed,e.color.setFromColor(this.color),e}}class Ao extends hn{constructor(e){super(e);y(this,"x",0);y(this,"y",0);y(this,"rotation",0);y(this,"color",new Jt(.38,.94,0,1))}computeWorldPosition(e,n){return n.x=this.x*e.a+this.y*e.b+e.worldX,n.y=this.x*e.c+this.y*e.d+e.worldY,n}computeWorldRotation(e){const n=this.rotation*lt.degRad,i=Math.cos(n),s=Math.sin(n),o=i*e.a+s*e.b,a=i*e.c+s*e.d;return lt.atan2Deg(a,o)}copy(){let e=new Ao(this.name);return e.x=this.x,e.y=this.y,e.rotation=this.rotation,e.color.setFromColor(this.color),e}}const qt=class qt extends Nc{constructor(e,n){super(e);y(this,"x",0);y(this,"y",0);y(this,"scaleX",1);y(this,"scaleY",1);y(this,"rotation",0);y(this,"width",0);y(this,"height",0);y(this,"color",new Jt(1,1,1,1));y(this,"path");y(this,"region",null);y(this,"sequence",null);y(this,"offset",mt.newFloatArray(8));y(this,"uvs",mt.newFloatArray(8));y(this,"tempColor",new Jt(1,1,1,1));this.path=n}updateRegion(){if(!this.region)throw new Error("Region not set.");let e=this.region,n=this.uvs;if(e==null){n[0]=0,n[1]=0,n[2]=0,n[3]=1,n[4]=1,n[5]=1,n[6]=1,n[7]=0;return}let i=this.width/this.region.originalWidth*this.scaleX,s=this.height/this.region.originalHeight*this.scaleY,o=-this.width/2*this.scaleX+this.region.offsetX*i,a=-this.height/2*this.scaleY+this.region.offsetY*s,c=o+this.region.width*i,l=a+this.region.height*s,h=this.rotation*lt.degRad,u=Math.cos(h),d=Math.sin(h),f=this.x,g=this.y,_=o*u+f,m=o*d,p=a*u+g,M=a*d,x=c*u+f,v=c*d,T=l*u+g,S=l*d,b=this.offset;b[0]=_-M,b[1]=p+m,b[2]=_-S,b[3]=T+m,b[4]=x-S,b[5]=T+v,b[6]=x-M,b[7]=p+v,e.degrees==90?(n[0]=e.u2,n[1]=e.v2,n[2]=e.u,n[3]=e.v2,n[4]=e.u,n[5]=e.v,n[6]=e.u2,n[7]=e.v):(n[0]=e.u,n[1]=e.v2,n[2]=e.u,n[3]=e.v,n[4]=e.u2,n[5]=e.v,n[6]=e.u2,n[7]=e.v2)}computeWorldVertices(e,n,i,s){this.sequence!=null&&this.sequence.apply(e,this);let o=e.bone,a=this.offset,c=o.worldX,l=o.worldY,h=o.a,u=o.b,d=o.c,f=o.d,g=0,_=0;g=a[0],_=a[1],n[i]=g*h+_*u+c,n[i+1]=g*d+_*f+l,i+=s,g=a[2],_=a[3],n[i]=g*h+_*u+c,n[i+1]=g*d+_*f+l,i+=s,g=a[4],_=a[5],n[i]=g*h+_*u+c,n[i+1]=g*d+_*f+l,i+=s,g=a[6],_=a[7],n[i]=g*h+_*u+c,n[i+1]=g*d+_*f+l}copy(){let e=new qt(this.name,this.path);return e.region=this.region,e.x=this.x,e.y=this.y,e.scaleX=this.scaleX,e.scaleY=this.scaleY,e.rotation=this.rotation,e.width=this.width,e.height=this.height,mt.arrayCopy(this.uvs,0,e.uvs,0,8),mt.arrayCopy(this.offset,0,e.offset,0,8),e.color.setFromColor(this.color),e.sequence=this.sequence!=null?this.sequence.copy():null,e}};y(qt,"X1",0),y(qt,"Y1",1),y(qt,"C1R",2),y(qt,"C1G",3),y(qt,"C1B",4),y(qt,"C1A",5),y(qt,"U1",6),y(qt,"V1",7),y(qt,"X2",8),y(qt,"Y2",9),y(qt,"C2R",10),y(qt,"C2G",11),y(qt,"C2B",12),y(qt,"C2A",13),y(qt,"U2",14),y(qt,"V2",15),y(qt,"X3",16),y(qt,"Y3",17),y(qt,"C3R",18),y(qt,"C3G",19),y(qt,"C3B",20),y(qt,"C3A",21),y(qt,"U3",22),y(qt,"V3",23),y(qt,"X4",24),y(qt,"Y4",25),y(qt,"C4R",26),y(qt,"C4G",27),y(qt,"C4B",28),y(qt,"C4A",29),y(qt,"U4",30),y(qt,"V4",31);let As=qt;class g0{constructor(t){y(this,"atlas");this.atlas=t}loadSequence(t,e,n){let i=n.regions;for(let s=0,o=i.length;s<o;s++){let a=n.getPath(e,s),c=this.atlas.findRegion(a);if(c==null)throw new Error("Region not found in atlas: "+a+" (sequence: "+t+")");i[s]=c}}newRegionAttachment(t,e,n,i){let s=new As(e,n);if(i!=null)this.loadSequence(e,n,i);else{let o=this.atlas.findRegion(n);if(!o)throw new Error("Region not found in atlas: "+n+" (region attachment: "+e+")");s.region=o}return s}newMeshAttachment(t,e,n,i){let s=new Si(e,n);if(i!=null)this.loadSequence(e,n,i);else{let o=this.atlas.findRegion(n);if(!o)throw new Error("Region not found in atlas: "+n+" (mesh attachment: "+e+")");s.region=o}return s}newBoundingBoxAttachment(t,e){return new wo(e)}newPathAttachment(t,e){return new as(e)}newPointAttachment(t,e){return new Ao(e)}newClippingAttachment(t,e){return new Ls(e)}}class _0{constructor(t,e,n){y(this,"index",0);y(this,"name");y(this,"parent",null);y(this,"length",0);y(this,"x",0);y(this,"y",0);y(this,"rotation",0);y(this,"scaleX",1);y(this,"scaleY",1);y(this,"shearX",0);y(this,"shearY",0);y(this,"inherit",ce.Normal);y(this,"skinRequired",!1);y(this,"color",new Jt);y(this,"icon");y(this,"visible",!1);if(t<0)throw new Error("index must be >= 0.");if(!e)throw new Error("name cannot be null.");this.index=t,this.name=e,this.parent=n}}var ce;(function(r){r[r.Normal=0]="Normal",r[r.OnlyTranslation=1]="OnlyTranslation",r[r.NoRotationOrReflection=2]="NoRotationOrReflection",r[r.NoScale=3]="NoScale",r[r.NoScaleOrReflection=4]="NoScaleOrReflection"})(ce||(ce={}));class kl{constructor(t,e,n){y(this,"data");y(this,"skeleton");y(this,"parent",null);y(this,"children",new Array);y(this,"x",0);y(this,"y",0);y(this,"rotation",0);y(this,"scaleX",0);y(this,"scaleY",0);y(this,"shearX",0);y(this,"shearY",0);y(this,"ax",0);y(this,"ay",0);y(this,"arotation",0);y(this,"ascaleX",0);y(this,"ascaleY",0);y(this,"ashearX",0);y(this,"ashearY",0);y(this,"a",0);y(this,"b",0);y(this,"c",0);y(this,"d",0);y(this,"worldY",0);y(this,"worldX",0);y(this,"inherit",ce.Normal);y(this,"sorted",!1);y(this,"active",!1);if(!t)throw new Error("data cannot be null.");if(!e)throw new Error("skeleton cannot be null.");this.data=t,this.skeleton=e,this.parent=n,this.setToSetupPose()}isActive(){return this.active}update(t){this.updateWorldTransformWith(this.ax,this.ay,this.arotation,this.ascaleX,this.ascaleY,this.ashearX,this.ashearY)}updateWorldTransform(){this.updateWorldTransformWith(this.x,this.y,this.rotation,this.scaleX,this.scaleY,this.shearX,this.shearY)}updateWorldTransformWith(t,e,n,i,s,o,a){this.ax=t,this.ay=e,this.arotation=n,this.ascaleX=i,this.ascaleY=s,this.ashearX=o,this.ashearY=a;let c=this.parent;if(!c){let f=this.skeleton;const g=f.scaleX,_=f.scaleY,m=(n+o)*lt.degRad,p=(n+90+a)*lt.degRad;this.a=Math.cos(m)*i*g,this.b=Math.cos(p)*s*g,this.c=Math.sin(m)*i*_,this.d=Math.sin(p)*s*_,this.worldX=t*g+f.x,this.worldY=e*_+f.y;return}let l=c.a,h=c.b,u=c.c,d=c.d;switch(this.worldX=l*t+h*e+c.worldX,this.worldY=u*t+d*e+c.worldY,this.inherit){case ce.Normal:{const f=(n+o)*lt.degRad,g=(n+90+a)*lt.degRad,_=Math.cos(f)*i,m=Math.cos(g)*s,p=Math.sin(f)*i,M=Math.sin(g)*s;this.a=l*_+h*p,this.b=l*m+h*M,this.c=u*_+d*p,this.d=u*m+d*M;return}case ce.OnlyTranslation:{const f=(n+o)*lt.degRad,g=(n+90+a)*lt.degRad;this.a=Math.cos(f)*i,this.b=Math.cos(g)*s,this.c=Math.sin(f)*i,this.d=Math.sin(g)*s;break}case ce.NoRotationOrReflection:{let f=l*l+u*u,g=0;f>1e-4?(f=Math.abs(l*d-h*u)/f,l/=this.skeleton.scaleX,u/=this.skeleton.scaleY,h=u*f,d=l*f,g=Math.atan2(u,l)*lt.radDeg):(l=0,u=0,g=90-Math.atan2(d,h)*lt.radDeg);const _=(n+o-g)*lt.degRad,m=(n+a-g+90)*lt.degRad,p=Math.cos(_)*i,M=Math.cos(m)*s,x=Math.sin(_)*i,v=Math.sin(m)*s;this.a=l*p-h*x,this.b=l*M-h*v,this.c=u*p+d*x,this.d=u*M+d*v;break}case ce.NoScale:case ce.NoScaleOrReflection:{n*=lt.degRad;const f=Math.cos(n),g=Math.sin(n);let _=(l*f+h*g)/this.skeleton.scaleX,m=(u*f+d*g)/this.skeleton.scaleY,p=Math.sqrt(_*_+m*m);p>1e-5&&(p=1/p),_*=p,m*=p,p=Math.sqrt(_*_+m*m),this.inherit==ce.NoScale&&l*d-h*u<0!=(this.skeleton.scaleX<0!=this.skeleton.scaleY<0)&&(p=-p),n=Math.PI/2+Math.atan2(m,_);const M=Math.cos(n)*p,x=Math.sin(n)*p;o*=lt.degRad,a=(90+a)*lt.degRad;const v=Math.cos(o)*i,T=Math.cos(a)*s,S=Math.sin(o)*i,b=Math.sin(a)*s;this.a=_*v+M*S,this.b=_*T+M*b,this.c=m*v+x*S,this.d=m*T+x*b;break}}this.a*=this.skeleton.scaleX,this.b*=this.skeleton.scaleX,this.c*=this.skeleton.scaleY,this.d*=this.skeleton.scaleY}setToSetupPose(){let t=this.data;this.x=t.x,this.y=t.y,this.rotation=t.rotation,this.scaleX=t.scaleX,this.scaleY=t.scaleY,this.shearX=t.shearX,this.shearY=t.shearY,this.inherit=t.inherit}updateAppliedTransform(){let t=this.parent;if(!t){this.ax=this.worldX-this.skeleton.x,this.ay=this.worldY-this.skeleton.y,this.arotation=Math.atan2(this.c,this.a)*lt.radDeg,this.ascaleX=Math.sqrt(this.a*this.a+this.c*this.c),this.ascaleY=Math.sqrt(this.b*this.b+this.d*this.d),this.ashearX=0,this.ashearY=Math.atan2(this.a*this.b+this.c*this.d,this.a*this.d-this.b*this.c)*lt.radDeg;return}let e=t.a,n=t.b,i=t.c,s=t.d,o=1/(e*s-n*i),a=s*o,c=n*o,l=i*o,h=e*o,u=this.worldX-t.worldX,d=this.worldY-t.worldY;this.ax=u*a-d*c,this.ay=d*h-u*l;let f,g,_,m;if(this.inherit==ce.OnlyTranslation)f=this.a,g=this.b,_=this.c,m=this.d;else{switch(this.inherit){case ce.NoRotationOrReflection:{let T=Math.abs(e*s-n*i)/(e*e+i*i),S=e/this.skeleton.scaleX;n=-(i/this.skeleton.scaleY)*T*this.skeleton.scaleX,s=S*T*this.skeleton.scaleY,o=1/(e*s-n*i),a=s*o,c=n*o;break}case ce.NoScale:case ce.NoScaleOrReflection:let p=lt.cosDeg(this.rotation),M=lt.sinDeg(this.rotation);e=(e*p+n*M)/this.skeleton.scaleX,i=(i*p+s*M)/this.skeleton.scaleY;let x=Math.sqrt(e*e+i*i);x>1e-5&&(x=1/x),e*=x,i*=x,x=Math.sqrt(e*e+i*i),this.inherit==ce.NoScale&&o<0!=(this.skeleton.scaleX<0!=this.skeleton.scaleY<0)&&(x=-x);let v=lt.PI/2+Math.atan2(i,e);n=Math.cos(v)*x,s=Math.sin(v)*x,o=1/(e*s-n*i),a=s*o,c=n*o,l=i*o,h=e*o}f=a*this.a-c*this.c,g=a*this.b-c*this.d,_=h*this.c-l*this.a,m=h*this.d-l*this.b}if(this.ashearX=0,this.ascaleX=Math.sqrt(f*f+_*_),this.ascaleX>1e-4){let p=f*m-g*_;this.ascaleY=p/this.ascaleX,this.ashearY=-Math.atan2(f*g+_*m,p)*lt.radDeg,this.arotation=Math.atan2(_,f)*lt.radDeg}else this.ascaleX=0,this.ascaleY=Math.sqrt(g*g+m*m),this.ashearY=0,this.arotation=90-Math.atan2(m,g)*lt.radDeg}getWorldRotationX(){return Math.atan2(this.c,this.a)*lt.radDeg}getWorldRotationY(){return Math.atan2(this.d,this.b)*lt.radDeg}getWorldScaleX(){return Math.sqrt(this.a*this.a+this.c*this.c)}getWorldScaleY(){return Math.sqrt(this.b*this.b+this.d*this.d)}worldToLocal(t){let e=1/(this.a*this.d-this.b*this.c),n=t.x-this.worldX,i=t.y-this.worldY;return t.x=n*this.d*e-i*this.b*e,t.y=i*this.a*e-n*this.c*e,t}localToWorld(t){let e=t.x,n=t.y;return t.x=e*this.a+n*this.b+this.worldX,t.y=e*this.c+n*this.d+this.worldY,t}worldToParent(t){if(t==null)throw new Error("world cannot be null.");return this.parent==null?t:this.parent.worldToLocal(t)}parentToWorld(t){if(t==null)throw new Error("world cannot be null.");return this.parent==null?t:this.parent.localToWorld(t)}worldToLocalRotation(t){let e=lt.sinDeg(t),n=lt.cosDeg(t);return Math.atan2(this.a*e-this.c*n,this.d*n-this.b*e)*lt.radDeg+this.rotation-this.shearX}localToWorldRotation(t){t-=this.rotation-this.shearX;let e=lt.sinDeg(t),n=lt.cosDeg(t);return Math.atan2(n*this.c+e*this.d,n*this.a+e*this.b)*lt.radDeg}rotateWorld(t){t*=lt.degRad;const e=Math.sin(t),n=Math.cos(t),i=this.a,s=this.b;this.a=n*i-e*this.c,this.b=n*s-e*this.d,this.c=e*i+n*this.c,this.d=e*s+n*this.d}}class Nr{constructor(t,e,n){y(this,"name");y(this,"order");y(this,"skinRequired");this.name=t,this.order=e,this.skinRequired=n}}class x0{constructor(t,e="",n=new Bc){y(this,"pathPrefix","");y(this,"textureLoader");y(this,"downloader");y(this,"assets",{});y(this,"errors",{});y(this,"toLoad",0);y(this,"loaded",0);this.textureLoader=t,this.pathPrefix=e,this.downloader=n}start(t){return this.toLoad++,this.pathPrefix+t}success(t,e,n){this.toLoad--,this.loaded++,this.assets[e]=n,t&&t(e,n)}error(t,e,n){this.toLoad--,this.loaded++,this.errors[e]=n,t&&t(e,n)}loadAll(){return new Promise((e,n)=>{let i=()=>{if(this.isLoadingComplete()){this.hasErrors()?n(this.errors):e(this);return}requestAnimationFrame(i)};requestAnimationFrame(i)})}setRawDataURI(t,e){this.downloader.rawDataUris[this.pathPrefix+t]=e}loadBinary(t,e=()=>{},n=()=>{}){t=this.start(t),this.downloader.downloadBinary(t,i=>{this.success(e,t,i)},(i,s)=>{this.error(n,t,`Couldn't load binary ${t}: status ${i}, ${s}`)})}loadText(t,e=()=>{},n=()=>{}){t=this.start(t),this.downloader.downloadText(t,i=>{this.success(e,t,i)},(i,s)=>{this.error(n,t,`Couldn't load text ${t}: status ${i}, ${s}`)})}loadJson(t,e=()=>{},n=()=>{}){t=this.start(t),this.downloader.downloadJson(t,i=>{this.success(e,t,i)},(i,s)=>{this.error(n,t,`Couldn't load JSON ${t}: status ${i}, ${s}`)})}loadTexture(t,e=()=>{},n=()=>{}){if(t=this.start(t),!!!(typeof window<"u"&&typeof navigator<"u"&&window.document))fetch(t,{mode:"cors"}).then(o=>o.ok?o.blob():(this.error(n,t,`Couldn't load image: ${t}`),null)).then(o=>o?createImageBitmap(o,{premultiplyAlpha:"none",colorSpaceConversion:"none"}):null).then(o=>{o&&this.success(e,t,this.textureLoader(o))});else{let o=new Image;o.crossOrigin="anonymous",o.onload=()=>{this.success(e,t,this.textureLoader(o))},o.onerror=()=>{this.error(n,t,`Couldn't load image: ${t}`)},this.downloader.rawDataUris[t]&&(t=this.downloader.rawDataUris[t]),o.src=t}}loadTextureAtlas(t,e=()=>{},n=()=>{},i){let s=t.lastIndexOf("/"),o=s>=0?t.substring(0,s+1):"";t=this.start(t),this.downloader.downloadText(t,a=>{try{let c=new f0(a),l=c.pages.length,h=!1;for(let u of c.pages)this.loadTexture(i?i[u.name]:o+u.name,(d,f)=>{h||(u.setTexture(f),--l==0&&this.success(e,t,c))},(d,f)=>{h||this.error(n,t,`Couldn't load texture atlas ${t} page image: ${d}`),h=!0})}catch(c){this.error(n,t,`Couldn't parse texture atlas ${t}: ${c.message}`)}},(a,c)=>{this.error(n,t,`Couldn't load texture atlas ${t}: status ${a}, ${c}`)})}get(t){return this.assets[this.pathPrefix+t]}require(t){t=this.pathPrefix+t;let e=this.assets[t];if(e)return e;let n=this.errors[t];throw Error("Asset not found: "+t+(n?`
`+n:""))}remove(t){t=this.pathPrefix+t;let e=this.assets[t];return e.dispose&&e.dispose(),delete this.assets[t],e}removeAll(){for(let t in this.assets){let e=this.assets[t];e.dispose&&e.dispose()}this.assets={}}isLoadingComplete(){return this.toLoad==0}getToLoad(){return this.toLoad}getLoaded(){return this.loaded}dispose(){this.removeAll()}hasErrors(){return Object.keys(this.errors).length>0}getErrors(){return this.errors}}class Bc{constructor(){y(this,"callbacks",{});y(this,"rawDataUris",{})}dataUriToString(t){if(!t.startsWith("data:"))throw new Error("Not a data URI.");let e=t.indexOf("base64,");return e!=-1?(e+=7,atob(t.substr(e))):t.substr(t.indexOf(",")+1)}base64ToUint8Array(t){for(var e=window.atob(t),n=e.length,i=new Uint8Array(n),s=0;s<n;s++)i[s]=e.charCodeAt(s);return i}dataUriToUint8Array(t){if(!t.startsWith("data:"))throw new Error("Not a data URI.");let e=t.indexOf("base64,");if(e==-1)throw new Error("Not a binary data URI.");return e+=7,this.base64ToUint8Array(t.substr(e))}downloadText(t,e,n){if(this.start(t,e,n))return;if(this.rawDataUris[t]){try{let o=this.rawDataUris[t];this.finish(t,200,this.dataUriToString(o))}catch(o){this.finish(t,400,JSON.stringify(o))}return}let i=new XMLHttpRequest;i.overrideMimeType("text/html"),i.open("GET",t,!0);let s=()=>{this.finish(t,i.status,i.responseText)};i.onload=s,i.onerror=s,i.send()}downloadJson(t,e,n){this.downloadText(t,i=>{e(JSON.parse(i))},n)}downloadBinary(t,e,n){if(this.start(t,e,n))return;if(this.rawDataUris[t]){try{let o=this.rawDataUris[t];this.finish(t,200,this.dataUriToUint8Array(o))}catch(o){this.finish(t,400,JSON.stringify(o))}return}let i=new XMLHttpRequest;i.open("GET",t,!0),i.responseType="arraybuffer";let s=()=>{this.finish(t,i.status,i.response)};i.onload=()=>{i.status==200||i.status==0?this.finish(t,200,new Uint8Array(i.response)):s()},i.onerror=s,i.send()}start(t,e,n){let i=this.callbacks[t];try{if(i)return!0;this.callbacks[t]=i=[]}finally{i.push(e,n)}}finish(t,e,n){let i=this.callbacks[t];delete this.callbacks[t];let s=e==200||e==0?[n]:[e,n];for(let o=s.length-1,a=i.length;o<a;o+=2)i[o].apply(null,s)}}class v0{constructor(t,e){y(this,"data");y(this,"intValue",0);y(this,"floatValue",0);y(this,"stringValue",null);y(this,"time",0);y(this,"volume",0);y(this,"balance",0);if(!e)throw new Error("data cannot be null.");this.time=t,this.data=e}}class y0{constructor(t){y(this,"name");y(this,"intValue",0);y(this,"floatValue",0);y(this,"stringValue",null);y(this,"audioPath",null);y(this,"volume",0);y(this,"balance",0);this.name=t}}class M0{constructor(t,e){y(this,"data");y(this,"bones");y(this,"target");y(this,"bendDirection",0);y(this,"compress",!1);y(this,"stretch",!1);y(this,"mix",1);y(this,"softness",0);y(this,"active",!1);if(!t)throw new Error("data cannot be null.");if(!e)throw new Error("skeleton cannot be null.");this.data=t,this.bones=new Array;for(let i=0;i<t.bones.length;i++){let s=e.findBone(t.bones[i].name);if(!s)throw new Error(`Couldn't find bone ${t.bones[i].name}`);this.bones.push(s)}let n=e.findBone(t.target.name);if(!n)throw new Error(`Couldn't find bone ${t.target.name}`);this.target=n,this.mix=t.mix,this.softness=t.softness,this.bendDirection=t.bendDirection,this.compress=t.compress,this.stretch=t.stretch}isActive(){return this.active}setToSetupPose(){const t=this.data;this.mix=t.mix,this.softness=t.softness,this.bendDirection=t.bendDirection,this.compress=t.compress,this.stretch=t.stretch}update(t){if(this.mix==0)return;let e=this.target,n=this.bones;switch(n.length){case 1:this.apply1(n[0],e.worldX,e.worldY,this.compress,this.stretch,this.data.uniform,this.mix);break;case 2:this.apply2(n[0],n[1],e.worldX,e.worldY,this.bendDirection,this.stretch,this.data.uniform,this.softness,this.mix);break}}apply1(t,e,n,i,s,o,a){let c=t.parent;if(!c)throw new Error("IK bone must have parent.");let l=c.a,h=c.b,u=c.c,d=c.d,f=-t.ashearX-t.arotation,g=0,_=0;switch(t.inherit){case ce.OnlyTranslation:g=(e-t.worldX)*lt.signum(t.skeleton.scaleX),_=(n-t.worldY)*lt.signum(t.skeleton.scaleY);break;case ce.NoRotationOrReflection:let M=Math.abs(l*d-h*u)/Math.max(1e-4,l*l+u*u),x=l/t.skeleton.scaleX,v=u/t.skeleton.scaleY;h=-v*M*t.skeleton.scaleX,d=x*M*t.skeleton.scaleY,f+=Math.atan2(v,x)*lt.radDeg;default:let T=e-c.worldX,S=n-c.worldY,b=l*d-h*u;Math.abs(b)<=1e-4?(g=0,_=0):(g=(T*d-S*h)/b-t.ax,_=(S*l-T*u)/b-t.ay)}f+=Math.atan2(_,g)*lt.radDeg,t.ascaleX<0&&(f+=180),f>180?f-=360:f<-180&&(f+=360);let m=t.ascaleX,p=t.ascaleY;if(i||s){switch(t.inherit){case ce.NoScale:case ce.NoScaleOrReflection:g=e-t.worldX,_=n-t.worldY}const M=t.data.length*m;if(M>1e-4){const x=g*g+_*_;if(i&&x<M*M||s&&x>M*M){const v=(Math.sqrt(x)/M-1)*a+1;m*=v,o&&(p*=v)}}}t.updateWorldTransformWith(t.ax,t.ay,t.arotation+f*a,m,p,t.ashearX,t.ashearY)}apply2(t,e,n,i,s,o,a,c,l){if(t.inherit!=ce.Normal||e.inherit!=ce.Normal)return;let h=t.ax,u=t.ay,d=t.ascaleX,f=t.ascaleY,g=d,_=f,m=e.ascaleX,p=0,M=0,x=0;d<0?(d=-d,p=180,x=-1):(p=0,x=1),f<0&&(f=-f,x=-x),m<0?(m=-m,M=180):M=0;let v=e.ax,T=0,S=0,b=0,L=t.a,E=t.b,w=t.c,R=t.d,B=Math.abs(d-f)<=1e-4;!B||o?(T=0,S=L*v+t.worldX,b=w*v+t.worldY):(T=e.ay,S=L*v+E*T+t.worldX,b=w*v+R*T+t.worldY);let F=t.parent;if(!F)throw new Error("IK parent must itself have a parent.");L=F.a,E=F.b,w=F.c,R=F.d;let I=L*R-E*w,U=S-F.worldX,k=b-F.worldY;I=Math.abs(I)<=1e-4?0:1/I;let Y=(U*R-k*E)*I-h,W=(k*L-U*w)*I-u,Q=Math.sqrt(Y*Y+W*W),it=e.data.length*m,at,vt;if(Q<1e-4){this.apply1(t,n,i,!1,o,!1,l),e.updateWorldTransformWith(v,T,0,e.ascaleX,e.ascaleY,e.ashearX,e.ashearY);return}U=n-F.worldX,k=i-F.worldY;let ot=(U*R-k*E)*I-h,G=(k*L-U*w)*I-u,J=ot*ot+G*G;if(c!=0){c*=d*(m+1)*.5;let yt=Math.sqrt(J),wt=yt-Q-it*d+c;if(wt>0){let At=Math.min(1,wt/(c*2))-1;At=(wt-c*(1-At*At))/yt,ot-=At*ot,G-=At*G,J=ot*ot+G*G}}t:if(B){it*=d;let yt=(J-Q*Q-it*it)/(2*Q*it);yt<-1?(yt=-1,vt=Math.PI*s):yt>1?(yt=1,vt=0,o&&(L=(Math.sqrt(J)/(Q+it)-1)*l+1,g*=L,a&&(_*=L))):vt=Math.acos(yt)*s,L=Q+it*yt,E=it*Math.sin(vt),at=Math.atan2(G*L-ot*E,ot*L+G*E)}else{L=d*it,E=f*it;let yt=L*L,wt=E*E,At=Math.atan2(G,ot);w=wt*Q*Q+yt*J-yt*wt;let Kt=-2*wt*Q,N=wt-yt;if(R=Kt*Kt-4*N*w,R>=0){let C=Math.sqrt(R);Kt<0&&(C=-C),C=-(Kt+C)*.5;let $=C/N,nt=w/C,st=Math.abs($)<Math.abs(nt)?$:nt;if($=J-st*st,$>=0){k=Math.sqrt($)*s,at=At-Math.atan2(k,st),vt=Math.atan2(k/f,(st-Q)/d);break t}}let se=lt.PI,Wt=Q-L,Yt=Wt*Wt,Et=0,re=0,Pt=Q+L,It=Pt*Pt,D=0;w=-L*Q/(yt-wt),w>=-1&&w<=1&&(w=Math.acos(w),U=L*Math.cos(w)+Q,k=E*Math.sin(w),R=U*U+k*k,R<Yt&&(se=w,Yt=R,Wt=U,Et=k),R>It&&(re=w,It=R,Pt=U,D=k)),J<=(Yt+It)*.5?(at=At-Math.atan2(Et*s,Wt),vt=se*s):(at=At-Math.atan2(D*s,Pt),vt=re*s)}let dt=Math.atan2(T,v)*x,ut=t.arotation;at=(at-dt)*lt.radDeg+p-ut,at>180?at-=360:at<-180&&(at+=360),t.updateWorldTransformWith(h,u,ut+at*l,g,_,0,0),ut=e.arotation,vt=((vt+dt)*lt.radDeg-e.ashearX)*x+M-ut,vt>180?vt-=360:vt<-180&&(vt+=360),e.updateWorldTransformWith(v,T,ut+vt*l,e.ascaleX,e.ascaleY,e.ashearX,e.ashearY)}}class S0 extends Nr{constructor(e){super(e,0,!1);y(this,"bones",new Array);y(this,"_target",null);y(this,"bendDirection",0);y(this,"compress",!1);y(this,"stretch",!1);y(this,"uniform",!1);y(this,"mix",0);y(this,"softness",0)}set target(e){this._target=e}get target(){if(this._target)return this._target;throw new Error("BoneData not set.")}}class b0 extends Nr{constructor(e){super(e,0,!1);y(this,"bones",new Array);y(this,"_target",null);y(this,"positionMode",Qn.Fixed);y(this,"spacingMode",De.Fixed);y(this,"rotateMode",xi.Chain);y(this,"offsetRotation",0);y(this,"position",0);y(this,"spacing",0);y(this,"mixRotate",0);y(this,"mixX",0);y(this,"mixY",0)}set target(e){this._target=e}get target(){if(this._target)return this._target;throw new Error("SlotData not set.")}}var Qn;(function(r){r[r.Fixed=0]="Fixed",r[r.Percent=1]="Percent"})(Qn||(Qn={}));var De;(function(r){r[r.Length=0]="Length",r[r.Fixed=1]="Fixed",r[r.Percent=2]="Percent",r[r.Proportional=3]="Proportional"})(De||(De={}));var xi;(function(r){r[r.Tangent=0]="Tangent",r[r.Chain=1]="Chain",r[r.ChainScale=2]="ChainScale"})(xi||(xi={}));const Ge=class Ge{constructor(t,e){y(this,"data");y(this,"bones");y(this,"target");y(this,"position",0);y(this,"spacing",0);y(this,"mixRotate",0);y(this,"mixX",0);y(this,"mixY",0);y(this,"spaces",new Array);y(this,"positions",new Array);y(this,"world",new Array);y(this,"curves",new Array);y(this,"lengths",new Array);y(this,"segments",new Array);y(this,"active",!1);if(!t)throw new Error("data cannot be null.");if(!e)throw new Error("skeleton cannot be null.");this.data=t,this.bones=new Array;for(let i=0,s=t.bones.length;i<s;i++){let o=e.findBone(t.bones[i].name);if(!o)throw new Error(`Couldn't find bone ${t.bones[i].name}.`);this.bones.push(o)}let n=e.findSlot(t.target.name);if(!n)throw new Error(`Couldn't find target bone ${t.target.name}`);this.target=n,this.position=t.position,this.spacing=t.spacing,this.mixRotate=t.mixRotate,this.mixX=t.mixX,this.mixY=t.mixY}isActive(){return this.active}setToSetupPose(){const t=this.data;this.position=t.position,this.spacing=t.spacing,this.mixRotate=t.mixRotate,this.mixX=t.mixX,this.mixY=t.mixY}update(t){let e=this.target.getAttachment();if(!(e instanceof as))return;let n=this.mixRotate,i=this.mixX,s=this.mixY;if(n==0&&i==0&&s==0)return;let o=this.data,a=o.rotateMode==xi.Tangent,c=o.rotateMode==xi.ChainScale,l=this.bones,h=l.length,u=a?h:h+1,d=mt.setArraySize(this.spaces,u),f=c?this.lengths=mt.setArraySize(this.lengths,h):[],g=this.spacing;switch(o.spacingMode){case De.Percent:if(c)for(let S=0,b=u-1;S<b;S++){let L=l[S],E=L.data.length,w=E*L.a,R=E*L.c;f[S]=Math.sqrt(w*w+R*R)}mt.arrayFill(d,1,u,g);break;case De.Proportional:let v=0;for(let S=0,b=u-1;S<b;){let L=l[S],E=L.data.length;if(E<Ge.epsilon)c&&(f[S]=0),d[++S]=g;else{let w=E*L.a,R=E*L.c,B=Math.sqrt(w*w+R*R);c&&(f[S]=B),d[++S]=B,v+=B}}if(v>0){v=u/v*g;for(let S=1;S<u;S++)d[S]*=v}break;default:let T=o.spacingMode==De.Length;for(let S=0,b=u-1;S<b;){let L=l[S],E=L.data.length;if(E<Ge.epsilon)c&&(f[S]=0),d[++S]=g;else{let w=E*L.a,R=E*L.c,B=Math.sqrt(w*w+R*R);c&&(f[S]=B),d[++S]=(T?E+g:g)*B/E}}}let _=this.computeWorldPositions(e,u,a),m=_[0],p=_[1],M=o.offsetRotation,x=!1;if(M==0)x=o.rotateMode==xi.Chain;else{x=!1;let v=this.target.bone;M*=v.a*v.d-v.b*v.c>0?lt.degRad:-lt.degRad}for(let v=0,T=3;v<h;v++,T+=3){let S=l[v];S.worldX+=(m-S.worldX)*i,S.worldY+=(p-S.worldY)*s;let b=_[T],L=_[T+1],E=b-m,w=L-p;if(c){let R=f[v];if(R!=0){let B=(Math.sqrt(E*E+w*w)/R-1)*n+1;S.a*=B,S.c*=B}}if(m=b,p=L,n>0){let R=S.a,B=S.b,F=S.c,I=S.d,U=0,k=0,Y=0;if(a?U=_[T-1]:d[v+1]==0?U=_[T+2]:U=Math.atan2(w,E),U-=Math.atan2(F,R),x){k=Math.cos(U),Y=Math.sin(U);let W=S.data.length;m+=(W*(k*R-Y*F)-E)*n,p+=(W*(Y*R+k*F)-w)*n}else U+=M;U>lt.PI?U-=lt.PI2:U<-lt.PI&&(U+=lt.PI2),U*=n,k=Math.cos(U),Y=Math.sin(U),S.a=k*R-Y*F,S.b=k*B-Y*I,S.c=Y*R+k*F,S.d=Y*B+k*I}S.updateAppliedTransform()}}computeWorldPositions(t,e,n){let i=this.target,s=this.position,o=this.spaces,a=mt.setArraySize(this.positions,e*3+2),c=this.world,l=t.closed,h=t.worldVerticesLength,u=h/6,d=Ge.NONE;if(!t.constantSpeed){let W=t.lengths;u-=l?1:2;let Q=W[u];this.data.positionMode==Qn.Percent&&(s*=Q);let it;switch(this.data.spacingMode){case De.Percent:it=Q;break;case De.Proportional:it=Q/e;break;default:it=1}c=mt.setArraySize(this.world,8);for(let at=0,vt=0,ot=0;at<e;at++,vt+=3){let G=o[at]*it;s+=G;let J=s;if(l)J%=Q,J<0&&(J+=Q),ot=0;else if(J<0){d!=Ge.BEFORE&&(d=Ge.BEFORE,t.computeWorldVertices(i,2,4,c,0,2)),this.addBeforePosition(J,c,0,a,vt);continue}else if(J>Q){d!=Ge.AFTER&&(d=Ge.AFTER,t.computeWorldVertices(i,h-6,4,c,0,2)),this.addAfterPosition(J-Q,c,0,a,vt);continue}for(;;ot++){let dt=W[ot];if(!(J>dt)){if(ot==0)J/=dt;else{let ut=W[ot-1];J=(J-ut)/(dt-ut)}break}}ot!=d&&(d=ot,l&&ot==u?(t.computeWorldVertices(i,h-4,4,c,0,2),t.computeWorldVertices(i,0,4,c,4,2)):t.computeWorldVertices(i,ot*6+2,8,c,0,2)),this.addCurvePosition(J,c[0],c[1],c[2],c[3],c[4],c[5],c[6],c[7],a,vt,n||at>0&&G==0)}return a}l?(h+=2,c=mt.setArraySize(this.world,h),t.computeWorldVertices(i,2,h-4,c,0,2),t.computeWorldVertices(i,0,2,c,h-4,2),c[h-2]=c[0],c[h-1]=c[1]):(u--,h-=4,c=mt.setArraySize(this.world,h),t.computeWorldVertices(i,2,h,c,0,2));let f=mt.setArraySize(this.curves,u),g=0,_=c[0],m=c[1],p=0,M=0,x=0,v=0,T=0,S=0,b=0,L=0,E=0,w=0,R=0,B=0,F=0,I=0;for(let W=0,Q=2;W<u;W++,Q+=6)p=c[Q],M=c[Q+1],x=c[Q+2],v=c[Q+3],T=c[Q+4],S=c[Q+5],b=(_-p*2+x)*.1875,L=(m-M*2+v)*.1875,E=((p-x)*3-_+T)*.09375,w=((M-v)*3-m+S)*.09375,R=b*2+E,B=L*2+w,F=(p-_)*.75+b+E*.16666667,I=(M-m)*.75+L+w*.16666667,g+=Math.sqrt(F*F+I*I),F+=R,I+=B,R+=E,B+=w,g+=Math.sqrt(F*F+I*I),F+=R,I+=B,g+=Math.sqrt(F*F+I*I),F+=R+E,I+=B+w,g+=Math.sqrt(F*F+I*I),f[W]=g,_=T,m=S;this.data.positionMode==Qn.Percent&&(s*=g);let U;switch(this.data.spacingMode){case De.Percent:U=g;break;case De.Proportional:U=g/e;break;default:U=1}let k=this.segments,Y=0;for(let W=0,Q=0,it=0,at=0;W<e;W++,Q+=3){let vt=o[W]*U;s+=vt;let ot=s;if(l)ot%=g,ot<0&&(ot+=g),it=0;else if(ot<0){this.addBeforePosition(ot,c,0,a,Q);continue}else if(ot>g){this.addAfterPosition(ot-g,c,h-4,a,Q);continue}for(;;it++){let G=f[it];if(!(ot>G)){if(it==0)ot/=G;else{let J=f[it-1];ot=(ot-J)/(G-J)}break}}if(it!=d){d=it;let G=it*6;for(_=c[G],m=c[G+1],p=c[G+2],M=c[G+3],x=c[G+4],v=c[G+5],T=c[G+6],S=c[G+7],b=(_-p*2+x)*.03,L=(m-M*2+v)*.03,E=((p-x)*3-_+T)*.006,w=((M-v)*3-m+S)*.006,R=b*2+E,B=L*2+w,F=(p-_)*.3+b+E*.16666667,I=(M-m)*.3+L+w*.16666667,Y=Math.sqrt(F*F+I*I),k[0]=Y,G=1;G<8;G++)F+=R,I+=B,R+=E,B+=w,Y+=Math.sqrt(F*F+I*I),k[G]=Y;F+=R,I+=B,Y+=Math.sqrt(F*F+I*I),k[8]=Y,F+=R+E,I+=B+w,Y+=Math.sqrt(F*F+I*I),k[9]=Y,at=0}for(ot*=Y;;at++){let G=k[at];if(!(ot>G)){if(at==0)ot/=G;else{let J=k[at-1];ot=at+(ot-J)/(G-J)}break}}this.addCurvePosition(ot*.1,_,m,p,M,x,v,T,S,a,Q,n||W>0&&vt==0)}return a}addBeforePosition(t,e,n,i,s){let o=e[n],a=e[n+1],c=e[n+2]-o,l=e[n+3]-a,h=Math.atan2(l,c);i[s]=o+t*Math.cos(h),i[s+1]=a+t*Math.sin(h),i[s+2]=h}addAfterPosition(t,e,n,i,s){let o=e[n+2],a=e[n+3],c=o-e[n],l=a-e[n+1],h=Math.atan2(l,c);i[s]=o+t*Math.cos(h),i[s+1]=a+t*Math.sin(h),i[s+2]=h}addCurvePosition(t,e,n,i,s,o,a,c,l,h,u,d){if(t==0||isNaN(t)){h[u]=e,h[u+1]=n,h[u+2]=Math.atan2(s-n,i-e);return}let f=t*t,g=f*t,_=1-t,m=_*_,p=m*_,M=_*t,x=M*3,v=_*x,T=x*t,S=e*p+i*v+o*T+c*g,b=n*p+s*v+a*T+l*g;h[u]=S,h[u+1]=b,d&&(t<.001?h[u+2]=Math.atan2(s-n,i-e):h[u+2]=Math.atan2(b-(n*m+s*M*2+a*f),S-(e*m+i*M*2+o*f)))}};y(Ge,"NONE",-1),y(Ge,"BEFORE",-2),y(Ge,"AFTER",-3),y(Ge,"epsilon",1e-5);let ro=Ge;class E0{constructor(t,e){y(this,"data");y(this,"_bone",null);y(this,"inertia",0);y(this,"strength",0);y(this,"damping",0);y(this,"massInverse",0);y(this,"wind",0);y(this,"gravity",0);y(this,"mix",0);y(this,"_reset",!0);y(this,"ux",0);y(this,"uy",0);y(this,"cx",0);y(this,"cy",0);y(this,"tx",0);y(this,"ty",0);y(this,"xOffset",0);y(this,"xVelocity",0);y(this,"yOffset",0);y(this,"yVelocity",0);y(this,"rotateOffset",0);y(this,"rotateVelocity",0);y(this,"scaleOffset",0);y(this,"scaleVelocity",0);y(this,"active",!1);y(this,"skeleton");y(this,"remaining",0);y(this,"lastTime",0);this.data=t,this.skeleton=e,this.bone=e.bones[t.bone.index],this.inertia=t.inertia,this.strength=t.strength,this.damping=t.damping,this.massInverse=t.massInverse,this.wind=t.wind,this.gravity=t.gravity,this.mix=t.mix}set bone(t){this._bone=t}get bone(){if(this._bone)return this._bone;throw new Error("Bone not set.")}reset(){this.remaining=0,this.lastTime=this.skeleton.time,this._reset=!0,this.xOffset=0,this.xVelocity=0,this.yOffset=0,this.yVelocity=0,this.rotateOffset=0,this.rotateVelocity=0,this.scaleOffset=0,this.scaleVelocity=0}setToSetupPose(){const t=this.data;this.inertia=t.inertia,this.strength=t.strength,this.damping=t.damping,this.massInverse=t.massInverse,this.wind=t.wind,this.gravity=t.gravity,this.mix=t.mix}isActive(){return this.active}update(t){const e=this.mix;if(e==0)return;const n=this.data.x>0,i=this.data.y>0,s=this.data.rotate>0||this.data.shearX>0,o=this.data.scaleX>0,a=this.bone,c=a.data.length;switch(t){case $n.none:return;case $n.reset:this.reset();case $n.update:const l=this.skeleton,h=Math.max(this.skeleton.time-this.lastTime,0);this.remaining+=h,this.lastTime=l.time;const u=a.worldX,d=a.worldY;if(this._reset)this._reset=!1,this.ux=u,this.uy=d;else{let f=this.remaining,g=this.inertia,_=this.data.step,m=this.skeleton.data.referenceScale,p=-1,M=this.data.limit*h,x=M*Math.abs(l.scaleY);if(M*=Math.abs(l.scaleX),n||i){if(n){const v=(this.ux-u)*g;this.xOffset+=v>M?M:v<-M?-M:v,this.ux=u}if(i){const v=(this.uy-d)*g;this.yOffset+=v>x?x:v<-x?-x:v,this.uy=d}if(f>=_){p=Math.pow(this.damping,60*_);const v=this.massInverse*_,T=this.strength,S=this.wind*m,b=this.gravity*m;do n&&(this.xVelocity+=(S-this.xOffset*T)*v,this.xOffset+=this.xVelocity*_,this.xVelocity*=p),i&&(this.yVelocity-=(b+this.yOffset*T)*v,this.yOffset+=this.yVelocity*_,this.yVelocity*=p),f-=_;while(f>=_)}n&&(a.worldX+=this.xOffset*e*this.data.x),i&&(a.worldY+=this.yOffset*e*this.data.y)}if(s||o){let v=Math.atan2(a.c,a.a),T=0,S=0,b=0,L=this.cx-a.worldX,E=this.cy-a.worldY;if(L>M?L=M:L<-M&&(L=-M),E>x?E=x:E<-x&&(E=-x),s){b=(this.data.rotate+this.data.shearX)*e;let w=Math.atan2(E+this.ty,L+this.tx)-v-this.rotateOffset*b;this.rotateOffset+=(w-Math.ceil(w*lt.invPI2-.5)*lt.PI2)*g,w=this.rotateOffset*b+v,T=Math.cos(w),S=Math.sin(w),o&&(w=c*a.getWorldScaleX(),w>0&&(this.scaleOffset+=(L*T+E*S)*g/w))}else{T=Math.cos(v),S=Math.sin(v);const w=c*a.getWorldScaleX();w>0&&(this.scaleOffset+=(L*T+E*S)*g/w)}if(f=this.remaining,f>=_){p==-1&&(p=Math.pow(this.damping,60*_));const w=this.massInverse*_,R=this.strength,B=this.wind,F=this.gravity,I=c/m;for(;;)if(f-=_,o&&(this.scaleVelocity+=(B*T-F*S-this.scaleOffset*R)*w,this.scaleOffset+=this.scaleVelocity*_,this.scaleVelocity*=p),s){if(this.rotateVelocity-=((B*S+F*T)*I+this.rotateOffset*R)*w,this.rotateOffset+=this.rotateVelocity*_,this.rotateVelocity*=p,f<_)break;const U=this.rotateOffset*b+v;T=Math.cos(U),S=Math.sin(U)}else if(f<_)break}}this.remaining=f}this.cx=a.worldX,this.cy=a.worldY;break;case $n.pose:n&&(a.worldX+=this.xOffset*e*this.data.x),i&&(a.worldY+=this.yOffset*e*this.data.y)}if(s){let l=this.rotateOffset*e,h=0,u=0,d=0;if(this.data.shearX>0){let f=0;this.data.rotate>0&&(f=l*this.data.rotate,h=Math.sin(f),u=Math.cos(f),d=a.b,a.b=u*d-h*a.d,a.d=h*d+u*a.d),f+=l*this.data.shearX,h=Math.sin(f),u=Math.cos(f),d=a.a,a.a=u*d-h*a.c,a.c=h*d+u*a.c}else l*=this.data.rotate,h=Math.sin(l),u=Math.cos(l),d=a.a,a.a=u*d-h*a.c,a.c=h*d+u*a.c,d=a.b,a.b=u*d-h*a.d,a.d=h*d+u*a.d}if(o){const l=1+this.scaleOffset*e*this.data.scaleX;a.a*=l,a.c*=l}t!=$n.pose&&(this.tx=c*a.a,this.ty=c*a.c),a.updateAppliedTransform()}translate(t,e){this.ux-=t,this.uy-=e,this.cx-=t,this.cy-=e}rotate(t,e,n){const i=n*lt.degRad,s=Math.cos(i),o=Math.sin(i),a=this.cx-t,c=this.cy-e;this.translate(a*s-c*o-a,a*o+c*s-c)}}class w0{constructor(t,e){y(this,"data");y(this,"bone");y(this,"color");y(this,"darkColor",null);y(this,"attachment",null);y(this,"attachmentState",0);y(this,"sequenceIndex",-1);y(this,"deform",new Array);if(!t)throw new Error("data cannot be null.");if(!e)throw new Error("bone cannot be null.");this.data=t,this.bone=e,this.color=new Jt,this.darkColor=t.darkColor?new Jt:null,this.setToSetupPose()}getSkeleton(){return this.bone.skeleton}getAttachment(){return this.attachment}setAttachment(t){this.attachment!=t&&((!(t instanceof hn)||!(this.attachment instanceof hn)||t.timelineAttachment!=this.attachment.timelineAttachment)&&(this.deform.length=0),this.attachment=t,this.sequenceIndex=-1)}setToSetupPose(){this.color.setFromColor(this.data.color),this.darkColor&&this.darkColor.setFromColor(this.data.darkColor),this.data.attachmentName?(this.attachment=null,this.setAttachment(this.bone.skeleton.getAttachment(this.data.index,this.data.attachmentName))):this.attachment=null}}class A0{constructor(t,e){y(this,"data");y(this,"bones");y(this,"target");y(this,"mixRotate",0);y(this,"mixX",0);y(this,"mixY",0);y(this,"mixScaleX",0);y(this,"mixScaleY",0);y(this,"mixShearY",0);y(this,"temp",new ws);y(this,"active",!1);if(!t)throw new Error("data cannot be null.");if(!e)throw new Error("skeleton cannot be null.");this.data=t,this.bones=new Array;for(let i=0;i<t.bones.length;i++){let s=e.findBone(t.bones[i].name);if(!s)throw new Error(`Couldn't find bone ${t.bones[i].name}.`);this.bones.push(s)}let n=e.findBone(t.target.name);if(!n)throw new Error(`Couldn't find target bone ${t.target.name}.`);this.target=n,this.mixRotate=t.mixRotate,this.mixX=t.mixX,this.mixY=t.mixY,this.mixScaleX=t.mixScaleX,this.mixScaleY=t.mixScaleY,this.mixShearY=t.mixShearY}isActive(){return this.active}setToSetupPose(){const t=this.data;this.mixRotate=t.mixRotate,this.mixX=t.mixX,this.mixY=t.mixY,this.mixScaleX=t.mixScaleX,this.mixScaleY=t.mixScaleY,this.mixShearY=t.mixShearY}update(t){this.mixRotate==0&&this.mixX==0&&this.mixY==0&&this.mixScaleX==0&&this.mixScaleY==0&&this.mixShearY==0||(this.data.local?this.data.relative?this.applyRelativeLocal():this.applyAbsoluteLocal():this.data.relative?this.applyRelativeWorld():this.applyAbsoluteWorld())}applyAbsoluteWorld(){let t=this.mixRotate,e=this.mixX,n=this.mixY,i=this.mixScaleX,s=this.mixScaleY,o=this.mixShearY,a=e!=0||n!=0,c=this.target,l=c.a,h=c.b,u=c.c,d=c.d,f=l*d-h*u>0?lt.degRad:-lt.degRad,g=this.data.offsetRotation*f,_=this.data.offsetShearY*f,m=this.bones;for(let p=0,M=m.length;p<M;p++){let x=m[p];if(t!=0){let v=x.a,T=x.b,S=x.c,b=x.d,L=Math.atan2(u,l)-Math.atan2(S,v)+g;L>lt.PI?L-=lt.PI2:L<-lt.PI&&(L+=lt.PI2),L*=t;let E=Math.cos(L),w=Math.sin(L);x.a=E*v-w*S,x.b=E*T-w*b,x.c=w*v+E*S,x.d=w*T+E*b}if(a){let v=this.temp;c.localToWorld(v.set(this.data.offsetX,this.data.offsetY)),x.worldX+=(v.x-x.worldX)*e,x.worldY+=(v.y-x.worldY)*n}if(i!=0){let v=Math.sqrt(x.a*x.a+x.c*x.c);v!=0&&(v=(v+(Math.sqrt(l*l+u*u)-v+this.data.offsetScaleX)*i)/v),x.a*=v,x.c*=v}if(s!=0){let v=Math.sqrt(x.b*x.b+x.d*x.d);v!=0&&(v=(v+(Math.sqrt(h*h+d*d)-v+this.data.offsetScaleY)*s)/v),x.b*=v,x.d*=v}if(o>0){let v=x.b,T=x.d,S=Math.atan2(T,v),b=Math.atan2(d,h)-Math.atan2(u,l)-(S-Math.atan2(x.c,x.a));b>lt.PI?b-=lt.PI2:b<-lt.PI&&(b+=lt.PI2),b=S+(b+_)*o;let L=Math.sqrt(v*v+T*T);x.b=Math.cos(b)*L,x.d=Math.sin(b)*L}x.updateAppliedTransform()}}applyRelativeWorld(){let t=this.mixRotate,e=this.mixX,n=this.mixY,i=this.mixScaleX,s=this.mixScaleY,o=this.mixShearY,a=e!=0||n!=0,c=this.target,l=c.a,h=c.b,u=c.c,d=c.d,f=l*d-h*u>0?lt.degRad:-lt.degRad,g=this.data.offsetRotation*f,_=this.data.offsetShearY*f,m=this.bones;for(let p=0,M=m.length;p<M;p++){let x=m[p];if(t!=0){let v=x.a,T=x.b,S=x.c,b=x.d,L=Math.atan2(u,l)+g;L>lt.PI?L-=lt.PI2:L<-lt.PI&&(L+=lt.PI2),L*=t;let E=Math.cos(L),w=Math.sin(L);x.a=E*v-w*S,x.b=E*T-w*b,x.c=w*v+E*S,x.d=w*T+E*b}if(a){let v=this.temp;c.localToWorld(v.set(this.data.offsetX,this.data.offsetY)),x.worldX+=v.x*e,x.worldY+=v.y*n}if(i!=0){let v=(Math.sqrt(l*l+u*u)-1+this.data.offsetScaleX)*i+1;x.a*=v,x.c*=v}if(s!=0){let v=(Math.sqrt(h*h+d*d)-1+this.data.offsetScaleY)*s+1;x.b*=v,x.d*=v}if(o>0){let v=Math.atan2(d,h)-Math.atan2(u,l);v>lt.PI?v-=lt.PI2:v<-lt.PI&&(v+=lt.PI2);let T=x.b,S=x.d;v=Math.atan2(S,T)+(v-lt.PI/2+_)*o;let b=Math.sqrt(T*T+S*S);x.b=Math.cos(v)*b,x.d=Math.sin(v)*b}x.updateAppliedTransform()}}applyAbsoluteLocal(){let t=this.mixRotate,e=this.mixX,n=this.mixY,i=this.mixScaleX,s=this.mixScaleY,o=this.mixShearY,a=this.target,c=this.bones;for(let l=0,h=c.length;l<h;l++){let u=c[l],d=u.arotation;t!=0&&(d+=(a.arotation-d+this.data.offsetRotation)*t);let f=u.ax,g=u.ay;f+=(a.ax-f+this.data.offsetX)*e,g+=(a.ay-g+this.data.offsetY)*n;let _=u.ascaleX,m=u.ascaleY;i!=0&&_!=0&&(_=(_+(a.ascaleX-_+this.data.offsetScaleX)*i)/_),s!=0&&m!=0&&(m=(m+(a.ascaleY-m+this.data.offsetScaleY)*s)/m);let p=u.ashearY;o!=0&&(p+=(a.ashearY-p+this.data.offsetShearY)*o),u.updateWorldTransformWith(f,g,d,_,m,u.ashearX,p)}}applyRelativeLocal(){let t=this.mixRotate,e=this.mixX,n=this.mixY,i=this.mixScaleX,s=this.mixScaleY,o=this.mixShearY,a=this.target,c=this.bones;for(let l=0,h=c.length;l<h;l++){let u=c[l],d=u.arotation+(a.arotation+this.data.offsetRotation)*t,f=u.ax+(a.ax+this.data.offsetX)*e,g=u.ay+(a.ay+this.data.offsetY)*n,_=u.ascaleX*((a.ascaleX-1+this.data.offsetScaleX)*i+1),m=u.ascaleY*((a.ascaleY-1+this.data.offsetScaleY)*s+1),p=u.ashearY+(a.ashearY+this.data.offsetShearY)*o;u.updateWorldTransformWith(f,g,d,_,m,u.ashearX,p)}}}const $i=class $i{constructor(t){y(this,"data");y(this,"bones");y(this,"slots");y(this,"drawOrder");y(this,"ikConstraints");y(this,"transformConstraints");y(this,"pathConstraints");y(this,"physicsConstraints");y(this,"_updateCache",new Array);y(this,"skin",null);y(this,"color");y(this,"scaleX",1);y(this,"_scaleY",1);y(this,"x",0);y(this,"y",0);y(this,"time",0);if(!t)throw new Error("data cannot be null.");this.data=t,this.bones=new Array;for(let e=0;e<t.bones.length;e++){let n=t.bones[e],i;if(!n.parent)i=new kl(n,this,null);else{let s=this.bones[n.parent.index];i=new kl(n,this,s),s.children.push(i)}this.bones.push(i)}this.slots=new Array,this.drawOrder=new Array;for(let e=0;e<t.slots.length;e++){let n=t.slots[e],i=this.bones[n.boneData.index],s=new w0(n,i);this.slots.push(s),this.drawOrder.push(s)}this.ikConstraints=new Array;for(let e=0;e<t.ikConstraints.length;e++){let n=t.ikConstraints[e];this.ikConstraints.push(new M0(n,this))}this.transformConstraints=new Array;for(let e=0;e<t.transformConstraints.length;e++){let n=t.transformConstraints[e];this.transformConstraints.push(new A0(n,this))}this.pathConstraints=new Array;for(let e=0;e<t.pathConstraints.length;e++){let n=t.pathConstraints[e];this.pathConstraints.push(new ro(n,this))}this.physicsConstraints=new Array;for(let e=0;e<t.physicsConstraints.length;e++){let n=t.physicsConstraints[e];this.physicsConstraints.push(new E0(n,this))}this.color=new Jt(1,1,1,1),this.updateCache()}get scaleY(){return $i.yDown?-this._scaleY:this._scaleY}set scaleY(t){this._scaleY=t}updateCache(){let t=this._updateCache;t.length=0;let e=this.bones;for(let d=0,f=e.length;d<f;d++){let g=e[d];g.sorted=g.data.skinRequired,g.active=!g.sorted}if(this.skin){let d=this.skin.bones;for(let f=0,g=this.skin.bones.length;f<g;f++){let _=this.bones[d[f].index];do _.sorted=!1,_.active=!0,_=_.parent;while(_)}}let n=this.ikConstraints,i=this.transformConstraints,s=this.pathConstraints,o=this.physicsConstraints,a=n.length,c=i.length,l=s.length,h=this.physicsConstraints.length,u=a+c+l+h;t:for(let d=0;d<u;d++){for(let f=0;f<a;f++){let g=n[f];if(g.data.order==d){this.sortIkConstraint(g);continue t}}for(let f=0;f<c;f++){let g=i[f];if(g.data.order==d){this.sortTransformConstraint(g);continue t}}for(let f=0;f<l;f++){let g=s[f];if(g.data.order==d){this.sortPathConstraint(g);continue t}}for(let f=0;f<h;f++){const g=o[f];if(g.data.order==d){this.sortPhysicsConstraint(g);continue t}}}for(let d=0,f=e.length;d<f;d++)this.sortBone(e[d])}sortIkConstraint(t){if(t.active=t.target.isActive()&&(!t.data.skinRequired||this.skin&&mt.contains(this.skin.constraints,t.data,!0)),!t.active)return;let e=t.target;this.sortBone(e);let n=t.bones,i=n[0];if(this.sortBone(i),n.length==1)this._updateCache.push(t),this.sortReset(i.children);else{let s=n[n.length-1];this.sortBone(s),this._updateCache.push(t),this.sortReset(i.children),s.sorted=!0}}sortPathConstraint(t){if(t.active=t.target.bone.isActive()&&(!t.data.skinRequired||this.skin&&mt.contains(this.skin.constraints,t.data,!0)),!t.active)return;let e=t.target,n=e.data.index,i=e.bone;this.skin&&this.sortPathConstraintAttachment(this.skin,n,i),this.data.defaultSkin&&this.data.defaultSkin!=this.skin&&this.sortPathConstraintAttachment(this.data.defaultSkin,n,i);for(let c=0,l=this.data.skins.length;c<l;c++)this.sortPathConstraintAttachment(this.data.skins[c],n,i);let s=e.getAttachment();s instanceof as&&this.sortPathConstraintAttachmentWith(s,i);let o=t.bones,a=o.length;for(let c=0;c<a;c++)this.sortBone(o[c]);this._updateCache.push(t);for(let c=0;c<a;c++)this.sortReset(o[c].children);for(let c=0;c<a;c++)o[c].sorted=!0}sortTransformConstraint(t){if(t.active=t.target.isActive()&&(!t.data.skinRequired||this.skin&&mt.contains(this.skin.constraints,t.data,!0)),!t.active)return;this.sortBone(t.target);let e=t.bones,n=e.length;if(t.data.local)for(let i=0;i<n;i++){let s=e[i];this.sortBone(s.parent),this.sortBone(s)}else for(let i=0;i<n;i++)this.sortBone(e[i]);this._updateCache.push(t);for(let i=0;i<n;i++)this.sortReset(e[i].children);for(let i=0;i<n;i++)e[i].sorted=!0}sortPathConstraintAttachment(t,e,n){let i=t.attachments[e];if(i)for(let s in i)this.sortPathConstraintAttachmentWith(i[s],n)}sortPathConstraintAttachmentWith(t,e){if(!(t instanceof as))return;let n=t.bones;if(!n)this.sortBone(e);else{let i=this.bones;for(let s=0,o=n.length;s<o;){let a=n[s++];for(a+=s;s<a;)this.sortBone(i[n[s++]])}}}sortPhysicsConstraint(t){const e=t.bone;t.active=e.active&&(!t.data.skinRequired||this.skin!=null&&mt.contains(this.skin.constraints,t.data,!0)),t.active&&(this.sortBone(e),this._updateCache.push(t),this.sortReset(e.children),e.sorted=!0)}sortBone(t){if(!t||t.sorted)return;let e=t.parent;e&&this.sortBone(e),t.sorted=!0,this._updateCache.push(t)}sortReset(t){for(let e=0,n=t.length;e<n;e++){let i=t[e];i.active&&(i.sorted&&this.sortReset(i.children),i.sorted=!1)}}updateWorldTransform(t){if(t==null)throw new Error("physics is undefined");let e=this.bones;for(let i=0,s=e.length;i<s;i++){let o=e[i];o.ax=o.x,o.ay=o.y,o.arotation=o.rotation,o.ascaleX=o.scaleX,o.ascaleY=o.scaleY,o.ashearX=o.shearX,o.ashearY=o.shearY}let n=this._updateCache;for(let i=0,s=n.length;i<s;i++)n[i].update(t)}updateWorldTransformWith(t,e){let n=this.getRootBone();if(!n)throw new Error("Root bone must not be null.");let i=e.a,s=e.b,o=e.c,a=e.d;n.worldX=i*this.x+s*this.y+e.worldX,n.worldY=o*this.x+a*this.y+e.worldY;const c=(n.rotation+n.shearX)*lt.degRad,l=(n.rotation+90+n.shearY)*lt.degRad,h=Math.cos(c)*n.scaleX,u=Math.cos(l)*n.scaleY,d=Math.sin(c)*n.scaleX,f=Math.sin(l)*n.scaleY;n.a=(i*h+s*d)*this.scaleX,n.b=(i*u+s*f)*this.scaleX,n.c=(o*h+a*d)*this.scaleY,n.d=(o*u+a*f)*this.scaleY;let g=this._updateCache;for(let _=0,m=g.length;_<m;_++){let p=g[_];p!=n&&p.update(t)}}setToSetupPose(){this.setBonesToSetupPose(),this.setSlotsToSetupPose()}setBonesToSetupPose(){for(const t of this.bones)t.setToSetupPose();for(const t of this.ikConstraints)t.setToSetupPose();for(const t of this.transformConstraints)t.setToSetupPose();for(const t of this.pathConstraints)t.setToSetupPose();for(const t of this.physicsConstraints)t.setToSetupPose()}setSlotsToSetupPose(){let t=this.slots;mt.arrayCopy(t,0,this.drawOrder,0,t.length);for(let e=0,n=t.length;e<n;e++)t[e].setToSetupPose()}getRootBone(){return this.bones.length==0?null:this.bones[0]}findBone(t){if(!t)throw new Error("boneName cannot be null.");let e=this.bones;for(let n=0,i=e.length;n<i;n++){let s=e[n];if(s.data.name==t)return s}return null}findSlot(t){if(!t)throw new Error("slotName cannot be null.");let e=this.slots;for(let n=0,i=e.length;n<i;n++){let s=e[n];if(s.data.name==t)return s}return null}setSkinByName(t){let e=this.data.findSkin(t);if(!e)throw new Error("Skin not found: "+t);this.setSkin(e)}setSkin(t){if(t!=this.skin){if(t)if(this.skin)t.attachAll(this,this.skin);else{let e=this.slots;for(let n=0,i=e.length;n<i;n++){let s=e[n],o=s.data.attachmentName;if(o){let a=t.getAttachment(n,o);a&&s.setAttachment(a)}}}this.skin=t,this.updateCache()}}getAttachmentByName(t,e){let n=this.data.findSlot(t);if(!n)throw new Error(`Can't find slot with name ${t}`);return this.getAttachment(n.index,e)}getAttachment(t,e){if(!e)throw new Error("attachmentName cannot be null.");if(this.skin){let n=this.skin.getAttachment(t,e);if(n)return n}return this.data.defaultSkin?this.data.defaultSkin.getAttachment(t,e):null}setAttachment(t,e){if(!t)throw new Error("slotName cannot be null.");let n=this.slots;for(let i=0,s=n.length;i<s;i++){let o=n[i];if(o.data.name==t){let a=null;if(e&&(a=this.getAttachment(i,e),!a))throw new Error("Attachment not found: "+e+", for slot: "+t);o.setAttachment(a);return}}throw new Error("Slot not found: "+t)}findIkConstraint(t){if(!t)throw new Error("constraintName cannot be null.");return this.ikConstraints.find(e=>e.data.name==t)??null}findTransformConstraint(t){if(!t)throw new Error("constraintName cannot be null.");return this.transformConstraints.find(e=>e.data.name==t)??null}findPathConstraint(t){if(!t)throw new Error("constraintName cannot be null.");return this.pathConstraints.find(e=>e.data.name==t)??null}findPhysicsConstraint(t){if(t==null)throw new Error("constraintName cannot be null.");return this.physicsConstraints.find(e=>e.data.name==t)??null}getBoundsRect(){let t=new ws,e=new ws;return this.getBounds(t,e),{x:t.x,y:t.y,width:e.x,height:e.y}}getBounds(t,e,n=new Array(2),i=null){if(!t)throw new Error("offset cannot be null.");if(!e)throw new Error("size cannot be null.");let s=this.drawOrder,o=Number.POSITIVE_INFINITY,a=Number.POSITIVE_INFINITY,c=Number.NEGATIVE_INFINITY,l=Number.NEGATIVE_INFINITY;for(let h=0,u=s.length;h<u;h++){let d=s[h];if(!d.bone.active)continue;let f=0,g=null,_=null,m=d.getAttachment();if(m instanceof As)f=8,g=mt.setArraySize(n,f,0),m.computeWorldVertices(d,g,0,2),_=$i.quadTriangles;else if(m instanceof Si){let p=m;f=p.worldVerticesLength,g=mt.setArraySize(n,f,0),p.computeWorldVertices(d,0,f,g,0,2),_=p.triangles}else if(m instanceof Ls&&i!=null){i.clipStart(d,m);continue}if(g&&_){i!=null&&i.isClipping()&&(i.clipTriangles(g,_,_.length),g=i.clippedVertices,f=i.clippedVertices.length);for(let p=0,M=g.length;p<M;p+=2){let x=g[p],v=g[p+1];o=Math.min(o,x),a=Math.min(a,v),c=Math.max(c,x),l=Math.max(l,v)}}i!=null&&i.clipEndWithSlot(d)}i!=null&&i.clipEnd(),t.set(o,a),e.set(c-o,l-a)}update(t){this.time+=t}physicsTranslate(t,e){const n=this.physicsConstraints;for(let i=0,s=n.length;i<s;i++)n[i].translate(t,e)}physicsRotate(t,e,n){const i=this.physicsConstraints;for(let s=0,o=i.length;s<o;s++)i[s].rotate(t,e,n)}};y($i,"quadTriangles",[0,1,2,2,3,0]),y($i,"yDown",!1);let ao=$i;var $n;(function(r){r[r.none=0]="none",r[r.reset=1]="reset",r[r.update=2]="update",r[r.pose=3]="pose"})($n||($n={}));class T0 extends Nr{constructor(e){super(e,0,!1);y(this,"_bone",null);y(this,"x",0);y(this,"y",0);y(this,"rotate",0);y(this,"scaleX",0);y(this,"shearX",0);y(this,"limit",0);y(this,"step",0);y(this,"inertia",0);y(this,"strength",0);y(this,"damping",0);y(this,"massInverse",0);y(this,"wind",0);y(this,"gravity",0);y(this,"mix",0);y(this,"inertiaGlobal",!1);y(this,"strengthGlobal",!1);y(this,"dampingGlobal",!1);y(this,"massGlobal",!1);y(this,"windGlobal",!1);y(this,"gravityGlobal",!1);y(this,"mixGlobal",!1)}set bone(e){this._bone=e}get bone(){if(this._bone)return this._bone;throw new Error("BoneData not set.")}}class C0{constructor(){y(this,"name",null);y(this,"bones",new Array);y(this,"slots",new Array);y(this,"skins",new Array);y(this,"defaultSkin",null);y(this,"events",new Array);y(this,"animations",new Array);y(this,"ikConstraints",new Array);y(this,"transformConstraints",new Array);y(this,"pathConstraints",new Array);y(this,"physicsConstraints",new Array);y(this,"x",0);y(this,"y",0);y(this,"width",0);y(this,"height",0);y(this,"referenceScale",100);y(this,"version",null);y(this,"hash",null);y(this,"fps",0);y(this,"imagesPath",null);y(this,"audioPath",null)}findBone(t){if(!t)throw new Error("boneName cannot be null.");let e=this.bones;for(let n=0,i=e.length;n<i;n++){let s=e[n];if(s.name==t)return s}return null}findSlot(t){if(!t)throw new Error("slotName cannot be null.");let e=this.slots;for(let n=0,i=e.length;n<i;n++){let s=e[n];if(s.name==t)return s}return null}findSkin(t){if(!t)throw new Error("skinName cannot be null.");let e=this.skins;for(let n=0,i=e.length;n<i;n++){let s=e[n];if(s.name==t)return s}return null}findEvent(t){if(!t)throw new Error("eventDataName cannot be null.");let e=this.events;for(let n=0,i=e.length;n<i;n++){let s=e[n];if(s.name==t)return s}return null}findAnimation(t){if(!t)throw new Error("animationName cannot be null.");let e=this.animations;for(let n=0,i=e.length;n<i;n++){let s=e[n];if(s.name==t)return s}return null}findIkConstraint(t){if(!t)throw new Error("constraintName cannot be null.");const e=this.ikConstraints;for(let n=0,i=e.length;n<i;n++){const s=e[n];if(s.name==t)return s}return null}findTransformConstraint(t){if(!t)throw new Error("constraintName cannot be null.");const e=this.transformConstraints;for(let n=0,i=e.length;n<i;n++){const s=e[n];if(s.name==t)return s}return null}findPathConstraint(t){if(!t)throw new Error("constraintName cannot be null.");const e=this.pathConstraints;for(let n=0,i=e.length;n<i;n++){const s=e[n];if(s.name==t)return s}return null}findPhysicsConstraint(t){if(!t)throw new Error("constraintName cannot be null.");const e=this.physicsConstraints;for(let n=0,i=e.length;n<i;n++){const s=e[n];if(s.name==t)return s}return null}}class zl{constructor(t=0,e,n){y(this,"slotIndex");y(this,"name");y(this,"attachment");this.slotIndex=t,this.name=e,this.attachment=n}}class R0{constructor(t){y(this,"name");y(this,"attachments",new Array);y(this,"bones",Array());y(this,"constraints",new Array);y(this,"color",new Jt(.99607843,.61960787,.30980393,1));if(!t)throw new Error("name cannot be null.");this.name=t}setAttachment(t,e,n){if(!n)throw new Error("attachment cannot be null.");let i=this.attachments;t>=i.length&&(i.length=t+1),i[t]||(i[t]={}),i[t][e]=n}addSkin(t){for(let i=0;i<t.bones.length;i++){let s=t.bones[i],o=!1;for(let a=0;a<this.bones.length;a++)if(this.bones[a]==s){o=!0;break}o||this.bones.push(s)}for(let i=0;i<t.constraints.length;i++){let s=t.constraints[i],o=!1;for(let a=0;a<this.constraints.length;a++)if(this.constraints[a]==s){o=!0;break}o||this.constraints.push(s)}let e=t.getAttachments();for(let i=0;i<e.length;i++){var n=e[i];this.setAttachment(n.slotIndex,n.name,n.attachment)}}copySkin(t){for(let i=0;i<t.bones.length;i++){let s=t.bones[i],o=!1;for(let a=0;a<this.bones.length;a++)if(this.bones[a]==s){o=!0;break}o||this.bones.push(s)}for(let i=0;i<t.constraints.length;i++){let s=t.constraints[i],o=!1;for(let a=0;a<this.constraints.length;a++)if(this.constraints[a]==s){o=!0;break}o||this.constraints.push(s)}let e=t.getAttachments();for(let i=0;i<e.length;i++){var n=e[i];n.attachment&&(n.attachment instanceof Si?(n.attachment=n.attachment.newLinkedMesh(),this.setAttachment(n.slotIndex,n.name,n.attachment)):(n.attachment=n.attachment.copy(),this.setAttachment(n.slotIndex,n.name,n.attachment)))}}getAttachment(t,e){let n=this.attachments[t];return n?n[e]:null}removeAttachment(t,e){let n=this.attachments[t];n&&delete n[e]}getAttachments(){let t=new Array;for(var e=0;e<this.attachments.length;e++){let n=this.attachments[e];if(n)for(let i in n){let s=n[i];s&&t.push(new zl(e,i,s))}}return t}getAttachmentsForSlot(t,e){let n=this.attachments[t];if(n)for(let i in n){let s=n[i];s&&e.push(new zl(t,i,s))}}clear(){this.attachments.length=0,this.bones.length=0,this.constraints.length=0}attachAll(t,e){let n=0;for(let i=0;i<t.slots.length;i++){let s=t.slots[i],o=s.getAttachment();if(o&&n<e.attachments.length){let a=e.attachments[n];for(let c in a){let l=a[c];if(o==l){let h=this.getAttachment(n,c);h&&s.setAttachment(h);break}}}n++}}}class P0{constructor(t,e,n){y(this,"index",0);y(this,"name");y(this,"boneData");y(this,"color",new Jt(1,1,1,1));y(this,"darkColor",null);y(this,"attachmentName",null);y(this,"blendMode",jn.Normal);y(this,"visible",!0);if(t<0)throw new Error("index must be >= 0.");if(!e)throw new Error("name cannot be null.");if(!n)throw new Error("boneData cannot be null.");this.index=t,this.name=e,this.boneData=n}}var jn;(function(r){r[r.Normal=0]="Normal",r[r.Additive=1]="Additive",r[r.Multiply=2]="Multiply",r[r.Screen=3]="Screen"})(jn||(jn={}));class L0 extends Nr{constructor(e){super(e,0,!1);y(this,"bones",new Array);y(this,"_target",null);y(this,"mixRotate",0);y(this,"mixX",0);y(this,"mixY",0);y(this,"mixScaleX",0);y(this,"mixScaleY",0);y(this,"mixShearY",0);y(this,"offsetRotation",0);y(this,"offsetX",0);y(this,"offsetY",0);y(this,"offsetScaleX",0);y(this,"offsetScaleY",0);y(this,"offsetShearY",0);y(this,"relative",!1);y(this,"local",!1)}set target(e){this._target=e}get target(){if(this._target)return this._target;throw new Error("BoneData not set.")}}var Vl;(function(r){r[r.Region=0]="Region",r[r.BoundingBox=1]="BoundingBox",r[r.Mesh=2]="Mesh",r[r.LinkedMesh=3]="LinkedMesh",r[r.Path=4]="Path",r[r.Point=5]="Point",r[r.Clipping=6]="Clipping"})(Vl||(Vl={}));class Fe{constructor(){y(this,"convexPolygons",new Array);y(this,"convexPolygonsIndices",new Array);y(this,"indicesArray",new Array);y(this,"isConcaveArray",new Array);y(this,"triangles",new Array);y(this,"polygonPool",new Qa(()=>new Array));y(this,"polygonIndicesPool",new Qa(()=>new Array))}triangulate(t){let e=t,n=t.length>>1,i=this.indicesArray;i.length=0;for(let a=0;a<n;a++)i[a]=a;let s=this.isConcaveArray;s.length=0;for(let a=0,c=n;a<c;++a)s[a]=Fe.isConcave(a,n,e,i);let o=this.triangles;for(o.length=0;n>3;){let a=n-1,c=0,l=1;for(;;){t:if(!s[c]){let d=i[a]<<1,f=i[c]<<1,g=i[l]<<1,_=e[d],m=e[d+1],p=e[f],M=e[f+1],x=e[g],v=e[g+1];for(let T=(l+1)%n;T!=a;T=(T+1)%n){if(!s[T])continue;let S=i[T]<<1,b=e[S],L=e[S+1];if(Fe.positiveArea(x,v,_,m,b,L)&&Fe.positiveArea(_,m,p,M,b,L)&&Fe.positiveArea(p,M,x,v,b,L))break t}break}if(l==0){do{if(!s[c])break;c--}while(c>0);break}a=c,c=l,l=(l+1)%n}o.push(i[(n+c-1)%n]),o.push(i[c]),o.push(i[(c+1)%n]),i.splice(c,1),s.splice(c,1),n--;let h=(n+c-1)%n,u=c==n?0:c;s[h]=Fe.isConcave(h,n,e,i),s[u]=Fe.isConcave(u,n,e,i)}return n==3&&(o.push(i[2]),o.push(i[0]),o.push(i[1])),o}decompose(t,e){let n=t,i=this.convexPolygons;this.polygonPool.freeAll(i),i.length=0;let s=this.convexPolygonsIndices;this.polygonIndicesPool.freeAll(s),s.length=0;let o=this.polygonIndicesPool.obtain();o.length=0;let a=this.polygonPool.obtain();a.length=0;let c=-1,l=0;for(let h=0,u=e.length;h<u;h+=3){let d=e[h]<<1,f=e[h+1]<<1,g=e[h+2]<<1,_=n[d],m=n[d+1],p=n[f],M=n[f+1],x=n[g],v=n[g+1],T=!1;if(c==d){let S=a.length-4,b=Fe.winding(a[S],a[S+1],a[S+2],a[S+3],x,v),L=Fe.winding(x,v,a[0],a[1],a[2],a[3]);b==l&&L==l&&(a.push(x),a.push(v),o.push(g),T=!0)}T||(a.length>0?(i.push(a),s.push(o)):(this.polygonPool.free(a),this.polygonIndicesPool.free(o)),a=this.polygonPool.obtain(),a.length=0,a.push(_),a.push(m),a.push(p),a.push(M),a.push(x),a.push(v),o=this.polygonIndicesPool.obtain(),o.length=0,o.push(d),o.push(f),o.push(g),l=Fe.winding(_,m,p,M,x,v),c=d)}a.length>0&&(i.push(a),s.push(o));for(let h=0,u=i.length;h<u;h++){if(o=s[h],o.length==0)continue;let d=o[0],f=o[o.length-1];a=i[h];let g=a.length-4,_=a[g],m=a[g+1],p=a[g+2],M=a[g+3],x=a[0],v=a[1],T=a[2],S=a[3],b=Fe.winding(_,m,p,M,x,v);for(let L=0;L<u;L++){if(L==h)continue;let E=s[L];if(E.length!=3)continue;let w=E[0],R=E[1],B=E[2],F=i[L],I=F[F.length-2],U=F[F.length-1];if(w!=d||R!=f)continue;let k=Fe.winding(_,m,p,M,I,U),Y=Fe.winding(I,U,x,v,T,S);k==b&&Y==b&&(F.length=0,E.length=0,a.push(I),a.push(U),o.push(B),_=p,m=M,p=I,M=U,L=0)}}for(let h=i.length-1;h>=0;h--)a=i[h],a.length==0&&(i.splice(h,1),this.polygonPool.free(a),o=s[h],s.splice(h,1),this.polygonIndicesPool.free(o));return i}static isConcave(t,e,n,i){let s=i[(e+t-1)%e]<<1,o=i[t]<<1,a=i[(t+1)%e]<<1;return!this.positiveArea(n[s],n[s+1],n[o],n[o+1],n[a],n[a+1])}static positiveArea(t,e,n,i,s,o){return t*(o-i)+n*(e-o)+s*(i-e)>=0}static winding(t,e,n,i,s,o){let a=n-t,c=i-e;return s*c-o*a+a*e-t*c>=0?1:-1}}class Ar{constructor(){y(this,"triangulator",new Fe);y(this,"clippingPolygon",new Array);y(this,"clipOutput",new Array);y(this,"clippedVertices",new Array);y(this,"clippedUVs",new Array);y(this,"clippedTriangles",new Array);y(this,"scratch",new Array);y(this,"clipAttachment",null);y(this,"clippingPolygons",null)}clipStart(t,e){if(this.clipAttachment)return 0;this.clipAttachment=e;let n=e.worldVerticesLength,i=mt.setArraySize(this.clippingPolygon,n);e.computeWorldVertices(t,0,n,i,0,2);let s=this.clippingPolygon;Ar.makeClockwise(s);let o=this.clippingPolygons=this.triangulator.decompose(s,this.triangulator.triangulate(s));for(let a=0,c=o.length;a<c;a++){let l=o[a];Ar.makeClockwise(l),l.push(l[0]),l.push(l[1])}return o.length}clipEndWithSlot(t){this.clipAttachment&&this.clipAttachment.endSlot==t.data&&this.clipEnd()}clipEnd(){this.clipAttachment&&(this.clipAttachment=null,this.clippingPolygons=null,this.clippedVertices.length=0,this.clippedTriangles.length=0,this.clippingPolygon.length=0)}isClipping(){return this.clipAttachment!=null}clipTriangles(t,e,n,i,s,o,a,c){let l,h,u,d,f,g;typeof e=="number"?(l=n,h=i,u=s,d=o,f=a,g=c):(l=e,h=n,u=i,d=s,f=o,g=a),u&&d&&f&&typeof g=="boolean"?this.clipTrianglesRender(t,l,h,u,d,f,g):this.clipTrianglesNoRender(t,l,h)}clipTrianglesNoRender(t,e,n){let i=this.clipOutput,s=this.clippedVertices,o=this.clippedTriangles,a=this.clippingPolygons,c=a.length,l=0;s.length=0,o.length=0;for(let h=0;h<n;h+=3){let u=e[h]<<1,d=t[u],f=t[u+1];u=e[h+1]<<1;let g=t[u],_=t[u+1];u=e[h+2]<<1;let m=t[u],p=t[u+1];for(let M=0;M<c;M++){let x=s.length;if(this.clip(d,f,g,_,m,p,a[M],i)){let v=i.length;if(v==0)continue;let T=v>>1,S=this.clipOutput,b=mt.setArraySize(s,x+T*2);for(let E=0;E<v;E+=2,x+=2){let w=S[E],R=S[E+1];b[x]=w,b[x+1]=R}x=o.length;let L=mt.setArraySize(o,x+3*(T-2));T--;for(let E=1;E<T;E++,x+=3)L[x]=l,L[x+1]=l+E,L[x+2]=l+E+1;l+=T+1}else{let v=mt.setArraySize(s,x+6);v[x]=d,v[x+1]=f,v[x+2]=g,v[x+3]=_,v[x+4]=m,v[x+5]=p,x=o.length;let T=mt.setArraySize(o,x+3);T[x]=l,T[x+1]=l+1,T[x+2]=l+2,l+=3;break}}}}clipTrianglesRender(t,e,n,i,s,o,a){let c=this.clipOutput,l=this.clippedVertices,h=this.clippedTriangles,u=this.clippingPolygons,d=u.length,f=a?12:8,g=0;l.length=0,h.length=0;for(let _=0;_<n;_+=3){let m=e[_]<<1,p=t[m],M=t[m+1],x=i[m],v=i[m+1];m=e[_+1]<<1;let T=t[m],S=t[m+1],b=i[m],L=i[m+1];m=e[_+2]<<1;let E=t[m],w=t[m+1],R=i[m],B=i[m+1];for(let F=0;F<d;F++){let I=l.length;if(this.clip(p,M,T,S,E,w,u[F],c)){let U=c.length;if(U==0)continue;let k=S-w,Y=E-T,W=p-E,Q=w-M,it=1/(k*W+Y*(M-w)),at=U>>1,vt=this.clipOutput,ot=mt.setArraySize(l,I+at*f);for(let J=0;J<U;J+=2,I+=f){let dt=vt[J],ut=vt[J+1];ot[I]=dt,ot[I+1]=ut,ot[I+2]=s.r,ot[I+3]=s.g,ot[I+4]=s.b,ot[I+5]=s.a;let yt=dt-E,wt=ut-w,At=(k*yt+Y*wt)*it,Kt=(Q*yt+W*wt)*it,N=1-At-Kt;ot[I+6]=x*At+b*Kt+R*N,ot[I+7]=v*At+L*Kt+B*N,a&&(ot[I+8]=o.r,ot[I+9]=o.g,ot[I+10]=o.b,ot[I+11]=o.a)}I=h.length;let G=mt.setArraySize(h,I+3*(at-2));at--;for(let J=1;J<at;J++,I+=3)G[I]=g,G[I+1]=g+J,G[I+2]=g+J+1;g+=at+1}else{let U=mt.setArraySize(l,I+3*f);U[I]=p,U[I+1]=M,U[I+2]=s.r,U[I+3]=s.g,U[I+4]=s.b,U[I+5]=s.a,a?(U[I+6]=x,U[I+7]=v,U[I+8]=o.r,U[I+9]=o.g,U[I+10]=o.b,U[I+11]=o.a,U[I+12]=T,U[I+13]=S,U[I+14]=s.r,U[I+15]=s.g,U[I+16]=s.b,U[I+17]=s.a,U[I+18]=b,U[I+19]=L,U[I+20]=o.r,U[I+21]=o.g,U[I+22]=o.b,U[I+23]=o.a,U[I+24]=E,U[I+25]=w,U[I+26]=s.r,U[I+27]=s.g,U[I+28]=s.b,U[I+29]=s.a,U[I+30]=R,U[I+31]=B,U[I+32]=o.r,U[I+33]=o.g,U[I+34]=o.b,U[I+35]=o.a):(U[I+6]=x,U[I+7]=v,U[I+8]=T,U[I+9]=S,U[I+10]=s.r,U[I+11]=s.g,U[I+12]=s.b,U[I+13]=s.a,U[I+14]=b,U[I+15]=L,U[I+16]=E,U[I+17]=w,U[I+18]=s.r,U[I+19]=s.g,U[I+20]=s.b,U[I+21]=s.a,U[I+22]=R,U[I+23]=B),I=h.length;let k=mt.setArraySize(h,I+3);k[I]=g,k[I+1]=g+1,k[I+2]=g+2,g+=3;break}}}}clipTrianglesUnpacked(t,e,n,i){let s=this.clipOutput,o=this.clippedVertices,a=this.clippedUVs,c=this.clippedTriangles,l=this.clippingPolygons,h=l.length,u=0;o.length=0,a.length=0,c.length=0;for(let d=0;d<n;d+=3){let f=e[d]<<1,g=t[f],_=t[f+1],m=i[f],p=i[f+1];f=e[d+1]<<1;let M=t[f],x=t[f+1],v=i[f],T=i[f+1];f=e[d+2]<<1;let S=t[f],b=t[f+1],L=i[f],E=i[f+1];for(let w=0;w<h;w++){let R=o.length;if(this.clip(g,_,M,x,S,b,l[w],s)){let B=s.length;if(B==0)continue;let F=x-b,I=S-M,U=g-S,k=b-_,Y=1/(F*U+I*(_-b)),W=B>>1,Q=this.clipOutput,it=mt.setArraySize(o,R+W*2),at=mt.setArraySize(a,R+W*2);for(let ot=0;ot<B;ot+=2,R+=2){let G=Q[ot],J=Q[ot+1];it[R]=G,it[R+1]=J;let dt=G-S,ut=J-b,yt=(F*dt+I*ut)*Y,wt=(k*dt+U*ut)*Y,At=1-yt-wt;at[R]=m*yt+v*wt+L*At,at[R+1]=p*yt+T*wt+E*At}R=c.length;let vt=mt.setArraySize(c,R+3*(W-2));W--;for(let ot=1;ot<W;ot++,R+=3)vt[R]=u,vt[R+1]=u+ot,vt[R+2]=u+ot+1;u+=W+1}else{let B=mt.setArraySize(o,R+6);B[R]=g,B[R+1]=_,B[R+2]=M,B[R+3]=x,B[R+4]=S,B[R+5]=b;let F=mt.setArraySize(a,R+3*2);F[R]=m,F[R+1]=p,F[R+2]=v,F[R+3]=T,F[R+4]=L,F[R+5]=E,R=c.length;let I=mt.setArraySize(c,R+3);I[R]=u,I[R+1]=u+1,I[R+2]=u+2,u+=3;break}}}}clip(t,e,n,i,s,o,a,c){let l=c,h=!1,u;a.length%4>=2?(u=c,c=this.scratch):u=this.scratch,u.length=0,u.push(t),u.push(e),u.push(n),u.push(i),u.push(s),u.push(o),u.push(t),u.push(e),c.length=0;let d=a.length-4,f=a;for(let g=0;;g+=2){let _=f[g],m=f[g+1],p=_-f[g+2],M=m-f[g+3],x=c.length,v=u;for(let S=0,b=u.length-2;S<b;){let L=v[S],E=v[S+1];S+=2;let w=v[S],R=v[S+1],B=M*(_-w)>p*(m-R),F=M*(_-L)-p*(m-E);if(F>0){if(B){c.push(w),c.push(R);continue}let I=w-L,U=R-E,k=F/(I*M-U*p);if(k>=0&&k<=1)c.push(L+I*k),c.push(E+U*k);else{c.push(w),c.push(R);continue}}else if(B){let I=w-L,U=R-E,k=F/(I*M-U*p);if(k>=0&&k<=1)c.push(L+I*k),c.push(E+U*k),c.push(w),c.push(R);else{c.push(w),c.push(R);continue}}h=!0}if(x==c.length)return l.length=0,!0;if(c.push(c[0]),c.push(c[1]),g==d)break;let T=c;c=u,c.length=0,u=T}if(l!=c){l.length=0;for(let g=0,_=c.length-2;g<_;g++)l[g]=c[g]}else l.length=l.length-2;return h}static makeClockwise(t){let e=t,n=t.length,i=e[n-2]*e[1]-e[0]*e[n-1],s=0,o=0,a=0,c=0;for(let l=0,h=n-3;l<h;l+=2)s=e[l],o=e[l+1],a=e[l+2],c=e[l+3],i+=s*c-a*o;if(!(i<0))for(let l=0,h=n-2,u=n>>1;l<u;l+=2){let d=e[l],f=e[l+1],g=h-l;e[l]=e[g],e[l+1]=e[g+1],e[g]=d,e[g+1]=f}}}class I0{constructor(t){y(this,"attachmentLoader");y(this,"scale",1);y(this,"linkedMeshes",new Array);this.attachmentLoader=t}readSkeletonData(t){let e=this.scale,n=new C0,i=typeof t=="string"?JSON.parse(t):t,s=i.skeleton;if(s&&(n.hash=s.hash,n.version=s.spine,n.x=s.x,n.y=s.y,n.width=s.width,n.height=s.height,n.referenceScale=O(s,"referenceScale",100)*e,n.fps=s.fps,n.imagesPath=s.images??null,n.audioPath=s.audio??null),i.bones)for(let o=0;o<i.bones.length;o++){let a=i.bones[o],c=null,l=O(a,"parent",null);l&&(c=n.findBone(l));let h=new _0(n.bones.length,a.name,c);h.length=O(a,"length",0)*e,h.x=O(a,"x",0)*e,h.y=O(a,"y",0)*e,h.rotation=O(a,"rotation",0),h.scaleX=O(a,"scaleX",1),h.scaleY=O(a,"scaleY",1),h.shearX=O(a,"shearX",0),h.shearY=O(a,"shearY",0),h.inherit=mt.enumValue(ce,O(a,"inherit","Normal")),h.skinRequired=O(a,"skin",!1);let u=O(a,"color",null);u&&h.color.setFromString(u),n.bones.push(h)}if(i.slots)for(let o=0;o<i.slots.length;o++){let a=i.slots[o],c=a.name,l=n.findBone(a.bone);if(!l)throw new Error(`Couldn't find bone ${a.bone} for slot ${c}`);let h=new P0(n.slots.length,c,l),u=O(a,"color",null);u&&h.color.setFromString(u);let d=O(a,"dark",null);d&&(h.darkColor=Jt.fromString(d)),h.attachmentName=O(a,"attachment",null),h.blendMode=mt.enumValue(jn,O(a,"blend","normal")),h.visible=O(a,"visible",!0),n.slots.push(h)}if(i.ik)for(let o=0;o<i.ik.length;o++){let a=i.ik[o],c=new S0(a.name);c.order=O(a,"order",0),c.skinRequired=O(a,"skin",!1);for(let h=0;h<a.bones.length;h++){let u=n.findBone(a.bones[h]);if(!u)throw new Error(`Couldn't find bone ${a.bones[h]} for IK constraint ${a.name}.`);c.bones.push(u)}let l=n.findBone(a.target);if(!l)throw new Error(`Couldn't find target bone ${a.target} for IK constraint ${a.name}.`);c.target=l,c.mix=O(a,"mix",1),c.softness=O(a,"softness",0)*e,c.bendDirection=O(a,"bendPositive",!0)?1:-1,c.compress=O(a,"compress",!1),c.stretch=O(a,"stretch",!1),c.uniform=O(a,"uniform",!1),n.ikConstraints.push(c)}if(i.transform)for(let o=0;o<i.transform.length;o++){let a=i.transform[o],c=new L0(a.name);c.order=O(a,"order",0),c.skinRequired=O(a,"skin",!1);for(let u=0;u<a.bones.length;u++){let d=a.bones[u],f=n.findBone(d);if(!f)throw new Error(`Couldn't find bone ${d} for transform constraint ${a.name}.`);c.bones.push(f)}let l=a.target,h=n.findBone(l);if(!h)throw new Error(`Couldn't find target bone ${l} for transform constraint ${a.name}.`);c.target=h,c.local=O(a,"local",!1),c.relative=O(a,"relative",!1),c.offsetRotation=O(a,"rotation",0),c.offsetX=O(a,"x",0)*e,c.offsetY=O(a,"y",0)*e,c.offsetScaleX=O(a,"scaleX",0),c.offsetScaleY=O(a,"scaleY",0),c.offsetShearY=O(a,"shearY",0),c.mixRotate=O(a,"mixRotate",1),c.mixX=O(a,"mixX",1),c.mixY=O(a,"mixY",c.mixX),c.mixScaleX=O(a,"mixScaleX",1),c.mixScaleY=O(a,"mixScaleY",c.mixScaleX),c.mixShearY=O(a,"mixShearY",1),n.transformConstraints.push(c)}if(i.path)for(let o=0;o<i.path.length;o++){let a=i.path[o],c=new b0(a.name);c.order=O(a,"order",0),c.skinRequired=O(a,"skin",!1);for(let u=0;u<a.bones.length;u++){let d=a.bones[u],f=n.findBone(d);if(!f)throw new Error(`Couldn't find bone ${d} for path constraint ${a.name}.`);c.bones.push(f)}let l=a.target,h=n.findSlot(l);if(!h)throw new Error(`Couldn't find target slot ${l} for path constraint ${a.name}.`);c.target=h,c.positionMode=mt.enumValue(Qn,O(a,"positionMode","Percent")),c.spacingMode=mt.enumValue(De,O(a,"spacingMode","Length")),c.rotateMode=mt.enumValue(xi,O(a,"rotateMode","Tangent")),c.offsetRotation=O(a,"rotation",0),c.position=O(a,"position",0),c.positionMode==Qn.Fixed&&(c.position*=e),c.spacing=O(a,"spacing",0),(c.spacingMode==De.Length||c.spacingMode==De.Fixed)&&(c.spacing*=e),c.mixRotate=O(a,"mixRotate",1),c.mixX=O(a,"mixX",1),c.mixY=O(a,"mixY",c.mixX),n.pathConstraints.push(c)}if(i.physics)for(let o=0;o<i.physics.length;o++){const a=i.physics[o],c=new T0(a.name);c.order=O(a,"order",0),c.skinRequired=O(a,"skin",!1);const l=a.bone,h=n.findBone(l);if(h==null)throw new Error("Physics bone not found: "+l);c.bone=h,c.x=O(a,"x",0),c.y=O(a,"y",0),c.rotate=O(a,"rotate",0),c.scaleX=O(a,"scaleX",0),c.shearX=O(a,"shearX",0),c.limit=O(a,"limit",5e3)*e,c.step=1/O(a,"fps",60),c.inertia=O(a,"inertia",1),c.strength=O(a,"strength",100),c.damping=O(a,"damping",1),c.massInverse=1/O(a,"mass",1),c.wind=O(a,"wind",0),c.gravity=O(a,"gravity",0),c.mix=O(a,"mix",1),c.inertiaGlobal=O(a,"inertiaGlobal",!1),c.strengthGlobal=O(a,"strengthGlobal",!1),c.dampingGlobal=O(a,"dampingGlobal",!1),c.massGlobal=O(a,"massGlobal",!1),c.windGlobal=O(a,"windGlobal",!1),c.gravityGlobal=O(a,"gravityGlobal",!1),c.mixGlobal=O(a,"mixGlobal",!1),n.physicsConstraints.push(c)}if(i.skins)for(let o=0;o<i.skins.length;o++){let a=i.skins[o],c=new R0(a.name);if(a.bones)for(let l=0;l<a.bones.length;l++){let h=a.bones[l],u=n.findBone(h);if(!u)throw new Error(`Couldn't find bone ${h} for skin ${a.name}.`);c.bones.push(u)}if(a.ik)for(let l=0;l<a.ik.length;l++){let h=a.ik[l],u=n.findIkConstraint(h);if(!u)throw new Error(`Couldn't find IK constraint ${h} for skin ${a.name}.`);c.constraints.push(u)}if(a.transform)for(let l=0;l<a.transform.length;l++){let h=a.transform[l],u=n.findTransformConstraint(h);if(!u)throw new Error(`Couldn't find transform constraint ${h} for skin ${a.name}.`);c.constraints.push(u)}if(a.path)for(let l=0;l<a.path.length;l++){let h=a.path[l],u=n.findPathConstraint(h);if(!u)throw new Error(`Couldn't find path constraint ${h} for skin ${a.name}.`);c.constraints.push(u)}if(a.physics)for(let l=0;l<a.physics.length;l++){let h=a.physics[l],u=n.findPhysicsConstraint(h);if(!u)throw new Error(`Couldn't find physics constraint ${h} for skin ${a.name}.`);c.constraints.push(u)}for(let l in a.attachments){let h=n.findSlot(l);if(!h)throw new Error(`Couldn't find slot ${l} for skin ${a.name}.`);let u=a.attachments[l];for(let d in u){let f=this.readAttachment(u[d],c,h.index,d,n);f&&c.setAttachment(h.index,d,f)}}n.skins.push(c),c.name=="default"&&(n.defaultSkin=c)}for(let o=0,a=this.linkedMeshes.length;o<a;o++){let c=this.linkedMeshes[o],l=c.skin?n.findSkin(c.skin):n.defaultSkin;if(!l)throw new Error(`Skin not found: ${c.skin}`);let h=l.getAttachment(c.slotIndex,c.parent);if(!h)throw new Error(`Parent mesh not found: ${c.parent}`);c.mesh.timelineAttachment=c.inheritTimeline?h:c.mesh,c.mesh.setParentMesh(h),c.mesh.region!=null&&c.mesh.updateRegion()}if(this.linkedMeshes.length=0,i.events)for(let o in i.events){let a=i.events[o],c=new y0(o);c.intValue=O(a,"int",0),c.floatValue=O(a,"float",0),c.stringValue=O(a,"string",""),c.audioPath=O(a,"audio",null),c.audioPath&&(c.volume=O(a,"volume",1),c.balance=O(a,"balance",0)),n.events.push(c)}if(i.animations)for(let o in i.animations){let a=i.animations[o];this.readAnimation(a,o,n)}return n}readAttachment(t,e,n,i,s){let o=this.scale;switch(i=O(t,"name",i),O(t,"type","region")){case"region":{let a=O(t,"path",i),c=this.readSequence(O(t,"sequence",null)),l=this.attachmentLoader.newRegionAttachment(e,i,a,c);if(!l)return null;l.path=a,l.x=O(t,"x",0)*o,l.y=O(t,"y",0)*o,l.scaleX=O(t,"scaleX",1),l.scaleY=O(t,"scaleY",1),l.rotation=O(t,"rotation",0),l.width=t.width*o,l.height=t.height*o,l.sequence=c;let h=O(t,"color",null);return h&&l.color.setFromString(h),l.region!=null&&l.updateRegion(),l}case"boundingbox":{let a=this.attachmentLoader.newBoundingBoxAttachment(e,i);if(!a)return null;this.readVertices(t,a,t.vertexCount<<1);let c=O(t,"color",null);return c&&a.color.setFromString(c),a}case"mesh":case"linkedmesh":{let a=O(t,"path",i),c=this.readSequence(O(t,"sequence",null)),l=this.attachmentLoader.newMeshAttachment(e,i,a,c);if(!l)return null;l.path=a;let h=O(t,"color",null);h&&l.color.setFromString(h),l.width=O(t,"width",0)*o,l.height=O(t,"height",0)*o,l.sequence=c;let u=O(t,"parent",null);if(u)return this.linkedMeshes.push(new D0(l,O(t,"skin",null),n,u,O(t,"timelines",!0))),l;let d=t.uvs;return this.readVertices(t,l,d.length),l.triangles=t.triangles,l.regionUVs=d,l.region!=null&&l.updateRegion(),l.edges=O(t,"edges",null),l.hullLength=O(t,"hull",0)*2,l}case"path":{let a=this.attachmentLoader.newPathAttachment(e,i);if(!a)return null;a.closed=O(t,"closed",!1),a.constantSpeed=O(t,"constantSpeed",!0);let c=t.vertexCount;this.readVertices(t,a,c<<1);let l=mt.newArray(c/3,0);for(let u=0;u<t.lengths.length;u++)l[u]=t.lengths[u]*o;a.lengths=l;let h=O(t,"color",null);return h&&a.color.setFromString(h),a}case"point":{let a=this.attachmentLoader.newPointAttachment(e,i);if(!a)return null;a.x=O(t,"x",0)*o,a.y=O(t,"y",0)*o,a.rotation=O(t,"rotation",0);let c=O(t,"color",null);return c&&a.color.setFromString(c),a}case"clipping":{let a=this.attachmentLoader.newClippingAttachment(e,i);if(!a)return null;let c=O(t,"end",null);c&&(a.endSlot=s.findSlot(c));let l=t.vertexCount;this.readVertices(t,a,l<<1);let h=O(t,"color",null);return h&&a.color.setFromString(h),a}}return null}readSequence(t){if(t==null)return null;let e=new to(O(t,"count",0));return e.start=O(t,"start",1),e.digits=O(t,"digits",0),e.setupIndex=O(t,"setup",0),e}readVertices(t,e,n){let i=this.scale;e.worldVerticesLength=n;let s=t.vertices;if(n==s.length){let c=mt.toFloatArray(s);if(i!=1)for(let l=0,h=s.length;l<h;l++)c[l]*=i;e.vertices=c;return}let o=new Array,a=new Array;for(let c=0,l=s.length;c<l;){let h=s[c++];a.push(h);for(let u=c+h*4;c<u;c+=4)a.push(s[c]),o.push(s[c+1]*i),o.push(s[c+2]*i),o.push(s[c+3])}e.bones=a,e.vertices=mt.toFloatArray(o)}readAnimation(t,e,n){let i=this.scale,s=new Array;if(t.slots)for(let a in t.slots){let c=t.slots[a],l=n.findSlot(a);if(!l)throw new Error("Slot not found: "+a);let h=l.index;for(let u in c){let d=c[u];if(!d)continue;let f=d.length;if(u=="attachment"){let g=new xs(f,h);for(let _=0;_<f;_++){let m=d[_];g.setFrame(_,O(m,"time",0),O(m,"name",null))}s.push(g)}else if(u=="rgba"){let g=new Hg(f,f<<2,h),_=d[0],m=O(_,"time",0),p=Jt.fromString(_.color);for(let M=0,x=0;;M++){g.setFrame(M,m,p.r,p.g,p.b,p.a);let v=d[M+1];if(!v){g.shrink(x);break}let T=O(v,"time",0),S=Jt.fromString(v.color),b=_.curve;b&&(x=$t(b,g,x,M,0,m,T,p.r,S.r,1),x=$t(b,g,x,M,1,m,T,p.g,S.g,1),x=$t(b,g,x,M,2,m,T,p.b,S.b,1),x=$t(b,g,x,M,3,m,T,p.a,S.a,1)),m=T,p=S,_=v}s.push(g)}else if(u=="rgb"){let g=new Gg(f,f*3,h),_=d[0],m=O(_,"time",0),p=Jt.fromString(_.color);for(let M=0,x=0;;M++){g.setFrame(M,m,p.r,p.g,p.b);let v=d[M+1];if(!v){g.shrink(x);break}let T=O(v,"time",0),S=Jt.fromString(v.color),b=_.curve;b&&(x=$t(b,g,x,M,0,m,T,p.r,S.r,1),x=$t(b,g,x,M,1,m,T,p.g,S.g,1),x=$t(b,g,x,M,2,m,T,p.b,S.b,1)),m=T,p=S,_=v}s.push(g)}else if(u=="alpha")s.push(an(d,new Wg(f,f,h),0,1));else if(u=="rgba2"){let g=new Xg(f,f*7,h),_=d[0],m=O(_,"time",0),p=Jt.fromString(_.light),M=Jt.fromString(_.dark);for(let x=0,v=0;;x++){g.setFrame(x,m,p.r,p.g,p.b,p.a,M.r,M.g,M.b);let T=d[x+1];if(!T){g.shrink(v);break}let S=O(T,"time",0),b=Jt.fromString(T.light),L=Jt.fromString(T.dark),E=_.curve;E&&(v=$t(E,g,v,x,0,m,S,p.r,b.r,1),v=$t(E,g,v,x,1,m,S,p.g,b.g,1),v=$t(E,g,v,x,2,m,S,p.b,b.b,1),v=$t(E,g,v,x,3,m,S,p.a,b.a,1),v=$t(E,g,v,x,4,m,S,M.r,L.r,1),v=$t(E,g,v,x,5,m,S,M.g,L.g,1),v=$t(E,g,v,x,6,m,S,M.b,L.b,1)),m=S,p=b,M=L,_=T}s.push(g)}else if(u=="rgb2"){let g=new Yg(f,f*6,h),_=d[0],m=O(_,"time",0),p=Jt.fromString(_.light),M=Jt.fromString(_.dark);for(let x=0,v=0;;x++){g.setFrame(x,m,p.r,p.g,p.b,M.r,M.g,M.b);let T=d[x+1];if(!T){g.shrink(v);break}let S=O(T,"time",0),b=Jt.fromString(T.light),L=Jt.fromString(T.dark),E=_.curve;E&&(v=$t(E,g,v,x,0,m,S,p.r,b.r,1),v=$t(E,g,v,x,1,m,S,p.g,b.g,1),v=$t(E,g,v,x,2,m,S,p.b,b.b,1),v=$t(E,g,v,x,3,m,S,M.r,L.r,1),v=$t(E,g,v,x,4,m,S,M.g,L.g,1),v=$t(E,g,v,x,5,m,S,M.b,L.b,1)),m=S,p=b,M=L,_=T}s.push(g)}}}if(t.bones)for(let a in t.bones){let c=t.bones[a],l=n.findBone(a);if(!l)throw new Error("Bone not found: "+a);let h=l.index;for(let u in c){let d=c[u],f=d.length;if(f!=0){if(u==="rotate")s.push(an(d,new eo(f,f,h),0,1));else if(u==="translate"){let g=new Ig(f,f<<1,h);s.push(ga(d,g,"x","y",0,i))}else if(u==="translatex"){let g=new Dg(f,f,h);s.push(an(d,g,0,i))}else if(u==="translatey"){let g=new Ug(f,f,h);s.push(an(d,g,0,i))}else if(u==="scale"){let g=new Ng(f,f<<1,h);s.push(ga(d,g,"x","y",1,1))}else if(u==="scalex"){let g=new Fg(f,f,h);s.push(an(d,g,1,1))}else if(u==="scaley"){let g=new Og(f,f,h);s.push(an(d,g,1,1))}else if(u==="shear"){let g=new Bg(f,f<<1,h);s.push(ga(d,g,"x","y",0,1))}else if(u==="shearx"){let g=new kg(f,f,h);s.push(an(d,g,0,1))}else if(u==="sheary"){let g=new zg(f,f,h);s.push(an(d,g,0,1))}else if(u==="inherit"){let g=new Vg(f,l.index);for(let _=0;_<d.length;_++){let m=d[_];g.setFrame(_,O(m,"time",0),mt.enumValue(ce,O(m,"inherit","Normal")))}s.push(g)}}}}if(t.ik)for(let a in t.ik){let c=t.ik[a],l=c[0];if(!l)continue;let h=n.findIkConstraint(a);if(!h)throw new Error("IK Constraint not found: "+a);let u=n.ikConstraints.indexOf(h),d=new $g(c.length,c.length<<1,u),f=O(l,"time",0),g=O(l,"mix",1),_=O(l,"softness",0)*i;for(let m=0,p=0;;m++){d.setFrame(m,f,g,_,O(l,"bendPositive",!0)?1:-1,O(l,"compress",!1),O(l,"stretch",!1));let M=c[m+1];if(!M){d.shrink(p);break}let x=O(M,"time",0),v=O(M,"mix",1),T=O(M,"softness",0)*i,S=l.curve;S&&(p=$t(S,d,p,m,0,f,x,g,v,1),p=$t(S,d,p,m,1,f,x,_,T,i)),f=x,g=v,_=T,l=M}s.push(d)}if(t.transform)for(let a in t.transform){let c=t.transform[a],l=c[0];if(!l)continue;let h=n.findTransformConstraint(a);if(!h)throw new Error("Transform constraint not found: "+a);let u=n.transformConstraints.indexOf(h),d=new Kg(c.length,c.length*6,u),f=O(l,"time",0),g=O(l,"mixRotate",1),_=O(l,"mixX",1),m=O(l,"mixY",_),p=O(l,"mixScaleX",1),M=O(l,"mixScaleY",p),x=O(l,"mixShearY",1);for(let v=0,T=0;;v++){d.setFrame(v,f,g,_,m,p,M,x);let S=c[v+1];if(!S){d.shrink(T);break}let b=O(S,"time",0),L=O(S,"mixRotate",1),E=O(S,"mixX",1),w=O(S,"mixY",E),R=O(S,"mixScaleX",1),B=O(S,"mixScaleY",R),F=O(S,"mixShearY",1),I=l.curve;I&&(T=$t(I,d,T,v,0,f,b,g,L,1),T=$t(I,d,T,v,1,f,b,_,E,1),T=$t(I,d,T,v,2,f,b,m,w,1),T=$t(I,d,T,v,3,f,b,p,R,1),T=$t(I,d,T,v,4,f,b,M,B,1),T=$t(I,d,T,v,5,f,b,x,F,1)),f=b,g=L,_=E,m=w,p=R,M=B,p=R,l=S}s.push(d)}if(t.path)for(let a in t.path){let c=t.path[a],l=n.findPathConstraint(a);if(!l)throw new Error("Path constraint not found: "+a);let h=n.pathConstraints.indexOf(l);for(let u in c){let d=c[u],f=d[0];if(!f)continue;let g=d.length;if(u==="position"){let _=new jg(g,g,h);s.push(an(d,_,0,l.positionMode==Qn.Fixed?i:1))}else if(u==="spacing"){let _=new Zg(g,g,h);s.push(an(d,_,0,l.spacingMode==De.Length||l.spacingMode==De.Fixed?i:1))}else if(u==="mix"){let _=new Jg(g,g*3,h),m=O(f,"time",0),p=O(f,"mixRotate",1),M=O(f,"mixX",1),x=O(f,"mixY",M);for(let v=0,T=0;;v++){_.setFrame(v,m,p,M,x);let S=d[v+1];if(!S){_.shrink(T);break}let b=O(S,"time",0),L=O(S,"mixRotate",1),E=O(S,"mixX",1),w=O(S,"mixY",E),R=f.curve;R&&(T=$t(R,_,T,v,0,m,b,p,L,1),T=$t(R,_,T,v,1,m,b,M,E,1),T=$t(R,_,T,v,2,m,b,x,w,1)),m=b,p=L,M=E,x=w,f=S}s.push(_)}}}if(t.physics)for(let a in t.physics){let c=t.physics[a],l=-1;if(a.length>0){let h=n.findPhysicsConstraint(a);if(!h)throw new Error("Physics constraint not found: "+a);l=n.physicsConstraints.indexOf(h)}for(let h in c){let u=c[h],d=u[0];if(!d)continue;let f=u.length;if(h=="reset"){const _=new no(f,l);for(let m=0;d!=null;d=u[m+1],m++)_.setFrame(m,O(d,"time",0));s.push(_);continue}let g;if(h=="inertia")g=new Qg(f,f,l);else if(h=="strength")g=new t0(f,f,l);else if(h=="damping")g=new e0(f,f,l);else if(h=="mass")g=new n0(f,f,l);else if(h=="wind")g=new i0(f,f,l);else if(h=="gravity")g=new s0(f,f,l);else if(h=="mix")g=new r0(f,f,l);else continue;s.push(an(u,g,0,1))}}if(t.attachments)for(let a in t.attachments){let c=t.attachments[a],l=n.findSkin(a);if(!l)throw new Error("Skin not found: "+a);for(let h in c){let u=c[h],d=n.findSlot(h);if(!d)throw new Error("Slot not found: "+h);let f=d.index;for(let g in u){let _=u[g],m=l.getAttachment(f,g);for(let p in _){let M=_[p],x=M[0];if(x){if(p=="deform"){let v=m.bones,T=m.vertices,S=v?T.length/3*2:T.length,b=new qg(M.length,M.length,f,m),L=O(x,"time",0);for(let E=0,w=0;;E++){let R,B=O(x,"vertices",null);if(!B)R=v?mt.newFloatArray(S):T;else{R=mt.newFloatArray(S);let k=O(x,"offset",0);if(mt.arrayCopy(B,0,R,k,B.length),i!=1)for(let Y=k,W=Y+B.length;Y<W;Y++)R[Y]*=i;if(!v)for(let Y=0;Y<S;Y++)R[Y]+=T[Y]}b.setFrame(E,L,R);let F=M[E+1];if(!F){b.shrink(w);break}let I=O(F,"time",0),U=x.curve;U&&(w=$t(U,b,w,E,0,L,I,0,1,1)),L=I,x=F}s.push(b)}else if(p=="sequence"){let v=new io(M.length,f,m),T=0;for(let S=0;S<M.length;S++){let b=O(x,"delay",T),L=O(x,"time",0),E=Te[O(x,"mode","hold")],w=O(x,"index",0);v.setFrame(S,L,E,w,b),T=b,x=M[S+1]}s.push(v)}}}}}}if(t.drawOrder){let a=new Ji(t.drawOrder.length),c=n.slots.length,l=0;for(let h=0;h<t.drawOrder.length;h++,l++){let u=t.drawOrder[h],d=null,f=O(u,"offsets",null);if(f){d=mt.newArray(c,-1);let g=mt.newArray(c-f.length,0),_=0,m=0;for(let p=0;p<f.length;p++){let M=f[p],x=n.findSlot(M.slot);if(!x)throw new Error("Slot not found: "+x);let v=x.index;for(;_!=v;)g[m++]=_++;d[_+M.offset]=_++}for(;_<c;)g[m++]=_++;for(let p=c-1;p>=0;p--)d[p]==-1&&(d[p]=g[--m])}a.setFrame(l,O(u,"time",0),d)}s.push(a)}if(t.events){let a=new wr(t.events.length),c=0;for(let l=0;l<t.events.length;l++,c++){let h=t.events[l],u=n.findEvent(h.name);if(!u)throw new Error("Event not found: "+h.name);let d=new v0(mt.toSinglePrecision(O(h,"time",0)),u);d.intValue=O(h,"int",u.intValue),d.floatValue=O(h,"float",u.floatValue),d.stringValue=O(h,"string",u.stringValue),d.data.audioPath&&(d.volume=O(h,"volume",1),d.balance=O(h,"balance",0)),a.setFrame(c,d)}s.push(a)}let o=0;for(let a=0,c=s.length;a<c;a++)o=Math.max(o,s[a].getDuration());n.animations.push(new Fc(e,s,o))}}class D0{constructor(t,e,n,i,s){y(this,"parent");y(this,"skin");y(this,"slotIndex");y(this,"mesh");y(this,"inheritTimeline");this.mesh=t,this.skin=e,this.slotIndex=n,this.parent=i,this.inheritTimeline=s}}function an(r,t,e,n){let i=r[0],s=O(i,"time",0),o=O(i,"value",e)*n,a=0;for(let c=0;;c++){t.setFrame(c,s,o);let l=r[c+1];if(!l)return t.shrink(a),t;let h=O(l,"time",0),u=O(l,"value",e)*n;i.curve&&(a=$t(i.curve,t,a,c,0,s,h,o,u,n)),s=h,o=u,i=l}}function ga(r,t,e,n,i,s){let o=r[0],a=O(o,"time",0),c=O(o,e,i)*s,l=O(o,n,i)*s,h=0;for(let u=0;;u++){t.setFrame(u,a,c,l);let d=r[u+1];if(!d)return t.shrink(h),t;let f=O(d,"time",0),g=O(d,e,i)*s,_=O(d,n,i)*s,m=o.curve;m&&(h=$t(m,t,h,u,0,a,f,c,g,s),h=$t(m,t,h,u,1,a,f,l,_,s)),a=f,c=g,l=_,o=d}}function $t(r,t,e,n,i,s,o,a,c,l){if(r=="stepped")return t.setStepped(n),e;let h=i<<2,u=r[h],d=r[h+1]*l,f=r[h+2],g=r[h+3]*l;return t.setBezier(e,n,i,s,a,u,d,f,g,o,c),e+1}function O(r,t,e){return r[t]!==void 0?r[t]:e}typeof Math.fround>"u"&&(Math.fround=function(r){return function(t){return r[0]=t,r[0]}}(new Float32Array(1)));class _i extends u0{constructor(e,n=!1){super(e);y(this,"texture");e instanceof ImageBitmap?this.texture=new Eg(e):this.texture=new Qe(e),this.texture.premultiplyAlpha=!n,this.texture.flipY=!1,this.texture.needsUpdate=!0}setFilters(e,n){this.texture.minFilter=_i.toThreeJsTextureFilter(e),this.texture.magFilter=_i.toThreeJsTextureFilter(n)}setWraps(e,n){this.texture.wrapS=_i.toThreeJsTextureWrap(e),this.texture.wrapT=_i.toThreeJsTextureWrap(n)}dispose(){this.texture.dispose()}static toThreeJsTextureFilter(e){if(e===Ke.Linear)return je;if(e===Ke.MipMap)return Uh;if(e===Ke.MipMapLinearNearest)return Dh;if(e===Ke.MipMapNearestLinear)return Ih;if(e===Ke.MipMapNearestNearest)return Lh;if(e===Ke.Nearest)return Xe;throw new Error("Unknown texture filter: "+e)}static toThreeJsTextureWrap(e){if(e===Dn.ClampToEdge)return Kn;if(e===Dn.MirroredRepeat)return _r;if(e===Dn.Repeat)return gr;throw new Error("Unknown texture wrap: "+e)}static toThreeJsBlending(e){if(e===jn.Normal)return{blending:Pn};if(e===jn.Additive)return{blending:va};if(e===jn.Multiply)return{blending:ya,blendSrc:Zl,blendDst:bs,blendSrcAlpha:or,blendDstAlpha:bs};if(e===jn.Screen)return{blending:ya,blendSrc:or,blendDst:Ma,blendSrcAlpha:or,blendDstAlpha:Ma};throw new Error("Unknown blendMode: "+e)}}class U0 extends x0{constructor(t="",e=new Bc,n=!1){super(i=>new _i(i,n),t,e)}}class Hl extends Nn{constructor(t){let i={uniforms:{map:{value:null}},vertexShader:`
			attribute vec4 color;
			varying vec2 vUv;
			varying vec4 vColor;
			void main() {
				vUv = uv;
				vColor = color;
				gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);
			}
		`,fragmentShader:`
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
		`,side:on,transparent:!0,depthWrite:!0,alphaTest:0};t(i),i.alphaTest&&i.alphaTest>0&&(i.defines={USE_SPINE_ALPHATEST:1},i.uniforms||(i.uniforms={}),i.uniforms.alphaTest={value:i.alphaTest}),super(i),this.premultipliedAlpha=!0}}const mi=class mi extends pe{constructor(e,n=i=>{}){super();y(this,"materialCustomerizer");y(this,"tempPos",new ws);y(this,"tempUv",new ws);y(this,"tempLight",new Jt);y(this,"tempDark",new Jt);y(this,"skeleton");y(this,"state");y(this,"zOffset",.1);y(this,"batches",new Array);y(this,"nextBatchIndex",0);y(this,"clipper",new Ar);y(this,"vertices",mt.newFloatArray(1024));y(this,"tempColor",new Jt);this.materialCustomerizer=n,this.skeleton=new ao(e);let i=new h0(e);this.state=new so(i)}update(e){let n=this.state,i=this.skeleton;n.update(e),n.apply(i),i.update(e),i.updateWorldTransform($n.update),this.updateGeometry()}dispose(){for(var e=0;e<this.batches.length;e++)this.batches[e].dispose()}clearBatches(){for(var e=0;e<this.batches.length;e++)this.batches[e].clear(),this.batches[e].visible=!1;this.nextBatchIndex=0}nextBatch(){if(this.batches.length==this.nextBatchIndex){let n=new lo(10920,this.materialCustomerizer);this.add(n),this.batches.push(n)}let e=this.batches[this.nextBatchIndex++];return e.visible=!0,e}updateGeometry(){this.clearBatches(),this.tempPos,this.tempUv;let e=this.tempLight;this.tempDark;let n=this.clipper,i=this.vertices,s=null,o=null,a=this.skeleton.drawOrder,c=this.nextBatch();c.begin();let l=0,h=this.zOffset;for(let u=0,d=a.length;u<d;u++){let f=n.isClipping()?2:mi.VERTEX_SIZE,g=a[u];if(!g.bone.active){n.clipEndWithSlot(g);continue}let _=g.getAttachment(),m,p,M=0;if(_ instanceof As){let x=_;m=x.color,i=this.vertices,M=f*4,x.computeWorldVertices(g,i,0,f),s=mi.QUAD_TRIANGLES,o=x.uvs,p=x.region.texture}else if(_ instanceof Si){let x=_;m=x.color,i=this.vertices,M=(x.worldVerticesLength>>1)*f,M>i.length&&(i=this.vertices=mt.newFloatArray(M)),x.computeWorldVertices(g,0,x.worldVerticesLength,i,0,f),s=x.triangles,o=x.uvs,p=x.region.texture}else if(_ instanceof Ls){let x=_;n.clipStart(g,x);continue}else{n.clipEndWithSlot(g);continue}if(p!=null){let v=g.bone.skeleton.color,T=g.color,S=v.a*T.a*m.a,b=this.tempColor;b.set(v.r*T.r*m.r*S,v.g*T.g*m.g*S,v.b*T.b*m.b*S,S);let L,E,w,R;if(n.isClipping()){n.clipTriangles(i,s,s.length,o,b,e,!1);let U=n.clippedVertices,k=n.clippedTriangles;L=U,E=U.length,w=k,R=k.length}else{let U=i;for(let k=2,Y=0,W=M;k<W;k+=f,Y+=2)U[k]=b.r,U[k+1]=b.g,U[k+2]=b.b,U[k+3]=b.a,U[k+4]=o[Y],U[k+5]=o[Y+1];L=i,E=M,w=s,R=s.length}if(E==0||R==0){n.clipEndWithSlot(g);continue}c.canBatch(E/mi.VERTEX_SIZE,R)||(c.end(),c=this.nextBatch(),c.begin());const B=g.data.blendMode,F=p.texture,I=c.findMaterialGroup(F,B);c.addMaterialGroup(R,I),c.batch(L,E,w,R,l),l+=h}n.clipEndWithSlot(g)}n.clipEnd(),c.end()}};y(mi,"QUAD_TRIANGLES",[0,1,2,2,3,0]),y(mi,"VERTEX_SIZE",8);let oo=mi;const Yn=class Yn extends Ze{constructor(e=10920,n=i=>{}){super();y(this,"materialCustomizer");y(this,"vertexBuffer");y(this,"vertices");y(this,"verticesLength",0);y(this,"indices");y(this,"indicesLength",0);y(this,"materialGroups",[]);if(this.materialCustomizer=n,e>10920)throw new Error("Can't have more than 10920 triangles per batch: "+e);let i=this.vertices=new Float32Array(e*Yn.VERTEX_SIZE),s=this.indices=new Uint16Array(e*3),o=new vn,a=this.vertexBuffer=new Mg(i,Yn.VERTEX_SIZE);a.usage=WebGLRenderingContext.DYNAMIC_DRAW,o.setAttribute("position",new Ms(a,3,0,!1)),o.setAttribute("color",new Ms(a,4,3,!1)),o.setAttribute("uv",new Ms(a,2,7,!1)),o.setIndex(new Je(s,1)),o.getIndex().usage=WebGLRenderingContext.DYNAMIC_DRAW,o.drawRange.start=0,o.drawRange.count=0,this.geometry=o,this.material=[new Hl(n)]}dispose(){if(this.geometry.dispose(),this.material instanceof In)this.material.dispose();else if(this.material)for(let e=0;e<this.material.length;e++){let n=this.material[e];n instanceof In&&n.dispose()}}clear(){let e=this.geometry;if(e.drawRange.start=0,e.drawRange.count=0,e.clearGroups(),this.materialGroups=[],this.material instanceof In){const n=this.material;n.uniforms.map.value=null,n.blending=Pn}else if(Array.isArray(this.material))for(let n=0;n<this.material.length;n++){const i=this.material[n];i.uniforms.map.value=null,i.blending=Pn}return this}begin(){this.verticesLength=0,this.indicesLength=0}canBatch(e,n){return!(this.indicesLength+n>=this.indices.byteLength/2||this.verticesLength/Yn.VERTEX_SIZE+e>=this.vertices.byteLength/4/Yn.VERTEX_SIZE)}batch(e,n,i,s,o=0){let a=this.verticesLength/Yn.VERTEX_SIZE,c=this.vertices,l=this.verticesLength,h=0;for(;h<n;)c[l++]=e[h++],c[l++]=e[h++],c[l++]=o,c[l++]=e[h++],c[l++]=e[h++],c[l++]=e[h++],c[l++]=e[h++],c[l++]=e[h++],c[l++]=e[h++];this.verticesLength=l;let u=this.indices;for(l=this.indicesLength,h=0;h<s;l++,h++)u[l]=i[h]+a;this.indicesLength+=s}end(){this.vertexBuffer.needsUpdate=this.verticesLength>0,this.vertexBuffer.updateRange.offset=0,this.vertexBuffer.updateRange.count=this.verticesLength;let e=this.geometry;this.closeMaterialGroups();let n=e.getIndex();if(!n)throw new Error("BufferAttribute must not be null.");n.needsUpdate=this.indicesLength>0,n.updateRange.offset=0,n.updateRange.count=this.indicesLength,e.drawRange.start=0,e.drawRange.count=this.indicesLength}addMaterialGroup(e,n){const i=this.materialGroups[this.materialGroups.length-1];i===void 0||i[2]!==n?this.materialGroups.push([this.indicesLength,e,n]):i[1]+=e}closeMaterialGroups(){const e=this.geometry;for(let n=0;n<this.materialGroups.length;n++){const[i,s,o]=this.materialGroups[n];e.addGroup(i,s,o)}}findMaterialGroup(e,n){const i=_i.toThreeJsBlending(n);let s=-1;if(Array.isArray(this.material)){for(let a=0;a<this.material.length;a++){const c=this.material[a];if(!c.uniforms.map.value)return Gl(c,e,i),a;if(c.uniforms.map.value===e&&i.blending===c.blending&&(i.blendSrc===void 0||i.blendSrc===c.blendSrc)&&(i.blendDst===void 0||i.blendDst===c.blendDst)&&(i.blendSrcAlpha===void 0||i.blendSrcAlpha===c.blendSrcAlpha)&&(i.blendDstAlpha===void 0||i.blendDstAlpha===c.blendDstAlpha))return a}const o=new Hl(this.materialCustomizer);Gl(o,e,i),this.material.push(o),s=this.material.length-1}else throw new Error("MeshBatcher.material needs to be an array for geometry groups to work");return s}};y(Yn,"VERTEX_SIZE",9);let lo=Yn;function Gl(r,t,e){r.uniforms.map.value=t,Object.assign(r,e),r.needsUpdate=!0}const Wl={type:"change"},_a={type:"start"},Xl={type:"end"},ar=new yo,Yl=new Wn,N0=Math.cos(70*ou.DEG2RAD);class F0 extends bi{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ai.ROTATE,MIDDLE:Ai.DOLLY,RIGHT:Ai.PAN},this.touches={ONE:Ti.ROTATE,TWO:Ti.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",_t),this._domElementKeyEvents=A},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",_t),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Wl),n.update(),s=i.NONE},this.update=function(){const A=new H,X=new Mi().setFromUnitVectors(t.up,new H(0,1,0)),q=X.clone().invert(),Z=new H,rt=new Mi,Tt=new H,Ft=2*Math.PI;return function(xe=null){const jt=n.object.position;A.copy(jt).sub(n.target),A.applyQuaternion(X),a.setFromVector3(A),n.autoRotate&&s===i.NONE&&B(w(xe)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let ve=n.minAzimuthAngle,me=n.maxAzimuthAngle;isFinite(ve)&&isFinite(me)&&(ve<-Math.PI?ve+=Ft:ve>Math.PI&&(ve-=Ft),me<-Math.PI?me+=Ft:me>Math.PI&&(me-=Ft),ve<=me?a.theta=Math.max(ve,Math.min(me,a.theta)):a.theta=a.theta>(ve+me)/2?Math.max(ve,a.theta):Math.min(me,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let Fn=!1;if(n.zoomToCursor&&S||n.object.isOrthographicCamera)a.radius=it(a.radius);else{const we=a.radius;a.radius=it(a.radius*l),Fn=we!=a.radius}if(A.setFromSpherical(a),A.applyQuaternion(q),jt.copy(n.target).add(A),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0)),n.zoomToCursor&&S){let we=null;if(n.object.isPerspectiveCamera){const Mn=A.length();we=it(Mn*l);const ri=Mn-we;n.object.position.addScaledVector(v,ri),n.object.updateMatrixWorld(),Fn=!!ri}else if(n.object.isOrthographicCamera){const Mn=new H(T.x,T.y,0);Mn.unproject(n.object);const ri=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Fn=ri!==n.object.zoom;const hs=new H(T.x,T.y,0);hs.unproject(n.object),n.object.position.sub(hs).add(Mn),n.object.updateMatrixWorld(),we=A.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;we!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(we).add(n.object.position):(ar.origin.copy(n.object.position),ar.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(ar.direction))<N0?t.lookAt(n.target):(Yl.setFromNormalAndCoplanarPoint(n.object.up,n.target),ar.intersectPlane(Yl,n.target))))}else if(n.object.isOrthographicCamera){const we=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),we!==n.object.zoom&&(n.object.updateProjectionMatrix(),Fn=!0)}return l=1,S=!1,Fn||Z.distanceToSquared(n.object.position)>o||8*(1-rt.dot(n.object.quaternion))>o||Tt.distanceToSquared(n.target)>o?(n.dispatchEvent(Wl),Z.copy(n.object.position),rt.copy(n.object.quaternion),Tt.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",xt),n.domElement.removeEventListener("pointerdown",It),n.domElement.removeEventListener("pointercancel",C),n.domElement.removeEventListener("wheel",st),n.domElement.removeEventListener("pointermove",D),n.domElement.removeEventListener("pointerup",C),n.domElement.getRootNode().removeEventListener("keydown",Rt,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",_t),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new Ul,c=new Ul;let l=1;const h=new H,u=new zt,d=new zt,f=new zt,g=new zt,_=new zt,m=new zt,p=new zt,M=new zt,x=new zt,v=new H,T=new zt;let S=!1;const b=[],L={};let E=!1;function w(A){return A!==null?2*Math.PI/60*n.autoRotateSpeed*A:2*Math.PI/60/60*n.autoRotateSpeed}function R(A){const X=Math.abs(A*.01);return Math.pow(.95,n.zoomSpeed*X)}function B(A){c.theta-=A}function F(A){c.phi-=A}const I=function(){const A=new H;return function(q,Z){A.setFromMatrixColumn(Z,0),A.multiplyScalar(-q),h.add(A)}}(),U=function(){const A=new H;return function(q,Z){n.screenSpacePanning===!0?A.setFromMatrixColumn(Z,1):(A.setFromMatrixColumn(Z,0),A.crossVectors(n.object.up,A)),A.multiplyScalar(q),h.add(A)}}(),k=function(){const A=new H;return function(q,Z){const rt=n.domElement;if(n.object.isPerspectiveCamera){const Tt=n.object.position;A.copy(Tt).sub(n.target);let Ft=A.length();Ft*=Math.tan(n.object.fov/2*Math.PI/180),I(2*q*Ft/rt.clientHeight,n.object.matrix),U(2*Z*Ft/rt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(I(q*(n.object.right-n.object.left)/n.object.zoom/rt.clientWidth,n.object.matrix),U(Z*(n.object.top-n.object.bottom)/n.object.zoom/rt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Y(A){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function W(A){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Q(A,X){if(!n.zoomToCursor)return;S=!0;const q=n.domElement.getBoundingClientRect(),Z=A-q.left,rt=X-q.top,Tt=q.width,Ft=q.height;T.x=Z/Tt*2-1,T.y=-(rt/Ft)*2+1,v.set(T.x,T.y,1).unproject(n.object).sub(n.object.position).normalize()}function it(A){return Math.max(n.minDistance,Math.min(n.maxDistance,A))}function at(A){u.set(A.clientX,A.clientY)}function vt(A){Q(A.clientX,A.clientX),p.set(A.clientX,A.clientY)}function ot(A){g.set(A.clientX,A.clientY)}function G(A){d.set(A.clientX,A.clientY),f.subVectors(d,u).multiplyScalar(n.rotateSpeed);const X=n.domElement;B(2*Math.PI*f.x/X.clientHeight),F(2*Math.PI*f.y/X.clientHeight),u.copy(d),n.update()}function J(A){M.set(A.clientX,A.clientY),x.subVectors(M,p),x.y>0?Y(R(x.y)):x.y<0&&W(R(x.y)),p.copy(M),n.update()}function dt(A){_.set(A.clientX,A.clientY),m.subVectors(_,g).multiplyScalar(n.panSpeed),k(m.x,m.y),g.copy(_),n.update()}function ut(A){Q(A.clientX,A.clientY),A.deltaY<0?W(R(A.deltaY)):A.deltaY>0&&Y(R(A.deltaY)),n.update()}function yt(A){let X=!1;switch(A.code){case n.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?F(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,n.keyPanSpeed),X=!0;break;case n.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?F(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,-n.keyPanSpeed),X=!0;break;case n.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?B(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(n.keyPanSpeed,0),X=!0;break;case n.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?B(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(-n.keyPanSpeed,0),X=!0;break}X&&(A.preventDefault(),n.update())}function wt(A){if(b.length===1)u.set(A.pageX,A.pageY);else{const X=Bt(A),q=.5*(A.pageX+X.x),Z=.5*(A.pageY+X.y);u.set(q,Z)}}function At(A){if(b.length===1)g.set(A.pageX,A.pageY);else{const X=Bt(A),q=.5*(A.pageX+X.x),Z=.5*(A.pageY+X.y);g.set(q,Z)}}function Kt(A){const X=Bt(A),q=A.pageX-X.x,Z=A.pageY-X.y,rt=Math.sqrt(q*q+Z*Z);p.set(0,rt)}function N(A){n.enableZoom&&Kt(A),n.enablePan&&At(A)}function se(A){n.enableZoom&&Kt(A),n.enableRotate&&wt(A)}function Wt(A){if(b.length==1)d.set(A.pageX,A.pageY);else{const q=Bt(A),Z=.5*(A.pageX+q.x),rt=.5*(A.pageY+q.y);d.set(Z,rt)}f.subVectors(d,u).multiplyScalar(n.rotateSpeed);const X=n.domElement;B(2*Math.PI*f.x/X.clientHeight),F(2*Math.PI*f.y/X.clientHeight),u.copy(d)}function Yt(A){if(b.length===1)_.set(A.pageX,A.pageY);else{const X=Bt(A),q=.5*(A.pageX+X.x),Z=.5*(A.pageY+X.y);_.set(q,Z)}m.subVectors(_,g).multiplyScalar(n.panSpeed),k(m.x,m.y),g.copy(_)}function Et(A){const X=Bt(A),q=A.pageX-X.x,Z=A.pageY-X.y,rt=Math.sqrt(q*q+Z*Z);M.set(0,rt),x.set(0,Math.pow(M.y/p.y,n.zoomSpeed)),Y(x.y),p.copy(M);const Tt=(A.pageX+X.x)*.5,Ft=(A.pageY+X.y)*.5;Q(Tt,Ft)}function re(A){n.enableZoom&&Et(A),n.enablePan&&Yt(A)}function Pt(A){n.enableZoom&&Et(A),n.enableRotate&&Wt(A)}function It(A){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(A.pointerId),n.domElement.addEventListener("pointermove",D),n.domElement.addEventListener("pointerup",C)),!Mt(A)&&(Xt(A),A.pointerType==="touch"?kt(A):$(A)))}function D(A){n.enabled!==!1&&(A.pointerType==="touch"?ct(A):nt(A))}function C(A){switch(Dt(A),b.length){case 0:n.domElement.releasePointerCapture(A.pointerId),n.domElement.removeEventListener("pointermove",D),n.domElement.removeEventListener("pointerup",C),n.dispatchEvent(Xl),s=i.NONE;break;case 1:const X=b[0],q=L[X];kt({pointerId:X,pageX:q.x,pageY:q.y});break}}function $(A){let X;switch(A.button){case 0:X=n.mouseButtons.LEFT;break;case 1:X=n.mouseButtons.MIDDLE;break;case 2:X=n.mouseButtons.RIGHT;break;default:X=-1}switch(X){case Ai.DOLLY:if(n.enableZoom===!1)return;vt(A),s=i.DOLLY;break;case Ai.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enablePan===!1)return;ot(A),s=i.PAN}else{if(n.enableRotate===!1)return;at(A),s=i.ROTATE}break;case Ai.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enableRotate===!1)return;at(A),s=i.ROTATE}else{if(n.enablePan===!1)return;ot(A),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(_a)}function nt(A){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;G(A);break;case i.DOLLY:if(n.enableZoom===!1)return;J(A);break;case i.PAN:if(n.enablePan===!1)return;dt(A);break}}function st(A){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(A.preventDefault(),n.dispatchEvent(_a),ut(et(A)),n.dispatchEvent(Xl))}function et(A){const X=A.deltaMode,q={clientX:A.clientX,clientY:A.clientY,deltaY:A.deltaY};switch(X){case 1:q.deltaY*=16;break;case 2:q.deltaY*=100;break}return A.ctrlKey&&!E&&(q.deltaY*=10),q}function Rt(A){A.key==="Control"&&(E=!0,n.domElement.getRootNode().addEventListener("keyup",ft,{passive:!0,capture:!0}))}function ft(A){A.key==="Control"&&(E=!1,n.domElement.getRootNode().removeEventListener("keyup",ft,{passive:!0,capture:!0}))}function _t(A){n.enabled===!1||n.enablePan===!1||yt(A)}function kt(A){switch(Nt(A),b.length){case 1:switch(n.touches.ONE){case Ti.ROTATE:if(n.enableRotate===!1)return;wt(A),s=i.TOUCH_ROTATE;break;case Ti.PAN:if(n.enablePan===!1)return;At(A),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Ti.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;N(A),s=i.TOUCH_DOLLY_PAN;break;case Ti.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;se(A),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(_a)}function ct(A){switch(Nt(A),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Wt(A),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Yt(A),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;re(A),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Pt(A),n.update();break;default:s=i.NONE}}function xt(A){n.enabled!==!1&&A.preventDefault()}function Xt(A){b.push(A.pointerId)}function Dt(A){delete L[A.pointerId];for(let X=0;X<b.length;X++)if(b[X]==A.pointerId){b.splice(X,1);return}}function Mt(A){for(let X=0;X<b.length;X++)if(b[X]==A.pointerId)return!0;return!1}function Nt(A){let X=L[A.pointerId];X===void 0&&(X=new zt,L[A.pointerId]=X),X.set(A.pageX,A.pageY)}function Bt(A){const X=A.pointerId===b[0]?b[1]:b[0];return L[X]}n.domElement.addEventListener("contextmenu",xt),n.domElement.addEventListener("pointerdown",It),n.domElement.addEventListener("pointercancel",C),n.domElement.addEventListener("wheel",st,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",Rt,{passive:!0,capture:!0}),this.update()}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class _n{constructor(t,e,n,i,s="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),_n.nextNameID=_n.nextNameID||0,this.$name.id=`lil-gui-name-${++_n.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class O0 extends _n{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function co(r){let t,e;return(t=r.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const B0={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:co,toHexString:co},Ts={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},k0={isPrimitive:!1,match:r=>Array.isArray(r),fromHexString(r,t,e=1){const n=Ts.fromHexString(r);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([r,t,e],n=1){n=255/n;const i=r*n<<16^t*n<<8^e*n<<0;return Ts.toHexString(i)}},z0={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,t,e=1){const n=Ts.fromHexString(r);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r,g:t,b:e},n=1){n=255/n;const i=r*n<<16^t*n<<8^e*n<<0;return Ts.toHexString(i)}},V0=[B0,Ts,k0,z0];function H0(r){return V0.find(t=>t.match(r))}class G0 extends _n{constructor(t,e,n,i){super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=H0(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=co(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class xa extends _n{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class W0 extends _n{constructor(t,e,n,i,s,o){super(t,e,n,"number"),this._initInput(),this.min(i),this.max(s);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let M=parseFloat(this.$input.value);isNaN(M)||(this._stepExplicit&&(M=this._snap(M)),this.setValue(this._clamp(M)))},n=M=>{const x=parseFloat(this.$input.value);isNaN(x)||(this._snapClampSetValue(x+M),this.$input.value=this.getValue())},i=M=>{M.key==="Enter"&&this.$input.blur(),M.code==="ArrowUp"&&(M.preventDefault(),n(this._step*this._arrowKeyMultiplier(M))),M.code==="ArrowDown"&&(M.preventDefault(),n(this._step*this._arrowKeyMultiplier(M)*-1))},s=M=>{this._inputFocused&&(M.preventDefault(),n(this._step*this._normalizeMouseWheel(M)))};let o=!1,a,c,l,h,u;const d=5,f=M=>{a=M.clientX,c=l=M.clientY,o=!0,h=this.getValue(),u=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",_)},g=M=>{if(o){const x=M.clientX-a,v=M.clientY-c;Math.abs(v)>d?(M.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(x)>d&&_()}if(!o){const x=M.clientY-l;u-=x*this._step*this._arrowKeyMultiplier(M),h+u>this._max?u=this._max-h:h+u<this._min&&(u=this._min-h),this._snapClampSetValue(h+u)}l=M.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",_)},m=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(p,M,x,v,T)=>(p-M)/(x-M)*(T-v)+v,e=p=>{const M=this.$slider.getBoundingClientRect();let x=t(p,M.left,M.right,this._min,this._max);this._snapClampSetValue(x)},n=p=>{this._setDraggingStyle(!0),e(p.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",s)},i=p=>{e(p.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",s)};let o=!1,a,c;const l=p=>{p.preventDefault(),this._setDraggingStyle(!0),e(p.touches[0].clientX),o=!1},h=p=>{p.touches.length>1||(this._hasScrollBar?(a=p.touches[0].clientX,c=p.touches[0].clientY,o=!0):l(p),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",d))},u=p=>{if(o){const M=p.touches[0].clientX-a,x=p.touches[0].clientY-c;Math.abs(M)>Math.abs(x)?l(p):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d))}else p.preventDefault(),e(p.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d)},f=this._callOnFinishChange.bind(this),g=400;let _;const m=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const x=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+x),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(f,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class X0 extends _n{constructor(t,e,n,i){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const n=document.createElement("option");n.textContent=e,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class Y0 extends _n{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const q0=`.lil-gui {
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
}`;function $0(r){const t=document.createElement("style");t.innerHTML=r;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let ql=!1;class To{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:i,title:s="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:c=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{(l.code==="Enter"||l.code==="Space")&&(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),c&&this.domElement.classList.add("allow-touch-styles"),!ql&&a&&($0(q0),ql=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=o}add(t,e,n,i,s){if(Object(n)===n)return new X0(this,t,e,n);const o=t[e];switch(typeof o){case"number":return new W0(this,t,e,n,i,s);case"boolean":return new O0(this,t,e);case"string":return new Y0(this,t,e);case"function":return new xa(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,o)}addColor(t,e,n=1){return new G0(this,t,e,n)}addFolder(t){const e=new To({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof xa||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof xa)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}const K0=({throttlingMsTime:r=.5*1e3,onResize:t=()=>{}})=>{let e=0;window.addEventListener("resize",()=>{e>0&&clearTimeout(e),e=window.setTimeout(t,r)})},j0="/pub_web_spine2d-threejs_test",Z0=`${j0}/assets`,kc=window.innerWidth||800,zc=window.innerHeight||600,J0=window.devicePixelRatio||1,ei=new vg({antialias:!0,alpha:!0});ei.setPixelRatio(J0);ei.setSize(kc,zc);ei.shadowMap.enabled=!0;const Vc=new To,ni=new yg,os=new We(45,kc/zc,1,1e4);os.position.set(10,10,10);os.lookAt(new H(0,0,0));const Q0=new Ps(16,16),t_=new Ic({color:2176371}),Fr=new Ze(Q0,t_);Fr.rotation.x=-Math.PI/2;Fr.material.side=on;Fr.receiveShadow=!0;ni.add(Fr);const Hc=new Cg(16777215);Hc.position.set(1,1,1);ni.add(Hc);const Gc=new Rg(16777215,1);ni.add(Gc);const tn=new Ag(16777215,48,32,Math.PI/4,10,.5);tn.position.set(0,8,0);tn.castShadow=!0;tn.shadow.mapSize.set(4096,4096);ni.add(tn);const Co=new Pg(tn);ni.add(Co);const si=Vc.addFolder("SpotLight");si.addColor({color:16777215},"color").onChange(r=>{tn.color=new Zt(r)});si.add({intensity:48},"intensity",12,200,.1).onChange(r=>{tn.intensity=r});si.add({distance:32},"distance",12,60,.1).onChange(r=>{tn.distance=r});si.add({positionX:0},"positionX",-10,10,.1).onChange(r=>{tn.position.x=r});si.add({positionY:8},"positionY",0,20,.1).onChange(r=>{tn.position.y=r});si.add({positionZ:0},"positionZ",-10,10,.1).onChange(r=>{tn.position.z=r});si.add({showLight:!0},"showLight").onChange(r=>{Gc.visible=r});si.add({showHelper:!0},"showHelper").onChange(r=>{Co.visible=r});const e_=new ls(1,1,1),n_=new Ic({metalness:.75,roughness:0}),Qi=new Ze(e_,n_);Qi.position.set(-1.5,3,0);Qi.castShadow=!0;ni.add(Qi);let $l=!1,dn;const Ss=new U0(`${Z0}/spines/`);Ss.loadText("model.json");Ss.loadTextureAtlas("model.atlas");const i_=Vc.addFolder("SpineFolder");i_.add({wind:0},"wind",-20,20,.1).onChange(r=>{dn&&dn.skeleton.physicsConstraints.map(t=>{t.wind=r})});const Is=new F0(os,ei.domElement);Is.maxPolarAngle=Math.PI;Is.minDistance=.1;Is.maxDistance=1e4;Is.autoRotateSpeed=1;const s_=document.querySelector("#app");s_.appendChild(ei.domElement);K0({onResize:()=>{const r=window.innerWidth,t=window.innerHeight;ei.setPixelRatio(window.devicePixelRatio||1),ei.setSize(r,t),os.aspect=r/t,os.updateProjectionMatrix()}});let Kl=Date.now()/1e3;const Wc=()=>{requestAnimationFrame(Wc);const r=Date.now()/1e3,t=r-Kl;if(Kl=r,Ss.isLoadingComplete()){if(!$l){const e=Ss.require("model.atlas"),n=new g0(e),s=new I0(n).readSkeletonData(Ss.require("model.json"));dn=new oo(s,l=>{l.depthWrite=!1,l.depthTest=!0,l.alphaTest=.001});const o=s.width,a=s.height,c=o/a;dn.scale.set(5/o*c,5/a,0),dn.rotation.x=-Math.PI/2,dn.position.set(1.5,2.5,2.5),dn.state.setAnimation(0,"animation",!0),ni.add(dn)}$l=!0}Qi.rotation.x+=.01,Qi.rotation.y+=.01,Qi.rotation.z+=.01,tn.lookAt(new H(0,0,0)),dn&&dn.update(t),Co.update(),Is.update(),ei.render(ni,os)};Wc();
