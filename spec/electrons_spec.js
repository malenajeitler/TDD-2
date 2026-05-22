describe('Electrons', function() {
	beforeEach(function() {
		electronsInstance = new Electrons();
	});

	//TC_1
	it('should return 6 for [ 1, 2, 3, 4, 5 ]', function() {
		expect(electronsInstance.core([1, 2, 3, 4, 5])).toEqual(6);
	});

    //TC_2
    it('should return 4 for [ 2, 2, 3, 3 ]', function() {
		expect(electronsInstance.core([ 2, 2, 3, 3 ])).toEqual(4);
	});

	
});
