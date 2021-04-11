import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import s from './CustomLink.module.css';
import PropTypes from 'prop-types';

const CustomLink = ({ linkTo, linkLabel, children }) => {
	const match = useRouteMatch({
		path: linkTo,
		exact: true
	});
	return (
		<Link className={`${s.link} ${match ? s.active : ''}`} to={linkTo}>
			{linkLabel}
			{children}
		</Link>
	);
};

// Prop Types
CustomLink.propTypes = {
	linkTo: PropTypes.string,
	linkLabel: PropTypes.string,
	children: PropTypes.object
};
export default CustomLink;
