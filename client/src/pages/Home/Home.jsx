import React from 'react';

import Button from '../../UI/Button/Button';

import styles from './Home.module.scss';

const Home = () => {
	return (
		<div className={styles.wrapper}>
			<Button text='Name' style='main' callback={() => {}} />
		</div>
	);
};

export default Home;
