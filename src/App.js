import { Fragment } from 'react';
import { Route, Switch } from 'react-router';
import CalcDisc from './pages/CalcDisc';
import Aprox from './pages/Aprox';

const App = () => {

	return (

		<Fragment>
				<Switch>
					<Route path="/" exact>
						<CalcDisc />
					</Route>
				<Route path="/aprox">
					<Aprox />
				</Route>
				</Switch>		
		</Fragment>

	);

}

export default App;