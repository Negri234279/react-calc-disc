import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import CalcDisc from './views/all/pages/DiscCalc/CalcDisc';
import Aprox from './views/all/pages/AproxCalc/Aprox';
import NoMatch from './components/NoMatch';
import './styles/app.scss';

const App = () => {
	return (
		<div className='container'>
			<Router>
				<Navbar />
				<Switch>
					<Route path='/' exact component={CalcDisc} />
					<Route path='/aprox' exact component={Aprox} />
					<Route path='*' component={NoMatch} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;