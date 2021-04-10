import React from 'react';
import ErrorImg from '../../assets/img/error.svg';
import s from './CustomError.module.css';
import PropTypes from 'prop-types';
const CustomError = ({ errorLabel }) => {
	return (
		<div className={s.box}>
			<img className={s.errorImg} src={ErrorImg} alt='Dinosaur Error' />
			<p>{errorLabel}</p>
		</div>
	);
};
CustomError.propTypes = {
	errorLabel: PropTypes.string
};

export default CustomError;
