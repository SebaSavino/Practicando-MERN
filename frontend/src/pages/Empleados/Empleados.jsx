import { obtenerEmpleados } from '../../redux/actions/empleadosActions'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

// componentes
import Spinner from '../../components/Spinner'
import Title from '../../components/Title'
import Empleado from './Empleado'

const Empleados = () => {

    const dispatch = useDispatch()
    const { esperando, empleados } = useSelector(estado => estado.empleados)

    useEffect(() => {
        document.title = 'Empleados'
        dispatch(obtenerEmpleados())
    }, [])

    return <>
        <Title mensaje="Lista de empleados" />
        <div className="row justify-content-center">
            <div className="col-sm-8">
                {
                    empleados.length
                        ? <div className="table-responsive">
                            <table className="table table-hover table-borderless">
                                <tbody>
                                    {empleados.map(e => (
                                        <Empleado empleado={e} key={e.id} />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        : esperando
                            ? <Spinner />
                            : <p className="text-center">
                                No hay empleados cargados aún...
                            </p>
                }

            </div>
        </div>
    </>
}

export default Empleados