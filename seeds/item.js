exports.seed = function (knex) {
  return knex("items")
    .del()
    .then(function () {
      return knex("items").insert([
        {
          item: "bread",
          price: "2.99",
          quantity: 27,
        },
        {
          item: "eggs",
          price: ".99",
          quantity: 15,
        },
        {
          item: "milk",
          price: "5.99",
          quantity: 7,
        },
      ]);
    });
};
