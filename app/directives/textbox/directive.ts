///<reference path="../../../typings/angularjs/angular.d.ts"/>

export function Directive($compile) {
    return <ng.IDirective>{
        restrict: "E",
        replace: true,
        scope: {
            model: '=model',
            id: '=',
            text: '=text',
            label: '=label',
            value: '=value',
            required: '=',
            placeholder: '='
        },
        link: ($scope, element, attrs) => {
            var temp = `
                            <div class="form-group">
                                    <label>{{placeholder}}</label>
                                    <input ng-class="{'error-validate':isValidated}" id="{{id}}" placeholder="{{placeholder.replace('*','')}}" type="text" class="form-control textbox-size" ng-model="value" />
                            </div>
                        `
            var placeholder = $scope["placeholder"];
            element.html(temp).show();
            $scope["isValidated"] = true;


            $scope.$watch("value", () => {
                $scope["validate"]();
            });

            $scope["validate"] = () => {
                if ($scope["required"]) {
                    $scope["placeholder"] = placeholder + ' *';
                    $scope["isValidated"] = $scope["value"] !== "";
                }
            }

            $compile(element.contents())($scope);
        }
    };
}

export var injector = ["$compile", Directive];
