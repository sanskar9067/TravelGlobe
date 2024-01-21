import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    name: String,
    description: String,
    hotel_prices: String,
    flight_prices: String
});

export default mongoose.model('carts', cartSchema);