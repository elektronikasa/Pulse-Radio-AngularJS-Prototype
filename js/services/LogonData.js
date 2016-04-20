/**
 * Created by michaelkaraz on 4/28/14.
 */
tasksApp.factory('logonData', function($http, $q, $log) {
    // var resource = $resource('/data/event/:id', {id: '@id'});
    return {
        checkState: function($rootScope, $cookieStore) {
            var token =   $cookieStore.get('token');
            if(token !== undefined && token !== '')
                $rootScope.islogin = true;
            else
                $rootScope.islogin = false;
        },
        logon: function(logonInfo, successcb) {
            $http(
                    {
                        method: 'POST',
                        url: '/api/login',
                        data: JSON.stringify(logonInfo),
                        headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
                    }).success(function(data, status, headers, config) {
                $log.info(data, status, headers, config);
                successcb(data);
            }).error(function(data, status, headers, config) {
                $log.warn(data, status, headers, config);
            });
        }
    };
});