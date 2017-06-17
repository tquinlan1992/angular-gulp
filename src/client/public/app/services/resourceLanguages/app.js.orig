const request = require('request');
const resolveUrl = require("resolve-url");


function getLanguageSelection(languages) {
    const availableLanguages = languages.available;
    let defaultLanguageSelection = languages.default || availableLanguages[0];
    let preferredLanguage = languages.preferred;
    const browserLanguages = navigator.languages || []; //jshint ignore:line
    console.log('browserLanguages', browserLanguages);
    browserLanguages.every(languageOption => {
        let languageResourceOption = availableLanguages.find(availableLanguage => {
            return availableLanguage === languageOption;
        });
        if (languageResourceOption) {
            preferredLanguage = languageOption;
            return false;
        }
        return true;
    });
    return preferredLanguage || defaultLanguageSelection;
}

function getLanguageJSONPromise(deferred, availableLanguages) {
    request(resolveUrl("app/resourceLanguages/" + getLanguageSelection(availableLanguages) + ".json"), {
        json: true
    }, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            deferred.resolve(body);
        }
        deferred.resolve(error);
    });
}


const angular = require("angular");

const app = angular.module("resource-languages", []);

app.service("getLanguageJSON", ($q, getEnvConfigs) => {
    "ngInject";
    const deferred = $q.defer();
    getEnvConfigs.then(envConfigs => {
        getLanguageJSONPromise(deferred, envConfigs.languages);
    });
    return deferred.promise;
});

module.exports = "resource-languages";
