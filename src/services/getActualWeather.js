import { getIp } from "./getIp";

const FETCH_OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e9c02f08b3msh14f865e23df8789p16712ejsnd0a6f63f625e',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

export async function getActualWeather(){

    // GET USER IP
    const address = await getIp();
    const ip = address.ip;

    const response = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${ip}`, FETCH_OPTIONS)
    const data = await response.json()
    
    // console.log(data);
    
    // DESTRUCTURING DATA OF THE RESPONSE
    const { current, location } = data;
    const { country, localtime, name } = location;
    const { condition, temp_c } = current;
    
    console.log(data)

    return {
        text : condition.text,
        icon : condition.icon,
        temp : temp_c,
        country : country,
        localtime : localtime,
        name: name,
    }


}
