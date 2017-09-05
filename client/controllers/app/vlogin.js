angular.module('app').controller('app_vlogin', app_vlogin);
function app_vlogin($scope, app) {
    'use strict';
    app.init($scope);
    
    $scope.sLoginUser="test";
    $scope.sLoginPass = "tes";
        
    $scope.fLogin = function (sLoginUser,sLoginPass){
        console.log("sUser="+$scope.sLoginUser);
        console.log("sPass="+$scope.sLoginPass);
    }     
    
}