// npx playwright test timesheet.spec.ts
import {test, Browser, chromium, BrowserContext } from '@playwright/test';
import loginForm from '../POM/loginPom.spec';
import dashboardForm from '../POM/dashboardPom.spec';
import tsboardForm from '../POM/tsBoard.spec';
import * as data from '../JSON/credentials.json';

test('Timesheet - Date picker', async ({}) => {
    const browser: Browser = await chromium.launch();
    const context: BrowserContext = await browser.newContext();
    const page = await context.newPage();
    const loginURL          = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
    const dashboardURL      = 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index';
    const myTimeSheetURL    = 'https://opensource-demo.orangehrmlive.com/web/index.php/time/viewEmployeeTimesheet';

    const pom: any = {};
    const loginPom = new loginForm(page);
    const dbPOM = new dashboardForm(page);
    const tsPOM = new tsboardForm(page);

    pom.login = loginPom;
    pom.dashboard = dbPOM;
    pom.timesheet = tsPOM;

    await pom.login.baseURL(loginURL)
    await pom.login.inputUser(data.user);  
    await pom.login.inputPass(data.pass);
    await pom.login.loginClick();
    await pom.login.expectDashBoardWeb(dashboardURL);

    await pom.dashboard.timeButtonClick();
    await pom.dashboard.timeSheetButtonClick();
    await pom.dashboard.myTimesheetButtonClick(); 

    await pom.timesheet.SelectCalendarButton();
    await pom.timesheet.SelectDay(data.day);

    await page.waitForTimeout(5000);
    await page.close();
    await context.close();
    await browser.close();
});