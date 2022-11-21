class apiPage {
    get apiButtonCon() {
        return $('.toc-headings [href="#contribute"]');
    }
    async clickButtonContribute(value) {
        await this.apiButtonCon.click(value);
    }
    get apiButtonHelp(){
        return $('.navigationWrapper [href="/help.html"]')
    }
    async clickButtonHelp(value) {
        await this.apiButtonHelp.click(value);
    }
}
module.exports = new apiPage();
