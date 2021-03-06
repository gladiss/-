"use strict";
/**
 * Created by MapleFater on 2016/7/13.
 */
angular.module("cambricon-forum",
    ['ngAnimate', 'ngTouch', 'ngResource', 'ui.router', "ngSanitize", 'toastr', 'satellizer', 'ui.bootstrap',"ngFileUpload", 'angular-loading-bar', 'LocalStorageModule', 'angular-carousel', 'monospaced.qrcode', 'colorpicker.module']);




//CONST
var SERVER_URL = "http://118.89.103.204:3000";
var ONLINE_MODE = true;

angular.module("cambricon-forum").controller('appController',
    ["$scope",
        function ($scope) {

            var getLoginPartial = function () {
                var random = Math.random();
                return "loginPartial/loginPartial.template.html?r=" + random;
            };
            $scope.loginPartial = getLoginPartial();

            $scope.$on('userStateChange', function () {
                $scope.loginPartial = getLoginPartial();
            });


        }]);
