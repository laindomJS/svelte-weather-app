import { getIp } from "./getIp";

const FETCH_OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

export default async function getWeatherHighlights (){

    // GET USER IP
    const address = await getIp();
    const ip = address.ip;

    const response = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${ip}`, FETCH_OPTIONS)
    const data = await response.json()
        
    const { current } = data;
    const { wind_kph, humidity, vis_km, pressure_mb } = current;

    return {
        wind : wind_kph,
        humidity : humidity,
        visibility: vis_km,
        pressure : pressure_mb,
    }

}