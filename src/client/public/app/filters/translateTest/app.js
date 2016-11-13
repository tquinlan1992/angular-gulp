const angular = require("angular");
const _ = require("lodash");

const app = angular.module("translate-test-module", []);
let languageResource;

function getResourceValue(key) {
    return _.get(languageResource, key);
}

app.filter("resourceLanguage", (getLanguageJSON) => {

    function filter(input) {
        if (!languageResource) {
            getLanguageJSON.then(result => {
                languageResource = result;
                return getResourceValue(input);
            });
            return "language resource file not loaded";
        } else {
            return getResourceValue(input);
        }
    }
    filter.$stateful = true;
    return filter;
});
module.exports = "translate-test-module";