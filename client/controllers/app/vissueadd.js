angular.module('app').controller('app_vissueadd', app_vissueadd);
function app_vissueadd($scope, app,$timeout) {
    'use strict';
    app.init($scope);
    
    var timer = $timeout(function () {
        console.log("entro2!");
        $scope.bMenuVisible = true;
        console.log("entro2!");
    }, 2000);
   
}