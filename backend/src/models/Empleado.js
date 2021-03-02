const { DataTypes } = require('sequelize')
const db = require('../config/db')

const Empleado = db.define('Empleado', {
    nombre: DataTypes.STRING(25),
    apellido: DataTypes.STRING(25),
    email: DataTypes.STRING(100),
    nombreCompleto: {
        type: DataTypes.VIRTUAL(),
        get() {
            const nombre = this.getDataValue('nombre')
            const apellido = this.getDataValue('apellido')
            return `${apellido}, ${nombre}`
        }
    }
})

module.exports = Empleado