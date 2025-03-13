import express from 'express';
const router = express.Router();
// controllers
import { allUser } from '../controllers/userController.js';
// middlewares
import { verifyToken } from "../middlewares/tokenMiddleware.js";

// user routes
router.get('/all', verifyToken, allUser);

export default router;