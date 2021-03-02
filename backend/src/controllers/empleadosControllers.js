const { validationResult } = require('express-validator')
const Empleado = require('../models/Empleado')

/*
    --CRUD--
    ✔️ CREATE
    ✔️ READ ALL
    ✔️ READ ONE
    ✔️ UPDATE
    ✔️ DELETE
*/


exports.obtenerEmpleados = async (_, res) => {
    try {
        const empleados = await Empleado.findAll({ order: [['id', 'DESC']] })
        res.status(200).json(empleados)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Hubo un error' })
    }
}

exports.obtenerEmpleado = async (req, res) => {
    try {
        const id = Number(req.params.id) || 0
        const empleado = await Empleado.findByPk(id)
        if (!empleado) {
            res.status(404).json({ error: 'Empleado no encontrado' })
        } else {
            res.status(200).json(empleado)
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Hubo un error' })
    }
}

// req -> request -> peticion
// res -> response -> respuesta
exports.agregarEmpleado = async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() })
        } else {
            const empleado = await Empleado.create(req.body)
            res.status(201).json(empleado)
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Hubo un error' })
    }
}

exports.editarEmpleado = async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() })
        } else {
            const id = Number(req.params.id) || 0
            const resultado = await Empleado.update(req.body, {
                where: { id }
            })
            if (!resultado[0]) {
                res.status(404).json({ error: 'Empleado no encontrado' })
            } else {
                res.status(200).json({ msg: 'Alumno modificado' })
            }
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Hubo un error' })
    }
}

exports.eliminarEmpleado = async (req, res) => {
    try {
        const id = Number(req.params.id) || 0
        const resultado = await Empleado.destroy({
            where: { id }
        })
        console.log(resultado)
        if (!resultado) {
            res.status(404).json({ error: 'Empleado no encontrado' })
        } else {
            res.status(200).json({ msg: 'Alumno eliminado' })
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Hubo un error' })
    }
}