import React,{createContext, useReducer} from "react";
import clienteReducer from "../reducer/clienteReducer";
import { OBTENER_CLIENTES } from "../const/actionTypes";
import { REGISTRAR_CLIENTES } from "../const/actionTypes";
export const ClienteContext = createContext();

export const ClienteContextProvider = props => {
    const initialState = {
        clientesList:[]
    }
    const [state, dispatch] = useReducer(clienteReducer, initialState);
    const obtenerClientes = () =>{

        const clientes = [
            {
                "idCLiente" : 1,
                "nombres" :"Freddy",
                "apellidos" : "Aguilar",
                "direccion" : "av . lincon",
                "telefono" : 987568963,
                "email" : "jhoncabrera2050@gmail.com"
            },
            {
                "idCLiente" : 2,
                "nombres" :"Jhon",
                "apellidos" : "Cabrera",
                "direccion" : "av . lincon",
                "telefono" : 987568963,
                "email" : "jhoncabrera2050@gmail.com"
            },
            {
                "idCLiente" : 3,
                "nombres" :"Diego",
                "apellidos" : "Cabrera",
                "direccion" : "av . lincon",
                "telefono" : 987568963,
                "email" : "jhoncabrera2050@gmail.com"
            },
        ];

        dispatch({
            type : OBTENER_CLIENTES,
            payload : clientes
        })
    }
    const registrarClientes = cliente =>{
        dispatch({
            type: REGISTRAR_CLIENTES,
            peyload : cliente
        })
    }
    return(
        <ClienteContext.Provider
        value={{
            clientesList: state.clientesList,
            obtenerClientes,
            registrarClientes
        }}>
            {props.children}

        </ClienteContext.Provider>
    )
}