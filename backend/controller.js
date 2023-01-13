const express = require("express");
const User = require("./model")
const Router = express.Router();

Router.post("/signup",async(req,res)=>{
     let email = req.body;
    try {
        let user = await User.findOne(email)
        if(user){
            return res.send("Already Exists")
        }
        let newUser = await User.create(req.body);
        newUser.save();
        return res.send(newUser);
    } catch (error) {
        res.send(error.message)
    }
})

module.exports = Router;
