import React from 'react';

import Button from '../../UI/Button/Button';
import Counters from '../../UI/Counters/Counters';

import styles from './Home.module.scss';

const Home = () => {
	return (
		<div className={styles.wrapper}>
			<Button text='Name' style='main' callback={() => {}} />
			<h1>Exercises for the shoulders</h1>
			<Counters />
		</div>
	);
};

export default Home;
