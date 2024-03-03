const knex = require("knex");
const { rows } = require("pg/lib/defaults");

const db = knex({
    client: "pg",
    connection: {
      host: "127.0.0.1",
      port: 5433,
      user: "postgres",
      password: "123456",
      database: "book-posts",
    },
});

module.exports = {db}