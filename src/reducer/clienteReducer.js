import { OBTENER_CLIENTES, REGISTRAR_CLIENTES } from "../const/actionTypes";

export default(state, action) =>{
    switch(action.type){
        case OBTENER_CLIENTES : 
            return {
                ...state,
                clientesList : action.payload
            };
        case REGISTRAR_CLIENTES : 
            return {
                ...state,
                clientesList : [...state.clientesList, action.payload]
            };
        default:
            return state;
    }
}