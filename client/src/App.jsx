import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import NewWorkout from './pages/Profile/NewWorkout';

function App() {
	return (
		<div>
			<Routes>
				<Route
					path='/'
					exact
					element={<Home title='Exercises for the shoulders' />}
				/>
				<Route
					path='/new-workout'
					element={<NewWorkout title='Create new workout' />}
				/>
			</Routes>
		</div>
	);
}

export default App;
