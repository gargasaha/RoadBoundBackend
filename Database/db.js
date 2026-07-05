import mongoose from "mongoose";
export async function conn(){
    await mongoose.connect("mongodb+srv://sahagarga000_db_user:sahagarga000_db_user@cluster0.laq5xwy.mongodb.net/?appName=Cluster0")
    .then(()=>{
        console.log("Database connected successfully");
    })
    .catch((err)=>{
        console.log(err);
    })
}
