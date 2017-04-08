/// <reference path="../../typings/index.d.ts"/>
module MadnessEnjin {
    'use strict';

    class HomeController {
        organizations: any;

        constructor(
            protected enjin
        ) {
            // ON LOAD
            enjin.api.get(`app/${enjin.session.id}`).then((res) => {
                this.organizations = res.data;
            });  
        }
    }

    angular.module('MadnessEnjin')
           .controller('MadnessEnjin.HomeController', HomeController);
}