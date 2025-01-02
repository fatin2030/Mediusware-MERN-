const express = require('express');
const router = express.Router();
const userController = require('../Controller/userController');
const authMiddleware = require('../MiddleWare/authMiddleware');
const upload = require('../MiddleWare/upload');

// POST /users - Route to create a new user
router.post('/users/create', upload, userController.createUser);
router.post('/users/signin', userController.signin);
router.patch('/users/changePassword',authMiddleware, userController.changePassword);
router.get('/users/deactiveAccount',authMiddleware, userController.deactiveAccount);
router.get('/users/activeAccount', userController.activeAccount);
router.patch('/users/editProfileInfo',authMiddleware,upload, userController.editProfileInfo);
router.get('/users/getUserInfo',authMiddleware, userController.getUserInfo);

module.exports = router;
