import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import todo from './todo';
import login from './login';

import routing from './config';


const ngModule = angular
                    .module('app', [uirouter,todo])
                    .config(routing);