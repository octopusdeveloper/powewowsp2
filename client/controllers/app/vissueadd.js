angular.module('app').controller('app_vissueadd', app_vissueadd);
function app_vissueadd($scope, app,$timeout) {
    'use strict';
    app.init($scope);
    
    var timer = $timeout(function () {
        console.warn("entro1!");
        $scope.bMenuVisible = true;
        console.warn("entro2!");
    }, 2000);
   
}