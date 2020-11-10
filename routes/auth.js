const express = require('express');
const regController = require('../controllers/register');
const loginController = require('../controllers/login');
const invoice = require('../controllers/inv');
const router = express.Router();

router.post('/register', regController.register);
router.post('/login', loginController.login);
router.post('/pay', invoice.inv );


module.exports = router;