/**
 * Created by luis_blanco on 1/7/2015.
 */
(function () {
    "use strict";
    angular
        .module("productManagement")
        .controller("ProductListCrtl", ["productResource", ProductListCrtl]);

    function ProductListCrtl(productResource) {
        // when using the controller as syntax, the model is defined in this variable.
        var vm = this;

        productResource.query(function (data){
            vm.products = data;
        })

        //vm.products = [
        //    {
        //        "productId": 1,
        //        "productName": "Leaf Rake",
        //        "productCode": "GDN-0011",
        //        "releaseDate": "March 19, 2009",
        //        "description": "Leaf rake with 48-inch handle.",
        //        "cost": 9.00,
        //        "price": 19.95,
        //        "category": "garden",
        //        "tags": ["leaf", "tool"],
        //        "imageUrl": "https://openclipart.org/image/800px/svg_to_png/183161/worms-x-012c8714.png"
        //    },
        //    {
        //        "productId": 2,
        //        "productName": "Hammer",
        //        "productCode": "TBX-0048",
        //        "releaseDate": "May 21, 2013",
        //        "description": "Curved claw steel hammer.",
        //        "cost": 1.00,
        //        "price": 8.99,
        //        "category": "toolbox",
        //        "tags": ["tool"],
        //        "imageUrl": "https://openclipart.org/image/800px/svg_to_png/2507/Machovka-Pipe-wrench.png"
        //    }
        //];

        vm.showImage = false;

        vm.toggleImage = function(){
            vm.showImage = !vm.showImage;
        }
    }
}());