const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const compression = require("compression");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(compression());

const adminRoutes = require("./routes/admin");
const audienceRoutes = require("./routes/audience");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(adminRoutes);
app.use(audienceRoutes);

mongoose
  .connect(
    "mongodb+srv://practice2:practice2@practice2.0c70v.mongodb.net/players?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(process.env.PORT || 8000);
  })
  .catch((err) => {
    console.log(err);
  });
