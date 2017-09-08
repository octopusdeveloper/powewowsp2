angular.module('app').controller('app_vmytask', app_vmytask);
function app_vmytask($scope, app, $ionicPopup) {
    'use strict';
    app.init($scope);
    
    $scope.fReject = function(){
        console.warn("fReject"); 
        /*
        var alertPopup = $ionicPopup.alert({
          title: 'eBPM',
          template: 'The request was successful'
        });
        alertPopup.then(function(res) {
          console.log('Thank you for not eating my delicious ice cream cone');
        });
        */
        $scope.fAlertMsg("eBPM","Information couldn’t be retrieved, please check your access & internet connection","error");
       
    }
    $scope.fApprove = function(){
        /*
        var alertPopup = $ionicPopup.alert({
          title: 'eBPM',
          template: 'The request was successful'
        });
        alertPopup.then(function(res) {
          console.log('Thank you for not eating my delicious ice cream cone');
        });
        */
        $scope.fAlertMsg("eBPM","The request was successful","success");
    }
    
      $scope.fAlertMsg = function(sTittle, sMsg, sType) {
        rplm({
          title: sTittle,
          text: sMsg,
          type: sType,
          html: true,
          modalNOverlay: 'white',
          confirmButtonText: 'Ok',
          allowOutsideClick: true,
        });
    
      }
}