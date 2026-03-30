require('dotenv').config()

const { User } = require('../models/User')
const Task = require('../models/Task')

const validacao = require('../middlewares/validationMiddleware')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// criar User
async function CriarUser(req, res, next) {

    const z = validacao.safeParse(req.body)

    try {
        const passwordHash = await bcrypt.hash(z.data.password, 12)

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
// login com jwt 
async function login(req, res, next) {
    const { email, password } = req.body

    try {
        const contaExitente = await User.findOne({ where: { email } })
        if (!contaExitente) {
            return res.status(404).json({ message: 'E-mail inválido' })
        }

        const Senhausuario = await bcrypt.compare(password, contaExitente.password)
        if (!Senhausuario) {
            return res.status(404).json({ message: 'Senha inválido' })

        }

        const secret = process.env.SECRET
        const token = jwt.sign({
            id: contaExitente.id

        }, secret)

        return res.status(200).json({ message: 'Login com sucesso', id: contaExitente.id, token })


    } catch (error) {
        next(error)
    }

}
// verifica o token se e valido é cria a tarefa
async function CriarTarefa(req, res, next) {
    const { titulo, descricao, status } = req.body
    const {id}=req.params
    try {
 await Task.create({
    titulo: 'Estudar',
    descricao: 'Nodejs',
    status: false,
    UsuarioId: id
})
        return res.status(201).json({ message: 'Task Criada' })
    } catch (error) {
        next(error)
    }
}

async function TarefaDoUser(req, res, next) {
    const { id } = req.params
    try {
        const UserTarefa = await User.findOne({where: { id }, include: [{model: Task}], attributes: ['nome']})
        

        return res.status(200).json({ message: 'Sucesso', UserTarefa })
    } catch (error) {
        next(error)
    }
}
// ver todas as tarefas
async function VerTarefas(req, res, next) {
    try {
        const userTarefas = await Task.findAll({ attributes: ['id', 'titulo', 'descricao', 'UsuarioId'] })
        if (!userTarefas) {
            return res.status(401).json('Nenhuma tarefa encontrada')
        }
        return res.status(200).json({ Task: userTarefas })
    } catch (error) {
        next(error)
    }
}



module.exports = { CriarUser, login, CriarTarefa, VerTarefas, TarefaDoUser }
