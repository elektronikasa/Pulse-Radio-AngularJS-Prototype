'use strict';
pulseApp.directive('advertModule', function() {
  return {
    restrict: 'A',
    scope : {
    },
       templateUrl : '/partial/home/private/advertModule.html',
    transclude : true
  };
});