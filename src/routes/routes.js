const express = require("express")
const appRoutes = express.Router()

const controllers = require('../controllers/userController')

appRoutes.post('/auth/register', controllers.CriarUser)

module.exports = appRoutes