import { Router } from "express";
import protectedRoute from "../src/middleware/protectRoute";
import { sendMessage, getMessage, getUsersForSidebar} from "../controllers/message.controller";

const router = Router()

router.get("/conversations",protectedRoute,getUsersForSidebar)
router.get("/:id",protectedRoute,getMessage)
router.post("/send/:id",protectedRoute,sendMessage)
export default router