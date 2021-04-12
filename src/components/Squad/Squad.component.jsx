import React from 'react';
import s from './Squad.module.css';
import PropTypes from 'prop-types';
import SquadImg from '../../assets/img/squad.png';
const Squad = ({ commandLabel, ...otherProps }) => {
	return (
		<button data-command={commandLabel} {...otherProps} className={s.squad}>
			<img src={SquadImg} alt='Squad' />
		</button>
	);
};
Squad.propTypes = {
	commandLabel: PropTypes.string
};
export default Squad;
