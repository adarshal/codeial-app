const express =require('express');
const router = express.Router()
console.log('user Router loaded');
const userController=require('../controllers/users_controller');
router.get('/profile',userController.profile);


module.exports= router;