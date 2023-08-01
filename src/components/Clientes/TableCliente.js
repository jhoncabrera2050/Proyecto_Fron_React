import React, { useState } from "react";
import RowCliente from "./RowCliente";


const TableCliente = () =>{



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