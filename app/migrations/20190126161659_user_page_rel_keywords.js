
exports.up = function(knex, Promise) {
    return knex.schema.createTable("user_page_rel_keywords", table => {
        table.increments("id_rel").primary();
        table
          .bigInteger("id_user_page")
          .unsigned()
          .index()
          .references("id")
          .inTable("user_page").onDelete('CASCADE').onUpdate('CASCADE');
    
        table
          .bigInteger("id_keywords")
          .unsigned()
          .index()
          .references("id")
          .inTable("keywords").onDelete('CASCADE').onUpdate('CASCADE');
          
        // table.timestamp("created_at").defaultTo(knex.fn.now());
        // table.timestamp("update_at").defaultTo(knex.fn.now());
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("user_page_rel_keywords");
};
