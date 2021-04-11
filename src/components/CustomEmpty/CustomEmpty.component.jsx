import React from 'react';
import s from './CustomEmpty.module.css';
import PropTypes from 'prop-types';
const CustomEmpty = ({ emptyLabel }) => (
	<div className={s.empty}>
		<p>{emptyLabel}</p>
	</div>
);
CustomEmpty.propTypes = {
	emptyLabel: PropTypes.string
};
export default CustomEmpty;
