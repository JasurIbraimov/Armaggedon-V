export const exctractAPIDataList = (apiObj) => {
	return Object.values(apiObj)[0].map((i) => ({
		name: i.name.replace(/[(|)]/g, ''),
		id: i.id,
		isHazardous: i.is_potentially_hazardous_asteroid,
		diameterInM: Math.round(
			i.estimated_diameter.meters.estimated_diameter_min
		).toLocaleString(),
		approachDate: new Date(
			i.close_approach_data[0].epoch_date_close_approach
		).toLocaleString(),
		distanceModes: {
			km: {
				unit: 'км',
				value: Math.round(
					i.close_approach_data[0].miss_distance.kilometers
				).toLocaleString()
			},
			lunar: {
				unit: '',
				value: Math.round(
					i.close_approach_data[0].miss_distance.lunar
				).toLocaleString()
			}
		}
	}));
};
