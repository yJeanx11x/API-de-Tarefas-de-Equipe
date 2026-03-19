const z = require('zod')

const validacao = z.object({
    nome: z.string().min(3, 'Mínimo 3 caracteres'),
    email: z.email(),
    password: z.string().min(6, ' Mínimo de 6 caracteres ')
})

module.exports = validacao 