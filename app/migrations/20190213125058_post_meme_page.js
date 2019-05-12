exports.up = function(knex, Promise) {
    return knex.schema.createTable("post_meme_page", table => {
      table.increments("id").primary();
      table
        .bigInteger("id_criador")
        .unsigned()
        .index()
        .references("id")
        .inTable("usuario")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table
        .bigInteger("id_meme_page")
        .unsigned()
        .index()
        .references("id")
        .inTable("meme_page")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table.text("titulo").notNull();
      table.text("descricao");
      table.text("midia").notNull();
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("update_at").defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("post_meme_page");
  };
  