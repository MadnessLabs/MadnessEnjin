/// <reference path="../../typings/index.d.ts"/>
angular.module('MadnessEnjin').directive('enjinInput', function() {
    return {
        restrict: 'EA',
		templateUrl: 'html/directive/enjinInput.html', 		
        scope: {
            label: '@?',
            model: '=?',
            name: '@',
            placeholder: '@?',
            type: '@?',
            required: '=?',
            pattern: '=?'
        },
        link: function($scope:any, element, attrs) {
            //On Load
            $scope.type = $scope.type ? $scope.type : 'text';
            $scope.label = $scope.label ? $scope.label : ($scope.name ? $scope.name : false);
        
            $scope.$watch('model', function(val) {
                setTimeout(() => {
                    $scope.invalidInput = element[0].querySelector('.ng-invalid.ng-touched') !== null;
                    $scope.$apply();
                }, 100);
            });

            $scope.onFocus = ($event) => {
                $scope.focusedInput = $scope.name;
            };

            $scope.onBlur = function($event) {
                $scope.invalidInput = element[0].querySelector('.ng-invalid') !== null;
                $scope.focusedInput = null;
            };
        }
    };
});