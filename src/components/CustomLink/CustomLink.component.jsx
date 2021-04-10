import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import s from './CustomLink.module.css';
import PropTypes from 'prop-types';

const CustomLink = ({ linkTo, linkLabel }) => {
	const match = useRouteMatch({
		path: linkTo,
		exact: true
	});
	return (
		<Link className={match ? s.active : ''} to={linkTo}>
			{linkLabel}
		</Link>
	);
};

// Prop Types
CustomLink.propTypes = {
	linkTo: PropTypes.string,
	linkLabel: PropTypes.string
};
export default CustomLink;
