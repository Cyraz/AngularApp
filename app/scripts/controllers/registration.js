/**
 * Created by Code_Beast on 5/6/2016.
 */
/**
 * @ngdoc function
 * @name angularAppApp.controller:RegistrationController
 * @description
 * # RegistrationController
 * Controller for handling login and register events!
 */
angular.module('angularAppApp')
  .controller('RegistrationController',['$scope','Authentication',
    function($scope, Authentication) {


      $scope.login = function() {
       Authentication.login($scope.user);
      }; //login

      $scope.register = function() {

        Authentication.register($scope.user);
      }; // register

    }]); // Controller
