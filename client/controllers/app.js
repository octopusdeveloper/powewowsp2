angular.module('app').controller('app', app);
function app($rootScope,$scope, app, $timeout, $ionicSideMenuDelegate) {
    'use strict';
    $ionicSideMenuDelegate.canDragContent(false);
    //$rootScope.bMenuVisible = false;
    /**/
    var timer = $timeout(function () {
        //console.warn("bMenuVisible="+$rootScope.bMenuVisible);
         //$rootScope.bMenuVisible = true; 
         //console.warn("bMenuVisible="+$rootScope.bMenuVisible);
        console.warn("entro");
        $ionicSideMenuDelegate.canDragContent(true);
        
    }, 5000);
    
    $rootScope.fEnableMenu = function(bValue){
         $rootScope.bMenuVisible = bValue;
         console.warn("fEnableMenu bMenuVisible="+$rootScope.bMenuVisible);
    }
    
}
