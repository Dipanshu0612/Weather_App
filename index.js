let city=document.getElementById("city");
let SearchBtn=document.getElementById("searchbtn")
let icon=document.getElementById("icon");
let cityname=document.getElementById("city_name");
let stateinfo=document.getElementById("state_info");
let temp=document.getElementById("temp");
let feellike=document.getElementById("feellike");
let condition=document.getElementById("condition");
let humidity=document.getElementById("humidity");
let pressure=document.getElementById("Pressure");
let wind=document.getElementById("wind");
let uv=document.getElementById("uv");
let winddir=document.getElementById("winddir");
let prep=document.getElementById("prep");


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '028160db64msha1178896fda9ebbp1a3f7ejsn99fb6319c50f',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

const searchCity = async() => {
    let cityinfo = city.value;
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${cityinfo}`;
    try {
        const response = await fetch(url, options);
        if(response.status == 400){
            alert("No matching city was found! Please enter a valid city name.");
            return;
        }
        const result = await response.json();
        console.log(result);
        cityname.innerHTML = result.location.name;
        stateinfo.innerHTML = result.location.region;
        temp.innerHTML = Math.ceil(result.current.temp_c) + "°C";
        feellike.innerHTML = result.current.feelslike_c + "°C";
        condition.innerHTML = result.current.condition.text;
        humidity.innerHTML = result.current.humidity;
        pressure.innerHTML = result.current.pressure_mb;
        wind.innerHTML = result.current.wind_kph + " km/h";
        uv.innerHTML = result.current.uv;
        prep.innerHTML = result.current.precip_mm;
        winddir.innerHTML = result.current.wind_dir;
        if(result.current.condition.text == "Sunny" || result.current.condition.text == "Clear"){
            icon.src = "./images/clear.png";
        }
        else if(result.current.condition.text == "Partly Cloudy"){
            icon.src = "./images/clouds.png";
        }
        else if(result.current.condition.text == "Cloudy"){
            icon.src = "./images/cloudy.png";
        }
        else if(result.current.condition.text == "Drizzle"){
            icon.src = "./images/drizzle.png";
        }
        else if(result.current.condition.text == "Rain"){
            icon.src = "./images/rain.png";
        }
        else if(result.current.condition.text == "Snow"){
            icon.src = "./images/snow.png";
        }
        else if(result.current.condition.text == "Mist"){
            icon.src = "./images/mist.png";
        }
        else if(result.current.condition.text == "Thunderstorm"){
            icon.src = "./images/thunderstorm.png";
        }

    } catch (error) {
        console.error(error);
    }
}
SearchBtn.onclick = () => searchCity();