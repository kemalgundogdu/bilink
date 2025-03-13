import express from 'express';
const router = express.Router();
// controllers
import { register, login, refresh, logout } from '../controllers/authController.js';

// auth routes
router.post('/register', register);
router.post('/login', login);
router.post('/refresh', refresh);
router.post('/logout', logout);

export default router;