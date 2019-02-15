const bcrypt = require("bcrypt-nodejs");
const { authSecret } = require("../.env");
const jwt = require("jwt-simple");

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

  /* CRIA PÁGINA DO MEME
   *
   *     titulo ""
   *     descricao ""
   *     midia ""
   *     token ""
   *     page_type ""
   *     page_id number
   *     categorias []
   *     keywords []
   *
   */
  createPost = async (req, res) => {
    const data = req.body || null;
    const token = jwt.decode(data.token, authSecret);
    const page_type = data.page_type;
    const page_id = data.page_id;
    delete data.token;
    delete data.page_type;
    delete data.page_id;

    let ids_categoria = [];
    let ids_keywords = [];
    let id_post = 0;

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
      .db("post")
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

    for (let i = 0; i < data.categorias.length; i++) {
      await app
        .db("categorias")
        .returning("id")
        .insert({
          categoria: data.categorias[i]
        })
        .then(id => {
          ids_categoria.push(id[0]);
        })
        .catch(err => {
          return res.status(400).send(err);
        });
    }

    for (let a = 0; a < data.keywords.length; a++) {
      await app
        .db("keywords")
        .returning("id")
        .insert({
          keyword: data.keywords[a]
        })
        .then(id => {
          ids_keywords.push(id[0]);
        })
        .catch(err => {
          return res.status(400).send(err);
        });
    }

    for (let b = 0; b < ids_categoria.length; b++) {
      await app
        .db("post_rel_categorias")
        .insert({
          id_post,
          id_categorias: ids_categoria[b]
        })
        .then(id => {
          //ids_keywords.push(id[0]);
        })
        .catch(err => {
          return res.status(400).send(err);
        });
    }

    for (let c = 0; c < ids_keywords.length; c++) {
      await app
        .db("post_rel_keywords")
        .insert({
          id_post,
          id_keywords: ids_keywords[c]
        })
        .then(id => {
          //ids_keywords.push(id[0]);
        })
        .catch(err => {
          return res.status(400).send(err);
        });
    }

    switch (page_type) {
      case "user_page":
        await app
          .db("post_rel_user_page")
          .insert({
            id_post,
            id_user_page: page_id
          })
          .then(id => {
            //ids_keywords.push(id[0]);
          })
          .catch(err => {
            return res.status(400).send(err);
          });
        break;

      case "meme_page":
        await app
          .db("post_rel_meme_page")
          .insert({
            id_post,
            id_meme_page: page_id
          })
          .then(id => {
            //ids_keywords.push(id[0]);
          })
          .catch(err => {
            return res.status(400).send(err);
          });
        break;

      default:
        await app
          .db("post_rel_user")
          .insert({
            id_post,
            id_user: token.id
          })
          .then(id => {
            //ids_keywords.push(id[0]);
          })
          .catch(err => {
            return res.status(400).send(err);
          });
        break;
    }
    return res.status(200).send(true);
  };

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
    const token = jwt.decode(data.token, authSecret);

    let id_post = 0;

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
    const token = jwt.decode(data.token, authSecret);

    let id_post = 0;

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

    let id_post = 0;

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
   *  page_type
   *  page_id
   *
   */

  searchByPage = async (req, res) => {
    const data = req.body || null;
    let sql = "";
    switch (data.page_type) {
      case "meme_page":
        sql =
          "SELECT * FROM post " +
          "INNER JOIN post_rel_meme_page ON post.id = post_rel_meme_page.id_post " +
          "WHERE id_meme_page = " +
          data.page_id;
        app.db
          .raw(sql)
          .then(result => {
            console.log(result.rows);
            return res.json(result.rows);
          })
          .catch(erro => {
            return res.send(erro);
          });
        break;

      case "user_page":
        sql =
          "SELECT * FROM post " +
          "INNER JOIN post_rel_user_page ON post.id = post_rel_user_page.id_post " +
          "WHERE id_user_page = " +
          data.page_id;
        app.db
          .raw(sql)
          .then(result => {
            console.log(result.rows);
            return res.json(result.rows);
          })
          .catch(erro => {
            return res.send(erro);
          });
        break;

      case "user":
        sql =
          "SELECT * FROM post " +
          "INNER JOIN post_rel_user ON post.id = post_rel_user.id_post " +
          "WHERE id_user = " +
          data.page_id;
        app.db
          .raw(sql)
          .then(result => {
            console.log(result.rows);
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

    const order = req.body || null;
    let orderBy = "";

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
    let sqlQueryLike =
      "SELECT DISTINCT post_user_page.titulo, post_user_page.descricao, post_user_page.midia,  " +
      "count(up) as upvote, count(down) as downvote FROM post_user_page   " +
      "full JOIN user_page ON post_user_page.id_user_page = user_page.id  " +
      "full JOIN keywords_post_user_page ON post_user_page.id = keywords_post_user_page.id_post " +
      "full JOIN vote_user_page ON post_user_page.id = vote_user_page.id_post  ";
    a = 0;
    sqlQueryLike += "WHERE keywords_post_user_page.keyword IN (";
    while (a < arrayWithWords.length) {
      if (a == arrayWithWords.length - 1) {
        sqlQueryLike += `'${arrayWithWords[a]}'`;
      } else {
        sqlQueryLike += `'${arrayWithWords[a]}',`;
      }
      a++;
    }

    sqlQueryLike += ")";

    sqlQueryLike +=
      " GROUP BY post_user_page.titulo, post_user_page.descricao, post_user_page.midia, keywords_post_user_page.keyword " +
      orderBy;

    console.log("*********************************************");
    console.log(sqlQueryLike);
    await app.db
      .raw(sqlQueryLike)
      .then(async result => {
        if (result.rows.length > 0) {
          userPageResult = result.rows;
        } else {
          a = 0;
          sqlQueryLike =
            "SELECT DISTINCT post_user_page.titulo, post_user_page.descricao, post_user_page.midia,  " +
            "count(up) as upvote, count(down) as downvote FROM post_user_page   " +
            "full JOIN user_page ON post_user_page.id_user_page = user_page.id  " +
            "full JOIN keywords_post_user_page ON post_user_page.id = keywords_post_user_page.id_post " +
            "full JOIN vote_user_page ON post_user_page.id = vote_user_page.id_post  " +
            "WHERE keywords_post_user_page.keyword ";

          while (a < arrayWithWords.length) {
            if (a == 0) {
              sqlQueryLike += ` ILIKE '${arrayWithWords[a]}%'`;
            } else {
              sqlQueryLike += `OR keywords_post_user_page.keyword ILIKE '${
                arrayWithWords[a]
              }%'`;
            }
            a++;
          }

          sqlQueryLike +=
            " GROUP BY post_user_page.titulo, post_user_page.descricao, post_user_page.midia, keywords_post_user_page.keyword " +
            orderBy;

          console.log("*********************************************");
          console.log(sqlQueryLike);
          await app.db
            .raw(sqlQueryLike)
            .then(result => {
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
    sqlQueryLike =
      "SELECT DISTINCT post_meme_page.titulo, post_meme_page.descricao, post_meme_page.midia,  " +
      "count(up) as upvote, count(down) as downvote FROM post_meme_page   " +
      "full JOIN meme_page ON post_meme_page.id_meme_page = meme_page.id  " +
      "full JOIN keywords_post_meme_page ON post_meme_page.id = keywords_post_meme_page.id_post " +
      "full JOIN vote_meme_page ON post_meme_page.id = vote_meme_page.id_post  ";

    a = 0;
    sqlQueryLike += "WHERE keywords_post_meme_page.keyword IN (";
    while (a < arrayWithWords.length) {
      if (a == arrayWithWords.length - 1) {
        sqlQueryLike += `'${arrayWithWords[a]}'`;
      } else {
        sqlQueryLike += `'${arrayWithWords[a]}',`;
      }
      a++;
    }

    sqlQueryLike += ") ";

    sqlQueryLike +=
      " GROUP BY post_meme_page.id_meme_page, post_meme_page.titulo, post_meme_page.descricao, post_meme_page.midia, keywords_post_meme_page.keyword " +
      orderBy;

    console.log("*********************************************");
    console.log(sqlQueryLike);
    await app.db
      .raw(sqlQueryLike)
      .then(async result => {
        if (result.rows.length > 0) {
          memePageResult = result.rows;
        } else {
          a = 0;
          sqlQueryLike =
            "SELECT DISTINCT post_meme_page.titulo, post_meme_page.descricao, post_meme_page.midia,  " +
            "count(up) as upvote, count(down) as downvote FROM post_meme_page   " +
            "full JOIN meme_page ON post_meme_page.id_meme_page = meme_page.id  " +
            "full JOIN keywords_post_meme_page ON post_meme_page.id = keywords_post_meme_page.id_post " +
            "full JOIN vote_meme_page ON post_meme_page.id = vote_meme_page.id_post  " +
            "WHERE keywords_post_meme_page.keyword ";

          while (a < arrayWithWords.length) {
            if (a == 0) {
              sqlQueryLike += ` ILIKE '${arrayWithWords[a]}%'`;
            } else {
              sqlQueryLike += `OR keywords.keyword ILIKE '${
                arrayWithWords[a]
              }%'`;
            }
            a++;
          }
          sqlQueryLike +=
            " GROUP BY post_meme_page.id_meme_page, post_meme_page.titulo, post_meme_page.descricao, post_meme_page.midia, keywords_post_meme_page.keyword " +
            orderBy;

          console.log("*********************************************");
          console.log(sqlQueryLike);
          await app.db
            .raw(sqlQueryLike)
            .then(result => {
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
    let userResult = [];
    sqlQueryLike =
      "SELECT DISTINCT post_user.titulo, post_user.descricao, post_user.midia, " +
      "count(up) as upvote, count(down) as downvote FROM post_user " +
      "full JOIN usuario ON post_user.id_criador = usuario.id " +
      "full JOIN keywords_post_user ON post_user.id = keywords_post_user.id_post " +
      "full JOIN vote_user ON post_user.id = vote_user.id_post ";

    a = 0;
    sqlQueryLike += "WHERE keywords_post_user.keyword IN (";
    while (a < arrayWithWords.length) {
      if (a == arrayWithWords.length - 1) {
        sqlQueryLike += `'${arrayWithWords[a]}'`;
      } else {
        sqlQueryLike += `'${arrayWithWords[a]}',`;
      }
      a++;
    }

    sqlQueryLike += ") ";
    sqlQueryLike +=
      " GROUP BY post_user.titulo, post_user.descricao, post_user.midia, keywords_post_user.keyword " +
      orderBy;

    console.log("*********************************************");
    console.log(sqlQueryLike);
    await app.db
      .raw(sqlQueryLike)
      .then(async result => {
        if (result.rows.length > 0) {
          userResult = result.rows;
        } else {
          a = 0;
          sqlQueryLike =
            "SELECT DISTINCT post_user.titulo, post_user.descricao, post_user.midia, " +
            "count(up) as upvote, count(down) as downvote FROM post_user " +
            "full JOIN usuario ON post_user.id_criador = usuario.id " +
            "full JOIN keywords_post_user ON post_user.id = keywords_post_user.id_post " +
            "full JOIN vote_user ON post_user.id = vote_user.id_post " +
            "WHERE keywords_post_user.keyword ";

          while (a < arrayWithWords.length) {
            if (a == 0) {
              sqlQueryLike += ` ILIKE '${arrayWithWords[a]}%'`;
            } else {
              sqlQueryLike += `OR keywords_post_user.keyword ILIKE '${
                arrayWithWords[a]
              }%'`;
            }
            a++;
          }

          sqlQueryLike +=
            " GROUP BY post_user.titulo, post_user.descricao, post_user.midia, keywords_post_user.keyword " +
            orderBy;

          console.log("*********************************************");
          console.log(sqlQueryLike);
          await app.db
            .raw(sqlQueryLike)
            .then(result => {
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

    /*console.log("*********************************************");
    console.log(userResult);
    console.log("*********************************************");
    console.log(userPageResult);
    console.log("*********************************************");
    console.log(memePageResult);
    console.log("*********************************************");*/

    var arrayMerged = memePageResult.concat(userPageResult, userResult);
    
    let orderedArray = [];
    let oldElement = {};
      arrayMerged.map((elem) => {
        if(elem.upvote > oldElement) {}
        
        
      })

    res.json(arrayMerged);

    //return res.send(w);
  };

  return {
    createPost,
    searchByPage,
    searchBar,
    createPostMemePage,
    createPostUser,
    createPostUserPage
  };
};
