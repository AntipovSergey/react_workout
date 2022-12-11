import React from 'react';

import profile from '../../images/header/profile.svg';
import openMenu from '../../images/header/menuOpen.svg';
import closeMenu from '../../images/header/menuClose.svg';

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
