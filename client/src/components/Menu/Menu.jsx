import React from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

import styles from './Menu.module.scss';

import { menu } from './menuBase.js';

const Menu = () => {
	const { isAuth, setIsAuth } = useAuth();

	const handleLogout = () => {
		localStorage.removeItem('token');
		setIsAuth(false);
	};

	console.log(isAuth);

	return (
		<div className={styles.wrapper}>
			<ul>
				{menu.map(item => (
					<li key={item.title}>
						<Link to={item.link}>{item.title}</Link>
					</li>
				))}
				<li>
					<a onClick={handleLogout}>Logout</a>
				</li>
			</ul>
		</div>
	);
};

export default Menu;
