angular.module('app').controller('app', app);
function app($rootScope,$scope, app, $timeout) {
    'use strict';
    
    $rootScope.bMenuVisible = false;
    /*
    var timer = $timeout(function () {
        console.warn("bMenuVisible="+$rootScope.bMenuVisible);
        $rootScope.bMenuVisible = true; 
        console.warn("bMenuVisible="+$rootScope.bMenuVisible);
       
        
    }, 5000);
    */
    
    $rootScope.fEnableMenu = function(bValue){
         //$rootScope.bMenuVisible = bValue;
         //console.warn("fEnableMenu bMenuVisible="+$rootScope.bMenuVisible);
    }
    
}
