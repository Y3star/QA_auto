describe("webdriver.io page home task first", () => {
  it("Open url", async () => {
    await browser.url("https://v5.webdriver.io");
    await browser.pause(1000);
  });
  it("Current url 1: ", async () => {
    const browserUrl1 = await browser.getUrl();
    console.log("Url: " + browserUrl1);
  });
  it("Click button: ", async () => {
    const apiButton = await $('li a[href="/docs/api.html"]');
    await apiButton.click();
    await browser.pause(1000);
  });
  it("Current url 2: ", async () => {
    const browserUrl = await browser.getUrl();
    console.log("Url: " + browserUrl);
  });
  it("Title current url: ", async () => {
    let textTitleHeader = await $(".postHeaderTitle").getText();
    console.log("Text Header: ", textTitleHeader);
  });
  it("JSON text: ", async () => {
    let jsonText = await $('//*[text()="JSONWire protocol"]').getAttribute(
      "href"
    );
    console.log("Text JSON: ", jsonText);
  });
  it("Input", async () => {
    let input = await $("#search_input_react");
    // await input.addValue("test is");
    // await browser.pause(1000);
    // await input.addValue(" DONE!");
    // await browser.pause(5000);

    await input.addValue("t");
    await browser.pause(90);
    await input.addValue("e");
    await browser.pause(90);
    await input.addValue("s");
    await browser.pause(90);
    await input.addValue("t ");
    await browser.pause(90);
    await input.addValue("i");
    await browser.pause(90);
    await input.addValue("s ");
    await browser.pause(90);
    await input.addValue("D");
    await browser.pause(90);
    await input.addValue("O");
    await browser.pause(90);
    await input.addValue("N");
    await browser.pause(90);
    await input.addValue("E");
    await browser.pause(90);
    await input.addValue("!");
    await browser.pause(5000);

    // let textWrite = "test is DONE!".split("");
    // for(indexArrey in textWrite){
    //  await browser.pause(75);
    //  await input.addValue(textWrite[indexArrey]);
    // }
    // await browser.pause(5000);
  });
});
