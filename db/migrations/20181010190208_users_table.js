exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments(); // id
    tbl.string("username", 14).notNullable();
    tbl.string("password", 14).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
