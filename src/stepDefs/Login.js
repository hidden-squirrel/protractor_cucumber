const { Before, Given, When, Then } = require('cucumber')
import Login from '../pages/Login';
// import browser from protractor;
var LoginPage = new Login();

Given('I launch the application', function () {
    browser.get("www.facebook.com");
});

Then('I enter username', function () {
    LoginPage.email.sendKeys("syama");
});

Then('I enter password', function () {
    LoginPage.password.sendKeys("syama");
});

Then('I click on Login', function () {
    LoginPage.button.click();
});


