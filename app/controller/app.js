const Controller = require('egg').Controller;

// 假接口
class appController extends Controller {
  async getList1() {
      const list = [
        { name: '张三', age: 12, sex: 1, avatar: '', id: 2347894 },
        { name: '李四', age: 12, sex: 2, avatar: '', id: 6789345 },
        { name: '王五', age: 12, sex: 2, avatar: '', id: 2368902 },
        { name: '马六', age: 12, sex: 1, avatar: '', id: 2381894 },
      ];
      this.ctx.body = list;
  }
}
module.exports = appController;