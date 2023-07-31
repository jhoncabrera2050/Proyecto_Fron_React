import React, { useState } from "react";
import RowCliente from "./RowCliente";


const TableCliente = () =>{

    const [clientesList, setClientesList] = useState([
        {   
            "idCliente":"1",
            "nombres":"Juan",
            "apellidos":"Lopez",
            "direccion":"av. lincon",
            "telefono":"+519705863",
            "email":"juan@gmail.com"
        },
        {
            "idCliente":"2",
            "nombres":"Gyan",
            "apellidos":"Cabrera",
            "direccion":"av. san antonio",
            "telefono":"+948047002",
            "email":"juancabrera@gmail.com"
        },
        {
            "idCliente":"3",
            "nombres":"diego",
            "apellidos":"Cabrera",
            "direccion":"av. san antonio",
            "telefono":"+948047002",
            "email":"juancabrera@gmail.com"
        }
    ]);

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