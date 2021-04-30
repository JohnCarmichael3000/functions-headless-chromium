const { chromium } = require("playwright-chromium");

module.exports = async function (context, req) {

    const functionLogName = 'JC FNC jcScreenshot';
    context.log(functionLogName + ' has started.');
    context.log("Time PST: " + (new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"})));

    const urlhtml = req.query.urlhtml || "https://google.com/";
    const timewait = Number(req.query.timewait) * 1000 || 5;
    const viewPortWidthVal = req.query.viewPortWidthVal || 1920;
    const viewPortHeightVal = req.query.viewPortHeightVal || 1020;
    const xVal = req.query.xVal || 0;
    const yVal = req.query.yVal || 0;
    const widthVal = req.query.widthVal || 1920;
    const heightVal = req.query.heightVal || 1020;

    context.log(functionLogName + ' 1 urlhtml: ' + urlhtml);
    context.log(functionLogName + ' 2 timewait: ' + timewait);
    context.log(functionLogName + ' 3 viewPortWidthVal: ' + viewPortWidthVal);
    context.log(functionLogName + ' 4 viewPortHeightVal: ' + viewPortHeightVal);
    context.log(functionLogName + ' 5 xVal: ' + xVal);
    context.log(functionLogName + ' 6 yVal: ' + yVal);
    context.log(functionLogName + ' 7 widthVal: ' + widthVal);
    context.log(functionLogName + ' 8 heightVal: ' + heightVal);

    //easy way to get coordinates, run at full size then use https://www.image-map.net/ to get coordinates of a specific area
    //remember clip is looking for area width and height NOT the x2, y2 coordinates
    const options = {
        fullPage: false,
        clip: {
          x: Number(xVal),
          y: Number(yVal),
          width: Number(widthVal),
          height: Number(heightVal)
        }
    };

    const browser = await chromium.launch();
    const page = await browser.newPage()
    await page.setViewportSize({ width: viewPortWidthVal, height: viewPortHeightVal });
    await page.goto(urlhtml);
    await page.waitForTimeout(timewait);
    const screenshotBuffer = await page.screenshot(options);
    await browser.close();

    /*
    const browser = await chromium.launch();
    const browserContext = await browser.newContext();

    const page = await browserContext.newPage();

    await page.setViewportSize({
        width: viewPortWidthVal,
        height: viewPortHeightVal,
    });
    await page.goto(urlhtml);
    await page.waitForTimeout(timewait);
  
    const options = {
        fullPage: false,
        clip: {
          x: 5,
          y: 60,
          width: 240,
          height: 40
        }
    };

    await browser.close();
    */


    context.log(functionLogName + ' has ended.');
    context.log("Time PST: " + (new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"})));

    context.res = {
        body: screenshotBuffer,
        headers: {
            "content-type": "image/png"
        }
    };

};
