'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/demo1', controller.demo1.index);
  router.get('/news', controller.news.list);
  router.get('/app/getList1', controller.app.getList1);
};
