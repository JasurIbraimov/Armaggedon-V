import React from 'react';
import s from './ApproachList.module.css';
import PropTypes from 'prop-types';
// Components
import CustomEmpty from '../CustomEmpty/CustomEmpty.component';
const ApproachList = ({ title, dataList, isNamed }) => (
	<div className={s.listContainer}>
		<h3 className={s.title}>{title}</h3>
		<ul className={s.list}>
			{dataList.length > 0 ? (
				dataList.map((d, i) => (
					<li key={i}>
						<p>
							<span>Дата:</span>
							<span>{d.date}</span>
						</p>
						<p>
							<span>Расстояние:</span>
							<span>
								{d.distance.value} {d.distance.unit}
							</span>
						</p>
						<p>
							<span>Скорость:</span>
							<span>{d.velocityInKmH} км/час</span>
						</p>
						{!isNamed && (
							<p>
								<span>Орбита:</span>
								<span>{d.orbitingBody}</span>
							</p>
						)}
					</li>
				))
			) : (
				<CustomEmpty emptyLabel='Cближения отсутствуют' />
			)}
		</ul>
	</div>
);
ApproachList.propTypes = {
	title: PropTypes.string,
	dataList: PropTypes.array,
	isNamed: PropTypes.bool
};
export default ApproachList;
