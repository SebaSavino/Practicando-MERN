import {
    OBTENER_EMPLEADOS_PENDIENTE,
    OBTENER_EMPLEADOS_RECHAZADO,
    OBTENER_EMPLEADOS_COMPLETADO,
    //---------------------------
    ELIMINAR_EMPLEADO_PENDIENTE,
    ELIMINAR_EMPLEADO_RECHAZADO,
    ELIMINAR_EMPLEADO_COMPLETADO,
    //---------------------------
    AGREGAR_EMPLEADO_PENDIENTE,
    AGREGAR_EMPLEADO_RECHAZADO,
    AGREGAR_EMPLEADO_COMPLETADO,
    //-------------------------
    OBTENER_EMPLEADO_EDITAR,
    EDITAR_EMPLEADO_PENDIENTE,
    EDITAR_EMPLEADO_RECHAZADO,
    EDITAR_EMPLEADO_COMPLETADO
} from '../types/empleados'


import backend from '../../backend'
import Notificacion from '../../Notificacion'

//-------------------------------------------------------
export const obtenerEmpleados = () => async dispatch => {
    dispatch(obtenerEmpleadosPendiente())
    try {
        const respuesta = await backend('empleados')
        dispatch(obtenerEmpleadosCompletado(respuesta.data))
    } catch (error) {
        dispatch(obtenerEmpleadosRechazado())
        Notificacion.mostrar(
            Notificacion.tipos.ERROR,
            'Hubo un problema'
        )
    }
}

const obtenerEmpleadosPendiente = () => ({
    type: OBTENER_EMPLEADOS_PENDIENTE,
    payload: true  // Esperando
})


const obtenerEmpleadosRechazado = () => ({
    type: OBTENER_EMPLEADOS_RECHAZADO,
    payload: false  // Deja de esperar
})

const obtenerEmpleadosCompletado = empleados => ({
    type: OBTENER_EMPLEADOS_COMPLETADO,
    payload: empleados
})


//-------------------------------------------------------
export const eliminarEmpleado = id => async dispatch => {
    dispatch(eliminarEmpleadoPendiente())
    try {
        await backend.delete(`empleados/${id}`)
        dispatch(eliminarEmpleadoCompletado(id))
        Notificacion.mostrar(
            Notificacion.tipos.EXITO,
            'Empleado eliminado'
        )
    } catch (error) {
        dispatch(eliminarEmpleadoRechazado())
        Notificacion.mostrar(
            Notificacion.tipos.ERROR,
            'Hubo un problema'
        )
    }
}

const eliminarEmpleadoPendiente = () => ({
    type: ELIMINAR_EMPLEADO_PENDIENTE,
    payload: true
})

const eliminarEmpleadoRechazado = () => ({
    type: ELIMINAR_EMPLEADO_RECHAZADO,
    payload: false
})

const eliminarEmpleadoCompletado = id => ({
    type: ELIMINAR_EMPLEADO_COMPLETADO,
    payload: id
})


//------------------------------------------------------------
export const agregarEmpleado = empleado => async dispatch => {
    dispatch(agregarEmpleadoPendiente())
    try {
        const respuesta = await backend.post('empleados', empleado)
        dispatch(agregarEmpleadoCompletado(respuesta.data))
        Notificacion.mostrar(
            Notificacion.tipos.EXITO,
            'Empleado agregado'
        )
    } catch (error) {
        dispatch(agregarEmpleadoRechazado())
        Notificacion.mostrar(
            Notificacion.tipos.ERROR,
            'Hubo un problema'
        )
    }
}

const agregarEmpleadoPendiente = () => ({
    type: AGREGAR_EMPLEADO_PENDIENTE,
    payload: true
})

const agregarEmpleadoRechazado = () => ({
    type: AGREGAR_EMPLEADO_RECHAZADO,
    payload: false
})

const agregarEmpleadoCompletado = empleado => ({
    type: AGREGAR_EMPLEADO_COMPLETADO,
    payload: empleado
})


//----------------------------------------------------------
export const editarEmpeado = empleado => async dispatch => {
    dispatch(editarEmpleadoPendiente())
    try {
        const respuesta = await backend.put(`empleados/${empleado.id}`, empleado)
        dispatch(editarEmpleadoCompletado(empleado))
        Notificacion.mostrar(
            Notificacion.tipos.EXITO,
            'Empleado modificado'
        )
    } catch (error) {
        dispatch(editarEmpleadoRechazado())
        Notificacion.mostrar(
            Notificacion.tipos.ERROR,
            'Hubo un problema'
        )
    }
}


const editarEmpleadoPendiente = () => ({
    type:EDITAR_EMPLEADO_PENDIENTE,
    payload: true
})

const editarEmpleadoRechazado = () => ({
    type:EDITAR_EMPLEADO_RECHAZADO,
    payload: false
})

const editarEmpleadoCompletado = empleado => ({
    type:EDITAR_EMPLEADO_COMPLETADO,
    payload: empleado
})


export const obtenerEmpleadoEditar = empleado => dispatch => {
    dispatch(colocarEmpleadoEditar(empleado))
}

const colocarEmpleadoEditar = empleado => ({
    type:OBTENER_EMPLEADO_EDITAR,
    payload: empleado
})