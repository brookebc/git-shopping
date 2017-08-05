'use strict';

angular.module('gitShoppingApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

  .controller('ProdsCtrl', function ($scope, $location, ProdsSvc) {
    // $scope.awesomeThings = [
    //   'HTML5 Boilerplate',
    //   'AngularJS',
    //   'Karma'
    // ];
    $scope.createProduct = function() {
      $location.path('/new');
    };
    $scope.newProd = function(product) {
      PostsSvc.create(prod)
      $location.path('/shop');
    };
    $scope.products = ProdsSvc.query();
  })

  .controller('ProdCtrl', function($scope, $location, $routeParams, ProdSvc) {

    $scope.products = ProdSvc.show({ id: $routeParams.id });
    $scope.delete = function() { 
      ProdSvc.delete({ id: $routeParams.id });
      $location.path('/shop');
    };
    $scope.edit = function() {
      ProdSvc.edit($scope.products);
      $location.path('/shop');
    };

  });

// angular.module('gitShoppingApp', ['gitShoppingApp.directives']);

// angular.module('gitShoppingApp')
//   .controller('MainCtrl', function ($scope) {
//     $scope.products = $scope.products = [

//     //this is an array that I will actually end up putting up on the CRUD server
//     {'name': 'Silly thing one',
//     'thumb': 'http://placepuppy.it/200/150',
//     'snippet': 'here is just a taste',
//     'description': 'this thing is the best one',
//     'pic': 'http://placepuppy.it/400/225',
//     'price':'50',
//     'id':'1',
//     },
//     {'name': 'This is the crazy one',
//     'thumb': 'http://placepuppy.it/200/150',
//     'snippet': 'here is just a taste',
//     'description': 'better not try this at home',
//     'pic': 'http://placepuppy.it/400/225',
//     'price':'60',
//     'id':'2',
//     },
//     {'name': 'How bout them dawgs?',
//     'thumb': 'http://placepuppy.it/200/150',
//     'snippet': 'here is just a taste',
//     'description': 'better not try this at home',
//     'pic': 'http://placepuppy.it/400/225',
//     'price':'75',
//     'id':'3',
//     },
//     {'name': 'More and more',
//     'thumb': 'http://placepuppy.it/200/150',
//     'snippet': 'here is just a taste',
//     'description': 'better not try this at home',
//     'pic': 'http://placepuppy.it/400/225',
//     'price':'.50',
//     'id':'4',
//     },
//     {'name': 'I love this place',
//     'thumb': 'http://placepuppy.it/200/150',
//     'snippet': 'here is just a taste',
//     'description': 'better not try this at home',
//     'pic': 'http://placepuppy.it/400/225',
//     'price':'150',
//     'id':'5',
//     },
//     {'name': 'Take me home',
//     'thumb': 'http://placepuppy.it/200/150',
//     'snippet': 'here is just a taste',
//     'description': 'better not try this at home',
//     'pic': 'http://placepuppy.it/400/225',
//     'price':'450',
//     'id':'6',
//     }
//     ];
//   })

//   .controller('AdminCtrl', function ($scope){
  	
//   })


