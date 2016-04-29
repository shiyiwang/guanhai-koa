var router = require('koa-router')();

router.get('/', function *(next) {
  yield this.render('about', {
    title: '关于我们'
  });
});

module.exports = router;
