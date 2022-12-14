import React from 'react';

import cn from 'classnames';

import styles from './Alert.module.scss';

const Error = ({ type = 'success', text }) => {
	return (
		<div
			className={cn(styles.alert, {
				[styles.error]: type === 'error',
				[styles.info]: type === 'info',
				[styles.warning]: type === 'warning',
			})}
		>
			{text}
		</div>
	);
};

export default Error;
