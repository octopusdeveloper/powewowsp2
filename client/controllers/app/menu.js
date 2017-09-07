angular.module('app').controller('app_menu', app_menu);
function app_menu($scope, app) {
    'use strict';
    app.init($scope);
    
    $scope.fMenuGoTo = function (sValue){
        console.warn("sValue=")
        app.go('app.'+sValue);
    }
}
