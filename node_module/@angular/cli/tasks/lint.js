"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Task = require('../ember-cli/lib/models/task');
const chalk = require("chalk");
const glob = require("glob");
const require_project_module_1 = require("../utilities/require-project-module");
const config_1 = require("../models/config");
const common_tags_1 = require("common-tags");
exports.default = Task.extend({
    run: function (commandOptions) {
        const ui = this.ui;
        const projectRoot = this.project.root;
        const lintConfigs = config_1.CliConfig.fromProject().config.lint || [];
        if (lintConfigs.length === 0) {
            ui.writeLine(chalk.yellow(common_tags_1.oneLine `
        No lint config(s) found.
        If this is not intended, run "ng update".
      `));
            return Promise.resolve(0);
        }
        const tslint = require_project_module_1.requireProjectModule(projectRoot, 'tslint');
        const Linter = tslint.Linter;
        const Configuration = tslint.Configuration;
        let errors = 0;
        let results = '';
        lintConfigs
            .forEach((config) => {
            const program = Linter.createProgram(config.project);
            const files = getFilesToLint(program, config, Linter);
            const linter = new Linter({
                fix: commandOptions.fix,
                formatter: commandOptions.format
            }, program);
            files.forEach((file) => {
                const sourceFile = program.getSourceFile(file);
                if (!sourceFile) {
                    return;
                }
                const fileContents = sourceFile.getFullText();
                const configLoad = Configuration.findConfiguration(config.tslintConfig, file);
                linter.lint(file, fileContents, configLoad.results);
            });
            const result = linter.getResult();
            errors += result.failureCount;
            results = results.concat(result.output.trim().concat('\n'));
        });
        // print formatter output directly for non human-readable formats
        if (['prose', 'verbose', 'stylish'].indexOf(commandOptions.format) == -1) {
            ui.writeLine(results.trim());
            return (errors == 0 || commandOptions.force) ? Promise.resolve(0) : Promise.resolve(2);
        }
        if (errors > 0) {
            ui.writeLine(results.trim());
            ui.writeLine(chalk.red('Lint errors found in the listed files.'));
            return commandOptions.force ? Promise.resolve(0) : Promise.resolve(2);
        }
        ui.writeLine(chalk.green('All files pass linting.'));
        return Promise.resolve(0);
    }
});
function getFilesToLint(program, lintConfig, Linter) {
    let files = [];
    if (lintConfig.files !== null) {
        files = Array.isArray(lintConfig.files) ? lintConfig.files : [lintConfig.files];
    }
    else {
        files = Linter.getFileNames(program);
    }
    let globOptions = {};
    if (lintConfig.exclude !== null) {
        const excludePatterns = Array.isArray(lintConfig.exclude)
            ? lintConfig.exclude
            : [lintConfig.exclude];
        globOptions = { ignore: excludePatterns, nodir: true };
    }
    files = files
        .map((file) => glob.sync(file, globOptions))
        .reduce((a, b) => a.concat(b), []);
    return files;
}
//# sourceMappingURL=/users/hans/sources/angular-cli/tasks/lint.js.map