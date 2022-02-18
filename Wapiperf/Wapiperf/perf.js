describe('JSON.org page', () => {
    before(() => {
    browser.enablePerformanceAudits()
    })
    
    it('should get and display performance and metrics', async () => {
        await  browser.url("https://www.bbc.com/");
    
        let metrics = await browser.getMetrics()
        let score = await browser.getPerformanceScore()
       
        await $("#idcta-username").click();
       
             
   
        let metricsAfterClick = await browser.getMetrics()
        let scoreAfterClick = await browser.getPerformanceScore()
    
        console.log( metrics, score)
        console.log(metricsAfterClick, scoreAfterClick)
    })
    
    after(async () => {
        browser.disablePerformanceAudits()
    })})