import jwt from 'jsonwebtoken';

const jwtAuth=(req,res,next)=>{
    const token=req.headers['authorization'];

    if(!token){
        return res.status(400).send('Unauthorized');
    }
    try{
       const payload= jwt.verify(token,'eDwDXWLb65OeDJNR');
       req.userID=payload.userID;
       console.log(payload)
    }
    catch(err){
        return res.status(400).send('Unauthorized'); 
    }

    next();
}
export default jwtAuth;