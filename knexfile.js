module.exports = {
  development: {
    client: "pg",
    connection: "postgresql://localhost/cart",
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
  },
};
