/*global define */

define(['angular'], function(angular) {
    'use strict';
    return angular.module('app.config', ['satellizer'])
        .constant('VERSION', '0.0.1')
        .constant('PRODUCTURL', 'http://dev7.craftsvilla.com/catalog/product/view/id/')
        .constant('HOST', 'http://dev7.craftsvilla.com/')
        .constant('IMGHOST', 'https://secureimg1.craftsvilla.com/thumb/166x166')
        .constant('ENVIRONMENT', 'development')
        .config(['$httpProvider', function($httpProvider) {
            // delete $httpProvider.defaults.headers.common['X-Requested-With'];
            // $httpProvider.defaults.headers.post['Accept'] = 'application/json, text/javascript';
            // // $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
            // $httpProvider.defaults.headers.post['Access-Control-Max-Age'] = '1728000';
            // $httpProvider.defaults.headers.common['Access-Control-Max-Age'] = '1728000';
            // $httpProvider.defaults.headers.common['Accept'] = 'application/json, text/javascript';
            // $httpProvider.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';
            // $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
            // $httpProvider.defaults.useXDomain = true;
            $httpProvider.defaults.withCredentials = true;
            $httpProvider.defaults.headers.common = {};
            $httpProvider.defaults.headers.post = {};
            $httpProvider.defaults.headers.put = {};
            $httpProvider.defaults.headers.patch = {};
            delete $httpProvider.defaults.headers.common['X-Requested-With'];
        }])
        .config(['$authProvider', 'HOST', function($authProvider, HOST) {
            $authProvider.baseUrl = 'http://dev7.craftsvilla.com';
            $authProvider.withCredentials = true;

            // $authProvider.httpInterceptor = function() { return true; },

            $authProvider.facebook({
                clientId: '1696658660596971',
                responseType: 'token',
                url: '/checkoutService/index/socialLogin',
                skipAuthorization: true

            });

            $authProvider.google({
                clientId: '34235241642-4rsq630ova71avmsph5ded5uvp3tac8t.apps.googleusercontent.com',
                url: '/checkoutService/index/socialLogin',
                skipAuthorization: true

            });
        }]);
});
