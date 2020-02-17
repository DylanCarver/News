var axios = require("axios");
var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
  // GET request for remote image
  axios({
    method: "get",
    /*
    @TODO: setup category passed from query to be passed through to api
    url: `https://newsapi.org/v2/top-headlines?country=${req.query.country}${req
      .query.category && "&" + req.query.category}&apiKey=${
      process.env.API_KEY
    }`
    */
    url: `https://newsapi.org/v2/top-headlines?country=${req.query.country}&apiKey=${process.env.API_KEY}`
  }).then(function(response) {
    res.json([{ news: response.data }]);
  });
});

module.exports = router;
