'use strict';

angular
  .module('gitShoppingApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/shop', {
        templateUrl: 'views/prod-list.html',
        controller: 'ProdsCtrl'
      })
      .when('/new', {
        templateUrl: 'views/prod-create.html',
        controller: 'ProdsCtrl'
      })
      .when('/product/:id', {
        templateUrl: 'views/prod-detail.html',
        controller: 'ProdCtrl'
      })
      .when('/prod/:id/edit', {
        templateUrl: 'views/prod-editDetail.html',
        controller: 'ProdCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });