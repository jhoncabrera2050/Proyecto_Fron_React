import React, { useContext, useEffect, useState } from "react";
import RowCliente from "./RowCliente";
import { ClienteContext } from "../../contexts/clienteContext";


const TableCliente = () =>{

    const {clientesList, obtenerClientes} = useContext(ClienteContext);

    useEffect(() => {
        obtenerClientes();
    }, []);
    if(clientesList.length === 0) return  <center> <p>No existe clientes.</p> </center> 
    return (
        <div className="container" >
            <table className="table is-hoverable is-fullwidth" >
                <thead>
                    <tr>
                        <td>Acciones</td>
                        <td>Nombres</td>
                        <td>Apellidos</td>
                        <td>Direccion</td>
                        <td>Telefono</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        clientesList.map(cliente =>(
                            <RowCliente cliente={cliente} key={cliente.idCliente}></RowCliente>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default TableCliente;