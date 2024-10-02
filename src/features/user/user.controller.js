import UserModel from "./user.model.js";
import jwt from "jsonwebtoken";

export default class UserController{
             signUP(req,res){
                const {name,email,password,type}=req.body
               const user= UserModel.SignUP(name,email,password,type)
               res.status(201).send(user)
                
             }
             signIn(req,res){
                 const{email,password}=req.body;
                 const user=UserModel.SignIn(email,password);
                 if(user){
                  const token=jwt.sign(
                     {
                        userID:user.id,
                        email:user.email,
                     },
                     "eDwDXWLb65OeDJNR",
                     {
                        expiresIn:'1h',
                     }
                  );
                    res.status(200).send(token)
                 }else{
                    res.status(400).send("Invalid")
                 }
             }
}