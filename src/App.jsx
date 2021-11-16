import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import CalcDisc from './pages/DiscCalc/CalcDisc.jsx';
import Aprox from './pages/AproxCalc/Aprox.jsx';
import NoMatch from './components/NoMatch.jsx';
import './styles/app.scss';

const App = () => {
	return (
		<div className='container'>
			<Router>
				<Navbar />
				<Switch>
					<Route path='/' exact component={CalcDisc} />
					<Route path='/aprox' exact component={Aprox} />
					<Route path='*' exact component={NoMatch} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;