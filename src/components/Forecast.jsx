import React from 'react';

// Mapping weather conditions to emojis
const getWeatherEmoji = (description) => {
  switch (description.toLowerCase()) {
    case 'clear sky':
      return '☀️'; // Sunny
    case 'few clouds':
      return '🌤️'; // Few clouds
    case 'scattered clouds':
      return '🌥️'; // Scattered clouds
    case 'broken clouds':
      return '☁️'; // Broken clouds
    case 'overcast clouds':
      return '☁️☁️'; // Overcast clouds
    case 'shower rain':
      return '🌧️'; // Shower rain
    case 'light rain':
      return '🌧️'; // Light rain
    case 'moderate rain':
      return '🌧️'; // Light rain
    case 'rain':
      return '🌦️'; // Rain
    case 'thunderstorm':
      return '⛈️'; // Thunderstorm
    case 'heavy intensity rain':
      return '⛈️'; // heavy intensity rain
    case 'snow':
      return '❄️'; // Snow
    case 'mist':
      return '🌫️'; // Mist
    default:
      return '❓'; // Unknown
  }
};

const Forecast = ({ data }) => {
  const dailyData = data.list.filter((reading) => reading.dt_txt.includes("12:00:00"));

  console.log("daily data", dailyData)

  return (
    <div className="w-full max-w-[800px] my-6">
      <h2 className="text-2xl font-bold mb-3">5-Day Forecast</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
        {dailyData.map((reading, index) => (
          console.log("dailyData", dailyData[0].temp),
          <div key={index} className="bg-white p-3 rounded-lg shadow-lg text-center">
            <p className="font-[600] text-[17px]">{new Date(reading.dt_txt).toDateString()}</p>
            <p className="text-4xl">{getWeatherEmoji(reading.weather[0].description)}</p>
            <p className="text-[18px] font-[600] text-blue-500">{reading.main.temp}°C</p>
            <p className="capitalize text-[15px]">{reading.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
