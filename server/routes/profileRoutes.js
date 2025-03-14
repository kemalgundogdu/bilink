import express from 'express';
const router = express.Router();
// controller
import { createProfile } from '../controllers/profileController.js';
// middlewares
import { verifyToken } from "../middlewares/tokenMiddleware.js";

router.post('/create', verifyToken, createProfile);

export default router;