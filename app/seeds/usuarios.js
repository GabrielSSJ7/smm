exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("usuario")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("usuario").insert([
        {
          nome: "Gabriel Luz",
          nick: "Estarossa",
          email: "gabriel.n64@hotmail.com",
          password: "Sparda11",
          foto:
            "https://i.pinimg.com/736x/e4/31/15/e43115dd2b3fdb409e6808e1cb9353de.jpg?b=t",
          sexo: "m",
          pais: "Brasil",
          estado: "São Paulo"
        },

        {
          nome: "Wesley Alves",
          nick: "meliodas",
          email: "wes.n64@hotmail.com",
          password: "Sparda11",
          foto:
            "https://i.pinimg.com/originals/f3/be/9d/f3be9d65130f5c46d75f99936d8a10cc.jpg",
          sexo: "m",
          pais: "Brasil",
          estado: "São Paulo"
        },

        {
          nome: "Pedro Lacerda",
          nick: "king",
          email: "piter.n64@hotmail.com",
          password: "Sparda11",
          foto:
            "https://i.pinimg.com/originals/24/43/46/244346bbf19e88b886818100955f2812.jpg",
          sexo: "m",
          pais: "Brasil",
          estado: "São Paulo"
        },

        {
          nome: "Victoria Silva",
          nick: "liz",
          email: "vic.n64@hotmail.com",
          password: "Sparda11",
          foto:
            "https://i.pinimg.com/originals/32/ff/6f/32ff6f45d2b2f05ba3a9e028576f123b.jpg",
          sexo: "f",
          pais: "Brasil",
          estado: "São Paulo"
        },

        {
          nome: "Daniela Ferreira",
          nick: "diane",
          email: "dan.n64@hotmail.com",
          password: "Sparda11",
          foto:
            "https://static.zerochan.net/Diane.%28Nanatsu.no.Taizai%29.full.1817142.jpg",
          sexo: "f",
          pais: "Brasil",
          estado: "São Paulo"
        },

        {
          nome: "Bruno Braga",
          nick: "ban",
          email: "bruno.n64@hotmail.com",
          password: "Sparda11",
          foto:
            "https://static.anime21.blog.br/2018/03/CAPA-13.jpg",
          sexo: "m",
          pais: "Brasil",
          estado: "São Paulo"
        },

        {
          nome: "Maria Carol",
          nick: "merlin",
          email: "maria.n64@hotmail.com",
          password: "Sparda11",
          foto:
            "http://combopop.com.br/wp-content/uploads/2018/04/Merlin-1.png",
          sexo: "f",
          pais: "Brasil",
          estado: "São Paulo"
        },

        {
          nome: "Anderson Silva",
          nick: "gowther",
          email: "andsu.n64@hotmail.com",
          password: "Sparda11",
          foto:
            "https://vignette.wikia.nocookie.net/nanatsu-no-taizai/images/a/a5/Gowther_Anime.png/revision/latest?cb=20150209040901",
          sexo: "m",
          pais: "Brasil",
          estado: "São Paulo"
        },

        {
          nome: "Rodrigo Fernandes",
          nick: "escanor",
          email: "capita.n64@hotmail.com",
          password: "Sparda11",
          foto:
            "https://ih1.redbubble.net/image.586446203.9744/pp,550x550.u1.jpg",
          sexo: "m",
          pais: "Brasil",
          estado: "São Paulo"
        },

        {
          nome: "Capitão das Sobras",
          nick: "hawk",
          email: "sobras.n64@hotmail.com",
          password: "Sparda11",
          foto:
            "https://i.ytimg.com/vi/Wuw3A9nnHyU/maxresdefault.jpg",
          sexo: "m",
          pais: "Brasil",
          estado: "São Paulo"
        }
      ]);
    });
};
