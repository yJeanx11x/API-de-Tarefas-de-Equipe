const db = require('../config/database')
const Task = require('../models/Task');


const User = db.sequelize.define('Usuario', {
    nome: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: db.Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: db.Sequelize.STRING,
        allowNull: false,
    }

})

User.hasMany(Task, {
    foreignKey: 'UsuarioId'
})
Task.belongsTo(User, {
    foreignKey: 'UsuarioId'
})
async function syncDatabase() {
    try {
        await User.sync({ force: false })
        await Task.sync({ force: false })

    } catch (error) {
        console.error('Erro ao sincronizar banco:', error);
    }
}
syncDatabase()
module.exports = { User, Task }