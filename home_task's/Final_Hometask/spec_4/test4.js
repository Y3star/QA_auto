const gitHubPage = require("../pageObject/GitHubPage.js");
const topicsPage = require("../pageObject/TopicsPage.js");
const tredingPage = require("../pageObject/TredingPage.js");
const searchPage = require("../pageObject/SearchGitHubPage");

describe("spec_3 ", () => {
    before(async () => {
        await browser.setWindowSize(1920, 1080);
    });
    it("open url ", async () => {
        await browser.url("https://github.com");
        await browser.pause(250);
    });
    it("click 'Open Source'", async () => {
        await gitHubPage.clickOpenSource();
        await browser.pause(500);
    });
    it("click 'Topics'", async () => {
        await gitHubPage.clickTopic();
        await browser.pause(250);
    });
    it("is visible title ? ", async () => {
        const isDTopic = await topicsPage.isDispTopics();
        await browser.pause(250);
        console.log("Title is visible: " + isDTopic);
    });
    it("click 'Treding' ", async () => {
        await topicsPage.clickTrending();
        await browser.pause(250);
    });
    it("write 'text in input'", async () => {
        await tredingPage.writeWdio();
        await browser.pause(250);
    });
    it("jump", async () => {
        await tredingPage.clickJump();
        await browser.pause(250);
    });
    it("clcik 'Type Script'", async () => {
        await searchPage.clickTypeS()
        await browser.pause(250);
    });
    it("click first 'wdiodriver link'", async () => {
        await searchPage.clickLinkWdio()
        await browser.pause(2500); // End spec_4
    });

});
