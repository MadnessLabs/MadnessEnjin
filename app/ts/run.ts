/// <reference path="../typings/index.d.ts"/>
module MadnessEnjin {
    'use strict';

    class AppRunner {
        constructor(
			FireEnjin,
            $rootScope, 
            enjin, 
            API,
            $state, 
            $ionicLoading, 
            $ionicSideMenuDelegate,
            Platform
        ) {
            $rootScope.host = {
                api: enjin.api.host.slice(0, -3),
                apiFull: enjin.api.host,
                url: enjin.url
            };

            $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState) {
                $state.previous = fromState;
            });

            $rootScope.$on('loading:show', function() {
                $ionicLoading.show({ template: '<ion-spinner icon="crescent" class="spinner-light"></ion-spinner>' });
            });

            $rootScope.$on('loading:hide', function() {
                $ionicLoading.hide();
            });

            $rootScope.logout = function() {
                enjin.auth.logout();
            };

            Platform.run();
        }
    }
    angular.module('MadnessEnjin').run(AppRunner);
}