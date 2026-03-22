const User = require('../models/User')
const validacao = require('../middlewares/validationMiddleware')
const bcrypt = require('bcrypt')


// criar User
async function CriarUser(req, res, next) {

    const z = validacao.safeParse(req.body)
  
    try {
        const passwordHash =await bcrypt.hash(z.data.password, 12)
        await User.create({
            nome: z.data.nome,
            email: z.data.email,
            password: passwordHash
        })

        return res.status(201).json({ message: 'Usuário criado ' })

    } catch (error) {
        next(error)
    }

}
module.exports = { CriarUser }
