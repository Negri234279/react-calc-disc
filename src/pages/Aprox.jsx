import React, { Fragment } from "react";
import Header from "../components/header.jsx";
import FormDisc from '../components/FormDisc.jsx';
import DiscContainer from '../components/DiscContainer.jsx';

const Aprox = () => {

    return (

        <Fragment>
            <Header title="Aprox calculator" />
            <FormDisc />
            <DiscContainer />
        </Fragment>

    );
};

export default Aprox;