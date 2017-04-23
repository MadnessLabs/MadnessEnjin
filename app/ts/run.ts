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

            $rootScope.back = function() {
                history.back();
            };

            $rootScope.openTab = function(event, link, target = '_blank', opts = null) {
                event.preventDefault();
                event.stopPropagation();
                var win = window.open(link, target, opts);
                win.focus();
            };

            Platform.run();
        }
    }
    angular.module('MadnessEnjin').run(AppRunner);
}