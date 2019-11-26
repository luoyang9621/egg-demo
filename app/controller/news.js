const Controller = require('egg').Controller;

class NewsListController extends Controller {
  async list () {
      const dataList = [
        { title: '新闻1', url: 'www.baidu.com' },
        { title: '新闻2', url: 'www.baidu.com' },
        { title: '新闻3', url: 'www.baidu.com' },
        { title: '新闻4', url: 'www.baidu.com' },
      ];
      await this.ctx.render('news/list.tpl', { list: dataList });
  }
}

module.exports = NewsListController