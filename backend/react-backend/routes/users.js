var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.json([
    { id: 1, username: "Dylan" },
    { id: 2, username: "Emily" }
  ]);
});

/* Add users */
router.post("/", function(req, res, next) {
  console.log(req.body);
  res.json([
    { id: 1, username: "Dylan" },
    { id: 2, username: "Emily" }
  ]);
});

module.exports = router;
