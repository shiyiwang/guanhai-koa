var router = require('koa-router')();

router.get('/', function *(next) {
  yield this.render('index', {
    title: '观海资本'
  });
});

module.exports = router;
