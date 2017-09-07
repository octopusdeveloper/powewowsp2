angular.module('app').config(function ($stateProvider) {
    'use strict';
    $stateProvider.state('app', {
        abstract: true,
        controller: 'app',
        templateProvider: function (app) {
            return app.templateProvider('app');
        }
    }).state('app.blank', {
        views: {
            app: {
                controller: 'app_blank',
                templateProvider: function (app) {
                    return app.templateProvider('app.blank');
                }
            }
        }
    }).state('app.menu', {
        views: {
            app: {
                controller: 'app_menu',
                templateProvider: function (app) {
                    return app.templateProvider('app.menu');
                }
            }
        }
    }).state('app.multiselect', {
        views: {
            app: {
                controller: 'app_multiselect',
                templateProvider: function (app) {
                    return app.templateProvider('app.multiselect');
                }
            }
        }
    }).state('app.login', {
        views: {
            app: {
                controller: 'app_login',
                templateProvider: function (app) {
                    return app.templateProvider('app.login');
                }
            }
        }
    }).state('app.test', {
        views: {
            app: {
                controller: 'app_test',
                templateProvider: function (app) {
                    return app.templateProvider('app.test');
                }
            }
        }
    }).state('app.vlogin', {
        views: {
            app: {
                controller: 'app_vlogin',
                templateProvider: function (app) {
                    return app.templateProvider('app.vlogin');
                }
            }
        }
    }).state('app.vmytask', {
        views: {
            app: {
                controller: 'app_vmytask',
                templateProvider: function (app) {
                    return app.templateProvider('app.vmytask');
                }
            }
        }
    });
});