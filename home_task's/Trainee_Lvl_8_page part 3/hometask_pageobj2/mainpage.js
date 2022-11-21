class mainPage {
    get apiButton() {
        return $('.nav-site [href="/docs/api.html"]');
    }
    async clickButtonApi(value) {
        await this.apiButton.click(value);
    }
}
module.exports = new mainPage();
