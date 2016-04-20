'use strict';
pulseApp.directive('myModule', function() {
  return {
    restrict: 'A',
    scope : {
      title : '@'
    },
    templateUrl : '/partial/module.html',
    transclude : true
  };
});