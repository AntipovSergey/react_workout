import React from 'react';

import styles from './Button.module.scss';

const Button = ({ text, callback, style = 'default' }) => {
	return (
		<div className={styles.wrapper}>
			<button className={styles[style]} onClick={callback}>
				{text}
			</button>
		</div>
	);
};

export default Button;
