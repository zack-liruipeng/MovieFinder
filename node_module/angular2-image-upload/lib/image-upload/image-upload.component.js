"use strict";
var core_1 = require("@angular/core");
var image_service_1 = require("../image.service");
var FileHolder = (function () {
    function FileHolder(src, file) {
        this.src = src;
        this.file = file;
        this.pending = false;
    }
    return FileHolder;
}());
exports.FileHolder = FileHolder;
var ImageUploadComponent = (function () {
    function ImageUploadComponent(imageService) {
        this.imageService = imageService;
        this.max = 100;
        this.preview = true;
        this.isPending = new core_1.EventEmitter();
        this.onFileUploadFinish = new core_1.EventEmitter();
        this.onRemove = new core_1.EventEmitter();
        this.files = [];
        this.showFileTooLargeMessage = false;
        this.fileCounter = 0;
        this.pendingFilesCounter = 0;
        this.isFileOver = false;
        this.buttonCaption = "Select Images";
        this.dropBoxMessage = "Drop your images here!";
    }
    ImageUploadComponent.prototype.ngOnInit = function () {
        if (!this.fileTooLargeMessage) {
            this.fileTooLargeMessage = 'An image was too large and was not uploaded.' + (this.maxFileSize ? (' The maximum file size is ' + this.maxFileSize / 1024) + 'KiB.' : '');
        }
    };
    ImageUploadComponent.prototype.fileChange = function (files) {
        var remainingSlots = this.countRemainingSlots();
        var filesToUploadNum = files.length > remainingSlots ? remainingSlots : files.length;
        if (this.url && filesToUploadNum != 0) {
            this.isPending.emit(true);
        }
        this.fileCounter += filesToUploadNum;
        this.showFileTooLargeMessage = false;
        this.uploadFiles(files, filesToUploadNum);
    };
    ImageUploadComponent.prototype.deleteFile = function (file) {
        var index = this.files.indexOf(file);
        this.files.splice(index, 1);
        this.fileCounter--;
        this.onRemove.emit(file);
    };
    ImageUploadComponent.prototype.fileOver = function (isOver) {
        this.isFileOver = isOver;
    };
    ImageUploadComponent.prototype.uploadFiles = function (files, filesToUploadNum) {
        var _this = this;
        var _loop_1 = function (i) {
            var file = files[i];
            if (this_1.maxFileSize && file.size > this_1.maxFileSize) {
                this_1.showFileTooLargeMessage = true;
                return "continue";
            }
            var img = document.createElement('img');
            img.src = window.URL.createObjectURL(file);
            var reader = new FileReader();
            reader.addEventListener('load', function (event) {
                var fileHolder = new FileHolder(event.target.result, file);
                _this.uploadSingleFile(fileHolder);
                _this.files.push(fileHolder);
            }, false);
            reader.readAsDataURL(file);
        };
        var this_1 = this;
        for (var i = 0; i < filesToUploadNum; i++) {
            _loop_1(i);
        }
    };
    ImageUploadComponent.prototype.onResponse = function (response, fileHolder) {
        fileHolder.serverResponse = response;
        fileHolder.pending = false;
        this.onFileUploadFinish.emit(fileHolder);
        if (--this.pendingFilesCounter == 0) {
            this.isPending.emit(false);
        }
    };
    ImageUploadComponent.prototype.uploadSingleFile = function (fileHolder) {
        var _this = this;
        if (this.url) {
            this.pendingFilesCounter++;
            fileHolder.pending = true;
            this.imageService
                .postImage(this.url, fileHolder.file, this.headers)
                .subscribe(function (response) { return _this.onResponse(response, fileHolder); }, function (error) {
                _this.onResponse(error, fileHolder);
                _this.deleteFile(fileHolder);
            });
        }
        else {
            this.onFileUploadFinish.emit(fileHolder);
        }
    };
    ImageUploadComponent.prototype.countRemainingSlots = function () {
        return this.max - this.fileCounter;
    };
    return ImageUploadComponent;
}());
ImageUploadComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'image-upload',
                template: "\n    <div class=\"image-upload\"\n         fileDrop\n         [accept]=\"['image/*']\"\n         (isFileOver)=\"fileOver($event)\"\n         (fileDrop)=\"fileChange($event)\"\n         [ngClass]=\"{'file-is-over': isFileOver}\"\n    >\n      <div class=\"file-upload hr-inline-group\">\n        <label class=\"upload-button\">\n          <span [innerText]=\"buttonCaption\"></span>\n          <input\n            type=\"file\"\n            accept=\"image/*\"\n            multiple (change)=\"fileChange(input.files)\"\n            #input>\n        </label>\n\n        <div class=\"drag-box-message\" [innerText]=\"dropBoxMessage\"></div>\n      </div>\n\n      <p class=\"file-too-large\" *ngIf=\"showFileTooLargeMessage\" [innerText]=\"fileTooLargeMessage\">\n      </p>\n\n      <div *ngIf=\"preview\" class=\"image-container hr-inline-group\">\n        <div\n          class=\"image\"\n          *ngFor=\"let file of files\"\n          [ngStyle]=\"{'background-image': 'url('+ file.src +')'}\"\n        >\n          <div *ngIf=\"file.pending\" class=\"loading-overlay\">\n            <div class=\"spinningCircle\"></div>\n          </div>\n          <div *ngIf=\"!file.pending\" class=\"x-mark\" (click)=\"deleteFile(file)\">\n            <span class=\"close\"></span>\n          </div>\n        </div>\n      </div>\n    </div>",
                styles: ["\n    .image-upload {\n      --common-radius: 3px;\n      --active-color: #33CC99;\n      position: relative;\n      border-radius: var(--common-radius);\n      border: #d0d0d0 dashed 1px;\n      font-family: sans-serif;\n    }\n\n    .file-is-over {\n      border-color: var(--active-color);\n      border-style: solid;\n    }\n\n    .hr-inline-group:after {\n      display: table;\n      clear: both;\n      content: \"\";\n    }\n\n    .file-upload {\n      padding: 16px;\n      background-color: #f8f8f8;\n    }\n\n    .drag-box-message {\n      float: left;\n      display: inline-block;\n      margin-left: 12px;\n      padding-top: 14px;\n      color: #9b9b9b;\n      font-weight: 600;\n    }\n\n    label.upload-button input[type=file] {\n      display: none;\n      position: fixed;\n      top: -99999px;\n    }\n\n    .upload-button {\n      cursor: pointer;\n      background-color: var(--active-color);\n      padding: 10px;\n      color: white;\n      font-size: 1.25em;\n      font-weight: 500;\n      text-transform: uppercase;\n      display: inline-block;\n      float: left;\n\n      -webkit-box-shadow: 2px 2px 4px 0px rgba(148, 148, 148, 0.6);\n      -moz-box-shadow: 2px 2px 4px 0px rgba(148, 148, 148, 0.6);\n      box-shadow: 2px 2px 4px 0px rgba(148, 148, 148, 0.6);\n    }\n\n    .upload-button:active span {\n      position: relative;\n      display: block;\n      top: 1px;\n    }\n\n    .image-container {\n      background-color: #fdfdfd;\n      padding: 0 10px 0 10px;\n    }\n\n    .image {\n      float: left;\n      display: inline-block;\n      margin: 6px;\n      width: 86px;\n      height: 86px;\n      background: center center no-repeat;\n      background-size: contain;\n      position: relative;\n    }\n\n    .x-mark {\n      width: 20px;\n      height: 20px;\n      text-align: center;\n      cursor: pointer;\n      border-radius: 2px;\n      float: right;\n      background-color: black;\n      opacity: .7;\n      color: white;\n      margin: 2px;\n    }\n\n    .close {\n      width: 20px;\n      height: 20px;\n      opacity: .7;\n      position: relative;\n      padding-right: 3px;\n    }\n\n    .x-mark:hover .close {\n      opacity: 1;\n    }\n\n    .close:before, .close:after {\n      border-radius: 2px;\n      position: absolute;\n      content: '';\n      height: 16px;\n      width: 2px;\n      top: 2px;\n      background-color: #FFFFFF;\n    }\n\n    .close:before {\n      transform: rotate(45deg);\n    }\n\n    .close:after {\n      transform: rotate(-45deg);\n    }\n\n    .loading-overlay {\n      position: absolute;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0;\n      background-color: black;\n      opacity: .7;\n    }\n\n    .spinningCircle {\n      height: 30px;\n      width: 30px;\n      margin: auto;\n      position: absolute;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0;\n      border-radius: 50%;\n      border: 3px solid rgba(255, 255, 255, 0);\n      border-top: 3px solid white;\n      border-right: 3px solid white;\n      -webkit-animation: spinner 2s infinite cubic-bezier(0.085, 0.625, 0.855, 0.360);\n      animation: spinner 2s infinite cubic-bezier(0.085, 0.625, 0.855, 0.360);\n    }\n\n    .file-too-large {\n      color: red;\n      padding: 0 15px;\n    }\n\n    @-webkit-keyframes spinner {\n      0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n      }\n      100% {\n        -webkit-transform: rotate(360deg);\n        transform: rotate(360deg);\n      }\n    }\n\n    @keyframes spinner {\n      0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n      }\n      100% {\n        -webkit-transform: rotate(360deg);\n        transform: rotate(360deg);\n\n      }\n    }"]
            },] },
];
ImageUploadComponent.ctorParameters = function () { return [
    { type: image_service_1.ImageService, },
]; };
ImageUploadComponent.propDecorators = {
    'max': [{ type: core_1.Input },],
    'url': [{ type: core_1.Input },],
    'headers': [{ type: core_1.Input },],
    'preview': [{ type: core_1.Input },],
    'maxFileSize': [{ type: core_1.Input },],
    'isPending': [{ type: core_1.Output },],
    'onFileUploadFinish': [{ type: core_1.Output },],
    'onRemove': [{ type: core_1.Output },],
    'buttonCaption': [{ type: core_1.Input },],
    'dropBoxMessage': [{ type: core_1.Input },],
    'fileTooLargeMessage': [{ type: core_1.Input },],
};
exports.ImageUploadComponent = ImageUploadComponent;
//# sourceMappingURL=image-upload.component.js.map