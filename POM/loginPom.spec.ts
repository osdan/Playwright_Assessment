import {Page} from "@playwright/test";
const locVars = {
    userInput:   "//input[@name='username']",
    passInput:   "//input[@name='password']",
    logButton:   "//button[@type='submit']"
}

export default class loginForm{
    public page: Page;
    constructor(page: Page){
        this.page = page; 
    }
    async response(
        ){
        }
        async baseURL(url: string){
            await this.page.goto(url);
            await this.page.waitForURL(url);
        }
        async inputUser(user: string){
            (await this.page.waitForSelector(locVars.userInput)).fill(user, {timeout: 1600});
        }
        async inputPass(pass: string){
            (await this.page.waitForSelector(locVars.passInput)).fill(pass, {timeout: 1600});
        }
        async loginClick(){
            (await this.page.locator(locVars.logButton).click());
            
        }
        async expectDashBoardWeb(url: string){
            await this.page.waitForURL(url);
            console.log("Login Form finished...");
        }
}