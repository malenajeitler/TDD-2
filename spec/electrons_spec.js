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

	//TC_3
    it('should return 2 for [ 6, 6, 4, 4, 1, 3 ]', function() {
		expect(electronsInstance.core([ 6, 6, 4, 4, 1, 3 ])).toEqual(2);
	});

    //TC_4
    it('should return 12 for [ 3, 5, 3, 5, 4, 2 ]', function() {
		expect(electronsInstance.core([ 3, 5, 3, 5, 4, 2 ])).toEqual(12);
	});
	
});
