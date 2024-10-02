import productModel from "../model/product.model.js";
export default class ProductController{
    getAllProducts(req,res){
const product=productModel.getAll();
   res.status(200).send(product)
    }

    addProducts(req,res){
    const {name,price,sizes}=req.body;
    const newProduct={
        name,
        price:parseFloat(price),
        sizes:sizes.split(','),
        imageURL:req.file.filename,

    };
   const record= productModel.add(newProduct);
    res.status(201).send(record)
    }




    rateProducts(req,res){
const userID=req.query.userID;
const productID=req.query.productID;
const rating=req.query.rating;

const error=productModel.rateProduct(userID,productID,rating);

if(error){
    return res.status(400).send(error)
}else{
    return res.status(200).send("rating added");
}
    }




    getOneProduct(req,res){
  const id=req.params.id;
  const product=productModel.getOne(id);
  if(!product){
    res.status(404).send("Product not FOund");
  }
else{
    return res.status(200).send(product)
}
    }

    filterProducts(req,res){
        const minPice=req.query.minPrice;
        const maxPice=req.query.maxPrice;
        const category=req.query.category;
const result=productModel.filter(minPice,maxPice,category);
res.status(200).send(result)
    }
    





}