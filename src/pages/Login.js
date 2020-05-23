browser.waitForAngularEnabled(false)
class Login{
    constructor(){
        this.data = {
            email : element(by.id("email")),
            password : element(by.id("pass")),
            button : element(by.xpath("//input[@value='Log In']"))
         }
    }

      

}
module.exports = Login;
