const { body } = require('express-validator')

const recursos = {
    EMPLEADOS: 'empleados',
    EMPLEADO: 'empleado'
}

const validar = recurso => {
    switch (recurso) {
        case recursos.EMPLEADOS:
            return [
                body('nombre', 'el nombre es requerido')
                    .exists()
                    .trim(),
                body('apellido', 'el apellido es requerido')
                    .exists()
                    .trim(),
                body('email', 'se requiere un email valido')
                    .trim()
                    .isEmail()
            ]
        case recursos.EMPLEADO:
            return [
                body('nombre', 'el nombre es requerido')
                    .optional()
                    .trim(),
                body('apellido', 'el apellido es requerido')
                    .optional()
                    .trim(),
                body('email', 'se requiere un email valido')
                    .optional()
                    .trim()
                    .isEmail()
            ]
        default:
            return []
    }
}

const validarData = { validar, recursos }
module.exports = validarData