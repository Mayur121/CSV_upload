//IMPORTING PACKAGE
const mongoose = require("mongoose");

mongoose.set('strictQuery', false);
// Setting the mongoose connection
mongoose.connect("mongodb+srv://im_mayur:m1a2y3u4r5@cluster0.7nnqhvn.mongodb.net/?retryWrites=true&w=majority");


//setting it to db
const db = mongoose.connection;

// Check connection
//if any error occurs
db.on("error", console.error.bind(console, "Error in connecting to Database"));

// if db is connected successfully
db.once("open", function(){
    console.log("Successfully connected to Database");
});

module.exports = db;