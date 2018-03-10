var express = require('express');
var router = express.Router();
var users = require('../controllers/UserController');
/* GET users listing. */
router.get('/', users.getAllUsers);
router.get('/:id', users.getUserById);
router.put('/', users.putUser);
module.exports = router;
