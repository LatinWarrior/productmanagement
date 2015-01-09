/**
 * Created by luis_blanco on 1/7/2015.
 */
(function () {
    "use strict";

    // Remove the dependency to productResourceMock when the backend service is ready.
    var app = angular.module('productManagement',
        ["common.services",
            "ui.router",
            /*"ngRoute",*/
            "productResourceMock"]);

    //app.config(['$routeProvider', function($routeProvider){
    //    $routeProvider.
    //        when('/products', {
    //            templateUrl: 'app/products/productListView.html',
    //            controller: 'ProductListCtrl as vm'
    //        }).
    //        otherwise({
    //            redirectTo: '/products'
    //        });
    //}]);

    app.config(["$stateProvider",
        "$urlRouterProvider",
        function ($stateProvider, $urlRouterProvider) {
            //
            // For any unmatched url, redirect to /products
            $urlRouterProvider.otherwise("/");
            //
            // Now set up the states
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: "app/welcomeView.html"
                })
                .state('productList', {
                    url: "/api/products",
                    templateUrl: "app/products/productListView.html",
                    controller: "ProductListCtrl as vm"
                })
                .state('productEdit', {
                    url: '/api/products/edit/:productId',
                    templateUrl: 'app/products/productEditView.html',
                    controller: 'ProductEditCtrl as vm'
                })
        }]);

}());