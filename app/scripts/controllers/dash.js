/**
 * Created by Code_Beast on 5/6/2016.
 */


angular.module('angularAppApp')
  .controller('dashboardCtr',['$scope','$rootScope','Authentication',
    function($scope,$rootScope, Authentication) {

      alert("this is dashboard{{Authentication.message}}"+Authentication.message);
      // $scope.isLogin=Authentication.islogin();
      // if(isLogin){
      //   var uservar=Authentication.getUserData();
      //   $scope.user=uservar.firstname;
      // }



    }]); // Controller
