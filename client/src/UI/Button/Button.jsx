import React from 'react';

import styles from './Button.module.scss';

const Button = ({ text, callback, type = 'default' }) => {
	return (
		<div className={styles.wrapper}>
			<button className={styles[type]} onClick={callback}>
				{text}
			</button>
		</div>
	);
};

export default Button;
