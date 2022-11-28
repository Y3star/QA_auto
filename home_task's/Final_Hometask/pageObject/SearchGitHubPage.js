// one page  because dont wanna two page for two step
class SearchGitHubPage {
    get buttonTypeScript() {
        return $('li [href*="/search?l=TypeScript"]');
    }
    async clickTypeS() {
        await this.buttonTypeScript.click();
    }
    get linkWdio() {
        return $('[href="/webdriverio/webdriverio"]');
    }
    async clickLinkWdio() {
        await this.linkWdio.click();
    }
}
module.exports = new SearchGitHubPage();
