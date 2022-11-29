class MainPage {
    get searchInput() {
        return $('[class="DocSearch-Button-Container"]');
    }
    get searchInputModalWindow() {
        return $('[class="DocSearch-Input"]');
    }
    async clickInput() {
        await this.searchInput.click();
    }
    async typeText(text) {
        await this.searchInputModalWindow.setValue(text);
    }
}

module.exports = new MainPage();
