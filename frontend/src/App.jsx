import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// Paginas
import AgregarEmpleado from './pages/Empleados/AgregarEmpleado'
import EditarEmpleado from './pages/Empleados/EditarEmpleado'
import NotFoundPage from './pages/NotFoundPage'
import Empleados from './pages/Empleados'

// Componentes
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const App = () => {
    return <Router>
        <Navbar />
        <div className="container">
            <Switch>
                <Route exact path="/" component={Empleados} />
                <Route exact path="/agregar" component={AgregarEmpleado} />
                <Route exact path="/editar/:id" component={EditarEmpleado} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
        <Footer />
    </Router>
}

export default App