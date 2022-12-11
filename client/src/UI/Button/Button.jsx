import React from 'react';

import styles from './Button.module.scss';

const Button = ({ text, callback, style = 'default' }) => {
	return (
		<button className={styles[style]} onClick={callback}>
			{text}
		</button>
	);
};

export default Button;
