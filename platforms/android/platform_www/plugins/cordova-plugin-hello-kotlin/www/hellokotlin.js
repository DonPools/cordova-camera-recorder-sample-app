cordova.define("cordova-plugin-hello-kotlin.hellokotlin", function(require, exports, module) {
/*global cordova, module*/

module.exports = {
    hello: function (input, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "HelloKotlin", "hello", [input]);
    }
};

});
