import React from 'react';

import Layout from '../../components/Layout/Layout';
import Button from '../../UI/Button/Button';

import bgImage from '../../images/Authorization/authorization-bg.jpg';
import Field from '../../UI/Field/Field';

import styles from './Authorization.module.scss';
import Alert from '../../UI/Alert/Alert';

const Authorization = () => {
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [type, setType] = React.useState('Auth');

	const handleSubmit = e => {
		e.preventDefault();

		if (type === 'Auth') {
			console.log('Auth');
		} else {
			console.log('Reg');
		}
	};

	return (
		<>
			<Layout bgImage={bgImage} title='Sign in || Sign up' />
			<div className='wrapper-inner-page'>
				{true && <Alert text='You have been authorized successfully' />}
				<form onSubmit={handleSubmit}>
					<Field
						placeholder='Enter email'
						value={email}
						onChange={e => setEmail(e.target.value)}
						required
					/>
					<Field
						placeholder='Enter password'
						value={password}
						onChange={e => setPassword(e.target.value)}
						required
					/>
					<div className={styles.buttonsWrapper}>
						<Button text='Sign in' callback={() => setType('Auth')} />
						<Button text='Sign up' callback={() => setType('Reg')} />
					</div>
				</form>
			</div>
		</>
	);
};

export default Authorization;
