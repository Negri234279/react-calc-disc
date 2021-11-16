import React, { Fragment } from "react";
import Header from "../../components/Header/header.jsx";
import GenDisc from './Components/GenDisc.jsx';
import DiscContainer from './Components/DiscContainer.jsx';

/**
 * Calculadora de aproximaciones
 */
const Aprox = () => {

    return (
		<Fragment>
			<Header title='Aprox calculator' />
			<GenDisc />
			<DiscContainer />
		</Fragment>
	);
};

export default Aprox;