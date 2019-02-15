exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("meme_page")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("meme_page").insert([
        {
          id_criador: 1,
          nome: "Meme do diabo",
          descricao:
            "Vai lá, curte a página quebrando tabu, ninguém vai te achar um viado",
          midia:
            "https://www.tribunapr.com.br/blogs/nao-e-spoiler/wp-content/uploads/sites/56/2018/06/santa-claus.jpg"
        },
        {
          id: 2,
          nome: "Namorado distraido",
          descricao:
            "Namorado distraido olhando gostosa enquanto a namorada dele está ao lado",
          midia: "https://img.quizur.com/f/img5c03ed1830a1a1.71232469.jpg?lastEdited=1543761190"
        }
      ]);
    });
};
