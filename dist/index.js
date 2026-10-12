"use strict";var n=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(u){throw (e=0, u)}};};var t=n(function(l,i){
var a=require('@stdlib/math-base-assert-is-probability/dist'),s=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-ln/dist'),v=require('@stdlib/constants-float64-pinf/dist'),f=require('@stdlib/constants-float64-ninf/dist');function o(r){return s(r)?r:a(r)?r===0?f:r===1?v:q(r/(1-r)):NaN}i.exports=o
});var N=t();module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
