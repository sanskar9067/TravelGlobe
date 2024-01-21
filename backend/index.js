import express from "express";
import cors from 'cors';
import morgan from "morgan";
import connectDB from './db/db.js'
import authRoute from "./routes/authRoute.js";
import placeModel from "./models/placeModel.js";
import cartModel from "./models/cartModel.js";

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());
app.use(morgan(`dev`));

connectDB();

app.use(`/api/v1/auth`, authRoute);

app.get("/", (req, res) => {
    res.send("hello");
})

app.get("/getplaces", (req, res) => {
    placeModel.find()
        .then(place => res.json(place))
        .catch(err => res.json(err))
})

app.get("/addcart", (req, res) => {
    cartModel.find()
        .then(carts => res.json(carts))
        .catch(err => res.json(err));
})

app.listen(PORT, () => {
    console.log(`server running at port ${PORT}`);
})