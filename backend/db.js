const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: "./mydb.sqlite"
  }
});

const insertUser = user => knex('users').insert(user);

const findUser = email => 
  knex.select('*')
    .from('users')
    .where({ email })
    .limit(1);

module.exports = { 
  db: knex,
  insertUser,
  findUser
}
