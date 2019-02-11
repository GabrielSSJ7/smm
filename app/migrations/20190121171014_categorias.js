exports.up = function(knex, Promise) {
  return knex.schema.createTable("categorias", table => {
    table.increments("id").primary();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("update_at").defaultTo(knex.fn.now());
    table.text("categoria").notNull();

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("categorias");
};
