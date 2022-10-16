
exports.up = knex => knex.schema.createTable("users", table => {
  table.increments("id").primary();
  table.text("name").notNullable();
  table.text("email").unique().notNullable();
  table.text("password").notNullable();
  table.text("avatar")
  table.text("created_at").default(knex.fn.now())
  table.text("updated_at").default(knex.fn.now())
})


exports.down = knex => knex.schema.dropTable("users");
