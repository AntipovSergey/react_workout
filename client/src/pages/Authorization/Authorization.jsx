import React from 'react';
import { useMutation } from 'react-query';

import Layout from '../../components/Layout/Layout';
import Button from '../../UI/Button/Button';
import Alert from '../../UI/Alert/Alert';
import Loader from '../../UI/Loader';

import bgImage from '../../images/Authorization/authorization-bg.jpg';
import Field from '../../UI/Field/Field';

import styles from './Authorization.module.scss';
import { $api } from '../../api/api';

const Authorization = () => {
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [type, setType] = React.useState('Auth');

	const {
		mutate: register,
		isLoading,
		error,
	} = useMutation(
		'Registration',
		() =>
			$api({
				url: '/users',
				type: 'POST',
				body: { email, password },
			}),
		{
			onSuccess(data) {
				localStorage.setItem('token', data.token);
			},
		}
	);

	const handleSubmit = e => {
		e.preventDefault();

		if (type === 'Auth') {
			console.log('Auth');
		} else {
			register();
		}
	};

	return (
		<>
			<Layout bgImage={bgImage} title='Sign in || Sign up' />
			<div className='wrapper-inner-page'>
				{error && <Alert text={error} type='error' />}
				{isLoading && <Loader />}
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
