
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('keywords_rel_memepage').del()
    .then(function () {
      // Inserts seed entries
      return knex('keywords_rel_memepage').insert([
        {id_meme_page: 1, id_keywords:  1},
        {id_meme_page: 1, id_keywords:  2},
        {id_meme_page: 1, id_keywords:  3},
        {id_meme_page: 1, id_keywords:  4},
        {id_meme_page: 2, id_keywords:  5},
        {id_meme_page: 2, id_keywords:  6},
        {id_meme_page: 2, id_keywords:  7}
      ]);
    });
};
