/// <reference path="../../typings/index.d.ts"/>
module MadnessEnjin {
    'use strict';

    class MenuController {
        projects: any;
        addState: string;
        addParams: any;

        constructor(
            protected Project,
            protected $state
        ) {
            // ON LOAD
            this.Project.all((data) => {
                this.projects = data;
            });

            this.addState = 'createProject';
            this.addParams = {};
        }

        add() {
            this.$state.go(this.addState);
        }
        
        setAddState(state = this.addState, params = {}) {
            this.addState = state;
            this.addParams = params;
        }
    }

    angular.module('MadnessEnjin')
           .controller('MadnessEnjin.MenuController', MenuController);
}