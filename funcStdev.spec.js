var expect = chai.expect;


describe("Reduce function", function(){
	it("should be a function", function(){
		expect(typeof reduce).to.equal( 'function' );
	})

	// NEED TO FIGURE OUT HOW TO USE CHAI SPIES WITH TESTEM

});

describe("Add function", function(){
	var test1, test2, test3;
	beforeEach(function(){
		test1 = add(3,1);
		test2 = add(50, 25);
		test3 = add(-18, 12);
	})
	it("should be a function", function(){
		expect(typeof add).to.equal( 'function' );
	});

	it("should take 2 arguments", function(){
		expect(add.length).to.equal(2);
	});

	it("should return the sum of 2 numbers", function(){
		expect(test1).to.equal(4);
		expect(test2).to.equal(75);
		expect(test3).to.equal(-6);
	});
})