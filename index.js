const express = require("express");
const app = express();
const queries = require("./queries");
const port = process.env.PORT || 3002;
const cors = require("cors");

app.use(cors());

app.get("/", (req, res, next) => {
  queries
    .listAllItems()
    .then((items) => res.send(items))
    .catch(next);
});

app.get("/:id", (req, res, next) => {
  queries
    .getItemsById(req.params.id)
    .then((itemById) => res.json(itemById))
    .catch(next);
});

app.post("/", (req, res) => {
  queries.createItem(req.body).then((newItem) => res.json(newItem[0]));
});

app.delete("/:id", (req, res) => {
  queries.deleteItem(req.params.id).then(res.sendStatus(204));
});

app.put("/:id", (req, res) => {
  queries
    .updateItem(req.params.id, req.body)
    .then((updatedItem) => res.json(updatedItem[0]));
});

app.listen(port);
