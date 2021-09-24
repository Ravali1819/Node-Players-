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
const authRoutes = require("./routes/auth");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(adminRoutes);
app.use(audienceRoutes);
app.use(authRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>404 Page not found!</h1>");
});

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
