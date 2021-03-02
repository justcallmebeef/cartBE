const express = require("express");
const app = express();
const queries = require("./queries");
// const morgan = require('morgan')
// const bodyParser  = require('body-parser')
// const cors = require('cors')
const port = process.env.PORT || 3002;

// app.use(morgan(process.env.NODE_ENV !== 'production' ? 'dev' : 'combined'))
// app.use(bodyParser.json())
// app.use(cors())

app.get("/", (req, res) => {
  res.send(queries.listAllItems().then((items) => res.send(items)));
});

app.listen(port);
