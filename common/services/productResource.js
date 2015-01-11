/**
 * Created by luis_blanco on 1/7/2015.
 */

(function(){
    "use strict";

    angular
        .module("common.services")
        .factory("productResource", ["$resource", productResource]);

    function productResource($resource){
        //console.log("product resource was called");
        return $resource("/products/:productId");
    }
}());