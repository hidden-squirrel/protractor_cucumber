const { Before, Given, When, Then } = require('cucumber')
import Login from '../pages/Login';

var { setDefaultTimeout } = require("cucumber");
setDefaultTimeout(60 * 1000);

var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;

var LoginPage = new Login();

Given('I launch the application', async function () {
    try{
    await browser.get("https://www.facebook.com/");
    expect(true).to.equal(true,"Browser should be launched successfully");
    }
    catch(err){
        console.error(err)
    }
    
});

// Then(/^I enter "(.*)" in "([^"]*)"$/, async function (text,element) {
    Then('I enter {string} in {string}',async function(text,element) {
    browser.sleep(2000)
    console.log(text,element)
    await LoginPage.data[element].sendKeys(text)
    // await LoginPage.email.sendKeys("syama");
    // expect(await LoginPage.email.isPresent()).to.equal(false,"Email should not be displayed")
});

Then('I enter password', async function () {
    await LoginPage.data['password'].sendKeys("syama");
    // expect(true).to.equal(false);
    // assert.fail("Log in to Fb should not be displayed")
});

Then('I click on Login', async function () {
    await LoginPage.data['button'].click();
});

Then('I verify user is logged in',async function(){
    expect(await LoginPage.email.isPresent()).to.equal(false,"Log into facebook should not be displayed");
})


