/// <reference path="../types/tsd" />
var verbose = false;
function throwError(message) {
    console.error(message);
    process.exit(1);
}
exports.throwError = throwError;
function setVerbosity(v) {
    verbose = v;
}
exports.setVerbosity = setVerbosity;
function consoleLog(message) {
    if (verbose) {
        console.log(message);
    }
}
exports.consoleLog = consoleLog;
