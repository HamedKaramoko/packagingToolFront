'use strict';

/**
 * @ngdoc function
 * @name packagingToolFrontApp.controller:ProjectconfigurationlistCtrl
 * @description
 * # ProjectconfigurationlistCtrl
 * Controller of the packagingToolFrontApp
 */
angular.module('packagingToolFrontApp')
  .controller('ProjectconfigurationlistCtrl', function ($rootScope, $scope, $log, adminService) {
      $scope.gridOptions = {
                        enableHorizontalScrollbar : 0,
                        showGroupPanel : true,
                        enableColumnMenus : false,
                        enableSorting : true,
                        enableFiltering : true,
                        columnDefs : [
                                {
                                    field : 'projectName',
                                    displayName : 'Name'
                                },
                                {
                                    field : 'description',
                                    displayName : 'Description'
                                },
                                {
                            field : 'projectName',
                            displayName : 'Actions',
                            /*enableSorting : false,
                            enableFiltering : false,
                            enableCellEdit : false,*/
                            //width:'10%',
                            cellTemplate:'<button class="btn primary btn-xs" ng-click="grid.appScope.deleteBatchProject(row.entity.id)"><span class="glyphicon glyphicon-trash"></span></button><button type="button" class="btn btn-primary btn-xs"ng-click="grid.appScope.openpopup(row.entity)"><span class="glyphicon glyphicon-pencil"></span></button>'
                        } ],
                        onRegisterApi : function(gridApi) {
                            $scope.gridApi = gridApi;
                        }
                    };
                    $scope.getApplicationConfigurations = function() {
                        //$scope.loading = true;
                        //$scope.grid = false;
                        adminService.getAllApplicationConfiguration().then(function successCallback(response) {
                            $log.info(response);
                            $scope.gridOptions.data = response.data;
                            $scope.loading = false;
                            $scope.grid = true;
//                            if (data.length === 0) {
//                                $location.path("/home");
//                            }
                            }, function errorCallback(response) {
                                $log.info(response);
                        });
                    };
      
      $scope.addApplicationConfig = function(){
          alert("Hamed");
      };
      $scope.getApplicationConfigurations();
      
  });
