import {test as basetest} from '../fixtures/common-fixture';


export const test =basetest.extend({
    goToUrl : async({loginPage}, use)=> {

        await loginPage.goToOrangeHRM();
        await use();
    },
    logout : async({userPg}, use)=>{
        await use();
        await userPg.logout();
    }
})

export { expect } from '@playwright/test';