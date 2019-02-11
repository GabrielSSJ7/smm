exports.up = function(knex, Promise) {
  return knex.schema.createTable("usuario", table => {
    table.increments("id").primary();
    table.text("nome").notNull();
    table.text("nick").unique();
    table
      .text("email")
      .notNull()
      .unique();
    table.text("password").notNull();
    table.text("foto");
    table.text("sexo");
    table.text("pais");
    table.date("nascimento");
    table.text("estado");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("update_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("usuario");
};
