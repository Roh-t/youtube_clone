import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/connectDb.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import authRouter from './route/authRoute.js'
import userRouter from './route/userRoute.js'
import contentRouter from './route/contentRoute.js'

dotenv.config()

const app = express()
app.use(cookieParser())
app.use(express.json())
app.use(cors({
   origin: "https://youtube-clone-blue-tau.vercel.app",
   credentials: true
}))

app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
app.use("/api/content", contentRouter)

app.get("/", (req, res) => {
    res.send("Hello from Server")
})

connectDb() // DB connect karo top level pe, listen ke andar nahi

// Vercel ke liye — app.listen() sirf local development ke liye
if (process.env.NODE_ENV !== "production") {
    const port = process.env.PORT || "https://youtube-clone-12z9.vercel.app"
    app.listen(port, () => {
        console.log("Server Started on", port)
    })
}

export default app  // Vercel isko serverless function jaise use karega