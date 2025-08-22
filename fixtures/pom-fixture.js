
import {test as basetest} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import {DashboardPage} from '../pages/DashboardPage'
import { UserPage } from '../pages/UserPage' 
import { LeftNavigationPage } from '../pages/LeftNavigationPage'
import CommonUtils from '../utils/CommonUtils';
import { PimPage } from '../pages/PimPage';

// Create a single, extended test object that provides all your fixtures
export const test = basetest.extend({ 
    // This fixture is from `common-fixture.js`
    commonUtils : async({}, use)=> {
        await  use(new CommonUtils());
    },
    // The rest of your POM fixtures
    loginPage : async({page}, use) => {
        await use (new LoginPage(page)); 
    },
    dashboardPg : async({page}, use)=>{
        await use(new DashboardPage(page));
    },
    userPg : async({page}, use)=>{
        await use(new UserPage(page));
    },
    leftNavigationPg : async({page}, use)=>{
        await use(new LeftNavigationPage(page));
    },
    pimPg : async({page}, use)=>{
        await use(new PimPage(page));
    },
    // The fixtures from `hooks-fixture.js` also belong here
    goToUrl : async({loginPage}, use)=> {
        await loginPage.goToOrangeHRM();
        await use();
    },
    logout : async({userPg}, use)=>{
        await use();
        await userPg.logout();
    }
});


export { expect } from '@playwright/test';