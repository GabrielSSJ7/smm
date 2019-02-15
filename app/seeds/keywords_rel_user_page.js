
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_page_rel_keywords').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_page_rel_keywords').insert([
        {id_user_page: 1, id_keywords: 8},
        {id_user_page: 1, id_keywords: 9},
        {id_user_page: 1, id_keywords: 10},
        {id_user_page: 2, id_keywords: 11},
        {id_user_page: 2, id_keywords: 12},
        {id_user_page: 2, id_keywords: 13},

      ]);
    });
};
