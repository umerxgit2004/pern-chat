import jwt from "jsonwebtoken"
import { Response } from "express"

export const generateToken = (userId : String, res:Response)=>{
    const Token = jwt.sign({userId},process.env.JWT_SECRET!,{
        expiresIn : "15d"
    })
    res.cookie("jwt",Token, {
        maxAge : 15*24*60*60*1000,
        httpOnly : true,
        sameSite : "strict",
        secure : process.env.Node_env !== "development"
    })
    return  Token
}