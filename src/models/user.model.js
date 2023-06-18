const mongoose = require("mongoose")
const schema = new mongoose.Schema

const User = new schema({
    //add columns here
})

module.exports = mongoose.model("User", User)