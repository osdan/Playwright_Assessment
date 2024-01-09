How to install
    Step 1: Initialize a TypeScript Project
        1 - Create a directory for your Project 
            bash:
            mkdir my-project
            cd my-project 

        2 - Initialize a TypeScript project
            bash:
            npm init -y
            npm install typescript --save-dev

    Step 2: Install Playwright and TypeScript Definitions
        1 - bash
            npm install playwright @types/playwright --save-dev
    
    Step 3: Configure TypeScript for Testing
        1 - Create a 'tsconfig.json' file in the root of your project
            bash:
            npx tsc --init
        2 - Update the 'tsconfig.json' file to include settings for your testing environment
            json:
            {
                "compilerOptions": {
                    "target": "es6",
                    "module": "commonjs",
                    "strict": true
                },
                "include": ["**/*.spec.ts"],
                "exclude": ["node_modules"]
            }

    Step 4: Write Spec Files in TypeScript
        1 - Create '.spec.ts' files where you'll write your Playwright tests using TypeScript.
            Example:

            import {test, Browser, chromium, BrowserContext } from '@playwright/test';

            test('Name of your test', async ({}) => {
                const browser: Browser = await chromium.launch();
                const context: BrowserContext = await browser.newContext();
                const page = await context.newPage();

                await page.goto('https://example.com');
                // Perform Playwright operations here

                await page.close();
                await context.close();
                await browser.close();
            });

    Step 5: Compile and Execute
        1 - Compile your TypeScript code:
            Use the TypeScript compiler ('tsc') to generate JavaScript code from your TypeScript files
            bash:
            npx tsc 

        2 - Run your compiled code
            You can execute the resulting JavaScript file using Node
            bash:
            npx test file.spec.ts

            or

            npx test file.spec.ts:8  
            
            (you can change to any other number to select the right test line to execute)

Execution Files code Document
    timesheet.spec.ts 
        contains 
            the imports of node_modules 
            browser context and page performed
            import class files to use the variables and perform methods in POM form
            const pom with 3 classess ready to perform

    loginPom.spec.ts
        contains
            import of page
            local variables with locators 
            methods that works with the login page

    dashboardPom.spec.ts
        contains
            import of page
            local variables with locators 
            methods that works with the login page

    tsBoard.spec.ts
        contains
            import of page
            local variables with locators 
            methods that works with the login page
    credentials.json
        contains
            Fixtures in var strings to use like data in the webpage