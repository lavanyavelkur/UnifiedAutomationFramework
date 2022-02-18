import Page from './page';
class dashboardPage extends Page {
get menuDirectory() { return $("#menu_directory_viewDirectory"); }
get searchEmp() { return $("#searchDirectory_emp_name_empName"); }
get searchBtn() { return $("#searchBtn"); }
async Clickdir () {
await this.menuDirectory.click();
await this.searchEmp.setValue("Odis Adalwin");
await this.searchBtn.click();
console.log("Search Button Clicked");  }}
export default new dashboardPage();