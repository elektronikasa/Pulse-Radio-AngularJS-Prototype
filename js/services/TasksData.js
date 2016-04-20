/**
 * Created by michaelkaraz on 4/28/14.
 */
tasksApp.factory('tasksData', function($http, $log) {
    return {
        getTasks: function($token, successcb,errorcb) {
            $http.defaults.headers.common.Authorization = $token;
            $http(
                    {
                        method: 'GET',
                        url: '/api/tasks'
                    }).success(function(data, status, headers, config) {
                        
                $log.info(data, status, headers, config);
                successcb(data);
            }).error(function(data, status, headers, config) {
                $log.warn(data, status, headers, config);
                
                errorcb(data);
            });          
        },
        getTask: function($token, $task, successcb) {
            $http.defaults.headers.common.Authorization = $token;
            $http(
                    {
                        method: 'GET',
                        url: '/api/tasks/' + $task.id
                    }).success(function(data, status, headers, config) {
                $log.info(data, status, headers, config);
                successcb(data);
            }).error(function(data, status, headers, config) {
                $log.warn(data, status, headers, config);
            });
        },
        updateTask: function($token, $task, successcb) {
            $http.defaults.headers.common.Authorization = $token;
            $http(
                    {
                        method: 'POST',
                        url: '/api/tasks/' + $task.id,
                        data: JSON.stringify($task),
                        headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
                    }).success(function(data, status, headers, config) {
                $log.info(data, status, headers, config);
                successcb(data);
            }).error(function(data, status, headers, config) {
                $log.warn(data, status, headers, config);
            });
        },
        deleteTask: function($token, $task, successcb) {
            $http.defaults.headers.common.Authorization = $token;
            $http(
                    {
                        method: 'Delete',
                        url: '/api/tasks/' + $task.id,
                        headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
                    }).success(function(data, status, headers, config) {
                $log.info(data, status, headers, config);
                successcb(data);
            }).error(function(data, status, headers, config) {
                $log.warn(data, status, headers, config);
            });
        },
        createTask: function($token, $task, successcb) {
            $http.defaults.headers.common.Authorization = $token;
            $http(
                    {
                        method: 'POST',
                        url: '/api/tasks',
                        data: JSON.stringify({'task':$task.task}),
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