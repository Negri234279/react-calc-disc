import { Fragment } from "react";
import Header from "../../components/Header/header";
import GenDisc from './components/GenDisc';
import DiscContainer from '../../components/DiscContainer';

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