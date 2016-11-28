'use strict';

/**
 * @ngdoc function
 * @name packagingToolFrontApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the packagingToolFrontApp
 */
angular.module('packagingToolFrontApp')
  .controller('HomeCtrl', function ($rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
      $rootScope.showMenu = false;
  });
