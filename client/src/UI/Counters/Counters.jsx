import React from 'react';

import styles from './Counters.module.scss';

const counters = {
	minutes: 7,
	workouts: 2,
	kgs: 5,
};

const Counters = () => {
	return (
		<div className={styles.wrapper}>
			<ul>
				{Object.entries(counters).map(item => (
					<li key={item[0]}>
						<h2>{item[0]}</h2>
						<span>{item[1]}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Counters;
