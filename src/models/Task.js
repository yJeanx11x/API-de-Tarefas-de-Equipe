const db=require('../config/database')
const task = db.Sequelize.define('tarefas', {
    titulo: {
        type: db.sequelize.STRING,
        allowNull: false,
    },
    descricao: {
        type: db.sequelize.STRING,
        allowNull: false,
    },
    status: {
        type: db.sequelize.BOLEAN,
        allowNull: false,
    }
})

module.exports=task