import connectToMongoDb from "./db/dbConnect.js"
import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import userRouter from "./routers/user.routes.js"

const app = express()

dotenv.config({
    path: "./.env"
})

connectToMongoDb()

app.use(cors())
app.use(express.json())

app.use("/api/v1/users", userRouter)


app.listen(process.env.PORT || 8080, () => {
    console.log("Listening at port", process.env.PORT || 8080);
})