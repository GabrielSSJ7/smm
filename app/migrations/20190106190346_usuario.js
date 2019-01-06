
exports.up = function(knex, Promise) {
    return knex.schema.createTable("usuario", table => {
        table.increments("id").primary();
        table.text("nome").notNull();
        table.text("email").notNull().unique();
        table.text("password").notNull();
        table.text("sexo");
        table.text("pais");
        table.date("nascimento");
        table.text("estado");
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('usuario');
};
