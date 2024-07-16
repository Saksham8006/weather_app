import React from 'react';
import { render, screen } from '@testing-library/react';
import WeatherCard from '../components/WeatherCard';

describe('WeatherCard Component', () => {
  const mockData = {
    name: 'Delhi',
    main: { temp: 25, humidity: 60, pressure: 1012, feels_like: 27, temp_min: 20, temp_max: 30 },
    weather: [{ description: 'clear sky' }],
    wind: { speed: 10 },
  };

  test('renders weather information correctly', () => {
    render(<WeatherCard data={mockData} />);
    expect(screen.getByText(/delhi/i)).toBeInTheDocument();
    expect(screen.getByText(/25°C/i)).toBeInTheDocument();
    expect(screen.getByText(/clear sky/i)).toBeInTheDocument();
    expect(screen.getByText(/60 %/i)).toBeInTheDocument();
    expect(screen.getByText(/10 km\/h/i)).toBeInTheDocument();
  });
});