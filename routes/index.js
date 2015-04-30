var express = require('express');
var router = express.Router();

var quizControler = require( '../controllers/quiz_controler');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

router.get('/quizes/question', quiz_controler.question);
router.get('/quizes/answer', quiz_controler.answer);

module.exports = router;
