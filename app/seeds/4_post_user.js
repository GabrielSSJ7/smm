exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("post_user")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("post_user").insert([
        //1
        {
          id_criador: 1,
          titulo: "Sempre acontece",
          descricao: "...",
          midia:
            "https://pics.me.me/quando-voceta-olhando-pra-bunda-deuma-mina-tugosta-eela-olha-13046964.png"
        },
        //2
        {
          id_criador: 1,
          titulo: "Só vem",
          descricao: "A melhor sogra",
          midia:
            "http://static1.purebreak.com.br/articles/1/15/07/1/@/74247-confira-memes-super-engra-ccedil-ados-diapo-1.jpg"
        },
        //3
        {
          id_criador: 1,
          titulo: "Lula filho da puta",
          descricao: "Cuzão filho da puta",
          midia:
            "https://www.tribunapr.com.br/wp-content/uploads/sites/1/2018/07/meme-2-825x707.jpg?a86372"
        },
        //4
        {
          id_criador: 2,
          titulo: "The zoera never ends",
          descricao: "",
          midia:
            "https://static1.squarespace.com/static/5553bd3fe4b031f5910e94a2/t/58d7e6ead2b857f33fb838c1/1490544380645/meme"
        },
        //5
        {
          id_criador: 2,
          titulo: "Partida com gás",
          descricao: "gazeficado",
          midia:
            "https://www.tribunapr.com.br/wp-content/uploads/sites/1/2018/06/meme-alemanha-x-coreia-825x600.jpg?a86372"
        },
        //6
        {
          id_criador: 3,
          titulo: "oni-chan",
          descricao: "GUEI",
          midia:
            "http://images3.memedroid.com/images/UPLOADED174/5b10c5d53db2f.jpeg"
        },
        //7
        {
          id_criador: 3,
          titulo: "QUERO",
          descricao: "_",
          midia:
            "https://i.ytimg.com/vi/XhTsyoPihoI/maxresdefault.jpg"
        },
        //8
        {
          id_criador: 4,
          titulo: "MEU AMÔ",
          descricao: "dedico esta para o meu boy",
          midia:
            "http://memeshappen.com/media/created/2017/01/Happy-Birthday-Gabriel-.jpg"
        },
        //9
        {
          id_criador: 4,
          titulo: "Já tenho dono",
          descricao: "dedico esta para o meu boy",
          midia:
            "http://images3.memedroid.com/images/UPLOADED203/5926f96bb023d.jpeg"
        },
        //10
        {
          id_criador: 5,
          titulo: "AZAMIGA",
          descricao: "",
          midia:
            "https://www.memes-in.com/memes/img/memes-in56bb425db4561080dd26c7a917deff85.jpeg"
        },
        //11
        {
          id_criador: 6,
          titulo: "Eu no passado",
          descricao: "Saduades --'",
          midia:
            "https://i.ytimg.com/vi/q7mfpNXz02k/hqdefault.jpg"
        },
        //12
        {
          id_criador: 6,
          titulo: "Eu lendo",
          descricao: "Gosto muito",
          midia:
            "http://s2.glbimg.com/8UVa8-Uz-_WwSxofGMEbN1Jqrmn4cQsvK55PQuERN6xIoz-HdGixxa_8qOZvMp3w/s.glbimg.com/jo/g1/f/original/2012/10/31/horsehead2.jpg"
        },
        //13
        {
          id_criador: 7,
          titulo: "Eu sou idiota",
          descricao: "Das brabas",
          midia:
            "http://s2.glbimg.com/8UVa8-Uz-_WwSxofGMEbN1Jqrmn4cQsvK55PQuERN6xIoz-HdGixxa_8qOZvMp3w/s.glbimg.com/jo/g1/f/original/2012/10/31/horsehead2.jpg"
        },
        //14
        {
          id_criador: 7,
          titulo: "Verdade, eu por exemplo",
          descricao: ":(",
          midia:
            "https://media.makeameme.org/created/tu-ta-doido.jpg"
        },
        //15
        {
          id_criador: 8,
          titulo: "Eu hoje",
          descricao: ":)",
          midia:
            "https://www.meme-arsenal.com/memes/8c7b962dedfdea958edee3a38d006b4b.jpg"
        },
        //16
        {
          id_criador: 8,
          titulo: "Eu hoje",
          descricao: ":)",
          midia:
            "https://i.redd.it/58jxni6r68ny.jpg"
        },
        //17
        {
          id_criador: 9,
          titulo: "Tá foda viver",
          descricao: "no money",
          midia:
            "https://pics.me.me/quando-voce-checa-na-academia-tugust-mensalidadeatrasada-aqui-tem-coragem-16615970.png"
        },
        //18
        {
          id_criador: 9,
          titulo: "To gorda aff",
          descricao: "no money",
          midia:
            "https://img.r7.com/images/2016/04/07/gkn0pu3ke_49fpfc83o0_file"
        },
        //19
        {
          id_criador: 10,
          titulo: "Eu e minha família",
          descricao: "Sobras <3",
          midia:
            "https://i.ytimg.com/vi/yua-rx6bWFo/maxresdefault.jpg"
        },
      ]);
    });
};
