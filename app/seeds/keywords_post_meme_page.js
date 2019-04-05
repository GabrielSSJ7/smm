
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('keywords_post_meme_page').del()
    .then(function () {
      // Inserts seed entries
      return knex('keywords_post_meme_page').insert([
        {id_post: 1, keyword: 'bebidas'},
        {id_post: 1, keyword: 'mistura'},
        {id_post: 1, keyword: 'hawk'},
        {id_post: 1, keyword: 'invencível'},

        {id_post: 2, keyword: 'diabo'},
        {id_post: 2, keyword: 'gordo'},
        {id_post: 2, keyword: 'burra'},
        {id_post: 2, keyword: 'vai'},

        {id_post: 3, keyword: 'escanor'},
        {id_post: 3, keyword: 'estarossa'},
        {id_post: 3, keyword: 'luta'},
        {id_post: 3, keyword: 'epico'},

        {id_post: 4, keyword: 'otário'},
        {id_post: 4, keyword: 'musicos'},
        {id_post: 4, keyword: 'diabo'},
        {id_post: 4, keyword: 'gritando'},

        {id_post: 5, keyword: 'uber'},
        {id_post: 5, keyword: 'dinheiro'},
        {id_post: 5, keyword: 'gastar'},
        {id_post: 5, keyword: 'crédito'},

        {id_post: 6, keyword: 'ensino'},
        {id_post: 6, keyword: 'faculdade'},
        {id_post: 6, keyword: 'hospício'},
        {id_post: 6, keyword: 'fundamental'},

        {id_post: 7, keyword: 'signos'},
        {id_post: 7, keyword: 'gay'},
        {id_post: 7, keyword: 'mozão'},
        {id_post: 7, keyword: 'libriano'},

        {id_post: 8, keyword: 'open'},
        {id_post: 8, keyword: 'bar'},
        {id_post: 8, keyword: 'festa'},
        {id_post: 8, keyword: 'namorado'},

        {id_post: 9, keyword: 'loja'},
        {id_post: 9, keyword: 'online'},
        {id_post: 9, keyword: 'estabilidade'},
        {id_post: 9, keyword: 'financeira'},

        {id_post: 10, keyword: 'que'},
        {id_post: 10, keyword: 'ele'},
        {id_post: 10, keyword: 'disse'},
        {id_post: 10, keyword: 'carai'},

        {id_post: 11, keyword: 'que'},
        {id_post: 11, keyword: 'ele'},
        {id_post: 11, keyword: 'disse'},
        {id_post: 11, keyword: 'carai'},

        {id_post: 12, keyword: 'responde'},
        {id_post: 12, keyword: 'rápido'},
        {id_post: 12, keyword: 'trouxa'},
        {id_post: 12, keyword: 'dias'},

        {id_post: 13, keyword: 'fitness'},
        {id_post: 13, keyword: 'gordo'},
        {id_post: 13, keyword: 'coxinha'},
        {id_post: 13, keyword: 'pizza'},

        {id_post: 14, keyword: 'piriguete'},
        {id_post: 14, keyword: 'gorda'},
        {id_post: 14, keyword: 'tiro'},
        {id_post: 14, keyword: 'beijos'},

        {id_post: 15, keyword: 'gordice'},
        {id_post: 15, keyword: 'gordo'},
        {id_post: 15, keyword: 'economia'},
        {id_post: 15, keyword: 'comida'},
      ]);
    });
};
