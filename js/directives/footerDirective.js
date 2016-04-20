'use strict';
pulseApp.directive('footerModule', function() {
  return {
    restrict: 'A',
    scope : {

    },
    templateUrl : '/partial/public/footerModule.html',
    transclude : true
  };
});