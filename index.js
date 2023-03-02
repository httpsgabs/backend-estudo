const express = require('express')
const {server: api} = require("./src/api/index");

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Servidor de Backend - Turma A - Estudo 😎👍🙌')
})

app.use("/api", api);

app.listen(port, () => {
  console.log(`Servidor na porta: ${port} ${new Date()}`)
})       