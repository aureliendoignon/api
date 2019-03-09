module.exports = function(app) {
  var postController = require('./controllers/post')

  app.get('/', function(req, res) {
    res.render('index', {
      routes: app._router.stack.filter(item => {
        console.log(typeof(item.route), item.route);
        return typeof(item.route) !== undefined
      })
    });
  })

  app.get('/posts', postController.get)
};
