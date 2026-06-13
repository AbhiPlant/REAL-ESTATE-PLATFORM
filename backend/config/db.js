import mongoose  from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb://localhost:27017/RealState")
    .then(() => {
        console.log("DB CONNECTED");
        
    })
}

// export const connectDB = async () => {
//     await mongoose.connect("mongodb+srv://abhishekpaswan1818_db_user:TPDQQfdEc4DGvCX5@cluster0.jd7do3c.mongodb.net/RealState")
//     .then(() => {
//         console.log("DB CONNECTED");
        
//     })
// }

