// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-probability@v0.2.3-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.2.4-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.2.2-esm/index.mjs";function m(m){return t(m)?m:s(m)?0===m?n:1===m?i:e(m/(1-m)):NaN}export{m as default};
//# sourceMappingURL=index.mjs.map
