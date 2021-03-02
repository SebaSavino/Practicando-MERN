import { 
    eliminarEmpleado,
    obtenerEmpleadoEditar
} from '../../redux/actions/empleadosActions'
import { useDispatch, useSelector } from 'react-redux'
import {useHistory} from 'react-router-dom'
import Swal from 'sweetalert2'


const Empleado = ({ empleado }) => {
    const { id, nombre, apellido, email, nombreCompleto } = empleado

    const history = useHistory()
    const dispatch = useDispatch()
    const esperando = useSelector(e => e.empleados.esperando)

    const redireccionarEdicion = () => {
        dispatch(obtenerEmpleadoEditar(empleado))
        history.push(`/editar/${empleado.id}`)
    }
    const eliminar = () => {
        Swal.fire({
            title: `Eliminar a ${nombreCompleto}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminalo!',
            cancelButtonText: 'No, me arrepenti xd'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(eliminarEmpleado(id))
            }
        })
    }

    return <tr>
        <td>
            <button
                onClick={redireccionarEdicion} 
                className="btn btn-sm btn-outline-secondary"
            >{id}</button>
        </td>
        <td>{nombre}</td>
        <td>{apellido}</td>
        <td>{email}</td>
        <td>
            {
                esperando ?
                    <button className="btn btn-sm btn-danger" type="button" disabled>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        <span className="visually-hidden">Loading...</span>
                    </button>
                    : <button
                        className="btn btn-sm btn-danger"
                        onClick={eliminar}
                    >X</button>
            }

        </td>
    </tr>
}

export default Empleado