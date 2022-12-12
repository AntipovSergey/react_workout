import React from 'react';

import Layout from '../../components/Layout/Layout';
import Button from '../../UI/Button/Button';
import Counters from '../../UI/Counters/Counters';

import styles from './Home.module.scss';

import bgImage from '../../images/Home/home-bg.jpg';

const Home = ({ title }) => {
	return (
		<Layout height='100vh' bgImage={bgImage}>
			<div className={styles.wrapper}>
				<Button text='Name' type='main' callback={() => {}} />
				<h1>{title}</h1>
				<Counters />
			</div>
		</Layout>
	);
};

export default Home;
