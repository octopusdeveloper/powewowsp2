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
    }).state('app.vlogin2', {
        views: {
            app: {
                controller: 'app_vlogin2',
                templateProvider: function (app) {
                    return app.templateProvider('app.vlogin2');
                }
            }
        }
    }).state('app.vissueadd', {
        views: {
            app: {
                controller: 'app_vissueadd',
                templateProvider: function (app) {
                    return app.templateProvider('app.vissueadd');
                }
            }
        }
    });
});