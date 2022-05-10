// index.js inside routes initiates our app

const express = require("express");
const app = express();

// Middleware - so we can read/write in JSON
// Middlewares need to in the early segment of the code, in order for it to work for the rest of the code, using the middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Library!");
});

// These are our 2 main routers, which will split again later

const secureRoutes = require("./secure.routes");
const publicRoutes = require("./public.routes");

app.use(secureRoutes);
app.use(publicRoutes);

module.exports = app;
