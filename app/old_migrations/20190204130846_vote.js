exports.up = function(knex, Promise) {
  return knex.schema.createTable("vote", table => {
    table.increments("id").primary();
    table
      .bigInteger("id_user")
      .unsigned()
      .index()
      .references("id")
      .inTable("usuario")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .unique();
      table
      .bigInteger("id_post")
      .unsigned()
      .index()
      .references("id")
      .inTable("post").onDelete('CASCADE').onUpdate('CASCADE');
      table.integer("up");
      table.integer("down");
      table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("update_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("vote");
};
