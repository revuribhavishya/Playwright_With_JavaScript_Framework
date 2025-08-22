
export class LoginPage{
    constructor(page){
        this.page = page;
        this.userNameInput= this.page.getByRole('textbox', { name: 'Username' });
        this.passwordInput = this.page.getByRole('textbox', { name: 'Password' });
        this.loginBtn =this.page.getByRole('button', { name: 'Login' });
        this.invalidCredentials = this.page.locator('.oxd-alert-content.oxd-alert-content--error');
        
    }

    /**
     * To Open URL 
     */
    async goToOrangeHRM(){
      await  this.page.goto(`${process.env.BASE_URL}/web/index.php/auth/login`);
    }

    /**
     * To Login into OrangeHRM app
     * @param {*} userName 
     * @param {*} password 
     */
   async loginOrangeHRM(userName, password){
       await  this.userNameInput.fill(userName);
       await this.passwordInput.fill(password);
       await this.loginBtn.click();
    }
}