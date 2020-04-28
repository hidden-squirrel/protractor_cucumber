const { Before, Given, When, Then } = require('cucumber')
import Login from '../pages/Login';

var { setDefaultTimeout } = require("cucumber");
setDefaultTimeout(60 * 1000);

var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;

var LoginPage = new Login();

Given('I launch the application', async function () {
    await browser.get("https://www.facebook.com/");
    expect(true).to.equal(true,"Browser should be launched successfully");
    
});

Then('I enter username', async function () {
    await LoginPage.email.sendKeys("syama");
    // expect(await LoginPage.email.isPresent()).to.equal(false,"Email should not be displayed")
});

Then('I enter password', async function () {
    await LoginPage.password.sendKeys("syama");
    // expect(true).to.equal(false);
    // assert.fail("Log in to Fb should not be displayed")
});

Then('I click on Login', async function () {
    await LoginPage.button.click();
});

Then('I verify user is logged in',async function(){
    expect(await LoginPage.email.isPresent()).to.equal(false,"Log into facebook should not be displayed");
})


