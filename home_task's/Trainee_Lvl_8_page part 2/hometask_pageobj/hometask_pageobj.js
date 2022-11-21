const assert = require("assert");
const clickButton = require("../hometask_pageobj/logic_page.js");

describe("Hometask_", () => {
    it("should demostrate click api", async () => {
        await browser.url("http://v5.webdriver.io");
        await clickButton.clickButtonApi();
        await browser.pause(1000);
    });
    it("should demostrate click help", async () => {
        await clickButton.clickButtonHelp();
        await browser.pause(1000);
    });
    it("should demostrate click docs", async () => {
        await clickButton.clickButtonGuide();
        await browser.pause(1000);
    });
});
