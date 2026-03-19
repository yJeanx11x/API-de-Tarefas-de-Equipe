const User = require('../models/User')
const validacao = require('../middlewares/validationMiddleware')


// criar User
async function CriarUser(req, res, next) {
    
    const z = validacao.safeParse(req.body)

    try {
     await User.create({
            nome: z.data.nome,
            email: z.data.email,
            password: z.data.password
        })

        return res.status(201).json({message:'Usuário criado '})
        
    } catch (error) {
        next(error)
    }

}
module.exports = { CriarUser }
