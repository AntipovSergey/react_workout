import React from 'react';

import profile from '../../images/Header/profile.svg';
import openMenu from '../../images/Header/menuOpen.svg';
import closeMenu from '../../images/Header/menuClose.svg';

import styles from './Header.module.scss';

const Header = () => {
	return (
		<div className={styles.wrapper}>
			<button>
				<img src={profile} alt='Profile' height={31} />
			</button>
			<button>
				<img src={openMenu} alt='Open menu' height={31} />
			</button>
		</div>
	);
};

export default Header;
