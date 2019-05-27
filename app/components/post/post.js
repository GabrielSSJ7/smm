const bcrypt = require("bcrypt-nodejs");
const { authSecret } = require("../../.env");
const jwt = require("jwt-simple");
const fs = require("fs");
const path = "./components/categorias.json";

module.exports = app => {
  const {
    existsOrError,
    notExistsOrError,
    equalsOrError,
    validateEmail
  } = app.components.validation;

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
  const createPostUser = async (req, res) => {
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
        mediaType: data.mediaType,
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
  const createPostUserPage = async (req, res) => {
    const data = req.body || null;
    const token = jwt.decode(
      req.get("Authorization").replace("bearer ", ""),
      authSecret
    );

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
        mediaType: data.mediaType,
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
  const createPostMemePage = async (req, res) => {
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
        mediaType: data.mediaType,
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
  const upDownVotePost = async (req, res) => {
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
    let postTable = "";
    switch (table) {
      case "vote_meme_page":
        postTable = "post_meme_page";
        break;

      case "vote_user_page":
        postTable = "post_user_page";
        break;

      case "vote_user":
        postTable = "post_user";
        break;
    }
    const sql = `SELECT DISTINCT (SELECT up FROM ${table} where id_user = ${
      token.id
    } and id_post =  ${postTable}.id) as up_on,
    (SELECT down FROM ${table} where id_user = ${
      token.id
    } and id_post =  ${postTable}.id) as down_on,
    count(up) as upvote, count(down) as downvote, ${postTable}.id
    FROM ${postTable} full JOIN ${table} ON  ${postTable}.id = ${table}.id_post 
    WHERE ${postTable}.id = ${post_id}
    GROUP BY ${postTable}.id`;
    //console.log(sql);
    const result = await app.db.raw(sql);

    console.log("refreshPostAfterVote => ", result.rows);
    return result.rows;
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
              const json = await refreshPostAfterVote(
                table,
                token,
                data.id_post
              );
              return res.json(json);
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
              const json = await refreshPostAfterVote(
                table,
                token,
                data.id_post
              );
              return res.json(json);
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
              const json = await refreshPostAfterVote(
                table,
                token,
                data.id_post
              );
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
              const json = await refreshPostAfterVote(
                table,
                token,
                data.id_post
              );
              return res.json(json);
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
            return res.json(json);
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
            return res.json(json);
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
        const result = await selectComments(data.id_post, data.type);
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
    const option = req.query.option || null;
    const id_post = req.query.id_post || null;

    const result = await selectComments(id_post, option);

    return res.json(result);
  };

  const selectComments = async (id_post, option) => {
    let table = "";
    let tableCount = "";
    switch (option) {
      case "up":
        table = `SELECT count(comments_user_page.id) as count, id_user, comment, nick, foto, comments_user_page.created_at FROM comments_user_page JOIN usuario ON comments_user_page.id_user= usuario.id WHERE id_post = ${id_post} group by id_user,comment, comments_user_page.* ,nick, foto, comments_user_page.created_at order by comments_user_page ASC`;

        tableCount = `SELECT count(comments_user_page.id) as count FROM comments_user_page WHERE id_post = ${id_post}`;
        break;

      case "u":
        table = `SELECT count(comments_user.id) as count,id_user, comment, nick, foto, comments_user.created_at FROM comments_user JOIN usuario ON comments_user.id_user= usuario.id WHERE id_post = ${id_post} group by id_user,comment,  nick, foto, comments_user.*,comments_user.created_at order by comments_user ASC`;

        tableCount = `SELECT count(comments_user.id) as count FROM comments_user WHERE id_post = ${id_post}`;
        break;

      case "m":
        table = `SELECT count(comments_meme_page.id) as count, id_user, comment, nick, foto, comments_meme_page.created_at FROM comments_meme_page JOIN usuario ON comments_meme_page.id_user= usuario.id WHERE id_post  = ${id_post} group by id_user,comment, comments_meme_page.*, nick, foto, comments_meme_page.created_at
        order by comments_meme_page ASC`;

        tableCount = `SELECT count(comments_meme_page.id) as count FROM comments_meme_page WHERE id_post = ${id_post}`;
        break;
    }
    const countR = await app.db.raw(tableCount);
    const result = await app.db.raw(table);
    const finalResult = {
      totalComments: countR.rows[0].count,
      id_post,
      dataComments: result.rows
    };
    console.log(finalResult);
    return finalResult;
  };

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
  // -----

  const postDetails = async (req, res) => {
    const id_post = req.query.id_post || null;
    const type = req.query.type || null;
    const period = req.query.period || "week";
    console.log(" post || period", period)
    let response = {};
    let table = "";
    switch (type) {
      case "u":
        table = "user";
        break;
      case "up":
        table = "user_page";
        break;
      case "m":
        table = "meme_page";
        break;
    }
    const resultPost = await app
      .db(`post_${table}`)
      .where({ id: id_post })
      .select("created_at", "titulo", "midia");

    const resultCat = await app.db
      .select("categoria")
      .from(`categorias_post_${table}`)
      .where({ id_post });

    const resultVote = await app
      .db(`vote_${table}`)
      .count("up as upvotes")
      .count("down as downvote")
      .where({ id_post });

    const resultChartVote = await app.db
      .raw(`SELECT date_trunc('${period}', created_at) as week, count(up) as upvotes, 
    count(down) as downvotes
    from vote_${table} where id_post = ${id_post} group by week order by week asc`);
    console.log(" post || resultChartVote", resultChartVote )


    const resultView = await app
      .db(`view_${table}`)
      .count("id as views")
      .where({ id_post });

    response = resultPost;
    response = {
      postDetails: {
        ...response[0],
        ...resultVote[0],
        ...resultView[0],
        ...resultCat[0]
      },
      postDetailsForChart: resultChartVote.rows
    };

    return res.json(response);
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

  const loadCats = (req, res) => {
    const fileBuffer = fs.readFileSync(path, "utf-8");
    const json = JSON.parse(fileBuffer);

    return res.json(json);
  };

  return {
    createPostMemePage,
    createPostUser,
    createPostUserPage,
    upDownVotePost,
    insertUpdateDeleteComment,
    fetchComments,
    viewPost,
    allViewsOfPost,
    postDetails,
    loadCats
  };
};
