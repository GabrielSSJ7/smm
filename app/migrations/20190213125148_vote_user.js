exports.up = function(knex, Promise) {
    return knex.schema.createTable("vote_user", table => {
      table.increments("id").primary();
      table
        .bigInteger("id_user")
        .unsigned()
        .index()
        .references("id")
        .inTable("usuario")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        table
        .bigInteger("id_post")
        .unsigned()
        .index()
        .references("id")
        .inTable("post_user").onDelete('CASCADE').onUpdate('CASCADE');
        table.integer("up");
        table.integer("down");
        table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("update_at").defaultTo(knex.fn.now());
    });
  }; 
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists("vote_user");
  };
  