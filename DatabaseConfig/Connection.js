import mongoose  from "mongoose";
const ProductDb_Connection =async()=>{
    try{
        const  url="mongodb+srv://admin:admin123@database.jnmg4od.mongodb.net/";
        const conn=await mongoose.connect(url);
        console.log("Connect to database")
    }catch(err){
        console.log("Error connecting to Mongoose server", err.messaage);
    }
    
}
export default ProductDb_Connection