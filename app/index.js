import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import firebase from 'firebase';
import angularFire from 'angularfire';
import todo from './todo';
import routing from './config';

const ngModule = angular
                    .module('app', [uirouter, todo])
                    .config(routing);