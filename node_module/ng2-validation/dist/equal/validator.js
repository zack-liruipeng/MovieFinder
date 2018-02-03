"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var lang_1 = require("../util/lang");
exports.equal = function (val) {
    return function (control) {
        if (lang_1.isPresent(forms_1.Validators.required(control)))
            return null;
        var v = control.value;
        return val === v ? null : { equal: true };
    };
};
//# sourceMappingURL=validator.js.map