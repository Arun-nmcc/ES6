import * as elements from 'elements.js'
import { Http } from './http.js';
import { WeatherData, WeatherDataHandler } from './weather-data.js';


elements.ELEMENT_SEARCH_BUTTON.addEventListener('click', searchWeather)


function searchWeather() {

    const cityName = elements.ELEMENT_SEARCHED_CITY.value.trim();
    if (cityName.length == 0) {
        return alert('enter the name of the city');
    }
    const API_ID = '42f8d4d91a1a85039b310a61a298380a';
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&appid=' + API_ID;

    Http.fetchData(url).then(reponseData => {
console.log(cityName, reponseData.weather[0].description,reponseData.main.temp);

        const weather = new WeatherData(cityName, reponseData.weather[0].description);
        const proxy = new Proxy(weather, WeatherDataHandler);
        proxy.temperature = reponseData.main.temp;
        updateWeather(proxy);
        
        console.log(weather);


    }
  ).catch((erro => console.log('error message ' + erro)));

    function updateWeather(weatherData) {
        console.log(weatherData);
        elements.ELEMENT_WEATHER_CITY.textContent = weatherData.cityName;
        elements.ELEMENT_WEATHER_DESCRIPTION.textContent = weatherData.description;
        elements.ELEMENT_WEATHER_TEMPERATURE.textContent = weatherData.temperature;
        elements.ELEMENT_WEATHER_BOX.style.display = 'block'
    }



} 