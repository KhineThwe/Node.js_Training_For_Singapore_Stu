const dbConfig = require('../config/dbConfig.js');

const {Sequelize,DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,{
        host: dbConfig.HOST,
        dialect:dbConfig.dialect,
        pool:{
            max:dbConfig.pool.max,
            min:dbConfig.pool.min,
            acquire:dbConfig.pool.acquire,
            idle:dbConfig.pool.idle
        }
    }
)

sequelize.authenticate()
.then(()=>{
    console.log('connected')
})
.catch(err=>{
    console.log("Error"+err)
})

const db = {}

db.user_table = require("./userTable.js")(sequelize,DataTypes);

sequelize.sync({alter:true})
.then(()=>console.log("tables created"))
.catch(()=>console.log("Error Occurring"));

module.exports = db;
