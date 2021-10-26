'use strict';

const Controller = require('egg').Controller;

class ApiController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'pdf api';
  }

  async pdf2img() {
    const { ctx } = this;
    console.log('ApiController.pdf2img() called');
    const pdfBase64 = ctx.request.body.data;
    ctx.body = await this.service.pdfconvert.pdf2img(pdfBase64);
  }

  async html2img() {
    const { ctx } = this;
    console.log('ApiController.html2img() called');
    const data = ctx.request.body;
    ctx.body = await this.service.htmlconvert.html2img(data);
  }
}

module.exports = ApiController;
