exports.up = function(knex, Promise) {
    return knex.schema.createTable("subscribe_meme_page", table => {
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
        .bigInteger("id_page")
        .unsigned()
        .index()
        .references("id")
        .inTable("meme_page")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("update_at").defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable("subscribe_meme_page");
  };
  