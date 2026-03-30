const express = require("express")
const appRoutes = express.Router()
const jwt = require('../config/jtw')

const controllers = require('../controllers/userController')

appRoutes.post('/auth/register', controllers.CriarUser)
appRoutes.post('/auth/login', controllers.login)
appRoutes.post('/tasks/:id', jwt.validacaJWT, controllers.CriarTarefa)
appRoutes.get('/task', controllers.VerTarefas)
appRoutes.get('/task/:id', jwt.validacaJWT, controllers.TarefaDoUser)

module.exports = appRoutes