const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const ejs = require("ejs");

const payments = require("./routes/payments");
//app.set("views", path.join(__dirname, "views"));
//app.use("views", payments);
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("index");
});

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
