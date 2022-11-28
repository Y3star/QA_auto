class TopicsPage {
get buttonTrending(){
    return $('.container-lg.mx-auto [href="/trending"]')
}
async clickTrending(){
    await this.buttonTrending.click()
}
get titleTop(){
    return $('.color-bg-subtle.border-bottom h1')
}
async isDispTopics(){
    return await this.titleTop.isDisplayed()
}
}
module.exports = new TopicsPage();