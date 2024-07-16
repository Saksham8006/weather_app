// src/tests/App.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import axios from 'axios';
import App from '../App';

jest.mock('axios');

describe('App Component', () => {
  test('renders the main heading', () => {
    render(<App />);
    const heading = screen.getByText((content, element) => {
      return element.textContent === 'Weather App';
    });
    expect(heading).toBeInTheDocument();
  });

  test('renders default cities buttons', () => {
    render(<App />);
    const cities = ['Delhi', 'Mumbai', 'Kolkata', 'Chennai', 'Bangalore', 'Noida', 'Pune', 'Hyderabad'];
    cities.forEach(city => {
      expect(screen.getByText(city)).toBeInTheDocument();
    });
  });

  test('fetches and displays weather data on city button click', async () => {
    const mockWeatherData = {
      data: {
        name: 'Delhi',
        main: { temp: 25, humidity: 60, pressure: 1012, feels_like: 27, temp_min: 20, temp_max: 30 },
        weather: [{ description: 'clear sky' }],
        wind: { speed: 10 },
      }
    };

    axios.get.mockResolvedValueOnce(mockWeatherData);
    render(<App />);

    const cityButton = screen.getByText('Delhi');
    fireEvent.click(cityButton);

    const temp = await screen.findByText(/25°C/);
    expect(temp).toBeInTheDocument();
  });

  // test('fetches and displays forecast data on city button click', async () => {
  //   const mockForecastData = {
  //     data: {
  //       city: { name: 'Delhi' },
  //       list: [
  //         {
  //           dt_txt: '2023-07-15 12:00:00',
  //           main: { temp: 25 },
  //           weather: [{ description: 'clear sky' }]
  //         },
  //         // Add more forecast data as needed
  //       ]
  //     }
  //   };

  //   axios.get.mockResolvedValueOnce(mockForecastData);
  //   render(<App />);

  //   const cityButton = screen.getByText('Delhi');
  //   fireEvent.click(cityButton);

  //   await waitFor(() => {
  //     const forecast = screen.getByText(/5-Day Forecast/);
  //     expect(forecast).toBeInTheDocument();

  //     const tempElement = screen.getByText(/25°C/);
  //     expect(tempElement).toBeInTheDocument();

  //     const descriptionElement = screen.getByText(/clear sky/i);
  //     expect(descriptionElement).toBeInTheDocument();
  //   });
  // });
});