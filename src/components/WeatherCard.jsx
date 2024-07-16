import React from 'react';

const WeatherCard = ({ data }) => {
  console.log("data", data)
  return (
    <div className="bg-white px-7 py-4 border border-white rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-2">{data.name}</h2>
      <p className="text-6xl text-blue-500">{data.main.temp}°C</p>
      <p className="text-lg capitalize">{data.weather[0].description}</p>
      <p className="text-sm">Updated as of {new Date().toLocaleTimeString()}</p>
      <div className="mt-4 flex justify-around gap-[30px]">
        <div>
          <p className='font-[600]'>Humidity</p>
          <p className="text-lg text-blue-500">{data.main.humidity} %</p>
        </div>
        <div>
          <p className='font-[600]'>Wind</p>
          <p className="text-lg text-blue-500">{data.wind.speed} km/h</p>
        </div>

        <div>
          <p className='font-[600]'>Barometer</p>
          <p className="text-lg text-blue-500">{data.main.pressure} mb</p>
        </div>
        <div>
          <p className='font-[600]'>Feels Like</p>
          <p className="text-lg text-blue-500">{data.main.feels_like} °C</p>
        </div>
        <div>
          <p className='font-[600]'>Min Temperature</p>
          <p className="text-lg text-blue-500">{data.main.temp_min} °C</p>
        </div>
        <div>
          <p className='font-[600]'>Max. Temperature</p>
          <p className="text-lg text-blue-500">{data.main.temp_max} °C</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
