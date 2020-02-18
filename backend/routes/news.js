var axios = require("axios");
var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
  axios({
    method: "get",
    url: `https://newsapi.org/v2/top-headlines?country=${req.query.country}&category=${req.query.category}&apiKey=${process.env.API_KEY}`
  }).then(function(response) {
    res.json([{ news: response.data }]);
  });
});

module.exports = router;
