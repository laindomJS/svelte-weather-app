import { getIp } from "./getIp";

const FETCH_OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

export async function getFutureWeather(){

    // GET USER IP
    const address = await getIp();
    const ip = address.ip;

    const response = await fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${ip}&days=5`, FETCH_OPTIONS)
    const data = await response.json()
    
    // DESTRUCTURING DATA
    const { forecast } = data;
    const daysArr = forecast.forecastday;
    return daysArr;
}