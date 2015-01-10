/**
 * Created by luis_blanco on 1/9/2015.
 */
(
    function () {
        "use strict";

        angular
            .module("productManagement")
            .controller("ProductDetailCtrl",
            ProductDetailCtrl); // Reference to controller function.

        // Controller function
        function ProductDetailCtrl() {
            var vm = this;

            vm.product = {
                "productId": 2,
                "productName": "Garden Cart",
                "productCode": "GDN-0023",
                "releaseDate": "March 18, 2010",
                "description": "15 gallon capacity rolling garden cart",
                "cost": 20.00,
                "price": 32.99,
                "category": "garden",
                "tags": ["barrow", "cart", "wheelbarrow"],
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
            }

            //vm.product = product;
            vm.title = "Product Detail: " + vm.product.productName;

            if (vm.product.tags) {
                vm.product.tagList = vm.product.tags.toString();
            }
        }
    }());