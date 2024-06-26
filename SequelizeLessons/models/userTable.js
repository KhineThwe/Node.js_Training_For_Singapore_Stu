module.exports = (sequelize,DataTypes)=>{
    const user = sequelize.define("user_table",{
       first_name:{
        type:DataTypes.STRING,
        allowNull:false,
       },
       last_name:{
        type:DataTypes.STRING,
       },
    });
    return user;
}