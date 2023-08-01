import React,{createContext, useReducer} from "react";
import clienteReducer from "../reducer/clienteReducer";
export const ClienteContext = createContext();

export const ClienteContextProvider = props => {
    const initialState = {
        clientesList:[]
    }
    const [state, dispatch] = useReducer(clienteReducer, initialState);
    return(
        <ClienteContext.Provider
        value={{
            clientesList: state.clientesList
        }}>
            {props.children}

        </ClienteContext.Provider>
    )
}