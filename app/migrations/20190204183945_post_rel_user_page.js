exports.up = function(knex, Promise) {
  return knex.schema.createTable("post_rel_user_page", table => {
    table.increments("id_rel").primary();
    table
      .bigInteger("id_user_page")
      .unsigned()
      .index()
      .references("id")
      .inTable("user_page")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    table
      .bigInteger("id_post")
      .unsigned()
      .index()
      .references("id")
      .inTable("post")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("update_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("post_rel_user_page");
};
