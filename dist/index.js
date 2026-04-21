"use strict";var u=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var t=u(function(c,i){
var n=require('@stdlib/math-base-assert-is-probability/dist'),a=require('@stdlib/math-base-assert-is-nan/dist'),s=require('@stdlib/math-base-special-ln/dist'),q=require('@stdlib/constants-float64-pinf/dist'),v=require('@stdlib/constants-float64-ninf/dist');function f(r){return a(r)?r:n(r)?r===0?v:r===1?q:s(r/(1-r)):NaN}i.exports=f
});var o=t();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
