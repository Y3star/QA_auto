class TredingPage {
    get inputSearch() {
        return $('[name="q"]');
    }
    async writeWdio() {
        await this.inputSearch.addValue("webdriverio");
    }
    get jumpInput() {
        return $('[class="js-jump-to-badge-search-text-global"]');
    }
    async clickJump() {
        await this.jumpInput.click();
    }
}

module.exports = new TredingPage();
