/*const puppeteer = require('puppeteer');
const Datastore = require('nedb');

const database = new Datastore('population.db');


const fs = require("fs");
fs.readFile("res/population.json", "utf8", (err, jsonString) => {});

async function scrapperProduct(url){

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url)

    const [el] = await page.$x('//*[@id="layer153"]/a/img');
    const src = await el.getProperty('src');
    const scrTxt = await src.jsonValue();

    const [el2] = await page.$x('//*[@id="X1a56929BW"]');
    const txt = await el2.getProperty('textContent');
    const rawTxt = await txt.jsonValue();


    console.log({scrTxt, rawTxt});
    
    browser.close();

}

scrapperProduct('https://www.usdebtclock.org/world-debt-clock.html');*/
