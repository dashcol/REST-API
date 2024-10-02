export default class UserModel{
    constructor(id,name,email,password,type ){
        this.id=id;
        this.name=name;
        this.email=email;
        this.password=password;
        this.type=type;
    }

    static SignUP(name, email, password, type) {
        const id = users.length + 1;
        const newUser = new UserModel(id, name, email, password, type);
        users.push(newUser);
        return newUser;
    }


    static SignIn(email,password){
        const result =users.find(f=>f.email==email && f.password==password)
        return result;
    }
    static getAll(){
        return users;
    }
}


var users=[{
    "id":1,
    "name":"Admin User",
    "email":"ninja@123gmail.com",
    "password":"kkk",
    "type":"seller",
},
{
    "id":2,
    "name":"vikas",
    "email":"vikas@123gmail.com",
    "password":"vv",
    "type":"customer",
}


]