import React, { useState, useEffect, useRef } from 'react';
import s from './asteroids.module.css';
import { getAllNEAsteroids } from '../../api';
import PropTypes from 'prop-types';
// Components
import AsteroidItem from '../../components/AsteroidItem/AsteroidItem.component';
import CustomLoader from '../../components/CustomLoader/CustomLoader.component';
import CustomError from '../../components/CustomError/CustomError.component';
import CustomButton from '../../components/CustomButton/CustomButton.component';
const AsteroidsPage = ({ addToDestroyData, checkDestroyData }) => {
	const elementRef = useRef();
	const [data, setData] = useState([]);
	const [fetchingURL, setFetchingURL] = useState('');
	const [nextTargetURL, setNextTargetURL] = useState('');
	const [isFetching, setIsFetching] = useState(false);
	const [isBottom, setIsBottom] = useState(true);
	const [isErrored, setIsErrored] = useState(false);
	const [onlyHazardousMode, setOnlyHazardousMode] = useState(false);
	const [distanceMode, setDistanceMode] = useState('km');

	const handleDistanceModeChange = (e) => {
		const { value } = e.target;
		setDistanceMode(value);
	};
	const toggleHazardousMode = () => {
		setOnlyHazardousMode((prev) => !prev);
	};

	const handleScroll = () => {
		const scroller = elementRef.current;
		if (scroller.scrollHeight - scroller.scrollTop === scroller.clientHeight) {
			setIsBottom(true);
			setNextTargetURL(fetchingURL);
		}
	};

	useEffect(() => {
		const loadingData = () => {
			setIsFetching(true);
			getAllNEAsteroids(nextTargetURL)
				.then(({ dataList, next }) => {
					setData((prev) => [...prev, ...dataList]);
					setFetchingURL(next);
				})
				.catch((e) => {
					setIsErrored(true);
				})
				.finally(() => {
					setIsFetching(false);
				});
		};

		if (isBottom) {
			loadingData();
			setIsBottom(false);
		}
	}, [isBottom, nextTargetURL]);
	const correctData =
		data.length > 0
			? onlyHazardousMode
				? data.filter((item) => item.isHazardous)
				: data
			: null;
	const loading = isFetching && (
		<CustomLoader loaderLabel='В поисках мишени...' />
	);
	const errored = isErrored && (
		<CustomError errorLabel='Ошибка! Мы не смогли найти врага.' />
	);
	return (
		<div className={s.pageContainer}>
			<div className={s.filters}>
				<div>
					<input onChange={toggleHazardousMode} type='checkbox' />
					<label>Показать только опасные</label>
				</div>
				<div>
					<label>Расстояние</label>
					<button
						value='km'
						className={distanceMode === 'km' ? s.activeFilter : ''}
						onClick={handleDistanceModeChange}>
						в километрах
					</button>
					,
					<button
						value='lunar'
						className={distanceMode === 'lunar' ? s.activeFilter : ''}
						onClick={handleDistanceModeChange}>
						в дистанциях до луны
					</button>
				</div>
			</div>
			<div className={s.dataContainer} onScroll={handleScroll} ref={elementRef}>
				<div className={s.data}>
					{correctData &&
						correctData.map((d, index) => (
							<AsteroidItem
								key={index}
								distance={d.distanceModes[distanceMode]}
								{...d}>
								<CustomButton
									onClick={() => addToDestroyData(d)}
									btnLabel={
										checkDestroyData(d.id) ? 'Помиловать' : 'На уничтожение'
									}
								/>
							</AsteroidItem>
						))}
					{loading || errored}
				</div>
			</div>
		</div>
	);
};
AsteroidsPage.propTypes = {
	addToDestroyData: PropTypes.func,
	checkDestroyData: PropTypes.func
};
export default AsteroidsPage;
