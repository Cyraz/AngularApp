/**
 * Created by Code_Beast on 5/6/2016.
 */
/**
 * @ngdoc function
 * @name angularAppApp.controller:SuccessController
 * @description
 * # SuccessController
 * Controller for handling success events from login and register events!
 */
angular.module('angularAppApp')
  .controller('SuccessController', ['$scope', function($scope) {
    $scope.message = "Success!!!";
    $scope.extra="\n Rock n Roll Baby!!!";
  }]);




