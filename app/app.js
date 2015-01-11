/**
 * Created by luis_blanco on 1/7/2015.
 */
(function () {
    "use strict";

    // Remove the dependency to productResourceMock when the backend service is ready.
    var app = angular.module('productManagement',
        ["common.services",
            "ui.router",
            "ui.mask",
            "ui.bootstrap",
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
                    url: "/products",
                    templateUrl: "app/products/productListView.html",
                    controller: "ProductListCtrl as vm"
                })
                .state('productDetail', {
                    url: '/products/:productId',
                    templateUrl: 'app/products/productDetailView.html',
                    controller: 'ProductDetailCtrl as vm',
                    resolve: {
                        productResource: "productResource",

                        product: function (productResource, $stateParams) {
                            var productId = $stateParams.productId;
                            console.dir('$stateParams.productId: ' + productId);
                            var result = productResource.get({productId: productId}).$promise;
                            console.dir(result);
                            return result;
                        }
                    }
                })
                .state('productEdit', {
                    abstract: true,
                    url: '/products/edit/:productId',
                    templateUrl: 'app/products/productEditView.html',
                    controller: 'ProductEditCtrl as vm',
                    resolve: {
                        productResource: "productResource",

                        product: function (productResource, $stateParams) {
                            var productId = $stateParams.productId;
                            var result = productResource.get({productId: productId}).$promise;
                            return result;
                        }
                    }
                })
                .state("productEdit.info", {
                    url: "/info",
                    templateUrl: "app/products/productEditInfoView.html"
                })
                .state("productEdit.price", {
                    url: "/price",
                    templateUrl: "app/products/productEditPriceView.html"
                })
                .state("productEdit.tags", {
                    url: "/tags",
                    templateUrl: "app/products/productEditTagsView.html"
                })
        }]);

}());