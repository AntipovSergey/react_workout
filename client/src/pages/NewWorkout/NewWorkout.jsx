import React from 'react';

import ReactSelect from 'react-select';

import Layout from '../../components/Layout/Layout';
import Button from '../../UI/Button/Button';

import styles from './NewWorkout.module.scss';

import bgImage from '../../images/NewWorkout/newWorkout-bg.png';
import Field from '../../UI/Field/Field';
import { Link } from 'react-router-dom';

const NewWorkout = () => {
	const [name, setName] = React.useState('');
	const [exercises, setExercises] = React.useState([]);
	const handleSubmit = () => {};
	return (
		<>
			<Layout bgImage={bgImage} title='Create new workout' />
			<div className='wrapper-inner-page'>
				<form onSubmit={handleSubmit}>
					<Field
						placeholder='Name'
						value={name}
						onChange={e => setName(e.target.value)}
					/>
					<Link className={styles.darkLink} to='../new-exercise'>
						Add new exercise
					</Link>
					<ReactSelect
						classNamePrefix='select2-selection'
						placeholder='Exercises'
						title='Exercises'
						options={[
							{ value: 'Push-ups', label: 'Push-ups' },
							{ value: 'Pull - ups', label: 'Pull-ups' },
						]}
						value={exercises}
						onChange={setExercises}
						isMulti={true}
					/>
					<Button text='Create' />
				</form>
			</div>
		</>
	);
};

export default NewWorkout;
