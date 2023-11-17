const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors");
const RegisterModel = require("./models/Resister")

const app = express()
app.use(cors({ origin: "http://localhost:3000"}));
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/test")

app.post("/register", (req,res) => {
    const {name,email,password} = req.body;
    RegisterModel.findOne({email: email})
    .then(user => {
        if(user) {
            res.json("Already have an account")
        } else {
            RegisterModel.create({name: name, email:email,password: password })
            .then(result => res.json("Account created"))
            .catch(err => 
                res.json(err))
            }
        }). catch(err => res.json(err))
        })

app.get("/data", function (req, res) {
    res.send("Hello There");
})

app.listen(3001, () => {
    console.log("Server is running at port number 3001");
})