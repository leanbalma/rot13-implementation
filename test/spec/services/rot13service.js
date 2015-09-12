'use strict';

describe('Service: rot13Service', function () {

  // load the service's module
  beforeEach(module('rot13ImplementationApp'));

  // instantiate service
  var rot13Service;
  beforeEach(inject(function (_rot13Service_) {
    rot13Service = _rot13Service_;
  }));

  it('should do something', function () {
    expect(!!rot13Service).toBe(true);
  });

});
