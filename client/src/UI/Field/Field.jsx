import React from 'react';

import styles from './Field.module.scss';

const Field = ({ type = 'text', placeholder, value, onChange }) => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			vale={value}
			onChange={onChange}
			className={styles.field}
		/>
	);
};

export default Field;
