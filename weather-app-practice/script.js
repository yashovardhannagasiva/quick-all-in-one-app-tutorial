const apiKey = '';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

function getWeather(location) {
    let city, country;

    if (location === 'kavali') {
        city = 'Kavali';
        country = 'IN'; 
    } else if (location === 'washingtondc') {
        city = 'Washington';
        country = 'US'; 
    }
    
    const url = `${baseUrl}?q=${city},${country}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function displayWeather(data) {
    const cityNameElement = document.getElementById('city-name');
    const temperatureElement = document.getElementById('temperature');
    const descriptionElement = document.getElementById('description');

    cityNameElement.textContent = data.name;
    temperatureElement.textContent = `Temperature: ${data.main.temp}°C`;
    descriptionElement.textContent = `Description: ${data.weather[0].description}`;
}


getWeather('kavali');
