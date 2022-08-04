require("dotenv").config({
  path: "../.env.local",
});

module.exports = {
  development: {
    client: "pg",
    connection: {
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    migrations: {
      // have to be in db to create migrations
      directory: "./knex/migrations",
    },
    seeds: { directory: "./knex/seeds" },
  },
  production: {
    client: "pg",
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    },
    migrations: {
      directory: "./knex/migrations",
    },
    seeds: {
      directory: "./knex/seeds",
    },
  },
};
