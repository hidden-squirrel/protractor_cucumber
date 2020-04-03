const { Before, Given, When, Then } = require('cucumber')

Given("I launch application", function () {
    browser.get("www.facebook.com");
});

