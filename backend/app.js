const { insertUser, findUser } = require('./handlers.js');

const express = require('express')
const app = express()
const port = 4000

const newPostHandler = handlerFn => async (req, res) => {
  const { status, body } = await handlerFn(req.body)
  res.status(status).send(body);
}

const newGetHandler = handlerFn => async (req, res) => {
  const { status, body } = await handlerFn(req.params)
  res.status(status).send(body);
}

app.use(express.json());

app.post('/user', newPostHandler(insertUser));
app.get('/user/:email', newGetHandler(findUser));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
