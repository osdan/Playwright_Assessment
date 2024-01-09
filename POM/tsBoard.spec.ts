import {Page} from "@playwright/test";

const locVars = {
    calendarButton: "//i[contains(@class,'oxd-icon bi-calendar')]",
    calendarMenu:      "//div[contains(@class,'oxd-date-input-calendar')]"
};

export default class tsboardForm{
    private page: Page;
    constructor(page: Page){
        this.page = page; 
    }
    async response(
        ){}
        async SelectCalendarButton(){
            (await this.page.waitForSelector(locVars.calendarButton)).click({timeout:1600});
        }
        async SelectDay(day: string){
            (await this.page.waitForSelector(locVars.calendarMenu)).isVisible();
            await this.page.getByText(day, {exact: true}).click({timeout:1600});
        }
}