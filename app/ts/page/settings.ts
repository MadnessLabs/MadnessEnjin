/// <reference path="../../typings/index.d.ts"/>
module MadnessEnjin {
    'use strict';

    class SettingsController {
        constructor(
            clipboard
        ) {
            // ON LOAD
            if (!clipboard.supported) {
                alert('Clipboard not supported!');
            }
        }
    }

    angular.module('MadnessEnjin')
           .controller('MadnessEnjin.SettingsController', SettingsController);
}