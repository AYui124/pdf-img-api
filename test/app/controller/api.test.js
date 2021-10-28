'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/api.test.js', () => {
  it('should assert', () => {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));

    // const ctx = app.mockContext({});
    // yield ctx.service.xx();
  });

  it('should GET /api', () => {
    return app.httpRequest().get('/api').expect(200);
  });

  it('shoult Post /api/pdf2img', () => {
    return app.httpRequest().post('/api/pdf2img').expect(200);
  });

  it('shoult Post /api/html2img', () => {
    return app.httpRequest().post('/api/html2img').expect(200);
  });
});
