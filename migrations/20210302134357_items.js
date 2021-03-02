exports.up = function (knex) {
  return knex.schema.createTable("items", (item) => {
    item.increments("id");
    item.string("item");
    item.decimal("price");
    item.integer("quantity");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("items");
};
