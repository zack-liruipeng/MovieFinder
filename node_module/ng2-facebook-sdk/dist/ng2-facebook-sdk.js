"use strict";
var core_1 = require('@angular/core');
// TODO create an interface (type) for the response instead of any
var FacebookService = (function () {
    function FacebookService() {
    }
    /**
     * This method is used to initialize and setup the SDK.
     * @param params
     */
    FacebookService.prototype.init = function (params) {
        try {
            FB.init(params);
        }
        catch (err) {
            console.error(err);
        }
    };
    /**
     * This method lets you make calls to the Graph API
     * @param path This is the Graph API endpoint path that you want to call.
     * @param method This is the HTTP method that you want to use for the API request.
     * @param params This is an object consisting of any parameters that you want to pass into your Graph API call.
     * @returns {Promise<any>}
     */
    FacebookService.prototype.api = function (path, method, params) {
        if (method === void 0) { method = 'get'; }
        if (params === void 0) { params = {}; }
        return new Promise(function (resolve, reject) {
            try {
                FB.api(path, method, params, function (response) {
                    if (!response) {
                        reject();
                    }
                    else if (response.error) {
                        reject(response.error);
                    }
                    else {
                        resolve(response);
                    }
                });
            }
            catch (err) {
                reject(err);
            }
        });
    };
    /**
     * This method is used to trigger different forms of Facebook created UI dialogs.
     * These dialogs include:
     * - Share dialog
     * - Login dialog
     * - Add page tab dialog
     * - Requests dialog
     * - Send dialog
     * - Payments dialog
     * - Go Live dialog
     * @param params A collection of parameters that control which dialog is loaded, and relevant settings.
     * @returns {Promise<FacebookUiResponse>}
     */
    FacebookService.prototype.ui = function (params) {
        return new Promise(function (resolve, reject) {
            try {
                FB.ui(params, function (response) {
                    if (!response)
                        reject();
                    else if (response.error)
                        reject(response.error);
                    else
                        resolve(response);
                });
            }
            catch (err) {
                reject(err);
            }
        });
    };
    /**
     * This method allows you to determine if a user is logged in to Facebook and has authenticated your app.
     * @returns {Promise<FacebookLoginStatus>}
     */
    FacebookService.prototype.getLoginStatus = function () {
        return new Promise(function (resolve, reject) {
            try {
                FB.getLoginStatus(function (response) {
                    if (!response)
                        reject();
                    else
                        resolve(response);
                });
            }
            catch (err) {
                reject(err);
            }
        });
    };
    /**
     * Login the user
     * @param options
     * @returns {Promise<FacebookLoginResponse>}
     */
    FacebookService.prototype.login = function (options) {
        return new Promise(function (resolve, reject) {
            try {
                FB.login(function (response) {
                    if (response.authResponse) {
                        resolve(response);
                    }
                    else {
                        reject();
                    }
                }, options);
            }
            catch (err) {
                reject(err);
            }
        });
    };
    /**
     * Logout the user
     * @returns {Promise<any>}
     */
    FacebookService.prototype.logout = function () {
        return new Promise(function (resolve, reject) {
            try {
                FB.logout(function (response) {
                    resolve(response);
                });
            }
            catch (err) {
                reject(err);
            }
        });
    };
    /**
     * This synchronous function returns back the current authResponse.
     * @returns {FacebookAuthResponse}
     */
    FacebookService.prototype.getAuthResponse = function () {
        try {
            return FB.getAuthResponse();
        }
        catch (err) {
            console.error(err);
        }
    };
    FacebookService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    FacebookService.ctorParameters = function () { return []; };
    return FacebookService;
}());
exports.FacebookService = FacebookService;
//# sourceMappingURL=ng2-facebook-sdk.js.map