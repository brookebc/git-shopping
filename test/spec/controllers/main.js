'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('gitShoppingApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

describe('ProductListCtrl', function(){

  it('should create "products" model with 3 products', function() {
    var scope = {},
        ctrl = new ProductListCtrl(scope);

    expect(scope.products.length).toBe(3);
  });

});
