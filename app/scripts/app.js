'use strict';

/**
 * @ngdoc overview
 * @name angularAppApp
 * @description
 * # angularAppApp
 *
 * Main module of the application.
 */
angular
  .module('angularAppApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .constant('FIREBASE_URL','https://code-beast.firebaseio.com/')
  .constant('FIREBASE_URL_OLD','https://cbangular.firebaseio.com/')

  .run(['$rootScope', '$location',
    function($rootScope, $location) {
      $rootScope.$on('$routeChangeError',
        function(event, next, previous, error) {
          if (error=='AUTH_REQUIRED') {
            $rootScope.message = 'Sorry, you must log in to access that page';
            $location.path('/login');
          } // AUTH REQUIRED
        }); //event info
    }]) //run

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'RegistrationController'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      }).
      when('/login', {
      templateUrl: 'views/login.html',
      controller: 'RegistrationController'
    }).
    when('/register', {
      templateUrl: 'views/register.html',
      controller: 'RegistrationController'
    }).
    when('/success', {
      templateUrl: 'views/success.html',
      controller: 'SuccessController',
      resolve: {
        currentAuth: function(Authentication) {
          return Authentication.requireAuth();
        } //current Auth
      } //resolve
    }).
    when('/dashboard', {
      templateUrl: '/views/dashboard.html',
      controller: 'dashboardCtr'
    }).
    otherwise({
      redirectTo: '/login'
    });
  });
