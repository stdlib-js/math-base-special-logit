<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# logit

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the [logit][logit] function.

<section class="intro">

The [logit][logit] function is defined as the logarithm of the odds `p / (1-p)`; i.e.,

<!-- <equation class="equation" label="eq:logit_function" align="center" raw="\operatorname{logit}(p)=\log \left({\frac {p}{1-p}}\right)" alt="Logit function."> -->

<div class="equation" align="center" data-raw-text="\operatorname{logit}(p)=\log \left({\frac {p}{1-p}}\right)" data-equation="eq:logit_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/logit/docs/img/equation_logit_function.svg" alt="Logit function.">
    <br>
</div>

<!-- </equation> -->

The [logit][logit] function is the inverse of the [standard logistic][standard-logistic] function, sometimes also called the sigmoid function. 

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-logit
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

</section>

<section class="usage">

## Usage

```javascript
var logit = require( '@stdlib/math-base-special-logit' );
```

#### logit( p )

Computes the [logit][logit] function.

```javascript
var v = logit( 0.2 );
// returns ~-1.386

v = logit( 0.9 );
// returns ~2.197
```

If `p < 0` or `p > 1`, the function returns `NaN`.

```javascript
var v = logit( 1.3 );
// returns NaN

v = logit( -0.2 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var logit = require( '@stdlib/math-base-special-logit' );

var p;
var i;

for ( i = 0; i < 100; i++ ) {
    p = randu();
    console.log( 'logit(%d) = %d', p, logit( p ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-logit.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-logit

[test-image]: https://github.com/stdlib-js/math-base-special-logit/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/math-base-special-logit/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-logit/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-logit?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-logit.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-logit/main

-->

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-logit/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-logit/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-logit/tree/esm

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-logit/main/LICENSE

[logit]: https://en.wikipedia.org/wiki/Logit

[standard-logistic]: https://en.wikipedia.org/wiki/Logistic_function

</section>

<!-- /.links -->
