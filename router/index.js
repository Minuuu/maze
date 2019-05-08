var router = require('express').Router();
var register = require('./register/index');
var login = require('./login/index');
var rank = require('./rank/index');
var tutorial = require('./tutorial/index');
var ticket = require('./ticket/index');
var adv = require('./adv/index');
var single = require('./single/index');
var stage = require('./stage/index');

router.use('/register',register);
router.use('/login',login);
router.use('/rank',rank);
router.use('/tutorial', tutorial);
router.use('/ticket', ticket);
router.use('/adver', adv);
router.use('/single',single);
router.use('/stage', stage);

module.exports = router;
