const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

const dbConnection = require("./dbConnection");

app.use(cors({
    origin: 'https://crypto-tracker-trend-git-main-isatvikmishras-projects.vercel.app',
    credentials: true
}));

app.use(express.json());



app.use("/api/v1", require("./routes/routes"));

app.listen(3001, () => {
  dbConnection();
  console.log("App is listening");
});
