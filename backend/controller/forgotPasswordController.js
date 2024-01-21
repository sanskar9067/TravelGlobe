import userModel from "../models/userModel.js";

export const forgotPassword = async (req, res) => {
    try {
        const { email, password } = req.body;
        const passchange = await userModel.findOneAndUpdate({ email: email }, { $set: { password: password } }, { new: false });
        console.log(passchange);
        if (passchange) {
            return res.status(201).send({
                success: true,
                message: "Password Changed"
            });
        } else {
            return res.status(404).send({
                success: false,
                message: "User not found or password not updated"
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send({
            success: false,
            message: "Internal Server Error"
        });
    }
};
