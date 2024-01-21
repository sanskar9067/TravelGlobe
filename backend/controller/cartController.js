
import cartModel from "../models/cartModel.js";

export const cartController = async (req, res) => {
    const { name, desc, hp, fp } = req.body;
    const cartData = await new cartModel({ name, desc, hp, fp }).save();
    res.status(200).send({
        success: true,
        message: "item added",
        cartData
    })
}

export const deletePlace = async (req, res) => {
    try {
        const { name } = req.body;


        if (!name) {
            return res.status(400).send({
                success: false,
                message: "Missing 'name' in the request body"
            });
        }

        const del = await cartModel.deleteOne({ name });

        if (del.deletedCount === 1) {
            return res.status(200).send({
                success: true,
                message: "Item deleted",
                del
            });
        } else {
            return res.status(404).send({
                success: false,
                message: "Item not found"
            });
        }
    } catch (error) {
        console.error("Error deleting item:", error);
        return res.status(500).send({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });
    }
};