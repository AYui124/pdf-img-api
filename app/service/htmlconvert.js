'use strict';

const Service = require('egg').Service;
class HtmlConvertService extends Service {
  async html2img(data) {
    console.log('HtmlConvertService.html2img() called');
    const result = {};
    try {
      const { ctx } = this;

      const html = Buffer.from(data.base64, 'base64').toString();
      const left = data.left || 0;
      const top = data.top || 0;
      const width = data.width || 1366;
      const height = data.height || 768;

      result.data = await ctx.util.htmllib.html2Img(html, left, top, width, height);
      result.success = true;
    } catch (err) {
      result.data = err;
      result.success = false;
    }
    return result;
  }
}

module.exports = HtmlConvertService;
