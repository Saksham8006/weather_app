import React from 'react';
import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect'; // Import extend-expect for DOM matchers
import Forecast from '../components/Forecast';

describe('Forecast Component', () => {
  const mockData = {
    list: [
      {
        dt_txt: '2023-07-15 12:00:00',
        main: { temp: 25 },
        weather: [{ description: 'clear sky' }]
      },
      // Add more forecast data as needed
    ]
  };

  test('renders forecast information correctly', () => {
    render(<Forecast data={mockData} />);
    expect(screen.getByText(/5-Day Forecast/i)).toBeInTheDocument();
    expect(screen.getByText(/Jul 15 2023/i)).toBeInTheDocument();
    expect(screen.getByText(/25°C/i)).toBeInTheDocument();
    expect(screen.getByText(/clear sky/i)).toBeInTheDocument();
  });
});