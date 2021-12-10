import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import CalcDisc from './views/all/pages/DiscCalc/CalcDisc';
import Aprox from './views/all/pages/AproxCalc/Aprox';
import NoMatch from './components/NoMatch';
import './styles/app.scss';

const App = () => {
	return (
		<div className='container'>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<CalcDisc />} />
					<Route path='/aprox' element={<Aprox />} />
					<Route path='*' element={<NoMatch />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;