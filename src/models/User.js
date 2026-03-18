const db = require('../config/database')
const user = db.Sequelize.define('Usuario', {
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

try {
    user.sync({ force: true })
   ;
} catch (error) {
    console.error('Não foi possível criar banco de dados:', error);
}