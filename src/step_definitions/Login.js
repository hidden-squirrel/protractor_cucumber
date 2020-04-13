const { Before, Given, When, Then } = require('cucumber')
import Login from '../pages/Login';
import { element } from 'protractor';
var { setDefaultTimeout } = require("cucumber");
var assert = require('assert');
setDefaultTimeout(60 * 1000);

var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;

var LoginPage = new Login();

Given('I launch the application', async function () {
    await browser.get("https://www.facebook.com/");
    expect(true).to.equal(true,"Browser launched successfully");
    
});

Then('I enter username', async function () {
    await LoginPage.email.sendKeys("syama");
    expect(await LoginPage.email.isPresent()).to.equal(true,"Email should be displayed")
});

Then('I enter password', async function () {
    await LoginPage.password.sendKeys("syama");
    // expect(true).to.equal(false);
    // assert.fail("Log in to Fb should not be displayed")
});

Then('I click on Login', async function () {
    await LoginPage.button.click();
    expect(false).to.equal(true,"Log into facebook should not be displayed");
});


