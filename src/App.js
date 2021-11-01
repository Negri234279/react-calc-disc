import './App.scss';
import FormDisc from './components/FormDisc'
import DiscContainer from './components/DiscContainer'

function App() {
	return (
		<div className="app">
			<header className="app-header">
				<h1 className="app-header-title"> Disc calculator </h1>
			</header>
			<FormDisc />
			<DiscContainer />
		</div>
	);
}

export default App;