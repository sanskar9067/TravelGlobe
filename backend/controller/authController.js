import userModel from "../models/userModel.js";
import JWT from 'jsonwebtoken';

export const signupController = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(200).send({
                success: false,
                message: "Enter all details"

            });
        }

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(200).send({
                success: false,
                message: "User alresy exist"
            });
        }


        const userData = await new userModel({ name, email, password }).save();

        res.status(201).send({
            success: true,
            message: 'User Registered Successfully',
            userData
        });
    }
    catch (err) {
        console.log(err);
    }
};

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: "Fill all the details"
            });
        }

        const loggedUser = await userModel.findOne({ email });
        console.log(loggedUser);

        if (password !== loggedUser.password) {
            return res.status(404).send({
                success: false,
                message: "Incorrect Password"
            })
        }
        const secretkey = "HDBUSBONINSON";
        const token = JWT.sign({ _id: loggedUser._id }, secretkey, { expiresIn: "7d" });
        console.log(token);
        return res.status(200).send({
            success: true,
            message: "Logged In Successfully",
            token
        });

    }
    catch (err) {
        console.log(err);
    }
}


