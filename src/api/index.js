import axios from 'axios';
import { exctractAPIDataList, exctractAPIDataByID } from './helpers';
const API_KEY = process.env.REACT_APP_NASA_API_KEY;
console.log(process.env);
const API_URL = 'https://api.nasa.gov/neo/rest/v1';
const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth() + 1;
const currentYear = currentDate.getFullYear();
const startDate = `${currentYear}-${currentMonth}-${currentDay}`;
export const startingURL = `${API_URL}/feed/?start_date=${startDate}&end_date=${startDate}&api_key=${API_KEY}`;

export const getAllNEAsteroids = async (nextURLParam) => {
	let URL = nextURLParam.length === 0 ? startingURL : nextURLParam;
	const {
		data: {
			links: { next },
			near_earth_objects: NEO
		}
	} = await axios.get(URL);
	const dataList = exctractAPIDataList(NEO);
	return { dataList, next };
};

export const getNEAsteroidInfoById = async (id) => {
	const { data } = await axios.get(`${API_URL}/neo/${id}?api_key=${API_KEY}`);
	return exctractAPIDataByID(data);
};
