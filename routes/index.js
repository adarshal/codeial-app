const express =require('express');
const router = express.Router()
console.log('Router loaded');
const User = require('../models/users');


const homeController=require('../controllers/home_controller');
// const userController=require('../controllers/users_controller');
// const signUpController=require('../controllers/signup_controller');

router.get('/',homeController.home);


router.use('/users', require('./users'));
router.use('/posts', require('./posts'));
router.use('/comments', require('./comments'));
router.use('/api', require('./api'));
router.use('/likes', require('./likes'));

// moved to users
// router.get('/signup',userController.signup);
// router.post('/create-account',userController.createAccount);
// router.get('/signin',userController.signin);
// router.post('/signin-account',userController.loginCreateSession);
// router.get('/signout',userController.signout);

// function(req,res){

//     console.log(req.body);
//     User.create({
//         email: req.body.email,
//         password: req.body.password,
//         name: req.body.accountHolder
//     }, function (err, newUser) {
//         if (err) {
//             console.log('Error in creating User ', err);
//             return;
//         }
       
//         return res.redirect('back');

//     })

// } );



module.exports= router;