import React from 'react';
import s from './CustomLoader.module.css';
import PropTypes from 'prop-types';
const CustomLoader = ({ loaderLabel }) => (
	<div className={s.box}>
		<div className={s.loader}>
			<div className={s.loaderInner}>
				<div></div>
				<div>
					<div></div>
				</div>
			</div>
		</div>
		<p>{loaderLabel}</p>
	</div>
);
CustomLoader.propTypes = {
	loaderLabel: PropTypes.string
};
export default CustomLoader;
