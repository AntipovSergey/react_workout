import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';

import bgImage from './images/Home/home-bg.jpg';

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' exact element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
