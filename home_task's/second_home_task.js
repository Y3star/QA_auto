const assert = require("assert");
const { isTypedArray } = require("util/types");

describe("webdriver.io page home task second", async () => {
  it("Open url: ", async () => {
    await browser.url("https://v5.webdriver.io/docs/api.html");
  });
  it("Get inner JSONWire protocol + open this url: ", async () => {
    let jsonText = await $('//*[text()="JSONWire protocol"]').getAttribute(
      "href"
    );
    console.log("Text JSON: ", jsonText);
    await browser.newWindow(jsonText);
    await browser.pause(1000);
  });
  it("Element displayed?", async () => {
    const isDisplayedElement = await $(
      '.d-inline-flex a[href="/SeleniumHQ/selenium/wiki"]'
    );
    const isDisplayedElement2 = await $(
      '.strong a[href="/SeleniumHQ/selenium/wiki"]'
    );
    let isDispl = await isDisplayedElement.isDisplayed();
    console.log("Is Displayed?: " + isDispl); //outputs: true
    let isDispl1 = await isDisplayedElement2.isDisplayed();
    console.log("2 Is Displayed?: " + isDispl1); //outputs: false
  });
  it("Switch tab:", async () => {
    await browser.switchWindow("https://v5.webdriver.io/docs/api.html");
  });
  it("Title equal 'API Docs': variant first ", async () => {
    await browser.waitUntil(
      async () => {
        return $(".postHeaderTitle").isDisplayed();
      },
      1000,
      "Title is not equal : API Docs"
    );
    let titleText = await $(".postHeaderTitle").getText();
    console.log("The title we have: ", titleText);
    assert.strictEqual(titleText, "API Docs");
  });
  it("Title equal 'API Docs': variant second ", async () => {
    await browser.waitUntil(
      async () => (await $(".postHeaderTitle").getText()) === "API Docs",
      {
        timeout: 5000,
        timeoutMsg: "Title is not equal : API Docs",
      }
    );
  });
  it("Save Screenshot: ", async () => {
    const scrTitle = await $(".postHeaderTitle");
    await scrTitle.saveScreenshot("scrTitle.png");
  });
  it("Is displayed?", async () => {
    let a = await browser.waitUntil(
      async () => {
        return $('[href="https://twitter.com/webdriverio"]').isDisplayed();
      },
      5000,
      "HELP is not displayed!!"
    );
    console.log("Is displayed:", a);
  });
  it("Should detect if an element is displayed", async () => {
    await $('[href="https://twitter.com/webdriverio"]').scrollIntoView();
    let displayedViewTwitterButton = await $(
      '[href="https://twitter.com/webdriverio"]'
    ).isDisplayedInViewport();
    console.log("isTwitterDisplayedInViewport: " + displayedViewTwitterButton); //outputs: true
    await browser.pause(1000);
  });
  // Заменил на "/help.html" потому href="/blog/" сломан на "https://v5.webdriver.io"
  // но и "/help.html" = 2022-11-07T19:07:28.131Z WARN webdriver: Request encountered a stale element - terminating request , елемент не работает на isFocused()
  it("Should detect if an focus an element:", async () => {
    const helpButton = await $('.slidingNav [href="/help.html"]');
    console.log("isFocused() before click: ", await helpButton.isFocused());
    await helpButton.click();
    console.log("isFocused() after click: ", await helpButton.isFocused());
  });
  // А вот на строке поиска работает
  it("should detect input:", async () => {
    const input = await $("#search_input_react");
    console.log(
      "search.isFocused() before click: " + (await input.isFocused())
      //output: false
    );
    await browser.pause(1000);
    await input.click();
    console.log(
      "search.isFocused() after click: " + (await input.isFocused())
      //output: true
    );
    await input.addValue("Second test ");
    await browser.pause(1000);
    await input.addValue("is DONE!");
    await browser.pause(3000);
  });
});
