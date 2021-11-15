import React, { Fragment } from "react";
import '../styles/header.scss';

/**
 * Asignar valor a un h1
 * @param {String} props.title Valor del titulo
 * @returns Nombre del titulo
 */
const Header = (props) => {

    return (

        <Fragment>
            <header className="header">
                <h1 className="header-title"> {props.title} </h1>
            </header>
        </Fragment>

    );
};

export default Header;