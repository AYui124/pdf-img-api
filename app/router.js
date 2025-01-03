'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.get('/api', controller.api.index);
  router.post('/api/pdf2img', controller.api.pdf2img);
  router.post('/api/html2img', controller.api.html2img);
};
