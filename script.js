const apiKey = '132dee2cbd6c23785be8f76be68be09e';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';

const weather = document.querySelector('#weatherInfo');
const searchBox = document.querySelector('.input-box');
const searchBtn = document.querySelector('.search-btn');

const weatherIcon = document.querySelector('.weather-icon');

async function checkweather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    let data = await response.json();
    console.log(data);

    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humidity').innerHTML = data.main.humidity + ' %';
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km / h';

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "img/clouds.png";
    }
    else if (data.weather[0].main == "Clear"){
        weatherIcon.src = "img/clear.png";
    }
    else if (data.weather[0].main == "Rain"){
        weatherIcon.src = "img/rain.png";
    }
    else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src = "img/drizzle.png";
    }
    else if (data.weather[0].main == "Mist"){
        weatherIcon.src = "img/mist.png";
    }
    else if (data.weather[0].main == "Snow"){
        weatherIcon.src = "img/snow.png";
    }

    document.querySelector('#weatherInfo').style.display = "block";

};

searchBtn.addEventListener('click', () => {
    checkweather(searchBox.value);
});
