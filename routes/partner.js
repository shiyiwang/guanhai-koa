var router = require('koa-router')();

router.get('/', function *(next) {
  yield this.render('partner', {
    title: '合作伙伴'
  });
});

module.exports = router;
