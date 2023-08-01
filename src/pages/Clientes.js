import React from "react";
import Layout from "../components/commons/Layout";
import TableCliente from "../components/Clientes/TableCliente";
import ToolbarCliente from "../components/Clientes/ToolbarCliente";
import Modal from "../components/commons/Modal";
import FormCliente from "../components/Clientes/FormCliente";
import {ClienteContextProvider} from "../contexts/clienteContext";
const Cliente = () => {
    return (
        <Layout>
            <ClienteContextProvider>
                <div className="panel" >
                    <div className="panel-heading" >
                        Clientes
                    </div>
                    <div className="box" >
                        <ToolbarCliente></ToolbarCliente>
                        <TableCliente></TableCliente>
                    </div>
                </div>
                <Modal>
                    <FormCliente></FormCliente>
                </Modal>
            </ClienteContextProvider>
        </Layout>
    );
}

export default Cliente;