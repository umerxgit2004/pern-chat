import express from "express"
import dotenv from "dotenv"

dotenv.config()
import authRoutes from "../routes/auth.route"
import messageRoute from "../routes/message.route"
const app = express()
const port = 3001

app.use('/api/auth/',authRoutes)
app.use('/api/message/',messageRoute)

app.listen(port,()=>{
    console.log(`localhost:${port}`)
})
export default app