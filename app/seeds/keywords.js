
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('keywords').del()
    .then(function () {
      // Inserts seed entries
      return knex('keywords').insert([
        {id:1, keyword: 'diabo'},
        {id:2, keyword: 'satanas'},
        {id:3, keyword: 'satã'},
        {id:4, keyword: 'tinhoso'},
        {id:5, keyword: 'namorado'},
        {id:6, keyword: 'distraido'},
        {id:7, keyword: 'traidor'},
        {id:8, keyword: "mandamentos"},
        {id:9, keyword: "dez"},
        {id:10, keyword: "demônios"},
        {id:11, keyword: "pecados"},
        {id:12, keyword: "sete"},
        {id:13, keyword: "capitais"}
      ]);
    });
};
