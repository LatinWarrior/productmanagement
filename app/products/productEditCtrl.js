/**
 * Created by luis_blanco on 1/10/2015.
 */
(function () {
    "use strict";

    angular
        .module("productManagement")
        .controller("ProductEditCtrl",
        ["product", ProductEditCtrl]);

    function ProductEditCtrl(product) {

        var vm = this;

        vm.product = product;

        console.log("ProductEditCtrl productId: " + product.productId);

        if (vm.product && vm.product.productId) {
            vm.title = "Edit: " + vm.product.productName;
        }
        else {
            vm.title = "New Product";
        }
    }

}());
