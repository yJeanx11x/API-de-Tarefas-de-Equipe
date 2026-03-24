require('dotenv').config()
const jwt = require('jsonwebtoken')

async function validacaJWT(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (!token) {
        return res.status(401).json({ message: 'Acesso negado' })
    }
    try {
        const secret = process.env.SECRET
        jwt.verify(token, secret)
        next()
    } catch (error) {
        return res.status(500).json({ message: 'Token inválido!' })
    }
}
module.exports={validacaJWT}