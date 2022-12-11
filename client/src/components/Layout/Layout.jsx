import { Outlet } from 'react-router-dom';
import React from 'react';

import Header from '../Header/Header';

import styles from './Layout.module.scss';

const Layout = () => {
	return (
		<div className={styles.wrapper}>
			<Header />
			<Outlet />
		</div>
	);
};

export default Layout;
