import { Given, When, Then } from '@cucumber/cucumber';
import commonPage from "../pageobjects/common.page";
import homePage from "../pageobjects/home.page";
import dashboardPage from "../pageobjects/dashboard.page";
import allureReporter from '@wdio/allure-reporter';


Given(/^I am on the login page$/, async() =>{ 
commonPage.openHomePage();
await browser.pause(10000);
await expect(homePage.btnSignIn).toBePresent();
});

When(/^I Login with valid credentials$/, async() => {
allureReporter.addSeverity('Critical');
allureReporter.addStory('US-023');
allureReporter.addIssue('D18999');
await browser.pause(10000);
homePage.login();
console.log("Navigated to DashBoard");
await browser.pause(10000);
});

Then(/^I Search Directory$/, async() => {
allureReporter.addFeature('Search Directory');
allureReporter.addEnvironment('OrangeHRM','4.9');
dashboardPage.Clickdir();
console.log("Employee Found"); 
await browser.pause(10000);

});

