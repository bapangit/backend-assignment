require("dotenv").config();
var express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");

const port = process.env.PORT || 5000;
var app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/", require("./routes/movie"));

//DB Connect
mongoose.connect(process.env.DB_URL_2).then(
  (res) => {
    console.log("DATABASE CONNECTED SUCCESSFULLY");
    //server
    var server = app.listen(port, function () {
      var host = server.address().address;
      var port = server.address().port;

      console.log("Example app listening at http://%s:%s", host, port);
    });
  },
  (err) => {
    console.log(err);
  }
);
