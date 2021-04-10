import React, { Component } from 'react';
import s from './asteroids.module.css';
import { getAllNEAsteroids } from '../../api';
import PropTypes from 'prop-types';
// Components
import AsteroidItem from '../../components/AsteroidItem/AsteroidItem.component';
import CustomLoader from '../../components/CustomLoader/CustomLoader.component';
import CustomError from '../../components/CustomError/CustomError.component';
class AsteroidsPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: window.NEO,
			nextUrl: '',
			isFetching: false,
			onlyHazardousMode: false,
			distanceMode: 'km',
			isErrored: false
		};
	}
	componentDidMount = async () => {
		// await this.setAsteroidsData();
		// let isScrolling;
		// window.addEventListener('scroll', () => {
		// 	if (
		// 		window.innerHeight + document.documentElement.scrollTop ===
		// 		document.documentElement.offsetHeight
		// 	) {
		// 		window.clearTimeout(isScrolling);
		// 		isScrolling = setTimeout(() => {
		// 			console.log('Scrolling has stopped.');
		// 		}, 1000);
		// 	}
		// 	if (isScrolling) {
		// 		console.log('Scrolling');
		// 		this.setState(() => ({ isFetching: true }));
		// 		console.log(this.state.isFetching);
		// 	}
		// });
	};
	setAsteroidsData = async () => {
		this.setState({ isFetching: true });
		try {
			const { data, nextUrl } = await getAllNEAsteroids();
			this.setState((prev) => ({
				data: [...prev.data, ...data],
				nextUrl
			}));
		} catch (e) {
			console.log(e);
			this.setState({ isErrored: true });
		} finally {
			this.setState({ isFetching: false });
		}
	};
	setDistanceMode = (e) => {
		const { value } = e.target;
		this.setState({ distanceMode: value });
	};
	toggleHazardousMode = () => {
		this.setState((prev) => ({
			onlyHazardousMode: !prev.onlyHazardousMode
		}));
	};
	render() {
		console.log(this.props);
		const { match, history } = this.props;
		const {
			onlyHazardousMode,
			distanceMode,
			data,
			isFetching,
			isErrored
		} = this.state;
		const loading = isFetching ? (
			<CustomLoader loaderLabel='В поисках мищени...' />
		) : (
			''
		);
		const errored = isErrored ? (
			<CustomError errorLabel='Ошибка! Мы не смогли найти врагов.' />
		) : (
			''
		);
		const correctData =
			data.length > 0
				? onlyHazardousMode
					? data.filter((item) => item.isHazardous)
					: data
				: null;
		const loadedDataWithNoError =
			!loading && !errored
				? correctData &&
				  correctData.map(({ id, distanceModes, ...otherProps }) => (
						<AsteroidItem
							key={id}
							asteroidId={id}
							distance={distanceModes[distanceMode]}
							{...otherProps}
						/>
				  ))
				: '';
		return (
			<div className={s.pageContainer}>
				<div className={s.filters}>
					<div>
						<input onChange={this.toggleHazardousMode} type='checkbox' />
						<label>Показать только опасные</label>
					</div>
					<div>
						<label>Расстояние</label>
						<button
							value='km'
							className={distanceMode === 'km' ? s.activeFilter : ''}
							onClick={this.setDistanceMode}>
							в километрах
						</button>
						,
						<button
							value='lunar'
							className={distanceMode === 'lunar' ? s.activeFilter : ''}
							onClick={this.setDistanceMode}>
							в дистанциях до луны
						</button>
					</div>
				</div>
				{loadedDataWithNoError}
				{loading}
				{errored}
			</div>
		);
	}
}
AsteroidsPage.propTypes = {
	history: PropTypes.object,
	match: PropTypes.object
};
export default AsteroidsPage;
