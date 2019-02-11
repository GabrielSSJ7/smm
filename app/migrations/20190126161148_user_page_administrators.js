exports.up = function(knex, Promise) {
  return knex.schema.createTable("user_page_administrators", table => {
    table.increments("id").primary();
    table
      .bigInteger("id_user_page")
      .unsigned()
      .index()
      .references("id")
      .inTable("user_page")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    table
      .bigInteger("id_user_admin")
      .unsigned()
      .index()
      .references("id")
      .inTable("usuario")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("update_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("user_page_administrators");
};
