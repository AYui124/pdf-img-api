'use strict';
const puppeteer = require('puppeteer');

const { mkdirsSync, readFileSync } = require('fs-extra');
const rimraf = require('rimraf');
const outputDirectory = './output/html';
class HtmlHelper {
  async html2Img(html, left, top, width, height) {
    console.log('HtmlHelper.html2Img() called');

    // 先重建文件夹
    rimraf.sync(outputDirectory);
    mkdirsSync(outputDirectory);
    const filePath = outputDirectory + '/' + Date.now() + '.png';

    const browser = await puppeteer.launch({
      args: [
        '–no-sandbox',
        '--window-size=1366,768',
      ],
    });
    try {
      const page = await browser.newPage();
      await page.setContent(html, {
        waitUntil: [
          'domcontentloaded',
        ],
      });

      await page.screenshot({
        path: filePath,
        clip: {
          x: left,
          y: top,
          width,
          height,
        },
      });
      // 需要释放
      await browser.close();
    } catch (err) {
      console.log('HtmlHelper.html2Img() err:' + err);
      await browser.close();
    }
    return readFileSync(filePath, 'base64');
  }
}

module.exports = HtmlHelper;
