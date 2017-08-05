'use strict';

angular.module('gitShoppingApp')
	.factory('ProdsSvc', function($resource) {
		return $resource('http://tiy-fee-rest.herokuapp.com/collections/bbc-shop',
			{},
			{
				// show all products
				query: { method: 'GET', isArray: true },
				// create new product
				create: { method: 'POST'}
			});
	})
	.factory('ProdSvc', function($resource) {
		return $resource('http://tiy-fee-rest.herokuapp.com/collections/bbc-shop/:id',
			{
				id: '@_id'
			},
			{
				// show a single post
				show: { method: 'GET'},
				// update a single post 
				edit: { method: 'PUT'},
				// delete a single post
				delete: { method: 'DELETE'}
			}
			)
	});