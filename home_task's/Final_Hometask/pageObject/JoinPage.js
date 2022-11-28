const strGen = require("../pageObject/StringGenerate.js");
class JoinPageObj {
get inputLogin(){
return $('#user_login')
}
async generateLogin(value){
    await this.inputLogin.setValue(strGen.makeLogin(value));
}
get inputEmail(){
return $('#user_email')
}
async generateEmail(value){
    await this.inputEmail.setValue(strGen.makeEmail(value));
}
get inputPassword(){
return $('#user_password')
}
async generatePassword(value){
    await this.inputPassword.setValue(strGen.makePassword(value));
}

get squareButton(){
    return $('[id="all_emails"]')
}
async clickSquareButton(){
    await this.squareButton.click()
}
}
module.exports = new JoinPageObj();
