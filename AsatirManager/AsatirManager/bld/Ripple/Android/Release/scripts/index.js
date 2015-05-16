var AsatirManager;
(function (AsatirManager) {
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
    })(AsatirManager.Application || (AsatirManager.Application = {}));
    var Application = AsatirManager.Application;

    window.onload = function () {
        Application.initialize();
    };
})(AsatirManager || (AsatirManager = {}));
