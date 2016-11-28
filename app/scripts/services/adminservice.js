'use strict';

/**
 * @ngdoc service
 * @name packagingToolFrontApp.adminService
 * @description
 * # adminService
 * Service in the packagingToolFrontApp.
 */
angular.module('packagingToolFrontApp')
  .service('adminService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
      this.getAllApplicationConfiguration = function() {
          return $http.get('http://localhost:8080/packagingToolBack/ApplicationConfigurationService/getAll');
      };
      this.getApplicationConfiguration = function(projectName) {
          return $http.get('/packagingToolBack/ApplicationConfigurationService/get?projectName='+ projectName);
      };
      this.updateApplicationConfiguration = function(projectName, ApplicationConfiguration) {
          return $http.put('/packagingToolBack/ApplicationConfigurationService/update?projectName='+ projectName, ApplicationConfiguration);
      };
      this.createApplicationConfiguration = function(ApplicationConfiguration) {
          return $http.post('/packagingToolBack/ApplicationConfigurationService/create', ApplicationConfiguration);
      };
      this.deleteApplicationConfiguration = function(projectName) {
          return $http.delete('/packagingToolBack/ApplicationConfigurationService/delete?projectName='+ projectName);
      };
  });
