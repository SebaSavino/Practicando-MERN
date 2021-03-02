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

const initialState = {
    empleados: [],
    empleado: null,
    esperando: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        // Obtener empleados.............
        case OBTENER_EMPLEADOS_PENDIENTE:
        case OBTENER_EMPLEADOS_RECHAZADO:
            return {
                ...state,
                esperando: action.payload
            }
        case OBTENER_EMPLEADOS_COMPLETADO:
            return {
                ...state,
                esperando: false,
                empleados: action.payload
            }
        // Eliminar empleado ............
        case ELIMINAR_EMPLEADO_PENDIENTE:
        case ELIMINAR_EMPLEADO_RECHAZADO:
            return {
                ...state,
                esperando: action.payload
            }
        case ELIMINAR_EMPLEADO_COMPLETADO:
            return {
                ...state,
                esperando: false,
                empleados: state.empleados.filter(e => e.id !== action.payload)
            }
        // Agregar empleado
        case AGREGAR_EMPLEADO_PENDIENTE:
        case AGREGAR_EMPLEADO_RECHAZADO:
            return {
                ...state,
                esperando: action.payload
            }
        case AGREGAR_EMPLEADO_COMPLETADO:
            return {
                ...state,
                esperando: false,
                empleados: [action.payload, ...state.empleados]
            }
        // Editar empleado....
        case OBTENER_EMPLEADO_EDITAR:
            return {
                ...state,
                empleado: action.payload
            }
        case EDITAR_EMPLEADO_PENDIENTE:
        case EDITAR_EMPLEADO_RECHAZADO:
            return {
                ...state,
                esperando: action.payload
            }
        case EDITAR_EMPLEADO_COMPLETADO:
            return {
                ...state,
                esperando: false,
                empleados: state.empleados.map(e => {
                    if (e.id === action.payload.id) {
                        return action.payload
                    } else {
                        return e
                    }
                })
            }
        default:
            return state
    }
}