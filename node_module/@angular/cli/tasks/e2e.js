"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const url = require("url");
const config_1 = require("../models/config");
const require_project_module_1 = require("../utilities/require-project-module");
const Task = require('../ember-cli/lib/models/task');
const SilentError = require('silent-error');
exports.E2eTask = Task.extend({
    run: function (e2eTaskOptions) {
        const projectConfig = config_1.CliConfig.fromProject().config;
        const projectRoot = this.project.root;
        const protractorLauncher = require_project_module_1.requireProjectModule(projectRoot, 'protractor/built/launcher');
        if (projectConfig.project && projectConfig.project.ejected) {
            throw new SilentError('An ejected project cannot use the build command anymore.');
        }
        return new Promise(function () {
            let promise = Promise.resolve();
            let additionalProtractorConfig = {
                elementExplorer: e2eTaskOptions.elementExplorer
            };
            // use serve url as override for protractors baseUrl
            if (e2eTaskOptions.serve) {
                additionalProtractorConfig.baseUrl = url.format({
                    protocol: e2eTaskOptions.ssl ? 'https' : 'http',
                    hostname: e2eTaskOptions.host,
                    port: e2eTaskOptions.port.toString()
                });
            }
            if (e2eTaskOptions.specs.length !== 0) {
                additionalProtractorConfig['specs'] = e2eTaskOptions.specs;
            }
            if (e2eTaskOptions.webdriverUpdate) {
                // webdriver-manager can only be accessed via a deep import from within
                // protractor/node_modules. A double deep import if you will.
                const webdriverUpdate = require_project_module_1.requireProjectModule(projectRoot, 'protractor/node_modules/webdriver-manager/built/lib/cmds/update');
                // run `webdriver-manager update --standalone false --gecko false --quiet`
                // if you change this, update the command comment in prev line, and in `eject` task
                promise = promise.then(() => webdriverUpdate.program.run({
                    standalone: false,
                    gecko: false,
                    quiet: true
                }));
            }
            // Don't call resolve(), protractor will manage exiting the process itself
            return promise.then(() => protractorLauncher.init(e2eTaskOptions.config, additionalProtractorConfig));
        });
    }
});
//# sourceMappingURL=/users/hans/sources/angular-cli/tasks/e2e.js.map