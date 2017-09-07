angular.module('app').controller('app_vhelp', app_vhelp);
function app_vhelp($scope, app) {
    'use strict';
    app.init($scope);
    
    $scope.fCallHelpSVN = function(){
        console.warn("fCallHelpSVN");    
    }
    
    $scope.fCallShareNet = function(){
        console.warn("fCallShareNet");    
    }
}