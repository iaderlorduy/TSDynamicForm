/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angular-ui-bootstrap/angular-ui-bootstrap.d.ts" />


module app {
    export class CreateController {
        private _httpService: ng.IHttpService;
         
        constructor(
            $http: ng.IHttpService,
            modals: ng.ui.bootstrap.IModalService,
            dynForm: any
            ) {
            this._httpService = $http;
        }
    }

    angular
        .module("App")
        .controller("CreateController", CreateController);
}