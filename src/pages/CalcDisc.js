import React, { Fragment } from "react";
import Header from "../components/header";
import FormDisc from '../components/FormDisc';
import DiscContainer from '../components/DiscContainer';

const CalcDisc = () => {

    return (

        <Fragment>
            <Header title="Disc calculator" />
            <FormDisc />
            <DiscContainer />
        </Fragment>

    );
};

export default CalcDisc;