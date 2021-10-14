'use strict';
const { readFileSync } = require('fs-extra');
const ps = require('path');
const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/service/pdfconvert.test.js', async () => {
  const currPath = ps.resolve('./');
  const data = readFileSync(currPath + '/test/data/test.pdf', 'base64');

  it('should assert', () => {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));

    // const ctx = app.mockContext({});
    // yield ctx.service.xx();
  });

  it('pdf2img', async () => {
    const ctx = app.mockContext({ data });
    const result = await ctx.service.pdfconvert.pdf2img(data);
    assert(result.success);
  });
});
