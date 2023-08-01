import React, {useContext} from "react";
import { ModalContext } from "../../contexts/modalContexts";
const ToolbarCliente = () =>{


    const {showModal , modalTitle , setModalTitle ,setShowModal} = useContext(ModalContext)

    const abriModal = () => {
        setModalTitle('registrar nuevo cliente');
        setShowModal(true);
    }
    return(
        <button 
        className="button is-small is-primary " 
        title="registrar"
        onClick={() => abriModal() }>

            <span className="icon is-small" >
                <i className="fas fa-plus" ></i>
            </span>
            <span>Registrar cliente</span>
        </button>
    )
}

export default ToolbarCliente;


