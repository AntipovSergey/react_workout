import React from 'react';
import { AuthContext } from '../context/AuthContext';

export const useAuth = () => {
	const { isAuth, setIsAuth } = React.useContext(AuthContext);

	return {
		isAuth,
		setIsAuth,
	};
};
