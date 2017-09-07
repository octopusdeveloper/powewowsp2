angular.module('app').controller('app_vmytask', app_vmytask);
function app_vmytask($scope, app, $ionicPopup) {
    'use strict';
    app.init($scope);
    
    $scope.fReject = function(){
        console.warn("fReject");
        var alertPopup = $ionicPopup.alert({
          title: 'eBPM',
          template: 'The request was successful'
        });
        alertPopup.then(function(res) {
          console.log('Thank you for not eating my delicious ice cream cone');
        });
    }
    $scope.fApprove = function(){
        console.warn("fApprove");
        var alertPopup = $ionicPopup.alert({
          title: 'eBPM',
          template: 'The request was successful'
        });
        alertPopup.then(function(res) {
          console.log('Thank you for not eating my delicious ice cream cone');
        });
    }
}