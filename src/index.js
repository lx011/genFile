"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_extra_1 = require("fs-extra");
var chalk_1 = require("chalk");
var errorMsg = chalk_1.default.bold.red;
var warnMsg = chalk_1.default.bold.keyword('orange');
var createMsg = chalk_1.default.bold.green;
var updateMsg = chalk_1.default.bold.blue;
var lightMsg = chalk_1.default.bold.magenta;
var outputContent = function (filePath, template, msg) {
    if (typeof template === 'object') {
        fs_extra_1.outputJSON(filePath, template, { spaces: 2 })
            .then(function () { return console.info(msg); })
            .catch(function (err) { return console.error(errorMsg(err)); });
    }
    else {
        fs_extra_1.outputFile(filePath, template)
            .then(function () { return console.info(msg); })
            .catch(function (err) { return console.error(errorMsg(err)); });
    }
};
var genFile = function (_a) {
    var filename = _a.filename, template = _a.template, _b = _a.path, path = _b === void 0 ? '' : _b, update = _a.update;
    var filePath = path.replace(/(^\/)|(\/$)/g, '');
    filePath = filePath ? filePath + "/" + filename : filename;
    fs_extra_1.pathExists(filePath, function (_err, exists) {
        if (!exists) {
            outputContent(filePath, template, createMsg('[create]') + ": " + lightMsg(filePath) + " successfully!");
        }
        else {
            if (update) {
                outputContent(filePath, template, updateMsg('[update]') + ": " + lightMsg(filePath) + " successfully!");
            }
            else {
                console.info(warnMsg('[warn]') + ": " + lightMsg(filePath) + " already exists!");
            }
        }
    });
};
exports.default = genFile;
//# sourceMappingURL=index.js.map