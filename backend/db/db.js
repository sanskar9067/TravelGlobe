import mongoose from "mongoose";

const url = "MONGODB URL"

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
