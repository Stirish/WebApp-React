const router = require('express').Router();
const userController = require ('../controllers/user-controller')


router.post('/register', userController.signUp);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getOneUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;