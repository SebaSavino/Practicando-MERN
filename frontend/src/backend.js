import Axios from 'axios'

const backend = Axios.create({
    baseURL: 'http://127.0.0.1:4000/api/v1/',
    timeout: 4000
})

export default backend