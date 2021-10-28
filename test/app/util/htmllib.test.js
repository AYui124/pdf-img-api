'use strict';
const { readFileSync } = require('fs-extra');
const ps = require('path');
const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/util/htmllib.test.js', async () => {
  const data = prepareData();

  it('should assert', () => {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));

    // const ctx = app.mockContext({});
    // yield ctx.service.xx();
  });

  it('html2Img', async () => {
    const ctx = app.mockContext();
    const result = await ctx.util.htmllib.html2Img(data.base64, data.left, data.top, data.width, data.height);
    assert(result.length > 0);
  });

  function prepareData() {
    const data = {};
    const currPath = ps.resolve('./');
    data.base64 = readFileSync(currPath + '/test/data/html.txt', 'base64');
    data.left = 0;
    data.top = 0;
    data.width = 1366;
    data.height = 768;
    return data;
  }
});
