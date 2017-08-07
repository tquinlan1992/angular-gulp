const angular = require("angular");

angular.module("components-module", [
    require("./sample/app"),
    require("./home/app"),
    require("./index/app")
]);

module.exports = "components-module";
