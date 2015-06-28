'use strict';

angular.module('<%=angularAppName%>')
    .controller('UserManagementDetailController', function ($scope, $stateParams, UserManagement, Authority) {
        $scope.user = {};
        $scope.load = function (login) {
            UserManagement.get({login: login}, function(result) {
                $scope.user = result;
                console.log(result);
            });
        };
        $scope.load($stateParams.login);
    });
