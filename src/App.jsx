import { Fragment } from 'react';
import { Link, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import CalcDisc from './pages/CalcDisc.jsx';
import Aprox from './pages/Aprox.jsx';
import NoMatch from './components/NoMatch.jsx'
import "./app.scss";

const App = () => {

	return (

		<Fragment>
			<nav className="menu">
				<div>
					<Link to="/"> Home </Link>
				</div>
				<div>
					<Link to="/aprox"> Aprox </Link>
				</div>

				
			</nav>

			<Switch>
				<Route path="/" index exact>
					<CalcDisc />
				</Route>
				<Route path="/aprox">
					<Aprox />
				</Route>
				<Route path="*">
					<NoMatch />
				</Route>
			</Switch>		
		</Fragment>

	);

}

export default App;