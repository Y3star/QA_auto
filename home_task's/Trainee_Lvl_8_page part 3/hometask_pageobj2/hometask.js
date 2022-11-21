const assert = require("assert");
const mainPageObj = require("./mainpage.js");
const apiPageObj = require("./apipage.js");
const helpPageObj = require("./helppage.js");
const guidePageObj = require("./guidepage.js");
const oldMainPageObj = require("./oldmainpage.js");

describe("Hometask_part_3", () => {
    before(async () => {
        await browser.setWindowSize(1920, 1080);
      });// this need because not all element visible
    it("should demostrate open page + click button 'Api'", async () => {
        await browser.url("http://v5.webdriver.io");
        await mainPageObj.clickButtonApi();
        await browser.pause(500);
    });
    it("should demostrate click button 'Contribute'", async () => {
        await apiPageObj.clickButtonContribute();
        await browser.pause(500);
    });
    it("should demostrate click button 'Help'", async () => {
        await apiPageObj.clickButtonHelp();
        await browser.pause(500);
    });
    it("should demostrate is displayed title", async () => {
        await helpPageObj.isDisplDocs();
        await browser.pause(500);
    });
    // I change a couple step's because dont found version in video task
    it("should demostrate open new link", async () => {
        await helpPageObj.clickHref();
        await browser.pause(500);
    });
    it("should demostrate open new link", async () => {
        await guidePageObj.clickHref();
        await browser.pause(500);
    });
    it("should demostrate open new link", async () => {
        await oldMainPageObj.addTextInput();
        await browser.pause(2000)
    });
});
