exports.up = function (knex) {
  return knex.schema
    .createTable("users", (users) => {
      users.increments();
      users.string("username", 255).notNullable().unique();
      users.string("password", 255).notNullable();
    })
    .createTable("jokes", (jokes) => {
      jokes.increments();
      jokes.string("question:").notNullable();
      jokes.string("answer:").notNullable();
    });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("jokes").dropTableIfExists("users");
};
