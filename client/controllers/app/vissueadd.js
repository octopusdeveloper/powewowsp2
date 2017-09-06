angular.module('app').controller('app_vissueadd', app_vissueadd);
function app_vissueadd($rootScope,$scope, app,$timeout) {
    'use strict';
    app.init($scope);
    $rootScope.fEnableMenu(true);   
    var timer = $timeout(function () {
        //console.warn("entro1!");
        //$rootScope.bMenuVisible = true;
        console.warn("entro2!");
    }, 2000);
   
}