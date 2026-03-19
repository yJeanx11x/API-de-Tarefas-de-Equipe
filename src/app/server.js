require('dotenv').config()
const express = require("express")
const app = express()
app.use(express.json())
const routes=require('../routes/routes')
app.use(routes)

app.listen(process.env.PORT, () => console.log('Servidor rodando com sucesso!'))