/// <reference path="../../typings/index.d.ts"/>
module MadnessEnjin {
    'use strict';

    class HomeController {
        projects: any;

        constructor(
            protected Project
        ) {
            // ON LOAD
            this.Project.all((data) => {
                this.projects = data;
            });
        }
    }

    angular.module('MadnessEnjin')
           .controller('MadnessEnjin.HomeController', HomeController);
}