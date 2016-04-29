var app = require('koa')()
  , koa = require('koa-router')()
  , logger = require('koa-logger')
  , json = require('koa-json')
  , views = require('koa-views')
  , onerror = require('koa-onerror')
  , mongoose = require('mongoose')
  , config = require('./config/index');

var index = require('./routes/index');
var investment = require('./routes/investment');
var partner = require('./routes/partner');
var about = require('./routes/about');
var project = require('./routes/project');

var capcha = require('./routes/capcha');

/**
 * Connect to database
 */
// mongoose.connect(config.mongo.url);
// mongoose.connection.on("error", function(err) {
//   console.log(err);
// });

// global middlewares
app.use(views('views', {
  root: __dirname + '/views',
  default: 'jade'
}));
app.use(require('koa-bodyparser')());
app.use(json());
app.use(logger());

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

app.use(require('koa-static')(__dirname + '/public'));

// routes definition
koa.use('/', index.routes(), index.allowedMethods());
koa.use('/investment', investment.routes(), investment.allowedMethods());
koa.use('/partner', partner.routes(), partner.allowedMethods());
koa.use('/about', about.routes(), about.allowedMethods());
koa.use('/project', project.routes(), project.allowedMethods());

koa.use('/capcha', capcha.routes(), capcha.allowedMethods());

// mount root routes
app.use(koa.routes());

app.on('error', function(err, ctx){
  console.error('server error', err, ctx);
});

module.exports = app;
