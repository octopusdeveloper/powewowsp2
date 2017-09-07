angular.module('app').controller('app_vsettings', app_vsettings);
function app_vsettings($scope, app) {
    'use strict';
    app.init($scope);
    
    $scope.configVersion="2.1.2";
    $scope.configDescription="Whats new: Improved user experience and approval reminders";
}