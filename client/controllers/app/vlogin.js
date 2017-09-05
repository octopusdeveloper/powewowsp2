angular.module('app').controller('app_vlogin', app_vlogin);
function app_vlogin($scope, app) {
    'use strict';
    app.init($scope);
    
    $scope.sLoginUser="";
    $scope.sLoginPass = "";
        
    $scope.fLogin = function (sUser,){
        console.log("sUser="+sUser);
        console.log("sPass="+sPass);
    }     
    
}