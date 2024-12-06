const router = require('express').Router();
const users = require('./users');
const fruits = require('./fruits');
const recipes = require('./recipes');
const test = require('./test');
const { authController } = require('../controllers');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

router.use('/users', users);
router.use('/fruits', fruits);
router.use('/recipes', recipes);
router.use('/test', test);

module.exports = router;
