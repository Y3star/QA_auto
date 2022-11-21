class guidePage {
    get textHref() {
        return $("//*[contains(text(),'use the legacy docs website') and @href]");
    }
    async clickHref(value) {
        await this.textHref.click(value);
    }
}
module.exports = new guidePage();
