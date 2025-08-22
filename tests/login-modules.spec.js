
import {test, expect} from '../fixtures/pom-fixture' 
import loginModuleData from '../data/login-module-data.json'

/**To not use the saved authentication state give blank cookies, origins */
test.use({
    storageState: {
        cookies : [],
        origins : []
    }
})

test('Verify login in not possible with invalid password',{
    tag : ['@UI', '@UAT', '@INVALID'],
    annotation : {
        type : 'Test case Link',
        description : 'Verify login in not possible with invalid password'
    }
},
async({goToUrl, loginPage,commonUtils})=>{
    const userName = commonUtils.decryptData(process.env.USER_NAME);
    await loginPage.loginOrangeHRM(userName, loginModuleData.wrong_password);
    await expect(loginPage.invalidCredentials).toBeVisible();
    expect(loginPage.invalidCredentials).toHaveText('Invalid credentials');
    expect(loginPage.userNameInput).toBeVisible();
})


test.describe('Invalid Login test', {
    tag : '@InvalidLogin',
    annotation : {
        type : 'Story Link',
        description : 'Link of Story'
    }
    },()=>{
    test('Verify login in not possible with invalid username', {
        tag : ['@UI', '@UAT'],
        annotation : {
            type : 'Test case Link',
            description : 'Verify login in not possible with invalid username'
        }
    },async({goToUrl, loginPage,commonUtils})=>{
        const password = commonUtils.decryptData(process.env.PASSWORD);
        await loginPage.loginOrangeHRM(loginModuleData.wrong_username, password);
        await expect(loginPage.invalidCredentials).toBeVisible();
        expect(loginPage.invalidCredentials).toHaveText('Invalid credentials');
        expect(loginPage.userNameInput).toBeVisible();
    })
    
    
    test('Verify login in not possible with both invalid username and password', {
        tag : ['@UI', '@Dev'],
        annotation : {
            type : 'Test case Link',
            description : 'Verify login in not possible with invalid username and password'
        }
    },async({goToUrl, loginPage,commonUtils})=>{
        await loginPage.loginOrangeHRM(loginModuleData.wrong_username, loginModuleData.wrong_password);
        await expect(loginPage.invalidCredentials).toBeVisible();
        expect(loginPage.invalidCredentials).toHaveText('Invalid credentials');
        expect(loginPage.userNameInput).toBeVisible();
    })

    test('Verify that user can login with valid username and password', 
    {
        tag : ['@VISUAL']
    },
    async({goToUrl, loginPage,commonUtils,leftNavigationPg})=>{
        const username= commonUtils.decryptData(process.env.USER_NAME);
        const password= commonUtils.decryptData(process.env.PASSWORD);
        await loginPage.loginOrangeHRM(username,password);
        await expect(leftNavigationPg.orangeHRMLogo).toHaveScreenshot('orangehrm-logo.png') //saves screenshot under Tests folder
        await expect(leftNavigationPg.leftNavigationPanel).toHaveScreenshot('orangehrm-LeftNavPanel.png')

    })

})
