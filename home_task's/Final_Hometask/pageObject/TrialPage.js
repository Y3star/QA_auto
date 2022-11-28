const strGen = require("../pageObject/StringGenerate.js");

class TrialPage {
    get inputName() {
        return $("#contact_request_name");
    }
    async generateName(value) {
        await this.inputName.setValue(strGen.makeUser(value));
    }
    get inputCompany() {
        return $("#contact_request_organization_name");
    }
    async generateCompany(value) {
        await this.inputCompany.setValue(strGen.makeLogin(value));
    }
    get inputEmail() {
        return $("#contact_request_email");
    }
    async generateEmail(value) {
        await this.inputEmail.setValue(strGen.makeEmail(value));
    }
    get inputPhone() {
        return $("#contact_request_phone");
    }
    async generateNumber(value) {
        await this.inputPhone.setValue(strGen.makeNubmer(value));
    }
    //
    get circleButton() {
        return $("#contact_request_instance_type_azure");
    }
    async clickCircleButton() {
        await this.circleButton.click();
    }
    get yesButton() {
        return $("#questions_yes");
    }
    async clickYes() {
        await this.yesButton.click();
    }
    get agreedButton() {
        return $('#contact_request_agreed_to_terms');
    }
    async clickAgreed() {
        await this.agreedButton.click();
    }
//
    get fieldText() {
        return $("#questions-list");
    }
    async generateText(value) {
        await this.fieldText.addValue(strGen.makeLogin(value));
    }
}
module.exports = new TrialPage();
