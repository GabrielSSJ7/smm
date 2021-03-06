exports.up = function(knex, Promise) {
    return knex.schema.createTable("categorias_post_user_page", table => {
      table.increments("id").primary();
      table
      .bigInteger("id_post")
      .unsigned()
      .index()
      .references("id")
      .inTable("post_user_page").onDelete('CASCADE').onUpdate('CASCADE');
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("update_at").defaultTo(knex.fn.now());
      table.text("categoria").notNull().collate('Latin1_General_CI_AS');      
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("categorias_post_user_page");
  };
  