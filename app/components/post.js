const bcrypt = require("bcrypt-nodejs");
const { authSecret } = require("../.env");
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

  const encryptPassword = password => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  };

  /* QUERIES FOR MEME PAGE 
  -- BUSCANDO PÁGINAS DE MEMES PELA KEYWORDS --
      SELECT 
      keywords.keyword,
      meme_page.nome,
      meme_page.midia,
      meme_page.descricao,
      usuario.nome,
      usuario.nick FROM keywords
      INNER JOIN keywords_rel_memepage ON keywords_rel_memepage.id_keywords = keywords.id
      INNER JOIN meme_page ON meme_page.id = keywords_rel_memepage.id_meme_page 
      INNER JOIN usuario ON usuario.id = meme_page.id_criador 
      WHERE keywords.keyword IN ('Tossindo')
  */

  /* CREATE POST USER
   *
   *     titulo ""
   *     descricao ""
   *     midia ""
   *     token ""   *
   *     categorias []
   *     keywords []
   *
   */
  createPostUser = async (req, res) => {
    const data = req.body || null;
    const token = jwt.decode(
      req.get("Authorization").replace("bearer ", ""),
      authSecret
    );

    let arrayWithWords = data.titulo.match(/\S+/g);
    console.log(arrayWithWords);
    let id_post = 0;

    data.keywords = data.keywords.concat(arrayWithWords);

    console.log(data.keywords);

    try {
      existsOrError(
        data.titulo,
        "Você precisa digitar um titulo para publicar"
      );
      existsOrError(data.midia, "É necessário o vídeo ou foto para publicar");
      existsOrError(
        data.categorias,
        "Você precisa escolher uma categoria no mínimo."
      );
      existsOrError(
        data.keywords,
        "Você precisa digitar no mínimo uma keyword"
      );
      existsOrError(token, "Ocorreu um problema, tente novamente mais tarde.");
    } catch (error) {
      return res.status(400).send(error);
    }

    await app
      .db("post_user")
      .returning("id")
      .insert({
        titulo: data.titulo,
        descricao: data.descricao ? data.descricao : null,
        midia: data.midia,
        id_criador: token.id
      })
      .then(id => {
        id_post = id[0];
      })
      .catch(err => {
        return res.status(400).send(err);
      });

    for (let a = 0; a < data.keywords.length; a++) {
      await app
        .db("keywords_post_user")
        .returning("id")
        .insert({
          id_post,
          keyword: data.keywords[a]
        })
        .then(id => {})
        .catch(err => {
          return res.status(400).send(err);
        });
    }

    for (let b = 0; b < data.categorias.length; b++) {
      await app
        .db("categorias_post_user")
        .returning("id")
        .insert({
          id_post,
          categoria: data.categorias[b]
        })
        .then(id => {})
        .catch(err => {
          return res.status(400).send(err);
        });
    }

    return res.status(200).send(true);
  };

  /* CREATE POST USER PAGE
   *
   *     titulo ""
   *     descricao ""
   *     midia ""
   *     token ""   *
   *     id_user_page
   *     categorias []
   *     keywords []
   *
   */
  createPostUserPage = async (req, res) => {
    const data = req.body || null;
    const token = jwt.decode(req.get("Authorization").replace("bearer ", ""), authSecret);

    let arrayWithWords = data.titulo.match(/\S+/g);
    
    let id_post = 0;

    data.keywords = data.keywords.concat(arrayWithWords);

    console.log(data);

    try {
      existsOrError(
        data.titulo,
        "Você precisa digitar um titulo para publicar"
      );
      existsOrError(data.midia, "É necessário o vídeo ou foto para publicar");
      existsOrError(
        data.categorias,
        "Você precisa escolher uma categoria no mínimo."
      );
      existsOrError(
        data.keywords,
        "Você precisa digitar no mínimo uma keyword"
      );
      existsOrError(token, "Ocorreu um problema, tente novamente mais tarde.");
    } catch (error) {
      return res.status(400).send(error);
    }

    await app
      .db("post_user_page")
      .returning("id")
      .insert({
        titulo: data.titulo,
        descricao: data.descricao ? data.descricao : null,
        midia: data.midia,
        id_criador: token.id,
        id_user_page: data.id_user_page
      })
      .then(id => {
        id_post = id[0];
      })
      .catch(err => {
        return res.status(400).send(err);
      });

    for (let a = 0; a < data.keywords.length; a++) {
      await app
        .db("keywords_post_user_page")
        .returning("id")
        .insert({
          id_post,
          keyword: data.keywords[a]
        })
        .then(id => {})
        .catch(err => {
          return res.status(400).send(err);
        });
    }

    for (let b = 0; b < data.categorias.length; b++) {
      await app
        .db("categorias_post_user_page")
        .returning("id")
        .insert({
          id_post,
          categoria: data.categorias[b]
        })
        .then(id => {})
        .catch(err => {
          return res.status(400).send(err);
        });
    }

    return res.status(200).send(true);
  };

  /* CREATE POST MEME PAGE
   *
   *     titulo ""
   *     descricao ""
   *     midia ""
   *     token ""   *
   *     id_meme_page
   *     categorias []
   *     keywords []
   *
   */
  createPostMemePage = async (req, res) => {
    const data = req.body || null;
    const token = jwt.decode(data.token, authSecret);

    let arrayWithWords = data.titulo.match(/\S+/g);
    console.log(arrayWithWords);
    let id_post = 0;

    data.keywords = data.keywords.concat(arrayWithWords);

    console.log(data.keywords);

    try {
      existsOrError(
        data.titulo,
        "Você precisa digitar um titulo para publicar"
      );
      existsOrError(data.midia, "É necessário o vídeo ou foto para publicar");
      existsOrError(
        data.categorias,
        "Você precisa escolher uma categoria no mínimo."
      );
      existsOrError(
        data.keywords,
        "Você precisa digitar no mínimo uma keyword"
      );
      existsOrError(token, "Ocorreu um problema, tente novamente mais tarde.");
    } catch (error) {
      return res.status(400).send(error);
    }

    await app
      .db("post_meme_page")
      .returning("id")
      .insert({
        titulo: data.titulo,
        descricao: data.descricao ? data.descricao : null,
        midia: data.midia,
        id_criador: token.id,
        id_meme_page: data.id_meme_page
      })
      .then(id => {
        id_post = id[0];
      })
      .catch(err => {
        return res.status(400).send(err);
      });

    for (let a = 0; a < data.keywords.length; a++) {
      await app
        .db("keywords_post_meme_page")
        .returning("id")
        .insert({
          id_post,
          keyword: data.keywords[a]
        })
        .then(id => {})
        .catch(err => {
          return res.status(400).send(err);
        });
    }

    for (let b = 0; b < data.categorias.length; b++) {
      await app
        .db("categorias_post_meme_page")
        .returning("id")
        .insert({
          id_post,
          categoria: data.categorias[b]
        })
        .then(id => {})
        .catch(err => {
          return res.status(400).send(err);
        });
    }
    return res.status(200).send(true);
  };

  /* BUSCAR POST PELAS PÁGINAS
   *
   *  page_type (meme_page, user_page, user) -> string
   *  page_id -> int
   *  orderby -> (upvote, created_at) string
   *  desc_asc -> (desc, asc) string
   *
   */

  searchByPage = async (req, res) => {
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

  searchBar = async (req, res) => {
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
      user_page.midia as page_midia, user_page.nome as page_name, user_page.id as page_id, 
      post_user_page.titulo, post_user_page.descricao, post_user_page.midia, post_user_page.id, post_user_page.id_user_page, 
      (SELECT up FROM vote_user_page where id_user = ${user ? user.id : null} and id_post = post_user_page.id) as up_on,
      (SELECT down FROM vote_user_page where id_user = ${user ? user.id : null} and id_post = post_user_page.id) as down_on,
      (SELECT count(comment) as comments FROM comments_user_page WHERE id_post = post_user_page.id),
      (SELECT count(up) FROM vote_user_page where id_post = post_user_page.id) as upvote,
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
      " GROUP BY post_user_page.titulo, usuario.nick, usuario.foto, post_user_page.descricao, post_user_page.id, post_user_page.id_user_page,post_user_page.midia, keywords_post_user_page.keyword, post_user_page.created_at, user_page.nome,user_page.id  " +
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
            ` OR post_user_page.titulo ILIKE '${searchWords}%' GROUP BY post_user_page.titulo, post_user_page.descricao, post_user_page.id, post_user_page.id_user_page, usuario.nick, usuario.foto,post_user_page.midia, keywords_post_user_page.keyword, post_user_page.created_at, user_page.nome, user_page.id 
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
              return res.send(erro);
            });
        }
      })
      .catch(erro => {
        return res.send(erro);
      });

    /*====*/

    /* MEME PAGE */
    let memePageResult = [];

    let sqlMemeQuery =
      `SELECT DISTINCT 
      meme_page.midia as page_midia, meme_page.nome as page_name, meme_page.id as page_id, 
      post_meme_page.titulo, post_meme_page.descricao, post_meme_page.midia, post_meme_page.id_meme_page, post_meme_page.id,
      (SELECT up FROM vote_meme_page where id_user = ${user ? user.id : null} and id_post = post_meme_page.id) as up_on,
      (SELECT count(comment) as comments FROM comments_meme_page WHERE id_post = post_meme_page.id),
      (SELECT down FROM vote_meme_page where id_user = ${user ? user.id : null} and id_post = post_meme_page.id) as down_on,
      (SELECT count(up) FROM vote_meme_page where id_post = post_meme_page.id) as upvote,
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
      ` GROUP BY  meme_page.midia, meme_page.nome, meme_page.id, post_meme_page.id_meme_page, usuario.foto, usuario.nick, post_meme_page.id,post_meme_page.titulo, post_meme_page.descricao, post_meme_page.midia, keywords_post_meme_page.keyword,post_meme_page.created_at
      ${orderBy}`;
      //console.log("searchBar:MemePage => ", `${sqlMemeQuery}${sqlMemeQueryWhere}`);
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
             ` OR post_meme_page.titulo ILIKE '${searchWords}%'  GROUP BY  meme_page.midia, meme_page.nome, meme_page.id,post_meme_page.id_meme_page, post_meme_page.titulo, usuario.nick, usuario.foto, post_meme_page.id,post_meme_page.descricao, post_meme_page.midia, keywords_post_meme_page.keyword, post_meme_page.created_at 
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
              return res.send(erro);
            });
        }
      })
      .catch(erro => {
        return res.send(erro);
      });

    /*====*/

    /* USER */
    let sqlUserQuery =
      `SELECT DISTINCT post_user.titulo, post_user.descricao, post_user.midia, post_user.id, post_user.id_criador, 
      (SELECT up FROM vote_user where id_user = ${user ? user.id : null} and id_post = post_user.id) as up_on,
      (SELECT down FROM vote_user where id_user = ${user ? user.id : null} and id_post = post_user.id) as down_on,
      (SELECT count(comment) as comments FROM comments_user WHERE id_post = post_user.id),
      (SELECT count(up) FROM vote_user where id_post = post_user.id) as upvote,
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
      `   GROUP BY post_user.titulo, post_user.descricao, usuario.nick, usuario.foto,post_user.midia, post_user.id, post_user.id_criador, keywords_post_user.keyword, post_user.created_at 
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
            ` OR post_user.titulo ILIKE '${searchWords}%' GROUP BY post_user.titulo, post_user.descricao, post_user.midia,usuario.nick, usuario.foto,post_user.id, post_user.id_criador,  keywords_post_user.keyword, post_user.created_at 
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
              return res.send(erro);
            });
        }
      })
      .catch(erro => {
        return res.send(erro);
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

  /*
   * UP OR DOWN VOTE
   * Corpo da requisição
   *
   * token in header - Authorization bearer token
   * id_post -> int
   * type ('m','u','up') -> string
   * vote ('up', 'down') -> string
   *
   */
  upDownVotePost = async (req, res) => {
    const data = req.body || null;
    const token = jwt.decode(
      req.get("Authorization").replace("bearer ", ""),
      authSecret
    );
    switch (data.type) {
      case "m":
        doUpOrDown("vote_meme_page", data, res, token);
        break;

      case "u":
        doUpOrDown("vote_user", data, res, token);
        break;

      case "up":
        doUpOrDown("vote_user_page", data, res, token);
        break;
    }
  };

  async function refreshPostAfterVote(table, token, post_id) {
    let postTable = '';
    switch(table) {
      case "vote_meme_page":
        postTable = "post_meme_page";
      break
      
      case "vote_user_page":
        postTable = "post_user_page";
      break;

      case "vote_user":
        postTable = "post_user";
      break
    }
    const sql = `SELECT DISTINCT (SELECT up FROM ${table} where id_user = ${token.id} and id_post =  ${postTable}.id) as up_on,
    (SELECT down FROM ${table} where id_user = ${token.id} and id_post =  ${postTable}.id) as down_on,
    count(up) as upvote, count(down) as downvote, ${postTable}.id
    FROM ${postTable} full JOIN ${table} ON  ${postTable}.id = ${table}.id_post 
    WHERE ${postTable}.id = ${post_id}
    GROUP BY ${postTable}.id`;
   //console.log(sql);
    const result = await app.db.raw(sql);

    console.log("refreshPostAfterVote => ", result.rows);
    return result.rows
  }

  const doUpOrDown = async (table, data, res, token) => {
    const vote = await app
      .db(table)
      .where({ id_user: token.id, id_post: data.id_post });

    if (vote.length > 0) {
      if (data.vote === "up") {
        if (vote[0].up != null) {
          console.log("disable up");
          app
            .db(table)
            .where({ id_user: token.id, id_post: data.id_post })
            .update({ up: null })
            .then(async _ => {
             
              const json = await refreshPostAfterVote(table, token, data.id_post);
              return res.json( json);
            })
            .catch(error => {
              return res.status(500).send(error);
            });
        } else {
          console.log("able up, disable down");
         app
            .db(table)
            .where({ id_user: token.id, id_post: data.id_post })
            .update({ up: 1, down: null })
            .then(async _ => {
              const json = await refreshPostAfterVote(table, token, data.id_post);
              return res.json( json);
            })
            .catch(error => {
              return res.status(500).send(error);
            });
        }
      } else {
        if (vote[0].down != null) {
          console.log("disable down");
          app
            .db(table)
            .where({ id_user: token.id, id_post: data.id_post })
            .update({ down: null })
            .then(async _ => {
              const json = await refreshPostAfterVote(table, token, data.id_post);
              return res.json(json);
            })
            .catch(error => {
              return res.status(500).send(error);
            });
        } else {
          console.log("able down, disable up");
          app
            .db(table)
            .where({ id_user: token.id, id_post: data.id_post })
            .update({ down: 1, up: null })
            .then(async _ => {
              const json = await refreshPostAfterVote(table, token, data.id_post);
              return res.json( json);
            })
            .catch(error => {
              return res.status(500).send(error);
            });
        }
      }
    } else {
      if (data.vote == "up") {
        console.log("insert upvote");
        app
          .db(table)
          .insert({
            id_user: token.id,
            id_post: data.id_post,
            up: 1,
            down: null
          })
          .then(async _ => {
            const json = await refreshPostAfterVote(table, token, data.id_post);
            return res.json( json);
          })
          .catch(error => {
            return res.status(500).send(error);
          });
      } else {
        console.log("insert downvote");
        app
          .db(table)
          .insert({
            id_user: token.id,
            id_post: data.id_post,
            up: null,
            down: 1
          })
          .then(async _ => {
            const json = await refreshPostAfterVote(table, token, data.id_post);
            return res.json( json);
          })
          .catch(error => {
            return res.status(500).send(error);
          });
      }
    }
  };

  /*
   * COMENTÁRIO
   * URL Param
   *
   * option ('i', 'u', 'd')
   *
   * Corpo da requisição
   *
   * token in header - Authorization bearer token
   * id_post -> int
   * type ('m','u','up') -> string
   * comment (se for inserir ou atualizar) -> string
   * id_comment (se for excluír ou atualizar) -> int
   *
   */
  const insertUpdateDeleteComment = async (req, res) => {
    const option = req.query.option || null;
    const data = req.body || null;
    const token = jwt.decode(
      req.get("Authorization").replace("bearer ", ""),
      authSecret
    );

    let table = "";

    switch (data.type) {
      case "m":
        table = "comments_meme_page";
        break;

      case "up":
        table = "comments_user_page";
        break;

      case "u":
        table = "comments_user";
        break;
    }

    switch (option) {
      case "i":
        insertComment(res, data, table, token);
        break;

      case "u":
        updateComment(res, data, table);
        break;

      case "d":
        deleteComment(res, data, table);
        break;
    }
  };

  const insertComment = async (res, data, table, token) => {
    app
      .db(table)
      .insert({
        id_user: token.id,
        id_post: data.id_post,
        comment: data.comment
      })
      .then(async _ => {
        const result =  await selectComments(data.id_post, data.type);
        return res.json(result);
      })
      .catch(error => {
        console.log(error);
        return res.status(500).send(error);
      });
  };

  const updateComment = (res, data, table) => {
    app
      .db(table)
      .where({ id: data.id_comment })
      .update({ comment: data.comment })
      .then(_ => {
        return res.sendStatus(200);
      })
      .catch(error => {
        return res.status(500).send(error);
      });
  };

  const deleteComment = (res, data, table) => {
    app
      .db(table)
      .where({ id: data.id_comment })
      .del()
      .then(_ => {
        return res.sendStatus(200);
      })
      .catch(error => {
        return res.status(500).send(error);
      });
  };
  

  const fetchComments = async (req, res) => {
    const option = req.query.option ||  null;
    const id_post = req.query.id_post || null;
  
    const result = await selectComments(id_post, option);

    return res.json(result);
   }

   const selectComments = async (id_post, option) => {
      let table = '';
      let tableCount = '';
      switch(option) {
        case 'up':
        table = `SELECT count(comments_user_page.id) as count, id_user, comment, nick, foto, comments_user_page.created_at FROM comments_user_page JOIN usuario ON comments_user_page.id_user= usuario.id WHERE id_post = ${id_post} group by id_user,comment, comments_user_page.* ,nick, foto, comments_user_page.created_at order by comments_user_page ASC`

        tableCount = `SELECT count(comments_user_page.id) as count FROM comments_user_page WHERE id_post = ${id_post}`
        break;

        case 'u':
        table = `SELECT count(comments_user.id) as count,id_user, comment, nick, foto, comments_user.created_at FROM comments_user JOIN usuario ON comments_user.id_user= usuario.id WHERE id_post = ${id_post} group by id_user,comment,  nick, foto, comments_user.*,comments_user.created_at order by comments_user ASC`

        tableCount = `SELECT count(comments_user.id) as count FROM comments_user WHERE id_post = ${id_post}`
        break;

        case 'm':
        table = `SELECT count(comments_meme_page.id) as count, id_user, comment, nick, foto, comments_meme_page.created_at FROM comments_meme_page JOIN usuario ON comments_meme_page.id_user= usuario.id WHERE id_post  = ${id_post} group by id_user,comment, comments_meme_page.*, nick, foto, comments_meme_page.created_at
        order by comments_meme_page ASC`

        tableCount = `SELECT count(comments_meme_page.id) as count FROM comments_meme_page WHERE id_post = ${id_post}`
        break;

      }

      
      const countR = await app.db.raw(tableCount);
      const result = await app.db.raw(table);
      const finalResult  = { totalComments: countR.rows[0].count, id_post, dataComments: result.rows }
      console.log(finalResult)
      return finalResult
   }
 
  /*
   *
   * VIEW POST
   * URL Param
   * option ('m','up','u')
   *
   * CORPO DA REQUISIÇÃO
   * id_post -> int
   *
   * token -> Authorization bearer token
   */
  const viewPost = (req, res) => {
    const option = req.query.option || null;
    const data = req.body || null;
    const token = jwt.decode(
      req.get("Authorization").replace("bearer ", ""),
      authSecret
    );

    switch (option) {
      case "m":
        insertView(res, data, token, "view_meme_page");
        break;

      case "up":
        insertView(res, data, token, "view_user_page");
        break;

      case "u":
        insertView(res, data, token, "view_user");
        break;
    }
  };

  const insertView = async (res, data, token, table) => {
    const views = await app
      .db(table)
      .where({ id_user: token.id, id_post: data.id_post });

    let alreadyViewToday = false;
    views.forEach(element => {
      var today = new Date();
      const diff = date_diff_indays(element.created_at, today);

      if (diff == 0) {
        alreadyViewToday = true;
      }
    });

    if (!alreadyViewToday) {
      app
        .db(table)
        .insert({ id_user: token.id, id_post: data.id_post })
        .then(_ => res.sendStatus(200))
        .catch(error => res.status(500).send(error));
    } else {
      return res.status(200).send("Já viu hoje");
    }
  };

  const date_diff_indays = function(date1, date2) {
    dt1 = new Date(date1);
    dt2 = new Date(date2);
    return Math.floor(
      (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
        Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
        (1000 * 60 * 60 * 24)
    );
  };

  const allViewsOfPost = async (req, res) => {
    const id_post = req.query.id_post || null;
    const table = req.query.table || null;

    const result = await app
      .db(table)
      .count("id as views")
      .where({ id_post });

    return res.json(result);
  };

  const postDetails = async (req, res) => {
    const id_post = req.query.id_post || null;

    let response = {};
    const resultPost = await app.db("post_meme_page ")
      .where({ id: id_post })
      .select("created_at", "titulo", "midia");

    const resultCat = await app.db
      .select("categoria")
      .from("categorias_post_meme_page")
      .where({ id_post });

    const resultVote = await app
      .db("vote_meme_page")
      .count("up as upvotes")
      .count("down as downvote")
      .where({ id_post });

    const resultView = await app
      .db("view_meme_page")
      .count("id as views")
      .where({ id_post });

      response = resultPost;
      response = { ...response[0], ...resultVote[0], ...resultView[0], ...resultCat[0] }
      return res.json(response);
  };

  const loadCats = (req, res) => {
    const fileBuffer = fs.readFileSync(path, 'utf-8');
    const json = JSON.parse(fileBuffer)

    return res.json(json);
  }

  return {
    searchByPage,
    searchBar,
    createPostMemePage,
    createPostUser,
    createPostUserPage,
    upDownVotePost,
    insertUpdateDeleteComment,
    viewPost,
    allViewsOfPost,
    postDetails,
    fetchComments,
    loadCats
  };
};
