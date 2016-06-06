import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './login.routes';
import LoginController from './login.controller';
import firebase from 'firebase';
import angularFire from 'angularfire';

export default angular.module('app.login', [uirouter, angularFire])
  .config(routing)
  .controller('LoginController', LoginController)
  .name;