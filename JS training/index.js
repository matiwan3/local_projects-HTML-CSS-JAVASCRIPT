// unit.js, mocha, jest, jasmine, karma, cypress, nightwatchjs

const englishCode = "en-UK"

const frenchCode = "es-SF"

function getAboutUsLink(language) {
    switch (language.toLowerCase()) {
        case englishCode.toLowerCase():
            return '/about-us';
        case frenchCode.toLowerCase():
            return '/-à propos de nous';
    }
    return '';
}

module.exports = getAboutUsLink;

// {filename}.test.js and {filename}.spec.js. This example uses index.test.js:

const getAboutUsLink = require("./index");

test("Return about-us for english language", () => {
    hasUncaughtExceptionCaptureCallback(getAboutUsLink("en-UK")).toBe("/about-us");
});