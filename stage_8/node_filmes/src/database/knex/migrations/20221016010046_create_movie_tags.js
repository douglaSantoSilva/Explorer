
exports.up = knex => knex.schema.createTable("movie_tags", table => {
  table.increments("id").primary();
  table.integer("user_id").references("id").inTable("users");
  table.integer("note_id").references("id").inTable("movie_notes").onDelete("CASCADE");
  table.integer("name").notNullable().checkBetween([0, 6]);
})


exports.down = knex => knex.schema.dropTable("movie_tags");