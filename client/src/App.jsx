import { Routes, Route } from 'react-router-dom';
import Error404 from './pages/404';

import { useAuth } from './hooks/useAuth';

import { routes } from './routes';

function App() {
	const { isAuth } = useAuth();
	return (
		<div>
			<Routes>
				{routes.map(route => {
					if (route.auth && !isAuth) {
						return false;
					}
					return (
						<Route
							key={route.path}
							path={route.path}
							exact={route.exact}
							element={route.component}
							title={route.title}
						/>
					);
				})}
				<Route path='*' element={<Error404 />} />
			</Routes>
		</div>
	);
}

export default App;
