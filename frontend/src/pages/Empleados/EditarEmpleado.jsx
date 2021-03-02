import { editarEmpeado } from '../../redux/actions/empleadosActions'
import Title from '../../components/Title'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import validarEmpleado from './validarEmpleado'

const EditarEmpleado = ({history}) => {

    const dispatch = useDispatch()
    const empleado = useSelector(e => e.empleados.empleado)

    const [formulario, guardarFormulario] = useState({
        apellido: empleado.apellido,
        nombre: empleado.nombre,
        email: empleado.email,
        id: empleado.id
    })

    const { nombre, apellido, email } = formulario

    const actualizarFormulario = evento => {
        guardarFormulario({
            ...formulario,
            [evento.target.name]: evento.target.value
        })
    }

    const enviarFormulario = evento => {
        evento.preventDefault()
        if (!validarEmpleado(formulario)) return
        dispatch(editarEmpeado(formulario))
        history.push("/")

    }

    return <>
        <Title mensaje={`Editar a ${empleado.nombreCompleto}`} />
        <form onSubmit={enviarFormulario}>
            <div className="row justify-content-center">
                <div className="col-sm-4 m-2">
                    <input
                        type="text"
                        name="nombre"
                        value={nombre}
                        autoFocus="true"
                        autoComplete="off"
                        placeholder="Nombre"
                        className="form-control"
                        onChange={actualizarFormulario}
                    />
                </div>
                <div className="col-sm-4 m-2">
                    <input
                        type="text"
                        name="apellido"
                        value={apellido}
                        autoComplete="off"
                        placeholder="Apellido"
                        className="form-control"
                        onChange={actualizarFormulario}
                    />
                </div>
                <div className="col-sm-4 m-2">
                    <input
                        type="email"
                        name="email"
                        value={email}
                        autoComplete="off"
                        placeholder="Emial"
                        className="form-control"
                        onChange={actualizarFormulario}
                    />
                </div>
                <div className="col-sm-4 m-2">
                    <button
                        className="btn btn-azul"
                    >Editar</button>
                </div>
            </div>
        </form>
    </>
}

export default EditarEmpleado