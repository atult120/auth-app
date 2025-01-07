const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controller');
const validateRequest = require('../middleware/validate_request');
const { loginSchema } = require('../validations/auth_validator');

router.post('/login', validateRequest(loginSchema) , userController.loginUser);
router.post('/register', userController.registerUser);
router.post('/profile', userController.registerUser);

module.exports = router;