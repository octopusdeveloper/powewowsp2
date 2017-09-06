angular.module('app').controller('app_vissueadd', app_vissueadd);
function app_vissueadd($scope, app,$ionicSideMenuDelegate) {
    'use strict';
    app.init($scope);
    consol.log("entro");
    $ionicSideMenuDelegate.canDragContent(true);
    //$scope.bMenuVisible = true;
}