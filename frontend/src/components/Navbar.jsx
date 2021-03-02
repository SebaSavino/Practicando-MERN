import {Link} from 'react-router-dom'

const Navbar = () => (
    <nav className="navbar navbar-light bg-light">
        <form className="container-fluid justify-content-center">
            <Link 
                className="btn btn-outline-amarillo mx-2" 
                to={"/"}>Empleados</Link>
            <Link 
                className="btn btn-sm btn-outline-secondary" 
                to={"/agregar"}>Agregar</Link>
        </form>
    </nav>
)

export default Navbar