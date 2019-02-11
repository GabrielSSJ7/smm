exports.up = function(knex, Promise) {
    return knex.schema.createTable("post_rel_categorias", table => {
      table.increments("id_rel").primary();
      table
        .bigInteger("id_post")
        .unsigned()
        .index()
        .references("id")
        .inTable("post")
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
    return knex.schema.dropTableIfExists("post_rel_categorias");
  };
  