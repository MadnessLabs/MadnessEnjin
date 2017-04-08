/// <reference path="../../typings/index.d.ts"/>
declare var firebase;

module MadnessEnjin {
    class FirebaseService {
        firebase: any;

        constructor(
            protected $rootScope,
            protected enjin,
            protected $firebaseObject,
            protected $firebaseArray
        ) {
            // On Load
        }
        
        start() {    
            this.firebase = firebase.initializeApp(this.enjin.google.firebase);
            this.enjin.database = {
                instance: this.firebase,
                root: this.firebase.database().ref(),
                get: this.get.bind(this),
                set: this.set.bind(this),
                update: this.update.bind(this),
                push: this.push.bind(this),
                remove: this.remove.bind(this)
            };
        }

        get(ref) {
            return this.$firebaseObject(this.enjin.database.root.child(ref));
        }

        set(ref, data) {
            return this.enjin.database.root.child(ref).set(data);
        }

        update(ref, data) {
            return this.enjin.database.root.child(ref).update(data);
        }

        push(ref, data) {
            return this.enjin.database.root.child(ref).push(data);
        }

        remove(ref) {
            return this.enjin.database.root.child(ref).remove();
        }
    }

    angular.module('MadnessEnjin').service('Firebase', FirebaseService);
}
