import React from 'react';
import cn from 'classnames';

import Header from '../Header/Header';

import styles from './Layout.module.scss';

const Layout = ({ children, height = '350px', bgImage, title = '' }) => {
	return (
		<div
			className={cn(styles.wrapper, { [styles.otherPage]: title })}
			style={{
				height,
				backgroundImage: `url(${bgImage})`,
			}}
		>
			<Header />
			{title && <h1 className={styles.title}>{title}</h1>}
			{children && <div>{children}</div>}
		</div>
	);
};

export default Layout;
