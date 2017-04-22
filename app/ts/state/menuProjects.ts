/// <reference path="../../typings/index.d.ts"/>
module MadnessEnjin {
    'use strict';

    class MenuProjectsController {
        parent: any;

        constructor(
            $scope
        ) {
            // ON LOAD       
            this.parent = $scope.$parent.$parent.ctrl; 
            this.parent.setAddState('createProject');
        }
    }

    angular.module('MadnessEnjin')
           .controller('MadnessEnjin.MenuProjectsController', MenuProjectsController);
}