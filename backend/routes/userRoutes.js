const express = require("express")
const router = express.Router()
const { registerUser, loginUser, getProfile } = require("../controllers/userController")
const protect = require("../middleware/authMiddleware")


router.post("/users", registerUser)
router.post("/users/login", loginUser)
router.get("/users/profile", protect, getProfile)

module.exports = router