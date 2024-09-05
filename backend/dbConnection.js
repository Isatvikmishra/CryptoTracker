const mongoose = require("mongoose");

const uri =
  "mongodb+srv://satvik:7VbWHwvO7SUhxUwt@cluster0.avjap.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

function dbConnection() {
  mongoose
    .connect(uri)
    .then((response) => {
      console.log("DB CONNECT SUCCESS");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = dbConnection;
