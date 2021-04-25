const { chromium } = require("playwright-chromium");

module.exports = async function (context, req) {
    
    const functionLogName = 'JC Function1: ';
    context.log(functionLogName + ' has started.');

    const browser = await chromium.launch({});
    const browserContext = await browser.newContext({});

    const urlhtml = req.query.urlhtml;
    const timewait = Number(req.query.timewait) * 1000;

    //const name = (req.query.name || (req.body && req.body.name));
    //const responseMessage = name
      //  ? "Hello, " + name + ". This HTTP triggered function executed successfully."
      //  : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";
    //context.res = {
        // status: 200, /* Defaults to 200 */
      //  body: responseMessage
    //};

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

    context.log(functionLogName + ' has ended. Now returning content.');

    context.res = {
        body: pageContent
    };

};
