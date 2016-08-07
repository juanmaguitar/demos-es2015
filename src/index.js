import showMsg from './myUtils.js';
import someFunc from './myHttpUtils.js';
import { get, post } from './myHttpUtils.js';
import { TIMEOUT as HTTP_TIMEOUT } from './myHttpUtils.js';
import * as http from './myHttpUtils.js';

import { filterNumberMoreThan as a, filterMapNumbers as b } from './arrowFunctions.js'

import Shape from './Shape.js'

import { promise1, promise2, allPromise, racePromise } from './promises.js'


get('/my/url');

someFunc();

console.log ('TIMEOUT = ' + HTTP_TIMEOUT); // 1000;
http.post('/my/url', 'body');

http.default();

showMsg("hello you");

// ------------------------

console.log ( a([1,2,3,5,2,4,2,56,6,3,34], 2) )
console.log ( b([1,2,3,5,2,4,2,56,6,3,34]) )

// ------------------------

var rectangle = new Shape("rectangle", 34, 44)
console.log ( rectangle.toString() );
console.log ( Shape.multiplyBy2(10) );

// ------------------------

allPromise.then(function(data) {
	console.log( "ALL result..." )
  console.log( data )
})

racePromise.then(function(data) {
	console.log( "RACE result..." )
  console.log( data )
})

promise1
	.then( function(data) {
		console.log("CHAINED promises...");
		console.log(data);
		return promise2
	})
	.then( console.log );