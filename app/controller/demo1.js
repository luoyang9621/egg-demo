const Controller = require('egg').Controller;
const fs = require('fs');
const path = require('path');

class Demo1Controller extends Controller {
  async index () {
    const dataList = [
      { title: '新闻1', url: 'www.baidu.com' },
      { title: '新闻2', url: 'www.baidu.com' },
      { title: '新闻3', url: 'www.baidu.com' },
      { title: '新闻4', url: 'www.baidu.com' },
    ];
    this.ctx.response.type = 'html';
    this.ctx.body = fs.readFileSync(path.resolve(__dirname, '../view/client/index.html'));
  }
}

module.exports = Demo1Controller;