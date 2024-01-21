import express from 'express';
import { signupController, loginController } from '../controller/authController.js';
import { cartController, deletePlace } from '../controller/cartController.js';
import { forgotPassword } from '../controller/forgotPasswordController.js';

const router = express.Router();

router.post("/signup", signupController);
router.post("/login", loginController);
router.post("/addcart", cartController);
router.post("/deleteitem", deletePlace);
router.post("/forgotpassword", forgotPassword);

export default router;