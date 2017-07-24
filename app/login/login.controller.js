"use strict";
angular.module("cambricon-forum").controller('loginController', ["$scope", "$state", "$auth", "toastr","$http","localStorageService",
    function ($scope, $state, $auth, toastr,$http,localStorageService) {
    $("#wrap").height(window.innerHeight);




    $scope.login = function () {

        $auth.login($scope.user, {url: SERVER_URL + "/users/signIn"})
            .then(function (response) {
                toastr.info('登录成功');
                $state.go("home");
                localStorageService.set("username",response.data.username);

            })
            .catch(function (error) {
                if(error.data){
                    toastr.error(error.data.err);
                }else{
                    toastr.error("连接服务器失败!");
                }
            });
    };
}]);