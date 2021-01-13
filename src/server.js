const express = require('express') 
const app = express() 
const cors = require('cors')
const githubRouter = require('./routes')

const port = process.env.PORT || 3333;

app.use(cors())
app.use(express.json());
app.use('/', githubRouter);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
  });

  module.exports = app;