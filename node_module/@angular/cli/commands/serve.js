"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const build_1 = require("./build");
const config_1 = require("../models/config");
const version_1 = require("../upgrade/version");
const check_port_1 = require("../utilities/check-port");
const override_options_1 = require("../utilities/override-options");
const Command = require('../ember-cli/lib/models/command');
const config = config_1.CliConfig.fromProject() || config_1.CliConfig.fromGlobal();
const defaultPort = process.env.PORT || config.get('defaults.serve.port');
const defaultHost = config.get('defaults.serve.host');
const defaultSsl = config.get('defaults.serve.ssl');
const defaultSslKey = config.get('defaults.serve.sslKey');
const defaultSslCert = config.get('defaults.serve.sslCert');
// Expose options unrelated to live-reload to other commands that need to run serve
exports.baseServeCommandOptions = override_options_1.overrideOptions([
    ...build_1.baseBuildCommandOptions,
    {
        name: 'port',
        type: Number,
        default: defaultPort,
        aliases: ['p'],
        description: 'Port to listen to for serving.'
    },
    {
        name: 'host',
        type: String,
        default: defaultHost,
        aliases: ['H'],
        description: `Listens only on ${defaultHost} by default.`
    },
    {
        name: 'proxy-config',
        type: 'Path',
        aliases: ['pc'],
        description: 'Proxy configuration file.'
    },
    {
        name: 'ssl',
        type: Boolean,
        default: defaultSsl,
        description: 'Serve using HTTPS.'
    },
    {
        name: 'ssl-key',
        type: String,
        default: defaultSslKey,
        description: 'SSL key to use for serving HTTPS.'
    },
    {
        name: 'ssl-cert',
        type: String,
        default: defaultSslCert,
        description: 'SSL certificate to use for serving HTTPS.'
    },
    {
        name: 'open',
        type: Boolean,
        default: false,
        aliases: ['o'],
        description: 'Opens the url in default browser.',
    },
    {
        name: 'live-reload',
        type: Boolean,
        default: true,
        aliases: ['lr'],
        description: 'Whether to reload the page on change, using live-reload.'
    },
    {
        name: 'live-reload-client',
        type: String,
        description: 'Specify the URL that the live reload browser client will use.'
    },
    {
        name: 'hmr',
        type: Boolean,
        default: false,
        description: 'Enable hot module replacement.',
    }
], [
    {
        name: 'watch',
        default: true,
        description: 'Rebuild on change.'
    }
]);
const ServeCommand = Command.extend({
    name: 'serve',
    description: 'Builds and serves your app, rebuilding on file changes.',
    aliases: ['server', 's'],
    availableOptions: exports.baseServeCommandOptions,
    run: function (commandOptions) {
        const ServeTask = require('../tasks/serve').default;
        version_1.Version.assertAngularVersionIs2_3_1OrHigher(this.project.root);
        return check_port_1.checkPort(commandOptions.port, commandOptions.host, defaultPort)
            .then(port => {
            commandOptions.port = port;
            const serve = new ServeTask({
                ui: this.ui,
                project: this.project,
            });
            return serve.run(commandOptions);
        });
    }
});
exports.default = ServeCommand;
//# sourceMappingURL=/users/hans/sources/angular-cli/commands/serve.js.map