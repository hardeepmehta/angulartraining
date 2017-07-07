angular
.module('Aashi')
.controller('ManmohanController', ['$scope', '$rootScope', '$timeout' ManmohanFunction ]);

function ManmohanFunction( $scope, $rootScope ) {

  $timeout(function() {

  },2000)

  setTimeout(function(){

    $scope.$apply();
  },2000)
  
  $scope.fruits = [{
    name: 'Apple',
    cost: 500,
    color: 'red'
  },{
    name: 'Grapes',
    cost: 1000,
    color: 'black'
  },{
    name: 'Banana',
    cost: 2000,
    color: 'yellow'
  },{
    name: 'Orange',
    cost: 100,
    color: 'orange'
  }];

  $scope.clickMe = function( e ) {
      $scope.fruits.push({
        name: 'Strawberry',
        cost: 2000,
        color: 'red'
      });
  }

}
