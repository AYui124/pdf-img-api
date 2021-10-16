'use strict';

const Service = require('egg').Service;
class PdfConvertService extends Service {
  async pdf2img(pdfBase64) {
    const result = {};
    try {
      const { ctx } = this;
      console.log('pdf2img');
      const res = await ctx.util.pdflib.pdfToImage(pdfBase64);
      // console.log(res);
      result.success = true;
      result.data = res;
    } catch (err) {
      console.log(err);
      result.success = false;
      result.data = err;
    }
    return result;
  }
}

module.exports = PdfConvertService;
