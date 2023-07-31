import React from "react";
import { Link } from "react-router-dom";

const Menu = () =>{
    return (
        <nav className="panel">
            <p className="panel-heading">Menu de hoy </p>
            <div className="panel-block" >
                <Link  to="/" className="button is-fullwidth">
                    <span className="icon" >
                        <i className="fas fa-home">
                            Inicio
                        </i>
                    </span>
                </Link>
            </div>
            <div className="panel-block" >
                <Link to="/cliente" className="button is-fullwidth">
                        <span className="icon" >
                            <i className="fas fa-user">
                                Clientes
                            </i>
                        </span>
                </Link>
            </div>
        </nav>
    );
}

export default Menu;