const express = require("express");
const router = express.Router();

// Just testing an endpoint called /secure with GET http request
router.get("/secure", (req, res) => {
  res.send("You called a secure route.");
});

const HistoryController = require("../controllers/history.controller");
const historyController = new HistoryController();

// This endpoint will search for history records based on historyId in the HEROKU POSTGRES, with GET http request
router.get("/secure/history/:historyId", historyController.listHistory);

const AdminController = require("../controllers/admin.controller");
const adminController = new AdminController();

// This endpoint will create tables & add records in the HEROKU POSTGRES, with GET http request
router.get("/secure/adminsetup", adminController.setup);

// This endpoint will drop tables in the HEROKU POSTGRES, with GET http request
router.get("/secure/adminreset", adminController.reset);

module.exports = router;
