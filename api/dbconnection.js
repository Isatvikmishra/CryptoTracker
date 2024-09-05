const mongoose = require("mongoose");

const uri =

  "srv://satvik:7VbWHwvO7SUhxUwt@cluster0.avjap.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose;

function dbConnection() {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("DB Connected");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = dbConnection;