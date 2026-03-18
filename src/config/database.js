require('dotenv').config()
const sequelize = require("sequelize")

const Sequelize = new sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',

})

try {
    Sequelize.authenticate();
    console.log('A conexão foi estabelecida com sucesso.');
} catch (error) {
    console.error('Não foi possível conectar ao banco de dados:', error);
}

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}