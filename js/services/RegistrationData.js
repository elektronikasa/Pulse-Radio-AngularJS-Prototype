/**
 * Created by michaelkaraz on 4/28/14.
 */
tasksApp.factory('registrationData', function ($http) {
    // var resource = $resource('/data/event/:id', {id: '@id'});
    return {
        /*  getEvent: function (eventId) {
         var deferred = $q.defer();
         resource.get({id: eventId},
         function (event) {
         deferred.resolve(event);
         },
         function (response) {
         deferred.reject(response);
         });
         return deferred.promise;
         },*/
        save: function (registration,successcb) {
            $http(
                {
                    method: 'POST',
                    url: '/api/register',
                    data: JSON.stringify(registration),
                    headers : {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
                }).success(function (data, status, headers, config) {
                    
                    if(data.error){
                     window.alert(data.message);
               }else{
                    successcb(data);
               }
                }).error(function (data, status, headers, config) { 
                     window.alert(status);
                });
        }
    };
});