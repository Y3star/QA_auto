// https://github.com
class GitHubPage {
    get buttonSignIn() {
        return $('[href="/login"]');
    }
    async clickSignIn() {
        await this.buttonSignIn.click();
    }
    get buttonSignUp() {
        return $(".HeaderMenu-link--sign-up");
    }
    async clickSignUp() {
        await this.buttonSignUp.click();
    }
    //spec_3
    // title button .header

    get buttonProduct() {
        return $("ul.d-lg-flex.list-style-none li:nth-child(1) > button");
    }
    async clickProduct() {
        await this.buttonProduct.click();
    }
    get buttonSolutions() {
        return $("ul.d-lg-flex.list-style-none li:nth-child(2) > button");
    }
    async clickSolutions() {
        await this.buttonSolutions.click();
    }
    get buttonOpenSource() {
        return $("ul.d-lg-flex.list-style-none li:nth-child(3) > button");
    }
    async clickOpenSource() {
        await this.buttonOpenSource.click();
    }
    get buttonPricing() {
        return $('header [href="/pricing"]');
    }
    async clickPricing() {
        await this.buttonPricing.click();
    }
    get topicsLink() {
        return $('header [href="/topics"]');
    }
    async clickTopic() {
        await this.topicsLink.click();
    }
    // child button Product

    // get buttonAllFeatures() {
    //     return $('header [href="/features"]');
    // }
    // async isDisplayedAllFeatures() {
    //     return await this.buttonAllFeatures.isDisplayed();
    // }
    // //
    // get buttonDocs() {
    //     return $('header [href="https://docs.github.com"]');
    // }
    // async isDisplayedDocs() {
    //     return await this.buttonDocs.isDisplayed();
    // }
    // //
    // get buttonSkills() {
    //     return $('header [href="https://skills.github.com/"]');
    // }
    // async isDisplayedSkills() {
    //     return await this.buttonSkills.isDisplayed();
    // }
    // //
    // get buttonBlog() {
    //     return $('header [href="https://github.blog"]');
    // }
    // async isDisplayedBlog() {
    //     return await this.buttonBlog.isDisplayed();
    // }  //Old code

    // better code
    async checkLinkProduct(selectorPro) {
        return await $(`header [href*="${selectorPro}"]`).isDisplayed();
    }
    async checkLinkSolutions(selectorSolutions) {
        return await $(`header [href="${selectorSolutions}"]`).isDisplayed();
    }
    async checkOpenSource(selectorOpen) {
        return await $(`header [href="${selectorOpen}"]`).isDisplayed();
    }
    //spec_5
    get startTrialButton() {
        return $('div.d-flex.flex-column.flex-md-row [href*="/organizations"]');
    }
    async clickStartTrial() {
        await this.startTrialButton.click();
    }
    //spec_6
    get careersTitle() {
        return $('[href="/about/careers"]');
    }
    async scrollIntoCareers() {
        await this.careersTitle.scrollIntoView({ block: "center" });
    }
    async clickCareers() {
        await this.careersTitle.click();
    }
}

module.exports = new GitHubPage();
