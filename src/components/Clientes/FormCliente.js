import React, { useContext, useState } from "react";
import { ModalContext } from "../../contexts/modal/modalContexts";

const FormCliente = () => {
    const { setShowModal} = useContext(ModalContext);

    const clienteDefault = {
        nombres : '',
        apellidos : '',
        direccion : '',
        telefono : '',
        email : '',
    }
    const [cliente, setCliente] = useState({clienteDefault});

    const handleOnSubmit = e =>{
        e.preventDefault();
        console.log(cliente)
    }

    const handleChange = e =>{
        setCliente({
            ...cliente,
            [e.target.name] : e.target.value
        })
    }

    const cerrarModal = () =>{
        setShowModal(false);
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <div className="field is-horizontal">
                <div className="field-label is-normal" >
                    <label className="label">Nombre completo</label>
                </div>
                <div className="field-body" >
                    <div className="field">
                        <p className="control is-expanded has-icons-left">

                            <input
                                className="input"
                                type="text"
                                placeholder="Nombre"
                                name="nombres"
                                value={cliente.nombres}
                                onChange={handleChange}>
                            </input>
                            <span className="icon is-small is-left" >
                                <i className="fas fa-user"></i>
                            </span>
                        </p>
                    </div>
                    <div className="field" >
                        <p className="control is-expanded">
                            <input
                                className="input"
                                type="text"
                                placeholder="Apellidos"
                                name="apellidos"
                                value={cliente.apellidos}
                                onChange={handleChange}>
                            </input>
                        </p>
                    </div>
                </div>
            </div>
            <div className="field is-horizontal">
                <div className="field-label is-normal" >
                    <label className="label">Direccion</label>
                </div>
                <div className="field-body" >
                    <div className="field">
                        <p className="control is-expanded has-icons-left">

                            <input
                                className="input"
                                type="text"
                                placeholder="Direccion"
                                name="Direccion"
                                value={cliente.direccion}
                                onChange={handleChange}>
                            </input>
                            <span className="icon is-small is-left" >
                                <i className="fas fa-map-marked-alt"></i>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="field is-horizontal">
                <div className="field-label is-normal" >
                    <label className="label">Telefono</label>
                </div>
                <div className="field-body" >
                    <div className="field">
                        <p className="control is-expanded has-icons-left">

                            <input
                                className="input"
                                type="text"
                                placeholder="Telefono"
                                name="Direccion"
                                value={cliente.telefono}
                                onChange={handleChange}>
                            </input>
                            <span className="icon is-small is-left" >
                                <i className="fas fa-phone"></i>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="field is-horizontal">
                <div className="field-label is-normal" >
                    <label className="label">Email</label>
                </div>
                <div className="field-body" >
                    <div className="field">
                        <p className="control is-expanded has-icons-left">

                            <input
                                className="input"
                                type="text"
                                placeholder="Direccion"
                                name="Direccion"
                                value={cliente.direccion}
                                onChange={handleChange}>
                            </input>
                            <span className="icon is-small is-left" >
                                <i className="fas fa-envelope"></i>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="field is-horizontal">
                <div className="field-label" >

                </div>
                <div className="field">
                    <div className="control" >
                        <button type="submit" className="button is-primary mr-1">Guardar</button>
                        <button 
                        type="button" 
                        className="button"
                        onClick={() => cerrarModal()}> Cancelar </button>
                    </div>
                </div>

            </div>
        </form>
    )
}

export default FormCliente;