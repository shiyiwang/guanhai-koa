var router = require('koa-router')();
var captchapng = require('captchapng');

router.get('/', function *(next) {
  var num = parseInt(Math.random()*9000+1000);
  var p = new captchapng(110,30,parseInt(Math.random()*9000+1000)); // width,height,numeric captcha
  p.color(204, 204, 204, 0);  // First color: background (red, green, blue, alpha)
  p.color(80, 80, 80, 255); // Second color: paint (red, green, blue, alpha)

  var img = p.getBase64();
  var imgbase64 = new Buffer(img,'base64');
  // this.req.session.checkcode = num;

  this.body = imgbase64;
});

module.exports = router;
