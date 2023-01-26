const express = require("express");
const bodyParser = require('body-parser');
const csv = require('csv-parser');

const port = process.env.PORT || 8080;

const db = require("./config/mongoose");

const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static("./assets"));

// set up the view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// express router
app.use("/", require("./routes/index"));

app.listen(port, function(err) {
    if(err) {
        console.log("Error in running the server ", err);
        return;
    }
    console.log("Server is running at port ", port);
})