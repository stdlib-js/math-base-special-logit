/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var EPS = require( '@stdlib/constants-float64-eps' );
var abs = require( '@stdlib/math-base-special-abs' );
var tryRequire = require( '@stdlib/utils-try-require' );


// FIXTURES //

var small = require( './fixtures/python/small.json' );
var medium = require( './fixtures/python/medium.json' );
var large = require( './fixtures/python/large.json' );


// VARIABLES //

var logit = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( logit instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof logit, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` when provided `NaN`', opts, function test( t ) {
	var y = logit( NaN );
	t.equal( isnan( y ), true, 'returns NaN' );
	t.end();
});

tape( 'the function returns `NaN` when provided a number outside `[0,1]`', opts, function test( t ) {
	var y = logit( 1.2 );
	t.equal( isnan( y ), true, 'returns NaN' );
	y = logit( -0.1 );
	t.equal( isnan( y ), true, 'returns NaN' );
	t.end();
});

tape( 'the function returns `-Infinity` when provided `0`', opts, function test( t ) {
	var y = logit( 0.0 );
	t.equal( y, NINF, 'returns -Infinity' );
	t.end();
});

tape( 'the function returns `+Infinity` when provided `1`', opts, function test( t ) {
	var y = logit( 1.0 );
	t.equal( y, PINF, 'returns +Infinity' );
	t.end();
});

tape( 'the function evaluates the logit of `x` for the interval `(0,0.25]`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = small.expected;
	x = small.x;
	for ( i = 0; i < x.length; i++ ) {
		y = logit( x[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = EPS * abs( expected[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. v: '+y+'. E: '+expected[i]+' Δ: '+delta+'. tol: '+tol );
		}
	}
	t.end();
});

tape( 'the function evaluates the logit of `x` for the interval `[0.25,0.75]`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = medium.expected;
	x = medium.x;
	for ( i = 0; i < x.length; i++ ) {
		y = logit( x[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = EPS * abs( expected[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. v: '+y+'. E: '+expected[i]+' Δ: '+delta+'. tol: '+tol );
		}
	}
	t.end();
});

tape( 'the function evaluates the logit of `x` for the interval `[0.75,1)`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = large.expected;
	x = large.x;
	for ( i = 0; i < x.length; i++ ) {
		y = logit( x[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = EPS * abs( expected[i] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. v: '+y+'. E: '+expected[i]+' Δ: '+delta+'. tol: '+tol );
		}
	}
	t.end();
});
