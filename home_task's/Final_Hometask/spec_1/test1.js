// const assert = require("assert");
const gitHubPage = require("../pageObject/GitHubPage.js");
const signInPage = require("../pageObject/SignInPage.js");
const signUpPage = require("../pageObject/SignUpPage.js");
 
describe("spec_1 (cheacking work 'sign in' and 'sign up' button)", () => {
    before(async () => {
        await browser.setWindowSize(1920, 1080);
    });
    it("open url", async () => {
        await browser.url("https://github.com");
    });
    it("clicked to sign in button", async () => {
        await gitHubPage.clickSignIn();
        await browser.pause(500);
    });
    it("generate login", async () => {
        await signInPage.generateLogin(7);
        await browser.pause(1000);
    });
    it("generate password", async () => {
        await signInPage.generatePassword(15);
        await browser.pause(1000);
    });
    it("clicked to sign in button", async () => {
        await signInPage.clickSignIn();
        await browser.pause(500);
    });
    it("back to github.com with click on Logo", async () => {
        await signInPage.clickLogoGitHub();
        await browser.pause(500);
    });
    it("clicked to sign up button", async () => {
        await gitHubPage.clickSignUp();
    });
    it("need wait 4 second because page have action ", async () => {
        await browser.pause(4000);
    });
    it("generate email", async () => {
        await signUpPage.generateEmailSignUp(6);
        await browser.pause(1000);
    });
    it("clicked continue first", async () => {
        await signUpPage.clickContinue1();
        await browser.pause(1000);
    });
    it("generate password", async () => {
        await signUpPage.generatePasswordSignUp(15);
        await browser.pause(1000);
    });
    it("clicked continue second", async () => {
        await signUpPage.clickContinue2();
        await browser.pause(1000);
    });
    it("generate username", async () => {
        await signUpPage.generateUserSignUp(12);
        await browser.pause(1000);
    });
    it("clicked continue third", async () => {
        await signUpPage.clickContinue3();
        await browser.pause(1000);
    });
    it("'y' or 'n' random ganetate", async () => {
        await signUpPage.generateYNSignUp(1);
        await browser.pause(1000);
    });
    it("clicked continue fourth", async () => {
        await signUpPage.clickContinue4();
        await browser.pause(1000);
    });
    it("Cheack verify-button", async()=>{
        const verifyLog = await signUpPage.isDiplayedVetifyButton()
        console.log ("Button in here =) :" + verifyLog)  // dont know why false , but code without error or mistake
        await browser.pause(2000) // End spec_1
    })
});