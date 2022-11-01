// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";function n(n){return n!=n}var t,r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,e=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol.toStringTag:"",f=r&&"symbol"==typeof Symbol.toStringTag?function(n){var t,r,f,u,a;if(null==n)return o.call(n);r=n[i],a=i,t=null!=(u=n)&&e.call(u,a);try{n[i]=void 0}catch(t){return o.call(n)}return f=o.call(n),t?n[i]=r:delete n[i],f}:function(n){return o.call(n)},u="function"==typeof Uint32Array,a="function"==typeof Uint32Array?Uint32Array:null,y="function"==typeof Uint32Array?Uint32Array:void 0;t=function(){var n,t,r;if("function"!=typeof a)return!1;try{t=new a(t=[1,3.14,-3.14,4294967296,4294967297]),r=t,n=(u&&r instanceof Uint32Array||"[object Uint32Array]"===f(r))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?y:function(){throw new Error("not implemented")};var c,l=t,p="function"==typeof Float64Array,A="function"==typeof Float64Array?Float64Array:null,b="function"==typeof Float64Array?Float64Array:void 0;c=function(){var n,t,r;if("function"!=typeof A)return!1;try{t=new A([1,3.14,-3.14,NaN]),r=t,n=(p&&r instanceof Float64Array||"[object Float64Array]"===f(r))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n}()?b:function(){throw new Error("not implemented")};var v,U=c,d="function"==typeof Uint8Array,m="function"==typeof Uint8Array?Uint8Array:null,w="function"==typeof Uint8Array?Uint8Array:void 0;v=function(){var n,t,r;if("function"!=typeof m)return!1;try{t=new m(t=[1,3.14,-3.14,256,257]),r=t,n=(d&&r instanceof Uint8Array||"[object Uint8Array]"===f(r))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?w:function(){throw new Error("not implemented")};var s,h=v,N="function"==typeof Uint16Array,F="function"==typeof Uint16Array?Uint16Array:null,I="function"==typeof Uint16Array?Uint16Array:void 0;s=function(){var n,t,r;if("function"!=typeof F)return!1;try{t=new F(t=[1,3.14,-3.14,65536,65537]),r=t,n=(N&&r instanceof Uint16Array||"[object Uint16Array]"===f(r))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?I:function(){throw new Error("not implemented")};var S,g={uint16:s,uint8:h};(S=new g.uint16(1))[0]=4660;var T=52===new g.uint8(S.buffer)[0],j=!0===T?1:0,E=new U(1),O=new l(E.buffer);function x(n){return E[0]=n,O[j]}var P=!0===T?1:0,V=new U(1),Y=new l(V.buffer),_=Number.NEGATIVE_INFINITY,G=.6931471803691238,k=1.9082149292705877e-10,q=1048575;function z(t){var r,o,e,i,f,u,a,y,c,l,p,A;return 0===t?_:n(t)||t<0?NaN:(f=0,(o=x(t))<1048576&&(f-=54,o=x(t*=0x40000000000000)),o>=2146435072?t+t:(f+=(o>>20)-1023|0,f+=(y=614244+(o&=q)&1048576|0)>>20|0,a=(t=function(n,t){return V[0]=n,Y[P]=t>>>0,V[0]}(t,o|1072693248^y))-1,(q&2+o)<3?0===a?0===f?0:f*G+f*k:(u=a*a*(.5-.3333333333333333*a),0===f?a-u:f*G-(u-f*k-a)):(y=o-398458|0,c=440401-o|0,i=(p=(A=(l=a/(2+a))*l)*A)*function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)}(p),e=A*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))}(p),u=e+i,(y|=c)>0?(r=.5*a*a,0===f?a-(r-l*(r+u)):f*G-(r-(l*(r+u)+f*k)-a)):0===f?a-l*(a-u):f*G-(l*(a-u)-f*k-a))))}var B=Number.POSITIVE_INFINITY;return function(t){return n(t)?t:(r=t)>=0&&r<=1?0===t?_:1===t?B:z(t/(1-t)):NaN;var r}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).logit=t();
//# sourceMappingURL=browser.js.map
