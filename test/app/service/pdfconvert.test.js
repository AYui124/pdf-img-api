'use strict';
const { readFileSync } = require('fs-extra');
const ps = require('path');
const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/service/pdfconvert.test.js', async () => {
  const data = prepareData();

  it('should assert', async () => {
    const pkg = require('../../../package.json');

    assert(app.config.keys.startsWith(pkg.name));

    // const ctx = app.mockContext({});
    // yield ctx.service.xx();
  });

  it('pdf2img', async () => {
    const ctx = app.mockContext();
    const result = await ctx.service.pdfconvert.pdf2img(data.pdfBase64);
    assert(result.success);
  });

  function prepareData() {
    const data = {};
    const currPath = ps.resolve('./');
    data.pdfBase64 = readFileSync(currPath + '/test/data/test.pdf', 'base64');
    return data;
  }
});
