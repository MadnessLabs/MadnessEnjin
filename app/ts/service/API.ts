/// <reference path="../../typings/index.d.ts"/>

module MadnessEnjin {
	class APIService {
        headers:any;

		constructor(
            protected Rest,
            protected enjin
        ) {
            // On Load
            this.enjin.api.get = this.get.bind(this);
            this.enjin.api.delete = this.delete.bind(this);
            this.enjin.api.post = this.post.bind(this);
            this.enjin.api.put = this.put.bind(this);
            this.enjin.api.upload = this.upload.bind(this);
		}
        
		get(rUrl, rParams = false, silent = false) {
            return this.Rest.get(`${this.enjin.api.host}${rUrl}`, rParams, silent);
		}

        delete(rUrl, rParams = false, silent = false) {
            return this.Rest.delete(`${this.enjin.api.host}${rUrl}`, rParams, silent);
        }

		post(rUrl, rParams = false, silent = false) {
            return this.Rest.post(`${this.enjin.api.host}${rUrl}`, rParams, silent);
		}

        put(rUrl, rParams = false, silent = false) {
            return this.Rest.put(`${this.enjin.api.host}${rUrl}`, rParams, silent);
        }

        upload(rUrl, rParams = false, silent = false) {
            return this.Rest.upload(`${this.enjin.api.host}${rUrl}`, rParams, silent);
        } 
	}

	angular.module('MadnessEnjin').service('API', APIService);
}