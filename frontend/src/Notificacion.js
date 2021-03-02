import Swal from 'sweetalert2'

const tipos = {
    ERROR: 'error',
    EXITO: 'success',
    ADVERTENCIA: 'warning'
}

const mostrar = (tipo, mensaje) => {
    Swal.fire({
        toast: true,
        icon: tipo,
        title: mensaje,
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false
    })
}

const Notificacion = { mostrar, tipos }
export default Notificacion

