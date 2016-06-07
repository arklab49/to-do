import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './todo.routes';
import TodoController from './todo.controller';
import allTasks from './directives/allTasks';
import activeTasks from './directives/activeTasks';
import doneTasks from './directives/doneTasks';
import addTask from './directives/addTask';
import taskManager from './directives/taskManager';
import userPanel from './directives/userPanel';

import firebase from 'firebase';
import angularFire from 'angularfire';

export default angular.module('app.todo', [uirouter, angularFire])
  .config(routing)
  .controller('TodoController', TodoController)
  .directive('allTasks', allTasks)
  .directive('activeTasks', activeTasks)
  .directive('doneTasks', doneTasks)
  .directive('addTask', addTask)
  .directive('taskManager', taskManager)
  .directive('userPanel', userPanel)
  .name;