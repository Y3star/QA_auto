class helpPage {
    get titleDocs() {
        return $('.gridBlock div:nth-child(1)>div>h2>div>span>p');
    }
    async isDisplDocs(value) {
        await this.titleDocs.isDisplayed(value);
    }
     //*[contains(text(),'documentation on this site.') and @href]
    get docsHref() {
        return $("//*[contains(text(),'documentation on this site.') and @href]");
    }
    async clickHref(value) {
        await this.docsHref.click(value);
    }
}
module.exports = new helpPage();