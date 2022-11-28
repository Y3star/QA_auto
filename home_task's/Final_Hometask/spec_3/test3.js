const gitHubPage = require("../pageObject/GitHubPage.js");
const pricePage = require("../pageObject/PricingPage.js");
const joinPage = require("../pageObject/JoinPage.js");

const buttonArrayProduct = [
    "features",
    "docs.github.com",
    "skills.github.com",
    "github.blog",
];
const buttonArraySolutions = [
    "/enterprise",
    "/team",
    "/enterprise/startups",
    "/pricing#compare-features",
];

const buttonArrayOpenSource = ["/topics", "/trending", "/collections"]; // selector's in Array

describe("spec_3 checking buttons 'Product, Solutions, Open Source' and their child buttons and check 'Price'", () => {
    before(async () => {
        await browser.setWindowSize(1920, 1080);
    });
    it("open url ", async () => {
        await browser.url("https://github.com");
        await browser.pause(250);
    });
    it("click button 'Product'", async () => {
        await gitHubPage.clickProduct();
        await browser.pause(500);
    });
    //Old code
    // it("check child button All Features", async () => {
    //     const a = await gitHubPage.isDisplayedAllFeatures();
    //     console.log("'All' button is visible:" + a);
    // });
    // it("check child button Docs", async () => {
    //     const b = await gitHubPage.isDisplayedDocs();
    //     console.log("'Docs' button is visible:" + b);
    // });
    // it("check child button Skills", async () => {
    //     const c = await gitHubPage.isDisplayedSkills();
    //     console.log("'Skills' button is visible:" + c);
    // });
    // it("check child button Blog", async () => {
    //     const v = await gitHubPage.isDisplayedBlog();
    //     console.log("'Blog' button is visible:" + v);
    // });

    //better code
    buttonArrayProduct.forEach((elementPro) => {
        it(`check child buttons "${elementPro}" `, async () => {
            const logProduct = await gitHubPage.checkLinkProduct(elementPro);
            console.log(`${elementPro} button is visible: ` + logProduct);
        });
    });
    it("click button 'Solutions' ", async () => {
        await gitHubPage.clickSolutions();
        await browser.pause(500);
    });
    buttonArraySolutions.forEach((elementSol) => {
        it(`cheack child button "${elementSol}" `, async () => {
            const logSolution = await gitHubPage.checkLinkSolutions(elementSol);
            console.log(`${elementSol} button is visible: ` + logSolution);
        });
    });
    it("click button 'Open Source' ", async () => {
        await gitHubPage.clickOpenSource();
        await browser.pause(500);
    });
    buttonArrayOpenSource.forEach((elementOpen) => {
        it(`cheack child button "${elementOpen}" `, async () => {
            const logOpen = await gitHubPage.checkOpenSource(elementOpen);
            console.log(`${elementOpen} button is visible: ` + logOpen);
        });
    });
    it("click 'Pricing'", async () => {
        await browser.pause(250); // need this pause because isDisplayed()  method dont work without pause()
        await gitHubPage.clickPricing();
        await browser.pause(250);
    });
    it("click button 'Join For Free'", async () => {
        await pricePage.clickPriceButton();
        await browser.pause(250);
    });
    it("generate login", async () => {
        await joinPage.generateLogin(7);
    });
    it("generate email ", async () => {
        await joinPage.generateEmail(8);
    });
    it("generate password ", async () => {
        await joinPage.generatePassword(9);
    });
    it("click square button [] ", async () => {
        await joinPage.clickSquareButton();
        await browser.pause(3000); // End spec_3
    });
});
