import React from 'react';
import s from './Header.module.css';
import PropTypes from 'prop-types';
// Components
import CustomLink from '../CustomLink/CustomLink.component';
const Header = ({ destroyDataCount }) => (
	<header className={s.header}>
		<div>
			<h1 className={s.title}>ARMAGGEDON V</h1>
			<h2 className={s.subtitle}>
				Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.
			</h2>
		</div>
		<nav className={s.nav}>
			<CustomLink linkTo='/asteroids' linkLabel='Астероиды' />
			<CustomLink linkTo='/destroy' linkLabel='Уничтожение'>
				{destroyDataCount() > 0 ? <div>{destroyDataCount()}</div> : null}
			</CustomLink>
		</nav>
	</header>
);
Header.propTypes = {
	destroyDataCount: PropTypes.func
};
export default Header;
