const apiKey = '25c8d7b27492611405db569bf9ac91be';
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

searchButton.addEventListener('click', () => {
  // console.log("Clicked!");
  const location = locationInput.value;
  if (location) {
    fetchWeather(location);
    // console.log("Location received!")
  }
});

locationInput.addEventListener('keydown', (event) => {
  // console.log("Key pressed");
  if (event.key === 'Enter') {
    const location = locationInput.value;
    if (location) {
      fetchWeather(location);
      // console.log("Location received!");
    }
  }
});

function fetchWeather(location) {
  const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      locationElement.textContent = data.name;
      temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
      // In the future: Make an if (or when/case?) statement using data.main. If main == "rain", change the background image to a rain image.
      // You need to add an id name background to the body element in html file. Add a const called backgroundElement = document.getElementById('background')
      // Add the if statment here?? Then, be sure to take each result and insertHTMLAdjacent? to call it back into the html file.
      descriptionElement.textContent = data.weather[0].description;
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });
}
