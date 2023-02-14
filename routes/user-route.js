const router = require('express').Router();
const userController = require ('../controllers/user-controller')

// CRUD 
router.post('/register', userController.signUp);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getOneUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

// Connect - Disconnect 
router.post('/login', userController.signIn);
router.get('/logout', userController.logOut);

module.exports = router;