/// <reference path="../../typings/index.d.ts"/>

module MadnessEnjin {
	class RestService {
        headers:any;

		constructor(
            protected $http: any, 
            protected $q: any, 
            protected $httpParamSerializer, 
            protected $rootScope,
            protected enjin
        ) {
            // On Load
            this.headers = {};
		}
        
        error(deferred: any, method:any, silent:boolean, data:any, status:number, headers:any, config:any) {
            if (data && (data.error === 'Token Expired' || data.error === 'Invalid Token')) {
                console.log('Bad Token'); 
            } else if (data && !data.success && data.error) {
                alert(data.error);
            }
            silent ? null : this.$rootScope.$broadcast('loading:hide');
            
            deferred.reject(data);
        }

        success(deferred, silent, data, status, headers, config) {
            silent ? null : this.$rootScope.$broadcast('loading:hide');
			deferred.resolve(data);
        }
        
		get(rUrl, rParams = false, silent = false) {
            silent ? null : this.$rootScope.$broadcast('loading:show');

            this.headers['Content-type'] = 'application/json';

            var deferred = this.$q.defer();

            this.$http.get(rUrl, { params: rParams }, {
				headers: this.headers
			})
			.success(this.success.bind(this, deferred, silent))
			.error(this.error.bind(this, deferred, 'get', silent));
			
            return deferred.promise;
		}

        delete(rUrl, rParams = false, silent = false) {
            silent ? null : this.$rootScope.$broadcast('loading:show');

            var config = rParams ? {params: rParams} : null;

            var deferred = this.$q.defer();

            this.$http.delete(rUrl, config)
            .success(this.success.bind(this, deferred, silent))
            .error(this.error.bind(this, deferred, 'delete', silent));

            return deferred.promise;

        }

		post(rUrl, rParams = false, silent = false) {
            silent ? null : this.$rootScope.$broadcast('loading:show');
            
            rParams = rParams ? this.$httpParamSerializer(rParams) : null;
            
			var deferred = this.$q.defer();

            this.headers['Content-type'] = 'application/x-www-form-urlencoded;charset=utf-8';
			this.$http.post(rUrl, rParams, {
                headers: this.headers
			})
            .success(this.success.bind(this, deferred, silent))
			.error(this.error.bind(this, deferred, 'post', silent));

            return deferred.promise;
		}

        put(rUrl, rParams = false, silent = false) {
            silent ? null : this.$rootScope.$broadcast('loading:show');

            rParams = rParams ? this.$httpParamSerializer(rParams) : null;

            var deferred = this.$q.defer();

            this.headers['Content-type'] = 'application/x-www-form-urlencoded;charset=utf-8';
            this.$http.put(rUrl, rParams, {
                headers: this.headers
            })
            .success(this.success.bind(this, deferred, silent))
            .error(this.error.bind(this, deferred, 'put', silent));

            return deferred.promise;
        }

        upload(rUrl, rParams = false, silent = false) {
            silent ? null : this.$rootScope.$broadcast('loading:show');
            var fd = new FormData();

            angular.forEach(rParams, function(val, key){
                fd.append(key, val);
            });
                       
            this.headers['Content-type'] = undefined;

            var deferred = this.$q.defer();

            this.$http.post(rUrl, fd, {
                transformRequest: angular.identity,
                headers: this.headers
            })
            .success(this.success.bind(this, deferred, silent))
            .error(this.error.bind(this, deferred, 'upload', silent));

            return deferred.promise;
        } 
	}

	angular.module('MadnessEnjin').service('Rest', RestService);
}