/// <reference path="../../typings/index.d.ts"/>
module MadnessEnjin {
    class ProjectService {
        endpoint: string;

        constructor(protected enjin) {
            this.endpoint = 'project';
        }

        respond(response, callback) {
            if (response.success) {
                if (typeof callback === 'function') {
                    callback(response.data);
                } else {
                    console.log('2nd Parameter is a Callback and must be a function!');
                }
            } else {
                console.log(response.data);
            }
        }

        all(callback, silent = false) {
            this.enjin.api.get(`${this.endpoint}`, false, silent).then((response) => {
                this.respond(response, callback);
            });
        }

        create(input, callback, silent = false) {
            this.enjin.api.post(`${this.endpoint}`, input, silent).then((response) => {
                this.respond(response, callback);
            });
        }
    }

    angular.module('MadnessEnjin').service('Project', ProjectService);
}