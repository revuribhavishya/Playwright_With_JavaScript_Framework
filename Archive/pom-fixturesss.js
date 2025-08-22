import {test as basetest} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import {DashboardPage} from '../pages/DashboardPage'
import { UserPage } from '../pages/UserPage' 
//import { LeftNavigationPage } from '../pages/LeftNavigationPage'


// custom fixture
export const test= basetest.extend({  // what ever the const name you are using should be same as the test case methodname 
//export const test= commontest.extend({ 
    loginPage : async({page}, use) => {
        const LoginPageobj = new LoginPage(page); // creating an obj for LoginPage
       await use (LoginPageobj); //// makes loginPage available in tests
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
        await use(new pimPage(page));

    }

});


export { expect } from '@playwright/test';