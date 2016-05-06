/**
 * Created by Code_Beast on 5/6/2016.
 */


angular.module('angularAppApp')
  .controller('dashboardCtr',['$scope','Authentication',
    function($scope, Authentication) {


      $scope.isLogin=Authentication.islogin();
      if(isLogin){
        $scope.user=Authentication.getUserData().firstname;
      }



    }]); // Controller
