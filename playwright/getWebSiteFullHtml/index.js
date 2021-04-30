const { chromium } = require("playwright-chromium");

module.exports = async function (context, req) {
    
    const functionLogName = 'JC FNC getWebSiteFullHtml';
    context.log(functionLogName + ' has started.');
    context.log("Time PST: " + (new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"})));

    const browser = await chromium.launch({});
    const browserContext = await browser.newContext({});

    const urlhtml = req.query.urlhtml;
    const timewait = Number(req.query.timewait) * 1000;

    context.log('Function right before call to webpage: ' + urlhtml);
    const page = await browserContext.newPage();
    await page.goto(urlhtml);
    await page.waitForTimeout(timewait);
    const pageContent = await page.content();
    context.log('Function after call to webpage: ' + urlhtml);

    //context.log('Page HTML content:');
    //context.log(pageContent);
    await page.close();
    await browser.close();

    context.log(functionLogName + ' has ended.');
    context.log("Time PST: " + (new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"})));

    context.res = {
        body: pageContent
    };

};
