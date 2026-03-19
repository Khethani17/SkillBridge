require("dotenv").config()

const express = require("express")
const connectDB = require("./config/db")
const userRoutes = require("./routes/userRoutes")

const app = express()

connectDB()

app.use(express.json())
app.use("/api", userRoutes)

app.get("/", (req, res) => {
  res.status(200).json({ message: "SkillBridge API is running" })
})

const PORT = 5050

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})