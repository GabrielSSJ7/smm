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

  const signin = (req, res) => {
    const user = { ...req.body };

    try {
      existsOrError(user.nome, "Nome não informado.");
      existsOrError(user.email, "E-mail não informado.");
      existsOrError(user.password, "Senha não informada.");
      existsOrError(user.nick, "Você não informou o apelido");
      validateEmail(user.email, "O e-mail especificado é inválido.");
    } catch (msg) {
      return res.status(400).send(msg);
    }

    user.password = encryptPassword(user.password);

    app
      .db("usuario")
      .insert(user)
      .then(_ => res.status(200).send(true))
      .catch(err => {
        console.log(err);
        return res.status(500).send(err);
      });
  };

  const login = async (req, res) => {
    if (!req.body.email || !req.body.password) {
      return res.status(400).send("Informe usuário e senha!");
    }

    try {
      validateEmail(req.body.email, "O e-mail especificado é inválido.");
    } catch (msg) {
      return res.status(400).send(msg);
    }

    const user = await app
      .db("usuario")
      .where({ email: req.body.email })
      .first();

    if (!user) return res.status(400).send("Usuário não encontrado!");

    // const isMatch = bcrypt.compareSync(req.body.password, user.password);
    // if (!isMatch) return res.status(401).send("Email/Senha inválidos!");

    const now = Math.floor(Date.now() / 1000);

    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
      iat: now,
      exp: now + 60 * 60 * 24
      // exp: now + 1
    };

    return res.json({
      ...payload,
      token: jwt.encode(payload, authSecret)
    });
  };

  const signinWithFacebook = async (req, res) => {
    const user = { ...req.body, password: "facebook" };

    try {
      existsOrError(user.nome, "Nome não informado.");
      validateEmail(user.email, "O e-mail informado é inválido.");
      existsOrError(user.email, "E-mail não informado.");
    } catch (msg) {
      return res.status(400).send(msg);
    }

    const userDB = await app
      .db("usuario")
      .where({ email: user.email })
      .first();

    // if already logged in other time
    if (userDB) {
      const now = Math.floor(Date.now() / 1000);

      const payload = {
        id: userDB.id,
        name: userDB.name,
        email: userDB.email,
        iat: now,
        exp: now + 60 * 60 * 24
        // exp: now + 1
      };

      return res.json({
        ...payload,
        token: jwt.encode(payload, authSecret)
      });
    }

    app
      .db("usuario")
      .returning("id")
      .insert(user)
      .then(id => {
        const now = Math.floor(Date.now() / 1000);

        const payload = {
          id: id[0],
          name: user.name,
          email: user.email,
          iat: now,
          exp: now + 60 * 60 * 24
          // exp: now + 1
        };

        return res.json({
          ...payload,
          token: jwt.encode(payload, authSecret)
        });
      })
      .catch(err => {
        console.log(err);
        return res.status(500).send(err);
      });
  };

  const buscaApelido = async (req, res) => {
    const user = req.params.nickname || null;
    console.log(user);
    app
      .db("usuario")
      .where({
        nick: user
      })
      .then(nick => {
        console.log(nick.length)
        if (nick.length > 0) {
          return res.status(200).send("Apelido já está sendo usado");
        } else {
          return res.status(200).send("Apelido disponível");
        }
      });
  };

  const temApelido = (req, res) => {
    const userData = req.body || null;

    try {
      if (userData) {
        const token = jwt.decode(userData.token, authSecret);

        app
          .db("usuario")
          .where({
            email: token.email
          })
          .then(user => {
            if (!user[0].nick) {
              res.status(200).send(false);
            } else {
              res.status(200).send(true);
            }
          });
      }
    } catch (e) {
      // problema com o token
    }
  };

  const adicionaApelido = (req, res) => {
    const nick = req.body.nick || null;
    let token = req.body.token || null;

    if (!nick) {
      console.log(nick);
      return res.status(400).send("Apelido não foi enviado");
    }

    token = jwt.decode(token, authSecret);

    app
      .db("usuario")
      .where({
        email: token.email
      })
      .update({
        nick
      })
      .then(_ => {
        return res.status(200).send(true);
      })
      .catch(_ => {
        console.log(_);
        return;
      });
  };

  const validateToken = async (req, res) => {
    const userData = req.body || null;

    try {
      if (userData) {
        const token = jwt.decode(userData.token, authSecret);

        if (new Date(token.exp * 1000) > new Date()) {
          return res.send(true);
        }
      }
    } catch (e) {
      // problema com o token
    }

    res.send(false);
  };

  return {
    signin,
    login,
    validateToken,
    signinWithFacebook,
    buscaApelido,
    temApelido,
    adicionaApelido
  };
};
