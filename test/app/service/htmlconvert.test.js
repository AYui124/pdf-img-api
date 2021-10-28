'use strict';
const { readFileSync } = require('fs-extra');
const ps = require('path');
const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/service/htmlconvert.test.js', async () => {
  const data = prepareData();

  it('should assert', async () => {
    const pkg = require('../../../package.json');

    assert(app.config.keys.startsWith(pkg.name));

    // const ctx = app.mockContext({});
    // yield ctx.service.xx();
  });

  it('html2img', async () => {
    const ctx = app.mockContext();
    const result = await ctx.service.htmlconvert.html2img(data);
    assert(result.success);
  });

  function prepareData() {
    const data = {};
    const currPath = ps.resolve('./');
    data.base64 = readFileSync(currPath + '/test/data/html.txt', 'base64');
    return data;
  }
});
