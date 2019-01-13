const request = require('superagent');
const host = 'localhost:4000'

const insertUser = user => 
  request
    .post(`${host}/user`)
    .send(user)
    .ok(res => res.status);

const findUser = email => 
  request
    .get(`${host}/user/${email}`)
    .ok(res => res.status);

module.exports = {
  insertUser,
  findUser
}
