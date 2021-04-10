import React from 'react';
import s from './AsteroidItem.module.css';
import AsteroidImg from '../../assets/img/asteroid.svg';
import DinoImg from '../../assets/img/dino.svg';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const AsteroidItem = ({
	isHazardous,
	diameterInM,
	name,
	approachDate,
	asteroidId,
	distance: { unit, value }
}) => {
	return (
		<div className={`${s.item} ${isHazardous && s.hazardous}`}>
			<div>
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
					<Link className={s.link} to={asteroidId}>
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
					<button>На уничтожение</button>
				</div>
			</div>
		</div>
	);
};
AsteroidItem.propTypes = {
	isHazardous: PropTypes.bool,
	inLunar: PropTypes.bool,
	diameterInM: PropTypes.string,
	name: PropTypes.string,
	approachDate: PropTypes.string,
	distance: PropTypes.shape({
		unit: PropTypes.string,
		value: PropTypes.string
	}),
	asteroidId: PropTypes.string
};
export default AsteroidItem;
