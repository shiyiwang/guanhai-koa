var router = require('koa-router')();
var parse = require('co-body');
var Project = require('../models/project');

router.get('/', function *(next) {
  yield this.render('project', {
    title: '提交项目'
  });
});

router.post('/submit', function *(next) {
  this.status = 200;
  var project = new Project(this.request.body);
  // yield project.save();
  yield next;
});

module.exports = router;
