exports.up = function(knex, Promise) {
  return knex.schema.createTable("meme_page", table => {
    table.increments("id").primary();
    table
      .bigInteger("id_criador")
      .unsigned()
      .index()
      .references("id")
      .inTable("usuario");
    table.text("nome").notNull();
    table.text("descricao");
    table.text("midia").notNull();
    table.string("mediaType").notNull().defaultTo('image');
    table.integer("categorias");
    table.integer("keywords");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("update_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("meme_page");
};
