browser.waitForAngularEnabled(false)
class Login{
    constructor(){
        this.email = element(by.id("email"));
        this.password = element(by.id("pass"));
        this.button = element(by.xpath("//input[value='Log In']"))

    }
    

}
module.exports = Login;
