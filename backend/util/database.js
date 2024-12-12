import mongoose from "mongoose"
const database = () =>{
    
       mongoose.connect("mongodb+srv://hastimovaliya6:hasti@cluster0.dbe10.mongodb.net/").then(() => {console.log("database connected successfully")} ).
       catch((err) => {
        console.log(err);
       })
    }

    export default database;
