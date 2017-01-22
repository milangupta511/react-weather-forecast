import axios from 'axios';
const API_KEY='257c49f88370bfdac511fe2fc3f3b16d';
const WEATHER_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER='FETCH_WEATHER';

export function fetchWeather(city){
	const url = `${WEATHER_URL}&q=${city}`;
	// Here, request is a Promise. Since we used ReduxPromise as a middleware, it will automatically parse It
	// to give a JSON object containing a response in REDUCER
	const request = axios.get(url);
 return({
 	type: FETCH_WEATHER,
 	payload:request
 })
}