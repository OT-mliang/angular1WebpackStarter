import angular from "angular";

let toolbarComponent = angular.module("app.toolbar",[])
    .component("toolbar",{
        template:require("./toolbar.component.html"),
    }).name;

export default toolbarComponent;