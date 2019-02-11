exports.up = function(knex, Promise) {
  return knex.schema.createTable("keywords_rel_memepage", table => {
    table.increments("id_rel").primary();
    table
      .bigInteger("id_meme_page")
      .unsigned()
      .index()
      .references("id")
      .inTable("meme_page").onDelete('CASCADE').onUpdate('CASCADE');

    table
      .bigInteger("id_keywords")
      .unsigned()
      .index()
      .references("id")
      .inTable("keywords").onDelete('CASCADE').onUpdate('CASCADE');
      
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("update_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("keywords_rel_memepage");
};
