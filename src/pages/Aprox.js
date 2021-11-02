import React, { Fragment } from "react";
import Header from "../components/header";
import FormDisc from '../components/FormDisc';
import DiscContainer from '../components/DiscContainer';

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