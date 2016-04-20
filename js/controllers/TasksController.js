'use strict';

tasksApp.controller('TasksController',
        function TasksController($scope, $cookieStore, tasksData,logonData, $location,$rootScope) {
            logonData.checkState($rootScope, $cookieStore);
            
            $scope.task = {};
            
            $scope.task.status;
            
            $scope.task.task;
            
            if ($cookieStore.get('editingTask') === undefined)
                $scope.editingTask = false;
            else
                $scope.editingTask = $cookieStore.get('editingTask');

            if ($cookieStore.get('editingTaskType') === undefined)
                $scope.editingTaskType = false;
            else
                $scope.editingTaskType = $cookieStore.get('editingTaskType');
                
            if ($cookieStore.get('task') !== undefined)
                $scope.task = $cookieStore.get('task');
            
            $scope.token = $cookieStore.get('token');

            $scope.name = $cookieStore.get('name');
            
            $scope.email = $cookieStore.get('email');

            if ($scope.token !== undefined && $scope.token.length > 0) {// login cookie still alive from last login
                tasksData.getTasks($scope.token, function(data) {
                    $scope.tasks = data.tasks;
                    $cookieStore.put('editingTask', false);
                }, function(error) {
                    //we must never reach this code
                    window.alert('You\'re not currently logged on');
                    $cookieStore.put('editingTask', false);
                    $location.replace();
                    $location.path('/logon');
                });
            }
            else {
                $location.replace();
                $location.url('/logon');
                return;
            }
            
            $scope.editTask = function(task) {
                $cookieStore.put('editingTask', true);
                $cookieStore.put('editingTaskType', true);
                $cookieStore.put('task', task);
            };

            $scope.cancelTask = function() {
                $cookieStore.put('editingTask', false);
                $scope.editingTask = false;
            };

            $scope.saveTask = function(task, form) {

                if (form.$valid) {
                    if ($cookieStore.get('editingTaskType')) {
                        tasksData.updateTask($scope.token, task, function(data) {
                            if (data.error) {
                                $scope.error = data.message;
                                $log.warn(data);
                            } else {

                                if (data.error) {
                                    window.alert(data.message);
                                    return;
                                }
                                window.alert('You updated task' + task.id + ' the new value is ' + task.task);
                                $scope.tasks = data.tasks;
                                $cookieStore.put('editingTask', false);
                                $scope.editingTask = false;
                                $scope.editingTaskType = true;
                            }
                        });
                    }
                    else {//new
                        tasksData.createTask($scope.token, task, function(data) {
                            if (data.error) {
                                $scope.error = data.message;
                                $log.warn(data);
                            } else {
                                if (data.error) {
                                    window.alert(data.message);
                                    return;
                                }
                                $scope.tasks = data.tasks;
                                $cookieStore.put('editingTask', false);
                                $scope.editingTask = false;
                                $scope.editingTaskType = false;
                                window.alert('You updated task' + task.id + ' the new value is ' + task.task);
                            }
                        });
                    }
                }
            };

            $scope.newTask = function() {

                $cookieStore.put('editingTaskType', false);
                $cookieStore.put('editingTask', true);
                $scope.editingTaskType = false;
                $scope.editingTask = true;
                if ($scope.task !== undefined) {
                    $scope.task.task = '';
                    $scope.task.status = 0;
                    $scope.task.id = '';
                    $scope.task.createdAt = '';
                }

            };

            $scope.deleteTask = function(task) {
                var r = confirm("Are you sure you wanna delete task" + task.id);
                if (r === true)
                {
                    tasksData.deleteTask($scope.token, task, function(data) {
                        if (data.error) {
                            $scope.error = data.message;
                            $log.warn(data);
                        } else {
                            if (data.error) {
                                window.alert(data.message);
                                return;
                            }

                            $scope.tasks = data.tasks;
                            $scope.editingTask = false;
                            $scope.editingTaskType = true;
                            window.alert('You deleted task' + task.id + " :(");
                        }
                    });
                }
            };
        }
);

