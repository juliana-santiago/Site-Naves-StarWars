import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Test React link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Test React/i);
  expect(linkElement).toBeInTheDocument();
});
