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
    }).state('app.vsettings', {
        views: {
            app: {
                controller: 'app_vsettings',
                templateProvider: function (app) {
                    return app.templateProvider('app.vsettings');
                }
            }
        }
    }).state('app.vhistory', {
        views: {
            app: {
                controller: 'app_vhistory',
                templateProvider: function (app) {
                    return app.templateProvider('app.vhistory');
                }
            }
        }
    }).state('app.vhelp', {
        views: {
            app: {
                controller: 'app_vhelp',
                templateProvider: function (app) {
                    return app.templateProvider('app.vhelp');
                }
            }
        }
    }).state('app.vnotificactions', {
        views: {
            app: {
                controller: 'app_vnotificactions',
                templateProvider: function (app) {
                    return app.templateProvider('app.vnotificactions');
                }
            }
        }
    }).state('app.vnotifications2', {
        views: {
            app: {
                controller: 'app_vnotifications2',
                templateProvider: function (app) {
                    return app.templateProvider('app.vnotifications2');
                }
            }
        }
    }).state('app.listviewcool', {
        views: {
            app: {
                controller: 'app_listviewcool',
                templateProvider: function (app) {
                    return app.templateProvider('app.listviewcool');
                }
            }
        }
    }).state('app.componentscheck', {
        views: {
            app: {
                controller: 'app_componentscheck',
                templateProvider: function (app) {
                    return app.templateProvider('app.componentscheck');
                }
            }
        }
    }).state('app.listviewcool1', {
        views: {
            app: {
                controller: 'app_listviewcool1',
                templateProvider: function (app) {
                    return app.templateProvider('app.listviewcool1');
                }
            }
        }
    }).state('app.vdetails', {
        views: {
            app: {
                controller: 'app_vdetails',
                templateProvider: function (app) {
                    return app.templateProvider('app.vdetails');
                }
            }
        }
    });
});