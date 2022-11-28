// https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home
const strGen = require("../pageObject/StringGenerate.js");
class SignUpPage {
    get inputEmail() {
        return $("#email");
    }
    get continueButton() {
        return $('[data-optimizely-event="click.signup_continue.email"]');
    }
    get inputPasswordSignUp() {
        return $("#password");
    }
    get inputYNSignUp() {
        return $("#opt_in");
    }
    get continueButton2() {
        return $('[data-optimizely-event="click.signup_continue.password"]');
    }
    get inputUserSignUp() {
        return $("#login");
    }
    get continueButton3() {
        return $('[data-optimizely-event="click.signup_continue.username"]');
    }
    get continueButton4() {
        return $('[data-optimizely-event="click.signup_continue.opt-in"]');
    }
    get buttonVerify() {
        return $("#home_children_button");
    }
    get logoSignUpGitHub(){
        return $('[href="https://github.com/"]')
    }
    async generateEmailSignUp(value) {
        await this.inputEmail.setValue(strGen.makeEmail(value));
    }
    async generatePasswordSignUp(value) {
        await this.inputPasswordSignUp.setValue(strGen.makePassword(value));
    }
    async generateUserSignUp(value) {
        await this.inputUserSignUp.setValue(strGen.makeUser(value));
    }
    async generateYNSignUp(value) {
        await this.inputYNSignUp.setValue(strGen.makeYN(value));
    }
    async clickContinue1() {
        await this.continueButton.click();
    }
    async clickContinue2() {
        await this.continueButton2.click();
    }
    async clickContinue3() {
        await this.continueButton3.click();
    }
    async clickContinue4() {
        await this.continueButton4.click();
    }
    async isDiplayedVetifyButton() {
       return await this.buttonVerify.isDisplayed();
    }
    async clickLogoGit(){ // scr GitHub on Sign Up page
        await this.logoSignUpGitHub.click();
    }
}
module.exports = new SignUpPage();
