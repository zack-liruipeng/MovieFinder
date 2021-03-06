"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_utils_1 = require("../../utilities/app-utils");
const stringUtils = require('ember-cli-string-utils');
const dynamicPathParser = require('../../utilities/dynamic-path-parser');
const Blueprint = require('../../ember-cli/lib/models/blueprint');
exports.default = Blueprint.extend({
    description: '',
    availableOptions: [
        {
            name: 'app',
            type: String,
            aliases: ['a'],
            description: 'Specifies app name to use.'
        }
    ],
    normalizeEntityName: function (entityName) {
        const appConfig = app_utils_1.getAppFromConfig(this.project.ngConfig.apps, this.options.app);
        const parsedPath = dynamicPathParser(this.project, entityName, appConfig);
        this.dynamicPath = parsedPath;
        return parsedPath.name;
    },
    locals: function (options) {
        this.fileName = stringUtils.dasherize(options.entity.name);
        return {
            dynamicPath: this.dynamicPath.dir,
            flat: options.flat,
            fileName: this.fileName
        };
    },
    fileMapTokens: function () {
        // Return custom template variables here.
        return {
            __path__: () => {
                this.generatePath = this.dynamicPath.dir;
                return this.generatePath;
            },
            __name__: () => {
                return this.fileName;
            }
        };
    }
});
//# sourceMappingURL=/users/hans/sources/angular-cli/blueprints/enum/index.js.map