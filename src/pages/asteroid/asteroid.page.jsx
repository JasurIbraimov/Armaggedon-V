import React, { Component } from 'react';
import s from './asteroid.module.css';
import { getNEAsteroidInfoById } from '../../api';
import PropTypes from 'prop-types';
// Components
import CustomLoader from '../../components/CustomLoader/CustomLoader.component';
import CustomError from '../../components/CustomError/CustomError.component';
class AsteroidPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			isFetching: false,
			isErrored: false
		};
	}
	componentDidMount = async () => {
		await this.setAsteroidData();
	};
	setAsteroidData = async () => {
		const { match } = this.props;

		this.setState({ isFetching: true });
		try {
			const data = await getNEAsteroidInfoById(match.params.asteroidId);
			this.setState({ data });
		} catch (e) {
			console.log(e);
			this.setState({ isErrored: true });
		} finally {
			this.setState({ isFetching: false });
		}
	};

	render() {
		console.log(this.props);
		const { data, isFetching, isErrored } = this.state;
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
		const correctData = data.length > 0 ? data : null;

		// const loadedDataWithNoError =
		// 	!loading && !errored
		// 		? correctData &&
		// 		  correctData.map(({ id, distanceModes, ...otherProps }) => (
		// 				<AsteroidItem
		// 					key={id}
		// 					asteroidId={id}
		// 					distance={distanceModes[distanceMode]}
		// 					{...otherProps}
		// 				/>
		// 		  ))
		// 		: '';
		return (
			<div className={s.pageContainer}>
				{loading}
				{errored}
			</div>
		);
	}
}
AsteroidPage.propTypes = {
	history: PropTypes.object,
	match: PropTypes.object
};
export default AsteroidPage;
