import {Page} from "@playwright/test";

const locVars = {
    timeButton:         "//a[.='Time']",
    timeSheetButton:    "li.oxd-topbar-body-nav-tab.--parent.--visited",
    mtsButton:          "//a[contains(text(),'My Timesheets')]"
};

export default class dashboardForm{
    private page: Page;
    constructor(page: Page){
        this.page = page; 
    }
    async response(
        ){}
        async timeButtonClick(){
            (await this.page.waitForSelector(locVars.timeButton))
            .click();
            console.log("[Time] Button clicked...");
        }
        async timeSheetButtonClick(){
            (await this.page.waitForSelector(locVars.timeSheetButton))
            .click();
            console.log("[Timesheets] Button clicked...");
        }
        async myTimesheetButtonClick(){
            (await this.page.waitForSelector(locVars.mtsButton)).click({timeout:5000});
            console.log("[My Timesheets] Button clicked...");
        }
}