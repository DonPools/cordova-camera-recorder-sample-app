cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-camera-recorder.CordovaCameraRecorder",
      "file": "plugins/cordova-plugin-camera-recorder/www/CordovaCameraRecorder.js",
      "pluginId": "cordova-plugin-camera-recorder",
      "clobbers": [
        "window.plugins.cameraRecorder"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-camera-recorder": "0.0.1"
  };
});