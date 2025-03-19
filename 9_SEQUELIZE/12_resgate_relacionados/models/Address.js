const { DataTypes } = require('sequelize');
const db = require('../db/conn');
const User = require('./User');

const Address = db.define('Address', {
    street: {
        type: DataTypes.STRING,
        required: true,
    },
    number: {
        type: DataTypes.STRING,
        required: true,
    },
    city: {
        type: DataTypes.STRING,
        required: true,
    }
});
User.hasMany(Address); // Aqui um usuário tem muitos endereços
Address.belongsTo(User); // Aqui um endereço pertence a um usuário

module.exports = Address;