const insertUser = async body => {
  const { email, name } = body;
  if (!email || !name)
    return { status: 400, body: 'formulario incompleto' };

  return { status: 500, body: 'Not Implemented Yet' }
}

const findUser = async params => {
return { status: 500, body: 'Not Implemented Yet' }
}

module.exports = {
  insertUser,
  findUser
}

