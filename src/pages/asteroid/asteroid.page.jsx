import React, { useState, useEffect } from 'react';
import s from './asteroid.module.css';
import { getNEAsteroidInfoById } from '../../api';
import { useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import AsteroidImg from '../../assets/img/asteroid.svg';
// Components
import CustomLoader from '../../components/CustomLoader/CustomLoader.component';
import CustomError from '../../components/CustomError/CustomError.component';
import CustomButton from '../../components/CustomButton/CustomButton.component';
import ApproachList from '../../components/ApproachList/ApproachList.component';
const AsteroidPage = ({ addToDestroyData, checkDestroyData }) => {
	const [data, setData] = useState(null);
	const [isFetching, setIsFetching] = useState(false);
	const [isErrored, setIsErrored] = useState(false);
	const match = useRouteMatch();
	useEffect(() => {
		const loadingData = () => {
			setIsFetching(true);
			getNEAsteroidInfoById(match.params.asteroidId)
				.then((data) => {
					setData(data);
				})
				.catch((e) => {
					console.log(e);
					setIsErrored(true);
				})
				.finally(() => {
					setIsFetching(false);
				});
		};
		loadingData();
	}, []);
	const loading = isFetching && (
		<CustomLoader loaderLabel='В поисках мишени...' />
	);
	const errored = isErrored && (
		<CustomError errorLabel='Ошибка! Мы не смогли найти врага.' />
	);
	return (
		<div className={s.pageContainer}>
			{data ? (
				<div className={s.infoCard}>
					<div className={s.selfInfo}>
						<div>
							<h2>{data.name}</h2>
							<p className={data.isHazardous ? s.hazardous : s.safe}>
								Оценка опасности:
								<span>{data.isHazardous ? 'опасен' : 'не опасен'}</span>
							</p>
							<p>
								Размер: <span>{data.diameterInM} м</span>
							</p>
							<div className={s.imgContainer}>
								<img
									className={
										data.diameterInM >= 850
											? s.biggestAsteroidImg
											: data.diameterInM >= 300
											? s.biggerAsteroidImg
											: s.smallAsteroidImg
									}
									src={AsteroidImg}
									alt='Asteroid'
								/>
							</div>
						</div>
						<div>
							<CustomButton
								onClick={() => addToDestroyData(data)}
								btnLabel={
									checkDestroyData(data.id) ? 'Помиловать' : 'На уничтожение'
								}
							/>
						</div>
					</div>
					<div className={s.approachInfo}>
						<ApproachList
							title='Сближения с Землей:'
							isNamed
							dataList={data.approachData.filter(
								(item) => item.orbitingBody === 'Earth'
							)}
						/>
						<ApproachList
							title='Остальные сближения:'
							dataList={data.approachData.filter(
								(item) => item.orbitingBody !== 'Earth'
							)}
						/>
					</div>
				</div>
			) : (
				loading || errored
			)}
		</div>
	);
};
AsteroidPage.propTypes = {
	addToDestroyData: PropTypes.func,
	checkDestroyData: PropTypes.func
};
export default AsteroidPage;
