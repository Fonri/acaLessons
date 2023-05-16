const weatherContainer = document.getElementById('weather-container');
const weatherDescription = document.getElementById('weather-description');

async function displayWeather() {
  const resp = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Yerevan&appid=9c0b8ca84d666c645e2cc5c39bcd0f41');
  const data = await resp.json();

  const temperature = Math.round(data.main.temp - 273.15);
  const description = data.weather[0].description;

  weatherContainer.innerHTML = temperature + '°C';
  weatherDescription.innerHTML = description;
}

displayWeather();