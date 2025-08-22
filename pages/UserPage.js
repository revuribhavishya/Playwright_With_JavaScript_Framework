
export class UserPage{
    constructor(page){
        this.page = page;
        this.userMenuBtn = this.page.locator('.oxd-userdropdown-tab');
        this.logoutBtn = this.page.getByRole('menuitem', { name: 'Logout' });
    }

    async logout(){
        this.userMenuBtn.click();
        this.logout.click();

    }
}