'use strict';

describe('Service: BoardModel', function () {

  // load the service's module
  beforeEach(module('pinstackApp'));

  // instantiate service
  var BoardModel;
  beforeEach(inject(function (_BoardModel_) {
    BoardModel = _BoardModel_;
  }));

  it('should do something', function () {
    expect(!!BoardModel).toBe(true);
  });

});
