/// <reference path="../../typings/index.d.ts"/>
module MadnessEnjin {
    'use strict';

    class LoginController {
        constructor(
            protected enjin,
            protected $state
        ) {
            // ON LOAD
        }

        socialLogin(type) {
            this.enjin.auth.withSocial(type, () => {
                this.$state.go('home');
            });
        }
    }

    angular.module('MadnessEnjin')
           .controller('MadnessEnjin.LoginController', LoginController);
}