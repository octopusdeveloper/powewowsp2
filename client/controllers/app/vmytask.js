angular.module('app').controller('app_vmytask', app_vmytask);
function app_vmytask($scope, app) {
    'use strict';
    app.init($scope);
    
    $scope.fReject = function(){
        console.warn("fReject");
    }
    $scope.fApprove = function(){
        console.warn("fApprove");
    }
}