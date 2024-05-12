const{ Router } = require('express');   
const router = Router();


const { getUsers, createUser, getUserByID, deleteUser, updateUser } = require('../controllers/index.controller.js');
router.get('/users', getUsers);
router.post('/users', createUser);   
router.get('/users/:id', getUserByID);
router.delete('/users/:id', deleteUser);
router.put('/users/:id', updateUser);







module.exports = router;



