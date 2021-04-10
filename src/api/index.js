import axios from 'axios';
import { exctractAPIDataList } from './helpers';
const API_KEY = 'rquGDUXJo8pWa2A7wfOt5cxr5J0xZdkfntDg7om8';
const API_URL = 'https://api.nasa.gov/neo/rest/v1';
const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth() + 1;
const currentYear = currentDate.getFullYear();
const startDate = `${currentYear}-${currentMonth}-${currentDay}`;
const startingURL = `${API_URL}/feed/?start_date=${startDate}&end_date=${startDate}&api_key=${API_KEY}`;

export const getAllNEAsteroids = async (nextURLParam = startingURL) => {
	const {
		data: {
			links: { next },
			near_earth_objects: NEO
		}
	} = await axios.get(nextURLParam);
	const exctractedDataList = exctractAPIDataList(NEO);
	window.NEO = exctractedDataList;
	return { data: exctractedDataList, nextUrl: next };
};

export const getNEAsteroidInfoById = async (id) => {
	const { data } = await axios.get(`${API_URL}/neo/${id}?api_key=${API_KEY}`);
	window.BYID = data;
	return data;
};
