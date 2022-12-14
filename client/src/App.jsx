import { Routes, Route } from 'react-router-dom';

import Authorization from './pages/Authorization/Authorization';
import Home from './pages/Home/Home';
import NewWorkout from './pages/NewWorkout/NewWorkout';

function App() {
	return (
		<div>
			<Routes>
				<Route
					path='/'
					exact={true}
					element={<Home title='Exercises for the shoulders' />}
				/>
				<Route path='/new-workout' element={<NewWorkout />} />
				<Route path='/profile' element={<Authorization />} />
			</Routes>
		</div>
	);
}

export default App;
