/// <reference path="../../typings/index.d.ts"/>
module MadnessEnjin {
    'use strict';

    class CreatePluginController {
        aceOptions: any;
        plugin: any;
        title: string;
        endpoint: string;
        hideSaveButton: boolean;

        constructor(
            protected enjin,
            protected $state,
            protected $ionicHistory,
            protected $ionicViewSwitcher,
            $stateParams
        ) {
            // ON LOAD
            this.title = 'Create Plugin';
            this.endpoint = `plugin`;
            this.plugin = {
                json: '{\n\t"name": "",\n\t"description": ""\n}'
            };
            this.aceOptions = {
                mode: 'json',
                theme: 'ambiance',
                advanced: {
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: false,
                    autoScrollEditorIntoView: true
                },
                onLoad: function(editor, session, ace){
                    editor.setOption('dragEnabled', false);
                    function stop(e) { e.stop(); }
                    ['mousemove'].forEach(function(name) {
                        editor.on(name, stop);
                    });
                }
            };

            if ($stateParams.id) {
                this.endpoint = `plugin/${$stateParams.id}`;
                this.enjin.api.get(this.endpoint).then((response) => {
                    this.plugin = response.data;
                    this.title = this.plugin.name;
                    this.hideSaveButton = !this.plugin.isOwner;
                });
            }
        }

        back() {
            this.$ionicViewSwitcher.nextDirection('back');
            this.$ionicHistory.backView() ? this.$ionicHistory.goBack() : this.$state.go('menu.plugins');
        }

        submit() {
            var pluginJSON = JSON.parse(this.plugin.json);
            if (!pluginJSON || !pluginJSON.name) {
                alert('Plugin must at least contain an object with a name.');
                return false;
            }
            this.plugin.name = pluginJSON.name;
            this.plugin.description = pluginJSON.description ? pluginJSON.description : '';
            this.enjin.api.post(this.endpoint, this.plugin).then((response) => {
                this.$state.go('menu.plugins');
            });
        }
    }

    angular.module('MadnessEnjin')
           .controller('MadnessEnjin.CreatePluginController', CreatePluginController);
}