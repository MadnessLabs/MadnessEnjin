/// <reference path="../../typings/index.d.ts"/>
angular.module('MadnessEnjin').directive('fallback', function() {
    return {
        restrict: 'EA',
		templateUrl: 'html/directive/fallback.html', 		
        scope: {
            icon: '@?',
            message: '@?'
        },
        link: function($scope:any, element, attrs) {
            //On Load
        }
    };
});