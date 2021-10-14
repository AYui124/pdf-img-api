'use strict';

const Service = require('egg').Service;
const PdfHelper = require('../util/pdfLib');
class PdfConvertService extends Service {
  async pdf2img(pdfBase64) {
    const result = {};
    try {
      const pdfHelper = new PdfHelper();
      const res = await pdfHelper.pdfToImage(pdfBase64);
      result.success = true;
      result.data = res;
    } catch (err) {
      result.success = false;
      result.data = err;
    }
    return result;
  }
}

module.exports = PdfConvertService;
