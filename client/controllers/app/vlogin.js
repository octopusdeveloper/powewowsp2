angular.module('app').controller('app_vlogin', app_vlogin);
function app_vlogin($scope, app) {
    'use strict';
    app.init($scope);
    
    $scope.sLoginUser="jorge.cecilianoesquinca@";
    $scope.sLoginPass = "123";
        
    $scope.fLogin = function (sLoginUser , sLoginPass ){
        console.log("sUser="+sLoginUser);
        console.log("sPass="+sLoginPass);
    }     
    
}