import React, { Fragment } from "react";
import Header from "../components/header.jsx";
import FormDisc from '../components/FormDisc.jsx';
import DiscContainer from '../components/DiscContainer.jsx';

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