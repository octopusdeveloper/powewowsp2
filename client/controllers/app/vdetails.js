angular.module('app').controller('app_vdetails', app_vdetails);
function app_vdetails($scope, app, $ionicHistory) {
    'use strict';
    app.init($scope);
    
    $scope.fBackWindow = function(){
        console.warn("fBackWindow");
        $ionicHistory.goBack();
    }
}