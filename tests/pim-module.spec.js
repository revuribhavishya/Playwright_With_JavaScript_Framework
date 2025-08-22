
import {test, expect} from '../fixtures/pom-fixture'; 
import pimData from '../data/pim-module-data.json'

test('verify new employee is succesfully created under PIM module', {
    tag : ['@UI', '@UAT'],
    annotation : {
        type : 'Test case Link',
        description : 'Verify new employee is succesfully created under PIM module'
    }
},async({goToUrl, leftNavigationPg, pimPg})=>{
   await  test.step('Open PIM module', async()=>{ //just like cucumber
        await leftNavigationPg.openPimModule();
    })
    await test.step('Add employee in PIM module', async()=> {
        console.log("first name : " + pimData.first_name + " lastname : " + pimData.last_name);
        await pimPg.addEmployee(pimData.first_name,pimData.middle_name, pimData.last_name);
       // await expect(pimPg.newEmployeeNameHeading).toHaveText(`${pimData.first_name} ${pimData.last_name}`);
    })
   

})