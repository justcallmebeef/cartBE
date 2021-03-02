const database = require("./database-connection");

module.exports = {
  listAllItems() {
    return database("items");
  },
};
