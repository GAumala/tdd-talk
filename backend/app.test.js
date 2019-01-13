const { db } = require('./db.js');
const client = require('./client.js')

const reset = () => db('users').del();

beforeAll(reset);

describe('POST /user', () => {
  it('returns status 400 if receives invalid data', async () => {
    const res = await client.insertUser({})
    expect(res.status).toBe(400);
  })

  it('returns status 200 if receives valid data', async () => {
    const res = await client.insertUser({
      name: 'gabriel',
      email: 'gabriel@gmail.com'
    })
    expect(res.status).toBe(200);
  })
}) 

describe('GET /user', () => {
  it('returns status 404 if requested user is not found', async () => {
    const res = await client.findUser('emilio@gmail.com')
    expect(res.status).toBe(404);
  })

  it('returns status 200 if requested an user inserted with POST /user', async () => {
    // primero insertar el user
    await client.insertUser({
      name: 'gabriel',
      email: 'gabriel@criptext.com'
    })

    // ahora pedir el mismo user
    const res = await client.findUser('gabriel@criptext.com');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      name: 'gabriel',
      email: 'gabriel@criptext.com'
    })
  })
})
