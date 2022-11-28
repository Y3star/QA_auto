const gitHubPage = require("../pageObject/GitHubPage.js");
const careersPage = require("../pageObject/GitCareersPage.js");

const selectorsAraayTitle = [
    "design",
    "engineering",
    "finance",
    "human-resources",
    "marketing",
    "operations",
    "product",
    "sales",
    "security",
    "support",
];
describe("spec_6 check button in page bottom and etc.", () => {
    before(async () => {
        await browser.setWindowSize(1920, 1080);
    });
    it("open url ", async () => {
        await browser.url("https://github.com");
        await browser.pause(250);
    });
    it("scroll to 'Careers'", async () => {
        await gitHubPage.scrollIntoCareers();
        await browser.pause(250);
    });
    it("click 'Careers'", async () => {
        await gitHubPage.clickCareers();
        await browser.pause(250);
    });
    it("click 'Open positions'", async () => {
        await careersPage.clickCareers();
        await browser.pause(200);
    });
    selectorsAraayTitle.forEach((elementText) => {
        it(`cheack button "${elementText}" `, async () => {
            const logTextTitle = await careersPage.getTextTitle(elementText);
            console.log(` button  ${elementText}: ` + logTextTitle);
        });
    });
    it("Pause", async () => {
        await browser.pause(2000); // End spec_6
    });
});
