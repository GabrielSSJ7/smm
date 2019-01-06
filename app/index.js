const app = require("express")();
const http = require('http').Server(app)


const consign = require("consign");

const port = process.env.PORT || 3000;

//const db = require("./config/db");

//app.db = db;

consign()
  .into(app);

app.get('/', (req, res)=> {

    return res.send('UM TESTE BEM SUCEDIDO')
})
  

http.listen(port, () => {
  console.log("iniciando servidor backend..." + port);
});