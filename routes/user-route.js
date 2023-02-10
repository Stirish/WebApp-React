const router = require('express').Router();
const userController = require ('../controllers/user-controller')


router.post('/register', userController.signUp);
router.get('/', userController.getAllUsers);

module.exports = router;