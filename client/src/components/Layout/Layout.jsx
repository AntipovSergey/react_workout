import React from 'react';

import Header from '../Header/Header';

import styles from './Layout.module.scss';

const Layout = ({
	children,
	height = '350px',
	bgImage,
	bgShading,
	borderRadius,
}) => {
	return (
		<div
			className={styles.wrapper}
			style={{
				height,
				backgroundImage: `url(${bgImage})`,
				backgroundColor: `${bgShading}`,
				borderRadius: `${borderRadius}`,
			}}
		>
			<Header />
			{children}
		</div>
	);
};

export default Layout;
