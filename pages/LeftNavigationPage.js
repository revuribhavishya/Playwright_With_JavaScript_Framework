export class LeftNavigationPage{

    constructor(page){
        this.page = page;
        this.pimLink = this.page.getByRole('link', { name : 'PIM'});
        this.orangeHRMLogo = this.page.getByRole('link', { name: 'client brand banner' })
        this.leftNavigationPanel = this.page.locator('div.oxd-sidepanel-body')
    }

    async openPimModule(){
        this.pimLink.click();
    }
}