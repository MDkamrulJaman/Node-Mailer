import express from "express";
import { sendEmailController } from "../controllers/sendEmailController.js";

const router = express.Router();



//we should write  http://localhost:8005/register but we have used proxy inside client's package.json that's why we have declared the path just /register

// send mail
router.post("/sendmail", sendEmailController);

export default router;
