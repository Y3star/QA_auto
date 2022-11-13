const assert = require("assert");
const { isTypedArray } = require("util/types");

describe("Test Case", () => {
  before(async () => {
    await browser.setWindowSize(1920, 1080);
  });
  it("1.Test suit (get title text github.com)", async () => {
    await browser.url("https://github.com");
    const title = await browser.getTitle();
    assert.strictEqual(title, "GitHub: Let’s build from here · GitHub");
    console.log("Check title: " + title);
  });
  it("2.Test suit (Go to GitHab check visible status link https://www.linkedin.com/company/github and output result in console)", async () => {
    await browser.url("https://github.com");
    let twitterLink = await $(
      '[href="https://twitter.com/github"]'
    ).isDisplayedInViewport();
    console.log("Twitter: Is Displayed (before scroll)?: " + twitterLink);
    let linkedinLink = await $(
      '[href="https://www.linkedin.com/company/github"]'
    ).isDisplayedInViewport();
    console.log("Linkedin: Is Displayed (before scroll)?: " + linkedinLink);
    let youtubeLink = await $(
      '[href="https://www.youtube.com/github"]'
    ).isDisplayedInViewport();
    console.log("Youtube: Is Displayed (before scroll)?: " + youtubeLink);
    //
    let linkToScroll = await $('[href="https://twitter.com/github"]');
    await linkToScroll.scrollIntoView();
    //
    let isDisplayedGitHub = await $(
      '[href="https://twitter.com/github"]'
    ).isDisplayedInViewport();
    console.log("Twitter: Is Displayed (after scroll)?: " + isDisplayedGitHub);
    let isDisplayedLinkedin = await $(
      '[href="https://www.linkedin.com/company/github"]'
    ).isDisplayedInViewport();
    console.log(
      "Linkedin: Is Displayed (after scroll)?: " + isDisplayedLinkedin
    );
    let isDisplayedYoutube = await $(
      '[href="https://www.youtube.com/github"]'
    ).isDisplayedInViewport();
    console.log("Youtube: Is Displayed (after scroll)?: " + isDisplayedYoutube);
    await browser.pause(1000);
  });
  it("3.Test suit (check search-input on page https://github.com).", async () => {
    let elem = await $('[name="q"]');
    let isEnabled = await elem.isEnabled();
    console.log("Input is enabled: " + isEnabled);
    await browser.url("https://github.com");

    if (isEnabled) {
      await elem.addValue("Input");
      await browser.pause(2000);
      await elem.addValue(" cheack");
      await browser.pause(2000);
      console.log("Text written in input");
    } else {
      console.log("Input dont work.");
    }
  });
  it("4.Test suit (go to https://github.com find the logo github)", async () => {
    await browser.url("https://github.com");
    const gitHubElemLogo = await $('a [class="octicon octicon-mark-github"]');
    await gitHubElemLogo.saveScreenshot("GitHubLogo.png");
    console.log("Screenshot saved.");
  });

  it("5.Test suit (login github.com)", async () => {
    await browser.url("https://github.com");
    const clickElem = await $('a[href="/login"]');
    await clickElem.click();
    await browser.pause(1000);
    let loginField = await $("#login_field");
    let passwordField = await $("#password");
    loginField.setValue("test");
    passwordField.setValue("test123");
    await browser.pause(1000);
    const clickSignIn = await $('input[type="submit"]');
    await clickSignIn.click();
    await browser.pause(3000);
  });
});
