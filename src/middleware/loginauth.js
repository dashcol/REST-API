import {body,validationResult} from 'express-validator';


const validateLogin=async(req,res,next)=>{ 
    const rules=[
    body('email').notEmpty().withMessage("Please provide a email"),
    body('password').notEmpty().withMessage("Please enter a password"),
]

await Promise.all(rules.map(rule=> rule.run(req)))

var result=validationResult(req);
if(!result.isEmpty()){
    return res.status(400).json({ errors: result.array() });
}
next();
}
export default validateLogin;