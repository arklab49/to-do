import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './todo.routes';
import TodoController from './todo.controller';
import allTasks from './directives/allTasks';
import activeTasks from './directives/activeTasks';
import doneTasks from './directives/doneTasks';

export default angular.module('app.todo', [uirouter])
  .config(routing)
  .controller('TodoController', TodoController)
  .directive('allTasks', allTasks)
  .directive('activeTasks', activeTasks)
  .directive('doneTasks', doneTasks)
  .name;