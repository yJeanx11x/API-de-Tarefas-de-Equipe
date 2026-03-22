require('dotenv').config()
const User = require('../models/User')
const validacao = require('../middlewares/validationMiddleware')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


// criar User
async function CriarUser(req, res, next) {

    const z = validacao.safeParse(req.body)

    try {
        const passwordHash = await bcrypt.hash(z.data.password, 12)

        await User.User.create({
            nome: z.data.nome,
            email: z.data.email,
            password: passwordHash
        })

        return res.status(201).json({ message: 'Usuário criado ' })

    } catch (error) {
        next(error)
    }

}
// login com jwt 

async function login(req, res, next) {
    const { email, password } = req.body
    
    try {
        const contaExitente = await User.User.findOne({ where: { email } })
        
        if  (!contaExitente) {
            return res.status(404).json({ message: 'E-mail inválido' })
        }
        
        const Senhausuario = await bcrypt.compare(password, contaExitente.password)
        if (!Senhausuario) {
            return res.status(404).json({ message: 'Senha inválido' })

        }

        const secret = process.env.SECRET
        const token = jwt.sign({
            id: contaExitente._id
        }, secret)

        return res.status(200).json({ message: 'Login com sucesso', token })


    } catch (error) {
        next(error)
    }

}

module.exports = { CriarUser, login }
