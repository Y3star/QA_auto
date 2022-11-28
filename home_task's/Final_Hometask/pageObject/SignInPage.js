// https://github.com/login
const strGen = require("../pageObject/StringGenerate.js");
class SignInPage {
    get inputLogin() {
        return $("#login_field");
    }
    get inputPassword() {
        return $("#password");
    }
    get buttonSignIn() {
        return $(".btn.btn-primary");
    }
    get logoGitHubLink() {
        return $('[class="octicon octicon-mark-github"]');
    }
    get forgotPass() {
        return $('[href="/password_reset"]');
    }
    async generateLogin(value) {
        // await this.inputLogin.setValue(strGen.generateData(value,"email",true));   // how to use switch
        await this.inputLogin.setValue(strGen.makeLogin(value));
    }
    async generatePassword(value) {
        await this.inputPassword.setValue(strGen.makePassword(value));
    }
    async clickSignIn() {
        await this.buttonSignIn.click();
    }
    async clickLogoGitHub() {
        await this.logoGitHubLink.click();
    }
    async clickForgotPass() {
        await this.forgotPass.click();
    }
}
module.exports = new SignInPage();
