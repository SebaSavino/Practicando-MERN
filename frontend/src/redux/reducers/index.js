import empleadosReducer from './empleadosReducer'
import {combineReducers} from 'redux'

const reducer = combineReducers({
    empleados:empleadosReducer
})

export default reducer