"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./plugin"));
__export(require("./extract_i18n_plugin"));
var loader_1 = require("./loader");
exports.default = loader_1.ngcLoader;
var paths_plugin_1 = require("./paths-plugin");
exports.PathsPlugin = paths_plugin_1.PathsPlugin;
//# sourceMappingURL=/users/hans/sources/angular-cli/src/index.js.map