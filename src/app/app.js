import angular from 'angular';
import ngMaterial from 'angular-material';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import uiRouter from 'angular-ui-router';

import toolbarComponent from "./toolbar/toolbar.component";
import login from "./login/index";

const root = angular.module('my-app', [
    ngMaterial,
    ngAnimate,
    ngAria,
    uiRouter,
    toolbarComponent,
    login

]).config(($locationProvider,$urlRouterProvider)=>{
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/");
}).name;

export default root;