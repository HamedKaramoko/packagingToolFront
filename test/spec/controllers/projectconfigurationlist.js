'use strict';

describe('Controller: ProjectconfigurationlistCtrl', function () {

  // load the controller's module
  beforeEach(module('packagingToolFrontApp'));

  var ProjectconfigurationlistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjectconfigurationlistCtrl = $controller('ProjectconfigurationlistCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProjectconfigurationlistCtrl.awesomeThings.length).toBe(3);
  });
});
