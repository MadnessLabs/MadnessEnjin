/// <reference path="../../typings/index.d.ts"/>
angular.module('MadnessEnjin').directive('submitOn', function() {
    return {
        restrict: 'A',
        scope: {},
        link: function($scope:any, element, attrs) {
            //On Load
            $scope.$on(attrs.submitOn, function() {
                setTimeout(function() {
                    element.triggerHandler('submit');
                });
            });
        }
    };
});