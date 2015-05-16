var AsatirApp;
(function (AsatirApp) {
    "use strict";

    (function (Application) {
        function initialize() {
            document.addEventListener('deviceready', onDeviceReady, false);
        }
        Application.initialize = initialize;

        function onDeviceReady() {
            document.addEventListener('pause', onPause, false);
            document.addEventListener('resume', onResume, false);
        }

        function onPause() {
        }

        function onResume() {
        }
    })(AsatirApp.Application || (AsatirApp.Application = {}));
    var Application = AsatirApp.Application;

    window.onload = function () {
        Application.initialize();
    };
})(AsatirApp || (AsatirApp = {}));
