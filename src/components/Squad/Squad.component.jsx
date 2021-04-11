import React from 'react';
import s from './Squad.module.css';
import PropTypes from 'prop-types';
import SquadImg from '../../assets/img/squad.png';
const Squad = ({ whatTODO, ...otherProps }) => {
	return (
		<button {...otherProps} className={s.squad}>
			<img src={SquadImg} alt='Squad' />
		</button>
	);
};
Squad.propTypes = {
	whatTODO: PropTypes.func
};
export default Squad;
