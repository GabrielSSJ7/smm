const bcrypt = require("bcrypt-nodejs");
const { authSecret } = require("../.env");
const jwt = require("jwt-simple");

module.exports = app => {
    const {
        existsOrError,
        notExistsOrError,
        equalsOrError
    } = app.components.validation;

    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password, salt);
    };

    const signin = (req, res) => {
        const user = { ...req.body };
        console.log(user)
    
        try {
          existsOrError(user.nome, "Nome não informado.");
          existsOrError(user.email, "E-mail não informado.");
          existsOrError(user.password, "Senha não informada.");
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
  
    const validateToken = async (req, res) => {
      const userData = req.body || null;
  
      try {
        if (userData) {
          const token = jwt.decode(userData.token, authSecret);
          //console.log(Math.floor(Date.now() / 1000))
          //console.log(new Date())
          if (new Date(token.exp * 1000) > new Date()) {
            return res.send(true);
          }
        }
      } catch (e) {
        // problema com o token
      }
  
      res.send(false);
    };
  
  return { signin, login, validateToken };
}