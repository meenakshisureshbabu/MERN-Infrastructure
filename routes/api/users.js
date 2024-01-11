const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const user = require('../../models/user');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// POST /api/users
router.post('/signup', usersCtrl.create);
router.post('/login', usersCtrl.login);
router.get('/check-token',ensureLoggedIn,usersCtrl.checktoken)

module.exports = router;