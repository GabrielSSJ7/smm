
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('keywords_post_user').del()
    .then(function () {
      // Inserts seed entries
      return knex('keywords_post_user').insert([
        {id_post: 1, keyword: 'vin'},
        {id_post: 1, keyword: 'diesel'},
        {id_post: 1, keyword: 'bunda'},
        {id_post: 1, keyword: 'olha'},
        {id_post: 2, keyword: 'mozão'},
        {id_post: 2, keyword: 'vagas'},
        {id_post: 2, keyword: 'abertas'},
        {id_post: 3, keyword: 'lula'},
        {id_post: 3, keyword: 'fdp'},
        {id_post: 3, keyword: 'filho'},
        {id_post: 3, keyword: 'puta'},
        {id_post: 4, keyword: 'zoera'},
        {id_post: 4, keyword: 'never'},
        {id_post: 4, keyword: 'ends'},
        {id_post: 5, keyword: 'hitler'},
        {id_post: 5, keyword: 'gás'},
        {id_post: 5, keyword: 'nazismo'},
        {id_post: 6, keyword: 'loli'},
        {id_post: 6, keyword: 'finger'},
        {id_post: 6, keyword: 'nutella'},
        {id_post: 7, keyword: 'bloom'},
        {id_post: 7, keyword: 'winx'},
        {id_post: 7, keyword: 'fada'},
        {id_post: 8, keyword: 'parabéns'},
        {id_post: 8, keyword: 'Gabriel'},
        {id_post: 8, keyword: 'mim'},
        {id_post: 9, keyword: 'Já'},
        {id_post: 9, keyword: 'tenho'},
        {id_post: 9, keyword: 'dono'},
        {id_post: 10, keyword: 'azamiga'},
        {id_post: 10, keyword: 'cigarro'},
        {id_post: 10, keyword: 'cobra'},
        {id_post: 11, keyword: 'eu'},
        {id_post: 11, keyword: 'passado'},
        {id_post: 11, keyword: 'saudades'},
        {id_post: 12, keyword: 'lendo'},
        {id_post: 12, keyword: 'cavalo'},
        {id_post: 12, keyword: 'idiota'},
        {id_post: 13, keyword: 'eu'},
        {id_post: 13, keyword: 'idiota'},
        {id_post: 13, keyword: 'brabas'},
        {id_post: 14, keyword: 'doido'},
        {id_post: 14, keyword: 'maluco'},
        {id_post: 15, keyword: 'doido'},
        {id_post: 15, keyword: 'maluco'},
        {id_post: 15, keyword: 'nicolas'},
        {id_post: 16, keyword: 'gozo'},
        {id_post: 16, keyword: 'porra'},
        {id_post: 17, keyword: 'academia'},
        {id_post: 17, keyword: 'money'},
        {id_post: 17, keyword: 'duro'},
        {id_post: 17, keyword: 'grana'},

        {id_post: 18, keyword: 'gorda'},
        {id_post: 18, keyword: 'money'},
        {id_post: 18, keyword: 'aff'},
        {id_post: 18, keyword: 'to'},

        {id_post: 19, keyword: 'família'},
        {id_post: 19, keyword: 'minha'},
        {id_post: 19, keyword: 'family'},
        {id_post: 19, keyword: 'sobras'},

        
      ]);
    });
};
