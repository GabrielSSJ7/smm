exports.up = function(knex, Promise) {
  return knex.schema.createTable("keywords", table => {
    table.increments("id").primary();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("update_at").defaultTo(knex.fn.now());
    table.text("keyword").notNull().collate('Latin1_General_CI_AS');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("keywords");
};
