exports.up = function(knex, Promise) {
  return knex.schema.createTable("comments_user_page", table => {
    table.increments("id").primary();
    table
      .bigInteger("id_user")
      .unsigned()
      .index()
      .references("id")
      .inTable("usuario")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    table
      .bigInteger("id_post")
      .unsigned()
      .index()
      .references("id")
      .inTable("post_user_page")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    table.text("comment");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("update_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("comments_user_page");
};
