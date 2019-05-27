const bcrypt = require("bcrypt-nodejs");
const { authSecret } = require("../../.env");
const jwt = require("jwt-simple");
const fs = require("fs");
const path = './components/categorias.json';

module.exports = app => {
    const {
        existsOrError,
        notExistsOrError,
        equalsOrError,
        validateEmail
      } = app.components.validation;


        /* BUSCAR POST PELAS PÁGINAS
   *
   *  page_type (meme_page, user_page, user) -> string
   *  page_id -> int
   *  orderby -> (upvote, created_at) string
   *  desc_asc -> (desc, asc) string
   *
   */

  const searchByPage = async (req, res) => {
    const data = req.body || null;
    const order = req.body.order || null;
    const desc_asc = req.body.desc_asc || null;

    let sql = "";
    switch (data.page_type) {
      case "meme_page":
        sql = `SELECT DISTINCT 
        post_meme_page.titulo, post_meme_page.descricao, post_meme_page.midia, post_meme_page.created_at,
        count(vote_meme_page.up) as upvote, count(vote_meme_page.down) as downvote
        FROM post_meme_page JOIN vote_meme_page ON post_meme_page.id = vote_meme_page.id_post WHERE id_meme_page = ${
          data.page_id
        }
        GROUP BY post_meme_page.titulo, post_meme_page.descricao, post_meme_page.midia, post_meme_page.created_at
        ORDER BY ${order} ${desc_asc}`;
        app.db
          .raw(sql)
          .then(result => {
            return res.json(result.rows);
          })
          .catch(erro => {
            return res.send(erro);
          });
        break;

      case "user_page":
        sql = `SELECT DISTINCT 
        post_user_page.titulo, post_user_page.descricao, post_user_page.midia, post_user_page.created_at,
        count(vote_user_page.up) as upvote, count(vote_user_page.down) as downvote
        FROM post_user_page JOIN vote_user_page ON post_user_page.id = vote_user_page.id_post WHERE id_user_page = ${
          data.page_id
        }
        GROUP BY post_user_page.titulo, post_user_page.descricao, post_user_page.midia, post_user_page.created_at
        ORDER BY ${order} ${desc_asc}`;
        app.db
          .raw(sql)
          .then(result => {
            return res.json(result.rows);
          })
          .catch(erro => {
            return res.send(erro);
          });
        break;

      case "user":
        sql = `SELECT DISTINCT 
        post_user.titulo, post_user.descricao, post_user.midia, post_user.created_at,
        count(vote_user.up) as upvote, count(vote_user.down) as downvote
        FROM post_user JOIN vote_user ON post_user.id = vote_user.id_post WHERE id_criador = ${
          data.page_id
        }
        GROUP BY post_user.titulo, post_user.descricao, post_user.midi
        a, post_user.created_at
        ORDER BY ${order} ${desc_asc}`;
        app.db
          .raw(sql)
          .then(result => {
            return res.json(result.rows);
          })
          .catch(erro => {
            return res.send(erro);
          });
        break;
    }
  };

  /* BUSCAR POST BARRA DE PESQUISA
   *
   *  page_type
   *  page_id
   *
   */

  const searchBar = async (req, res) => {
    const searchWords = req.query.search_query || null;

    const order = req.body.order || null;
    let orderBy = "";

    const token = req.body.token || null;
    let user = null;
    if(token != null) { user = jwt.decode(token, authSecret);}

    let arrayWithWords = searchWords.split(/(?= )/);
    

    switch (order) {
      case "upvote":
        orderBy = " ORDER BY upvote DESC";
        break;

      case "new":
        orderBy = " ORDER BY created_at ASC";
        break;

      default:
        orderBy = " ORDER BY upvote DESC";
        break;
    }

    /* USER PAGE */
    let userPageResult = [];
    let a = 0;
    let sqlUserPageQuery =
      `SELECT DISTINCT 
      user_page.midia as page_midia, user_page.nome as page_name, user_page.id as page_id, post_user_page."mediaType", 
      post_user_page.titulo, post_user_page.descricao, post_user_page.midia, post_user_page.id, post_user_page.id_user_page, 
      (SELECT up FROM vote_user_page where id_user = ${user ? user.id : null} and id_post = post_user_page.id) as up_on,
      (SELECT down FROM vote_user_page where id_user = ${user ? user.id : null} and id_post = post_user_page.id) as down_on,
      (SELECT count(comment) as comments FROM comments_user_page WHERE id_post = post_user_page.id),
      (SELECT count(up) FROM vote_user_page where id_post = post_user_page.id) as upvote,
      (SELECT count(view_user_page.id) as view FROM view_user_page WHERE id_post = post_user_page.id) as view,
      post_user_page.created_at, usuario.nick, usuario.foto FROM post_user_page   
      full JOIN user_page ON post_user_page.id_user_page = user_page.id 
      full JOIN comments_user_page ON post_user_page.id = comments_user_page.id_post 
      full JOIN usuario ON post_user_page.id_criador = usuario.id 
      full JOIN keywords_post_user_page ON post_user_page.id = keywords_post_user_page.id_post 
      full JOIN vote_user_page ON post_user_page.id = vote_user_page.id_post  `;
    a = 0;

    let sqlUserPageQueryWhere = "WHERE keywords_post_user_page.keyword IN (";

    while (a < arrayWithWords.length) {
      if (a == arrayWithWords.length - 1) {
        sqlUserPageQueryWhere += `'${arrayWithWords[a]}'`;
      } else {
        sqlUserPageQueryWhere += `'${arrayWithWords[a]}',`;
      }
      a++;
    }

    sqlUserPageQueryWhere += ")";

    sqlUserPageQueryWhere +=
      " GROUP BY post_user_page.\"mediaType\", post_user_page.titulo, usuario.nick, usuario.foto, post_user_page.descricao, post_user_page.id, post_user_page.id_user_page,post_user_page.midia, keywords_post_user_page.keyword, post_user_page.created_at, user_page.nome,user_page.id  " +
      orderBy;
   //console.log("searchBar:UserPage => ", `${sqlUserPageQuery}${sqlUserPageQueryWhere}`);
    await app.db
      .raw(sqlUserPageQuery + sqlUserPageQueryWhere)
      .then(async result => {
        if (result.rows.length > 0) {
          result.rows.forEach(element => {
            return (element.type = "up");
          });
          userPageResult = result.rows;
        } else {
          a = 0;
          sqlUserPageQueryWhere = "WHERE keywords_post_user_page.keyword ";

          while (a < arrayWithWords.length) {
            if (a == 0) {
              sqlUserPageQueryWhere += ` ILIKE '${arrayWithWords[a]}%'`;
            } else {
              sqlUserPageQueryWhere += `OR keywords_post_user_page.keyword ILIKE '${
                arrayWithWords[a]
              }%'`;
            }
            a++;
          }

          sqlUserPageQueryWhere +=
            ` OR post_user_page.titulo ILIKE '${searchWords}%' GROUP BY post_user_page."mediaType", post_user_page.titulo, post_user_page.descricao, post_user_page.id, post_user_page.id_user_page, usuario.nick, usuario.foto,post_user_page.midia, keywords_post_user_page.keyword, post_user_page.created_at, user_page.nome, user_page.id 
            ${orderBy}`;
          //console.log("searchBar:UserPage => ", `${sqlUserPageQuery}${sqlUserPageQueryWhere}`);
          await app.db
            .raw(sqlUserPageQuery + sqlUserPageQueryWhere)
            .then(result => {
              result.rows.forEach(element => {
                return (element.type = "up");
              });
              userPageResult = result.rows;
            })
            .catch(erro => {
              return res.status(500).send(erro);
            });
        }
      })
      .catch(erro => {
        return res.status(500).send(erro);
      });
      
    /*====*/

    /* MEME PAGE */
    let memePageResult = [];
  
    let sqlMemeQuery =
      `SELECT DISTINCT 
      meme_page.midia as page_midia, meme_page.nome as page_name, meme_page.id as page_id, post_meme_page."mediaType",
      post_meme_page.titulo, post_meme_page.descricao, post_meme_page.midia, post_meme_page.id_meme_page, post_meme_page.id,
      (SELECT up FROM vote_meme_page where id_user = ${user ? user.id : null} and id_post = post_meme_page.id) as up_on,
      (SELECT count(comment) as comments FROM comments_meme_page WHERE id_post = post_meme_page.id),
      (SELECT down FROM vote_meme_page where id_user = ${user ? user.id : null} and id_post = post_meme_page.id) as down_on,
      (SELECT count(up) FROM vote_meme_page where id_post = post_meme_page.id) as upvote,
      (SELECT count(view_meme_page.id) as view FROM view_meme_page WHERE id_post = post_meme_page.id) as view,
      post_meme_page.created_at,usuario.nick, usuario.foto FROM post_meme_page  
      full JOIN meme_page ON post_meme_page.id_meme_page = meme_page.id  
      full JOIN comments_meme_page ON post_meme_page.id = comments_meme_page.id_post 
      full JOIN usuario ON post_meme_page.id_criador = usuario.id 
      full JOIN keywords_post_meme_page ON post_meme_page.id = keywords_post_meme_page.id_post 
      full JOIN vote_meme_page ON post_meme_page.id = vote_meme_page.id_post  `;
    a = 0;
    let sqlMemeQueryWhere = "WHERE keywords_post_meme_page.keyword IN (";
    while (a < arrayWithWords.length) {
      if (a == arrayWithWords.length - 1) {
        sqlMemeQueryWhere += `'${arrayWithWords[a]}'`;
      } else {
        sqlMemeQueryWhere += `'${arrayWithWords[a]}',`;
      }
      a++;
    }
    sqlMemeQueryWhere += ") ";
    sqlMemeQueryWhere +=
      ` GROUP BY post_meme_page."mediaType", meme_page.midia, meme_page.nome, meme_page.id, post_meme_page.id_meme_page, usuario.foto, usuario.nick, post_meme_page.id,post_meme_page.titulo, post_meme_page.descricao, post_meme_page.midia, keywords_post_meme_page.keyword,post_meme_page.created_at
      ${orderBy}`;
     // console.log("searchBar:MemePage => ", `${sqlMemeQuery}${sqlMemeQueryWhere}`);
    await app.db
      .raw(sqlMemeQuery + sqlMemeQueryWhere)
      .then(async result => {
        if (result.rows.length > 0) {
          result.rows.forEach(element => {
            return (element.type = "m");
          });

          memePageResult = result.rows;
        } else {
          a = 0;
          sqlMemeQueryWhere = "WHERE keywords_post_meme_page.keyword";
          while (a < arrayWithWords.length) {
            if (a == 0) {
              sqlMemeQueryWhere += ` ILIKE '${arrayWithWords[a]}%'`;
            } else {
              sqlMemeQueryWhere += `OR keywords_post_meme_page.keyword ILIKE '${
                arrayWithWords[a]
              }%'`;
            }
            a++;
          }
          sqlMemeQueryWhere +=
             ` OR post_meme_page.titulo ILIKE '${searchWords}%'  GROUP BY  post_meme_page."mediaType", meme_page.midia, meme_page.nome, meme_page.id,post_meme_page.id_meme_page, post_meme_page.titulo, usuario.nick, usuario.foto, post_meme_page.id,post_meme_page.descricao, post_meme_page.midia, keywords_post_meme_page.keyword, post_meme_page.created_at 
            ${orderBy}`;
           // console.log("searchBar:MemePage => ", `${sqlMemeQuery}${sqlMemeQueryWhere}`);
          await app.db
            .raw(sqlMemeQuery + sqlMemeQueryWhere)
            .then(result => {
              result.rows.forEach(element => {
                return (element.type = "m");
              });

              memePageResult = result.rows;
            })
            .catch(erro => {
              
              return res.status(500).send(erro);
            });
        }
      })
      .catch(erro => {

        
        return res.status(500).send(erro);
      });

    /*====*/

    /* USER */
    let sqlUserQuery =
      `SELECT DISTINCT post_user.titulo, post_user.descricao, post_user.midia, post_user.id, post_user.id_criador, post_user."mediaType",
      (SELECT up FROM vote_user where id_user = ${user ? user.id : null} and id_post = post_user.id) as up_on,
      (SELECT down FROM vote_user where id_user = ${user ? user.id : null} and id_post = post_user.id) as down_on,
      (SELECT count(comment) as comments FROM comments_user WHERE id_post = post_user.id),
      (SELECT count(up) FROM vote_user where id_post = post_user.id) as upvote,
      (SELECT count(view_user.id) as view FROM view_user WHERE id_post = post_user.id) as view,
      post_user.created_at,usuario.nick, usuario.foto FROM post_user 
      full JOIN usuario ON post_user.id_criador = usuario.id 
      full JOIN comments_user ON post_user.id = comments_user.id_post
      full JOIN keywords_post_user ON post_user.id = keywords_post_user.id_post 
      full JOIN vote_user ON post_user.id = vote_user.id_post `
    let userResult = [];

    a = 0;

    let sqlUserQueryWhere = " WHERE keywords_post_user.keyword IN (";
    while (a < arrayWithWords.length) {
      if (a == arrayWithWords.length - 1) {
        sqlUserQueryWhere += `'${arrayWithWords[a]}'`;
      } else {
        sqlUserQueryWhere += `'${arrayWithWords[a]}',`;
      }
      a++;
    }

    sqlUserQueryWhere += ") ";
    sqlUserQueryWhere +=
      `   GROUP BY post_user."mediaType", post_user.titulo, post_user.descricao, usuario.nick, usuario.foto,post_user.midia, post_user.id, post_user.id_criador, keywords_post_user.keyword, post_user.created_at 
      ${orderBy} `;
      //console.log("searchBar:UserPage => ", `${sqlUserQuery}${sqlUserQueryWhere}`);
    await app.db
      .raw(sqlUserQuery + sqlUserQueryWhere)
      .then(async result => {
        if (result.rows.length > 0) {
          result.rows.forEach(element => {
            return (element.type = "u");
          });
          userResult = result.rows;
        } else {
          a = 0;
          sqlUserQueryWhere = " WHERE keywords_post_user.keyword";
          while (a < arrayWithWords.length) {
            if (a == 0) {
              sqlUserQueryWhere += ` ILIKE '${arrayWithWords[a]}%'`;
            } else {
              sqlUserQueryWhere += `OR keywords_post_user.keyword ILIKE '${
                arrayWithWords[a]
              }%'`;
            }
            a++;
          }

          sqlUserQueryWhere +=
            ` OR post_user.titulo ILIKE '${searchWords}%' GROUP BY post_user."mediaType", post_user.titulo, post_user.descricao, post_user.midia,usuario.nick, usuario.foto,post_user.id, post_user.id_criador,  keywords_post_user.keyword, post_user.created_at 
            ${orderBy}`;
         //   console.log("searchBar:UserPage => ", `${sqlUserQuery}${sqlUserQueryWhere}`);
          await app.db
            .raw(sqlUserQuery + sqlUserQueryWhere)
            .then(result => {
              result.rows.forEach(element => {
                return (element.type = "u");
              });
              userResult = result.rows;
            })
            .catch(erro => {
              return res.status(500).send(erro);
            });
        }
      })
      .catch(erro => {
      
        return res.status(500).send(erro);
      });

    /* ------- */
    var arrayMerged = memePageResult.concat(userPageResult, userResult);

    //console.log(order);

    switch (order) {
      case "upvote":
        // console.log("***ORDENANDO POR UPVOTES***");
        arrayMerged.sort(function(a, b) {
          return b.upvote.localeCompare(a.upvote);
        });
        break;

      case "new":
        // console.log("***ORDENANDO PELA DATA***");
        arrayMerged.sort(function(a, b) {
          return new Date(b.created_at) - new Date(a.created_at);
        });
        break;

      default:
        // console.log("***ORDENANDO POR UPVOTES default***");
        arrayMerged.sort(function(a, b) {
          return b.upvote.localeCompare(a.upvote);
        });
        break;
    }

    //console.log(arrayMerged);

    return res.json(arrayMerged);

    //return res.send(w);
  };

      return {
        searchByPage,
        searchBar
      }
}