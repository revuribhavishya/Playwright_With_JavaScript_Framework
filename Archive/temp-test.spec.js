//import {test} from "@playwright/test" this is the default fixture
//import  {test} from "../fixtures/pom-fixture" //to use custom fixture
import { expect } from "@playwright/test";
import {test} from "../fixtures/hooks-fixture";
import CommonUtils  from "../utils/CommonUtils";

/**test.beforeEach('Before Each Hook', async(loginPage)=>{
  await loginPage.goToOrangeHRM();
})

test('After each look' , async(userPg)=>{
  await userPg.logout();

})
*/
test('temp test 1' , async({page,goToUrl})=>{

    console.log(process.env.BASE_URL);
    console.log(process.env.USER_NAME);
    console.log(process.env.PASSWORD);


    const commUtilsObj = new CommonUtils();
   // commUtilsObj.encryptData('admin123');

 //   const decryptedUsername = CommonUtils.decryptData(process.env.USER_NAME);
  //  const decryptedpassword = CommonUtils.decryptData(process.env.PASSWORD);
 //  console.log(decryptedUsername);
 //  console.log(decryptedpassword);
 
   await  loginPage.goToOrangeHRM();
 //  await loginPage.loginOrangeHRM(decryptedUsername, decryptedpassword);
    console.log(await page.title);

  
  test('temp test 2', async(page, goToUrl)=> {
    expect(page).toHaveTitle('OrangeHRM');
  })


  test('temp test 3', async(page,goToUrl, logout )=> {
    expect(page).toHaveTitle('OrangeHRM');
  })
})