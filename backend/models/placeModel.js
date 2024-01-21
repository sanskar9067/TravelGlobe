import mongoose from "mongoose";

const placeModel = new mongoose.Schema({
    name: String,
    description: String,
    hotel_prices: String,
    flight_prices: String
}, { timestamps: true });

export default mongoose.model('places', placeModel);