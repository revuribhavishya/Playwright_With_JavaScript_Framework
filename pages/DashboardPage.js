//import {Page} from "@playwright/test"

export class DashboardPage{
constructor(page){
this.page= page;
this.dashboardTitletext = this.page.getByRole('heading', { name: 'Dashboard' });

}
}

