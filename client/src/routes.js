import Authorization from './pages/Authorization/Authorization';
import Home from './pages/Home/Home.jsx';
import NewWorkout from './pages/NewWorkout/NewWorkout.jsx';

export const routes = [
	{
		path: '/',
		exact: true,
		component: <Home />,
		auth: false,
		title: 'Exercises for the shoulders',
	},
	{ path: '/profile', exact: false, component: <Authorization />, auth: false },
	{
		path: '/new-workout',
		exact: false,
		component: <NewWorkout />,
		auth: true,
	},
];
