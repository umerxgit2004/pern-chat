import { Router } from "express";

const router = Router()
router.get('/message',(req,res)=>{
    res.send("message route")
})
export default router