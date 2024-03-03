const express = require('express');
const router = express.Router();
const {
    register,
    login,
    getUsers,
    getUserId,
    updateUsers
  } = require('../controllers/controller.js');
  

router.post('/register', register);
router.post('/login', login);
router.get('/users', getUsers);
router.get('/users/:id', getUserId);
router.put('/users/:id', updateUsers);

module.exports = router;