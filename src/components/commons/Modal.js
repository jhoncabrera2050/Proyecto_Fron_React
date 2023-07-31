import React, { useContext, useState } from "react";
import { ModalContext } from "../../contexts/modal/modalContexts";


const Modal = (props) =>{

    const {showModal , modalTitle ,setShowModal} = useContext(ModalContext)

    const cerrarModal = () =>{
        console.log('cerrando')
    }
    return (
        <div className={`modal ${showModal ? 'is-active' : '' }` }>
            <div className="modal-background" >
                <div className="modal-card" >
                    <header className="modal-card-head" >
                        <p className="modal-card-title">
                            {modalTitle}
                        </p>
                        <button
                        className="delete"
                        aria-label="close"
                        onClick={ ()=>  setShowModal()}>
                            
                        </button>
                    </header>
                    <section className="modal-card-body">
                        {props.children}
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Modal;