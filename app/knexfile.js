// Update with your config settings.
const env = require("./.env");
// module.exports = {
//   client: "postgresql",
//   connection: {
//     host: "ec2-54-197-239-115.compute-1.amazonaws.com",
//     database: "d9btnsmn02bpf7",
//     user: "bozjpkruxejzrz",
//     password: "f738731120e2d9cd5d491515955c8369256ec90de669546099561be803869239",
//     port: 5432
//   }
// };

module.exports = {
  client: "postgresql",
  connection: {
    host: "localhost",
    database: "sauce_meme",
    user: "postgres",
    password: "Sparda11",
    port: 5432
  }
};