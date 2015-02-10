“Object Orientation makes code understandable by encapsulating moving parts. 
Functional programming makes code understandable by minimising moving parts”

	-Michael Feathers



The task here is:
	
	Given an array of numbers, calculate the standard deviation.

	Step-by-step, how to calculate Standard Deviation: 
	- ex [2,4]
		1) Calculate the arithmetic MEAN of the array.		(2+4)/LENGTH
		2) Subtract the mean from each value in the array.	(2-2, 4-2)
		3) SQUARE each mean subtracted value.				(0^2 = 0, 2^2 = 4)
		4) SUM the squared variations.						(0+4 = 4)
		5) Take the square root of the sum.					(2)



	However, rather than storing values (state), variables will instead point to functions;
This is what's known as Function Programming, and there are some languages based entirely
off of this style of using functions to create the values desired. These functions do not 
change value: for a given input they always return the same result.



Functional Programming:

	Functions that operate on other functions are called "higher-order functions". 
By operating on functions, they can talk about actions on a whole new level. 
Instead of taking a function value as an argument, it produces (returns) a new 
function.

	Higher-order functions can be used to generalise many algorithms that regular 
functions can not easily describe. When you have a repertoire (library) of these 
functions at your disposal, it can help you think about your code in a clearer way: 
Instead of a messy set of variables and loops, you can decompose algorithms into 
a combination of a few fundamental algorithms, which are invoked by name, and do 
not have to be typed out again and again. (See "Imperative Solution" in funcStdev.js)

	
	Imperative programs are written as a very exacting set of procedures that a 
computer must follow in order to perform a calculation, the order of execution is 
highly important and strict and well-defined control structures are used (such as 
loops and branches) to guide the flow of the program. The difference is being able to 
write what we WANT to do instead of HOW we do it. This means we are working at a 
higher level of abstraction and, in practice, it means shorter, clearer, and more 
pleasant code. 


	The way we will be modifying data is through the manipulation and evaluation of 
purely functional transformations applied to data. Due to functional programming 
being stateless, functions always give the same output for a given input (the outcome 
of a function is dependent only on the input and nothing else). In functional 
programming, data is immutable: once a value is set, this value does not change (in the 
mathematical sense that the number 1 is always equal to the value 1). Pure functions 
do not modify the data that variables point to (or the state of any other value outside 
of the function). Instead, they return a new value (which could be itself a function) after 
carrying out a transformation on the original values (or functions). 


	The key feature of functional programming is higher/first order functions; functions 
that behave as ‘first class citizens’ in that they can be passed as arguments to 
functions as well as being returned by functions. I will be requesting that you use this
technique exclusively for the REACTO, and I will provide hints to guide you down the path.








