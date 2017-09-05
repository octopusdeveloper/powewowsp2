angular.module('app').controller('app_vlogin', app_vlogin);
function app_vlogin($scope, app) {
    'use strict';
    app.init($scope);
    
    $scope.sLoginUser="test";
    $scope.sLoginPass = "test";
        
    $scope.fLogin = function (sLoginUser2,sLoginPass2){
        console.log("sUser="+sLoginUser2);
        console.log("sPass="+sLoginPass2);
    }     
    
}