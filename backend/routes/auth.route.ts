import { Router } from "express";
import { login, logout, signup } from "../controllers/auth.controller";

const router = Router()

// router.get("/me", protectRoute, getMe);
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router