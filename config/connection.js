// import the sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our database, pass in your Postgresql information for username and password
// const sequelize = new Sequelize('just_tech_news_db', 'username', 'password', {
const sequelize = new Sequelize(process.env.database, process.env.username, process.env.password, {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAlises: false,
    port: 5432,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = sequelize;