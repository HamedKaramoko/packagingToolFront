'use strict';

/**
 * @ngdoc function
 * @name packagingToolFrontApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the packagingToolFrontApp
 */
angular.module('packagingToolFrontApp')
  .controller('AdminCtrl', function ($rootScope, $scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
      $rootScope.showMenu = true;
      $scope.viewToShow = null;
      $scope.clickMenu = function(value){
          var returnValue;
          switch (value) {
            case 'projectConfigurationList':
                alert("applicationConfiguration");
                $scope.viewToShow = "#/projectConfigurationList";
                break;
            case '2':
                alert("Selected Case Number is 2");
                break;
            default:
                alert("Rien");
                $scope.viewToShow = "#/rien";
        }
      };
  });
