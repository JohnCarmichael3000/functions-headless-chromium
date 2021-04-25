# functions-headless-chromium
Using headless Chromium in Azure Functions

Made an Azure nodeJS function to use Playwright to download the entire content of a website. With many websites using Angular/React/etc to use content that is loaded up by JavaScript 
using wget/Invoke-WebRequest/etc aren't what they used to be when you find hey have only downloaded some "stub" HTML and most of the web page content is not included.

Playwright/Puppeteer very powerful tools for testing, etc. Nicely wrapped up in a Azure function thanks to updates Microsoft has made recently. A more complicated example is below blog and around the web.

Thanks to Anthony Chu and his blog entry
Running headless Chromium in Azure Functions with Puppeteer and Playwright
https://anthonychu.ca/post/azure-functions-headless-chromium-puppeteer-playwright/
