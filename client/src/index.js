import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { AuthContext } from './context/AuthContext';

import App from './App';

import './styles/index.scss';

const queryClient = new QueryClient();

const AppProvider = () => {
	const [isAuth, setIsAuth] = React.useState(false);

	return (
		<AuthContext.Provider value={{ isAuth, setIsAuth }}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</AuthContext.Provider>
	);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<QueryClientProvider client={queryClient}>
		<AppProvider />
		<ReactQueryDevtools initialIsOpen={false} />
	</QueryClientProvider>
);
