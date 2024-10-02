import express from 'express';
import UserController from './user.controller.js';
import validate from '../../middleware/fields-required-middleware.js';
import validateLogin from '../../middleware/loginauth.js';


const UserRouter=express.Router()


const user=new UserController();


UserRouter.post('/signup',validate,user.signUP)
UserRouter.post('/signin',validateLogin,user.signIn)




export default UserRouter;