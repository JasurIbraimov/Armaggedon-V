import React from 'react';
import s from './destroy.module.css';
import PropTypes from 'prop-types';
// Components
import Squad from '../../components/Squad/Squad.component';
import CustomEmpty from '../../components/CustomEmpty/CustomEmpty.component';
const DestroyPage = ({ destroyData, handleDestroy }) => {
	return (
		<div className={s.pageContainer}>
			{destroyData.length > 0 ? (
				<div className={s.tableContainer}>
					<table className={s.table}>
						<thead>
							<tr>
								<th>Имя</th>
								<th>Размер (м)</th>
								<th>Оценка опасности</th>
							</tr>
						</thead>
						<tbody>
							{destroyData.map((d) => (
								<tr key={d.id}>
									<td>{d.name}</td>
									<td>{d.diameterInM}</td>
									<td className={d.isHazardous ? s.hazardous : s.safe}>
										{d.isHazardous ? 'Опасен' : 'Не опасен'}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			) : (
				<div className={s.emptyContainer}>
					<CustomEmpty emptyLabel='Мишени отсутствуют' />
				</div>
			)}
			<div className={s.squadBtn}>
				<Squad onClick={handleDestroy} />
			</div>
		</div>
	);
};

DestroyPage.propTypes = {
	destroyData: PropTypes.array,
	handleDestroy: PropTypes.func
};
export default DestroyPage;
