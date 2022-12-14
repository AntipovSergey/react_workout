import React from 'react';

import styles from './Field.module.scss';

const Field = ({
	type = 'text',
	placeholder,
	value,
	onChange,
	required = true,
}) => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			vale={value}
			onChange={onChange}
			className={styles.field}
			required={required}
		/>
	);
};

export default Field;
