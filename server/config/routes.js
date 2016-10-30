var Survey = require('../controllers/surveys');
var Option = require('../controllers/options');
var User = require('../controllers/users');

module.exports = function(app){
  app.get('/', function(req, res){
    res.sendFile(__dirname + '../../client/index.html');
  });
  app.get('/surveys', Survey.index);
  app.post('/survey/:user', Survey.create);
  app.get('/survey/:id', Survey.show);
  app.delete('/survey/:id', Survey.delete);
  app.post('/option/:sid', Option.create);
  app.put('/survey/:id/:option', Survey.update);
  app.post('/user', User.create);
  app.get('/user', User.show);
  app.delete('/user/:id', User.delete);
}
