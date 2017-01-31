describe('pb-spinwheel-test', function() {
	
	var elem;
	var to_check;
	var id_name = 'my-pb-spinwheel';
	var successEvent = 'on-success-event';
	var errorEvent = 'on-error-event';

	beforeAll(function(done) {

		window.addEventListener('WebComponentsReady', function(e) {
			elem = document.createElement('pb-spinwheel');
			elem.setAttribute('on-success-event', successEvent);
			elem.setAttribute('on-error-event', errorEvent);
			elem.setAttribute('id', id_name);
			document.body.appendChild(elem);

			// get element now and use it throughout test case
			//to_check = document.getElementById(id_name);
			to_check = document.getElementById(id_name);

			done();
		});
  });

	afterAll(function() {
		let to_remove = document.getElementById(id_name);
		document.body.removeChild(to_remove);
	});

	it('should have such element in DOM', function() {
		expect(to_check).not.toBe(null);
	});

	it('should validate member variables', function() {
		expect(to_check._degree).toEqual(1800);
	});
});
