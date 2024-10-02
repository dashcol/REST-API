import  express from 'express';
import path from 'path';
import ProductRouter from './src/features/product/product.routes.js';
import UserRouter from  './src/features/user/user.routes.js'
import bodyParser from 'body-parser';
import basicAuthorizer from './src/middleware/basicAuth.js';
import jwtAuth from './src/middleware/jwt-middlware.js';
import cartRouter from './src/features/cart/cart-routes.js';



const app= express();

app.use(bodyParser.json())




app.use("/api/products",jwtAuth,ProductRouter )
app.use('/api/user',UserRouter)

app.use('/api/cartItems',jwtAuth,cartRouter)


app.get('/',(req,res)=>{
    res.send("Welcom Abroad")
})


app.listen(5000,()=>{
    console.log("Server Listened on 5000")
})