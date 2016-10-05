/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-route.d.ts" />

module app {
    "use strict";

    function routes($routeProvider: ng.route.IRouteProvider) {

        $routeProvider
            .when("/", {
                templateUrl: "app/views/_index.html"
            })
            .when("/create", {
                templateUrl: "app/views/_create.html",
                controller: "CreateController",
                controllerAs: "vm"
            })
            .otherwise({
                redirectTo: "/"
            });
    }

    routes.$inject = ["$routeProvider"]

    angular
        .module("App")
        .config(routes);
}