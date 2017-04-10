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

            // $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState) {
            //     $rootScope.showSidebar = true;
            // });

            $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState) {
                $state.previous = fromState;
            });

            $rootScope.$on('loading:show', function() {
                $ionicLoading.show({ template: '<ion-spinner icon="crescent" class="spinner-light"></ion-spinner>' });
            });

            $rootScope.$on('loading:hide', function() {
                $ionicLoading.hide();
            });

            $rootScope.toggleMenu = function() {
                $ionicSideMenuDelegate.toggleLeft();
            };

            Platform.run();
        }
    }
    angular.module('MadnessEnjin').run(AppRunner);
}