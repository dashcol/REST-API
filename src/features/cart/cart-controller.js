import CartItemsModel from "./cart.model.js";

export  class CartItemsController{
add(req,res){
    const {productID,quantity}=req.query;
    const userID=req.userID;
    CartItemsModel.add(productID,userID,quantity);
    res.status(201).send("cart Updated");
}
get(req,res){
    const userID=req.userID;
    const items=CartItemsModel.get(userID);
    return res.status(200).send(items);
}
delete(req,res){
    const userID=req.userID;
    const cartItemID=req.params.id;
    const error=CartItemsModel.delete(cartItemID,userID);
    if(error){
        return res.status(404).send(error)
    }
    return res.status(200).send('cart item Removed')
}
}