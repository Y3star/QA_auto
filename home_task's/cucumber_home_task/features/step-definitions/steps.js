const { Given, When, Then } = require("@wdio/cucumber-framework");
const mainPage = require("../pageobjects/MainPage.js");

Given("I am on webdriverio page", async () => {
    await browser.url("https://webdriver.io");
});

When("I click on search", async () => {
    await mainPage.clickInput();
    await browser.pause(500);
});

Then("I type text to search", async () => {
    await mainPage.typeText("Any text!");
    await browser.pause(3000)
});
