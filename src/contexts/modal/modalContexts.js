import React, { createContext, useState } from "react";


// variable para crear un contexto
export const ModalContext = createContext();

export const ModalContextProvider = props => {
    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    
    return (
        <ModalContext.Provider
        value=
        {{
            showModal,
            modalTitle,
            setShowModal,
            setModalTitle
        }}
        >
            {props.children}
        </ModalContext.Provider>
    )
}