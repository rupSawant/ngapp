/**
 * Defines the main routes in the application.
 */
define(['./app'], function (app) {
  'use strict';
  app.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider) {

    $locationProvider.html5Mode(true);

    $stateProvider
        .state('products', {
          url: '/products',
          templateUrl: 'partials/products.html',
          controller: 'productsCtrl',
          title: 'Home'
        })

		    .state('productById', {
			    url: '/products/:id',
			    templateUrl: 'partials/product.html',
			    controller: 'ctrl.product',
			    title: 'Product Display'
		    })

        .state('cart', {
          url: "/cart",
          templateUrl: 'partials/cart.html',
          controller: 'cartCtrl',
          title: 'Cart'
        })
    .state('login', {
      url: "/login",
      templateUrl: 'partials/login.html',
      controller: 'loginCtrl',
      title: 'login'
    })
    .state('shipping', {
      url: "/shipping",
      templateUrl: 'partials/shipping.html',
      //controller: 'cartCtrl',
      title: 'shipping'
    })
    .state('payments', {
      url: "/payments",
      templateUrl: 'partials/payments.html',
      //controller: 'cartCtrl',
      title: 'Cart'
    });
    $urlRouterProvider.otherwise("/products");

  }]);
});