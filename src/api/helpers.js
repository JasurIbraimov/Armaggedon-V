export const exctractAPIDataList = (apiObj) =>
	Object.values(apiObj)[0].map((i) => ({
		name: i.name.replace(/[(|)]/g, ''),
		id: i.id,
		isHazardous: i.is_potentially_hazardous_asteroid,
		diameterInM: Math.round(
			i.estimated_diameter.meters.estimated_diameter_min
		).toLocaleString(),
		approachDate: new Date(
			i.close_approach_data[0].epoch_date_close_approach
		).toLocaleDateString(),
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

export const exctractAPIDataByID = (apiObj) => ({
	name: apiObj.name.replace(/[(|)]/g, ''),
	isHazardous: apiObj.is_potentially_hazardous_asteroid,
	id: apiObj.id,
	diameterInM: Math.round(
		apiObj.estimated_diameter.meters.estimated_diameter_min
	).toLocaleString(),
	approachData: apiObj.close_approach_data.map((d) => ({
		date: new Date(d.epoch_date_close_approach).toLocaleDateString(),
		distance: {
			unit: 'км',
			value: Math.round(d.miss_distance.kilometers).toLocaleString()
		},
		orbitingBody: d.orbiting_body,
		velocityInKmH: Math.round(
			d.relative_velocity.kilometers_per_hour
		).toLocaleString()
	}))
});
