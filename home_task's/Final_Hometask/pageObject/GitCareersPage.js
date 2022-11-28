class GitCareersPage {
get positionOpen(){
    return $('[href="#positions"]')
}
async clickCareers (){
    await this.positionOpen.click()
}
async getTextTitle(selectorTitle) {
    return await $(`#${selectorTitle}`).getText();
}
}
module.exports = new GitCareersPage();