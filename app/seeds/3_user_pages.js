exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("user_page")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("user_page").insert([
        {
          id_criador: 1,
          nome: "Dez mandamentos",
          descricao:
            "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
          midia:
            "https://pm1.narvii.com/6387/9554db725654198ce9cc1dc9d9f8a23e5279861e_hq.jpg",
          tipo: "public"
        },
        {
          id_criador: 2,
          nome: "Sete Pecados Capitais",
          descricao:
            "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
          midia: "https://img.quizur.com/f/img5c03ed1830a1a1.71232469.jpg?lastEdited=1543761190",
          tipo: "public"  
        }
      ]);
    });
};
