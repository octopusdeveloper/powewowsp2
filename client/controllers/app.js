angular.module('app').controller('app', app);
function app($rootScope,$scope, app, $timeout) {
    'use strict';
    
    $scope.bMenuVisible = true;
     var timer = $timeout(function () {
        console.warn("bMenuVisible="+$scope.bMenuVisible);
         $scope.bMenuVisible = true;
         console.warn("bMenuVisible="+$scope.bMenuVisible);
    }, 5000);
    
}
