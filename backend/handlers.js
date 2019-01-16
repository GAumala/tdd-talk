const db = require('./db.js');

const insertUser = async body => {
  const { email, name } = body;
  if (!email || !name)
    return { status: 400, body: 'formulario incompleto' };

  await db.insertUser({ email, name });

  return { status: 200, body: 'OK' };
}

const findUser = async params => {
  if (typeof params.email !== 'string')
    return { status: 400, body: 'Bad Request' }

  const [ foundUser ] = await db.findUser(params.email);
  if (!foundUser) 
    return { status: 404, body: 'Not Found' };

  return { status: 200, body: foundUser };
}

module.exports = {
  insertUser,
  findUser
}

