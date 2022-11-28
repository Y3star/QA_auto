class PricingPageObj{
get buttonPrice (){
    return $('[test_selector="plan-input-free"]')
}
async clickPriceButton(){
    await this.buttonPrice.click()
}
}
module.exports = new PricingPageObj();