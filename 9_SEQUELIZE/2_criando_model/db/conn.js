const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('nodesequelize', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
})


// try{
//     sequelize.authenticate();
//     console.log('Conectado ao banco de dados com sucesso');
// }catch(err){   
//     console.log('Não foi possivel conectar ao banco de dados', err);
    
// }


module.exports = sequelize;