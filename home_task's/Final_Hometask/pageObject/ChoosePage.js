class ChoosePage {
    get choosePlan() {
        return $('[class="rounded-3 px-2 pt-5 pb-2 pricing-recommended-plan"]');
    }
    async clickPlan() {
        await this.choosePlan.click();
    }
    get choosePlan2(){
        return $('[class="rounded-3 px-2 pt-5 pb-2"] > div')
    }
    async clickPlan2(){
        await this.choosePlan2.click()
    }
}
module.exports = new ChoosePage();
