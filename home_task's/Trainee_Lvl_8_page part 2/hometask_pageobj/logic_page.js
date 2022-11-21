class ClickButtons {
    get apiButton() {
        return $('.nav-site [href="/docs/api.html"]');
    }
    async clickButtonApi(value) {
        await this.apiButton.click(value);
    }
    get helpButton() {
        return $('.navigationWrapper [href="/help.html"]');
    }
    async clickButtonHelp(value) {
        await this.helpButton.click(value);
    }
    get guideButton() {
        return $('.nav-site [href="/docs/gettingstarted.html"]');
    }
    async clickButtonGuide(value) {
        await this.guideButton.click(value);
    }
}

module.exports = new ClickButtons();
