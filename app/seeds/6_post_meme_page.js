
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('post_meme_page').del()
    .then(function () {
      // Inserts seed entries
      return knex('post_meme_page').insert([
        //1
        {
          id_criador: 1,
          id_meme_page: 1,
          titulo: "Vai lá mistura as bebidas",
          descricao: "",
          midia: "https://i.pinimg.com/originals/8b/a1/fa/8ba1fa2d110dd8f951f9db2eebe94006.jpg"
        },
        //2
        {
          id_criador: 1,
          id_meme_page: 1,
          titulo: "Engorda burro ",
          descricao: "",
          midia: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEA5q4tWN8vhueMFONeWs8WrAi2fNjG4WYw-_xS64kBsjwHwJG"
        },
        //3
        {
          id_criador: 2,
          id_meme_page: 1,
          titulo: "Para todas as vacas da sauce",
          descricao: "",
          midia: "https://pm1.narvii.com/6339/e9361900df33c51d09f85f8e4229dcdb0ea7e49b_hq.jpg"
        },
        //4
        {
          id_criador: 2,
          id_meme_page: 1,
          titulo: "Otários",
          descricao: "",
          midia: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiOQxCB73kute0yaiZQmpHfX_PxkBaQihlwOpgOdJM3iOUdrzB"
        },
        //5
        {
          id_criador: 2,
          id_meme_page: 1,
          titulo: "Uber bosta em",
          descricao: "...",
          midia: "https://scontent-sea1-1.cdninstagram.com/vp/59863e40fe03a3bb795896f80ac5fb6b/5C748B8B/t51.2885-15/e35/42463687_236944040334711_2958297292477662043_n.jpg?se=7&ig_cache_key=MTg3ODM3MzEzNTgxMDQ5MDQ0Mg%3D%3D.2"
        },
        //6
        {
          id_criador: 3,
          id_meme_page: 2,
          titulo: "Nunca curti",
          descricao: "Escola é o caraio",
          midia: "https://static.imagemwhats.com.br/content/assetz/uploads/2017/08/meme-eu-namorado-distraido-estudando.jpg"
        },
        //7
        {
          id_criador: 4,
          id_meme_page: 2,
          titulo: "Quem gosta de signos é guei",
          descricao: "falo memo",
          midia: "https://static.amomensagens.com.br/content/assetz/uploads/2018/10/069-mensagens-para-namorado-meme-dos-signos-do-namorado-distraido-libriano-libra-frase-.jpg"
        },
        //8
        {
          id_criador: 4,
          id_meme_page: 2,
          titulo: "Beberrrr",
          descricao: "",
          midia: "https://static.imagemwhats.com.br/content/assetz/uploads/2017/08/meme-eu-festa-open-bar.jpg"
        },
        //9
        {
          id_criador: 5,
          id_meme_page: 2,
          titulo: "Sempre gasto toda a grana",
          descricao: "Preciso parar com isso",
          midia: "https://static.imagemwhats.com.br/content/assetz/uploads/2017/08/meme-namorado-distraido-lojinhas-on-line.jpg"
        },
        //10
        {
          id_criador: 5,
          id_meme_page: 1,
          titulo: "Hoje o meme é diferente carai",
          descricao: "Ele disse \"Bolsonaro 2022\"",
          midia: "https://i.ytimg.com/vi/zdVlsHLd_x8/maxresdefault.jpg"
        },
        //11
        {
          id_criador: 6,
          id_meme_page: 1,
          titulo: "Cu de cachorro",
          descricao: "Ele caga e não suja o brioco",
          midia: "http://www.sensacionalista.com.br/wp-content/uploads/2018/07/5-1.jpg"
        },
        //12
        {
          id_criador: 7,
          id_meme_page: 1,
          titulo: "trouxa",
          descricao: "ps: eu faço isso",
          midia: "http://www.sensacionalista.com.br/wp-content/uploads/2018/07/9-1.jpg"
        },
        //13
        {
          id_criador: 8,
          id_meme_page: 2,
          titulo: "Gordo pakas",
          descricao: "churrasco de gato",
          midia: "https://static.imagemwhats.com.br/content/assetz/uploads/2017/08/meme-eu-ser-fitness.jpg"
        },
        //14
        {
          id_criador: 9,
          id_meme_page: 1,
          titulo: "Você sua piriguete",
          descricao: "gorda",
          midia: "https://blogcagueipravida.com/wp-content/gallery/o-capeta-me-disse/cpt2.jpg"
        },
        //15
        {
          id_criador: 10,
          id_meme_page: 1,
          titulo: "Gordice > economia",
          descricao: "",
          midia: "https://cdn.dopl3r.com/memes_files/naza-atnazareamarga-vai-la-gasta-seu-dinheiro-com-comida-sim-nao-passa-vontade-NGgYR.jpg"
        }
      ]);
    });
};
