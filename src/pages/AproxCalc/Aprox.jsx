import { Fragment } from "react";
import Header from "../../components/Header/header";
import GenerateDisc from './components/GenerateDisc';
//import DiscContainer from '../../components/DiscContainer';

/**
 * Calculadora de aproximaciones
 */
const Aprox = () => {

    return (
		<Fragment>
			<Header title='Aprox calculator' />
			<GenerateDisc />
			{/* <DiscContainer /> */}
		</Fragment>
	);
};

export default Aprox;