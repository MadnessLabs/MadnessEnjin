/// <reference path="../../typings/index.d.ts"/>
module MadnessEnjin {
    'use strict';

    class MenuPluginsController {
        parent: any;

        constructor(
            $scope
        ) {
            // ON LOAD       
            this.parent = $scope.$parent.$parent.ctrl; 
            this.parent.setAddState('createPlugin');
        }
    }

    angular.module('MadnessEnjin')
           .controller('MadnessEnjin.MenuPluginsController', MenuPluginsController);
}