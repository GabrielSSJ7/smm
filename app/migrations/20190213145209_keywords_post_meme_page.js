exports.up = function(knex, Promise) {
    return knex.schema.createTable("keywords_post_meme_page", table => {
      table.increments("id").primary();
      table
      .bigInteger("id_post")
      .unsigned()
      .index()
      .references("id")
      .inTable("post_meme_page").onDelete('CASCADE').onUpdate('CASCADE');
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("update_at").defaultTo(knex.fn.now());
      table.text("keyword").notNull().collate('Latin1_General_CI_AS');      
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("keywords_post_meme_page");
  };
  