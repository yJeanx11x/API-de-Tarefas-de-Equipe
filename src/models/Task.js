const db = require('../config/database')

const Task = db.sequelize.define('tarefas', {
    titulo: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    descricao: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    status: {
        type: db.Sequelize.BOOLEAN,
        allowNull: false,
    },

    UsuarioId: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
    }
})

module.exports = Task