import React from 'react';
import s from './Header.module.css';
// Components
import CustomLink from '../CustomLink/CustomLink.component';
const Header = () => (
	<header className={s.header}>
		<div>
			<h1 className={s.title}>ARMAGGEDON V</h1>
			<h2 className={s.subtitle}>
				Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.
			</h2>
		</div>
		<nav className={s.nav}>
			<CustomLink linkTo='/' linkLabel='Астероиды' />
			<CustomLink linkTo='/destroy' linkLabel='Уничтожение' />
		</nav>
	</header>
);

export default Header;
