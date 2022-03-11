const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController")

router.get("/", (req, res) => {
    res.send("home page")
})

router.post("/users", userController.user_create)
router.post("/users/login", userController.user_login)

module.exports = router;