/// <reference path="../../typings/index.d.ts"/>
module MadnessEnjin {
    'use strict';

    class CreatePluginController {
        aceOptions: any;
        plugin: any;
        title: string;
        endpoint: string;
        hideSaveButton: boolean;
        id: number;

        constructor(
            protected enjin,
            protected $state,
            $stateParams
        ) {
            // ON LOAD
            this.title = 'Create Plugin';
            this.endpoint = `plugin`;
            this.plugin = {
                jsonString: '{\n\t"name": "",\n\t"description": ""\n}'
            };
            this.aceOptions = {
                mode: 'json',
                theme: 'ambiance',
                advanced: {
                    enableBasicAutocompletion: false,
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
                this.id = $stateParams.id;
                this.endpoint = `plugin/${this.id}`;
                this.enjin.api.get(this.endpoint).then((response) => {
                    this.plugin = response.data;
                    this.title = this.plugin.name;
                    this.hideSaveButton = !this.plugin.isOwner;
                });
            }
        }

        submit() {
            var pluginJSON = JSON.parse(this.plugin.jsonString);
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