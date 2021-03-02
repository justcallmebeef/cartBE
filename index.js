const express = require("express");
const app = express();
const queries = require("./queries");
const port = process.env.PORT || 3002;

app.get("/", (req, res, next) => {
  queries
    .listAllItems()
    .then((items) => res.send(items))
    .catch(next);
});

app.listen(port);
