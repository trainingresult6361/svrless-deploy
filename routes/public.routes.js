const express = require("express");
const router = express.Router();

// Just testing an endpoint called /public with GET http request
router.get("/public", (req, res) => {
  res.send("You called a public route.");
});

// Referencing to our ORM mapping of model book
const Book = require("../models/book");

// This endpoint will fetch all books records in the HEROKU POSTGRES, with GET http request
router.get("/public/books", async (req, res) => {
  res.send(await Book.findAll());
});

module.exports = router;
