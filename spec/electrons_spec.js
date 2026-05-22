describe('Electrons', function() {
	beforeEach(function() {
		Electrons = new Electrons();
	});

	//TC_1
	it('should return 6 for [ 1, 2, 3, 4, 5 ]', function() {
		expect(Electrons.core([1, 2, 3, 4, 5])).toEqual(6);
	});

	
});
