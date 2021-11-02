import React, { Fragment } from "react";
import '../scss/header.scss';

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