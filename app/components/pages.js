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

  /* CRIA PÁGINA DO MEME */
  createNewMemePage = async (req, res) => {
    const data = req.body || null;
    const token = jwt.decode(data.token, authSecret);

    delete data.token;

    let ids_categoria = [];
    let ids_keywords = [];
    let id_meme_page = 0;
    try {
      existsOrError(data.nome, "Você precisa dar um nome para o MEME");
      existsOrError(data.midia, "É necessário o vídeo ou foto do MEME");
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
      .db("meme_page")
      .returning("id")
      .insert({
        nome: data.nome,
        descricao: data.descricao ? data.descricao : null,
        midia: data.midia,
        id_criador: token.id
      })
      .then(id => {
        id_meme_page = id[0];
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
        .db("categorias_rel_memepage")
        .insert({
          id_meme_page,
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
        .db("keywords_rel_memepage")
        .insert({
          id_meme_page,
          id_keywords: ids_keywords[c]
        })
        .then(id => {
          //ids_keywords.push(id[0]);
        })
        .catch(err => {
          return res.status(400).send(err);
        });
    }

    return res.status(200).send(true);
  };

  /* CRIA USER PAGE */
  createNewUserPage = async (req, res) => {
    const data = req.body || null;
    const token = jwt.decode(data.token, authSecret);

    delete data.token;

    let ids_categoria = [];
    let ids_keywords = [];
    let id_administrators = [];
    let id_user_page = 0;
    try {
      existsOrError(data.nome, "Você precisa dar um nome para o MEME");
      existsOrError(data.midia, "É necessário o vídeo ou foto do MEME");
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
      .db("user_page")
      .returning("id")
      .insert({
        nome: data.nome,
        descricao: data.descricao ? data.descricao : null,
        midia: data.midia,
        tipo: data.tipo,
        id_criador: token.id
      })
      .then(id => {
        id_user_page = id[0];
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
        .db("user_page_rel_categorias")
        .insert({
          id_user_page,
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
        .db("user_page_rel_keywords")
        .insert({
          id_user_page,
          id_keywords: ids_keywords[c]
        })
        .then(id => {
          //ids_keywords.push(id[0]);
        })
        .catch(err => {
          return res.status(400).send(err);
        });
    }

    if (
      Array.isArray(data.id_administrators) &&
      data.id_administrators.length === 0
    ) {
      for (let c = 0; c < data.id_administrators.length; c++) {
        await app
          .db("user_page_administrators")
          .insert({
            id_user_page,
            id_user_admin: data.id_administrators[c]
          })
          .then(id => {
            id_administrators.push(id[0]);
          })
          .catch(err => {
            return res.status(400).send(err);
          });
      }
    }

    return res.status(200).send(true);
  };

  /*BUSCA PÁGINA DO USUÁRIO PELAS KEYWORDS*/
  searchUserPage = (req, res) => {
    const searchWords = req.query.search_query || null;

    const auth = /false/i.test(req.get("Authorization").replace("bearer ", ""));

    const user = !auth
      ? jwt.decode(req.get("Authorization").replace("bearer ", ""), authSecret)
          .id
      : null;
    let arrayWithWords = searchWords.split(/(?= )/);
    let a = 0;

    let sqlQuery = `SELECT DISTINCT
      user_page.id, 
      user_page.nome, 
      user_page.midia,
      user_page.descricao, 
      (select subscribe_user_page.id from subscribe_user_page where subscribe_user_page.id_user = ${user} and subscribe_user_page.id_page = user_page.id) as sub,
	    (select count(subscribe_user_page.id_user) from subscribe_user_page where subscribe_user_page.id_page = user_page.id)  as qtde_subs,
      usuario.nick FROM keywords 
      INNER JOIN user_page_rel_keywords ON user_page_rel_keywords.id_keywords = keywords.id 
      INNER JOIN user_page ON user_page.id = user_page_rel_keywords.id_user_page 
      INNER JOIN usuario ON usuario.id = user_page.id_criador  WHERE keywords.keyword IN ( `;
    while (a < arrayWithWords.length) {
      if (a == arrayWithWords.length - 1) {
        sqlQuery += `'${arrayWithWords[a]}'`;
      } else {
        sqlQuery += `'${arrayWithWords[a]}',`;
      }
      a++;
    }

    sqlQuery += ");";

    app.db
      .raw(sqlQuery)
      .then(result => {
        if (result.rows.length == 0) {
          let sqlQueryLike = `SELECT DISTINCT
            user_page.id, 
            user_page.nome, 
            user_page.midia,
            user_page.descricao, 
            (select subscribe_user_page.id from subscribe_user_page where subscribe_user_page.id_user = ${user} and subscribe_user_page.id_page = user_page.id) as sub,
            (select count(subscribe_user_page.id_user) from subscribe_user_page where subscribe_user_page.id_page = user_page.id) as qtde_subs,
            usuario.nick FROM keywords 
            INNER JOIN user_page_rel_keywords ON user_page_rel_keywords.id_keywords = keywords.id 
            INNER JOIN user_page ON user_page.id = user_page_rel_keywords.id_user_page 
            INNER JOIN usuario ON usuario.id = user_page.id_criador  WHERE keywords.keyword `;
          a = 0;
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

          app.db
            .raw(sqlQueryLike)
            .then(result => {
              return res.json(result.rows);
            })
            .catch(erro => {
              return res.send(erro);
            });
        } else {
          return res.json(result.rows);
        }
      })
      .catch(erro => {
        return res.send(erro);
      });

    //return res.send(w);
  };

  /*BUSCA PÁGINA DO MEME PELAS KEYWORDS*/
  searchMemePage = (req, res) => {
    const searchWords = req.query.search_query || null;

    let arrayWithWords = searchWords.split(/(?= )/);
    let a = 0;

    let sqlQuery = `SELECT DISTINCT 
      meme_page.id, 
      meme_page.nome, 
      meme_page.midia, 
      meme_page.descricao, 
      usuario.nick FROM keywords 
      INNER JOIN keywords_rel_memepage ON keywords_rel_memepage.id_keywords = keywords.id 
      INNER JOIN meme_page ON meme_page.id = keywords_rel_memepage.id_meme_page 
      INNER JOIN usuario ON usuario.id = meme_page.id_criador 
      WHERE keywords.keyword IN ( `;
    while (a < arrayWithWords.length) {
      if (a == arrayWithWords.length - 1) {
        sqlQuery += `'${arrayWithWords[a]}'`;
      } else {
        sqlQuery += `'${arrayWithWords[a]}',`;
      }
      a++;
    }

    sqlQuery += ");";

    app.db
      .raw(sqlQuery)
      .then(result => {
        if (result.rows.length == 0) {
          let sqlQueryLike = ` SELECT DISTINCT
            meme_page.id,
            meme_page.nome,
            meme_page.midia,
            meme_page.descricao,
            usuario.nick FROM keywords
            INNER JOIN keywords_rel_memepage ON keywords.id = keywords_rel_memepage.id_keywords  
            INNER JOIN meme_page ON meme_page.id = keywords_rel_memepage.id_meme_page
            INNER JOIN usuario ON usuario.id = meme_page.id_criador
            WHERE keywords.keyword `;
          a = 0;
          while (a < arrayWithWords.length) {
            if (a == 0) {
              sqlQueryLike += ` ILIKE '%${arrayWithWords[a]}%'`;
            } else {
              sqlQueryLike += `OR keywords.keyword ILIKE '%${
                arrayWithWords[a]
              }%'`;
            }
            a++;
          }

          app.db
            .raw(sqlQueryLike)
            .then(result => {
              return res.json(result.rows);
            })
            .catch(erro => {
              return res.send(erro);
            });
        } else {
          console.log("====================================");
          console.log("pages | line:412", result.rows);
          console.log("====================================");
          return res.json(result.rows);
        }
      })
      .catch(erro => {
        return res.send(erro);
      });

    //return res.send(w);
  };

  searchUsersForAdminPage = (req, res) => {
    const searchWords = req.query.search_query || null;

    let arrayWithWords = searchWords.split(/(?= )/);
    let a = 0;

    let sqlQuery =
      "SELECT " +
      "usuario.id, " +
      "usuario.nome, " +
      "usuario.foto, " +
      "usuario.nick " +
      "FROM usuario " +
      "WHERE usuario.nick LIKE " +
      `'%${searchWords}%' OR usuario.nome LIKE '%${searchWords}%'`;

    app.db
      .raw(sqlQuery)
      .then(result => {
        return res.json(result.rows);
      })
      .catch(erro => {
        return res.status(500).send(erro);
      });
  };

  follow = async (req, res) => {
    const option = req.query.option || null;
    const token = jwt.decode(
      req.get("Authorization").replace("bearer ", ""),
      authSecret
    );
    const id_page = req.body.id_page || null;
    let table = "";
    switch (option) {
      case "up":
        table = "subscribe_user_page";
        break;

      case "m":
        table = "subscribe_meme_page";
        break;

      case "u":
        table = "subscribe";
        break;
    }

    const alreadyFollow = await app.db(table).where({
      id_user: token.id,
      id_page
    });

    if (alreadyFollow.length <= 0) {
      console.log("follow");
      app
        .db(table)
        .insert({ id_user: token.id, id_page })
        .then(_ => {
          return res.sendStatus(200);
        })
        .catch(error => {
          return res.status(500).send(error);
        });
    } else {
      console.log("unfollow");
      app
        .db(table)
        .where({ id_user: token.id, id_page })
        .del()
        .then(_ => {
          return res.sendStatus(200);
        })
        .catch(error => {
          return res.status(500).send(error);
        });
    }
  };

  searchPageSubscribed = async (req, res) => {
    const user = jwt.decode(
      req.get("Authorization").replace("bearer ", ""),
      authSecret
    );
    const result = await app.db
      .raw(`SELECT user_page.id, user_page.nome, user_page.midia FROM user_page 
    INNER JOIN subscribe_user_page ON user_page.id = subscribe_user_page.id_page
    inner join usuario on subscribe_user_page.id_user = usuario.id WHERE usuario.id = ${
      user.id
    }`);

    return res.json(result.rows);
  };

  searchPageForPost = async (req, res) => {
    const key = req.query.search;

    const result = await app.db
      .raw(`SELECT DISTINCT user_page.id, user_page.nome, user_page.midia FROM user_page 
      inner join user_page_rel_keywords ON user_page.id = user_page_rel_keywords.id_user_page
      inner join keywords ON user_page_rel_keywords.id_keywords = keywords.id
    WHERE  keywords.keyword ilike '${key}%' OR user_page.nome ilike '${key}%'`)
    
    return res.json(result.rows);
  };

  getAllSubscribers = async (req, res) => {
    const option = req.query.option || null;
    const id_page = req.query.id_page || null;

    if (id_page == null || option == null) return res.sendStatus(400);
    let result = undefined;
    switch (option) {
      case "up":
         result = await app.db
          .raw(`SELECT usuario.nick, usuario.foto FROM subscribe_user_page 
          JOIN usuario ON subscribe_user_page.id_user = usuario.id
          WHERE id_page = ${id_page};`);
        break;
      case "u":
         result = await app.db
          .raw(`SELECT usuario.nick, usuario.foto FROM subscribe 
          JOIN usuario ON subscribe.id_page = usuario.id
          WHERE id_page = ${id_page};`);
        break;
    }

    return res.json(result.rows);
  };

  return {
    createNewMemePage,
    searchMemePage,
    searchUserPage,
    createNewUserPage,
    searchUsersForAdminPage,
    follow,
    getAllSubscribers,
    searchPageSubscribed,
    searchPageForPost
  };
};
