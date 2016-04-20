/**
 * Created by michaelkaraz on 4/28/14.
 */
pulseApp.factory('PulseData', function($http, $q, $log) {
    // var resource = $resource('/data/event/:id', {id: '@id'});
    return {
        checkState: function($rootScope, $cookieStore) {
            //var token =   $cookieStore.get('token');
           // if(token !== undefined && token !== '')
                $rootScope.islogin = false;
           // else
           //     $rootScope.islogin = false;
        }
    };
});