import React from 'react';

import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import profile from '../../images/Header/profile.svg';
import back from '../../images/Header/back.svg';

import styles from './Header.module.scss';
import Hamburger from './Hamburger/Hamburger';

const Header = () => {
	const { pathname } = useLocation();

	return (
		<div className={styles.wrapper}>
			{pathname === '/' ? (
				<Link to='/profile'>
					<button>
						<img src={profile} alt='Profile' height={31} />
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
