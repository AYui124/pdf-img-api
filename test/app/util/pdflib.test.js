'use strict';
const { readFileSync } = require('fs-extra');
const ps = require('path');
const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/util/pdflib.test.js', async () => {
  const data = prepareData();

  it('should assert', () => {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));

    // const ctx = app.mockContext({});
    // yield ctx.service.xx();
  });

  it('pdfToImage', async () => {
    const ctx = app.mockContext();
    const result = await ctx.util.pdflib.pdfToImage(data.pdfBase64);
    assert(result.length > 0);
  });

  function prepareData() {
    const data = {};
    const currPath = ps.resolve('./');
    data.pdfBase64 = readFileSync(currPath + '/test/data/test.pdf', 'base64');
    return data;
  }
});
