
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

console.log("IMPERATIVE ANSWER: ", calcStd(test)); // >> 1.4142... check Wolfram Alpha if you must.

// ___________________________________________________________________________________


// Before we tackle this problem, one more important aspect of Functional Programming:

/*	
	*  CURRYING  *
	One of the keys to functional programming is spotting how functions can be further reduced 
and generalised. In the example of a summing reduce function we can notice that the first 
two arguments are constant (the add function and initial value). The only argument influencing 
the outcome of the summation is the array. If the function argument or the initial value argument 
are altered then the reduction will no longer be a zero-based sum. **The aim now is to transform 
the reduction from a function that takes three arguments, to a sum function that only takes an 
array as an argument.** This is where we meet another of the key concepts of functional programming, 
currying.

	In a nutshell, currying is the process of transforming a function that takes multiple 
arguments into a function that takes a reduced number of arguments and returns another function 
until all the arguments of the initial function have been supplied.

	To help understand:


var times = function(w, h) {
    return w * h;
};


			<< CAN ALSO BE WRITTEN >> ( though curry(...) does something very similar (wink) )


var times = function(w) {

    		// Here we have access to w
    return function(h) {

        		// Here we have access to w and h
        return w * h;
    };
};


				<< WHICH CAN BE RUN LIKE >>


var width = 5;
var height = 12;
var area = times(width)(height);	// >> 60

*/


// Curry function provided: YOU WILL USE IT (takes functions and makes them curry-able):

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

// I recommend taking a minute to think about which functions you are going to be needing
// in order to transform the data into the values you want. You will be using some of functions 
// that you write more than once. This should look less like a list of instructions (Imperative Programming) 
// and more like a library of functions.


/* *****************************	FOR REFERENCE	*************************** */
// 	This solution is Functional nirvana. If written very well, this is what your solution should look like.
// 	It would be great if you could get here; however, this may be a very new concept and, conceptually, it is 
// 	much more abstract than Imperative. The only answer I'm hoping you can achieve is in the console.log() just
// 	above the ** EXPECTED END ** line below. The compose() function is written out at the bottom if you get stuck.

// Final standard deviation function.
var std = compose(Math.sqrt, mean, squaredDeviations);

// Log the value
console.log(std([1,2,3,4,5])); // >> 1.4142


		
/*********************************  START YOUR CODE HERE  **********************************/

	/* ******** There are more functions needed than just the names provided ******** */
var exArray = [1,2,3,4,5];

	// Rewrite .reduce() as a curryable function instead of a method 
	// 	(* because the reduce() method doesn't return a function *) 
	// 		(** you should still use the method in the function **)
var reduce = ;


	// We will still need a callback function and one other function in order to fully utilize reduce()...




// Using sum as such is only possible if we've defined "reduce" as a curry-able function
// 	(remember, because reduce is curry-able and returns a function, we can now call sum(...) )
var sum = reduce(add, 0);



// Use map. It should also be a curryable function.
var map = ;



// Subtract the mean and square, returning a new ARRAY
var squaredDeviations = ;



// This will provide the correct value, assuming your functions have been written correctly
	// Nested implementation on solution (seems kinda messy...)
console.log("Answer: ", Math.sqrt(mean(squaredDeviations(exArray))));  // >> 1.4142



/*********************************  EXPECTED END OF CODE  **********************************/




/*
*  COMPOSITION  *

	We can improve this functionality further by removing the nesting of functions using another key 
technique in functional programming; composition. Here we see that the outcome of the calculation is obtained 
by applying mean to squaredDeviations and then by applying the square root to the result of this. Rather than 
nesting functions inside one another, we would like to be able to define a new function that is a composition 
of the nested functions and accepts the inner-most argument of the nested functions as its own argument.

*/





/*	BELOW IS PART OF THE SOLUTION. TRY IMPLEMENTING COMPOSE() FIRST BEFORE PROCEEDING FURTHER */






/* << DELETE ME (when complete) to see how compose() works. Pretty cool.

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
console.log("std([1,2,3,4,5]): ", std([1,2,3,4,5])); // >> 1.4142
 
// this is the same as:
console.log(compose(Math.sqrt, mean, squaredDeviations)([1,2,3,4,5])); // >> 1.4142

*/




