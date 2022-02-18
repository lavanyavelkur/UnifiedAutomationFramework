import Page from './page';

class homePage extends Page {

get btnSignIn() { return $("#btnLogin"); }
get username() { return $("#txtUsername"); }
get password() { return $("#txtPassword"); }



async login () {
await this.btnSignIn.click();
await this.username.setValue("Admin");
await this.password.setValue("admin123");
await this.btnSignIn.click();
console.log("Sign In Button Is Clicked");
}
}
export default new homePage();
