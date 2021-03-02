import { agregarEmpleado } from '../../redux/actions/empleadosActions'
import Title from '../../components/Title'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

import validarEmpleado from './validarEmpleado'

const AgregarEmpleado = ({history}) => {

    const [formulario, guardarFormulario] = useState({
        apellido: '',
        nombre: '',
        email: ''
    })

    const dispatch = useDispatch()
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
        dispatch(agregarEmpleado(formulario))
        history.push("/")

    }

    return <>
        <Title mensaje="Agregar nuevo empleado" />
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
                    >Agregar</button>
                </div>
            </div>
        </form>
    </>
}

export default AgregarEmpleado