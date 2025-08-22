export class PimPage{
    constructor(page){
        this.page = page;
        this.addPimBtn = this.page.getByRole('button', { name: ' Add' });
        this.firstNameTextbox = this.page.getByRole('textbox', { name: 'First Name' });
        this.middleNameTextbox = this.page.getByRole('textbox', { name: 'Middle Name' });
        this.lastNameTextbox= this.page.getByRole('textbox', { name: 'Last Name' });
        this.saveBtn = this.page.getByRole('button', { name: 'Save' });
        this.newEmployeeNameHeading = page.locator('orangehrm-edit-employee-name');

    }

    async addEmployee(firstName, middleName, lastName){
      await this.addPimBtn.click();
      await this.firstNameTextbox.waitFor({ state: 'visible' });
     // await this.middleNameTextbox.waitFor({ state: 'visible' });
     // await this.lastNameTextbox.waitFor({ state: 'visible' });
      await this.firstNameTextbox.fill(firstName);
      await this.middleNameTextbox.fill(middleName);
      await this.lastNameTextbox.fill(lastName);
      await this.saveBtn.click();

    }
}