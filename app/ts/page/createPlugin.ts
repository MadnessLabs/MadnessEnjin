/// <reference path="../../typings/index.d.ts"/>
module MadnessEnjin {
    'use strict';

    class CreatePluginController {
        aceOptions: any;
        plugin: any;

        constructor(
            protected enjin,
            protected $state
        ) {
            // ON LOAD
            this.plugin = {
                json: '{\n\t"name": "",\n\t"description": ""\n}'
            };

            this.aceOptions = {
                mode: 'json',
                theme: 'ambiance',
                advanced:{
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
        }

        submit() {
            var pluginJSON = JSON.parse(this.plugin.json);
            if (!pluginJSON || !pluginJSON.name) {
                alert('Plugin must at least contain an object with a name.');
                return false;
            }
            this.plugin.name = pluginJSON.name;
            this.plugin.description = pluginJSON.description ? pluginJSON.description : '';
            this.enjin.api.post('plugin', this.plugin).then((response) => {
                this.$state.go('menu.plugins');
            });
        }
    }

    angular.module('MadnessEnjin')
           .controller('MadnessEnjin.CreatePluginController', CreatePluginController);
}