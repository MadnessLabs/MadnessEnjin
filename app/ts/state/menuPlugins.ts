/// <reference path="../../typings/index.d.ts"/>
module MadnessEnjin {
    'use strict';

    class MenuPluginsController {
        parent: any;
        plugins: any;

        constructor(
            protected enjin,
            $scope
        ) {
            // ON LOAD       
            this.parent = $scope.$parent.$parent.ctrl; 
            this.parent.setAddState('createPlugin');

            this.enjin.api.get('plugin').then((response) => {
                this.plugins = response.data;
            });
        }
    }

    angular.module('MadnessEnjin')
           .controller('MadnessEnjin.MenuPluginsController', MenuPluginsController);
}