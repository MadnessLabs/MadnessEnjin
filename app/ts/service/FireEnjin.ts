/// <reference path="../../typings/index.d.ts"/>

module MadnessEnjin {
    class FireEnjinService {
        firebase: any;

        constructor(
            protected Firebase,
            protected Auth
        ) {
            // On Load
            this.Firebase.start();
            this.Auth.start();
        }
    }

    angular.module('MadnessEnjin').service('FireEnjin', FireEnjinService);
}
