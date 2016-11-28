'use strict';

/**
 * @ngdoc overview
 * @name packagingToolFrontApp
 * @description
 * # packagingToolFrontApp
 *
 * Main module of the application.
 */
angular
  .module('packagingToolFrontApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.grid'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl',
        controllerAs: 'admin'
      })
      .when('/projectConfigurationList', {
        templateUrl: 'views/projectconfigurationlist.html',
        controller: 'ProjectconfigurationlistCtrl',
        controllerAs: 'projectConfigurationList'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
