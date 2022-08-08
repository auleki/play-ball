import express from 'express';
import { login, logout, register } from "../controllers/auth.js";

const router = express.Router();

router.get("/login", login);
router.get("/logout", logout);
router.post("/register", register);

export default router;