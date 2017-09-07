angular.module('app').controller('app_vnotifications2', app_vnotifications2);
function app_vnotifications2($scope, app, $ionicHistory) {
    'use strict';
    app.init($scope);
    
    
    $scope.fBackWindow = function(){
        console.warn("fBackWindow");
        $ionicHistory.goBack();
    }
    
    $scope.fBackWindow = function(){
        console.warn("fBackWindow");
        $ionicHistory.goBack();
    }
}