
let chai = require("chai")
const allure = require('allure-commandline');

exports.config = {
    
    runner: 'local',
    port: 4723,
    hostname: 'localhost',
    path: '/wd/hub',
    logLevel: 'info',
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        require: ['@babel/register'],
        timeout: 600000
    },
    waitforTimeout: 10000,
    maxInstances: 1,
    sync: true,
    specs: [
        './Test.js'],
        
        reporters: [
            [
        'allure',
                {
        outputDir: 'allure-results',
        disableMochaHooks: true
        }],
        [
            'junit',
                    {
                        outputDir: './',
                        outputFileFormat: function(options) { // optional
                            return `results.xml`
                        }
            }],
],


        
    
capabilities : [{
    "platformName": "Android",
    "udid": "emulator-5554",
    "appPackage": "com.android.calculator2",
    "appActivity": "com.android.calculator2.Calculator"}],
   

    afterTest: function (test, context, { error, result, duration, passed, retries }) {
        if(error){
            browser.takeScreenshot()
        }
    
    }}