import React, {useContext} from "react";
import { ModalContext } from "../../contexts/modal/modalContexts";

const RowCliente = ({cliente}) =>{


    const {showModal , modalTitle , setModalTitle ,setShowModal} = useContext(ModalContext)

    const abriModalModificarCliente = () => {
        setModalTitle('Modificando cliente');
        setShowModal(true);
    }

    const abriModalEliminarCliente = () => {
        setModalTitle('¿Desea eliminar?');
        setShowModal(true);
    }

    return(
        <tr>
            <td>
                <button  
                class="button is-small is-info mr-1" 
                title="modificar"
                onClick={() => abriModalModificarCliente()}>
                    <span class="icon is-small" >
                        <i class="fas fa-edit" ></i>
                    </span>
                </button>
                <button 
                class="button is-small is-danger" 
                title="eliminar" 
                onClick={() => abriModalEliminarCliente()}>
                    <span class="icon is-small" >
                        <i class="fas fa-trash-alt" ></i>
                    </span>
                </button>
            </td>
            <td>{cliente.nombres}</td>
            <td>{cliente.apellidos}</td>
            <td>{cliente.direccion}</td>
            <td>{cliente.telefono}</td>
            <td>{cliente.email}</td>
        </tr>
    )
}

export default RowCliente;