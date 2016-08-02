import angular from "angular";
import uiRouter from "angular-ui-router";
import LoginComponent from "./login.component";
import './login.component.css';

const login = angular
    .module("app.login",[uiRouter])
    .component('logintest',LoginComponent)
    .config(($stateProvider)=>{
        $stateProvider
            .state('login', {
                url: '/login',
                component:'logintest'
            });
    })
    .name;

export default login;