// Update with your config settings.
const env = require("./.env");


module.exports = {
  client: "postgresql",
  connection: {
    host: "ec2-174-129-208-118.compute-1.amazonaws.com",
    database: "d8oic83arbolh9",
    user: "vjgsncminijlgo",
    password: "5ced2ec51201b8ad44baee008c49657e671120cccc3f3c69b01984da941e52aa",
    port: 5432
  }
};

// module.exports = {
//   client: "postgresql",
//   connection: {
//     host: "localhost",
//     database: "sauce_meme",
//     user: "postgres",
//     password: "Sparda11",
//     port: 5432
//   }
//};