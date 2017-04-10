/// <reference path="../../typings/index.d.ts"/>
module MadnessEnjin {
    'use strict';

    class ProjectFormController {
        constructor(
            protected enjin
        ) {
            // ON LOAD       
        }

        submit() {
            // Force submit on form
        }

        save() {
            // Create new project with Project service
        }
    }

    angular.module('MadnessEnjin')
           .controller('MadnessEnjin.ProjectFormController', ProjectFormController);
}