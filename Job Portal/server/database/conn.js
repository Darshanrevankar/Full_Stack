import mongoose from "mongoose";

const connectdb = async()=>{
    try{
        const conn = await mongoose.connect(process.env.mongodb_url)
        console.log("successfully connected to mongodb")
    }
    catch(error){
        console.log(`Mongodb error : ${error}`)
    }
}

export default connectdb