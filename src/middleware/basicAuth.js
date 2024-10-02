import UserModel from "../features/user/user.model.js";

const basicAuthorizer=(req,res,next)=>{
    const authHeader=req.headers["authorization"];

    if(!authHeader){
        return res.status(401).send("No Authorization Details Found");
    }
    
    

    const base64Cred=authHeader.replace('Basic ','');



const decodedCreds=Buffer.from(base64Cred,'base64').toString('utf8');


const creds=decodedCreds.split(':');


const user=UserModel.getAll().find(u=>u.email==creds[0] && u.password==creds[1])
if(user){
    next();
}
else{
    return res.status(401).send("Not Authorized")
}

}
export default basicAuthorizer;