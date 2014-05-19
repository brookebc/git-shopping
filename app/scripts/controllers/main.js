'use strict';

angular.module('gitShoppingApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })

  .controller('ProductListCtrl', function ($scope){
  	$scope.products = [
  	{'name': 'Silly thing one',
  	'thumb': 'http://placepuppy.it/200/150',
  	'snippet': 'here is just a taste',
  	'description': 'this thing is the best one',
  	'pic': 'http://placepuppy.it/400/225',
  	'price':'50',
  	'id':'1',
  	},
  	{'name': 'This is the crazy one',
  	'thumb': 'http://placepuppy.it/200/150',
  	'snippet': 'here is just a taste',
  	'description': 'better not try this at home',
  	'pic': 'http://placepuppy.it/400/225',
  	'price':'60',
  	'id':'2',
  	},
  	{'name': 'How bout them dawgs?',
  	'thumb': 'http://placepuppy.it/200/150',
  	'snippet': 'here is just a taste',
  	'description': 'better not try this at home',
  	'pic': 'http://placepuppy.it/400/225',
  	'price':'75',
  	'id':'3',
  	},
  	{'name': 'More and more',
  	'thumb': 'http://placepuppy.it/200/150',
  	'snippet': 'here is just a taste',
  	'description': 'better not try this at home',
  	'pic': 'http://placepuppy.it/400/225',
  	'price':'.50',
  	'id':'4',
  	},
  	{'name': 'I love this place',
  	'thumb': 'http://placepuppy.it/200/150',
  	'snippet': 'here is just a taste',
  	'description': 'better not try this at home',
  	'pic': 'http://placepuppy.it/400/225',
  	'price':'150',
  	'id':'5',
  	},
  	{'name': 'Take me home',
  	'thumb': 'http://placepuppy.it/200/150',
  	'snippet': 'here is just a taste',
  	'description': 'better not try this at home',
  	'pic': 'http://placepuppy.it/400/225',
  	'price':'450',
  	'id':'6',
  	}
  	];
  });
  
