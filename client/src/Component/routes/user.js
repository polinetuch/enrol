const express = require("express");
const router = express.Router();
const User = require("../database/user");
const passport = require("../passport");

router.post("/", (req, res) => {
    console.log("User signup");

    const { username, password} = req.body;

    // Add validation
    User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log("User.js post error: ", err);
        } 
        
        else if (user) {
            res.json({
                error: `Sorry, username is unavailable: ${username}`
            })
        }
    })
})