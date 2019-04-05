
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('keywords_post_user_page').del()
    .then(function () {
      // Inserts seed entries
      return knex('keywords_post_user_page').insert([
        {id_post: 1, keyword: 'dez'},
        {id_post: 1, keyword: 'hawk'},
        {id_post: 1, keyword: 'mandamentos'},
        {id_post: 1, keyword: 'sobras'},

        {id_post: 2, keyword: 'meme'},
        {id_post: 2, keyword: 'bosta'},
        {id_post: 2, keyword: 'meliodas'},
        {id_post: 2, keyword: 'forte'},
        
        {id_post: 3, keyword: 'escanor'},
        {id_post: 3, keyword: 'estarossa'},
        {id_post: 3, keyword: 'dia'},
        {id_post: 3, keyword: 'louco'},

        {id_post: 4, keyword: 'elizabeth'},
        {id_post: 4, keyword: 'sexo'},
        {id_post: 4, keyword: 'meliodas'},
        {id_post: 4, keyword: 'gostoso'},

        {id_post: 5, keyword: 'capitão'},
        {id_post: 5, keyword: 'macho'},
        {id_post: 5, keyword: 'king'},
        {id_post: 5, keyword: 'elizabeth'},

        {id_post: 6, keyword: 'gil'},
        {id_post: 6, keyword: 'thunder'},
        {id_post: 6, keyword: 'nutella'},
        {id_post: 6, keyword: 'naruto'},

        {id_post: 7, keyword: 'amor'},
        {id_post: 7, keyword: 'casal'},
        {id_post: 7, keyword: 'Jesus'},
        {id_post: 7, keyword: 'marreco'},

        {id_post: 8, keyword: 'rei'},
        {id_post: 8, keyword: 'lindo'},
        {id_post: 8, keyword: 'demonio'},
        {id_post: 8, keyword: 'meliodas'},

        {id_post: 9, keyword: 'maldito'},
        {id_post: 9, keyword: 'lindo'},
        {id_post: 9, keyword: 'hawk'},
        {id_post: 9, keyword: 'merlin'},

        {id_post: 10, keyword: 'malditos'},
        {id_post: 10, keyword: 'ban'},
        {id_post: 10, keyword: 'king'},
        {id_post: 10, keyword: 'acostumado'},

        {id_post: 11, keyword: 'ban'},
        {id_post: 11, keyword: 'safado'},
        {id_post: 11, keyword: 'general'},
        {id_post: 11, keyword: 'mourao'},

        {id_post: 12, keyword: 'ban'},
        {id_post: 12, keyword: 'fdp'},
        {id_post: 12, keyword: 'cuzão'},
        {id_post: 12, keyword: 'mourao'},

        {id_post: 13, keyword: 'sete'},
        {id_post: 13, keyword: 'pecados'},
        {id_post: 13, keyword: 'capitais'},
        {id_post: 13, keyword: 'ira'},

        {id_post: 14, keyword: 'boku'},
        {id_post: 14, keyword: 'pico'},
        {id_post: 14, keyword: 'meliodas'},
        {id_post: 14, keyword: 'yaoi'},

        {id_post: 15, keyword: 'boku'},
        {id_post: 15, keyword: 'pico'},
        {id_post: 15, keyword: 'meliodas'},
        {id_post: 15, keyword: 'yaoi'},
      ]);
    });
};
