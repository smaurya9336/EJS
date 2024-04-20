const express = require("express");
const app = express();
const path = require("path");

const port = 8081;

app.use(express.static("public/css"));
app.use(express.static("public/js"));
// app.use(path.join(__dirname, "public"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/home", (req, res) => {
  res.send("hello");
});

app.get("/ig/:username", (req, res) => {
  let { username } = req.params;
  const instaData = require("./data.json");

  const data = instaData[username];
  if (data) {
    res.render("instagram.ejs", { data });
  } else {
    res.render("error.ejs");
  }
  // console.log(data);
});

app.get("/rolldice", (req, res) => {
  let diceVal = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice.ejs", { diceVal });
  app.get("/", (req, res) => {
    res.render("home.ejs");
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
