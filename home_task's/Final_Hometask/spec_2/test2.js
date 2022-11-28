// const assert = require("assert");
const gitHubPage = require("../pageObject/GitHubPage.js");
const signInPage = require("../pageObject/SignInPage.js");
const forgotPassPage = require("../pageObject/ForgotPassWordPage.js");

describe("spec_2 cheacking work 'forgot password' in https://github.com/login", () => {
    before(async () => {
        await browser.setWindowSize(1920, 1080);
    });
    it("open url", async () => {
        await browser.url("https://github.com");
    });
    it("click to 'Sign In'", async () => {
        await gitHubPage.clickSignIn();
        await browser.pause(500);
    });
    it("click link 'Forgot Password'", async () => {
        await signInPage.clickForgotPass();
        await browser.pause(500);
    });
    it("genarete email", async () => {
        await forgotPassPage.genareteEmail(6);
        await browser.pause(1000); // 
    });
    it("cheack verufy button with method isDisplay()", async () => {
        const isDispButton = await forgotPassPage.cheackVerify();
        console.log("Button is visible: " + isDispButton)
        await browser.pause(2500); // End spec_2
    });
});
