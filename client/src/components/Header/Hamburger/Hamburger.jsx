import React from 'react';

import Menu from '../../Menu/Menu';

import openMenu from '../../../images/Header/menuOpen.svg';
import closeMenu from '../../../images/Header/menuClose.svg';

import styles from './Hamburger.module.scss';

const Hamburger = () => {
	const [menuOpened, setMenuOpened] = React.useState(false);
	const nodeRef = React.useRef(null);

	const handleOpenMenu = () => {
		setMenuOpened(!menuOpened);
	};

	return (
		<div className={styles.wrapper}>
			<button onClick={handleOpenMenu}>
				<img
					src={!menuOpened ? openMenu : closeMenu}
					alt={!menuOpened ? 'menu opened' : 'menu closed'}
					height={31}
				/>
			</button>
			{menuOpened && <Menu />}
		</div>
	);
};

export default Hamburger;
