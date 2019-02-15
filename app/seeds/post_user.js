exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("post_user")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("post_user").insert([
        {
          id_criador: 1,
          titulo: "Sempre acontece",
          descricao: "...",
          midia:
            "https://pics.me.me/quando-voceta-olhando-pra-bunda-deuma-mina-tugosta-eela-olha-13046964.png"
        },
        {
          id_criador: 1,
          titulo: "Só vem",
          descricao: "A melhor sogra",
          midia:
            "http://static1.purebreak.com.br/articles/1/15/07/1/@/74247-confira-memes-super-engra-ccedil-ados-diapo-1.jpg",
        },
        {
          id_criador: 1,
          titulo: "Lula filho da puta",
          descricao: "Cuzão filho da puta",
          midia:
            "https://www.tribunapr.com.br/wp-content/uploads/sites/1/2018/07/meme-2-825x707.jpg?a86372",
        },

        {
          id_criador: 2,
          titulo: "Lula filho da puta",
          descricao: "Cuzão filho da puta",
          midia:
            "https://www.tribunapr.com.br/wp-content/uploads/sites/1/2018/07/meme-2-825x707.jpg?a86372",
        },
      ]);
    });
};
