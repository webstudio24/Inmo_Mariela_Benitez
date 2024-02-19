import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs';
import {errorHandler} from '../utils/error.js'
export const signup = async(req, res,next)=>{
    const {username,email,password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password,10);
    const newUser = new User({username,email,password: hashedPassword});//para cifrar la contra en la bd

   try{
    await newUser.save();
    res.status(201).json("User created succesfully");
   }catch(error){
    next(error);//para que muestre el error que tira el middleware dentro de index.js
   }
};