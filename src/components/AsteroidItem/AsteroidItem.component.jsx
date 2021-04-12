import React from 'react';
import s from './AsteroidItem.module.css';
import AsteroidImg from '../../assets/img/asteroid.svg';
import DinoImg from '../../assets/img/dino.svg';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
// Components
const AsteroidItem = ({
	isHazardous,
	diameterInM,
	name,
	approachDate,
	id,
	distance: { unit, value },
	children
}) => {
	const match = useRouteMatch();
	return (
		<div className={`${s.item} ${isHazardous && s.hazardous}`}>
			<div className={s.imgContainer}>
				<img
					src={AsteroidImg}
					alt='Asteroid falling'
					className={`${s.asteroidImg} ${
						diameterInM >= 850
							? s.biggestAsteroidImg
							: diameterInM >= 300
							? s.biggerAsteroidImg
							: ''
					}`}
				/>
				<img src={DinoImg} alt='Tiny dinosaur' className={s.dinoImg} />
			</div>
			<div className={s.data}>
				<div className={s.info}>
					<Link className={s.link} to={`${match.url}/${id}`}>
						{name}
					</Link>
					<ul>
						<li>
							<p>Дата</p>
							<p>{approachDate}</p>
						</li>
						<li>
							<p>Расстояние</p>
							<p>
								{value} {unit}
							</p>
						</li>
						<li>
							<p>Размер</p>
							<p>{diameterInM} м </p>
						</li>
					</ul>
				</div>
				<div className={s.actions}>
					<div className={s.rate}>
						Оценка: <p>{isHazardous ? 'опасен' : 'не опасен'}</p>
					</div>
					{children}
				</div>
			</div>
		</div>
	);
};
AsteroidItem.propTypes = {
	isHazardous: PropTypes.bool,
	diameterInM: PropTypes.string,
	name: PropTypes.string,
	approachDate: PropTypes.string,
	distance: PropTypes.shape({
		unit: PropTypes.string,
		value: PropTypes.string
	}),
	id: PropTypes.string,
	children: PropTypes.object
};
export default AsteroidItem;
