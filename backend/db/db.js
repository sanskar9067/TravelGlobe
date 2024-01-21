import mongoose from "mongoose";

const url = "mongodb+srv://sanskarsinha:qwerty12345@ecom.xg97s3o.mongodb.net/travelglobe"

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(url);
        console.log(`Connected to mongodb ${conn.connection.host}`);
    }
    catch (error) {
        console.log(error);
    }
}

export default connectDB;