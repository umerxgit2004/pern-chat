import { Router } from "express";
import { login, logout, signup, getMe} from "../controllers/auth.controller";
import protectedRoute from "../src/middleware/protectRoute";

const router = Router()

router.get("/me",protectedRoute,getMe);
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router