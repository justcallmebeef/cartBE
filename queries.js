const database = require("./database-connection");

module.exports = {
  listAllItems() {
    return database("items");
  },
  getItemsById(id) {
    return database("items").where("id", id).first();
  },
  createItem(item) {
    return database("items").insert(item).returning("*");
  },
  deleteItem(id) {
    return database("items").where("id", id).delete();
  },
  updateItem(id, item) {
    return database("items").where("id", id).update(item).returning("*");
  },
};
