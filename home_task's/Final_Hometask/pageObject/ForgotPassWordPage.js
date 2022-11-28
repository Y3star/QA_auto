const strGen = require("../pageObject/StringGenerate.js");

class ForgotPassPage {
    get inputEmailPassPage() {
        return $("#email_field");
    }
    async genareteEmail(value) {
        await this.inputEmailPassPage.addValue(strGen.makeEmail(value))
    }
    get verifyButton(){
        return $('[type="submit"]')
    }
    async cheackVerify(){
        return await this.verifyButton.isDisplayed()
    }
}

module.exports = new ForgotPassPage();
