const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const RegisterSchema = new Schema({
    name: String,
    email: String,
    password: String
});

const RegisterModel = mongoose.model("register", RegisterSchema);

module.exports = RegisterModel;