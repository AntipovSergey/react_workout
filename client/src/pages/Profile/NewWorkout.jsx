import React from 'react';

import Layout from '../../components/Layout/Layout';
import Button from '../../UI/Button/Button';

import styles from './NewWorkout.module.scss';

import bgImage from '../../images/NewWorkout/newWorkout-bg.png';
import Field from '../../UI/Field/Field';

const NewWorkout = ({ title }) => {
	const [name, setName] = React.useState('');
	const handleSubmit = () => {};
	return (
		<>
			<Layout bgImage={bgImage} title='Create new workout' />
			<div className={styles.wrapper}>
				<form onSubmit={handleSubmit}>
					<Field
						placeholder='Name'
						value={name}
						onChange={e => setName(e.target.value)}
					/>
					<Button text='Create' />
				</form>
			</div>
		</>
	);
};

export default NewWorkout;
