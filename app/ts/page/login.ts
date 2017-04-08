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
            this.enjin.auth.withSocial(type, (account) => {
                this.enjin.api.post(`login`, {
                    email: account.user.email, 
                    github_token: account.credential.accessToken,
                    name: account.user.displayName,
                    avatar: account.user.photoURL
                }).then((response) => {
                    if (response.success) {
                        this.enjin.auth.setSessionVar('token', response.data.token);
                        this.$state.go('home');
                    } else {
                        console.log(response.data);
                    }
                });
            });
        }
    }

    angular.module('MadnessEnjin')
           .controller('MadnessEnjin.LoginController', LoginController);
}