angular.module('app').controller('app', app);
function app($rootScope,$scope, app, $timeout) {
    'use strict';
    
    $rootScopebMenuVisible = false;
     var timer = $timeout(function () {
        console.warn("bMenuVisible="+$rootScope.bMenuVisible);
         $rootScope.bMenuVisible = true; 
         console.warn("bMenuVisible="+$scope.bMenuVisible);
    }, 5000);
    
    $rootScope.fEnableMenu = function(bValue){
         $scope.bMenuVisible = bValue;
         console.warn("fEnableMenu="+$scope.bMenuVisible)
    }
    
}
