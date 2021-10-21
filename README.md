# functions-headless-chromium
John Carmichael Azure Functions using headless Chromium code extension

Extended code to make:
- an Azure nodeJS function using Playwright to download the entire content of a website. These days many websites are using Angular/React/etc to serve up content that is loaded up by JavaScript after the initial page load. Using wget/Invoke-WebRequest/etc only gets you the "stub starting HTML" and most of the web page content is not included in your request output stream.
- an Azure nodeJS function using Playwright to take a screenshot of a specified area of the configurable-sized screen

Playwright/Puppeteer are very powerful tools for testing. They can be nicely wrapped up in an Azure function with Az Functions updates Microsoft made in the summer of 2020. A more complicated example is in the below blog.

Thanks to Anthony Chu and his blog entry
Running headless Chromium in Azure Functions with Puppeteer and Playwright
https://anthonychu.ca/post/azure-functions-headless-chromium-puppeteer-playwright/
