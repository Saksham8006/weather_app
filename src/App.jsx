import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';
import Forecast from './components/Forecast';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const API_KEY = 'abcb369b121fe222dd4ed2c879c8ea83';
  const defaultCities = ['Delhi', 'Mumbai', 'Kolkata', 'Chennai', 'Bangalore', 'Noida', 'Pune', 'Hyderabad'];

  useEffect(() => {
    getWeather(defaultCities[0]);
    getForecast(defaultCities[0]);
  }, []);

  const getWeather = async (city) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      // console.log("weather", response)
      setWeatherData(response.data);
    } catch (error) {
      console.log('Error fetching weather data:', error);
    }
  };

  const getForecast = async (city) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
      // console.log("forecast", response)
      setForecastData(response.data);
    } catch (error) {
      console.log('Error fetching forecast data:', error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getWeather(city);
    getForecast(city);
  };

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8 mt-4">Weather <span className='text-blue-600'>App</span></h1>
      <div className="relative ml-[150px]"><svg className="hidden lg:block absolute lg:bottom-[12px] lg:left-[-166px]"
        width="225" height="16" viewBox="0 0 225 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M224.931 15.1987C151.063 1.40293 47.4825 6.23252 4.92601 10.3718L0.241161 6.21004C91.4615 -6.66766 188.043 6.83677 224.931 15.1987Z" fill="#2563EB"></path></svg></div>
      <form onSubmit={handleSearch} className="mb-4 ">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          className="p-2 border rounded mr-2 min-w-[700px]  border-black"
        />
        <button type="submit" className="py-2 px-5 bg-blue-500 text-white rounded">Search</button>
      </form>
      <div className="mb-6">
        {defaultCities.map((cityName) => (
          <button
            key={cityName}
            onClick={() => {
              setCity(cityName);
              getWeather(cityName);
              getForecast(cityName);
            }}
            className="py-1 px-3 bg-white rounded m-2 border-blue-800 border duration-500 hover:scale-105 transition-all"
          >
            {cityName}
          </button>
        ))}
      </div>
      {weatherData && <WeatherCard data={weatherData} />}
      {forecastData && <Forecast data={forecastData} />}
    </div>
  );
};

export default App;
