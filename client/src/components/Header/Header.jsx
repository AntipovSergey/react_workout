import React from 'react';

import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

import profile from '../../images/Header/profile.svg';
import authorized from '../../images/Header/authorized.svg';
import back from '../../images/Header/back.svg';

import styles from './Header.module.scss';
import Hamburger from './Hamburger/Hamburger';

const Header = () => {
	const { pathname } = useLocation();

	const { isAuth } = useAuth();

	return (
		<div className={styles.wrapper}>
			{pathname === '/' ? (
				<Link to={isAuth ? '/auth' : '/profile'}>
					<button>
						<img
							src={isAuth ? authorized : profile}
							alt={isAuth ? 'Authorized' : 'Profile'}
							height={31}
						/>
					</button>
				</Link>
			) : (
				<Link to='/'>
					<button>
						<img src={back} alt='Back' height={31} />
					</button>
				</Link>
			)}
			<Hamburger />
		</div>
	);
};

export default Header;
