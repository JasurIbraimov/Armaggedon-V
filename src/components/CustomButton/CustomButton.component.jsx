import React from 'react';
import s from './CustomButton.module.css';
import PropTypes from 'prop-types';
const CustomButton = ({ btnLabel, ...otherProps }) => (
	<button {...otherProps} className={s.btn}>
		{btnLabel}
	</button>
);
CustomButton.propTypes = {
	btnLabel: PropTypes.string
};
export default CustomButton;
