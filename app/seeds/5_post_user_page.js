
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('post_user_page').del()
    .then(function () {
      // Inserts seed entries
      return knex('post_user_page').insert([
        //1
        {
          id_criador: 1,
          id_user_page: 1,
          titulo: "Hawk > Dez mandamentos",
          descricao: "sobras <3",
          midia: "https://i.pinimg.com/originals/8b/a1/fa/8ba1fa2d110dd8f951f9db2eebe94006.jpg"
        },
        //2
        {
          id_criador: 1,
          id_user_page: 1,
          titulo: "Meme bosta",
          descricao: "Mais forte de todos",
          midia: "http://pm1.narvii.com/6645/1de5b3d34deb5d9af28a9b29cb6cdfe09f9b0c67_00.jpg"
        },
        //3
        {
          id_criador: 2,
          id_user_page: 1,
          titulo: "Esse dia foi loko",
          descricao: "Meme do meme",
          midia: "https://pm1.narvii.com/6339/e9361900df33c51d09f85f8e4229dcdb0ea7e49b_hq.jpg"
        },
        //4
        {
          id_criador: 2,
          id_user_page: 2,
          titulo: "secsu",
          descricao: "suado",
          midia: "http://images7.memedroid.com/images/UPLOADED881/5b1e8cefba220.jpeg"
        },
        //5
        {
          id_criador: 2,
          id_user_page: 2,
          titulo: "Capitão é muito macho",
          descricao: "...",
          midia: "https://i.pinimg.com/originals/9d/6d/14/9d6d144ea549ba014a3f1754eec06e89.jpg"
        },
        //6
        {
          id_criador: 3,
          id_user_page: 2,
          titulo: "Naruto é nutella",
          descricao: "enfia o raio no cu sasuke",
          midia: "https://i.pinimg.com/originals/8b/c1/e0/8bc1e0d8a0fc65cf15b651e8cc84a594.jpg"
        },
        //7
        {
          id_criador: 4,
          id_user_page: 2,
          titulo: "Estudo do amor já",
          descricao: "mais Jesus",
          midia: "https://i.pinimg.com/originals/0f/ae/2f/0fae2fad4af06915748a244fbd859ff8.jpg"
        },
        //8
        {
          id_criador: 4,
          id_user_page: 1,
          titulo: "Maldito ficou lindo",
          descricao: "",
          midia: "https://scontent-amt2-1.cdninstagram.com/vp/81750d6ff7d80ff3438d8bcb7ee238fe/5CEBFD51/t51.2885-15/sh0.08/e35/s640x640/50275490_116673842754849_6493981931024287024_n.jpg?_nc_ht=scontent-amt2-1.cdninstagram.com"
        },
        //9
        {
          id_criador: 5,
          id_user_page: 1,
          titulo: "Hawk tá lindão, admito",
          descricao: "PEC",
          midia: "https://pm1.narvii.com/6719/46b12d79c81d9c41168b0bd5aa499a2b8159e7d5_hq.jpg"
        },
        //10
        {
          id_criador: 5,
          id_user_page: 1,
          titulo: "Estes malditos",
          descricao: "PEC",
          midia: "https://i.pinimg.com/originals/72/50/82/725082d021ca1b11c865c707e0a574ce.jpg"
        },
        //11
        {
          id_criador: 6,
          id_user_page: 1,
          titulo: "ban safadão",
          descricao: "PEC",
          midia: "https://instagram.fvno1-1.fna.fbcdn.net/vp/ed7622083586aaea904cd48664693577/5CDA4DE0/t51.2885-15/e35/51001753_367717637111908_6023294732561121155_n.jpg?_nc_ht=instagram.fvno1-1.fna.fbcdn.net"
        },
        //12
        {
          id_criador: 7,
          id_user_page: 1,
          titulo: "ban fdp",
          descricao: "",
          midia: "https://instagram.fvno1-1.fna.fbcdn.net/vp/ed7622083586aaea904cd48664693577/5CDA4DE0/t51.2885-15/e35/51001753_367717637111908_6023294732561121155_n.jpg?_nc_ht=instagram.fvno1-1.fna.fbcdn.net"
        },
        //13
        {
          id_criador: 8,
          id_user_page: 2,
          titulo: "Aprende ae cuzão",
          descricao: "",
          midia: "https://scontent-frt3-2.cdninstagram.com/vp/195b7ef3bc14423915053ab18d005518/5CF849F5/t51.2885-15/e35/51078419_532139373945922_7138005246089976037_n.jpg?_nc_ht=instagram.fbne2-1.fna.fbcdn.net"
        },
        //14
        {
          id_criador: 9,
          id_user_page: 2,
          titulo: "Boku no secsu",
          descricao: "",
          midia: "https://scontent-sea1-1.cdninstagram.com/vp/ec070f91cf130d554b8529a748183948/5CD60321/t51.2885-15/e35/49332807_771197069922186_2112319717012043802_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&ig_cache_key=MTk0OTM5MTk0NTQyNTc5OTMyMA%3D%3D.2"
        },
        //15
        {
          id_criador: 10,
          id_user_page: 2,
          titulo: "Maldito",
          descricao: "",
          midia: "https://scontent-sea1-1.cdninstagram.com/vp/ec070f91cf130d554b8529a748183948/5CD60321/t51.2885-15/e35/49332807_771197069922186_2112319717012043802_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&ig_cache_key=MTk0OTM5MTk0NTQyNTc5OTMyMA%3D%3D.2"
        }
      ]);
    });
};
