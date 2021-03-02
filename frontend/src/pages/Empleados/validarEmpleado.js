import Notificacion from '../../Notificacion'

const validarEmpleado = empleado => {
    const {nombre, apellido, email} = empleado
    if(!nombre && !apellido && !email) {
        Notificacion.mostrar(
            Notificacion.tipos.ADVERTENCIA,
            'Todos los campos son requeridos'
        )
        return false  // No paso las validaciones
    }
    if(!nombre) {
        Notificacion.mostrar(
            Notificacion.tipos.ADVERTENCIA,
            'El nombre es requerido'
        )
        return false  // No paso las validaciones
    }
    if(!apellido) {
        Notificacion.mostrar(
            Notificacion.tipos.ADVERTENCIA,
            'El apellido es requerido'
        )
        return false  // No paso las validaciones
    }
    if(!email) {
        // Tambien deberiamos validar el email con una Regex para
        // verificar que si sea un email...
        Notificacion.mostrar(
            Notificacion.tipos.ADVERTENCIA,
            'El email es requerido'
        )
        return false  // No paso las validaciones
    }
    return true
}

export default validarEmpleado