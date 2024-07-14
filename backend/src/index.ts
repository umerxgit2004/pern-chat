import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

dotenv.config()
import authRoutes from "../routes/auth.route"
import messageRoute from "../routes/message.route"
const app = express()
app.use(express.json())
app.use(cookieParser())

const port = 3001

app.use('/api/auth/',authRoutes)
app.use('/api/message/',messageRoute)

app.get('/test',(req,res)=>{
    console.log("request is working")
})
app.listen(port,()=>{
    console.log(`localhost:${port}`)
})
export default app