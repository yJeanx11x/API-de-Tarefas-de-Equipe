require('dotenv').config()

const express = require("express")
const app = express()
const errorMiddleware = require('../middlewares/errorMiddleware')
const routes=require('../routes/routes')

app.use(express.json())
app.use(routes)
app.use(errorMiddleware)


app.listen(process.env.PORT, () => console.log('Servidor rodando com sucesso!'))