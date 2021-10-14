'use strict';

const Controller = require('egg').Controller;

class ApiController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'pdf api';
  }

  async pdf2img() {
    const { ctx } = this;
    console.log('pdf2img called');
    const pdfBase64 = ctx.request.body.data;
    ctx.body = await this.service.pdfconvert.pdf2img(pdfBase64, 'png');
  }
}

module.exports = ApiController;
