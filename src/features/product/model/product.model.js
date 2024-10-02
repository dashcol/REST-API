import UserModel from "../../user/user.model.js";


export default class productModel {
constructor(id,name,desc,imageURL,category,price,sizes){
    this.id=id;
    this.name=name;
    this.desc=desc;
    this.imageURL=imageURL;
    this.category=category;
    this.price=price;
    this.sizes=sizes;
}


static getAll(){
    return products;
}


static add(product){
    product.id=products.length+1;
    products.push(product);
    return product;
}


static getOne(id){
const product=products.find(f=>f.id==id)
return product;
}


static filter(minPrice,maxPrice,category){
const result=products.filter((f)=>{
   return ( !minPrice || f.price>=minPrice) && (!maxPrice || f.price<=maxPrice) && (!category || f.category===category)
});
return result;
}



static rateProduct(userID,productID,rating){
const user=UserModel.getAll().find(u=>u.id==userID);
if(!user){
    return 'User not found';
}
const product=products.find(f=>f.id==productID);
if(!product){
    return 'Product not found';
}
if(!product.ratings){
    product.ratings=[];
    product.ratings.push({
        userID:userID,
        rating:rating,

    });
}


else{
const existingRatingIndex=product.ratings.findIndex(
    r=>r.userID==userID
);
if(existingRatingIndex>=0){
    product.ratings[existingRatingIndex]={  
        userID:userID,
        rating:rating,
    };
}else{
    product.ratings.push({
        userID:userID,
        rating:rating,

    });
}

}

}

}



var products=[new productModel(1,'Product 1','Description of Product 1','https://m.media-amazon.com/images/I/412Zh2rZDSL._AC._SR360,460.jpg','category1', 10.99,'XL'),
    new productModel(2,'Product 2','Descriptio for Product 2','https://m.media-amazon.com/images/I/61qus9E7oEL._SX569_.jpg','category1', 5.99,'X')
]