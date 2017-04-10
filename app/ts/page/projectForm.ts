/// <reference path="../../typings/index.d.ts"/>
module MadnessEnjin {
    'use strict';

    class ProjectFormController {
        organizations: any;
        project: any;
        
        constructor(
            protected enjin,
            protected $ionicHistory,
            protected $scope,
            protected $state,
            protected $ionicViewSwitcher,
            protected Project
        ) {
            // ON LOAD
            enjin.api.get(`user/repos`).then((res) => {
                this.organizations = res.data;
            }); 
        }

        back() {
            this.$ionicViewSwitcher.nextDirection('back');
            this.$ionicHistory.backView() ? this.$ionicHistory.goBack() : this.$state.go('home');
        }

        submit() {
            this.$scope.$broadcast('submitForm');
        }

        save() {
            if (!this.project.name) {
                alert('Please enter a name for your new project.');
                return false;
            }

            this.Project.create(this.project, (data) => {
                this.back();
            });
        }
    }

    angular.module('MadnessEnjin')
           .controller('MadnessEnjin.ProjectFormController', ProjectFormController);
}