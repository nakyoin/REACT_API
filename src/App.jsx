import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Weather from './components/Weather';
import Info from './components/Info';

function App() {
const API_KEY = "f14b65edf1d049bb0d0448c7fe0f304a";
const [temp, setTemp] = useState(undefined);
const [city, setCity] = useState('');
const [country, setCountry] = useState(undefined);
const [sunrise, setSunrise] = useState(undefined);
const [sunset, setSunset] = useState(undefined);
const [error, setError] = useState(undefined);


function changeSun(sun) {
  let date = new Date();
  date.setTime(sun);
  let sun_date = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
  return sun_date;
}


const gettingWeather = async (event) => {
event.preventDefault();
const city = event.target.elements.city.value;
if (city) {
const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=${API_KEY}&units=metric`);
const data = await api_url.json();
console.log(data);

setTemp(data.main.temp);
setCity(data.name);
setCountry(data.sys.country);
setSunrise(changeSun(data.sys.sunrise));
setSunset(changeSun(data.sys.sunset));
setError(undefined);
} else {
  setTemp(undefined);
  setCity(undefined);
  setCountry(undefined);
  setSunrise(undefined);
  setSunset(undefined);
  setError('Введите название города');
  }
}






return(
  <div className='wrapper'>
    <div className='horizon'>
      <div className='flex'>
      <div className='card2'>
        <div className='opac'>
        <h2>Погода</h2>
        </div>
      </div>
  <div className='card'>
  <Form a={gettingWeather} />
  <Weather temp ={temp} city={city} country={country} sunrise={sunrise} sunset={sunset} error={error} />
  </div>
  </div>
  </div>
  </div>
)
}

export default App;
