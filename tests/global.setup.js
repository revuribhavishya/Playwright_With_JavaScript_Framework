
import {test, expect} from "../fixtures/pom-fixture" // Change to pom-fixture

test('Global setup for auto login' , async({page,loginPage, dashboardPg,commonUtils} )=>{
 
    await loginPage.goToOrangeHRM();
    const decryptedusername = commonUtils.decryptData(process.env.USER_NAME);
    const decrptedpassword = commonUtils.decryptData(process.env.PASSWORD);
    console.log('Decrypted Username:', decryptedusername);
    console.log('Decrypted password:', decrptedpassword);
    await loginPage.loginOrangeHRM(decryptedusername,decrptedpassword);
    await page.waitForURL(process.env.BASE_URL+ '/web/index.php/dashboard/index');

    await expect(dashboardPg.dashboardTitletext).toHaveText('Dashboard'); 
    await page.context().storageState({   // auto authentication
        path : './playwright/.auth/auth.json'
    })
    
})