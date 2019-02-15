exports.up = function(knex, Promise) {
  return knex.schema.createTable("post", table => {
    table.increments("id").primary();
    table
      .bigInteger("id_criador")
      .unsigned()
      .index()
      .references("id")
      .inTable("usuario")
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
    return knex.schema.dropTable("post");
};
