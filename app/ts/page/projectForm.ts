/// <reference path="../../typings/index.d.ts"/>
module MadnessEnjin {
    'use strict';

    class ProjectFormController {
        organizations: any;
        project: any;
        
        constructor(
            protected enjin,
            protected $rootScope,
            protected $scope,
            protected $state,
            protected Project
        ) {
            // ON LOAD
            this.project = {
                public: true
            };
            enjin.api.get(`user/repos`).then((res) => {
                this.organizations = res.data;
            }); 
        }

        submit() {
            this.$scope.$broadcast('submitForm');
        }

        cleanSubdomain(name) {
            if (!name || !name.length) {
                return 'subdomain';
            }
            return name.replace(/[^0-9a-z]/gi, '').toLowerCase();
        }

        save() {
            if (!this.project.name) {
                alert('Please enter a name for your new project.');
                return false;
            }

            this.Project.create(this.project, (data) => {
                console.log(data.logs);
                this.$rootScope.back();
            });
        }
    }

    angular.module('MadnessEnjin')
           .controller('MadnessEnjin.ProjectFormController', ProjectFormController);
}