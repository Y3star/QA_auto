class oldPageObj {
    get searchInput() {
        return $('[class="ds-input"]');
    }
    async addTextInput() {
        await this.searchInput.addValue("Test done!");
    }
}
module.exports = new oldPageObj();
