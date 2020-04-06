const { Given, When, Then } = require('cucumber')
const assert = require('assert');
import Login from '../pages/Login';
import { element } from 'protractor';

var { setDefaultTimeout } = require("cucumber");
setDefaultTimeout(60 * 1000);
var LoginPage = new Login();

Given('I launch the application', async function () {
    browser.get("https://www.facebook.com/");
});

Then('I enter username', async function () {
    await LoginPage.email.sendKeys("syama");
});

Then('I enter password', async function () {
    await LoginPage.password.sendKeys("syama");

});

Then('I click on Login', async function () {
    LoginPage.button.click();
    console.log(await element(by.xpath("//span[contains(.,'Log in to Facebook')]")).isPresent());
    assert.equal(await LoginPage.email.isPresent(), true);
});


