const db = require('../config/database')
const Task=require('../models/Task');
const User = db.Sequelize.define('Usuario', {
    nome: {
        type: db.sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: db.sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: db.sequelize.STRING,
        allowNull: false,
    }

})

User.hasMany(Task)
Task.belongsTO(User,{
constraints: true

})

try {
    User.sync()
   ;
} catch (error) {
    console.error('Erro ao sincronizar banco:', error);
}