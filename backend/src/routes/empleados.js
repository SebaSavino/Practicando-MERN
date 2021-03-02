const controller = require('../controllers/empleadosControllers')
const { validar, recursos } = require('../middlewares/validarData')
const { Router } = require('express')

const router = new Router()
router.get('/', controller.obtenerEmpleados)
router.get('/:id', controller.obtenerEmpleado)
router.delete('/:id', controller.eliminarEmpleado)
router.put('/:id', validar(recursos.EMPLEADO), controller.editarEmpleado)
router.post('/', validar(recursos.EMPLEADOS), controller.agregarEmpleado)

module.exports = router