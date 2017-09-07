angular.module('app').controller('app_vlogin', app_vlogin);
function app_vlogin($scope, app, $timeout, $http) {
    'use strict';
    app.init($scope);
    $scope.bLoading = false;
    $scope.sLoginUser = '';
    $scope.sLoginPass = '';
    $scope.sTest="nd"
    $scope.fLogin2 = function (sLoginUser, sLoginPass) {
        console.log('sUser=' + sLoginUser);
        console.log('sPass=' + sLoginPass);
        $scope.bLoading = true;
        var timer = $timeout(function () {
            console.warn("move home page");
            app.go('app.vmytask');
        }, 2000);
    };
    
    $scope.fLogin = function(sLoginUser, sLoginPass) {


      var bActive = true;

      console.log("sUser="+sLoginUser);
      console.log("sPass="+sLoginPass);
      


      if (bActive){

        
        var paramsObj = new Object();
        paramsObj.fduser = sLoginUser;
        paramsObj.fdpassword = sLoginPass;

        /* send post */

        this.urlJson ="http://ebpm.octopusdeveloper.mockable.io/wsLogin";


        $http({
          method: 'POST',
          url: this.urlJson ,
          withCredentials: false,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          transformRequest: function(obj) {
            var str = [];
            for(var p in obj)
              str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            return str.join("&");
          },
          data: paramsObj
        }).success(function (data, status) {
          console.log("data="+JSON.stringify(data));
          console.log("status="+JSON.stringify(status));
          //console.log("resultAction="+JSON.stringify(data.result.resultAction));

          if (data.result.resultAction){
                app.go('app.vmytask');
 
          }else{
            
          }



        }).error(function(data, status) {
          //console.error('Repos error', status, data);

          
        });
        /* end send post */



      }



  };

}