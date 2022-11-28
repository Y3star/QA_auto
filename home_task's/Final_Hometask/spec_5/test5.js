const gitHubPage = require("../pageObject/GitHubPage.js");
const choosePage = require("../pageObject/ChoosePage.js");
const joinPage = require("../pageObject/JoinPage.js");
const trialPage = require("../pageObject/TrialPage.js");

describe("spec_5 'cloud'", () => {
    before(async () => {
        await browser.setWindowSize(1920, 1080);
    });
    it("open url ", async () => {
        await browser.url("https://github.com");
        await browser.pause(250);
    });
    it("click 'Start trial'", async () => {
        await gitHubPage.clickStartTrial();
        await browser.pause(250);
    });
    it("click 'Plan'", async () => {
        await choosePage.clickPlan();
        await browser.pause(250);
    });
    it("generate login", async () => {
        await joinPage.generateLogin(7);
    });
    it("generate email ", async () => {
        await joinPage.generateEmail(8);
    });
    it("generate password ", async () => {
        await joinPage.generatePassword(9);
    });
    it("click square button [] ", async () => {
        await joinPage.clickSquareButton();
        await browser.pause(500);
    });
    it("back button event", async () => {
        await browser.back();
        await browser.pause(500);
    });
    it("click second 'Plan'", async () => {
        await choosePage.clickPlan2();
        await browser.pause(250);
    });
    //
    it("generate text in input Name", async () => {
        await trialPage.generateName(8);
        await browser.pause(250);
    });
    it("generate text in input Company", async () => {
        await trialPage.generateCompany(8);
        await browser.pause(250);
    });
    it("generate text in input Email", async () => {
        await trialPage.generateEmail(8);
        await browser.pause(250);
    });
    it("generate text in input Number", async () => {
        await trialPage.generateNumber(9);
        await browser.pause(250);
    });
    //
    it("click agreed button", async () => {
        await trialPage.clickAgreed();
        await browser.pause(250);
    });
    it("click circle button ", async () => {
        await trialPage.clickCircleButton();
        await browser.pause(250);
    });
    it("click yes button ", async () => {
        await trialPage.clickYes();
        await browser.pause(250);
    });

    it("generate text in text field", async () => {
        await trialPage.generateText(56);
        await browser.pause(2500); // End spec_5
    });
});
