// Jai Shri Ram, Har Har Mahadev, Hare Krishna

const express = require("express");
const app = express();
const server = require("http").Server(app);
const { v4: uuid } = require("uuid");

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.redirect(`/${uuid()}`);
});

app.get("/:room", (req, res) => {
  res.render("room", { roomId: req.params.room });
});

server.listen(5000);
