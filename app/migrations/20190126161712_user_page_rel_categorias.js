exports.up = function(knex, Promise) {
  return knex.schema.createTable("user_page_rel_categorias", table => {
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
      .bigInteger("id_categorias")
      .unsigned()
      .index()
      .references("id")
      .inTable("categorias")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

  
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("user_page_rel_categorias");
};
