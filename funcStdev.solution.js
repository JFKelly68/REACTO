/*
The task here is:
	
	Given an array of numbers, calculate the standard deviation.

	Step-by-step, how to calculate Standard Deviation: 
	- ex [2,4]
		1) Calculate the arithmetic mean of the array.		(2+4)/length
		2) Subtract the mean from each value in the array.	(2-2, 4-2)
		3) Square each mean subtracted value.				(0^2 = 0, 2^2 = 4)
		4) Sum the squared variations.						(0+4 = 4)
		5) Take the square root of the sum.					(2)


However, rather than storing values (state), variables will instead point to functions;
This is what's known as Function programming, and there are some languages based entirely
off of this style of using functions to create the values desired. These functions do not 
change value: for a given input they always return the same result.
*/


// An Ignaminious Imperative Implementation:


var test = [1, 2, 3, 4, 5];

var calcStd = function(array){
	var mean = 0;
		
		// 1a) Calculate the mean, first by summing each value in the array
	for (var i = 0; i < array.length; i++) {
	    mean += array[i];
	}
		
		// 1b) And then by dividing by the number of elements in the array
	mean /= array.length;

		
		// 2) Subtract the mean from each value, 
		// 3) Square each element 
		// 4a) Then sum. 
	var squaredVariations = 0;
	for (i = 0; i < array.length; i++) {
	    squaredVariations += (array[i] - mean) * (array[i] - mean);
	}

		// 4b) find the mean square deviation. 
	var meanSquare = squaredVariations / (array.length);

		// 5) And now calculate the standard deviation by taking the square root
	return Math.sqrt(meanSquare);
}

console.log(calcStd(test)); // >> 1.4142... check Wolfram Alpha if you must.



/*	CURRYING  *
	One of the keys to functional programming is spotting how functions can be further reduced 
and generalised. In the example of our summing reduce function we can notice that the first 
two arguments are constant (the add function and initial value). The only argument influencing 
the outcome of the summation is xs. If the function argument or the initial value argument 
are altered then the reduction will no longer be a zero-based sum. The aim now is to transform 
the reduction from a function that takes three arguments, to a sum function that only takes xs 
as an argument. This is where we meet another of the key concepts of functional programming, 
currying.

	In a nutshell, currying is the process of transforming a function that takes multiple 
arguments into a function that takes a reduced number of arguments and returns another function 
until all the arguments of the initial function have been supplied.

*/

// Currying function provided:

var curry = function (fn, fnLength) {
	fnLength = fnLength || fn.length;
	return function () {
		var suppliedArgs = Array.prototype.slice.call(arguments);
		if (suppliedArgs.length >= fn.length) {
			return fn.apply(this, suppliedArgs);
		} else if (!suppliedArgs.length) {
			return fn;
		} else {
			return curry(fn.bind.apply(fn, [this].concat(suppliedArgs)), fnLength - suppliedArgs.length);
		}
	};
};


// reduce as a curryable function
var reduce = curry(function(func, init, xs) {
	return xs.reduce(func, init);
});

// add two numbers
var add = function(a, b) {
	return a + b;
};

// Please rewrite length as a higher order function (can still use .length)
var length = function(xs) {
	return xs.length;	
};

// map as a curryable function
var map = curry(function(func, xs){
	return xs.map(func);
});

// square a number
var square = function(x) {
	return x * x;
};

// sum
var sum = reduce(add, 0);

// Simple average. Sum / length
var mean = function(xs) {
	return sum(xs) / length(xs);
};


// subtract the mean and square returning a new array
var squaredDeviations = function(xs) {
	var m = mean(xs);
	return map(function(x) {
		return square(x - m);
	}, xs);
};


// Nested implementation on solution (seems kinda messy...)
console.log("SOLUTIONS ANSWER: ", Math.sqrt(mean(squaredDeviations([1,2,3,4,5]))));  // >> 1.4142


/*

// Compose
var compose = function() {
	var funcs = arguments;
	return function() {
		var args = arguments;
		for (var i = funcs.length; i --> 0;) {
			args = [funcs[i].apply(this, args)];
		}
		return args[0];
	};
};

// Final standard deviation function.
var std = compose(Math.sqrt, mean, squaredDeviations);

// Test it out
console.log(std([1,2,3,4,5])); // >> 1.4142
 
// this is the same as:
console.log(compose(Math.sqrt, mean, squaredDeviations)([1,2,3,4,5])); // >> 1.4142

*/




