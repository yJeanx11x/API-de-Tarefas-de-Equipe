const db=require('../config/database')

const Task = db.Sequelize.define('tarefas', {
    titulo: {
        type: db.sequelize.STRING,
        allowNull: false,
    },
    descricao: {
        type: db.sequelize.STRING,
        allowNull: false,
    },
    status: {
        type: db.sequelize.BOOLEAN,
        allowNull: false,
    }
})

module.exports= Task