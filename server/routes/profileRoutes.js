import express from 'express';
const router = express.Router();
// controller
import { createProfile, oneProfile } from '../controllers/profileController.js';
// middlewares
import { verifyToken } from "../middlewares/tokenMiddleware.js";

router.post('/create', verifyToken, createProfile);
router.get('/:username', oneProfile);

export default router;