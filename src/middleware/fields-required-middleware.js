import {body,validationResult} from 'express-validator';


const validate=async(req,res,next)=>{ 
    const rules=[
    body('name').notEmpty().withMessage("Enter a name"),
    body('email').notEmpty().withMessage("Please provide a email"),
    body('password').notEmpty().withMessage("Please enter a password"),
    body('type').notEmpty().withMessage("Please enter a type"),
]

await Promise.all(rules.map(rule=> rule.run(req)))

var result=validationResult(req);
if(!result.isEmpty()){
    return res.status(400).json({ errors: result.array() });
}
next();
}
export default validate;